
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FilePlus, Loader2 } from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import { ProjectForm } from './ProjectForm';
import { PortfolioProject } from '@/types/resume';
import { usePortfolio } from '@/hooks/usePortfolio';

export function PortfolioBuilder() {
  const { projects, fetchProjects, deleteProject, isLoading } = usePortfolio();
  const [showAddProject, setShowAddProject] = useState(false);
  const [editingProject, setEditingProject] = useState<PortfolioProject | null>(null);
  
  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);
  
  const handleAddSuccess = () => {
    setShowAddProject(false);
    fetchProjects();
  };
  
  const handleEditSuccess = () => {
    setEditingProject(null);
    fetchProjects();
  };
  
  const handleDeleteProject = async (projectId: string) => {
    const success = await deleteProject(projectId);
    if (success) {
      fetchProjects();
    }
  };
  
  if (isLoading) {
    return (
      <div className=&quot;flex justify-center items-center h-64&quot;>
        <Loader2 className=&quot;h-8 w-8 animate-spin text-primary&quot; />
      </div>
    );
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
              {editingProject ? 'Edit Project' : 'Add New Project'}
            </h2>
            
            <ProjectForm 
              project={editingProject || undefined}
              onSuccess={editingProject ? handleEditSuccess : handleAddSuccess}
              onCancel={() => {
                setShowAddProject(false);
                setEditingProject(null);
              }}
            />
          </CardContent>
        </Card>
      )}
      
      {/* Projects List */}
      {projects.length > 0 ? (
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onEdit={() => setEditingProject(project)}
              onDelete={handleDeleteProject}
            />
          ))}
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
      )}
    </div>
  );
}
