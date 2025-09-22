
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f



<<<<<<< HEAD

import {ContractTemplate} from "@/types/contracts";
import {Button} from "@/components/ui/button";
import {Loader2, Edit, Trash, Star, StarOff} from "lucide-react";
import {useContractTemplates} from "@/hooks/useContractTemplates";
import {Card, CardContent} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import {AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle} from "@/components/ui/alert-dialog";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import {useState} from "react";
<<<<<<< HEAD
<<<<<<< HEAD
=======
import {useState} from "react";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
  };
<<<<<<< HEAD
=======
=======
  };
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { ContractTemplate } from "@/types/contracts",
import { Button } from "@/components/ui/button",
import { Loader2, Edit, Trash, Star, StarOff } from "lucide-react",
import { useContractTemplates } from "@/hooks/useContractTemplates",
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======



import {ContractTemplate} from "@/types/contracts";"
import {Button} from "@/components/ui/button";"
import {Loader2, Edit, Trash, Star, StarOff} from "lucide-react";"
import {useContractTemplates} from "@/hooks/useContractTemplates";"
import {Card, CardContent} from "@/components/ui/card";"
import {Separator} from "@/components/ui/separator";"
import {AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle} from "@/components/ui/alert-dialog";"
import {useState} from "react";
"
import { ContractTemplate } from "@/types/contracts","
import { Button } from "@/components/ui/button","
import { Loader2, Edit, Trash, Star, StarOff } from "lucide-react","
import { useContractTemplates } from "@/hooks/useContractTemplates",";
import { Card, CardContent } from "@/components/ui/card";"
import { Separator } from "@/components/ui/separator";
import {};
=======
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  AlertDialog;
  AlertDialogAction;
  AlertDialogCancel;
  AlertDialogContent;
  AlertDialogDescription;
  AlertDialogFooter;
<<<<<<< HEAD
  AlertDialogHeader;"
  AlertDialogTitle} from "@/components/ui/alert-dialog","
import { useState } from "react";
interface TemplateListProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  templates: ContractTemplate[]
  isLoading: boolean;
  onSelect: (template: ContractTemplate) => void;
  onEdit: (template: ContractTemplate) => void;
}
export function TemplateList({};
  templates;
  isLoading;
  onSelect;
  onEdit;
}: TemplateListProps) {}
  const [templateToDelete, setTemplateToDelete] = useState<string | null>(null),
  const { deleteTemplate, setDefaultTemplate } = useContractTemplates();

  const handleDeleteClick = (templateId: string) => {}
    setTemplateToDelete(templateId)
  }
  const handleDeleteConfirm = async () => {}
    if (templateToDelete) {}
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      await deleteTemplate.mutateAsync(templateToDelete);
      setTemplateToDelete(null)
    }
  }
<<<<<<< HEAD
  const handleSetDefault = async (templateId: string) => {}
    await setDefaultTemplate.mutateAsync(templateId)
  }"
import { Card, CardContent } from "@/components/ui/card","
import { Separator } from "@/components/ui/separator",
import {}
=======
  const handleSetDefault = async (templateId: string) => {
    await setDefaultTemplate.mutateAsync(templateId)
  }
import { Card, CardContent } from "@/components/ui/card",
import { Separator } from "@/components/ui/separator",
import {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
<<<<<<< HEAD
  AlertDialogHeader,"
  AlertDialogTitle} from "@/components/ui/alert-dialog","
import { useState } from "react",
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  AlertDialogHeader,
  AlertDialogTitle} from "@/components/ui/alert-dialog",
import { useState } from "react",
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
interface TemplateListProps {
  templates: ContractTemplate[],
  isLoading: boolean,
  onSelect: (template: ContractTemplate) => void,
  onEdit: (template: ContractTemplate) => void
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31




  const handleSetDefault = async (templateId: string) => {;
    await setDefaultTemplate && setDefaultTemplate.mutateAsync(templateId);
  };
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

=======
  const handleSetDefault = async (templateId: string) => {;
    await setDefaultTemplate && setDefaultTemplate.mutateAsync(templateId);
  };
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  if (isLoading) {;
=======
import {useState} from "react";  if (isLoading) {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import {useState} from "react";  if (isLoading) {;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

  const handleSetDefault = async (templateId: string) => {;
    await setDefaultTemplate && setDefaultTemplate.mutateAsync(templateId);
  };
  if (isLoading) {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    return (
      <div className="flex justify-center items-center py-8">;
=======

interface TemplateListProps {}
  templates: ContractTemplate[],
  isLoading: boolean,
  onSelect: (template: ContractTemplate) => void,;
  onEdit: (template: ContractTemplate) => void;
  if (isLoading) {;
    return ("
      <div className="flex justify-center items-center py-8">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <Loader2 className="h-8 w-8 animate-spin text-zion-purple" />;
      </div>;
    );
  }

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  if (!templates && templates.length) {;

    return (
      <div className="text-center py-8">;
        <p className="text-muted-foreground">No templates found.</p>;
        <p className="text-sm text-muted-foreground">Save a contract as a template to reuse it later.</p>;
      </div>;
    );
  }
  return (
    <div className="space-y-3">;
      {templates && templates.map((template) => (;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <Card key={template && template.id} className={template && template.is_default ? "border-zion-purple" : ""}>;
=======
  if (!templates && templates.length) {;
    return (

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
        <Card key={template && template.id} className={template && template.is_default ? "border-zion-purple" : ""}>;}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        <Card key={template && template.id} className={template && template.is_default ? "border-zion-purple" : ""}>;}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
        <Card key={template && template.id} className={template && template.is_default ? "border-zion-purple" : ""}>;
if (!templates && templates.length) {;
    return (
}
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

<<<<<<< HEAD
import { ContractTemplate } from "@/types/contracts",;
import { Button } from "@/components/ui/button",;
import { Loader2, Edit, Trash, Star, StarOff } from "lucide-react",;
import { useContractTemplates } from "@/hooks/useContractTemplates",;
import { Card, CardContent } from "@/components/ui/card",;
=======
=======
        <Card key={template && template.id} className={template && template.is_default ? "border-zion-purple" : ""}>;}

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export function TemplateList({;
  templates;
  isLoading;
  onSelect;
<<<<<<< HEAD
  onEdit;
}: TemplateListProps) {}
  const [templateToDelete, setTemplateToDelete] = useState<string | null>(null);
  const { deleteTemplate, setDefaultTemplate } = useContractTemplates();

  const handleDeleteClick = (templateId: string) => {}
    setTemplateToDelete(templateId)
  };

  const handleDeleteConfirm = async () => {}
    if (templateToDelete) {}
      await deleteTemplate.mutateAsync(templateToDelete);
      setTemplateToDelete(null)
    }
  };"
import { ContractTemplate } from "@/types/contracts",;"
import { Button } from "@/components/ui/button",;"
import { Loader2, Edit, Trash, Star, StarOff } from "lucide-react",;"
import { useContractTemplates } from "@/hooks/useContractTemplates",;"
import { Card, CardContent } from "@/components/ui/card",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Separator } from "@/components/ui/separator",;
import {;
  AlertDialog,;
  AlertDialogAction,;
  AlertDialogCancel,;
  AlertDialogContent,;
  AlertDialogDescription,;
  AlertDialogFooter,;
  AlertDialogHeader,;"
  AlertDialogTitle} from "@/components/ui/alert-dialog",;"
import { useState } from "react",;
<<<<<<< HEAD
=======
interface TemplateListProps {;
  templates: ContractTemplate[],;
  isLoading: boolean,;
  onSelect: (template: ContractTemplate) => void,;
  onEdit: (template: ContractTemplate) => void;
<<<<<<< HEAD
<<<<<<< HEAD
}          <CardContent className="p-4">;
=======
}
;
export function TemplateList({;
  templates,;
  isLoading,;
  onSelect,;
  onEdit;
    ),;
  }
;
  return (;
    <div className="space-y-3">;
      {templates.map((template) => (;
        <Card key={template.id} className={template.is_default ? "border-zion-purple" :""}>;
          <CardContent className="p-4">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <div className="flex items-center justify-between">;
              <div className="space-y-1">;
                <div className="flex items-center gap-2">;
                  <h3 className="font-medium">{template && template.title}</h3>;
                  {template && template.is_default && (;
                    <span className="bg-zion-purple/10 text-zion-purple text-xs px-2 py-0 && 0.5 rounded-full">Default</span>;
                  )}
<<<<<<< HEAD
  };
interface TemplateListProps {
  templates: ContractTemplate[],
  isLoading: boolean,
  onSelect: (template: ContractTemplate) => void,
  onEdit: (template: ContractTemplate) => void
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
}
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

  const handleSetDefault = async (templateId: string) => {}
    await setDefaultTemplate.mutateAsync(templateId)
  },



  const handleSetDefault = async (templateId: string) => {;
    await setDefaultTemplate && setDefaultTemplate.mutateAsync(templateId);
  };

  if (isLoading) {;
    return ("
      <div className="flex justify-center items-center py-8">;"
=======
  onEdit
}: TemplateListProps) {

    return (
      <div className="flex justify-center items-center py-8">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        <Loader2 className="h-8 w-8 animate-spin text-zion-purple" />;
      </div>;
    );
  }
    return ("
      <div className="text-center py-8">;"
        <p className="text-muted-foreground">No templates found.</p>;"
        <p className="text-sm text-muted-foreground">Save a contract as a template to reuse it later.</p>;
      </div>;
    );
  }
  return ("
    <div className="space-y-3">;
      {templates && templates.map((template) => (;"
        <Card key={template && template.id} className={template && template.is_default ? "border-zion-purple" : ""}>;"
          <CardContent className="p-4">;"
            <div className="flex items-center justify-between">;"
              <div className="space-y-1">;"
                <div className="flex items-center gap-2">;"
                  <h3 className="font-medium">{template && template.title}</h3>;
                  {template && template.is_default && (;"
                    <span className="bg-zion-purple/10 text-zion-purple text-xs px-2 py-0 && 0.5 rounded-full">Default</span>;
                  )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



            <Button;
              onClick={() => onSelect(template)} "
              variant="outline" 


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
            <Button
              onClick={() => onSelect(template)}
              variant="outline"
            <Button 
              onClick={() => onSelect(template)} 
              variant="outline" 
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

            <Button 
              onClick={() => onSelect(template)} 
              variant="outline" 

<<<<<<< HEAD

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
<Button
              onClick={() => onSelect(template)}
              variant="outline"
            <Button 
              onClick={() => onSelect(template)} 
              variant="outline"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              className="w-full"
            >
              Use This Template;
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
            <AlertDialogAction"
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              onClick={handleDeleteConfirm}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

                </div>;"
=======
              onClick={handleDeleteConfirm}

                </div>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                <p className="text-xs text-muted-foreground">;
                  Last updated: {new Date(template && template.updated_at).toLocaleDateString()}
                </p>;
              </div>;
<<<<<<< HEAD
"
              <div className="flex items-center gap-2">;"
                <Button variant="ghost" size="icon" onClick={() => onEdit(template)}>;"
                  <Edit className="h-4 w-4" />;
                </Button>;
"
                  <Button variant="ghost" size="icon" disabled>;"
                    <StarOff className="h-4 w-4" />;
                  </Button>;
                )}
"
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
              <div className="flex items-center gap-2">;
                <Button variant="ghost" size="icon" onClick={() => onEdit(template)}>;
                  <Edit className="h-4 w-4" />;
                </Button>;
                {!template && template.is_default ? (;
                  <Button variant="ghost" size="icon" onClick={() => handleSetDefault(template && template.id)}>;
                    <Star className="h-4 w-4" />;
                  </Button>;
                ) : (;
{!template.is_default ? (;
                  <Button variant="ghost" size="icon" onClick={() => handleSetDefault(template.id)}>;
                    <Star className="h-4 w-4" />;
                  </Button>;
                ) :(;
                  <Button variant="ghost" size="icon" disabled>;
                    <StarOff className="h-4 w-4" />;
                  </Button>;
                )}
                <Button variant="ghost" size="icon" onClick={() => handleDeleteClick(template && template.id)}>;
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
<Button variant="ghost" size="icon" onClick={() => handleDeleteClick(template.id)}>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  <Trash className="h-4 w-4 text-destructive" />;
                </Button>;
              </div>;
            </div>;

<<<<<<< HEAD


            ;"
            <Separator className="my-3" />;
            ;
            <Button ;
              onClick={() => onSelect(template)} ;"
              variant="outline" ;"
              className="w-full";



            >;
=======
              onClick={handleDeleteConfirm}            >;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
              onClick={handleDeleteConfirm}            >;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
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
            ;
            <Separator className="my-3" />;
            ;
            <Button ;
              onClick={() => onSelect(template)} ;
              variant="outline" ;
              className="w-full";
            >;
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
              onClick={handleDeleteConfirm}            >;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              Use This Template;
            </Button>;
          </CardContent>;

<<<<<<< HEAD
        </Card>))}
      <AlertDialog open={!!templateToDelete} onOpenChange={() => setTemplateToDelete (null)}>;
        <AlertDialogContent>;
          <AlertDialogHeader>;
<<<<<<< HEAD
            <AlertDialogTitle > Delete Template</AlertDialogTitle>;              Delete;
=======

=======
            <AlertDialogTitle > Delete Template</AlertDialogTitle>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

</Card>;
      ))}
      ;
      <AlertDialog open={!!templateToDelete} onOpenChange={() => setTemplateToDelete(null)}>;
        <AlertDialogContent>;
          <AlertDialogHeader>;
            <AlertDialogTitle>Delete Template</AlertDialogTitle>;
            <AlertDialogDescription>;
              Are you sure you want to delete this template? This action cannot be undone.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;

<<<<<<< HEAD


              Delete;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
            <AlertDialogCancel > Cancel</AlertDialogCancel>;
            <AlertDialogAction;
              className="bg - destructive text - destructive - foreground hover:bg - destructive / 90";
              on_click={handleDeleteConfirm}
            >;

<AlertDialogCancel>Cancel</AlertDialogCancel>;
            <AlertDialogAction ;
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90";
              onClick={handleDeleteConfirm}
            >;
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
              Delete;
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
            <AlertDialogTitle > Delete Template</AlertDialogTitle>;              Delete;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;

<<<<<<< HEAD
    </div>);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

    </div>;
  ),; import {};
=======
}

;
    </div>;
  ),; import {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  AlertDialog;
AlertDialogAction;
AlertDialogCancel;
AlertDialogContent;
AlertDialogDescription;
AlertDialogFooter;
AlertDialogHeader;
<<<<<<< HEAD
interface TemplateListProps {}
  templates: ContractTemplate[];
isLoading: boolean;
onSelect: (template: ContractTemplate) => void;
onEdit: (template: ContractTemplate) => void;
}export function TemplateList ({};
  templates;
isLoading;
onSelect;
onEdit;
}: TemplateListProps) {}
  const [templateToDelete, setTemplateToDelete] = useState<string | null> (null);
const {}
  deleteTemplate, setDefaultTemplate;
}= useContractTemplates ();
const handleDeleteClick = (templateId: string) => {}
  setTemplateToDelete (templateId) 
};
const handleDeleteConfirm = async () => {}
  if (templateToDelete) {}
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  await deleteTemplate.mutateAsync (templateToDelete);
setTemplateToDelete (null) 
}

<<<<<<< HEAD
};
<<<<<<< HEAD
const handleSetDefault = async (templateId: string) => {}
  await setDefaultTemplate.mutateAsync (templateId) 
};
if (isLoading) {"
  return (<div className="flex justify-center items-center py-8" > <Loader2 className="h-8 w-8 animate-spin text-zion-purple" /> </div>) 
}if (!templates.length) {"
  return (<div className="text-center py-8" > <p className="text-muted-foreground" >No templates found.</p> <p className="text-sm text-muted-foreground" >Save a contract as a template to reuse it later.</p> </div>) "
}return (<div className="space-y-3" > {}
  templates.map ( (template) => (<Card key= {}
  template.id;
}className= {"
  template.is default ? "border-zion-purple" : "" 
}> template.title;
}</h3> {"
  template.is default && (<span className="bg-zion-purple/10 text-zion-purple text-xs px-2 py-0.5 rounded-full">Default</span>) "
}</div> <p className="text-xs text-muted-foreground"> Last updated: {}
  new Date (template.updated at) .toLocaleDateString () "
}</p> </div> </Button>) : (<Button variant=" ghost"size=" icon"disabled> <StarOff className="h-4 w-4"/> </Button>) "
}<Trash className="h-4 w-4 text-destructive"/> </Button> </div> </div> <Separator className="my-3"/> <Button className="w-full"> Use This Template </Button> </CardContent> </Card>) ) 
}<AlertDialog open= {}
  !!templateToDelete;
}onOpenChange= {}
  () => setTemplateToDelete (null) "
}> <AlertDialogContent> <AlertDialogHeader> <AlertDialogTitle>Delete Template</AlertDialogTitle> <AlertDialogDescription> Are you sure you want to delete this template? This action cannot be undone. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel>Cancel</AlertDialogCancel> <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90" onClick= {}
  handleDeleteConfirm;
=======
const handleSetDefault = async (templateId: string) => {
  await setDefaultTemplate.mutateAsync (templateId) 
};
if (isLoading) {
  return (<div className="flex justify-center items-center py-8" > <Loader2 className="h-8 w-8 animate-spin text-zion-purple" /> </div>) 
}if (!templates.length) {
  return (<div className="text-center py-8" > <p className="text-muted-foreground" >No templates found.</p> <p className="text-sm text-muted-foreground" >Save a contract as a template to reuse it later.</p> </div>) 
}return (<div className="space-y-3" > {
=======
export function TemplateList(): any ({;
  templates;
  isLoading;
  onSelect;
  onEdit;)
}: TemplateListProps) {;
  const [templateToDelete, setTemplateToDelete] = useState<string | null>(null);
</string>
  const [templateToDelete, setTemplateToDelete] = useState<string | null>(null),
</string>"
      <div className="flex justify-center items-center py-8">;"
</div>"
        <Loader2 className="h-8 w-8 animate-spin text-zion-purple" />;"
</Loader2>
      </div>;"
      <div className="text-center py-8">;"
        <p className="text-muted-foreground">No templates found.</p>;""
        <p className="text-sm text-muted-foreground">Save a contract as a template to reuse it later.</p>;"
    <div className="space-y-3">;"
        <Card key={template && template.id} className={template && template.is_default ? "border-zion-purple" : ""}>;"

        <Card key={template.id} className={template.is_default ? "border-zion-purple" :""}>;"
"
          <CardContent className="p-4">;"
            <div className="flex items-center justify-between">;"
              <div className="space-y-1">;"
                <div className="flex items-center gap-2">;"
                  <h3 className="font-medium">{template && template.title}</h3>;""
                    <span className="bg-zion-purple/10 text-zion-purple text-xs px-2 py-0 && 0.5 rounded-full">Default</span>;""
                    <span className="bg-zion-purple/10 text-zion-purple text-xs px-2 py-0 && 0.5 rounded-full">Default</span>;"
                <p className="text-xs text-muted-foreground">"
</p>
              <div className="flex items-center gap-2">"
                <Button variant="ghost" size="icon" onClick={() => onEdit(template)}>"
                  <Edit className="h-4 w-4" />"

                  <Button variant="ghost" size="icon" onClick={() => handleSetDefault(template.id)}>"
                    <Star className="h-4 w-4" />"

                  <Button variant="ghost" size="icon" disabled>"
                    <StarOff className="h-4 w-4" />"

                <Button variant="ghost" size="icon" onClick={() => handleDeleteClick(template.id)}>"
                  <Trash className="h-4 w-4 text-destructive" />"

              </div>
            <Separator className="my-3" />"

            <Button;
              onClick={() => onSelect(template)} 

      <AlertDialog open={!!templateToDelete} onOpenChange={() => setTemplateToDelete(null)}>

        <AlertDialogContent>

          <AlertDialogHeader>

            <AlertDialogTitle>Delete Template
            <AlertDialogDescription>

          <AlertDialogFooter>

            <AlertDialogCancel>Cancel
            <AlertDialogAction;"
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90""
              onClick={handleDeleteConfirm}

                </div>;
                <p className="text-xs text-muted-foreground">;"
                </p>;
                <Button variant="ghost" size="icon" onClick={() => onEdit(template)}>;"
                  <Edit className="h-4 w-4" />;"

                ;"
                  <Button variant="ghost" size="icon" onClick={() => handleSetDefault(template && template.id)}>;"
                    <Star className="h-4 w-4" />;"

                  <Button variant="ghost" size="icon" disabled>;"
                    <StarOff className="h-4 w-4" />;"

                <Button variant="ghost" size="icon" onClick={() => handleDeleteClick(template && template.id)}>;"
                  <Trash className="h-4 w-4 text-destructive" />;"

                ;
            <Separator className="my-3" />;"

              onClick={() => onSelect(template)} ;

            <Button ;

        ))}
      <AlertDialog open={!!templateToDelete} onOpenChange={() => setTemplateToDelete (null)}>;

        <AlertDialogContent>;

          <AlertDialogHeader>;

            <AlertDialogTitle > Delete Template;
            <AlertDialogDescription>;

          <AlertDialogFooter>;


            <AlertDialogCancel > Cancel;
              className="bg - destructive text - destructive - foreground hover:bg - destructive / 90";"
              on_click={handleDeleteConfirm}
            >;

    </div>);
</AlertDialogAction>

            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;
    </div>);

    </div>;
  const [templateToDelete, setTemplateToDelete] = useState<string | null> (null);
  return (<div className="flex justify-center items-center py-8" > <Loader2 className="h-8 w-8 animate-spin text-zion-purple" /> </div>)""
  return (<div className="text-center py-8" > <p className="text-muted-foreground" >No templates found.</p> <p className="text-sm text-muted-foreground" >Save a contract as a template to reuse it later.</p> </div>)""
}return (<div className="space-y-3" > {"
</div>)
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  templates.map ( (template) => (<Card key= {
  template.id;
}className= {"
  template.is default ? "border-zion-purple" : """
}> template.title;

}</h3> {)"
  template.is default && (<span className="bg-zion-purple/10 text-zion-purple text-xs px-2 py-0.5 rounded-full">Default</span>)""
}</div> <p className="text-xs text-muted-foreground"> Last updated: {"
</p>"
}</p> </div> ) : (<Button variant=" ghost"size=" icon"disabled> <StarOff className="h-4 w-4"/> )""
}<Trash className="h-4 w-4 text-destructive"/>  </div> </div> <Separator className="my-3"/> <Button className="w-full"> Use This Template   ) )"

}<AlertDialog open= {
  !!templateToDelete;
}onOpenChange= {
  () => setTemplateToDelete (null) 
<<<<<<< HEAD
}> <AlertDialogContent> <AlertDialogHeader> <AlertDialogTitle>Delete Template</AlertDialogTitle> <AlertDialogDescription> Are you sure you want to delete this template? This action cannot be undone. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel>Cancel</AlertDialogCancel> <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90" onClick= {
  handleDeleteConfirm 
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
}> <AlertDialogContent> <AlertDialogHeader> <AlertDialogTitle>Delete Template <AlertDialogDescription> Are you sure you want to delete this template? This action cannot be undone.   <AlertDialogFooter> <AlertDialogCancel>Cancel <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90" onClick= {"

}> Delete     </div>) 
pr-12325
</AlertDialog>"
}> <AlertDialogContent> <AlertDialogHeader> <AlertDialogTitle>Delete Template</AlertDialogTitle> <AlertDialogDescription> Are you sure you want to delete this template? This action cannot be undone. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel>Cancel</AlertDialogCancel> <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90" onClick= {"
</AlertDialogContent>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}> Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </div>) 
}
    </div>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
    </div>;"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
