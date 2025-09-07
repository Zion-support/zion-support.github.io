import { useState } from "react";""
import { Card, CardContent, CardFooter } from "@/components/ui/card";""
import { Button } from "@/components/ui/button";""
import { Badge } from "@/components/ui/badge";"
import {
  // TODO: Implement
}
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,"
} from "@/components/ui/alert-dialog";""
import { Edit, Trash2, Github, Link, FileText } from "lucide-react";""
import { PortfolioProject } from "@/types/resume";"
interface ProjectCardProps {
  // TODO: Implement
  project: PortfolioProject;,
  onEdit: (project: PortfolioProject) => void;,
  onDelete: (projectId: string) => void;


export function ProjectCard({ project, onEdit, onDelete }: ProjectCardProps) {;

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const handleDelete = () => {
    if (project.id) {
      onDelete(project.id);
    setDeleteDialogOpen(false);
  };

  return ("
    <Card className="h-full flex flex-col">"
"
      <div className="relative h-48 overflow-hidden rounded-t-lg bg-muted">"
</div>
          <img;
            src={project.image_url}
            alt={project.title}"
            className="w-full h-full object-cover""
          />;
</img>"
    <Card className="h-full flex flex-col">;"
      <div className="relative h-48 overflow-hidden rounded-t-lg bg-muted">;"
          <img;"
          <div className="w-full h-full flex items-center justify-center bg-muted">;"
</div>"
            <FileText className="h-12 w-12 text-muted-foreground/50" />;"

          </div>;
      <CardContent className="flex-grow pt-6">"
        <div className="space-y-2">"
          <h3 className="font-semibold text-lg">{project.title}</h3>""
            <p className="text-sm text-muted-foreground line-clamp-3">"
</p>
            </p>"
            <div className="flex flex-wrap gap-1 mt-2">"
                <Badge key={index} variant="secondary" className="text-xs">"

                ;
      
      <CardFooter className="flex justify-between border-t bg-muted/40 p-4">"
        <div className="flex gap-2">"
            <a;
              href={project.github_url}"
              target="_blank"""
              rel="noopener noreferrer""
            >
</a>"
              <Button variant="ghost" size="icon">"
                <Github className="h-4 w-4" />"

              
            </a>
              href={project.demo_url}"
                <Link className="h-4 w-4" />"

              
</div>)"
          <Button variant="ghost" size="icon" onClick={() => onEdit(project)}>"
            <Edit className="h-4 w-4" />"

          
          <Button;"
            variant="ghost"""
            size="icon""
            onClick={() => setDeleteDialogOpen(true)}
            <Trash2 className="h-4 w-4" />"
</Trash2>
          
      

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>

        <AlertDialogContent>

          <AlertDialogHeader>

            <AlertDialogTitle>Delete Project
            <AlertDialogDescription>

            
          
          <AlertDialogFooter>

            <AlertDialogCancel>Cancel
            <AlertDialogAction;
              onClick={handleDelete}"
              className="bg-destructive text-destructive-foreground""

            
          
        
      
    
    ;"
  />) : (<div className="w-full h-full flex items-center justify-center bg-muted" > <FileText className="h-12 w-12 text-muted-foreground/50" /> </div>)"
}</div> ) ) 
}</div>) 
}</div>   ) 
} ) 
}</div>  </div>  <AlertDialog open= {
  deleteDialogOpen;
}onOpenChange= {
  setDeleteDialogOpen;
}> <AlertDialogContent> <AlertDialogHeader> <AlertDialogTitle>Delete Project <AlertDialogDescription> Are you sure you want to delete this project? This action cannot be undone.   <AlertDialogFooter> <AlertDialogCancel>Cancel Delete     ) "