



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

import {useState} from "react";
import {useContractTemplates} from "@/hooks/useContractTemplates";
import {ContractTemplate} from "@/types/contracts";
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {TemplateList} from "./TemplateList";
import {TemplateSaveForm} from "./TemplateSaveForm";
import {ContractFormValues} from "@/components/contracts/components/ContractForm";
import {useToast} from "@/hooks/use-toast";
  isOpen: boolean
  onClose: () => void
  onSelectTemplate: (template: ContractFormValues) => void

  currentValues?: ContractFormValues
}
  const handleSelectTemplate = (template: ContractTemplate) => {
    if (template && template.template_data) {
      onSelectTemplate(template.template_data);
      onClose()
interface TemplateManagerProps {;
  isOpen: boolean,;
  onClose: () => void,;
  onSelectTemplate: (template: ContractFormValues) => void,;
  currentValues?: ContractFormValues;
}

  const { templates, isLoading } = useContractTemplates();
  const { toast } = useToast();

  const handleSelectTemplate = (template: ContractTemplate) => {;
    if (template && template.template_data) {;
      onSelectTemplate(template.template_data);
      toast({
        title: "Template loaded"
        description: `Template "${template.title}" has been loaded.`})
    }
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
  },

  const handleSaveComplete = () => {
    setMode("list"),
    setSelectedTemplate(null)
  }
  },

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
                onClick={() => setMode("save")}



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
              >;
                Save Current as Template;
              </Button>;
            </div>;
            <TemplateList 


              templates={templates}
              isLoading={isLoading}
              onSelect={handleSelectTemplate}
            />;
          </div>;
        ) : (;
          <TemplateSaveForm
            onCancel={() => {;
              setMode("list");
              setSelectedTemplate(null);

              setMode("list"),
              setSelectedTemplate(null)
