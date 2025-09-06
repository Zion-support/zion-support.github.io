

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

=======
interface SmartContractDeploymentProps {
  solidityCode: string
  onDeploy: (options: DeploymentOptions,) => Promise<void>
  isDeploying: boolean
}
export function SmartContractDeployment({
  solidityCode
  onDeploy
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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

interface SmartContractDeploymentProps {
=======
>>>>>>> interface SmartContractDeploymentProps {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  solidityCode: string,
  onDeploy: (options: DeploymentOptions) => Promise<void>,
  isDeploying: boolean
}

export function SmartContractDeployment({ 
<<<<<<< HEAD

  isDeploying
=======
  solidityCode,
  onDeploy,
  solidityCode
  onDeploy
>>>>>>>   isDeploying
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
}: SmartContractDeploymentProps) {
  const [deploymentOptions, setDeploymentOptions] = useState<DeploymentOptions>({
    network: 'none'
    useEscrow: true
    deployToChain: false
    walletAddress: ''
<<<<<<< HEAD

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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
          Smart Contract Deployment;
        </CardTitle>;
        <CardDescription>;
          Deploy your agreement as a smart contract for enhanced security and automation;
        </CardDescription>;
      </CardHeader>;
      <CardContent className="space-y-6">;
        <div className="space-y-4">;
          <div className="flex items-center space-x-2">;
            <Switch;
              id="deploy-blockchain";
              aria-label="Deploy to blockchain";
              checked={deploymentOptions.deployToChain}
              onCheckedChange={(checked) => setDeploymentOptions({;
                ...deploymentOptions,;
                deployToChain: checked;
<<<<<<< HEAD

              })}
            />
            <Label htmlFor="deploy-blockchain">Deploy to blockchain</Label>
          </div>

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
              })}


          


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          {deploymentOptions.deployToChain && (
            <>
              <div className="space-y-2">
                <Label>Select blockchain network</Label>

<<<<<<< HEAD
=======

                <RadioGroup 
                  defaultValue={deploymentOptions.network}
                  onValueChange={(value) => setDeploymentOptions({;
                    ...deploymentOptions,;
                    network: value as BlockchainNetwork;

                  onValueChange={(value) => setDeploymentOptions({;
                    ...deploymentOptions,;
                    network: value as BlockchainNetwork;


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  })}
>>>>>>>                   className="flex flex-col space-y-1"
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
=======
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
              
>>>>>>>               <div className="space-y-2">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                <Label htmlFor="wallet-address">Wallet address for transactions</Label>
                <Input 
                  id="wallet-address" 
                  placeholder="0x..." 
                  value={deploymentOptions.walletAddress || ''}
<<<<<<< HEAD

=======
                  onChange={(e) => setDeploymentOptions({
                    ...deploymentOptions;                    walletAddress: e.target.value
                  })}
                />
              </div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  onChange={(e) => setDeploymentOptions({;
                    ...deploymentOptions;
                    walletAddress: e.target.value;
                  })}
                />
              </div>
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

                  onCheckedChange={(checked) => setDeploymentOptions({;
                    ...deploymentOptions;
                    useEscrow: checked;
<<<<<<< HEAD

                  })}
=======
>>>>>>>                   })}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                />
                <Label htmlFor="use-escrow">Use escrow for payments</Label>
              </div>
            </>
          )}
<<<<<<< HEAD

          <div className="rounded-md bg-muted p-4">
=======
ursor/fix-website-loading-errors-and-merge-6662
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                  })}
                />;
                <Label htmlFor="use-escrow">Use escrow for payments</Label>;
              </div>;
            </>;
          )}


          


>>>>>>>           <div className="rounded-md bg-muted p-4">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            <h4 className="text-sm font-medium mb-2">Smart Contract Preview</h4>
            <div className="max-h-52 overflow-y-auto bg-background p-3 rounded text-xs font-mono">
              <pre>{solidityCode.slice(0, 500)}...</pre>
            </div>
          </div>
        </div>
      </CardContent>
<<<<<<< HEAD

=======
>>>>>>>       <CardFooter className="flex justify-between">
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      <CardFooter className="flex justify-between">
>>>>>>>         <Button variant="outline" onClick={handleDownloadSolidity}>
          <Download className="mr-2 h-4 w-4" />
          Download .sol File
        </Button>
<<<<<<< HEAD

=======
>>>>>>>         <Button onClick={handleDeployContract} disabled={isDeploying}>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        <Button onClick={handleDeployContract} disabled={isDeploying}>
>>>>>>>           {isDeploying ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Deploying...
            </>
          ) : (
            'Deploy Contract'
          )}
<<<<<<< HEAD

=======
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
>>>>>>> 
}
;

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
