<<<<<<< HEAD



=======
import React from "react";
import { WorkspaceHeader } from "./WorkspaceHeader";
import { SharedInbox } from "./SharedInbox";
import { TeamStats } from "./TeamStats";
import { QuickActions } from "./QuickActions";
import { RecentActivity } from "./RecentActivity";
import { TalentPool } from "./TalentPool";
export interface Company {;
  id: string;
  name: string;
  logoUrl?: string;
  theme?: {
    primaryColor: string;
    backgroundColor: string;
    textColor: string;
  };
  plan: string;
  teamSize: number;

import React from "react",
import { WorkspaceHeader } from "./WorkspaceHeader",
import { SharedInbox } from "./SharedInbox",
import { TeamStats } from "./TeamStats",
import { QuickActions } from "./QuickActions",



import { RecentActivity } from "./RecentActivity";
import { TalentPool } from "./TalentPool";
import { RecentActivity } from "./RecentActivity",
import { TalentPool } from "./TalentPool",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export interface Company {
  id: string,
  name: string,
  logoUrl?: string,
  theme?: {


<<<<<<< HEAD
=======


=======

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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


<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  teamLimit: number;
  billingCycle: string;
  workspaceUrl: string;
}

<<<<<<< HEAD

  company: Company;
}

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
;
interface CompanyDashboardProps {;

interface CompanyDashboardProps {
;
interface CompanyDashboardProps {;
  company: Company;
}

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export function CompanyDashboard({ company }: CompanyDashboardProps) {
  return (
    <div className="container mx-auto max-w-7xl py-8 px-4 md:px-6">
      <WorkspaceHeader company={company} />
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

      


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
      
      
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      <div className="mt-8 grid grid-cols-1 lg: grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <QuickActions />
          <RecentActivity />
          <TalentPool />
        </div>
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

        


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
        
        
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        <div className="space-y-6">
          <TeamStats />
          <SharedInbox />
        </div>
      </div>
<<<<<<< HEAD


=======
    </div>
  );
}
  )
;
export function CompanyDashboard({ company }: CompanyDashboardProps) {;
  return (;

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
interface CompanyDashboardProps {;
  company: Company;
}

export function CompanyDashboard(): any ({ company }: CompanyDashboardProps) {;
  return (
    <div className="container mx-auto max-w-7xl py-8 px-4 md:px-6">;
      <WorkspaceHeader company={company} />;

      <div className="mt-8 grid grid-cols-1 lg: grid-cols-3 gap-6">;
        <div className="lg:col-span-2 space-y-6">;
<<<<<<< HEAD
=======
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

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          <QuickActions />;
          <RecentActivity />;
          <TalentPool />;
        </div>;
<<<<<<< HEAD

        <div className="space - y-6">;

=======
        <div className="space - y-6">;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          <TeamStats />;
          <SharedInbox />;
        </div>;
      </div>;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

    </div>


    </div>;
  );
<<<<<<< HEAD
=======
    </div>);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
=======
    </div>);
}
    </div>);
}

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
          <TeamStats />;
          <SharedInbox />;
        </div>;
      </div>;
    </div>;
  );
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
