
import { useState } from "react",;
import { useContractTemplates } from "@/hooks/useContractTemplates",;
import { ContractTemplate } from "@/types/contracts",;
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",;
import { Button } from "@/components/ui/button",;
import { TemplateList } from "./TemplateList",;
import { TemplateSaveForm } from "./TemplateSaveForm",;
import { ContractFormValues } from "@/components/contracts/components/ContractForm",;
import { useToast } from "@/hooks/use-toast",;
;
interface TemplateManagerProps {;
  isOpen:boolean,;
  onClose:() => void,;
  onSelectTemplate:(template:ContractFormValues) => void,;
  currentValues?:ContractFormValues;
}
;
export function TemplateManager({;
  isOpen,;
  onClose,;
  onSelectTemplate,;
  currentValues;
} TemplateManagerProps) {;
  const [mode, setMode] = useState<"list" | "save">("list"),;
  const [selectedTemplate, setSelectedTemplate] = useState<ContractTemplate | null>(null),;
  const { templates, isLoading } = useContractTemplates(),;
  const { toast } = useToast(),;
;
  const handleSelectTemplate = (template:ContractTemplate) => {;
    if (template && template.template_data) {;
      onSelectTemplate(template.template_data),;
      onClose(),;
      toast({;
        title:"Template loaded",;
        description:`Template "${template.title}" has been loaded.`}),;
    }
  },;
;
  const handleSaveComplete = () => {;
    setMode("list"),;
    setSelectedTemplate(null),;
  },;
;
  return (;
    <Dialog open={isOpen} onOpenChange={onClose}>;
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">;
        <DialogHeader>;
          <DialogTitle>;

              >;
                Save Current as Template;
              </Button>;
            </div>;

            editTemplate={selectedTemplate}
            currentValues={currentValues}
          />;
        )}
      </DialogContent>;
    </Dialog>;

}