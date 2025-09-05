
<<<<<<< HEAD
import React from "react",
import { Button } from "@/components/ui/button",
import { type Company } from "./CompanyDashboard",
import { Bell, Users, Settings } from "lucide-react",
=======
import React from &quot;react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { type Company } from &quot;./CompanyDashboard&quot;;
import { Bell, Users, Settings } from &quot;lucide-react&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

interface WorkspaceHeaderProps {
  company: Company
}

export function WorkspaceHeader({ company }: WorkspaceHeaderProps) {
  return (
    <div className=&quot;space-y-6&quot;>
      <div className=&quot;flex items-center justify-between&quot;>
        <div className=&quot;flex items-center gap-4&quot;>
          <div className=&quot;h-12 w-12 rounded-lg bg-card flex items-center justify-center border border-border&quot;>
            <img 
              src={company.logoUrl || &quot;/placeholder.svg&quot;} 
              alt={company.name} 
              className=&quot;max-h-10 max-w-10&quot;
            />
          </div>
          <div>
            <h1 className=&quot;text-3xl font-bold tracking-tight&quot;>{company.name} Workspace</h1>
            <p className=&quot;text-muted-foreground&quot;>
              {company.plan} Plan · {company.teamSize} team members
            </p>
          </div>
        </div>
        
        <div className=&quot;flex items-center gap-2&quot;>
          <Button variant=&quot;outline&quot; size=&quot;icon&quot;>
            <Bell className=&quot;h-4 w-4&quot; />
          </Button>
          <Button variant=&quot;outline&quot; size=&quot;icon&quot;>
            <Users className=&quot;h-4 w-4&quot; />
          </Button>
          <Button variant=&quot;outline&quot; size=&quot;icon&quot;>
            <Settings className=&quot;h-4 w-4&quot; />
          </Button>
        </div>
      </div>
      
<<<<<<< HEAD
      <div className="grid grid-cols-1 sm: grid-cols-3 gap-4">
        <div className="bg-card rounded-lg p-4 border border-border">
          <div className="text-sm text-muted-foreground">Active Job Listings</div>
          <div className="text-2xl font-medium">8</div>
=======
      <div className=&quot;grid grid-cols-1 sm:grid-cols-3 gap-4&quot;>
        <div className=&quot;bg-card rounded-lg p-4 border border-border&quot;>
          <div className=&quot;text-sm text-muted-foreground&quot;>Active Job Listings</div>
          <div className=&quot;text-2xl font-medium&quot;>8</div>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        </div>
        <div className=&quot;bg-card rounded-lg p-4 border border-border&quot;>
          <div className=&quot;text-sm text-muted-foreground&quot;>Candidate Applications</div>
          <div className=&quot;text-2xl font-medium&quot;>47</div>
        </div>
        <div className=&quot;bg-card rounded-lg p-4 border border-border&quot;>
          <div className=&quot;text-sm text-muted-foreground&quot;>Interviews Scheduled</div>
          <div className=&quot;text-2xl font-medium&quot;>12</div>
        </div>
      </div>
    </div>
  )
}
