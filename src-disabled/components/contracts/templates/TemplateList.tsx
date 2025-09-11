


:src_backup/components/contracts/templates/TemplateList.tsx



import { useAuth } from "@/hooks/useAuth",
import { Loader2, Edit, Trash, Star, StarOff } from lucide-react'



import { useAuth } from "@/hooks/useAuth,


:src_backup/components/contracts/templates/TemplateList.tsx



// use_router replaces the old use_location hook from react - router;
:src_backup/components/contracts/templates/TemplateList.tsx
import { use_router } from 'next / router';


:src_backup/components/contracts/templates/TemplateList.tsx
import { use_router } from 'next/router';
import { use_router } from 'next/router';
import { use_router } from next/router';
origin/cursor/automate-test-improve-and-merge-code-2533


:src_backup/components/contracts/templates/TemplateList.tsx
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
:src_backup/components/contracts/templates/TemplateList.tsx
import { useState } from "react"


:src_backup/components/contracts/templates/TemplateList.tsx
  AlertDialogTitle} from "@/components/ui/alert-dialog",
import { useState } from "react";
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


:src_backup/components/contracts/templates/TemplateList.tsx
  onEdit
}: TemplateListProps) {
:src_backup/components/contracts/templates/TemplateList.tsx
  AlertDialogTitle} from "@/components / ui / alert - dialog",
  onEdit
}: TemplateListProps) {
  AlertDialogTitle} from "@/components / ui / alert - dialog",
  AlertDialogTitle} from @/components / ui / alert - dialog,
  AlertDialogTitle} from "@/components/ui/ alert - dialog",
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

  }
  const handleDeleteConfirm = async () => {
    // Check condition
if ( {) {
  $2
}
      await delete_template.mutate_async (templateToDelete);
      setTemplateToDelete (null);
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
;
import { ContractTemplate } from "@/types/contracts",import { Button } from "@/components/ui/button",import { Loader2, Edit, Trash, Star, StarOff  } from 'lucide-react';
import { useContractTemplates } from "@/hooks/useContractTemplates",import { Card, CardContent } from "@/components/ui/card",import { Separator } from "@/components/ui/separator",import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip",import { useAuth } from "@/hooks/useAuth",// useRouter replaces the old useLocation hook from react-router;
  AlertDialog;
  AlertDialogAction;
  AlertDialogCancel;
  AlertDialogContent;
  AlertDialogDescription;
  AlertDialogFooter;
  AlertDialogHeader;
  AlertDialogTitle} from "@/components/ui/alert-dialog";
import { ContractTemplate  } from '@/types/contracts';
import { Button  } from '@/components/ui/button';
import { useContractTemplates  } from '@/hooks/useContractTemplates';
import { Card, CardContent  } from '@/components/ui/card';
import { Separator  } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger  } from '@/components/ui/tooltip';
import { useAuth  } from '@/hooks/useAuth';
// useRouter replaces the old useLocation hook from react-router;
:src_backup/components/contracts/templates/TemplateList.tsx


:src_backup/components/contracts/templates/TemplateList.tsx
import { useState } from "react",
import { useState } from "react",
import { useState } from react,
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
:src_backup/components/contracts/templates/TemplateList.tsx
  if (!templates && templates.length) {;



            <Separator className="my-3 />
:src_backup/components/contracts/templates/TemplateList.tsx
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
:src_backup/components/contracts/templates/TemplateList.tsx
:src_backup/components/contracts/templates/TemplateList.tsx
:src_backup/components/contracts/templates/TemplateList.tsx
:src_backup/components/contracts/templates/TemplateList.tsx


            
            <Separator className="my-3" />
            
:src_backup/components/contracts/templates/TemplateList.tsx

:src_backup/components/contracts/templates/TemplateList.tsx



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
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"",
              onClick = {handleDeleteConfirm,}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>


:src_backup/components/contracts/templates/TemplateList.tsx


return;
}await setDefaultTemplate.mutateAsync (templateId) 



  )
}
const handleSetDefault = async (templateId: string) => {
  if (!user) {
  const currentPath = router.asPath
router.push (`/auth/login?returnTo=$ {
  encodeURIComponent (currentPath)
}`)


  () => setTemplateToDelete (null) ""
}> <AlertDialogContent> <AlertDialogHeader> <AlertDialogTitle>Delete Template</AlertDialogTitle> <AlertDialogDescription> Are you sure you want to delete this template? This action cannot be undone. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel>Cancel</AlertDialogCancel> <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90" onClick={",
                  onClick = {() => handleDeleteClick(template && template.id),}
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
    await setDefaultTemplate && setDefaultTemplate.mutateAsync(templateId)}if (isLoading) {if (isLoading) {return (<div className="flex justify-center items-center py-8">;
        <Loader2 className="h-8 w-8 animate-spin text-zion-purple" />;
      </div>;
    )}if (!templates && templates.length) {return (<div className="text-center py-8">;
        <p className="text-muted-foreground">No templates found.</p>;
        <p className="text-sm text-muted-foreground">Save a contract as a template to reuse it later.</p>;
      </div>;
    )}
  return (<div className="space-y-3">;
      {templates && templates.map((template,) => (<Card key={template && template.id} className={template && template.is_default ? "border-zion-purple" : ""}>;
          <CardContent className="p-4">;
            <div className="flex items-center justify-between">;
              <div className="space-y-1">;
                <div className="flex items-center gap-2">;
                  <h3 className="font-medium">{template && template.title}</h3>;
                  {template && template.is_default && (<span className="bg-zion-purple/10 text-zion-purple text-xs px-2 py-0 && 0.5 rounded-full">Default</span>;
                  )}<div className="flex items-center gap-2">;
                </div>;
                <p className="text-xs text-muted-foreground">;
                  Last updated: {new Date(template && template.updated_at).toLocaleDateString()}
                </p>;
              </div>;<div className="flex items-center gap-2">;
                <Button;
                  variant="ghost";
                  size="icon";
                  onClick = {() => onEdit(template)}
                  aria-label="Edit template";
                >;
                  <Edit className="h-4 w-4" />;
                </Button>;
                {!template && template.is_default ? (<TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger asChild>;
                        <Button;
                          variant="ghost";
                          size="icon";
                          onClick = {(,) => handleSetDefault(template && template.id)}
                          aria-label="Set as default";
                        >;
                          <Star className="h-4 w-4" />;
                        </Button>;
                      </TooltipTrigger>;
                      {!user && (<TooltipContent>Please log in to use this feature;
                        </TooltipContent>;
                      )}
                    </Tooltip>;
                  </TooltipProvider>;
                ) : (<Button variant="ghost" size="icon" disabled aria-label="Default template">;
                    <StarOff className="h-4 w-4" />;
                  </Button>;)}
                <Button;
                  variant="ghost";
                  size="icon";
            <Separator className="my-3" />;
                  onClick={() => handleDeleteClick(template.id)}
                  aria-label="Delete template";
            <Separator className="my-3" />;
:src_backup/components/contracts/templates/TemplateList.tsx
            <Button;
              onClick={() => onSelect(template)}variant="outline";


            <Button;
              onClick={() => onSelect(template)}variant="outline;


:src_backup/components/contracts/templates/TemplateList.tsx
        </Card>;
:src_backup/components/contracts/templates/TemplateList.tsx
        </Card>;
      ))}


  handleDeleteConfirm ;
}> Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </div>) ;
}'"};

;


;
      <AlertDialog open={!!templateToDelete} onOpenChange={() => setTemplateToDelete(null)}>;
      ))}<AlertDialog open={!!templateToDelete} onOpenChange={() => setTemplateToDelete(null)}>;


:src_backup/components/contracts/templates/TemplateList.tsx
            <AlertDialogAction
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick = {handleDeleteConfirm,}>;

            <AlertDialogAction;
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90";
              onClick = {handleDeleteConfirm}
            >;
:src_backup/components/contracts/templates/TemplateList.tsx
:src_backup/components/contracts/templates/TemplateList.tsx
  );
:src_backup/components/contracts/templates/TemplateList.tsx



  // Check condition
if ( {) {
  $2
}
    return (
      <div className="flex justify - center items - center py - 8">;


:src_backup/components/contracts/templates/TemplateList.tsx
  )}
const handleSetDefault = async (templateId: string) => {if (!user) {const currentPath = router.asPath;
router.push (`/auth/login?returnTo=$ {encodeURIComponent (currentPath)}`)return;
}await setDefaultTemplate.mutateAsync (templateId)}
<CardContent className="p-4"> <div className="flex items-center justify-between"> <div className="space-y-1"> <div className="flex items-center gap-2"> <h3 className="font-medium"> {template.title;
}</h3> {";
  template.is default && (<span className="bg-zion-purple/10 text-zion-purple text-xs px-2 py-0.5 rounded-full">Default</span>) ";
}</div> <p className="text-xs text-muted-foreground"> Last updated: {new Date (template.updated at) .toLocaleDateString () ";
}</p> </div> <div className="flex items-center gap-2" > <Button > <Edit className="h-4 w-4" /> </Button> {";
  !template.is default ? (<TooltipProvider> <Tooltip> <TooltipTrigger asChild> <Button variant="ghost" size="icon" onClick={() => handleSetDefault (template.id) ";
}aria-label="Set as default" > <Star className="h-4 w-4" /> </Button> </TooltipTrigger> {!user && (<TooltipContent> Please log in to use this feature </TooltipContent>) ";
}</Tooltip> </TooltipProvider>) : (<Button variant="ghost" size="icon" disabled aria-label="Default template"> <StarOff className="h-4 w-4" /> </Button>) ";
}<Button > <Trash className="h-4 w-4 text-destructive" /> </Button> </div> </div> <Separator className="my-3" /> <Button className="w-full" > Use This Template </Button> </CardContent> </Card>) )}<AlertDialog open= {!!templateToDelete;
}onOpenChange= {() => setTemplateToDelete (null) ";
}> <AlertDialogContent> <AlertDialogHeader> <AlertDialogTitle>Delete Template</AlertDialogTitle> <AlertDialogDescription> Are you sure you want to delete this template? This action cannot be undone. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel>Cancel</AlertDialogCancel> <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90" onClick={onClick = {() => handleDeleteClick(template && template.id)}
                  aria-label="Delete template";
                >;
                  <Trash className="h-4 w-4 text-destructive" />;
                </Button>;
              </div>;
            </div>;<Separator className="my-3" />;<Button;
              onClick = {() => onSelect(template)}
              variant="outline" ;
              className="w-full";
            >;
              Use This Template;
            </Button>;
          </CardContent>;;</Card>;
      ))}handleDeleteConfirm ;
}> Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </div>)}'"};
      <AlertDialog open={!!templateToDelete} onOpenChange={() => setTemplateToDelete(null)}>;
        <AlertDialogContent>;
          <AlertDialogHeader>;
            <AlertDialogTitle>Delete Template</AlertDialogTitle>;
            <AlertDialogDescription>Are you sure you want to delete this template? This action cannot be undone.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;
            <AlertDialogCancel>Cancel</AlertDialogCancel>;<AlertDialogAction;
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90";
              onClick={handleDeleteConfirm}
            >;<AlertDialogAction;
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90";
              onClick = {handleDeleteConfirm}>;Delete;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;
    </div>;
  )}// Check condition;
if ( {) {$2;
}
    return (<div className="flex justify - center items - center py - 8">;
        <Loader2 className="h - 8 w - 8 animate - spin text - zion - purple" />;
      </div>)}
  // Check condition;
if ( {) {$2;
}
    return (<div className="text - center py - 8">;
        <p className="text - muted - foreground">No templates found.</p>;
        <p className="text - sm text - muted - foreground">Save a contract as a template to reuse it later.</p>;
      </div>)}
  return (<div className="space - y-3">;
      {templates.map ((template, ) => (<Card key={template.id} className={template.is_default ? "border - zion - purple" : ""}>;
        <Loader2 className="h - 8 w - 8 animate - spin text - zion - purple" />;


:src_backup/components/contracts/templates/TemplateList.tsx
                  {template.is_default && (<span className="bg - zion - purple / 10 text - zion - purple text - xs px - 2 py - 0.5 rounded - full">Default</span>)}
                  {template.is_default && (<span className="bg - zion - purple / 10 text - zion - purple text - xs px - 2 py - 0.5 rounded - full">Default</span>)}
                  {template.is_default && (<span className="bg - zion - purple / 10 text - zion - purple text - xs px - 2 py - 0.5 rounded - full>Default</span>)}


:src_backup/components/contracts/templates/TemplateList.tsx
                  on_click = {() => on_edit (template) }
                  on_click = {() => on_edit (template), }
                  aria - label="Edit template";
                >;
                  <Edit className="h - 4 w - 4" />;
                </Button>;
:src_backup/components/contracts/templates/TemplateList.tsx


:src_backup/components/contracts/templates/TemplateList.tsx
                          on_click = {(, ) => handleSetDefault (template.id) }
                          on_click = {(, ) => handleSetDefault (template.id), }
                          aria - label="Set as default";
                          on_click = {(, ) => handleSetDefault (template.id) }
                          on_click = {(, ) => handleSetDefault (template.id)}
                          aria - label=Set as default;


:src_backup/components/contracts/templates/TemplateList.tsx
                      {!user && (<TooltipContent>Please log in to use this feature;
                        </TooltipContent>)}
                    </Tooltip>;
                  </TooltipProvider>) : (<Button variant="ghost" size="icon" disabled aria - label="Default template">;
                      {!user && (<TooltipContent>Please log in to use this feature;
                        </TooltipContent>)}
                    </Tooltip>;
                  </TooltipProvider>) : (<Button variant=ghost size="icon" disabled aria - label=Default template>;


:src_backup/components/contracts/templates/TemplateList.tsx
                  on_click = {() => handleDeleteClick (template.id) }
                  on_click = {() => handleDeleteClick (template.id), }
                  on_click = {() => handleDeleteClick (template.id) }
                  on_click = {() => handleDeleteClick (template.id)}


:src_backup/components/contracts/templates/TemplateList.tsx
              on_click = {() => on_select (template) }
              on_click = {() => on_select (template), }
              variant="outline";
              on_click = {() => on_select (template) }
              on_click = {() => on_select (template)}
              variant=outline;


:src_backup/components/contracts/templates/TemplateList.tsx
            <AlertDialogDescription>Are you sure you want to delete this template? This action cannot be undone.;


:src_backup/components/contracts/templates/TemplateList.tsx
              className="bg - destructive text - destructive - foreground hover:bg - destructive / 90";
              on_click = {handleDeleteConfirm }
              className="bg - destructive text - destructive - foreground hover:bg - destructive / 90";",
              on_click = {handleDeleteConfirm, }
              className="bg - destructive text - destructive - foreground hover:bg - destructive / 90";
              className=bg - destructive text - destructive - foreground hover:bg - destructive / 90;
              on_click = {handleDeleteConfirm }
              className="bg - destructive text - destructive - foreground hover:bg - destructive / 90";,
              on_click = {handleDeleteConfirm}


:src_backup/components/contracts/templates/TemplateList.tsx
    </div>)}
const handleSetDefault = async (template_id: string) => {// Check condition;
if ( {) {$2;
}
  const current_path = router.as_path;
router.push (`/auth / login?return_to=$ {encodeURIComponent (current_path)}`)return;
}await setDefaultTemplate.mutate_async (template_id)}
<CardContent className="p - 4"> <div className="flex items - center justify - between"> <div className="space - y-1"> <div className="flex items - center gap - 2"> <h3 className="font - medium"> {template.title;
}</h3> {";
  template.is default && (<span className="bg - zion - purple / 10 text - zion - purple text - xs px - 2 py - 0.5 rounded - full">Default</span>) ";
}</div> <p className="text - xs text - muted - foreground"> Last updated: {new Date (template.updated at) .toLocaleDateString () ";
}</p> </div> <div className="flex items - center gap - 2" > <Button > <Edit className="h - 4 w - 4" /> </Button> {";
  !template.is default ? (<TooltipProvider> <Tooltip> <TooltipTrigger as_child> <Button variant="ghost" size="icon" on_click={() => handleSetDefault (template.id) ";
}aria - label="Set as default" > <Star className="h - 4 w - 4" /> </Button> </TooltipTrigger> {!user && (<TooltipContent> Please log in to use this feature </TooltipContent>) ";
}</Tooltip> </TooltipProvider>) : (<Button variant="ghost" size="icon" disabled aria - label="Default template"> <StarOff className="h - 4 w - 4" /> </Button>) ";
:src_backup/components/contracts/templates/TemplateList.tsx


:src_backup/components/contracts/templates/TemplateList.tsx
}> <AlertDialogContent> <AlertDialogHeader> <AlertDialogTitle > Delete Template</AlertDialogTitle> <AlertDialogDescription> Are you sure you want to delete this template? This action cannot be undone. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel > Cancel</AlertDialogCancel> <AlertDialogAction className="bg - destructive text - destructive - foreground hover:bg - destructive / 90" on_click={
  handleDeleteConfirm;
}> Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </div>);
}'"}
}> <AlertDialogContent> <AlertDialogHeader> <AlertDialogTitle > Delete Template</AlertDialogTitle> <AlertDialogDescription> Are you sure you want to delete this template? This action cannot be undone. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel > Cancel</AlertDialogCancel> <AlertDialogAction className="bg - destructive text - destructive - foreground hover:bg - destructive / 90" on_click={",
}> <AlertDialogContent> <AlertDialogHeader> <AlertDialogTitle > Delete Template</AlertDialogTitle> <AlertDialogDescription> Are you sure you want to delete this template? This action cannot be undone. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel > Cancel</AlertDialogCancel> <AlertDialogAction className="bg - destructive text - destructive - foreground hover:bg - destructive / 90" on_click={
  handleDeleteConfirm;
}> Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </div>);
}'}
}> <AlertDialogContent> <AlertDialogHeader> <AlertDialogTitle > Delete Template</AlertDialogTitle> <AlertDialogDescription> Are you sure you want to delete this template? This action cannot be undone. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel > Cancel</AlertDialogCancel> <AlertDialogAction className=bg - destructive text - destructive - foreground hover:bg - destructive / 90" on_click={",
}
;


  );

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


}<Button > <Trash className="h - 4 w - 4 text - destructive" /> </Button> </div> </div> <Separator className="my - 3" /> <Button className="w - full" > Use This Template </Button> </CardContent> </Card>) )}<AlertDialog open= {!!templateToDelete;
}onOpenChange= {() => setTemplateToDelete (null) ";
}> <AlertDialogContent> <AlertDialogHeader> <AlertDialogTitle > Delete Template</AlertDialogTitle> <AlertDialogDescription> Are you sure you want to delete this template? This action cannot be undone. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel > Cancel</AlertDialogCancel> <AlertDialogAction className="bg - destructive text - destructive - foreground hover:bg - destructive / 90" on_click={handleDeleteConfirm;
}> Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </div>)}'"}
})}const handleSetDefault = async (templateId: string) => {if (!user) {const currentPath = router.asPath;
router.push (`/auth/login?returnTo=$ {encodeURIComponent (currentPath)}`)return ;
}await setDefaultTemplate.mutateAsync (templateId)}<CardContent className="p-4"> <div className="flex items-center justify-between"> <div className="space-y-1"> <div className="flex items-center gap-2"> <h3 className="font-medium"> {template.title ;
}</h3> {";
  template.is default && (<span className="bg-zion-purple/10 text-zion-purple text-xs px-2 py-0.5 rounded-full">Default</span>) ";
}</div> <p className="text-xs text-muted-foreground"> Last updated: {new Date (template.updated at) .toLocaleDateString () ";
}</p> </div> <div className="flex items-center gap-2" > <Button > <Edit className="h-4 w-4" /> </Button> {";
  !template.is default ? (<TooltipProvider> <Tooltip> <TooltipTrigger asChild> <Button variant="ghost" size="icon" onClick={() => handleSetDefault (template.id) ";
}aria-label="Set as default" > <Star className="h-4 w-4" /> </Button> </TooltipTrigger> {!user && (<TooltipContent> Please log in to use this feature </TooltipContent>) ";
}</Tooltip> </TooltipProvider>) : (<Button variant="ghost" size="icon" disabled aria-label="Default template"> <StarOff className="h-4 w-4" /> </Button>) ";
:src_backup/components/contracts/templates/TemplateList.tsx
}<Button > <Trash className="h-4 w-4 text-destructive" /> </Button> </div> </div> <Separator className="my-3" /> <Button className="w-full" > Use This Template </Button> </CardContent> </Card>) ) ;
}<AlertDialog open= {;
}<Button > <Trash className="h - 4 w - 4 text - destructive" /> </Button> </div> </div> <Separator className=my - 3 /> <Button className="w - full" > Use This Template </Button> </CardContent> </Card>) )}<AlertDialog open= {!!templateToDelete;
}onOpenChange= {() => setTemplateToDelete (null) ;
}> <AlertDialogContent> <AlertDialogHeader> <AlertDialogTitle > Delete Template</AlertDialogTitle> <AlertDialogDescription> Are you sure you want to delete this template? This action cannot be undone. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel > Cancel</AlertDialogCancel> <AlertDialogAction className=bg - destructive text - destructive - foreground hover:bg - destructive / 90" on_click={handleDeleteConfirm;
}> Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </div>)}'"}
})}const handleSetDefault = async (templateId: string) => {if (!user) {const currentPath = router.asPath;
router.push (`/auth/login?returnTo=$ {encodeURIComponent (currentPath)}`)return ;
}await setDefaultTemplate.mutateAsync (templateId)}<CardContent className=p-4> <div className="flex items-center justify-between"> <div className=space-y-1> <div className="flex items-center gap-2"> <h3 className=font-medium> {template.title ;


:src_backup/components/contracts/templates/TemplateList.tsx
}'"
:src_backup/components/contracts/templates/TemplateList.tsx
origin/cursor/automate-test-improve-and-merge-code-2533
}<Button > <Trash className="h-4 w-4 text-destructive" /> </Button> </div> </div> <Separator className="my-3" /> <Button className="w-full" > Use This Template </Button> </CardContent> </Card>) )}<AlertDialog open= {!!templateToDelete ;
}onOpenChange= {() => setTemplateToDelete (null) ";
}> <AlertDialogContent> <AlertDialogHeader> <AlertDialogTitle>Delete Template</AlertDialogTitle> <AlertDialogDescription> Are you sure you want to delete this template? This action cannot be undone. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel>Cancel</AlertDialogCancel> <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90" onClick={handleDeleteConfirm ;
}> Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </div>)}'";
}'"
}'"
}"
origin/cursor/automate-test-improve-and-merge-code-2533
}<Button > <Trash className="h-4 w-4 text-destructive /> </Button> </div> </div> <Separator className=my-3" /> <Button className="w-full > Use This Template </Button> </CardContent> </Card>) )}<AlertDialog open= {!!templateToDelete ;
}onOpenChange= {() => setTemplateToDelete (null) ;
}> <AlertDialogContent> <AlertDialogHeader> <AlertDialogTitle>Delete Template</AlertDialogTitle> <AlertDialogDescription> Are you sure you want to delete this template? This action cannot be undone. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel>Cancel</AlertDialogCancel> <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90" onClick={handleDeleteConfirm ;
}> Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </div>)}";
}'"
