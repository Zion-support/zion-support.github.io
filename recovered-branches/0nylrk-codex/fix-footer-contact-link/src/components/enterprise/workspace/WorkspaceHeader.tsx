<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import {Button} from "@/components/ui/button";
import {type, Company} from "./CompanyDashboard";
import {Bell, Users, Settings} from "lucide-react";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import React from "react",
import { Button } from "@/components/ui/button",
import { type Company } from "./CompanyDashboard",
import { Bell, Users, Settings } from "lucide-react",
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
interface WorkspaceHeaderProps {
  company: Company
}
export function WorkspaceHeader(): any ({ company }: WorkspaceHeaderProps) {;
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

};

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
export function WorkspaceHeader(): any ({ company }: WorkspaceHeaderProps) {;
  return (

export function WorkspaceHeader(): any ({ company }: WorkspaceHeaderProps) {;
  return (

};

import React from "react",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { Button } from "@/components/ui/button",;
import { type Company } from "./CompanyDashboard",;
import { Bell, Users, Settings } from "lucide-react";
interface WorkspaceHeaderProps {;
  company: Company;
}
;
export function WorkspaceHeader({ company }: WorkspaceHeaderProps) {;
  return (;

interface WorkspaceHeaderProps {
  company: Company
import React from \"react\",;
import { Button } from \"@/components/ui/button\",;
import { type Company } from \"./CompanyDashboard\",;
import { Bell, Users, Settings } from \"lucide-react\",;
interface WorkspaceHeaderProps {}
  company: Company}
}
export function WorkspaceHeader({ company }: WorkspaceHeaderProps) {
  return (
    <div className=\"space-y-6\" />
      <div className=\"flex items-center justify-between\" />
        <div className=\"flex items-center gap-4\" />
          <div className=\"h-12 w-12 rounded-lg bg-card flex items-center justify-center border border-border\" />}
            <img;}
src={company.logoUrl |\"/placeholder.svg\"}
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

;
              className=\"max-h-10 max-w-10\"

import { Button } from "@/components/ui/button",;
import { type Company } from "./CompanyDashboard",;
import { Bell, Users, Settings } from "lucide-react";
interface WorkspaceHeaderProps {;
  company: Company
};

import React from "react",;
import { Button } from "@/components/ui/button",;
import { type Company } from "./CompanyDashboard",;
import { Bell, Users, Settings } from "lucide-react";
interface WorkspaceHeaderProps {;
  company: Company;
}
"
    <div className="space-y-6">;"
      <div className="flex items-center justify-between">;"
        <div className="flex items-center gap-4">;"
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
<div className="grid grid - cols - 1 sm: grid - cols - 3 gap - 4">;
        <div className="bg - card rounded - lg p - 4 border border - border">;
          <div className="text - sm text - muted - foreground">Active Job Listings</div>;
          <div className="text - 2xl font - medium">8</div>;
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
</div>);
}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
;

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  );}
 interface WorkspaceHeaderProps {}
  company: Company;
}export function WorkspaceHeader() { return null; }
}alt= {}
  company.name "
}className="max-h-10 max-w-10" /> </div> <div> <h1 className="text-3xl font-bold tracking-tight" > {}
  company.name "
}Workspace</h1> <p className="text-muted-foreground" > {}
  company.plan;
}Plan · {}
  company.teamSize "
}team members flex items-center gap-2"> <Button variant=" outline"size=" icon"> <Bell className=" h-4 w-4"/> </Button> <Button variant=" outline"size=" icon"> <Users className=" h-4 w-4"/> </Button> <Button variant=" outline"size=" icon"> <Settings className=" h-4 w-4"/> </Button> </div> </div> </div> <div className=" bg-card rounded-lg p-4 border border-border"> <div className=" text-sm text-muted-foreground">Candidate Applications</div> <div className=" text-2xl font-medium">47</div> </div> <div className=" bg-card rounded-lg p-4 border border-border"> <div className=" text-sm text-muted-foreground">Interviews Scheduled</div> <div className=" text-2xl font-medium" >12</div> </div> </div> </div>) 
}
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

import React from "react",""
import { Button } from "@/components/ui/button",""
import { type Company } from "./CompanyDashboard",""
import { Bell, Users, Settings } from "lucide-react","
interface WorkspaceHeaderProps {
  // TODO: Implement
}
  company: Company;
export function WorkspaceHeader({ company }: WorkspaceHeaderProps) {
  return ("
    <div className="space-y-6">"
</div>"
      <div className="flex items-center justify-between">"
        <div className="flex items-center gap-4">"
          <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center border border-border">"
</div>
            <img;"
              src={company.logoUrl |"/placeholder.svg"}"
              alt={company.name}"
              className="max-h-10 max-w-10""

            />
</img>
          </div>

          <div>
            <h1 className="text-3xl font-bold tracking-tight">{company.name} Workspace</h1>""
            <p className="text-muted-foreground">"
</p>

            </p>
          </div>
        </div>"
        <div className="flex items-center gap-2">"
          <Button variant="outline" size="icon">"
"
            <Bell className="h-4 w-4" />"

            <Users className="h-4 w-4" />"

            <Settings className="h-4 w-4" />"

</Settings>
          </Button>
        </div>

      </div>"
      <div className="grid grid-cols-1 sm: grid-cols-3 gap-4">"
        <div className="bg-card rounded-lg p-4 border border-border">"
          <div className="text-sm text-muted-foreground">Active Job Listings</div>""
          <div className="text-2xl font-medium">8</div>"
          <div className="text-sm text-muted-foreground">Candidate Applications</div>""
          <div className="text-2xl font-medium">47</div>"
          <div className="text-sm text-muted-foreground">Interviews Scheduled</div>""
          <div className="text-2xl font-medium">12</div>"
    <div className="space-y-6">;"
      <div className="flex items-center justify-between">;"
        <div className="flex items-center gap-4">;"
          <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center border border-border">;"
              src={company && company.logoUrl || "/placeholder && placeholder.svg"}"
              alt={company && company.name} "
            />;
          </div>;
          <div>;
            <h1 className="text-3xl font-bold tracking-tight">{company && company.name} Workspace</h1>;""
            <p className="text-muted-foreground">;"
            </p>;
        </div>;"
        <div className="flex items-center gap-2">;"
          <Button variant="outline" size="icon">;"
            <Bell className="h-4 w-4" />;"

          ;"
            <Users className="h-4 w-4" />;"

            <Settings className="h-4 w-4" />;"

          ;
      <div className="grid grid-cols-1 sm: grid-cols-3 gap-4">;"
        <div className="bg-card rounded-lg p-4 border border-border">;"
          <div className="text-sm text-muted-foreground">Active Job Listings</div>;""
          <div className="text-2xl font-medium">8</div>;"
          <div className="text-sm text-muted-foreground">Candidate Applications</div>;""
          <div className="text-2xl font-medium">47</div>;"
          <div className="text-sm text-muted-foreground">Interviews Scheduled</div>;""
          <div className="text-2xl font-medium">12</div>;"
    <div className="space - y-6">;"
      <div className="flex items - center justify - between">;"
        <div className="flex items - center gap - 4">;"
          <div className="h - 12 w - 12 rounded - lg bg - card flex items - center justify - center border border - border">;"
              src={company.logo_url || "/placeholder.svg"}"
              className="max - h-10 max - w-10";"
            <h1 className="text - 3xl font - bold tracking - tight">{company.name} Workspace</h1>;""
            <p className="text - muted - foreground">;"
        <div className="flex items - center gap - 2">;"
            <Bell className="h - 4 w - 4" />;"

            <Users className="h - 4 w - 4" />;"

            <Settings className="h - 4 w - 4" />;"

      <div className="grid grid - cols - 1 sm: grid - cols - 3 gap - 4">;"
        <div className="bg - card rounded - lg p - 4 border border - border">;"
          <div className="text - sm text - muted - foreground">Active Job Listings</div>;""
          <div className="text - 2xl font - medium">8</div>;"
          <div className="text - sm text - muted - foreground">Candidate Applications</div>;""
          <div className="text - 2xl font - medium">47</div>;"
          <div className="text - sm text - muted - foreground">Interviews Scheduled</div>;""
          <div className="text - 2xl font - medium">12</div>;"
      </div>;)
    </div>);"
  return (<div className="space-y-6" > <div className="flex items-center justify-between" > <div className="flex items-center gap-4" > <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center border border-border" > <img src= {"
}className="max-h-10 max-w-10" /> </div> <div> <h1 className="text-3xl font-bold tracking-tight" > {"
}Workspace</h1> <p className="text-muted-foreground" > {"
</p>)"
}team members flex items-center gap-2"> <Button variant=" outline"size=" icon"> <Bell className=" h-4 w-4"/>  <Button variant=" outline"size=" icon"> <Users className=" h-4 w-4"/>  <Button variant=" outline"size=" icon"> <Settings className=" h-4 w-4"/>  </div> </div> </div> <div className=" bg-card rounded-lg p-4 border border-border"> <div className=" text-sm text-muted-foreground">Candidate Applications</div> <div className=" text-2xl font-medium">47</div> </div> <div className=" bg-card rounded-lg p-4 border border-border"> <div className=" text-sm text-muted-foreground">Interviews Scheduled</div> <div className=" text-2xl font-medium" >12</div> </div> </div> </div>)""
pr-12325
}team members flex items-center gap-2"> <Button variant=" outline"size=" icon"> <Bell className=" h-4 w-4"/> </Button> <Button variant=" outline"size=" icon"> <Users className=" h-4 w-4"/> </Button> <Button variant=" outline"size=" icon"> <Settings className=" h-4 w-4"/> </Button> </div> </div> </div> <div className=" bg-card rounded-lg p-4 border border-border"> <div className=" text-sm text-muted-foreground">Candidate Applications</div> <div className=" text-2xl font-medium">47</div> </div> <div className=" bg-card rounded-lg p-4 border border-border"> <div className=" text-sm text-muted-foreground">Interviews Scheduled</div> <div className=" text-2xl font-medium" >12</div> </div> </div> </div>)""

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
