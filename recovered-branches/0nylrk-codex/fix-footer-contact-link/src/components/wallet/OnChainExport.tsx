<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/wallet/OnChainExport.tsx

<<<<<<< HEAD

import React, { useState } from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",

=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/wallet/OnChainExport.tsx
=======

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React, { useState } from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Wallet, Info, Check, ChevronRight, ArrowUpRight} from "lucide-react";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {useToast} from "@/hooks/use-toast";
import {useAuth} from "@/hooks/useAuth";
export function OnChainExport() {;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/wallet/OnChainExport.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/wallet/OnChainExport.tsx
=======
  const [isConnected, setIsConnected] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [exportStatus, setExportStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle');
  const { toast } = useToast();
  const { user } = useAuth();
import React, { useState } from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button";
import { Wallet, Info, Check, ChevronRight, ArrowUpRight } from "lucide-react";
import {
  Tooltip;
  TooltipContent;
  TooltipProvider;
  TooltipTrigger} from "@/components/ui/tooltip",
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
export function OnChainExport() {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const [isConnected, setIsConnected] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [exportStatus, setExportStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle'),
  const { toast } = useToast();
  const { user } = useAuth();
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/wallet/OnChainExport.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/wallet/OnChainExport.tsx
import React, { useState } from './react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { Wallet, Info, Check, ChevronRight, ArrowUpRight } from './lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components / ui / tooltip';
import { use_toast } from '@/hooks / use - toast';
import { use_auth } from '@/hooks / use_auth';
export /**
 * OnChainExport - Function description
 */
function OnChainExport() {
  const [is_connected, setIsConnected] = useState (false);
  const [is_exporting, setIsExporting] = useState (false);
  const [export_status, setExportStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle');
  const { toast } = use_toast ();
  const { user } = use_auth ();
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/wallet/OnChainExport.tsx

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/wallet/OnChainExport.tsx
  const handleConnectWallet = async () => {
    try {
      // Check if wallet is available;
      const ethereum = (window as any).ethereum;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/wallet/OnChainExport.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/wallet/OnChainExport.tsx
  const handleConnectWallet = async () => {;
    try {;
      // Check if wallet is available;
      const ethereum = (window as any).ethereum;
      if (!ethereum) {;
        toast({;
          title: "Wallet not detected",;
          description: "Please install MetaMask or another Ethereum wallet to use this feature",;
          variant: "destructive";
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/wallet/OnChainExport.tsx

        });
        return;
      }

      // Request accounts

<<<<<<< HEAD
=======

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
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' }),
      const address = accounts[0],
      
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' }),
      const address = accounts[0],
      
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      // Sign message to verify ownership
      const message = `Zion AI Marketplace wallet verification\nAddress: ${address}\nTime: ${new Date().toISOString()}`
      await ethereum.request({
        method: 'personal_sign'
        params: [address, message]
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

      }),
      
      setIsConnected(true),


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      });
      setIsConnected(true);
      }),
      
      setIsConnected(true),
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      toast({
        title: "Wallet connected"
        description: `Wallet ${address.slice(0, 6)}...${address.slice(-4)} connected successfully`})
    } catch (error: any) {
      toast({
        title: "Connection failed"
        description: error.message |"Could not connect to wallet"
        variant: "destructive"
      })
    }
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }
  const handleExportTokens = async () => {
    setIsExporting(true);
    setExportStatus('processing');
    try {
      // Simulate token export
      await new Promise(resolve => setTimeout(resolve, 2000));
      setExportStatus('success');
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  },
  
  const handleExportTokens = async () => {
    setIsExporting(true),
    setExportStatus('processing'),
    
    try {
      // Simulate token export
      await new Promise(resolve => setTimeout(resolve, 2000)),
      
      setExportStatus('success'),
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      toast({
        title: "Tokens exported"
        description: "Your ZION$ tokens have been exported to your wallet"})
    } catch (error: any) {
      setExportStatus('error')
      toast({
        title: "Export failed"
        description: error.message |"Could not export tokens"
        variant: "destructive"
      })
<<<<<<< HEAD
<<<<<<< HEAD
    } finally {
      setIsExporting(false)

=======

========
        });
        return;
      }
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/wallet/OnChainExport.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/wallet/OnChainExport.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/wallet/OnChainExport.tsx
    } finally {
      setIsExporting (false);
    }
  }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/wallet/OnChainExport.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/wallet/OnChainExport.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/wallet/OnChainExport.tsx

=======
    } finally {
      setIsExporting(false)

    }
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/wallet/OnChainExport.tsx
  return (
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <Card>;
      <CardHeader>;
        <CardTitle className="flex items-center gap-2">;
          {isConnected ? (;
            <Wallet className="h-5 w-5 text-primary" />;
<<<<<<< HEAD
          ) : (;
=======
          ) :(;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            <Wallet className="h-5 w-5" />;
          )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/wallet/OnChainExport.tsx

=======
=======
    } finally {
      setIsExporting(false)
    };
  };
    }
  }

  },
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {isConnected ? (
            <Wallet className="h-5 w-5 text-primary" />
          ) : (
            <Wallet className="h-5 w-5" />
          )}
          On-chain Export
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="h-4 w-4 text-muted-foreground cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs">Export your ZION$ tokens to an external blockchain wallet</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardTitle>
        <CardDescription>Export your ZION$ to an external wallet</CardDescription>
      </CardHeader>
      <CardContent>
        {isConnected ? (
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span>Available to export:</span>
              <span className="font-medium">250 ZION$</span>
            </div>
            {exportStatus === 'success' ? (
              <Button className="w-full bg-green-600 hover:bg-green-700" disabled>
                <Check className="mr-2 h-4 w-4" />
                Tokens Exported
              </Button>
            ) : (
              <Button
                className="w-full"
                onClick={handleExportTokens}
                disabled={isExporting}
              >
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                {isExporting ? "Processing..." : "Export Tokens"}
                {!isExporting && <ArrowUpRight className="ml-2 h-4 w-4" />}
              </Button>
            )}
          </div>
        ) : (
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground mb-3">
              Connect your web3 wallet to export tokens to the blockchain.
            </p>
            <Button onClick={handleConnectWallet} className="w-full">
              Connect Wallet
            </Button>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
};
;

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        )}
      </CardContent>
    </Card>
  )
}
};
;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
export function OnChainExport() {;
  const [isConnected, setIsConnected] = useState(false),;
  const [isExporting, setIsExporting] = useState(false),;
  const [exportStatus, setExportStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle'),;
  const { toast } = useToast(),;
  const { user } = useAuth(),;
  const handleConnectWallet = async () => {;
    try {;
      // Check if wallet is available;
      const ethereum = (window as any).ethereum,;
      if (!ethereum) {;
        toast({;
          title: "Wallet not detected",;
          description: "Please install MetaMask or another Ethereum wallet to use this feature",;
          variant: "destructive";
        }),;
        return;
      }
;
      // Request accounts;
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' }),;
      const address = accounts[0],;
      // Sign message to verify ownership;
      const message = `Zion AI Marketplace wallet verification\nAddress: ${address}\nTime: ${new Date().toISOString()}`,;
      await ethereum.request({;
        method: 'personal_sign',;
        params: [address, message];
      }),;
      setIsConnected(true),;
      toast({;
        title: "Wallet connected",;
        description: `Wallet ${address.slice(0, 6)}...${address.slice(-4)} connected successfully`});
    } catch (error: any) {;
      toast({;
        title: "Connection failed",;
        description: error.message || "Could not connect to wallet",;
        variant: "destructive";
      });
    }
  },;
  const handleExportTokens = async () => {;
    setIsExporting(true),;
    setExportStatus('processing'),;
    try {;
      // Simulate token export;
      await new Promise(resolve => setTimeout(resolve, 2000)),;
      setExportStatus('success'),;
      toast({;
        title: "Tokens exported",;
        description: "Your ZION$ tokens have been exported to your wallet"});
    } catch (error: any) {;
      setExportStatus('error'),;
      toast({;
        title: "Export failed",;
        description: error.message || "Could not export tokens";
        variant: "destructive";
      });
    } finally {;
      setIsExporting(false);
    }
  };
  return (;
    <Card>;
      <CardHeader>;
        <CardTitle className="flex items-center gap-2">;
          {isConnected ? (;
            <Wallet className="h-5 w-5 text-primary" />;
          ) : (;
            <Wallet className="h-5 w-5" />;
          )}
<<<<<<< HEAD

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/wallet/OnChainExport.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          On-chain Export;
          <TooltipProvider>;
            <Tooltip>;
              <TooltipTrigger asChild>;
                <Info className="h-4 w-4 text-muted-foreground cursor-help" />;
              </TooltipTrigger>;
              <TooltipContent>;
                <p className="max-w-xs">Export your ZION$ tokens to an external blockchain wallet</p>;
<<<<<<< HEAD
<<<<<<< HEAD
;
  return (
    <Card>;
      <CardHeader>;
        <CardTitle className="flex items - center gap - 2">;
          {is_connected ? (
            <Wallet className="h - 5 w - 5 text - primary" />) : (
            <Wallet className="h - 5 w - 5" />)}
          On - chain Export;
          <TooltipProvider>;
            <Tooltip>;
              <TooltipTrigger as_child>;
                <Info className="h - 4 w - 4 text - muted - foreground cursor - help" />;
              </TooltipTrigger>;
              <TooltipContent>;
                <p className="max - w-xs">Export your ZION$ tokens to an external blockchain wallet</p>;
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </TooltipContent>;
            </Tooltip>;
          </TooltipProvider>;
        </CardTitle>;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/wallet/OnChainExport.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/wallet/OnChainExport.tsx
      </CardContent>;
    </Card>;
  );
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/wallet/OnChainExport.tsx
<<<<<<< HEAD
;

=======

=======
;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
        <CardDescription > Export your ZION$ to an external wallet</CardDescription>;
      </CardHeader>;
      <CardContent>;
        {is_connected ? (
          <div className="space - y-4">;
            <div className="flex justify - between text - sm">;
              <span > Available to export:</span>;
              <span className="font - medium">250 ZION$</span>;
            </div>;
            {export_status === 'success' ? (
              <Button className="w - full bg - green - 600 hover:bg - green - 700" disabled>;
                <Check className="mr - 2 h - 4 w - 4" />;
                Tokens Exported;
              </Button>) : (
              <Button;
                className="w - full";
                on_click={handleExportTokens}
                disabled={is_exporting}
              >;
                {is_exporting ? "Processing..." : "Export Tokens"}
                {!is_exporting && <ArrowUpRight className="ml - 2 h - 4 w - 4" />}
              </Button>)}
          </div>) : (
          <div className="space - y-2">;
            <p className="text - sm text - muted - foreground mb - 3">;
              Connect your web3 wallet to export tokens to the blockchain.;
            </p>;
            <Button on_click={handleConnectWallet} className="w - full">;
              Connect Wallet;
            </Button>;
          </div>)}
      </CardContent>;
    </Card>);
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <CardDescription>Export your ZION$ to an external wallet</CardDescription>;
      </CardHeader>;
      <CardContent>;
        {isConnected ? (;
          <div className="space-y-4">;
            <div className="flex justify-between text-sm">;
              <span>Available to export:</span>;
              <span className="font-medium">250 ZION$</span>;
            </div>;
            {exportStatus === 'success' ? (;
              <Button className="w-full bg-green-600 hover:bg-green-700" disabled>;
                <Check className="mr-2 h-4 w-4" />;
                Tokens Exported;
              </Button>;
<<<<<<< HEAD
            ) :(;
              <Button ;
                className="w-full" ;
                onClick={handleExportTokens} ;
                disabled={isExporting}
              >;
                {isExporting ? "Processing..." :"Export Tokens"}
                {!isExporting && <ArrowUpRight className="ml-2 h-4 w-4" />}
              </Button>;
            )}
          </div>;
        ) :(;
=======
            ) : (;
              <Button;
                className="w-full";
                onClick={handleExportTokens} ;
                disabled={isExporting}
              >;
                {isExporting ? "Processing..." : "Export Tokens"}
                {!isExporting && <ArrowUpRight className="ml-2 h-4 w-4" />}
              </Button>
            )}
          </div>;
        ) : (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <div className="space-y-2">;
            <p className="text-sm text-muted-foreground mb-3">;
              Connect your web3 wallet to export tokens to the blockchain.;
            </p>;
            <Button onClick={handleConnectWallet} className="w-full">;
              Connect Wallet;
            </Button>;
          </div>;
        )}
      </CardContent>;
    </Card>;
<<<<<<< HEAD
  ),; import {
  Tooltip;
TooltipContent;
TooltipProvider;
export function OnChainExport () {
  const [isConnected, setIsConnected] = useState (false);
const [isExporting, setIsExporting] = useState (false);
const [exportStatus, setExportStatus] = useState<'idle' | 'processing' | 'success' | 'error'> ('idle');
const {
  toast 
}= useToast ();
const {
  user 
}= useAuth ();
try {
  //Check if wallet is available return;
}//Request accounts 
}
};
setExportStatus ('success');
toast ({
  
}catch (error: any) {
  setExportStatus ('error');
toast ({
  
}finally {
  setIsExporting (false) 
}
};
h-5 w-5"/>) 
}On-chain Export <TooltipProvider> <Tooltip> <TooltipTrigger asChild> <Info className=" h-4 w-4 text-muted-foreground cursor-help"/> </TooltipTrigger> <TooltipContent> <p className=" max-w-xs">Export your ZION$ tokens to an external blockchain wallet</p> </TooltipContent> </Tooltip> </TooltipProvider> </CardTitle> <CardDescription>Export your ZION$ to an external wallet</CardDescription> </CardHeader> <CardContent> <span>Available to export:</span> <span className=" font-medium">250 ZION$</span> </div> {
  exportStatus === 'success' ? (<Button className=" w-full bg-green-600 hover:bg-green-700"disabled> <Check className=" mr-2 h-4 w-4"/> Tokens Exported </Button>) : (<Button className=" w-full"onClick= {
  handleExportTokens 
}disabled= {
  isExporting 
}> </Button>) 
}</div>) : (<div className=" space-y-2"> <p className=" text-sm text-muted-foreground mb-3" > Connect your web3 wallet to export tokens to the blockchain. </p> Connect Wallet </Button> </div>) 
}</CardContent> </Card>) 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/wallet/OnChainExport.tsx
=======
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
