<<<<<<< HEAD
<<<<<<< HEAD


import { useState } from "react";
interface TemplateListProps {
  templates: ContractTemplate[],
  isLoading: boolean,
  onSelect: (template: ContractTemplate,) => void,
  onEdit: (template: ContractTemplate,) => void
}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { ContractTemplate } from "@/types/contracts",
import { Button } from "@/components/ui/button",
import { Loader2, Edit, Trash, Star, StarOff } from 'lucide-react'
import { useContractTemplates } from "@/hooks/useContractTemplates",
import { Card, CardContent } from "@/components/ui/card",
import { Separator } from "@/components/ui/separator",
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip",
<<<<<<< HEAD
<<<<<<< HEAD
import { useAuth } from "@/hooks/useAuth";
ursor/fix-website-loading-errors-and-merge-6662
// useRouter replaces the old useLocation hook from react-router
import { useAuth } from "@/hooks/useAuth";
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { useAuth } from "@/hooks/useAuth",


// useRouter replaces the old useLocation hook from react-router

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
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
import { useState } from "react"
interface TemplateListProps {
  templates: ContractTemplate[]
  isLoading: boolean
  onSelect: (template: ContractTemplate,) => void
  onEdit: (template: ContractTemplate,) => void

}
export function TemplateList({
  templates;
  isLoading;
  onSelect;
  onEdit
}: TemplateListProps) {

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
import { useAuth } from "@/hooks/useAuth",
// useRouter replaces the old useLocation hook from react-router
import { useRouter } from 'next/router',
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// use_router replaces the old use_location hook from react - router;
import { use_router } from 'next / router';
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
<<<<<<< HEAD
<<<<<<< HEAD
import { useAuth } from "@/hooks/useAuth",
// useRouter replaces the old useLocation hook from react-router
import { useRouter } from 'next/router',
import {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
<<<<<<< HEAD
<<<<<<< HEAD
  AlertDialogTitle} from "@/components/ui/alert-dialog",
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  AlertDialogTitle} from "@/components / ui / alert - dialog",
import { useState  } from './react';
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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleSetDefault = async (template_id: string, ) => {
    // Check condition
if ( {) {
  $2
}
      const current_path = router.as_path,
      router.push (`/auth / login?return_to=${encodeURIComponent (current_path)}`);
      return;
<<<<<<< HEAD
    }
    await setDefaultTemplate.mutate_async (template_id);
  }
=======

    }
    await setDefaultTemplate.mutate_async (template_id);
  }


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
  const handleDeleteClick = (templateId: string,) => {;
    setTemplateToDelete(templateId);
  };
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const handleDeleteClick = (templateId: string,) => {;
    setTemplateToDelete(templateId);
  };

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleDeleteConfirm = async () => {;
    if (templateToDelete) {;
      await deleteTemplate && deleteTemplate.mutateAsync(templateToDelete);
      setTemplateToDelete(null);
    }
  };
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleSetDefault = async (templateId: string,) => {;
    if (!user) {;
      const currentPath = router && router.asPath,;
      router && router.push(`/auth/login?returnTo=${encodeURIComponent(currentPath)}`);
      return;
    }
<<<<<<< HEAD
<<<<<<< HEAD
  if (isLoading) {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    await setDefaultTemplate && setDefaultTemplate.mutateAsync(templateId);
  };

  if (isLoading) {;


  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-8">;
        <Loader2 className="h-8 w-8 animate-spin text-zion-purple" />;
      </div>;
    );
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  if (!templates && templates.length) {;
    return (
      <div className="text-center py-8">;
        <p className="text-muted-foreground">No templates found.</p>;
        <p className="text-sm text-muted-foreground">Save a contract as a template to reuse it later.</p>;
      </div>;
    );
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  return (
    <div className="space-y-3">;
      {templates && templates.map((template,) => (;
        <Card key={template && template.id} className={template && template.is_default ? "border-zion-purple" : ""}>;
<<<<<<< HEAD
<<<<<<< HEAD

import { useState } from "react",
interface TemplateListProps {
  templates: ContractTemplate[],
  isLoading: boolean,
  onSelect: (template: ContractTemplate) => void,
  onEdit: (template: ContractTemplate) => void
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
interface TemplateListProps {;
  templates: ContractTemplate[],;
  isLoading: boolean,;
  onSelect: (template: ContractTemplate) => void,;
  onEdit: (template: ContractTemplate) => void;
}
;
export function TemplateList({;
  templates,;
  isLoading,;
  onSelect,;
  onEdit;
}: TemplateListProps) {;
  const [templateToDelete, setTemplateToDelete] = useState<string | null>(null),;
  const { deleteTemplate, setDefaultTemplate } = useContractTemplates(),;
  const { user } = useAuth(),;
  const router = useRouter(),;
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
                </div>
                <p className="text-xs text-muted-foreground">
                  Last updated: {new Date(template.updated_at).toLocaleDateString()}
                </p>
              </div>
ursor/fix-website-loading-errors-and-merge-6662
              <div className="flex items-center gap-2">
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <CardContent className="p-4">;
            <div className="flex items-center justify-between">;
              <div className="space-y-1">;
                <div className="flex items-center gap-2">;
                  <h3 className="font-medium">{template && template.title}</h3>;
                  {template && template.is_default && (;
                    <span className="bg-zion-purple/10 text-zion-purple text-xs px-2 py-0 && 0.5 rounded-full">Default</span>;
                  )}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


=======
                </div>
                <p className="text-xs text-muted-foreground">
                  Last updated: {new Date(template.updated_at).toLocaleDateString()}
                </p>
              </div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              


              <div className="flex items-center gap-2">
                </div>;
                <p className="text-xs text-muted-foreground">;
                  Last updated: {new Date(template && template.updated_at).toLocaleDateString()}
                </p>;
              </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className="flex items-center gap-2">;
                <Button
                  variant="ghost"
                  size="icon"
                  onClick = {() => onEdit(template),}
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  aria-label="Edit template";
                >;
                  <Edit className="h-4 w-4" />;
                </Button>;
<<<<<<< HEAD
<<<<<<< HEAD
                {!template.is_default ? (;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger asChild>;
                        <Button;
                          variant="ghost";
                          size="icon";
                          onClick={() => handleSetDefault(template.id)}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                {!template && template.is_default ? (;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger asChild>;
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick = {(,) => handleSetDefault(template && template.id),}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
                ) :(;
                  <Button variant="ghost" size="icon" disabled aria-label="Default template">;
                    <StarOff className="h-4 w-4" />;
                  </Button>;
                )}
              
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                ) : (;
                  <Button variant="ghost" size="icon" disabled aria-label="Default template">;
                    <StarOff className="h-4 w-4" />;
                  </Button>;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                )}
                <Button
                  variant="ghost"
                  size="icon"
<<<<<<< HEAD
<<<<<<< HEAD
                  onClick={() => handleDeleteClick(template.id)}
                  aria-label="Delete template"
                >
                  <Trash className="h-4 w-4 text-destructive" />
                </Button>
              </div>
            </div>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



            
            <Separator className="my-3" />
<<<<<<< HEAD

            <Button 
              onClick={() => onSelect(template)} 
              variant="outline" 
            <Button
              onClick = {() => onSelect(template),}
              variant="outline"
            
            <Separator className="my-3" />
            
              onClick={() => onSelect(template)} 
              variant="outline" 
              className="w-full"
            <Separator className="my-3" />
            <Button
              onClick = {() => onSelect(template),}
              variant="outline"
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            
            <Separator className="my-3" />
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            
            <Button 
              onClick={() => onSelect(template)} 
              variant="outline" 
              className="w-full"
            >
              Use This Template
            </Button>
          </CardContent>
        </Card>
      ))}
<<<<<<< HEAD
<<<<<<< HEAD
      
      
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


      


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
return
}await setDefaultTemplate.mutateAsync (templateId)
return
}await setDefaultTemplate.mutateAsync (templateId)
return;
}await setDefaultTemplate.mutateAsync (templateId) 
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


return;
}await setDefaultTemplate.mutateAsync (templateId) 


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  handleDeleteConfirm
}> Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </div>)
}'"}
;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                  onClick = {() => handleDeleteClick(template && template.id),}
                <Button;
                  variant="ghost";
                  size="icon";
                  onClick={() => handleDeleteClick(template.id)}
=======

                  onClick = {() => handleDeleteClick(template && template.id),}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  aria-label="Delete template";
                >;
                  <Trash className="h-4 w-4 text-destructive" />;
                </Button>;
              </div>;
            </div>;
<<<<<<< HEAD
            ;
            <Separator className="my-3" />;
            ;
            <Button ;
              onClick={() => onSelect(template)} ;
=======

            <Separator className="my-3" />;

            <Button
              onClick = {() => onSelect(template),}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              variant="outline" ;
              className="w-full";
            >;
              Use This Template;
            </Button>;
          </CardContent>;
        </Card>;
      ))}
<<<<<<< HEAD
      ;
  handleDeleteConfirm
}> Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </div>)
}'"}
  handleDeleteConfirm ;
}> Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </div>) ;
}'"};
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  handleDeleteConfirm ;
}> Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </div>) ;
}'"};
<<<<<<< HEAD

;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
            <AlertDialogAction ;
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90";
              onClick={handleDeleteConfirm}
            >;
            <AlertDialogAction;
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90";
              onClick={handleDeleteConfirm}
            >;
=======
            <AlertDialogAction
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick = {handleDeleteConfirm,}>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              Delete;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;
    </div>;
<<<<<<< HEAD
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
}aria-label="Set as default" > <Star className="h-4 w-4" /> </Button> </TooltipTrigger> {;
  !user && (<TooltipContent> Please log in to use this feature </TooltipContent>) ";
}</Tooltip> </TooltipProvider>) : (<Button variant="ghost" size="icon" disabled aria-label="Default template"> <StarOff className="h-4 w-4" /> </Button>) ";
}<Button > <Trash className="h-4 w-4 text-destructive" /> </Button> </div> </div> <Separator className="my-3" /> <Button className="w-full" > Use This Template </Button> </CardContent> </Card>) ) ;
=======
  );


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
}<AlertDialog open= {;
  !!templateToDelete ;
}onOpenChange= {;
  () => setTemplateToDelete (null) ";
}> <AlertDialogContent> <AlertDialogHeader> <AlertDialogTitle>Delete Template</AlertDialogTitle> <AlertDialogDescription> Are you sure you want to delete this template? This action cannot be undone. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel>Cancel</AlertDialogCancel> <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90" onClick={;
  handleDeleteConfirm ;
}> Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </div>) ;
}'"
  );
}
;
}
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
