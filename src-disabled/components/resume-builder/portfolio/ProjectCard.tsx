import { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

<<<<<<< HEAD:src-disabled/components/resume-builder/portfolio/ProjectCard.tsx
import { useState  } from 'react';
import { Card, CardContent, CardFooter  } from '@/components/ui/card';
import { Button  } from '@/components/ui/button';
import { Badge  } from '@/components/ui/badge';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle  } from '@/components/ui/alert-dialog';
=======

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
import Image from 'next/image';
import { PortfolioProject } from '@/types/resume';
interface ProjectCardProps {
  project: PortfolioProject
  onEdit: (project: PortfolioProject) => void

  project: PortfolioProject
  onEdit: (project: PortfolioProject) => void
  project: PortfolioProject;
  onEdit: (project: PortfolioProject) => void;
=======
import Image from 'next/image';
import { PortfolioProject } from '@/types/resume';
interface ProjectCardProps {


  project: PortfolioProject;
  onEdit: (project: PortfolioProject) => void;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  onDelete: (projectId: string) => void; import Image from 'next/image'
interface ProjectCardProps {
  project: PortfolioProject
  onEdit: (project: PortfolioProject,) => void
  onDelete: (projectId: string,) => void
<<<<<<< HEAD
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const handleDelete = null;
;
export function ProjectCard({ project, onEdit, onDelete }: ProjectCardProps) {;
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const handleDelete = () => {;
    if (project.id) {;
      onDelete(project.id);
    }
    setDeleteDialogOpen(false)
  },
=======
}

}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/resume-builder/portfolio/ProjectCard.tsx
import { Edit, Trash2, Github, Link, FileText } from 'lucide-react'
import Image from 'next/image';
import { PortfolioProject } from '@/types/resume';
interface ProjectCardProps {
  project: PortfolioProject;
  onEdit: (project: PortfolioProject) => void;
  onDelete: (projectId: string) => void
<<<<<<< HEAD:src-disabled/components/resume-builder/portfolio/ProjectCard.tsx
=======
}

}
export function ProjectCard({ project, onEdit, onDelete }: ProjectCardProps) {
<<<<<<< HEAD
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const handleDelete = null;
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
=======

  const [ deleteDialogOpen, setDeleteDialogOpen ] = useState(false),

  
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const handleDelete = () => {
    if (project.id) {
      onDelete(project.id)
    }
    setDeleteDialogOpen(false)
  };


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/resume-builder/portfolio/ProjectCard.tsx

  return (
  
    <Card className="h-full flex flex-col">
      <div className="relative h-48 overflow-hidden rounded-t-lg bg-muted">
        {project.image_url ? (
          <Image
            src={project.image_url}
            alt={project.title}
<<<<<<< HEAD:src-disabled/components/resume-builder/portfolio/ProjectCard.tsx
            className="object-cover""
            loading="lazy""
=======
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
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-muted">
            <FileText className="h-12 w-12 text-muted-foreground/50" />
          </div>
        )}
      </div>
      <CardContent className='flex-grow pt-6'>
        <div className='space-y-2'>
          <h3 className='font-semibold text-lg'>{project.title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>
          )}
      <CardContent className='flex-grow pt-6'>
        <div className='space-y-2'>
          <h3 className='font-semibold text-lg'>{project.title}</h3>
      
      <CardContent className="flex-grow pt-6">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">{project.title}</h3>
          
          {project.description && (
            <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>
          )}
          {project.technologies && project.technologies.length > 0 && (
            <div className='flex flex-wrap gap-1 mt-2'>
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant='secondary' className='text-xs'>                  {tech}                <Badge key={index} variant="secondary" className="text-xs">
=======


            className="object-cover"
            loading="lazy"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/resume-builder/portfolio/ProjectCard.tsx
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-muted">"
            <FileText className="h-12 w-12 text-muted-foreground/50" />"
          </div>
        )}
      </div>
      </div>;
      <CardContent className='flex-grow pt-6'>;
        <div className='space-y-2'>;
          <h3 className='font-semibold text-lg'>{project && project.title}</h3>;
          {project && project.description && (;
            <p className='text-sm text-muted-foreground line-clamp-3'>;
              {project && project.description}
            </p>;
className='object-cover'
            loading='lazy'
        ) : (
          <div className='w-full h-full flex items-center justify-center bg-muted'>
            <FileText className='h-12 w-12 text-muted-foreground/50' />
          </div>
        )}
      </div>
      <CardContent className='flex-grow pt-6'>
        <div className='space-y-2'>
          <h3 className='font-semibold text-lg'>{project.title}</h3>
          {project.description && (
            <p className='text-sm text-muted-foreground line-clamp-3'>
              {project.description}
            </p>
          )}
          {project.technologies && project.technologies.length > 0 && (
            <div className='flex flex-wrap gap-1 mt-2'>
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant='secondary' className='text-xs'>
origin/cursor/automate-test-improve-and-merge-code-2533
                  {tech}
                </Badge>
              ))}
            </div>
<<<<<<< HEAD:src-disabled/components/resume-builder/portfolio/ProjectCard.tsx
          )}
=======
<<<<<<< HEAD
          )}
          
          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
=======

          )}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/resume-builder/portfolio/ProjectCard.tsx
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
<<<<<<< HEAD:src-disabled/components/resume-builder/portfolio/ProjectCard.tsx
            className="object-cover"
            loading="lazy"
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
=======


<<<<<<< HEAD
          
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/resume-builder/portfolio/ProjectCard.tsx
          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
<<<<<<< HEAD:src-disabled/components/resume-builder/portfolio/ProjectCard.tsx
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/resume-builder/portfolio/ProjectCard.tsx
                  {tech}
                </Badge>;
              ))}
            </div>;
          )}
<<<<<<< HEAD
        </div>
      </CardContent>
=======


        </div>
      </CardContent>
<CardFooter className='flex justify-between border-t bg-muted/40 p-4'>
        <div className='flex gap-2'>
          {project.github_url && (
origin/cursor/automate-test-improve-and-merge-code-2533
            <a
              href={project && project.github_url}
              target='_blank''
              rel='noopener noreferrer''
              aria-label='GitHub''
              title='GitHub''
              href = {project && project.github_url,}

<<<<<<< HEAD:src-disabled/components/resume-builder/portfolio/ProjectCard.tsx
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/resume-builder/portfolio/ProjectCard.tsx
      <CardFooter className="flex justify-between border-t bg-muted/40 p-4">
        <div className="flex gap-2">
          {project.github_url && (
            <a
              href={project.github_url}
<<<<<<< HEAD:src-disabled/components/resume-builder/portfolio/ProjectCard.tsx
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
=======
<<<<<<< HEAD
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

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/resume-builder/portfolio/ProjectCard.tsx
              <Button variant="ghost" size="icon" aria-label="GitHub link">
                <Github className="h-4 w-4" />
              </Button>
            </Link>
          )}
<<<<<<< HEAD:src-disabled/components/resume-builder/portfolio/ProjectCard.tsx
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/resume-builder/portfolio/ProjectCard.tsx
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
<<<<<<< HEAD:src-disabled/components/resume-builder/portfolio/ProjectCard.tsx
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/resume-builder/portfolio/ProjectCard.tsx

        </div>;

        <div className='flex gap-2'>;

          {project.demo_url && (
            <a
              href={project.demo_url}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Live demo'
              title='Live demo'            >
              <Button variant='ghost' size='icon' aria-label='Live demo link'>
                <Link className='h-4 w-4' />
              </Button>
            </a>
          )}
        </div>
<div className='flex gap-2'>
origin/cursor/automate-test-improve-and-merge-code-2533
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


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        <div className="flex gap-2">
          <Button variant="ghost" size="icon" onClick={() => onEdit(project)} aria-label="Edit project">
            <Edit className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setDeleteDialogOpen(true)} aria-label="Delete project">
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
<<<<<<< HEAD:src-disabled/components/resume-builder/portfolio/ProjectCard.tsx

      <div className='relative h-48 overflow-hidden rounded-t-lg bg-muted'>        {project && project.image_url ? (;
</div>
          <Image;
            src={project && project.image_url}
            alt={project && project.title}
            className='object-cover
            loading='lazy'    <Card className="h-full flex flex-col">;"
"
      <div className="relative h-48 overflow-hidden rounded-t-lg bg-muted">;"
            alt={project && project.title}"
            loading='lazy)
        ) : (
          <div className='w-full h-full flex items-center justify-center bg-muted'>;

            <FileText className='h-12 w-12 text-muted-foreground/50' />;

          </div>;
    <Card className='h - full flex flex - col'>;

      <div className='relative h - 48 overflow - hidden rounded - t-lg bg - muted'>        {project.image_url ? (
            src={project.image_url}
            alt={project.title}
            className='object - cover';
            loading='lazy'    <Card className="h - full flex flex - col">;"
      <div className="relative h - 48 overflow - hidden rounded - t-lg bg - muted">;"
            alt={project.title}"
            className='object - cover';')
            loading='lazy') : (
          <div className='w - full h - full flex items - center justify - center bg - muted'>;

            <FileText className='h - 12 w - 12 text - muted - foreground / 50' />;
)
          </div>)}
      <CardContent className='flex - grow pt - 6'>;

        <div className='space - y-2'>;
          <h3 className='font - semibold text - lg'>{project.title}</h3>;
            <p className='text - sm text - muted - foreground line - clamp - 3'>;
</p>
            <div className='flex flex-wrap gap-1 mt-2'>
                <Badge key={index} variant='secondary' className='text-xs'>                  {tech}                <Badge key={index} variant="secondary" className="text-xs">"
    <Card className="h-full flex flex-col">"
      <div className="relative h-48 overflow-hidden rounded-t-lg bg-muted">"

            className="object-cover"""
            loading="lazy""
          />
          <div className="w-full h-full flex items-center justify-center bg-muted">"
</div>"
            <FileText className="h-12 w-12 text-muted-foreground/50" />"
=======
      
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/resume-builder/portfolio/ProjectCard.tsx


      </div>;"
      <CardContent className='flex-grow pt-6'>;

        <div className='space-y-2'>;
          <h3 className='font-semibold text-lg'>{project && project.title}</h3>;
            <p className='text-sm text-muted-foreground line-clamp-3'>;
            </p>;
            <div className='flex flex-wrap gap-1 mt-2'>;
                <Badge key={index} variant='secondary' className='text-xs'>                  {tech}                <Badge key={index} variant="secondary" className="text-xs">;"
          <div className="w-full h-full flex items-center justify-center bg-muted">;"
            <FileText className="h-12 w-12 text-muted-foreground/50" />;"

      <CardContent className="flex-grow pt-6">;"
        <div className="space-y-2">;"
          <h3 className="font-semibold text-lg">{project && project.title}</h3>;""
            <p className="text-sm text-muted-foreground line-clamp-3">{project && project.description}</p>;""
            <div className="flex flex-wrap gap-1 mt-2">;"
                <Badge key={index} variant="secondary" className="text-xs">;"

                ;
            <a;
              href={project && project.github_url}"
              target='_blank
              rel='noopener noreferrer
              aria-label='GitHub
              title='GitHub
              href = {project && project.github_url,}

      <CardFooter className="flex justify-between border-t bg-muted/40 p-4">"
</a>"
        <div className="flex gap-2">"
              href={project.github_url}
              target="_blank"""
              rel="noopener noreferrer"""
              aria-label="GitHub"""
              title="GitHub""
            >
              <Button variant="ghost" size="icon" aria-label="GitHub link">"
                <Github className="h-4 w-4" />"

        <div className='flex gap-2'>;
          <Button;
            variant='ghost
            size='icon
            onClick={() => onEdit(project)}

            <Edit className='h-4 w-4' />;

            onClick={() => setDeleteDialogOpen(true)}



                <Link className="h-4 w-4" />"


          <Button variant="ghost" size="icon" onClick={() => onEdit(project)} aria-label="Edit project">"
            <Edit className="h-4 w-4" />"

          <Button variant="ghost" size="icon" onClick={() => setDeleteDialogOpen(true)} aria-label="Delete project">"
            <Trash2 className="h-4 w-4" />"
</Trash2>
pr-12325

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Project</AlertDialogTitle>
            <AlertDialogDescription>
<<<<<<< HEAD:src-disabled/components/resume-builder/portfolio/ProjectCard.tsx
=======
<<<<<<< HEAD
              Are you sure you want to delete this project? This action cannot
              be undone.            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/resume-builder/portfolio/ProjectCard.tsx
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
<<<<<<< HEAD:src-disabled/components/resume-builder/portfolio/ProjectCard.tsx
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/resume-builder/portfolio/ProjectCard.tsx
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
            <p className="text - sm text - muted - foreground line - clamp - 3">{project.description}</p>)}"
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

        <AlertDialogContent>

          <AlertDialogHeader>

            <AlertDialogTitle>Delete Project
            <AlertDialogDescription>
            <Trash2 className='h-4 w-4' />;
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>;

        <AlertDialogContent>;

          <AlertDialogHeader>;

            <AlertDialogTitle>Delete Project;
            </p>)}
            <div className='flex flex - wrap gap - 1 mt - 2'>;
                <Badge key={index} variant='secondary' className='text - xs'>                  {tech}                <Badge key={index} variant="secondary" className="text - xs">;"
          <div className="w - full h - full flex items - center justify - center bg - muted">;"
            <FileText className="h - 12 w - 12 text - muted - foreground / 50" />;"

      <CardContent className="flex - grow pt - 6">;"
        <div className="space - y-2">;"
          <h3 className="font - semibold text - lg">{project.title}</h3>;""
            <p className="text - sm text - muted - foreground line - clamp - 3">{project.description}</p>)}""
            <div className="flex flex - wrap gap - 1 mt - 2">;"
                <Badge key={index} variant="secondary" className="text - xs">;"

                ))}
      ;"
      <CardFooter className='flex justify - between border - t bg - muted / 40 p - 4'>;

        <div className='flex gap - 2'>;
pr-12325
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
            <AlertDialogDescription>;
              Are you sure you want to delete this project? This action cannot;
              be undone.            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;
            <AlertDialogAction
              onClick={handleDelete}
              className='bg-destructive text-destructive-foreground'>              Delete              Are you sure you want to delete this project? This action cannot be undone.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;
            <AlertDialogCancel>Cancel</AlertDialogCancel>;
            <AlertDialogAction
              onClick={handleDelete}
              Are you sure you want to delete this project? This action cannot be undone.


<<<<<<< HEAD:src-disabled/components/resume-builder/portfolio/ProjectCard.tsx
Are you sure you want to delete this project? This action cannot
              be undone.
origin/cursor/automate-test-improve-and-merge-code-2533
=======
<<<<<<< HEAD
            <AlertDialogAction
              onClick={handleDelete}
              className='bg-destructive text-destructive-foreground'
            >              Delete              Are you sure you want to delete this project? This action cannot be undone.
              Are you sure you want to delete this project? This action cannot be undone.
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/resume-builder/portfolio/ProjectCard.tsx
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
<<<<<<< HEAD:src-disabled/components/resume-builder/portfolio/ProjectCard.tsx
            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground">"
            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground">


<AlertDialogAction
              onClick={handleDelete}
              className='bg-destructive text-destructive-foreground'
            >
origin/cursor/automate-test-improve-and-merge-code-2533
=======
<<<<<<< HEAD
            <AlertDialogAction
              onClick={handleDelete}
              className='bg-destructive text-destructive-foreground'
            >            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground">
            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground">
=======


            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground">


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/resume-builder/portfolio/ProjectCard.tsx
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
<<<<<<< HEAD:src-disabled/components/resume-builder/portfolio/ProjectCard.tsx
=======
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/resume-builder/portfolio/ProjectCard.tsx
      </AlertDialog>
    </Card>
              className='bg-destructive text-destructive-foreground'>            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground">;
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
<<<<<<< HEAD:src-disabled/components/resume-builder/portfolio/ProjectCard.tsx
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/resume-builder/portfolio/ProjectCard.tsx
              Delete;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;
<<<<<<< HEAD:src-disabled/components/resume-builder/portfolio/ProjectCard.tsx
  );
}
}
    </Card>);
}
}}}}))))))
  )
}
;
  );
}
origin/cursor/automate-test-improve-and-merge-code-2533
              target="_blank";""
              rel="noopener noreferrer";""
              aria - label="GitHub";""
              title="GitHub";"
            >;
              <Button variant='ghost' size='icon' aria - label='GitHub link'>;

                <Github className='h - 4 w - 4' />;

            </a>)}
              href={project.demo_url}
              aria - label='Live demo';
              title='Live demo'            >;
</a>
              <Button variant='ghost' size='icon' aria - label='Live demo link'>;

                <Link className='h - 4 w - 4' />              ;

        </div>              <Button variant="ghost" size="icon" aria - label="Live demo link">;"
                <Link className="h - 4 w - 4" />;"

            variant='ghost';
            size='icon';
            on_click={() => on_edit (project)}

            <Edit className='h - 4 w - 4' />;

            on_click={() => setDeleteDialogOpen (true)}

            <Trash2 className='h - 4 w - 4' />;



            <AlertDialogTitle > Delete Project;
            <AlertDialogDescription>;

              be undone.            ;
          <AlertDialogFooter>;



            <AlertDialogAction;
              onClick={handleDelete}
              className='bg-destructive text-destructive-foreground'>              Delete              Are you sure you want to delete this project? This action cannot be undone.;


            <AlertDialogCancel>Cancel;



          <AlertDialogFooter>

            <AlertDialogCancel>Cancel


            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground">"




              className='bg-destructive text-destructive-foreground'>            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground">;"

            <AlertDialogCancel > Cancel;
              on_click={handle_delete}"
              className='bg - destructive text - destructive - foreground';
            >              Delete              Are you sure you want to delete this project? This action cannot be undone.;


              on_click={handle_delete}
            >            <AlertDialogAction on_click={handle_delete} className="bg - destructive text - destructive - foreground">;"

    );"
pr-12325
=======


<<<<<<< HEAD
  );
}
      </AlertDialog>;
    </Card>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
}
=======
    </Card>);
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/resume-builder/portfolio/ProjectCard.tsx
