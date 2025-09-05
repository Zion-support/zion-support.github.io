
import { useState, useEffect } from 'react',;
import { Card, CardContent } from '@/components/ui/card',;
import { Button } from '@/components/ui/button',;
import { FilePlus, Loader2 } from 'lucide-react',;
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
<<<<<<< HEAD
  },
  
  if (isLoading) {
    return (
      <div className=&quot;flex justify-center items-center h-64&quot;>
        <Loader2 className=&quot;h-8 w-8 animate-spin text-primary&quot; />
      </div>
    )
  }
  
  return (
    <div className=&quot;space-y-6&quot;>
      <div className=&quot;flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6&quot;>
        <div>
          <h1 className=&quot;text-2xl font-bold&quot;>Portfolio Projects</h1>
          <p className=&quot;text-muted-foreground&quot;>Showcase your best work and projects</p>
        </div>
        <Button 
          onClick={() => setShowAddProject(true)} 
          className=&quot;gap-2&quot;
          disabled={showAddProject || !!editingProject}
        >
          <FilePlus className=&quot;h-4 w-4&quot; />
          Add Project
        </Button>
      </div>
      
      {/* Edit or Add Form */}
      {(showAddProject || editingProject) && (
        <Card>
          <CardContent className=&quot;pt-6&quot;>
            <h2 className=&quot;text-xl font-semibold mb-6&quot;>
=======
  };
  if (isLoading) {;
    return (;
      <div className="flex justify-center items-center h-64">;
        <Loader2 className="h-8 w-8 animate-spin text-primary" />;
      </div>;
    );
  }
;
  return (;
    <div className="space-y-6">;
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">;
        <div>;
          <h1 className="text-2xl font-bold">Portfolio Projects</h1>;
          <p className="text-muted-foreground">Showcase your best work and projects</p>;
        </div>;
        <Button;
          onClick={() => setShowAddProject(true)} ;
          className="gap-2";
          disabled={showAddProject || !!editingProject}
        >;
          <FilePlus className="h-4 w-4" />;
          Add Project;
        </Button>;
      </div>;
      {/* Edit or Add Form */}
      {(showAddProject || editingProject) && (;
        <Card>;
          <CardContent className="pt-6">;
            <h2 className="text-xl font-semibold mb-6">;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
              {editingProject ? 'Edit Project' : 'Add New Project'}
            </h2>;
            <ProjectForm;
              project={editingProject || undefined}
              onSuccess={editingProject ? handleEditSuccess : handleAddSuccess}
              onCancel={() => {;
                setShowAddProject(false);
                setEditingProject(null);
              }}
            />;
          </CardContent>;
        </Card>;
      )}
;
      {/* Projects List */}
<<<<<<< HEAD
      {projects.length > 0 ? (
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;>
          {projects.map((project) => (
            <ProjectCard
=======
      {projects.length > 0 ? (;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
          {projects.map((project) => (;
            <ProjectCard;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
              key={project.id}
              project={project}
              onEdit={() => setEditingProject(project)}
              onDelete={handleDeleteProject}
            />;
          ))}
<<<<<<< HEAD
        </div>
      ) : (
        !showAddProject && (
          <Card className=&quot;text-center py-12&quot;>
            <CardContent>
              <div className=&quot;flex flex-col items-center gap-4&quot;>
                <div className=&quot;bg-muted/50 p-6 rounded-full&quot;>
                  <FilePlus className=&quot;h-12 w-12 text-muted-foreground&quot; />
                </div>
                <h3 className=&quot;text-xl font-medium&quot;>No portfolio projects yet</h3>
                <p className=&quot;text-muted-foreground max-w-md mx-auto&quot;>
                  Add your best work to showcase your skills and experience to potential employers.
                </p>
                <Button 
                  onClick={() => setShowAddProject(true)} 
                  className=&quot;mt-2&quot;
                >
                  Add Your First Project
                </Button>
              </div>
            </CardContent>
          </Card>
        )
=======
        </div>;
      ) : (;
        !showAddProject && (;
          <Card className="text-center py-12">;
            <CardContent>;
              <div className="flex flex-col items-center gap-4">;
                <div className="bg-muted/50 p-6 rounded-full">;
                  <FilePlus className="h-12 w-12 text-muted-foreground" />;
                </div>;
                <h3 className="text-xl font-medium">No portfolio projects yet</h3>;
                <p className="text-muted-foreground max-w-md mx-auto">;
                  Add your best work to showcase your skills and experience to potential employers.;
                </p>;
                <Button;
                  onClick={() => setShowAddProject(true)} ;
                  className="mt-2";
                >;
                  Add Your First Project;
                </Button>;
              </div>;
            </CardContent>;
          </Card>;
        );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
      )}
    </div>;
  );
}
;