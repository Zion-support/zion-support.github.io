
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {BriefcaseIcon, Clock} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {useProjects} from "@/hooks/useProjects";
import {Project} from "@/types/projects";
export function ActiveProjectsCard() {;
<<<<<<< HEAD
<<<<<<< HEAD
  const { projects, isLoading } = useProjects();
  const [activeProjects, setActiveProjects] = useState<Project[]>([]);
  const { projects, isLoading } = useProjects();
  const [activeProjects, setActiveProjects] = useState<Project[]>([]);
import { useEffect, useState } from "react",
import { Link } from "react-router-dom",
import { BriefcaseIcon, Clock } from "lucide-react",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { useProjects } from "@/hooks/useProjects";
import { Project } from "@/types/projects";
export function ActiveProjectsCard() {
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const { projects, isLoading } = useProjects();

  const [activeProjects, setActiveProjects] = useState<Project[]>([]);
import { useProjects } from "@/hooks/useProjects",
import { Project } from "@/types/projects",
export function ActiveProjectsCard() {
  const { projects, isLoading } = useProjects(),
  const [activeProjects, setActiveProjects] = useState<Project[]>([]),
  
<<<<<<< HEAD
=======

  const { projects, isLoading } = useProjects();

  const [activeProjects, setActiveProjects] = useState<Project[]>([]);




>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  useEffect(() => {
    if (projects && !isLoading) {
      const active = projects.filter(p =>
        ['offer_acceptedin_progress'].includes(p.status)
      ).slice(0, 3), // Limit to 3 most recent projects
      setActiveProjects(active)
    }
<<<<<<< HEAD


<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  }, [projects, isLoading]),
  

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }, [projects, isLoading]);

  }, [projects, isLoading]),
  
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BriefcaseIcon className="h-5 w-5 text-primary" />
            <span>Active Projects</span>
          </CardTitle>
          <CardDescription>Your ongoing work</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {[1, 2].map(idx => (
              <div key={idx} className="h-16 animate-pulse bg-muted rounded"></div>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { useEffect, useState } from "react",;
import { Link } from "react-router-dom",;
import { BriefcaseIcon, Clock } from "lucide-react",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { useProjects } from "@/hooks/useProjects",;
import { Project } from "@/types/projects",;
export function ActiveProjectsCard() {;
  const { projects, isLoading } = useProjects(),;
  const [activeProjects, setActiveProjects] = useState<Project[]>([]);
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  useEffect(() => {;
    if (projects && !isLoading) {;
      const active = projects && projects.filter(p => ;
        ['offer_acceptedin_progress'].includes(p && p.status);
<<<<<<< HEAD
<<<<<<< HEAD
  useEffect(() => {;
    if (projects && !isLoading) {;
      const active = projects.filter(p =>;
        ['offer_acceptedin_progress'].includes(p.status);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      ).slice(0, 3), // Limit to 3 most recent projects;
      setActiveProjects(active);
    }
  }, [projects, isLoading]);
<<<<<<< HEAD
<<<<<<< HEAD
  if (isLoading) {;

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
    return (;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  if (isLoading) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return (
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
            ))}
          </div>
        </CardContent>
      </Card>
    )
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            ))}
          </div>;
        </CardContent>;
      </Card>;
    );
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  
  if (activeProjects.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BriefcaseIcon className="h-5 w-5 text-primary" />
            <span>Active Projects</span>
          </CardTitle>
          <CardDescription>Your ongoing work</CardDescription>
        </CardHeader>
        <CardContent className="text-center py-6">
          <p className="text-muted-foreground mb-2">You don't have any active projects at the moment.</p>
          <Button variant="outline" asChild>
            <Link to="/jobs">Find Opportunities</Link>
          </Button>
        </CardContent>
      </Card>
    )
  }
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
              <Link to={`/project/${project.id}`}>View Project</Link>
            </Button>
          </div>
        ))}
      </CardContent>
      {activeProjects.length > 2 && (
        <CardFooter>
          <Button variant="ghost" className="w-full" asChild>
            <Link to="/projects">View All Projects</Link>
          </Button>
        </CardFooter>
      )}
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            ))}
          </div>;
        </CardContent>;
      </Card>;
    );
  }

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  


  if (activeProjects.length === 0) {

  if (activeProjects && activeProjects.length === 0) {;
    return (
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
    );
  }


  return (
  if (activeProjects && activeProjects.length === 0) {;
    return (
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
  useEffect (() => {
    // Check condition
if ( {) {
  $2
}
      const active = projects.filter (p =>;
        ['offer_acceptedin_progress'].includes (p.status)).slice (0, 3), // Limit to 3 most recent projects;
      setActiveProjects (active);
    }
  }, [projects, is_loading]);
;
  // Check condition
if ( {) {
  $2
}
    return (
      <Card>;
        <CardHeader>;
          <CardTitle className="flex items - center gap - 2">;
            <BriefcaseIcon className="h - 5 w - 5 text - primary" />;
            <span > Active Projects</span>;
          </CardTitle>;
          <CardDescription > Your ongoing work</CardDescription>;
        </CardHeader>;
        <CardContent>;
          <div className="space - y-2">;
            {[1, 2].map (idx => (
              <div key={idx} className="h - 16 animate - pulse bg - muted rounded"></div>))}
          </div>;
        </CardContent>;
      </Card>);
  }
  // Check condition
if ( {) {
  $2
}
    return (
      <Card>;
        <CardHeader>;
          <CardTitle className="flex items - center gap - 2">;
            <BriefcaseIcon className="h - 5 w - 5 text - primary" />;
            <span > Active Projects</span>;
          </CardTitle>;
          <CardDescription > Your ongoing work</CardDescription>;
        </CardHeader>;
        <CardContent className="text - center py - 6">;
          <p className="text - muted - foreground mb - 2">You don't have any active projects at the moment.</p>;
          <Button variant="outline" as_child>;
            <Link to="/jobs">Find Opportunities</Link>;
          </Button>;
        </CardContent>;
      </Card>);
  }
  return (
    <Card>;
      <CardHeader>;
        <CardTitle className="flex items - center gap - 2">;
          <BriefcaseIcon className="h - 5 w - 5 text - primary" />;
          <span > Active Projects</span>;
        </CardTitle>;
        <CardDescription > Your ongoing work</CardDescription>;
      </CardHeader>;
      <CardContent className="space - y-4">;
        {active_projects.map (project => (
          <div key={project.id} className="border rounded - md p - 3">;
            <div className="flex justify - between items - start mb - 2">;
              <h3 className="font - medium text - sm">{project.job?.title}</h3>;
              <Badge;
                variant={project.status === "in_progress" ? "default" : "outline"}
                className={project.status === "in_progress" ? "bg - blue - 100 text - blue - 800 hover:bg - blue - 100" : ""}
              >;
                {project.status === "offer_accepted" ? "Starting" : "In Progress"}
              </Badge>;
            </div>;
            <div className="flex items - center text - xs text - muted - foreground gap - 2">;
              <Clock className="h - 3 w - 3" />;
              <span > Started {new Date (project.start_date).toLocaleDateString ()}</span>;
            </div>;
            <Button size="sm" variant="outline" className="w - full mt - 2" as_child>;
              <Link to={`/project/${project.id}`}>View Project</Link>;
            </Button>;
          </div>))}
      </CardContent>;
      {active_projects.length > 2 && (
        <CardFooter>;
          <Button variant="ghost" className="w - full" as_child>;
            <Link to="/projects">View All Projects</Link>;
          </Button>;
        </CardFooter>)}
    </Card>);
  ),; export function ActiveProjectsCard () {
  const {
  projects, isLoading 
}= useProjects ();
const [activeProjects, setActiveProjects] = useState<Project[]> ([]);
useEffect ( () => {
  if (projects && !isLoading) {
  const active = projects.filter (p => ['offer acceptedin progress'].includes (p.status) ) .slice (0, 3), //Limit to 3 most recent projects setActiveProjects (active) 
}
}, [projects, isLoading]);
return (<Card> <CardHeader> <CardTitle className="flex items-center gap-2" > <BriefcaseIcon className="h-5 w-5 text-primary" /> <span>Active Projects</span> </CardTitle> <CardDescription>Your ongoing work</CardDescription> </CardHeader> <CardContent>) ) 
}</div> </CardContent> </Card>) 
}if (activeProjects.length === 0) {
  return (<Card> <CardHeader> <CardTitle className="flex items-center gap-2" > <BriefcaseIcon className="h-5 w-5 text-primary" /> <span>Active Projects</span> </CardTitle> <CardDescription>Your ongoing work</CardDescription> </CardHeader> <CardContent className="text-center py-6" > <p className="text-muted-foreground mb-2" >You don't have any active projects at the moment.</p> <Button variant="outline" asChild> <Link to="/jobs" >Find Opportunities</Link> </Button> </CardContent> </Card> return (<Card> <CardHeader> <CardTitle className="flex items-center gap-2" > <BriefcaseIcon className="h-5 w-5 text-primary" /> <span>Active Projects</span> </CardTitle> <CardDescription>Your ongoing work</CardDescription> </CardHeader> </Button> </div>) ) 
}</CardContent> {
  activeProjects.length > 2 && (<CardFooter> <Button variant="ghost" className="w-full" asChild> <Link to="/projects">View All Projects</Link> </Button> </CardFooter>) 
}</Card>) 
}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    </Card>
  )
}
    </Card>;
  );
}
<<<<<<< HEAD
;
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
import { useEffect, useState } from './react';
import { Link } from './react-router-dom';
import { BriefcaseIcon, Clock } from './lucide-react';
import { Button } from '@/components / ui / button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components / ui / card';
import { Badge } from '@/components / ui / badge';
import { use_projects } from '@/hooks / use_projects';
import { Project } from '@/types / projects';
export /**
 * ActiveProjectsCard - Function description
 */
function ActiveProjectsCard() {
  const { projects, is_loading } = use_projects ();
  const [active_projects, setActiveProjects] = useState < Project[]>([]);
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
