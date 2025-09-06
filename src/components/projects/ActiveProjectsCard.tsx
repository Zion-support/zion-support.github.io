<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

import { useEffect, useState } from "react",
import Link from "next/link",
import { BriefcaseIcon, Clock } from 'lucide-react'
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { useProjects } from "@/hooks/useProjects",
import { Project } from "@/types/projects",
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { BriefcaseIcon, Clock } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card
  CardContent
  CardDescription
  CardFooter
  CardHeader
  CardTitle
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useProjects } from '@/hooks/useProjects'
import { Project } from '@/types/projects'
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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

import { useEffect, useState } from "react",
import Link from "next/link",
import { BriefcaseIcon, Clock } from 'lucide-react'
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { useProjects } from "@/hooks/useProjects",
import { Project } from "@/types/projects",
export function ActiveProjectsCard() {
=======
xport function ActiveProjectsCard() {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const { projects, isLoading } = useProjects();
  const [activeProjects, setActiveProjects] = useState<Project[]>([]),
  
  useEffect(() => {
    if (projects && !isLoading) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      const active = null;
      const active = projects.filter(p => 
        ['offer_acceptedin_progress'].includes(p.status)
      ).slice(0, 3), // Limit to 3 most recent projects
      setActiveProjects(active)
    }
  }, [projects, isLoading]),
  
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  if (isLoading) {
    return (
      <Card>
        <CardHeader>
<<<<<<< HEAD
<<<<<<< HEAD
=======
      const active = null;
>>>>>>>   if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <BriefcaseIcon className='h-5 w-5 text-primary' />            <span>Active Projects</span>          <CardTitle className="flex items-center gap-2">
>>>>>>>             <BriefcaseIcon className="h-5 w-5 text-primary" />
ursor/fix-website-loading-errors-and-merge-6662
  if (isLoading) {
>>>>>>> import { useEffect, useState } from 'react';
=======


  if (isLoading) {
import { useEffect, useState } from 'react';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
import Link from 'next/link';
import { BriefcaseIcon, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;
  CardHeader,;
  CardTitle,;
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useProjects } from '@/hooks/useProjects';
import { Project } from '@/types/projects';
export function ActiveProjectsCard() {;
  const { projects, isLoading } = useProjects();
  const [activeProjects, setActiveProjects] = useState<Project[]>([]);

  useEffect(() => {    if (projects && !isLoading) {;
      const active = projects;
        .filter(p => ['offer_accepted', 'in_progress'].includes(p && p.status));
        .slice(0, 3); // Limit to 3 most recent projects;
      setActiveProjects(active);
    }
  }, [projects, isLoading]);

  if (isLoading) {;
    return (

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

            <BriefcaseIcon className="h-5 w-5 text-primary" />
>>>>>>>             <span>Active Projects</span>
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <CardTitle className='flex items-center gap-2'>
            <BriefcaseIcon className='h-5 w-5 text-primary' />            <span>Active Projects</span>          <CardTitle className="flex items-center gap-2">
          <CardTitle className="flex items-center gap-2">
            <BriefcaseIcon className="h-5 w-5 text-primary" />
            <span>Active Projects</span>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          </CardTitle>
          <CardDescription>Your ongoing work</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
<<<<<<< HEAD
=======


                className='h-16 animate-pulse bg-muted rounded'></div>            ))}
          </div>;
        </CardContent>;
      </Card>;
    );
  }          <div className="space-y-2">;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            {[1, 2].map(idx => (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              <div
                key={idx}
                className='h-16 animate-pulse bg-muted rounded'
              ></div>            ))}
          </div>
        </CardContent>
      </Card>
    )
  }          <div className="space-y-2">
            {[1, 2].map(idx => (
              <div key={idx} className="h-16 animate-pulse bg-muted rounded"></div>
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }
    )
  }
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            {[1, 2].map(idx => (;
              <div key={idx} className="h-16 animate-pulse bg-muted rounded"></div>;
            ))}
          </div>;
        </CardContent>;
      </Card>;
    );
<<<<<<< HEAD
<<<<<<< HEAD

  }

<<<<<<< HEAD
=======



  }
  
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  if (activeProjects.length === 0) {
    return (
      <Card>
        <CardHeader>

=======
<<<<<<< HEAD
>>>>>>>   }
  
>>>>>>>   if (activeProjects.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <BriefcaseIcon className='h-5 w-5 text-primary' />            <span>Active Projects</span>
          </CardTitle>
          <CardDescription>Your ongoing work</CardDescription>
        </CardHeader>          <CardTitle className="flex items-center gap-2">
>>>>>>>             <BriefcaseIcon className="h-5 w-5 text-primary" />
ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }
  
  if (activeProjects.length === 0) {
    return (
      <Card>
        <CardHeader>
<<<<<<< HEAD

          <CardTitle className="flex items-center gap-2">
<<<<<<< HEAD



<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
          <CardTitle className='flex items-center gap-2'>
            <BriefcaseIcon className='h-5 w-5 text-primary' />            <span>Active Projects</span>
          </CardTitle>
          <CardDescription>Your ongoing work</CardDescription>
        </CardHeader>          <CardTitle className="flex items-center gap-2">
          <CardTitle className="flex items-center gap-2">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            <BriefcaseIcon className="h-5 w-5 text-primary" />
>>>>>>>             <span>Active Projects</span>
          </CardTitle>
          <CardDescription>Your ongoing work</CardDescription>
        </CardHeader>
<<<<<<< HEAD
<<<<<<< HEAD

        </CardContent>
      </Card>
    )
  }

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <CardContent className='text-center py-6'>
          <p className='text-muted-foreground mb-2'>
            You don't have any active projects at the moment.
          </p>
          <Button variant='outline' asChild>
            <Link href='/jobs'>Find Opportunities</Link>          </Button>        <CardContent className="text-center py-6">
          <p className="text-muted-foreground mb-2">You don't have any active projects at the moment.</p>
          <Button variant="outline" asChild>
            <Link href="/jobs">Find Opportunities</Link>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>         </CardContent>
      </Card>
    )
  }
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>   return (
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======


  return (
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return (


    <Card>;
      <CardHeader>;
        <CardTitle className='flex items-center gap-2'>;
          <BriefcaseIcon className='h-5 w-5 text-primary' />          <span>Active Projects</span>;
        </CardTitle>;
        <CardDescription>Your ongoing work</CardDescription>;
      </CardHeader>;
      <CardContent className='space-y-4'>  ;


<<<<<<< HEAD
>>>>>>>   return (
=======
  return (
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
    <Card>;
      <CardHeader>;
        <CardTitle className="flex items-center gap-2">;
          <BriefcaseIcon className="h-5 w-5 text-primary" />;
        </CardTitle>;
        <CardDescription>Your ongoing work</CardDescription>;
      </CardHeader>;
      <CardContent className='space-y-4'>;
        {activeProjects && activeProjects.map(project => (;
          <div key={project && project.id} className='border rounded-md p-3'>;
            <div className='flex justify-between items-start mb-2'>;
              <h3 className='font-medium text-sm'>{project && project.job?.title}</h3>;
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <CardContent className="text-center py-6">
          <p className="text-muted-foreground mb-2">You don't have any active projects at the moment.</p>
          <Button variant="outline" asChild>
            <Link href="/jobs">Find Opportunities</Link>
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <BriefcaseIcon className='h-5 w-5 text-primary' />          <span>Active Projects</span>
        </CardTitle>
        <CardDescription>Your ongoing work</CardDescription>
      </CardHeader>
      <CardContent className='space-y-4'>
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <Badge
                variant={
                  project.status === 'in_progress' ? 'default' : 'outline'
                }
                className={
                  project.status === 'in_progress'
                    ? 'bg-blue-100 text-blue-800 hover:bg-blue-100'
                    : ''
<<<<<<< HEAD


=======
                }          <div key={project.id} className="border rounded-md p-3">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium text-sm">{project.job?.title}</h3>
              <Badge
                variant = {project.status === "in_progress" ? "default" : "outline",}
                className = {project.status === "in_progress" ? "bg-blue-100 text-blue-800 hover:bg-blue-100" : "",}
              >
                {project.status === 'offer_accepted'
                  ? 'Starting'
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  : 'In Progress'}
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              <Link href={`/project/${project.id}`}>View Project</Link>
            </Button>
          </div>
        ))}
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>>               <Link href={`/project/${project.id}`}>View Project</Link>
            </Button>
          </div>
        ))}
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      </CardContent>
      {activeProjects.length > 2 && (
        <CardFooter>
          <Button variant='ghost' className='w-full' asChild>
            <Link href='/projects'>View All Projects</Link>          </Button>          <Button variant="ghost" className="w-full" asChild>
            <Link href="/projects">View All Projects</Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}, [projects, isLoading])
return (<Card> <CardHeader> <CardTitle className="flex items-center gap-2" > <BriefcaseIcon className="h-5 w-5 text-primary" /> <span>Active Projects</span> </CardTitle> <CardDescription>Your ongoing work</CardDescription> </CardHeader> <CardContent>) )
}</div> </CardContent> </Card>)
}if (activeProjects.length === 0) {'"
  return (<Card> <CardHeader> <CardTitle className="flex items-center gap-2" > <BriefcaseIcon className="h-5 w-5 text-primary" /> <span>Active Projects</span> </CardTitle> <CardDescription>Your ongoing work</CardDescription> </CardHeader> <CardContent className="text-center py-6" > <p className="text-muted-foreground mb-2" >You don't have any active projects at the moment.</p> <Button variant="outline" asChild> <Link href="/jobs" >Find Opportunities</Link> </Button> </CardContent> </Card> return (<Card> <CardHeader> <CardTitle className="flex items-center gap-2" > <BriefcaseIcon className="h-5 w-5 text-primary" /> <span>Active Projects</span> </CardTitle> <CardDescription>Your ongoing work</CardDescription> </CardHeader> </Button> </div>) )
}</CardContent> {"
  activeProjects.length > 2 && (<CardFooter> <Button variant="ghost" className="w-full" asChild> <Link href="/projects">View All Projects</Link> </Button> </CardFooter>)
}</Card>)
}'"}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 
ursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
import { useEffect, useState } from 'react';
import Link from 'next / link';
import { BriefcaseIcon, Clock } from 'lucide-react';
import { Button } from '@/components / ui / button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components / ui / card';
import { Badge } from '@/components / ui / badge';
import { use_projects } from '@/hooks / use_projects';
import { Project } from '@/types / projects';
export /**
 * ActiveProjectsCard - Function description
 */
function ActiveProjectsCard() {
  const { projects, is_loading } = use_projects ();
  const [active_projects, setActiveProjects] = useState < Project[]>([]);
  useEffect (() => {    // Check condition
if ( {) {
  $2
}
      const active = projects;
        .filter (p => ['offer_accepted', 'in_progress'].includes (p.status));
        .slice (0, 3); // Limit to 3 most recent projects;
      setActiveProjects (active);
    }
  }, [projects, is_loading]);
  // Check condition
if ( {) {
  $2
}
    return (
      <Card>;
        <CardHeader>;
          <CardTitle className='flex items - center gap - 2'>;
            <BriefcaseIcon className='h - 5 w - 5 text - primary' />            <span > Active Projects</span>          <CardTitle className="flex items - center gap - 2">;
            <BriefcaseIcon className="h - 5 w - 5 text - primary" />;
            <span > Active Projects</span>;
          </CardTitle>;
          <CardDescription > Your ongoing work</CardDescription>;
        </CardHeader>;
        <CardContent>;
          <div className='space - y-2'>;
            {[1, 2].map (idx => (
              <div;
                key={idx}
                className='h - 16 animate - pulse bg - muted rounded';
              ></div>            ))}
          </div>;
        </CardContent>;
      </Card>);
  }          <div className="space - y-2">;
            {[1, 2].map (idx => (
              <div key={idx} className="h - 16 animate - pulse bg - muted rounded"></div>))}
          </div>;
        </CardContent>;
      </Card>);
  }
    );
  }
  // Check condition
if ( {) {
  $2
}
    return (
      <Card>;
        <CardHeader>;
          <CardTitle className='flex items - center gap - 2'>;
            <BriefcaseIcon className='h - 5 w - 5 text - primary' />            <span > Active Projects</span>;
          </CardTitle>;
          <CardDescription > Your ongoing work</CardDescription>;
        </CardHeader>          <CardTitle className="flex items - center gap - 2">;
            <BriefcaseIcon className="h - 5 w - 5 text - primary" />;
            <span > Active Projects</span>;
          </CardTitle>;
          <CardDescription > Your ongoing work</CardDescription>;
        </CardHeader>;
        <CardContent className='text - center py - 6'>;
          <p className='text - muted - foreground mb - 2'>;
            You don't have any active projects at the moment.;
          </p>;
          <Button variant='outline' as_child>;
            <Link href='/jobs'>Find Opportunities</Link>          </Button>        <CardContent className="text - center py - 6">;
          <p className="text - muted - foreground mb - 2">You don't have any active projects at the moment.</p>;
          <Button variant="outline" as_child>;
            <Link href="/jobs">Find Opportunities</Link>;
        </CardContent>;
      </Card>);
  }
  return (
    <Card>;
      <CardHeader>;
        <CardTitle className='flex items - center gap - 2'>;
          <BriefcaseIcon className='h - 5 w - 5 text - primary' />          <span > Active Projects</span>;
        </CardTitle>;
        <CardDescription > Your ongoing work</CardDescription>;
      </CardHeader>;
      <CardContent className='space - y-4'>;
  return (
    <Card>;
      <CardHeader>;
        <CardTitle className="flex items - center gap - 2">;
          <BriefcaseIcon className="h - 5 w - 5 text - primary" />;
        </CardTitle>;
        <CardDescription > Your ongoing work</CardDescription>;
      </CardHeader>;
      <CardContent className='space - y-4'>;
        {active_projects.map (project => (
          <div key={project.id} className='border rounded - md p - 3'>;
            <div className='flex justify - between items - start mb - 2'>;
              <h3 className='font - medium text - sm'>{project.job?.title}</h3>;
              <Badge;
                variant={
                  project.status === 'in_progress' ? 'default' : 'outline';
                }
                className={
                  project.status === 'in_progress';
                    ? 'bg - blue - 100 text - blue - 800 hover:bg - blue - 100';
                    : '';
                }          <div key={project.id} className="border rounded - md p - 3">;
            <div className="flex justify - between items - start mb - 2">;
              <h3 className="font - medium text - sm">{project.job?.title}</h3>;
              <Badge;
                variant = {project.status === "in_progress" ? "default" : "outline", }
                class_name = {project.status === "in_progress" ? "bg - blue - 100 text - blue - 800 hover:bg - blue - 100" : "", }
              >;
                {project.status === 'offer_accepted';
                  ? 'Starting';
                  : 'In Progress'}
              </Badge>;
            </div>;
            <div className='flex items - center text - xs text - muted - foreground gap - 2'>;
              <Clock className='h - 3 w - 3' />;
              <span>;
                Started {new Date (project.start_date).toLocaleDateString ()}
              </span>;
            </div>;
            <Button size='sm' variant='outline' className='w - full mt - 2' as_child>              <Link href={`/project/${project.id}`}>View Project</Link>            <Button size="sm" variant="outline" className="w - full mt - 2" as_child>;
              <Link href={`/project/${project.id}`}>View Project</Link>;
            </Button>;
          </div>))}

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
      </CardContent>;
      {activeProjects.length > 2 && (;
        <CardFooter>;
          <Button variant="ghost" className="w-full" asChild>;
            <Link href="/projects">View All Projects</Link>;
          </Button>;
        </CardFooter>;
      )}
    </Card>;
  );
}
<<<<<<< HEAD

<<<<<<< HEAD
;


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
