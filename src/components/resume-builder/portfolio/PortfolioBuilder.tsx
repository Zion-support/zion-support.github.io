
import { useState,, useEffect, ,  } from 'react';
import { Card,, CardContent, ,  } from '@/components/ui/card';
import { Button, ,  } from '@/components/ui/button';
import { FilePlus, Loader2,  } from 'lucide-react'
import { ProjectCard, ,  } from './ProjectCard';
import { ProjectForm, ,  } from './ProjectForm';
import { PortfolioProject, ,  } from '@/types/resume';
import { usePortfolio,  } from '@/hooks/usePortfolio';
export function PortfolioBuilder() {
setEditingProject(null)
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
              key={project.id}
              project={project}
              onEdit={() => setEditingProject(project)}
              onDelete={handleDeleteProject}
          {projects.map((project,) => (
            <ProjectCard,
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
                  Add your best work to showcase your skills and experience to,
potential employers.
                </p>
                <Button,
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
                <Button,
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
  )
}