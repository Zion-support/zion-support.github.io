

<<<<<<< HEAD
import { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';


=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import Image from 'next/image';
import { PortfolioProject } from '@/types/resume';
interface ProjectCardProps {
<<<<<<< HEAD
<<<<<<< HEAD
=======
  project: PortfolioProject
  onEdit: (project: PortfolioProject) => void
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

  project: PortfolioProject
  onEdit: (project: PortfolioProject) => void
=======
  project: PortfolioProject;
  onEdit: (project: PortfolioProject) => void;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  onDelete: (projectId: string) => void; import Image from 'next/image'
interface ProjectCardProps {
  project: PortfolioProject
  onEdit: (project: PortfolioProject,) => void
  onDelete: (projectId: string,) => void
<<<<<<< HEAD
<<<<<<< HEAD

}

=======
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const handleDelete = null;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
;
export function ProjectCard({ project, onEdit, onDelete }: ProjectCardProps) {;
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const handleDelete = () => {;
    if (project.id) {;
      onDelete(project.id);
    }
    setDeleteDialogOpen(false)
  },
<<<<<<< HEAD

=======
=======
}
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

}
<<<<<<< HEAD
export function ProjectCard({ project, onEdit, onDelete }: ProjectCardProps) {
<<<<<<< HEAD
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const handleDelete = null;
=======
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const handleDelete = () => {
    if (project.id) {
      onDelete(project.id)
    }
    setDeleteDialogOpen(false)
  }
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
=======
  
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    <Card className="h-full flex flex-col">
      <div className="relative h-48 overflow-hidden rounded-t-lg bg-muted">
        {project.image_url ? (
          <Image
            src={project.image_url}
            alt={project.title}
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            className='object-cover'
            loading='lazy'    <Card className="h-full flex flex-col">
      <div className="relative h-48 overflow-hidden rounded-t-lg bg-muted">
        {project.image_url ? (
          <Image
            src={project.image_url}
            alt={project.title}
            className='object-cover'
            loading='lazy'
<<<<<<< HEAD
>>>>>>>         ) : (
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        ) : (
>>>>>>>           <div className="w-full h-full flex items-center justify-center bg-muted">
=======
=======
            className="object-cover"
            loading="lazy"
          />
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-muted">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <FileText className="h-12 w-12 text-muted-foreground/50" />
          </div>
        )}
      </div>
<<<<<<< HEAD
<<<<<<< HEAD

          {project.description && (
            <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>
          )}

=======
      <CardContent className='flex-grow pt-6'>
        <div className='space-y-2'>
          <h3 className='font-semibold text-lg'>{project.title}</h3>
>>>>>>>           {project.description && (
            <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>
          )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
      <CardContent className='flex-grow pt-6'>
        <div className='space-y-2'>
          <h3 className='font-semibold text-lg'>{project.title}</h3>
=======
      
      <CardContent className="flex-grow pt-6">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">{project.title}</h3>
          
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          {project.description && (
            <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>
          )}
<<<<<<< HEAD
          {project.technologies && project.technologies.length > 0 && (
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
          
          {project.technologies && project.technologies.length > 0 && (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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


>>>>>>> >>>>>>>                   {tech}
=======
=======
<<<<<<< HEAD
          
          {project.technologies && project.technologies.length > 0 && (
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            <div className="flex flex-wrap gap-1 mt-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {tech}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                </Badge>;
              ))}
            </div>;
          )}
<<<<<<< HEAD


            <a
              href={project && project.github_url}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='GitHub'
              title='GitHub'
              href = {project && project.github_url,}

=======
        </div>
      </CardContent>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      
      <CardFooter className="flex justify-between border-t bg-muted/40 p-4">
        <div className="flex gap-2">
          {project.github_url && (
            <a
              href={project.github_url}
<<<<<<< HEAD
<<<<<<< HEAD

              target="_blank"
=======
>>>>>>>               target="_blank"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
<<<<<<< HEAD

                <Link className="h-4 w-4" />
=======
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
>>>>>>>           )}


=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>>                 <Link className="h-4 w-4" />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              </Button>
            </Link>
          )}
        </div>
<<<<<<< HEAD

=======
=======
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                <Link className="h-4 w-4" />
              </Button>
            </Link>
          )}
        </div>
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>>       <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
ursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" onClick={() => onEdit(project)} aria-label="Edit project">
            <Edit className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setDeleteDialogOpen(true)} aria-label="Delete project">
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
      
<<<<<<< HEAD



>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
>>>>>>>         <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Project</AlertDialogTitle>
            <AlertDialogDescription>
<<<<<<< HEAD

            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>

              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>

=======
              Are you sure you want to delete this project? This action cannot
              be undone.            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
<<<<<<< HEAD
            <AlertDialogAction
              onClick={handleDelete}
              className='bg-destructive text-destructive-foreground'
            >              Delete              Are you sure you want to delete this project? This action cannot be undone.
>>>>>>>             </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className='bg-destructive text-destructive-foreground'
            >            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground">
>>>>>>>               Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>;
    </Card>;
  );
};
}
}
}
>>>>>>> 
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


=======
            <AlertDialogAction
              onClick={handleDelete}
              className='bg-destructive text-destructive-foreground'
            >              Delete              Are you sure you want to delete this project? This action cannot be undone.
=======
              Are you sure you want to delete this project? This action cannot be undone.
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
<<<<<<< HEAD


            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground">


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
            <AlertDialogAction
              onClick={handleDelete}
              className='bg-destructive text-destructive-foreground'
            >            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground">
=======
            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
<<<<<<< HEAD



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

>>>>>>>               Delete;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;


  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    </Card>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
      </AlertDialog>;
    </Card>;
  );
};
}
}
=======
      </AlertDialog>
    </Card>
  )
<<<<<<< HEAD
}
=======
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
