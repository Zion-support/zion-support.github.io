
<<<<<<< HEAD
import { useState } from "react",
import { useContractTemplates } from "@/hooks/useContractTemplates",
import { ContractTemplate } from "@/types/contracts",
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",
import { Button } from "@/components/ui/button",
import { TemplateList } from "./TemplateList",
import { TemplateSaveForm } from "./TemplateSaveForm",
import { ContractFormValues } from "@/components/contracts/components/ContractForm";
import { useToast } from "@/hooks/use-toast";
interface TemplateManagerProps {

  isOpen: boolean
  onClose: () => void
  onSelectTemplate: (template: ContractFormValues) => void

  currentValues?: ContractFormValues
}
export function TemplateManager({
  isOpen;
  onClose;
  onSelectTemplate;
  currentValues
}: TemplateManagerProps) {
  const [mode, setMode] = useState<"list" | "save">("list"),
  const [selectedTemplate, setSelectedTemplate] = useState<ContractTemplate | null>(null),
=======
import {useState} from "react";
import {useContractTemplates} from "@/hooks/useContractTemplates";
import {ContractTemplate} from "@/types/contracts";
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {TemplateList} from "./TemplateList";
import {TemplateSaveForm} from "./TemplateSaveForm";
import {ContractFormValues} from "@/components/contracts/components/ContractForm";
import {useToast} from "@/hooks/use-toast";
interface TemplateManagerProps {;
  isOpen: boolean,;
  onClose: () => void,;
  onSelectTemplate: (template: ContractFormValues) => void,;
  currentValues?: ContractFormValues;
}

export function TemplateManager(): any ({;
  isOpen;
  onClose;
  onSelectTemplate;
  currentValues;
}: TemplateManagerProps) {;
  const [mode, setMode] = useState<"list" | "save">("list");
  const [selectedTemplate, setSelectedTemplate] = useState<ContractTemplate | null>(null);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const { templates, isLoading } = useContractTemplates();
  const { toast } = useToast();

  const handleSelectTemplate = (template: ContractTemplate) => {;
    if (template && template.template_data) {;
      onSelectTemplate(template.template_data);
<<<<<<< HEAD
      onClose()
      toast({
        title: "Template loaded"
        description: `Template "${template.title}" has been loaded.`})
    }
  }
  const handleSaveComplete = () => {
    setMode("list");
    setSelectedTemplate(null)
  }
=======
      onClose(),;
      toast({;
        title: "Template loaded",;
        description: `Template "${template && template.title}" has been loaded.`});
    }
  };

  const handleSaveComplete = () => {;
    setMode("list");
    setSelectedTemplate(null);
  };

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>;
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">;
        <DialogHeader>;
          <DialogTitle>;
            {mode === "list" ? "Contract Templates" : "Save Template"}
<<<<<<< HEAD
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
=======
          </DialogTitle>;
        </DialogHeader>;

        {mode === "list" ? (;
          <div className="space-y-4">;
            <div className="flex justify-end">;
              <Button
                variant="outline" 
                onClick={() => setMode("save")}
                disabled={!currentValues}
              >;
                Save Current as Template;
              </Button>;
            </div>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            <TemplateList
              templates={templates}
              isLoading={isLoading}
              onSelect={handleSelectTemplate}
              onEdit={(template) => {;
                setSelectedTemplate(template);
                setMode("save");
              }}
<<<<<<< HEAD
            />
          </div>
        ) : (
          <TemplateSaveForm
            onCancel={() => {
              setMode("list");

              setSelectedTemplate(null)
=======
            />;
          </div>;
        ) : (;
          <TemplateSaveForm
            onCancel={() => {;
              setMode("list");
              setSelectedTemplate(null);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            }}
            onComplete={handleSaveComplete}
            editTemplate={selectedTemplate}
            currentValues={currentValues}
          />;
        )}
<<<<<<< HEAD
      </DialogContent>
    </Dialog>
  )
}
=======
      </DialogContent>;
    </Dialog>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
