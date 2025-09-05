
import { useState } from &quot;react&quot;;
import { useContractTemplates } from &quot;@/hooks/useContractTemplates&quot;;
import { ContractTemplate } from &quot;@/types/contracts&quot;;
import { Dialog, DialogContent, DialogHeader, DialogTitle } from &quot;@/components/ui/dialog&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { TemplateList } from &quot;./TemplateList&quot;;
import { TemplateSaveForm } from &quot;./TemplateSaveForm&quot;;
import { ContractFormValues } from &quot;@/components/contracts/components/ContractForm&quot;;
import { useToast } from &quot;@/hooks/use-toast&quot;;

interface TemplateManagerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTemplate: (template: ContractFormValues) => void;
  currentValues?: ContractFormValues;
}

export function TemplateManager({
  isOpen,
  onClose,
  onSelectTemplate,
  currentValues
}: TemplateManagerProps) {
  const [mode, setMode] = useState<&quot;list&quot; | &quot;save&quot;>(&quot;list&quot;);
  const [selectedTemplate, setSelectedTemplate] = useState<ContractTemplate | null>(null);
  const { templates, isLoading } = useContractTemplates();
  const { toast } = useToast();

  const handleSelectTemplate = (template: ContractTemplate) => {
    if (template && template.template_data) {
      onSelectTemplate(template.template_data);
      onClose();
      toast({
        title: &quot;Template loaded&quot;,
        description: `Template &quot;${template.title}&quot; has been loaded.`});
    }
  };

  const handleSaveComplete = () => {
    setMode(&quot;list&quot;);
    setSelectedTemplate(null);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className=&quot;sm:max-w-lg max-h-[90vh] overflow-y-auto&quot;>
        <DialogHeader>
          <DialogTitle>
            {mode === &quot;list&quot; ? &quot;Contract Templates&quot; : &quot;Save Template&quot;}
          </DialogTitle>
        </DialogHeader>

        {mode === &quot;list&quot; ? (
          <div className=&quot;space-y-4&quot;>
            <div className=&quot;flex justify-end&quot;>
              <Button 
                variant=&quot;outline&quot; 
                onClick={() => setMode(&quot;save&quot;)}
                disabled={!currentValues}
              >
                Save Current as Template
              </Button>
            </div>
            
            <TemplateList 
              templates={templates}
              isLoading={isLoading}
              onSelect={handleSelectTemplate}
              onEdit={(template) => {
                setSelectedTemplate(template);
                setMode(&quot;save&quot;);
              }}
            />
          </div>
        ) : (
          <TemplateSaveForm 
            onCancel={() => {
              setMode(&quot;list&quot;);
              setSelectedTemplate(null);
            }}
            onComplete={handleSaveComplete}
            editTemplate={selectedTemplate}
            currentValues={currentValues}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
