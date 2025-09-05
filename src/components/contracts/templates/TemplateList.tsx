
// useRouter replaces the old useLocation hook from react-router
import {_AlertDialog, _AlertDialogAction, _AlertDialogCancel, _AlertDialogContent, _AlertDialogDescription, _AlertDialogFooter, _AlertDialogHeader, _AlertDialogTitle} from "@/components/ui/alert-dialog";

interface TemplateListProps {_templates: ContractTemplate[];
  isLoading: boolean;
  onSelect: (_template: ContractTemplate) => void;
  onEdit: (_template: ContractTemplate) => void;}

export function TemplateList(_{_templates, _isLoading, _onSelect, _onEdit}: TemplateListProps) {_const [templateToDelete, _setTemplateToDelete] = useState<string | null>(null);
  const { deleteTemplate, _setDefaultTemplate} = useContractTemplates();
  const {_user} = useAuth();
  const _router = useRouter();

  const _handleDeleteClick = (_templateId: string) => {_setTemplateToDelete(templateId);};

  const _handleDeleteConfirm = async () => {_if (templateToDelete) {
      await deleteTemplate.mutateAsync(templateToDelete);
      setTemplateToDelete(null);}
  };

  const _handleSetDefault = async (_templateId: string) => {_if (!user) {
      const _currentPath = router.asPath;
      router.push(`/auth/login?returnTo=${encodeURIComponent(currentPath)}`);
      return;
    }
    await setDefaultTemplate.mutateAsync(templateId);
  };

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
              
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={_() => onEdit(template)}
                  aria-label="Edit template"
                >
                  <Edit className="h-4 w-4" />
                </Button>
                {_!template.is_default ? (_<TooltipProvider>
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
                      {_!user && (
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
                  onClick={_() => handleDeleteClick(template.id)}
                  aria-label="Delete template"
                >
                  <Trash className="h-4 w-4 text-destructive" />
                </Button>
              </div>
            </div>
            
            <Separator className="my-3" />
            
            <Button 
              onClick={_() => onSelect(template)} 
              variant="outline" 
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
  );
}
