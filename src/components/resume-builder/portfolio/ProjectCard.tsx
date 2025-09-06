

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
  onDelete: (projectId: string) => void; import Image from 'next/image'
interface ProjectCardProps {
  project: PortfolioProject
  onEdit: (project: PortfolioProject,) => void
  onDelete: (projectId: string,) => void

}
<<<<<<< HEAD
export function ProjectCard({ project, onEdit, onDelete }: ProjectCardProps) {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const handleDelete = null;
=======
;
export function ProjectCard({ project, onEdit, onDelete }: ProjectCardProps) {;
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const handleDelete = () => {;
    if (project.id) {;
      onDelete(project.id);
    }
    setDeleteDialogOpen(false)
  },
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
=======
            className="object-cover"
            loading="lazy"
          />
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-muted">
            <FileText className="h-12 w-12 text-muted-foreground/50" />
          </div>
        )}
      </div>
<<<<<<< HEAD
      <CardContent className='flex-grow pt-6'>
        <div className='space-y-2'>
          <h3 className='font-semibold text-lg'>{project.title}</h3>
=======
      
      <CardContent className="flex-grow pt-6">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">{project.title}</h3>
          
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
          {project.description && (
            <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>
          )}
<<<<<<< HEAD
          {project.technologies && project.technologies.length > 0 && (
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
                  {tech}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className='flex justify-between border-t bg-muted/40 p-4'>
        <div className='flex gap-2'>
          {project.github_url && (
            <a
              href={project.github_url}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='GitHub'
              title='GitHub'
              href = {project.github_url,}
=======
          
          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {tech}
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
              <Button variant="ghost" size="icon" aria-label="GitHub link">
                <Github className="h-4 w-4" />
              </Button>
            </Link>
          )}
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
        
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" onClick={() => onEdit(project)} aria-label="Edit project">
            <Edit className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setDeleteDialogOpen(true)} aria-label="Delete project">
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
            >              Delete              Are you sure you want to delete this project? This action cannot be undone.
=======
              Are you sure you want to delete this project? This action cannot be undone.
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
<<<<<<< HEAD
            <AlertDialogAction
              onClick={handleDelete}
              className='bg-destructive text-destructive-foreground'
            >            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground">
=======
            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground">
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  )
<<<<<<< HEAD
}
=======
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
