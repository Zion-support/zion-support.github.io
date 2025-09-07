
interface SmartContractBuilderProps {
  isOpen: boolean;
  onClose: () => void;
  talent: TalentProfile;
  clientName: string;
  onContractGenerated?: (contractContent: string) => void

}
export function SmartContractBuilder({
  isOpen;
origin/cursor/automate-test-improve-and-merge-code-2533
  onClose;
  talent;
  clientName;
  onContractGenerated}: SmartContractBuilderProps) {
  const [activeTab, setActiveTab] = useState<string>("form"),
  const [generatedContract, setGeneratedContract] = useState<string | null>(null),
  const [formValues, setFormValues] = useState<ContractFormValues | undefined>(
    undefined

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>;
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">;
        <DialogHeader>;
          <DialogTitle>Smart Contract Builder</DialogTitle>;
        </DialogHeader>;
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">;
          <div className="flex justify-between items-center">;
            <TabsList className="grid grid-cols-2">;
              <TabsTrigger value="form">Contract Details</TabsTrigger>;
              <TabsTrigger value="preview" disabled={!generatedContract}>Preview</TabsTrigger>;
            </TabsList>;

            <div className="flex gap-2">;
              <Button
                variant="outline" 
                size="sm"
                onClick = {(,) => setTemplateManagerOpen(true),}
                className="flex gap-1";
              >;
                <Save className="h-4 w-4" />;
    <Dialog open={is_open} onOpenChange={on_close}>;
      <DialogContent className="max - w-4xl max - h-[90vh] overflow - y-auto">;
        <DialogHeader>;
          <DialogTitle > Smart Contract Builder</DialogTitle>;
        </DialogHeader>;
        <Tabs value={active_tab} onValueChange={setActiveTab} className="mt - 4">;
          <div className="flex justify - between items - center">;
            <TabsList className="grid grid - cols - 2">;
              <TabsTrigger value="form">Contract Details</TabsTrigger>;
              <TabsTrigger value="preview" disabled={!generated_contract}>Preview</TabsTrigger>;
            </TabsList>;
            <div className="flex gap - 2">;
              <Button;
                variant="outline";
                size="sm";
                on_click = {(, ) => setTemplateManagerOpen (true), }
                className="flex gap - 1";
              >;
                <Save className="h - 4 w - 4" />;

                Templates;
              </Button>;
            </div>;
          </div>;
          <TabsContent value="form" className="pt-4">;
            <ContractForm;
              talent={talent}
              clientName={clientName}
              initialValues={formValues}
              onFormValuesChange={setFormValues}
              onContractGenerated={handleFormSubmit}
            />
          </TabsContent>

            />;
          </TabsContent>;

          <TabsContent value="preview" className="pt-4">;
            {generatedContract && (;
              <div>;

                <ContractPreview
                  generatedContract = {generatedContract,}
                  talent = {talent,}
                  onClose = {onClose,}
                  deploymentInfo = {deploymentInfo,}

                />;

                {!deploymentInfo && deployOptions && deployOptions.deployToChain && (;
                  <div className="mt-6 flex justify-center">;

                    <Button
                      onClick = {handleDeployContract,}
                      disabled = {deployStatus === 'deploying',}
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">;
                      {deployStatus === 'deploying' ? 'Deploying...' : 'Deploy to Blockchain'}
                    </Button>;
                  </div>                )}
              </div>;
            )}

          </TabsContent>;
        </Tabs>;


        <TemplateManager
          isOpen = {templateManagerOpen,}
          onClose = {() => setTemplateManagerOpen(false),}
          onSelectTemplate = {handleLoadTemplate,}
          currentValues = {formValues,}

        />;
      </DialogContent>;
    </Dialog>;
  );

};
//Modified to match the expected interface const handleFormSubmit = (contract: string) => {';
  //This should be a function that takes a string (contract content) //Since we need to adapt the interface, we'll implement the simplest solution that works if (onContractGenerated) {;
  setGeneratedContract (contract);";
setActiveTab ("preview");
};";
  talent ;
}clientName= {;
  clientName ;
}initialValues= {;
  formValues ;
}onFormValuesChange= {;
  setFormValues ;
}onContractGenerated= {;
  handleFormSubmit ;
}/> </TabsContent> <div> <ContractPreviewgeneratedContract= {
  generatedContract 
}talent= {
  talent 
}onClose= {
  onClose 
}deploymentInfo= {
  deploymentInfo 
}/> > {';
  deployStatus === 'deploying' ? 'Deploying...' : 'Deploy to Blockchain' ;
}</Button> </div>) ;
}</div>) ;
}</TabsContent> </Tabs> <TemplateManagerisOpen= {
  templateManagerOpen 
}onClose= {
  () => setTemplateManagerOpen (false) ;
}onSelectTemplate= {;
  handleLoadTemplate ;
}currentValues= {;
  formValues ;
}/> </DialogContent> </Dialog>) ;

}'"            {!enableOnChainAgreement && <p className="text-muted-foreground p-4 text-center">Enable on-chain agreement to deploy this contract to a blockchain.</p>}
            {/* Fallback for old Solidity preview if needed, or remove if fully replaced by on-chain flow */}

            {/* {generatedSolidityContract && !deployOptions && deployOptions.deployToChain && !enableOnChainAgreement && ( ... )} */}
          </TabsContent>;
        </Tabs>;

        <TemplateManager


          <TabsContent value="preview" className="pt-4">
            {generatedContract && (
              <div>
                <ContractPreview 
                />
                {!deploymentInfo && deployOptions.deployToChain && (
                  <div className="mt-6 flex justify-center">
                    <Button 
                      onClick={handleDeployContract}
                      disabled={deployStatus === 'deploying'}
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                    >
                      {deployStatus === 'deploying' ? 'Deploying...' : 'Deploy to Blockchain'}
                    </Button>;
                  </div>;
                )}
              </div>;
            )}
            {!generatedMarkdownContract && !isLoadingLegalDraft && <p>Generate a legal draft to preview and download.</p>}
          </TabsContent>;
        </Tabs>;
        <TemplateManager;


          isOpen={templateManagerOpen}
          onClose={() => setTemplateManagerOpen(false)}
          onSelectTemplate={handleLoadTemplate}
          currentValues={formValues}


;
        />;
      </DialogContent>;
    </Dialog>;
  );
}
;




          <TabsContent value="form" className="pt - 4">;
            <ContractForm;
              talent = {talent, }
              client_name = {client_name, }
              initial_values = {form_values, }
              onFormValuesChange = {setFormValues, }
              onContractGenerated = {handleFormSubmit, }
            />;
          </TabsContent>;
          <TabsContent value="preview" className="pt - 4">;
            {generated_contract && (
              <div>;
                <ContractPreview;
                  generated_contract = {generated_contract, }
                  talent = {talent, }
                  on_close = {on_close, }
                  deployment_info = {deployment_info, }
                />;
                {!deployment_info && deploy_options.deployToChain && (
                  <div className="mt - 6 flex justify - center">;
                    <Button;
                      on_click = {handleDeployContract, }
                      disabled = {deploy_status === 'deploying', }
                      className="bg - gradient - to - r from - blue - 600 to - indigo - 600 hover:from - blue - 700 hover:to - indigo - 700";
                    >;
                      {deploy_status === 'deploying' ? 'Deploying...' : 'Deploy to Blockchain'}
                    </Button>;
                  </div>                )}
              </div>)}
          </TabsContent>;
        </Tabs>;
        <TemplateManager;
          is_open = {templateManagerOpen, }
          on_close = {() => setTemplateManagerOpen (false), }
          onSelectTemplate = {handleLoadTemplate, }
          current_values = {form_values, }
        />;
      </DialogContent>;
    </Dialog>);
}

;
        />
      </DialogContent>
    </Dialog>
  );

};
//Modified to match the expected interface const handleFormSubmit = (contract: string) => {';
  //This should be a function that takes a string (contract content) //Since we need to adapt the interface, we'll implement the simplest solution that works if (onContractGenerated) {;
  setGeneratedContract (contract);";
setActiveTab ("preview");
};";
  talent ;
}clientName= {;
  clientName ;
}initialValues= {;
  formValues ;
}onFormValuesChange= {;
  setFormValues ;
}onContractGenerated= {;
  handleFormSubmit ;
}/> </TabsContent> <div> <ContractPreview generatedContract= {;
  generatedContract ;
}talent= {;
  talent ;
}onClose= {;
  onClose ;
}deploymentInfo= {;
  deploymentInfo ;
}/> > {';
  deployStatus === 'deploying' ? 'Deploying...' : 'Deploy to Blockchain' ;
}</Button> </div>) ;
}</div>) ;
}</TabsContent> </Tabs> <TemplateManager isOpen= {;
  templateManagerOpen ;
}onClose= {;
  () => setTemplateManagerOpen (false) ;
}onSelectTemplate= {;
  handleLoadTemplate ;
}currentValues= {;
  formValues ;
}/> </DialogContent> </Dialog>) ;
}'"
origin/cursor/automate-test-improve-and-merge-code-2533
