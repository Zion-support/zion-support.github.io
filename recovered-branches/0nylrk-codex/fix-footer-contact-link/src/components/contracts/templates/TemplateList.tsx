<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/templates/TemplateList.tsx


<<<<<<< HEAD
import { ContractTemplate } from "@/types/contracts",
import { Button } from "@/components/ui/button",
import { Loader2, Edit, Trash, Star, StarOff } from "lucide-react",
import { useContractTemplates } from "@/hooks/useContractTemplates",

interface TemplateListProps {
  templates: ContractTemplate[],
  isLoading: boolean,
  onSelect: (template: ContractTemplate) => void,
  onEdit: (template: ContractTemplate) => void

import { ContractTemplate } from "@/types/contracts",;
import { Button } from "@/components/ui/button",;
import { Loader2, Edit, Trash, Star, StarOff } from "lucide-react",;
import { useContractTemplates } from "@/hooks/useContractTemplates",;
import { Card, CardContent } from "@/components/ui/card",;
import { Separator } from "@/components/ui/separator",;
import {;
  AlertDialog,;
  AlertDialogAction,;
  AlertDialogCancel,;
  AlertDialogContent,;
  AlertDialogDescription,;
  AlertDialogFooter,;
  AlertDialogHeader,;
  AlertDialogTitle} from "@/components/ui/alert-dialog",;
import { useState } from "react",;
=======



========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/templates/TemplateList.tsx
=======

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import {ContractTemplate} from "@/types/contracts";
import {Button} from "@/components/ui/button";
import {Loader2, Edit, Trash, Star, StarOff} from "lucide-react";
import {useContractTemplates} from "@/hooks/useContractTemplates";
import {Card, CardContent} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import {AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle} from "@/components/ui/alert-dialog";
import {useState} from "react";
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
interface TemplateListProps {;
  templates: ContractTemplate[],;
  isLoading: boolean,;
  onSelect: (template: ContractTemplate) => void,;
  onEdit: (template: ContractTemplate) => void;
}
export function TemplateList(): any ({;
  templates;
  isLoading;
  onSelect;
  onEdit;
}: TemplateListProps) {;
  const [templateToDelete, setTemplateToDelete] = useState<string | null>(null);
  const { deleteTemplate, setDefaultTemplate } = useContractTemplates();
  const handleDeleteClick = (templateId: string) => {;
    setTemplateToDelete(templateId);
  };
  const handleDeleteConfirm = async () => {;
    if (templateToDelete) {;
      await deleteTemplate && deleteTemplate.mutateAsync(templateToDelete);
      setTemplateToDelete(null);
    }
<<<<<<< HEAD
  },

  const handleSetDefault = async (templateId: string) => {
    await setDefaultTemplate.mutateAsync(templateId)
  },
=======
  };
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/templates/TemplateList.tsx
=======
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { ContractTemplate } from "@/types/contracts",
import { Button } from "@/components/ui/button",
import { Loader2, Edit, Trash, Star, StarOff } from "lucide-react",
import { useContractTemplates } from "@/hooks/useContractTemplates",
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  AlertDialog;
  AlertDialogAction;
  AlertDialogCancel;
  AlertDialogContent;
  AlertDialogDescription;
  AlertDialogFooter;
  AlertDialogHeader;
  AlertDialogTitle} from "@/components/ui/alert-dialog",
import { useState } from "react";
interface TemplateListProps {

  templates: ContractTemplate[]
  isLoading: boolean
  onSelect: (template: ContractTemplate) => void

  onEdit: (template: ContractTemplate) => void
}
export function TemplateList({
  templates;
  isLoading;
  onSelect;
  onEdit
}: TemplateListProps) {
  const [templateToDelete, setTemplateToDelete] = useState<string | null>(null),
  const { deleteTemplate, setDefaultTemplate } = useContractTemplates();

  const handleDeleteClick = (templateId: string) => {
    setTemplateToDelete(templateId)
  }
  const handleDeleteConfirm = async () => {
    if (templateToDelete) {
      await deleteTemplate.mutateAsync(templateToDelete);
      setTemplateToDelete(null)
    }
  }
  const handleSetDefault = async (templateId: string) => {
    await setDefaultTemplate.mutateAsync(templateId)
  }
import { Card, CardContent } from "@/components/ui/card",
import { Separator } from "@/components/ui/separator",
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle} from "@/components/ui/alert-dialog",
import { useState } from "react",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
interface TemplateListProps {
  templates: ContractTemplate[],
  isLoading: boolean,
  onSelect: (template: ContractTemplate) => void,
  onEdit: (template: ContractTemplate) => void
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee



========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/templates/TemplateList.tsx
  const handleSetDefault = async (templateId: string) => {;
    await setDefaultTemplate && setDefaultTemplate.mutateAsync(templateId);
  };
  if (isLoading) {;
    return (
      <div className="flex justify-center items-center py-8">;
        <Loader2 className="h-8 w-8 animate-spin text-zion-purple" />;
      </div>;
    );
  }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/templates/TemplateList.tsx


  if (!templates && templates.length) {;

    return (
========
  if (!templates && templates.length) {;
    return (
=======

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}

export function TemplateList({;
  templates;
  isLoading;
  onSelect;
  onEdit
}: TemplateListProps) {
  const [templateToDelete, setTemplateToDelete] = useState<string | null>(null);
  const { deleteTemplate, setDefaultTemplate } = useContractTemplates();

  const handleDeleteClick = (templateId: string) => {
    setTemplateToDelete(templateId)
  };

  const handleDeleteConfirm = async () => {
    if (templateToDelete) {
      await deleteTemplate.mutateAsync(templateToDelete);
      setTemplateToDelete(null)
    }
  };
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { ContractTemplate } from "@/types/contracts",;
import { Button } from "@/components/ui/button",;
import { Loader2, Edit, Trash, Star, StarOff } from "lucide-react",;
import { useContractTemplates } from "@/hooks/useContractTemplates",;
import { Card, CardContent } from "@/components/ui/card",;
import { Separator } from "@/components/ui/separator",;
import {;
  AlertDialog,;
  AlertDialogAction,;
  AlertDialogCancel,;
  AlertDialogContent,;
  AlertDialogDescription,;
  AlertDialogFooter,;
  AlertDialogHeader,;
  AlertDialogTitle} from "@/components/ui/alert-dialog",;
import { useState } from "react",;
<<<<<<< HEAD
;
interface TemplateListProps {;
  templates:ContractTemplate[],;
  isLoading:boolean,;
  onSelect:(template:ContractTemplate) => void,;
  onEdit:(template:ContractTemplate) => void;
=======
interface TemplateListProps {;
  templates: ContractTemplate[],;
  isLoading: boolean,;
  onSelect: (template: ContractTemplate) => void,;
  onEdit: (template: ContractTemplate) => void;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}
;
export function TemplateList({;
  templates,;
  isLoading,;
  onSelect,;
  onEdit;
<<<<<<< HEAD
} TemplateListProps) {;
  const [templateToDelete, setTemplateToDelete] = useState<string | null>(null),;
  const { deleteTemplate, setDefaultTemplate } = useContractTemplates(),;
;
  const handleDeleteClick = (templateId:string) => {;
    setTemplateToDelete(templateId);
  },;
;
  const handleDeleteConfirm = async () => {;
    if (templateToDelete) {;
      await deleteTemplate.mutateAsync(templateToDelete),;
      setTemplateToDelete(null),;
    }
  },;
;
  const handleSetDefault = async (templateId:string) => {;
    await setDefaultTemplate.mutateAsync(templateId);
  },;
;
  if (isLoading) {;
    return (;
      <div className="flex justify-center items-center py-8">;
        <Loader2 className="h-8 w-8 animate-spin text-zion-purple" />;
      </div>;
    ),;
  }
;
  if (!templates.length) {;
    return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/templates/TemplateList.tsx
      <div className="text-center py-8">;
        <p className="text-muted-foreground">No templates found.</p>;
        <p className="text-sm text-muted-foreground">Save a contract as a template to reuse it later.</p>;
      </div>;
<<<<<<< HEAD
    );
  }
  return (
    <div className="space-y-3">;
      {templates && templates.map((template) => (;
        <Card key={template && template.id} className={template && template.is_default ? "border-zion-purple" : ""}>;
=======
    ),;
  }
;
  return (;
    <div className="space-y-3">;
      {templates.map((template) => (;
        <Card key={template.id} className={template.is_default ? "border-zion-purple" :""}>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          <CardContent className="p-4">;
            <div className="flex items-center justify-between">;
              <div className="space-y-1">;
                <div className="flex items-center gap-2">;
<<<<<<< HEAD
                  <h3 className="font-medium">{template && template.title}</h3>;
                  {template && template.is_default && (;
                    <span className="bg-zion-purple/10 text-zion-purple text-xs px-2 py-0 && 0.5 rounded-full">Default</span>;
                  )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/templates/TemplateList.tsx
<<<<<<< HEAD
=======
}: TemplateListProps) {;
  const [templateToDelete, setTemplateToDelete] = useState<string | null>(null),;
  const { deleteTemplate, setDefaultTemplate } = useContractTemplates(),;
  const handleDeleteClick = (templateId: string) => {;
    setTemplateToDelete(templateId);
  },;
  const handleDeleteConfirm = async () => {;
    if (templateToDelete) {;
      await deleteTemplate.mutateAsync(templateToDelete),;
      setTemplateToDelete(null);
    }
  },

  const handleSetDefault = async (templateId: string) => {
    await setDefaultTemplate.mutateAsync(templateId)
  },

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-8">
        <Loader2 className="h-8 w-8 animate-spin text-zion-purple" />
      </div>
    )
  }
  if (!templates.length) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No templates found.</p>
        <p className="text-sm text-muted-foreground">Save a contract as a template to reuse it later.</p>
      </div>
    )
  }
  return (
    <div className="space-y-3">
      {templates.map((template) => (
        <Card key={template.id} className={template.is_default ? "border-zion-purple" : ""}>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">{template.title}</h3>
                  {template.is_default && (
                    <span className="bg-zion-purple/10 text-zion-purple text-xs px-2 py-0.5 rounded-full">Default</span>
                  )}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                </div>
                <p className="text-xs text-muted-foreground">
                  Last updated: {new Date(template.updated_at).toLocaleDateString()}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" onClick={() => onEdit(template)}>
                  <Edit className="h-4 w-4" />
                </Button>
                {!template.is_default ? (
                  <Button variant="ghost" size="icon" onClick={() => handleSetDefault(template.id)}>
                    <Star className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button variant="ghost" size="icon" disabled>
                    <StarOff className="h-4 w-4" />
                  </Button>
                )}
                <Button variant="ghost" size="icon" onClick={() => handleDeleteClick(template.id)}>
                  <Trash className="h-4 w-4 text-destructive" />
                </Button>
              </div>
            </div>
            <Separator className="my-3" />
<<<<<<< HEAD
<<<<<<< HEAD
=======


            <Button 
              onClick={() => onSelect(template)} 
              variant="outline" 

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            <Button
              onClick={() => onSelect(template)}
              variant="outline"
            <Button 
              onClick={() => onSelect(template)} 
              variant="outline" 
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              className="w-full"
            >
              Use This Template
            </Button>
          </CardContent>
        </Card>
      ))}
      <AlertDialog open={!!templateToDelete} onOpenChange={() => setTemplateToDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Template</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this template? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick={handleDeleteConfirm}
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/templates/TemplateList.tsx
                </div>;
                <p className="text-xs text-muted-foreground">;
                  Last updated: {new Date(template && template.updated_at).toLocaleDateString()}
                </p>;
              </div>;
=======
                  <h3 className="font-medium">{template.title}</h3>;
                  {template.is_default && (;
                    <span className="bg-zion-purple/10 text-zion-purple text-xs px-2 py-0.5 rounded-full">Default</span>;
                  )}
                </div>;
                <p className="text-xs text-muted-foreground">;
                  Last updated:{new Date(template.updated_at).toLocaleDateString()}
                </p>;
              </div>;
              ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <div className="flex items-center gap-2">;
                <Button variant="ghost" size="icon" onClick={() => onEdit(template)}>;
                  <Edit className="h-4 w-4" />;
                </Button>;
<<<<<<< HEAD
                {!template && template.is_default ? (;
                  <Button variant="ghost" size="icon" onClick={() => handleSetDefault(template && template.id)}>;
                    <Star className="h-4 w-4" />;
                  </Button>;
                ) : (;
=======
                {!template.is_default ? (;
                  <Button variant="ghost" size="icon" onClick={() => handleSetDefault(template.id)}>;
                    <Star className="h-4 w-4" />;
                  </Button>;
                ) :(;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  <Button variant="ghost" size="icon" disabled>;
                    <StarOff className="h-4 w-4" />;
                  </Button>;
                )}
<<<<<<< HEAD
                <Button variant="ghost" size="icon" onClick={() => handleDeleteClick(template && template.id)}>;
=======
                <Button variant="ghost" size="icon" onClick={() => handleDeleteClick(template.id)}>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  <Trash className="h-4 w-4 text-destructive" />;
                </Button>;
              </div>;
            </div>;
<<<<<<< HEAD
            <Separator className="my-3" />;
            <Button
              onClick={() => onSelect(template)} ;
              variant="outline" ;
              className="w-full";
import { ContractTemplate } from '@/types / contracts';
import { Button } from '@/components / ui / button';
import { Loader2, Edit, Trash, Star, StarOff } from './lucide-react';
import { useContractTemplates } from '@/hooks / useContractTemplates';
import { Card, CardContent } from '@/components / ui / card';
import { Separator } from '@/components / ui / separator';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components / ui / alert - dialog';
import { useState } from './react';
interface TemplateListProps {
  templates: ContractTemplate[],
  is_loading: boolean,
  on_select: (template: ContractTemplate) => void,
  on_edit: (template: ContractTemplate) => void;
}
export /**
 * TemplateList - Function description
 */
function TemplateList() {
  const [templateToDelete, setTemplateToDelete] = useState < string | null>(null);
  const { delete_template, setDefaultTemplate } = useContractTemplates ();
;
  const handleDeleteClick = (template_id: string) =>: any {
    setTemplateToDelete (template_id);
  }
;
  const handleDeleteConfirm = async () => {
    // Check condition
if ( {) {
  $2
}
      await delete_template.mutate_async (templateToDelete);
      setTemplateToDelete (null);
    }
  }
;
  const handleSetDefault = async (template_id: string) => {
    await setDefaultTemplate.mutate_async (template_id);
  }
;
  // Check condition
if ( {) {
  $2
}
    return (
      <div className="flex justify - center items - center py - 8">;
        <Loader2 className="h - 8 w - 8 animate - spin text - zion - purple" />;
      </div>);
  }
  // Check condition
if ( {) {
  $2
}
    return (
      <div className="text - center py - 8">;
        <p className="text - muted - foreground">No templates found.</p>;
        <p className="text - sm text - muted - foreground">Save a contract as a template to reuse it later.</p>;
      </div>);
  }
  return (
    <div className="space - y-3">;
      {templates.map ((template) => (
        <Card key={template.id} className={template.is_default ? "border - zion - purple" : ""}>;
          <CardContent className="p - 4">;
            <div className="flex items - center justify - between">;
              <div className="space - y-1">;
                <div className="flex items - center gap - 2">;
                  <h3 className="font - medium">{template.title}</h3>;
                  {template.is_default && (
                    <span className="bg - zion - purple / 10 text - zion - purple text - xs px - 2 py - 0.5 rounded - full">Default</span>)}
                </div>;
                <p className="text - xs text - muted - foreground">;
                  Last updated: {new Date (template.updated_at).toLocaleDateString ()}
                </p>;
              </div>;
              <div className="flex items - center gap - 2">;
                <Button variant="ghost" size="icon" on_click={() => on_edit (template)}>;
                  <Edit className="h - 4 w - 4" />;
                </Button>;
                {!template.is_default ? (
                  <Button variant="ghost" size="icon" on_click={() => handleSetDefault (template.id)}>;
                    <Star className="h - 4 w - 4" />;
                  </Button>) : (
                  <Button variant="ghost" size="icon" disabled>;
                    <StarOff className="h - 4 w - 4" />;
                  </Button>)}
                <Button variant="ghost" size="icon" on_click={() => handleDeleteClick (template.id)}>;
                  <Trash className="h - 4 w - 4 text - destructive" />;
                </Button>;
              </div>;
            </div>;
            <Separator className="my - 3" />;
            <Button;
              on_click={() => on_select (template)}
              variant="outline";
              className="w - full";
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/templates/TemplateList.tsx

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
========
=======
            ;
            <Separator className="my-3" />;
            ;
            <Button ;
              onClick={() => onSelect(template)} ;
              variant="outline" ;
              className="w-full";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/templates/TemplateList.tsx
            >;
              Use This Template;
            </Button>;
          </CardContent>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/templates/TemplateList.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/templates/TemplateList.tsx
        </Card>))}
      <AlertDialog open={!!templateToDelete} onOpenChange={() => setTemplateToDelete (null)}>;
        <AlertDialogContent>;
          <AlertDialogHeader>;
            <AlertDialogTitle > Delete Template</AlertDialogTitle>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/templates/TemplateList.tsx

========
=======
        </Card>;
      ))}
      ;
      <AlertDialog open={!!templateToDelete} onOpenChange={() => setTemplateToDelete(null)}>;
        <AlertDialogContent>;
          <AlertDialogHeader>;
            <AlertDialogTitle>Delete Template</AlertDialogTitle>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/templates/TemplateList.tsx
            <AlertDialogDescription>;
              Are you sure you want to delete this template? This action cannot be undone.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/templates/TemplateList.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/templates/TemplateList.tsx
            <AlertDialogCancel > Cancel</AlertDialogCancel>;
            <AlertDialogAction;
              className="bg - destructive text - destructive - foreground hover:bg - destructive / 90";
              on_click={handleDeleteConfirm}
=======
            <AlertDialogCancel>Cancel</AlertDialogCancel>;
            <AlertDialogAction ;
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90";
              onClick={handleDeleteConfirm}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            >;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/templates/TemplateList.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/templates/TemplateList.tsx
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
            >;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              Delete;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/templates/TemplateList.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/templates/TemplateList.tsx
    </div>);
=======
    </div>;
  ),; import {
  AlertDialog;
AlertDialogAction;
AlertDialogCancel;
AlertDialogContent;
AlertDialogDescription;
AlertDialogFooter;
AlertDialogHeader;
interface TemplateListProps {
  templates: ContractTemplate[];
isLoading: boolean;
onSelect: (template: ContractTemplate) => void;
onEdit: (template: ContractTemplate) => void 
}export function TemplateList ({
  templates;
isLoading;
onSelect;
onEdit 
}: TemplateListProps) {
  const [templateToDelete, setTemplateToDelete] = useState<string | null> (null);
const {
  deleteTemplate, setDefaultTemplate 
}= useContractTemplates ();
const handleDeleteClick = (templateId: string) => {
  setTemplateToDelete (templateId) 
};
const handleDeleteConfirm = async () => {
  if (templateToDelete) {
  await deleteTemplate.mutateAsync (templateToDelete);
setTemplateToDelete (null) 
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/templates/TemplateList.tsx

=======
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
};
const handleSetDefault = async (templateId: string) => {
  await setDefaultTemplate.mutateAsync (templateId) 
};
if (isLoading) {
  return (<div className="flex justify-center items-center py-8" > <Loader2 className="h-8 w-8 animate-spin text-zion-purple" /> </div>) 
}if (!templates.length) {
  return (<div className="text-center py-8" > <p className="text-muted-foreground" >No templates found.</p> <p className="text-sm text-muted-foreground" >Save a contract as a template to reuse it later.</p> </div>) 
}return (<div className="space-y-3" > {
  templates.map ( (template) => (<Card key= {
  template.id 
}className= {
  template.is default ? "border-zion-purple" : "" 
}> template.title 
}</h3> {
  template.is default && (<span className="bg-zion-purple/10 text-zion-purple text-xs px-2 py-0.5 rounded-full">Default</span>) 
}</div> <p className="text-xs text-muted-foreground"> Last updated: {
  new Date (template.updated at) .toLocaleDateString () 
}</p> </div> </Button>) : (<Button variant=" ghost"size=" icon"disabled> <StarOff className="h-4 w-4"/> </Button>) 
}<Trash className="h-4 w-4 text-destructive"/> </Button> </div> </div> <Separator className="my-3"/> <Button className="w-full"> Use This Template </Button> </CardContent> </Card>) ) 
}<AlertDialog open= {
  !!templateToDelete 
}onOpenChange= {
  () => setTemplateToDelete (null) 
}> <AlertDialogContent> <AlertDialogHeader> <AlertDialogTitle>Delete Template</AlertDialogTitle> <AlertDialogDescription> Are you sure you want to delete this template? This action cannot be undone. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel>Cancel</AlertDialogCancel> <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90" onClick= {
  handleDeleteConfirm 
}> Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </div>) 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/templates/TemplateList.tsx
=======
    </div>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
