import { ContractTemplate } from "@/types/contracts,
import { Button } from @/components/ui/button",
import { Loader2, Edit, Trash, Star, StarOff } from 'lucide-react
import { useContractTemplates } from "@/hooks/useContractTemplates,
import { Card, CardContent } from @/components/ui/card",
import { Separator } from "@/components/ui/separator,
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from @/components/ui/tooltip",

import { ContractTemplate } from "@/types/contracts",
import { Button } from "@/components/ui/button",
import { Loader2, Edit, Trash, Star, StarOff } from 'lucide-react'
import { useContractTemplates } from "@/hooks/useContractTemplates",
import { Card, CardContent } from "@/components/ui/card",
import { Separator } from "@/components/ui/separator",
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip",
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { Loader2, Edit, Trash, Star, StarOff } from lucide-react'



import { useAuth } from "@/hooks/useAuth,
=======
>>>>>>> merged-prs-20250907-203621

import { useAuth } from "@/hooks/useAuth",
>>>>>>> origin/chore/fix-lint-and-merge

// useRouter replaces the old useLocation hook from react-router

import { ContractTemplate } from @/types/contracts"
import { Button } from "@/components/ui/button
import { useContractTemplates } from @/hooks/useContractTemplates"
import { Card, CardContent } from "@/components/ui/card
import { Separator } from @/components/ui/separator"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip
import { useAuth } from @/hooks/useAuth"

// useRouter replaces the old useLocation hook from react-router
import { useRouter } from next/router',
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle} from "@/components/ui/alert-dialog,

<<<<<<< HEAD
=======
<<<<<<< HEAD



// use_router replaces the old use_location hook from react - router;
import { use_router } from 'next / router';
import { use_router } from 'next / router;

=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
// use_router replaces the old use_location hook from react - router;
import { use_router } from next / router';

import { ContractTemplate } from '@/types/contracts;
import { Button } from @/components/ui/button';
import { Loader2, Edit, Trash, Star, StarOff } from 'lucide-react;
import { useContractTemplates } from @/hooks/useContractTemplates';
import { Card, CardContent } from '@/components/ui/card;
import { Separator } from @/components/ui/separator';
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger} from '@/components/ui/tooltip;
import { useAuth } from @/hooks/useAuth';
// useRouter replaces the old useLocation hook from react-router
import { useRouter } from 'next/router';
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { use_router } from 'next/router';
import { use_router } from next/router';
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621


  AlertDialog;
  AlertDialogAction;
  AlertDialogCancel;
  AlertDialogContent;
  AlertDialogDescription;
  AlertDialogFooter;
  AlertDialogHeader;
<<<<<<< HEAD
=======
<<<<<<< HEAD
  AlertDialogTitle } from '@/components / ui / alert - dialog';
import { ContractTemplate  } from '@/types / contracts';
import { Button  } from '@/components / ui / button';
  AlertDialogTitle } from '@/components/ui/ alert - dialog';
import { ContractTemplate  } from '@/types/ contracts';
import { Button  } from '@/components/ui/ button';
import { Loader2, Edit, Trash, Star, StarOff } from 'lucide-react';
import { useContractTemplates  } from '@/hooks/ useContractTemplates';
import { Card, CardContent  } from '@/components/ui/ card';
import { Separator  } from '@/components/ui/ separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger  } from '@/components/ui/ tooltip';
import { use_auth  } from '@/hooks/ use_auth';
  AlertDialogTitle } from '@/components / ui / alert - dialog;
import { ContractTemplate  } from @/types / contracts';
import { Button  } from '@/components / ui / button;
  AlertDialogTitle } from @/components/ui/ alert - dialog';
import { ContractTemplate  } from '@/types/ contracts;
import { Button  } from @/components/ui/ button';
import { useContractTemplates  } from @/hooks/ useContractTemplates';
import { Card, CardContent  } from '@/components/ui/ card;
import { Separator  } from @/components/ui/ separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger  } from '@/components/ui/ tooltip;
import { use_auth  } from @/hooks/ use_auth';
// use_router replaces the old use_location hook from react - router;
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
import { useState } from "react"
import { useState } from react"
interface TemplateListProps {
  templates: ContractTemplate[]
  isLoading: boolean
  onSelect: (template: ContractTemplate,) => void
  onEdit: (template: ContractTemplate,) => void
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621

  templates: ContractTemplate[];
  isLoading: boolean;
  onSelect: (template: ContractTemplate) => void;
  onEdit: (template: ContractTemplate) => void

<<<<<<< HEAD
=======
<<<<<<< HEAD
  AlertDialogTitle} from "@/components/ui/alert-dialog",
import { useState } from "react";
  AlertDialogTitle} from "@/components/ui/alert-dialog,
import { useState } from react";
interface TemplateListProps {
  templates: ContractTemplate[];
  isLoading: boolean;
  onSelect: (template: ContractTemplate) => void;
  onEdit: (template: ContractTemplate) => void
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
}
export function TemplateList({
  templates,
  isLoading,
  onSelect,
  onEdit;
}: TemplateListProps) {
  const [templateToDelete, setTemplateToDelete] = useState<string | null>(null),
  const { deleteTemplate, setDefaultTemplate } = useContractTemplates(),
  const { user } = useAuth(),
  const router = useRouter(),
  const handleDeleteClick = (templateId: string) => {
    setTemplateToDelete(templateId);
  },
  const handleDeleteConfirm = async () => {
    if (templateToDelete) {
      await deleteTemplate.mutateAsync(templateToDelete),
      setTemplateToDelete(null);
    }
  },
  const handleSetDefault = async (templateId: string) => {
    if (!user) {
      const currentPath = router.asPath,
      router.push(`/auth/login?returnTo=${encodeURIComponent(currentPath)}`);
      return;
    }
  if (isLoading) {

    await setDefaultTemplate.mutateAsync(templateId)
  },

  const { deleteTemplate, setDefaultTemplate } = useContractTemplates();
  const { user } = useAuth();
  const router = null;

  if (isLoading) {
    return (

  if (!templates.length) {
    return (
      <div className="text-center py-8>
        <p className=text-muted-foreground">No templates found.</p>
        <p className="text-sm text-muted-foreground>Save a contract as a template to reuse it later.</p>
      </div>
    )
  }

  return (
    <div className=space-y-3">
      {templates.map((template) => (
        <Card key={template.id} className={template.is_default ? "border-zion-purple : "}>
          <CardContent className="p-4>
            <div className=flex items-center justify-between">
              <div className="space-y-1>
                <div className=flex items-center gap-2">
                  <h3 className="font-medium>{template.title}</h3>
                  {template.is_default && (
                    <span className=bg-zion-purple/10 text-zion-purple text-xs px-2 py-0.5 rounded-full">Default</span>
                  )}

import { useState } from "react;
interface TemplateListProps {,
  AlertDialogTitle} from @/components/ui/alert-dialog","
import { useState } from react";"
pr-12325
interface TemplateListProps {
  templates: ContractTemplate[],
  isLoading: boolean,
  onSelect: (template: ContractTemplate,) => void,
  onEdit: (template: ContractTemplate,) => void;
}
pr-12325

export function TemplateList(): any ({
  templates;
  isLoading;
  onSelect;
<<<<<<< HEAD
=======
<<<<<<< HEAD
  onEdit
}: TemplateListProps) {
  AlertDialogTitle} from "@/components / ui / alert - dialog",
  AlertDialogTitle} from @/components / ui / alert - dialog,
  AlertDialogTitle} from "@/components/ui/ alert - dialog",
import { useState  } from './react;
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

  }
    // Check condition
if ( {) {
  $2
}
      await delete_template.mutate_async (templateToDelete);
      setTemplateToDelete (null);
    }
  }

  const handleSetDefault = async (template_id: string, ) => {
    // Check condition
if ( {) {
  $2
}
      const current_path = router.as_path,
      router.push (`/auth / login?return_to=${encodeURIComponent (current_path)}`);
      return;

    }
    await setDefaultTemplate.mutate_async (template_id);
  }


// useRouter replaces the old useLocation hook from react-router;
import { useRouter } from next/router';
import { ContractTemplate } from @/types/contracts,import { Button } from "@/components/ui/button",import { Loader2, Edit, Trash, Star, StarOff  } from 'lucide-react;
import { useContractTemplates } from @/hooks/useContractTemplates,import { Card, CardContent } from "@/components/ui/card",import { Separator } from @/components/ui/separator,import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip",import { useAuth } from @/hooks/useAuth,// useRouter replaces the old useLocation hook from react-router;
  AlertDialog;
  AlertDialogAction;
  AlertDialogCancel;
  AlertDialogContent;
  AlertDialogDescription;
  AlertDialogFooter;
  AlertDialogHeader;
  AlertDialogTitle} from "@/components/ui/alert-dialog";
import { ContractTemplate  } from @/types/contracts';
import { Button  } from '@/components/ui/button;
import { useContractTemplates  } from @/hooks/useContractTemplates';
import { Card, CardContent  } from '@/components/ui/card;
import { Separator  } from @/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger  } from '@/components/ui/tooltip;
import { useAuth  } from @/hooks/useAuth';
// useRouter replaces the old useLocation hook from react-router;
import { useRouter } from 'next/router';


  const [templateToDelete, setTemplateToDelete] = useState<string | null>(null)
  const { deleteTemplate, setDefaultTemplate } = useContractTemplates()
  const { user } = useAuth()
  const router = useRouter()
  const handleDeleteClick = (templateId: string,) => {
    setTemplateToDelete(templateId)
  }
    if (templateToDelete) {
      await deleteTemplate.mutateAsync(templateToDelete)
      setTemplateToDelete(null)
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
  onEdit;
}:,  TemplateListProps) {,
  const [templateToDelete, setTemplateToDelete] = useState<string | null>(null);
  const router = useRouter();
    setTemplateToDelete(templateId);
  }
    if (templateToDelete) {
      await deleteTemplate && deleteTemplate.mutateAsync(templateToDelete);
      setTemplateToDelete(null);
    }
  }
  const handleSetDefault = async (templateId: string,) => {
    if (!user) {
      const currentPath = router && router.asPath,
      router && router.push(`/auth/login?returnTo=${encodeURIComponent(currentPath)}`);`
      return;
    }
    await setDefaultTemplate && setDefaultTemplate.mutateAsync(templateId);
  }
  if (isLoading) {
  if (isLoading) {
    return (
      <div className=flex justify-center items-center py-8>;
        <Loader2 className="h-8 w-8 animate-spin text-zion-purple" />;
      </div>;
    );
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { useState } from "react",
import { useState } from react,
interface TemplateListProps {
  templates: ContractTemplate[],
  isLoading: boolean,
  onSelect: (template: ContractTemplate) => void,
  onEdit: (template: ContractTemplate) => void
import { ContractTemplate } from "@/types/contracts",
import { Button } from @/components/ui/button,
import { Loader2, Edit, Trash, Star, StarOff } from lucide-react';
import { useContractTemplates } from "@/hooks/useContractTemplates",
import { Card, CardContent } from @/components/ui/card,
import { Separator } from "@/components/ui/separator",
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from @/components/ui/tooltip,
import { useAuth } from "@/hooks/useAuth",
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
  const [templateToDelete, setTemplateToDelete] = useState<string | null>(null),
  const { deleteTemplate, setDefaultTemplate } = useContractTemplates();
  const { user } = useAuth();
  const router = null;
origin/cursor/automate-test-improve-and-merge-code-2533
  if (!templates && templates.length) {
=======
>>>>>>> merged-prs-20250907-203621
  if (!templates && templates.length) {;
>>>>>>> origin/chore/fix-lint-and-merge
    return (
      <div className="text-center py-8">;
        <p className=text-muted-foreground>No templates found.</p>;
        <p className="text-sm text-muted-foreground">Save a contract as a template to reuse it later.</p>;
      </div>;
    );
  }
  return (
    <div className=space-y-3>;
      {templates && templates.map((template,) => (;
        <Card key={template && template.id} className={template && template.is_default ? "border-zion-purple" : }>;
          <CardContent className="p-4">;
            <div className=flex items-center justify-between>;
              <div className="space-y-1">;
                <div className=flex items-center gap-2>;
                  <h3 className="font-medium">{template && template.title}</h3>;
                  {template && template.is_default && (;
                    <span className=bg-zion-purple/10 text-zion-purple text-xs px-2 py-0 && 0.5 rounded-full>Default</span>;
                  )}

              <div className="flex items-center gap-2">
                <Button
                  variant=ghost
                  size="icon"
                  onClick={() => onEdit(template)}
                  aria-label=Edit template
                >
                  <Edit className="h-4 w-4" />
                </Button>
                {!template.is_default ? (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant=ghost
                          size="icon"
                          onClick={() => handleSetDefault(template.id)}
                          aria-label=Set as default
                        >
                          <Star className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      {!user && (
                        <TooltipContent>
                          Please log in to use this feature
                        </TooltipContent>

                      )}

                )}

                <Button
                  variant=ghost"
                  size="icon
            <Separator className="my-3" />
            <Button
              onClick={() => onSelect(template)}
              variant=outline" "
              className=w-full"
import { useState } from "react,
interface TemplateListProps {
  templates: ContractTemplate[],
  isLoading: boolean,
  onSelect: (template: ContractTemplate) => void,
  onEdit: (template: ContractTemplate) => void;
}
export function TemplateList({
  templates,
  isLoading,
  onSelect,
  onEdit;
}: TemplateListProps) {
    setTemplateToDelete(templateId);
  },
    if (templateToDelete) {
      await deleteTemplate.mutateAsync(templateToDelete),
      setTemplateToDelete(null);
    }
  },
    if (!user) {
      router.push(`/auth/login?returnTo=${encodeURIComponent(currentPath)}`);
      return;
    }
    await setDefaultTemplate.mutateAsync(templateId)
  },

  if (isLoading) {
    return (
      <div className=flex justify-center items-center py-8">
        <Loader2 className="h-8 w-8 animate-spin text-zion-purple />
      </div>
    )
  }

  if (!templates.length) {
    return (
      <div className=text-center py-8">
        <p className="text-muted-foreground>No templates found.</p>
        <p className=text-sm text-muted-foreground">Save a contract as a template to reuse it later.</p>
      </div>
    )
  }

  return (
    <div className="space-y-3>
      {templates.map((template) => (
        <Card key={template.id} className={template.is_default ? border-zion-purple" : "}>
          <CardContent className=p-4">
            <div className="flex items-center justify-between>
              <div className=space-y-1">
                <div className="flex items-center gap-2>
                  <h3 className=font-medium">{template.title}</h3>
                  {template.is_default && (
                    <span className="bg-zion-purple/10 text-zion-purple text-xs px-2 py-0.5 rounded-full>Default</span>
                  )}
                </div>;
                <p className=text-xs text-muted-foreground">;
                  Last updated: {new Date(template.updated_at).toLocaleDateString()}
                </p>
              </div>
              <div className="flex items-center gap-2>
                <Button
                  variant="ghost"
                  size="icon"
<<<<<<< HEAD
=======
<<<<<<< HEAD
                  onClick={() => onEdit(template)}
                  aria-label=Edit template"
                >
                  <Edit className="h-4 w-4 />
                </Button>
                {!template.is_default ? (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant=ghost"
                          size="icon
                          onClick={() => handleSetDefault(template.id)}
                          aria-label=Set as default"
                        >
                          <Star className="h-4 w-4 />
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
                  <Button variant=ghost" size="icon disabled aria-label=Default template">
                    <StarOff className="h-4 w-4 />
                  </Button>

interface TemplateListProps {
  templates: ContractTemplate[],
  isLoading: boolean,
  onSelect: (template: ContractTemplate,) => void,
  onEdit: (template: ContractTemplate,) => void;
  AlertDialog,AlertDialogAction,AlertDialogCancel,AlertDialogContent,AlertDialogDescription,AlertDialogFooter,AlertDialogHeader,AlertDialogTitle} from "@/components/ui/alert-dialog,// use_router replaces the old use_location hook from react - router;
import { use_router  } from next / router';
import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger} from '@/components/ui/tooltip;
// useRouter replaces the old useLocation hook from react-router;
import { useRouter  } from next/router';
import { AlertDialog;
  AlertDialogAction;
  AlertDialogCancel;
  AlertDialogContent;
  AlertDialogDescription;
  AlertDialogFooter;
  AlertDialogHeader;AlertDialogTitle  } from '@/components / ui / alert - dialog;
import { ContractTemplate   } from @/types / contracts';
import { Button   } from '@/components / ui / button;
import { useContractTemplates   } from @/hooks / useContractTemplates';
import { Card, CardContent   } from '@/components / ui / card;
import { Separator   } from @/components / ui / separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger   } from '@/components / ui / tooltip;
import { use_auth   } from @/hooks / use_auth';
// use_router replaces the old use_location hook from react - router;
  AlertDialog,AlertDialogAction,AlertDialogCancel,AlertDialogContent,AlertDialogDescription,AlertDialogFooter,AlertDialogHeader,import { useState  } from 'react;
interface TemplateListProps  {templates: ContractTemplate[];
  isLoading: boolean;
  onSelect: (template: ContractTemplate,) => void;
  onEdit: (template: ContractTemplate,) => void;
  AlertDialogTitle} from @/components/ui/alert-dialog",interface TemplateListProps  {templates: ContractTemplate[];
  isLoading: boolean;
  onSelect: (template: ContractTemplate) => void;
  onEdit: (template: ContractTemplate) => void;
}
export function TemplateList() {const [templateToDelete, setTemplateToDelete] = useState<string | null>(null)const { deleteTemplate, setDefaultTemplate } = useContractTemplates()const { user } = useAuth()const router = useRouter()const handleDeleteClick = (templateId: string,) => {setTemplateToDelete(templateId)}
  const handleDeleteConfirm = async () => {if (templateToDelete) {await deleteTemplate.mutateAsync(templateToDelete)setTemplateToDelete(null)}
  }
  const handleSetDefault = async (templateId: string,) => {if (!user) {const currentPath = router.asPath;
      router.push(`/auth/login?returnTo=${encodeURIComponent(currentPath)}`)return;
    }
    await setDefaultTemplate.mutateAsync(templateId)}
import { useState } from "react,interface TemplateListProps  {templates: ContractTemplate[],isLoading: boolean,onSelect: (template: ContractTemplate) => void,onEdit: (template: ContractTemplate) => void;
// useRouter replaces the old useLocation hook from react-router;
import { useRouter } from next/router',AlertDialogTitle} from @/components / ui / alert - dialog",import { useState   } from './react;
interface TemplateListProps  {templates: ContractTemplate[],is_loading: boolean,on_select: (template: ContractTemplate, ) => void,on_edit: (template: ContractTemplate, ) => void;
}
export /**;
 * TemplateList - Function description;
 */;
  const handleDeleteConfirm = async () => {// Check condition;
if ( {) {$2;
}
      await delete_template.mutate_async (templateToDelete)setTemplateToDelete (null)}
  }const handleSetDefault = async (template_id: string, ) => {// Check condition;
if ( {) {$2;
}
      const current_path = router.as_path,router.push (`/auth / login?return_to=${encodeURIComponent (current_path)}`)return;}
    await setDefaultTemplate.mutate_async (template_id)}// useRouter replaces the old useLocation hook from react-router;
import {AlertDialog;
  AlertDialogAction;
  AlertDialogCancel;
  AlertDialogContent;
  AlertDialogDescription;
  AlertDialogFooter;
  AlertDialogHeader;
  AlertDialogTitle } from @/components/ui/alert-dialog';
// useRouter replaces the old useLocation hook from react-router;
import {AlertDialog,AlertDialogAction,AlertDialogCancel,AlertDialogContent,AlertDialogDescription,AlertDialogFooter,AlertDialogHeader,AlertDialogTitle} from "@/components/ui/alert-dialog,interface TemplateListProps  {templates: ContractTemplate[],isLoading: boolean,onSelect: (template: ContractTemplate) => void,onEdit: (template: ContractTemplate) => void;
}export function TemplateList() {const [templateToDelete, setTemplateToDelete] = useState<string | null>(null),const { deleteTemplate, setDefaultTemplate } = useContractTemplates(),const { user } = useAuth(),const router = useRouter(),const handleDeleteClick = (templateId: string) => {setTemplateToDelete(templateId)},const handleDeleteConfirm = async () => {if (templateToDelete) {await deleteTemplate.mutateAsync(templateToDelete),setTemplateToDelete(null)}
  },const handleSetDefault = async (templateId: string) => {if (!user) {const currentPath = router.asPath,router.push(`/auth/login?returnTo=${encodeURIComponent(currentPath)}`)return;
    }
  if (isLoading) {await setDefaultTemplate.mutateAsync(templateId)},const [templateToDelete, setTemplateToDelete] = useState<string | null>(null),const { deleteTemplate, setDefaultTemplate } = useContractTemplates()const { user } = useAuth()const router  = null;if (isLoading) {return (<div className=flex justify-center items-center py-8">;
        <Loader2 className="h-8 w-8 animate-spin text-zion-purple />;
      </div>;
    )}
  if (!templates.length) {return (<div className=text-center py-8">;
        <p className="text-muted-foreground>No templates found.</p>;
        <p className=text-sm text-muted-foreground">Save a contract as a template to reuse it later.</p>;
      </div>;
    )}
  return (<div className="space-y-3>;
      {templates.map((template) => (<Card key={template.id} className={template.is_default ? border-zion-purple" : "}>;
          <CardContent className=p-4">;
            <div className="flex items-center justify-between>;
              <div className=space-y-1">;
                <div className="flex items-center gap-2>;
                  <h3 className=font-medium">{template.title}</h3>;
                  {template.is_default && (<span className="bg-zion-purple/10 text-zion-purple text-xs px-2 py-0.5 rounded-full>Default</span>;
                  )}
                </div>;
                <p className=text-xs text-muted-foreground">;
                  Last updated: {new Date(template.updated_at).toLocaleDateString()}
                </p>;
              </div>;
              <div className="flex items-center gap-2>;
                <Button;
                  variant=ghost";
                  size="icon;
                  onClick={() => onEdit(template)}
                  aria-label=Edit template";
                >;
                  <Edit className="h-4 w-4 />;
                </Button>;
                {!template.is_default ? (<TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger asChild>;
                        <Button;
                          variant=ghost";
                          size="icon;
                          onClick={() => handleSetDefault(template.id)}
                          aria-label=Set as default";
                        >;
                          <Star className="h-4 w-4 />;
                        </Button>;
                      </TooltipTrigger>;
                      {!user && (<TooltipContent>Please log in to use this feature;
                        </TooltipContent>;
                      )}
                    </Tooltip>;
                  </TooltipProvider>;
                ) : (<Button variant=ghost" size="icon disabled aria-label=Default template">;
                    <StarOff className="h-4 w-4 />;
                  </Button>;

                )}
                <Button
                  variant=ghost"
                  size="icon



            
            <Separator className=my-3" />
            


=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621

            <Separator className="my-3 />

                  onClick={() => handleDeleteClick(template.id)}
                  aria-label=Delete template"
                >
                  <Trash className="h-4 w-4 text-destructive />
                </Button>
              </div>
            </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
            
            <Separator className=my-3" />
            
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621

            <Button 

              onClick={() => onSelect(template)} 
              variant="outline 
              className=w-full"
            >
              Use This Template
            </Button>
          </CardContent>
        </Card>
      ))}
<<<<<<< HEAD
=======
<<<<<<< HEAD



      


=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621

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
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90,
              onClick = {handleDeleteConfirm}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD


return;
}await setDefaultTemplate.mutateAsync (templateId) 



  )
}
  if (!user) {
  const currentPath = router.asPath
router.push (`/auth/login?returnTo=$ {
  encodeURIComponent (currentPath)
}`)
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621

}

<CardContent className="p-4"> <div className=flex items-center justify-between> <div className="space-y-1"> <div className=flex items-center gap-2> <h3 className="font-medium"> {

  template.title
}</h3> {
  template.is default && (<span className="bg-zion-purple/10 text-zion-purple text-xs px-2 py-0.5 rounded-full">Default</span>) 
}</div> <p className="text-xs text-muted-foreground"> Last updated: {,
  new Date (template.updated,  at) .toLocaleDateString () "
}</p> </div> <div className="flex items-center gap-2 > <Button > <Edit className=h-4 w-4" /> </Button> {"
  !template.is default ? (<TooltipProvider> <Tooltip> <TooltipTrigger asChild> <Button variant=ghost" size="icon onClick={
  () => handleSetDefault (template.id) ""
}aria-label=Set as default > <Star className="h-4 w-4" /> </Button> </TooltipTrigger> {
  !user && (<TooltipContent> Please log in to use this feature </TooltipContent>) "
}</Tooltip> </TooltipProvider>) : (<Button variant="ghost size=icon" disabled aria-label="Default template> <StarOff className=h-4 w-4" /> </Button>) "
}<Button > <Trash className=h-4 w-4 text-destructive" /> </Button> </div> </div> <Separator className="my-3 /> <Button className=w-full" > Use This Template </Button> </CardContent> </Card>) )"
}<AlertDialog open= {
  !!templateToDelete
}onOpenChange= {
<<<<<<< HEAD
=======
<<<<<<< HEAD
  () => setTemplateToDelete (null) 
}> <AlertDialogContent> <AlertDialogHeader> <AlertDialogTitle>Delete Template</AlertDialogTitle> <AlertDialogDescription> Are you sure you want to delete this template? This action cannot be undone. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel>Cancel</AlertDialogCancel> <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90" onClick={,
                  onClick = {() => handleDeleteClick(template && template.id)}
interface TemplateListProps  {templates: ContractTemplate[],isLoading: boolean,onSelect: (template: ContractTemplate,) => void,onEdit: (template: ContractTemplate,) => void;
}export function TemplateList(): any ({templates;
  isLoading;
  onSelect;
  onEdit;
}: TemplateListProps) {const [templateToDelete, setTemplateToDelete] = useState<string | null>(null)const { deleteTemplate, setDefaultTemplate } = useContractTemplates()const { user } = useAuth()const router  = useRouter()const handleDeleteClick = (templateId: string,) => {setTemplateToDelete(templateId)}const handleDeleteConfirm = async () => {if (templateToDelete) {await deleteTemplate && deleteTemplate.mutateAsync(templateToDelete)setTemplateToDelete(null)}
  }const handleSetDefault = async (templateId: string,) => {if (!user) {const currentPath = router && router.asPath,router && router.push(`/auth/login?returnTo=${encodeURIComponent(currentPath)}`)return;
    }
    await setDefaultTemplate && setDefaultTemplate.mutateAsync(templateId)}if (isLoading) {if (isLoading) {return (<div className=flex justify-center items-center py-8">;
        <Loader2 className="h-8 w-8 animate-spin text-zion-purple />;
      </div>;
    )}if (!templates && templates.length) {return (<div className=text-center py-8">;
        <p className="text-muted-foreground>No templates found.</p>;
        <p className=text-sm text-muted-foreground">Save a contract as a template to reuse it later.</p>;
      </div>;
    )}
  return (<div className="space-y-3>;
      {templates && templates.map((template,) => (<Card key={template && template.id} className={template && template.is_default ? border-zion-purple" : "}>;
          <CardContent className=p-4">;
            <div className="flex items-center justify-between>;
              <div className=space-y-1">;
                <div className="flex items-center gap-2>;
                  <h3 className=font-medium">{template && template.title}</h3>;
                  {template && template.is_default && (<span className="bg-zion-purple/10 text-zion-purple text-xs px-2 py-0 && 0.5 rounded-full>Default</span>;
                  )}<div className=flex items-center gap-2">;
                </div>;
                <p className="text-xs text-muted-foreground>;
                  Last updated: {new Date(template && template.updated_at).toLocaleDateString()}
                </p>;
              </div>;<div className=flex items-center gap-2">;
                <Button;
                  variant="ghost;
                  size=icon";
                  onClick = {() => onEdit(template)}
                  aria-label="Edit template;
                >;
                  <Edit className=h-4 w-4" />;
                </Button>;
                {!template && template.is_default ? (<TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger asChild>;
                        <Button;
                          variant="ghost;
                          size=icon";
                          onClick = {(,) => handleSetDefault(template && template.id)}
                          aria-label="Set as default;
                        >;
                          <Star className=h-4 w-4" />;
                        </Button>;
                      </TooltipTrigger>;
                      {!user && (<TooltipContent>Please log in to use this feature;
                        </TooltipContent>;
                      )}
                    </Tooltip>;
                  </TooltipProvider>;
                ) : (<Button variant="ghost size=icon" disabled aria-label="Default template>;
                    <StarOff className=h-4 w-4" />;
                  </Button>;)}
                <Button;
                  variant="ghost;
                  size=icon";
            <Separator className="my-3 />;
                  onClick={() => handleDeleteClick(template.id)}
                  aria-label=Delete template";
=======
>>>>>>> merged-prs-20250907-203621
  () => setTemplateToDelete (null) ""
}> <AlertDialogContent> <AlertDialogHeader> <AlertDialogTitle>Delete Template</AlertDialogTitle> <AlertDialogDescription> Are you sure you want to delete this template? This action cannot be undone. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel>Cancel</AlertDialogCancel> <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90" onClick={",
                  onClick = {() => handleDeleteClick(template && template.id),}
                  aria-label="Delete template";
>>>>>>> origin/chore/fix-lint-and-merge
                >;
                  <Trash className="h-4 w-4 text-destructive />;
                </Button>;
              </div>;
            </div>;
            <Separator className="my-3" />;
<<<<<<< HEAD
=======
<<<<<<< HEAD
            <Button;
              onClick={() => onSelect(template)}variant="outline;
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
            <Button
              onClick = {() => onSelect(template)}
              variant=outline" ;
              className="w-full;
            >;
              Use This Template;
            </Button>;
          </CardContent>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
        </Card>;
      ))}


  handleDeleteConfirm ;
}> Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </div>) ;
}'}


;
      <AlertDialog open={!!templateToDelete} onOpenChange={() => setTemplateToDelete(null)}>;
      ))}<AlertDialog open={!!templateToDelete} onOpenChange={() => setTemplateToDelete(null)}>;
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621

        </Card>;
      ))}
  handleDeleteConfirm ;
}> Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </div>) ;
}"}

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
=======
<<<<<<< HEAD
            <AlertDialogAction
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90
              onClick = {handleDeleteConfirm}>;

            <AlertDialogAction;
              className=bg-destructive text-destructive-foreground hover:bg-destructive/90";
              onClick = {handleDeleteConfirm}
            >;
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621

            <AlertDialogAction;
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90;
              onClick={handleDeleteConfirm}
            >;

            <AlertDialogAction
              className=bg-destructive text-destructive-foreground hover:bg-destructive/90"",
              onClick = {handleDeleteConfirm}>;

              Delete;

            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;
    </div>;
  );
<<<<<<< HEAD
=======
<<<<<<< HEAD


=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621

  // Check condition
if ( {) {
  $2
}
    return (
      <div className="flex justify - center items - center py - 8">;
<<<<<<< HEAD
=======
<<<<<<< HEAD
  )}
const handleSetDefault = async (templateId: string) => {if (!user) {const currentPath = router.asPath;
router.push (`/auth/login?returnTo=$ {encodeURIComponent (currentPath)}`)return;
}await setDefaultTemplate.mutateAsync (templateId)}
<CardContent className="p-4"> <div className=flex items-center justify-between> <div className="space-y-1"> <div className=flex items-center gap-2> <h3 className="font-medium"> {template.title;
}</h3> {;
  template.is default && (<span className=bg-zion-purple/10 text-zion-purple text-xs px-2 py-0.5 rounded-full">Default</span>) ";
}</div> <p className=text-xs text-muted-foreground> Last updated: {new Date (template.updated at) .toLocaleDateString () ";
}</p> </div> <div className="flex items-center gap-2 > <Button > <Edit className=h-4 w-4" /> </Button> {";
  !template.is default ? (<TooltipProvider> <Tooltip> <TooltipTrigger asChild> <Button variant=ghost size="icon" onClick={() => handleSetDefault (template.id) ;
}aria-label=Set as default" > <Star className="h-4 w-4 /> </Button> </TooltipTrigger> {!user && (<TooltipContent> Please log in to use this feature </TooltipContent>) ;
}</Tooltip> </TooltipProvider>) : (<Button variant="ghost" size=icon disabled aria-label="Default template"> <StarOff className=h-4 w-4 /> </Button>) ";
}<Button > <Trash className="h-4 w-4 text-destructive /> </Button> </div> </div> <Separator className=my-3" /> <Button className="w-full > Use This Template </Button> </CardContent> </Card>) )}<AlertDialog open= {!!templateToDelete;
}onOpenChange= {() => setTemplateToDelete (null) ;
}> <AlertDialogContent> <AlertDialogHeader> <AlertDialogTitle>Delete Template</AlertDialogTitle> <AlertDialogDescription> Are you sure you want to delete this template? This action cannot be undone. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel>Cancel</AlertDialogCancel> <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90" onClick={onClick = {() => handleDeleteClick(template && template.id)}
                  aria-label=Delete template;
                >;
                  <Trash className="h-4 w-4 text-destructive" />;
                </Button>;
              </div>;
            </div>;<Separator className=my-3 />;<Button;
              onClick = {() => onSelect(template)}
              variant="outline" ;
              className=w-full;
            >;
              Use This Template;
            </Button>;
          </CardContent>;</Card>;
      ))}handleDeleteConfirm ;
}> Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </div>)}"}
      <AlertDialog open={!!templateToDelete} onOpenChange={() => setTemplateToDelete(null)}>;
        <AlertDialogContent>;
          <AlertDialogHeader>;
            <AlertDialogTitle>Delete Template</AlertDialogTitle>;
            <AlertDialogDescription>Are you sure you want to delete this template? This action cannot be undone.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;
            <AlertDialogCancel>Cancel</AlertDialogCancel>;<AlertDialogAction;
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90;
              onClick={handleDeleteConfirm}
            >;<AlertDialogAction;
              className=bg-destructive text-destructive-foreground hover:bg-destructive/90";
              onClick = {handleDeleteConfirm}>;Delete;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;
    </div>;
  )}// Check condition;
if ( {) {$2;
}
    return (<div className="flex justify - center items - center py - 8>;
        <Loader2 className=h - 8 w - 8 animate - spin text - zion - purple" />;
      </div>)}
  // Check condition;
if ( {) {$2;
}
    return (<div className="text - center py - 8>;
        <p className=text - muted - foreground">No templates found.</p>;
        <p className="text - sm text - muted - foreground>Save a contract as a template to reuse it later.</p>;
      </div>)}
  return (<div className=space - y-3">;
      {templates.map ((template, ) => (<Card key={template.id} className={template.is_default ? "border - zion - purple : "}>;
        <Loader2 className="h - 8 w - 8 animate - spin text - zion - purple />;
=======
>>>>>>> merged-prs-20250907-203621
        <Loader2 className="h - 8 w - 8 animate - spin text - zion - purple" />;
>>>>>>> origin/chore/fix-lint-and-merge
      </div>);
  }
  // Check condition
if ( {) {
  $2
}
    return (
      <div className=text - center py - 8">;
        <p className="text - muted - foreground>No templates found.</p>;
        <p className=text - sm text - muted - foreground">Save a contract as a template to reuse it later.</p>;
      </div>);
  }
  return (
    <div className="space - y-3>;
      {templates.map ((template, ) => (
        <Card key={template.id} className={template.is_default ? "border - zion - purple" : ""}>;
          <CardContent className="p - 4">;
            <div className="flex items - center justify - between">;
              <div className="space - y-1">;
                <div className="flex items - center gap - 2">;
                  <h3 className="font - medium">{template.title}</h3>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
                  {template.is_default && (<span className="bg - zion - purple / 10 text - zion - purple text - xs px - 2 py - 0.5 rounded - full">Default</span>)}
                  {template.is_default && (<span className="bg - zion - purple / 10 text - zion - purple text - xs px - 2 py - 0.5 rounded - full>Default</span>)}
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
                  {template.is_default && (
                    <span className=bg - zion - purple / 10 text - zion - purple text - xs px - 2 py - 0.5 rounded - full">Default</span>)}"
                </div>;
                <p className=text - xs text - muted - foreground>;
                  Last updated: {new Date (template.updated_at).toLocaleDateString ()}
                </p>;
              </div>;
              <div className="flex items - center gap - 2">;
                <Button;
                  variant=ghost;
                  size="icon";
<<<<<<< HEAD
=======
<<<<<<< HEAD
                  on_click = {() => on_edit (template) }
                  on_click = {() => on_edit (template)}
                  aria - label=Edit template;
                >;
                  <Edit className="h - 4 w - 4" />;
                </Button>;
                {!template.is_default ? (<TooltipProvider>;
=======
>>>>>>> merged-prs-20250907-203621
                  on_click = {() => on_edit (template), }
                  aria - label="Edit template";
                >;
                  <Edit className="h - 4 w - 4" />;
                </Button>;
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
                {!template.is_default ? (
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger as_child>;
                        <Button;
                          variant=ghost;
                          size="icon";
<<<<<<< HEAD
=======
<<<<<<< HEAD
                          on_click = {(, ) => handleSetDefault (template.id) }
                          on_click = {(, ) => handleSetDefault (template.id)}
                          aria - label=Set as default;
=======
>>>>>>> merged-prs-20250907-203621
                          on_click = {(, ) => handleSetDefault (template.id), }
                          aria - label="Set as default";
>>>>>>> origin/chore/fix-lint-and-merge
                        >;
                          <Star className="h - 4 w - 4" />;
                        </Button>;
                      </TooltipTrigger>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
                      {!user && (<TooltipContent>Please log in to use this feature;
                        </TooltipContent>)}
                    </Tooltip>;
                  </TooltipProvider>) : (<Button variant=ghost size="icon" disabled aria - label=Default template>;
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
                      {!user && (
                        <TooltipContent>;
                          Please log in to use this feature;
                        </TooltipContent>)}
                    </Tooltip>;
                  </TooltipProvider>) : (
                  <Button variant="ghost" size=icon disabled aria - label="Default template">;
                    <StarOff className=h - 4 w - 4 />;
                  </Button>)}
                <Button;
                  variant="ghost";
                  size="icon";
<<<<<<< HEAD
=======
<<<<<<< HEAD
                  on_click = {() => handleDeleteClick (template.id) }
                  on_click = {() => handleDeleteClick (template.id)}
=======
>>>>>>> merged-prs-20250907-203621
                  on_click = {() => handleDeleteClick (template.id), }
>>>>>>> origin/chore/fix-lint-and-merge
                  aria - label="Delete template";
                >;
                  <Trash className=h - 4 w - 4 text - destructive />;
                </Button>;
              </div>;
            </div>;
            <Separator className="my - 3" />;
            <Button;
<<<<<<< HEAD
=======
<<<<<<< HEAD
              on_click = {() => on_select (template) }
              on_click = {() => on_select (template)}
              variant=outline;
=======
>>>>>>> merged-prs-20250907-203621
              on_click = {() => on_select (template), }
              variant="outline";
>>>>>>> origin/chore/fix-lint-and-merge
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
            <AlertDialogDescription>Are you sure you want to delete this template? This action cannot be undone.;
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
            <AlertDialogDescription>;
              Are you sure you want to delete this template? This action cannot be undone.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;
            <AlertDialogCancel > Cancel</AlertDialogCancel>;
            <AlertDialogAction;
<<<<<<< HEAD
=======
<<<<<<< HEAD
              className="bg - destructive text - destructive - foreground hover:bg - destructive / 90";
              className=bg - destructive text - destructive - foreground hover:bg - destructive / 90;
              on_click = {handleDeleteConfirm }
              className="bg - destructive text - destructive - foreground hover:bg - destructive / 90";,
              on_click = {handleDeleteConfirm}
=======
>>>>>>> merged-prs-20250907-203621
              className="bg - destructive text - destructive - foreground hover:bg - destructive / 90";",
              on_click = {handleDeleteConfirm, }
>>>>>>> origin/chore/fix-lint-and-merge
            >;
              Delete;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
    </div>)}
const handleSetDefault = async (template_id: string) => {// Check condition;
if ( {) {$2;
}
  const current_path = router.as_path;
router.push (`/auth / login?return_to=$ {encodeURIComponent (current_path)}`)return;
}await setDefaultTemplate.mutate_async (template_id)}
<CardContent className=p - 4"> <div className="flex items - center justify - between> <div className=space - y-1"> <div className="flex items - center gap - 2> <h3 className=font - medium"> {template.title;
}</h3> {";
  template.is default && (<span className="bg - zion - purple / 10 text - zion - purple text - xs px - 2 py - 0.5 rounded - full">Default</span>) ";
}</div> <p className="text - xs text - muted - foreground"> Last updated: {new Date (template.updated at) .toLocaleDateString () ";
}</p> </div> <div className="flex items - center gap - 2" > <Button > <Edit className="h - 4 w - 4" /> </Button> {";
  !template.is default ? (<TooltipProvider> <Tooltip> <TooltipTrigger as_child> <Button variant="ghost" size="icon" on_click={() => handleSetDefault (template.id) ";
}aria - label="Set as default" > <Star className="h - 4 w - 4" /> </Button> </TooltipTrigger> {!user && (<TooltipContent> Please log in to use this feature </TooltipContent>) ";
}</Tooltip> </TooltipProvider>) : (<Button variant="ghost" size="icon" disabled aria - label="Default template"> <StarOff className="h - 4 w - 4" /> </Button>) ";
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
    </div>);
}
const handleSetDefault = async (template_id:,  string) => {
  // Check condition
if ( {) {
  $2
}
router.push (`/auth / login?return_to=$ {`
  encodeURIComponent (current_path);
}`);`
return;
}await setDefaultTemplate.mutate_async (template_id);
}
<CardContent className="p - 4"> <div className=flex items - center justify - between> <div className="space - y-1"> <div className=flex items - center gap - 2> <h3 className="font - medium"> {
  template.title;
}</h3> {;
  template.is default && (<span className="bg - zion - purple / 10 text - zion - purple text - xs px - 2 py - 0.5 rounded - full">Default</span>) ;
}</div> <p className=text - xs text - muted - foreground"> Last updated: {",
  new Date (template.updated,  at) .toLocaleDateString () ;
}</p> </div> <div className=flex items - center gap - 2" > <Button > <Edit className="h - 4 w - 4 /> </Button> {;
  !template.is default ? (<TooltipProvider> <Tooltip> <TooltipTrigger as_child> <Button variant="ghost" size=icon on_click={"
  () => handleSetDefault (template.id) ";
}aria - label=Set as default > <Star className="h - 4 w - 4" /> </Button> </TooltipTrigger> {
  !user && (<TooltipContent> Please log in to use this feature </TooltipContent>) ;
}</Tooltip> </TooltipProvider>) : (<Button variant="ghost" size=icon disabled aria - label="Default template"> <StarOff className=h - 4 w - 4 /> </Button>) ";
}<Button > <Trash className="h - 4 w - 4 text - destructive /> </Button> </div> </div> <Separator className=my - 3" /> <Button className="w - full > Use This Template </Button> </CardContent> </Card>) );
}<AlertDialog open= {
  !!templateToDelete;
}onOpenChange= {
  () => setTemplateToDelete (null) ";
<<<<<<< HEAD
=======
<<<<<<< HEAD
}> <AlertDialogContent> <AlertDialogHeader> <AlertDialogTitle > Delete Template</AlertDialogTitle> <AlertDialogDescription> Are you sure you want to delete this template? This action cannot be undone. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel > Cancel</AlertDialogCancel> <AlertDialogAction className="bg - destructive text - destructive - foreground hover:bg - destructive / 90" on_click={
  handleDeleteConfirm;
}> Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </div>);
}'}
}> <AlertDialogContent> <AlertDialogHeader> <AlertDialogTitle > Delete Template</AlertDialogTitle> <AlertDialogDescription> Are you sure you want to delete this template? This action cannot be undone. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel > Cancel</AlertDialogCancel> <AlertDialogAction className=bg - destructive text - destructive - foreground hover:bg - destructive / 90" on_click={",
=======
>>>>>>> merged-prs-20250907-203621
}> <AlertDialogContent> <AlertDialogHeader> <AlertDialogTitle > Delete Template</AlertDialogTitle> <AlertDialogDescription> Are you sure you want to delete this template? This action cannot be undone. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel > Cancel</AlertDialogCancel> <AlertDialogAction className="bg - destructive text - destructive - foreground hover:bg - destructive / 90" on_click={",
>>>>>>> origin/chore/fix-lint-and-merge
  handleDeleteConfirm;
}> Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </div>);

}

<<<<<<< HEAD
=======
<<<<<<< HEAD
}

=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
  );

}
  if (!user) {
  const currentPath = router.asPath;
router.push (`/auth/login?returnTo=$ {
  encodeURIComponent (currentPath) ;
}`);
return ;
}await setDefaultTemplate.mutateAsync (templateId) ;
}
<CardContent className=p-4> <div className="flex items-center justify-between"> <div className=space-y-1> <div className="flex items-center gap-2"> <h3 className=font-medium> {
  template.title ;
<<<<<<< HEAD
=======
<<<<<<< HEAD
}<Button > <Trash className="h - 4 w - 4 text - destructive" /> </Button> </div> </div> <Separator className=my - 3 /> <Button className="w - full" > Use This Template </Button> </CardContent> </Card>) )}<AlertDialog open= {!!templateToDelete;
}onOpenChange= {() => setTemplateToDelete (null) ;
}> <AlertDialogContent> <AlertDialogHeader> <AlertDialogTitle > Delete Template</AlertDialogTitle> <AlertDialogDescription> Are you sure you want to delete this template? This action cannot be undone. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel > Cancel</AlertDialogCancel> <AlertDialogAction className=bg - destructive text - destructive - foreground hover:bg - destructive / 90" on_click={handleDeleteConfirm;
}> Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </div>)}'"}
})}const handleSetDefault = async (templateId: string) => {if (!user) {const currentPath = router.asPath;
router.push (`/auth/login?returnTo=$ {encodeURIComponent (currentPath)}`)return ;
}await setDefaultTemplate.mutateAsync (templateId)}<CardContent className=p-4> <div className="flex items-center justify-between"> <div className=space-y-1> <div className="flex items-center gap-2"> <h3 className=font-medium> {template.title ;
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
}</h3> {";
  template.is default && (<span className="bg-zion-purple/10 text-zion-purple text-xs px-2 py-0.5 rounded-full">Default</span>) ";
}</div> <p className="text-xs text-muted-foreground"> Last updated: {;
  new Date (template.updated at) .toLocaleDateString () ";
}</p> </div> <div className="flex items-center gap-2" > <Button > <Edit className="h-4 w-4" /> </Button> {";
  !template.is default ? (<TooltipProvider> <Tooltip> <TooltipTrigger asChild> <Button variant="ghost" size="icon" onClick={;
  () => handleSetDefault (template.id) ";
}aria-label="Set as default" > <Star className="h-4 w-4" /> </Button> </TooltipTrigger> {;
  !user && (<TooltipContent> Please log in to use this feature </TooltipContent>) ";
}</Tooltip> </TooltipProvider>) : (<Button variant="ghost" size="icon" disabled aria-label="Default template"> <StarOff className="h-4 w-4" /> </Button>) ";
}<Button > <Trash className="h-4 w-4 text-destructive" /> </Button> </div> </div> <Separator className="my-3" /> <Button className="w-full" > Use This Template </Button> </CardContent> </Card>) ) ;
}<AlertDialog open= {;
}<Button > <Trash className=h-4 w-4 text-destructive" /> </Button> </div> </div> <Separator className="my-3 /> <Button className=w-full" > Use This Template </Button> </CardContent> </Card>) ) ;
}<AlertDialog open= {
  !!templateToDelete ;
}onOpenChange= {
  () => setTemplateToDelete (null) ";
}> <AlertDialogContent> <AlertDialogHeader> <AlertDialogTitle>Delete Template</AlertDialogTitle> <AlertDialogDescription> Are you sure you want to delete this template? This action cannot be undone. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel>Cancel</AlertDialogCancel> <AlertDialogAction className=bg-destructive text-destructive-foreground hover:bg-destructive/90 onClick={
  handleDeleteConfirm ;
}> Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </div>) ;
<<<<<<< HEAD
}'"
=======
<<<<<<< HEAD
}'"
}"
origin/cursor/automate-test-improve-and-merge-code-2533
}<Button > <Trash className="h-4 w-4 text-destructive /> </Button> </div> </div> <Separator className=my-3" /> <Button className="w-full > Use This Template </Button> </CardContent> </Card>) )}<AlertDialog open= {!!templateToDelete ;
}onOpenChange= {() => setTemplateToDelete (null) ;
}> <AlertDialogContent> <AlertDialogHeader> <AlertDialogTitle>Delete Template</AlertDialogTitle> <AlertDialogDescription> Are you sure you want to delete this template? This action cannot be undone. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel>Cancel</AlertDialogCancel> <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90" onClick={handleDeleteConfirm ;
}> Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </div>)}";
}'"
=======
}'"
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
