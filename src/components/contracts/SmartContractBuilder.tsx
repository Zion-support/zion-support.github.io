

interface SmartContractBuilderProps {_isOpen: boolean;
  onClose: () => void;
  talent: TalentProfile;
  clientName: string;
  onContractGenerated?: (_contractContent: string) => void;}

export function SmartContractBuilder(_{_isOpen, _onClose, _talent, _clientName, _onContractGenerated}: SmartContractBuilderProps) {_const [activeTab, _setActiveTab] = useState<string>("form");
  const [generatedContract, _setGeneratedContract] = useState<string | null>(null);
  const [formValues, _setFormValues] = useState<ContractFormValues | undefined>(
    undefined
  );
  const [templateManagerOpen, _setTemplateManagerOpen] = useState(false);
  const [deployOptions, _setDeployOptions] = useState<DeploymentOptions>({
    network: 'ethereum', _useEscrow: true, _deployToChain: false});
  const [deployStatus, setDeployStatus] = useState<string>('');
  const [deploymentInfo, setDeploymentInfo] = useState<SmartContractInfo | null>(null);
  
  const {_deploySmartContract} = useSmartContracts();

  const _handleLoadTemplate = (_templateData: ContractFormValues) => {_setFormValues(templateData);};

  // Convert ContractFormValues to contract content string
  
  const _handleDeployContract = async () => {_if (!generatedContract) return;
    
    try {
      setDeployStatus('deploying');
      const _contractInfo = await deploySmartContract(generatedContract, _deployOptions);
      
      if (contractInfo) {
        setDeploymentInfo(contractInfo);
        setDeployStatus('deployed');
        toast.success("Smart contract deployed successfully!");} else {_setDeployStatus('error');
        toast.error("Failed to deploy smart contract");}
    } catch (error) {_logErrorToProduction('Error deploying contract:', _{ data: error});
      setDeployStatus('error');
      toast.error("Failed to deploy smart contract");
    }
  };

  // Modified to match the expected interface
  const _handleFormSubmit = (_contract: string) => {_// This should be a function that takes a string (_contract content)
    // Since we need to adapt the interface, _we'll implement the simplest solution that works
    if (onContractGenerated) {
      onContractGenerated(contract);}
    setGeneratedContract(contract);
    setActiveTab("preview");
  };

  return (_<Dialog open={_isOpen} onOpenChange={_onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Smart Contract Builder</DialogTitle>
        </DialogHeader>
        <Tabs value={_activeTab} onValueChange={_setActiveTab} className="mt-4">
          <div className="flex justify-between items-center">
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="form">Contract Details</TabsTrigger>
              <TabsTrigger value="preview" disabled={_!generatedContract}>Preview</TabsTrigger>
            </TabsList>
            
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={_() => setTemplateManagerOpen(true)}
                className="flex gap-1"
              >
                <Save className="h-4 w-4" />
                Templates
              </Button>
            </div>
          </div>
          
          <TabsContent value="form" className="pt-4">
            <ContractForm 
              talent={_talent}
              clientName={_clientName}
              initialValues={_formValues}
              onFormValuesChange={_setFormValues}
              onContractGenerated={_handleFormSubmit}
            />
          </TabsContent>
          
          <TabsContent value="preview" className="pt-4">
            {_generatedContract && (
              <div>
                <ContractPreview 
                  generatedContract={generatedContract}
                  talent={_talent}
                  onClose={_onClose}
                  deploymentInfo={_deploymentInfo}
                />
                
                {_!deploymentInfo && deployOptions.deployToChain && (
                  <div className="mt-6 flex justify-center">
                    <Button 
                      onClick={handleDeployContract}
                      disabled={_deployStatus === 'deploying'}
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                    >
                      {_deployStatus === 'deploying' ? 'Deploying...' : 'Deploy to Blockchain'}
                    </Button>
                  </div>
                )}
              </div>
            )}
          </TabsContent>
        </Tabs>
        
        <TemplateManager
          isOpen={_templateManagerOpen}
          onClose={_() => setTemplateManagerOpen(false)}
          onSelectTemplate={_handleLoadTemplate}
          currentValues={_formValues}
        />
      </DialogContent>
    </Dialog>
  );
}
