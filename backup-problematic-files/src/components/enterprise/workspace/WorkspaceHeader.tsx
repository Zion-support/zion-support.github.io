
import React from "react",;""
import { Button } from "@/components/ui/button",;""
import { type Company } from "./CompanyDashboard",;""
import { Bell, Users, Settings } from 'lucide-react';'
;
interface WorkspaceHeaderProps {;
  company:Company;
}
;
export function WorkspaceHeader({ company } WorkspaceHeaderProps) {;
  return (;'
    <div className="space-y-6">;"
</div>"
      <div className="flex items-center justify-between">;"
</div>"
        <div className="flex items-center gap-4">;"
</div>"
          <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center border border-border">;"
</div>
            <img;"
              src={company.logoUrl || "/placeholder.svg"}"
              alt={company.name}"
              className="max-h-10 max-w-10";""
              loading="lazy";"
            />;
</img>
          </div>;
          <div>;
</div>"
            <h1 className="text-3xl font-bold tracking-tight">{company.name} Workspace</h1>;""
            <p className="text-muted-foreground">;"
</p>
            </p>;
          </div>;
        </div>;"
        <div className="flex items-center gap-2">;"
</div>"
          <Button variant="outline" size="icon" aria-label="Notifications">;"
</Button>"
            <Bell className="h-4 w-4" />;"
</Bell>
          </Button>;"
          <Button variant="outline" size="icon" aria-label="Team members">;"
</Button>"
            <Users className="h-4 w-4" />;"
</Users>
          </Button>;"
          <Button variant="outline" size="icon" aria-label="Workspace settings">;"
</Button>"
            <Settings className="h-4 w-4" />;"
</Settings>
          </Button>;
        </div>;
      </div>;"
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">;"
</div>"
        <div className="bg-card rounded-lg p-4 border border-border">;"
</div>"
          <div className="text-sm text-muted-foreground">Active Job Listings</div>;""
          <div className="text-2xl font-medium">8</div>;"
        </div>;"
        <div className="bg-card rounded-lg p-4 border border-border">;"
</div>"
          <div className="text-sm text-muted-foreground">Candidate Applications</div>;""
          <div className="text-2xl font-medium">47</div>;"
        </div>;"
        <div className="bg-card rounded-lg p-4 border border-border">;"
</div>"
          <div className="text-sm text-muted-foreground">Interviews Scheduled</div>;""
          <div className="text-2xl font-medium">12</div>;"
        </div>;
      </div>;
    </div>;"
  return (<div className="space-y-6" > <div className="flex items-center justify-between" > <div className="flex items-center gap-4" > <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center border border-border" > <img src= {";"
</div>"
}className="max-h-10 max-w-10" loading="lazy" /> </div> <div> <h1 className="text-3xl font-bold tracking-tight" > {;"
</div>"
}Workspace</h1> <p className="text-muted-foreground" > {;"
</p>)"
}team members flex items-center gap-2"> <Button variant=" outline"size=" icon"aria-label=" Notifications"> <Bell className=" h-4 w-4"/> </Button> <Button variant=" outline"size=" icon"aria-label=" Team members"> <Users className=" h-4 w-4"/> </Button> <Button variant=" outline"size=" icon"aria-label=" Workspace settings"> <Settings className=" h-4 w-4"/> </Button> </div> </div> </div> <div className=" bg-card rounded-lg p-4 border border-border"> <div className=" text-sm text-muted-foreground">Candidate Applications</div> <div className=" text-2xl font-medium">47</div> </div> <div className=" bg-card rounded-lg p-4 border border-border"> <div className=" text-sm text-muted-foreground">Interviews Scheduled</div> <div className=" text-2xl font-medium" >12</div> </div> </div> </div>) ;""