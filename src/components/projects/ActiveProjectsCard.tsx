<<<<<<< HEAD
<<<<<<< HEAD
export function ActiveProjectsCard() {
  const { projects, isLoading } = useProjects()
  const [activeProjects, setActiveProjects] = useState<Project[]>([]);
  useEffect(() => {    if (projects && !isLoading) {;
      const active = projects;
        .filter(p => ['offer_accepted', 'in_progress'].includes(p.status));
        .slice(0, 3); // Limit to 3 most recent projects
      setActiveProjects(active)
    }
  }, [projects, isLoading])
=======
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f

import { useEffect, useState } from "react",
import Link from "next/link",
import { BriefcaseIcon, Clock } from 'lucide-react'
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { useProjects } from "@/hooks/useProjects",
import { Project } from "@/types/projects",
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
export function ActiveProjectsCard() {
  const { projects, isLoading } = useProjects();
  const [activeProjects, setActiveProjects] = useState<Project[]>([]),
  
  useEffect(() => {
    if (projects && !isLoading) {
<<<<<<< HEAD
      const active = null;
      const active = projects.filter(p => 
        ['offer_acceptedin_progress'].includes(p.status)
      ).slice(0, 3), // Limit to 3 most recent projects
      setActiveProjects(active)
    }
  }, [projects, isLoading]),
  
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  if (isLoading) {
    return (
<<<<<<< HEAD
<<<<<<< HEAD
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <BriefcaseIcon className='h-5 w-5 text-primary' />            <span>Active Projects</span>          <CardTitle className="flex items-center gap-2">
          <CardTitle className="flex items-center gap-2">
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
      <Card>
        <CardHeader>
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
            <BriefcaseIcon className="h-5 w-5 text-primary" />
            <span>Active Projects</span>
          </CardTitle>
          <CardDescription>Your ongoing work</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
<<<<<<< HEAD
<<<<<<< HEAD


                className='h-16 animate-pulse bg-muted rounded'></div>            ))}
          </div>;
        </CardContent>;
      </Card>;
    );
  }          <div className="space-y-2">;
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
            {[1, 2].map(idx => (
=======
              <div key={idx} className="h-16 animate-pulse bg-muted rounded"></div>
import { useEffect, useState } from "react",;
import Link from "next/link",;
import { BriefcaseIcon, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { useProjects } from "@/hooks/useProjects",;
import { Project } from "@/types/projects",;
export function ActiveProjectsCard() {;
  const { projects, isLoading } = useProjects(),;
  const [activeProjects, setActiveProjects] = useState<Project[]>([]);
  useEffect(() => {;
    if (projects && !isLoading) {;
      const active = projects.filter(p =>;
        ['offer_acceptedin_progress'].includes(p.status);
      ).slice(0, 3), // Limit to 3 most recent projects;
      setActiveProjects(active);
    }
  }, [projects, isLoading]);
  if (isLoading) {;
    return (;
      <Card>;
        <CardHeader>;
          <CardTitle className="flex items-center gap-2">;
            <BriefcaseIcon className="h-5 w-5 text-primary" />;
            <span>Active Projects</span>;
          </CardTitle>;
          <CardDescription>Your ongoing work</CardDescription>;
        </CardHeader>;
        <CardContent>;
          <div className="space-y-2">;
            {[1, 2].map(idx => (;
              <div key={idx} className="h-16 animate-pulse bg-muted rounded"></div>;
            ))}
          </div>;
        </CardContent>;
      </Card>;
    );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


  }
    );
  }




=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  }
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  if (activeProjects.length === 0) {
    return (
      <Card>
        <CardHeader>
<<<<<<< HEAD
          <CardTitle className='flex items-center gap-2'>
            <BriefcaseIcon className='h-5 w-5 text-primary' />            <span>Active Projects</span>
          </CardTitle>
          <CardDescription>Your ongoing work</CardDescription>
        </CardHeader>          <CardTitle className="flex items-center gap-2">
          <CardTitle className="flex items-center gap-2">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee



=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
            <BriefcaseIcon className="h-5 w-5 text-primary" />
            <span>Active Projects</span>
          </CardTitle>
          <CardDescription>Your ongoing work</CardDescription>
        </CardHeader>
<<<<<<< HEAD
        <CardContent className='text-center py-6'>
          <p className='text-muted-foreground mb-2'>
            You don't have any active projects at the moment.
          </p>
          <Button variant='outline' asChild>
            <Link href='/jobs'>Find Opportunities</Link>          </Button>        <CardContent className="text-center py-6">
          <p className="text-muted-foreground mb-2">You don't have any active projects at the moment.</p>
          <Button variant="outline" asChild>
            <Link href="/jobs">Find Opportunities</Link>
        <CardContent className="text-center py-6">
          <p className="text-muted-foreground mb-2">You don't have any active projects at the moment.</p>
          <Button variant="outline" asChild>
            <Link href="/jobs">Find Opportunities</Link>
          </Button>
<<<<<<< HEAD
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        </CardContent>
      </Card>
    )
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee



  return (
  }
  return (

<<<<<<< HEAD

    <Card>;
      <CardHeader>;
        <CardTitle className='flex items-center gap-2'>;
          <BriefcaseIcon className='h-5 w-5 text-primary' />          <span>Active Projects</span>;
        </CardTitle>;
        <CardDescription>Your ongoing work</CardDescription>;
      </CardHeader>;
      <CardContent className='space-y-4'>  ;


=======
  return (
    <Card>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <BriefcaseIcon className='h-5 w-5 text-primary' />          <span>Active Projects</span>
        </CardTitle>
        <CardDescription>Your ongoing work</CardDescription>
      </CardHeader>
      <CardContent className='space-y-4'>
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BriefcaseIcon className="h-5 w-5 text-primary" />
        </CardTitle>
        <CardDescription>Your ongoing work</CardDescription>
      </CardHeader>
      <CardContent className='space-y-4'>
        {activeProjects.map(project => (
          <div key={project.id} className='border rounded-md p-3'>
            <div className='flex justify-between items-start mb-2'>
              <h3 className='font-medium text-sm'>{project.job?.title}</h3>
              <Badge
                variant={
                  project.status === 'in_progress' ? 'default' : 'outline'
                }
                className={
                  project.status === 'in_progress'
                    ? 'bg-blue-100 text-blue-800 hover:bg-blue-100'
                    : ''
                }          <div key={project.id} className="border rounded-md p-3">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium text-sm">{project.job?.title}</h3>
              <Badge
                variant = {project.status === "in_progress" ? "default" : "outline",}
                className = {project.status === "in_progress" ? "bg-blue-100 text-blue-800 hover:bg-blue-100" : "",}
              >
                {project.status === 'offer_accepted'
                  ? 'Starting'
                  : 'In Progress'}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
              </Badge>
            </div>
            <div className='flex items-center text-xs text-muted-foreground gap-2'>
              <Clock className='h-3 w-3' />
              <span>
                Started {new Date(project.start_date).toLocaleDateString()}
              </span>
            </div>
            <Button size='sm' variant='outline' className='w-full mt-2' asChild>              <Link href={`/project/${project.id}`}>View Project</Link>            <Button size="sm" variant="outline" className="w-full mt-2" asChild>
<<<<<<< HEAD
=======
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BriefcaseIcon className="h-5 w-5 text-primary" />
          <span>Active Projects</span>
        </CardTitle>
        <CardDescription>Your ongoing work</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {activeProjects.map(project => (
          <div key={project.id} className="border rounded-md p-3">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium text-sm">{project.job?.title}</h3>
              <Badge 
                variant={project.status === "in_progress" ? "default" : "outline"}
                className={project.status === "in_progress" ? "bg-blue-100 text-blue-800 hover:bg-blue-100" : ""}
              >
                {project.status === "offer_accepted" ? "Starting" : "In Progress"}
              </Badge>
            </div>
            <div className="flex items-center text-xs text-muted-foreground gap-2">
              <Clock className="h-3 w-3" />
              <span>Started {new Date(project.start_date).toLocaleDateString()}</span>
            </div>
            <Button size="sm" variant="outline" className="w-full mt-2" asChild>
=======
<<<<<<< HEAD
              </Badge>;
            </div>;
            <div className='flex items-center text-xs text-muted-foreground gap-2'>;
              <Clock className='h-3 w-3' />;
              <span>;
                Started {new Date(project && project.start_date).toLocaleDateString()}
              </span>;
            </div>;
            <Button size='sm' variant='outline' className='w-full mt-2' asChild>              <Link href={`/project/${project && project.id}`}>View Project</Link>            <Button size="sm" variant="outline" className="w-full mt-2" asChild>;
              <Link href={`/project/${project && project.id}`}>View Project</Link>;
            </Button>;
          </div>;
        ))}
      </CardContent>;
      {activeProjects && activeProjects.length > 2 && (;
        <CardFooter>;
          <Button variant='ghost' className='w-full' asChild>;
            <Link href='/projects'>View All Projects</Link>          </Button>          <Button variant="ghost" className="w-full" asChild>;
            <Link href="/projects">View All Projects</Link>;
          </Button>;
        </CardFooter>;

      )}

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
              <Link href={`/project/${project.id}`}>View Project</Link>
            </Button>
          </div>
        ))}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
