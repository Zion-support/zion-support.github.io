<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/templates/TemplateManager.tsx


<<<<<<< HEAD
import { useState } from "react",
import { useContractTemplates } from "@/hooks/useContractTemplates",
import { ContractTemplate } from "@/types/contracts",
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",
import { Button } from "@/components/ui/button",
import { TemplateList } from "./TemplateList",
import { TemplateSaveForm } from "./TemplateSaveForm",

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
interface TemplateManagerProps {

  isOpen: boolean
  onClose: () => void
  onSelectTemplate: (template: ContractFormValues) => void

  currentValues?: ContractFormValues
<<<<<<< HEAD
}

export function TemplateManager({
  isOpen,
  onClose,
  onSelectTemplate,

  currentValues
}: TemplateManagerProps) {
  const [mode, setMode] = useState<"list" | "save">("list"),
  const [selectedTemplate, setSelectedTemplate] = useState<ContractTemplate | null>(null),

=======
}





  currentValues
}: TemplateManagerProps) {
  const [mode, setMode] = useState<"list" | "save">("list"),
  const [selectedTemplate, setSelectedTemplate] = useState<ContractTemplate | null>(null),

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/templates/TemplateManager.tsx
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/templates/TemplateManager.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/templates/TemplateManager.tsx
  const { templates, isLoading } = useContractTemplates();
  const { toast } = useToast();
  const handleSelectTemplate = (template: ContractTemplate) => {;
    if (template && template.template_data) {;
      onSelectTemplate(template.template_data);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/templates/TemplateManager.tsx


=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { useState } from "react",
import { useContractTemplates } from "@/hooks/useContractTemplates",
import { ContractTemplate } from "@/types/contracts",
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",
import { Button } from "@/components/ui/button",
import { TemplateList } from "./TemplateList",
import { TemplateSaveForm } from "./TemplateSaveForm",
<<<<<<< HEAD
import { ContractFormValues } from "@/components/contracts/components/ContractForm";
import { useToast } from "@/hooks/use-toast";
=======
import { ContractFormValues } from "@/components/contracts/components/ContractForm",
import { useToast } from "@/hooks/use-toast",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface TemplateManagerProps {

  isOpen: boolean
  onClose: () => void
  onSelectTemplate: (template: ContractFormValues) => void

  currentValues?: ContractFormValues
}
<<<<<<< HEAD
=======

<<<<<<< HEAD
export function TemplateManager({;
  isOpen;
  onClose;
  onSelectTemplate;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export function TemplateManager({
  isOpen,
  onClose,
  onSelectTemplate,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  currentValues
}: TemplateManagerProps) {
  const [mode, setMode] = useState<"list" | "save">("list"),
  const [selectedTemplate, setSelectedTemplate] = useState<ContractTemplate | null>(null),
<<<<<<< HEAD
  const { templates, isLoading } = useContractTemplates();
  const { toast } = useToast();

  const handleSelectTemplate = (template: ContractTemplate) => {
    if (template && template.template_data) {
      onSelectTemplate(template.template_data);
      onClose()
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const { templates, isLoading } = useContractTemplates(),
  const { toast } = useToast(),

  const handleSelectTemplate = (template: ContractTemplate) => {
    if (template && template.template_data) {
      onSelectTemplate(template.template_data),
      onClose(),
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      toast({
        title: "Template loaded"
        description: `Template "${template.title}" has been loaded.`})
    }
<<<<<<< HEAD
<<<<<<< HEAD

  const handleSaveComplete = () => {
    setMode("list"),
    setSelectedTemplate(null)

=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/templates/TemplateManager.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/templates/TemplateManager.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/templates/TemplateManager.tsx
  return (
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <Dialog open={isOpen} onOpenChange={onClose}>;
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">;
        <DialogHeader>;
          <DialogTitle>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/templates/TemplateManager.tsx
            {mode === "list" ? "Contract Templates" : "Save Template"}


  },


  const handleSaveComplete = () => {
    setMode("list"),
    setSelectedTemplate(null)

  },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  }
=======
  },

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const handleSaveComplete = () => {
    setMode("list"),
    setSelectedTemplate(null)
<<<<<<< HEAD
  }
=======
  },

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {mode === "list" ? "Contract Templates" : "Save Template"}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          </DialogTitle>
        </DialogHeader>
        {mode === "list" ? (
          <div className="space-y-4">
            <div className="flex justify-end">
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
              <Button
                variant="outline"
=======
              <Button 
                variant="outline" 
                onClick={() => setMode("save")}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

=======

              <Button 
                variant="outline" 
                onClick={() => setMode("save")}

                onClick={() => setMode("save")}



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
                onClick={() => setMode("save")}
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                disabled={!currentValues}
              >
                Save Current as Template
              </Button>
            </div>
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
            <TemplateList
=======
            <TemplateList 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
========
<<<<<<< HEAD
            {mode === "list" ? "Contract Templates" : "Save Template"}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/templates/TemplateManager.tsx
          </DialogTitle>;
        </DialogHeader>;
        {mode === "list" ? (;
          <div className="space-y-4">;
            <div className="flex justify-end">;
              <Button
                variant="outline" 
                onClick={() => setMode("save")}
                disabled={!currentValues}
import { useState } from './react';
import { useContractTemplates } from '@/hooks / useContractTemplates';
import { ContractTemplate } from '@/types / contracts';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components / ui / dialog';
import { Button } from '@/components / ui / button';
import { TemplateList } from './TemplateList';
import { TemplateSaveForm } from './TemplateSaveForm';
import { ContractFormValues } from '@/components / contracts / components / ContractForm';
import { use_toast } from '@/hooks / use - toast';
interface TemplateManagerProps {
  is_open: boolean,
  on_close: () => void,
  onSelectTemplate: (template: ContractFormValues) => void,
  current_values?: ContractFormValues;
}
export /**
 * TemplateManager - Function description
 */
function TemplateManager() {
  const [mode, set_mode] = useState<"list" | "save">("list");
  const [selected_template, setSelectedTemplate] = useState < ContractTemplate | null>(null);
  const { templates, is_loading } = useContractTemplates ();
  const { toast } = use_toast ();
;
  const handleSelectTemplate = (template: ContractTemplate) =>: any {
    // Check condition
if ( {) {
  $2
}
      onSelectTemplate (template.template_data);
      on_close (),
      toast ({
        title: "Template loaded",
        description: `Template "${template.title}" has been loaded.`});
    }
  }
;
  const handleSaveComplete = () =>: any {
    set_mode ("list");
    setSelectedTemplate (null);
  }
;
  return (
    <Dialog open={is_open} onOpenChange={on_close}>;
      <DialogContent className="sm:max - w-lg max - h-[90vh] overflow - y-auto">;
        <DialogHeader>;
          <DialogTitle>;
            {mode === "list" ? "Contract Templates" : "Save Template"}
          </DialogTitle>;
        </DialogHeader>;
        {mode === "list" ? (
          <div className="space - y-4">;
            <div className="flex justify - end">;
              <Button;
                variant="outline";
                on_click={() => set_mode ("save")}
                disabled={!current_values}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/templates/TemplateManager.tsx

========
=======
            {mode === "list" ? "Contract Templates" :"Save Template"}
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/templates/TemplateManager.tsx
              >;
                Save Current as Template;
              </Button>;
            </div>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/templates/TemplateManager.tsx


            <TemplateList 


              templates={templates}
              isLoading={isLoading}
              onSelect={handleSelectTemplate}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
              setMode("list");

              setSelectedTemplate(null)
=======
              setMode("list"),
              setSelectedTemplate(null)
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              onEdit={(template) => {;
                setSelectedTemplate(template);
                setMode("save");
              }}
<<<<<<< HEAD

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/templates/TemplateManager.tsx
            />;
          </div>;
        ) : (;
          <TemplateSaveForm
            onCancel={() => {;
              setMode("list");
              setSelectedTemplate(null);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/templates/TemplateManager.tsx

<<<<<<< HEAD
=======
=======

              setMode("list"),
              setSelectedTemplate(null)

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/templates/TemplateManager.tsx
            }}
            onComplete={handleSaveComplete}
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            editTemplate={selectedTemplate}
            currentValues={currentValues}
          />;
        )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/templates/TemplateManager.tsx

<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/templates/TemplateManager.tsx
      </DialogContent>;
    </Dialog>;
<<<<<<< HEAD
  );
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/templates/TemplateManager.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/templates/TemplateManager.tsx
            <TemplateList;
              templates={templates}
              is_loading={is_loading}
              on_select={handleSelectTemplate}
              on_edit={(template) => {
                setSelectedTemplate (template);
                set_mode ("save");
              }}
            />;
          </div>) : (
          <TemplateSaveForm;
            on_cancel={() => {
              set_mode ("list");
              setSelectedTemplate (null);
            }}
            on_complete={handleSaveComplete}
            edit_template={selected_template}
            current_values={current_values}
          />)}
      </DialogContent>;
    </Dialog>);
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
  onSelectTemplate (template.template data);
onClose ();
toast ({
  
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/templates/TemplateManager.tsx

=======
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/templates/TemplateManager.tsx
=======
            />;
          </div>;
        ) : (;
          <TemplateSaveForm;
            onCancel={() => {;
              setMode("list");
              setSelectedTemplate(null);
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            }}
            onComplete={handleSaveComplete}
            editTemplate={selectedTemplate}
            currentValues={currentValues}
          />
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
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
