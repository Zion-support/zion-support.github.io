<<<<<<< HEAD

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FilePlus, Loader2 } from 'lucide-react'
import { ProjectCard } from './ProjectCard';
import { ProjectForm } from './ProjectForm';
import { PortfolioProject } from '@/types/resume';
import { usePortfolio } from '@/hooks/usePortfolio';
export function PortfolioBuilder() {
  const { projects, fetchProjects, deleteProject, isLoading } = usePortfolio();
  const [showAddProject, setShowAddProject] = useState(false);
  const [editingProject, setEditingProject] = useState<PortfolioProject | null>(null);
=======
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
}


  

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold">Portfolio Projects</h1>
          <p className="text-muted-foreground">Showcase your best work and projects</p>
        </div>
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
          Add Project
        </Button>
      </div>
      {/* Edit or Add Form */}
      {(showAddProject |editingProject) && (
        <Card>
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
      {projects.length > 0 ? (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {projects.map(project => (            <ProjectCard
      {/* Projects List */}
=======

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

>>>>>>> merged-prs-20250907-203621
  
  useEffect(() => {
    fetchProjects()
  }, [fetchProjects]);
  
  const handleAddSuccess = () => {
    setShowAddProject(false);
    fetchProjects()
<<<<<<< HEAD
  };
=======
<<<<<<< HEAD
  }
=======
  };
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  
  const handleEditSuccess = () => {
    setEditingProject(null);
    fetchProjects()
<<<<<<< HEAD
  };
=======
<<<<<<< HEAD
  }
=======
  };
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  
  const handleDeleteProject = async (projectId: string) => {
    const success = await deleteProject(projectId);
    if (success) {
      fetchProjects()
    }
<<<<<<< HEAD
  };
  
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
=======
<<<<<<< HEAD
  }
  
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64>
        <Loader2 className=h-8 w-8 animate-spin text-primary" />
=======
  };
  
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      </div>
    )
  }
  
  return (
<<<<<<< HEAD
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
=======
<<<<<<< HEAD
    <div className="space-y-6>
      <div className=flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <div>
          <h1 className="text-2xl font-bold">Portfolio Projects</h1>
          <p className="text-muted-foreground">Showcase your best work and projects</p>
        </div>
        <Button 
          onClick={() => setShowAddProject(true)} 
          className="gap-2"
          disabled={showAddProject || !!editingProject}
        >
<<<<<<< HEAD
          <FilePlus className="h-4 w-4" />
=======
          <FilePlus className=h-4 w-4" />
=======
    <div className="space-y-6">
      <div className="flex flex-col sm: flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold">Portfolio Projects</h1>
          <p className="text-muted-foreground">Showcase your best work and projects</p>
        </div>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (


        <Button 
          onClick={() => setShowAddProject(true)} 
          className="gap-2"
          disabled={showAddProject || !!editingProject}
        >
          <FilePlus className="h-4 w-4" />
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          Add Project
        </Button>
      </div>
      
      {/* Edit or Add Form */}
      {(showAddProject || editingProject) && (
        <Card>
<<<<<<< HEAD
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-6">
              {editingProject ? 'Edit Project' : 'Add New Project'}
=======
<<<<<<< HEAD
          <CardContent className="pt-6>
            <h2 className=text-xl font-semibold mb-6">
              {editingProject ? 'Edit Project : Add New Project'}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            </h2>
            
            <ProjectForm 
=======
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-6">
              {editingProject ? 'Edit Project' : 'Add New Project'}
            </h2>;
            <ProjectForm;
>>>>>>> merged-prs-20250907-203621
              project={editingProject || undefined}
              onSuccess={editingProject ? handleEditSuccess : handleAddSuccess}
              onCancel={() => {
                setShowAddProject(false);
<<<<<<< HEAD
                setEditingProject(null)
              }}
            />
          </CardContent>
        </Card>
      )}
      
      {/* Projects List */}
      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
=======

                setEditingProject(null)

<<<<<<< HEAD
              onSuccess={editingProject ? handleEditSuccess : handleAddSuccess}
              onCancel={() => {;
                setShowAddProject(false);
                setEditingProject(null);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              }}
            />;
          </CardContent>;
        </Card>;
      )}
<<<<<<< HEAD
;
=======

      
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Projects List */}
      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
              key={project.id}
              project={project}
              onEdit={() => setEditingProject(project)}
              onDelete={handleDeleteProject}
<<<<<<< HEAD
=======
          {projects.map((project,) => (
            <ProjectCard
              key = {project.id,}
              project = {project,}
              onEdit = {(,) => setEditingProject(project),}
              onDelete = {handleDeleteProject,}
>>>>>>> merged-prs-20250907-203621
            />
          ))}
        </div>
      ) : (
        !showAddProject && (
<<<<<<< HEAD
          <Card className="text-center py-12">
=======
<<<<<<< HEAD
          <Card className=text-center py-12">
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <CardContent>
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
=======
          <Card className='text-center py-12'>
ursor/fix-website-loading-errors-and-merge-6662
              key={project.id}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              key={project.id}
              project={project}


<<<<<<< HEAD
            <CardContent>
          <Card className='text-center py-12'>
          <Card className="text-center py-12">
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> merged-prs-20250907-203621
                  Add Your First Project
                </Button>
              </div>
            </CardContent>
          </Card>
        )
      )}
<<<<<<< HEAD
    </div>
  )
}
<<<<<<< HEAD
:src/components/resume-builder/portfolio/PortfolioBuilder.tsx
;
=======
=======
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

;
}
}
}
    </div>;
  );
}
;

    </div>;
  );
}
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
