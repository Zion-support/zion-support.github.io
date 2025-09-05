
import { useState } from 'react',;
import { Card, CardContent, CardFooter } from '@/components/ui/card',;
import { Button } from '@/components/ui/button',;
import { Badge } from '@/components/ui/badge',;
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog',;
import { Edit, Trash2, Github, Link, FileText } from 'lucide-react';
import Image from 'next/image',;
import { PortfolioProject } from '@/types/resume',;
interface ProjectCardProps {;
  project: PortfolioProject,;
  onEdit: (project: PortfolioProject) => void,;
  onDelete: (projectId: string) => void;
}
;
export function ProjectCard({ project, onEdit, onDelete }: ProjectCardProps) {;
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const handleDelete = () => {;
    if (project.id) {;
      onDelete(project.id);
    }
<<<<<<< HEAD
    setDeleteDialogOpen(false)
  },
  
  return (
    <Card className=&quot;h-full flex flex-col&quot;>
      <div className=&quot;relative h-48 overflow-hidden rounded-t-lg bg-muted&quot;>
        {project.image_url ? (
          <Image
            src={project.image_url}
            alt={project.title}
            className=&quot;object-cover&quot;
            loading=&quot;lazy&quot;
          />
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
=======
    setDeleteDialogOpen(false);
  };
  return (;
    <Card className="h-full flex flex-col">;
      <div className="relative h-48 overflow-hidden rounded-t-lg bg-muted">;
        {project.image_url ? (;
          <Image;
            src={project.image_url}
            alt={project.title}
            className="object-cover";
            loading="lazy";
          />;
        ) : (;
          <div className="w-full h-full flex items-center justify-center bg-muted">;
            <FileText className="h-12 w-12 text-muted-foreground/50" />;
          </div>;
        )}
      </div>;
      <CardContent className="flex-grow pt-6">;
        <div className="space-y-2">;
          <h3 className="font-semibold text-lg">{project.title}</h3>;
          {project.description && (;
            <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>;
          )}
;
          {project.technologies && project.technologies.length > 0 && (;
            <div className="flex flex-wrap gap-1 mt-2">;
              {project.technologies.map((tech, index) => (;
                <Badge key={index} variant="secondary" className="text-xs">;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                  {tech}
                </Badge>;
              ))}
            </div>;
          )}
<<<<<<< HEAD
        </div>
      </CardContent>
      
      <CardFooter className=&quot;flex justify-between border-t bg-muted/40 p-4&quot;>
        <div className=&quot;flex gap-2&quot;>
          {project.github_url && (
            <a
              href={project.github_url}
              target=&quot;_blank&quot;
              rel=&quot;noopener noreferrer&quot;
              aria-label=&quot;GitHub&quot;
              title=&quot;GitHub&quot;
            >
              <Button variant=&quot;ghost&quot; size=&quot;icon&quot; aria-label=&quot;GitHub link&quot;>
                <Github className=&quot;h-4 w-4&quot; />
              </Button>
            </Link>
=======
        </div>;
      </CardContent>;
      <CardFooter className="flex justify-between border-t bg-muted/40 p-4">;
        <div className="flex gap-2">;
          {project.github_url && (;
            <a;
              href={project.github_url}
              target="_blank";
              rel="noopener noreferrer";
              aria-label="GitHub";
              title="GitHub";
            >;
              <Button variant="ghost" size="icon" aria-label="GitHub link">;
                <Github className="h-4 w-4" />;
              </Button>;
            </a>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
          )}
;
          {project.demo_url && (;
            <a;
              href={project.demo_url}
<<<<<<< HEAD
              target=&quot;_blank&quot;
              rel=&quot;noopener noreferrer&quot;
              aria-label=&quot;Live demo&quot;
              title=&quot;Live demo&quot;
            >
              <Button variant=&quot;ghost&quot; size=&quot;icon&quot; aria-label=&quot;Live demo link&quot;>
                <Link className=&quot;h-4 w-4&quot; />
              </Button>
            </Link>
          )}
        </div>
        
        <div className=&quot;flex gap-2&quot;>
          <Button variant=&quot;ghost&quot; size=&quot;icon&quot; onClick={() => onEdit(project)} aria-label=&quot;Edit project&quot;>
            <Edit className=&quot;h-4 w-4&quot; />
          </Button>
          <Button variant=&quot;ghost&quot; size=&quot;icon&quot; onClick={() => setDeleteDialogOpen(true)} aria-label=&quot;Delete project&quot;>
            <Trash2 className=&quot;h-4 w-4&quot; />
          </Button>
        </div>
      </CardFooter>
      
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Project</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this project? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className=&quot;bg-destructive text-destructive-foreground&quot;>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  )
=======
              target="_blank";
              rel="noopener noreferrer";
              aria-label="Live demo";
              title="Live demo";
            >;
              <Button variant="ghost" size="icon" aria-label="Live demo link">;
                <Link className="h-4 w-4" />;
              </Button>;
            </a>;
          )}
        </div>;
        <div className="flex gap-2">;
          <Button variant="ghost" size="icon" onClick={() => onEdit(project)} aria-label="Edit project">;
            <Edit className="h-4 w-4" />;
          </Button>;
          <Button variant="ghost" size="icon" onClick={() => setDeleteDialogOpen(true)} aria-label="Delete project">;
            <Trash2 className="h-4 w-4" />;
          </Button>;
        </div>;
      </CardFooter>;
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
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;