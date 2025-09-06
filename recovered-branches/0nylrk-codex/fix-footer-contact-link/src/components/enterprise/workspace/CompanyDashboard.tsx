<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/workspace/CompanyDashboard.tsx

=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

import React from "react",
import { WorkspaceHeader } from "./WorkspaceHeader",
import { SharedInbox } from "./SharedInbox",
import { TeamStats } from "./TeamStats",
import { QuickActions } from "./QuickActions",
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export interface Company {
  id: string,
  name: string,
  logoUrl?: string,
  theme?: {
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
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
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  teamLimit: number;
  billingCycle: string;
  workspaceUrl: string;
}
<<<<<<< HEAD

<<<<<<< HEAD
  company: Company;
}

=======

=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  company: Company;
}

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export function CompanyDashboard({ company }: CompanyDashboardProps) {
  return (
    <div className="container mx-auto max-w-7xl py-8 px-4 md:px-6">
      <WorkspaceHeader company={company} />
<<<<<<< HEAD

<<<<<<< HEAD
=======

      


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
      
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <div className="mt-8 grid grid-cols-1 lg: grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <QuickActions />
          <RecentActivity />
          <TalentPool />
        </div>
<<<<<<< HEAD

<<<<<<< HEAD
=======

        


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
        
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className="space-y-6">
          <TeamStats />
          <SharedInbox />
        </div>
      </div>
<<<<<<< HEAD

<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  )
;
export function CompanyDashboard({ company }: CompanyDashboardProps) {;
  return (;
<<<<<<< HEAD
=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/workspace/CompanyDashboard.tsx
interface CompanyDashboardProps {;
  company: Company;
}
export function CompanyDashboard(): any ({ company }: CompanyDashboardProps) {;
  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <div className="container mx-auto max-w-7xl py-8 px-4 md:px-6">;
      <WorkspaceHeader company={company} />;
      <div className="mt-8 grid grid-cols-1 lg: grid-cols-3 gap-6">;
        <div className="lg:col-span-2 space-y-6">;
<<<<<<< HEAD
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/workspace/CompanyDashboard.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/workspace/CompanyDashboard.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <QuickActions />;
          <RecentActivity />;
          <TalentPool />;
        </div>;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/workspace/CompanyDashboard.tsx

        <div className="space - y-6">;

========
        <div className="space - y-6">;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/workspace/CompanyDashboard.tsx
          <TeamStats />;
          <SharedInbox />;
        </div>;
      </div>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/workspace/CompanyDashboard.tsx

<<<<<<< HEAD
=======

    </div>


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    </div>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  );
<<<<<<< HEAD
}
;

=======
=======
    </div>);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
    </div>);
}
=======

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
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className="space-y-6">;
          <TeamStats />;
          <SharedInbox />;
        </div>;
      </div>;
<<<<<<< HEAD
    </div>;
  );}
 export interface Company {
  id: string;
name: string;
logoUrl?: string;
theme?: {
  primaryColor: string;
backgroundColor: string;
textColor: string 
};
plan: string;
teamSize: number;
teamLimit: number;
billingCycle: string;
workspaceUrl: string 
}interface CompanyDashboardProps {
  company: Company 
}export function CompanyDashboard ({
  company 
}: CompanyDashboardProps) {
  return (<div className="container mx-auto max-w-7xl py-8 px-4 md:px-6" > company 
}/> <QuickActions /> <RecentActivity /> <TalentPool /> </div> <div className="space-y-6" > <TeamStats /> <SharedInbox /> </div> </div> </div>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/workspace/CompanyDashboard.tsx
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
    </div>;
  );
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
