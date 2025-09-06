

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
import React from "react";
import {Button} from "@/components/ui/button";
import {type, Company} from "./CompanyDashboard";
import {Bell, Users, Settings} from "lucide-react";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React from "react",
import { Button } from "@/components/ui/button",
import { type Company } from "./CompanyDashboard",
import { Bell, Users, Settings } from "lucide-react",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

<<<<<<< HEAD


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface WorkspaceHeaderProps {
  company: Company
}
<<<<<<< HEAD


export function WorkspaceHeader(): any ({ company }: WorkspaceHeaderProps) {;
=======
<<<<<<< HEAD
=======
=======
interface WorkspaceHeaderProps {
  company: Company
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
interface WorkspaceHeaderProps {
  company: Company
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export function WorkspaceHeader({ company }: WorkspaceHeaderProps) {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center border border-border">
<<<<<<< HEAD
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

    <div className="space-y-6">;
      <div className="flex items-center justify-between">;
        <div className="flex items-center gap-4">;
          <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center border border-border">;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
<<<<<<< HEAD


=======
};
import React from "react",;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { Button } from "@/components/ui/button",;
import { type Company } from "./CompanyDashboard",;
import { Bell, Users, Settings } from "lucide-react";
interface WorkspaceHeaderProps {;
  company: Company
};

<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",;
import { Button } from "@/components/ui/button",;
import { type Company } from "./CompanyDashboard",;
import { Bell, Users, Settings } from "lucide-react";
interface WorkspaceHeaderProps {;
  company: Company;
}
<<<<<<< HEAD
;
export function WorkspaceHeader({ company }: WorkspaceHeaderProps) {;
  return (;

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    <div className="space-y-6">;
      <div className="flex items-center justify-between">;
        <div className="flex items-center gap-4">;
          <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center border border-border">;
<<<<<<< HEAD
            <img
              src={company && company.logoUrl || "/placeholder && placeholder.svg"} 
              alt={company && company.name} 
              className="max-h-10 max-w-10"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            />;
          </div>;
          <div>;
            <h1 className="text - 3xl font - bold tracking - tight">{company.name} Workspace</h1>;
            <p className="text - muted - foreground">;
              {company.plan} Plan · {company.team_size} team members;
            </p>;
          </div>;
        </div>;
<<<<<<< HEAD
        <div className="flex items - center gap - 2">;
=======

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        <div className="flex items-center gap-2">;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
      <div className="grid grid - cols - 1 sm: grid - cols - 3 gap - 4">;
        <div className="bg - card rounded - lg p - 4 border border - border">;
          <div className="text - sm text - muted - foreground">Active Job Listings</div>;
          <div className="text - 2xl font - medium">8</div>;
=======
<<<<<<< HEAD

=======
      ;
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      <div className="grid grid-cols-1 sm: grid-cols-3 gap-4">;
        <div className="bg-card rounded-lg p-4 border border-border">;
          <div className="text-sm text-muted-foreground">Active Job Listings</div>;
          <div className="text-2xl font-medium">8</div>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
    </div>);
}
=======
    </div>;
<<<<<<< HEAD
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
}
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
;


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
