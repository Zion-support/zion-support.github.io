:src_backup/components/contracts/blockchain/SmartContractDeployment.tsx
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

:src_backup/components/contracts/blockchain/SmartContractDeployment.tsx
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
  isDeploying
isDeploying
    network: 'none'
    useEscrow: true;
    deployToChain: false'
    walletAddress: ''

:src_backup/components/contracts/blockchain/SmartContractDeployment.tsx
}: SmartContractDeploymentProps) {
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
:src_backup/components/contracts/blockchain/SmartContractDeployment.tsx
import {logErrorToProduction} from '@/utils / production_logger';
interface SmartContractDeploymentProps {}
  solidity_code: string,
isDeploying;
}: SmartContractDeploymentProps) {
  const [deploymentOptions, setDeploymentOptions] = useState<DeploymentOptions>({
)
pr-12325
  on_deploy: (options: DeploymentOptions, ) => Promise < void>,
  is_deploying: boolean;
}
:src_backup/components/contracts/blockchain/SmartContractDeployment.tsx
export /**;
 * SmartContractDeployment - Function description;
 */
function SmartContractDeployment() {}
  const [deployment_options, setDeploymentOptions] = useState < DeploymentOptions>({'
    network: 'none',
    use_escrow: true,
    deployToChain: false,'
    wallet_address: '';
  });

:src_backup/components/contracts/blockchain/SmartContractDeployment.tsx
  const handleDeployContract = async () => {}
    // Check condition;
if ( {) {}
  $2;
}
      toast.error ("Please enter a wallet address for blockchain deployment");

      return;
    }
    try {}
      await on_deploy (deployment_options);
    } catch (error) {'
      logErrorToProduction ('Deployment error:', { data: error });
    }
  }

:src/components/contracts/blockchain/SmartContractDeployment.tsx

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
      </CardHeader>
:src/components/contracts/blockchain/SmartContractDeployment.tsx
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Switch
id="deploy-blockchain"
              aria-label="Deploy to blockchain"
  },;

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

  const handleDeployContract = async () => {;
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
:src_backup/components/contracts/blockchain/SmartContractDeployment.tsx
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
    const url = URL && URL.createObjectURL(blob);

    // Create a temporary anchor to trigger download;'
    const a = document && document.createElement('a');
    a && a.href = url;'
    a && a.download = 'ZionContract && ZionContract.sol';
    document && document.body.appendChild(a);
    a && a.click();

    // Clean up;
    URL && URL.revokeObjectURL(url);
    document && document.body.removeChild(a);
"
    toast && toast.success("Solidity contract downloaded");
  };

  return ("
    <Card className="w-full">;
      <CardHeader>;"
        <CardTitle className="flex items-center gap-2">;"
          <ShieldCheck className="h-5 w-5 text-primary" />;
:src_backup/components/contracts/blockchain/SmartContractDeployment.tsx
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
:src_backup/components/contracts/blockchain/SmartContractDeployment.tsx
  return (
    <Card className="w-full">;
      <CardHeader>;
<CardTitle className="flex items - center gap-2">;
          <ShieldCheck className="h - 5 w - 5 text-primary" />;
          <ShieldCheck className="h - 5 w - 5 text - primary" />;

          Smart Contract Deployment;
        </CardTitle>;
        <CardDescription>;
          Deploy your agreement as a smart contract for enhanced security and automation;
        </CardDescription>;
      </CardHeader>;
<CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Switch;
"
              id="deploy-blockchain""
              aria-label="Deploy to blockchain"

:src/components/contracts/blockchain/SmartContractDeployment.tsx
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
              })}
          {deploymentOptions.deployToChain && (
            <>"
              <div className="space-y-2">
                <Label>Select blockchain network</Label>

:src/components/contracts/blockchain/SmartContractDeployment.tsx
                <RadioGroup 
                <RadioGroup;
                  defaultValue={deploymentOptions.network}
                  onValueChange={(value) => setDeploymentOptions({;
                    ...deploymentOptions,;
                    network: value as BlockchainNetwork;


                  })}
                  })}"
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
:src/components/contracts/blockchain/SmartContractDeployment.tsx


:src_backup/components/contracts/blockchain/SmartContractDeployment.tsx

              <div className="space-y-2">
                <Label htmlFor="wallet-address">Wallet address for transactions</Label>
                <Input "
                  id="wallet-address" "
                  placeholder="0x..." '
                  value={deploymentOptions.walletAddress || ''}
:src/components/contracts/blockchain/SmartContractDeployment.tsx
onChange={(e) => setDeploymentOptions({;
                    ...deploymentOptions;
                    walletAddress: e.target.value;
                  })}
                />
              </div>
              <div className="flex items-center space-x-2">
                <Switch"
                  id="use-escrow""
                  aria-label="Use escrow"
                  checked={deploymentOptions.useEscrow}
onCheckedChange={(checked) => setDeploymentOptions({;
                    ...deploymentOptions;
                    useEscrow: checked;

}: SmartContractDeploymentProps) {
  const [deploymentOptions, setDeploymentOptions] = useState<DeploymentOptions>({
    network: 'none';
    useEscrow: true;
    deployToChain: false;
    walletAddress: ''
  }),

  const handleDeployContract = null;
                    useEscrow: checked
:src/components/contracts/blockchain/SmartContractDeployment.tsx
                  })}
                />
                <Label htmlFor="use-escrow">Use escrow for payments</Label>
              </div>
            </>
          )}
:src/components/contracts/blockchain/SmartContractDeployment.tsx
                    <Label htmlFor="polygon">Polygon (lower fees, faster)</Label>;
                  </div>;
                </RadioGroup>;
              </div>;
:src_backup/components/contracts/blockchain/SmartContractDeployment.tsx
"
              <div className="space-y-2">;"
                <Label htmlFor="wallet-address">Wallet address for transactions</Label>;
                <Input"
                  id="wallet-address" "
                  placeholder="0x..." '
                  value={deploymentOptions && deploymentOptions.walletAddress || ''}
                  onChange={(e) => setDeploymentOptions({;
                    ...deploymentOptions;                    walletAddress: e && e.target.value;
                  })}
                />;
              </div>;
:src_backup/components/contracts/blockchain/SmartContractDeployment.tsx
"
              <div className="flex items-center space-x-2">;
                <Switch"
                  id="use-escrow""
                  aria-label="Use escrow"
                  checked={deploymentOptions && deploymentOptions.useEscrow}
                  onCheckedChange={(checked) => setDeploymentOptions({;
                    ...deploymentOptions;                    useEscrow: checked;
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

:src_backup/components/contracts/blockchain/SmartContractDeployment.tsx

          <div className="rounded-md bg-muted p-4">
            <h4 className="text-sm font-medium mb-2">Smart Contract Preview</h4>
"
          <div className="rounded-md bg-muted p-4">"
            <h4 className="text-sm font-medium mb-2">Smart Contract Preview</h4>"
            <div className="max-h-52 overflow-y-auto bg-background p-3 rounded text-xs font-mono">
              <pre>{solidityCode.slice(0, 500)}...</pre>
            </div>
          </div>
        </div>
      </CardContent>

:src_backup/components/contracts/blockchain/SmartContractDeployment.tsx
      <CardFooter className="flex justify-between">
            />
            <Label htmlFor="deploy-blockchain">Deploy to blockchain</Label>
          </div>

          {deploymentOptions.deployToChain && (
            <>
              <div className="space-y-2">
                <Label>Select blockchain network</Label>      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={handleDownloadSolidity}>
"
      <CardFooter className="flex justify-between">"
        <Button variant="outline" onClick={handleDownloadSolidity}>"
          <Download className="mr-2 h-4 w-4" />
          Download .sol File;
        </Button>

:src_backup/components/contracts/blockchain/SmartContractDeployment.tsx
        <Button onClick={handleDeployContract} disabled={isDeploying}>
          {isDeploying ? (
            <>"
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Deploying...
            </>
          ) : ('
            'Deploy Contract'
          )}
:src_backup/components/contracts/blockchain/SmartContractDeployment.tsx

:src_backup/components/contracts/blockchain/SmartContractDeployment.tsx

          <div className="rounded-md bg-muted p-4">;
            <h4 className="text-sm font-medium mb-2">Smart Contract Preview</h4>;
            <div className="max-h-52 overflow-y-auto bg-background p-3 rounded text-xs font-mono">;
              <pre>{solidityCode && solidityCode.slice(0, 500)}...</pre>;
            </div>;
          </div>;
        </div>;
      </CardContent>;
"
      <CardFooter className="flex justify-between">;"
        <Button variant="outline" onClick={handleDownloadSolidity}>;"
          <Download className="mr-2 h-4 w-4" />;
          Download .sol File;
        </Button>;

        <Button onClick={handleDeployContract} disabled={isDeploying}>;
          {isDeploying ? (;
            <>;"
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
              Deploying...;
            </>;
          ) : (;'
            'Deploy Contract';
          )}

        </Button>;
      </CardFooter>;
    </Card>;
  );
:src_backup/components/contracts/blockchain/SmartContractDeployment.tsx
}
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
:src_backup/components/contracts/blockchain/SmartContractDeployment.tsx
            <>;
              <div className="space-y-2">;
                <Label > Select blockchain network</Label>;
                <RadioGroup;
                  default_value={deployment_options.network}
                  onValueChange={(value) => setDeploymentOptions ({}
                    ...deployment_options;                    network: value as BlockchainNetwork;
:src_backup/components/contracts/blockchain/SmartContractDeployment.tsx
                  })}
                  className="flex flex - col space-y-1";
                >;
                  <div className="flex items - center space-x-2">;
                    <RadioGroupItem value="ethereum" id="ethereum" />;
                    <Label html_for="ethereum">Ethereum (higher fees, more,  secure)</Label>;
                  </div>;
                  <div className="flex items - center space-x-2">;
                    <RadioGroupItem value="polygon" id="polygon" />;
                    <Label html_for="polygon">Polygon (lower fees, faster)</Label>;
                  </div>;
                </RadioGroup>;
              </div>;
              <div className="space-y-2">;
                <Label html_for="wallet - address">Wallet address for transactions</Label>;
:src_backup/components/contracts/blockchain/SmartContractDeployment.tsx
                <Input;"
                  id="wallet - address";"
                  placeholder="0x...";'
                  value={deployment_options.wallet_address || ''}
                  on_change={(e) => setDeploymentOptions ({}
                    ...deployment_options;                    wallet_address: e.target.value;
                  })}
                />;
:src_backup/components/contracts/blockchain/SmartContractDeployment.tsx
              </div>;
              <div className="flex items - center space-x-2">;
                <Switch;
                  id="use - escrow";
                  aria - label="Use escrow";
                  checked={deployment_options.use_escrow}
                  onCheckedChange={(checked) => setDeploymentOptions ({}
                    ...deployment_options;                    use_escrow: checked;
                  })}
                />;"
                <Label html_for="use - escrow">Use escrow for payments</Label>;
              </div>;
:src_backup/components/contracts/blockchain/SmartContractDeployment.tsx
            </>)}
          <div className="rounded - md bg - muted p-4">;
            <h4 className="text - sm font - medium mb-2">Smart Contract Preview</h4>;
            <div className="max - h-52 overflow - y-auto bg - background p - 3 rounded text - xs font-mono">;
              <pre>{solidity_code.slice (0, 500)}...</pre>;
            </div>;
          </div>;
        </div>;
:src_backup/components/contracts/blockchain/SmartContractDeployment.tsx
      </CardContent>;
      <CardFooter className="flex justify-between">;
        <Button variant="outline" on_click={handleDownloadSolidity}>;
          <Download className="mr - 2 h - 4 w-4" />;
          Download .sol File;
        </Button>;
        <Button on_click={handleDeployContract} disabled={is_deploying}>;
          {is_deploying ? (
:src_backup/components/contracts/blockchain/SmartContractDeployment.tsx
            <>;
              <Loader2 className="mr - 2 h - 4 w - 4 animate-spin" />;
              Deploying...;
:src_backup/components/contracts/blockchain/SmartContractDeployment.tsx
            </>) : ('
            'Deploy Contract')}
        </Button>;
      </CardFooter>;
    </Card>);
:src_backup/components/contracts/blockchain/SmartContractDeployment.tsx
}
<CardHeader> <CardTitle className="flex items - center gap-2" > <ShieldCheck className="h - 5 w - 5 text-primary" /> Smart Contract Deployment </CardTitle> <CardDescription> Deploy your agreement as a smart contract for enhanced security and automation </CardDescription> </CardHeader> <CardContent className="space-y-6" > <div className="space-y-4" > <div className="flex items - center space-x-2" > <Switch /> <Label html_for="deploy - blockchain" >Deploy to blockchain</Label> </div> > <div className="flex items - center space-x-2" > <RadioGroupItem value="ethereum" id="ethereum" /> <Label html_for="ethereum" >Ethereum (higher fees, more secure) </Label> </div> <div className="flex items - center space-x-2" > <RadioGroupItem value="polygon" id="polygon" /> <Label html_for="polygon" >Polygon (lower fees, faster) </Label> </div> </RadioGroup> </div> <div className="space-y-2" > <Label html_for="wallet - address" >Wallet address for transactions</Label> <Input /> </div> <div className="flex items - center space-x-2" > <Switch /> <Label html_for="use - escrow" >Use escrow for payments</Label> </div> </>);
}</div> </div> </div> </CardContent> Download .sol File </Button> <Button on_click={
  handleDeployContract;
}disabled= {
  is_deploying;
}> {'";
  is_deploying ? (<> <Loader2 className="mr - 2 h - 4 w - 4 animate-spin" /> Deploying... </>) : ('Deploy Contract');
}</Button> </CardFooter> </Card>);
}'"}"
}
;
}}}
}
;

        </Button>
      </CardFooter>
    </Card>
  );

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
:src/components/contracts/blockchain/SmartContractDeployment.tsx
}"
<CardHeader> <CardTitle className="flex items - center gap - 2" > <ShieldCheck className="h - 5 w - 5 text - primary" /> Smart Contract Deployment </CardTitle> <CardDescription> Deploy your agreement as a smart contract for enhanced security and automation </CardDescription> </CardHeader> <CardContent className="space - y-6" > <div className="space - y-4" > <div className="flex items - center space - x-2" > <Switch /> <Label html_for="deploy - blockchain" >Deploy to blockchain</Label> </div> > <div className="flex items - center space - x-2" > <RadioGroupItem value="ethereum" id="ethereum" /> <Label html_for="ethereum" >Ethereum (higher fees, more secure) </Label> </div> <div className="flex items - center space - x-2" > <RadioGroupItem value="polygon" id="polygon" /> <Label html_for="polygon" >Polygon (lower fees, faster) </Label> </div> </RadioGroup> </div> <div className="space - y-2" > <Label html_for="wallet - address" >Wallet address for transactions</Label> <Input /> </div> <div className="flex items - center space - x-2" > <Switch /> <Label html_for="use - escrow" >Use escrow for payments</Label> </div> </>);
}</div> </div> </div> </CardContent> Download .sol File </Button> <Button on_click={}
  handleDeployContract;
}disabled= {}
  is_deploying;'"
}> {'";'"
  is_deploying ? (<> <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" /> Deploying... </>) : ('Deploy Contract');
}</Button> </CardFooter> </Card>);'"
}'"}
}
;'"
          <div className="rounded-md bg-muted p-4">"
            <h4 className="text-sm font-medium mb-2">Smart Contract Preview</h4>""
            <div className="max-h-52 overflow-y-auto bg-background p-3 rounded text-xs font-mono">"
              <pre>{solidityCode.slice(0, 500)}...</pre>

      <CardFooter className="flex justify-between">"
        <Button variant="outline" onClick={handleDownloadSolidity}>"
          <Download className="mr-2 h-4 w-4" />"

        <Button onClick={handleDeployContract} disabled={isDeploying}>

            <>"
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />"
</Loader2>
            </>
          ) : ("
            'Deploy Contract)

          <div className="rounded-md bg-muted p-4">;"
            <h4 className="text-sm font-medium mb-2">Smart Contract Preview</h4>;""
            <div className="max-h-52 overflow-y-auto bg-background p-3 rounded text-xs font-mono">;"
              <pre>{solidityCode && solidityCode.slice(0, 500)}...</pre>;
      <CardFooter className="flex justify-between">;"
        <Button variant="outline" onClick={handleDownloadSolidity}>;"
          <Download className="mr-2 h-4 w-4" />;"

        <Button onClick={handleDeployContract} disabled={isDeploying}>;

              <Loader2 className="mr-2 h-4 w-4 animate-spin" />;"
            </>;
          ) : (;"
            'Deploy Contract';')

      <CardContent className="space - y-6">;"
        <div className="space - y-4">;"
          <div className="flex items - center space - x-2">;"
              id="deploy - blockchain";""
              aria - label="Deploy to blockchain";"
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

                  id="use - escrow";""
                  aria - label="Use escrow";"
                  checked={deployment_options.use_escrow})
                <Label html_for="use - escrow">Use escrow for payments;"
              </div>;)
            </>)}"
          <div className="rounded - md bg - muted p - 4">;"
            <h4 className="text - sm font - medium mb - 2">Smart Contract Preview</h4>;""
            <div className="max - h-52 overflow - y-auto bg - background p - 3 rounded text - xs font - mono">;"
              <pre>{solidity_code.slice (0, 500)}...</pre>;
      <CardFooter className="flex justify - between">;"
        <Button variant="outline" on_click={handleDownloadSolidity}>;"
          <Download className="mr - 2 h - 4 w - 4" />;"

        <Button on_click={handleDeployContract} disabled={is_deploying}>;

              <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" />;"
            </>) : ()"
            'Deploy Contract')}
    );
<CardHeader> <CardTitle className="flex items - center gap - 2" > <ShieldCheck className="h - 5 w - 5 text - primary" /> Smart Contract Deployment  <CardDescription> Deploy your agreement as a smart contract for enhanced security and automation   <CardContent className="space - y-6" > <div className="space - y-4" > <div className="flex items - center space - x-2" > <Switch /> <Label html_for="deploy - blockchain" >Deploy to blockchain </div> > <div className="flex items - center space - x-2" > <RadioGroupItem value="ethereum" id="ethereum" /> <Label html_for="ethereum" >Ethereum (higher fees, more secure)  </div> <div className="flex items - center space - x-2" > <RadioGroupItem value="polygon" id="polygon" /> <Label html_for="polygon" >Polygon (lower fees, faster)  </div>  </div> <div className="space - y-2" > <Label html_for="wallet - address" >Wallet address for transactions <Input /> </div> <div className="flex items - center space - x-2" > <Switch /> <Label html_for="use - escrow" >Use escrow for payments </div> </>);"
}</div> </div> </div>  Download .sol File  <Button on_click={
  handleDeployContract;
}disabled= {
  is_deploying;"
}> {'";"
  is_deploying ? (<> <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" /> Deploying... </>) : ('Deploy Contract');
}  );
pr-12325
