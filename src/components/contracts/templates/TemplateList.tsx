<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import { useState } from "react";
interface TemplateListProps {
  templates: ContractTemplate[],
  isLoading: boolean,
  onSelect: (template: ContractTemplate,) => void,
  onEdit: (template: ContractTemplate,) => void
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

import { ContractTemplate } from "@/types/contracts",
import { Button } from "@/components/ui/button",
import { Loader2, Edit, Trash, Star, StarOff } from 'lucide-react'
import { useContractTemplates } from "@/hooks/useContractTemplates",
import { Card, CardContent } from "@/components/ui/card",
import { Separator } from "@/components/ui/separator",
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip",
<<<<<<< HEAD


import { useAuth } from "@/hooks/useAuth",


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
<<<<<<< HEAD
import { useAuth } from "@/hooks/useAuth";
=======
import { useAuth } from "@/hooks/useAuth",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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


=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { useState } from "react"
interface TemplateListProps {
  templates: ContractTemplate[]
  isLoading: boolean
  onSelect: (template: ContractTemplate,) => void
  onEdit: (template: ContractTemplate,) => void
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5


<<<<<<< HEAD


// use_router replaces the old use_location hook from react - router;
import { use_router } from 'next / router';
=======
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
=======
<<<<<<< HEAD
import { useAuth } from "@/hooks/useAuth",
// useRouter replaces the old useLocation hook from react-router
import { useRouter } from 'next/router',
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
<<<<<<< HEAD
  AlertDialogTitle} from "@/components / ui / alert - dialog",
import { useState  } from './react';
=======
  AlertDialogTitle} from "@/components/ui/alert-dialog",
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { useState } from "react",
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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
  const handleDeleteConfirm = async () => {
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
    await setDefaultTemplate && setDefaultTemplate.mutateAsync(templateId);
  };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

<<<<<<< HEAD
  if (isLoading) {;
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  if (isLoading) {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    return (
      <div className="flex justify-center items-center py-8">;
        <Loader2 className="h-8 w-8 animate-spin text-zion-purple" />;
      </div>;
    );
  }


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
      {templates && templates.map((template,) => (;
        <Card key={template && template.id} className={template && template.is_default ? "border-zion-purple" : ""}>;
          <CardContent className="p-4">;
            <div className="flex items-center justify-between">;
              <div className="space-y-1">;
                <div className="flex items-center gap-2">;
                  <h3 className="font-medium">{template && template.title}</h3>;
                  {template && template.is_default && (;
                    <span className="bg-zion-purple/10 text-zion-purple text-xs px-2 py-0 && 0.5 rounded-full">Default</span>;
                  )}


              
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
              <div className="flex items-center gap-2">
=======
                </div>;
                <p className="text-xs text-muted-foreground">;
                  Last updated: {new Date(template && template.updated_at).toLocaleDateString()}
                </p>;
              </div>;

              <div className="flex items-center gap-2">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                <Button
                  variant="ghost"
                  size="icon"
                  onClick = {() => onEdit(template),}
                  aria-label="Edit template";
                >;
                  <Edit className="h-4 w-4" />;
                </Button>;
                {!template && template.is_default ? (;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger asChild>;
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick = {(,) => handleSetDefault(template && template.id),}
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
                ) : (;
                  <Button variant="ghost" size="icon" disabled aria-label="Default template">;
                    <StarOff className="h-4 w-4" />;
                  </Button>;
                )}
                <Button
                  variant="ghost"
                  size="icon"
<<<<<<< HEAD



=======
                  onClick={() => handleDeleteClick(template.id)}
                  aria-label="Delete template"
                >
                  <Trash className="h-4 w-4 text-destructive" />
                </Button>
              </div>
            </div>
<<<<<<< HEAD
            <Separator className="my-3" />
<<<<<<< HEAD
            <Button
              onClick = {() => onSelect(template),}
              variant="outline"
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
            
            <Separator className="my-3" />
            

            <Button 
              onClick={() => onSelect(template)} 
              variant="outline" 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              className="w-full"
            >
              Use This Template
            </Button>
          </CardContent>
        </Card>
      ))}
<<<<<<< HEAD


      


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
      
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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


return;
}await setDefaultTemplate.mutateAsync (templateId) 


=======
<<<<<<< HEAD
return
}await setDefaultTemplate.mutateAsync (templateId)
=======
return;
}await setDefaultTemplate.mutateAsync (templateId) 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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

                  onClick = {() => handleDeleteClick(template && template.id),}
                  aria-label="Delete template";
                >;
                  <Trash className="h-4 w-4 text-destructive" />;
                </Button>;
              </div>;
            </div>;

            <Separator className="my-3" />;

            <Button
              onClick = {() => onSelect(template),}
              variant="outline" ;
              className="w-full";
            >;
              Use This Template;
            </Button>;
          </CardContent>;
        </Card>;
      ))}

=======
<<<<<<< HEAD
  handleDeleteConfirm
}> Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </div>)
}'"}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

  handleDeleteConfirm ;
}> Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </div>) ;
}'"};
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
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
            <AlertDialogCancel>Cancel</AlertDialogCancel>;
            <AlertDialogAction
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick = {handleDeleteConfirm,}>;
              Delete;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;
    </div>;
  );


=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
}
;
<<<<<<< HEAD


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
