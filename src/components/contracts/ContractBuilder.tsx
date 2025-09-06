<<<<<<< HEAD
=======
<<<<<<< HEAD


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
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { useState } from "react",
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",
import { Button } from "@/components/ui/button",
import { Save } from 'lucide-react'
import { TalentProfile } from "@/types/talent",
import { ContractForm, ContractFormValues } from "./components/ContractForm",
import { ContractPreview } from "./components/ContractPreview",
<<<<<<< HEAD
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
  }
=======
import { TemplateManager } from "./templates/TemplateManager",
import { SmartContractBuilder } from "./SmartContractBuilder",
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (


            
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick = {(,) => setTemplateManagerOpen(true),}
                className="flex gap-1"
              >
                <Save className="h-4 w-4" />
                Templates
              </Button>

    <Dialog open={isOpen} onOpenChange={onClose}>;
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">;
        <DialogHeader>;
          <DialogTitle>Contract Builder</DialogTitle>;
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
                Templates;
              </Button>;


=======

              
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setShowSmartContractBuilder(true)}
              >
                Smart Contract Builder
              </Button>
            </div>
          </div>
<<<<<<< HEAD
          <TabsContent value="form" className="pt-4">
<<<<<<< HEAD
            <ContractForm
=======

            <ContractForm 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              talent = {talent,}
              clientName = {clientName,}
              initialValues = {formValues,}
              onFormValuesChange = {setFormValues,}
              onContractGenerated = {handleContractGenerated,}
            />
          </TabsContent>
          <TabsContent value="preview" className="pt-4">
            {generatedContract && (
<<<<<<< HEAD
              <ContractPreview
=======

              <ContractPreview 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                contractContent = {generatedContract,}
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

        />;
      </DialogContent>;
    </Dialog>;
  );

=======
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
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
