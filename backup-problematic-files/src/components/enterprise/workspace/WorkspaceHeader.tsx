
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import React from "react",;
import { Button } from "@/components/ui/button",;
import { type Company } from "./CompanyDashboard",;
=======
import React from "react";""
import { Button } from "@/components/ui/button";""
import { type Company } from "./CompanyDashboard";""
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { Bell, Users, Settings } from 'lucide-react';
;
interface WorkspaceHeaderProps {;
  company:Company;
}
export function WorkspaceHeader({ company } WorkspaceHeaderProps) {;
  return (;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    <div className="space-y-6">;
      <div className="flex items-center justify-between">;
        <div className="flex items-center gap-4">;
          <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center border border-border">;
<<<<<<< HEAD
<<<<<<< HEAD

=======
            <img;
              src={company.logoUrl || "/placeholder.svg"}
              alt={company.name}
              className="max-h-10 max-w-10";
              loading="lazy";
=======
    <div className="space-y-6">;"
</div>"
      <div className="flex items-center justify-between">;"
        <div className="flex items-center gap-4">;"
          <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center border border-border">;"
</div>
            <img;"
              src={company.logoUrl || "/placeholder.svg"}"
              alt={company.name}"
              className="max-h-10 max-w-10";""
              loading="lazy";"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            />;
</img>
          </div>;
          <div>;
            <h1 className="text-3xl font-bold tracking-tight">{company.name} Workspace</h1>;""
            <p className="text-muted-foreground">;"
</p>
            </p>;
<<<<<<< HEAD
          </div>;
        </div>;
        ;
        <div className="flex items-center gap-2">;
          <Button variant="outline" size="icon" aria-label="Notifications">;
            <Bell className="h-4 w-4" />;
          </Button>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          <Button variant="outline" size="icon" aria-label="Team members">;
            <Users className="h-4 w-4" />;
          </Button>;
          <Button variant="outline" size="icon" aria-label="Workspace settings">;
            <Settings className="h-4 w-4" />;
          </Button>;
        </div>;
      </div>;
<<<<<<< HEAD

=======
      ;
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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

=======
  );}
 import {;
  {;
  {;
  Bell,  Users, Settings ;
}from 'lucide-react' interface WorkspaceHeaderProps {;
  company: Company ;
}export function WorkspaceHeader ({;
  company ;
}: WorkspaceHeaderProps) {;
  return (<div className="space-y-6" > <div className="flex items-center justify-between" > <div className="flex items-center gap-4" > <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center border border-border" > <img src= {";
  company.logoUrl || "/placeholder.svg" ;
}alt= {;
  company.name ";
}className="max-h-10 max-w-10" loading="lazy" /> </div> <div> <h1 className="text-3xl font-bold tracking-tight" > {;
  company.name ";
}Workspace</h1> <p className="text-muted-foreground" > {;
  company.plan ;
}Plan  {;
  company.teamSize ";
}team members flex items-center gap-2"> <Button variant=" outline"size=" icon"aria-label=" Notifications"> <Bell className=" h-4 w-4"/> </Button> <Button variant=" outline"size=" icon"aria-label=" Team members"> <Users className=" h-4 w-4"/> </Button> <Button variant=" outline"size=" icon"aria-label=" Workspace settings"> <Settings className=" h-4 w-4"/> </Button> </div> </div> </div> <div className=" bg-card rounded-lg p-4 border border-border"> <div className=" text-sm text-muted-foreground">Candidate Applications</div> <div className=" text-2xl font-medium">47</div> </div> <div className=" bg-card rounded-lg p-4 border border-border"> <div className=" text-sm text-muted-foreground">Interviews Scheduled</div> <div className=" text-2xl font-medium" >12</div> </div> </div> </div>) ;
}'"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        </div>;"
        <div className="flex items-center gap-2">;"
          <Button variant="outline" size="icon" aria-label="Notifications">;"
"
            <Bell className="h-4 w-4" />;"

          ;"
          <Button variant="outline" size="icon" aria-label="Team members">;"
            <Users className="h-4 w-4" />;"

          <Button variant="outline" size="icon" aria-label="Workspace settings">;"
            <Settings className="h-4 w-4" />;"

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">;"
        <div className="bg-card rounded-lg p-4 border border-border">;"
          <div className="text-sm text-muted-foreground">Active Job Listings</div>;""
          <div className="text-2xl font-medium">8</div>;"
          <div className="text-sm text-muted-foreground">Candidate Applications</div>;""
          <div className="text-2xl font-medium">47</div>;"
          <div className="text-sm text-muted-foreground">Interviews Scheduled</div>;""
          <div className="text-2xl font-medium">12</div>;"
  return (<div className="space-y-6" > <div className="flex items-center justify-between" > <div className="flex items-center gap-4" > <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center border border-border" > <img src= {";"
}className="max-h-10 max-w-10" loading="lazy" /> </div> <div> <h1 className="text-3xl font-bold tracking-tight" > {;"
}Workspace</h1> <p className="text-muted-foreground" > {;"
</p>)"
}team members flex items-center gap-2"> <Button variant=" outline"size=" icon"aria-label=" Notifications"> <Bell className=" h-4 w-4"/>  <Button variant=" outline"size=" icon"aria-label=" Team members"> <Users className=" h-4 w-4"/>  <Button variant=" outline"size=" icon"aria-label=" Workspace settings"> <Settings className=" h-4 w-4"/>  </div> </div> </div> <div className=" bg-card rounded-lg p-4 border border-border"> <div className=" text-sm text-muted-foreground">Candidate Applications</div> <div className=" text-2xl font-medium">47</div> </div> <div className=" bg-card rounded-lg p-4 border border-border"> <div className=" text-sm text-muted-foreground">Interviews Scheduled</div> <div className=" text-2xl font-medium" >12</div> </div> </div> </div>) ;""
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
