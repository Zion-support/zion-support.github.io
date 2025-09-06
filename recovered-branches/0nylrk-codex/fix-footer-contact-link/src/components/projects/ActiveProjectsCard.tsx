<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
  const { projects, isLoading } = useProjects();
  const [activeProjects, setActiveProjects] = useState<Project[]>([]);
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

  const { projects, isLoading } = useProjects();

  const [activeProjects, setActiveProjects] = useState<Project[]>([]);

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD



=======
  const { projects, isLoading } = useProjects();
  const [activeProjects, setActiveProjects] = useState<Project[]>([]);
  const { projects, isLoading } = useProjects();
  const [activeProjects, setActiveProjects] = useState<Project[]>([]);
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useEffect, useState } from "react",
import { Link } from "react-router-dom",
import { BriefcaseIcon, Clock } from "lucide-react",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
<<<<<<< HEAD

=======
import { useProjects } from "@/hooks/useProjects";
import { Project } from "@/types/projects";
export function ActiveProjectsCard() {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import {useEffect, useState} from "react";"
import {Link} from "react-router-dom";"
import {BriefcaseIcon, Clock} from "lucide-react";"
import {Button} from "@/components/ui/button";"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";"
import {Badge} from "@/components/ui/badge";"
import {useProjects} from "@/hooks/useProjects";"
import {Project} from "@/types/projects";
export function ActiveProjectsCard() { return null; }
import { useEffect, useState } from "react","
import { Link } from "react-router-dom","
import { BriefcaseIcon, Clock } from "lucide-react","
import { Button } from "@/components/ui/button","
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card","
import { Badge } from "@/components/ui/badge",";
import { useProjects } from "@/hooks/useProjects";"
import { Project } from "@/types/projects";
export function ActiveProjectsCard() {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const { projects, isLoading } = useProjects();

  const [activeProjects, setActiveProjects] = useState<Project[]>([]);"
import { useProjects } from "@/hooks/useProjects","
import { Project } from "@/types/projects",
export function ActiveProjectsCard() {}
  const { projects, isLoading } = useProjects(),
  const [activeProjects, setActiveProjects] = useState<Project[]>([]),
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  useEffect(() => {
    if (projects && !isLoading) {
      const active = projects.filter(p =>
        ['offer_acceptedin_progress'].includes(p.status)
      ).slice(0, 3), // Limit to 3 most recent projects
<<<<<<< HEAD
=======

  useEffect(() => {}
    if (projects && !isLoading) {}
      const active = projects.filter(p =>;
        ['offer_acceptedin_progress'].includes(p.status);
      ).slice(0, 3), // Limit to 3 most recent projects;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      setActiveProjects(active)
    }
<<<<<<< HEAD

=======
=======
      setActiveProjects(active)
    }
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const { projects, isLoading } = useProjects();



  }, [projects, isLoading]),
  

<<<<<<< HEAD

<<<<<<< HEAD
  }, [projects, isLoading]),
  
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  if (isLoading) {
=======
    if (isLoading) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    if (isLoading) {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  if (isLoading) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return (
      <Card>
        <CardHeader>"
          <CardTitle className="flex items-center gap-2">"
            <BriefcaseIcon className="h-5 w-5 text-primary" />
            <span>Active Projects</span>
          </CardTitle>
          <CardDescription>Your ongoing work</CardDescription>
        </CardHeader>
        <CardContent>"
          <div className="space-y-2">
            {[1, 2].map(idx => ("
              <div key={idx} className="h-16 animate-pulse bg-muted rounded"></div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { useEffect, useState } from "react",;
import { Link } from "react-router-dom",;
import { BriefcaseIcon, Clock } from "lucide-react",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { useProjects } from "@/hooks/useProjects",;
=======
"
import { useEffect, useState } from "react",;"
import { Link } from "react-router-dom",;"
import { BriefcaseIcon, Clock } from "lucide-react",;"
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
      const active = projects && projects.filter(p => ;'
        ['offer_acceptedin_progress'].includes(p && p.status);

      ).slice(0, 3), // Limit to 3 most recent projects;
      setActiveProjects(active);
    }
  }, [projects, isLoading]);


  const [activeProjects, setActiveProjects] = useState<Project[]>([]);
    return (

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            ))}
          </div>;
=======
  useEffect(() => {;
    if (projects && !isLoading) {;
      const active = projects && projects.filter(p => ;
        ['offer_acceptedin_progress'].includes(p && p.status);          </div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  useEffect(() => {;
    if (projects && !isLoading) {;
      const active = projects && projects.filter(p => ;
        ['offer_acceptedin_progress'].includes(p && p.status);          </div>;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        </CardContent>;
      </Card>;
    );
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }
  
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  if (activeProjects.length === 0) {
=======
  if (isLoading) {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BriefcaseIcon className="h-5 w-5 text-primary" />
            <span>Active Projects</span>
          </CardTitle>
          <CardDescription>Your ongoing work</CardDescription>
        </CardHeader>
<<<<<<< HEAD
        <CardContent className="text-center py-6">
          <p className="text-muted-foreground mb-2">You don't have any active projects at the moment.</p>
          <Button variant="outline" asChild>
            <Link to="/jobs">Find Opportunities</Link>
          </Button>
        </CardContent>
      </Card>
    )
=======
        <CardContent>
          <div className="space-y-2">
            {[1, 2].map(idx => (
              <div key={idx} className="h-16 animate-pulse bg-muted rounded"></div>

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

  useEffect(() => {;
    if (projects && !isLoading) {;
      const active = projects && projects.filter(p => ;
        ['offer_acceptedin_progress'].includes(p && p.status);
      ).slice(0, 3), // Limit to 3 most recent projects;
      setActiveProjects(active);
    }
  }, [projects, isLoading]);

  if (isLoading) {;
    return (
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
  const [activeProjects, setActiveProjects] = useState<Project[]>([]);
    return (
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
    </Card>
  )
}
    </Card>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f


  


  if (activeProjects.length === 0) {

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======


  


  if (activeProjects.length === 0) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  if (activeProjects && activeProjects.length === 0) {;


    return (
      <Card>;
        <CardHeader>;"
          <CardTitle className="flex items-center gap-2">;"
=======
  if (activeProjects && activeProjects.length === 0) {;
    return (
      <Card>;
        <CardHeader>;
          <CardTitle className="flex items-center gap-2">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <BriefcaseIcon className="h-5 w-5 text-primary" />;
            <span>Active Projects</span>;
          </CardTitle>;
          <CardDescription>Your ongoing work</CardDescription>;
<<<<<<< HEAD
        </CardHeader>;"
        <CardContent className="text-center py-6">;'"
          <p className="text-muted-foreground mb-2">You don't have any active projects at the moment.</p>;"
          <Button variant="outline" asChild>;"
=======
        </CardHeader>;
        <CardContent className="text-center py-6">;
          <p className="text-muted-foreground mb-2">You don't have any active projects at the moment.</p>;
          <Button variant="outline" asChild>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <Link to="/jobs">Find Opportunities</Link>;
          </Button>;
        </CardContent>;
      </Card>;
    );
  }
        ))}
      </CardContent>;
      {activeProjects && activeProjects.length > 2 && (;
<<<<<<< HEAD
        <CardFooter>;"
          <Button variant="ghost" className="w-full" asChild>;"
            <Link to="/projects">View All Projects</Link>;
          </Button>;
        </CardFooter>;
      )}'
import { useEffect, useState } from './react';'
import { Link } from './react-router-dom';'
import { BriefcaseIcon, Clock } from './lucide-react';'
import { Button } from '@/components / ui / button';'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components / ui / card';'
import { Badge } from '@/components / ui / badge';'
import { use_projects } from '@/hooks / use_projects';'
import { Project } from '@/types / projects';
export /**;
 * ActiveProjectsCard - Function description;
 */
function ActiveProjectsCard() {}
  const { projects, is_loading } = use_projects ();
  const [active_projects, setActiveProjects] = useState < Project[]>([]);
;



<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  if (activeProjects && activeProjects.length === 0) {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  if (activeProjects && activeProjects.length === 0) {;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        <CardFooter>;
          <Button variant="ghost" className="w-full" asChild>;
            <Link to="/projects">View All Projects</Link>;
          </Button>;
        </CardFooter>;
      )}
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
    </Card>
  )
}
    </Card>;
  );
}
;



>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
