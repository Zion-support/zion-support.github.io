
<<<<<<< HEAD
import { useState } from "react",
import { useContractTemplates } from "@/hooks/useContractTemplates",
import { ContractTemplate } from "@/types/contracts",
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",
import { Button } from "@/components/ui/button",
import { TemplateList } from "./TemplateList",
import { TemplateSaveForm } from "./TemplateSaveForm",
import { ContractFormValues } from "@/components/contracts/components/ContractForm",
import { useToast } from "@/hooks/use-toast",
=======
import { useState } from &quot;react&quot;;
import { useContractTemplates } from &quot;@/hooks/useContractTemplates&quot;;
import { ContractTemplate } from &quot;@/types/contracts&quot;;
import { Dialog, DialogContent, DialogHeader, DialogTitle } from &quot;@/components/ui/dialog&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { TemplateList } from &quot;./TemplateList&quot;;
import { TemplateSaveForm } from &quot;./TemplateSaveForm&quot;;
import { ContractFormValues } from &quot;@/components/contracts/components/ContractForm&quot;;
import { useToast } from &quot;@/hooks/use-toast&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface TemplateManagerProps {
  isOpen: boolean,
  onClose: () => void,
  onSelectTemplate: (template: ContractFormValues) => void,
  currentValues?: ContractFormValues
}

export function TemplateManager({
  isOpen,
  onClose,
  onSelectTemplate,
  currentValues
}: TemplateManagerProps) {
<<<<<<< HEAD
  const [mode, setMode] = useState<"list" | "save">("list"),
  const [selectedTemplate, setSelectedTemplate] = useState<ContractTemplate | null>(null),
  const { templates, isLoading } = useContractTemplates(),
  const { toast } = useToast(),
=======
  const [mode, setMode] = useState<&quot;list&quot; | &quot;save&quot;>(&quot;list&quot;);
  const [selectedTemplate, setSelectedTemplate] = useState<ContractTemplate | null>(null);
  const { templates, isLoading } = useContractTemplates();
  const { toast } = useToast();
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  const handleSelectTemplate = (template: ContractTemplate) => {
    if (template && template.template_data) {
      onSelectTemplate(template.template_data),
      onClose(),
      toast({
<<<<<<< HEAD
        title: "Template loaded",
        description: `Template "${template.title}" has been loaded.`})
=======
        title: &quot;Template loaded&quot;,
        description: `Template &quot;${template.title}&quot; has been loaded.`});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },

  const handleSaveComplete = () => {
<<<<<<< HEAD
    setMode("list"),
    setSelectedTemplate(null)
  },
=======
    setMode(&quot;list&quot;);
    setSelectedTemplate(null);
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

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
<<<<<<< HEAD
                setSelectedTemplate(template),
                setMode("save")
=======
                setSelectedTemplate(template);
                setMode(&quot;save&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
              }}
            />
          </div>
        ) : (
          <TemplateSaveForm 
            onCancel={() => {
<<<<<<< HEAD
              setMode("list"),
              setSelectedTemplate(null)
=======
              setMode(&quot;list&quot;);
              setSelectedTemplate(null);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            }}
            onComplete={handleSaveComplete}
            editTemplate={selectedTemplate}
            currentValues={currentValues}
          />
        )}
      </DialogContent>
    </Dialog>
  )
}
