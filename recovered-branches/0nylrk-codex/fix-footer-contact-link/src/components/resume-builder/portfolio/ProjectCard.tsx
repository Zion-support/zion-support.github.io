<<<<<<< HEAD
  return (
    <Card className="h - full flex flex - col">;
      <div className="relative h - 48 overflow - hidden rounded - t-lg bg - muted">;
        {project.image_url ? (
          <img;
            src={project.image_url}
            alt={project.title}



import {useState} from 'react';
import {Card, CardContent, CardFooter} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Badge} from '@/components/ui/badge';
import {AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle} from '@/components/ui/alert-dialog';
import {Edit, Trash2, Github, Link, FileText} from 'lucide-react';
import {PortfolioProject} from '@/types/resume';



<<<<<<< HEAD
import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
AlertDialog
  AlertDialogAction
  AlertDialogCancel
  AlertDialogContent
  AlertDialogDescription
  AlertDialogFooter
  AlertDialogHeader
  AlertDialogTitle
} from "@/components/ui/alert-dialog";
import { Edit, Trash2, Github, Link, FileText } from "lucide-react";
import { PortfolioProject } from "@/types/resume";
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { useState  } from './react';
import { Card, CardContent, CardFooter  } from '@/components / ui / card';
import { Button  } from '@/components / ui / button';
import { Badge  } from '@/components / ui / badge';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components / ui / alert - dialog';
import { Edit, Trash2, Github, Link, FileText  } from './lucide-react';
import { PortfolioProject  } from '@/types / resume';
interface ProjectCardProps {
  project: PortfolioProject;
  on_edit: (project: PortfolioProject) => void;
  on_delete: (project_id: string) => void;
}
export /**
 * ProjectCard - Function description
 */
function ProjectCard() {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState (false);
;
  const handle_delete = () =>: any {
    // Check condition
if ( {) {
  $2
}
      on_delete (project.id);
    }
    setDeleteDialogOpen (false);
  }
;

  return (
    <Card className="h - full flex flex - col">;
      <div className="relative h - 48 overflow - hidden rounded - t-lg bg - muted">;
        {project.image_url ? (
          <img;
            src={project.image_url}
            alt={project.title}

=======


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import {useState} from 'react';
import {Card, CardContent, CardFooter} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Badge} from '@/components/ui/badge';
import {AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle} from '@/components/ui/alert-dialog';
import {Edit, Trash2, Github, Link, FileText} from 'lucide-react';
import {PortfolioProject} from '@/types/resume';
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface ProjectCardProps {
  project: PortfolioProject;
  onEdit: (project: PortfolioProject) => void;
  onDelete: (projectId: string) => void
}
<<<<<<< HEAD
<<<<<<< HEAD
export function ProjectCard({ project, onEdit, onDelete }: ProjectCardProps) {


export function ProjectCard({ project, onEdit, onDelete }: ProjectCardProps) {;
export function ProjectCard({ project, onEdit, onDelete }: ProjectCardProps) {
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


export function ProjectCard({ project, onEdit, onDelete }: ProjectCardProps) {;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const handleDelete = () => {
    if (project.id) {
<<<<<<< HEAD
<<<<<<< HEAD
      onDelete(project.id)

      onDelete(project.id);
    }
    setDeleteDialogOpen(false);
  }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      onDelete(project.id)
=======

      onDelete(project.id)

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
export function ProjectCard(): any ({ project, onEdit, onDelete }: ProjectCardProps) {;
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
=======

export function ProjectCard(): any ({ project, onEdit, onDelete }: ProjectCardProps) {;
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleDelete = () => {;

    if (project.id) {;
      onDelete(project.id);


<<<<<<< HEAD
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
          {project.description && (
            <p className="text - sm text - muted - foreground line - clamp - 3">;
              {project.description}
      </div>;
      <CardContent className="flex-grow pt-6">;
        <div className="space-y-2">;
          <h3 className="font-semibold text-lg">{project && project.title}</h3>;
          {project && project.description && (;
            <p className="text-sm text-muted-foreground line-clamp-3">{project && project.description}</p>;
          )}
          {project && project.technologies && project && project.technologies.length > 0 && (;
            <div className="flex flex-wrap gap-1 mt-2">;
              {project && project.technologies.map((tech, index) => (;
                <Badge key={index} variant="secondary" className="text-xs">;
                  {tech}
                </Badge>;
              ))}
            </div>;
                  {tech}

                </Badge>;
              ))}
            </div>;

          )}

          )}
            </p>)}
          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex - wrap gap - 1 mt - 2">;
              {project.technologies.map ((tech, index) => (
                <Badge key={index} variant="secondary" className="text - xs">;
                  {tech}
                </Badge>))}
            </div>)}
        </div>;
      </CardContent>;
      <CardFooter className="flex justify - between border - t bg - muted / 40 p - 4">;
        <div className="flex gap - 2">;
          {project.github_url && (
            <a;
              href={project.github_url}
              target="_blank";
              rel="noopener noreferrer";
            >;
              <Button variant="ghost" size="icon">;
                <Github className="h - 4 w - 4" />;
              </Button>;
            </a>)}
          {project.demo_url && (
            <a;
              href={project.demo_url}
        </div>;
      </CardContent>;
      <CardFooter className="flex justify-between border-t bg-muted/40 p-4">;
        <div className="flex gap-2">;
          {project && project.github_url && (;
            <a href={project && project.github_url} target="_blank" rel="noopener noreferrer">;
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
            <a href={project.github_url} target="_blank" rel="noopener noreferrer">;
              <Button variant="ghost" size="icon">;
                <Github className="h-4 w-4" />;
              </Button>;
            </a>;
onDelete(project.id);
    }
    setDeleteDialogOpen(false);
  }
    }
    setDeleteDialogOpen(false)
  },

      onDelete(project.id);
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }
    setDeleteDialogOpen(false);
  };

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    setDeleteDialogOpen(false)
  },
  
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <Card className="h-full flex flex-col">
      <div className="relative h-48 overflow-hidden rounded-t-lg bg-muted">
        {project.image_url ? (
          <img
            src={project.image_url}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-muted">
            <FileText className="h-12 w-12 text-muted-foreground/50" />
          </div>
        )}
      </div>
<CardContent className="flex-grow pt-6">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">{project.title}</h3>
          {project.description && (
            <p className="text-sm text-muted-foreground line-clamp-3">
              {project.description}
            </p>
          )}

          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
                </Badge>;
              ))}
            </div>;
          )}
        </div>
      </CardContent>

      <CardFooter className="flex justify-between border-t bg-muted/40 p-4">
        <div className="flex gap-2">
          {project.github_url && (
            <a
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
              </Button>
            </Link>
          )}

          {project.demo_url && (
            <a
              href={project.demo_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Link className="h-4 w-4" />
              </Button>
            </Link>
          )}
        </div>

        <div className="flex gap-2">
          <Button variant="ghost" size="icon" onClick={() => onEdit(project)}>
            <Edit className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setDeleteDialogOpen(true)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Project</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this project? This action cannot
              be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-destructive text-destructive-foreground"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <Card className="h-full flex flex-col">;
      <div className="relative h-48 overflow-hidden rounded-t-lg bg-muted">;
        {project && project.image_url ? (;
          <img
            src={project && project.image_url} 
            alt={project && project.title} 
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            className="w-full h-full object-cover"
          />;
        ) : (;
          <div className="w-full h-full flex items-center justify-center bg-muted">;
            <FileText className="h-12 w-12 text-muted-foreground/50" />;
          </div>;
        )}

            className="w - full h - full object - cover";
          />) : (
          <div className="w - full h - full flex items - center justify - center bg - muted">;
            <FileText className="h - 12 w - 12 text - muted - foreground / 50" />;
          </div>)}
      </div>;
      <CardContent className="flex - grow pt - 6">;
        <div className="space - y-2">;
          <h3 className="font - semibold text - lg">{project.title}</h3>;

          {project.description && (
            <p className="text - sm text - muted - foreground line - clamp - 3">;
              {project.description}

      </div>;

      <CardContent className="flex-grow pt-6">;
        <div className="space-y-2">;
          <h3 className="font-semibold text-lg">{project && project.title}</h3>;

          {project && project.description && (;
            <p className="text-sm text-muted-foreground line-clamp-3">{project && project.description}</p>;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

<<<<<<< HEAD
    </Card>;
  ),;}
 const handleDelete = () => {
  if (project.id) {
  />) : (<div className="w-full h-full flex items-center justify-center bg-muted" > <FileText className="h-12 w-12 text-muted-foreground/50" /> </div>) 
}</div> </Badge>) ) 
}</div>) 
}</div> </CardContent> </Button> </Link>) 
}</Button> </Link>) 
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

=======
          )}

          {project && project.technologies && project && project.technologies.length > 0 && (;
            <div className="flex flex-wrap gap-1 mt-2">;
              {project && project.technologies.map((tech, index) => (;
                <Badge key={index} variant="secondary" className="text-xs">;

                  {tech}
                </Badge>
              ))}
            </div>
                </Badge>;
              ))}
            </div>;
=======
                  {tech}

                </Badge>;
              ))}
            </div>;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          )}

            </p>)}
          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex - wrap gap - 1 mt - 2">;
              {project.technologies.map ((tech, index) => (
                <Badge key={index} variant="secondary" className="text - xs">;
                  {tech}
                </Badge>))}
            </div>)}
        </div>;
      </CardContent>;
      <CardFooter className="flex justify - between border - t bg - muted / 40 p - 4">;
        <div className="flex gap - 2">;

          {project.github_url && (
            <a;
              href={project.github_url}

              target="_blank";
              rel="noopener noreferrer";
            >;
              <Button variant="ghost" size="icon">;
                <Github className="h - 4 w - 4" />;
              </Button>;
            </a>)}

          {project.demo_url && (
            <a;
              href={project.demo_url}

        </div>;
      </CardContent>;

      <CardFooter className="flex justify-between border-t bg-muted/40 p-4">;
        <div className="flex gap-2">;
          {project && project.github_url && (;
            <a href={project && project.github_url} target="_blank" rel="noopener noreferrer">;
              <Button variant="ghost" size="icon">;
                <Github className="h-4 w-4" />;
              </Button>;
            </a>;
          )}
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" onClick={() => onEdit(project)}>
            <Edit className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setDeleteDialogOpen(true)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Project</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this project? This action cannot
              be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-destructive text-destructive-foreground"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  );
}
  )
}
;
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
