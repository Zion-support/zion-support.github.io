import {PortfolioProject} from '@/types/resume';


export function ProjectCard({ project, onEdit, onDelete }: ProjectCardProps) {

export function ProjectCard({ project, onEdit, onDelete }: ProjectCardProps) {;



    }
    setDeleteDialogOpen(false);
  };
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




      </div>;

      <CardContent className="flex-grow pt-6">;
        <div className="space-y-2">;
          <h3 className="font-semibold text-lg">{project && project.title}</h3>;

          {project && project.description && (;
            <p className="text-sm text-muted-foreground line-clamp-3">{project && project.description}</p>;

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
        <div className="flex gap-2">;
          <Button variant="ghost" size="icon" onClick={() => onEdit(project)}>;
            <Edit className="h-4 w-4" />;
          </Button>;
          <Button variant="ghost" size="icon" onClick={() => setDeleteDialogOpen(true)}>;
            <Trash2 className="h-4 w-4" />;
          </Button>;
        </div>;
      </CardFooter>;
      ;
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
              Delete;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;

  )
}
;


}</div> </Button> </div> </CardFooter> <AlertDialog open= {
  deleteDialogOpen 
}onOpenChange= {
  setDeleteDialogOpen 
}> <AlertDialogContent> <AlertDialogHeader> <AlertDialogTitle>Delete Project</AlertDialogTitle> <AlertDialogDescription> Are you sure you want to delete this project? This action cannot be undone. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel>Cancel</AlertDialogCancel> Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </Card>) 
}
  );

  );
}
  )
}

;



