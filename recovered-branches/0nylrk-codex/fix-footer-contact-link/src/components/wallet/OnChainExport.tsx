<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React, { useState } from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Wallet, Info, Check, ChevronRight, ArrowUpRight} from "lucide-react";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {useToast} from "@/hooks/use-toast";
import {useAuth} from "@/hooks/useAuth";
export function OnChainExport() {;
<<<<<<< HEAD

=======
<<<<<<< HEAD
  const [isConnected, setIsConnected] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [exportStatus, setExportStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle');
  const { toast } = useToast();
  const { user } = useAuth();
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React, { useState } from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button";
import { Wallet, Info, Check, ChevronRight, ArrowUpRight } from "lucide-react";
<<<<<<< HEAD

import {
  Tooltip;
  TooltipContent;}
  TooltipProvider;}
  TooltipTrigger} from \"@/components/ui/tooltip\",
import { useToast } from \"@/hooks/use-toast\";
import { useAuth } from \"@/hooks/useAuth\";
export function OnChainExport() {
=======
import {
<<<<<<< HEAD
  Tooltip,
  TooltipContent,
  TooltipProvider,
=======
  Tooltip;
  TooltipContent;
  TooltipProvider;
>>>>>>> merged-prs-20250907-203621
  TooltipTrigger} from "@/components/ui/tooltip",
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
export function OnChainExport() {
<<<<<<< HEAD
  const [isConnected, setIsConnected] = useState($2);
  const [isExporting, setIsExporting] = useState($2);
  const [exportStatus, setExportStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle'),
  const { toast } = useToast($2);
  const { user } = useAuth($2);
  const handleConnectWallet = $2;
      if (!ethereum) {
        toast($2);
        return
      }
      // Request accounts
      const accounts = await ethereum.request($2);
      const address = $2;
      // Sign message to verify ownership
      const message = $2;
      await ethereum.request($2);
      setIsConnected($2);
      toast({
        title: "Wallet connected",
        description: `Wallet ${address.slice(0, 6)}...${address.slice(-4)} connected successfully`})
    } catch (error: any) {
      toast({
=======
=======

<<<<<<< HEAD
import React, { useState } from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button";
import { Wallet, Info, Check, ChevronRight, ArrowUpRight } from "lucide-react";

import {
  Tooltip;
  TooltipContent;}
  TooltipProvider;}
  TooltipTrigger} from \"@/components/ui/tooltip\",
import { useToast } from \"@/hooks/use-toast\";
import { useAuth } from \"@/hooks/useAuth\";
export function OnChainExport() {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const [isConnected, setIsConnected] = useState(false);
  const [isExporting, setIsExporting] = useState(false);}
  const [exportStatus, setExportStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle'),}
  const { toast } = useToast();
  const { user } = useAuth();
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const handleConnectWallet = async () => {
    try {
      // Check if wallet is available;
      const ethereum = (window as any).ethereum;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
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
      
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      // Sign message to verify ownership
      const message = `Zion AI Marketplace wallet verification\nAddress: ${address}\nTime: ${new Date().toISOString()}`
      await ethereum.request({
        method: 'personal_sign'
        params: [address, message]

<<<<<<< HEAD
      toast({
        title: "Wallet connected"
        description: `Wallet ${address.slice(0, 6)}...${address.slice(-4)} connected successfully`})
    } catch (error: any) {
      toast({
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      }),
      
      setIsConnected(true),


<<<<<<< HEAD
      });
      setIsConnected(true);
      }),
      
      setIsConnected(true),
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      toast({
        title: "Wallet connected"
        description: `Wallet ${address.slice(0, 6)}...${address.slice(-4)} connected successfully`})
    } catch (error: any) {
      toast({
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        title: "Connection failed"
        description: error.message |"Could not connect to wallet"
        variant: "destructive"
      })
    }

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
  }
  const handleExportTokens = async () => {
    setIsExporting(true);
    setExportStatus('processing');
    try {
      // Simulate token export
      await new Promise(resolve => setTimeout(resolve, 2000));
      setExportStatus('success');
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  },
  
  const handleExportTokens = async () => {
<<<<<<< HEAD
    setIsExporting($2);
    setExportStatus($2);
    try {
      // Simulate token export
      await new Promise(resolve => setTimeout(resolve, 2000)),
      
      setExportStatus($2);
      toast({
        title: "Tokens exported",
        description: "Your ZION$ tokens have been exported to your wallet"})
    } catch (error: any) {
      setExportStatus($2);
      toast({
        title: "Export failed"
        description: error.message |"Could not export tokens"
        variant: "destructive"
      })
    } finally {
      setIsExporting(false)
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
=======
    setIsExporting(true),
    setExportStatus('processing'),
    
    try {
      // Simulate token export
      await new Promise(resolve => setTimeout(resolve, 2000)),
      
      setExportStatus('success'),
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  return (
    <Card />;
      <CardHeader />;
        <CardTitle className=\"flex items-center gap-2\" />;
<<<<<<< HEAD
          {isConnected ? (;
            <Wallet className=\"h-5 w-5 text-primary\" />;
          ) : (;}
            <Wallet className=\"h-5 w-5\" />;}
          )}
<<<<<<< HEAD
=======
          {isConnected ? (;
            <Wallet className=\"h-5 w-5 text-primary\" />;
          ) : (;}
            <Wallet className=\"h-5 w-5\" />;}
          )}
<<<<<<< HEAD
=======
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
>>>>>>> merged-prs-20250907-203621
          )}
    } finally {
      setIsExporting(false)
    };
  };
    }
  }

<<<<<<< HEAD
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
};
;

>>>>>>> merged-prs-20250907-203621
        )}
      </CardContent>
    </Card>
  )
}
<<<<<<< HEAD
=======
};
;
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
};
;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";"
import { Button } from "@/components/ui/button",;"
import { Wallet, Info, Check, ChevronRight, ArrowUpRight } from "lucide-react",;"
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React, { useState } from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Wallet, Info, Check, ChevronRight, ArrowUpRight } from "lucide-react",;

>>>>>>> origin/chore/fix-lint-and-merge
import {;
  Tooltip,;
  TooltipContent,;}
  TooltipProvider,;}
  TooltipTrigger} from \"@/components/ui/tooltip\",;
import { useToast } from \"@/hooks/use-toast\",;
import { useAuth } from \"@/hooks/useAuth\",;
export function OnChainExport() {;
  const [isConnected, setIsConnected] = useState(false),;
<<<<<<< HEAD
  const [isExporting, setIsExporting] = useState(false),;
=======
  const [isExporting, setIsExporting] = useState(false),;}
  const [exportStatus, setExportStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle'),;}
>>>>>>> origin/chore/fix-lint-and-merge
  const { toast } = useToast(),;
  const { user } = useAuth(),;
  const handleConnectWallet = async () => {;
    try {;
      // Check if wallet is available;
      const ethereum = (window as any).ethereum,;
      if (!ethereum) {;
        toast({;

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
        method: 'personal_sign',;}
        params: [address, message];}
      }),;
      setIsConnected(true),;

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

        variant: "destructive";

      });
    } finally {;}
      setIsExporting(false);}
    }
  };
  return (;
    <Card />;
      <CardHeader />;
        <CardTitle className=\"flex items-center gap-2\" />;
          {isConnected ? (;
            <Wallet className=\"h-5 w-5 text-primary\" />;
          ) : (;}
            <Wallet className=\"h-5 w-5\" />;}
          )}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          On-chain Export;
          <TooltipProvider />;
            <Tooltip />;
              <TooltipTrigger asChild />;
                <Info className=\"h-4 w-4 text-muted-foreground cursor-help\" />;
<<<<<<< HEAD
              </TooltipTrigger>;

=======
              </TooltipTrigger>;
<<<<<<< HEAD

=======
              <TooltipContent>;
                <p className="max-w-xs">Export your ZION$ tokens to an external blockchain wallet</p>;
<<<<<<< HEAD
=======
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              </TooltipContent>;
            </Tooltip>;
          </TooltipProvider>;
        </CardTitle>;

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              </Button>;
            )}
          </div>;
        ) : (;
          <div className=\"space-y-2\" />;
            <p className=\"text-sm text-muted-foreground mb-3\" />;
              Connect your web3 wallet to export tokens to the blockchain.;
            </p>;
            <Button onClick={handleConnectWallet} className=\"w-full\" />;
<<<<<<< HEAD
              Connect Wallet;
            </Button>;
          </div>;
        )}
        <CardDescription  /> Export your ZION$ to an external wallet</CardDescription>;
=======
=======
<<<<<<< HEAD
;


        <CardDescription > Export your ZION$ to an external wallet</CardDescription>;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      </CardHeader>;
      <CardContent />;
        {is_connected ? (
<<<<<<< HEAD
          <div className=\"space-y-4\" />;
            <div className=\"flex justify - between text-sm\" />;
              <span  /> Available to export:</span>;
              <span className=\"font-medium\" />250 ZION$</span>;
            </div>;
            {export_status === 'success' ? (
              <Button className=\"w - full bg - green - 600 hover:bg - green-700\" disabled />;
                <Check className=\"mr - 2 h - 4 w-4\" />;
                Tokens Exported;
              </Button>) : (
              <Button;}
                className=\"w-full\";}
                on_click={handleExportTokens}
                disabled={is_exporting}
               />;
                {is_exporting ? \"Processing...\" : \"Export Tokens\"}
                {!is_exporting && <ArrowUpRight className=\"ml - 2 h - 4 w-4\" />}
              </Button>)}
          </div>) : (
          <div className=\"space-y-2\" />;
            <p className=\"text - sm text - muted - foreground mb-3\" />;
              Connect your web3 wallet to export tokens to the blockchain.;
            </p>;
            <Button on_click={handleConnectWallet} className=\"w-full\" />;
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              Connect Wallet;
            </Button>;
          </div>)}
      </CardContent>;
<<<<<<< HEAD
    </Card>);
=======
    </Card>);
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
          <div className="space-y-2">;
            <p className="text-sm text-muted-foreground mb-3">;
              Connect your web3 wallet to export tokens to the blockchain.;
            </p>;
            <Button onClick={handleConnectWallet} className="w-full">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              Connect Wallet;
            </Button>;
          </div>;
        )}
<<<<<<< HEAD
        <CardDescription  /> Export your ZION$ to an external wallet</CardDescription>;
      </CardHeader>;
      <CardContent />;
        {is_connected ? (
          <div className=\"space-y-4\" />;
            <div className=\"flex justify - between text-sm\" />;
              <span  /> Available to export:</span>;
              <span className=\"font-medium\" />250 ZION$</span>;
            </div>;
            {export_status === 'success' ? (
              <Button className=\"w - full bg - green - 600 hover:bg - green-700\" disabled />;
                <Check className=\"mr - 2 h - 4 w-4\" />;
                Tokens Exported;
              </Button>) : (
              <Button;}
                className=\"w-full\";}
                on_click={handleExportTokens}
                disabled={is_exporting}
               />;
                {is_exporting ? \"Processing...\" : \"Export Tokens\"}
                {!is_exporting && <ArrowUpRight className=\"ml - 2 h - 4 w-4\" />}
              </Button>)}
          </div>) : (
          <div className=\"space-y-2\" />;
            <p className=\"text - sm text - muted - foreground mb-3\" />;
              Connect your web3 wallet to export tokens to the blockchain.;
            </p>;
            <Button on_click={handleConnectWallet} className=\"w-full\" />;
              Connect Wallet;
            </Button>;
          </div>)}
      </CardContent>;
    </Card>);
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      </CardContent>;
    </Card>;
  );
}
<<<<<<< HEAD
;
=======

=======
;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
