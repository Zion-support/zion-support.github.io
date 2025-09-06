
<<<<<<< HEAD
=======

export function ContractBuilder({
  isOpen
  onClose
  talent
  clientName
  onContractGenerated
}: ContractBuilderProps) {
  const [activeTab, setActiveTab] = useState<string>("form")
  const [generatedContract, setGeneratedContract] = useState<string | null>(null)
  const [formValues, setFormValues] = useState<ContractFormValues | undefined>(
    undefined
  )
  const [templateManagerOpen, setTemplateManagerOpen] = useState(false)
  const [showSmartContractBuilder, setShowSmartContractBuilder] = useState(false)
  const handleLoadTemplate = (templateData: ContractFormValues,) => {
    setFormValues(templateData)
  }
  const handleContractGenerated = (contract: string) => {;
    setGeneratedContract(contract);
    setActiveTab("preview");    if (onContractGenerated) {
      onContractGenerated(contract)
    }
  }
  if (showSmartContractBuilder) {
    return (
      <SmartContractBuilder
        isOpen={isOpen}
        onClose={() => {
          setShowSmartContractBuilder(false);          onClose()
        }}
        talent = {talent,}
        clientName = {clientName,}
        onContractGenerated = {onContractGenerated,}
      />
    )
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import { useState } from "react",
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",
import { Button } from "@/components/ui/button",
import { Save } from 'lucide-react'
import { TalentProfile } from "@/types/talent",
import { ContractForm, ContractFormValues } from "./components/ContractForm",
import { ContractPreview } from "./components/ContractPreview",
<<<<<<< HEAD

=======
import { TemplateManager } from "./templates/TemplateManager";
import { SmartContractBuilder } from "./SmartContractBuilder";
interface ContractBuilderProps {

  isOpen: boolean
  onClose: () => void
  talent: TalentProfile
  clientName: string
  onContractGenerated?: (contractContent: string,) => void

}
export function ContractBuilder({
  isOpen;
  onClose;
  talent;
  clientName;

  onContractGenerated;
}: ContractBuilderProps) {;
  const [activeTab, setActiveTab] = useState<string>("form");
  const [generatedContract, setGeneratedContract] = useState<string | null>(null);
  const [formValues, setFormValues] = useState<ContractFormValues | undefined>(;
    undefined;
  );
  const [templateManagerOpen, setTemplateManagerOpen] = useState(false);
  const [showSmartContractBuilder, setShowSmartContractBuilder] = useState(false);

  const handleLoadTemplate = (templateData: ContractFormValues,) => {;
    setFormValues(templateData);
  };

  const handleContractGenerated = (contract: string) => {;
    setGeneratedContract(contract);
    setActiveTab("preview");    if (onContractGenerated) {;
      onContractGenerated(contract);
    }
  };

  if (showSmartContractBuilder) {;
    return (
      <SmartContractBuilder
        isOpen={isOpen}
        onClose={() => {;
          setShowSmartContractBuilder(false);          onClose();

        }}
        talent = {talent,}
        clientName = {clientName,}
        onContractGenerated = {onContractGenerated,}
      />;
    );
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  }
>>>>>>>   }

<<<<<<< HEAD
  return (
=======
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Contract Builder</DialogTitle>
        </DialogHeader>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">
          <div className="flex justify-between items-center">
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="form">Contract Details</TabsTrigger>
              <TabsTrigger value="preview" disabled={!generatedContract}>Preview</TabsTrigger>
            </TabsList>
<<<<<<< HEAD

=======
>>>>>>>             <div className="flex gap-2">
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
  return (


            


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            <div className="flex gap-2">
>>>>>>>               <Button
                variant="outline"
                size="sm"
                onClick = {(,) => setTemplateManagerOpen(true),}
                className="flex gap-1"
              >
                <Save className="h-4 w-4" />
                Templates
              </Button>
<<<<<<< HEAD

              <Button
=======
>>>>>>>               <Button
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                variant="secondary"
                size="sm"
                onClick={() => setShowSmartContractBuilder(true)}
              >
                Smart Contract Builder
              </Button>
            </div>
          </div>
<<<<<<< HEAD

              talent = {talent,}
=======
            <ContractForm
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
              <Button
                variant="secondary"
                size="sm"
                onClick = {() => setShowSmartContractBuilder(true),}

              >;
                Smart Contract Builder;
              </Button>;
            </div>;
          </div>;

          <TabsContent value="form" className="pt-4">;

            <ContractForm
            <ContractForm 

>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>               talent = {talent,}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              clientName = {clientName,}
              initialValues = {formValues,}
              onFormValuesChange = {setFormValues,}
              onContractGenerated = {handleContractGenerated,}
            />
          </TabsContent>
          <TabsContent value="preview" className="pt-4">
            {generatedContract && (
<<<<<<< HEAD

                contractContent = {generatedContract,}
=======
              <ContractPreview
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>                 contractContent = {generatedContract,}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                talent = {talent,}
                onClose = {onClose,}
                status="ready"
              />;
            )}

          </TabsContent>;
        </Tabs>;


        <TemplateManager
          isOpen = {templateManagerOpen,}
          onClose = {() => setTemplateManagerOpen(false),}
          onSelectTemplate = {handleLoadTemplate,}
          currentValues = {formValues,}
        />
      </DialogContent>
    </Dialog>
  )
}
}/>)
}</TabsList> <div className="flex gap-2" > <Button > <Save className="h-4 w-4" /> Templates </Button> <Button > Smart Contract Builder </Button> </div> </div> <TabsContent value="form" className="pt-4" > <ContractForm talent= {
  talent
}clientName= {
  clientName
}initialValues= {
  formValues
}onFormValuesChange= {
  setFormValues
}onContractGenerated= {
  handleContractGenerated
}/> </TabsContent> />)
}</TabsContent> </Tabs> <TemplateManager isOpen= {
  templateManagerOpen
}onClose= {
  () => setTemplateManagerOpen (false)
}onSelectTemplate= {
  handleLoadTemplate
}currentValues= {
  formValues
}/> </DialogContent> </Dialog>)
}"}
<<<<<<< HEAD

=======
          
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          <TabsContent value="form" className="pt-4">
            <ContractForm 
              talent={talent}
              clientName={clientName}
              initialValues={formValues}
              onFormValuesChange={setFormValues}
              onContractGenerated={handleContractGenerated}
            />
          </TabsContent>
          
          <TabsContent value="preview" className="pt-4">
            {generatedContract && (
              <ContractPreview 
                contractContent={generatedContract}
                talent={talent}
                onClose={onClose}
                status="ready"
              />
            )}
          </TabsContent>;
        </Tabs>;
        <TemplateManager;
          isOpen={templateManagerOpen}
          onClose={() => setTemplateManagerOpen(false)}
          onSelectTemplate={handleLoadTemplate}
          currentValues={formValues}
        />;
      </DialogContent>;
    </Dialog>;
  );

  handleContractGenerated;
}/> </TabsContent> />);
}</TabsContent> </Tabs> <TemplateManager is_open= {
  templateManagerOpen;
}on_close= {
  () => setTemplateManagerOpen (false);
}onSelectTemplate= {
  handleLoadTemplate;
}current_values= {
  form_values;
}/> </DialogContent> </Dialog>);
}"}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> }
;
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
