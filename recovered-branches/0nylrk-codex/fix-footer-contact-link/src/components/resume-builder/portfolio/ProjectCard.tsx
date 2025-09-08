

import {useState} from 'react';
import {Card, CardContent, CardFooter} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Badge} from '@/components/ui/badge';
import {AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle} from '@/components/ui/alert-dialog';
import {Edit, Trash2, Github, Link, FileText} from 'lucide-react';

import {PortfolioProject} from '@/types/resume';

interface ProjectCardProps {

  project: PortfolioProject;
  onEdit: (project: PortfolioProject) => void;
  onDelete: (projectId: string) => void;
}


export function ProjectCard({ project, onEdit, onDelete }: ProjectCardProps) {

export function ProjectCard({ project, onEdit, onDelete }: ProjectCardProps) {;


import { useState } from 'react',;
import { Card, CardContent, CardFooter } from '@/components/ui/card',;
import { Button } from '@/components/ui/button',;
import { Badge } from '@/components/ui/badge',;
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog',;
import { Edit, Trash2, Github, Link, FileText } from 'lucide-react',;
import { PortfolioProject } from '@/types/resume',;

interface ProjectCardProps {;
  project: PortfolioProject,;
  onEdit: (project: PortfolioProject) => void,;
  onDelete: (projectId: string) => void;
}
export function ProjectCard(): any ({ project, onEdit, onDelete }: ProjectCardProps) {;
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const handleDelete = () => {;

    if (project.id) {;
      onDelete(project.id);

      onDelete(project.id);


    }
    setDeleteDialogOpen(false);
  };
  return (
    <Card className="h-full flex flex-col">;
      <div className="relative h-48 overflow-hidden rounded-t-lg bg-muted">;
        {project && project.image_url ? (;
          <img
            src={project && project.image_url} 
            alt={project && project.title} 
            className="w-full h-full object-cover"
          />;
        ) : (;



    }
    setDeleteDialogOpen(false)
};

    }
    setDeleteDialogOpen(false)
  },
  
  return (


            className="w-full h-full object-cover"
          />;
        ) : (;

            src={project.image_url}
            alt={project.title}"
            className="w-full h-full object-cover"
          />;
        ) : (;

import { useState } from 'react',;'
import { Card, CardContent, CardFooter } from '@/components/ui/card',;'
import { Button } from '@/components/ui/button',;'
import { Badge } from '@/components/ui/badge',;'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog',;'
import { Edit, Trash2, Github, Link, FileText } from 'lucide-react',;'
import { PortfolioProject } from '@/types/resume',;
;
interface ProjectCardProps {;
  project:PortfolioProject,;
  onEdit:(project:PortfolioProject) => void,;
  onDelete:(projectId:string) => void;
}
;
export function ProjectCard() { return null; }
    }
    setDeleteDialogOpen(false),;
  },;
  ;
  return (;

  return (
"
    <Card className="h-full flex flex-col">;"

      <div className="relative h-48 overflow-hidden rounded-t-lg bg-muted">;
        {project && project.image_url ? (;
          <img"
            className="w-full h-full object-cover"
          />;

          <div className="w-full h-full flex items-center justify-center bg-muted">;

            <FileText className="h-12 w-12 text-muted-foreground/50" />;
          </div>;
        )}
      </div>
"
      <CardContent className="flex-grow pt-6">"
        <div className="space-y-2">"
          <h3 className="font-semibold text-lg">{project.title}</h3>

          {project.description && ("
            <p className="text-sm text-muted-foreground line-clamp-3">
              {project.description}


      </div>;

      <CardContent className="flex-grow pt-6">;
        <div className="space-y-2">;
          <h3 className="font-semibold text-lg">{project && project.title}</h3>;

          {project && project.description && (;
            <p className="text-sm text-muted-foreground line-clamp-3">{project && project.description}</p>;

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

  )
}
;


}</div> </Button> </div> </CardFooter> <AlertDialog open= {
  deleteDialogOpen 
}onOpenChange= {
  setDeleteDialogOpen 
}> <AlertDialogContent> <AlertDialogHeader> <AlertDialogTitle>Delete Project</AlertDialogTitle> <AlertDialogDescription> Are you sure you want to delete this project? This action cannot be undone. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel>Cancel</AlertDialogCancel> Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </Card>) 
}
  );

}
}
;

  );
}
  )
}

;



