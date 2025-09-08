<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
  TooltipTrigger} from "@/components/ui/tooltip",
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
export function OnChainExport() {
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const [isConnected, setIsConnected] = useState(false);
  const [isExporting, setIsExporting] = useState(false);}
  const [exportStatus, setExportStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle'),}
  const { toast } = useToast();
  const { user } = useAuth();
<<<<<<< HEAD



=======

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


>>>>>>> origin/cursor/delete-old-data-records-6bba
  const handleConnectWallet = async () => {
    try {
      // Check if wallet is available;
      const ethereum = (window as any).ethereum;
<<<<<<< HEAD

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
      

=======


>>>>>>> origin/cursor/delete-old-data-records-6bba
      // Sign message to verify ownership
      const message = `Zion AI Marketplace wallet verification\nAddress: ${address}\nTime: ${new Date().toISOString()}`
      await ethereum.request({
        method: 'personal_sign'
        params: [address, message]


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      toast({
        title: "Wallet connected"
        description: `Wallet ${address.slice(0, 6)}...${address.slice(-4)} connected successfully`})
    } catch (error: any) {
      toast({
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        title: "Connection failed"
        description: error.message |"Could not connect to wallet"
        variant: "destructive"
      })
    }


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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



=======
  return (
    <Card />;
      <CardHeader />;
        <CardTitle className=\"flex items-center gap-2\" />;

>>>>>>> origin/cursor/delete-old-data-records-6bba
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
};
;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";"
import { Button } from "@/components/ui/button",;"
import { Wallet, Info, Check, ChevronRight, ArrowUpRight } from "lucide-react",;"

>>>>>>> origin/cursor/delete-old-data-records-6bba

import React, { useState } from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Wallet, Info, Check, ChevronRight, ArrowUpRight } from "lucide-react",;

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

  const [isExporting, setIsExporting] = useState(false),;}
  const [exportStatus, setExportStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle'),;}

=======
  const [isExporting, setIsExporting] = useState(false),;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const { toast } = useToast(),;
  const { user } = useAuth(),;
  const handleConnectWallet = async () => {;
    try {;
      // Check if wallet is available;
      const ethereum = (window as any).ethereum,;
      if (!ethereum) {;
        toast({;
          title: "Wallet not detected",,
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
        method: 'personal_sign',;}
        params: [address, message];}
      }),;
      setIsConnected(true),;
      toast({;
        title: "Wallet connected",,
  description: `Wallet ${address.slice(0, 6)}...${address.slice(-4)} connected successfully`});
    } catch (error: any) {;
      toast({;
        title: "Connection failed",,
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
        title: "Tokens exported",,
  description: "Your ZION$ tokens have been exported to your wallet"});
    } catch (error: any) {;
      setExportStatus('error'),;
      toast({;
        title: "Export failed",,
  description: error.message || "Could not export tokens";
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
          On-chain Export;
          <TooltipProvider />;
            <Tooltip />;
              <TooltipTrigger asChild />;
                <Info className=\"h-4 w-4 text-muted-foreground cursor-help\" />;
              </TooltipTrigger>;

<<<<<<< HEAD
              <TooltipContent>;
                <p className="max-w-xs">Export your ZION$ tokens to an external blockchain wallet</p>;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

              </TooltipContent>;
            </Tooltip>;
          </TooltipProvider>;
        </CardTitle>;

<<<<<<< HEAD





=======

              </Button>;
            )}
          </div>;
        ) : (;
          <div className=\"space-y-2\" />;
            <p className=\"text-sm text-muted-foreground mb-3\" />;
              Connect your web3 wallet to export tokens to the blockchain.;
            </p>;
            <Button onClick={handleConnectWallet} className=\"w-full\" />;

              Connect Wallet;
            </Button>;
          </div>;
        )}
        <CardDescription > Export your ZION$ to an external wallet</CardDescription>;
      </CardHeader>;
      <CardContent>;
        {is_connected ? (
          <div className="space-y-4">;
            <div className="flex justify - between text-sm">;
              <span > Available to export:</span>;
              <span className="font-medium">250 ZION$</span>;
            </div>;
            {export_status === 'success' ? (
              <Button className="w - full bg - green - 600 hover:bg - green-700" disabled>;
                <Check className="mr - 2 h - 4 w-4" />;
                Tokens Exported;
              </Button>) : (
              <Button;
                className="w-full";
                on_click={handleExportTokens}
                disabled={is_exporting}
              >;
                {is_exporting ? "Processing..." : "Export Tokens"}
                {!is_exporting && <ArrowUpRight className="ml - 2 h - 4 w-4" />}
              </Button>)}
          </div>) : (
          <div className="space-y-2">;
            <p className="text - sm text - muted - foreground mb-3">;
              Connect your web3 wallet to export tokens to the blockchain.;
            </p>;
            <Button on_click={handleConnectWallet} className="w-full">;
              Connect Wallet;
            </Button>;
          </div>)}
      </CardContent>;
    </Card>);
>>>>>>> origin/cursor/delete-old-data-records-6bba
