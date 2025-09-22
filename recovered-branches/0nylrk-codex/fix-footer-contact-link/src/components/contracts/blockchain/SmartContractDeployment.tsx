<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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

=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
import { toast } from "sonner",
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface SmartContractDeploymentProps {
=======

import React, { useState } from "react","
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card","
import { Button } from "@/components/ui/button","
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group","
import { Label } from "@/components/ui/label","
import { Input } from "@/components/ui/input","
import { Switch } from "@/components/ui/switch","
import { BlockchainNetwork, DeploymentOptions } from "@/types/smart-contracts",";
import { Loader2, ShieldCheck, Download } from "lucide-react";"
import { toast } from "sonner";"
import { Loader2, ShieldCheck, Download } from "lucide-react","
import { toast } from "sonner",
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

interface SmartContractDeploymentProps {};
  solidityCode: string;
  onDeploy: (options: DeploymentOptions) => Promise<void>

  isDeploying: boolean;
=======
import { toast } from "sonner",
interface SmartContractDeploymentProps {

  solidityCode: string
  onDeploy: (options: DeploymentOptions) => Promise<void>

  isDeploying: boolean
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}

<<<<<<< HEAD
<<<<<<< HEAD
export function SmartContractDeployment({
  solidityCode;
  onDeploy;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export function SmartContractDeployment({ ;
  solidityCode;
  onDeploy;
export function SmartContractDeployment({ 
  solidityCode,
  onDeploy,
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  isDeploying

=======
import { toast } from "sonner",  isDeploying
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  isDeploying
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}: SmartContractDeploymentProps) {
  const [deploymentOptions, setDeploymentOptions] = useState<DeploymentOptions>({
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

isDeploying;
}: SmartContractDeploymentProps) {}
  const [deploymentOptions, setDeploymentOptions] = useState<DeploymentOptions>({}
    network: 'none'
useEscrow: true
    deployToChain: false
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    walletAddress: ''
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

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

  const handleDeployContract = async () => {}
    // Check condition;
if ( {) {}
  $2;
}"
      toast.error ("Please enter a wallet address for blockchain deployment");
      return;
    }
    try {}
      await on_deploy (deployment_options);
} catch (error) {
      console.error ("Deployment error:", error);
    }
<<<<<<< HEAD
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

    a.download = 'ZionContract.sol',
    document.body.appendChild(a),
    a.click(),

// Clean up;
    URL.revokeObjectURL(url),
    document.body.removeChild(a),
    "
    toast.success("Solidity contract downloaded")
  },
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  return ("
    <Card className="w-full">
      <CardHeader>"
        <CardTitle className="flex items-center gap-2">"
          <ShieldCheck className="h-5 w-5 text-primary" />
          Smart Contract Deployment;
        </CardTitle>
        <CardDescription>
          Deploy your agreement as a smart contract for enhanced security and automation;
        </CardDescription>
      </CardHeader>"
      <CardContent className="space-y-6">"
        <div className="space-y-4">"
          <div className="flex items-center space-x-2">
<<<<<<< HEAD
            <Switch
              id="deploy-blockchain"
              checked={deploymentOptions.deployToChain}
=======
    walletAddress: ''              checked={deploymentOptions.deployToChain}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    walletAddress: ''              checked={deploymentOptions.deployToChain}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
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

              checked={deploymentOptions.deployToChain}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              onCheckedChange={(checked) => setDeploymentOptions({
                ...deploymentOptions;
                deployToChain: checked
            <Switch 
              id="deploy-blockchain"
import React, { useState } from "react",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group",;
import { Label } from "@/components/ui/label",;
import { Input } from "@/components/ui/input",;
import { Switch } from "@/components/ui/switch",;
import { BlockchainNetwork, DeploymentOptions } from "@/types/smart-contracts",;
import { Loader2, ShieldCheck, Download } from "lucide-react",;
<<<<<<< HEAD
import { toast } from "sonner",;
<<<<<<< HEAD
=======
import { toast } from "sonner",;
  }

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import {toast} from "sonner";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
interface SmartContractDeploymentProps {;
  solidityCode: string,;
  onDeploy: (options: DeploymentOptions) => Promise<void>,;
  isDeploying: boolean;
}

isDeploying;
=======
import { toast } from "sonner",;  isDeploying;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
export function SmartContractDeployment(): any ({ ;
  solidityCode;
  onDeploy;
  isDeploying;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}: SmartContractDeploymentProps) {;
  const [deploymentOptions, setDeploymentOptions] = useState<DeploymentOptions>({;'
    network: 'none',;
    useEscrow: true,;
    deployToChain: false,;'
    walletAddress: '';
});

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
<<<<<<< HEAD
<<<<<<< HEAD

  }
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  }
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          Smart Contract Deployment;
        </CardTitle>;
        <CardDescription>;
          Deploy your agreement as a smart contract for enhanced security and automation;
        </CardDescription>;
      </CardHeader>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              })}
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
              })}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            />
=======

              })}
            />"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <Label htmlFor="deploy-blockchain">Deploy to blockchain</Label>
          </div>
          {deploymentOptions.deployToChain && (
            <>"
              <div className="space-y-2">
                <Label>Select blockchain network</Label>
onValueChange={(value) => setDeploymentOptions({
                    ...deploymentOptions;
                    network: value as BlockchainNetwork
<<<<<<< HEAD
                  defaultValue={deploymentOptions.network}
                  onValueChange={(value) => setDeploymentOptions({;
                    ...deploymentOptions,;
                    network: value as BlockchainNetwork;
                  onValueChange={(value) => setDeploymentOptions({;
                    ...deploymentOptions,;
                    network: value as BlockchainNetwork;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                  onValueChange={(value) => setDeploymentOptions({;
                    ...deploymentOptions,;
                    network: value as BlockchainNetwork;
                  onValueChange={(value) => setDeploymentOptions({;
                    ...deploymentOptions,;
                    network: value as BlockchainNetwork;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
>;
                  <div className="flex items-center space-x-2">;
                    <RadioGroupItem value="ethereum" id="ethereum" />;
                    <Label htmlFor="ethereum">Ethereum (higher fees, more secure)</Label>;
                  </div>;"
                  <div className="flex items-center space-x-2">;"
                    <RadioGroupItem value="polygon" id="polygon" />;"
                    <Label htmlFor="polygon">Polygon (lower fees, faster)</Label>;
                  </div>;
                </RadioGroup>;
              </div>;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              <div className="space-y-2">;
                <Label htmlFor="wallet-address">Wallet address for transactions</Label>;
                <Input"
                  id="wallet-address" "
                  placeholder="0x..." '
=======
              <div className="space-y-2">;
                <Label htmlFor="wallet-address">Wallet address for transactions</Label>;
                <Input
                  id="wallet-address" 
                  placeholder="0x..." 
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  value={deploymentOptions && deploymentOptions.walletAddress || ''}
                  onChange={(e) => setDeploymentOptions({;

                    ...deploymentOptions;
<<<<<<< HEAD
                    walletAddress: e && e.target.value;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                    walletAddress: e && e.target.value;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                <Input 
                  id="wallet-address" 
                  placeholder="0x..." 
                  value={deploymentOptions.walletAddress || ''}

                  })}

                />;
              </div>;

              <div className="flex items-center space-x-2">;

                  onChange={(e) => setDeploymentOptions({
=======

                <Input "
                  id="wallet-address" "
                  placeholder="0x..." '
                  value={deploymentOptions.walletAddress || ''}

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    ...deploymentOptions;
                    walletAddress: e.target.value;
                  onChange={(e) => setDeploymentOptions({;
                    ...deploymentOptions;
                    walletAddress: e.target.value;

                  })}
/>;
              </div>;
              <div className="flex items-center space-x-2">;
                <Switch
                  id="use-escrow"
                  checked={deploymentOptions && deploymentOptions.useEscrow}
                  onCheckedChange={(checked) => setDeploymentOptions({;
                    ...deploymentOptions;

                    useEscrow: checked;

                <Switch 
                  id="use-escrow"
                  checked={deploymentOptions.useEscrow}

...deploymentOptions;
                    useEscrow: checked;
                  onCheckedChange={(checked) => setDeploymentOptions({;
                    ...deploymentOptions;
                    useEscrow: checked;

                  })}
                />;"
                <Label htmlFor="use-escrow">Use escrow for payments</Label>;
              </div>;
            </>;
          )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                    useEscrow: checked
                  onCheckedChange={(checked) => setDeploymentOptions({;
                    ...deploymentOptions;
                    useEscrow: checked;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                  })}
                />
                <Label htmlFor="use-escrow">Use escrow for payments</Label>
              </div>
            </>
          )}
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

}
;
}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
        </Button>
      </CardFooter>
    </Card>
  )

import React, { useState } from "react";""
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";""
import {Button} from "@/components/ui/button";""
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";""
import {Label} from "@/components/ui/label";""
import {Input} from "@/components/ui/input";""
import {Switch} from "@/components/ui/switch";""
import {BlockchainNetwork, DeploymentOptions} from "@/types/smart-contracts";""
import {Loader2, ShieldCheck, Download} from "lucide-react";""
import {toast} from "sonner";""
import React, { useState } from "react",""
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",""
import { Button } from "@/components/ui/button",""
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group",""
import { Label } from "@/components/ui/label",""
import { Input } from "@/components/ui/input",""
import { Switch } from "@/components/ui/switch",""
import { BlockchainNetwork, DeploymentOptions } from "@/types/smart-contracts",""
import { Loader2, ShieldCheck, Download } from "lucide-react";""
import { toast } from "sonner";""
import { Loader2, ShieldCheck, Download } from "lucide-react",""
import { toast } from "sonner","
interface SmartContractDeploymentProps {
  // TODO: Implement
}
  solidityCode: string;,
  onDeploy: (options: DeploymentOptions) => Promise<void>
</void>
  const [deploymentOptions, setDeploymentOptions] = useState<DeploymentOptions>({
</DeploymentOptions>)
  on_deploy: (options: DeploymentOptions) => Promise < void>,
  is_deploying: boolean;
}
export /**
 * SmartContractDeployment - Function description;
 */
function SmartContractDeployment() {
  const [deployment_options, setDeploymentOptions] = useState < DeploymentOptions>({"
    network: 'none','
    use_escrow: true,
    deployToChain: false,'
    wallet_address: '';')
  });
;

  const handleDeployContract = async () => {
    // Check condition;
if ( {) {
  $2;
}'
      toast.error ("Please enter a wallet address for blockchain deployment");"
      return;
    }
    try {
  // TODO: Implement
}
      await on_deploy (deployment_options);
    } catch (error) {"
      console.error ("Deployment error:", error);"
    }

  },
  const handleDownloadSolidity = () => {
    // Create a blob from the Solidity code;"
    const blob = new Blob([solidityCode], { type: 'text/plain' }),'
    const url = URL.createObjectURL(blob),
    // Create a temporary anchor to trigger download;'
    const a = document.createElement('a'),'
    a.href = url,'
    a.download = 'ZionContract.sol','
    document.body.appendChild(a),
    a.click(),
    // Clean up;
    URL.revokeObjectURL(url),
    document.body.removeChild(a),
    '
    toast.success("Solidity contract downloaded")"
  },

  return ("
    <Card className="w-full">"
</Card>
      <CardHeader>
</CardHeader>"
        <CardTitle className="flex items-center gap-2">"
</CardTitle>"
          <ShieldCheck className="h-5 w-5 text-primary" />"
</ShieldCheck>
        </CardTitle>
        <CardDescription>
</CardDescription>
        </CardDescription>
      </CardHeader>"
      <CardContent className="space-y-6">"
</CardContent>"
        <div className="space-y-4">"
</div>"
          <div className="flex items-center space-x-2">"
</div>
            <Switch;"
              id="deploy-blockchain"""
import React, { useState } from "react",;""
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;""
import { Button } from "@/components/ui/button",;""
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group",;""
import { Label } from "@/components/ui/label",;""
import { Input } from "@/components/ui/input",;""
import { Switch } from "@/components/ui/switch",;""
import { BlockchainNetwork, DeploymentOptions } from "@/types/smart-contracts",;""
import { Loader2, ShieldCheck, Download } from "lucide-react",;""
import { toast } from "sonner",;"
  }
"
import React, { useState } from "react";""
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";""
import {Button} from "@/components/ui/button";""
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";""
import {Label} from "@/components/ui/label";""
import {Input} from "@/components/ui/input";""
import {Switch} from "@/components/ui/switch";""
import {BlockchainNetwork, DeploymentOptions} from "@/types/smart-contracts";""
import {Loader2, ShieldCheck, Download} from "lucide-react";""
import {toast} from "sonner";"
interface SmartContractDeploymentProps {;
  solidityCode: string,;)
  onDeploy: (options: DeploymentOptions) => Promise<void>,;
</Switch>
  const [deploymentOptions, setDeploymentOptions] = useState<DeploymentOptions>({;
</DeploymentOptions>"
    <Card className="w-full">;"
</Card>
      <CardHeader>;
</CardHeader>"
        <CardTitle className="flex items-center gap-2">;"
</CardTitle>"
          <ShieldCheck className="h-5 w-5 text-primary" />;"
</ShieldCheck>
        </CardTitle>;
        <CardDescription>;
</CardDescription>
        </CardDescription>;
      </CardHeader>;"
            <Label htmlFor="deploy-blockchain">Deploy to blockchain</Label>"
          </div>
            <>"
              <div className="space-y-2">"
</div>
                <Label>Select blockchain network</Label>
                <RadioGroup;)
                  onValueChange={(value) => setDeploymentOptions({
</RadioGroup>
                <RadioGroup;
                  defaultValue={deploymentOptions.network})
                  onValueChange={(value) => setDeploymentOptions({;
</RadioGroup>"
                  <div className="flex items-center space-x-2">"
</div>"
                    <RadioGroupItem value="ethereum" id="ethereum" />"
</RadioGroupItem>)"
                    <Label htmlFor="ethereum">Ethereum (higher fees, more secure)</Label>"
                  </div>"
                  <div className="flex items-center space-x-2">"
</div>"
                    <RadioGroupItem value="polygon" id="polygon" />"
</RadioGroupItem>"
                    <Label htmlFor="polygon">Polygon (lower fees, faster)</Label>"
                  </div>
                </RadioGroup>
              </div>"
              <div className="space-y-2">"
</div>"
                <Label htmlFor="wallet-address">Wallet address for transactions</Label>""
            <Label htmlFor="deploy-blockchain">Deploy to blockchain</Label>;"
          </div>;
            <>;"
              <div className="space-y-2">;"
</div>
                <Label>Select blockchain network</Label>;
                <RadioGroup;
                  defaultValue={deploymentOptions && deploymentOptions.network}
                  onValueChange={(value) => setDeploymentOptions({;
</RadioGroup>"
            <Label htmlFor="deploy-blockchain">Deploy to blockchain</Label>;"
          </div>;
            <>;"
              <div className="space-y-2">;"
</div>
                <Label>Select blockchain network</Label>;
                <RadioGroup;
                  defaultValue={deploymentOptions && deploymentOptions.network})
                  onValueChange={(value) => setDeploymentOptions({;
</RadioGroup>"
      <CardContent className="space-y-6">;"
</CardContent>"
        <div className="space-y-4">;"
</div>"
          <div className="flex items-center space-x-2">;"
</div>
            <Switch ;"
              id="deploy-blockchain";"
              checked={deploymentOptions.deployToChain})
              onCheckedChange={(checked) => setDeploymentOptions({;
</Switch>"
            <Label htmlFor="deploy-blockchain">Deploy to blockchain</Label>;"
          </div>;
            <>;"
              <div className="space-y-2">;"
</div>
                <Label>Select blockchain network</Label>;
                <RadioGroup ;                  defaultValue={deploymentOptions.network})
                  onValueChange={(value) => setDeploymentOptions({;
</RadioGroup>"
                  <div className="flex items-center space-x-2">;"
</div>"
                    <RadioGroupItem value="ethereum" id="ethereum" />;"
</RadioGroupItem>)"
                    <Label htmlFor="ethereum">Ethereum (higher fees, more secure)</Label>;"
                  </div>;"
                  <div className="flex items-center space-x-2">;"
</div>"
                    <RadioGroupItem value="polygon" id="polygon" />;"
</RadioGroupItem>"
                    <Label htmlFor="polygon">Polygon (lower fees, faster)</Label>;"
                  </div>;
                </RadioGroup>;
              </div>;"
              <div className="space-y-2">;"
</div>"
                <Label htmlFor="wallet-address">Wallet address for transactions</Label>;"
                <Input;"
                  id="wallet-address"""
                  placeholder="0x..."""
                  value={deploymentOptions && deploymentOptions.walletAddress || ''}'
                  onChange={(e) => setDeploymentOptions({;
</Input>
                <Input;'
                  id="wallet-address"""
                  placeholder="0x..."""
                  value={deploymentOptions.walletAddress || ''}')
                  })}

                />;
</Input>
              </div>;'
              <div className="flex items-center space-x-2">;"
</div>
              </div>;"
              <div className="flex items-center space-x-2">;"
</div>
                <Switch;"
                  id="use-escrow""
                  checked={deploymentOptions && deploymentOptions.useEscrow}
                  onCheckedChange={(checked) => setDeploymentOptions({;
</Switch>
                <Switch;"
                  id="use-escrow""

                  checked={deploymentOptions.useEscrow}
                    ...deploymentOptions;
                    useEscrow: checked;

              ;"
              <div className="space-y-2">;"
</Switch>"
                <Label htmlFor="wallet-address">Wallet address for transactions</Label>;"
                <Input ;"
                  id="wallet-address" ;""
                  placeholder="0x..." ;""
                  value={deploymentOptions.walletAddress || ''}')
                  onChange={(e) => setDeploymentOptions({;
</Input>
              </div>;'
              <div className="flex items-center space-x-2">;"
</div>
                <Switch ;"
                  id="use-escrow";"
                  checked={deploymentOptions.useEscrow})
                  onCheckedChange={(checked) => setDeploymentOptions({;
</Switch>"
                <Label htmlFor="use-escrow">Use escrow for payments</Label>;"

              </div>;
            </>;)
          )}
        </Button>;
      </CardFooter>;

    </Card>;"
          <div className="rounded-md bg-muted p-4">;"
</div>"
            <h4 className="text-sm font-medium mb-2">Smart Contract Preview</h4>;""
            <div className="max-h-52 overflow-y-auto bg-background p-3 rounded text-xs font-mono">;"
</div>
              <pre>{solidityCode && solidityCode.slice(0, 500)}...</pre>;"
      <CardContent className="space - y-6">;"
</CardContent>"
        <div className="space - y-4">;"
</div>"
          <div className="flex items - center space - x-2">;"
</div>
            <Switch;"
              id="deploy - blockchain";"
              checked={deployment_options.deployToChain}
              onCheckedChange={(checked) => setDeploymentOptions ({
</Switch>"
            <Label html_for="deploy - blockchain">Deploy to blockchain</Label>;"
          </div>;
            <>;"
              <div className="space - y-2">;"
</div>
                <Label > Select blockchain network</Label>;
                <RadioGroup;
                  default_value={deployment_options.network})
                  onValueChange={(value) => setDeploymentOptions ({
</RadioGroup>"
                  <div className="flex items - center space - x-2">;"
</div>"
                    <RadioGroupItem value="ethereum" id="ethereum" />;"
</RadioGroupItem>)"
                    <Label html_for="ethereum">Ethereum (higher fees, more secure)</Label>;"
                  </div>;"
                  <div className="flex items - center space - x-2">;"
</div>"
                    <RadioGroupItem value="polygon" id="polygon" />;"
</RadioGroupItem>"
                    <Label html_for="polygon">Polygon (lower fees, faster)</Label>;"
                  </div>;
                </RadioGroup>;
              </div>;"
              <div className="space - y-2">;"
</div>"
                <Label html_for="wallet - address">Wallet address for transactions</Label>;"
                <Input;"
                  id="wallet - address";""
                  placeholder="0x...";""
                  value={deployment_options.wallet_address || ''}'
                  on_change={(e) => setDeploymentOptions ({
</Input>
              </div>;'
              <div className="flex items - center space - x-2">;"
</div>
                <Switch;"
                  id="use - escrow";"
                  checked={deployment_options.use_escrow})
                  onCheckedChange={(checked) => setDeploymentOptions ({
</Switch>"
                <Label html_for="use - escrow">Use escrow for payments</Label>;"
              </div>;)
            </>)}"
          <div className="rounded - md bg - muted p - 4">;"
</div>"
            <h4 className="text - sm font - medium mb - 2">Smart Contract Preview</h4>;""
            <div className="max - h-52 overflow - y-auto bg - background p - 3 rounded text - xs font - mono">;"
</div>
              <pre>{solidity_code.slice (0, 500)}...</pre>;"
          <div className="rounded-md bg-muted p-4">;"
</div>"
            <h4 className="text-sm font-medium mb-2">Smart Contract Preview</h4>;""
            <div className="max-h-52 overflow-y-auto bg-background p-3 rounded text-xs font-mono">;"
</div>
              <pre>{solidityCode.slice(0, 500)}...</pre>;
            </div>;
          </div>;
        </div>;
      </CardContent>;"
      <CardFooter className="flex justify - between">;"
</CardFooter>"
        <Button variant="outline" on_click={handleDownloadSolidity}>;"
</Button>"
          <Download className="mr - 2 h - 4 w - 4" />;"
</Download>
        </Button>;
        <Button on_click={handleDeployContract} disabled={is_deploying}>;
</Button>
            <>;"
              <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" />;"
</Loader2>
            </>) : ()"
            'Deploy Contract')}'
        </Button>;
      </CardFooter>;
    </Card>);'
      <CardFooter className="flex justify-between">;"
</CardFooter>"
        <Button variant="outline" onClick={handleDownloadSolidity}>;"
</Button>"
          <Download className="mr-2 h-4 w-4" />;"
</Download>
        </Button>;
        <Button onClick={handleDeployContract} disabled={isDeploying}>;
</Button>
            <>;"
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />;"
</Loader2>
            </>;
          ) :(;"
            'Deploy Contract';')
          )}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        </Button>;
      </CardFooter>;
    </Card>;
  );

<<<<<<< HEAD
      <CardContent className="space-y-6">;
        <div className="space-y-4">;
          <div className="flex items - center space-x-2">;
          <div className="rounded-md bg-muted p-4">;
            <h4 className="text-sm font-medium mb-2">Smart Contract Preview</h4>;
            <div className="max-h-52 overflow-y-auto bg-background p-3 rounded text-xs font-mono">;
              <pre>{solidityCode && solidityCode.slice(0, 500)}...</pre>;

      <CardContent className="space - y-6">;
        <div className="space - y-4">;
          <div className="flex items - center space - x-2">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <Switch;
              id="deploy - blockchain";
              checked={deployment_options.deployToChain}
              onCheckedChange={(checked) => setDeploymentOptions ({}
                ...deployment_options;
                deployToChain: checked;
              })}
            />;"
            <Label html_for="deploy - blockchain">Deploy to blockchain</Label>;
          </div>;
          {deployment_options.deployToChain && (
<>;
<<<<<<< HEAD
              <div className="space-y-2">;
=======
              <div className="space-y-2">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                <Label > Select blockchain network</Label>;
                <RadioGroup;
                  default_value={deployment_options.network}
                  onValueChange={(value) => setDeploymentOptions ({}
                    ...deployment_options;
                    network: value as BlockchainNetwork;
})}
                  className="flex flex - col space-y-1";
                >;
                  <div className="flex items - center space-x-2">;
                    <RadioGroupItem value="ethereum" id="ethereum" />;
                    <Label html_for="ethereum">Ethereum (higher fees, more secure)</Label>;
                  </div>;
                  <div className="flex items - center space-x-2">;
                    <RadioGroupItem value="polygon" id="polygon" />;
                    <Label html_for="polygon">Polygon (lower fees, faster)</Label>;
                  </div>;
                </RadioGroup>;
              </div>;
<<<<<<< HEAD
              <div className="space-y-2">;
=======
              <div className="space-y-2">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                <Label html_for="wallet - address">Wallet address for transactions</Label>;
                <Input;"
                  id="wallet - address";"
                  placeholder="0x...";'
                  value={deployment_options.wallet_address || ''}
                  on_change={(e) => setDeploymentOptions ({}
                    ...deployment_options;
                    wallet_address: e.target.value;
                  })}
                />;
</div>;
              <div className="flex items - center space-x-2">;
                <Switch;
                  id="use - escrow";
                  checked={deployment_options.use_escrow}
                  onCheckedChange={(checked) => setDeploymentOptions ({}
                    ...deployment_options;
                    use_escrow: checked;
                  })}
                />;"
                <Label html_for="use - escrow">Use escrow for payments</Label>;
              </div>;
</>)}
          <div className="rounded - md bg - muted p-4">;
            <h4 className="text - sm font - medium mb-2">Smart Contract Preview</h4>;
            <div className="max - h-52 overflow - y-auto bg - background p - 3 rounded text - xs font-mono">;
              <pre>{solidity_code.slice (0, 500)}...</pre>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
          ;
          <div className="rounded-md bg-muted p-4">;
            <h4 className="text-sm font-medium mb-2">Smart Contract Preview</h4>;
            <div className="max-h-52 overflow-y-auto bg-background p-3 rounded text-xs font-mono">;
              <pre>{solidityCode.slice(0, 500)}...</pre>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
            </>)}"
          <div className="rounded - md bg - muted p - 4">;"
            <h4 className="text - sm font - medium mb - 2">Smart Contract Preview</h4>;"
            <div className="max - h-52 overflow - y-auto bg - background p - 3 rounded text - xs font - mono">;
              <pre>{solidity_code.slice (0, 500)}...</pre>;

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            </div>;
          </div>;
        </div>;
      </CardContent>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
<<<<<<< HEAD
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
      ;
      <CardFooter className="flex justify-between">;
        <Button variant="outline" onClick={handleDownloadSolidity}>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <Download className="mr-2 h-4 w-4" />;
          Download .sol File;
        </Button>;
        ;
        <Button onClick={handleDeployContract} disabled={isDeploying}>;
          {isDeploying ? (;
<>;"
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
              Deploying...;
            </>;
          ) :(;'
            'Deploy Contract';
          )}
        </Button>;
      </CardFooter>;
    </Card>;
),; interface SmartContractDeploymentProps {}
  solidityCode: string;
onDeploy: (options: DeploymentOptions) => Promise<void>;
isDeploying: boolean;
}export function SmartContractDeployment ({};
  solidityCode;
onDeploy;
isDeploying;
}: SmartContractDeploymentProps) {}
  const [deploymentOptions, setDeploymentOptions] = useState<DeploymentOptions> ({'
  network: 'none';
useEscrow: true;
deployToChain: false;'
walletAddress: '' 
});
const handleDeployContract = async () => {}
  if (deploymentOptions.deployToChain && !deploymentOptions.walletAddress) {}
}try {}
  await onDeploy (deploymentOptions) 
}catch (error) {}
}
};
const handleDownloadSolidity = () => {}
  //Create a blob from the Solidity code const blob = new Blob ([solidityCode], {'
  type: 'text/plain' 
});
const url = URL.createObjectURL (blob);'
//Create a temporary anchor to trigger download const a = document.createElement ('a');
a.href = url;'
a.download = 'ZionContract.sol';
document.body.appendChild (a);
a.click ();
//Clean up URL.revokeObjectURL (url);
document.body.removeChild (a);"
flex items-center gap-2"> <ShieldCheck className=" h-5 w-5 text-primary"/> Smart Contract Deployment </CardTitle> <CardDescription> Deploy your agreement as a smart contract for enhanced security and automation </CardDescription> </CardHeader> <CardContent className=" space-y-6"> <div className=" space-y-4"> <div className=" flex items-center space-x-2"> <Switch /> <Label htmlFor=" deploy-blockchain">Deploy to blockchain</Label> </div> > <div className=" flex items-center space-x-2"> <RadioGroupItem value=" ethereum"id=" ethereum"/> <Label htmlFor=" ethereum">Ethereum (higher fees, more secure) </Label> </div> <div className=" flex items-center space-x-2"> <RadioGroupItem value=" polygon"id=" polygon"/> <Label htmlFor=" polygon">Polygon (lower fees, faster) </Label> </div> </RadioGroup> </div> <div className=" space-y-2"> <Label htmlFor=" wallet-address">Wallet address for transactions</Label> <Input /> </div> <div className=" flex items-center space-x-2"> <Switch /> <Label htmlFor=" use-escrow">Use escrow for payments</Label> </div> </>) 
}</div> </div> </div> </CardContent> Download .sol File </Button> <Button onClick= {}
  handleDeployContract;
}disabled= {}
  isDeploying;
}> {'"
  isDeploying ? (<> <Loader2 className=" mr-2 h-4 w-4 animate-spin" /> Deploying... </>) : ('Deploy Contract') 
}</Button> </CardFooter> </Card>) 
}
=======
document.body.removeChild (a);
flex items-center gap-2"> <ShieldCheck className=" h-5 w-5 text-primary"/> Smart Contract Deployment </CardTitle> <CardDescription> Deploy your agreement as a smart contract for enhanced security and automation </CardDescription> </CardHeader> <CardContent className=" space-y-6"> <div className=" space-y-4"> <div className=" flex items-center space-x-2"> <Switch /> <Label htmlFor=" deploy-blockchain">Deploy to blockchain</Label> </div> > <div className=" flex items-center space-x-2"> <RadioGroupItem value=" ethereum"id=" ethereum"/> <Label htmlFor=" ethereum">Ethereum (higher fees, more secure) </Label> </div> <div className=" flex items-center space-x-2"> <RadioGroupItem value=" polygon"id=" polygon"/> <Label htmlFor=" polygon">Polygon (lower fees, faster) </Label> </div> </RadioGroup> </div> <div className=" space-y-2"> <Label htmlFor=" wallet-address">Wallet address for transactions</Label> <Input /> </div> <div className=" flex items-center space-x-2"> <Switch /> <Label htmlFor=" use-escrow">Use escrow for payments</Label> </div> </>) 
}</div> </div> </div> </CardContent> Download .sol File </Button> <Button onClick= {
  handleDeployContract 
=======
;}
;

import React, { useState } from "react";""
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";""
import {Button} from "@/components/ui/button";""
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";""
import {Label} from "@/components/ui/label";""
import {Input} from "@/components/ui/input";""
import {Switch} from "@/components/ui/switch";""
import {BlockchainNetwork, DeploymentOptions} from "@/types/smart-contracts";""
import {Loader2, ShieldCheck, Download} from "lucide-react";""
import {toast} from "sonner";""
import React, { useState } from "react",""
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",""
import { Button } from "@/components/ui/button",""
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group",""
import { Label } from "@/components/ui/label",""
import { Input } from "@/components/ui/input",""
import { Switch } from "@/components/ui/switch",""
import { BlockchainNetwork, DeploymentOptions } from "@/types/smart-contracts",""
import { Loader2, ShieldCheck, Download } from "lucide-react";""
import { toast } from "sonner";""
import { Loader2, ShieldCheck, Download } from "lucide-react",""
import { toast } from "sonner","
interface SmartContractDeploymentProps {
  // TODO: Implement
}
  solidityCode: string;,
  onDeploy: (options: DeploymentOptions) => Promise<void>
onDeploy: (options: DeploymentOptions) => Promise<void>;
</void>
  const [deploymentOptions, setDeploymentOptions] = useState<DeploymentOptions>({
)
  on_deploy: (options: DeploymentOptions) => Promise < void>,
  is_deploying: boolean;
export /**
 * SmartContractDeployment - Function description;
 */
function SmartContractDeployment() {
  const [deployment_options, setDeploymentOptions] = useState < DeploymentOptions>({"
    network: 'none',
    use_escrow: true,
    deployToChain: false,
    wallet_address: ;')
  });
;

  const handleDeployContract = async () => {
    // Check condition;
if ( {) {
  $2;
      toast.error ("Please enter a wallet address for blockchain deployment");"
      return;
    try {
  // TODO: Implement
      await on_deploy (deployment_options);
    } catch (error) {"
      console.error ("Deployment error:", error);"

  },
  const handleDownloadSolidity = () => {
    // Create a blob from the Solidity code;"
    const blob = new Blob([solidityCode], { type: 'text/plain' }),
    const url = URL.createObjectURL(blob),
    // Create a temporary anchor to trigger download;
    const a = document.createElement('a'),
    a.href = url,
    a.download = 'ZionContract.sol',
    document.body.appendChild(a),
    a.click(),
    // Clean up;
    URL.revokeObjectURL(url),
    document.body.removeChild(a),
    toast.success("Solidity contract downloaded")"

  return ("
    <Card className="w-full">"

      <CardHeader>
"
        <CardTitle className="flex items-center gap-2">"
          <ShieldCheck className="h-5 w-5 text-primary" />"

        <CardDescription>

      <CardContent className="space-y-6">"
        <div className="space-y-4">"
</div>"
          <div className="flex items-center space-x-2">"
</div>
            <Switch;"
              id="deploy-blockchain"""
import React, { useState } from "react",;""
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;""
import { Button } from "@/components/ui/button",;""
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group",;""
import { Label } from "@/components/ui/label",;""
import { Input } from "@/components/ui/input",;""
import { Switch } from "@/components/ui/switch",;""
import { BlockchainNetwork, DeploymentOptions } from "@/types/smart-contracts",;""
import { Loader2, ShieldCheck, Download } from "lucide-react",;""
import { toast } from "sonner",;"
import {toast} from "sonner";"
interface SmartContractDeploymentProps {;
  solidityCode: string,;)
  onDeploy: (options: DeploymentOptions) => Promise<void>,;

  const [deploymentOptions, setDeploymentOptions] = useState<DeploymentOptions>({;
    <Card className="w-full">;"

      <CardHeader>;
        <CardTitle className="flex items-center gap-2">;"
          <ShieldCheck className="h-5 w-5 text-primary" />;"

        <CardDescription>;

      ;"
            <Label htmlFor="deploy-blockchain">Deploy to blockchain"
            <>"
              <div className="space-y-2">"
                <Label>Select blockchain network
                <RadioGroup;)
                  onValueChange={(value) => setDeploymentOptions({

                <RadioGroup;
                  defaultValue={deploymentOptions.network})
                  onValueChange={(value) => setDeploymentOptions({;
                    <RadioGroupItem value="ethereum" id="ethereum" />"
)"
                    <Label htmlFor="ethereum">Ethereum (higher fees, more secure)"
                    <RadioGroupItem value="polygon" id="polygon" />"
                    <Label htmlFor="polygon">Polygon (lower fees, faster)"
                <Label htmlFor="wallet-address">Wallet address for transactions""
            <Label htmlFor="deploy-blockchain">Deploy to blockchain;"
          </div>;
            <>;"
              <div className="space-y-2">;"
                <Label>Select blockchain network;
                  defaultValue={deploymentOptions && deploymentOptions.network}
                  defaultValue={deploymentOptions && deploymentOptions.network})
      <CardContent className="space-y-6">;"
        <div className="space-y-4">;"
          <div className="flex items-center space-x-2">;"
            <Switch ;"
              id="deploy-blockchain";"
              checked={deploymentOptions.deployToChain})
              onCheckedChange={(checked) => setDeploymentOptions({;
                <RadioGroup ;                  defaultValue={deploymentOptions.network})
                    <RadioGroupItem value="ethereum" id="ethereum" />;"
                    <Label htmlFor="ethereum">Ethereum (higher fees, more secure);"
                  </div>;"
                    <RadioGroupItem value="polygon" id="polygon" />;"
                    <Label htmlFor="polygon">Polygon (lower fees, faster);"
                <Label htmlFor="wallet-address">Wallet address for transactions;"
                <Input;"
                  id="wallet-address"""
                  placeholder="0x..."""
                  value={deploymentOptions && deploymentOptions.walletAddress || }
                  onChange={(e) => setDeploymentOptions({;

                <Input;
                  value={deploymentOptions.walletAddress || }')
                  })}

                />;

                  id="use-escrow""
                  checked={deploymentOptions && deploymentOptions.useEscrow}

                  checked={deploymentOptions.useEscrow}

                    useEscrow: checked;
                <Input ;"
                  id="wallet-address" ;""
                  placeholder="0x..." ;""

                  id="use-escrow";"
                  checked={deploymentOptions.useEscrow})
                <Label htmlFor="use-escrow">Use escrow for payments;"
            </>;)
          )}
          <div className="rounded-md bg-muted p-4">;"
            <h4 className="text-sm font-medium mb-2">Smart Contract Preview</h4>;""
            <div className="max-h-52 overflow-y-auto bg-background p-3 rounded text-xs font-mono">;"
              <pre>{solidityCode && solidityCode.slice(0, 500)}...</pre>;"
      <CardContent className="space - y-6">;"
        <div className="space - y-4">;"
          <div className="flex items - center space - x-2">;"
              id="deploy - blockchain";"
              checked={deployment_options.deployToChain}
              onCheckedChange={(checked) => setDeploymentOptions ({
            <Label html_for="deploy - blockchain">Deploy to blockchain;"
              <div className="space - y-2">;"
                <Label > Select blockchain network;
                  default_value={deployment_options.network})
                  onValueChange={(value) => setDeploymentOptions ({
                    <Label html_for="ethereum">Ethereum (higher fees, more secure);"
                    <Label html_for="polygon">Polygon (lower fees, faster);"
                <Label html_for="wallet - address">Wallet address for transactions;"
                  id="wallet - address";""
                  placeholder="0x...";""
                  value={deployment_options.wallet_address || }
                  on_change={(e) => setDeploymentOptions ({

                  id="use - escrow";"
                  checked={deployment_options.use_escrow})
                <Label html_for="use - escrow">Use escrow for payments;"
              </div>;)
            </>)}"
          <div className="rounded - md bg - muted p - 4">;"
            <h4 className="text - sm font - medium mb - 2">Smart Contract Preview</h4>;""
            <div className="max - h-52 overflow - y-auto bg - background p - 3 rounded text - xs font - mono">;"
              <pre>{solidity_code.slice (0, 500)}...</pre>;"
              <pre>{solidityCode.slice(0, 500)}...</pre>;
      <CardFooter className="flex justify - between">;"
        <Button variant="outline" on_click={handleDownloadSolidity}>;"
          <Download className="mr - 2 h - 4 w - 4" />;"

        <Button on_click={handleDeployContract} disabled={is_deploying}>;

              <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" />;"
</Loader2>
            </>) : ()"
            'Deploy Contract')}
    );
      <CardFooter className="flex justify-between">;"
        <Button variant="outline" onClick={handleDownloadSolidity}>;"
          <Download className="mr-2 h-4 w-4" />;"

        <Button onClick={handleDeployContract} disabled={isDeploying}>;

              <Loader2 className="mr-2 h-4 w-4 animate-spin" />;"
            </>;
          ) :(;"
            'Deploy Contract';')
onDeploy: (options: DeploymentOptions) => Promise<void>;
  const [deploymentOptions, setDeploymentOptions] = useState<DeploymentOptions> ({
flex items-center gap-2"> <ShieldCheck className=" h-5 w-5 text-primary"/> Smart Contract Deployment  <CardDescription> Deploy your agreement as a smart contract for enhanced security and automation   <CardContent className=" space-y-6"> <div className=" space-y-4"> <div className=" flex items-center space-x-2"> <Switch /> <Label htmlFor=" deploy-blockchain">Deploy to blockchain </div> > <div className=" flex items-center space-x-2"> <RadioGroupItem value=" ethereum"id=" ethereum"/> <Label htmlFor=" ethereum">Ethereum (higher fees, more secure)  </div> <div className=" flex items-center space-x-2"> <RadioGroupItem value=" polygon"id=" polygon"/> <Label htmlFor=" polygon">Polygon (lower fees, faster)  </div>  </div> <div className=" space-y-2"> <Label htmlFor=" wallet-address">Wallet address for transactions <Input /> </div> <div className=" flex items-center space-x-2"> <Switch /> <Label htmlFor=" use-escrow">Use escrow for payments </div> </>)"

}</div> </div> </div>  Download .sol File  <Button onClick= {
  handleDeployContract;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}disabled= {
  isDeploying;
}> {
  isDeploying ? (<> <Loader2 className=" mr-2 h-4 w-4 animate-spin" /> Deploying... </>) : ('Deploy Contract') 
}</Button> </CardFooter> </Card>) 
}
}
;
}
;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
;
}
;

}
;
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  isDeploying ? (<> <Loader2 className=" mr-2 h-4 w-4 animate-spin" /> Deploying... </>) : ('Deploy Contract')
}  ) 
pr-12325
</Button>"
  isDeploying ? (<> <Loader2 className=" mr-2 h-4 w-4 animate-spin" /> Deploying... </>) : ('Deploy Contract')'
</Loader2>
}</Button> </CardFooter> </Card>) '

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
