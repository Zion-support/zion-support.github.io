import { useState, useEffect  } from 'react';
import { Card, CardContent  } from '@/components/ui/card';
import { Button  } from '@/components/ui/button';
import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FilePlus, Loader2 } from 'lucide-react'; import { ProjectCard } from './ProjectCard'
import { ProjectForm } from './ProjectForm'
import { PortfolioProject } from '@/types/resume'
import { usePortfolio } from '@/hooks/usePortfolio'
import { FilePlus, Loader2 } from 'lucide-react'
import { ProjectCard  } from './ProjectCard';
import { ProjectForm  } from './ProjectForm';
import { PortfolioProject  } from '@/types/resume';
import { usePortfolio } from '@/hooks/usePortfolio';
export function PortfolioBuilder() {

  }
  const handleEditSuccess = () => {
    setEditingProject(null);
    fetchProjects();
  };
  const handleDeleteProject = async (projectId: string) => {;
    const success = await deleteProject(projectId);    if (success) {
      fetchProjects()
    }
  }
import { useState, useEffect } from 'react',;
import { Card, CardContent } from '@/components/ui/card',;
import { Button } from '@/components/ui/button',;
import { FilePlus, Loader2 } from 'lucide-react';
import { ProjectCard } from './ProjectCard',;
import { ProjectForm } from './ProjectForm',;
import { PortfolioProject } from '@/types/resume',;
import { usePortfolio } from '@/hooks/usePortfolio',;
export function PortfolioBuilder() {;
  const { projects, fetchProjects, deleteProject, isLoading } = usePortfolio(),;
  const [showAddProject, setShowAddProject] = useState(false),;
  const [editingProject, setEditingProject] = useState<PortfolioProject | null>(null),;
  useEffect(() => {;
    fetchProjects();
  }, [fetchProjects]),;
  const handleAddSuccess = () => {;
    setShowAddProject(false),;
    fetchProjects();
  },;
  const handleEditSuccess = () => {;
    setEditingProject(null),;
    fetchProjects();
  },;
  const handleDeleteProject = async (projectId: string) => {;
    const success = await deleteProject(projectId),;
    if (success) {;
      fetchProjects();
    }
  },
ursor/fix-website-loading-errors-and-merge-6662


        <Button 
          onClick={() => setShowAddProject(true)} 
          className="gap-2"
          disabled={showAddProject || !!editingProject}
        >
          <FilePlus className="h-4 w-4" />
          Add Project
        </Button>
      </div>
      
      {/* Edit or Add Form */}
      {(showAddProject || editingProject) && (
        <Card>



              onSuccess={editingProject ? handleEditSuccess : handleAddSuccess}

              key={project.id}
              project={project}


            <CardContent>
              <div className="flex flex-col items-center gap-4">




                <Button 
                  onClick={() => setShowAddProject(true)} 

                  className='mt-2'                >            <CardContent>;
              <div className="flex flex-col items-center gap-4">;
                <div className="bg-muted/50 p-6 rounded-full">;
                  <FilePlus className="h-12 w-12 text-muted-foreground" />;
                </div>;
                <h3 className="text-xl font-medium">No portfolio projects yet</h3>;
                <p className="text-muted-foreground max-w-md mx-auto">;
                  Add your best work to showcase your skills and experience to potential employers.;
                </p>;
                <Button
                  onClick={() => setShowAddProject(true)} ;
                  className="mt-2";
              on_edit={() => setEditingProject (project)}
              on_delete={handleDeleteProject}
          {projects.map ((project, ) => (
            <ProjectCard;
              key = {project.id, }
              project = {project, }
              on_edit = {(, ) => setEditingProject (project), }
              on_delete = {handleDeleteProject, }
            />))}
        </div>) : (
        !showAddProject && (
          <Card className='text - center py - 12'>;
            <CardContent>;
              <div className='flex flex - col items - center gap - 4'>;
                <div className='bg - muted / 50 p - 6 rounded - full'>;
                  <FilePlus className='h - 12 w - 12 text - muted - foreground' />;
                </div>;
                <h3 className='text - xl font - medium'>;
                  No portfolio projects yet;
                </h3>;
                <p className='text - muted - foreground max - w-md mx - auto'>;
                  Add your best work to showcase your skills and experience to;
                  potential employers.;
                </p>;
                <Button;
                  on_click={() => setShowAddProject (true)}
                  className='mt - 2'                >            <CardContent>;
              <div className="flex flex - col items - center gap - 4">;
                <div className="bg - muted / 50 p - 6 rounded - full">;
                  <FilePlus className="h - 12 w - 12 text - muted - foreground" />;
                </div>;
                <h3 className="text - xl font - medium">No portfolio projects yet</h3>;
                <p className="text - muted - foreground max - w-md mx - auto">;
                  Add your best work to showcase your skills and experience to potential employers.;
                </p>;
                <Button;
                  on_click={() => setShowAddProject (true)}
                  className="mt - 2";

                >;
                  Add Your First Project;
                </Button>;
              </div>;
            </CardContent>;

  );
}

          </Card>))}
    </div>);
}

;
}
}
}

    </div>;
  );
}
;
