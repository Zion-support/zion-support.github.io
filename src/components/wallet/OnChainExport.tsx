
<<<<<<< HEAD
import React, { useState } from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
=======
import React, { useState } from &quot;react&quot;;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import { Wallet, Info, Check, ChevronRight, ArrowUpRight } from 'lucide-react'
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
  
  const handleConnectWallet = async () => {
    try {
      // Check if wallet is available
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
        return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }
      
      // Request accounts
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
    }
  },
  
  const handleExportTokens = async () => {
    setIsExporting(true),
    setExportStatus('processing'),
    
    try {
      // Simulate token export
      await new Promise(resolve => setTimeout(resolve, 2000)),
      
      setExportStatus('success'),
      toast({
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
  )
}
