
import { useEffect, useState } from "react",
import Link from "next/link",
import { BriefcaseIcon, Clock } from 'lucide-react'
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { useProjects } from "@/hooks/useProjects",
import { Project } from "@/types/projects",
xport function ActiveProjectsCard() {


      const active = projects.filter(p => 
        ['offer_acceptedin_progress'].includes(p.status)
      ).slice(0, 3), // Limit to 3 most recent projects
      setActiveProjects(active)
    }
  }, [projects, isLoading]),
  


  if (isLoading) {
import { useEffect, useState } from 'react';


                className='h-16 animate-pulse bg-muted rounded'></div>            ))}
          </div>;
        </CardContent>;
      </Card>;
    );
  }          <div className="space-y-2">;
            {[1, 2].map(idx => (




  }
    );
  }




ursor/fix-website-loading-errors-and-merge-6662
  return (
  }
  return (


    <Card>;
      <CardHeader>;
        <CardTitle className='flex items-center gap-2'>;
          <BriefcaseIcon className='h-5 w-5 text-primary' />          <span>Active Projects</span>;
        </CardTitle>;
        <CardDescription>Your ongoing work</CardDescription>;
      </CardHeader>;
      <CardContent className='space-y-4'>  ;


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
              <Badge
                variant={
                  project && project.status === 'in_progress' ? 'default' : 'outline'
                }
                className={
                  project && project.status === 'in_progress'
                    ? 'bg-blue-100 text-blue-800 hover:bg-blue-100'
                    : ''


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

              <Link href={`/project/${project.id}`}>View Project</Link>
            </Button>
          </div>
        ))}
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
