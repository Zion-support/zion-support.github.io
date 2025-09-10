import React from "react";
<<<<<<< HEAD:backups/src.broken./components-disabled/WorkspaceHeader.tsx
import Image from "next/image"; // Import Image
import { Button } from "@/components/ui/button";
import { type Company } from "./CompanyDashboard";
import { Bell, Users, Settings } from 'lucide-react';




interface WorkspaceHeaderProps {
  company: Company;
}

export function WorkspaceHeader({ company }: WorkspaceHeaderProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center border border-border p-1"> {/* Added padding for contain */}
            <Image
              src={company.logoUrl || "/placeholder.svg"}
              alt={company.name}
              className="max-h-10 max-w-10"
                  />
=======
import { Button } from "@/components/ui/button";
import { Bell, Users, Settings } from "lucide-react";
export function WorkspaceHeader({ company }) {
    return (<div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center border border-border">
            <img loading="lazy" src={company.logoUrl || "/placeholder.svg"} alt={company.name} className="max-h-10 max-w-10"/>
>>>>>>> origin/backup-improvements-20250827-015311:src/components/enterprise/workspace/WorkspaceHeader.tsx
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{company.name} Workspace</h1>
            <p className="text-muted-foreground">
              {company.plan} Plan · {company.teamSize} team members
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" aria-label="Notifications">
<<<<<<< HEAD:backups/src.broken./components-disabled/WorkspaceHeader.tsx
            <Bell className="h-4 w-4"       />
          </Button>
          <Button variant="outline" size="icon" aria-label="Team members">
            <Users className="h-4 w-4"       />
          </Button>
          <Button variant="outline" size="icon" aria-label="Workspace settings">
            <Settings className="h-4 w-4"       />
=======
            <Bell className="h-4 w-4"/>
          </Button>
          <Button variant="outline" size="icon" aria-label="Team members">
            <Users className="h-4 w-4"/>
          </Button>
          <Button variant="outline" size="icon" aria-label="Workspace settings">
            <Settings className="h-4 w-4"/>
>>>>>>> origin/backup-improvements-20250827-015311:src/components/enterprise/workspace/WorkspaceHeader.tsx
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
<<<<<<< HEAD:backups/src.broken./components-disabled/WorkspaceHeader.tsx
    </div>
  );
=======
    </div>);
>>>>>>> origin/backup-improvements-20250827-015311:src/components/enterprise/workspace/WorkspaceHeader.tsx
}
