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
import { TemplateManager } from "./templates/TemplateManager",
import { SmartContractBuilder } from "./SmartContractBuilder",
=======
import { useState } from &quot;react&quot;;
import { Dialog, DialogContent, DialogHeader, DialogTitle } from &quot;@/components/ui/dialog&quot;;
import { Tabs, TabsList, TabsTrigger, TabsContent } from &quot;@/components/ui/tabs&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Save } from 'lucide-react'
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
    }
  },
=======

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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  if (showSmartContractBuilder) {_return (_<SmartContractBuilder
        isOpen={isOpen}
<<<<<<< HEAD
        onClose={() => {
          setShowSmartContractBuilder(false),
          onClose()
        }}
        talent={talent}
        clientName={clientName}
        onContractGenerated={onContractGenerated}
=======
        onClose={_() => {
          setShowSmartContractBuilder(false);
          onClose();}}
        talent={_talent}
        clientName={_clientName}
        onContractGenerated={_onContractGenerated}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      />
    )
  }

<<<<<<< HEAD
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className=&quot;max-w-4xl max-h-[90vh] overflow-y-auto&quot;>
        <DialogHeader>
          <DialogTitle>Contract Builder</DialogTitle>
        </DialogHeader>
        <Tabs value={activeTab} onValueChange={setActiveTab} className=&quot;mt-4&quot;>
          <div className=&quot;flex justify-between items-center&quot;>
            <TabsList className=&quot;grid grid-cols-2&quot;>
              <TabsTrigger value=&quot;form&quot;>Contract Details</TabsTrigger>
              <TabsTrigger value=&quot;preview&quot; disabled={!generatedContract}>Preview</TabsTrigger>
=======
  return (_<Dialog open={_isOpen} onOpenChange={_onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Contract Builder</DialogTitle>
        </DialogHeader>
        <Tabs value={_activeTab} onValueChange={_setActiveTab} className="mt-4">
          <div className="flex justify-between items-center">
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="form">Contract Details</TabsTrigger>
              <TabsTrigger value="preview" disabled={_!generatedContract}>Preview</TabsTrigger>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </TabsList>
            
            <div className=&quot;flex gap-2&quot;>
              <Button 
<<<<<<< HEAD
                variant=&quot;outline&quot; 
                size=&quot;sm&quot;
                onClick={() => setTemplateManagerOpen(true)}
                className=&quot;flex gap-1&quot;
=======
                variant="outline" 
                size="sm"
                onClick={_() => setTemplateManagerOpen(true)}
                className="flex gap-1"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                <Save className=&quot;h-4 w-4&quot; />
                Templates
              </Button>
              
              <Button
<<<<<<< HEAD
                variant=&quot;secondary&quot;
                size=&quot;sm&quot;
                onClick={() => setShowSmartContractBuilder(true)}
=======
                variant="secondary"
                size="sm"
                onClick={_() => setShowSmartContractBuilder(true)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                Smart Contract Builder
              </Button>
            </div>
          </div>
          
          <TabsContent value=&quot;form&quot; className=&quot;pt-4&quot;>
            <ContractForm 
              talent={_talent}
              clientName={_clientName}
              initialValues={_formValues}
              onFormValuesChange={_setFormValues}
              onContractGenerated={_handleContractGenerated}
            />
          </TabsContent>
          
<<<<<<< HEAD
          <TabsContent value=&quot;preview&quot; className=&quot;pt-4&quot;>
            {generatedContract && (
              <ContractPreview 
                contractContent={generatedContract}
                talent={talent}
                onClose={onClose}
                status=&quot;ready&quot;
=======
          <TabsContent value="preview" className="pt-4">
            {_generatedContract && (
              <ContractPreview 
                contractContent={generatedContract}
                talent={_talent}
                onClose={_onClose}
                status="ready"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
  )
}
