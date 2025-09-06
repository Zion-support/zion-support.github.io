

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

  project: PortfolioProject;
  onEdit: (project: PortfolioProject) => void;

  onDelete: (projectId: string) => void; import Image from 'next/image'
interface ProjectCardProps {
  project: PortfolioProject
  onEdit: (project: PortfolioProject,) => void
  onDelete: (projectId: string,) => void

}

  return (
    <Card className="h-full flex flex-col">
      <div className="relative h-48 overflow-hidden rounded-t-lg bg-muted">
        {project.image_url ? (
          <Image
            src={project.image_url}
            alt={project.title}

            className="object-cover"
            loading="lazy"
          />

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-muted">
            <FileText className="h-12 w-12 text-muted-foreground/50" />
          </div>
        )}
      </div>

      
      <CardContent className="flex-grow pt-6">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">{project.title}</h3>
          

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          {project.description && (
            <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>
          )}


              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >

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

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                <Link className="h-4 w-4" />
              </Button>
            </Link>
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
      

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Project</AlertDialogTitle>
            <AlertDialogDescription>

              Are you sure you want to delete this project? This action cannot be undone.

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>

            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground">

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>

      </AlertDialog>
    </Card>
  )

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
