<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export interface Company {
  id: string,
  name: string,
  logoUrl?: string,
  theme?: {
<<<<<<< HEAD
<<<<<<< HEAD
    primaryColor: string;
    backgroundColor: string;


=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  teamLimit: number;
  billingCycle: string;
  workspaceUrl: string;
}
<<<<<<< HEAD
;
interface CompanyDashboardProps {;
=======
<<<<<<< HEAD

interface CompanyDashboardProps {
=======
;
interface CompanyDashboardProps {;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  company: Company;
}

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export function CompanyDashboard({ company }: CompanyDashboardProps) {
  return (
    <div className="container mx-auto max-w-7xl py-8 px-4 md:px-6">
      <WorkspaceHeader company={company} />


      
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      <div className="mt-8 grid grid-cols-1 lg: grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <QuickActions />
          <RecentActivity />
          <TalentPool />
        </div>


        
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        <div className="space-y-6">
          <TeamStats />
          <SharedInbox />
        </div>
      </div>
<<<<<<< HEAD
=======
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
  );
}
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  )
;
export function CompanyDashboard({ company }: CompanyDashboardProps) {;
  return (;
    <div className="container mx-auto max-w-7xl py-8 px-4 md:px-6">;
      <WorkspaceHeader company={company} />;

      <div className="mt-8 grid grid-cols-1 lg: grid-cols-3 gap-6">;
        <div className="lg:col-span-2 space-y-6">;
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

          <QuickActions />;
          <RecentActivity />;
          <TalentPool />;
        </div>;

        <div className="space - y-6">;

          <TeamStats />;
          <SharedInbox />;
        </div>;
      </div>;


    </div>


    </div>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  );
=======
    </div>);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}