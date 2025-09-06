<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======

>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,;
} from '@/components/ui/alert-dialog';
import { Edit, Trash2, Github, Link, FileText } from 'lucide-react';
<<<<<<< HEAD
=======
=======
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Edit, Trash2, Github, Link, FileText } from 'lucide-react'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import Image from 'next/image';
import { PortfolioProject } from '@/types/resume';

interface ProjectCardProps {
  project: PortfolioProject;
  onEdit: (project: PortfolioProject) => void;
  onDelete: (projectId: string) => void;

export function ProjectCard({ project, onEdit, onDelete }: ProjectCardProps) {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const handleDelete = () => {
    if (project.id) {
      onDelete(project.id);
    }
    setDeleteDialogOpen(false);
  };

  return (
<<<<<<< HEAD
    <Card className='h-full flex flex-col'>
      <div className='relative h-48 overflow-hidden rounded-t-lg bg-muted'>        {project.image_url ? (
          <Image
            src={project.image_url}
            alt={project.title}
            className='object-cover'
            loading='lazy'
=======
<<<<<<< HEAD
    <Card className='h-full flex flex-col'>
      <div className='relative h-48 overflow-hidden rounded-t-lg bg-muted'>
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    <Card className="h-full flex flex-col">
      <div className="relative h-48 overflow-hidden rounded-t-lg bg-muted">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        {project.image_url ? (
          <Image
            src={project.image_url}
            alt={project.title}
<<<<<<< HEAD
<<<<<<< HEAD
            className='object-cover'
            loading='lazy'
=======
            className="object-cover"
            loading="lazy"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          />
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
<<<<<<< HEAD
                <Badge key={index} variant='secondary' className='text-xs'>                  {tech}
=======
<<<<<<< HEAD
                <Badge key={index} variant='secondary' className='text-xs'>
=======
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
          
          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <Badge key={index} variant="secondary" className="text-xs">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  {tech}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                </Badge>
              ))}
            </div>
          )}
        </div>
      </CardContent>
<<<<<<< HEAD

      <CardFooter className='flex justify-between border-t bg-muted/40 p-4'>
        <div className='flex gap-2'>
=======
<<<<<<< HEAD
<<<<<<< HEAD

      <CardFooter className='flex justify-between border-t bg-muted/40 p-4'>
        <div className='flex gap-2'>
=======
      
      <CardFooter className="flex justify-between border-t bg-muted/40 p-4">
        <div className="flex gap-2">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          {project.github_url && (
            <a
              href={project.github_url}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='GitHub'
              title='GitHub'
            >
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
              title='Live demo'
            >
<<<<<<< HEAD
              <Button variant='ghost' size='icon' aria-label='Live demo link'>
                <Link className='h-4 w-4' />              </Button>
            </a>
          )}
        </div>
=======
<<<<<<< HEAD
              <Button variant='ghost' size='icon' aria-label='Live demo link'>
                <Link className='h-4 w-4' />
=======
      
      <CardFooter className="flex justify-between border-t bg-muted/40 p-4">
        <div className="flex gap-2">
          {project.github_url && (
            <a
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <Button variant="ghost" size="icon" aria-label="GitHub link">
                <Github className="h-4 w-4" />
              </Button>
            </a>
          )}
          
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <Button variant="ghost" size="icon" aria-label="Live demo link">
                <Link className="h-4 w-4" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              </Button>
            </a>
          )}
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

        <div className='flex gap-2'>
          <Button
            variant='ghost'
            size='icon'
            onClick={() => onEdit(project)}
            aria-label='Edit project'
          >
            <Edit className='h-4 w-4' />
<<<<<<< HEAD
=======
=======
        
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" onClick={() => onEdit(project)} aria-label="Edit project">
            <Edit className="h-4 w-4" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          </Button>
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
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
        
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" onClick={() => onEdit(project)} aria-label="Edit project">
            <Edit className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setDeleteDialogOpen(true)} aria-label="Delete project">
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
      
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
            <AlertDialogAction
              onClick={handleDelete}
              className='bg-destructive text-destructive-foreground'
            >              Delete
=======
<<<<<<< HEAD
<<<<<<< HEAD
              Are you sure you want to delete this project? This action cannot
              be undone.
=======
              Are you sure you want to delete this project? This action cannot be undone.
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              Are you sure you want to delete this project? This action cannot be undone.
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
<<<<<<< HEAD
<<<<<<< HEAD
            <AlertDialogAction
              onClick={handleDelete}
              className='bg-destructive text-destructive-foreground'
            >
=======
            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              Delete
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  );
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
