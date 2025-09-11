
<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect  } from 'react';
import { Card, CardContent  } from '@/components/ui/card';
import { Button  } from '@/components/ui/button';
import { FilePlus, Loader2  } from 'lucide-react';
import { ProjectCard  } from './ProjectCard';
import { ProjectForm  } from './ProjectForm';
import { PortfolioProject  } from '@/types/resume';
import { usePortfolio } from '@/hooks/usePortfolio';
export function PortfolioBuilder() {
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {useState, useEffect} from 'react';
import {Card, CardContent} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {FilePlus, Loader2} from 'lucide-react';
import {ProjectCard} from './ProjectCard';
import {ProjectForm} from './ProjectForm';
import {PortfolioProject} from '@/types/resume';
import {usePortfolio} from '@/hooks/usePortfolio';
export function PortfolioBuilder() {;

<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect  } from 'react';
import { Card, CardContent  } from '@/components/ui/card';
import { Button  } from '@/components/ui/button';
import { FilePlus, Loader2  } from 'lucide-react';
import { ProjectCard  } from './ProjectCard';
import { ProjectForm  } from './ProjectForm';
import { PortfolioProject  } from '@/types/resume';
import { usePortfolio } from '@/hooks/usePortfolio';
export function PortfolioBuilder() {
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const { projects, fetchProjects, deleteProject, isLoading } = usePortfolio();
  const [showAddProject, setShowAddProject] = useState(false);

  const [editingProject, setEditingProject] = useState<PortfolioProject | null>(
    null
  );
  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);
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
<<<<<<< HEAD
<<<<<<< HEAD

  };

}

  }
  };
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  };

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD

  
  
=======


  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


  
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Edit or Add Form */}
      {(showAddProject |editingProject) && (
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-6">

<<<<<<< HEAD
<<<<<<< HEAD

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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const success = await deleteProject(projectId),;
    if (success) {;
      fetchProjects();
    }
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  };

  if (isLoading) {;
    return (
      <div className="flex justify-center items-center h-64">;
        <Loader2 className="h-8 w-8 animate-spin text-primary" />;
      </div>;
    );
  }

  return (
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <div className="space-y-6">;
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">;
        <div>;
          <h1 className="text-2xl font-bold">Portfolio Projects</h1>;
          <p className="text-muted-foreground">Showcase your best work and projects</p>;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
        <Button ;
=======
        <Button
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        <Button
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          onClick={() => setShowAddProject(true)} ;
          className="gap-2";
          disabled={showAddProject || !!editingProject}
        >;
          <FilePlus className="h-4 w-4" />;
          Add Project;
        </Button>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
      ;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Edit or Add Form */}
      {(showAddProject || editingProject) && (;
        <Card>;
          <CardContent className="pt-6">;
            <h2 className="text-xl font-semibold mb-6">;
<<<<<<< HEAD
<<<<<<< HEAD



=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======


              {editingProject ? 'Edit Project' : 'Add New Project'}
            </h2>;

            <ProjectForm
              project={editingProject || undefined}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              onSuccess={editingProject ? handleEditSuccess : handleAddSuccess}
              onCancel={() => {;
                setShowAddProject(false);
                setEditingProject(null);
<<<<<<< HEAD


=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <ProjectForm 
              project={editingProject || undefined}
              onSuccess={editingProject ? handleEditSuccess : handleAddSuccess}

=======
            <ProjectForm 
              project={editingProject || undefined}
              onSuccess={editingProject ? handleEditSuccess : handleAddSuccess}
              onCancel={() => {
                setShowAddProject(false);
                setEditingProject(null)
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              onCancel={() => {;
                setShowAddProject(false);
                setEditingProject(null);

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              }}
            />;
          </CardContent>;
        </Card>;
      )}
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Projects List */}
      {projects && projects.length > 0 ? (;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
          {projects && projects.map((project) => (;
            <ProjectCard
              key={project && project.id}
              project={project}
              onEdit={() => setEditingProject(project)}
<<<<<<< HEAD
<<<<<<< HEAD
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
            />;
          ))}
        </div>;
      ) :(;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              onDelete={handleDeleteProject}
            />;
          ))}

        </div>;
      ) : (;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
                <Button ;
                  onClick={() => setShowAddProject(true)} ;
                  className="mt-2";
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <Button
                  onClick={() => setShowAddProject(true)} ;
                  className="mt-2";
=======
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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                >;
                  Add Your First Project;
                </Button>;
              </div>;
            </CardContent>;
<<<<<<< HEAD
<<<<<<< HEAD
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
{editingProject ? "Edit Project" : "Add New Project"}
            </h2>

              {editingProject ? "Edit Project" : "Add New Project"}
            </h2>
            <ProjectForm
              project={editingProject |undefined}
              onSuccess={editingProject ? handleEditSuccess : handleAddSuccess}
              onCancel={() => {
                setShowAddProject(false);
                setEditingProject(null);

              {editingProject ? 'Edit Project' : 'Add New Project'}
            </h2>;
            <ProjectForm;
              project={editingProject || undefined}
              onSuccess={editingProject ? handleEditSuccess : handleAddSuccess}
              onCancel={() => {;
                setShowAddProject(false);
                setEditingProject(null);
            <ProjectForm 
              project={editingProject || undefined}
              onSuccess={editingProject ? handleEditSuccess : handleAddSuccess}
              onCancel={() => {
                setShowAddProject(false);
                setEditingProject(null)
              onCancel={() => {;
                setShowAddProject(false);
                setEditingProject(null);
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
              key={project.id}
              project={project}
              onEdit={() => setEditingProject(project)}
              onDelete={handleDeleteProject}
            />
          ))}
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
  );
}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          </Card>))}
    </div>);
}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
