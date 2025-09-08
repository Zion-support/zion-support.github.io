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




  AlertDialog;
  AlertDialogAction;
  AlertDialogCancel;
  AlertDialogContent;
  AlertDialogDescription;
  AlertDialogFooter;
  AlertDialogHeader;



  templates: ContractTemplate[];
  isLoading: boolean;
  onSelect: (template: ContractTemplate) => void;
  onEdit: (template: ContractTemplate) => void



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



            <Separator className="my-3 />

                  onClick={() => handleDeleteClick(template.id)}
                  aria-label=Delete template"
                >
                  <Trash className="h-4 w-4 text-destructive />
                </Button>
              </div>
            </div>



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


                >;
                  <Trash className="h-4 w-4 text-destructive />;
                </Button>;
              </div>;
            </div>;
            <Separator className="my-3" />;


            <Button
              onClick = {() => onSelect(template)}
              variant=outline" ;
              className="w-full;
            >;
              Use This Template;
            </Button>;
          </CardContent>;



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



  // Check condition
if ( {) {
  $2
}
    return (
      <div className="flex justify - center items - center py - 8">;


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


                {!template.is_default ? (
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger as_child>;
                        <Button;
                          variant=ghost;
                          size="icon";


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
                  <Button variant="ghost" size=icon disabled aria - label="Default template">;
                    <StarOff className=h - 4 w - 4 />;
                  </Button>)}
                <Button;
                  variant="ghost";
                  size="icon";


                  aria - label="Delete template";
                >;
                  <Trash className=h - 4 w - 4 text - destructive />;
                </Button>;
              </div>;
            </div>;
            <Separator className="my - 3" />;
            <Button;


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


            >;
              Delete;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;


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


  handleDeleteConfirm;
}> Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </div>);

}



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


