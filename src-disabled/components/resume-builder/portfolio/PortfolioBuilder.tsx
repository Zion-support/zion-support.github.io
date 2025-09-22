:src_backup/components/resume-builder/portfolio/PortfolioBuilder.tsx

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

}

  return (
    <div className="space-y-6">"
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>"
          <h1 className="text-2xl font-bold">Portfolio Projects</h1>"
          <p className="text-muted-foreground">Showcase your best work and projects</p>
        </div>

        <Button;
          onClick={() => setShowAddProject(true)} "
          className="gap-2"
          disabled={showAddProject || !!editingProject}
        >"
          <FilePlus className="h-4 w-4" />
          Add Project;
        </Button>
      </div>

      {/* Edit or Add Form */}
      {(showAddProject || editingProject) && (
        <Card>

          Add Project;
        </Button>
      </div>

      {/* Edit or Add Form */}
      {(showAddProject |editingProject) && (
        <Card>

:src_backup/components/resume-builder/portfolio/PortfolioBuilder.tsx
          <CardContent className='pt-6'>
            <h2 className='text-xl font-semibold mb-6'>
              {editingProject ? 'Edit Project' : 'Add New Project'}
            </h2>

            <ProjectForm              project={editingProject || undefined}

              onSuccess={editingProject ? handleEditSuccess : handleAddSuccess}
              onCancel={() => {}
                setShowAddProject(false)
                setEditingProject(null) }}
:src_backup/components/resume-builder/portfolio/PortfolioBuilder.tsx
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FilePlus, Loader2 } from 'lucide-react';
import { ProjectCard } from './ProjectCard';

import { ProjectForm } from './ProjectForm';
import { PortfolioProject } from '@/types/resume';
import { usePortfolio } from '@/hooks/usePortfolio';

:src_backup/components/resume-builder/portfolio/PortfolioBuilder.tsx
export function PortfolioBuilder() {

origin/cursor/automate-test-improve-and-merge-code-2533
            <ProjectForm
              project={editingProject || undefined}
              onSuccess={editingProject ? handleEditSuccess : handleAddSuccess}
              onCancel={() => {
                setShowAddProject(false);
setEditingProject(null);
origin/cursor/automate-test-improve-and-merge-code-2533
                setEditingProject(null)
          className='gap-2';
          disabled={showAddProject || !!editingProject}        >;'
          <FilePlus className='h-4 w-4' />;
          Add Project;
        </Button>;
      </div>;

      {/* Edit or Add Form */}
      {(showAddProject || editingProject) && (;
        <Card>;'
          <CardContent className='pt-6'>;'
            <h2 className='text-xl font-semibold mb-6'>;'
              {editingProject ? 'Edit Project' : 'Add New Project'}
            </h2>;

            <ProjectForm              project={editingProject || undefined}
              onSuccess={editingProject ? handleEditSuccess : handleAddSuccess}
              onCancel={() => {;
                setShowAddProject(false);
                setEditingProject(null);              }}

            <ProjectForm;
              onSuccess={editingProject ? handleEditSuccess : handleAddSuccess}
              onCancel={() => {;
                setShowAddProject(false);
                setEditingProject(null);                setEditingProject(null);
                setEditingProject(null);

              }}
            />;
          </CardContent>;
        </Card>;
      )}
      {/* Projects List */}
:src_backup/components/resume-builder/portfolio/PortfolioBuilder.tsx

      {projects && projects.length > 0 ? (;'
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>;
          {projects && projects.map(project => (            <ProjectCard;
      {/* Projects List */}
'
import { ProjectCard } from './ProjectCard';'
import { ProjectForm } from './ProjectForm';'
import { PortfolioProject } from '@/types/resume';'
import { usePortfolio } from '@/hooks/usePortfolio';
export function PortfolioBuilder() { const { projects, fetchProjects, deleteProject, isLoading  } = usePortfolio(),
  const [ showAddProject, setShowAddProject ] = useState(false),
  const [ editingProject, setEditingProject ] = useState<PortfolioProject | null>(null),

:src_backup/components/resume-builder/portfolio/PortfolioBuilder.tsx
  useEffect(() => {
    fetchProjects()
}, [fetchProjects]);

  const handleAddSuccess = () => {}
    setShowAddProject(false);
    fetchProjects()
  };

  const handleEditSuccess = () => {}
    setEditingProject(null);
    fetchProjects()
  };

  const handleDeleteProject = async (projectId: string) => {}
    const success = await deleteProject(projectId);
    if (success) {}
      fetchProjects()
    }
  };
:src_backup/components/resume-builder/portfolio/PortfolioBuilder.tsx

  if (isLoading) {}
    return ("
      <div className="flex justify-center items-center h-64">"
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }
:src_backup/components/resume-builder/portfolio/PortfolioBuilder.tsx

  return ("
    <div className="space-y-6">"
      <div className="flex flex-col sm: flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>"
          <h1 className="text-2xl font-bold">Portfolio Projects</h1>"
          <p className="text-muted-foreground">Showcase your best work and projects</p>
        </div>
      {projects.length > 0 ? ("
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (

:src_backup/components/resume-builder/portfolio/PortfolioBuilder.tsx
        <Button 
          onClick={() => setShowAddProject(true)}
          className="gap-2"
          disabled={showAddProject || !!editingProject}
        >"
          <FilePlus className="h-4 w-4" />
          Add Project;
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
              onSuccess={editingProject ? handleEditSuccess : handleAddSuccess}
onCancel={() => {;
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-6">
              {editingProject ? 'Edit Project' : 'Add New Project'}

                setShowAddProject(false);
:src_backup/components/resume-builder/portfolio/PortfolioBuilder.tsx
                setEditingProject(null);
              }}
            />;
          </CardContent>;
        </Card>;
      )}
;
                setEditingProject(null)
                setEditingProject(null);
              }}
:src_backup/components/resume-builder/portfolio/PortfolioBuilder.tsx
            />
          </CardContent>
        </Card>      )}


      )}
      {/* Projects List */}
      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">"
;

      {/* Projects List */}
      {projects.length > 0 ? ("
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
:src_backup/components/resume-builder/portfolio/PortfolioBuilder.tsx
            <ProjectCard
              key={project.id}
              project={project}
              onEdit={() => setEditingProject(project)}
              onDelete={handleDeleteProject}
            />;
          ))}
        </div>
      ) : (
        !showAddProject && (
          <Card className="text-center py-12">
              key={project.id}
              project={project}
            <CardContent>
              <div className="flex flex-col items-center gap-4">"
                <div className="bg-muted/50 p-6 rounded-full">"
                  <FilePlus className="h-12 w-12 text-muted-foreground" />"
                </div>
                <h3 className="text-xl font-medium">No portfolio projects yet</h3>"
                <p className="text-muted-foreground max-w-md mx-auto">"
                  Add your best work to showcase your skills and experience to potential employers.
                </p>
                <Button
                  onClick={() => setShowAddProject(true)}
                  className="mt-2""
              onEdit={() => setEditingProject(project)}
              onDelete={handleDeleteProject}
            />;
          ))}
        </div>
      ) : (
        !showAddProject && (
          <Card className="text-center py-12">


            <CardContent>
              <div className="flex flex-col items-center gap-4">
                <div className="bg-muted/50 p-6 rounded-full">
            <CardContent>"
              <div className="flex flex-col items-center gap-4">"
                <div className="bg-muted/50 p-6 rounded-full">"
                  <FilePlus className="h-12 w-12 text-muted-foreground" />
                </div>"
                <h3 className="text-xl font-medium">No portfolio projects yet</h3>"
                <p className="text-muted-foreground max-w-md mx-auto">
                  Add your best work to showcase your skills and experience to potential employers.
                </p>

                <Button 
                  onClick={() => setShowAddProject(true)} 
                <Button;
                  onClick={() => setShowAddProject(true)} "
                  className="mt-2"
{/* Projects List */}
      {projects.length > 0 ? (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {projects.map(project => (
            <ProjectCard
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
            <CardContent>
              <div className='flex flex-col items-center gap-4'>
                <div className='bg-muted/50 p-6 rounded-full'>
                  <FilePlus className='h-12 w-12 text-muted-foreground' />
                </div>
                <h3 className='text-xl font-medium'>
                  No portfolio projects yet
                </h3>
                <p className='text-muted-foreground max-w-md mx-auto'>
                  Add your best work to showcase your skills and experience to
                  potential employers.
                </p>
                <Button
                  onClick={() => setShowAddProject(true)}
                  className='mt-2'
origin/cursor/automate-test-improve-and-merge-code-2533
                >
                  Add Your First Project;
                </Button>
              </div>
            </CardContent>
          </Card>
        )
      )}
:src_backup/components/resume-builder/portfolio/PortfolioBuilder.tsx

                  className='mt-2'                >            <CardContent>;
              <div className="flex flex-col items-center gap-4">;
                <div className="bg-muted/50 p-6 rounded-full">;
                  <FilePlus className="h-12 w-12 text-muted-foreground" />;
                </div>;"
                <h3 className="text-xl font-medium">No portfolio projects yet</h3>;"
                <p className="text-muted-foreground max-w-md mx-auto">;
                  Add your best work to showcase your skills and experience to potential employers.;
                </p>;
                <Button;
                  onClick={() => setShowAddProject(true)} ;"
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
:src_backup/components/resume-builder/portfolio/PortfolioBuilder.tsx
        !showAddProject && ('
          <Card className='text - center py - 12'>;
            <CardContent>;'
              <div className='flex flex - col items - center gap - 4'>;'
                <div className='bg - muted / 50 p - 6 rounded - full'>;'
                  <FilePlus className='h - 12 w - 12 text - muted - foreground' />;
                </div>;'
                <h3 className='text - xl font - medium'>;
                  No portfolio projects yet;
                </h3>;'
                <p className='text - muted - foreground max - w-md mx - auto'>;
                  Add your best work to showcase your skills and experience to;
                  potential employers.;
                </p>;
                <Button;
:src_backup/components/resume-builder/portfolio/PortfolioBuilder.tsx
on_click={() => setShowAddProject (true)}
                  className='mt - 2'                >            <CardContent>;
              <div className="flex flex - col items - center gap-4">;
                <div className="bg - muted / 50 p - 6 rounded-full">;
                  <FilePlus className="h - 12 w - 12 text - muted-foreground" />;
                </div>;
                <h3 className="text - xl font-medium">No portfolio projects yet</h3>;
                <p className="text - muted - foreground max - w-md mx-auto">;
                  Add your best work to showcase your skills and experience to potential employers.;
                </p>;
                <Button;
                  on_click={() => setShowAddProject (true)}
                  className="mt-2";
                <p className="text - muted - foreground max - w-md mx - auto">;
                  Add your best work to showcase your skills and experience to potential employers.;
                </p>;
                <Button;
:src_backup/components/resume-builder/portfolio/PortfolioBuilder.tsx
                  on_click={() => setShowAddProject (true)}"
                  className="mt - 2";
                >;
                  Add Your First Project;
                </Button>;
              </div>;
            </CardContent>;
:src_backup/components/resume-builder/portfolio/PortfolioBuilder.tsx

  );
}

          </Card>))}
    </div>);
}
;
}
}
}
:src_backup/components/resume-builder/portfolio/PortfolioBuilder.tsx

    </div>;
  );
}
;
    </div>
  );
}
origin/cursor/automate-test-improve-and-merge-code-2533
;'"
