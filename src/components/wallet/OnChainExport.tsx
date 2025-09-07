<<<<<<< HEAD
import React, { useState } from 'react';
import { Card,CardContent,CardDescription,CardHeader,CardTitle} from '@/components/ui/card';
import { Button  } from '@/components/ui/button';
import { Wallet, Info, Check, ChevronRight, ArrowUpRight  } from 'lucide-react';
import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger} from '@/components/ui/tooltip';
import { useToast  } from '@/hooks/use-toast';
import { useAuth  } from '@/hooks/useAuth';
import React, { useState } from "react",import { Card, CardContent, CardDescription, CardHeader, CardTitle  } from '@/components/ui/card';
=======
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/wallet/OnChainExport.tsx
========
import React, { useState } from 'react;
import { Card,CardContent,CardDescription,CardHeader,CardTitle} from @/components/ui/card';
import { Button  } from '@/components/ui/button;
import { Wallet, Info, Check, ChevronRight, ArrowUpRight  } from lucide-react';
import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger} from '@/components/ui/tooltip;
import { useToast  } from @/hooks/use-toast';
import { useAuth  } from '@/hooks/useAuth;
import React, { useState } from "react,import { Card, CardContent, CardDescription, CardHeader, CardTitle  } from @/components/ui/card';
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {Tooltip;
  TooltipContent;
  TooltipProvider;
  TooltipTrigger} from "@/components/ui/tooltip",export function OnChainExport() {)}//Request accounts ;}';
setExportStatus ('success')toast ({}catch (error: any) {';
  setExportStatus ('error')toast ({}finally {setIsExporting (false)}h-5 w-5"/>) ";
}On-chain Export <TooltipProvider> <Tooltip> <TooltipTrigger asChild> <Info className=" h-4 w-4 text-muted-foreground cursor-help"/> </TooltipTrigger> <TooltipContent> <p className=" max-w-xs">Export your ZION$ tokens to an external blockchain wallet</p> </TooltipContent> </Tooltip> </TooltipProvider> </CardTitle> <CardDescription>Export your ZION$ to an external wallet</CardDescription> </CardHeader> <CardContent> <span>Available to export:</span> <span className=" font-medium">250 ZION$</span> </div> {'";
  exportStatus === 'success' ? (<Button className=" w-full bg-green-600 hover:bg-green-700"disabled> <Check className=" mr-2 h-4 w-4"/> Tokens Exported </Button>) : (<Button className=" w-full"onClick={handleExportTokens ;
}disabled= {isExporting ;
}> </Button>) ";
}</div>) : (<div className=" space-y-2"> <p className=" text-sm text-muted-foreground mb-3" > Connect your web3 wallet to export tokens to the blockchain. </p> Connect Wallet </Button> </div>)}</CardContent> </Card>)}'";
  )}
>>>>>>>> merged-prs-20250907-203621:src_disabled_1757239864/components/wallet/OnChainExport.tsx

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
<<<<<<< HEAD
import { Button } from "@/components/ui/button";
import { Wallet, Info, Check, ChevronRight, ArrowUpRight } from 'lucide-react'
=======
import { Button } from @/components/ui/button;
import { Wallet, Info, Check, ChevronRight, ArrowUpRight } from lucide-react'
=======
<<<<<<< HEAD
import React, { useState } from "react",
import React, { useState } from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wallet, Info, Check, ChevronRight, ArrowUpRight } from 'lucide-react'
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}


  )
}

import React, { useState } from './react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle  } from '@/components / ui / card';
import { Button  } from '@/components / ui / button';
import { Wallet, Info, Check, ChevronRight, ArrowUpRight } from 'lucide-react';
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {
  Tooltip;
  TooltipContent;
  TooltipProvider;
<<<<<<< HEAD
  TooltipTrigger} from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
export function OnChainExport() {
  const [isConnected, setIsConnected] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [exportStatus, setExportStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle');
  const { toast } = useToast();
  const { user } = useAuth();
=======
<<<<<<< HEAD
  TooltipTrigger} from "@/components/ui/tooltip",
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import React, { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wallet, Info, Check, ChevronRight, ArrowUpRight } from 'lucide-react'
import {
  Tooltip
  TooltipContent;
  TooltipProvider;
  TooltipTrigger} from "@/components/ui/tooltip"; import { useToast } from "@/hooks/use-toast"
import { useAuth } from "@/hooks/useAuth"
export function OnChainExport() {

  const [isConnected, setIsConnected] = useState(false)
  const [isExporting, setIsExporting] = useState(false)
  const [exportStatus, setExportStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle')
  const { toast } = useToast()
  const { user } = useAuth()
  const handleConnectWallet = async () => {
    try {
      // Check if wallet is available
      const ethereum = (window as any).ethereum
import React, { useState } from "react",
import React, { useState } from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Wallet, Info, Check, ChevronRight, ArrowUpRight } from 'lucide-react'
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
>>>>>>> merged-prs-20250907-203621
  
  const handleConnectWallet = async () => {
    try {
      // Check if wallet is available
<<<<<<< HEAD
      const ethereum = (window as any).ethereum;
      if (!ethereum) {
        toast({
          title: "Wallet not detected",
          description: "Please install MetaMask or another Ethereum wallet to use this feature",
          variant: "destructive"
        });
=======
      const ethereum = (window as any).ethereum,
      if (!ethereum) {
        toast({
          title: "Wallet not detected"
          description: "Please install MetaMask or another Ethereum wallet to use this feature"
          variant: "destructive"
        })
        })
        return
      }
      // Request accounts
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
      const address = accounts[0]
}

  )
        return;
      }
      
      // Request accounts
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' }),
      const address = accounts[0];
};
  );
};
}
        }),
>>>>>>> merged-prs-20250907-203621
        return
      }
      
      // Request accounts
<<<<<<< HEAD
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' }),
=======
<<<<<<< HEAD
      const accounts = await ethereum.request({ method: eth_requestAccounts' }),
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      const address = accounts[0];
=======
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' }),
      const address = accounts[0],
>>>>>>> merged-prs-20250907-203621
      
      // Sign message to verify ownership
      const message = `Zion AI Marketplace wallet verification\nAddress: ${address}\nTime: ${new Date().toISOString()}`,
      await ethereum.request({
<<<<<<< HEAD
        method: 'personal_sign',
=======
<<<<<<< HEAD
        method: 'personal_sign,
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        params: [address, message]
      });
      
      setIsConnected(true);
=======
        method: 'personal_sign',
        params: [address, message]
      }),
      
      setIsConnected(true),
>>>>>>> merged-prs-20250907-203621
      toast({
        title: "Wallet connected",
        description: `Wallet ${address.slice(0, 6)}...${address.slice(-4)} connected successfully`})
    } catch (error: any) {
      toast({
<<<<<<< HEAD
        title: "Connection failed",
=======
<<<<<<< HEAD
        title: Connection failed,
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        description: error.message || "Could not connect to wallet",
        variant: "destructive"
      })
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
        title: "Tokens exported",
        description: "Your ZION$ tokens have been exported to your wallet"})
    } catch (error: any) {
      setExportStatus('error');
      toast({
        title: "Export failed",
<<<<<<< HEAD
        description: error.message || "Could not export tokens",
=======
        description: error.message || Could not export tokens,
=======
        title: "Connection failed",
        description: error.message || "Could not connect to wallet",
        variant: "destructive"
      })
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
        title: "Tokens exported",
        description: "Your ZION$ tokens have been exported to your wallet"})
    } catch (error: any) {
      setExportStatus('error'),
      toast({
        title: "Export failed",
        description: error.message || "Could not export tokens",
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        variant: "destructive"
      })
    } finally {
      setIsExporting(false)
    }
<<<<<<< HEAD
  };
=======
<<<<<<< HEAD
  }
=======
  },
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  
  return (
    <Card>
      <CardHeader>
<<<<<<< HEAD
        <CardTitle className="flex items-center gap-2">
          {isConnected ? (
            <Wallet className="h-5 w-5 text-primary" />
          ) : (
            <Wallet className="h-5 w-5" />
=======
<<<<<<< HEAD
        <CardTitle className=flex items-center gap-2>
          {isConnected ? (
            <Wallet className="h-5 w-5 text-primary" />
          ) : (
            <Wallet className=h-5 w-5 />
=======
        <CardTitle className="flex items-center gap-2">
          {isConnected ? (
            <Wallet className="h-5 w-5 text-primary" />
          ) : (
            <Wallet className="h-5 w-5" />
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          )}
          On-chain Export
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="h-4 w-4 text-muted-foreground cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
<<<<<<< HEAD
                <p className="max-w-xs">Export your ZION$ tokens to an external blockchain wallet</p>
=======
<<<<<<< HEAD
                <p className=max-w-xs>Export your ZION$ tokens to an external blockchain wallet</p>
=======
                <p className="max-w-xs">Export your ZION$ tokens to an external blockchain wallet</p>
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardTitle>
        <CardDescription>Export your ZION$ to an external wallet</CardDescription>
      </CardHeader>
      <CardContent>
        {isConnected ? (
          <div className="space-y-4">
<<<<<<< HEAD
            <div className="flex justify-between text-sm">
=======
<<<<<<< HEAD
            <div className=flex justify-between text-sm>
=======
            <div className="flex justify-between text-sm">
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              <span>Available to export:</span>
              <span className="font-medium">250 ZION$</span>
            </div>
            {exportStatus === 'success' ? (
<<<<<<< HEAD
              <Button className="w-full bg-green-600 hover:bg-green-700" disabled>
=======
<<<<<<< HEAD
              <Button className=w-full bg-green-600 hover:bg-green-700 disabled>
=======
              <Button className="w-full bg-green-600 hover:bg-green-700" disabled>
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                <Check className="mr-2 h-4 w-4" />
                Tokens Exported
              </Button>
            ) : (
              <Button 
<<<<<<< HEAD
                className="w-full" 
                onClick={handleExportTokens} 
                disabled={isExporting}
              >
                {isExporting ? "Processing..." : "Export Tokens"}
=======
<<<<<<< HEAD
                className=w-full 
                onClick={handleExportTokens} 
                disabled={isExporting}
              >
                {isExporting ? "Processing..." : Export Tokens}
=======
                className="w-full" 
                onClick={handleExportTokens} 
                disabled={isExporting}
              >
                {isExporting ? "Processing..." : "Export Tokens"}
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                {!isExporting && <ArrowUpRight className="ml-2 h-4 w-4" />}
              </Button>
            )}
          </div>
        ) : (
<<<<<<< HEAD
          <div className="space-y-2">
=======
<<<<<<< HEAD
          <div className=space-y-2>
=======
          <div className="space-y-2">
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <p className="text-sm text-muted-foreground mb-3">
              Connect your web3 wallet to export tokens to the blockchain.
            </p>
            <Button onClick={handleConnectWallet} className="w-full">
              Connect Wallet
            </Button>
          </div>
<<<<<<< HEAD
        )}
      </CardContent>
    </Card>
  )
}
<<<<<<< HEAD
:src/components/wallet/OnChainExport.tsx
;
=======
=======
import React, { useState } from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Wallet, Info, Check, ChevronRight, ArrowUpRight } from 'lucide-react';
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
ursor/fix-website-loading-errors-and-merge-6662
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
          On-chain Export;
          <TooltipProvider>;
            <Tooltip>;
              <TooltipTrigger asChild>;
                <Info className="h-4 w-4 text-muted-foreground cursor-help" />;
              </TooltipTrigger>;
              <TooltipContent>;
                <p className="max-w-xs">Export your ZION$ tokens to an external blockchain wallet</p>;
              </TooltipContent>;
            </Tooltip>;
          </TooltipProvider>;
        </CardTitle>;
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
              </Button>;
            )}
          </div>;
        ) : (;
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
  );
}
;
;
=======
  TooltipTrigger } from '@/components / ui / tooltip'; import { use_toast  } from '@/hooks / use - toast';
import { use_auth  } from '@/hooks / use_auth';
export /**
 * OnChainExport - Function description
 */
function OnChainExport() {
  const [is_connected, setIsConnected] = useState (false);
  const [is_exporting, setIsExporting] = useState (false);
  const [export_status, setExportStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle');
  const { toast } = use_toast ();
  const { user } = use_auth ();
  const handleConnectWallet = async () => {
    try {
      // Check if wallet is available;
      const ethereum = (window as any).ethereum;
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
}
  );
}

;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
