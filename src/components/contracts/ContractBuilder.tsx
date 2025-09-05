import { useState } from "react",
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",
import { Button } from "@/components/ui/button",
import { Save } from 'lucide-react'
import { TalentProfile } from "@/types/talent",
import { ContractForm, ContractFormValues } from "./components/ContractForm",
import { ContractPreview } from "./components/ContractPreview",
import { TemplateManager } from "./templates/TemplateManager",
import { SmartContractBuilder } from "./SmartContractBuilder",interface ContractBuilderProps {
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
  const [activeTab, setActiveTab] = useState<string>("form"),
  const [generatedContract, setGeneratedContract] = useState<string | null>(null),  const [formValues, setFormValues] = useState<ContractFormValues | undefined>(
    undefined
  ),
  const [templateManagerOpen, setTemplateManagerOpen] = useState(false),
  const [showSmartContractBuilder, setShowSmartContractBuilder] = useState(false),

  const handleLoadTemplate = (templateData: ContractFormValues) => {
    setFormValues(templateData)
  },

  const handleContractGenerated = (contract: string) => {
    setGeneratedContract(contract),
    setActiveTab("preview"),    if (onContractGenerated) {
      onContractGenerated(contract)
    }
  },

interface ContractBuilderProps {isOpen: boolean,
  onClose: () => void;
  talent: TalentProfile,
  clientName: string,
  onContractGenerated?: (contractContent: string) => void}

export function ContractBuilder(_{isOpen, onClose, talent, clientName, onContractGenerated}: ContractBuilderProps) {const [activeTab, setActiveTab] = useState<string>("form");
  const [generatedContract, setGeneratedContract] = useState<string | null>(null);
  const [formValues, setFormValues] = useState<ContractFormValues | undefined>(
    undefined
  );
  const [templateManagerOpen, setTemplateManagerOpen] = useState(false);
  const [showSmartContractBuilder, setShowSmartContractBuilder] = useState(false);

  const handleLoadTemplate = (templateData: ContractFormValues) => {
    setFormValues(templateData)};

  const handleContractGenerated = (contract: string) => {setGeneratedContract(contract);
    setActiveTab("preview");
    if (onContractGenerated) {
      onContractGenerated(contract)}
  };

  if (showSmartContractBuilder) {return (_<SmartContractBuilder,
isOpen={isOpen}
        onClose={() => {
          setShowSmartContractBuilder(false),
          onClose()
        }}
        talent={talent}
        clientName={clientName}
        onContractGenerated={onContractGenerated}      />
    )
  }

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
              <TabsTrigger value=&quot;preview&quot; disabled={!generatedContract}>Preview</TabsTrigger>            </TabsList>
            
            <div className=&quot;flex gap-2&quot;>
              <Button,
variant=&quot;outline&quot; 
                size=&quot;sm&quot;
                onClick={() => setTemplateManagerOpen(true)}
                className=&quot;flex gap-1&quot;              >
                <Save className=&quot;h-4 w-4&quot; />
                Templates
              </Button>
              
              <Button,
variant=&quot;secondary&quot;
                size=&quot;sm&quot;
                onClick={() => setShowSmartContractBuilder(true)}              >
                Smart Contract Builder
              </Button>
            </div>
          </div>
          
          <TabsContent value=&quot;form&quot; className=&quot;pt-4&quot;>
            <ContractForm,
talent={talent}
              clientName={clientName}
              initialValues={formValues}
              onFormValuesChange={setFormValues}
              onContractGenerated={handleContractGenerated}
            />
          </TabsContent>
          
          <TabsContent value=&quot;preview&quot; className=&quot;pt-4&quot;>
            {generatedContract && (
              <ContractPreview,
contractContent={generatedContract}
                talent={talent}
                onClose={onClose}
                status=&quot;ready&quot;              />
            )}
          </TabsContent>
        </Tabs>
        
        <TemplateManager,
isOpen={templateManagerOpen}
          onClose={_() => setTemplateManagerOpen(false)}
          onSelectTemplate={handleLoadTemplate}
          currentValues={formValues}
        />
      </DialogContent>
    </Dialog>
  )
}
