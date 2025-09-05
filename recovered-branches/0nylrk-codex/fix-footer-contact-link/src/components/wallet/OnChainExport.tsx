
import React, { useState } from &quot;react&quot;;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Wallet, Info, Check, ChevronRight, ArrowUpRight } from &quot;lucide-react&quot;;
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger} from &quot;@/components/ui/tooltip&quot;;
import { useToast } from &quot;@/hooks/use-toast&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;

export function OnChainExport() {
  const [isConnected, setIsConnected] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [exportStatus, setExportStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle');
  const { toast } = useToast();
  const { user } = useAuth();
  
  const handleConnectWallet = async () => {
    try {
      // Check if wallet is available
      const ethereum = (window as any).ethereum;
      if (!ethereum) {
        toast({
          title: &quot;Wallet not detected&quot;,
          description: &quot;Please install MetaMask or another Ethereum wallet to use this feature&quot;,
          variant: &quot;destructive&quot;
        });
        return;
      }
      
      // Request accounts
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      const address = accounts[0];
      
      // Sign message to verify ownership
      const message = `Zion AI Marketplace wallet verification\nAddress: ${address}\nTime: ${new Date().toISOString()}`;
      await ethereum.request({
        method: 'personal_sign',
        params: [address, message]
      });
      
      setIsConnected(true);
      toast({
        title: &quot;Wallet connected&quot;,
        description: `Wallet ${address.slice(0, 6)}...${address.slice(-4)} connected successfully`});
    } catch (error: any) {
      toast({
        title: &quot;Connection failed&quot;,
        description: error.message || &quot;Could not connect to wallet&quot;,
        variant: &quot;destructive&quot;
      });
    }
  };
  
  const handleExportTokens = async () => {
    setIsExporting(true);
    setExportStatus('processing');
    
    try {
      // Simulate token export
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setExportStatus('success');
      toast({
        title: &quot;Tokens exported&quot;,
        description: &quot;Your ZION$ tokens have been exported to your wallet&quot;});
    } catch (error: any) {
      setExportStatus('error');
      toast({
        title: &quot;Export failed&quot;,
        description: error.message || &quot;Could not export tokens&quot;,
        variant: &quot;destructive&quot;
      });
    } finally {
      setIsExporting(false);
    }
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className=&quot;flex items-center gap-2&quot;>
          {isConnected ? (
            <Wallet className=&quot;h-5 w-5 text-primary&quot; />
          ) : (
            <Wallet className=&quot;h-5 w-5&quot; />
          )}
          On-chain Export
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className=&quot;h-4 w-4 text-muted-foreground cursor-help&quot; />
              </TooltipTrigger>
              <TooltipContent>
                <p className=&quot;max-w-xs&quot;>Export your ZION$ tokens to an external blockchain wallet</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardTitle>
        <CardDescription>Export your ZION$ to an external wallet</CardDescription>
      </CardHeader>
      <CardContent>
        {isConnected ? (
          <div className=&quot;space-y-4&quot;>
            <div className=&quot;flex justify-between text-sm&quot;>
              <span>Available to export:</span>
              <span className=&quot;font-medium&quot;>250 ZION$</span>
            </div>
            {exportStatus === 'success' ? (
              <Button className=&quot;w-full bg-green-600 hover:bg-green-700&quot; disabled>
                <Check className=&quot;mr-2 h-4 w-4&quot; />
                Tokens Exported
              </Button>
            ) : (
              <Button 
                className=&quot;w-full&quot; 
                onClick={handleExportTokens} 
                disabled={isExporting}
              >
                {isExporting ? &quot;Processing...&quot; : &quot;Export Tokens&quot;}
                {!isExporting && <ArrowUpRight className=&quot;ml-2 h-4 w-4&quot; />}
              </Button>
            )}
          </div>
        ) : (
          <div className=&quot;space-y-2&quot;>
            <p className=&quot;text-sm text-muted-foreground mb-3&quot;>
              Connect your web3 wallet to export tokens to the blockchain.
            </p>
            <Button onClick={handleConnectWallet} className=&quot;w-full&quot;>
              Connect Wallet
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
