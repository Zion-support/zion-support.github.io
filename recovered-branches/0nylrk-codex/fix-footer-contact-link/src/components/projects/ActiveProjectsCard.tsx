<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/ActiveProjectsCard.tsx

<<<<<<< HEAD

import { useEffect, useState } from "react",
import { Link } from "react-router-dom",
import { BriefcaseIcon, Clock } from "lucide-react",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",

=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/ActiveProjectsCard.tsx
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/ActiveProjectsCard.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/ActiveProjectsCard.tsx
  const { projects, isLoading } = useProjects();
  const [activeProjects, setActiveProjects] = useState<Project[]>([]);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/ActiveProjectsCard.tsx




>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  const { projects, isLoading } = useProjects();
  const [activeProjects, setActiveProjects] = useState<Project[]>([]);
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { useEffect, useState } from "react",
import { Link } from "react-router-dom",
import { BriefcaseIcon, Clock } from "lucide-react",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
<<<<<<< HEAD
import { useProjects } from "@/hooks/useProjects";
import { Project } from "@/types/projects";
export function ActiveProjectsCard() {
  const { projects, isLoading } = useProjects();

  const [activeProjects, setActiveProjects] = useState<Project[]>([]);
=======
import { useProjects } from "@/hooks/useProjects",
import { Project } from "@/types/projects",
export function ActiveProjectsCard() {
  const { projects, isLoading } = useProjects(),
  const [activeProjects, setActiveProjects] = useState<Project[]>([]),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

  }, [projects, isLoading]),
  

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  }, [projects, isLoading]);

=======
  }, [projects, isLoading]),
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
=======
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

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/ActiveProjectsCard.tsx
  useEffect(() => {;
    if (projects && !isLoading) {;
      const active = projects && projects.filter(p => ;
        ['offer_acceptedin_progress'].includes(p && p.status);
=======
  useEffect(() => {;
    if (projects && !isLoading) {;
      const active = projects.filter(p =>;
        ['offer_acceptedin_progress'].includes(p.status);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      ).slice(0, 3), // Limit to 3 most recent projects;
      setActiveProjects(active);
    }
  }, [projects, isLoading]);
  if (isLoading) {;
<<<<<<< HEAD
    return (
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
    return (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            ))}
          </div>;
        </CardContent>;
      </Card>;
<<<<<<< HEAD
    );
  }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/ActiveProjectsCard.tsx

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }
<<<<<<< HEAD
=======
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

  


  if (activeProjects.length === 0) {
=======

  if (activeProjects && activeProjects.length === 0) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
========
  if (activeProjects && activeProjects.length === 0) {;
    return (
=======
    ),;
  }
  ;
  if (activeProjects.length === 0) {;
    return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<< HEAD
    );
  }
  return (
=======
    ),;
  }
  ;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/ActiveProjectsCard.tsx
    <Card>;
      <CardHeader>;
        <CardTitle className="flex items-center gap-2">;
          <BriefcaseIcon className="h-5 w-5 text-primary" />;
          <span>Active Projects</span>;
        </CardTitle>;
        <CardDescription>Your ongoing work</CardDescription>;
      </CardHeader>;
      <CardContent className="space-y-4">;
<<<<<<< HEAD
        {activeProjects && activeProjects.map(project => (;
          <div key={project && project.id} className="border rounded-md p-3">;
            <div className="flex justify-between items-start mb-2">;
              <h3 className="font-medium text-sm">{project && project.job?.title}</h3>;
              <Badge
                variant={project && project.status === "in_progress" ? "default" : "outline"}
                className={project && project.status === "in_progress" ? "bg-blue-100 text-blue-800 hover:bg-blue-100" : ""}>;
                {project && project.status === "offer_accepted" ? "Starting" : "In Progress"}
=======
        {activeProjects.map(project => (;
          <div key={project.id} className="border rounded-md p-3">;
            <div className="flex justify-between items-start mb-2">;
              <h3 className="font-medium text-sm">{project.job?.title}</h3>;
              <Badge ;
                variant={project.status === "in_progress" ? "default" :"outline"}
                className={project.status === "in_progress" ? "bg-blue-100 text-blue-800 hover:bg-blue-100" :""}
              >;
                {project.status === "offer_accepted" ? "Starting" :"In Progress"}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              </Badge>;
            </div>;
            <div className="flex items-center text-xs text-muted-foreground gap-2">;
              <Clock className="h-3 w-3" />;
<<<<<<< HEAD
              <span>Started {new Date(project && project.start_date).toLocaleDateString()}</span>;
            </div>;
            <Button size="sm" variant="outline" className="w-full mt-2" asChild>;
              <Link to={`/project/${project && project.id}`}>View Project</Link>;
=======
              <span>Started {new Date(project.start_date).toLocaleDateString()}</span>;
            </div>;
            <Button size="sm" variant="outline" className="w-full mt-2" asChild>;
              <Link to={`/project/${project.id}`}>View Project</Link>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            </Button>;
          </div>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/ActiveProjectsCard.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/ActiveProjectsCard.tsx
        ))}
      </CardContent>;
<<<<<<< HEAD
      {activeProjects && activeProjects.length > 2 && (;
=======
      {activeProjects.length > 2 && (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        <CardFooter>;
          <Button variant="ghost" className="w-full" asChild>;
            <Link to="/projects">View All Projects</Link>;
          </Button>;
        </CardFooter>;
      )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/ActiveProjectsCard.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/ActiveProjectsCard.tsx
    </Card>;
<<<<<<< HEAD
  );
}
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/ActiveProjectsCard.tsx



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/ActiveProjectsCard.tsx
=======
<<<<<<< HEAD
    </Card>
  )
}
=======
    </Card>;
  );
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
