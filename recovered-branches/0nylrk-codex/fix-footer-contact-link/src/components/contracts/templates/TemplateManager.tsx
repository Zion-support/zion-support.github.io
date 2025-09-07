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
<<<<<<< HEAD

  isOpen: boolean
  onClose: () => void
  onSelectTemplate: (template: ContractFormValues) => void

  currentValues?: ContractFormValues
}

  currentValues
}: TemplateManagerProps) {
  const [mode, setMode] = useState<"list" | "save">("list"),
  const [selectedTemplate, setSelectedTemplate] = useState<ContractTemplate | null>(null),

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

=======
  isOpen: boolean,
  onClose: () => void,
  onSelectTemplate: (template: ContractFormValues) => void,
  currentValues?: ContractFormValues
}

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
interface TemplateManagerProps {

  isOpen: boolean
  onClose: () => void
  onSelectTemplate: (template: ContractFormValues) => void

  currentValues?: ContractFormValues
}

<<<<<<< HEAD
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { useState } from "react",
import { useContractTemplates } from "@/hooks/useContractTemplates",
import { ContractTemplate } from "@/types/contracts",
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",
import { Button } from "@/components/ui/button",
import { TemplateList } from "./TemplateList",
<<<<<<< HEAD

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

  },

  const handleSaveComplete = () => {
    setMode("list"),
    setSelectedTemplate(null)

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>"
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>"
            {mode === "list" ? "Contract Templates" : "Save Template"}

          </DialogTitle>
        </DialogHeader>"
        {mode === "list" ? ("
          <div className="space-y-4">"
            <div className="flex justify-end">

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
=======
import { TemplateSaveForm } from "./TemplateSaveForm",
import { ContractFormValues } from "@/components/contracts/components/ContractForm";
import { useToast } from "@/hooks/use-toast";
import { ContractFormValues } from "@/components/contracts/components/ContractForm",
import { useToast } from "@/hooks/use-toast",
interface TemplateManagerProps {

>>>>>>> merged-prs-20250907-203621
  isOpen: boolean
  onClose: () => void
  onSelectTemplate: (template: ContractFormValues) => void

  currentValues?: ContractFormValues
}
<<<<<<< HEAD
export function TemplateManager({
=======

export function TemplateManager({;
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
  const { templates, isLoading } = useContractTemplates($2);
  const { toast } = useToast($2);
  const handleSelectTemplate = (template: ContractTemplate) => {
    if (template && template.template_data) {
      onSelectTemplate($2);
      onClose($2);
      toast({
        title: "Template loaded",
        description: `Template "${template.title}" has been loaded.`})
    }
  },

  const handleSaveComplete = () => {
    setMode($2);
    setSelectedTemplate(null)
  },

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
=======
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

<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const { templates, isLoading } = useContractTemplates(),
  const { toast } = useToast(),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  const handleSelectTemplate = (template: ContractTemplate) => {
    if (template && template.template_data) {
      onSelectTemplate(template.template_data),
      onClose(),
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      toast({
        title: "Template loaded"

        description: `Template "${template.title}" has been loaded.`})
    }

        description: `Template "${template && template.title}" has been loaded.`});
    }
  };
<<<<<<< HEAD

    setMode("list");
    setSelectedTemplate(null);
  };

=======
  const handleSaveComplete = () => {;
    setMode("list");
    setSelectedTemplate(null);
  };
  return (

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
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  },

  const handleSaveComplete = () => {
    setMode("list"),
    setSelectedTemplate(null)
  }
  },

<<<<<<< HEAD
  const handleSaveComplete = () => {
    setMode("list"),
    setSelectedTemplate(null)
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
                onClick={() => setMode("save")}
                disabled={!currentValues}
              >
                Save Current as Template
              </Button>
            </div>
            <TemplateList
=======
=======

<<<<<<< HEAD
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

              <Button 
                variant="outline" 
                onClick={() => setMode("save")}

                onClick={() => setMode("save")}

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


<<<<<<< HEAD
                onClick={() => setMode("save")}
                onClick={() => setMode("save")}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                disabled={!currentValues}
              >
                Save Current as Template;
              </Button>
            </div>
<<<<<<< HEAD

=======
<<<<<<< HEAD
            <TemplateList
            <TemplateList 
>>>>>>> merged-prs-20250907-203621
              templates={templates}
              isLoading={isLoading}
              onSelect={handleSelectTemplate}
              onEdit={(template) => {
<<<<<<< HEAD
                setSelectedTemplate($2);
=======
                setSelectedTemplate(template),
>>>>>>> merged-prs-20250907-203621
                setMode("save")
              }}
            />
          </div>
        ) : (
          <TemplateSaveForm
            onCancel={() => {
<<<<<<< HEAD
              setMode($2);
              setSelectedTemplate(null)
=======
            {mode === "list" ? "Contract Templates" :"Save Template"}
=======

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          </DialogTitle>;
        </DialogHeader>;
;
        {mode === "list" ? (;
          <div className="space-y-4">;
            <div className="flex justify-end">;
              <Button ;
                variant="outline" ;
                onClick={() => setMode("save")}
                disabled={!currentValues}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              >;
                Save Current as Template;
              </Button>;
            </div>;
<<<<<<< HEAD

              templates={templates}
              isLoading={isLoading}
              onSelect={handleSelectTemplate}
=======
              setMode("list");

<<<<<<< HEAD
              templates={templates}
              isLoading={isLoading}
              onSelect={handleSelectTemplate}
=======
<<<<<<< HEAD
              setSelectedTemplate(null)
              setMode("list"),
              setSelectedTemplate(null)
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              onEdit={(template) => {;
                setSelectedTemplate(template),;"
                setMode("save"),;
              }}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            />;
          </div>;
        ) :(;
          <TemplateSaveForm ;
            onCancel={() => {;"
              setMode("list"),;
              setSelectedTemplate(null),;
            }}            onComplete={handleSaveComplete}

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

              setMode("list"),
              setSelectedTemplate(null)

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            }}
            onComplete={handleSaveComplete}
            ;
            <TemplateList ;
              templates={templates}
              isLoading={isLoading}
              onSelect={handleSelectTemplate}
              onEdit={(template) => {;
                setSelectedTemplate(template),;
                setMode("save"),;
              }}
            />;
          </div>;
        ) :(;
          <TemplateSaveForm ;
            onCancel={() => {;
              setMode("list"),;
              setSelectedTemplate(null),;
            }}            onComplete={handleSaveComplete}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            editTemplate={selectedTemplate}
            currentValues={currentValues}
          />;
        )}
<<<<<<< HEAD

=======
<<<<<<< HEAD
      </DialogContent>;
    </Dialog>;
=======

<<<<<<< HEAD
=======
      </DialogContent>;
    </Dialog>;
  );
}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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
<<<<<<< HEAD
=======
  onSelectTemplate (template.template data);
onClose ();
toast ({}
}
;

=======
  ),; interface TemplateManagerProps {
  isOpen: boolean;
onClose: () => void;
onSelectTemplate: (template: ContractFormValues) => void;
currentValues?: ContractFormValues 
}export function TemplateManager ({
  isOpen;
onClose;
onSelectTemplate;
currentValues 
}: TemplateManagerProps) {
  const handleSelectTemplate = (template: ContractTemplate) => {
  if (template && template.template data) {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  onSelectTemplate (template.template data);
onClose ();
toast ({}
}
;

<<<<<<< HEAD
=======
<<<<<<< HEAD
};
return (<Dialog open= {
  isOpen 
}onOpenChange= {
  onClose 
}> <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto" > <DialogHeader> <DialogTitle> {
  mode === "list" ? "Contract Templates" : "Save Template" 
}</DialogTitle> </DialogHeader> {
  mode === "list" ? (<div className="space-y-4" > <div className="flex justify-end" > <Button variant="outline" onClick= {
  () => setMode ("save") 
}disabled= {
  !currentValues 
}
}
}/> </div>) : (<TemplateSaveForm onCancel= {
  () => {
  
}
}onComplete= {
  handleSaveComplete 
}editTemplate= {
  selectedTemplate 
}currentValues= {
  currentValues 
}
}</DialogContent> </Dialog>) 
}
            />;
          </div>;
        ) : (;
          <TemplateSaveForm;
            onCancel={() => {;
              setMode("list");
              setSelectedTemplate(null);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
      </DialogContent>;
    </Dialog>;
  );
}
<<<<<<< HEAD
;
=======
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
