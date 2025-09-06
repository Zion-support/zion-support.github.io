
import { FilePlus, Loader2 } from 'lucide-react'
import { ProjectCard  } from './ProjectCard';
import { ProjectForm  } from './ProjectForm';
import { PortfolioProject  } from '@/types/resume';
import { usePortfolio } from '@/hooks/usePortfolio';
export function PortfolioBuilder() {

  const { projects, fetchProjects, deleteProject, isLoading } = usePortfolio()
  const [showAddProject, setShowAddProject] = useState(false)
  const [editingProject, setEditingProject] = useState<PortfolioProject | null>(null)
  useEffect((,) => {
    fetchProjects()
  }, [fetchProjects])
  const handleAddSuccess = () => {
    setShowAddProject(false)
    fetchProjects()
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

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
        <Button 
          onClick={() => setShowAddProject(true)} 
          className="gap-2"
          disabled={showAddProject || !!editingProject}
        >
          <FilePlus className="h-4 w-4" />
          Add Project
        </Button>
      </div>
      
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      {/* Edit or Add Form */}
      {(showAddProject |editingProject) && (
        <Card>

          <CardContent className='pt-6'>
            <h2 className='text-xl font-semibold mb-6'>
              {editingProject ? 'Edit Project' : 'Add New Project'}
            </h2>
            <ProjectForm              project={editingProject |undefined}
            <ProjectForm              project={editingProject || undefined}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
              onSuccess={editingProject ? handleEditSuccess : handleAddSuccess}
              onCancel={() => {
                setShowAddProject(false)
                setEditingProject(null) }}
            <ProjectForm
              onSuccess={editingProject ? handleEditSuccess : handleAddSuccess}
              onCancel={() => {
                setShowAddProject(false)
                setEditingProject(null);                setEditingProject(null)

                setEditingProject(null)
          className='gap-2';
          disabled={showAddProject || !!editingProject}        >;
          <FilePlus className='h-4 w-4' />;
          Add Project;
        </Button>;
      </div>;

      {/* Edit or Add Form */}
      {(showAddProject || editingProject) && (;
        <Card>;
          <CardContent className='pt-6'>;
            <h2 className='text-xl font-semibold mb-6'>;
              {editingProject ? 'Edit Project' : 'Add New Project'}
            </h2>;

            <ProjectForm              project={editingProject || undefined}
              onSuccess={editingProject ? handleEditSuccess : handleAddSuccess}
              onCancel={() => {;
                setShowAddProject(false);
                setEditingProject(null);              }}

            <ProjectForm

              onSuccess={editingProject ? handleEditSuccess : handleAddSuccess}
              onCancel={() => {;
                setShowAddProject(false);
                setEditingProject(null);                setEditingProject(null);
                setEditingProject(null);

              }}
            />
          </CardContent>
        </Card>
      )}
      {/* Projects List */}

      {projects && projects.length > 0 ? (;
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>;
          {projects && projects.map(project => (            <ProjectCard

      {/* Projects List */}

import { ProjectCard } from './ProjectCard';
import { ProjectForm } from './ProjectForm';
import { PortfolioProject } from '@/types/resume';
import { usePortfolio } from '@/hooks/usePortfolio';

export function PortfolioBuilder() { const { projects, fetchProjects, deleteProject, isLoading  } = usePortfolio(),
  const [ showAddProject, setShowAddProject ] = useState(false),
  const [ editingProject, setEditingProject ] = useState<PortfolioProject | null>(null),

  
  useEffect(() => {
    fetchProjects()
  }, [fetchProjects]);
  
  const handleAddSuccess = () => {
    setShowAddProject(false);
    fetchProjects()
  };
  
  const handleEditSuccess = () => {
    setEditingProject(null);
    fetchProjects()
  };
  
  const handleDeleteProject = async (projectId: string) => {
    const success = await deleteProject(projectId);
    if (success) {
      fetchProjects()
    }
  };
  
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm: flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold">Portfolio Projects</h1>
          <p className="text-muted-foreground">Showcase your best work and projects</p>
        </div>
      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (

>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
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
=======
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-6">
              {editingProject ? 'Edit Project' : 'Add New Project'}
            </h2>;
            <ProjectForm;
              project={editingProject || undefined}
              onSuccess={editingProject ? handleEditSuccess : handleAddSuccess}
              onCancel={() => {;
                setShowAddProject(false);

                setEditingProject(null)

              }}
            />;
          </CardContent>;
        </Card>;
      )}

      
      {/* Projects List */}
      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
<<<<<<< HEAD

              key={project.id}
              project={project}
              onEdit={() => setEditingProject(project)}
              onDelete={handleDeleteProject}
          {projects.map((project,) => (
            <ProjectCard
              key = {project.id,}
              project = {project,}
              onEdit = {(,) => setEditingProject(project),}
              onDelete = {handleDeleteProject,}
            />
          ))}
        </div>
      ) : (
        !showAddProject && (
          <Card className='text-center py-12'>
          <Card className="text-center py-12">
              key={project.id}
              project={project}
              onEdit={() => setEditingProject(project)}
              onDelete={handleDeleteProject}
          {projects.map((project,) => (
            <ProjectCard
              key = {project.id,}
              project = {project,}
              onEdit = {(,) => setEditingProject(project),}
              onDelete = {handleDeleteProject,}
            />
          ))}
        </div>
      ) : (
        !showAddProject && (

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                <Button 
                  onClick={() => setShowAddProject(true)} 
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
                  className="mt-2"
                >
                  Add Your First Project
                </Button>
              </div>
            </CardContent>
          </Card>
        )
      )}
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
;
}
}
}
<<<<<<< HEAD
