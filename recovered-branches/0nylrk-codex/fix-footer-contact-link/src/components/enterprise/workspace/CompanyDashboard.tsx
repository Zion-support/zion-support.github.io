import React from "react",
import { WorkspaceHeader } from "./WorkspaceHeader",
import { SharedInbox } from "./SharedInbox",
import { TeamStats } from "./TeamStats",
import { QuickActions } from "./QuickActions",



import { RecentActivity } from "./RecentActivity";
import { TalentPool } from "./TalentPool";
import { RecentActivity } from "./RecentActivity",
import { TalentPool } from "./TalentPool",
=======


=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export interface Company {
  id: string,
  name: string,
  logoUrl?: string,
  theme?: {


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
=======

=======
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  teamLimit: number;
  billingCycle: string;
  workspaceUrl: string;
}

interface CompanyDashboardProps {
;
interface CompanyDashboardProps {;
  company: Company;
}

=======
=======
  company: Company;
}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="mt-8 grid grid-cols-1 lg: grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <QuickActions />
          <RecentActivity />
          <TalentPool />
        </div>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="space-y-6">
          <TeamStats />
          <SharedInbox />
        </div>
      </div>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

interface CompanyDashboardProps {;
  company: Company;
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function CompanyDashboard(): any ({ company }: CompanyDashboardProps) {;
  return (
    <div className="container mx-auto max-w-7xl py-8 px-4 md:px-6">;
      <WorkspaceHeader company={company} />;
      <div className="mt-8 grid grid-cols-1 lg: grid-cols-3 gap-6">;
        <div className="lg:col-span-2 space-y-6">;=======
import React from './react';
import { WorkspaceHeader  } from './WorkspaceHeader';
import { SharedInbox  } from './SharedInbox';
import { TeamStats  } from './TeamStats';
import { QuickActions  } from './QuickActions';
import { RecentActivity  } from './RecentActivity';
import { TalentPool  } from './TalentPool';
export interface Company {
  id: string;
  name: string;
  logo_url?: string;
  theme?: {
    primary_color: string;
    background_color: string;
    text_color: string;
  }
  plan: string;
  team_size: number;
  team_limit: number;
  billing_cycle: string;
  workspace_url: string;
}
interface CompanyDashboardProps {
  company: Company;
}
export /**
 * CompanyDashboard - Function description
 */
function CompanyDashboard() {
  return (
    <div className="container mx - auto max - w-7xl py - 8 px - 4 md:px - 6">;
      <WorkspaceHeader company={company} />;
      <div className="mt - 8 grid grid - cols - 1 lg: grid - cols - 3 gap - 6">;
        <div className="lg:col - span - 2 space - y-6">;

        <div className="space - y-6">;
          <TeamStats />;
          <SharedInbox />;
        </div>;
      </div>;
    </div>


    </div>;
  );
    </div>);
import React from "react",;
import { WorkspaceHeader } from "./WorkspaceHeader",;
import { SharedInbox } from "./SharedInbox",;
import { TeamStats } from "./TeamStats",;
import { QuickActions } from "./QuickActions",;
import { RecentActivity } from "./RecentActivity",;
import { TalentPool } from "./TalentPool",;
;
export interface Company {;
  id:string,;
  name:string,;
  logoUrl?:string,;
  theme?:{;
    primaryColor:string,;
    backgroundColor:string,;
    textColor:string;
  },;
  plan:string,;
  teamSize:number,;
  teamLimit:number,;
  billingCycle:string,;
  workspaceUrl:string;}
;
interface CompanyDashboardProps {;
  company:Company;
}
;
export function CompanyDashboard({ company } CompanyDashboardProps) {;
  return (;
    <div className="container mx-auto max-w-7xl py-8 px-4 md:px-6">;
      <WorkspaceHeader company={company} />;
      ;
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">;
        <div className="lg:col-span-2 space-y-6">;
          <QuickActions />;
          <RecentActivity />;
          <TalentPool />;
        </div>;
        ;
        <div className="space-y-6">;
=======

        <div className="space - y-6">;
          <TeamStats />;
          <SharedInbox />;
        </div>;
      </div>;
    </div>;
<<<<<<< HEAD
  );
}
;
=======}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  );
}
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
