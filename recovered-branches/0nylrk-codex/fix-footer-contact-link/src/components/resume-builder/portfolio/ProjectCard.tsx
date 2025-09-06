<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/portfolio/ProjectCard.tsx

<<<<<<< HEAD
<<<<<<< HEAD

=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/portfolio/ProjectCard.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/portfolio/ProjectCard.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/portfolio/ProjectCard.tsx
  return (
    <Card className="h - full flex flex - col">;
      <div className="relative h - 48 overflow - hidden rounded - t-lg bg - muted">;
        {project.image_url ? (
          <img;
            src={project.image_url}
            alt={project.title}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/portfolio/ProjectCard.tsx

=======



========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/portfolio/ProjectCard.tsx
import {useState} from 'react';
import {Card, CardContent, CardFooter} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Badge} from '@/components/ui/badge';
import {AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle} from '@/components/ui/alert-dialog';
import {Edit, Trash2, Github, Link, FileText} from 'lucide-react';
import {PortfolioProject} from '@/types/resume';


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

import {useState} from 'react';
import {Card, CardContent, CardFooter} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Badge} from '@/components/ui/badge';
import {AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle} from '@/components/ui/alert-dialog';
import {Edit, Trash2, Github, Link, FileText} from 'lucide-react';
import {PortfolioProject} from '@/types/resume';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
interface ProjectCardProps {
  project: PortfolioProject;
  onEdit: (project: PortfolioProject) => void;
  onDelete: (projectId: string) => void
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
export function ProjectCard({ project, onEdit, onDelete }: ProjectCardProps) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6


export function ProjectCard({ project, onEdit, onDelete }: ProjectCardProps) {;
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
export function ProjectCard({ project, onEdit, onDelete }: ProjectCardProps) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const handleDelete = () => {
    if (project.id) {
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
      onDelete(project.id)

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
      onDelete(project.id);
    }
    setDeleteDialogOpen(false);
  }

      onDelete(project.id)
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

<<<<<<< HEAD
    }
    setDeleteDialogOpen(false)
  },
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    }
    setDeleteDialogOpen(false);
  };
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/portfolio/ProjectCard.tsx
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/portfolio/ProjectCard.tsx
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
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          <div className="w-full h-full flex items-center justify-center bg-muted">;
            <FileText className="h-12 w-12 text-muted-foreground/50" />;
          </div>;
        )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/portfolio/ProjectCard.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/portfolio/ProjectCard.tsx
            className="w - full h - full object - cover";
          />) : (
          <div className="w - full h - full flex items - center justify - center bg - muted">;
            <FileText className="h - 12 w - 12 text - muted - foreground / 50" />;
          </div>)}
      </div>;
      <CardContent className="flex - grow pt - 6">;
        <div className="space - y-2">;
          <h3 className="font - semibold text - lg">{project.title}</h3>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/portfolio/ProjectCard.tsx

          {project.description && (
            <p className="text - sm text - muted - foreground line - clamp - 3">;
              {project.description}

========
          {project.description && (
            <p className="text - sm text - muted - foreground line - clamp - 3">;
              {project.description}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/portfolio/ProjectCard.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/portfolio/ProjectCard.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/portfolio/ProjectCard.tsx
                  {tech}
<<<<<<< HEAD

=======
                </Badge>;
              ))}
            </div>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/portfolio/ProjectCard.tsx
=======
                  {tech}

                </Badge>;
              ))}
            </div>;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          )}

========
          )}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/portfolio/ProjectCard.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/portfolio/ProjectCard.tsx

          {project.github_url && (
            <a;
              href={project.github_url}

========
          {project.github_url && (
            <a;
              href={project.github_url}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/portfolio/ProjectCard.tsx
              target="_blank";
              rel="noopener noreferrer";
            >;
              <Button variant="ghost" size="icon">;
                <Github className="h - 4 w - 4" />;
              </Button>;
            </a>)}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/portfolio/ProjectCard.tsx

          {project.demo_url && (
            <a;
              href={project.demo_url}

        </div>;
      </CardContent>;

========
          {project.demo_url && (
            <a;
              href={project.demo_url}
        </div>;
      </CardContent>;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/portfolio/ProjectCard.tsx
      <CardFooter className="flex justify-between border-t bg-muted/40 p-4">;
        <div className="flex gap-2">;
          {project && project.github_url && (;
            <a href={project && project.github_url} target="_blank" rel="noopener noreferrer">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/portfolio/ProjectCard.tsx
========
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/portfolio/ProjectCard.tsx
              <Button variant="ghost" size="icon">;
                <Github className="h-4 w-4" />;
              </Button>;
            </a>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/portfolio/ProjectCard.tsx
          )}
<<<<<<< HEAD
        </div>
=======
onDelete(project.id);
    }
    setDeleteDialogOpen(false);
  }
    }
    setDeleteDialogOpen(false)
  },

      onDelete(project.id);
    }
    setDeleteDialogOpen(false);
  };

=======
    }
    setDeleteDialogOpen(false)
  },
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  return (
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
<<<<<<< HEAD
</Badge>
              ))}
            </div>

=======
                </Badge>
              ))}
            </div>
                </Badge>;
              ))}
            </div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

<<<<<<< HEAD
=======

========
<<<<<<< HEAD
          )}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/portfolio/ProjectCard.tsx
          {project && project.demo_url && (;
            <a href={project && project.demo_url} target="_blank" rel="noopener noreferrer">;
              <Button variant="ghost" size="icon">;
                <Link className="h-4 w-4" />;
              </Button>;
            </a>;
          )}
        </div>;
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        <div className="flex gap-2">;
          <Button variant="ghost" size="icon" onClick={() => onEdit(project)}>;
            <Edit className="h-4 w-4" />;
          </Button>;
          <Button variant="ghost" size="icon" onClick={() => setDeleteDialogOpen(true)}>;
            <Trash2 className="h-4 w-4" />;
          </Button>;
        </div>;
      </CardFooter>;
<<<<<<< HEAD
=======
      ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<< HEAD
              target="_blank";
              rel="noopener noreferrer";
            >;
              <Button variant="ghost" size="icon">;
                <Link className="h - 4 w - 4" />;
              </Button>;
            </a>)}
        </div>;
        <div className="flex gap - 2">;
          <Button variant="ghost" size="icon" on_click={() => on_edit (project)}>;
            <Edit className="h - 4 w - 4" />;
          </Button>;
          <Button;
            variant="ghost";
            size="icon";
            on_click={() => setDeleteDialogOpen (true)}
          >;
            <Trash2 className="h - 4 w - 4" />;
          </Button>;
        </div>;
      </CardFooter>;
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>;
        <AlertDialogContent>;
          <AlertDialogHeader>;
            <AlertDialogTitle > Delete Project</AlertDialogTitle>;
            <AlertDialogDescription>;
              Are you sure you want to delete this project? This action cannot;
              be undone.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;
            <AlertDialogCancel > Cancel</AlertDialogCancel>;
            <AlertDialogAction;
              on_click={handle_delete}
              className="bg - destructive text - destructive - foreground";
            >;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/portfolio/ProjectCard.tsx

========
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/portfolio/ProjectCard.tsx
              Delete;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/portfolio/ProjectCard.tsx

    </Card>);
}

=======

  )
}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
<<<<<<< HEAD
    </Card>);
}
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/portfolio/ProjectCard.tsx
=======
  );
}
}
;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  );
}
  )
}
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
