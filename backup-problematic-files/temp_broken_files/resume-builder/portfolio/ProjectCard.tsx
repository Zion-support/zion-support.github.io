import { useState } from 'react',;
import { Card, CardContent, CardFooter } from '@/components/ui/card',;
import { Button } from '@/components/ui/button',;
import { Badge } from '@/components/ui/badge',;
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog',;
<<<<<<< HEAD
import { Edit, Trash2, Github, Link, FileText } from 'lucide-react';
import Image from 'next/image',;
import { PortfolioProject } from '@/types/resume',;
;
interface ProjectCardProps {;
  project:PortfolioProject,;
  onEdit:(project:PortfolioProject) => void,;
  onDelete:(projectId:string) => void;
}
;
=======

import { Edit, Trash2, Github, Link, FileText } from 'lucide-react';
import Image from 'next/image';
import { PortfolioProject } from '@/types/resume';
;
interface ProjectCardProps {;
  project: PortfolioProject;,;
  onEdit: (project:PortfolioProject) => void;,;
  onDelete:(projectId:string) => void;
}
>>>>>>> merged-prs-20250907-203621
export function ProjectCard({ project, onEdit, onDelete } ProjectCardProps) {;
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false),;
  const handleDelete = () => {;
    if (project.id) {;
      onDelete(project.id),;
    setDeleteDialogOpen(false),;
  },;
  return (;
<<<<<<< HEAD
    <Card className="h-full flex flex-col">;
      <div className="relative h-48 overflow-hidden rounded-t-lg bg-muted">;
        {project.image_url ? (;
          <Image;
            src={project.image_url}
            alt={project.title}
            className="object-cover";
            loading="lazy";
          />;
        ) :(;
=======
    <Card className="h-full flex flex-col">;"
"
      <div className="relative h-48 overflow-hidden rounded-t-lg bg-muted">;"
</div>
          <Image;
            src={project.image_url}
            alt={project.title}"
            className="object-cover";""
            loading="lazy";"
          />;

>>>>>>> merged-prs-20250907-203621
          <div className="w-full h-full flex items-center justify-center bg-muted">;
            <FileText className="h-12 w-12 text-muted-foreground/50" />;
          </div>;
        )}
<<<<<<< HEAD
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
                </Badge>;              ))}
            </div>;
          )}
        </div>;
      </CardContent>;
      ;
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
          )}
          ;
          {project.demo_url && (;
            <a;
              href={project.demo_url}
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
        ;
=======

            <a;
              href={project.github_url}"
              target="_blank";""
              rel="noopener noreferrer";""
              aria-label="GitHub";""
              title="GitHub";"
            >;
</a>"
              <Button variant="ghost" size="icon" aria-label="GitHub link">;"
                <Github className="h-4 w-4" />;"

            </a>;

>>>>>>> merged-prs-20250907-203621
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

            <AlertDialogTitle>Delete Project;
            <AlertDialogDescription>;

          <AlertDialogFooter>;
<<<<<<< HEAD
            <AlertDialogCancel>Cancel</AlertDialogCancel>;
            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground">;
=======

>>>>>>> merged-prs-20250907-203621
              Delete;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;
    </Card>;
  ),;}
<<<<<<< HEAD
 const handleDelete = () => {;
=======
<<<<<<< HEAD
  }
=======
 const handleDelete = () => {;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
  if (project.id) {;
  />) : (<div className="w-full h-full flex items-center justify-center bg-muted" > <FileText className="h-12 w-12 text-muted-foreground/50" /> </div>) ;
}</div> </Badge>) ) ;
}</div>) ;
}</div> </CardContent> <a href= {;"  project.github url ";"}target="blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub" > <Button variant="ghost" size="icon" aria-label="GitHub link" > <Github className="h-4 w-4" /> </Button> </Link>) ;
}{;
  project.demo url && (<a href= {;"  project.demo url ";"}target="blank" rel="noopener noreferrer" aria-label="Live demo" title="Live demo" > <Button variant="ghost" size="icon" aria-label="Live demo link" > <Link className="h-4 w-4" /> </Button> </Link>) ;
}</div> </Button> </div> </CardFooter> <AlertDialog open= {;
  deleteDialogOpen ;
}onOpenChange= {;
  setDeleteDialogOpen ;
<<<<<<< HEAD
}> <AlertDialogContent> <AlertDialogHeader> <AlertDialogTitle>Delete Project</AlertDialogTitle> <AlertDialogDescription> Are you sure you want to delete this project? This action cannot be undone. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel>Cancel</AlertDialogCancel> Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </Card>) ;"}"
=======
<<<<<<< HEAD
:temp_broken_files/resume-builder/portfolio/ProjectCard.tsx
}> <AlertDialogContent> <AlertDialogHeader> <AlertDialogTitle>Delete Project</AlertDialogTitle> <AlertDialogDescription> Are you sure you want to delete this project? This action cannot be undone. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel>Cancel</AlertDialogCancel> Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </Card>) ;"}"
}> <AlertDialogContent> <AlertDialogHeader> <AlertDialogTitle>Delete Project</AlertDialogTitle> <AlertDialogDescription> Are you sure you want to delete this project? This action cannot be undone. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel>Cancel</AlertDialogCancel> Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </Card>) ;
}"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/resume-builder/portfolio/ProjectCard.tsx
=======
<<<<<<< HEAD
:temp_broken_files/resume-builder/portfolio/ProjectCard.tsx
}> <AlertDialogContent> <AlertDialogHeader> <AlertDialogTitle>Delete Project</AlertDialogTitle> <AlertDialogDescription> Are you sure you want to delete this project? This action cannot be undone. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel>Cancel</AlertDialogCancel> Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </Card>) ;"}"
}> <AlertDialogContent> <AlertDialogHeader> <AlertDialogTitle>Delete Project</AlertDialogTitle> <AlertDialogDescription> Are you sure you want to delete this project? This action cannot be undone. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel>Cancel</AlertDialogCancel> Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </Card>) ;
}"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/resume-builder/portfolio/ProjectCard.tsx
=======

}> <AlertDialogContent> <AlertDialogHeader> <AlertDialogTitle>Delete Project</AlertDialogTitle> <AlertDialogDescription> Are you sure you want to delete this project? This action cannot be undone. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel>Cancel</AlertDialogCancel> Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </Card>) ;
}"

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
