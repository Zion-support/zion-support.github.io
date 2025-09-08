<<<<<<< HEAD

=======
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,;
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { BlockchainNetwork, DeploymentOptions } from '@/types/smart-contracts';
import { Loader2, ShieldCheck, Download } from 'lucide-react';
import { toast } from 'sonner';
import { logErrorToProduction } from '@/utils/productionLogger';

  isDeploying: boolean
}

export function SmartContractDeployment({ 
>>>>>>> origin/cursor/delete-old-data-records-6bba

    network: 'none'
    useEscrow: true;
    deployToChain: false'
    walletAddress: ''

  const [deploymentOptions, setDeploymentOptions] = useState<DeploymentOptions>({
    network: 'none',
    useEscrow: true,
    deployToChain: false,
    walletAddress: ''


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
interface SmartContractDeploymentProps {}

  solidity_code: string,
isDeploying;
}: SmartContractDeploymentProps) {
)
pr-12325
  on_deploy: (options: DeploymentOptions, ) => Promise < void>,
  is_deploying: boolean;

}

<<<<<<< HEAD
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

=======
    use_escrow: true,
    deployToChain: false,'
    wallet_address: '';
  });

      return;
    }
    try {}
      await on_deploy (deployment_options);
    } catch (error) {'
      logErrorToProduction ('Deployment error:', { data: error });
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }),

  const handleDeployContract = async () => {}
    if (deploymentOptions.deployToChain && !deploymentOptions.walletAddress) {"
      toast.error("Please enter a wallet address for blockchain deployment"),
      return"
import React, { useState } from "react",;"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;"
import { Button } from "@/components/ui/button",;"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group",;"
import { Label } from "@/components/ui/label",;"
import { Input } from "@/components/ui/input",;"
import { Switch } from "@/components/ui/switch",;"
import { BlockchainNetwork, DeploymentOptions } from "@/types/smart-contracts",;'
import { Loader2, ShieldCheck, Download } from 'lucide-react';"
import { toast } from "sonner",;'
import {logErrorToProduction} from '@/utils/productionLogger',;
interface SmartContractDeploymentProps {;
  solidityCode: string,;
  onDeploy: (options: DeploymentOptions) => Promise<void>,;
  isDeploying: boolean;
}
;
export function SmartContractDeployment() { return null; }
  }),;
  const handleDeployContract = async () => {;
    if (deploymentOptions.deployToChain && !deploymentOptions.walletAddress) {;"
      toast.error("Please enter a wallet address for blockchain deployment"),;
      return;
    }
;
    try {;
      await onDeploy(deploymentOptions);
    } catch (error) {;'
      logErrorToProduction('Deployment error:', { data: error });
    }
  },
  
  const handleDownloadSolidity = () => {}
    // Create a blob from the Solidity code'
    const blob = new Blob([solidityCode], { type: 'text/plain' }),
    const url = URL.createObjectURL(blob),
    
    // Create a temporary anchor to trigger download'
    const a = document.createElement('a'),
    a.href = url,'
    a.download = 'ZionContract.sol',
    document.body.appendChild(a),
    a.click(),
    
    // Clean up;
    URL.revokeObjectURL(url),
    document.body.removeChild(a),
    "
    toast.success("Solidity contract downloaded")
  },

  return (

    <Card className="w-full">
      <CardHeader>"
        <CardTitle className="flex items-center gap-2">"
          <ShieldCheck className="h-5 w-5 text-primary" />
          Smart Contract Deployment;
        </CardTitle>
        <CardDescription>
          Deploy your agreement as a smart contract for enhanced security and automation;
        </CardDescription>
      </CardHeader>


      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Switch

"
import React, { useState } from "react";"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";"
import { Button } from "@/components/ui/button";"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";"
import { Label } from "@/components/ui/label";"
import { Input } from "@/components/ui/input";"
import { Switch } from "@/components/ui/switch";"
import { BlockchainNetwork, DeploymentOptions } from "@/types/smart-contracts";'"
import { Loader2, ShieldCheck, Download } from 'lucide-react'import { toast } from "sonner";'
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
  const [deploymentOptions, setDeploymentOptions] = useState<DeploymentOptions>({;'
    network: 'none',;
    useEscrow: true,;
    deployToChain: false,;'
    walletAddress: '';
  });

    if (deploymentOptions && deploymentOptions.deployToChain && !deploymentOptions && deploymentOptions.walletAddress) {;"
      toast && toast.error("Please enter a wallet address for blockchain deployment");
      return;
    }

    try {;
      await onDeploy(deploymentOptions);
    } catch (error) {;'
      logErrorToProduction('Deployment error:', { data: error });
    }
  };

  const handleDownloadSolidity = () => {;
    // Create a blob from the Solidity code;'
    const blob = new Blob([solidityCode], { type: 'text/plain' }),;

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    <Card className="w-full">;
      <CardHeader>;"
        <CardTitle className="flex items-center gap-2">;"
          <ShieldCheck className="h-5 w-5 text-primary" />;

  const handleDownloadSolidity = () =>: any {
    // Create a blob from the Solidity code;

    const blob = new Blob ([solidity_code], { type: 'text / plain' }),
    const url = URL.createObjectURL (blob);
    // Create a temporary anchor to trigger download;'
    const array = document.create_element ('a');
    a.href = url;'
    a.download = 'ZionContract.sol';
    document.body.append_child (a);
    a.click ();
    // Clean up;
    URL.revokeObjectURL (url);
    document.body.remove_child (a);"
    toast.success ("Solidity contract downloaded");
  }

          <ShieldCheck className="h - 5 w - 5 text - primary" />;

          Smart Contract Deployment;
        </CardTitle>;
        <CardDescription>;
          Deploy your agreement as a smart contract for enhanced security and automation;
        </CardDescription>;
      </CardHeader>;
<<<<<<< HEAD


=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba

      <CardContent className="space-y-6">
        <div className="space-y-4">

          <div className="flex items-center space-x-2">
            <Switch;
"
              id="deploy-blockchain""
              aria-label="Deploy to blockchain"

<<<<<<< HEAD

              })}


          



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          {deploymentOptions.deployToChain && (
            <>"
              <div className="space-y-2">
                <Label>Select blockchain network</Label>

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                <RadioGroup 

                  defaultValue={deploymentOptions.network}
                  onValueChange={(value) => setDeploymentOptions({;
                    ...deploymentOptions,;
                    network: value as BlockchainNetwork;

<<<<<<< HEAD


                  onValueChange={(value) => setDeploymentOptions({;
                    ...deploymentOptions,;
                    network: value as BlockchainNetwork;



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  })}

                  className="flex flex-col space-y-1"
                >"
                  <div className="flex items-center space-x-2">"
                    <RadioGroupItem value="ethereum" id="ethereum" />"
                    <Label htmlFor="ethereum">Ethereum (higher fees, more secure)</Label>
                  </div>"
                  <div className="flex items-center space-x-2">"
                    <RadioGroupItem value="polygon" id="polygon" />"
                    <Label htmlFor="polygon">Polygon (lower fees, faster)</Label>
                  </div>
                </RadioGroup>
              </div>

}: SmartContractDeploymentProps) {
    network: 'none';
    useEscrow: true;
    deployToChain: false;
    walletAddress: ''
  }),

<<<<<<< HEAD


              


=======
  const handleDeployContract = null;
                    useEscrow: checked
>>>>>>> origin/cursor/delete-old-data-records-6bba

                  })}
                />
                <Label htmlFor="use-escrow">Use escrow for payments</Label>
              </div>
            </>
          )}

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

=======
                    ...deploymentOptions;                    walletAddress: e && e.target.value;
                  })}
                />;
              </div>;

                  checked={deploymentOptions && deploymentOptions.useEscrow}
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  onCheckedChange={(checked) => setDeploymentOptions({;
                    ...deploymentOptions,;
                    useEscrow:checked;
                  })}
                />;"
                <Label htmlFor="use-escrow">Use escrow for payments</Label>;
              </div>;
            </>;
                <Label htmlFor="wallet-address">Wallet address for transactions"
                <Input;"
                  id="wallet-address"""
                  placeholder="0x..."""
                  value={deploymentOptions.walletAddress || }

                  id="use-escrow"""
                  aria-label="Use escrow""
                  checked={deploymentOptions.useEscrow}

            />;
            <Label htmlFor="deploy-blockchain">Deploy to blockchain;"
          </div>;
            <>;"
              <div className="space-y-2">;"
                <Label>Select blockchain network;
                  defaultValue={deploymentOptions && deploymentOptions.network}
                  <div className="flex items-center space-x-2">;"
                    <RadioGroupItem value="ethereum" id="ethereum" />;"
                    <Label htmlFor="ethereum">Ethereum (higher fees, more secure);"
                  </div>;"
                    <RadioGroupItem value="polygon" id="polygon" />;"
                    <Label htmlFor="polygon">Polygon (lower fees, faster);"
                <Label htmlFor="wallet-address">Wallet address for transactions;"
                  value={deploymentOptions && deploymentOptions.walletAddress || }
                  onChange={(e) => setDeploymentOptions({;

                  checked={deploymentOptions && deploymentOptions.useEscrow})
                  onCheckedChange={(checked) => setDeploymentOptions({;
                <Label htmlFor="use-escrow">Use escrow for payments;"
            </>;)
pr-12325
          )}

<<<<<<< HEAD
          

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          <div className="rounded-md bg-muted p-4">
            <h4 className="text-sm font-medium mb-2">Smart Contract Preview</h4>

            <div className="max-h-52 overflow-y-auto bg-background p-3 rounded text-xs font-mono">
              <pre>{solidityCode.slice(0, 500)}...</pre>
            </div>
          </div>
        </div>
      </CardContent>
<<<<<<< HEAD


=======
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
      <CardFooter className="flex justify-between">
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

        <Button variant="outline" onClick={handleDownloadSolidity}>

          <Download className="mr-2 h-4 w-4" />
          Download .sol File;
        </Button>
<<<<<<< HEAD


=======
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
        <Button onClick={handleDeployContract} disabled={isDeploying}>
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

        <Button onClick={handleDeployContract} disabled={isDeploying}>

          {isDeploying ? (
            <>"
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Deploying...
            </>
          ) : ('
            'Deploy Contract'
          )}

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            <div className="max-h-52 overflow-y-auto bg-background p-3 rounded text-xs font-mono">;
              <pre>{solidityCode.slice(0, 500)}...</pre>;
            </div>;
          </div>;
        </div>;
      </CardContent>;
<<<<<<< HEAD

      ;
      <CardFooter className="flex justify-between">;
        <Button variant="outline" onClick={handleDownloadSolidity}>;

=======
"
      <CardFooter className="flex justify-between">;"
        <Button variant="outline" onClick={handleDownloadSolidity}>;"
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

          ) :(;

=======
          ) : (;'
>>>>>>> origin/cursor/delete-old-data-records-6bba
            'Deploy Contract';
          )}

        </Button>;
      </CardFooter>;
    </Card>;

  );


            <Switch;
              id="deploy - blockchain";

              aria - label="Deploy to blockchain";
              checked={deployment_options.deployToChain}
              onCheckedChange={(checked) => setDeploymentOptions ({}
                ...deployment_options;                deployToChain: checked;
              })}
            />;"
            <Label html_for="deploy - blockchain">Deploy to blockchain</Label>;
          </div>;
          {deployment_options.deployToChain && (

                <Label > Select blockchain network</Label>;
                <RadioGroup;
                  default_value={deployment_options.network}
                  onValueChange={(value) => setDeploymentOptions ({}
                    ...deployment_options;                    network: value as BlockchainNetwork;

                <Label html_for="wallet - address">Wallet address for transactions</Label>;

                    ...deployment_options;                    wallet_address: e.target.value;
                  })}
                />;

                  aria - label="Use escrow";
                  checked={deployment_options.use_escrow}
                  onCheckedChange={(checked) => setDeploymentOptions ({}
                    ...deployment_options;                    use_escrow: checked;
                  })}
                />;"
                <Label html_for="use - escrow">Use escrow for payments</Label>;
              </div>;

              <pre>{solidity_code.slice (0, 500)}...</pre>;
            </div>;
          </div>;
        </div>;

          Download .sol File;
        </Button>;
        <Button on_click={handleDeployContract} disabled={is_deploying}>;
          {is_deploying ? (

              Deploying...;

        </Button>;
      </CardFooter>;
    </Card>);

}</div> </div> </div> </CardContent> Download .sol File </Button> <Button on_click={
  handleDeployContract;
}disabled= {
  is_deploying;
}> {'";
  is_deploying ? (<> <Loader2 className="mr - 2 h - 4 w - 4 animate-spin" /> Deploying... </>) : ('Deploy Contract');
}</Button> </CardFooter> </Card>);
<<<<<<< HEAD

}'"}
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
=======
}'"}"
}
;
}}}
}

        </Button>
      </CardFooter>
    </Card>
  );
>>>>>>> origin/cursor/delete-old-data-records-6bba

};
<CardHeader> <CardTitle className="flex items-center gap-2" > <ShieldCheck className="h-5 w-5 text-primary" /> Smart Contract Deployment </CardTitle> <CardDescription> Deploy your agreement as a smart contract for enhanced security and automation </CardDescription> </CardHeader> <CardContent className="space-y-6" > <div className="space-y-4" > <div className="flex items-center space-x-2" > <Switch /> <Label htmlFor="deploy-blockchain" >Deploy to blockchain</Label> </div> > <div className="flex items-center space-x-2" > <RadioGroupItem value="ethereum" id="ethereum" /> <Label htmlFor="ethereum" >Ethereum (higher fees, more secure) </Label> </div> <div className="flex items-center space-x-2" > <RadioGroupItem value="polygon" id="polygon" /> <Label htmlFor="polygon" >Polygon (lower fees, faster) </Label> </div> </RadioGroup> </div> <div className="space-y-2" > <Label htmlFor="wallet-address" >Wallet address for transactions</Label> <Input /> </div> <div className="flex items-center space-x-2" > <Switch /> <Label htmlFor="use-escrow" >Use escrow for payments</Label> </div> </>) ;
}</div> </div> </div> </CardContent> Download .sol File </Button> <Button onClick={;
  handleDeployContract ;
}disabled= {;
  isDeploying ;
}> {'";
  isDeploying ? (<> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Deploying... </>) : ('Deploy Contract') ;
}</Button> </CardFooter> </Card>) ;
<<<<<<< HEAD

}'"
        </Button>;
      </CardFooter>;
    </Card>;
  );
}
;
}

=======
}'"
>>>>>>> origin/cursor/delete-old-data-records-6bba
