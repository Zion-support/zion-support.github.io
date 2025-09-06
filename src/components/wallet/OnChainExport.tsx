
export function OnChainExport() {

<<<<<<< HEAD
  )
}

import React, { useState } from './react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle  } from '@/components / ui / card';
import { Button  } from '@/components / ui / button';
import { Wallet, Info, Check, ChevronRight, ArrowUpRight } from 'lucide-react';
<<<<<<< HEAD
=======
<<<<<<< HEAD
import React, { useState } from "react",
<<<<<<< HEAD
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wallet, Info, Check, ChevronRight, ArrowUpRight } from 'lucide-react'
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import {
  Tooltip;
  TooltipContent;
  TooltipProvider;
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

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  const [isConnected, setIsConnected] = useState(false)
  const [isExporting, setIsExporting] = useState(false)
  const [exportStatus, setExportStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle')
  const { toast } = useToast()
  const { user } = useAuth()
<<<<<<< HEAD
  const handleConnectWallet = async () => {
    try {
      // Check if wallet is available
      const ethereum = (window as any).ethereum
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
  
  const handleConnectWallet = async () => {
    try {
      // Check if wallet is available
      const ethereum = (window as any).ethereum,
      if (!ethereum) {
        toast({
          title: "Wallet not detected"
          description: "Please install MetaMask or another Ethereum wallet to use this feature"
          variant: "destructive"
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
        return
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
        title: "Wallet connected",
        description: `Wallet ${address.slice(0, 6)}...${address.slice(-4)} connected successfully`})
    } catch (error: any) {
      toast({
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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
      // Check if wallet is available;
      const ethereum = (window as any).ethereum;
      // Check condition
if ( {) {
  $2
=======
  const handleConnectWallet = async () => {
    try {
      // Check if wallet is available
      const ethereum = (window as any).ethereum
=======
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
  
  const handleConnectWallet = async () => {
    try {
      // Check if wallet is available
      const ethereum = (window as any).ethereum,
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      if (!ethereum) {
        toast({
          title: "Wallet not detected"
          description: "Please install MetaMask or another Ethereum wallet to use this feature"
          variant: "destructive"
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
}
=======
        }),
        return
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
        title: "Wallet connected",
        description: `Wallet ${address.slice(0, 6)}...${address.slice(-4)} connected successfully`})
    } catch (error: any) {
      toast({
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
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
