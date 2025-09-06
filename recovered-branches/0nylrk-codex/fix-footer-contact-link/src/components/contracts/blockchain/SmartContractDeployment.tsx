


<<<<<<< HEAD
import React, { useState } from "react",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group",
import { Label } from "@/components/ui/label",
import { Input } from "@/components/ui/input",
import { Switch } from "@/components/ui/switch",
import { BlockchainNetwork, DeploymentOptions } from "@/types/smart-contracts",
import { Loader2, ShieldCheck, Download } from "lucide-react";
import { toast } from "sonner";
import { Loader2, ShieldCheck, Download } from "lucide-react",
import { toast } from "sonner",


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
interface SmartContractDeploymentProps {

  solidityCode: string
  onDeploy: (options: DeploymentOptions) => Promise<void>

  isDeploying: boolean
}
export function SmartContractDeployment({
  solidityCode;
  onDeploy;


<<<<<<< HEAD
export function SmartContractDeployment({ ;
  solidityCode;
  onDeploy;
export function SmartContractDeployment({ 
  solidityCode,
  onDeploy,



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  isDeploying
}: SmartContractDeploymentProps) {
  const [deploymentOptions, setDeploymentOptions] = useState<DeploymentOptions>({

    network: 'none'
    useEscrow: true
    deployToChain: false
    walletAddress: ''
  });
  }),

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
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
<<<<<<< HEAD

            <Switch
              id="deploy-blockchain"

              checked={deploymentOptions.deployToChain}
              onCheckedChange={(checked) => setDeploymentOptions({
                ...deploymentOptions;
                deployToChain: checked


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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
interface SmartContractDeploymentProps {;
  solidityCode: string,;
  onDeploy: (options: DeploymentOptions) => Promise<void>,;
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
    <Card className="w-full">;
      <CardHeader>;
        <CardTitle className="flex items-center gap-2">;
          <ShieldCheck className="h-5 w-5 text-primary" />;

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
          Smart Contract Deployment;
        </CardTitle>;
        <CardDescription>;
          Deploy your agreement as a smart contract for enhanced security and automation;
        </CardDescription>;
      </CardHeader>;




>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
              })}
            />
            <Label htmlFor="deploy-blockchain">Deploy to blockchain</Label>
          </div>
          {deploymentOptions.deployToChain && (
            <>
              <div className="space-y-2">
                <Label>Select blockchain network</Label>
                <RadioGroup
<<<<<<< HEAD

                  defaultValue={deploymentOptions.network}

                <RadioGroup 
                  defaultValue={deploymentOptions.network}
                  onValueChange={(value) => setDeploymentOptions({;
                    ...deploymentOptions,;
                    network: value as BlockchainNetwork;



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
                  defaultValue={deploymentOptions && deploymentOptions.network}
                  onValueChange={(value) => setDeploymentOptions({;

                    ...deploymentOptions;
                    network: value as BlockchainNetwork;
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
                <Input
                  id="wallet-address" 
                  placeholder="0x..." 
                  value={deploymentOptions && deploymentOptions.walletAddress || ''}
                  onChange={(e) => setDeploymentOptions({;

                    ...deploymentOptions;
                    walletAddress: e.target.value
                <Input 
                  id="wallet-address" 
                  placeholder="0x..." 
                  value={deploymentOptions.walletAddress || ''}

<<<<<<< HEAD
                  onChange={(e) => setDeploymentOptions({;
                    ...deploymentOptions;
                    walletAddress: e.target.value;

                  onChange={(e) => setDeploymentOptions({
                    ...deploymentOptions;
                    walletAddress: e.target.value
                  onChange={(e) => setDeploymentOptions({;
                    ...deploymentOptions;
                    walletAddress: e.target.value;

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
                  })}
                />
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="use-escrow"
                  checked={deploymentOptions && deploymentOptions.useEscrow}
                  onCheckedChange={(checked) => setDeploymentOptions({;
                    ...deploymentOptions;

                    useEscrow: checked
                <Switch 
                  id="use-escrow"
                  checked={deploymentOptions.useEscrow}
<<<<<<< HEAD

                  onCheckedChange={(checked) => setDeploymentOptions({;
                    ...deploymentOptions;
                    useEscrow: checked;

                  onCheckedChange={(checked) => setDeploymentOptions({
                    ...deploymentOptions;
                    useEscrow: checked
                  onCheckedChange={(checked) => setDeploymentOptions({;
                    ...deploymentOptions;
                    useEscrow: checked;

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
                  })}
                />;
                <Label htmlFor="use-escrow">Use escrow for payments</Label>;
              </div>;
            </>;
          )}
<<<<<<< HEAD

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
        </Button>
      </CardFooter>
    </Card>
  )

        </Button>;
      </CardFooter>;
    </Card>;
  );

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


          <div className="rounded-md bg-muted p-4">;
            <h4 className="text-sm font-medium mb-2">Smart Contract Preview</h4>;
            <div className="max-h-52 overflow-y-auto bg-background p-3 rounded text-xs font-mono">;
              <pre>{solidityCode && solidityCode.slice(0, 500)}...</pre>;

<<<<<<< HEAD
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======


=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
            </div>;
          </div>;
        </div>;
      </CardContent>;




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
}
;
