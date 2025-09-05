
<<<<<<< HEAD
import { useEffect, useState } from "react",;
import { Link } from "react-router-dom",;
import { BriefcaseIcon, Clock } from "lucide-react",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { useProjects } from "@/hooks/useProjects",;
import { Project } from "@/types/projects",;
;
export function ActiveProjectsCard() {;
  const { projects, isLoading } = useProjects(),;
  const [activeProjects, setActiveProjects] = useState<Project[]>([]),;
  ;
  useEffect(() => {;
    if (projects && !isLoading) {;
      const active = projects.filter(p => ;
        ['offer_acceptedin_progress'].includes(p.status);
      ).slice(0, 3), // Limit to 3 most recent projects;
      setActiveProjects(active),;
    }
  }, [projects, isLoading]),;
  ;
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
    ),;
  }
  ;
  if (activeProjects.length === 0) {;
    return (;
      <Card>;
        <CardHeader>;
          <CardTitle className="flex items-center gap-2">;
            <BriefcaseIcon className="h-5 w-5 text-primary" />;
            <span>Active Projects</span>;
          </CardTitle>;
          <CardDescription>Your ongoing work</CardDescription>;
        </CardHeader>;
        <CardContent className="text-center py-6">;
          <p className="text-muted-foreground mb-2">You don't have any active projects at the moment.</p>;
          <Button variant="outline" asChild>;
            <Link to="/jobs">Find Opportunities</Link>;
          </Button>;
        </CardContent>;
      </Card>;
    ),;
  }
  ;
  return (;
    <Card>;
      <CardHeader>;
        <CardTitle className="flex items-center gap-2">;
          <BriefcaseIcon className="h-5 w-5 text-primary" />;
          <span>Active Projects</span>;
        </CardTitle>;
        <CardDescription>Your ongoing work</CardDescription>;
      </CardHeader>;
      <CardContent className="space-y-4">;
        {activeProjects.map(project => (;
          <div key={project.id} className="border rounded-md p-3">;
            <div className="flex justify-between items-start mb-2">;
              <h3 className="font-medium text-sm">{project.job?.title}</h3>;
              <Badge ;
                variant={project.status === "in_progress" ? "default" :"outline"}
                className={project.status === "in_progress" ? "bg-blue-100 text-blue-800 hover:bg-blue-100" :""}
              >;
                {project.status === "offer_accepted" ? "Starting" :"In Progress"}
              </Badge>;
            </div>;
            <div className="flex items-center text-xs text-muted-foreground gap-2">;
              <Clock className="h-3 w-3" />;
              <span>Started {new Date(project.start_date).toLocaleDateString()}</span>;
            </div>;
            <Button size="sm" variant="outline" className="w-full mt-2" asChild>;
              <Link to={`/project/${project.id}`}>View Project</Link>;
            </Button>;
          </div>;
        ))}
      </CardContent>;
      {activeProjects.length > 2 && (;
        <CardFooter>;
          <Button variant="ghost" className="w-full" asChild>;
            <Link to="/projects">View All Projects</Link>;
          </Button>;
        </CardFooter>;
      )}
    </Card>;
  ),;
=======
import { useEffect, useState } from "react",
import { Link } from "react-router-dom",
import { BriefcaseIcon, Clock } from "lucide-react",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { useProjects } from "@/hooks/useProjects",
import { Project } from "@/types/projects",export function ActiveProjectsCard() {
  const { projects, isLoading } = useProjects(),
  const [activeProjects, setActiveProjects] = useState<Project[]>([]),
  
  useEffect(() => {
    if (projects && !isLoading) {
      const active = projects.filter(p => 
        ['offeracceptedin_progress'].includes(p.status)
      ).slice(0, 3), // Limit to 3 most recent projects,
setActiveProjects(active)
    }
  }, [projects, isLoading]),

export function ActiveProjectsCard() {const { projects, isLoading} = useProjects();
  const [activeProjects, setActiveProjects] = useState<Project[]>([]);
  
  useEffect_(() => {if (projects && !isLoading) {
      const active = projects.filter(p => 
        ['offeraccepted', _'inprogress'].includes(p.status)
      ).slice(0, 3); // Limit to 3 most recent projects,
setActiveProjects(active)}
  }, [projects, isLoading]);
  
  if (isLoading) {return (
      <Card>
        <CardHeader>
          <CardTitle className=&quot;flex items-center gap-2&quot;>
            <BriefcaseIcon className=&quot;h-5 w-5 text-primary&quot; />
            <span>Active Projects</span>
          </CardTitle>
          <CardDescription>Your ongoing work</CardDescription>
        </CardHeader>
        <CardContent>
          <div className=&quot;space-y-2&quot;>
            {[1, 2].map(idx => (
              <div key={idx} className=&quot;h-16 animate-pulse bg-muted rounded&quot;></div>            ))}
          </div>
        </CardContent>
      </Card>
    )
  }
  
  if (activeProjects.length === 0) {return (
      <Card>
        <CardHeader>
          <CardTitle className=&quot;flex items-center gap-2&quot;>
            <BriefcaseIcon className=&quot;h-5 w-5 text-primary&quot; />
            <span>Active Projects</span>
          </CardTitle>
          <CardDescription>Your ongoing work</CardDescription>
        </CardHeader>
        <CardContent className=&quot;text-center py-6&quot;>
          <p className=&quot;text-muted-foreground mb-2&quot;>You don't have any active projects at the moment.</p>
          <Button variant=&quot;outline&quot; asChild>
            <Link to=&quot;/jobs&quot;>Find Opportunities</Link>
          </Button>
        </CardContent>
      </Card>
    )
  }  
  return (
    <Card>
      <CardHeader>
        <CardTitle className=&quot;flex items-center gap-2&quot;>
          <BriefcaseIcon className=&quot;h-5 w-5 text-primary&quot; />
          <span>Active Projects</span>
        </CardTitle>
        <CardDescription>Your ongoing work</CardDescription>
      </CardHeader>
      <CardContent className=&quot;space-y-4&quot;>
        {activeProjects.map(project => (
          <div key={project.id} className=&quot;border rounded-md p-3&quot;>
            <div className=&quot;flex justify-between items-start mb-2&quot;>
              <h3 className=&quot;font-medium text-sm&quot;>{project.job?.title}</h3>
              <Badge,
variant={project.status === &quot;inprogress&quot; ? &quot;default&quot; : &quot;outline&quot}
                className={project.status === &quot;inprogress&quot; ? &quot;bg-blue-100 text-blue-800 hover:bg-blue-100&quot; : "&quot}
              >
                {project.status === &quot;offeraccepted&quot; ? &quot;Starting&quot; : &quot;In Progress"}
              </Badge>
            </div>
            <div className="flex items-center text-xs text-muted-foreground gap-2">
              <Clock className="h-3 w-3&quot; />
              <span>Started {new Date(project.startdate).toLocaleDateString()}</span>
            </div>
            <Button size=&quot;sm&quot; variant=&quot;outline" className="w-full mt-2&quot; asChild>
              <Link to={`/project/${project.id}`}>View Project</Link>            </Button>
          </div>
        ))}
      </CardContent>
      {activeProjects.length > 2 && (
        <CardFooter>
          <Button variant=&quot;ghost" className="w-full&quot; asChild>
            <Link to=&quot;/projects">View All Projects</Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
