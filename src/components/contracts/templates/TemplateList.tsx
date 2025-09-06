import { useState } from "react";
interface TemplateListProps {
  templates: ContractTemplate[],
  isLoading: boolean,
  onSelect: (template: ContractTemplate,) => void,
  onEdit: (template: ContractTemplate,) => void
}
import { useAuth } from "@/hooks/useAuth";
    await setDefaultTemplate && setDefaultTemplate.mutateAsync(templateId);
  };

  if (isLoading) {;


  if (isLoading) {
    return (
                </div>
                <p className="text-xs text-muted-foreground">
                  Last updated: {new Date(template.updated_at).toLocaleDateString()}
                </p>
              </div>
                <Button
                  onClick={() => handleDeleteClick(template.id)}
                  aria-label="Delete template"
                >
                  <Trash className="h-4 w-4 text-destructive" />
                </Button>
              </div>
            </div>
            <Button
              onClick = {() => onSelect(template),}
              variant="outline"

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


  handleDeleteConfirm ;
}> Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </div>) ;
}'"};

}
;
