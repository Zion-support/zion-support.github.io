
<<<<<<< HEAD
<<<<<<< HEAD
import { ContractTemplate } from "@/types/contracts",
import { Button } from "@/components/ui/button",
import { Loader2, Edit, Trash, Star, StarOff } from "lucide-react",
import { useContractTemplates } from "@/hooks/useContractTemplates",
import { Card, CardContent } from "@/components/ui/card",
import { Separator } from "@/components/ui/separator",
=======
import { ContractTemplate } from &quot;@/types/contracts&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Loader2, Edit, Trash, Star, StarOff } from &quot;lucide-react&quot;;
import { useContractTemplates } from &quot;@/hooks/useContractTemplates&quot;;
import { Card, CardContent } from &quot;@/components/ui/card&quot;;
import { Separator } from &quot;@/components/ui/separator&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
<<<<<<< HEAD
  AlertDialogTitle} from "@/components/ui/alert-dialog",
import { useState } from "react",
=======
  AlertDialogTitle} from &quot;@/components/ui/alert-dialog&quot;;
import { useState } from &quot;react&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface TemplateListProps {
  templates: ContractTemplate[],
  isLoading: boolean,
  onSelect: (template: ContractTemplate) => void,
  onEdit: (template: ContractTemplate) => void
}

export function TemplateList({
  templates,
  isLoading,
  onSelect,
  onEdit
}: TemplateListProps) {
  const [templateToDelete, setTemplateToDelete] = useState<string | null>(null),
  const { deleteTemplate, setDefaultTemplate } = useContractTemplates(),

  const handleDeleteClick = (templateId: string) => {
    setTemplateToDelete(templateId)
  },

  const handleDeleteConfirm = async () => {
    if (templateToDelete) {
      await deleteTemplate.mutateAsync(templateToDelete),
      setTemplateToDelete(null)
    }
  },

  const handleSetDefault = async (templateId: string) => {
    await setDefaultTemplate.mutateAsync(templateId)
  },

  if (isLoading) {
    return (
      <div className=&quot;flex justify-center items-center py-8&quot;>
        <Loader2 className=&quot;h-8 w-8 animate-spin text-zion-purple&quot; />
      </div>
    )
  }

  if (!templates.length) {
    return (
      <div className=&quot;text-center py-8&quot;>
        <p className=&quot;text-muted-foreground&quot;>No templates found.</p>
        <p className=&quot;text-sm text-muted-foreground&quot;>Save a contract as a template to reuse it later.</p>
      </div>
    )
  }

  return (
    <div className=&quot;space-y-3&quot;>
      {templates.map((template) => (
        <Card key={template.id} className={template.is_default ? &quot;border-zion-purple&quot; : ""}>
=======
import {_AlertDialog, _AlertDialogAction, _AlertDialogCancel, _AlertDialogContent, _AlertDialogDescription, _AlertDialogFooter, _AlertDialogHeader, _AlertDialogTitle} from "@/components/ui/alert-dialog";

interface TemplateListProps {_templates: ContractTemplate[];
  isLoading: boolean;
  onSelect: (_template: ContractTemplate) => void;
  onEdit: (_template: ContractTemplate) => void;}

export function TemplateList(_{_templates, _isLoading, _onSelect, _onEdit}: TemplateListProps) {_const [templateToDelete, _setTemplateToDelete] = useState<string | null>(null);
  const { deleteTemplate, _setDefaultTemplate} = useContractTemplates();

  const _handleDeleteClick = (_templateId: string) => {_setTemplateToDelete(templateId);};

  const _handleDeleteConfirm = async () => {_if (templateToDelete) {
      await deleteTemplate.mutateAsync(templateToDelete);
      setTemplateToDelete(null);}
  };

  const _handleSetDefault = async (_templateId: string) => {_await setDefaultTemplate.mutateAsync(templateId);};

  if (isLoading) {_return (
      <div className="flex justify-center items-center py-8">
        <Loader2 className="h-8 w-8 animate-spin text-zion-purple" />
      </div>
    );}

  if (!templates.length) {_return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No templates found.</p>
        <p className="text-sm text-muted-foreground">Save a contract as a template to reuse it later.</p>
      </div>
    );}

  return (_<div className="space-y-3">
      {_templates.map((template) => (
        <Card key={template.id} className={_template.is_default ? "border-zion-purple" : ""}>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">{_template.title}</h3>
                  {_template.is_default && (
                    <span className="bg-zion-purple/10 text-zion-purple text-xs px-2 py-0.5 rounded-full">Default</span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">
                  Last updated: {_new Date(template.updated_at).toLocaleDateString()}
                </p>
              </div>
              
<<<<<<< HEAD
              <div className="flex items-center gap-2&quot;>
                <Button variant=&quot;ghost&quot; size=&quot;icon" onClick={() => onEdit(template)}>
                  <Edit className="h-4 w-4&quot; />
                </Button>
                {!template.is_default ? (
                  <Button variant=&quot;ghost&quot; size=&quot;icon" onClick={() => handleSetDefault(template.id)}>
                    <Star className="h-4 w-4&quot; />
=======
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" onClick={_() => onEdit(template)}>
                  <Edit className="h-4 w-4" />
                </Button>
                {_!template.is_default ? (_<Button variant="ghost" size="icon" onClick={() => handleSetDefault(template.id)}>
                    <Star className="h-4 w-4" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </Button>
                ) : (
                  <Button variant=&quot;ghost&quot; size=&quot;icon" disabled>
                    <StarOff className="h-4 w-4&quot; />
                  </Button>
                )}
<<<<<<< HEAD
                <Button variant=&quot;ghost&quot; size=&quot;icon" onClick={() => handleDeleteClick(template.id)}>
=======
                <Button variant="ghost" size="icon" onClick={_() => handleDeleteClick(template.id)}>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  <Trash className="h-4 w-4 text-destructive" />
                </Button>
              </div>
            </div>
            
            <Separator className="my-3&quot; />
            
            <Button 
<<<<<<< HEAD
              onClick={() => onSelect(template)} 
              variant=&quot;outline" 
=======
              onClick={_() => onSelect(template)} 
              variant="outline" 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              className="w-full"
            >
              Use This Template
            </Button>
          </CardContent>
        </Card>
      ))}
      
      <AlertDialog open={_!!templateToDelete} onOpenChange={_() => setTemplateToDelete(null)}>
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
              onClick={_handleDeleteConfirm}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
