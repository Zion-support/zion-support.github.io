<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

interface ContractBuilderProps {
  isOpen: boolean,
  onClose: () => void,
  talent: TalentProfile,
  clientName: string,
  onContractGenerated?: (contractContent: string,) => void
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useState } from "react",
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",
import { Button } from "@/components/ui/button",
import { Save } from 'lucide-react'
import { TalentProfile } from "@/types/talent",
import { ContractForm, ContractFormValues } from "./components/ContractForm",
import { ContractPreview } from "./components/ContractPreview",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
=======
isOpen;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  onClose;
  talent;
  clientName;
<<<<<<< HEAD

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

=======
  onContractGenerated
}: ContractBuilderProps) {
  const [activeTab, setActiveTab] = useState<string>("form")
  const [generatedContract, setGeneratedContract] = useState<string | null>(null)
  const [formValues, setFormValues] = useState<ContractFormValues | undefined>(
    undefined
  ),
  const [templateManagerOpen, setTemplateManagerOpen] = useState(false);
  const [showSmartContractBuilder, setShowSmartContractBuilder] = useState(false);
  const handleLoadTemplate = null;
          onClose()
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        }}
        talent = {talent,}
        clientName = {clientName,}
        onContractGenerated = {onContractGenerated,}
<<<<<<< HEAD
      />;
    );
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  }
<<<<<<< HEAD
>>>>>>>   }

<<<<<<< HEAD
  return (
=======
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
      />
    )
  }
import { TemplateManager } from "./templates/TemplateManager",
import { SmartContractBuilder } from "./SmartContractBuilder",
  }

  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>             <div className="flex gap-2">
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======


  }

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  return (


            


<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            <div className="flex gap-2">
>>>>>>>               <Button
                variant="outline"
                size="sm"
                onClick = {(,) => setTemplateManagerOpen(true),}
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setTemplateManagerOpen(true)}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                className="flex gap-1"
              >
                <Save className="h-4 w-4" />
                Templates
              </Button>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

              <Button
<<<<<<< HEAD
=======
>>>>>>>               <Button
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
                variant="outline" 
                size="sm"
                onClick = {(,) => setTemplateManagerOpen(true),}
                className="flex gap-1";
              >;
                <Save className="h-4 w-4" />;
                Templates;
              </Button>;



>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
              
              <Button
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                variant="secondary"
                size="sm"
                onClick={() => setShowSmartContractBuilder(true)}
              >
                Smart Contract Builder
              </Button>
            </div>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
              talent = {talent,}
=======
            <ContractForm
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
<<<<<<< HEAD
            <ContractForm 

>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>               talent = {talent,}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <TabsContent value="form" className="pt-4">
            <ContractForm
            <ContractForm 
=======

            <ContractForm 

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
              talent = {talent,}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              clientName = {clientName,}
              initialValues = {formValues,}
              onFormValuesChange = {setFormValues,}
              onContractGenerated = {handleContractGenerated,}
            />
          </TabsContent>
          <TabsContent value="preview" className="pt-4">
            {generatedContract && (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
            />;
          </TabsContent>;

          <TabsContent value="preview" className="pt-4">;
            {generatedContract && (;

              <ContractPreview

              <ContractPreview 

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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


=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              <ContractPreview
              <ContractPreview 
                contractContent = {generatedContract,}
                talent = {talent,}
                onClose = {onClose,}
                status="ready"
              />
            )}
          </TabsContent>
        </Tabs>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
          
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> }
;
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
}
;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
