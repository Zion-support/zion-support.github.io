




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
        <p className="text-muted-foreground">No templates found.</p>;""
        <p className="text-sm text-muted-foreground">Save a contract as a template to reuse it later.</p>;"
    <div className="space-y-3">;"
        <Card key={template && template.id} className={template && template.is_default ? "border-zion-purple" : ""}>;"

        <Card key={template.id} className={template.is_default ? "border-zion-purple" :""}>;"
"
          <CardContent className="p-4">;"
            <div className="flex items-center justify-between">;"
              <div className="space-y-1">;"
                <div className="flex items-center gap-2">;"
                  <h3 className="font-medium">{template && template.title}</h3>;""
                    <span className="bg-zion-purple/10 text-zion-purple text-xs px-2 py-0 && 0.5 rounded-full">Default</span>;""
                    <span className="bg-zion-purple/10 text-zion-purple text-xs px-2 py-0 && 0.5 rounded-full">Default</span>;"
                <p className="text-xs text-muted-foreground">"
</p>
              <div className="flex items-center gap-2">"
                <Button variant="ghost" size="icon" onClick={() => onEdit(template)}>"
                  <Edit className="h-4 w-4" />"

                  <Button variant="ghost" size="icon" onClick={() => handleSetDefault(template.id)}>"
                    <Star className="h-4 w-4" />"

                  <Button variant="ghost" size="icon" disabled>"
                    <StarOff className="h-4 w-4" />"

                <Button variant="ghost" size="icon" onClick={() => handleDeleteClick(template.id)}>"
                  <Trash className="h-4 w-4 text-destructive" />"

                
              </div>
            <Separator className="my-3" />"

            <Button;
              onClick={() => onSelect(template)} 

            
          
        
      <AlertDialog open={!!templateToDelete} onOpenChange={() => setTemplateToDelete(null)}>

        <AlertDialogContent>

          <AlertDialogHeader>

            <AlertDialogTitle>Delete Template
            <AlertDialogDescription>

            
          
          <AlertDialogFooter>

            <AlertDialogCancel>Cancel
            <AlertDialogAction;"
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90""
              onClick={handleDeleteConfirm}

                </div>;
                <p className="text-xs text-muted-foreground">;"
                </p>;
                <Button variant="ghost" size="icon" onClick={() => onEdit(template)}>;"
                  <Edit className="h-4 w-4" />;"

                ;"
                  <Button variant="ghost" size="icon" onClick={() => handleSetDefault(template && template.id)}>;"
                    <Star className="h-4 w-4" />;"

                  <Button variant="ghost" size="icon" disabled>;"
                    <StarOff className="h-4 w-4" />;"

                <Button variant="ghost" size="icon" onClick={() => handleDeleteClick(template && template.id)}>;"
                  <Trash className="h-4 w-4 text-destructive" />;"

                ;
            <Separator className="my-3" />;"

              onClick={() => onSelect(template)} ;

            <Button ;

        ))}
      <AlertDialog open={!!templateToDelete} onOpenChange={() => setTemplateToDelete (null)}>;

        <AlertDialogContent>;

          <AlertDialogHeader>;

            <AlertDialogTitle > Delete Template;
            <AlertDialogDescription>;

          <AlertDialogFooter>;


            <AlertDialogCancel > Cancel;
              className="bg - destructive text - destructive - foreground hover:bg - destructive / 90";"
              on_click={handleDeleteConfirm}
            >;

    </div>);
  const [templateToDelete, setTemplateToDelete] = useState<string | null> (null);
  return (<div className="flex justify-center items-center py-8" > <Loader2 className="h-8 w-8 animate-spin text-zion-purple" /> </div>)""
  return (<div className="text-center py-8" > <p className="text-muted-foreground" >No templates found.</p> <p className="text-sm text-muted-foreground" >Save a contract as a template to reuse it later.</p> </div>)""
}return (<div className="space-y-3" > {"
</div>)
  templates.map ( (template) => (<Card key= {
  template.id;
}className= {"
  template.is default ? "border-zion-purple" : """
}> template.title;

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
}> <AlertDialogContent> <AlertDialogHeader> <AlertDialogTitle>Delete Template <AlertDialogDescription> Are you sure you want to delete this template? This action cannot be undone.   <AlertDialogFooter> <AlertDialogCancel>Cancel <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90" onClick= {"

}> Delete     </div>) 