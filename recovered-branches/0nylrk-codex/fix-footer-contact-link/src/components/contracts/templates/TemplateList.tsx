
import { ContractTemplate } from "@/types/contracts",
import { Button } from "@/components/ui/button",
import { Loader2, Edit, Trash, Star, StarOff } from "lucide-react",
import { useContractTemplates } from "@/hooks/useContractTemplates",
import { Card, CardContent } from "@/components/ui/card",
import { Separator } from "@/components/ui/separator",import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle} from "@/components/ui/alert-dialog",
import { useState } from "react",interface TemplateListProps {
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
        <Card key={template.id} className={template.isdefault ? &quot;border-zion-purple&quot; : ""}>
import {AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle} from "@/components/ui/alert-dialog";

interface TemplateListProps {templates: ContractTemplate[];
  isLoading: boolean,
  onSelect: (template: ContractTemplate) => void;
  onEdit: (template: ContractTemplate) => void}

export function TemplateList(_{templates, isLoading, onSelect, onEdit}: TemplateListProps) {const [templateToDelete, setTemplateToDelete] = useState<string | null>(null);
  const { deleteTemplate, setDefaultTemplate} = useContractTemplates();

  const handleDeleteClick = (templateId: string) => {setTemplateToDelete(templateId)};

  const handleDeleteConfirm = async () => {if (templateToDelete) {
      await deleteTemplate.mutateAsync(templateToDelete);
      setTemplateToDelete(null)}
  };

  const handleSetDefault = async (templateId: string) => {await setDefaultTemplate.mutateAsync(templateId)};

  if (isLoading) {return (
      <div className="flex justify-center items-center py-8">
        <Loader2 className="h-8 w-8 animate-spin text-zion-purple" />
      </div>
    )}

  if (!templates.length) {return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No templates found.</p>
        <p className="text-sm text-muted-foreground">Save a contract as a template to reuse it later.</p>
      </div>
    )}

  return (_<div className="space-y-3">
      {templates.map((template) => (
        <Card key={template.id} className={template.isdefault ? "border-zion-purple" : ""}>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">{template.title}</h3>
                  {template.isdefault && (
                    <span className="bg-zion-purple/10 text-zion-purple text-xs px-2 py-0.5 rounded-full">Default</span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">
                  Last updated: {new Date(template.updatedat).toLocaleDateString()}
                </p>
              </div>
              
              <div className="flex items-center gap-2&quot;>
                <Button variant=&quot;ghost&quot; size=&quot;icon" onClick={() => onEdit(template)}>
                  <Edit className="h-4 w-4&quot; />
                </Button>
                {!template.isdefault ? (
                  <Button variant=&quot;ghost&quot; size=&quot;icon" onClick={() => handleSetDefault(template.id)}>
                    <Star className="h-4 w-4&quot; />                  </Button>
                ) : (
                  <Button variant=&quot;ghost&quot; size=&quot;icon" disabled>
                    <StarOff className="h-4 w-4&quot; />
                  </Button>
                )}
                <Button variant=&quot;ghost&quot; size=&quot;icon" onClick={() => handleDeleteClick(template.id)}>                  <Trash className="h-4 w-4 text-destructive" />
                </Button>
              </div>
            </div>
            
            <Separator className="my-3&quot; />
            
            <Button,
onClick={() => onSelect(template)} 
              variant=&quot;outline"               className="w-full"
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
            <AlertDialogAction,
className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick={handleDeleteConfirm}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
