=======
import { ContractTemplate } from "@/types/contracts",
import { Button } from "@/components/ui/button",
import { Loader2, Edit, Trash, Star, StarOff } from 'lucide-react'
import { useContractTemplates } from "@/hooks/useContractTemplates",
import { Card, CardContent } from "@/components/ui/card",
import { Separator } from "@/components/ui/separator",
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip",
import { useAuth } from "@/hooks/useAuth";


// useRouter replaces the old useLocation hook from react-router

  AlertDialog
  AlertDialogAction
  AlertDialogCancel
  AlertDialogContent
  AlertDialogDescription
  AlertDialogFooter
  AlertDialogHeader
  AlertDialogTitle} from "@/components/ui/alert-dialog"
interface TemplateListProps {
  templates: ContractTemplate[]
  isLoading: boolean
  onSelect: (template: ContractTemplate,) => void
  onEdit: (template: ContractTemplate,) => void


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

  if (isLoading) {
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
                </div>
                <p className="text-xs text-muted-foreground">
                  Last updated: {new Date(template.updated_at).toLocaleDateString()}
                </p>
              </div>

            <Button
              onClick={() => onSelect(template)}
              variant="outline"


            
            <Separator className="my-3" />
            
            <Button 
              onClick={() => onSelect(template)} 
              variant="outline" 
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
              className="w-full"
            >
              Use This Template
            </Button>
          </CardContent>
        </Card>
      ))}
<<<<<<< HEAD
      
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
