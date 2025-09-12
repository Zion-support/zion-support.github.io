:src_backup/components/resume-builder/portfolio/PortfolioBuilder.tsx
:src_backup/components/resume-builder/portfolio/PortfolioBuilder.tsx
import { ProjectForm } from './ProjectForm';
import { PortfolioProject } from '@/types/resume';
import { usePortfolio } from '@/hooks/usePortfolio';
import { ProjectForm } from './ProjectForm';
import { PortfolioProject } from '@/types/resume';
import { usePortfolio } from '@/hooks/usePortfolio';
import { ProjectForm } from ./ProjectForm';
import { PortfolioProject } from '@/types/resume;
import { usePortfolio } from @/hooks/usePortfolio';




      {(showAddProject |editingProject) && (<Card>;
          <CardContent className='pt-6'>;
            <h2 className='text-xl font-semibold mb-6'>;
              {editingProject ? 'Edit Project' : 'Add New Project'}
            </h2>;
            <ProjectForm              project={editingProject || undefined}onSuccess={editingProject ? handleEditSuccess : handleAddSuccess}
              onCancel={() => {setShowAddProject(false)setEditingProject(null) }}import { useState, useEffect  } from 'react';
import { Card, CardContent  } from '@/components/ui/card';
import { Button  } from '@/components/ui/button';
import { FilePlus, Loader2  } from 'lucide-react';
import { ProjectCard  } from './ProjectCard';
import { ProjectForm  } from './ProjectForm';
import { PortfolioProject  } from '@/types/resume';
import { usePortfolio  } from '@/hooks/usePortfolio';
export function PortfolioBuilder() {<ProjectForm;
              project={editingProject || undefined}
              onSuccess={editingProject ? handleEditSuccess : handleAddSuccess}
              onCancel={() => {setShowAddProject(false)setEditingProject(null)setEditingProject(null)setShowAddProject(false)setEditingProject(null)setEditingProject(null)className='gap-2';
          disabled={showAddProject || !!editingProject}        >;
          <FilePlus className='h-4 w-4' />;
          Add Project;
        </Button>;
      </div>;{/* Edit or Add Form */}
      {(showAddProject || editingProject) && (<Card>;
          <CardContent className='pt-6'>;
            <h2 className='text-xl font-semibold mb-6'>;
              {editingProject ? 'Edit Project' : 'Add New Project'}
            </h2>;<ProjectForm              project={editingProject || undefined}
              onSuccess={editingProject ? handleEditSuccess : handleAddSuccess}
              onCancel={() => {setShowAddProject(false)setEditingProject(null)}}<ProjectForm;
              onSuccess={editingProject ? handleEditSuccess : handleAddSuccess}
              onCancel={() => {setShowAddProject(false)setEditingProject(null)setEditingProject(null)setEditingProject(null)}}
            />;
          </CardContent>;
        </Card>;
      )}
      {/* Projects List */}{projects && projects.length > 0 ? (<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>;
          {projects && projects.map(project => (            <ProjectCard;
      {/* Projects List */}export function PortfolioBuilder() { const { projects, fetchProjects, deleteProject, isLoading  } = usePortfolio(),const [ showAddProject, setShowAddProject ] = useState(false),const [ editingProject, setEditingProject ] = useState<PortfolioProject | null>(null),useEffect(() => {fetchProjects()}, [fetchProjects])const handleAddSuccess = () => {setShowAddProject(false)fetchProjects()}const handleEditSuccess = () => {setEditingProject(null)fetchProjects()}const handleDeleteProject = async (projectId: string) => {const success = await deleteProject(projectId)if (success) {fetchProjects()}
  }if (isLoading) {return (<div className="flex justify-center items-center h-64">;
        <Loader2 className="h-8 w-8 animate-spin text-primary" />;
      </div>;
    )}return (<div className="space-y-6">;
      <div className="flex flex-col sm: flex-row justify-between items-start sm:items-center gap-4 mb-6">;
        <div>;
          <h1 className="text-2xl font-bold">Portfolio Projects</h1>;
          <p className="text-muted-foreground">Showcase your best work and projects</p>;
        </div>;
      {projects.length > 0 ? (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
          {projects.map((project) => (<Button;
          onClick={() => setShowAddProject(true)}className="gap-2";
          disabled={showAddProject || !!editingProject}
        >;
          <FilePlus className="h-4 w-4" />;
          Add Project;
        </Button>;
      </div>;
      {/* Edit or Add Form */}
:src_backup/components/resume-builder/portfolio/PortfolioBuilder.tsx


:src_backup/components/resume-builder/portfolio/PortfolioBuilder.tsx
{/* Projects List */}
      {projects.length > 0 ? (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {projects.map(project => (
            <ProjectCard
      {(showAddProject || editingProject) && (<Card>;
          <CardContent className="pt-6">;
            <h2 className="text-xl font-semibold mb-6">;
              {editingProject ? 'Edit Project' : 'Add New Project'}setShowAddProject(false)setEditingProject(null)}})}{/* Projects List */}
      {projects.length > 0 ? (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
          {projects.map((project) => (<ProjectCard;
              key={project.id}
              project={project}<CardContent>;


:src_backup/components/resume-builder/portfolio/PortfolioBuilder.tsx
                  onClick={() => setShowAddProject(true)}className="mt-2";
                  onClick={() => setShowAddProject(true)}className="mt-2";
                  onClick={() => setShowAddProject(true)}className=mt-2;
{/* Projects List */}
      {projects.length > 0 ? (<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>;
          {projects.map(project => (<ProjectCard;
              key={project.id}
              project={project}
              onEdit={() => setEditingProject(project)}
              onDelete={handleDeleteProject}
:src_backup/components/resume-builder/portfolio/PortfolioBuilder.tsx
                  onClick={() => setShowAddProject(true)}className="mt-2";
                  onClick={() => setShowAddProject(true)} ;"


:src_backup/components/resume-builder/portfolio/PortfolioBuilder.tsx
        </div>) : (!showAddProject && (<Card className='text - center py - 12'>;
        </div>) : (!showAddProject && (<Card className='text - center py - 12'>;
        </div>) : (!showAddProject && (<Card className=text - center py - 12'>;
            <CardContent>;
              <div className='flex flex - col items - center gap - 4'>;
                <div className='bg - muted / 50 p - 6 rounded - full'>;
                  <FilePlus className='h - 12 w - 12 text - muted - foreground' />;
                </div>;
                <h3 className='text - xl font - medium'>;
                  No portfolio projects yet;
                </h3>;


:src_backup/components/resume-builder/portfolio/PortfolioBuilder.tsx
                  on_click={() => setShowAddProject (true)}
                  className="mt - 2";>;
                  Add Your First Project;
                </Button>;
              </div>;
            </CardContent>;)}</Card>))}
    </div>)}}
}
}</div>;
  )}</div>;
  )}
  );
};