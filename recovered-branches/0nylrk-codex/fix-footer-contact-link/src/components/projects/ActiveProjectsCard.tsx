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
  const { projects, isLoading } = useProjects();

  const [activeProjects, setActiveProjects] = useState<Project[]>([]);"
import { useProjects } from "@/hooks/useProjects","
import { Project } from "@/types/projects",
export function ActiveProjectsCard() {}
  const { projects, isLoading } = useProjects(),
  const [activeProjects, setActiveProjects] = useState<Project[]>([]),
  

  useEffect(() => {}
    if (projects && !isLoading) {}
      const active = projects.filter(p =>;
        ['offer_acceptedin_progress'].includes(p.status);
      ).slice(0, 3), // Limit to 3 most recent projects;
      setActiveProjects(active)
    }
  const { projects, isLoading } = useProjects();



  }, [projects, isLoading]),
  


  if (isLoading) {}
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
"
import { useEffect, useState } from "react",;"
import { Link } from "react-router-dom",;"
import { BriefcaseIcon, Clock } from "lucide-react",;"
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

            ))}
          </div>;
        </CardContent>;
      </Card>;
    );
  }


  


  if (activeProjects.length === 0) {}
  if (activeProjects && activeProjects.length === 0) {;


    return (
      <Card>;
        <CardHeader>;"
          <CardTitle className="flex items-center gap-2">;"
            <BriefcaseIcon className="h-5 w-5 text-primary" />;
            <span>Active Projects</span>;
          </CardTitle>;
          <CardDescription>Your ongoing work</CardDescription>;
        </CardHeader>;"
        <CardContent className="text-center py-6">;'"
          <p className="text-muted-foreground mb-2">You don't have any active projects at the moment.</p>;"
          <Button variant="outline" asChild>;"
            <Link to="/jobs">Find Opportunities</Link>;
          </Button>;
        </CardContent>;
      </Card>;
    );
  }
        ))}
      </CardContent>;
      {activeProjects && activeProjects.length > 2 && (;
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



'"