<<<<<<< HEAD
import {useState, useEffect} from 'react';
import {Card, CardContent} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {FilePlus, Loader2} from 'lucide-react';
import {ProjectCard} from './ProjectCard';
import {ProjectForm} from './ProjectForm';
import {PortfolioProject} from '@/types/resume';
import {usePortfolio} from '@/hooks/usePortfolio';
export function PortfolioBuilder() {;
  const { projects, fetchProjects, deleteProject, isLoading } = usePortfolio();
  const [showAddProject, setShowAddProject] = useState(false);
  const [editingProject, setEditingProject] = useState<PortfolioProject | null>(null);
  useEffect(() => {;
    fetchProjects();
  }, [fetchProjects]);
  const handleAddSuccess = () => {;
    setShowAddProject(false);
    fetchProjects();
  };
  const handleEditSuccess = () => {;
    setEditingProject(null);
    fetchProjects();
  };
  const handleDeleteProject = async (projectId: string) => {;
=======

import { useState, useEffect } from 'react',;
import { Card, CardContent } from '@/components/ui/card',;
import { Button } from '@/components/ui/button',;
import { FilePlus, Loader2 } from 'lucide-react',;
import { ProjectCard } from './ProjectCard',;
import { ProjectForm } from './ProjectForm',;
import { PortfolioProject } from '@/types/resume',;
import { usePortfolio } from '@/hooks/usePortfolio',;
;
export function PortfolioBuilder() {;
  const { projects, fetchProjects, deleteProject, isLoading } = usePortfolio(),;
  const [showAddProject, setShowAddProject] = useState(false),;
  const [editingProject, setEditingProject] = useState<PortfolioProject | null>(null),;
  ;
  useEffect(() => {;
    fetchProjects(),;
  }, [fetchProjects]),;
  ;
  const handleAddSuccess = () => {;
    setShowAddProject(false),;
    fetchProjects(),;
  },;
  ;
  const handleEditSuccess = () => {;
    setEditingProject(null),;
    fetchProjects(),;
  },;
  ;
  const handleDeleteProject = async (projectId:string) => {;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    const success = await deleteProject(projectId),;
    if (success) {;
      fetchProjects();
    }
<<<<<<< HEAD
  };
  if (isLoading) {;
    return (
      <div className="flex justify-center items-center h-64">;
        <Loader2 className="h-8 w-8 animate-spin text-primary" />;
      </div>;
    );
  }
  return (
=======
  },;
  ;
  if (isLoading) {;
    return (;
      <div className="flex justify-center items-center h-64">;
        <Loader2 className="h-8 w-8 animate-spin text-primary" />;
      </div>;
    ),;
  }
  ;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <div className="space-y-6">;
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">;
        <div>;
          <h1 className="text-2xl font-bold">Portfolio Projects</h1>;
          <p className="text-muted-foreground">Showcase your best work and projects</p>;
        </div>;
<<<<<<< HEAD
        <Button
=======
        <Button ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          onClick={() => setShowAddProject(true)} ;
          className="gap-2";
          disabled={showAddProject || !!editingProject}
        >;
          <FilePlus className="h-4 w-4" />;
          Add Project;
        </Button>;
      </div>;
<<<<<<< HEAD
=======
      ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      {/* Edit or Add Form */}
      {(showAddProject || editingProject) && (;
        <Card>;
          <CardContent className="pt-6">;
            <h2 className="text-xl font-semibold mb-6">;
<<<<<<< HEAD
              {editingProject ? 'Edit Project' : 'Add New Project'}
            </h2>;
            <ProjectForm
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
      {/* Projects List */}
      {projects && projects.length > 0 ? (;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
          {projects && projects.map((project) => (;
            <ProjectCard
              key={project && project.id}
              project={project}
              onEdit={() => setEditingProject(project)}
=======
              {editingProject ? 'Edit Project' :'Add New Project'}
            </h2>;
            ;
            <ProjectForm ;
              project={editingProject || undefined}
              onSuccess={editingProject ? handleEditSuccess :handleAddSuccess}
              onCancel={() => {;
                setShowAddProject(false),;
                setEditingProject(null),;
              }}
            />;
          </CardContent>;
        </Card>;      )}
      ;
      {/* Projects List */}
      {projects.length > 0 ? (;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
          {projects.map((project) => (;
            <ProjectCard;
              key={project.id}              project={project}
              onEdit={_() => setEditingProject(project)}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              onDelete={handleDeleteProject}
            />;
          ))}
        </div>;
<<<<<<< HEAD
      ) : (;
=======
      ) :(;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<< HEAD
                <Button
                  onClick={() => setShowAddProject(true)} ;
                  className="mt-2";
import { useState, useEffect  } from './react';
import { Card, CardContent  } from '@/components / ui / card';
import { Button  } from '@/components / ui / button';
import { FilePlus, Loader2  } from './lucide-react';
import { ProjectCard  } from './ProjectCard';
import { ProjectForm  } from './ProjectForm';
import { PortfolioProject  } from '@/types / resume';
import { use_portfolio  } from '@/hooks / use_portfolio';
export /**
 * PortfolioBuilder - Function description
 */
function PortfolioBuilder() {
  const { projects, fetch_projects, delete_project, is_loading } = use_portfolio ();
  const [showAddProject, setShowAddProject] = useState (false);
  const [editing_project, setEditingProject] = useState < PortfolioProject | null>(
    null,
  );
;
  useEffect (() => {
    fetch_projects ();
  }, [fetch_projects]);
;
  const handleAddSuccess = () =>: any {
    setShowAddProject (false);
    fetch_projects ();
  }
;
  const handleEditSuccess = () =>: any {
    setEditingProject (null);
    fetch_projects ();
  }
;
  const handleDeleteProject = async (project_id: string) => {
    const success = await delete_project (project_id);
    // Check condition
if ( {) {
  $2
}
      fetch_projects ();
    }
  }
;
  // Check condition
if ( {) {
  $2
}
    return (
      <div className="flex justify - center items - center h - 64">;
        <Loader2 className="h - 8 w - 8 animate - spin text - primary" />;
      </div>);
  }
  return (
    <div className="space - y-6">;
      <div className="flex flex - col sm:flex - row justify - between items - start sm:items - center gap - 4 mb - 6">;
        <div>;
          <h1 className="text - 2xl font - bold">Portfolio Projects</h1>;
          <p className="text - muted - foreground">;
            Showcase your best work and projects;
          </p>;
        </div>;
        <Button;
          on_click={() => setShowAddProject (true)}
          className="gap - 2";
          disabled={showAddProject || !!editing_project}
        >;
          <FilePlus className="h - 4 w - 4" />;
          Add Project;
        </Button>;
      </div>;
      {/* Edit or Add Form */}
      {(showAddProject || editing_project) && (
        <Card>;
          <CardContent className="pt - 6">;
            <h2 className="text - xl font - semibold mb - 6">;
              {editing_project ? "Edit Project" : "Add New Project"}
            </h2>;
            <ProjectForm;
              project={editing_project || undefined}
              on_success={editing_project ? handleEditSuccess : handleAddSuccess}
              on_cancel={() => {
                setShowAddProject (false);
                setEditingProject (null);
              }}
            />;
          </CardContent>;
        </Card>)}
      {/* Projects List */}
      {projects.length > 0 ? (
        <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6">;
          {projects.map ((project) => (
            <ProjectCard;
              key={project.id}
              project={project}
              on_edit={() => setEditingProject (project)}
              on_delete={handleDeleteProject}
            />))}
        </div>) : (
        !showAddProject && (
          <Card className="text - center py - 12">;
            <CardContent>;
              <div className="flex flex - col items - center gap - 4">;
                <div className="bg - muted / 50 p - 6 rounded - full">;
                  <FilePlus className="h - 12 w - 12 text - muted - foreground" />;
                </div>;
                <h3 className="text - xl font - medium">;
                  No portfolio projects yet;
                </h3>;
                <p className="text - muted - foreground max - w-md mx - auto">;
                  Add your best work to showcase your skills and experience to;
                  potential employers.;
                </p>;
                <Button;
                  on_click={() => setShowAddProject (true)}
                  className="mt - 2";
=======
                <Button ;
                  onClick={() => setShowAddProject(true)} ;
                  className="mt-2";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                >;
                  Add Your First Project;
                </Button>;
              </div>;
            </CardContent>;
<<<<<<< HEAD
          </Card>))}
    </div>);
}
=======
          </Card>;
        );
      )}
    </div>;
  ),;}
 <div> <h1 className="text-2xl font-bold" >Portfolio Projects</h1> <p className="text-muted-foreground" >Showcase your best work and projects</p> </div> <Button > <FilePlus className="h-4 w-4" /> Add Project </Button> </div> {
  editingProject ? 'Edit Project' : 'Add New Project' 
}</h2> <ProjectForm /> </CardContent> </Card>) 
}key= {
  project.id 
}project= {
  project 
}onEdit= {
  () => setEditingProject (project) 
}onDelete= {
  handleDeleteProject 
}/>) ) 
}</div> <CardContent> <div className="flex flex-col items-center gap-4" > <div className="bg-muted/50 p-6 rounded-full" > <FilePlus className="h-12 w-12 text-muted-foreground" /> </div> <h3 className="text-xl font-medium" >No portfolio projects yet</h3> <p className="text-muted-foreground max-w-md mx-auto" > Add your best work to showcase your skills and experience to potential employers. </p> <Button > Add Your First Project </Button> </div> </CardContent> </Card>) ) 
}</div>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
