<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/contracts/blockchain/SmartContractDeployment.tsx


=======


  
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React, { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { BlockchainNetwork, DeploymentOptions } from "@/types/smart-contracts"
import { Loader2, ShieldCheck, Download } from 'lucide-react'import { toast } from "sonner"
import {logErrorToProduction} from '@/utils/productionLogger'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
interface SmartContractDeploymentProps {
  solidityCode: string
  onDeploy: (options: DeploymentOptions,) => Promise<void>
  isDeploying: boolean
}
export function SmartContractDeployment({
  solidityCode
  onDeploy
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
import { Loader2, ShieldCheck, Download } from 'lucide-react'
import { toast } from "sonner",
import {logErrorToProduction} from '@/utils/productionLogger',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

interface SmartContractDeploymentProps {
=======
>>>>>>> interface SmartContractDeploymentProps {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
interface SmartContractDeploymentProps {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  solidityCode: string,
  onDeploy: (options: DeploymentOptions) => Promise<void>,
  isDeploying: boolean
}

export function SmartContractDeployment({ 
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  isDeploying
=======
  solidityCode,
  onDeploy,
  solidityCode
  onDeploy
>>>>>>>   isDeploying
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  solidityCode,
  onDeploy,
  solidityCode
  onDeploy
  solidityCode,
  onDeploy,
  isDeploying
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
isDeploying
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
  })
========
<<<<<<< HEAD
;
import React, { useState } from './react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle  } from '@/components / ui / card';
import { Button  } from '@/components / ui / button';
import { RadioGroup, RadioGroupItem  } from '@/components / ui / radio - group';
import { Label  } from '@/components / ui / label';
import { Input  } from '@/components / ui / input';
import { Switch  } from '@/components / ui / switch';
import { BlockchainNetwork, DeploymentOptions  } from '@/types / smart - contracts';
import { Loader2, ShieldCheck, Download } from 'lucide-react'import { toast  } from './sonner';
import {logErrorToProduction} from '@/utils / production_logger';
interface SmartContractDeploymentProps {
  solidity_code: string,
  on_deploy: (options: DeploymentOptions, ) => Promise < void>,
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/contracts/blockchain/SmartContractDeployment.tsx
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
      logErrorToProduction ('Deployment error:', { data: error });
    }
  }
<<<<<<<< HEAD:src/components/contracts/blockchain/SmartContractDeployment.tsx
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  })
  const handleDeployContract = async () => {
    if (deploymentOptions.deployToChain && !deploymentOptions.walletAddress) {
      toast.error("Please enter a wallet address for blockchain deployment")
      return;
    }
    try {
      await onDeploy(deploymentOptions)
    } catch (error) {
      logErrorToProduction('Deployment error:', { data: error })
    }
  }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const handleDownloadSolidity = () => {
    // Create a blob from the Solidity code
    const blob = new Blob([solidityCode], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    // Create a temporary anchor to trigger download
    const a = document.createElement('a')
    a.href = url
    a.download = 'ZionContract.sol'
    document.body.appendChild(a)
    a.click()
    // Clean up
    URL.revokeObjectURL(url)
    document.body.removeChild(a)
    toast.success("Solidity contract downloaded")
  }
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>   return (
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return (
>>>>>>>     <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-primary" />
          Smart Contract Deployment
        </CardTitle>
        <CardDescription>
          Deploy your agreement as a smart contract for enhanced security and automation
        </CardDescription>
      </CardHeader>
<<<<<<< HEAD

      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Switch

=======
>>>>>>>       <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Switch
              id="deploy-blockchain";
              aria-label="Deploy to blockchain";
              checked={deploymentOptions.deployToChain};
              onCheckedChange={(checked) => setDeploymentOptions({;
                ...deploymentOptions;                deployToChain: checked
              checked={deploymentOptions.deployToChain}
              onCheckedChange={(checked) => setDeploymentOptions({
                ...deploymentOptions;                deployToChain: checked
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  },;
========
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { BlockchainNetwork, DeploymentOptions } from "@/types/smart-contracts";
import { Loader2, ShieldCheck, Download } from 'lucide-react'import { toast } from "sonner";
import {logErrorToProduction} from '@/utils/productionLogger';
interface SmartContractDeploymentProps {;
  solidityCode: string,;
  onDeploy: (options: DeploymentOptions,) => Promise<void>,;
  isDeploying: boolean;
}
export function SmartContractDeployment(): any ({ ;
  solidityCode;
  onDeploy;
  isDeploying;
}: SmartContractDeploymentProps) {;
  const [deploymentOptions, setDeploymentOptions] = useState<DeploymentOptions>({;
    network: 'none',;
    useEscrow: true,;
    deployToChain: false,;
    walletAddress: '';
  });
  const handleDeployContract = async () => {;
    if (deploymentOptions && deploymentOptions.deployToChain && !deploymentOptions && deploymentOptions.walletAddress) {;
      toast && toast.error("Please enter a wallet address for blockchain deployment");
      return;
    }
    try {;
      await onDeploy(deploymentOptions);
    } catch (error) {;
      logErrorToProduction('Deployment error:', { data: error });
    }
  };
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/contracts/blockchain/SmartContractDeployment.tsx
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

=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }),

  const handleDeployContract = async () => {
    if (deploymentOptions.deployToChain && !deploymentOptions.walletAddress) {
      toast.error("Please enter a wallet address for blockchain deployment"),
      return
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React, { useState } from "react",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group",;
import { Label } from "@/components/ui/label",;
import { Input } from "@/components/ui/input",;
import { Switch } from "@/components/ui/switch",;
import { BlockchainNetwork, DeploymentOptions } from "@/types/smart-contracts",;
import { Loader2, ShieldCheck, Download } from 'lucide-react';
import { toast } from "sonner",;
import {logErrorToProduction} from '@/utils/productionLogger',;
interface SmartContractDeploymentProps {;
<<<<<<< HEAD
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
      logErrorToProduction('Deployment error:', { data:error }),;
    }
  },;
  ;
  const handleDownloadSolidity = () => {;
    // Create a blob from the Solidity code;
    const blob = new Blob([solidityCode], { type:'text/plain' }),;
    const url = URL.createObjectURL(blob),;
    ;
=======
  solidityCode: string,;
  onDeploy: (options: DeploymentOptions) => Promise<void>,;
  isDeploying: boolean;
}
;
export function SmartContractDeployment({;
  solidityCode,;
  onDeploy,;
  isDeploying;
}: SmartContractDeploymentProps) {;
  const [deploymentOptions, setDeploymentOptions] = useState<DeploymentOptions>({;
    network: 'none',;
    useEscrow: true,;
    deployToChain: false,;
    walletAddress: '';
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
      logErrorToProduction('Deployment error:', { data: error });
    }
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
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
            <Switch
              id="deploy-blockchain";
              aria-label="Deploy to blockchain";
              checked={deploymentOptions.deployToChain};
              onCheckedChange={(checked) => setDeploymentOptions({;
                ...deploymentOptions;                deployToChain: checked
              id="deploy-blockchain"
              aria-label="Deploy to blockchain"
              checked={deploymentOptions.deployToChain}
              onCheckedChange={(checked) => setDeploymentOptions({
                ...deploymentOptions;                deployToChain: checked
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
<<<<<<<< HEAD:src/components/contracts/blockchain/SmartContractDeployment.tsx
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/contracts/blockchain/SmartContractDeployment.tsx
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  const handleDownloadSolidity = () =>: any {
    // Create a blob from the Solidity code;
    const blob = new Blob ([solidity_code], { type: 'text / plain' }),
    const url = URL.createObjectURL (blob);
    // Create a temporary anchor to trigger download;
    const array = document.create_element ('a');
    a.href = url;
    a.download = 'ZionContract.sol';
    document.body.append_child (a);
    a.click ();
    // Clean up;
    URL.revokeObjectURL (url);
    document.body.remove_child (a);
    toast.success ("Solidity contract downloaded");
  }
  return (
    <Card className="w - full">;
      <CardHeader>;
        <CardTitle className="flex items - center gap - 2">;
          <ShieldCheck className="h - 5 w - 5 text - primary" />;
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          Smart Contract Deployment;
        </CardTitle>;
        <CardDescription>;
          Deploy your agreement as a smart contract for enhanced security and automation;
        </CardDescription>;
      </CardHeader>;
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/contracts/blockchain/SmartContractDeployment.tsx
========
<<<<<<< HEAD
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
                    ...deploymentOptions;                    network: value as BlockchainNetwork;
=======
      ;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/contracts/blockchain/SmartContractDeployment.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <CardContent className="space-y-6">;
        <div className="space-y-4">;
          <div className="flex items-center space-x-2">;
            <Switch;
              id="deploy-blockchain";
              aria-label="Deploy to blockchain";
              checked={deploymentOptions.deployToChain}
              onCheckedChange={(checked) => setDeploymentOptions({;
                ...deploymentOptions,;
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/contracts/blockchain/SmartContractDeployment.tsx
                deployToChain: checked;
<<<<<<< HEAD

              })}
            />
            <Label htmlFor="deploy-blockchain">Deploy to blockchain</Label>
          </div>

<<<<<<< HEAD
=======
>>>>>>>               })}
            />
            <Label htmlFor="deploy-blockchain">Deploy to blockchain</Label>
          </div>
>>>>>>>           {deploymentOptions.deployToChain && (
            <>
              <div className="space-y-2">
                <Label>Select blockchain network</Label>
                  onValueChange={(value) => setDeploymentOptions({
                    ...deploymentOptions;                    network: value as BlockchainNetwork
                  onValueChange={(value) => setDeploymentOptions({
                    ...deploymentOptions;                    network: value as BlockchainNetwork
>>>>>>>                   })}
ursor/fix-website-loading-errors-and-merge-6662
=======
      


      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Switch

              id="deploy-blockchain"
              aria-label="Deploy to blockchain"

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
              })}


          


<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
                deployToChain: checked;
              })}
            />
            <Label htmlFor="deploy-blockchain">Deploy to blockchain</Label>
          </div>
          
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          {deploymentOptions.deployToChain && (
            <>
              <div className="space-y-2">
                <Label>Select blockchain network</Label>
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                <RadioGroup
                  defaultValue={deploymentOptions.network}
                  onValueChange={(value) => setDeploymentOptions({
                    ...deploymentOptions;                    network: value as BlockchainNetwork
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                <RadioGroup 
                  defaultValue={deploymentOptions.network}
                  onValueChange={(value) => setDeploymentOptions({;
                    ...deploymentOptions,;
                    network: value as BlockchainNetwork;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

                  onValueChange={(value) => setDeploymentOptions({;
                    ...deploymentOptions,;
                    network: value as BlockchainNetwork;


<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  })}
>>>>>>>                   className="flex flex-col space-y-1"
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  onValueChange={(value) => setDeploymentOptions({
                    ...deploymentOptions;                    network: value as BlockchainNetwork
                  onValueChange={(value) => setDeploymentOptions({;
                    ...deploymentOptions,;
                    network: value as BlockchainNetwork;
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                  })}
                  className="flex flex-col space-y-1"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======



              
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

              <div className="space-y-2">
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              <div className="space-y-2">
                <Label htmlFor="wallet-address">Wallet address for transactions</Label>
                <Input
                  id="wallet-address"
                  placeholder="0x..."
                  value={deploymentOptions.walletAddress |''}
                  onChange={(e) => setDeploymentOptions({
                    ...deploymentOptions;                    walletAddress: e.target.value
                  })}
                />
              </div>
<<<<<<< HEAD
<<<<<<< HEAD
              
>>>>>>>               <div className="space-y-2">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              
              <div className="space-y-2">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <Label htmlFor="wallet-address">Wallet address for transactions</Label>
                <Input 
                  id="wallet-address" 
                  placeholder="0x..." 
                  value={deploymentOptions.walletAddress || ''}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  onChange={(e) => setDeploymentOptions({
                    ...deploymentOptions;                    walletAddress: e.target.value
                  })}
                />
              </div>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  onChange={(e) => setDeploymentOptions({;
                    ...deploymentOptions;
                    walletAddress: e.target.value;
                  })}
                />
              </div>
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
              
>>>>>>>               <div className="flex items-center space-x-2">
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              <div className="flex items-center space-x-2">
>>>>>>>                 <Switch
                  id="use-escrow"
                  aria-label="Use escrow"
                  checked={deploymentOptions.useEscrow}

=======
              
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
              <div className="flex items-center space-x-2">
                <Switch
                  id="use-escrow"
                  aria-label="Use escrow"
                  checked={deploymentOptions.useEscrow}
                  onCheckedChange={(checked) => setDeploymentOptions({
                    ...deploymentOptions;                    useEscrow: checked

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  onCheckedChange={(checked) => setDeploymentOptions({;
                    ...deploymentOptions;
                    useEscrow: checked;
<<<<<<< HEAD
<<<<<<< HEAD

                  })}
=======
>>>>>>>                   })}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
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
                    ...deploymentOptions;                    network: value as BlockchainNetwork;


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                  onCheckedChange={(checked) => setDeploymentOptions({;
                    ...deploymentOptions;
                    useEscrow: checked;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  })}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                />
                <Label htmlFor="use-escrow">Use escrow for payments</Label>
              </div>
            </>
          )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
          <div className="rounded-md bg-muted p-4">
=======
ursor/fix-website-loading-errors-and-merge-6662
========
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/contracts/blockchain/SmartContractDeployment.tsx
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                  })}
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
                    ...deploymentOptions;                    walletAddress: e && e.target.value;
                  })}
                />;
              </div>;
              <div className="flex items-center space-x-2">;
                <Switch
                  id="use-escrow"
                  aria-label="Use escrow"
                  checked={deploymentOptions && deploymentOptions.useEscrow}
                  onCheckedChange={(checked) => setDeploymentOptions({;
                    ...deploymentOptions;                    useEscrow: checked;
<<<<<<< HEAD
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
                <Switch;
                  id="use-escrow";
                  aria-label="Use escrow";
                  checked={deploymentOptions.useEscrow}
                  onCheckedChange={(checked) => setDeploymentOptions({;
                    ...deploymentOptions,;
                    useEscrow:checked;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                  })}
                />;
                <Label htmlFor="use-escrow">Use escrow for payments</Label>;
              </div>;
            </>;
          )}
<<<<<<<< HEAD:src/components/contracts/blockchain/SmartContractDeployment.tsx


          


>>>>>>>           <div className="rounded-md bg-muted p-4">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          
          <div className="rounded-md bg-muted p-4">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <h4 className="text-sm font-medium mb-2">Smart Contract Preview</h4>
            <div className="max-h-52 overflow-y-auto bg-background p-3 rounded text-xs font-mono">
              <pre>{solidityCode.slice(0, 500)}...</pre>
            </div>
          </div>
        </div>
      </CardContent>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>       <CardFooter className="flex justify-between">
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      <CardFooter className="flex justify-between">
>>>>>>>         <Button variant="outline" onClick={handleDownloadSolidity}>
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={handleDownloadSolidity}>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <Download className="mr-2 h-4 w-4" />
          Download .sol File
        </Button>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>         <Button onClick={handleDeployContract} disabled={isDeploying}>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        <Button onClick={handleDeployContract} disabled={isDeploying}>
>>>>>>>           {isDeploying ? (
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
        <Button onClick={handleDeployContract} disabled={isDeploying}>
          {isDeploying ? (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Deploying...
            </>
          ) : (
            'Deploy Contract'
          )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        </Button>
      </CardFooter>
    </Card>
  )
}
<CardHeader> <CardTitle className="flex items-center gap-2" > <ShieldCheck className="h-5 w-5 text-primary" /> Smart Contract Deployment </CardTitle> <CardDescription> Deploy your agreement as a smart contract for enhanced security and automation </CardDescription> </CardHeader> <CardContent className="space-y-6" > <div className="space-y-4" > <div className="flex items-center space-x-2" > <Switch /> <Label htmlFor="deploy-blockchain" >Deploy to blockchain</Label> </div> > <div className="flex items-center space-x-2" > <RadioGroupItem value="ethereum" id="ethereum" /> <Label htmlFor="ethereum" >Ethereum (higher fees, more secure) </Label> </div> <div className="flex items-center space-x-2" > <RadioGroupItem value="polygon" id="polygon" /> <Label htmlFor="polygon" >Polygon (lower fees, faster) </Label> </div> </RadioGroup> </div> <div className="space-y-2" > <Label htmlFor="wallet-address" >Wallet address for transactions</Label> <Input /> </div> <div className="flex items-center space-x-2" > <Switch /> <Label htmlFor="use-escrow" >Use escrow for payments</Label> </div> </>)
}</div> </div> </div> </CardContent> Download .sol File </Button> <Button onClick={
  handleDeployContract
}disabled= {
  isDeploying
}> {'"
  isDeploying ? (<> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Deploying... </>) : ('Deploy Contract')
}</Button> </CardFooter> </Card>)
}'"}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 
}
;

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
<<<<<<< HEAD
          <div className="rounded-md bg-muted p-4">;
            <h4 className="text-sm font-medium mb-2">Smart Contract Preview</h4>;
            <div className="max-h-52 overflow-y-auto bg-background p-3 rounded text-xs font-mono">;
              <pre>{solidityCode && solidityCode.slice(0, 500)}...</pre>;
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
<<<<<<< HEAD
=======
      ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      <CardFooter className="flex justify-between">;
        <Button variant="outline" onClick={handleDownloadSolidity}>;
          <Download className="mr-2 h-4 w-4" />;
          Download .sol File;
        </Button>;
<<<<<<< HEAD
=======
        ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        <Button onClick={handleDeployContract} disabled={isDeploying}>;
          {isDeploying ? (;
            <>;
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
              Deploying...;
            </>;
<<<<<<< HEAD
          ) : (;
=======
          ) :(;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            'Deploy Contract';
          )}
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
        </Button>;
      </CardFooter>;
    </Card>;
<<<<<<< HEAD
  );
<<<<<<< HEAD
};
<CardHeader> <CardTitle className="flex items-center gap-2" > <ShieldCheck className="h-5 w-5 text-primary" /> Smart Contract Deployment </CardTitle> <CardDescription> Deploy your agreement as a smart contract for enhanced security and automation </CardDescription> </CardHeader> <CardContent className="space-y-6" > <div className="space-y-4" > <div className="flex items-center space-x-2" > <Switch /> <Label htmlFor="deploy-blockchain" >Deploy to blockchain</Label> </div> > <div className="flex items-center space-x-2" > <RadioGroupItem value="ethereum" id="ethereum" /> <Label htmlFor="ethereum" >Ethereum (higher fees, more secure) </Label> </div> <div className="flex items-center space-x-2" > <RadioGroupItem value="polygon" id="polygon" /> <Label htmlFor="polygon" >Polygon (lower fees, faster) </Label> </div> </RadioGroup> </div> <div className="space-y-2" > <Label htmlFor="wallet-address" >Wallet address for transactions</Label> <Input /> </div> <div className="flex items-center space-x-2" > <Switch /> <Label htmlFor="use-escrow" >Use escrow for payments</Label> </div> </>) ;
}</div> </div> </div> </CardContent> Download .sol File </Button> <ButtononClick={
  handleDeployContract 
}disabled= {
  isDeploying 
}> {'";
  isDeploying ? (<> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Deploying... </>) : ('Deploy Contract') ;
}</Button> </CardFooter> </Card>) ;
}'"}
=======



>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
      <CardContent className="space - y-6">;
        <div className="space - y-4">;
          <div className="flex items - center space - x-2">;
            <Switch;
              id="deploy - blockchain";
              aria - label="Deploy to blockchain";
              checked={deployment_options.deployToChain}
              onCheckedChange={(checked) => setDeploymentOptions ({
                ...deployment_options;                deployToChain: checked;
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
                    ...deployment_options;                    network: value as BlockchainNetwork;
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
                    ...deployment_options;                    wallet_address: e.target.value;
                  })}
                />;
              </div>;
              <div className="flex items - center space - x-2">;
                <Switch;
                  id="use - escrow";
                  aria - label="Use escrow";
                  checked={deployment_options.use_escrow}
                  onCheckedChange={(checked) => setDeploymentOptions ({
                    ...deployment_options;                    use_escrow: checked;
                  })}
                />;
                <Label html_for="use - escrow">Use escrow for payments</Label>;
              </div>;
            </>)}
          <div className="rounded - md bg - muted p - 4">;
            <h4 className="text - sm font - medium mb - 2">Smart Contract Preview</h4>;
            <div className="max - h-52 overflow - y-auto bg - background p - 3 rounded text - xs font - mono">;
              <pre>{solidity_code.slice (0, 500)}...</pre>;
            </div>;
          </div>;
        </div>;
      </CardContent>;
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
}
<CardHeader> <CardTitle className="flex items - center gap - 2" > <ShieldCheck className="h - 5 w - 5 text - primary" /> Smart Contract Deployment </CardTitle> <CardDescription> Deploy your agreement as a smart contract for enhanced security and automation </CardDescription> </CardHeader> <CardContent className="space - y-6" > <div className="space - y-4" > <div className="flex items - center space - x-2" > <Switch /> <Label html_for="deploy - blockchain" >Deploy to blockchain</Label> </div> > <div className="flex items - center space - x-2" > <RadioGroupItem value="ethereum" id="ethereum" /> <Label html_for="ethereum" >Ethereum (higher fees, more secure) </Label> </div> <div className="flex items - center space - x-2" > <RadioGroupItem value="polygon" id="polygon" /> <Label html_for="polygon" >Polygon (lower fees, faster) </Label> </div> </RadioGroup> </div> <div className="space - y-2" > <Label html_for="wallet - address" >Wallet address for transactions</Label> <Input /> </div> <div className="flex items - center space - x-2" > <Switch /> <Label html_for="use - escrow" >Use escrow for payments</Label> </div> </>);
}</div> </div> </div> </CardContent> Download .sol File </Button> <Button on_click={
  handleDeployContract;
}disabled= {
  is_deploying;
}> {'";
  is_deploying ? (<> <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" /> Deploying... </>) : ('Deploy Contract');
}</Button> </CardFooter> </Card>);
}'"}
<<<<<<< HEAD
=======
  ),; interface SmartContractDeploymentProps {;
  solidityCode: string;
onDeploy: (options: DeploymentOptions) => Promise<void>;
isDeploying: boolean ;
}export function SmartContractDeployment ({;
  solidityCode;
onDeploy;
isDeploying ;
}: SmartContractDeploymentProps) {;
  const [deploymentOptions, setDeploymentOptions] = useState<DeploymentOptions> ({;
  network: 'none';
useEscrow: true;
deployToChain: false;';
walletAddress: '' ;
});
const handleDeployContract = async () => {;
  if (deploymentOptions.deployToChain && !deploymentOptions.walletAddress) {;
  ;
}try {;
  await onDeploy (deploymentOptions) ;
}catch (error) {';
  logErrorToProduction ('Deployment error:', {;
  data: error ;
}) ;
}
};
<CardHeader> <CardTitle className="flex items-center gap-2" > <ShieldCheck className="h-5 w-5 text-primary" /> Smart Contract Deployment </CardTitle> <CardDescription> Deploy your agreement as a smart contract for enhanced security and automation </CardDescription> </CardHeader> <CardContent className="space-y-6" > <div className="space-y-4" > <div className="flex items-center space-x-2" > <Switch /> <Label htmlFor="deploy-blockchain" >Deploy to blockchain</Label> </div> > <div className="flex items-center space-x-2" > <RadioGroupItem value="ethereum" id="ethereum" /> <Label htmlFor="ethereum" >Ethereum (higher fees, more secure) </Label> </div> <div className="flex items-center space-x-2" > <RadioGroupItem value="polygon" id="polygon" /> <Label htmlFor="polygon" >Polygon (lower fees, faster) </Label> </div> </RadioGroup> </div> <div className="space-y-2" > <Label htmlFor="wallet-address" >Wallet address for transactions</Label> <Input /> </div> <div className="flex items-center space-x-2" > <Switch /> <Label htmlFor="use-escrow" >Use escrow for payments</Label> </div> </>) ;
}</div> </div> </div> </CardContent> Download .sol File </Button> <Button onClick={;
  handleDeployContract ;
}disabled= {;
  isDeploying ;
}> {'";
  isDeploying ? (<> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Deploying... </>) : ('Deploy Contract') ;
}</Button> </CardFooter> </Card>) ;
}'"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/contracts/blockchain/SmartContractDeployment.tsx
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        </Button>;
      </CardFooter>;
    </Card>;
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
=======
}
;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
