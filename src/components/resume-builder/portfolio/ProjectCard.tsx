import { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function ProjectCard({ project, onEdit, onDelete }: ProjectCardProps) {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const handleDelete = () => {
    if (project.id) {
      onDelete(project.id);
    }
    setDeleteDialogOpen(false);
  };

  return (
    <Card className='h-full flex flex-col'>
      <div className='relative h-48 overflow-hidden rounded-t-lg bg-muted'>        {project.image_url ? (
          <Image
            src={project.image_url}
            alt={project.title}
            className='object-cover'
            loading='lazy'

        {project.image_url ? (
          <Image

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

            >
              <Button variant='ghost' size='icon' aria-label='GitHub link'>
                <Github className='h-4 w-4' />
              </Button>
            </a>
          )}

          {project.demo_url && (
            <a

            >
              <Button variant='ghost' size='icon' aria-label='Live demo link'>
                <Link className='h-4 w-4' />              </Button>
            </a>
          )}
        </div>

              </Button>
            </a>
          )}
        </div>

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Project</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this project? This action cannot
              be undone.            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className='bg-destructive text-destructive-foreground'
            >              Delete

            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>

              Delete

            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  );
}