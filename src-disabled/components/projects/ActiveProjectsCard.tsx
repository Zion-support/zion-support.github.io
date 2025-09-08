<<<<<<< HEAD


=======
import { useEffect, useState } from "react",
import Link from "next/link",
import { BriefcaseIcon, Clock } from 'lucide-react'

export function ActiveProjectsCard() {
  const { projects, isLoading } = useProjects(),
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const [activeProjects, setActiveProjects] = useState<Project[]>([]),
  useEffect(() => {
    if (projects && !isLoading) {

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      const active = projects.filter(p => 
        ['offer_acceptedin_progress'].includes(p.status)
      ).slice(0, 3), // Limit to 3 most recent projects;
      setActiveProjects(active)
    }
  }, [projects, isLoading]),

<<<<<<< HEAD
  




=======
<<<<<<< HEAD
            <BriefcaseIcon className="h-5 w-5 text-primary" />
          <CardTitle className='flex items-center gap-2'>
            <BriefcaseIcon className='h-5 w-5 text-primary' />            <span>Active Projects</span>          <CardTitle className="flex items-center gap-2">
          <CardTitle className="flex items-center gap-2">
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

                className='h-16 animate-pulse bg-muted rounded'></div>            ))}

          </div>;
        </CardContent>;
      </Card>;
    );"
  }          <div className="space-y-2">;
            {[1, 2].map(idx => (

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              <div key={idx} className="h-16 animate-pulse bg-muted rounded"></div>
import { useEffect, useState } from "react",;
import Link from "next/link",;
import { BriefcaseIcon, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { useProjects } from "@/hooks/useProjects",;

import { Project } from "@/types/projects",;

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

          <div className="space-y-2">;
            {[1, 2].map(idx => (;"
              <div key={idx} className="h-16 animate-pulse bg-muted rounded"></div>;
            ))}
          </div>;
        </CardContent>;
      </Card>;

<<<<<<< HEAD
    );

=======
  });
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
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
<<<<<<< HEAD



=======
<<<<<<< HEAD
=======

            <BriefcaseIcon className="h-5 w-5 text-primary" />
<CardTitle className='flex items-center gap-2'>
            <BriefcaseIcon className='h-5 w-5 text-primary' />
origin/cursor/automate-test-improve-and-merge-code-2533
            <span>Active Projects</span>
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

        <CardContent className="text-center py-6">
          <p className="text-muted-foreground mb-2">You don't have any active projects at the moment.</p>
          <Button variant="outline" asChild>

            <Link href="/jobs">Find Opportunities</Link>
          </Button>

        </CardContent>
      </Card>
    )
  }

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD

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
>>>>>>> origin/cursor/delete-old-data-records-6bba


              <Badge

                variant={

                  project.status === 'in_progress' ? 'default' : 'outline'
                }
<<<<<<< HEAD
                className={
                  project.status === 'in_progress'
                    ? 'bg-blue-100 text-blue-800 hover:bg-blue-100'

=======
                className={'
                  project.status === 'in_progress''
                    ? 'bg-blue-100 text-blue-800 hover:bg-blue-100''
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    : ''


                  : 'In Progress'}

              </Badge>;
            </div>;'
            <div className='flex items-center text-xs text-muted-foreground gap-2'>;'
              <Clock className='h-3 w-3' />;
              <span>;
                Started {new Date(project && project.start_date).toLocaleDateString()}
              </span>;

            </Button>;
          </div>;
        ))}
      </CardContent>;
      {activeProjects && activeProjects.length > 2 && (;

          </Button>;
        </CardFooter>;
      )}

<<<<<<< HEAD
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
>>>>>>> origin/cursor/delete-old-data-records-6bba

              <Link href={`/project/${project.id}`}>View Project</Link>
            </Button>
          </div>
        ))}
<<<<<<< HEAD

=======
}
>>>>>>> origin/cursor/delete-old-data-records-6bba

import { useEffect, useState } from 'react';
import Link from 'next/link';

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

            <span > Active Projects</span>;
          </CardTitle>;
          <CardDescription > Your ongoing work</CardDescription>;
        </CardHeader>;

            {[1, 2].map (idx => (
              <div;
                key={idx}'
                className='h - 16 animate - pulse bg - muted rounded';
              ></div>            ))}
          </div>;
        </CardContent>;

          </div>;
        </CardContent>;
      </Card>);
  });
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

            <span > Active Projects</span>;
          </CardTitle>;
          <CardDescription > Your ongoing work</CardDescription>;
        </CardHeader>;'
        <CardContent className='text - center py - 6'>;'
          <p className='text - muted - foreground mb - 2'>;'
            You don't have any active projects at the moment.;

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

              <Link href={`/project/${project.id}`}>View Project</Link>;

            </Button>;
          </div>))}
      </CardContent>;
      {activeProjects.length > 2 && (;
        <CardFooter>;
          <Button variant="ghost" className="w-full" asChild>;
<<<<<<< HEAD

            <Link href="/projects">View All Projects</Link>;
          </Button>;
        </CardFooter>;
      )}
    </Card>;
  );
}

=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
