<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/blockchain/SmartContractDeployment.tsx


<<<<<<< HEAD
=======

import React, { useState } from "react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Switch} from "@/components/ui/switch";
import {BlockchainNetwork, DeploymentOptions} from "@/types/smart-contracts";
import {Loader2, ShieldCheck, Download} from "lucide-react";
import {toast} from "sonner";
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React, { useState } from "react",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group",
import { Label } from "@/components/ui/label",
import { Input } from "@/components/ui/input",
import { Switch } from "@/components/ui/switch",
import { BlockchainNetwork, DeploymentOptions } from "@/types/smart-contracts",
<<<<<<< HEAD
<<<<<<< HEAD

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Loader2, ShieldCheck, Download } from "lucide-react";
import { toast } from "sonner";
import { Loader2, ShieldCheck, Download } from "lucide-react",
import { toast } from "sonner",
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
interface SmartContractDeploymentProps {

  solidityCode: string
  onDeploy: (options: DeploymentOptions) => Promise<void>

  isDeploying: boolean
}
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export function SmartContractDeployment({
  solidityCode;
  onDeploy;

export function SmartContractDeployment({ ;
  solidityCode;
  onDeploy;
export function SmartContractDeployment({ 
  solidityCode,
  onDeploy,
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  isDeploying
}: SmartContractDeploymentProps) {
  const [deploymentOptions, setDeploymentOptions] = useState<DeploymentOptions>({

    network: 'none'
    useEscrow: true
    deployToChain: false
    walletAddress: ''
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/blockchain/SmartContractDeployment.tsx
import React, { useState } from './react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { RadioGroup, RadioGroupItem } from '@/components / ui / radio - group';
import { Label } from '@/components / ui / label';
import { Input } from '@/components / ui / input';
import { Switch } from '@/components / ui / switch';
import { BlockchainNetwork, DeploymentOptions } from '@/types / smart - contracts';
import { Loader2, ShieldCheck, Download } from './lucide-react';
import { toast } from './sonner';
interface SmartContractDeploymentProps {
  solidity_code: string,
  on_deploy: (options: DeploymentOptions) => Promise < void>,
  is_deploying: boolean;
}
export /**
 * SmartContractDeployment - Function description
 */
function SmartContractDeployment() {
  const [deployment_options, setDeploymentOptions] = useState < DeploymentOptions>({
    network: 'none',
    use_escrow: true,
    deployToChain: false,
    wallet_address: '';
  });
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/blockchain/SmartContractDeployment.tsx

=======

  }),


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/blockchain/SmartContractDeployment.tsx
  const handleDeployContract = async () => {
    // Check condition
if ( {) {
  $2
}
      toast.error ("Please enter a wallet address for blockchain deployment");
      return;
    }
    try {
      await on_deploy (deployment_options);
    } catch (error) {
      console.error ("Deployment error:", error);
    }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/blockchain/SmartContractDeployment.tsx
<<<<<<< HEAD

=======


=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  });
  }),

  const handleDeployContract = async () => {
    if (deploymentOptions.deployToChain && !deploymentOptions.walletAddress) {
      toast.error("Please enter a wallet address for blockchain deployment"),
      return
    }
    try {
      await onDeploy(deploymentOptions)
    } catch (error) {
      console.error("Deployment error:", error)
    }
  }
  const handleDownloadSolidity = () => {
    // Create a blob from the Solidity code
    const blob = new Blob([solidityCode], { type: 'text/plain' })
    const url = URL.createObjectURL(blob);
    // Create a temporary anchor to trigger download
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ZionContract.sol';
    document.body.appendChild(a);
    a.click();
    // Clean up
    URL.revokeObjectURL(url);
    document.body.removeChild(a);
    toast.success("Solidity contract downloaded")
  }
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  },
  
  const handleDownloadSolidity = () => {
    // Create a blob from the Solidity code
    const blob = new Blob([solidityCode], { type: 'text/plain' }),
    const url = URL.createObjectURL(blob),
    
    // Create a temporary anchor to trigger download
    const a = document.createElement('a'),
    a.href = url,
    a.download = 'ZionContract.sol',
    document.body.appendChild(a),
    a.click(),
    
    // Clean up
    URL.revokeObjectURL(url),
    document.body.removeChild(a),
    
    toast.success("Solidity contract downloaded")
  },

<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-primary" />
          Smart Contract Deployment
        </CardTitle>
        <CardDescription>
          Deploy your agreement as a smart contract for enhanced security and automation
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
            <Switch
              id="deploy-blockchain"
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
            <Switch
              id="deploy-blockchain"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              checked={deploymentOptions.deployToChain}
              onCheckedChange={(checked) => setDeploymentOptions({
                ...deploymentOptions;
                deployToChain: checked
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
            <Switch 
              id="deploy-blockchain"
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
            <Switch 
              id="deploy-blockchain"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React, { useState } from "react",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group",;
import { Label } from "@/components/ui/label",;
import { Input } from "@/components/ui/input",;
import { Switch } from "@/components/ui/switch",;
import { BlockchainNetwork, DeploymentOptions } from "@/types/smart-contracts",;
import { Loader2, ShieldCheck, Download } from "lucide-react",;
import { toast } from "sonner",;
<<<<<<< HEAD
=======
========
  }
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/blockchain/SmartContractDeployment.tsx
import React, { useState } from "react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Switch} from "@/components/ui/switch";
import {BlockchainNetwork, DeploymentOptions} from "@/types/smart-contracts";
import {Loader2, ShieldCheck, Download} from "lucide-react";
import {toast} from "sonner";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface SmartContractDeploymentProps {;
  solidityCode: string,;
  onDeploy: (options: DeploymentOptions) => Promise<void>,;
  isDeploying: boolean;
}
<<<<<<< HEAD
export function SmartContractDeployment(): any ({ ;
  solidityCode;
  onDeploy;
=======
;
export function SmartContractDeployment({;
  solidityCode,;
  onDeploy,;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  isDeploying;
}: SmartContractDeploymentProps) {;
  const [deploymentOptions, setDeploymentOptions] = useState<DeploymentOptions>({;
    network: 'none',;
    useEscrow: true,;
    deployToChain: false,;
    walletAddress: '';
<<<<<<< HEAD
  });
  const handleDeployContract = async () => {;
    if (deploymentOptions && deploymentOptions.deployToChain && !deploymentOptions && deploymentOptions.walletAddress) {;
      toast && toast.error("Please enter a wallet address for blockchain deployment");
      return;
    }
    try {;
      await onDeploy(deploymentOptions);
    } catch (error) {;
      console && console.error("Deployment error:", error);
    }
  };
  const handleDownloadSolidity = () => {;
    // Create a blob from the Solidity code;
    const blob = new Blob([solidityCode], { type: 'text/plain' }),;
    const url = URL && URL.createObjectURL(blob);
    // Create a temporary anchor to trigger download;
    const a = document && document.createElement('a');
    a && a.href = url;
    a && a.download = 'ZionContract && ZionContract.sol';
    document && document.body.appendChild(a);
    a && a.click();
    // Clean up;
    URL && URL.revokeObjectURL(url);
    document && document.body.removeChild(a);
    toast && toast.success("Solidity contract downloaded");
  };
  return (
=======

import React, { useState } from "react",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group",;
import { Label } from "@/components/ui/label",;
import { Input } from "@/components/ui/input",;
import { Switch } from "@/components/ui/switch",;
import { BlockchainNetwork, DeploymentOptions } from "@/types/smart-contracts",;
import { Loader2, ShieldCheck, Download } from "lucide-react",;
import { toast } from "sonner",;
;
interface SmartContractDeploymentProps {;
  solidityCode:string,;
  onDeploy:(options:DeploymentOptions) => Promise<void>,;
  isDeploying:boolean;
}
;
export function SmartContractDeployment({ ;
  solidityCode,;
  onDeploy,;
  isDeploying;
} SmartContractDeploymentProps) {;
  const [deploymentOptions, setDeploymentOptions] = useState<DeploymentOptions>({;
    network:'none',;
    useEscrow:true,;
    deployToChain:false,;
    walletAddress:'';
  }),;
;
  const handleDeployContract = async () => {;
    if (deploymentOptions.deployToChain && !deploymentOptions.walletAddress) {;
      toast.error("Please enter a wallet address for blockchain deployment"),;
      return,;
    }
    ;
    try {;
      await onDeploy(deploymentOptions),;
    } catch (error) {;
      console.error("Deployment error:", error),;
    }
  },;
  ;
  const handleDownloadSolidity = () => {;
    // Create a blob from the Solidity code;
    const blob = new Blob([solidityCode], { type:'text/plain' }),;
    const url = URL.createObjectURL(blob),;
    ;
=======
  }),;
  const handleDeployContract = async () => {;
    if (deploymentOptions.deployToChain && !deploymentOptions.walletAddress) {;
      toast.error("Please enter a wallet address for blockchain deployment"),;
      return;
    }
;
    try {;
      await onDeploy(deploymentOptions);
    } catch (error) {;
      console.error("Deployment error:", error);
    }
  },;
  const handleDownloadSolidity = () => {;
    // Create a blob from the Solidity code;
    const blob = new Blob([solidityCode], { type: 'text/plain' }),;
    const url = URL.createObjectURL(blob),;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    // Create a temporary anchor to trigger download;
    const a = document.createElement('a'),;
    a.href = url,;
    a.download = 'ZionContract.sol',;
    document.body.appendChild(a),;
    a.click(),;
<<<<<<< HEAD
    ;
    // Clean up;
    URL.revokeObjectURL(url),;
    document.body.removeChild(a),;
    ;
    toast.success("Solidity contract downloaded"),;
  },;
;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
    // Clean up;
    URL.revokeObjectURL(url),;
    document.body.removeChild(a),;
    toast.success("Solidity contract downloaded");
  },;
  return (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <Card className="w-full">;
      <CardHeader>;
        <CardTitle className="flex items-center gap-2">;
          <ShieldCheck className="h-5 w-5 text-primary" />;
<<<<<<< HEAD
<<<<<<< HEAD
;
  const handleDownloadSolidity = () =>: any {
    // Create a blob from the Solidity code;
    const blob = new Blob ([solidity_code], { type: 'text / plain' }),
    const url = URL.createObjectURL (blob);
;
    // Create a temporary anchor to trigger download;
    const array = document.create_element ('a');
    a.href = url;
    a.download = 'ZionContract.sol';
    document.body.append_child (a);
    a.click ();
;
    // Clean up;
    URL.revokeObjectURL (url);
    document.body.remove_child (a);
;
    toast.success ("Solidity contract downloaded");
  }
;
  return (
    <Card className="w - full">;
      <CardHeader>;
        <CardTitle className="flex items - center gap - 2">;
          <ShieldCheck className="h - 5 w - 5 text - primary" />;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/blockchain/SmartContractDeployment.tsx

========
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/blockchain/SmartContractDeployment.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          Smart Contract Deployment;
        </CardTitle>;
        <CardDescription>;
          Deploy your agreement as a smart contract for enhanced security and automation;
        </CardDescription>;
      </CardHeader>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/blockchain/SmartContractDeployment.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <CardContent className="space-y-6">;
        <div className="space-y-4">;
          <div className="flex items-center space-x-2">;
            <Switch;
              id="deploy-blockchain";
              checked={deploymentOptions.deployToChain}
              onCheckedChange={(checked) => setDeploymentOptions({;
                ...deploymentOptions,;
                deployToChain: checked;
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              })}
            />
            <Label htmlFor="deploy-blockchain">Deploy to blockchain</Label>
          </div>
          {deploymentOptions.deployToChain && (
            <>
              <div className="space-y-2">
                <Label>Select blockchain network</Label>
<<<<<<< HEAD
<<<<<<< HEAD

                  onValueChange={(value) => setDeploymentOptions({
                    ...deploymentOptions;
                    network: value as BlockchainNetwork

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                <RadioGroup
                  defaultValue={deploymentOptions.network}
                  onValueChange={(value) => setDeploymentOptions({
                    ...deploymentOptions;
                    network: value as BlockchainNetwork
                <RadioGroup 
                  defaultValue={deploymentOptions.network}
                  onValueChange={(value) => setDeploymentOptions({;
                    ...deploymentOptions,;
                    network: value as BlockchainNetwork;
                  onValueChange={(value) => setDeploymentOptions({;
                    ...deploymentOptions,;
                    network: value as BlockchainNetwork;
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  })}
                  className="flex flex-col space-y-1"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="ethereum" id="ethereum" />
                    <Label htmlFor="ethereum">Ethereum (higher fees, more secure)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="polygon" id="polygon" />
                    <Label htmlFor="polygon">Polygon (lower fees, faster)</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="space-y-2">
                <Label htmlFor="wallet-address">Wallet address for transactions</Label>
<<<<<<< HEAD
<<<<<<< HEAD

                  })}
                />
              </div>
              <div className="flex items-center space-x-2">

=======




              })}

            />;
            <Label htmlFor="deploy-blockchain">Deploy to blockchain</Label>;
          </div>;

          {deploymentOptions && deploymentOptions.deployToChain && (;
            <>;
              <div className="space-y-2">;
                <Label>Select blockchain network</Label>;
                <RadioGroup
                  defaultValue={deploymentOptions && deploymentOptions.network}
                  onValueChange={(value) => setDeploymentOptions({;

                    ...deploymentOptions;
                    network: value as BlockchainNetwork;
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  })}

========
            />;
            <Label htmlFor="deploy-blockchain">Deploy to blockchain</Label>;
          </div>;
          {deploymentOptions && deploymentOptions.deployToChain && (;
            <>;
              <div className="space-y-2">;
                <Label>Select blockchain network</Label>;
                <RadioGroup
                  defaultValue={deploymentOptions && deploymentOptions.network}
                  onValueChange={(value) => setDeploymentOptions({;
                    ...deploymentOptions;
                    network: value as BlockchainNetwork;
=======
      ;
      <CardContent className="space-y-6">;
        <div className="space-y-4">;
          <div className="flex items-center space-x-2">;
            <Switch ;
              id="deploy-blockchain";
              checked={deploymentOptions.deployToChain}
              onCheckedChange={(checked) => setDeploymentOptions({;
                ...deploymentOptions,;
                deployToChain:checked;
              })}
            />;
            <Label htmlFor="deploy-blockchain">Deploy to blockchain</Label>;
          </div>;
          ;
          {deploymentOptions.deployToChain && (;
            <>;
              <div className="space-y-2">;
                <Label>Select blockchain network</Label>;
                <RadioGroup ;                  defaultValue={deploymentOptions.network}
                  onValueChange={(value) => setDeploymentOptions({;
                    ...deploymentOptions,;
                    network:value as BlockchainNetwork;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  })}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/blockchain/SmartContractDeployment.tsx
                  className="flex flex-col space-y-1";
                >;
                  <div className="flex items-center space-x-2">;
                    <RadioGroupItem value="ethereum" id="ethereum" />;
                    <Label htmlFor="ethereum">Ethereum (higher fees, more secure)</Label>;
                  </div>;
                  <div className="flex items-center space-x-2">;
                    <RadioGroupItem value="polygon" id="polygon" />;
                    <Label htmlFor="polygon">Polygon (lower fees, faster)</Label>;
                  </div>;
                </RadioGroup>;
              </div>;
<<<<<<< HEAD
              <div className="space-y-2">;
                <Label htmlFor="wallet-address">Wallet address for transactions</Label>;
                <Input
                  id="wallet-address" 
                  placeholder="0x..." 
                  value={deploymentOptions && deploymentOptions.walletAddress || ''}
                  onChange={(e) => setDeploymentOptions({;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/blockchain/SmartContractDeployment.tsx

                    ...deploymentOptions;
                    walletAddress: e && e.target.value;
=======

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                <Input
                  id="wallet-address"
                  placeholder="0x..."
                  value={deploymentOptions.walletAddress |''}
                  onChange={(e) => setDeploymentOptions({
                    ...deploymentOptions;
                    walletAddress: e.target.value
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                <Input 
                  id="wallet-address" 
                  placeholder="0x..." 
                  value={deploymentOptions.walletAddress || ''}
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  })}

========
                    ...deploymentOptions;
                    walletAddress: e && e.target.value;
                  })}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/blockchain/SmartContractDeployment.tsx
                />;
              </div>;
              <div className="flex items-center space-x-2">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/blockchain/SmartContractDeployment.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/blockchain/SmartContractDeployment.tsx
                <Switch
                  id="use-escrow"
                  checked={deploymentOptions && deploymentOptions.useEscrow}
                  onCheckedChange={(checked) => setDeploymentOptions({;
                    ...deploymentOptions;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/blockchain/SmartContractDeployment.tsx

                    useEscrow: checked;

=======

                <Switch 
                  id="use-escrow"
                  checked={deploymentOptions.useEscrow}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
                    useEscrow: checked;
=======
              ;
              <div className="space-y-2">;
                <Label htmlFor="wallet-address">Wallet address for transactions</Label>;
                <Input ;
                  id="wallet-address" ;
                  placeholder="0x..." ;
                  value={deploymentOptions.walletAddress || ''}
                  onChange={(e) => setDeploymentOptions({;
                    ...deploymentOptions,;
                    walletAddress:e.target.value;
                  })}
                />;
              </div>;
              ;
              <div className="flex items-center space-x-2">;
                <Switch ;
                  id="use-escrow";
                  checked={deploymentOptions.useEscrow}
                  onCheckedChange={(checked) => setDeploymentOptions({;
                    ...deploymentOptions,;
                    useEscrow:checked;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/blockchain/SmartContractDeployment.tsx
                  })}
                />;
                <Label htmlFor="use-escrow">Use escrow for payments</Label>;
              </div>;
            </>;
          )}
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/blockchain/SmartContractDeployment.tsx
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  onChange={(e) => setDeploymentOptions({;
                    ...deploymentOptions;
                    walletAddress: e.target.value;
                  onChange={(e) => setDeploymentOptions({
                    ...deploymentOptions;
                    walletAddress: e.target.value
                  onChange={(e) => setDeploymentOptions({;
                    ...deploymentOptions;
                    walletAddress: e.target.value;
                  })}
                />
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="use-escrow"
                  checked={deploymentOptions.useEscrow}
                  onCheckedChange={(checked) => setDeploymentOptions({
                    ...deploymentOptions;

                    useEscrow: checked
                <Switch 
                  id="use-escrow"
                  checked={deploymentOptions.useEscrow}
                  onCheckedChange={(checked) => setDeploymentOptions({;
                    ...deploymentOptions;
                    useEscrow: checked;
                  onCheckedChange={(checked) => setDeploymentOptions({
                    ...deploymentOptions;
                    useEscrow: checked
                  onCheckedChange={(checked) => setDeploymentOptions({;
                    ...deploymentOptions;
                    useEscrow: checked;
                  })}
                />
                <Label htmlFor="use-escrow">Use escrow for payments</Label>
              </div>
            </>
          )}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <div className="rounded-md bg-muted p-4">
            <h4 className="text-sm font-medium mb-2">Smart Contract Preview</h4>
            <div className="max-h-52 overflow-y-auto bg-background p-3 rounded text-xs font-mono">
              <pre>{solidityCode.slice(0, 500)}...</pre>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={handleDownloadSolidity}>
          <Download className="mr-2 h-4 w-4" />
          Download .sol File
        </Button>
        <Button onClick={handleDeployContract} disabled={isDeploying}>
          {isDeploying ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Deploying...
            </>
          ) : (
            'Deploy Contract'
          )}
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        </Button>
      </CardFooter>
    </Card>
  )
}
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        </Button>;
      </CardFooter>;
    </Card>;
  );
<<<<<<< HEAD
<<<<<<< HEAD

}
;

=======


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/blockchain/SmartContractDeployment.tsx
          <div className="rounded-md bg-muted p-4">;
            <h4 className="text-sm font-medium mb-2">Smart Contract Preview</h4>;
            <div className="max-h-52 overflow-y-auto bg-background p-3 rounded text-xs font-mono">;
              <pre>{solidityCode && solidityCode.slice(0, 500)}...</pre>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/blockchain/SmartContractDeployment.tsx
=======



=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/blockchain/SmartContractDeployment.tsx
      <CardContent className="space - y-6">;
        <div className="space - y-4">;
          <div className="flex items - center space - x-2">;
            <Switch;
              id="deploy - blockchain";
              checked={deployment_options.deployToChain}
              onCheckedChange={(checked) => setDeploymentOptions ({
                ...deployment_options;
                deployToChain: checked;
              })}
            />;
            <Label html_for="deploy - blockchain">Deploy to blockchain</Label>;
          </div>;
          {deployment_options.deployToChain && (
            <>;
              <div className="space - y-2">;
                <Label > Select blockchain network</Label>;
                <RadioGroup;
                  default_value={deployment_options.network}
                  onValueChange={(value) => setDeploymentOptions ({
                    ...deployment_options;
                    network: value as BlockchainNetwork;
                  })}
                  className="flex flex - col space - y-1";
                >;
                  <div className="flex items - center space - x-2">;
                    <RadioGroupItem value="ethereum" id="ethereum" />;
                    <Label html_for="ethereum">Ethereum (higher fees, more secure)</Label>;
                  </div>;
                  <div className="flex items - center space - x-2">;
                    <RadioGroupItem value="polygon" id="polygon" />;
                    <Label html_for="polygon">Polygon (lower fees, faster)</Label>;
                  </div>;
                </RadioGroup>;
              </div>;
              <div className="space - y-2">;
                <Label html_for="wallet - address">Wallet address for transactions</Label>;
                <Input;
                  id="wallet - address";
                  placeholder="0x...";
                  value={deployment_options.wallet_address || ''}
                  on_change={(e) => setDeploymentOptions ({
                    ...deployment_options;
                    wallet_address: e.target.value;
                  })}
                />;
              </div>;
              <div className="flex items - center space - x-2">;
                <Switch;
                  id="use - escrow";
                  checked={deployment_options.use_escrow}
                  onCheckedChange={(checked) => setDeploymentOptions ({
                    ...deployment_options;
                    use_escrow: checked;
                  })}
                />;
                <Label html_for="use - escrow">Use escrow for payments</Label>;
              </div>;
            </>)}
          <div className="rounded - md bg - muted p - 4">;
            <h4 className="text - sm font - medium mb - 2">Smart Contract Preview</h4>;
            <div className="max - h-52 overflow - y-auto bg - background p - 3 rounded text - xs font - mono">;
              <pre>{solidity_code.slice (0, 500)}...</pre>;
=======
          ;
          <div className="rounded-md bg-muted p-4">;
            <h4 className="text-sm font-medium mb-2">Smart Contract Preview</h4>;
            <div className="max-h-52 overflow-y-auto bg-background p-3 rounded text-xs font-mono">;
              <pre>{solidityCode.slice(0, 500)}...</pre>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            </div>;
          </div>;
        </div>;
      </CardContent>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/blockchain/SmartContractDeployment.tsx




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/blockchain/SmartContractDeployment.tsx
      <CardFooter className="flex justify - between">;
        <Button variant="outline" on_click={handleDownloadSolidity}>;
          <Download className="mr - 2 h - 4 w - 4" />;
          Download .sol File;
        </Button>;
        <Button on_click={handleDeployContract} disabled={is_deploying}>;
          {is_deploying ? (
            <>;
              <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" />;
              Deploying...;
            </>) : (
            'Deploy Contract')}
        </Button>;
      </CardFooter>;
    </Card>);
=======
      ;
      <CardFooter className="flex justify-between">;
        <Button variant="outline" onClick={handleDownloadSolidity}>;
          <Download className="mr-2 h-4 w-4" />;
          Download .sol File;
        </Button>;
        ;
        <Button onClick={handleDeployContract} disabled={isDeploying}>;
          {isDeploying ? (;
            <>;
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
              Deploying...;
            </>;
          ) :(;
            'Deploy Contract';
          )}
        </Button>;
      </CardFooter>;
    </Card>;
  ),; interface SmartContractDeploymentProps {
  solidityCode: string;
onDeploy: (options: DeploymentOptions) => Promise<void>;
isDeploying: boolean 
}export function SmartContractDeployment ({
  solidityCode;
onDeploy;
isDeploying 
}: SmartContractDeploymentProps) {
  const [deploymentOptions, setDeploymentOptions] = useState<DeploymentOptions> ({
  network: 'none';
useEscrow: true;
deployToChain: false;
walletAddress: '' 
});
const handleDeployContract = async () => {
  if (deploymentOptions.deployToChain && !deploymentOptions.walletAddress) {
  
}try {
  await onDeploy (deploymentOptions) 
}catch (error) {
  
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/blockchain/SmartContractDeployment.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
};
const handleDownloadSolidity = () => {
  //Create a blob from the Solidity code const blob = new Blob ([solidityCode], {
  type: 'text/plain' 
});
const url = URL.createObjectURL (blob);
//Create a temporary anchor to trigger download const a = document.createElement ('a');
a.href = url;
a.download = 'ZionContract.sol';
document.body.appendChild (a);
a.click ();
//Clean up URL.revokeObjectURL (url);
document.body.removeChild (a);
flex items-center gap-2"> <ShieldCheck className=" h-5 w-5 text-primary"/> Smart Contract Deployment </CardTitle> <CardDescription> Deploy your agreement as a smart contract for enhanced security and automation </CardDescription> </CardHeader> <CardContent className=" space-y-6"> <div className=" space-y-4"> <div className=" flex items-center space-x-2"> <Switch /> <Label htmlFor=" deploy-blockchain">Deploy to blockchain</Label> </div> > <div className=" flex items-center space-x-2"> <RadioGroupItem value=" ethereum"id=" ethereum"/> <Label htmlFor=" ethereum">Ethereum (higher fees, more secure) </Label> </div> <div className=" flex items-center space-x-2"> <RadioGroupItem value=" polygon"id=" polygon"/> <Label htmlFor=" polygon">Polygon (lower fees, faster) </Label> </div> </RadioGroup> </div> <div className=" space-y-2"> <Label htmlFor=" wallet-address">Wallet address for transactions</Label> <Input /> </div> <div className=" flex items-center space-x-2"> <Switch /> <Label htmlFor=" use-escrow">Use escrow for payments</Label> </div> </>) 
}</div> </div> </div> </CardContent> Download .sol File </Button> <Button onClick= {
  handleDeployContract 
}disabled= {
  isDeploying 
}> {
  isDeploying ? (<> <Loader2 className=" mr-2 h-4 w-4 animate-spin" /> Deploying... </>) : ('Deploy Contract') 
}</Button> </CardFooter> </Card>) 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/blockchain/SmartContractDeployment.tsx
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
}
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
