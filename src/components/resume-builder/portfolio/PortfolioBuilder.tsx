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
<<<<<<< HEAD
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FilePlus, Loader2 } from 'lucide-react';
=======

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FilePlus, Loader2 } from 'lucide-react'
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FilePlus, Loader2 } from 'lucide-react'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
import { ProjectCard } from './ProjectCard';
import { ProjectForm } from './ProjectForm';
import { PortfolioProject } from '@/types/resume';
import { usePortfolio } from '@/hooks/usePortfolio';
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export function PortfolioBuilder() {
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
  };

  const handleEditSuccess = () => {
    setEditingProject(null);
    fetchProjects();
  };

  const handleDeleteProject = async (projectId: string) => {
    const success = await deleteProject(projectId);
    if (success) {
      fetchProjects();
    }
  };

  if (isLoading) {
    return (
      <div className='flex justify-center items-center h-64'>
        <Loader2 className='h-8 w-8 animate-spin text-primary' />
      </div>
    );
  }

  return (
    <div className='space-y-6'>
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6'>
        <div>
          <h1 className='text-2xl font-bold'>Portfolio Projects</h1>
          <p className='text-muted-foreground'>
            Showcase your best work and projects
          </p>
        </div>
        <Button
          onClick={() => setShowAddProject(true)}
          className='gap-2'
          disabled={showAddProject || !!editingProject}
        >
          <FilePlus className='h-4 w-4' />
          Add Project
        </Button>
      </div>

      {/* Edit or Add Form */}
      {(showAddProject || editingProject) && (
        <Card>
          <CardContent className='pt-6'>
            <h2 className='text-xl font-semibold mb-6'>
              {editingProject ? 'Edit Project' : 'Add New Project'}
            </h2>
<<<<<<< HEAD

            <ProjectForm              project={editingProject || undefined}
              onSuccess={editingProject ? handleEditSuccess : handleAddSuccess}
              onCancel={() => {
                setShowAddProject(false);
                setEditingProject(null);              }}
=======
<<<<<<< HEAD

            <ProjectForm
=======
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            
            <ProjectForm 
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              project={editingProject || undefined}
              onSuccess={editingProject ? handleEditSuccess : handleAddSuccess}
              onCancel={() => {
                setShowAddProject(false);
<<<<<<< HEAD
<<<<<<< HEAD
                setEditingProject(null);
=======
                setEditingProject(null)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                setEditingProject(null)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              }}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            />
          </CardContent>
        </Card>
      )}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

      {/* Projects List */}
      {projects.length > 0 ? (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
<<<<<<< HEAD
          {projects.map(project => (            <ProjectCard
=======
          {projects.map(project => (
=======
      
      {/* Projects List */}
      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      
      {/* Projects List */}
      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            <ProjectCard
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              key={project.id}
              project={project}
              onEdit={() => setEditingProject(project)}
              onDelete={handleDeleteProject}
            />
          ))}
        </div>
      ) : (
        !showAddProject && (
<<<<<<< HEAD
          <Card className='text-center py-12'>
=======
<<<<<<< HEAD
<<<<<<< HEAD
          <Card className='text-center py-12'>
=======
          <Card className="text-center py-12">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
<<<<<<< HEAD
                <Button
                  onClick={() => setShowAddProject(true)}
                  className='mt-2'                >
=======
<<<<<<< HEAD
                <Button
                  onClick={() => setShowAddProject(true)}
                  className='mt-2'
=======
          <Card className="text-center py-12">
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <Button 
                  onClick={() => setShowAddProject(true)} 
                  className="mt-2"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  Add Your First Project
                </Button>
              </div>
            </CardContent>
          </Card>
        )
      )}
    </div>
  );
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
