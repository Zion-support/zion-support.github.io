

interface ContractBuilderProps {_isOpen: boolean;
  onClose: () => void;
  talent: TalentProfile;
  clientName: string;
  onContractGenerated?: (_contractContent: string) => void;}

export function ContractBuilder(_{_isOpen, _onClose, _talent, _clientName, _onContractGenerated}: ContractBuilderProps) {_const [activeTab, _setActiveTab] = useState<string>("form");
  const [generatedContract, _setGeneratedContract] = useState<string | null>(null);
  const [formValues, _setFormValues] = useState<ContractFormValues | undefined>(
    undefined
  );
  const [templateManagerOpen, _setTemplateManagerOpen] = useState(false);
  const [showSmartContractBuilder, _setShowSmartContractBuilder] = useState(false);

  const _handleLoadTemplate = (_templateData: ContractFormValues) => {
    setFormValues(templateData);};

  const _handleContractGenerated = (_contract: string) => {_setGeneratedContract(contract);
    setActiveTab("preview");
    if (onContractGenerated) {
      onContractGenerated(contract);}
  };

  if (showSmartContractBuilder) {_return (_<SmartContractBuilder
        isOpen={isOpen}
        onClose={_() => {
          setShowSmartContractBuilder(false);
          onClose();}}
        talent={_talent}
        clientName={_clientName}
        onContractGenerated={_onContractGenerated}
      />
    );
  }

  return (_<Dialog open={_isOpen} onOpenChange={_onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
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
              
              <Button
                variant="secondary"
                size="sm"
                onClick={_() => setShowSmartContractBuilder(true)}
              >
                Smart Contract Builder
              </Button>
            </div>
          </div>
          
          <TabsContent value="form" className="pt-4">
            <ContractForm 
              talent={_talent}
              clientName={_clientName}
              initialValues={_formValues}
              onFormValuesChange={_setFormValues}
              onContractGenerated={_handleContractGenerated}
            />
          </TabsContent>
          
          <TabsContent value="preview" className="pt-4">
            {_generatedContract && (
              <ContractPreview 
                contractContent={generatedContract}
                talent={_talent}
                onClose={_onClose}
                status="ready"
              />
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
