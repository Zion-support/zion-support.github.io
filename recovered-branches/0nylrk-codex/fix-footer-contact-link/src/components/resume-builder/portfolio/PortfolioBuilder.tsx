
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {useState, useEffect} from 'react';
import {Card, CardContent} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {FilePlus, Loader2} from 'lucide-react';
import {ProjectCard} from './ProjectCard';
import {ProjectForm} from './ProjectForm';
import {PortfolioProject} from '@/types/resume';
import {usePortfolio} from '@/hooks/usePortfolio';

<<<<<<< HEAD

=======

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FilePlus, Loader2 } from "lucide-react";
import { ProjectCard } from "./ProjectCard";
import { ProjectForm } from "./ProjectForm";
import { PortfolioProject } from "@/types/resume";

import { usePortfolio } from "@/hooks/usePortfolio";
export function PortfolioBuilder() {};
>>>>>>> origin/cursor/delete-old-data-records-6bba

  const { projects, fetchProjects, deleteProject, isLoading } = usePortfolio();

  const [showAddProject, setShowAddProject] = useState(false);
  const [editingProject, setEditingProject] = useState<PortfolioProject | null>(
    null,
  );

  useEffect(() => {}
    fetchProjects();
  }, [fetchProjects]);

<<<<<<< HEAD
  const handleAddSuccess = () => {
    setShowAddProject(false);
    fetchProjects();
  }
  const handleEditSuccess = () => {
    setEditingProject(null);
    fetchProjects();
  }
  const handleDeleteProject = async (projectId: string) => {
    const success = await deleteProject(projectId);
    if (success) {
      fetchProjects();
    }
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

import { useState, useEffect } from 'react',;
import { Card, CardContent } from '@/components/ui/card',;
import { Button } from '@/components/ui/button',;
import { FilePlus, Loader2 } from 'lucide-react',;
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



  if (isLoading) {


=======
  if (isLoading) {

>>>>>>> origin/cursor/delete-old-data-records-6bba
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold">Portfolio Projects</h1>
          <p className="text-muted-foreground">
            Showcase your best work and projects
          </p>
        </div>
        <Button
          onClick={() => setShowAddProject(true)}
          className="gap-2"
          disabled={showAddProject |!!editingProject}
        >
          <FilePlus className="h-4 w-4" />
          Add Project
        </Button>
      </div>


      {/* Edit or Add Form */}
      {(showAddProject |editingProject) && (
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-6">

<<<<<<< HEAD
=======
              {editingProject ? "Edit Project" : "Add New Project"}
            </h2>


            <ProjectForm
              project={editingProject || undefined}
>>>>>>> origin/cursor/delete-old-data-records-6bba


              onSuccess={editingProject ? handleEditSuccess : handleAddSuccess}

              onCancel={() => {;
                setShowAddProject(false);
                setEditingProject(null);


<<<<<<< HEAD




=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              }}
            />
          </CardContent>
        </Card>
      )}

<<<<<<< HEAD

=======
      {/* Projects List */}
      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
>>>>>>> origin/cursor/delete-old-data-records-6bba
      {/* Projects List */}
      {projects && projects.length > 0 ? (;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
          {projects && projects.map((project) => (;
            <ProjectCard
              key={project && project.id}
<<<<<<< HEAD

              project={project}
              onEdit={() => setEditingProject(project)}

              onDelete={handleDeleteProject}
            />;
          ))}

=======
              project={project}
              onEdit={() => setEditingProject(project)}
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
              onDelete={handleDeleteProject}
            />
          ))}
        </div>;
      ) :(;
        </div>
      ) : (
        !showAddProject && (
          <Card className="text-center py-12">
            <CardContent>
              <div className="flex flex-col items-center gap-4">
                <div className="bg-muted/50 p-6 rounded-full">
                  <FilePlus className="h-12 w-12 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-medium">
                  No portfolio projects yet
                </h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Add your best work to showcase your skills and experience to
                  potential employers.
                </p>

>>>>>>> origin/cursor/delete-old-data-records-6bba
                <Button
                  onClick={() => setShowAddProject(true)}
                  className="mt-2"
                >
                  Add Your First Project
</ProjectForm>
          </CardContent>;
        </Card>;"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;"
</div>
            <ProjectCard;
              key={project && project.id}
              project={project}
              onEdit={() => setEditingProject(project)}
</ProjectCard>
        </div>"
          <Card className="text-center py-12">"
</Card>
            <CardContent>
</CardContent>"
              <div className="flex flex-col items-center gap-4">"
</div>"
                <div className="bg-muted/50 p-6 rounded-full">"
</div>"
                  <FilePlus className="h-12 w-12 text-muted-foreground" />"
</FilePlus>
                </div>"
                <h3 className="text-xl font-medium">"
</h3>
                </h3>"
                <p className="text-muted-foreground max-w-md mx-auto">"
</p>
                </p>
                <Button;
                  onClick={() => setShowAddProject(true)}
</Button>

                </Button>
              </div>
            </CardContent>
          </Card>
        )
      )}
    </div>
  )
}
<<<<<<< HEAD

      fetch_projects ();
    }
  }
;
  // Check condition
if ( {) {
  $2
}
    return (
      <div className="flex justify - center items - center h-64">;
        <Loader2 className="h - 8 w - 8 animate - spin text-primary" />;
      </div>);
  }
  return (
    <div className="space-y-6">;
      <div className="flex flex - col sm:flex - row justify - between items - start sm:items - center gap - 4 mb-6">;
        <div>;
          <h1 className="text - 2xl font-bold">Portfolio Projects</h1>;
          <p className="text - muted-foreground">;
            Showcase your best work and projects;

    </div>"
      <div className="flex justify - center items - center h - 64">;"
</div>"
        <Loader2 className="h - 8 w - 8 animate - spin text - primary" />;"
</Loader2>
      </div>);"
    <div className="space - y-6">;"
</div>"
      <div className="flex flex - col sm:flex - row justify - between items - start sm:items - center gap - 4 mb - 6">;"
</div>
        <div>;
</div>"
          <h1 className="text - 2xl font - bold">Portfolio Projects</h1>;""
          <p className="text - muted - foreground">;"
</p>
          </p>;
        </div>;
        <Button;
          on_click={() => setShowAddProject (true)}
          className="gap-2";
          disabled={showAddProject || !!editing_project}
        >;
          <FilePlus className="h - 4 w-4" />;
          Add Project;
        </Button>;
      </div>;
      {/* Edit or Add Form */}
      {(showAddProject || editing_project) && (
        <Card>;
          <CardContent className="pt-6">;
            <h2 className="text - xl font - semibold mb-6">;
              {editing_project ? "Edit Project" : "Add New Project"}
</Button>"
          <FilePlus className="h - 4 w - 4" />;"
</FilePlus>
        </Button>;
      </div>;
        <Card>;
</Card>"
          <CardContent className="pt - 6">;"
</CardContent>"
            <h2 className="text - xl font - semibold mb - 6">;"
</h2>
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
        <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap-6">;
          {projects.map ((project) => (
</ProjectForm>
          </CardContent>;
        </Card>)}"
        <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6">;"
</div>
            <ProjectCard;
              key={project.id}
              project={project}
              on_edit={() => setEditingProject (project)}
              on_delete={handleDeleteProject}
            />))}
        </div>) : (
        !showAddProject && (
          <Card className="text - center py-12">;
            <CardContent>;
              <div className="flex flex - col items - center gap-4">;
                <div className="bg - muted / 50 p - 6 rounded-full">;
                  <FilePlus className="h - 12 w - 12 text - muted-foreground" />;
                </div>;
                <h3 className="text - xl font-medium">;
                  No portfolio projects yet;
                </h3>;
                <p className="text - muted - foreground max - w-md mx-auto">;
                  Add your best work to showcase your skills and experience to;
                  potential employers.;
                </p>;
                <Button;
                  on_click={() => setShowAddProject (true)}


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                >;
                  Add Your First Project;
                </Button>;
              </div>;

            </CardContent>;
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
