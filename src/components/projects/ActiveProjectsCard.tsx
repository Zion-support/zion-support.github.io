<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { BriefcaseIcon, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,;
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useProjects } from '@/hooks/useProjects';
import { Project } from '@/types/projects';
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export function ActiveProjectsCard() {
  const { projects, isLoading } = useProjects();
  const [activeProjects, setActiveProjects] = useState<Project[]>([]);

  useEffect(() => {
    if (projects && !isLoading) {
      const active = projects
        .filter(p => ['offer_accepted', 'in_progress'].includes(p.status))
        .slice(0, 3); // Limit to 3 most recent projects
      setActiveProjects(active);
    }
  }, [projects, isLoading]);
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======

import { useEffect, useState } from "react";
import Link from "next/link";
import { BriefcaseIcon, Clock } from 'lucide-react'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useProjects } from "@/hooks/useProjects";
import { Project } from "@/types/projects";

export function ActiveProjectsCard() { const { projects, isLoading  } = useProjects(),
  const [ activeProjects, setActiveProjects ] = useState<Project[]>([]),

  
  useEffect(() => {
    if (projects && !isLoading) {
      const active = projects.filter(p => 
        ['offer_acceptedin_progress'].includes(p.status)
      ).slice(0, 3), // Limit to 3 most recent projects
      setActiveProjects(active)
    }
  }, [projects, isLoading]);


>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  if (isLoading) {
    return (
      <Card>
        <CardHeader>
<<<<<<< HEAD
          <CardTitle className='flex items-center gap-2'>
            <BriefcaseIcon className='h-5 w-5 text-primary' />            <span>Active Projects</span>
=======
<<<<<<< HEAD
<<<<<<< HEAD
          <CardTitle className='flex items-center gap-2'>
            <BriefcaseIcon className='h-5 w-5 text-primary' />
=======
          <CardTitle className="flex items-center gap-2">
            <BriefcaseIcon className="h-5 w-5 text-primary" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <CardTitle className="flex items-center gap-2">
            <BriefcaseIcon className="h-5 w-5 text-primary" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            <span>Active Projects</span>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          </CardTitle>
          <CardDescription>Your ongoing work</CardDescription>
        </CardHeader>
        <CardContent>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          <div className='space-y-2'>
            {[1, 2].map(idx => (
              <div
                key={idx}
                className='h-16 animate-pulse bg-muted rounded'
<<<<<<< HEAD
              ></div>            ))}
          </div>
        </CardContent>
      </Card>
    );
  }
=======
              ></div>
=======
          <div className="space-y-2">
            {[1, 2].map(idx => (
              <div key={idx} className="h-16 animate-pulse bg-muted rounded"></div>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <div className="space-y-2">
            {[1, 2].map(idx => (
              <div key={idx} className="h-16 animate-pulse bg-muted rounded"></div>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            ))}
          </div>
        </CardContent>
      </Card>
<<<<<<< HEAD
<<<<<<< HEAD
    );
  }

=======
    )
  }
  
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    )
  }
  
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  if (activeProjects.length === 0) {
    return (
      <Card>
        <CardHeader>
<<<<<<< HEAD
          <CardTitle className='flex items-center gap-2'>
            <BriefcaseIcon className='h-5 w-5 text-primary' />            <span>Active Projects</span>
          </CardTitle>
          <CardDescription>Your ongoing work</CardDescription>
        </CardHeader>
=======
<<<<<<< HEAD
<<<<<<< HEAD
          <CardTitle className='flex items-center gap-2'>
            <BriefcaseIcon className='h-5 w-5 text-primary' />
=======
          <CardTitle className="flex items-center gap-2">
            <BriefcaseIcon className="h-5 w-5 text-primary" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <CardTitle className="flex items-center gap-2">
            <BriefcaseIcon className="h-5 w-5 text-primary" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            <span>Active Projects</span>
          </CardTitle>
          <CardDescription>Your ongoing work</CardDescription>
        </CardHeader>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        <CardContent className='text-center py-6'>
          <p className='text-muted-foreground mb-2'>
            You don't have any active projects at the moment.
          </p>
          <Button variant='outline' asChild>
<<<<<<< HEAD
            <Link href='/jobs'>Find Opportunities</Link>          </Button>
=======
            <Link href='/jobs'>Find Opportunities</Link>
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        <CardContent className="text-center py-6">
          <p className="text-muted-foreground mb-2">You don't have any active projects at the moment.</p>
          <Button variant="outline" asChild>
            <Link href="/jobs">Find Opportunities</Link>
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          </Button>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        </CardContent>
      </Card>
    );
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  return (
    <Card>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
<<<<<<< HEAD
          <BriefcaseIcon className='h-5 w-5 text-primary' />          <span>Active Projects</span>
        </CardTitle>
        <CardDescription>Your ongoing work</CardDescription>
      </CardHeader>
      <CardContent className='space-y-4'>
=======
          <BriefcaseIcon className='h-5 w-5 text-primary' />
=======
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BriefcaseIcon className="h-5 w-5 text-primary" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BriefcaseIcon className="h-5 w-5 text-primary" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          <span>Active Projects</span>
        </CardTitle>
        <CardDescription>Your ongoing work</CardDescription>
      </CardHeader>
<<<<<<< HEAD
<<<<<<< HEAD
      <CardContent className='space-y-4'>
=======
      <CardContent className="space-y-4">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
                }
              >
                {project.status === 'offer_accepted'
                  ? 'Starting'
                  : 'In Progress'}
              </Badge>
            </div>
            <div className='flex items-center text-xs text-muted-foreground gap-2'>
              <Clock className='h-3 w-3' />
              <span>
                Started {new Date(project.start_date).toLocaleDateString()}
              </span>
            </div>
<<<<<<< HEAD
            <Button size='sm' variant='outline' className='w-full mt-2' asChild>              <Link href={`/project/${project.id}`}>View Project</Link>
=======
<<<<<<< HEAD
            <Button size='sm' variant='outline' className='w-full mt-2' asChild>
=======
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <Button size="sm" variant="outline" className="w-full mt-2" asChild>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              <Link href={`/project/${project.id}`}>View Project</Link>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            </Button>
          </div>
        ))}
      </CardContent>
      {activeProjects.length > 2 && (
        <CardFooter>
<<<<<<< HEAD
          <Button variant='ghost' className='w-full' asChild>
            <Link href='/projects'>View All Projects</Link>          </Button>
=======
<<<<<<< HEAD
<<<<<<< HEAD
          <Button variant='ghost' className='w-full' asChild>
            <Link href='/projects'>View All Projects</Link>
=======
          <Button variant="ghost" className="w-full" asChild>
            <Link href="/projects">View All Projects</Link>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <Button variant="ghost" className="w-full" asChild>
            <Link href="/projects">View All Projects</Link>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          </Button>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        </CardFooter>
      )}
    </Card>
  );
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

}, [projects, isLoading]);
return (<Card> <CardHeader> <CardTitle className="flex items-center gap-2" > <BriefcaseIcon className="h-5 w-5 text-primary" /> <span>Active Projects</span> </CardTitle> <CardDescription>Your ongoing work</CardDescription> </CardHeader> <CardContent>) ) ;
}</div> </CardContent> </Card>) ;
}if (activeProjects.length === 0) {'";
  return (<Card> <CardHeader> <CardTitle className="flex items-center gap-2" > <BriefcaseIcon className="h-5 w-5 text-primary" /> <span>Active Projects</span> </CardTitle> <CardDescription>Your ongoing work</CardDescription> </CardHeader> <CardContent className="text-center py-6" > <p className="text-muted-foreground mb-2" >You don't have any active projects at the moment.</p> <Button variant="outline" asChild> <Link href="/jobs" >Find Opportunities</Link> </Button> </CardContent> </Card> return (<Card> <CardHeader> <CardTitle className="flex items-center gap-2" > <BriefcaseIcon className="h-5 w-5 text-primary" /> <span>Active Projects</span> </CardTitle> <CardDescription>Your ongoing work</CardDescription> </CardHeader> </Button> </div>) ) ;
}</CardContent> {";
  activeProjects.length > 2 && (<CardFooter> <Button variant="ghost" className="w-full" asChild> <Link href="/projects">View All Projects</Link> </Button> </CardFooter>) ;
}</Card>) ;
<<<<<<< HEAD
}'"
=======
}'"
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
