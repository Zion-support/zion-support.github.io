
<<<<<<< HEAD
import { useState } from 'react',;
import { Card, CardContent, CardFooter } from '@/components/ui/card',;
import { Button } from '@/components/ui/button',;
import { Badge } from '@/components/ui/badge',;
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog',;
import { Edit, Trash2, Github, Link, FileText } from 'lucide-react',;
import { PortfolioProject } from '@/types/resume',;
;
interface ProjectCardProps {;
  project:PortfolioProject,;
  onEdit:(project:PortfolioProject) => void,;
  onDelete:(projectId:string) => void;
}
;
export function ProjectCard({ project, onEdit, onDelete } ProjectCardProps) {;
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false),;
  ;
  const handleDelete = () => {;
    if (project.id) {;
      onDelete(project.id),;
    }
    setDeleteDialogOpen(false),;
  },;
  ;
  return (;
    <Card className="h-full flex flex-col">;
      <div className="relative h-48 overflow-hidden rounded-t-lg bg-muted">;
        {project.image_url ? (;
          <img ;
            src={project.image_url} ;
            alt={project.title} ;
            className="w-full h-full object-cover";
          />;
        ) :(;
          <div className="w-full h-full flex items-center justify-center bg-muted">;
            <FileText className="h-12 w-12 text-muted-foreground/50" />;
          </div>;
        )}
      </div>;
      ;
      <CardContent className="flex-grow pt-6">;
        <div className="space-y-2">;
          <h3 className="font-semibold text-lg">{project.title}</h3>;
          ;
          {project.description && (;
            <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>;
          )}
          ;
          {project.technologies && project.technologies.length > 0 && (;
            <div className="flex flex-wrap gap-1 mt-2">;
              {project.technologies.map((tech, index) => (;
                <Badge key={index} variant="secondary" className="text-xs">;
                  {tech}
                </Badge>;
=======
import { useState } from 'react',
import { Card, CardContent, CardFooter } from '@/components/ui/card',
import { Button } from '@/components/ui/button',
import { Badge } from '@/components/ui/badge',
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog',
import { Edit, Trash2, Github, Link, FileText } from 'lucide-react',
import { PortfolioProject } from '@/types/resume',
interface ProjectCardProps {
  project: PortfolioProject,
  onEdit: (project: PortfolioProject) => void,
  onDelete: (projectId: string) => void
}

export function ProjectCard({ project, onEdit, onDelete }: ProjectCardProps) {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false),  
  const _handleDelete = () => {
    if (project.id) {
      onDelete(project.id)
    }
    setDeleteDialogOpen(false)
  },
  
  return (
    <Card className=&quot;h-full flex flex-col&quot;>
      <div className=&quot;relative h-48 overflow-hidden rounded-t-lg bg-muted&quot;>
        {project.image_url ? (
          <img 
            src={project.image_url} 
            alt={project.title} 
            className=&quot;w-full h-full object-cover&quot;          />
        ) : (
          <div className=&quot;w-full h-full flex items-center justify-center bg-muted&quot;>
            <FileText className=&quot;h-12 w-12 text-muted-foreground/50&quot; />
          </div>
        )}
      </div>
      
      <CardContent className=&quot;flex-grow pt-6&quot;>
        <div className=&quot;space-y-2&quot;>
          <h3 className=&quot;font-semibold text-lg&quot;>{project.title}</h3>
          
          {project.description && (
            <p className=&quot;text-sm text-muted-foreground line-clamp-3&quot;>{project.description}</p>
          )}
          
          {project.technologies && project.technologies.length > 0 && (
            <div className=&quot;flex flex-wrap gap-1 mt-2&quot;>
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant=&quot;secondary&quot; className=&quot;text-xs&quot;>
                  {tech}                </Badge>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
              ))}
            </div>;
          )}
<<<<<<< HEAD
        </div>;
      </CardContent>;
      ;
      <CardFooter className="flex justify-between border-t bg-muted/40 p-4">;
        <div className="flex gap-2">;
          {project.github_url && (;
            <a href={project.github_url} target="_blank" rel="noopener noreferrer">;
              <Button variant="ghost" size="icon">;
                <Github className="h-4 w-4" />;
              </Button>;
            </a>;
          )}
          ;
          {project.demo_url && (;
            <a href={project.demo_url} target="_blank" rel="noopener noreferrer">;
              <Button variant="ghost" size="icon">;
                <Link className="h-4 w-4" />;
              </Button>;
            </a>;
          )}
        </div>;
        ;
        <div className="flex gap-2">;
          <Button variant="ghost" size="icon" onClick={() => onEdit(project)}>;
            <Edit className="h-4 w-4" />;
          </Button>;
          <Button variant="ghost" size="icon" onClick={() => setDeleteDialogOpen(true)}>;
            <Trash2 className="h-4 w-4" />;
          </Button>;
        </div>;
      </CardFooter>;
      ;
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>;
        <AlertDialogContent>;
          <AlertDialogHeader>;
            <AlertDialogTitle>Delete Project</AlertDialogTitle>;
            <AlertDialogDescription>;
              Are you sure you want to delete this project? This action cannot be undone.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;
            <AlertDialogCancel>Cancel</AlertDialogCancel>;
            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground">;
              Delete;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;
    </Card>;
  ),;
=======
        </div>
      </CardContent>
      
      <CardFooter className=&quot;flex justify-between border-t bg-muted/40 p-4&quot;>
        <div className=&quot;flex gap-2&quot;>
          {project.github_url && (
            <a href={project.github_url} target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;>
              <Button variant=&quot;ghost&quot; size=&quot;icon&quot;>
                <Github className=&quot;h-4 w-4&quot; />              </Button>
            </Link>
          )}
          
          {project.demo_url && (
            <a href={project.demo_url} target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;>
              <Button variant=&quot;ghost&quot; size=&quot;icon&quot;>
                <Link className=&quot;h-4 w-4&quot; />              </Button>
            </Link>
          )}
        </div>
        
        <div className=&quot;flex gap-2&quot;>
          <Button variant=&quot;ghost&quot; size=&quot;icon&quot; onClick={() => onEdit(project)}>
            <Edit className=&quot;h-4 w-4&quot; />
          </Button>
          <Button variant=&quot;ghost&quot; size=&quot;icon&quot; onClick={() => setDeleteDialogOpen(true)}>
            <Trash2 className=&quot;h-4 w-4&quot; />          </Button>
        </div>
      </CardFooter>
      
      <AlertDialog open={_deleteDialogOpen} onOpenChange={_setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Project</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this project? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className=&quot;bg-destructive text-destructive-foreground&quot;>              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
