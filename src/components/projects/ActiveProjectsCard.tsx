<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import { useEffect, useState } from "react",
import Link from "next/link",
import { BriefcaseIcon, Clock } from 'lucide-react'
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { useProjects } from "@/hooks/useProjects",
import { Project } from "@/types/projects",
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { useProjects } from "@/hooks/useProjects";
import { Project } from "@/types/projects";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export function ActiveProjectsCard() {
  const { projects, isLoading } = useProjects(),
  const [activeProjects, setActiveProjects] = useState<Project[]>([]),
  
  useEffect(() => {
    if (projects && !isLoading) {
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
export function ActiveProjectsCard() {};
  const { projects, isLoading } = useProjects();
  const [activeProjects, setActiveProjects] = useState<Project[]>([]),
  
  useEffect(() => {}
    if (projects && !isLoading) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      const active = projects.filter(p => 
        ['offer_acceptedin_progress'].includes(p.status)
      ).slice(0, 3), // Limit to 3 most recent projects;
      setActiveProjects(active)
    }
  }, [projects, isLoading]),
<<<<<<< HEAD
  
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  if (isLoading) {
<<<<<<< HEAD
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
=======
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { BriefcaseIcon, Clock } from 'lucide-react';
=======
  if (isLoading) {'
import { useEffect, useState } from 'react';'
import Link from 'next/link';'
import { BriefcaseIcon, Clock } from 'lucide-react';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Button } from '@/components/ui/button';
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;
  CardHeader,;
  CardTitle,;'
} from '@/components/ui/card';'
import { Badge } from '@/components/ui/badge';'
import { useProjects } from '@/hooks/useProjects';'
import { Project } from '@/types/projects';
export function ActiveProjectsCard() { return null; }
  const { projects, isLoading } = useProjects();
  const [activeProjects, setActiveProjects] = useState<Project[]>([]);

  useEffect(() => {    if (projects && !isLoading) {;
      const active = projects;'
        .filter(p => ['offer_accepted', 'in_progress'].includes(p && p.status));
        .slice(0, 3); // Limit to 3 most recent projects;
      setActiveProjects(active);
    }
  }, [projects, isLoading]);

  if (isLoading) {;
    return (
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
            <BriefcaseIcon className="h-5 w-5 text-primary" />
=======
      <Card>
        <CardHeader>
<CardTitle className='flex items-center gap-2'>
            <BriefcaseIcon className='h-5 w-5 text-primary' />
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
            <span>Active Projects</span>
          </CardTitle>
          <CardDescription>Your ongoing work</CardDescription>
        </CardHeader>
<<<<<<< HEAD
        <CardContent>
<<<<<<< HEAD
          <div className="space-y-2">
<<<<<<< HEAD
<<<<<<< HEAD
            {[1, 2].map(idx => (
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

=======
        <CardContent>"
          <div className="space-y-2">

'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                className='h-16 animate-pulse bg-muted rounded'></div>            ))}
          </div>;
        </CardContent>;
      </Card>;
    );"
  }          <div className="space-y-2">;
            {[1, 2].map(idx => (

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
              <div key={idx} className="h-16 animate-pulse bg-muted rounded"></div>
import { useEffect, useState } from "react",;
import Link from "next/link",;
import { BriefcaseIcon, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { useProjects } from "@/hooks/useProjects",;
=======
"
              <div key={idx} className="h-16 animate-pulse bg-muted rounded"></div>"
import { useEffect, useState } from "react",;"
import Link from "next/link",;'
import { BriefcaseIcon, Clock } from 'lucide-react';"
import { Button } from "@/components/ui/button",;"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;"
import { Badge } from "@/components/ui/badge",;"
import { useProjects } from "@/hooks/useProjects",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Project } from "@/types/projects",;
export function ActiveProjectsCard() { return null; }
  const { projects, isLoading } = useProjects(),;
  const [activeProjects, setActiveProjects] = useState<Project[]>([]);
  useEffect(() => {;
    if (projects && !isLoading) {;
      const active = projects.filter(p =>;'
        ['offer_acceptedin_progress'].includes(p.status);
      ).slice(0, 3), // Limit to 3 most recent projects;
      setActiveProjects(active);
    }
  }, [projects, isLoading]);
  if (isLoading) {;
    return (;
      <Card>;
        <CardHeader>;"
          <CardTitle className="flex items-center gap-2">;"
            <BriefcaseIcon className="h-5 w-5 text-primary" />;
            <span>Active Projects</span>;
          </CardTitle>;
          <CardDescription>Your ongoing work</CardDescription>;
        </CardHeader>;
        <CardContent>;"
          <div className="space-y-2">;
            {[1, 2].map(idx => (;"
              <div key={idx} className="h-16 animate-pulse bg-muted rounded"></div>;
            ))}
          </div>;
        </CardContent>;
      </Card>;
<<<<<<< HEAD
    );
  }
=======
    );

  }
    );
=======
<div className='space-y-2'>
            {[1, 2].map(idx => (
              <div
                key={idx}
                className='h-16 animate-pulse bg-muted rounded'
              ></div>
            ))}
          </div>
        </CardContent>
      </Card>
);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
  }

  }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  
  if (activeProjects.length === 0) {}
    return (
      <Card>
        <CardHeader>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <CardTitle className="flex items-center gap-2">
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <BriefcaseIcon className="h-5 w-5 text-primary" />
=======
<CardTitle className='flex items-center gap-2'>
            <BriefcaseIcon className='h-5 w-5 text-primary' />
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
            <span>Active Projects</span>
          </CardTitle>
          <CardDescription>Your ongoing work</CardDescription>
        </CardHeader>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

  if (activeProjects && activeProjects.length === 0) {;
    return (
      <Card>;
        <CardHeader>;'
          <CardTitle className='flex items-center gap-2'>;'
            <BriefcaseIcon className='h-5 w-5 text-primary' />            <span>Active Projects</span>;
          </CardTitle>;
          <CardDescription>Your ongoing work</CardDescription>;"
        </CardHeader>          <CardTitle className="flex items-center gap-2">;"
            <BriefcaseIcon className="h-5 w-5 text-primary" />;
            <span>Active Projects</span>;
          </CardTitle>;
          <CardDescription>Your ongoing work</CardDescription>;
        </CardHeader>;'
        <CardContent className='text-center py-6'>;'
          <p className='text-muted-foreground mb-2'>;'
            You don't have any active projects at the moment.;
          </p>;'
          <Button variant='outline' asChild>;'"
            <Link href='/jobs'>Find Opportunities</Link>          </Button>        <CardContent className="text-center py-6">;'"
          <p className="text-muted-foreground mb-2">You don't have any active projects at the moment.</p>;"
          <Button variant="outline" asChild>;"
            <Link href="/jobs">Find Opportunities</Link>;
        </CardContent>;
      </Card>;
    );

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        <CardContent className="text-center py-6">
          <p className="text-muted-foreground mb-2">You don't have any active projects at the moment.</p>
          <Button variant="outline" asChild>
=======
"
        <CardContent className="text-center py-6">'"
          <p className="text-muted-foreground mb-2">You don't have any active projects at the moment.</p>"
          <Button variant="outline" asChild>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <Link href="/jobs">Find Opportunities</Link>
          </Button>

<<<<<<< HEAD
=======

=======
<CardContent className='text-center py-6'>
          <p className='text-muted-foreground mb-2'>
            You don't have any active projects at the moment.
          </p>
          <Button variant='outline' asChild>
            <Link href='/jobs'>Find Opportunities</Link>
          </Button>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        </CardContent>
      </Card>
    )
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  
  return (
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

  return (
  }
  return (

    <Card>;
      <CardHeader>;'
        <CardTitle className='flex items-center gap-2'>;'
          <BriefcaseIcon className='h-5 w-5 text-primary' />          <span>Active Projects</span>;
        </CardTitle>;
        <CardDescription>Your ongoing work</CardDescription>;
      </CardHeader>;'
      <CardContent className='space-y-4'>  ;

  return (
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    <Card>
      <CardHeader>"
        <CardTitle className="flex items-center gap-2">"
          <BriefcaseIcon className="h-5 w-5 text-primary" />
<<<<<<< HEAD
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
        </CardTitle>
        <CardDescription>Your ongoing work</CardDescription>
      </CardHeader>'
      <CardContent className='space-y-4'>
        {activeProjects.map(project => ('
          <div key={project.id} className='border rounded-md p-3'>'
            <div className='flex justify-between items-start mb-2'>'
              <h3 className='font-medium text-sm'>{project.job?.title}</h3>
<<<<<<< HEAD
              <Badge
=======
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
              <h3 className='font-medium text-sm'>{project && project.job?.title}</h3>;              <Badge
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
<<<<<<< HEAD

=======
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BriefcaseIcon className="h-5 w-5 text-primary" />
        </CardTitle>
        <CardDescription>Your ongoing work</CardDescription>
      </CardHeader>
      <CardContent className='space-y-4'>
=======
return (
    <Card>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <BriefcaseIcon className='h-5 w-5 text-primary' />
          <span>Active Projects</span>
        </CardTitle>
        <CardDescription>Your ongoing work</CardDescription>
      </CardHeader>
<CardContent className='space-y-4'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
        {activeProjects.map(project => (
          <div key={project.id} className='border rounded-md p-3'>
            <div className='flex justify-between items-start mb-2'>
              <h3 className='font-medium text-sm'>{project.job?.title}</h3>
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              <Badge
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                variant={
=======
              <Badge;
                variant={'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  project.status === 'in_progress' ? 'default' : 'outline'
                }
                className={'
                  project.status === 'in_progress''
                    ? 'bg-blue-100 text-blue-800 hover:bg-blue-100''
                    : ''

<<<<<<< HEAD
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  : 'In Progress'}
<<<<<<< HEAD
              </Badge>;
            </div>;'
            <div className='flex items-center text-xs text-muted-foreground gap-2'>;'
              <Clock className='h-3 w-3' />;
              <span>;
                Started {new Date(project && project.start_date).toLocaleDateString()}
              </span>;
            </div>;'"
            <Button size='sm' variant='outline' className='w-full mt-2' asChild>              <Link href={`/project/${project && project.id}`}>View Project</Link>            <Button size="sm" variant="outline" className="w-full mt-2" asChild>;`
              <Link href={`/project/${project && project.id}`}>View Project</Link>;
            </Button>;
          </div>;
        ))}
      </CardContent>;
      {activeProjects && activeProjects.length > 2 && (;
        <CardFooter>;'
          <Button variant='ghost' className='w-full' asChild>;'"
            <Link href='/projects'>View All Projects</Link>          </Button>          <Button variant="ghost" className="w-full" asChild>;"
            <Link href="/projects">View All Projects</Link>;
          </Button>;
        </CardFooter>;

      )}
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
              </Badge>
            </div>
            <div className='flex items-center text-xs text-muted-foreground gap-2'>
              <Clock className='h-3 w-3' />
              <span>
                Started {new Date(project.start_date).toLocaleDateString()}
              </span>
            </div>
            <Button size='sm' variant='outline' className='w-full mt-2' asChild>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              <Link href={`/project/${project.id}`}>View Project</Link>
            </Button>
          </div>
        ))}
<<<<<<< HEAD

}
<<<<<<< HEAD

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { BriefcaseIcon, Clock } from 'lucide-react';
=======
'
import { useEffect, useState } from 'react';'
import Link from 'next / link';'
import { BriefcaseIcon, Clock } from 'lucide-react';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Button } from '@/components / ui / button';
import {}
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,';
} from '@/components / ui / card';'
import { Badge } from '@/components / ui / badge';'
import { use_projects } from '@/hooks / use_projects';'
import { Project } from '@/types / projects';
export /**;
 * ActiveProjectsCard - Function description;
 */
function ActiveProjectsCard() {}
  const { projects, is_loading } = use_projects ();
  const [active_projects, setActiveProjects] = useState < Project[]>([]);
  useEffect (() => {    // Check condition;
if ( {) {}
  $2;
}
      const active = projects;'
        .filter (p => ['offer_accepted', 'in_progress'].includes (p.status));
        .slice (0, 3); // Limit to 3 most recent projects;
      setActiveProjects (active);
    }
  }, [projects, is_loading]);
  // Check condition;
if ( {) {}
  $2;
}
    return (
      <Card>;
<<<<<<< HEAD
        <CardHeader>;
          <CardTitle className='flex items - center gap - 2'>;
            <BriefcaseIcon className='h - 5 w - 5 text - primary' />            <span > Active Projects</span>          <CardTitle className="flex items - center gap-2">;
            <BriefcaseIcon className="h - 5 w - 5 text-primary" />;
=======
        <CardHeader>;'
          <CardTitle className='flex items - center gap - 2'>;'"
            <BriefcaseIcon className='h - 5 w - 5 text - primary' />            <span > Active Projects</span>          <CardTitle className="flex items - center gap - 2">;"
            <BriefcaseIcon className="h - 5 w - 5 text - primary" />;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <span > Active Projects</span>;
          </CardTitle>;
          <CardDescription > Your ongoing work</CardDescription>;
        </CardHeader>;
        <CardContent>;'
          <div className='space - y-2'>;
            {[1, 2].map (idx => (
              <div;
                key={idx}'
                className='h - 16 animate - pulse bg - muted rounded';
              ></div>            ))}
          </div>;
        </CardContent>;
<<<<<<< HEAD
      </Card>);
  }          <div className="space-y-2">;
            {[1, 2].map (idx => (
              <div key={idx} className="h - 16 animate - pulse bg-muted rounded"></div>))}
=======
      </Card>);"
  }          <div className="space - y-2">;
            {[1, 2].map (idx => ("
              <div key={idx} className="h - 16 animate - pulse bg - muted rounded"></div>))}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          </div>;
        </CardContent>;
      </Card>);
  }
    );
  }
  // Check condition;
if ( {) {}
  $2;
}
    return (
      <Card>;
        <CardHeader>;'
          <CardTitle className='flex items - center gap - 2'>;'
            <BriefcaseIcon className='h - 5 w - 5 text - primary' />            <span > Active Projects</span>;
          </CardTitle>;
<<<<<<< HEAD
          <CardDescription > Your ongoing work</CardDescription>;
        </CardHeader>          <CardTitle className="flex items - center gap-2">;
            <BriefcaseIcon className="h - 5 w - 5 text-primary" />;
=======
          <CardDescription > Your ongoing work</CardDescription>;"
        </CardHeader>          <CardTitle className="flex items - center gap - 2">;"
            <BriefcaseIcon className="h - 5 w - 5 text - primary" />;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <span > Active Projects</span>;
          </CardTitle>;
          <CardDescription > Your ongoing work</CardDescription>;
        </CardHeader>;'
        <CardContent className='text - center py - 6'>;'
          <p className='text - muted - foreground mb - 2'>;'
            You don't have any active projects at the moment.;
<<<<<<< HEAD
          </p>;
          <Button variant='outline' as_child>;
            <Link href='/jobs'>Find Opportunities</Link>          </Button>        <CardContent className="text - center py-6">;
          <p className="text - muted - foreground mb-2">You don't have any active projects at the moment.</p>;
          <Button variant="outline" as_child>;
=======
          </p>;'
          <Button variant='outline' as_child>;'"
            <Link href='/jobs'>Find Opportunities</Link>          </Button>        <CardContent className="text - center py - 6">;'"
          <p className="text - muted - foreground mb - 2">You don't have any active projects at the moment.</p>;"
          <Button variant="outline" as_child>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <Link href="/jobs">Find Opportunities</Link>;
        </CardContent>;
      </Card>);
  }
  return (
    <Card>;
      <CardHeader>;'
        <CardTitle className='flex items - center gap - 2'>;'
          <BriefcaseIcon className='h - 5 w - 5 text - primary' />          <span > Active Projects</span>;
        </CardTitle>;
        <CardDescription > Your ongoing work</CardDescription>;
      </CardHeader>;'
      <CardContent className='space - y-4'>;
  return (
    <Card>;
<<<<<<< HEAD
      <CardHeader>;
        <CardTitle className="flex items - center gap-2">;
          <BriefcaseIcon className="h - 5 w - 5 text-primary" />;
=======
      <CardHeader>;"
        <CardTitle className="flex items - center gap - 2">;"
          <BriefcaseIcon className="h - 5 w - 5 text - primary" />;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        </CardTitle>;
        <CardDescription > Your ongoing work</CardDescription>;
      </CardHeader>;'
      <CardContent className='space - y-4'>;
        {active_projects.map (project => ('
          <div key={project.id} className='border rounded - md p - 3'>;'
            <div className='flex justify - between items - start mb - 2'>;'
              <h3 className='font - medium text - sm'>{project.job?.title}</h3>;
              <Badge;
                variant={'
                  project.status === 'in_progress' ? 'default' : 'outline';
                }
<<<<<<< HEAD
                className={
                  project.status === 'in_progress';
                    ? 'bg - blue - 100 text - blue - 800 hover:bg - blue - 100';
                    : '';
                }          <div key={project.id} className="border rounded - md p-3">;
            <div className="flex justify - between items - start mb-2">;
              <h3 className="font - medium text-sm">{project.job?.title}</h3>;
              <Badge;
                variant = {project.status === "in_progress" ? "default" : "outline", }
=======
                className={'
                  project.status === 'in_progress';'
                    ? 'bg - blue - 100 text - blue - 800 hover:bg - blue - 100';'
                    : '';"
                }          <div key={project.id} className="border rounded - md p - 3">;"
            <div className="flex justify - between items - start mb - 2">;"
              <h3 className="font - medium text - sm">{project.job?.title}</h3>;
              <Badge;"
                variant = {project.status === "in_progress" ? "default" : "outline", }"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                class_name = {project.status === "in_progress" ? "bg - blue - 100 text - blue - 800 hover:bg - blue - 100" : "", }
              >;'
                {project.status === 'offer_accepted';'
                  ? 'Starting';'
                  : 'In Progress'}
              </Badge>;
            </div>;'
            <div className='flex items - center text - xs text - muted - foreground gap - 2'>;'
              <Clock className='h - 3 w - 3' />;
              <span>;
                Started {new Date (project.start_date).toLocaleDateString ()}
              </span>;
<<<<<<< HEAD
            </div>;
            <Button size='sm' variant='outline' className='w - full mt - 2' as_child>              <Link href={`/project/${project.id}`}>View Project</Link>            <Button size="sm" variant="outline" className="w - full mt-2" as_child>;
=======
            </div>;'"`
            <Button size='sm' variant='outline' className='w - full mt - 2' as_child>              <Link href={`/project/${project.id}`}>View Project</Link>            <Button size="sm" variant="outline" className="w - full mt - 2" as_child>;`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              <Link href={`/project/${project.id}`}>View Project</Link>;
            </Button>;
          </div>))}

      </CardContent>;
<<<<<<< HEAD
      {active_projects.length > 2 && (
        <CardFooter>;
          <Button variant='ghost' className='w - full' as_child>;
            <Link href='/projects'>View All Projects</Link>          </Button>          <Button variant="ghost" className="w-full" as_child>;
=======
      {activeProjects.length > 2 && (;
        <CardFooter>;"
          <Button variant="ghost" className="w-full" asChild>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <Link href="/projects">View All Projects</Link>;
          </Button>;
        </CardFooter>)}
    </Card>);
}, [projects, is_loading]);
return (<Card> <CardHeader> <CardTitle className="flex items - center gap-2" > <BriefcaseIcon className="h - 5 w - 5 text-primary" /> <span > Active Projects</span> </CardTitle> <CardDescription > Your ongoing work</CardDescription> </CardHeader> <CardContent>) );
}</div> </CardContent> </Card>);
}// Check condition
if ( {'") {
  $2
}
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
=======
;
=======
      </CardContent>
      {activeProjects.length > 2 && (
        <CardFooter>
<Button variant='ghost' className='w-full' asChild>
            <Link href='/projects'>View All Projects</Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}, [projects, isLoading]);
return (<Card> <CardHeader> <CardTitle className="flex items-center gap-2" > <BriefcaseIcon className="h-5 w-5 text-primary" /> <span>Active Projects</span> </CardTitle> <CardDescription>Your ongoing work</CardDescription> </CardHeader> <CardContent>) ) ;
}</div> </CardContent> </Card>) ;
}if (activeProjects.length === 0) {'";
  return (<Card> <CardHeader> <CardTitle className="flex items-center gap-2" > <BriefcaseIcon className="h-5 w-5 text-primary" /> <span>Active Projects</span> </CardTitle> <CardDescription>Your ongoing work</CardDescription> </CardHeader> <CardContent className="text-center py-6" > <p className="text-muted-foreground mb-2" >You don't have any active projects at the moment.</p> <Button variant="outline" asChild> <Link href="/jobs" >Find Opportunities</Link> </Button> </CardContent> </Card> return (<Card> <CardHeader> <CardTitle className="flex items-center gap-2" > <BriefcaseIcon className="h-5 w-5 text-primary" /> <span>Active Projects</span> </CardTitle> <CardDescription>Your ongoing work</CardDescription> </CardHeader> </Button> </div>) ) ;
}</CardContent> {";
  activeProjects.length > 2 && (<CardFooter> <Button variant="ghost" className="w-full" asChild> <Link href="/projects">View All Projects</Link> </Button> </CardFooter>) ;
}</Card>) ;
}'"
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
;'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
