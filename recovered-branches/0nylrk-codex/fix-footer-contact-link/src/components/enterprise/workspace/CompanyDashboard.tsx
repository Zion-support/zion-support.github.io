




import React from "react",""
import { WorkspaceHeader } from "./WorkspaceHeader",""
import { SharedInbox } from "./SharedInbox",""
import { TeamStats } from "./TeamStats",""
import { QuickActions } from "./QuickActions",""
import { RecentActivity } from "./RecentActivity";""
import { TalentPool } from "./TalentPool";""
import { RecentActivity } from "./RecentActivity",""
import { TalentPool } from "./TalentPool","
export interface Company {
  // TODO: Implement
}
  id: string,
  name: string,
  logoUrl?: string,
  theme?: {


    primaryColor: string,

    backgroundColor: string,
    textColor: string;
  },
  plan: string,
  teamSize: number,
  teamLimit: number,
  billingCycle: string,

  workspaceUrl: string;"
import React from "react",;""
import { WorkspaceHeader } from "./WorkspaceHeader",;""
import { SharedInbox } from "./SharedInbox",;""
import { TeamStats } from "./TeamStats",;""
import { QuickActions } from "./QuickActions",;""
import { RecentActivity } from "./RecentActivity",;""
import { TalentPool } from "./TalentPool",;"

export interface Company {;
  id: string;,
  name: string;
  logoUrl?: string;
  theme?: {;

    primaryColor: string;,
  backgroundColor: string;

    textColor: string;
  },;
  plan: string,;
  teamSize: number,;



  teamLimit: number;,
  billingCycle: string;
  workspaceUrl: string;

}
interface CompanyDashboardProps {
  // TODO: Implement
}
;
interface CompanyDashboardProps {;}
  company: Company;}
}


export function CompanyDashboard({ company }: CompanyDashboardProps) {
  return ("
    <div className="container mx-auto max-w-7xl py-8 px-4 md:px-6">"
</div>
      <WorkspaceHeader company={company} />
</WorkspaceHeader>


      


      
      "
      <div className="mt-8 grid grid-cols-1 lg: grid-cols-3 gap-6">"
</div>"
        <div className="lg:col-span-2 space-y-6">"
</div>

          <QuickActions />
</QuickActions>
          <RecentActivity />
</RecentActivity>
          <TalentPool />
</TalentPool>
        </div>



        


        
        "
        <div className="space-y-6">"
</div>

          <TeamStats />
</TeamStats>
          <SharedInbox />
</SharedInbox>
        </div>

      </div>"
    <div className="container mx-auto max-w-7xl py-8 px-4 md:px-6">;"
</div>
      <WorkspaceHeader company={company} />;
</WorkspaceHeader>
"
      <div className="mt-8 grid grid-cols-1 lg: grid-cols-3 gap-6">;"
</div>"
        <div className="lg:col-span-2 space-y-6">;"
</div>"
    <div className="container mx - auto max - w-7xl py - 8 px - 4 md:px - 6">;"
</div>
      <WorkspaceHeader company={company} />;
</WorkspaceHeader>"
      <div className="mt - 8 grid grid - cols - 1 lg: grid - cols - 3 gap - 6">;"
</div>"
        <div className="lg:col - span - 2 space - y-6">;"
</div>
          <QuickActions />;
</QuickActions>
          <RecentActivity />;
</RecentActivity>
          <TalentPool />;
</TalentPool>
        </div>;"
        <div className="space - y-6">;"
</div>
          <TeamStats />;
</TeamStats>
          <SharedInbox />;
</SharedInbox>
        </div>;
      </div>;
    </div>


    </div>;)
    </div>);
    </div>);"
    <div className="container mx-auto max-w-7xl py-8 px-4 md:px-6">;"
</div>
      <WorkspaceHeader company={company} />;
</WorkspaceHeader>"
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">;"
</div>"
        <div className="lg:col-span-2 space-y-6">;"
</div>
          <QuickActions />;
</QuickActions>
          <RecentActivity />;
</RecentActivity>
          <TalentPool />;
</TalentPool>
        </div>;"
        <div className="space-y-6">;"
</div>
          <TeamStats />;
</TeamStats>
          <SharedInbox />;
</SharedInbox>
        </div>;
      </div>;
    </div>;"

