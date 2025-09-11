<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect  } from 'react';
import { Card, CardContent  } from '@/components/ui/card';
import { Button  } from '@/components/ui/button';
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
  
  
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }
  
  
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}


  

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold">Portfolio Projects</h1>
          <p className="text-muted-foreground">Showcase your best work and projects</p>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
        <Button
          onClick={() => setShowAddProject(true)}
          className='gap-2'
          disabled={showAddProject |!!editingProject}        >
          <FilePlus className='h-4 w-4' />
          Add Project
        </Button>
      </div>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <Button 
          onClick={() => setShowAddProject(true)} 
          className="gap-2"
          disabled={showAddProject || !!editingProject}
        >
          <FilePlus className="h-4 w-4" />
          Add Project
        </Button>
      </div>
      
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          Add Project
        </Button>
      </div>
      {/* Edit or Add Form */}
      {(showAddProject |editingProject) && (
        <Card>
<<<<<<< HEAD
=======

          Add Project
        </Button>
      </div>

      {/* Edit or Add Form */}
      {(showAddProject |editingProject) && (
        <Card>


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <CardContent className='pt-6'>
            <h2 className='text-xl font-semibold mb-6'>
              {editingProject ? 'Edit Project' : 'Add New Project'}
            </h2>


<<<<<<< HEAD
          <CardContent className='pt-6'>
            <h2 className='text-xl font-semibold mb-6'>
              {editingProject ? 'Edit Project' : 'Add New Project'}
            </h2>
            <ProjectForm              project={editingProject |undefined}
            <ProjectForm              project={editingProject |undefined}
            <ProjectForm              project={editingProject || undefined}
=======
            <ProjectForm              project={editingProject || undefined}


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


            <ProjectForm              project={editingProject || undefined}


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
      {projects.length > 0 ? (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {projects.map(project => (            <ProjectCard
      {/* Projects List */}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (


<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-6">
              {editingProject ? 'Edit Project' : 'Add New Project'}
            </h2>;
            <ProjectForm;
              project={editingProject || undefined}
              onSuccess={editingProject ? handleEditSuccess : handleAddSuccess}
<<<<<<< HEAD
              onCancel={() => {
=======
              onCancel={() => {;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                setShowAddProject(false);

                setEditingProject(null)

<<<<<<< HEAD
<<<<<<< HEAD
              onSuccess={editingProject ? handleEditSuccess : handleAddSuccess}
              onCancel={() => {;
                setShowAddProject(false);
                setEditingProject(null);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              }}
            />;
          </CardContent>;
        </Card>;
      )}
<<<<<<< HEAD
<<<<<<< HEAD
;
=======

      
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

      
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Projects List */}
      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
<<<<<<< HEAD
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
ursor/fix-website-loading-errors-and-merge-6662
              key={project.id}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              key={project.id}
              project={project}


<<<<<<< HEAD
<<<<<<< HEAD
            <CardContent>
          <Card className='text-center py-12'>
          <Card className="text-center py-12">
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <CardContent>
              <div className="flex flex-col items-center gap-4">
                <div className="bg-muted/50 p-6 rounded-full">
                  <FilePlus className="h-12 w-12 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-medium">No portfolio projects yet</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Add your best work to showcase your skills and experience to potential employers.
                </p>
<<<<<<< HEAD
<<<<<<< HEAD
                <Button
                  onClick={() => setShowAddProject(true)}
                  onClick={() => setShowAddProject(true)} 
                <Button
                  onClick={() => setShowAddProject(true)}
                  className='mt-2'                >            <CardContent>
              <div className="flex flex-col items-center gap-4">
                <div className="bg-muted/50 p-6 rounded-full">
                  <FilePlus className="h-12 w-12 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-medium">No portfolio projects yet</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Add your best work to showcase your skills and experience to potential employers.
                </p>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36




                <Button 
                  onClick={() => setShowAddProject(true)} 
                  className="mt-2"
=======




=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
                <Button 
                  onClick={() => setShowAddProject(true)} 
                  className="mt-2"
                >
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  Add Your First Project
                </Button>
              </div>
            </CardContent>
          </Card>
        )
      )}
<<<<<<< HEAD
<<<<<<< HEAD
    </div>
  )
}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
}
}
}
<<<<<<< HEAD
    </div>;
  );
}
;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    </div>;
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
