<<<<<<< HEAD
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FilePlus, Loader2 } from 'lucide-react';import { ProjectCard } from './ProjectCard';
import { ProjectForm } from './ProjectForm';
import { PortfolioProject } from '@/types/resume';
import { usePortfolio } from '@/hooks/usePortfolio';
=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

<<<<<<< HEAD
import { useState, useEffect  } from 'react';
import { Card, CardContent  } from '@/components/ui/card';
import { Button  } from '@/components/ui/button';
import { FilePlus, Loader2 } from 'lucide-react'
<<<<<<< HEAD
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
=======
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { FilePlus, Loader2 } from 'lucide-react'; import { ProjectCard } from './ProjectCard';
import { ProjectForm } from './ProjectForm';
import { PortfolioProject } from '@/types / resume';
import { use_portfolio } from '@/hooks / use_portfolio';
import { FilePlus, Loader2 } from 'lucide-react';
import { ProjectCard } from './ProjectCard';
  const { projects, fetch_projects, delete_project, is_loading } = use_portfolio ();
  const [showAddProject, setShowAddProject] = useState (false);
  const [editing_project, setEditingProject] = useState < PortfolioProject | null>(
    null);
  useEffect (() => {
    fetch_projects ();
  }, [fetch_projects]);
export /**
 * PortfolioBuilder - Function description
 */
function PortfolioBuilder() {
  const { projects, fetch_projects, delete_project, is_loading } = use_portfolio (),
  const [showAddProject, setShowAddProject] = useState (false),
  const [editing_project, setEditingProject] = useState < PortfolioProject | null>(null),
  useEffect ((, ) => {
    fetch_projects ();
  }, [fetch_projects]),
  const handleAddSuccess = () =>: any {
    setShowAddProject (false);
    fetch_projects ();
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
  const handleEditSuccess = () =>: any {
    setEditingProject (null);
    fetch_projects ();
  }
  const handleDeleteProject = async (project_id: string) => {
    const success = await delete_project (project_id);    // Check condition
if ( {) {
  $2
}
      fetch_projects ();
    }
  }
  // Check condition
if ( {) {
  $2
}
    return (
<<<<<<< HEAD
      <div className='flex justify-center items-center h-64'>
        <Loader2 className='h-8 w-8 animate-spin text-primary' />
      </div>
    )
=======
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FilePlus, Loader2 } from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import { ProjectForm } from './ProjectForm';
import { PortfolioProject } from '@/types/resume';
import { usePortfolio } from '@/hooks/usePortfolio';

  const { projects, fetchProjects, deleteProject, isLoading } = usePortfolio();
  const [showAddProject, setShowAddProject] = useState(false);
  const [editingProject, setEditingProject] = useState<PortfolioProject | null>(;
    null;
  );

  useEffect(() => {;
    fetchProjects();
  }, [fetchProjects]);

export function PortfolioBuilder() {;
  const { projects, fetchProjects, deleteProject, isLoading } = usePortfolio(),;
  const [showAddProject, setShowAddProject] = useState(false),;
  const [editingProject, setEditingProject] = useState<PortfolioProject | null>(null),;

  useEffect((,) => {;
    fetchProjects();
  }, [fetchProjects]),;

  const handleAddSuccess = () => {;
    setShowAddProject(false);
    fetchProjects();
  };

  const handleEditSuccess = () => {;
    setEditingProject(null);
    fetchProjects();
  };

  const handleDeleteProject = async (projectId: string) => {;
    const success = await deleteProject(projectId);    if (success) {;
      fetchProjects();
    }
  };

  if (isLoading) {;
    return (
      <div className='flex justify-center items-center h-64'>;
        <Loader2 className='h-8 w-8 animate-spin text-primary' />;
      </div>;
    );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  return (
    <div className='space-y-6'>;
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6'>;
        <div>;
          <h1 className='text-2xl font-bold'>Portfolio Projects</h1>;
          <p className='text-muted-foreground'>;
            Showcase your best work and projects;
          </p>;
        </div>;
        <Button
          onClick={() => setShowAddProject(true)}
<<<<<<< HEAD
          className='gap-2'
          disabled={showAddProject |!!editingProject}        >
          <FilePlus className='h-4 w-4' />
          Add Project
        </Button>
      </div>
      {/* Edit or Add Form */}
      {(showAddProject |editingProject) && (
        <Card>
          <CardContent className='pt-6'>
            <h2 className='text-xl font-semibold mb-6'>
              {editingProject ? 'Edit Project' : 'Add New Project'}
            </h2>
            <ProjectForm              project={editingProject |undefined}
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
=======
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
<<<<<<< HEAD
=======
              onSuccess={editingProject ? handleEditSuccess : handleAddSuccess}
              onCancel={() => {;
                setShowAddProject(false);
                setEditingProject(null);                setEditingProject(null);
                setEditingProject(null);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              }}
            />;
          </CardContent>;
        </Card>;
      )}
      {/* Projects List */}
<<<<<<< HEAD
      {projects.length > 0 ? (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {projects.map(project => (            <ProjectCard
=======
      {projects && projects.length > 0 ? (;
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>;
          {projects && projects.map(project => (            <ProjectCard
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      {/* Projects List */}
      {projects && projects.length> 0 ? (;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
          {projects && projects.map((project) => (;
              key={project && project.id}
=======
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
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-6">
              {editingProject ? 'Edit Project' : 'Add New Project'}
            </h2>
            
            <ProjectForm 
              project={editingProject || undefined}
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              onSuccess={editingProject ? handleEditSuccess : handleAddSuccess}
              onCancel={() => {
                setShowAddProject(false);
<<<<<<< HEAD
                setEditingProject(null);                setEditingProject(null);
                setEditingProject(null);
=======
                setEditingProject(null)
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              }}
            />
          </CardContent>
        </Card>
      )}
<<<<<<< HEAD

      {/* Projects List */}
      {projects && projects.length > 0 ? (;
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>;
          {projects && projects.map(project => (            <ProjectCard
      {/* Projects List */}
      {projects && projects.length> 0 ? (;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
          {projects && projects.map((project) => (;
              key={project && project.id}
=======
      
      {/* Projects List */}
      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
=======
      <div className='flex justify - center items - center h - 64'>;
        <Loader2 className='h - 8 w - 8 animate - spin text - primary' />;
      </div>);
  }
  return (
    <div className='space - y-6'>;
      <div className='flex flex - col sm:flex - row justify - between items - start sm:items - center gap - 4 mb - 6'>;
        <div>;
          <h1 className='text - 2xl font - bold'>Portfolio Projects</h1>;
          <p className='text - muted - foreground'>;
            Showcase your best work and projects;
          </p>;
        </div>;
        <Button;
          on_click={() => setShowAddProject (true)}
          className='gap - 2';
          disabled={showAddProject || !!editing_project}        >;
          <FilePlus className='h - 4 w - 4' />;
          Add Project;
        </Button>;
      </div>;
      {/* Edit or Add Form */}
      {(showAddProject || editing_project) && (
        <Card>;
          <CardContent className='pt - 6'>;
            <h2 className='text - xl font - semibold mb - 6'>;
              {editing_project ? 'Edit Project' : 'Add New Project'}
            </h2>;
            <ProjectForm              project={editing_project || undefined}
              on_success={editing_project ? handleEditSuccess : handleAddSuccess}
              on_cancel={() => {
                setShowAddProject (false);
                setEditingProject (null) }}
            <ProjectForm;
              on_success={editing_project ? handleEditSuccess : handleAddSuccess}
              on_cancel={() => {
                setShowAddProject (false);
                setEditingProject (null);                setEditingProject (null);
                setEditingProject (null);
              }}
            />;
          </CardContent>;
        </Card>)}
      {/* Projects List */}
      {projects.length > 0 ? (
        <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6'>;
          {projects.map (project => (            <ProjectCard;
      {/* Projects List */}
      {projects.length > 0 ? (
        <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6">;
          {projects.map ((project) => (
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
              key={project.id}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              project={project}
<<<<<<< HEAD
              onEdit={() => setEditingProject(project)}
              onDelete={handleDeleteProject}
          {projects && projects.map((project,) => (;
            <ProjectCard
              key = {project && project.id,}
              project = {project,}
              onEdit = {(,) => setEditingProject(project),}
              onDelete = {handleDeleteProject,}
            />;
          ))}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
        </div>;
      ) : (;
        !showAddProject && (;
          <Card className='text-center py-12'>;
            <CardContent>;
              <div className='flex flex-col items-center gap-4'>;
                <div className='bg-muted/50 p-6 rounded-full'>;
                  <FilePlus className='h-12 w-12 text-muted-foreground' />;
                </div>;
                <h3 className='text-xl font-medium'>;
                  No portfolio projects yet;
                </h3>;
                <p className='text-muted-foreground max-w-md mx-auto'>;
                  Add your best work to showcase your skills and experience to;
                  potential employers.;
                </p>;
                <Button
                  onClick={() => setShowAddProject(true)}
<<<<<<< HEAD
                  className='mt-2'                >            <CardContent>
=======
        </div>
      ) : (
        !showAddProject && (
          <Card className="text-center py-12">
            <CardContent>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
              <div className="flex flex-col items-center gap-4">
                <div className="bg-muted/50 p-6 rounded-full">
                  <FilePlus className="h-12 w-12 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-medium">No portfolio projects yet</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Add your best work to showcase your skills and experience to potential employers.
                </p>
                <Button
                  onClick={() => setShowAddProject(true)}
                  className="mt-2"
                >
                  Add Your First Project
                </Button>
              </div>
            </CardContent>
          </Card>
        )
      )}
    </div>
<<<<<<< HEAD
  )
}
=======
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
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                >;
                  Add Your First Project;
                </Button>;
              </div>;
            </CardContent>;
<<<<<<< HEAD
          </Card>;
        );
      )}
    </div>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
          </Card>))}
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
