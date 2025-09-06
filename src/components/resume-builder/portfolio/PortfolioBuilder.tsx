<<<<<<< HEAD

<<<<<<< HEAD
=======
import { useState, useEffect  } from 'react';
import { Card, CardContent  } from '@/components/ui/card';
import { Button  } from '@/components/ui/button';
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
import { useState, useEffect  } from 'react';
import { Card, CardContent  } from '@/components/ui/card';
import { Button  } from '@/components/ui/button';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FilePlus, Loader2 } from 'lucide-react'; import { ProjectCard } from './ProjectCard'
import { ProjectForm } from './ProjectForm'
import { PortfolioProject } from '@/types/resume'
import { usePortfolio } from '@/hooks/usePortfolio'
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { FilePlus, Loader2 } from 'lucide-react'
import { ProjectCard  } from './ProjectCard';
import { ProjectForm  } from './ProjectForm';
import { PortfolioProject  } from '@/types/resume';
import { usePortfolio } from '@/hooks/usePortfolio';
export function PortfolioBuilder() {

<<<<<<< HEAD
=======
  const { projects, fetchProjects, deleteProject, isLoading } = usePortfolio()
  const [showAddProject, setShowAddProject] = useState(false)
  const [editingProject, setEditingProject] = useState<PortfolioProject | null>(null)
  useEffect((,) => {
    fetchProjects()
  }, [fetchProjects])
  const handleAddSuccess = () => {
    setShowAddProject(false)
    fetchProjects()
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

  if (isLoading) {
=======
  
>>>>>>>   if (isLoading) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  
  if (isLoading) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold">Portfolio Projects</h1>
          <p className="text-muted-foreground">Showcase your best work and projects</p>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

          Add Project
        </Button>
      </div>

      {/* Edit or Add Form */}
      {(showAddProject |editingProject) && (
        <Card>

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <Button
          onClick={() => setShowAddProject(true)}
          className='gap-2'
          disabled={showAddProject |!!editingProject}        >
          <FilePlus className='h-4 w-4' />
          Add Project
        </Button>
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
      
          Add Project
        </Button>
      </div>
      {/* Edit or Add Form */}
      {(showAddProject |editingProject) && (
        <Card>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <CardContent className='pt-6'>
            <h2 className='text-xl font-semibold mb-6'>
              {editingProject ? 'Edit Project' : 'Add New Project'}
            </h2>
<<<<<<< HEAD
<<<<<<< HEAD

          Add Project
        </Button>
      </div>
          Add Project
        </Button>
      </div>
>>>>>>>       {/* Edit or Add Form */}
      {(showAddProject |editingProject) && (
        <Card>
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>           <CardContent className='pt-6'>
=======


          <CardContent className='pt-6'>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            <h2 className='text-xl font-semibold mb-6'>
              {editingProject ? 'Edit Project' : 'Add New Project'}
            </h2>
            <ProjectForm              project={editingProject |undefined}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            <ProjectForm              project={editingProject |undefined}
            <ProjectForm              project={editingProject || undefined}
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              }}
            />
          </CardContent>
        </Card>
      )}
      {/* Projects List */}
      {projects.length > 0 ? (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {projects.map(project => (            <ProjectCard
      {/* Projects List */}
      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
<<<<<<< HEAD

          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-6">
=======
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              }}
            />
          </CardContent>
        </Card>
      )}
      {/* Projects List */}
<<<<<<< HEAD

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
<<<<<<< HEAD
=======
      {projects.length > 0 ? (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {projects.map(project => (            <ProjectCard
      {/* Projects List */}
      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-6">
              {editingProject ? 'Edit Project' : 'Add New Project'}
            </h2>;
            <ProjectForm;
              project={editingProject || undefined}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>               onSuccess={editingProject ? handleEditSuccess : handleAddSuccess}
=======
              onSuccess={editingProject ? handleEditSuccess : handleAddSuccess}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
              onCancel={() => {
                setShowAddProject(false);

                setEditingProject(null)

=======
              onSuccess={editingProject ? handleEditSuccess : handleAddSuccess}
              onCancel={() => {;
                setShowAddProject(false);
                setEditingProject(null);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              }}
            />;
          </CardContent>;
        </Card>;
      )}
<<<<<<< HEAD

      
=======
;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* Projects List */}
      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
              key={project.id}
=======
>>>>>>>               key={project.id}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              key={project.id}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
          <Card className='text-center py-12'>
>>>>>>>             <CardContent>
ursor/fix-website-loading-errors-and-merge-6662
              key={project.id}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>>               project={project}
=======
              key={project.id}
              project={project}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

            <CardContent>
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>>               <div className="flex flex-col items-center gap-4">
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <Card className='text-center py-12'>
          <Card className="text-center py-12">
            <CardContent>
              <div className="flex flex-col items-center gap-4">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <div className="bg-muted/50 p-6 rounded-full">
                  <FilePlus className="h-12 w-12 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-medium">No portfolio projects yet</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Add your best work to showcase your skills and experience to potential employers.
                </p>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

                <Button 
                  onClick={() => setShowAddProject(true)} 

=======
                <Button
                  onClick={() => setShowAddProject(true)}
>>>>>>>                 <Button 
                  onClick={() => setShowAddProject(true)} 
>>>>>>>                   className="mt-2"
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                <Button
                  onClick={() => setShowAddProject(true)}
                  className='mt-2'                >            <CardContent>
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
                <Button 
                  onClick={() => setShowAddProject(true)} 
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======




                <Button 
                  onClick={() => setShowAddProject(true)} 
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                  className="mt-2"
>>>>>>>                 >
                  Add Your First Project
                </Button>
              </div>
            </CardContent>
          </Card>
        )
      )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    </div>
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

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
;
}
}
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    </div>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

    </div>;
  );
}
;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
