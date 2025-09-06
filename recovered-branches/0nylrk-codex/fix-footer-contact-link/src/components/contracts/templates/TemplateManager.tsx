
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

export function TemplateManager(): any ({;
  isOpen;
  onClose;
  onSelectTemplate;
<<<<<<< HEAD
  currentValues;
}: TemplateManagerProps) {;
  const [mode, setMode] = useState<"list" | "save">("list");
  const [selectedTemplate, setSelectedTemplate] = useState<ContractTemplate | null>(null);

=======
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  const { templates, isLoading } = useContractTemplates();
  const { toast } = useToast();

  const handleSelectTemplate = (template: ContractTemplate) => {;
    if (template && template.template_data) {;
      onSelectTemplate(template.template_data);


  const { templates, isLoading } = useContractTemplates(),
  const { toast } = useToast(),

  const handleSelectTemplate = (template: ContractTemplate) => {
    if (template && template.template_data) {
      onSelectTemplate(template.template_data),
      onClose(),


      toast({
        title: "Template loaded"
        description: `Template "${template.title}" has been loaded.`})
    }

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


  return (
    <Dialog open={isOpen} onOpenChange={onClose}>;
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">;
        <DialogHeader>;
          <DialogTitle>;
            {mode === "list" ? "Contract Templates" : "Save Template"}


  },


  const handleSaveComplete = () => {
    setMode("list"),
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
                onClick={() => setMode("save")}
<<<<<<< HEAD

                onClick={() => setMode("save")}



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
                onClick={() => setMode("save")}
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
                disabled={!currentValues}
              >
                Save Current as Template
              </Button>
            </div>
<<<<<<< HEAD

          </DialogTitle>;
        </DialogHeader>;

        {mode === "list" ? (;
          <div className="space-y-4">;
            <div className="flex justify-end">;
              <Button
                variant="outline" 
                onClick={() => setMode("save")}
                disabled={!currentValues}
=======
<<<<<<< HEAD
            <TemplateList
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
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

              >;
                Save Current as Template;
              </Button>;
            </div>;


            <TemplateList 
<<<<<<< HEAD


              templates={templates}
              isLoading={isLoading}
              onSelect={handleSelectTemplate}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
              onEdit={(template) => {;
                setSelectedTemplate(template);
                setMode("save");
              }}

            />;
          </div>;
        ) : (;
          <TemplateSaveForm
            onCancel={() => {;
              setMode("list");
              setSelectedTemplate(null);
<<<<<<< HEAD

=======

              setMode("list"),
              setSelectedTemplate(null)

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
            }}
            onComplete={handleSaveComplete}
            editTemplate={selectedTemplate}
            currentValues={currentValues}
          />;
        )}

      </DialogContent>;
    </Dialog>;
  );
}

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
}

=======
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
