
<<<<<<< HEAD
import { useState, useEffect } from 'react',
import { Card, CardContent } from '@/components/ui/card',
import { Button } from '@/components/ui/button',
import { FilePlus, Loader2 } from 'lucide-react'
import { ProjectCard } from './ProjectCard',
import { ProjectForm } from './ProjectForm',
import { PortfolioProject } from '@/types/resume',
import { usePortfolio } from '@/hooks/usePortfolio',
export function PortfolioBuilder() {
  const { projects, fetchProjects, deleteProject, isLoading } = usePortfolio(),
  const [showAddProject, setShowAddProject] = useState(false),
  const [editingProject, setEditingProject] = useState<PortfolioProject | null>(null),
  
  useEffect(() => {
    fetchProjects()
  }, [fetchProjects]),
  
  const handleAddSuccess = () => {
    setShowAddProject(false),
    fetchProjects()
  },
  
  const handleEditSuccess = () => {
    setEditingProject(null),
    fetchProjects()
  },
  
  const handleDeleteProject = async (projectId: string) => {
    const success = await deleteProject(projectId),
    if (success) {
      fetchProjects()
    }
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
=======

export function PortfolioBuilder() {_const { projects, _fetchProjects, _deleteProject, _isLoading} = usePortfolio();
  const [showAddProject, setShowAddProject] = useState(false);
  const [editingProject, setEditingProject] = useState<PortfolioProject | null>(null);
  
  useEffect__(() => {_fetchProjects();}, [fetchProjects]);
  
  const _handleAddSuccess = () => {_setShowAddProject(false);
    fetchProjects();};
  
  const _handleEditSuccess = () => {_setEditingProject(null);
    fetchProjects();};
  
  const _handleDeleteProject = async (_projectId: string) => {_const _success = await deleteProject(projectId);
    if (success) {
      fetchProjects();}
  };
  
  if (isLoading) {_return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );}
  
  return (_<div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        <div>
          <h1 className=&quot;text-2xl font-bold&quot;>Portfolio Projects</h1>
          <p className=&quot;text-muted-foreground&quot;>Showcase your best work and projects</p>
        </div>
        <Button 
<<<<<<< HEAD
          onClick={() => setShowAddProject(true)} 
          className=&quot;gap-2&quot;
          disabled={showAddProject || !!editingProject}
=======
          onClick={_() => setShowAddProject(true)} 
          className="gap-2"
          disabled={_showAddProject || !!editingProject}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          <FilePlus className=&quot;h-4 w-4&quot; />
          Add Project
        </Button>
      </div>
      
<<<<<<< HEAD
      {/* Edit or Add Form */}
      {(showAddProject || editingProject) && (
        <Card>
          <CardContent className=&quot;pt-6&quot;>
            <h2 className=&quot;text-xl font-semibold mb-6&quot;>
=======
      {_/* Edit or Add Form */}
      {_(showAddProject || editingProject) && (_<Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-6">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              {editingProject ? 'Edit Project' : 'Add New Project'}
            </h2>
            
            <ProjectForm 
<<<<<<< HEAD
              project={editingProject || undefined}
              onSuccess={editingProject ? handleEditSuccess : handleAddSuccess}
              onCancel={() => {
                setShowAddProject(false),
                setEditingProject(null)
              }}
=======
              project={_editingProject || undefined}
              onSuccess={_editingProject ? handleEditSuccess : handleAddSuccess}
              onCancel={_() => {
                setShowAddProject(false);
                setEditingProject(null);}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            />
          </CardContent>
        </Card>
      )}
      
<<<<<<< HEAD
      {/* Projects List */}
      {projects.length > 0 ? (
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;>
          {projects.map((project) => (
            <ProjectCard
=======
      {_/* Projects List */}
      {_projects.length > 0 ? (_<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (_<ProjectCard
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              key={project.id}
              project={_project}
              onEdit={_() => setEditingProject(project)}
              onDelete={_handleDeleteProject}
            />
          ))}
        </div>
<<<<<<< HEAD
      ) : (
        !showAddProject && (
          <Card className=&quot;text-center py-12&quot;>
=======
      ) : (_!showAddProject && (
          <Card className="text-center py-12">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
<<<<<<< HEAD
                  onClick={() => setShowAddProject(true)} 
                  className=&quot;mt-2&quot;
=======
                  onClick={_() => setShowAddProject(true)} 
                  className="mt-2"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  Add Your First Project
                </Button>
              </div>
            </CardContent>
          </Card>
        )
      )}
    </div>
  )
}
