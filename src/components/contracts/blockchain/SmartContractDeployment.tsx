<<<<<<< HEAD
<<<<<<< HEAD


  
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
interface SmartContractDeploymentProps {
  solidityCode: string
  onDeploy: (options: DeploymentOptions,) => Promise<void>
  isDeploying: boolean
}
export function SmartContractDeployment({
  solidityCode
  onDeploy
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
interface SmartContractDeploymentProps {
  solidityCode: string,
  onDeploy: (options: DeploymentOptions) => Promise<void>,
  isDeploying: boolean
}

export function SmartContractDeployment({ 
  solidityCode,
  onDeploy,
  solidityCode
  onDeploy
  solidityCode,
  onDeploy,
  solidityCode
  onDeploy
  solidityCode,
  onDeploy,
  isDeploying
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
isDeploying
}: SmartContractDeploymentProps) {
  const [deploymentOptions, setDeploymentOptions] = useState<DeploymentOptions>({
    network: 'none'
    useEscrow: true
    deployToChain: false
    walletAddress: ''
<<<<<<< HEAD
<<<<<<< HEAD
  })
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
=======
  })
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
  }
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
  },;
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
=======

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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }),

  const handleDeployContract = async () => {
    if (deploymentOptions.deployToChain && !deploymentOptions.walletAddress) {
      toast.error("Please enter a wallet address for blockchain deployment"),
      return
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
<<<<<<< HEAD
<<<<<<< HEAD
      
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
    // Create a temporary anchor to trigger download;
    const a = document.createElement('a'),;
    a.href = url,;
    a.download = 'ZionContract.sol',;
    document.body.appendChild(a),;
    a.click(),;
    // Clean up;
    URL.revokeObjectURL(url),;
    document.body.removeChild(a),;
    toast.success("Solidity contract downloaded");
  },;
  return (;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <Card className="w-full">;
      <CardHeader>;
        <CardTitle className="flex items-center gap-2">;
          <ShieldCheck className="h-5 w-5 text-primary" />;
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
          Smart Contract Deployment;
        </CardTitle>;
        <CardDescription>;
          Deploy your agreement as a smart contract for enhanced security and automation;
        </CardDescription>;
      </CardHeader>;
<<<<<<< HEAD
<<<<<<< HEAD
      ;
      <CardContent className="space-y-6">;
        <div className="space-y-4">;
          <div className="flex items-center space-x-2">;
            <Switch;
              id="deploy-blockchain";
              aria-label="Deploy to blockchain";
              checked={deploymentOptions.deployToChain}
              onCheckedChange={(checked) => setDeploymentOptions({;
                ...deploymentOptions,;
            />
            <Label htmlFor="deploy-blockchain">Deploy to blockchain</Label>
          </div>
            <>
              <div className="space-y-2">
                <Label>Select blockchain network</Label>
                  onValueChange={(value) => setDeploymentOptions({
                    ...deploymentOptions;                    network: value as BlockchainNetwork
                  onValueChange={(value) => setDeploymentOptions({
                    ...deploymentOptions;                    network: value as BlockchainNetwork
ursor/fix-website-loading-errors-and-merge-6662
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      


      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Switch

              id="deploy-blockchain"
              aria-label="Deploy to blockchain"

              })}
<<<<<<< HEAD


          


<<<<<<< HEAD
                deployToChain: checked;
              })}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            />
            <Label htmlFor="deploy-blockchain">Deploy to blockchain</Label>
          </div>
          
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {deploymentOptions.deployToChain && (
            <>
              <div className="space-y-2">
                <Label>Select blockchain network</Label>

<<<<<<< HEAD
<<<<<<< HEAD
                <RadioGroup
                  defaultValue={deploymentOptions.network}
                  onValueChange={(value) => setDeploymentOptions({
                    ...deploymentOptions;                    network: value as BlockchainNetwork
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <RadioGroup 
                  defaultValue={deploymentOptions.network}
                  onValueChange={(value) => setDeploymentOptions({;
                    ...deploymentOptions,;
                    network: value as BlockchainNetwork;


                  onValueChange={(value) => setDeploymentOptions({;
                    ...deploymentOptions,;
                    network: value as BlockchainNetwork;


<<<<<<< HEAD
<<<<<<< HEAD
                  onValueChange={(value) => setDeploymentOptions({
                    ...deploymentOptions;                    network: value as BlockchainNetwork
                  onValueChange={(value) => setDeploymentOptions({;
                    ...deploymentOptions,;
                    network: value as BlockchainNetwork;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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



              

<<<<<<< HEAD
              <div className="space-y-2">
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
              
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

              
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className="space-y-2">
                <Label htmlFor="wallet-address">Wallet address for transactions</Label>
                <Input 
                  id="wallet-address" 
                  placeholder="0x..." 
                  value={deploymentOptions.walletAddress || ''}
<<<<<<< HEAD
<<<<<<< HEAD
                  onChange={(e) => setDeploymentOptions({
                    ...deploymentOptions;                    walletAddress: e.target.value
                  })}
                />
              </div>
                  onChange={(e) => setDeploymentOptions({;
                    ...deploymentOptions;
                    walletAddress: e.target.value;
                  })}
                />
              </div>
              
ursor/fix-website-loading-errors-and-merge-6662
              <div className="flex items-center space-x-2">
                  id="use-escrow"
                  aria-label="Use escrow"
                  checked={deploymentOptions.useEscrow}

              
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className="flex items-center space-x-2">
                <Switch
                  id="use-escrow"
                  aria-label="Use escrow"
                  checked={deploymentOptions.useEscrow}
<<<<<<< HEAD
<<<<<<< HEAD
                  onCheckedChange={(checked) => setDeploymentOptions({
                    ...deploymentOptions;                    useEscrow: checked

                  onCheckedChange={(checked) => setDeploymentOptions({;
                    ...deploymentOptions;
                    useEscrow: checked;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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


                  onCheckedChange={(checked) => setDeploymentOptions({;
                    ...deploymentOptions;
                    useEscrow: checked;
                  })}
                />
                <Label htmlFor="use-escrow">Use escrow for payments</Label>
              </div>
            </>
          )}
ursor/fix-website-loading-errors-and-merge-6662
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
=======

            />;
            <Label htmlFor="deploy-blockchain">Deploy to blockchain</Label>;
          </div>;
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


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
=======

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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  })}
                />;
                <Label htmlFor="use-escrow">Use escrow for payments</Label>;
              </div>;
            </>;
          )}
          
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className="rounded-md bg-muted p-4">
            <h4 className="text-sm font-medium mb-2">Smart Contract Preview</h4>
            <div className="max-h-52 overflow-y-auto bg-background p-3 rounded text-xs font-mono">
              <pre>{solidityCode.slice(0, 500)}...</pre>
            </div>
          </div>
        </div>
      </CardContent>
<<<<<<< HEAD
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
      <CardFooter className="flex justify-between">
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      


      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={handleDownloadSolidity}>
          <Download className="mr-2 h-4 w-4" />
          Download .sol File
        </Button>
<<<<<<< HEAD
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
        <Button onClick={handleDeployContract} disabled={isDeploying}>
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        


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
          ;
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <div className="rounded-md bg-muted p-4">;
            <h4 className="text-sm font-medium mb-2">Smart Contract Preview</h4>;
            <div className="max-h-52 overflow-y-auto bg-background p-3 rounded text-xs font-mono">;
              <pre>{solidityCode.slice(0, 500)}...</pre>;
=======


          <div className="rounded-md bg-muted p-4">;
            <h4 className="text-sm font-medium mb-2">Smart Contract Preview</h4>;
            <div className="max-h-52 overflow-y-auto bg-background p-3 rounded text-xs font-mono">;
              <pre>{solidityCode && solidityCode.slice(0, 500)}...</pre>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </div>;
          </div>;
        </div>;
      </CardContent>;
<<<<<<< HEAD
      ;
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <CardFooter className="flex justify-between">;
        <Button variant="outline" onClick={handleDownloadSolidity}>;
          <Download className="mr-2 h-4 w-4" />;
          Download .sol File;
        </Button>;
<<<<<<< HEAD
        ;
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <Button onClick={handleDeployContract} disabled={isDeploying}>;
          {isDeploying ? (;
            <>;
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
              Deploying...;
            </>;
<<<<<<< HEAD
          ) :(;
=======
          ) : (;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            'Deploy Contract';
          )}


        </Button>;
      </CardFooter>;
    </Card>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
  );
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  );
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



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
        </Button>;
      </CardFooter>;
    </Card>;
  );
}
;
}
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
