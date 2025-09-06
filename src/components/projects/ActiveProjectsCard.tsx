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

    if (projects && !isLoading) {
      const active = projects
        .filter(p => ['offer_accepted', 'in_progress'].includes(p.status))
        .slice(0, 3); // Limit to 3 most recent projects
      setActiveProjects(active);
    }
  }, [projects, isLoading]);

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <BriefcaseIcon className='h-5 w-5 text-primary' />            <span>Active Projects</span>

            <span>Active Projects</span>

          </CardTitle>
          <CardDescription>Your ongoing work</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='space-y-2'>
            {[1, 2].map(idx => (
              <div
                key={idx}
                className='h-16 animate-pulse bg-muted rounded'
              ></div>            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

            ))}
          </div>
        </CardContent>
      </Card>

  if (activeProjects.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <BriefcaseIcon className='h-5 w-5 text-primary' />            <span>Active Projects</span>
          </CardTitle>
          <CardDescription>Your ongoing work</CardDescription>
        </CardHeader>

            <span>Active Projects</span>
          </CardTitle>
          <CardDescription>Your ongoing work</CardDescription>
        </CardHeader>

          <span>Active Projects</span>
        </CardTitle>
        <CardDescription>Your ongoing work</CardDescription>
      </CardHeader>

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
            <Button size='sm' variant='outline' className='w-full mt-2' asChild>              <Link href={`/project/${project.id}`}>View Project</Link>

              <Link href={`/project/${project.id}`}>View Project</Link>

            </Button>
          </div>
        ))}
      </CardContent>
      {activeProjects.length > 2 && (
        <CardFooter>
          <Button variant='ghost' className='w-full' asChild>
            <Link href='/projects'>View All Projects</Link>          </Button>

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