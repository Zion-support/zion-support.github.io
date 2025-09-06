<<<<<<< HEAD
<<<<<<< HEAD


import Image from 'next/image';
import { PortfolioProject } from '@/types/resume';
interface ProjectCardProps {


  project: PortfolioProject;
  onEdit: (project: PortfolioProject) => void;


=======
import { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';


import { useState } from 'react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  AlertDialog
  AlertDialogAction
  AlertDialogCancel
  AlertDialogContent
  AlertDialogDescription
  AlertDialogFooter
  AlertDialogHeader
  AlertDialogTitle
} from '@/components/ui/alert-dialog'

import { Edit, Trash2, Github, Link, FileText } from 'lucide-react'
import Image from 'next/image';
import { PortfolioProject } from '@/types/resume';
interface ProjectCardProps {
  project: PortfolioProject
  onEdit: (project: PortfolioProject) => void

  project: PortfolioProject
  onEdit: (project: PortfolioProject) => void
  project: PortfolioProject;
  onEdit: (project: PortfolioProject) => void;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  onDelete: (projectId: string) => void; import Image from 'next/image'
interface ProjectCardProps {
  project: PortfolioProject
  onEdit: (project: PortfolioProject,) => void
  onDelete: (projectId: string,) => void
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}

}

<<<<<<< HEAD
=======
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const handleDelete = null;
=======
export function ProjectCard(): any ({ project, onEdit, onDelete }: ProjectCardProps) {;

}

}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
;
export function ProjectCard({ project, onEdit, onDelete }: ProjectCardProps) {;
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const handleDelete = () => {;
<<<<<<< HEAD
    if (project.id) {;
      onDelete(project.id);
    }
    setDeleteDialogOpen(false)
  },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
interface ProjectCardProps {;
  project: PortfolioProject;
  onEdit: (project: PortfolioProject) => void;
  onDelete: (projectId: string) => void;import Image from 'next/image';
import { PortfolioProject } from '@/types/resume';
interface ProjectCardProps {;
  project: PortfolioProject,;
  onEdit: (project: PortfolioProject,) => void,;
  onDelete: (projectId: string,) => void;
}

export function ProjectCard(): any ({ project, onEdit, onDelete }: ProjectCardProps) {;
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const handleDelete = () => {;
<<<<<<< HEAD
              href = {project && project.github_url,}

=======
    if (project && project.id) {;
      onDelete(project && project.id);
    }
    setDeleteDialogOpen(false);
  };


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  return (
    <Card className='h-full flex flex-col'>;
      <div className='relative h-48 overflow-hidden rounded-t-lg bg-muted'>        {project && project.image_url ? (;
          <Image
            src={project && project.image_url}
            alt={project && project.title}
            className='object-cover'
            loading='lazy'    <Card className="h-full flex flex-col">;
      <div className="relative h-48 overflow-hidden rounded-t-lg bg-muted">;
        {project && project.image_url ? (;
          <Image
            src={project && project.image_url}
            alt={project && project.title}
            className='object-cover'
            loading='lazy'
<<<<<<< HEAD
        ) : (
          <div className='w-full h-full flex items-center justify-center bg-muted'>;
            <FileText className='h-12 w-12 text-muted-foreground/50' />;
          </div>;
        )}

import { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { Badge } from '@/components / ui / badge';
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
import { Edit, Trash2, Github, Link, FileText } from 'lucide-react';
import Image from 'next / image';
import { PortfolioProject } from '@/types / resume';
interface ProjectCardProps {
  project: PortfolioProject;
  on_edit: (project: PortfolioProject) => void;
  on_delete: (project_id: string) => void; import Image from 'next / image';
interface ProjectCardProps {
  project: PortfolioProject,
  on_edit: (project: PortfolioProject, ) => void,
  on_delete: (project_id: string, ) => void;
}
export /**
 * ProjectCard - Function description
 */
function ProjectCard() {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState (false);
  const handle_delete = () =>: any {
    // Check condition
if ( {) {
  $2
}
      on_delete (project.id);
    }
    setDeleteDialogOpen (false);
  }
  return (
    <Card className='h - full flex flex - col'>;
      <div className='relative h - 48 overflow - hidden rounded - t-lg bg - muted'>        {project.image_url ? (
          <Image;
            src={project.image_url}
            alt={project.title}
            className='object - cover';
            loading='lazy'    <Card className="h - full flex flex - col">;
      <div className="relative h - 48 overflow - hidden rounded - t-lg bg - muted">;
        {project.image_url ? (
          <Image;
            src={project.image_url}
            alt={project.title}
            className='object - cover';
            loading='lazy') : (
          <div className='w - full h - full flex items - center justify - center bg - muted'>;
            <FileText className='h - 12 w - 12 text - muted - foreground / 50' />;
          </div>)}
      </div>;
      <CardContent className='flex - grow pt - 6'>;
        <div className='space - y-2'>;
          <h3 className='font - semibold text - lg'>{project.title}</h3>;

          {project.description && (
            <p className='text - sm text - muted - foreground line - clamp - 3'>;
              {project.description}

          {project.technologies && project.technologies.length > 0 && (
            <div className='flex flex-wrap gap-1 mt-2'>
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant='secondary' className='text-xs'>                  {tech}                <Badge key={index} variant="secondary" className="text-xs">
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Edit, Trash2, Github, Link, FileText } from 'lucide-react'
import Image from 'next/image';
import { PortfolioProject } from '@/types/resume';
interface ProjectCardProps {
  project: PortfolioProject,
  onEdit: (project: PortfolioProject) => void,
  onDelete: (projectId: string) => void
}

}
export function ProjectCard({ project, onEdit, onDelete }: ProjectCardProps) {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const handleDelete = null;
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const handleDelete = () => {
    if (project.id) {
      onDelete(project.id)
    }
    setDeleteDialogOpen(false)
  };



;
export function ProjectCard({ project, onEdit, onDelete }: ProjectCardProps) {;
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const handleDelete = () => {;
    if (project.id) {;
      onDelete(project.id);
    }
    setDeleteDialogOpen(false)
  },
  
    if (project.id) {;
      onDelete(project.id);
    }
    setDeleteDialogOpen(false)
  },
  
  return (
    <Card className="h-full flex flex-col">
      <div className="relative h-48 overflow-hidden rounded-t-lg bg-muted">
        {project.image_url ? (
          <Image
            src={project.image_url}
            alt={project.title}
<<<<<<< HEAD
            className='object-cover'
            loading='lazy'    <Card className="h-full flex flex-col">
      <div className="relative h-48 overflow-hidden rounded-t-lg bg-muted">
        {project.image_url ? (
          <Image
            src={project.image_url}
            alt={project.title}
            className='object-cover'
            loading='lazy'
            className="object-cover"
            loading="lazy"
          />
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-muted">
            <FileText className="h-12 w-12 text-muted-foreground/50" />
          </div>
        )}
      </div>
          {project.description && (
            <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>
          )}
            <div className='flex flex-wrap gap-1 mt-2'>
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant='secondary' className='text-xs'>                  {tech}                <Badge key={index} variant="secondary" className="text-xs">
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-muted">
            <FileText className="h-12 w-12 text-muted-foreground/50" />
          </div>
        )}
      </div>
<<<<<<< HEAD

      </div>;

      <CardContent className='flex-grow pt-6'>;
        <div className='space-y-2'>;
          <h3 className='font-semibold text-lg'>{project && project.title}</h3>;

          {project && project.description && (;
            <p className='text-sm text-muted-foreground line-clamp-3'>;
              {project && project.description}
            </p>;
                  {tech}
                </Badge>
              ))}
            </div>
          )}
          
          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="text-xs">

          {project && project.technologies && project && project.technologies.length > 0 && (;
            <div className='flex flex-wrap gap-1 mt-2'>;
              {project && project.technologies.map((tech, index) => (;
                <Badge key={index} variant='secondary' className='text-xs'>                  {tech}                <Badge key={index} variant="secondary" className="text-xs">;
          />;
        ) : (;
          <div className="w-full h-full flex items-center justify-center bg-muted">;
            <FileText className="h-12 w-12 text-muted-foreground/50" />;
          </div>;
        )}
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


          
          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  {tech}
                </Badge>;
              ))}
            </div>;
          )}
        </div>
      </CardContent>
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      
      <CardFooter className="flex justify-between border-t bg-muted/40 p-4">
        <div className="flex gap-2">
          {project.github_url && (
            <a
              href={project.github_url}
<<<<<<< HEAD
<<<<<<< HEAD
=======
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <Button variant='ghost' size='icon' aria-label='GitHub link'>
                <Github className='h-4 w-4' />
              </Button>
            </a>
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub">;
              <Button variant='ghost' size='icon' aria-label='GitHub link'>;
                <Github className='h-4 w-4' />;
              </Button>;
            </a>;

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
<<<<<<< HEAD
<<<<<<< HEAD
=======
              <Button variant='ghost' size='icon' aria-label='GitHub link'>
                <Github className='h-4 w-4' />
              </Button>
            </a>
          )}
          {project.demo_url && (
            <a
              href={project.demo_url}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Live demo'
              title='Live demo'            >
              <Button variant='ghost' size='icon' aria-label='Live demo link'>
                <Link className='h-4 w-4' />              </Button>
            </a>
          )}
        </div>              <Button variant="ghost" size="icon" aria-label="Live demo link">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              <Button variant="ghost" size="icon" aria-label="GitHub link">
                <Github className="h-4 w-4" />
              </Button>
            </Link>
          )}
<<<<<<< HEAD

        </div>;

        <div className='flex gap-2'>;

=======
;
          {project.demo_url && (;
            <a;
              href={project.demo_url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live demo"
              title="Live demo"
            >
              <Button variant="ghost" size="icon" aria-label="Live demo link">
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                <Link className="h-4 w-4" />
              </Button>
            </Link>
          )}
        </div>
<<<<<<< HEAD
        <div className='flex gap-2'>
          <Button
            variant='ghost'
            size='icon'
            onClick={() => onEdit(project)}
            aria-label='Edit project'
          >
            <Edit className='h-4 w-4' />
          <Button
            variant='ghost'
            size='icon'
            onClick={() => setDeleteDialogOpen(true)}
            aria-label='Delete project'
          >
            <Trash2 className='h-4 w-4' />
          </Button>
        </div>
      </CardFooter>

        
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" onClick={() => onEdit(project)} aria-label="Edit project">
            <Edit className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setDeleteDialogOpen(true)} aria-label="Delete project">
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
      
=======



>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Project</AlertDialogTitle>
            <AlertDialogDescription>
<<<<<<< HEAD
              Are you sure you want to delete this project? This action cannot
              be undone.            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            </p>)}
          {project.technologies && project.technologies.length > 0 && (
            <div className='flex flex - wrap gap - 1 mt - 2'>;
              {project.technologies.map ((tech, index) => (
                <Badge key={index} variant='secondary' className='text - xs'>                  {tech}                <Badge key={index} variant="secondary" className="text - xs">;
          />) : (
          <div className="w - full h - full flex items - center justify - center bg - muted">;
            <FileText className="h - 12 w - 12 text - muted - foreground / 50" />;
          </div>)}
      </div>;
      <CardContent className="flex - grow pt - 6">;
        <div className="space - y-2">;
          <h3 className="font - semibold text - lg">{project.title}</h3>;
          {project.description && (
            <p className="text - sm text - muted - foreground line - clamp - 3">{project.description}</p>)}
          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex - wrap gap - 1 mt - 2">;
              {project.technologies.map ((tech, index) => (
                <Badge key={index} variant="secondary" className="text - xs">;
                  {tech}
                </Badge>))}
            </div>)}
        </div>;
      </CardContent>;
      <CardFooter className='flex justify - between border - t bg - muted / 40 p - 4'>;
        <div className='flex gap - 2'>;
          {project.github_url && (
            <a;
              href={project.github_url}
              target='_blank';
              rel='noopener noreferrer';
              aria - label='GitHub';
              title='GitHub';
              href = {project.github_url, }
              target="_blank";
              rel="noopener noreferrer";
              aria - label="GitHub";
              title="GitHub";
            >;
              <Button variant='ghost' size='icon' aria - label='GitHub link'>;
                <Github className='h - 4 w - 4' />;
              </Button>;
            </a>)}
          {project.demo_url && (
            <a;
              href={project.demo_url}
              target='_blank';
              rel='noopener noreferrer';
              aria - label='Live demo';
              title='Live demo'            >;
              <Button variant='ghost' size='icon' aria - label='Live demo link'>;
                <Link className='h - 4 w - 4' />              </Button>;
            </a>)}
        </div>              <Button variant="ghost" size="icon" aria - label="Live demo link">;
                <Link className="h - 4 w - 4" />;
              </Button>;
            </a>)}
        </div>;
        <div className='flex gap - 2'>;
          <Button;
            variant='ghost';
            size='icon';
            on_click={() => on_edit (project)}
            aria - label='Edit project';
          >;
            <Edit className='h - 4 w - 4' />;
          <Button;
            variant='ghost';
            size='icon';
            on_click={() => setDeleteDialogOpen (true)}
            aria - label='Delete project';
          >;
            <Trash2 className='h - 4 w - 4' />;
          </Button>;
        </div>;
      </CardFooter>;
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>;
        <AlertDialogContent>;
          <AlertDialogHeader>;
            <AlertDialogTitle > Delete Project</AlertDialogTitle>;

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            <AlertDialogDescription>;
              Are you sure you want to delete this project? This action cannot;
              be undone.            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;
            <AlertDialogAction
              onClick={handleDelete}
<<<<<<< HEAD
              className='bg-destructive text-destructive-foreground'>              Delete              Are you sure you want to delete this project? This action cannot be undone.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;
            <AlertDialogCancel>Cancel</AlertDialogCancel>;
            <AlertDialogAction
              onClick={handleDelete}


            <AlertDialogAction
              onClick={handleDelete}
              className='bg-destructive text-destructive-foreground'
            >              Delete              Are you sure you want to delete this project? This action cannot be undone.
              Are you sure you want to delete this project? This action cannot be undone.
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
<<<<<<< HEAD
            <AlertDialogAction
              onClick={handleDelete}
              className='bg-destructive text-destructive-foreground'
            >            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground">
            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground">
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
              Delete;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;
<<<<<<< HEAD


  );
<<<<<<< HEAD
}
=======
}
      </AlertDialog>;
    </Card>;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  );
};
}
}
<<<<<<< HEAD
      </AlertDialog>
    </Card>
  )
}
}
;
    </Card>);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
