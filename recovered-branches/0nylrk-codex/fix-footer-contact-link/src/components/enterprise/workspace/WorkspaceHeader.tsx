
:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/workspace/WorkspaceHeader.tsx

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from "react";
import {Button} from "@/components/ui/button";
import {type, Company} from "./CompanyDashboard";
import {Bell, Users, Settings} from "lucide-react";
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from "react",
import { Button } from "@/components/ui/button",
import { type Company } from "./CompanyDashboard",
import { Bell, Users, Settings } from "lucide-react",

<<<<<<< HEAD
<<<<<<< HEAD
interface WorkspaceHeaderProps {
  company: Company
}
export function WorkspaceHeader({ company }: WorkspaceHeaderProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center border border-border">
            <img
              src={company.logoUrl |"/placeholder.svg"}
              alt={company.name}
              className="max-h-10 max-w-10"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{company.name} Workspace</h1>
            <p className="text-muted-foreground">
              {company.plan} Plan · {company.teamSize} team members
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <Bell className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Users className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm: grid-cols-3 gap-4">
        <div className="bg-card rounded-lg p-4 border border-border">
          <div className="text-sm text-muted-foreground">Active Job Listings</div>
          <div className="text-2xl font-medium">8</div>
        </div>
        <div className="bg-card rounded-lg p-4 border border-border">
          <div className="text-sm text-muted-foreground">Candidate Applications</div>
          <div className="text-2xl font-medium">47</div>
        </div>
        <div className="bg-card rounded-lg p-4 border border-border">
          <div className="text-sm text-muted-foreground">Interviews Scheduled</div>
          <div className="text-2xl font-medium">12</div>
        </div>
      </div>
    </div>
  )

};

}
};
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




interface WorkspaceHeaderProps {
  company: Company
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}


export function WorkspaceHeader(): any ({ company }: WorkspaceHeaderProps) {;
  return (
=======

};

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from "react",;
import { Button } from "@/components/ui/button",;
import { type Company } from "./CompanyDashboard",;
import { Bell, Users, Settings } from "lucide-react";
interface WorkspaceHeaderProps {;
  company: Company;
}
;
export function WorkspaceHeader({ company }: WorkspaceHeaderProps) {;
  return (;
<<<<<<< HEAD
<<<<<<< HEAD
export function WorkspaceHeader(): any ({ company }: WorkspaceHeaderProps) {;
  return (

import React from "react",;
import { Button } from "@/components/ui/button",;
import { type Company } from "./CompanyDashboard",;
import { Bell, Users, Settings } from "lucide-react",;
;
interface WorkspaceHeaderProps {;
  company:Company;
}
;
export function WorkspaceHeader({ company } WorkspaceHeaderProps) {;
  return (;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <div className="space-y-6">;
      <div className="flex items-center justify-between">;
        <div className="flex items-center gap-4">;
          <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center border border-border">;
<<<<<<< HEAD
<<<<<<< HEAD
            <img ;
            <img;
              src={company.logoUrl || "/placeholder.svg"} ;
              alt={company.name} ;
              className="max-h-10 max-w-10";
            />;
          </div>;
          <div>;
            <h1 className="text-3xl font-bold tracking-tight">{company.name} Workspace</h1>;
            <p className="text-muted-foreground">;
              {company.plan} Plan · {company.teamSize} team members;
            </p>;
          </div>;
        </div>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <img
              src={company && company.logoUrl || "/placeholder && placeholder.svg"} 
              alt={company && company.name} 
              className="max-h-10 max-w-10"
            />;
          </div>;
          <div>;
            <h1 className="text-3xl font-bold tracking-tight">{company && company.name} Workspace</h1>;
            <p className="text-muted-foreground">;
              {company && company.plan} Plan · {company && company.teamSize} team members;
            </p>;
          </div>;
        </div>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="flex items-center gap-2">;
          <Button variant="outline" size="icon">;
            <Bell className="h-4 w-4" />;
          </Button>;
          <Button variant="outline" size="icon">;
            <Users className="h-4 w-4" />;
          </Button>;
          <Button variant="outline" size="icon">;
            <Settings className="h-4 w-4" />;
          </Button>;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
      ;
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="grid grid-cols-1 sm: grid-cols-3 gap-4">;
        <div className="bg-card rounded-lg p-4 border border-border">;
          <div className="text-sm text-muted-foreground">Active Job Listings</div>;
          <div className="text-2xl font-medium">8</div>;
        </div>;
        <div className="bg-card rounded-lg p-4 border border-border">;
          <div className="text-sm text-muted-foreground">Candidate Applications</div>;
          <div className="text-2xl font-medium">47</div>;
        </div>;
        <div className="bg-card rounded-lg p-4 border border-border">;
          <div className="text-sm text-muted-foreground">Interviews Scheduled</div>;
          <div className="text-2xl font-medium">12</div>;
        </div>;
      </div>;
    </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

:recovered - branches / 0nylrk - codex / fix - footer - contact - link / src / components / enterprise / workspace / WorkspaceHeader.tsx;
import React from './react';
import { Button } from '@/components / ui / button';
import { type, Company } from './CompanyDashboard';
import { Bell, Users, Settings } from './lucide-react';
interface WorkspaceHeaderProps {
  company: Company;
}
export /**
 * WorkspaceHeader - Function description
 */
function WorkspaceHeader() {
  return (
    <div className="space - y-6">;
      <div className="flex items - center justify - between">;
        <div className="flex items - center gap - 4">;
          <div className="h - 12 w - 12 rounded - lg bg - card flex items - center justify - center border border - border">;
            <img;
              src={company.logo_url || "/placeholder.svg"}
              alt={company.name}
              className="max - h-10 max - w-10";
            />;
          </div>;
          <div>;
            <h1 className="text - 3xl font - bold tracking - tight">{company.name} Workspace</h1>;
            <p className="text - muted - foreground">;
              {company.plan} Plan · {company.team_size} team members;
            </p>;
          </div>;
        </div>;
        <div className="flex items - center gap - 2">;
          <Button variant="outline" size="icon">;
            <Bell className="h - 4 w - 4" />;
          </Button>;
          <Button variant="outline" size="icon">;
            <Users className="h - 4 w - 4" />;
          </Button>;
          <Button variant="outline" size="icon">;
            <Settings className="h - 4 w - 4" />;
          </Button>;
        </div>;
      </div>;
      <div className="grid grid - cols - 1 sm: grid - cols - 3 gap - 4">;
        <div className="bg - card rounded - lg p - 4 border border - border">;
          <div className="text - sm text - muted - foreground">Active Job Listings</div>;
          <div className="text - 2xl font - medium">8</div>;
        </div>;
        <div className="bg - card rounded - lg p - 4 border border - border">;
          <div className="text - sm text - muted - foreground">Candidate Applications</div>;
          <div className="text - 2xl font - medium">47</div>;
        </div>;
        <div className="bg - card rounded - lg p - 4 border border - border">;
          <div className="text - sm text - muted - foreground">Interviews Scheduled</div>;
          <div className="text - 2xl font - medium">12</div>;
        </div>;
      </div>;
    </div>);
}
;


<<<<<<< HEAD
  );}
 interface WorkspaceHeaderProps {
  company: Company 
}export function WorkspaceHeader ({
  company 
}: WorkspaceHeaderProps) {
  return (<div className="space-y-6" > <div className="flex items-center justify-between" > <div className="flex items-center gap-4" > <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center border border-border" > <img src= {
  company.logoUrl || "/placeholder.svg" 
}alt= {
  company.name 
}className="max-h-10 max-w-10" /> </div> <div> <h1 className="text-3xl font-bold tracking-tight" > {
  company.name 
}Workspace</h1> <p className="text-muted-foreground" > {
  company.plan 
}Plan · {
  company.teamSize 
}team members flex items-center gap-2"> <Button variant=" outline"size=" icon"> <Bell className=" h-4 w-4"/> </Button> <Button variant=" outline"size=" icon"> <Users className=" h-4 w-4"/> </Button> <Button variant=" outline"size=" icon"> <Settings className=" h-4 w-4"/> </Button> </div> </div> </div> <div className=" bg-card rounded-lg p-4 border border-border"> <div className=" text-sm text-muted-foreground">Candidate Applications</div> <div className=" text-2xl font-medium">47</div> </div> <div className=" bg-card rounded-lg p-4 border border-border"> <div className=" text-sm text-muted-foreground">Interviews Scheduled</div> <div className=" text-2xl font-medium" >12</div> </div> </div> </div>) 
}
  );
}
;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
