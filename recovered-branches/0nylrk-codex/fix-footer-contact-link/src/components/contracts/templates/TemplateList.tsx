




import {ContractTemplate} from "@/types/contracts";""
import {Button} from "@/components/ui/button";""
import {Loader2, Edit, Trash, Star, StarOff} from "lucide-react";""
import {useContractTemplates} from "@/hooks/useContractTemplates";""
import {Card, CardContent} from "@/components/ui/card";""
import {Separator} from "@/components/ui/separator";""
import {AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle} from "@/components/ui/alert-dialog";""
import {useState} from "react";"
interface TemplateListProps {;
  templates: ContractTemplate[],;
  isLoading: boolean,;
  onSelect: (template: ContractTemplate) => void,;
  onEdit: (template: ContractTemplate) => void;
}

export function TemplateList(): any ({;
  templates;
  isLoading;
  onSelect;
  onEdit;)
}: TemplateListProps) {;
  const [templateToDelete, setTemplateToDelete] = useState<string | null>(null);
</string>
  const [templateToDelete, setTemplateToDelete] = useState<string | null>(null),
</string>"
      <div className="flex justify-center items-center py-8">;"
</div>"
        <Loader2 className="h-8 w-8 animate-spin text-zion-purple" />;"
</Loader2>
      </div>;"
      <div className="text-center py-8">;"
</div>"
        <p className="text-muted-foreground">No templates found.</p>;""
        <p className="text-sm text-muted-foreground">Save a contract as a template to reuse it later.</p>;"
      </div>;"
    <div className="space-y-3">;"
</div>"
        <Card key={template && template.id} className={template && template.is_default ? "border-zion-purple" : ""}>;"
</Card>
  const [templateToDelete, setTemplateToDelete] = useState<string | null>(null);
</string>"
    <div className="space-y-3">;"
</div>"
        <Card key={template.id} className={template.is_default ? "border-zion-purple" :""}>;"
</Card>"
          <CardContent className="p-4">;"
</CardContent>"
            <div className="flex items-center justify-between">;"
</div>"
              <div className="space-y-1">;"
</div>"
                <div className="flex items-center gap-2">;"
</div>"
                  <h3 className="font-medium">{template && template.title}</h3>;""
                    <span className="bg-zion-purple/10 text-zion-purple text-xs px-2 py-0 && 0.5 rounded-full">Default</span>;""
      <div className="flex justify-center items-center py-8">;"
</div>"
        <Loader2 className="h-8 w-8 animate-spin text-zion-purple" />;"
</Loader2>
      </div>;"
      <div className="text-center py-8">;"
</div>"
        <p className="text-muted-foreground">No templates found.</p>;""
        <p className="text-sm text-muted-foreground">Save a contract as a template to reuse it later.</p>;"
      </div>;"
    <div className="space-y-3">;"
</div>"
        <Card key={template && template.id} className={template && template.is_default ? "border-zion-purple" : ""}>;"
</Card>"
          <CardContent className="p-4">;"
</CardContent>"
            <div className="flex items-center justify-between">;"
</div>"
              <div className="space-y-1">;"
</div>"
                <div className="flex items-center gap-2">;"
</div>"
                  <h3 className="font-medium">{template && template.title}</h3>;""
                    <span className="bg-zion-purple/10 text-zion-purple text-xs px-2 py-0 && 0.5 rounded-full">Default</span>;"
                </div>"
                <p className="text-xs text-muted-foreground">"
</p>
                </p>
              </div>"
              <div className="flex items-center gap-2">"
</div>"
                <Button variant="ghost" size="icon" onClick={() => onEdit(template)}>"
</Button>"
                  <Edit className="h-4 w-4" />"
</Edit>
                </Button>"
                  <Button variant="ghost" size="icon" onClick={() => handleSetDefault(template.id)}>"
</Button>"
                    <Star className="h-4 w-4" />"
</Star>
                  </Button>"
                  <Button variant="ghost" size="icon" disabled>"
</Button>"
                    <StarOff className="h-4 w-4" />"
</StarOff>
                  </Button>"
                <Button variant="ghost" size="icon" onClick={() => handleDeleteClick(template.id)}>"
</Button>"
                  <Trash className="h-4 w-4 text-destructive" />"
</Trash>
                </Button>
              </div>
            </div>"
            <Separator className="my-3" />"
</Separator>
            <Button;
              onClick={() => onSelect(template)} 
</Button>
            </Button>
          </CardContent>
        </Card>
      <AlertDialog open={!!templateToDelete} onOpenChange={() => setTemplateToDelete(null)}>
</AlertDialog>
        <AlertDialogContent>
</AlertDialogContent>
          <AlertDialogHeader>
</AlertDialogHeader>
            <AlertDialogTitle>Delete Template</AlertDialogTitle>
            <AlertDialogDescription>
</AlertDialogDescription>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
</AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction;"
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90""
              onClick={handleDeleteConfirm}

                </div>;
</AlertDialogAction>"
                <p className="text-xs text-muted-foreground">;"
</p>
                </p>;
              </div>;"
              <div className="flex items-center gap-2">;"
</div>"
                <Button variant="ghost" size="icon" onClick={() => onEdit(template)}>;"
</Button>"
                  <Edit className="h-4 w-4" />;"
</Edit>
                </Button>;"
                  <Button variant="ghost" size="icon" onClick={() => handleSetDefault(template && template.id)}>;"
</Button>"
                    <Star className="h-4 w-4" />;"
</Star>
                  </Button>;"
                  <Button variant="ghost" size="icon" disabled>;"
</Button>"
                    <StarOff className="h-4 w-4" />;"
</StarOff>
                  </Button>;"
                <Button variant="ghost" size="icon" onClick={() => handleDeleteClick(template && template.id)}>;"
</Button>"
                  <Trash className="h-4 w-4 text-destructive" />;"
</Trash>
                </Button>;
              </div>;
            </div>;"
            <Separator className="my-3" />;"
</Separator>
            <Button;
              onClick={() => onSelect(template)} ;
</Button>"
            <Separator className="my-3" />;"
</Separator>
            <Button ;
              onClick={() => onSelect(template)} ;
</Button>
            </Button>;
          </CardContent>;
        </Card>))}
      <AlertDialog open={!!templateToDelete} onOpenChange={() => setTemplateToDelete (null)}>;
</AlertDialog>
        <AlertDialogContent>;
</AlertDialogContent>
          <AlertDialogHeader>;
</AlertDialogHeader>
            <AlertDialogTitle > Delete Template</AlertDialogTitle>;
            <AlertDialogDescription>;
</AlertDialogDescription>
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;
</AlertDialogFooter>

            <AlertDialogCancel > Cancel</AlertDialogCancel>;
            <AlertDialogAction;"
              className="bg - destructive text - destructive - foreground hover:bg - destructive / 90";"
              on_click={handleDeleteConfirm}
            >;
</AlertDialogAction>
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;
    </div>);
    </div>;
  const [templateToDelete, setTemplateToDelete] = useState<string | null> (null);
</string>"
  return (<div className="flex justify-center items-center py-8" > <Loader2 className="h-8 w-8 animate-spin text-zion-purple" /> </div>)""
  return (<div className="text-center py-8" > <p className="text-muted-foreground" >No templates found.</p> <p className="text-sm text-muted-foreground" >Save a contract as a template to reuse it later.</p> </div>)""
}return (<div className="space-y-3" > {"
</div>)
  templates.map ( (template) => (<Card key= {
  template.id;
}className= {"
  template.is default ? "border-zion-purple" : """
}> template.title;
</Card>
}</h3> {)"
  template.is default && (<span className="bg-zion-purple/10 text-zion-purple text-xs px-2 py-0.5 rounded-full">Default</span>)""
}</div> <p className="text-xs text-muted-foreground"> Last updated: {"
</p>"
}</p> </div> </Button>) : (<Button variant=" ghost"size=" icon"disabled> <StarOff className="h-4 w-4"/> </Button>)""
}<Trash className="h-4 w-4 text-destructive"/> </Button> </div> </div> <Separator className="my-3"/> <Button className="w-full"> Use This Template </Button> </CardContent> </Card>) )"
</Trash>
}<AlertDialog open= {
  !!templateToDelete;
}onOpenChange= {
  () => setTemplateToDelete (null) 
</AlertDialog>"
}> <AlertDialogContent> <AlertDialogHeader> <AlertDialogTitle>Delete Template</AlertDialogTitle> <AlertDialogDescription> Are you sure you want to delete this template? This action cannot be undone. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel>Cancel</AlertDialogCancel> <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90" onClick= {"
</AlertDialogContent>
}> Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </div>) 
    </div>;"