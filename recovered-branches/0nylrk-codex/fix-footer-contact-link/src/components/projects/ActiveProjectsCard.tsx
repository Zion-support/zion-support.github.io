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

  const { projects, isLoading } = useProjects();

  const [activeProjects, setActiveProjects] = useState<Project[]>([]);

=======
<<<<<<< HEAD
  const { projects, isLoading } = useProjects();
  const [activeProjects, setActiveProjects] = useState<Project[]>([]);
  const { projects, isLoading } = useProjects();
  const [activeProjects, setActiveProjects] = useState<Project[]>([]);
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { useEffect, useState } from "react",
import { Link } from "react-router-dom",
import { BriefcaseIcon, Clock } from "lucide-react",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",

import { useProjects } from "@/hooks/useProjects";
import { Project } from "@/types/projects";
export function ActiveProjectsCard() {
<<<<<<< HEAD

  const { projects, isLoading } = useProjects();

=======
  const { projects, isLoading } = useProjects();

  const [activeProjects, setActiveProjects] = useState<Project[]>([]);
import { useProjects } from "@/hooks/useProjects",
import { Project } from "@/types/projects",
export function ActiveProjectsCard() {
  const { projects, isLoading } = useProjects(),
  const [activeProjects, setActiveProjects] = useState<Project[]>([]),
  
=======

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

  const { projects, isLoading } = useProjects();

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  useEffect(() => {
    if (projects && !isLoading) {
      const active = projects.filter(p =>
        ['offer_acceptedin_progress'].includes(p.status)
      ).slice(0, 3), // Limit to 3 most recent projects

      setActiveProjects(active)
    }
<<<<<<< HEAD

  const { projects, isLoading } = useProjects();

  }, [projects, isLoading]),

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
  const { projects, isLoading } = useProjects();
=======

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  }, [projects, isLoading]),

<<<<<<< HEAD
=======
<<<<<<< HEAD
  }, [projects, isLoading]);

>>>>>>> merged-prs-20250907-203621
  }, [projects, isLoading]),
  
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  if (isLoading) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { useEffect, useState } from "react",;
import { Link } from "react-router-dom",;
import { BriefcaseIcon, Clock } from "lucide-react",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { useProjects } from "@/hooks/useProjects",;

import { Project } from "@/types/projects",;
export function ActiveProjectsCard() { return null; }
  const { projects, isLoading } = useProjects(),;
  const [activeProjects, setActiveProjects] = useState<Project[]>([]);
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  useEffect(() => {;
    if (projects && !isLoading) {;
      const active = projects && projects.filter(p => ;'
        ['offer_acceptedin_progress'].includes(p && p.status);
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
  useEffect(() => {;
    if (projects && !isLoading) {;
      const active = projects.filter(p =>;
        ['offer_acceptedin_progress'].includes(p.status);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      ).slice(0, 3), // Limit to 3 most recent projects;
      setActiveProjects(active);
    }
  }, [projects, isLoading]);
<<<<<<< HEAD

  const [activeProjects, setActiveProjects] = useState<Project[]>([]);
    return (

=======
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

  const [activeProjects, setActiveProjects] = useState<Project[]>([]);
    return (
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

            ))}
          </div>;

        </CardContent>;
      </Card>;
    );
  }

  if (activeProjects.length === 0) {

=======
<<<<<<< HEAD
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }
  
  if (activeProjects.length === 0) {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

=======
<<<<<<< HEAD
        <CardContent>
          <div className="space-y-2">
            {[1, 2].map(idx => (
              <div key={idx} className="h-16 animate-pulse bg-muted rounded"></div>
            ))}
=======
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
=======

            ))}
          </div>;

        </CardContent>;
      </Card>;
    );
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
))}
=======
<<<<<<< HEAD
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

))}
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          </div>
        </CardContent>
      </Card>
    )
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

  if (activeProjects.length === 0) {

  if (activeProjects && activeProjects.length === 0) {;

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  


  if (activeProjects.length === 0) {

  if (activeProjects && activeProjects.length === 0) {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    return (
      <Card>;
        <CardHeader>;"
          <CardTitle className="flex items-center gap-2">;"

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <CardFooter>;
          <Button variant="ghost" className="w-full" asChild>;
            <Link to="/projects">View All Projects</Link>;
          </Button>;
        </CardFooter>;
      )}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
          ;
          <CardDescription>Your ongoing work;
        <CardContent>;
          <div className="space-y-2">;"
              <div key={idx} className="h-16 animate-pulse bg-muted rounded"></div>;"
          </div>;
<<<<<<< HEAD

        ;"
        <CardContent className="text-center py-6">;"
          <p className="text-muted-foreground mb-2">You don't have any active projects at the moment.</p>;
          <Button variant="outline" asChild>;"
            <Link to="/jobs">Find Opportunities;"
        <CardFooter>;
          <Button variant="ghost" className="w-full" asChild>;"
            <Link to="/projects">View All Projects;"
  const [active_projects, setActiveProjects] = useState < Project[]>([]);
  // Check condition;
if ( {) {
  $2;
}
    return (

          <CardTitle className="flex items - center gap - 2">;"
            <BriefcaseIcon className="h - 5 w - 5 text - primary" />;"

            <span > Active Projects</span>;
          <CardDescription > Your ongoing work;
          <div className="space - y-2">;"
</div>)"
              <div key={idx} className="h - 16 animate - pulse bg - muted rounded"></div>))}"
      );

        <CardContent className="text - center py - 6">;"
          <p className="text - muted - foreground mb - 2">You don't have any active projects at the moment.</p>;
          <Button variant="outline" as_child>;"

      <CardContent className="space - y-4">;"
          <div key={project.id} className="border rounded - md p - 3">;"
            <div className="flex justify - between items - start mb - 2">;"
              <h3 className="font - medium text - sm">{project.job?.title}</h3>;"
              <Badge;"
                variant={project.status === "in_progress" ? "default" : "outline"}""
                className={project.status === "in_progress" ? "bg - blue - 100 text - blue - 800 hover:bg - blue - 100" : ""}"
              >;

            </div>;"
            <div className="flex items - center text - xs text - muted - foreground gap - 2">;"
              <Clock className="h - 3 w - 3" />;"

              <span > Started {new Date (project.start_date).toLocaleDateString ()}</span>;
            <Button size="sm" variant="outline" className="w - full mt - 2" as_child>;"

              <Link to={`/project/${project.id}`}>View Project;
          </div>))}
          <Button variant="ghost" className="w - full" as_child>;"
        )}
=======
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
return (<Card> <CardHeader> <CardTitle className="flex items-center gap-2" > <BriefcaseIcon className="h-5 w-5 text-primary" /> <span>Active Projects</span>  <CardDescription>Your ongoing work  <CardContent>) )"
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

        ;"
        <CardContent className="text-center py-6">;"
          <p className="text-muted-foreground mb-2">You don't have any active projects at the moment.</p>;
          <Button variant="outline" asChild>;"
            <Link to="/jobs">Find Opportunities;"
        <CardFooter>;
          <Button variant="ghost" className="w-full" asChild>;"
            <Link to="/projects">View All Projects;"
  const [active_projects, setActiveProjects] = useState < Project[]>([]);
  // Check condition;
if ( {) {
  $2;
}
    return (

          <CardTitle className="flex items - center gap - 2">;"
            <BriefcaseIcon className="h - 5 w - 5 text - primary" />;"

<<<<<<< HEAD
            <span > Active Projects</span>;
          <CardDescription > Your ongoing work;
          <div className="space - y-2">;"
</div>)"
              <div key={idx} className="h - 16 animate - pulse bg - muted rounded"></div>))}"
      );

        <CardContent className="text - center py - 6">;"
          <p className="text - muted - foreground mb - 2">You don't have any active projects at the moment.</p>;
          <Button variant="outline" as_child>;"

      <CardContent className="space - y-4">;"
          <div key={project.id} className="border rounded - md p - 3">;"
            <div className="flex justify - between items - start mb - 2">;"
              <h3 className="font - medium text - sm">{project.job?.title}</h3>;"
              <Badge;"
                variant={project.status === "in_progress" ? "default" : "outline"}""
                className={project.status === "in_progress" ? "bg - blue - 100 text - blue - 800 hover:bg - blue - 100" : ""}"
              >;

            </div>;"
            <div className="flex items - center text - xs text - muted - foreground gap - 2">;"
              <Clock className="h - 3 w - 3" />;"

              <span > Started {new Date (project.start_date).toLocaleDateString ()}</span>;
            <Button size="sm" variant="outline" className="w - full mt - 2" as_child>;"

              <Link to={`/project/${project.id}`}>View Project;
          </div>))}
          <Button variant="ghost" className="w - full" as_child>;"
        )}
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
return (<Card> <CardHeader> <CardTitle className="flex items-center gap-2" > <BriefcaseIcon className="h-5 w-5 text-primary" /> <span>Active Projects</span>  <CardDescription>Your ongoing work  <CardContent>) )"
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
