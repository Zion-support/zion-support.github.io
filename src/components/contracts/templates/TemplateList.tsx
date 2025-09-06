<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/contracts/templates/TemplateList.tsx


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useState } from "react";
interface TemplateListProps {
  templates: ContractTemplate[],
  isLoading: boolean,
  onSelect: (template: ContractTemplate,) => void,
  onEdit: (template: ContractTemplate,) => void
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
import { ContractTemplate } from "@/types/contracts",
import { Button } from "@/components/ui/button",
import { Loader2, Edit, Trash, Star, StarOff } from 'lucide-react'
import { useContractTemplates } from "@/hooks/useContractTemplates",
import { Card, CardContent } from "@/components/ui/card",
import { Separator } from "@/components/ui/separator",
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
import { useAuth } from "@/hooks/useAuth";
>>>>>>> // useRouter replaces the old useLocation hook from react-router
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
// useRouter replaces the old useLocation hook from react-router
>>>>>>> 
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useAuth } from "@/hooks/useAuth";
import { useAuth } from "@/hooks/useAuth",
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
// useRouter replaces the old useLocation hook from react-router

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  AlertDialog
  AlertDialogAction
  AlertDialogCancel
  AlertDialogContent
  AlertDialogDescription
  AlertDialogFooter
  AlertDialogHeader
  AlertDialogTitle} from "@/components/ui/alert-dialog"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { ContractTemplate } from "@/types/contracts"
import { Button } from "@/components/ui/button"
import { Loader2, Edit, Trash, Star, StarOff } from 'lucide-react'
import { useContractTemplates } from "@/hooks/useContractTemplates"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useAuth } from "@/hooks/useAuth"
// useRouter replaces the old useLocation hook from react-router
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle} from "@/components/ui/alert-dialog",
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useState } from "react"
interface TemplateListProps {
  templates: ContractTemplate[]
  isLoading: boolean
  onSelect: (template: ContractTemplate,) => void
  onEdit: (template: ContractTemplate,) => void

<<<<<<< HEAD
=======
}
export function TemplateList({
  templates;
  isLoading;
  onSelect;
  onEdit
}: TemplateListProps) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

  const [templateToDelete, setTemplateToDelete] = useState<string | null>(null)
  const { deleteTemplate, setDefaultTemplate } = useContractTemplates()
  const { user } = useAuth()
  const router = useRouter()
  const handleDeleteClick = (templateId: string,) => {
    setTemplateToDelete(templateId)
  }
  const handleDeleteConfirm = async () => {
    if (templateToDelete) {
      await deleteTemplate.mutateAsync(templateToDelete)
      setTemplateToDelete(null)
    }
  }
  const handleSetDefault = async (templateId: string,) => {
    if (!user) {
      const currentPath = router.asPath
      router.push(`/auth/login?returnTo=${encodeURIComponent(currentPath)}`)
      return;
    }
    await setDefaultTemplate.mutateAsync(templateId)
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
import { useAuth } from "@/hooks/useAuth",
// useRouter replaces the old useLocation hook from react-router
import { useRouter } from 'next/router',
========
// use_router replaces the old use_location hook from react - router;
import { use_router } from 'next / router';
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/contracts/templates/TemplateList.tsx
import {
  AlertDialog;
  AlertDialogAction;
  AlertDialogCancel;
  AlertDialogContent;
  AlertDialogDescription;
  AlertDialogFooter;
  AlertDialogHeader;
  AlertDialogTitle } from '@/components / ui / alert - dialog';
import { ContractTemplate  } from '@/types / contracts';
import { Button  } from '@/components / ui / button';
import { Loader2, Edit, Trash, Star, StarOff } from 'lucide-react';
import { useContractTemplates  } from '@/hooks / useContractTemplates';
import { Card, CardContent  } from '@/components / ui / card';
import { Separator  } from '@/components / ui / separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger  } from '@/components / ui / tooltip';
import { use_auth  } from '@/hooks / use_auth';
// use_router replaces the old use_location hook from react - router;
=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useAuth } from "@/hooks/useAuth",
// useRouter replaces the old useLocation hook from react-router
import { useRouter } from 'next/router',
import {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle} from "@/components/ui/alert-dialog",
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import { useState } from "react",
interface TemplateListProps {
  templates: ContractTemplate[],
  is_loading: boolean,
  on_select: (template: ContractTemplate, ) => void,
  on_edit: (template: ContractTemplate, ) => void;
}
export /**
 * TemplateList - Function description
 */
function TemplateList() {
  const [templateToDelete, setTemplateToDelete] = useState < string | null>(null);
  const { delete_template, setDefaultTemplate } = useContractTemplates ();
  const { user } = use_auth ();
  const router = use_router ();
  const handleDeleteClick = (template_id: string, ) =>: any {
    setTemplateToDelete (template_id);
<<<<<<<< HEAD:src/components/contracts/templates/TemplateList.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/contracts/templates/TemplateList.tsx
  }
  const handleDeleteConfirm = async () => {
    // Check condition
if ( {) {
  $2
}
      await delete_template.mutate_async (templateToDelete);
      setTemplateToDelete (null);
    }
  }
<<<<<<<< HEAD:src/components/contracts/templates/TemplateList.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/contracts/templates/TemplateList.tsx
  const handleSetDefault = async (template_id: string, ) => {
    // Check condition
if ( {) {
  $2
}
      const current_path = router.as_path,
      router.push (`/auth / login?return_to=${encodeURIComponent (current_path)}`);
      return;
<<<<<<<< HEAD:src/components/contracts/templates/TemplateList.tsx

    }
    await setDefaultTemplate.mutate_async (template_id);
  }


========
    }
    await setDefaultTemplate.mutate_async (template_id);
  }
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/contracts/templates/TemplateList.tsx
// useRouter replaces the old useLocation hook from react-router;
import { useRouter } from 'next/router';
import {;
  AlertDialog;
  AlertDialogAction;
  AlertDialogCancel;
  AlertDialogContent;
  AlertDialogDescription;
  AlertDialogFooter;
  AlertDialogHeader;
  AlertDialogTitle} from "@/components/ui/alert-dialog";
import { ContractTemplate } from "@/types/contracts";
import { Button } from "@/components/ui/button";
import { Loader2, Edit, Trash, Star, StarOff } from 'lucide-react';
import { useContractTemplates } from "@/hooks/useContractTemplates";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useAuth } from "@/hooks/useAuth";
// useRouter replaces the old useLocation hook from react-router;
import { useRouter } from 'next/router';
import {;
  AlertDialog,;
  AlertDialogAction,;
  AlertDialogCancel,;
  AlertDialogContent,;
  AlertDialogDescription,;
  AlertDialogFooter,;
  AlertDialogHeader,;
  AlertDialogTitle} from "@/components/ui/alert-dialog",;
import { useState } from "react";
interface TemplateListProps {;
  templates: ContractTemplate[],;
  isLoading: boolean,;
  onSelect: (template: ContractTemplate,) => void,;
  onEdit: (template: ContractTemplate,) => void;
}
export function TemplateList(): any ({;
  templates;
  isLoading;
  onSelect;
  onEdit;
}: TemplateListProps) {;
  const [templateToDelete, setTemplateToDelete] = useState<string | null>(null);
  const { deleteTemplate, setDefaultTemplate } = useContractTemplates();
  const { user } = useAuth();
  const router = useRouter();
  const handleDeleteClick = (templateId: string,) => {;
    setTemplateToDelete(templateId);
  };
  const handleDeleteConfirm = async () => {;
    if (templateToDelete) {;
      await deleteTemplate && deleteTemplate.mutateAsync(templateToDelete);
      setTemplateToDelete(null);
    }
  };
  const handleSetDefault = async (templateId: string,) => {;
    if (!user) {;
      const currentPath = router && router.asPath,;
      router && router.push(`/auth/login?returnTo=${encodeURIComponent(currentPath)}`);
      return;
    }
<<<<<<<< HEAD:src/components/contracts/templates/TemplateList.tsx
    await setDefaultTemplate.mutateAsync(templateId)
  },
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>>   if (isLoading) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  if (isLoading) {
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>     return (
========
    await setDefaultTemplate && setDefaultTemplate.mutateAsync(templateId);
  };
<<<<<<< HEAD
  if (isLoading) {;
=======

  if (isLoading) {;


  if (isLoading) {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
    return (
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/contracts/templates/TemplateList.tsx
      <div className="flex justify-center items-center py-8">;
        <Loader2 className="h-8 w-8 animate-spin text-zion-purple" />;
      </div>;
    );
  }
<<<<<<<< HEAD:src/components/contracts/templates/TemplateList.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/contracts/templates/TemplateList.tsx
  if (!templates && templates.length) {;
    return (
      <div className="text-center py-8">;
        <p className="text-muted-foreground">No templates found.</p>;
        <p className="text-sm text-muted-foreground">Save a contract as a template to reuse it later.</p>;
      </div>;
    );
<<<<<<<< HEAD:src/components/contracts/templates/TemplateList.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/contracts/templates/TemplateList.tsx
  }
  return (
    <div className="space-y-3">;
      {templates && templates.map((template,) => (;
        <Card key={template && template.id} className={template && template.is_default ? "border-zion-purple" : ""}>;
=======

=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useState } from "react",
interface TemplateListProps {
  templates: ContractTemplate[],
  isLoading: boolean,
  onSelect: (template: ContractTemplate) => void,
  onEdit: (template: ContractTemplate) => void
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { ContractTemplate } from "@/types/contracts",;
import { Button } from "@/components/ui/button",;
import { Loader2, Edit, Trash, Star, StarOff } from 'lucide-react';
import { useContractTemplates } from "@/hooks/useContractTemplates",;
import { Card, CardContent } from "@/components/ui/card",;
import { Separator } from "@/components/ui/separator",;
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip",;
import { useAuth } from "@/hooks/useAuth",;
// useRouter replaces the old useLocation hook from react-router;
import { useRouter } from 'next/router',;
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
=======
}: TemplateListProps) {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const [templateToDelete, setTemplateToDelete] = useState<string | null>(null),;
  const { deleteTemplate, setDefaultTemplate } = useContractTemplates(),;
  const { user } = useAuth(),;
  const router = useRouter(),;
<<<<<<< HEAD
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
    if (!user) {;
      const currentPath = router.asPath,;
      router.push(`/auth/login?returnTo=${encodeURIComponent(currentPath)}`),;
      return,;
    }
    await setDefaultTemplate.mutateAsync(templateId),;
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
      <div className="text-center py-8">;
        <p className="text-muted-foreground">No templates found.</p>;
        <p className="text-sm text-muted-foreground">Save a contract as a template to reuse it later.</p>;
      </div>;
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
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/contracts/templates/TemplateList.tsx
=======
  const handleDeleteClick = (templateId: string) => {;
    setTemplateToDelete(templateId);
  },;
  const handleDeleteConfirm = async () => {;
    if (templateToDelete) {;
      await deleteTemplate.mutateAsync(templateToDelete),;
      setTemplateToDelete(null);
    }
  },;
  const handleSetDefault = async (templateId: string) => {;
    if (!user) {;
      const currentPath = router.asPath,;
      router.push(`/auth/login?returnTo=${encodeURIComponent(currentPath)}`);
      return;
    }
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>               <div className="flex items-center gap-2">
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              <div className="flex items-center gap-2">
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/contracts/templates/TemplateList.tsx
=======


              


              <div className="flex items-center gap-2">
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                </div>;
                <p className="text-xs text-muted-foreground">;
                  Last updated: {new Date(template && template.updated_at).toLocaleDateString()}
                </p>;
              </div>;
              <div className="flex items-center gap-2">;
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/contracts/templates/TemplateList.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>>                 <Button
========
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                <Button
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/contracts/templates/TemplateList.tsx
                  variant="ghost"
                  size="icon"
                  onClick = {() => onEdit(template),}
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
                <Button;
                  variant="ghost";
                  size="icon";
                  onClick={() => onEdit(template)}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  aria-label="Edit template";
                >;
                  <Edit className="h-4 w-4" />;
                </Button>;
<<<<<<< HEAD
                {!template && template.is_default ? (;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger asChild>;
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick = {(,) => handleSetDefault(template && template.id),}
=======
                {!template.is_default ? (;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger asChild>;
                        <Button;
                          variant="ghost";
                          size="icon";
                          onClick={() => handleSetDefault(template.id)}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                          aria-label="Set as default";
                        >;
                          <Star className="h-4 w-4" />;
                        </Button>;
                      </TooltipTrigger>;
                      {!user && (;
                        <TooltipContent>;
                          Please log in to use this feature;
                        </TooltipContent>;
                      )}
                    </Tooltip>;
                  </TooltipProvider>;
<<<<<<< HEAD
                ) : (;
=======
                ) :(;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  <Button variant="ghost" size="icon" disabled aria-label="Default template">;
                    <StarOff className="h-4 w-4" />;
                  </Button>;
                )}
<<<<<<< HEAD
                <Button
                  variant="ghost"
                  size="icon"
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/contracts/templates/TemplateList.tsx
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onEdit(template)}
                  aria-label="Edit template"
                >
                  <Edit className="h-4 w-4" />
                </Button>
                {!template.is_default ? (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleSetDefault(template.id)}
                          aria-label="Set as default"
                        >
                          <Star className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      {!user && (
                        <TooltipContent>
                          Please log in to use this feature
                        </TooltipContent>
                      )}
                    </Tooltip>
                  </TooltipProvider>
                ) : (
                  <Button variant="ghost" size="icon" disabled aria-label="Default template">
                    <StarOff className="h-4 w-4" />
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="icon"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  onClick={() => handleDeleteClick(template.id)}
                  aria-label="Delete template"
                >
                  <Trash className="h-4 w-4 text-destructive" />
                </Button>
              </div>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======



            
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            <Separator className="my-3" />

            <Button 
              onClick={() => onSelect(template)} 
              variant="outline" 
<<<<<<< HEAD

=======
            <Button
              onClick = {() => onSelect(template),}
              variant="outline"
            
            <Separator className="my-3" />
            
>>>>>>>             <Button 
              onClick={() => onSelect(template)} 
              variant="outline" 
>>>>>>>               className="w-full"
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              className="w-full"
>>>>>>>             >
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            <Separator className="my-3" />
            <Button
              onClick = {() => onSelect(template),}
              variant="outline"
            
            <Separator className="my-3" />
            
            <Button 
              onClick={() => onSelect(template)} 
              variant="outline" 
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
              className="w-full"
            >
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              Use This Template
            </Button>
          </CardContent>
        </Card>
      ))}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
      
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
      
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
              onClick = {handleDeleteConfirm,}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
const handleSetDefault = async (templateId: string) => {
  if (!user) {
  const currentPath = router.asPath
router.push (`/auth/login?returnTo=$ {
  encodeURIComponent (currentPath)
}`)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
return
}await setDefaultTemplate.mutateAsync (templateId)
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
return
}await setDefaultTemplate.mutateAsync (templateId)
return;
}await setDefaultTemplate.mutateAsync (templateId) 
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
<CardContent className="p-4"> <div className="flex items-center justify-between"> <div className="space-y-1"> <div className="flex items-center gap-2"> <h3 className="font-medium"> {
  template.title
}</h3> {"
  template.is default && (<span className="bg-zion-purple/10 text-zion-purple text-xs px-2 py-0.5 rounded-full">Default</span>) "
}</div> <p className="text-xs text-muted-foreground"> Last updated: {
  new Date (template.updated at) .toLocaleDateString () "
}</p> </div> <div className="flex items-center gap-2" > <Button > <Edit className="h-4 w-4" /> </Button> {"
  !template.is default ? (<TooltipProvider> <Tooltip> <TooltipTrigger asChild> <Button variant="ghost" size="icon" onClick={
  () => handleSetDefault (template.id) "
}aria-label="Set as default" > <Star className="h-4 w-4" /> </Button> </TooltipTrigger> {
  !user && (<TooltipContent> Please log in to use this feature </TooltipContent>) "
}</Tooltip> </TooltipProvider>) : (<Button variant="ghost" size="icon" disabled aria-label="Default template"> <StarOff className="h-4 w-4" /> </Button>) "
}<Button > <Trash className="h-4 w-4 text-destructive" /> </Button> </div> </div> <Separator className="my-3" /> <Button className="w-full" > Use This Template </Button> </CardContent> </Card>) )
}<AlertDialog open= {
  !!templateToDelete
}onOpenChange= {
  () => setTemplateToDelete (null) "
}> <AlertDialogContent> <AlertDialogHeader> <AlertDialogTitle>Delete Template</AlertDialogTitle> <AlertDialogDescription> Are you sure you want to delete this template? This action cannot be undone. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel>Cancel</AlertDialogCancel> <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90" onClick={
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
  handleDeleteConfirm
}> Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </div>)
}'"}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
;

========
                  onClick = {() => handleDeleteClick(template && template.id),}
=======
                <Button;
                  variant="ghost";
                  size="icon";
                  onClick={() => handleDeleteClick(template.id)}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  aria-label="Delete template";
                >;
                  <Trash className="h-4 w-4 text-destructive" />;
                </Button>;
              </div>;
            </div>;
<<<<<<< HEAD
            <Separator className="my-3" />;
            <Button
              onClick = {() => onSelect(template),}
=======
            ;
            <Separator className="my-3" />;
            ;
            <Button ;
              onClick={() => onSelect(template)} ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              variant="outline" ;
              className="w-full";
            >;
              Use This Template;
            </Button>;
          </CardContent>;
        </Card>;
      ))}
<<<<<<< HEAD
<<<<<<< HEAD
=======
      ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/contracts/templates/TemplateList.tsx
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  handleDeleteConfirm
}> Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </div>)
}'"}
  handleDeleteConfirm ;
}> Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </div>) ;
}'"};
=======


  handleDeleteConfirm ;
}> Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </div>) ;
}'"};

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <AlertDialog open={!!templateToDelete} onOpenChange={() => setTemplateToDelete(null)}>;
        <AlertDialogContent>;
          <AlertDialogHeader>;
            <AlertDialogTitle>Delete Template</AlertDialogTitle>;
            <AlertDialogDescription>;
              Are you sure you want to delete this template? This action cannot be undone.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;
            <AlertDialogCancel>Cancel</AlertDialogCancel>;
<<<<<<< HEAD
<<<<<<< HEAD
            <AlertDialogAction
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick = {handleDeleteConfirm,}>;
=======
            <AlertDialogAction ;
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90";
              onClick={handleDeleteConfirm}
            >;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
            <AlertDialogAction;
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90";
              onClick={handleDeleteConfirm}
            >;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              Delete;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;
    </div>;
<<<<<<< HEAD
<<<<<<< HEAD
  );
<<<<<<<< HEAD:src/components/contracts/templates/TemplateList.tsx


<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
========
};
const handleSetDefault = async (templateId: string) => {;
  if (!user) {;
  const currentPath = router && router.asPath;
router && router.push (`/auth/login?returnTo=$ {;
  encodeURIComponent (currentPath) ;
}`);
return ;
}await setDefaultTemplate && setDefaultTemplate.mutateAsync (templateId) ;
};
<CardContent className="p-4"> <div className="flex items-center justify-between"> <div className="space-y-1"> <div className="flex items-center gap-2"> <h3 className="font-medium"> {;
  template && template.title ;
}</h3> {";
  template && template.is default && (<span className="bg-zion-purple/10 text-zion-purple text-xs px-2 py-0 && 0.5 rounded-full">Default</span>) ";
}</div> <p className="text-xs text-muted-foreground"> Last updated: {;
  new Date (template && template.updated at) .toLocaleDateString () ";
}</p> </div> <div className="flex items-center gap-2" > <Button > <Edit className="h-4 w-4" /> </Button> {";
  !template && template.is default ? (<TooltipProvider> <Tooltip> <TooltipTrigger asChild> <Buttonvariant="ghost" size="icon" onClick={
  () => handleSetDefault (template && template.id) ";
=======
  ),; //useRouter replaces the old useLocation hook from react-router import {;
  {;
  {;
  useRouter ;
}from 'next/router';
import {;
  AlertDialog;
AlertDialogAction;
AlertDialogCancel;
AlertDialogContent;
AlertDialogDescription;
AlertDialogFooter;
AlertDialogHeader;
interface TemplateListProps {;
  templates: ContractTemplate[];
isLoading: boolean;
onSelect: (template: ContractTemplate) => void;
onEdit: (template: ContractTemplate) => void ;
}export function TemplateList ({;
  templates;
isLoading;
onSelect;
onEdit ;
}: TemplateListProps) {;
  const [templateToDelete,  setTemplateToDelete] = useState<string | null> (null);
const {;
  deleteTemplate, setDefaultTemplate ;
}= useContractTemplates ();
const {;
  user ;
}= useAuth ();
const router = useRouter ();
const handleDeleteClick = (templateId: string) => {;
  setTemplateToDelete (templateId) ;
};
const handleDeleteConfirm = async () => {;
  if (templateToDelete) {;
  await deleteTemplate.mutateAsync (templateToDelete);
setTemplateToDelete (null) ;
}
};
const handleSetDefault = async (templateId: string) => {;
  if (!user) {;
  const currentPath = router.asPath;
router.push (`/auth/login?returnTo=$ {;
  encodeURIComponent (currentPath) ;
}`);
return ;
}await setDefaultTemplate.mutateAsync (templateId) ;
};
<CardContent className="p-4"> <div className="flex items-center justify-between"> <div className="space-y-1"> <div className="flex items-center gap-2"> <h3 className="font-medium"> {;
  template.title ;
}</h3> {";
  template.is default && (<span className="bg-zion-purple/10 text-zion-purple text-xs px-2 py-0.5 rounded-full">Default</span>) ";
}</div> <p className="text-xs text-muted-foreground"> Last updated: {;
  new Date (template.updated at) .toLocaleDateString () ";
}</p> </div> <div className="flex items-center gap-2" > <Button > <Edit className="h-4 w-4" /> </Button> {";
  !template.is default ? (<TooltipProvider> <Tooltip> <TooltipTrigger asChild> <Button variant="ghost" size="icon" onClick={;
  () => handleSetDefault (template.id) ";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}aria-label="Set as default" > <Star className="h-4 w-4" /> </Button> </TooltipTrigger> {;
  !user && (<TooltipContent> Please log in to use this feature </TooltipContent>) ";
}</Tooltip> </TooltipProvider>) : (<Button variant="ghost" size="icon" disabled aria-label="Default template"> <StarOff className="h-4 w-4" /> </Button>) ";
}<Button > <Trash className="h-4 w-4 text-destructive" /> </Button> </div> </div> <Separator className="my-3" /> <Button className="w-full" > Use This Template </Button> </CardContent> </Card>) ) ;
<<<<<<< HEAD
}<AlertDialogopen= {
  !!templateToDelete 
}onOpenChange= {
  () => setTemplateToDelete (null) ";
}> <AlertDialogContent> <AlertDialogHeader> <AlertDialogTitle>Delete Template</AlertDialogTitle> <AlertDialogDescription> Are you sure you want to delete this template? This action cannot be undone. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel>Cancel</AlertDialogCancel> <AlertDialogActionclassName="bg-destructive text-destructive-foreground hover:bg-destructive/90" onClick={
  handleDeleteConfirm 
}> Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </div>) ;
}'"}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/contracts/templates/TemplateList.tsx
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
      {templates.map ((template, ) => (
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
                <Button;
                  variant="ghost";
                  size="icon";
                  on_click = {() => on_edit (template), }
                  aria - label="Edit template";
                >;
                  <Edit className="h - 4 w - 4" />;
                </Button>;
                {!template.is_default ? (
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger as_child>;
                        <Button;
                          variant="ghost";
                          size="icon";
                          on_click = {(, ) => handleSetDefault (template.id), }
                          aria - label="Set as default";
                        >;
                          <Star className="h - 4 w - 4" />;
                        </Button>;
                      </TooltipTrigger>;
                      {!user && (
                        <TooltipContent>;
                          Please log in to use this feature;
                        </TooltipContent>)}
                    </Tooltip>;
                  </TooltipProvider>) : (
                  <Button variant="ghost" size="icon" disabled aria - label="Default template">;
                    <StarOff className="h - 4 w - 4" />;
                  </Button>)}
                <Button;
                  variant="ghost";
                  size="icon";
                  on_click = {() => handleDeleteClick (template.id), }
                  aria - label="Delete template";
                >;
                  <Trash className="h - 4 w - 4 text - destructive" />;
                </Button>;
              </div>;
            </div>;
            <Separator className="my - 3" />;
            <Button;
              on_click = {() => on_select (template), }
              variant="outline";
              className="w - full";
            >;
              Use This Template;
            </Button>;
          </CardContent>;
        </Card>))}
      <AlertDialog open={!!templateToDelete} onOpenChange={() => setTemplateToDelete (null)}>;
        <AlertDialogContent>;
          <AlertDialogHeader>;
            <AlertDialogTitle > Delete Template</AlertDialogTitle>;
            <AlertDialogDescription>;
              Are you sure you want to delete this template? This action cannot be undone.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;
            <AlertDialogCancel > Cancel</AlertDialogCancel>;
            <AlertDialogAction;
              className="bg - destructive text - destructive - foreground hover:bg - destructive / 90";
              on_click = {handleDeleteConfirm, }
            >;
              Delete;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;
    </div>);
}
const handleSetDefault = async (template_id: string) => {
  // Check condition
if ( {) {
  $2
}
  const current_path = router.as_path;
router.push (`/auth / login?return_to=$ {
  encodeURIComponent (current_path);
}`);
return;
}await setDefaultTemplate.mutate_async (template_id);
}
<CardContent className="p - 4"> <div className="flex items - center justify - between"> <div className="space - y-1"> <div className="flex items - center gap - 2"> <h3 className="font - medium"> {
  template.title;
}</h3> {";
  template.is default && (<span className="bg - zion - purple / 10 text - zion - purple text - xs px - 2 py - 0.5 rounded - full">Default</span>) ";
}</div> <p className="text - xs text - muted - foreground"> Last updated: {
  new Date (template.updated at) .toLocaleDateString () ";
}</p> </div> <div className="flex items - center gap - 2" > <Button > <Edit className="h - 4 w - 4" /> </Button> {";
  !template.is default ? (<TooltipProvider> <Tooltip> <TooltipTrigger as_child> <Button variant="ghost" size="icon" on_click={
  () => handleSetDefault (template.id) ";
}aria - label="Set as default" > <Star className="h - 4 w - 4" /> </Button> </TooltipTrigger> {
  !user && (<TooltipContent> Please log in to use this feature </TooltipContent>) ";
}</Tooltip> </TooltipProvider>) : (<Button variant="ghost" size="icon" disabled aria - label="Default template"> <StarOff className="h - 4 w - 4" /> </Button>) ";
}<Button > <Trash className="h - 4 w - 4 text - destructive" /> </Button> </div> </div> <Separator className="my - 3" /> <Button className="w - full" > Use This Template </Button> </CardContent> </Card>) );
}<AlertDialog open= {
  !!templateToDelete;
}onOpenChange= {
  () => setTemplateToDelete (null) ";
}> <AlertDialogContent> <AlertDialogHeader> <AlertDialogTitle > Delete Template</AlertDialogTitle> <AlertDialogDescription> Are you sure you want to delete this template? This action cannot be undone. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel > Cancel</AlertDialogCancel> <AlertDialogAction className="bg - destructive text - destructive - foreground hover:bg - destructive / 90" on_click={
  handleDeleteConfirm;
}> Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </div>);
}'"}
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/contracts/templates/TemplateList.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> }
;
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
}<AlertDialog open= {;
  !!templateToDelete ;
}onOpenChange= {;
  () => setTemplateToDelete (null) ";
}> <AlertDialogContent> <AlertDialogHeader> <AlertDialogTitle>Delete Template</AlertDialogTitle> <AlertDialogDescription> Are you sure you want to delete this template? This action cannot be undone. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel>Cancel</AlertDialogCancel> <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90" onClick={;
  handleDeleteConfirm ;
}> Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </div>) ;
}'"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/contracts/templates/TemplateList.tsx
=======
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
}
;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
