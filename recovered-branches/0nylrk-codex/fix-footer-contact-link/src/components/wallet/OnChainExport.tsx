
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Wallet, Info, Check, ChevronRight, ArrowUpRight } from "lucide-react",
=======
import React, { useState } from &quot;react&quot;;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Wallet, Info, Check, ChevronRight, ArrowUpRight } from &quot;lucide-react&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
<<<<<<< HEAD
  TooltipTrigger} from "@/components/ui/tooltip",
import { useToast } from "@/hooks/use-toast",
import { useAuth } from "@/hooks/useAuth",
=======
  TooltipTrigger} from &quot;@/components/ui/tooltip&quot;;
import { useToast } from &quot;@/hooks/use-toast&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export function OnChainExport() {
  const [isConnected, setIsConnected] = useState(false),
  const [isExporting, setIsExporting] = useState(false),
  const [exportStatus, setExportStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle'),
  const { toast } = useToast(),
  const { user } = useAuth(),
=======
import React, {_useState} from "react";
import {_Tooltip, _TooltipContent, _TooltipProvider, _TooltipTrigger} from "@/components/ui/tooltip";

export function OnChainExport() {_const [isConnected, _setIsConnected] = useState(false);
  const [isExporting, _setIsExporting] = useState(false);
  const [exportStatus, _setExportStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle');
  const { toast} = useToast();
  const {_user} = useAuth();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  const _handleConnectWallet = async () => {_try {
      // Check if wallet is available
<<<<<<< HEAD
      const ethereum = (window as any).ethereum,
      if (!ethereum) {
        toast({
<<<<<<< HEAD
          title: "Wallet not detected",
          description: "Please install MetaMask or another Ethereum wallet to use this feature",
          variant: "destructive"
        }),
        return
=======
          title: &quot;Wallet not detected&quot;,
          description: &quot;Please install MetaMask or another Ethereum wallet to use this feature&quot;,
          variant: &quot;destructive&quot;
        });
=======
      const _ethereum = (window as any).ethereum;
      if (!ethereum) {
        toast({
          title: "Wallet not detected", _description: "Please install MetaMask or another Ethereum wallet to use this feature", _variant: "destructive"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }
      
      // Request accounts
<<<<<<< HEAD
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' }),
      const address = accounts[0],
      
      // Sign message to verify ownership
      const message = `Zion AI Marketplace wallet verification\nAddress: ${address}\nTime: ${new Date().toISOString()}`,
      await ethereum.request({
        method: 'personal_sign',
        params: [address, message]
      }),
      
      setIsConnected(true),
      toast({
<<<<<<< HEAD
        title: "Wallet connected",
        description: `Wallet ${address.slice(0, 6)}...${address.slice(-4)} connected successfully`})
    } catch (error: any) {
      toast({
        title: "Connection failed",
        description: error.message || "Could not connect to wallet",
        variant: "destructive"
      })
=======
        title: &quot;Wallet connected&quot;,
        description: `Wallet ${address.slice(0, 6)}...${address.slice(-4)} connected successfully`});
    } catch (error: any) {
      toast({
        title: &quot;Connection failed&quot;,
        description: error.message || &quot;Could not connect to wallet&quot;,
        variant: &quot;destructive&quot;
      });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
      const _accounts = await ethereum.request({_method: 'eth_requestAccounts'});
      const _address = accounts[0];
      
      // Sign message to verify ownership
      const _message = `Zion AI Marketplace wallet verification\nAddress: ${_address}\nTime: ${_new Date().toISOString()}`;
      await ethereum.request({_method: 'personal_sign', _params: [address, _message]});
      
      setIsConnected(true);
      toast({_title: "Wallet connected", _description: `Wallet ${address.slice(0, _6)}...${_address.slice(-4)} connected successfully`});
    } catch (error: unknown) {_toast({
        title: "Connection failed", _description: error.message || "Could not connect to wallet", _variant: "destructive"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },
  
<<<<<<< HEAD
  const handleExportTokens = async () => {
    setIsExporting(true),
    setExportStatus('processing'),
    
    try {
      // Simulate token export
      await new Promise(resolve => setTimeout(resolve, 2000)),
=======
  const _handleExportTokens = async () => {_setIsExporting(true);
    setExportStatus('processing');
    
    try {
      // Simulate token export
      await new Promise(resolve => setTimeout(resolve, _2000));
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      setExportStatus('success'),
      toast({
<<<<<<< HEAD
<<<<<<< HEAD
        title: "Tokens exported",
        description: "Your ZION$ tokens have been exported to your wallet"})
=======
        title: &quot;Tokens exported&quot;,
        description: &quot;Your ZION$ tokens have been exported to your wallet&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } catch (error: any) {
      setExportStatus('error'),
      toast({
<<<<<<< HEAD
        title: "Export failed",
        description: error.message || "Could not export tokens",
        variant: "destructive"
      })
=======
        title: &quot;Export failed&quot;,
        description: error.message || &quot;Could not export tokens&quot;,
        variant: &quot;destructive&quot;
      });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsExporting(false)
    }
  },
=======
        title: "Tokens exported", _description: "Your ZION$ tokens have been exported to your wallet"});
    } catch (error: unknown) {_setExportStatus('error');
      toast({
        title: "Export failed", _description: error.message || "Could not export tokens", _variant: "destructive"});
    } finally {_setIsExporting(false);}
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  return (
    <Card>
      <CardHeader>
<<<<<<< HEAD
        <CardTitle className=&quot;flex items-center gap-2&quot;>
          {isConnected ? (
            <Wallet className=&quot;h-5 w-5 text-primary&quot; />
=======
        <CardTitle className="flex items-center gap-2">
          {_isConnected ? (
            <Wallet className="h-5 w-5 text-primary" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
<<<<<<< HEAD
        {isConnected ? (
          <div className=&quot;space-y-4&quot;>
            <div className=&quot;flex justify-between text-sm&quot;>
=======
        {_isConnected ? (
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
                disabled={_isExporting}
              >
<<<<<<< HEAD
                {isExporting ? &quot;Processing...&quot; : &quot;Export Tokens&quot;}
                {!isExporting && <ArrowUpRight className=&quot;ml-2 h-4 w-4&quot; />}
=======
                {_isExporting ? "Processing..." : "Export Tokens"}
                {_!isExporting && <ArrowUpRight className="ml-2 h-4 w-4" />}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </Button>
            )}
          </div>
        ) : (
          <div className=&quot;space-y-2&quot;>
            <p className=&quot;text-sm text-muted-foreground mb-3&quot;>
              Connect your web3 wallet to export tokens to the blockchain.
            </p>
<<<<<<< HEAD
            <Button onClick={handleConnectWallet} className=&quot;w-full&quot;>
=======
            <Button onClick={_handleConnectWallet} className="w-full">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              Connect Wallet
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
