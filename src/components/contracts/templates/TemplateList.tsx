
import { ContractTemplate } from "@/types/contracts";,
import { Button } from "@/components/ui/button";,
import { Loader2, Edit, Trash, Star, StarOff } from "lucide-react";
import { useContractTemplates } from "@/hooks/useContractTemplates";,
import { Card, CardContent } from "@/components/ui/card";,
import { Separator } from "@/components/ui/separator";,
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";,
import { useAuth } from "@/hooks/useAuth";
// useRouter replaces the old useLocation hook from react-router
}
export function TemplateList({templates;
                          onClick = {() => handleSetDefault(template.id)}
            <Button
return
}await setDefaultTemplate.mutateAsync (templateId)
}
<CardContent className="p-4"> <div className="flex items-center justify-between"> <div className="space-y-1"> <div className="flex items-center gap-2"> <h3 className="font-medium"> {template.title}</h3> {"
}<AlertDialog open= {!!templateToDelete}onOpenChange= {
  () => setTemplateToDelete (null) ";
}> <AlertDialogContent> <AlertDialogHeader> <AlertDialogTitle>Delete Template</AlertDialogTitle> <AlertDialogDescription> Are you sure you want to delete this template? This action cannot be undone. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel>Cancel</AlertDialogCancel> <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90" onClick={handleDeleteConfirm}> Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </div>);
}'"};