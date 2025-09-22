
import { useEffect, useState } from "react",
import Link from "next/link",
import { BriefcaseIcon, Clock } from 'lucide-react'
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { useProjects } from "@/hooks/useProjects",
import { Project } from "@/types/projects",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { useProjects } from "@/hooks/useProjects",
import { Project } from "@/types/projects",
export function ActiveProjectsCard() {
  const { projects, isLoading } = useProjects(),
  const [activeProjects, setActiveProjects] = useState<Project[]>([]),
  useEffect(() => {
    if (projects && !isLoading) {

export function ActiveProjectsCard() {};
  const { projects, isLoading } = useProjects();
  const [activeProjects, setActiveProjects] = useState<Project[]>([]),

  useEffect(() => {}
    if (projects && !isLoading) {}
      const active = projects.filter(p => 
        ['offer_acceptedin_progress'].includes(p.status)
      ).slice(0, 3), // Limit to 3 most recent projects;
      setActiveProjects(active)
    }
  }, [projects, isLoading]),

  if (isLoading) {
return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
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

    return (
            <BriefcaseIcon className="h-5 w-5 text-primary" />"
  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BriefcaseIcon className="h-5 w-5 text-primary" />
      <Card>
        <CardHeader>
<CardTitle className='flex items-center gap-2'>
            <BriefcaseIcon className='h-5 w-5 text-primary' />
origin/cursor/automate-test-improve-and-merge-code-2533
            <span>Active Projects</span>
          </CardTitle>
          <CardDescription>Your ongoing work</CardDescription>
        </CardHeader>
<CardContent>
          <div className="space-y-2">
            {[1, 2].map(idx => (
                className='h-16 animate-pulse bg-muted rounded'></div>            ))}
          <div className="space-y-2">"
                className='h-16 animate-pulse bg-muted rounded'></div>            ))}'
          </div>;
        </CardContent>;
      </Card>;
    );"
  }          <div className="space-y-2">;
            {[1, 2].map(idx => (

              <div key={idx} className="h-16 animate-pulse bg-muted rounded"></div>"
          <div className="space-y-2">
            {[1, 2].map(idx => (
              <div key={idx} className="h-16 animate-pulse bg-muted rounded"></div>
import { useEffect, useState } from "react",;
import Link from "next/link",;
import { BriefcaseIcon, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { useProjects } from "@/hooks/useProjects",;
"
              <div key={idx} className="h-16 animate-pulse bg-muted rounded"></div>"
import { useEffect, useState } from "react",;"
import Link from "next/link",;'
import { BriefcaseIcon, Clock } from 'lucide-react';"
import { Button } from "@/components/ui/button",;"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;"
import { Badge } from "@/components/ui/badge",;"
import { useProjects } from "@/hooks/useProjects",;"
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
);
  }
  }
    );
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
origin/cursor/automate-test-improve-and-merge-code-2533
  }
}

  if (activeProjects.length === 0) {}
    return (
      <Card>
        <CardHeader>

          <CardTitle className="flex items-center gap-2">


"
  }
  if (activeProjects.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">"
            <BriefcaseIcon className="h-5 w-5 text-primary" />"
          <CardTitle className="flex items-center gap-2">
            <BriefcaseIcon className="h-5 w-5 text-primary" />
<CardTitle className='flex items-center gap-2'>
            <BriefcaseIcon className='h-5 w-5 text-primary' />
origin/cursor/automate-test-improve-and-merge-code-2533
            <span>Active Projects</span>
          </CardTitle>
          <CardDescription>Your ongoing work</CardDescription>
        </CardHeader>

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


          </p>;
          <Button variant='outline' asChild>;
            <Link href='/jobs' />Find Opportunities</Link>          </Button>        <CardContent className="text-center py-6">;
          <p className="text-muted-foreground mb-2">You don't have any active projects at the moment.</p>;
          <Button variant="outline" asChild>;
            <Link href="/jobs" />Find Opportunities</Link>;
        </CardContent>;
      </Card>;
    );
        <CardContent className="text-center py-6">"
          <p className="text-muted-foreground mb-2">You don't have any active projects at the moment.</p>'
          <Button variant="outline" asChild>"
            <Link href="/jobs" />Find Opportunities</Link>"
        <CardContent className="text-center py-6">
          <p className="text-muted-foreground mb-2">You don't have any active projects at the moment.</p>
          <Button variant="outline" asChild>
"
        <CardContent className="text-center py-6">'"
          <p className="text-muted-foreground mb-2">You don't have any active projects at the moment.</p>"
          <Button variant="outline" asChild>"
            <Link href="/jobs">Find Opportunities</Link>
          </Button>

origin/cursor/automate-test-improve-and-merge-code-2533
        </CardContent>
      </Card>
    )
  }

  return (

  return (
  }
  return (

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
    <Card>
      <CardHeader>"
        <CardTitle className="flex items-center gap-2">"
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
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">"
          <BriefcaseIcon className="h-5 w-5 text-primary" />"
        </CardTitle>
        <CardDescription>Your ongoing work</CardDescription>
      </CardHeader>
      <CardContent className='space-y-4'>'
      <CardContent className='space-y-4'>
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
origin/cursor/automate-test-improve-and-merge-code-2533
        {activeProjects.map(project => (
<div key={project.id} className='border rounded-md p-3'>
            <div className='flex justify-between items-start mb-2'>
              <h3 className='font-medium text-sm'>{project.job?.title}</h3>
              <Badge
                variant={

                  project.status === 'in_progress' ? 'default' : 'outline'
                }
                className={'
                  project.status === 'in_progress''
                    ? 'bg-blue-100 text-blue-800 hover:bg-blue-100''
                    : ''

                  : 'In Progress'}

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

              </Badge>
            </div>
            <div className='flex items-center text-xs text-muted-foreground gap-2'>
              <Clock className='h-3 w-3' />
              <span>
                Started {new Date(project.start_date).toLocaleDateString()}
              </span>
            </div>
            <Button size='sm' variant='outline' className='w-full mt-2' asChild>
              <Link href={`/project/${project.id}`}>View Project</Link>
            </Button>
          </div>
        ))}
}
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { BriefcaseIcon, Clock } from 'lucide-react';
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
<CardHeader>;
          <CardTitle className='flex items - center gap - 2'>;
            <BriefcaseIcon className='h - 5 w - 5 text - primary' />            <span > Active Projects</span>          <CardTitle className="flex items - center gap-2">;
            <BriefcaseIcon className="h - 5 w - 5 text-primary" />;
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
</Card>);
}          <div className="space-y-2">;
            {[1, 2].map (idx => (
              <div key={idx} className="h - 16 animate - pulse bg-muted rounded"></div>))}
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
<CardDescription > Your ongoing work</CardDescription>;
        </CardHeader>          <CardTitle className="flex items - center gap-2">;
            <BriefcaseIcon className="h - 5 w - 5 text-primary" />;
            <span > Active Projects</span>;
          </CardTitle>;
          <CardDescription > Your ongoing work</CardDescription>;
        </CardHeader>;'
        <CardContent className='text - center py - 6'>;'
          <p className='text - muted - foreground mb - 2'>;'
            You don't have any active projects at the moment.;
</p>;
          <Button variant='outline' as_child>;
<Link href='/jobs'>Find Opportunities</Link>          </Button>        <CardContent className="text - center py-6">;
          <p className="text - muted - foreground mb-2">You don't have any active projects at the moment.</p>;
          <Button variant="outline" as_child>;
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
<CardHeader>;
        <CardTitle className="flex items - center gap-2">;
          <BriefcaseIcon className="h - 5 w - 5 text-primary" />;
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
className={
                  project.status === 'in_progress';
                    ? 'bg - blue - 100 text - blue - 800 hover:bg - blue - 100';
                    : '';
                }          <div key={project.id} className="border rounded - md p-3">;
            <div className="flex justify - between items - start mb-2">;
              <h3 className="font - medium text-sm">{project.job?.title}</h3>;
              <Badge;
variant = {project.status === "in_progress" ? "default" : "outline", }
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
</div>;
<Button size='sm' variant='outline' className='w - full mt - 2' as_child>              <Link href={`/project/${project.id}`}>View Project</Link>            <Button size="sm" variant="outline" className="w - full mt-2" as_child>;
              <Link href={`/project/${project.id}`}>View Project</Link>;
            </Button>;
          </div>))}
      </CardContent>;
      {activeProjects.length > 2 && (;
        <CardFooter>;
          <Button variant="ghost" className="w-full" asChild>;
            <Link href="/projects" />View All Projects</Link>;
          </Button>;
        </CardFooter>;
      )}
    </Card>;
  );
}
;
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
              <Link href={`/project/${project.id}`}>View Project</Link>
            </Button>
          </div>
        ))}
      </CardContent>;
{active_projects.length > 2 && (
        <CardFooter>;
          <Button variant='ghost' className='w - full' as_child>;
            <Link href='/projects'>View All Projects</Link>          </Button>          <Button variant="ghost" className="w-full" as_child>;
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
;
origin/cursor/automate-test-improve-and-merge-code-2533
export function ActiveProjectsCard() {
  const { projects, isLoading } = useProjects();
  const [activeProjects, setActiveProjects] = useState<Project[]>([]),

  const [activeProjects, setActiveProjects] = useState<Project[]>([]);

            <BriefcaseIcon className="h-5 w-5 text-primary" />"

            <span>Active Projects</span>
          <CardDescription>Your ongoing work
        <CardContent>
"
          <div className="space-y-2">"
</div>"
                className='h-16 animate-pulse bg-muted rounded'></div>            ))}
          </div>;
        ;
  }          <div className="space-y-2">;"
              <div key={idx} className="h-16 animate-pulse bg-muted rounded"></div>"

      <Card>;

        <CardHeader>;
          <CardTitle className="flex items-center gap-2">;"
            <BriefcaseIcon className="h-5 w-5 text-primary" />;"

            <span>Active Projects</span>;
          <CardDescription>Your ongoing work;
        <CardContent>;
          <div className="space-y-2">;"
              <div key={idx} className="h-16 animate-pulse bg-muted rounded"></div>;"
      <Card>

        <CardHeader>

          <CardTitle className="flex items-center gap-2">"

          <CardTitle className='flex items-center gap-2'>;

            <BriefcaseIcon className='h-5 w-5 text-primary' />            <span>Active Projects</span>;

        ;"
        <CardContent className='text-center py-6'>;

          <p className='text-muted-foreground mb-2'>;
</p>
          </p>;
          <Button variant='outline' asChild>;

            <Link href='/jobs'>Find Opportunities                  <CardContent className="text-center py-6">;""
          <p className="text-muted-foreground mb-2">You don't have any active projects at the moment.</p>;
          <Button variant="outline" asChild>;"
            <Link href="/jobs">Find Opportunities;"
        <CardContent className="text-center py-6">"
          <p className="text-muted-foreground mb-2">You don't have any active projects at the moment.</p>
          <Button variant="outline" asChild>"
            <Link href="/jobs">Find Opportunities"

          <BriefcaseIcon className='h-5 w-5 text-primary' />          <span>Active Projects</span>;

      <CardContent className='space-y-4'>  ;

      <CardContent className='space-y-4'>

          <div key={project.id} className='border rounded-md p-3'>
</div>
            <div className='flex justify-between items-start mb-2'>
              <h3 className='font-medium text-sm'>{project.job?.title}</h3>
              <Badge;
                variant={
                  project.status === 'in_progress' ? 'default' : 'outline
                }
                className={
                  project.status === 'in_progress
                    ? 'bg-blue-100 text-blue-800 hover:bg-blue-100
                    : 
                  : 'In Progress'}
            <div className='flex items-center text-xs text-muted-foreground gap-2'>;
              <Clock className='h-3 w-3' />;

              <span>;
</span>
              </span>;
            <Button size='sm' variant='outline' className='w-full mt-2' asChild>              <Link href={`/project/${project && project.id}`}>View Project            <Button size="sm" variant="outline" className="w-full mt-2" asChild>;"
`;
              <Link href={`/project/${project && project.id}`}>View Project;
        <CardFooter>;
          <Button variant='ghost' className='w-full' asChild>;

            <Link href='/projects'>View All Projects                    <Button variant="ghost" className="w-full" asChild>;""
            <Link href="/projects">View All Projects;"
        ;`;
              <Link href={`/project/${project.id}`}>View Project
  const [active_projects, setActiveProjects] = useState < Project[]>([]);
  useEffect (() => {    // Check condition;
if ( {) {
  $2;
      const active = projects;"
        .filter (p => ['offer_accepted', 'in_progress'].includes (p.status));
        .slice (0, 3); // Limit to 3 most recent projects;
      setActiveProjects (active);
  }, [projects, is_loading]);
  // Check condition;
    return (

          <CardTitle className='flex items - center gap - 2'>;

            <BriefcaseIcon className='h - 5 w - 5 text - primary' />            <span > Active Projects</span>          <CardTitle className="flex items - center gap - 2">;"
            <BriefcaseIcon className="h - 5 w - 5 text - primary" />;"

            <span > Active Projects</span>;
          <CardDescription > Your ongoing work;
          <div className='space - y-2'>;
              <div;
                key={idx}
                className='h - 16 animate - pulse bg - muted rounded';')
              ></div>            ))}
      );
  }          <div className="space - y-2">;"
              <div key={idx} className="h - 16 animate - pulse bg - muted rounded"></div>))}"

            <BriefcaseIcon className='h - 5 w - 5 text - primary' />            <span > Active Projects</span>;

                  <CardTitle className="flex items - center gap - 2">;"

        <CardContent className='text - center py - 6'>;

          <p className='text - muted - foreground mb - 2'>;
          <Button variant='outline' as_child>;

            <Link href='/jobs'>Find Opportunities                  <CardContent className="text - center py - 6">;""
          <p className="text - muted - foreground mb - 2">You don't have any active projects at the moment.</p>;
          <Button variant="outline" as_child>;"

          <BriefcaseIcon className='h - 5 w - 5 text - primary' />          <span > Active Projects</span>;

      <CardContent className='space - y-4'>;

          <div key={project.id} className='border rounded - md p - 3'>;
            <div className='flex justify - between items - start mb - 2'>;
              <h3 className='font - medium text - sm'>{project.job?.title}</h3>;
                  project.status === 'in_progress' ? 'default' : 'outline';
                  project.status === 'in_progress';
                    ? 'bg - blue - 100 text - blue - 800 hover:bg - blue - 100';
                    : ;
                }          <div key={project.id} className="border rounded - md p - 3">;"
            <div className="flex justify - between items - start mb - 2">;"
              <h3 className="font - medium text - sm">{project.job?.title}</h3>;"
              <Badge;"
                variant = {project.status === "in_progress" ? "default" : "outline", }""
                class_name = {project.status === "in_progress" ? "bg - blue - 100 text - blue - 800 hover:bg - blue - 100" : "", }"
              >;

            </div>;"
            <div className='flex items - center text - xs text - muted - foreground gap - 2'>;
              <Clock className='h - 3 w - 3' />;

            </div>;`;
            <Button size='sm' variant='outline' className='w - full mt - 2' as_child>              <Link href={`/project/${project.id}`}>View Project            <Button size="sm" variant="outline" className="w - full mt - 2" as_child>;"
              <Link href={`/project/${project.id}`}>View Project;
          </div>))}
          <Button variant="ghost" className="w-full" asChild>;"
    ;"`;
pr-12325
