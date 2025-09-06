<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD

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
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
import { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
import {;
  AlertDialog,;
  AlertDialogAction,;
  AlertDialogCancel,;
  AlertDialogContent,;
  AlertDialogDescription,;
  AlertDialogFooter,;
  AlertDialogHeader,;
  AlertDialogTitle,;
} from '@/components/ui/alert-dialog';
import { Edit, Trash2, Github, Link, FileText } from 'lucide-react';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
import Image from 'next/image';
import { PortfolioProject } from '@/types/resume';
interface ProjectCardProps {

<<<<<<< HEAD
  project: PortfolioProject
  onEdit: (project: PortfolioProject) => void
  onDelete: (projectId: string) => void; import Image from 'next/image'
interface ProjectCardProps {
  project: PortfolioProject
  onEdit: (project: PortfolioProject,) => void
  onDelete: (projectId: string,) => void

}
export function ProjectCard({ project, onEdit, onDelete }: ProjectCardProps) {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const handleDelete = null;
=======
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
    if (project && project.id) {;
      onDelete(project && project.id);
    }
    setDeleteDialogOpen(false);
  };

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
        ) : (
          <div className='w-full h-full flex items-center justify-center bg-muted'>;
            <FileText className='h-12 w-12 text-muted-foreground/50' />;
          </div>;
        )}
<<<<<<< HEAD
      </div>
      <CardContent className='flex-grow pt-6'>
        <div className='space-y-2'>
          <h3 className='font-semibold text-lg'>{project.title}</h3>
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
          {project.description && (
            <p className='text - sm text - muted - foreground line - clamp - 3'>;
              {project.description}
<<<<<<< HEAD
            </p>
          )}
<<<<<<< HEAD
=======
          {project.technologies && project.technologies.length > 0 && (
            <div className='flex flex-wrap gap-1 mt-2'>
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant='secondary' className='text-xs'>                  {tech}                <Badge key={index} variant="secondary" className="text-xs">
=======
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Edit, Trash2, Github, Link, FileText } from 'lucide-react'
import Image from 'next/image';
import { PortfolioProject } from '@/types/resume';
interface ProjectCardProps {
  project: PortfolioProject,
  onEdit: (project: PortfolioProject) => void,
  onDelete: (projectId: string) => void
}

export function ProjectCard({ project, onEdit, onDelete }: ProjectCardProps) {

  const [ deleteDialogOpen, setDeleteDialogOpen ] = useState(false),

  
  const handleDelete = () => {
    if (project.id) {
      onDelete(project.id)
    }
    setDeleteDialogOpen(false)
  };


  return (
    <Card className="h-full flex flex-col">
      <div className="relative h-48 overflow-hidden rounded-t-lg bg-muted">
        {project.image_url ? (
          <Image
            src={project.image_url}
            alt={project.title}
            className="object-cover"
            loading="lazy"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
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
            <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>
          )}
          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
<<<<<<< HEAD
=======
      </div>;

      <CardContent className='flex-grow pt-6'>;
        <div className='space-y-2'>;
          <h3 className='font-semibold text-lg'>{project && project.title}</h3>;

          {project && project.description && (;
            <p className='text-sm text-muted-foreground line-clamp-3'>;
              {project && project.description}
            </p>;
=======
                  {tech}
                </Badge>
              ))}
            </div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
          )}
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                  {tech}
                </Badge>;
              ))}
            </div>;
          )}
<<<<<<< HEAD
=======
<<<<<<< HEAD
        </div>
      </CardContent>
<<<<<<< HEAD
      <CardFooter className='flex justify-between border-t bg-muted/40 p-4'>
        <div className='flex gap-2'>
          {project.github_url && (
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
        </div>;
      </CardContent>;

      <CardFooter className='flex justify-between border-t bg-muted/40 p-4'>;
        <div className='flex gap-2'>;
          {project && project.github_url && (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            <a
              href={project && project.github_url}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='GitHub'
              title='GitHub'
              href = {project && project.github_url,}
<<<<<<< HEAD
=======
=======
      
      <CardFooter className="flex justify-between border-t bg-muted/40 p-4">
        <div className="flex gap-2">
          {project.github_url && (
            <a
              href={project.github_url}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub">;
              <Button variant='ghost' size='icon' aria-label='GitHub link'>;
                <Github className='h-4 w-4' />;
              </Button>;
            </a>;
          )}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
          {project.demo_url && (
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

          {project && project.demo_url && (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            <a
              href={project && project.demo_url}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Live demo'
              title='Live demo'>;
              <Button variant='ghost' size='icon' aria-label='Live demo link'>;
                <Link className='h-4 w-4' />              </Button>;
            </a>;
          )}
        </div>              <Button variant="ghost" size="icon" aria-label="Live demo link">;
                <Link className="h-4 w-4" />;
              </Button>;
            </a>;
          )}
<<<<<<< HEAD
        </div>
        <div className='flex gap-2'>
=======
        </div>;

        <div className='flex gap-2'>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          <Button
            variant='ghost'
            size='icon'
            onClick={() => onEdit(project)}
            aria-label='Edit project';
          >;
            <Edit className='h-4 w-4' />;
          <Button
            variant='ghost'
            size='icon'
            onClick={() => setDeleteDialogOpen(true)}
<<<<<<< HEAD
=======
<<<<<<< HEAD
            aria-label='Delete project'
          >
            <Trash2 className='h-4 w-4' />
          </Button>
        </div>
      </CardFooter>
=======
          
          {project.demo_url && (
            <a
              href={project.demo_url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live demo"
              title="Live demo"
            >
              <Button variant="ghost" size="icon" aria-label="Live demo link">
                <Link className="h-4 w-4" />
              </Button>
            </a>
          )}
        </div>
        
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" onClick={() => onEdit(project)} aria-label="Edit project">
            <Edit className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setDeleteDialogOpen(true)} aria-label="Delete project">
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
      
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Project</AlertDialogTitle>
            <AlertDialogDescription>
<<<<<<< HEAD
              Are you sure you want to delete this project? This action cannot
              be undone.            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            aria-label='Delete project';
          >;
            <Trash2 className='h-4 w-4' />;
          </Button>;
        </div>;
      </CardFooter>;

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>;
        <AlertDialogContent>;
          <AlertDialogHeader>;
            <AlertDialogTitle>Delete Project</AlertDialogTitle>;
<<<<<<< HEAD
=======
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            <AlertDialogDescription>;
              Are you sure you want to delete this project? This action cannot;
              be undone.            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;
<<<<<<< HEAD
            <AlertDialogCancel>Cancel</AlertDialogCancel>;
=======
<<<<<<< HEAD
            <AlertDialogCancel>Cancel</AlertDialogCancel>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            <AlertDialogAction
              onClick={handleDelete}
              className='bg-destructive text-destructive-foreground'>              Delete              Are you sure you want to delete this project? This action cannot be undone.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;
            <AlertDialogCancel>Cancel</AlertDialogCancel>;
            <AlertDialogAction
              onClick={handleDelete}
<<<<<<< HEAD
              className='bg-destructive text-destructive-foreground'>            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground">;
=======
<<<<<<< HEAD
              className='bg-destructive text-destructive-foreground'
            >            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground">
=======
              Are you sure you want to delete this project? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground">
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
<<<<<<< HEAD
  )
}
=======
              className='bg-destructive text-destructive-foreground'>            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground">;
=======
            <AlertDialogCancel > Cancel</AlertDialogCancel>;
            <AlertDialogAction;
              on_click={handle_delete}
              className='bg - destructive text - destructive - foreground';
            >              Delete              Are you sure you want to delete this project? This action cannot be undone.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;
            <AlertDialogCancel > Cancel</AlertDialogCancel>;
            <AlertDialogAction;
              on_click={handle_delete}
              className='bg - destructive text - destructive - foreground';
            >            <AlertDialogAction on_click={handle_delete} className="bg - destructive text - destructive - foreground">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              Delete;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    </Card>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
    </Card>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
