
import { useState } from "react";
import { useContractTemplates } from "@/hooks/useContractTemplates";
import { ContractTemplate } from "@/types/contracts";
<<<<<<< HEAD
import { DialogContentDialogHeaderDialogTitle } from "@/components/ui/dialog";
=======
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
>>>>>>> origin/auto/autonomy-17186719616
import { Button } from "@/components/ui/button";
import { TemplateList } from "./TemplateList";
import { TemplateSaveForm } from "./TemplateSaveForm";
import { ContractFormValues } from "@/components/contracts/components/ContractForm";
import { useToast } from "@/hooks/use-toast";

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
<<<<<<< HEAD
  const [modesetMode] = useState<"list" | "save">("list");
  const [selectedTemplatesetSelectedTemplate] = useState<ContractTemplate | null>(null);
  const { templatesisLoading } = useContractTemplates();
=======
  const [mode, setMode] = useState<"list" | "save">("list");
  const [selectedTemplate, setSelectedTemplate] = useState<ContractTemplate | null>(null);
  const { templates, isLoading } = useContractTemplates();
>>>>>>> origin/auto/autonomy-17186719616
  const { toast } = useToast();

  const handleSelectTemplate = (template: ContractTemplate) => {
    if (template && template.template_data) {
      onSelectTemplate(template.template_data);
      onClose();
      toast({
        title: "Template loaded",
<<<<<<< HEAD
        description: `Template "${template.title}" has been loaded.`});
=======
        description: `Template "${template.title}" has been loaded.`,
      });
>>>>>>> origin/auto/autonomy-17186719616
    }
  };

  const handleSaveComplete = () => {
    setMode("list");
    setSelectedTemplate(null);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {mode === "list" ? "Contract Templates" : "Save Template"}
          </DialogTitle>
        </DialogHeader>

        {mode === "list" ? (
          <div className="space-y-4">
            <div className="flex justify-end">
              <Button 
                variant="outline" 
                onClick={() => setMode("save")}
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
                setMode("save");
              }}
            />
          </div>
        ) : (
          <TemplateSaveForm 
            onCancel={() => {
              setMode("list");
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
