
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react",
import { Dialog, DialogContent } from "@/components/ui/dialog",
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",
import { Button } from "@/components/ui/button",
import { Save } from "lucide-react",
import { TalentProfile } from "@/types/talent",
import { ContractForm, ContractFormValues } from "./components/ContractForm",
import { ContractPreview } from "./components/ContractPreview",
import { TemplateManager } from "./templates/TemplateManager",
import { SmartContractBuilder } from "./SmartContractBuilder",
=======
import { useState } from &quot;react&quot;;
import { Dialog, DialogContent } from &quot;@/components/ui/dialog&quot;;
import { Tabs, TabsList, TabsTrigger, TabsContent } from &quot;@/components/ui/tabs&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Save } from &quot;lucide-react&quot;;
import { TalentProfile } from &quot;@/types/talent&quot;;
import { ContractForm, ContractFormValues } from &quot;./components/ContractForm&quot;;
import { ContractPreview } from &quot;./components/ContractPreview&quot;;
import { TemplateManager } from &quot;./templates/TemplateManager&quot;;
import { SmartContractBuilder } from &quot;./SmartContractBuilder&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface ContractBuilderProps {
  isOpen: boolean,
  onClose: () => void,
  talent: TalentProfile,
  clientName: string,
  onContractGenerated?: (contractContent: string) => void
}

export function ContractBuilder({
  isOpen,
  onClose,
  talent,
  clientName,
  onContractGenerated
}: ContractBuilderProps) {
<<<<<<< HEAD
  const [activeTab, setActiveTab] = useState<string>("form"),
  const [generatedContract, setGeneratedContract] = useState<string | null>(null),
=======
  const [activeTab, setActiveTab] = useState<string>(&quot;form&quot;);
  const [generatedContract, setGeneratedContract] = useState<string | null>(null);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  const [formValues, setFormValues] = useState<ContractFormValues | undefined>(
    undefined
  ),
  const [templateManagerOpen, setTemplateManagerOpen] = useState(false),
  const [showSmartContractBuilder, setShowSmartContractBuilder] = useState(false),

  const handleLoadTemplate = (templateData: ContractFormValues) => {
    setFormValues(templateData)
  },

  const handleContractGenerated = (contract: string) => {
<<<<<<< HEAD
    setGeneratedContract(contract),
    setActiveTab("preview"),
=======
    setGeneratedContract(contract);
    setActiveTab(&quot;preview&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    if (onContractGenerated) {
      onContractGenerated(contract)
=======
import { useState } from "react",;
import { Dialog, DialogContent } from "@/components/ui/dialog",;
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",;
import { Button } from "@/components/ui/button",;
import { Save } from "lucide-react",;
import { TalentProfile } from "@/types/talent",;
import { ContractForm, ContractFormValues } from "./components/ContractForm",;
import { ContractPreview } from "./components/ContractPreview",;
import { TemplateManager } from "./templates/TemplateManager",;
import { SmartContractBuilder } from "./SmartContractBuilder",;
interface ContractBuilderProps {;
  isOpen: boolean,;
  onClose: () => void,;
  talent: TalentProfile,;
  clientName: string,;
  onContractGenerated?: (contractContent: string) => void;
}
;
export function ContractBuilder({;
  isOpen,;
  onClose,;
  talent,;
  clientName,;
  onContractGenerated;
}: ContractBuilderProps) {;
  const [activeTab, setActiveTab] = useState<string>("form"),;
  const [generatedContract, setGeneratedContract] = useState<string | null>(null),;
  const [formValues, setFormValues] = useState<ContractFormValues | undefined>(;
    undefined;
  ),;
  const [templateManagerOpen, setTemplateManagerOpen] = useState(false),;
  const [showSmartContractBuilder, setShowSmartContractBuilder] = useState(false),;
  const handleLoadTemplate = (templateData: ContractFormValues) => {;
    setFormValues(templateData);
  },;
  const handleContractGenerated = (contract: string) => {;
    setGeneratedContract(contract),;
    setActiveTab("preview"),;
    if (onContractGenerated) {;
      onContractGenerated(contract);
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
    }
  };
  if (showSmartContractBuilder) {;
    return (;
      <SmartContractBuilder;
        isOpen={isOpen}
        onClose={() => {;
          setShowSmartContractBuilder(false);
          onClose();
        }}
        talent={talent}
        clientName={clientName}
        onContractGenerated={onContractGenerated}
      />;
    );
  }
<<<<<<< HEAD

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className=&quot;max-w-4xl max-h-[90vh] overflow-y-auto&quot;>
        <Tabs value={activeTab} onValueChange={setActiveTab} className=&quot;mt-4&quot;>
          <div className=&quot;flex justify-between items-center&quot;>
            <TabsList className=&quot;grid grid-cols-2&quot;>
              <TabsTrigger value=&quot;form&quot;>Contract Details</TabsTrigger>
              <TabsTrigger value=&quot;preview&quot; disabled={!generatedContract}>Preview</TabsTrigger>
            </TabsList>
            
            <div className=&quot;flex gap-2&quot;>
              <Button 
                variant=&quot;outline&quot; 
                size=&quot;sm&quot;
                onClick={() => setTemplateManagerOpen(true)}
                className=&quot;flex gap-1&quot;
              >
                <Save className=&quot;h-4 w-4&quot; />
                Templates
              </Button>
              
              <Button
                variant=&quot;secondary&quot;
                size=&quot;sm&quot;
                onClick={() => setShowSmartContractBuilder(true)}
              >
                Smart Contract Builder
              </Button>
            </div>
          </div>
          
          <TabsContent value=&quot;form&quot; className=&quot;pt-4&quot;>
            <ContractForm 
=======
;
  return (;
    <Dialog open={isOpen} onOpenChange={onClose}>;
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">;
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">;
          <div className="flex justify-between items-center">;
            <TabsList className="grid grid-cols-2">;
              <TabsTrigger value="form">Contract Details</TabsTrigger>;
              <TabsTrigger value="preview" disabled={!generatedContract}>Preview</TabsTrigger>;
            </TabsList>;
            <div className="flex gap-2">;
              <Button;
                variant="outline";
                size="sm";
                onClick={() => setTemplateManagerOpen(true)}
                className="flex gap-1";
              >;
                <Save className="h-4 w-4" />;
                Templates;
              </Button>;
              <Button;
                variant="secondary";
                size="sm";
                onClick={() => setShowSmartContractBuilder(true)}
              >;
                Smart Contract Builder;
              </Button>;
            </div>;
          </div>;
          <TabsContent value="form" className="pt-4">;
            <ContractForm;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
              talent={talent}
              clientName={clientName}
              initialValues={formValues}
              onFormValuesChange={setFormValues}
              onContractGenerated={handleContractGenerated}
<<<<<<< HEAD
            />
          </TabsContent>
          
          <TabsContent value=&quot;preview&quot; className=&quot;pt-4&quot;>
            {generatedContract && (
              <ContractPreview 
                contractContent={generatedContract}
                talent={talent}
                onClose={onClose}
                status=&quot;ready&quot;
              />
=======
            />;
          </TabsContent>;
          <TabsContent value="preview" className="pt-4">;
            {generatedContract && (;
              <ContractPreview;
                contractContent={generatedContract}
                talent={talent}
                onClose={onClose}
                status="ready";
              />;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
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
}
;