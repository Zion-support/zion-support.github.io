




  const handleConnectWallet = async () => {;
    try {;
      // Check if wallet is available;
      const ethereum = (window as any).ethereum;
      if (!ethereum) {;
        toast({;
          title: "Wallet not detected",;
          description: "Please install MetaMask or another Ethereum wallet to use this feature",;
          variant: "destructive";

import { Button } from "@/components/ui/button",
import { Wallet, Info, Check, ChevronRight, ArrowUpRight } from "lucide-react",
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger} from "@/components/ui/tooltip",
import { useToast } from "@/hooks/use-toast",
import { useAuth } from "@/hooks/useAuth",
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
          title: "Wallet not detected"
          description: "Please install MetaMask or another Ethereum wallet to use this feature"
          variant: "destructive"
        }),
        return
      }
      // Request accounts
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
      const address = accounts[0];
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' }),
      const address = accounts[0],
      
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' }),
      const address = accounts[0],
      




        });
        return;
      }
      // Check condition
if ( {) {
  $2
}
        toast ({
          title: "Wallet not detected",
          description: "Please install MetaMask or another Ethereum wallet to use this feature",
          variant: "destructive";
        });
        return;
      }
      // Request accounts;
      const accounts = await ethereum.request ({ method: 'eth_requestAccounts' }),
      const address = accounts[0];
;
      // Sign message to verify ownership;
      const message = `Zion AI Marketplace wallet verification\n_address: ${address}\n_time: ${new Date ().toISOString ()}`,
      await ethereum.request ({
        method: 'personal_sign',
        params: [address, message];
      });
;
      setIsConnected (true);
      toast ({
        title: "Wallet connected",
        description: `Wallet ${address.slice (0, 6)}...${address.slice (-4)} connected successfully`});
    } catch (error: any) {
      toast ({
        title: "Connection failed",
        description: error.message || "Could not connect to wallet",
        variant: "destructive";
      });
    }
  }
;
  const handleExportTokens = async () => {
    setIsExporting (true);
    setExportStatus ('processing');
;
    try {
      // Simulate token export;
      await new Promise (resolve => set_timeout (resolve, 2000));
;
      setExportStatus ('success');
      toast ({
        title: "Tokens exported",
        description: "Your ZION$ tokens have been exported to your wallet"});
    } catch (error: any) {
      setExportStatus ('error'),
      toast ({
        title: "Export failed",
        description: error.message || "Could not export tokens",
        variant: "destructive";
      });
    } finally {
      setIsExporting (false);
    }
  }
      // Request accounts;
      const accounts = await ethereum && ethereum.request({ method: 'eth_requestAccounts' }),;
      const address = accounts[0];
      // Sign message to verify ownership;
      const message = `Zion AI Marketplace wallet verification\nAddress: ${address}\nTime: ${new Date().toISOString()}`,;
      await ethereum && ethereum.request({;
        method: 'personal_sign',;
        params: [address, message];
      });
      setIsConnected(true);
      toast({;
        title: "Wallet connected",;
        description: `Wallet ${address && address.slice(0, 6)}...${address && address.slice(-4)} connected successfully`});
    } catch (error: any) {;
      toast({;
        title: "Connection failed",;
        description: error && error.message || "Could not connect to wallet",;
        variant: "destructive";
      });
    }
  };
  const handleExportTokens = async () => {;
    setIsExporting(true);
    setExportStatus('processing');
    try {;
      // Simulate token export;
      await new Promise(resolve => setTimeout(resolve, 2000));
      setExportStatus('success');
      toast({;
        title: "Tokens exported",;
        description: "Your ZION$ tokens have been exported to your wallet"});
    } catch (error: any) {;
      setExportStatus('error'),;
      toast({;
        title: "Export failed",;
        description: error && error.message || "Could not export tokens",;
        variant: "destructive";
      });
    } finally {;
      setIsExporting(false);
    }
  };
    } finally {
      setIsExporting(false)

    }

  return (

import React, { useState } from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Wallet, Info, Check, ChevronRight, ArrowUpRight } from "lucide-react",;
import {;
  Tooltip,;
  TooltipContent,;
  TooltipProvider,;
  TooltipTrigger} from "@/components/ui/tooltip",;
import { useToast } from "@/hooks/use-toast",;
import { useAuth } from "@/hooks/useAuth",;
;
export function OnChainExport() {;
  const [isConnected, setIsConnected] = useState(false),;
  const [isExporting, setIsExporting] = useState(false),;
  const [exportStatus, setExportStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle'),;
  const { toast } = useToast(),;
  const { user } = useAuth(),;
  ;
  const handleConnectWallet = async () => {;
    try {;
      // Check if wallet is available;
      const ethereum = (window as any).ethereum,;
      if (!ethereum) {;
        toast({;
          title:"Wallet not detected",;
          description:"Please install MetaMask or another Ethereum wallet to use this feature",;
          variant:"destructive";
        }),;
        return,;
      }
      ;
      // Request accounts;
      const accounts = await ethereum.request({ method:'eth_requestAccounts' }),;
      const address = accounts[0],;
      ;
      // Sign message to verify ownership;
      const message = `Zion AI Marketplace wallet verification\nAddress:${address}\nTime:${new Date().toISOString()}`,;
      await ethereum.request({;
        method:'personal_sign',;
        params:[address, message];
      }),;
      ;
      setIsConnected(true),;
      toast({;
        title:"Wallet connected",;
        description:`Wallet ${address.slice(0, 6)}...${address.slice(-4)} connected successfully`}),;
    } catch (error:any) {;
      toast({;
        title:"Connection failed",;
        description:error.message || "Could not connect to wallet",;
        variant:"destructive";
      }),;
    }
  },;
  ;
  const handleExportTokens = async () => {;
    setIsExporting(true),;
    setExportStatus('processing'),;
    ;
    try {;
      // Simulate token export;
      await new Promise(resolve => setTimeout(resolve, 2000)),;
      ;
      setExportStatus('success'),;
      toast({;
        title:"Tokens exported",;
        description:"Your ZION$ tokens have been exported to your wallet"}),;
    } catch (error:any) {;
      setExportStatus('error'),;
      toast({;
        title:"Export failed",;
        description:error.message || "Could not export tokens",;
        variant:"destructive";
      }),;
    } finally {;
      setIsExporting(false),;
    }
  },;
  ;
  return (;
    <Card>;
      <CardHeader>;
        <CardTitle className="flex items-center gap-2">;
          {isConnected ? (;
            <Wallet className="h-5 w-5 text-primary" />;
          ) :(;
            <Wallet className="h-5 w-5" />;

          )}
    } finally {
      setIsExporting(false)
    };
  };
    }
  }





  const [isExporting, setIsExporting] = useState(false),;}
  const [exportStatus, setExportStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle'),;}


              <TooltipContent>;
                <p className="max-w-xs">Export your ZION$ tokens to an external blockchain wallet</p>;






