
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

interface ContractBuilderProps {
  isOpen: boolean;
  onClose: () => void;
  talent: TalentProfile;
  clientName: string;
  onContractGenerated?: (contractContent: string) => void;
}

export function ContractBuilder({
  isOpen,
  onClose,
  talent,
  clientName,
  onContractGenerated
}: ContractBuilderProps) {
  const [activeTab, setActiveTab] = useState<string>(&quot;form&quot;);
  const [generatedContract, setGeneratedContract] = useState<string | null>(null);
  const [formValues, setFormValues] = useState<ContractFormValues | undefined>(
    undefined
  );
  const [templateManagerOpen, setTemplateManagerOpen] = useState(false);
  const [showSmartContractBuilder, setShowSmartContractBuilder] = useState(false);

  const handleLoadTemplate = (templateData: ContractFormValues) => {
    setFormValues(templateData);
  };

  const handleContractGenerated = (contract: string) => {
    setGeneratedContract(contract);
    setActiveTab(&quot;preview&quot;);
    if (onContractGenerated) {
      onContractGenerated(contract);
    }
  };

  if (showSmartContractBuilder) {
    return (
      <SmartContractBuilder
        isOpen={isOpen}
        onClose={() => {
          setShowSmartContractBuilder(false);
          onClose();
        }}
        talent={talent}
        clientName={clientName}
        onContractGenerated={onContractGenerated}
      />
    );
  }

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
              talent={talent}
              clientName={clientName}
              initialValues={formValues}
              onFormValuesChange={setFormValues}
              onContractGenerated={handleContractGenerated}
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
            )}
          </TabsContent>
        </Tabs>
        
        <TemplateManager
          isOpen={templateManagerOpen}
          onClose={() => setTemplateManagerOpen(false)}
          onSelectTemplate={handleLoadTemplate}
          currentValues={formValues}
        />
      </DialogContent>
    </Dialog>
  );
}
