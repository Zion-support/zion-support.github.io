
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

              })}


          







                  onValueChange={(value) => setDeploymentOptions({;
                    ...deploymentOptions,;
                    network: value as BlockchainNetwork;





              


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

          



ursor/fix-website-loading-errors-and-merge-6662
      <CardFooter className="flex justify-between">


ursor/fix-website-loading-errors-and-merge-6662
        <Button onClick={handleDeployContract} disabled={isDeploying}>



      ;
      <CardFooter className="flex justify-between">;
        <Button variant="outline" onClick={handleDownloadSolidity}>;


          ) :(;


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

}'"
        </Button>;
      </CardFooter>;
    </Card>;
  );
}
;
}

