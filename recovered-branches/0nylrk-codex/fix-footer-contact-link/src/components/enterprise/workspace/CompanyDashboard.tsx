
import React from "react",
import { WorkspaceHeader } from "./WorkspaceHeader",
import { SharedInbox } from "./SharedInbox",
import { TeamStats } from "./TeamStats",
import { QuickActions } from "./QuickActions",
<<<<<<< HEAD
import { RecentActivity } from "./RecentActivity";
import { TalentPool } from "./TalentPool";
=======
import { RecentActivity } from "./RecentActivity",
import { TalentPool } from "./TalentPool",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export interface Company {
  id: string,
  name: string,
  logoUrl?: string,
  theme?: {
<<<<<<< HEAD
    primaryColor: string;
    backgroundColor: string;

    textColor: string;
  }

  plan: string;
  teamSize: number;
  teamLimit: number;
  billingCycle: string;
  workspaceUrl: string
}
interface CompanyDashboardProps {
  company: Company;
}
=======
    primaryColor: string,
    backgroundColor: string,
    textColor: string
  },
  plan: string,
  teamSize: number,
  teamLimit: number,
  billingCycle: string,
  workspaceUrl: string
import React from "react",;
import { WorkspaceHeader } from "./WorkspaceHeader",;
import { SharedInbox } from "./SharedInbox",;
import { TeamStats } from "./TeamStats",;
import { QuickActions } from "./QuickActions",;
import { RecentActivity } from "./RecentActivity",;
import { TalentPool } from "./TalentPool",;
export interface Company {;
  id: string,;
  name: string,;
  logoUrl?: string,;
  theme?: {;
    primaryColor: string,;
    backgroundColor: string,;
    textColor: string;
  },;
  plan: string,;
  teamSize: number,;
  teamLimit: number;
  billingCycle: string;
  workspaceUrl: string;
}
;
interface CompanyDashboardProps {;
  company: Company;
}

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export function CompanyDashboard({ company }: CompanyDashboardProps) {
  return (
    <div className="container mx-auto max-w-7xl py-8 px-4 md:px-6">
      <WorkspaceHeader company={company} />
<<<<<<< HEAD
=======
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      <div className="mt-8 grid grid-cols-1 lg: grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <QuickActions />
          <RecentActivity />
          <TalentPool />
        </div>
<<<<<<< HEAD
=======
        
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        <div className="space-y-6">
          <TeamStats />
          <SharedInbox />
        </div>
      </div>
    </div>
<<<<<<< HEAD
  );
}
=======
  )
;
export function CompanyDashboard({ company }: CompanyDashboardProps) {;
  return (;
    <div className="container mx-auto max-w-7xl py-8 px-4 md:px-6">;
      <WorkspaceHeader company={company} />;
      <div className="mt-8 grid grid-cols-1 lg: grid-cols-3 gap-6">;
        <div className="lg:col-span-2 space-y-6">;
          <QuickActions />;
          <RecentActivity />;
          <TalentPool />;
        </div>;
        <div className="space-y-6">;
          <TeamStats />;
          <SharedInbox />;
        </div>;
      </div>;
    </div>;
  );
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
