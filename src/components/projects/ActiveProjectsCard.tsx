<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

import { useEffect, useState } from "react",
import Link from "next/link",
import { BriefcaseIcon, Clock } from 'lucide-react'
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { useProjects } from "@/hooks/useProjects",
import { Project } from "@/types/projects",
<<<<<<< HEAD
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

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { useEffect, useState } from "react",
import Link from "next/link",
import { BriefcaseIcon, Clock } from 'lucide-react'
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { useProjects } from "@/hooks/useProjects",
import { Project } from "@/types/projects",
<<<<<<< HEAD
xport function ActiveProjectsCard() {


=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export function ActiveProjectsCard() {
xport function ActiveProjectsCard() {
  const { projects, isLoading } = useProjects();
  const [activeProjects, setActiveProjects] = useState<Project[]>([]),
  
  useEffect(() => {
    if (projects && !isLoading) {
<<<<<<< HEAD
      const active = null;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      const active = projects.filter(p => 
        ['offer_acceptedin_progress'].includes(p.status)
      ).slice(0, 3), // Limit to 3 most recent projects
      setActiveProjects(active)
    }
  }, [projects, isLoading]),
  
<<<<<<< HEAD
=======
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  if (isLoading) {
    return (
      <Card>
        <CardHeader>
<<<<<<< HEAD
      const active = null;
    return (
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <BriefcaseIcon className='h-5 w-5 text-primary' />            <span>Active Projects</span>          <CardTitle className="flex items-center gap-2">
ursor/fix-website-loading-errors-and-merge-6662
  if (isLoading) {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


  if (isLoading) {
import { useEffect, useState } from 'react';
<<<<<<< HEAD
=======
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


            <BriefcaseIcon className="h-5 w-5 text-primary" />
          <CardTitle className='flex items-center gap-2'>
            <BriefcaseIcon className='h-5 w-5 text-primary' />            <span>Active Projects</span>          <CardTitle className="flex items-center gap-2">
          <CardTitle className="flex items-center gap-2">
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            <BriefcaseIcon className="h-5 w-5 text-primary" />
            <span>Active Projects</span>
          </CardTitle>
          <CardDescription>Your ongoing work</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


                className='h-16 animate-pulse bg-muted rounded'></div>            ))}
          </div>;
        </CardContent>;
      </Card>;
    );
  }          <div className="space-y-2">;
            {[1, 2].map(idx => (
<<<<<<< HEAD

=======
  }
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
=======
            {[1, 2].map(idx => (
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


  }
<<<<<<< HEAD
    );
  }




<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
=======
=======
  }
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  
  if (activeProjects.length === 0) {
    return (
      <Card>
        <CardHeader>

<<<<<<< HEAD
  }
  
  if (activeProjects.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <BriefcaseIcon className='h-5 w-5 text-primary' />            <span>Active Projects</span>
          </CardTitle>
          <CardDescription>Your ongoing work</CardDescription>
        </CardHeader>          <CardTitle className="flex items-center gap-2">
          <CardTitle className="flex items-center gap-2">
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            <BriefcaseIcon className="h-5 w-5 text-primary" />
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
=======
        </CardContent>
      </Card>
    )
  }

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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


<<<<<<< HEAD
  return (
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
  return (
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              <Badge
                variant={
                  project && project.status === 'in_progress' ? 'default' : 'outline'
                }
                className={
                  project && project.status === 'in_progress'
                    ? 'bg-blue-100 text-blue-800 hover:bg-blue-100'
                    : ''
<<<<<<< HEAD
<<<<<<< HEAD


                  : 'In Progress'}
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

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
              </Badge>
            </div>
            <div className='flex items-center text-xs text-muted-foreground gap-2'>
              <Clock className='h-3 w-3' />
              <span>
                Started {new Date(project.start_date).toLocaleDateString()}
              </span>
            </div>
            <Button size='sm' variant='outline' className='w-full mt-2' asChild>              <Link href={`/project/${project.id}`}>View Project</Link>            <Button size="sm" variant="outline" className="w-full mt-2" asChild>
  
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              <Link href={`/project/${project.id}`}>View Project</Link>
            </Button>
          </div>
        ))}
<<<<<<< HEAD
<<<<<<< HEAD
=======
            </Button>
          </div>
        ))}
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

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      </CardContent>;
      {active_projects.length > 2 && (
        <CardFooter>;
          <Button variant='ghost' className='w - full' as_child>;
            <Link href='/projects'>View All Projects</Link>          </Button>          <Button variant="ghost" className="w - full" as_child>;
            <Link href="/projects">View All Projects</Link>;
          </Button>;
        </CardFooter>)}
    </Card>);
}, [projects, is_loading]);
return (<Card> <CardHeader> <CardTitle className="flex items - center gap - 2" > <BriefcaseIcon className="h - 5 w - 5 text - primary" /> <span > Active Projects</span> </CardTitle> <CardDescription > Your ongoing work</CardDescription> </CardHeader> <CardContent>) );
}</div> </CardContent> </Card>);
}// Check condition
if ( {'") {
  $2
}
<<<<<<< HEAD
=======
;
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
