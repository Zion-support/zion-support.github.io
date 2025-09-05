
import React, { useState } from &quot;react&quot;;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { RadioGroup, RadioGroupItem } from &quot;@/components/ui/radio-group&quot;;
import { Label } from &quot;@/components/ui/label&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Switch } from &quot;@/components/ui/switch&quot;;
import { BlockchainNetwork, DeploymentOptions } from &quot;@/types/smart-contracts&quot;;
import { Loader2, ShieldCheck, Download } from 'lucide-react'
import { toast } from &quot;sonner&quot;;
import {logErrorToProduction} from '@/utils/productionLogger';


interface SmartContractDeploymentProps {
  solidityCode: string;
  onDeploy: (options: DeploymentOptions) => Promise<void>;
  isDeploying: boolean;
}

export function SmartContractDeployment({ 
  solidityCode, 
  onDeploy,
  isDeploying
}: SmartContractDeploymentProps) {
  const [deploymentOptions, setDeploymentOptions] = useState<DeploymentOptions>({
    network: 'none',
    useEscrow: true,
    deployToChain: false,
    walletAddress: ''
  });

  const handleDeployContract = async () => {
    if (deploymentOptions.deployToChain && !deploymentOptions.walletAddress) {
      toast.error(&quot;Please enter a wallet address for blockchain deployment&quot;);
      return;
    }
    
    try {
      await onDeploy(deploymentOptions);
    } catch (error) {
      logErrorToProduction('Deployment error:', { data: error });
    }
  };
  
  const handleDownloadSolidity = () => {
    // Create a blob from the Solidity code
    const blob = new Blob([solidityCode], { type: 'text/plain' });
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
    
    toast.success(&quot;Solidity contract downloaded&quot;);
  };

  return (
    <Card className=&quot;w-full&quot;>
      <CardHeader>
        <CardTitle className=&quot;flex items-center gap-2&quot;>
          <ShieldCheck className=&quot;h-5 w-5 text-primary&quot; />
          Smart Contract Deployment
        </CardTitle>
        <CardDescription>
          Deploy your agreement as a smart contract for enhanced security and automation
        </CardDescription>
      </CardHeader>
      
      <CardContent className=&quot;space-y-6&quot;>
        <div className=&quot;space-y-4&quot;>
          <div className=&quot;flex items-center space-x-2&quot;>
            <Switch
              id=&quot;deploy-blockchain&quot;
              aria-label=&quot;Deploy to blockchain&quot;
              checked={deploymentOptions.deployToChain}
              onCheckedChange={(checked) => setDeploymentOptions({
                ...deploymentOptions,
                deployToChain: checked
              })}
            />
            <Label htmlFor=&quot;deploy-blockchain&quot;>Deploy to blockchain</Label>
          </div>
          
          {deploymentOptions.deployToChain && (
            <>
              <div className=&quot;space-y-2&quot;>
                <Label>Select blockchain network</Label>
                <RadioGroup 
                  defaultValue={deploymentOptions.network}
                  onValueChange={(value) => setDeploymentOptions({
                    ...deploymentOptions,
                    network: value as BlockchainNetwork
                  })}
                  className=&quot;flex flex-col space-y-1&quot;
                >
                  <div className=&quot;flex items-center space-x-2&quot;>
                    <RadioGroupItem value=&quot;ethereum&quot; id=&quot;ethereum&quot; />
                    <Label htmlFor=&quot;ethereum&quot;>Ethereum (higher fees, more secure)</Label>
                  </div>
                  <div className=&quot;flex items-center space-x-2&quot;>
                    <RadioGroupItem value=&quot;polygon&quot; id=&quot;polygon&quot; />
                    <Label htmlFor=&quot;polygon&quot;>Polygon (lower fees, faster)</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div className=&quot;space-y-2&quot;>
                <Label htmlFor=&quot;wallet-address&quot;>Wallet address for transactions</Label>
                <Input 
                  id=&quot;wallet-address&quot; 
                  placeholder=&quot;0x...&quot; 
                  value={deploymentOptions.walletAddress || ''}
                  onChange={(e) => setDeploymentOptions({
                    ...deploymentOptions,
                    walletAddress: e.target.value
                  })}
                />
              </div>
              
              <div className=&quot;flex items-center space-x-2&quot;>
                <Switch
                  id=&quot;use-escrow&quot;
                  aria-label=&quot;Use escrow&quot;
                  checked={deploymentOptions.useEscrow}
                  onCheckedChange={(checked) => setDeploymentOptions({
                    ...deploymentOptions,
                    useEscrow: checked
                  })}
                />
                <Label htmlFor=&quot;use-escrow&quot;>Use escrow for payments</Label>
              </div>
            </>
          )}
          
          <div className=&quot;rounded-md bg-muted p-4&quot;>
            <h4 className=&quot;text-sm font-medium mb-2&quot;>Smart Contract Preview</h4>
            <div className=&quot;max-h-52 overflow-y-auto bg-background p-3 rounded text-xs font-mono&quot;>
              <pre>{solidityCode.slice(0, 500)}...</pre>
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className=&quot;flex justify-between&quot;>
        <Button variant=&quot;outline&quot; onClick={handleDownloadSolidity}>
          <Download className=&quot;mr-2 h-4 w-4&quot; />
          Download .sol File
        </Button>
        
        <Button onClick={handleDeployContract} disabled={isDeploying}>
          {isDeploying ? (
            <>
              <Loader2 className=&quot;mr-2 h-4 w-4 animate-spin&quot; />
              Deploying...
            </>
          ) : (
            'Deploy Contract'
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
