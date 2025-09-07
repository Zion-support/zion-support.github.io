
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
    ),;
  }
;
  return (;
    <div className="space-y-3">;
      {templates.map((template) => (;
        <Card key={template.id} className={template.is_default ? "border-zion-purple" :""}>;

  const handleSetDefault = async (templateId: string) => {;
    await setDefaultTemplate && setDefaultTemplate.mutateAsync(templateId);
  };

  if (isLoading) {;
    return ("
      <div className="flex justify-center items-center py-8">;"

        <Loader2 className="h-8 w-8 animate-spin text-zion-purple" />;
      </div>;
    );
  }

}

  const handleSetDefault = async (templateId: string) => {}
    await setDefaultTemplate.mutateAsync(templateId)
  },

  const handleSetDefault = async (templateId: string) => {;
    await setDefaultTemplate && setDefaultTemplate.mutateAsync(templateId);
  };

  if (isLoading) {;
    return ("
      <div className="flex justify-center items-center py-8">;"

        <Loader2 className="h-8 w-8 animate-spin text-zion-purple" />;
      </div>;
    );
  }
    return ("
      <div className="text-center py-8">;"
        <p className="text-muted-foreground">No templates found.</p>;"
        <p className="text-sm text-muted-foreground">Save a contract as a template to reuse it later.</p>;
      </div>;
    );
  }
  return ("
    <div className="space-y-3">;
      {templates && templates.map((template) => (;"
        <Card key={template && template.id} className={template && template.is_default ? "border-zion-purple" : ""}>;"
          <CardContent className="p-4">;"
            <div className="flex items-center justify-between">;"
              <div className="space-y-1">;"
                <div className="flex items-center gap-2">;"

                  <h3 className="font-medium">{template && template.title}</h3>;
                  {template && template.is_default && (;"
                    <span className="bg-zion-purple/10 text-zion-purple text-xs px-2 py-0 && 0.5 rounded-full">Default</span>;
                  )}

                </div>
                <p className="text-xs text-muted-foreground">
                  Last updated: {new Date(template.updated_at).toLocaleDateString()}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" onClick={() => onEdit(template)}>
                  <Edit className="h-4 w-4" />
                </Button>
                {!template.is_default ? (
                  <Button variant="ghost" size="icon" onClick={() => handleSetDefault(template.id)}>
                    <Star className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button variant="ghost" size="icon" disabled>
                    <StarOff className="h-4 w-4" />
                  </Button>
                )}
                <Button variant="ghost" size="icon" onClick={() => handleDeleteClick(template.id)}>
                  <Trash className="h-4 w-4 text-destructive" />
                </Button>
              </div>
            </div>
            <Separator className="my-3" />

            <Button;
              onClick={() => onSelect(template)} "
              variant="outline" 


                <p className="text-xs text-muted-foreground">;
                  Last updated: {new Date(template && template.updated_at).toLocaleDateString()}
                </p>;
              </div>;

              <div className="flex items-center gap-2">;
                <Button variant="ghost" size="icon" onClick={() => onEdit(template)}>;
                  <Edit className="h-4 w-4" />;
                </Button>;
                {!template.is_default ? (;
                  <Button variant="ghost" size="icon" onClick={() => handleSetDefault(template.id)}>;
                    <Star className="h-4 w-4" />;
                  </Button>;
                ) :(;
                  <Button variant="ghost" size="icon" disabled>;
                    <StarOff className="h-4 w-4" />;
                  </Button>;
                )}
                <Button variant="ghost" size="icon" onClick={() => handleDeleteClick(template.id)}>;
                  <Trash className="h-4 w-4 text-destructive" />;
                </Button>;
              </div>;
            </div>;


            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;
    </div>;
  ),; import {
  AlertDialog;
AlertDialogAction;
AlertDialogCancel;
AlertDialogContent;
AlertDialogDescription;
AlertDialogFooter;
AlertDialogHeader;
interface TemplateListProps {
  templates: ContractTemplate[];
isLoading: boolean;
onSelect: (template: ContractTemplate) => void;
onEdit: (template: ContractTemplate) => void 
}export function TemplateList ({
  templates;
isLoading;
onSelect;
onEdit 
}: TemplateListProps) {
  const [templateToDelete, setTemplateToDelete] = useState<string | null> (null);
const {
  deleteTemplate, setDefaultTemplate 
}= useContractTemplates ();
const handleDeleteClick = (templateId: string) => {
  setTemplateToDelete (templateId) 
};
const handleDeleteConfirm = async () => {
  if (templateToDelete) {
  await deleteTemplate.mutateAsync (templateToDelete);
setTemplateToDelete (null) 
}
;

};
const handleSetDefault = async (templateId: string) => {
  await setDefaultTemplate.mutateAsync (templateId) 
};
if (isLoading) {
  return (<div className="flex justify-center items-center py-8" > <Loader2 className="h-8 w-8 animate-spin text-zion-purple" /> </div>) 
}if (!templates.length) {
  return (<div className="text-center py-8" > <p className="text-muted-foreground" >No templates found.</p> <p className="text-sm text-muted-foreground" >Save a contract as a template to reuse it later.</p> </div>) 
}return (<div className="space-y-3" > {
  templates.map ( (template) => (<Card key= {
  template.id 
}className= {
  template.is default ? "border-zion-purple" : "" 
}> template.title 
}</h3> {
  template.is default && (<span className="bg-zion-purple/10 text-zion-purple text-xs px-2 py-0.5 rounded-full">Default</span>) 
}</div> <p className="text-xs text-muted-foreground"> Last updated: {
  new Date (template.updated at) .toLocaleDateString () 
}</p> </div> </Button>) : (<Button variant=" ghost"size=" icon"disabled> <StarOff className="h-4 w-4"/> </Button>) 
}<Trash className="h-4 w-4 text-destructive"/> </Button> </div> </div> <Separator className="my-3"/> <Button className="w-full"> Use This Template </Button> </CardContent> </Card>) ) 
}<AlertDialog open= {
  !!templateToDelete 
}onOpenChange= {
  () => setTemplateToDelete (null) 
}> <AlertDialogContent> <AlertDialogHeader> <AlertDialogTitle>Delete Template</AlertDialogTitle> <AlertDialogDescription> Are you sure you want to delete this template? This action cannot be undone. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel>Cancel</AlertDialogCancel> <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90" onClick= {
  handleDeleteConfirm 
}> Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </div>) 
}
    </div>;
  );
}
;
}</h3> {)"
  template.is default && (<span className="bg-zion-purple/10 text-zion-purple text-xs px-2 py-0.5 rounded-full">Default</span>)""
}</div> <p className="text-xs text-muted-foreground"> Last updated: {"
</p>"
}</p> </div> ) : (<Button variant=" ghost"size=" icon"disabled> <StarOff className="h-4 w-4"/> )""
}<Trash className="h-4 w-4 text-destructive"/>  </div> </div> <Separator className="my-3"/> <Button className="w-full"> Use This Template   ) )"

}<AlertDialog open= {
  !!templateToDelete;
}onOpenChange= {
  () => setTemplateToDelete (null) 

}> Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </div>) 
}
    </div>;
  );
}
;
;
