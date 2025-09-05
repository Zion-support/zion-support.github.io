
<<<<<<< HEAD
<<<<<<< HEAD
import { useEffect, useState } from "react",
import { Link } from "react-router-dom",
import { BriefcaseIcon, Clock } from "lucide-react",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { useProjects } from "@/hooks/useProjects",
import { Project } from "@/types/projects",
=======
import { useEffect, useState } from &quot;react&quot;;
import { Link } from &quot;react-router-dom&quot;;
import { BriefcaseIcon, Clock } from &quot;lucide-react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { useProjects } from &quot;@/hooks/useProjects&quot;;
import { Project } from &quot;@/types/projects&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export function ActiveProjectsCard() {
  const { projects, isLoading } = useProjects(),
  const [activeProjects, setActiveProjects] = useState<Project[]>([]),
  
  useEffect(() => {
    if (projects && !isLoading) {
      const active = projects.filter(p => 
        ['offer_acceptedin_progress'].includes(p.status)
      ).slice(0, 3), // Limit to 3 most recent projects
      setActiveProjects(active)
    }
  }, [projects, isLoading]),
=======

export function ActiveProjectsCard() {_const { projects, _isLoading} = useProjects();
  const [activeProjects, setActiveProjects] = useState<Project[]>([]);
  
  useEffect__(() => {_if (projects && !isLoading) {
      const _active = projects.filter(p => 
        ['offer_accepted', _'in_progress'].includes(p.status)
      ).slice(0, _3); // Limit to 3 most recent projects
      setActiveProjects(active);}
  }, [projects, isLoading]);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  if (isLoading) {_return (
      <Card>
        <CardHeader>
          <CardTitle className=&quot;flex items-center gap-2&quot;>
            <BriefcaseIcon className=&quot;h-5 w-5 text-primary&quot; />
            <span>Active Projects</span>
          </CardTitle>
          <CardDescription>Your ongoing work</CardDescription>
        </CardHeader>
        <CardContent>
<<<<<<< HEAD
          <div className=&quot;space-y-2&quot;>
            {[1, 2].map(idx => (
              <div key={idx} className=&quot;h-16 animate-pulse bg-muted rounded&quot;></div>
=======
          <div className="space-y-2">
            {[1, _2].map(idx => (
              <div key={idx} className="h-16 animate-pulse bg-muted rounded"></div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }
  
  if (activeProjects.length === 0) {_return (
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
<<<<<<< HEAD
    )
  }
=======
    );}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className=&quot;flex items-center gap-2&quot;>
          <BriefcaseIcon className=&quot;h-5 w-5 text-primary&quot; />
          <span>Active Projects</span>
        </CardTitle>
        <CardDescription>Your ongoing work</CardDescription>
      </CardHeader>
<<<<<<< HEAD
      <CardContent className=&quot;space-y-4&quot;>
        {activeProjects.map(project => (
          <div key={project.id} className=&quot;border rounded-md p-3&quot;>
            <div className=&quot;flex justify-between items-start mb-2&quot;>
              <h3 className=&quot;font-medium text-sm&quot;>{project.job?.title}</h3>
              <Badge 
                variant={project.status === &quot;in_progress&quot; ? &quot;default&quot; : &quot;outline&quot;}
                className={project.status === &quot;in_progress&quot; ? &quot;bg-blue-100 text-blue-800 hover:bg-blue-100&quot; : "&quot;}
              >
                {project.status === &quot;offer_accepted&quot; ? &quot;Starting&quot; : &quot;In Progress"}
              </Badge>
            </div>
            <div className="flex items-center text-xs text-muted-foreground gap-2">
              <Clock className="h-3 w-3&quot; />
              <span>Started {new Date(project.start_date).toLocaleDateString()}</span>
            </div>
            <Button size=&quot;sm&quot; variant=&quot;outline" className="w-full mt-2&quot; asChild>
              <Link to={`/project/${project.id}`}>View Project</Link>
=======
      <CardContent className="space-y-4">
        {_activeProjects.map(project => (
          <div key={project.id} className="border rounded-md p-3">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium text-sm">{_project.job?.title}</h3>
              <Badge 
                variant={_project.status === "in_progress" ? "default" : "outline"}
                className={_project.status === "in_progress" ? "bg-blue-100 text-blue-800 hover:bg-blue-100" : ""}
              >
                {_project.status === "offer_accepted" ? "Starting" : "In Progress"}
              </Badge>
            </div>
            <div className="flex items-center text-xs text-muted-foreground gap-2">
              <Clock className="h-3 w-3" />
              <span>Started {_new Date(project.start_date).toLocaleDateString()}</span>
            </div>
            <Button size="sm" variant="outline" className="w-full mt-2" asChild>
              <Link to={_`/project/${project.id}`}>View Project</Link>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </Button>
          </div>
        ))}
      </CardContent>
      {_activeProjects.length > 2 && (
        <CardFooter>
          <Button variant=&quot;ghost" className="w-full&quot; asChild>
            <Link to=&quot;/projects">View All Projects</Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}
