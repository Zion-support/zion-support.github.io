
import Image from 'next/image';

interface ProjectCardProps {_project: PortfolioProject;
  onEdit: (_project: PortfolioProject) => void;
  onDelete: (_projectId: string) => void;}

export function ProjectCard(_{_project, _onEdit, _onDelete}: ProjectCardProps) {_const [deleteDialogOpen, _setDeleteDialogOpen] = useState(false);
  
  const _handleDelete = () => {
    if (project.id) {
      onDelete(project.id);}
    setDeleteDialogOpen(false);
  };
  
  return (
    <Card className="h-full flex flex-col">
      <div className="relative h-48 overflow-hidden rounded-t-lg bg-muted">
        {_project.image_url ? (
          <Image
            src={project.image_url}
            alt={_project.title}
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
          <h3 className="font-semibold text-lg">{_project.title}</h3>
          
          {_project.description && (
            <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>
          )}
          
          {_project.technologies && project.technologies.length > 0 && (_<div className="flex flex-wrap gap-1 mt-2">
              {project.technologies.map((tech, _index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {_tech}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between border-t bg-muted/40 p-4">
        <div className="flex gap-2">
          {_project.github_url && (
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
          
          {_project.demo_url && (
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
          <Button variant="ghost" size="icon" onClick={_() => onEdit(project)} aria-label="Edit project">
            <Edit className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={_() => setDeleteDialogOpen(true)} aria-label="Delete project">
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
      
      <AlertDialog open={_deleteDialogOpen} onOpenChange={_setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Project</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this project? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={_handleDelete} className="bg-destructive text-destructive-foreground">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  );
}
