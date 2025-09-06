<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react",
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",
import { Button } from "@/components/ui/button",
import { Save } from 'lucide-react'
import { TalentProfile } from "@/types/talent",
import { ContractForm, ContractFormValues } from "./components/ContractForm",
import { ContractPreview } from "./components/ContractPreview",
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
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
interface ContractBuilderProps {;
  isOpen: boolean,;
  onClose: () => void,;
  talent: TalentProfile,;
  clientName: string,;
  onContractGenerated?: (contractContent: string,) => void;
}

export function ContractBuilder(): any ({;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  isOpen;
  onClose;
  talent;
  clientName;
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        }}
        talent = {talent,}
        clientName = {clientName,}
        onContractGenerated = {onContractGenerated,}
      />;
    );
  }
  return (
<<<<<<< HEAD
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
=======
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

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              <Button
                variant="secondary"
                size="sm"
                onClick = {() => setShowSmartContractBuilder(true),}
<<<<<<< HEAD
              >
                Smart Contract Builder
              </Button>
            </div>
          </div>
          <TabsContent value="form" className="pt-4">
=======
              >;
                Smart Contract Builder;
              </Button>;
            </div>;
          </div>;

          <TabsContent value="form" className="pt-4">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            <ContractForm
              talent = {talent,}
              clientName = {clientName,}
              initialValues = {formValues,}
              onFormValuesChange = {setFormValues,}
              onContractGenerated = {handleContractGenerated,}
<<<<<<< HEAD
            />
          </TabsContent>
          <TabsContent value="preview" className="pt-4">
            {generatedContract && (
=======
            />;
          </TabsContent>;

          <TabsContent value="preview" className="pt-4">;
            {generatedContract && (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              <ContractPreview
                contractContent = {generatedContract,}
                talent = {talent,}
                onClose = {onClose,}
                status="ready"
              />;
            )}
<<<<<<< HEAD
          </TabsContent>
        </Tabs>
=======
          </TabsContent>;
        </Tabs>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        <TemplateManager
          isOpen = {templateManagerOpen,}
          onClose = {() => setTemplateManagerOpen(false),}
          onSelectTemplate = {handleLoadTemplate,}
          currentValues = {formValues,}
<<<<<<< HEAD
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
=======
        />;
      </DialogContent>;
    </Dialog>;
  );

};

}/>) ;
}</TabsList> <div className="flex gap-2" > <Button > <Save className="h-4 w-4" /> Templates </Button> <Button > Smart Contract Builder </Button> </div> </div> <TabsContent value="form" className="pt-4" > <ContractFormtalent= {
  talent 
}clientName= {
  clientName 
}initialValues= {
  formValues 
=======
interface ContractBuilderProps {
  is_open: boolean,
  on_close: () => void,
  talent: TalentProfile,
  client_name: string,
  onContractGenerated?: (contract_content: string, ) => void;
}
export /**
 * ContractBuilder - Function description
 */
function ContractBuilder() {
  const [active_tab, setActiveTab] = useState < string>("form");
  const [generated_contract, setGeneratedContract] = useState < string | null>(null);
  const [form_values, setFormValues] = useState < ContractFormValues | undefined>(
    undefined);
  const [templateManagerOpen, setTemplateManagerOpen] = useState (false);
  const [showSmartContractBuilder, setShowSmartContractBuilder] = useState (false);
  const handleLoadTemplate = (template_data: ContractFormValues, ) =>: any {
    setFormValues (template_data);
  }
  const handleContractGenerated = (contract: string) =>: any {
    setGeneratedContract (contract);
    setActiveTab ("preview");    // Check condition
if ( {) {
  $2
}
      onContractGenerated (contract);
    }
  }
  // Check condition
if ( {) {
  $2
}
    return (
      <SmartContractBuilder;
        is_open={is_open}
        on_close={() => {
          setShowSmartContractBuilder (false);          on_close ();
        }}
        talent = {talent, }
        client_name = {client_name, }
        onContractGenerated = {onContractGenerated, }
      />);
  }
  return (
    <Dialog open={is_open} onOpenChange={on_close}>;
      <DialogContent className="max - w-4xl max - h-[90vh] overflow - y-auto">;
        <DialogHeader>;
          <DialogTitle > Contract Builder</DialogTitle>;
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
              <Button;
                variant="secondary";
                size="sm";
                on_click = {() => setShowSmartContractBuilder (true), }
              >;
                Smart Contract Builder;
              </Button>;
            </div>;
          </div>;
          <TabsContent value="form" className="pt - 4">;
            <ContractForm;
              talent = {talent, }
              client_name = {client_name, }
              initial_values = {form_values, }
              onFormValuesChange = {setFormValues, }
              onContractGenerated = {handleContractGenerated, }
            />;
          </TabsContent>;
          <TabsContent value="preview" className="pt - 4">;
            {generated_contract && (
              <ContractPreview;
                contract_content = {generated_contract, }
                talent = {talent, }
                on_close = {on_close, }
                status="ready";
              />)}
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
}/>);
}</TabsList> <div className="flex gap - 2" > <Button > <Save className="h - 4 w - 4" /> Templates </Button> <Button > Smart Contract Builder </Button> </div> </div> <TabsContent value="form" className="pt - 4" > <ContractForm talent= {
  talent;
}client_name= {
  client_name;
}initial_values= {
  form_values;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}onFormValuesChange= {
  setFormValues;
}onContractGenerated= {
<<<<<<< HEAD
  handleContractGenerated 
}/> </TabsContent> />) ;
}</TabsContent> </Tabs> <TemplateManagerisOpen= {
  templateManagerOpen 
}onClose= {
  () => setTemplateManagerOpen (false) ;
}onSelectTemplate= {;
  handleLoadTemplate ;
}currentValues= {;
  formValues ;
}/> </DialogContent> </Dialog>) ;
}"}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
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
