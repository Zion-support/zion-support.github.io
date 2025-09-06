

import { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';


import Image from 'next/image';
import { PortfolioProject } from '@/types/resume';
interface ProjectCardProps {

<<<<<<< HEAD
=======
  project: PortfolioProject
  onEdit: (project: PortfolioProject) => void
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  onDelete: (projectId: string) => void; import Image from 'next/image'
interface ProjectCardProps {
  project: PortfolioProject
  onEdit: (project: PortfolioProject,) => void
  onDelete: (projectId: string,) => void
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

=======
            className='object-cover'
            loading='lazy'    <Card className="h-full flex flex-col">
      <div className="relative h-48 overflow-hidden rounded-t-lg bg-muted">
        {project.image_url ? (
          <Image
            src={project.image_url}
            alt={project.title}
            className='object-cover'
            loading='lazy'
>>>>>>>         ) : (
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        ) : (
>>>>>>>           <div className="w-full h-full flex items-center justify-center bg-muted">
            <FileText className="h-12 w-12 text-muted-foreground/50" />
          </div>
        )}
      </div>
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
                </Badge>;
              ))}
            </div>;
          )}


            <a
              href={project && project.github_url}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='GitHub'
              title='GitHub'
              href = {project && project.github_url,}

      
      <CardFooter className="flex justify-between border-t bg-muted/40 p-4">
        <div className="flex gap-2">
          {project.github_url && (
            <a
              href={project.github_url}
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
        </div>              <Button variant="ghost" size="icon" aria-label="Live demo link">
>>>>>>>                 <Link className="h-4 w-4" />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              </Button>
            </Link>
          )}
        </div>
<<<<<<< HEAD

=======
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
>>>>>>>       <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
ursor/fix-website-loading-errors-and-merge-6662
        
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" onClick={() => onEdit(project)} aria-label="Edit project">
            <Edit className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setDeleteDialogOpen(true)} aria-label="Delete project">
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
      



>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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


            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>


            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground">


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>



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
