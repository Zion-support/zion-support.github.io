

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

}

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
              href = {project && project.github_url,}

      
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
            </Link>
          )}

        </div>;

        <div className='flex gap-2'>;

            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;


  );
}
}
