interface TemplateManagerProps {

  isOpen: boolean
  onClose: () => void
  onSelectTemplate: (template: ContractFormValues) => void

  currentValues?: ContractFormValues
}

  currentValues
}: TemplateManagerProps) {
  const [mode, setMode] = useState<"list" | "save">("list"),
  const [selectedTemplate, setSelectedTemplate] = useState<ContractTemplate | null>(null),

<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {useState} from "react";
import {useContractTemplates} from "@/hooks/useContractTemplates";
import {ContractTemplate} from "@/types/contracts";
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {TemplateList} from "./TemplateList";
import {TemplateSaveForm} from "./TemplateSaveForm";
import {ContractFormValues} from "@/components/contracts/components/ContractForm";
import {useToast} from "@/hooks/use-toast";
<<<<<<< HEAD
  const { templates, isLoading } = useContractTemplates();
  const { toast } = useToast();
  const handleSelectTemplate = (template: ContractTemplate) => {;
    if (template && template.template_data) {;
      onSelectTemplate(template.template_data);
import { useState } from "react",
import { useContractTemplates } from "@/hooks/useContractTemplates",
import { ContractTemplate } from "@/types/contracts",
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",
import { Button } from "@/components/ui/button",
import { TemplateList } from "./TemplateList",
import { TemplateSaveForm } from "./TemplateSaveForm",
import { ContractFormValues } from "@/components/contracts/components/ContractForm";
import { useToast } from "@/hooks/use-toast";
import { ContractFormValues } from "@/components/contracts/components/ContractForm",
import { useToast } from "@/hooks/use-toast",
interface TemplateManagerProps {

  isOpen: boolean
  onClose: () => void
  onSelectTemplate: (template: ContractFormValues) => void

  currentValues?: ContractFormValues
}

export function TemplateManager({;
  isOpen;
  onClose;
  onSelectTemplate;
export function TemplateManager({
  isOpen,
  onClose,
  onSelectTemplate,
  currentValues
}: TemplateManagerProps) {
  const [mode, setMode] = useState<"list" | "save">("list"),
  const [selectedTemplate, setSelectedTemplate] = useState<ContractTemplate | null>(null),
  const { templates, isLoading } = useContractTemplates();
  const { toast } = useToast();

  const handleSelectTemplate = (template: ContractTemplate) => {
    if (template && template.template_data) {
      onSelectTemplate(template.template_data);
      onClose()
=======
interface TemplateManagerProps {;
  isOpen: boolean,;
  onClose: () => void,;
  onSelectTemplate: (template: ContractFormValues) => void,;

  currentValues?: ContractFormValues;
}

  currentValues;
}: TemplateManagerProps) {}
  const [mode, setMode] = useState<"list" | "save">("list"),
  const [selectedTemplate, setSelectedTemplate] = useState<ContractTemplate | null>(null),

import { useState } from "react",
import { useContractTemplates } from "@/hooks/useContractTemplates",
import { ContractTemplate } from "@/types/contracts",
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",
import { Button } from "@/components/ui/button",
import { TemplateList } from "./TemplateList",

interface TemplateManagerProps {

  isOpen: boolean
  onClose: () => void
  onSelectTemplate: (template: ContractFormValues) => void

  currentValues?: ContractFormValues
}

import { useState } from "react",
import { useContractTemplates } from "@/hooks/useContractTemplates",
import { ContractTemplate } from "@/types/contracts",
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",
import { Button } from "@/components/ui/button",
import { TemplateList } from "./TemplateList",

import { TemplateSaveForm } from "./TemplateSaveForm",
interface TemplateManagerProps {};
  isOpen: boolean;
  onClose: () => void;
  onSelectTemplate: (template: ContractFormValues) => void;
  currentValues?: ContractFormValues;

}
interface TemplateManagerProps {;
  isOpen: boolean,;
  onClose: () => void,;
  onSelectTemplate: (template: ContractFormValues) => void,;
  currentValues?: ContractFormValues;
}

  const handleSelectTemplate = (template: ContractTemplate) => {
    if (template && template.template_data) {
      onSelectTemplate(template.template_data),
      onClose(),
<<<<<<< HEAD
=======

      toast({
        title: "Template loaded"

        description: `Template "${template.title}" has been loaded.`})
    }

        description: `Template "${template && template.title}" has been loaded.`});
    }
  };

    setMode("list");
    setSelectedTemplate(null);
  };

  },

  const handleSaveComplete = () => {
    setMode("list"),
    setSelectedTemplate(null)
  }
  },

  const handleSaveComplete = () => {
    setMode("list"),
    setSelectedTemplate(null)

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>"
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>"
            {mode === "list" ? "Contract Templates" : "Save Template"}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          </DialogTitle>
        </DialogHeader>"
        {mode === "list" ? ("
          <div className="space-y-4">"
            <div className="flex justify-end">
<<<<<<< HEAD
              <Button
                variant="outline"
              <Button 
                variant="outline" 
                onClick={() => setMode("save")}
import { useState } from "react",;
import { useContractTemplates } from "@/hooks/useContractTemplates",;
import { ContractTemplate } from "@/types/contracts",;
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",;
import { Button } from "@/components/ui/button",;
import { TemplateList } from "./TemplateList",;
import { TemplateSaveForm } from "./TemplateSaveForm",;
import { ContractFormValues } from "@/components/contracts/components/ContractForm",;
import { useToast } from "@/hooks/use-toast",;
interface TemplateManagerProps {;
  isOpen: boolean,;
  onClose: () => void,;
  onSelectTemplate: (template: ContractFormValues) => void,;
  currentValues?: ContractFormValues;
}
;
export function TemplateManager({;
  isOpen,;
  onClose,;
  onSelectTemplate,;
  currentValues;
}: TemplateManagerProps) {;
  const [mode, setMode] = useState<"list" | "save">("list"),;
  const [selectedTemplate, setSelectedTemplate] = useState<ContractTemplate | null>(null),;
  const { templates, isLoading } = useContractTemplates(),;
  const { toast } = useToast(),;
  const handleSelectTemplate = (template: ContractTemplate) => {;
    if (template && template.template_data) {;
      onSelectTemplate(template.template_data),;
      onClose(),;
      toast({;
        title: "Template loaded",;
        description: `Template "${template.title}" has been loaded.`});
    }
  },;
  const handleSaveComplete = () => {;
    setMode("list"),;
    setSelectedTemplate(null);
  },;
  return (;
    <Dialog open={isOpen} onOpenChange={onClose}>;
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">;
        <DialogHeader>;
          <DialogTitle>;
            {mode === "list" ? "Contract Templates" : "Save Template"}
          </DialogTitle>;
        </DialogHeader>;
        {mode === "list" ? (;
          <div className="space-y-4">;
            <div className="flex justify-end">;
              <Button;
                variant="outline";
=======

import { useState } from "react",;
import { useContractTemplates } from "@/hooks/useContractTemplates",;
import { ContractTemplate } from "@/types/contracts",;
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",;
import { Button } from "@/components/ui/button",;
import { TemplateList } from "./TemplateList",;
import { TemplateSaveForm } from "./TemplateSaveForm",;
import { ContractFormValues } from "@/components/contracts/components/ContractForm",;
import { useToast } from "@/hooks/use-toast",;
interface TemplateManagerProps {;
  isOpen: boolean,;
  onClose: () => void,;
  onSelectTemplate: (template: ContractFormValues) => void,;
  currentValues?: ContractFormValues;
}
;
export function TemplateManager({;
  isOpen,;
  onClose,;
  onSelectTemplate,;
  currentValues;
}: TemplateManagerProps) {;
  const [mode, setMode] = useState<"list" | "save">("list"),;
  const [selectedTemplate, setSelectedTemplate] = useState<ContractTemplate | null>(null),;
  const { templates, isLoading } = useContractTemplates(),;
  const { toast } = useToast(),;

  const handleSelectTemplate = (template: ContractTemplate) => {;
    if (template && template.template_data) {;
      onSelectTemplate(template.template_data);
    <Dialog open={isOpen} onOpenChange={onClose}>;"
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">;
        <DialogHeader>;
          <DialogTitle>;"
            {mode === "list" ? "Contract Templates" : "Save Template"}

          </DialogTitle>;
        </DialogHeader>;
        {mode === "list" ? (;
          <div className="space-y-4">;
            <div className="flex justify-end">;
              <Button;
                variant="outline";

              <Button 
                variant="outline" 
                onClick={() => setMode("save")}

                onClick={() => setMode("save")}

                disabled={!currentValues}
              >
                Save Current as Template;
              </Button>
            </div>
<<<<<<< HEAD
            <TemplateList
            <TemplateList 
              templates={templates}
              isLoading={isLoading}
              onSelect={handleSelectTemplate}
              onEdit={(template) => {
                setSelectedTemplate(template),
                setMode("save")
              }}
            />
          </div>
        ) : (
          <TemplateSaveForm
            onCancel={() => {
            {mode === "list" ? "Contract Templates" :"Save Template"}
=======

            <TemplateList
            <TemplateList 
              templates={templates}
              isLoading={isLoading}
              onSelect={handleSelectTemplate}
              onEdit={(template) => {
                setSelectedTemplate(template),
                setMode("save")
              }}
            />
          </div>
        ) : (
          <TemplateSaveForm
            onCancel={() => {

              >;
                Save Current as Template;
              </Button>;
            </div>;
              setMode("list");

              templates={templates}
              isLoading={isLoading}
              onSelect={handleSelectTemplate}

              setMode("list");

              setSelectedTemplate(null)
              setMode("list"),
              setSelectedTemplate(null)

              onEdit={(template) => {;
                setSelectedTemplate(template);"
                setMode("save");
              }}

"
              setMode("list"),
              setSelectedTemplate(null)

            }}
            onComplete={handleSaveComplete}
            ;
            <TemplateList ;
              templates={templates}
              isLoading={isLoading}
              onSelect={handleSelectTemplate}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              onEdit={(template) => {;
                setSelectedTemplate(template),;"
                setMode("save"),;
              }}
            />;
          </div>;
        ) :(;
          <TemplateSaveForm ;
            onCancel={() => {;"
              setMode("list"),;
              setSelectedTemplate(null),;
            }}            onComplete={handleSaveComplete}

            editTemplate={selectedTemplate}
            currentValues={currentValues}
          />;
        )}
<<<<<<< HEAD
      </DialogContent>;
    </Dialog>;
=======

            <TemplateList;

              templates={templates}
              is_loading={is_loading}
              on_select={handleSelectTemplate}
              on_edit={(template) => {}
                setSelectedTemplate (template);"
                set_mode ("save");
              }}
            />;
          </div>) : (
          <TemplateSaveForm;
            on_cancel={() => {"
              set_mode ("list");
              setSelectedTemplate (null);
            }}
            on_complete={handleSaveComplete}
            edit_template={selected_template}
            current_values={current_values}
          />)}
      </DialogContent>;
    </Dialog>);

  ),; interface TemplateManagerProps {

  isOpen: boolean;
onClose: () => void;
onSelectTemplate: (template: ContractFormValues) => void;
currentValues?: ContractFormValues;
}export function TemplateManager ({};
  isOpen;
onClose;
onSelectTemplate;
currentValues;
}: TemplateManagerProps) {}
  const handleSelectTemplate = (template: ContractTemplate) => {}
  if (template && template.template data) {}
  onSelectTemplate (template.template data);
onClose ();
toast ({}
}
;

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
      </DialogContent>;
    </Dialog>;
  );
}
;