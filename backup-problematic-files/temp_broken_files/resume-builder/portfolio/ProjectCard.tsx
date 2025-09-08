import { useState } from 'react',;
import { Card, CardContent, CardFooter } from '@/components/ui/card',;
import { Button } from '@/components/ui/button',;
import { Badge } from '@/components/ui/badge',;
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog',;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

import { Edit, Trash2, Github, Link, FileText } from 'lucide-react';
import Image from 'next/image';
import { PortfolioProject } from '@/types/resume';
;
interface ProjectCardProps {;
  project: PortfolioProject;,;
  onEdit: (project:PortfolioProject) => void;,;
  onDelete:(projectId:string) => void;
}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
export function ProjectCard({ project, onEdit, onDelete } ProjectCardProps) {;
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false),;
  const handleDelete = () => {;
    if (project.id) {;
      onDelete(project.id),;
    setDeleteDialogOpen(false),;
  },;
  return (;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          <div className="w-full h-full flex items-center justify-center bg-muted">;
            <FileText className="h-12 w-12 text-muted-foreground/50" />;
          </div>;
        )}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

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

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              Delete;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;
    </Card>;
  ),;}

<<<<<<< HEAD

=======
 const handleDelete = () => {;
>>>>>>> origin/cursor/delete-old-data-records-6bba
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


=======
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/resume-builder/portfolio/ProjectCard.tsx
>>>>>>> origin/cursor/delete-old-data-records-6bba
