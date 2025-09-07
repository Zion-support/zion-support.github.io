

<<<<<<< HEAD


=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import React from "react",
import { WorkspaceHeader } from "./WorkspaceHeader",
import { SharedInbox } from "./SharedInbox",
import { TeamStats } from "./TeamStats",
import { QuickActions } from "./QuickActions",
import { RecentActivity } from "./RecentActivity";
import { TalentPool } from "./TalentPool";
import { RecentActivity } from "./RecentActivity",
<<<<<<< HEAD
import { TalentPool } from "./TalentPool",
export interface Company {
  id: string,
  name: string,
  logoUrl?: string,
  theme?: {


    primaryColor: string,
=======
import { TalentPool } from "./TalentPool",    primaryColor: string,
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
  id: string;
  name: string;
  logoUrl?: string;
  theme?: {;
    primaryColor: string;
    backgroundColor: string;

<<<<<<< HEAD
    textColor: string;
  },;
  plan: string,;
  teamSize: number,;



  teamLimit: number;
=======
    textColor: string;  teamLimit: number;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  billingCycle: string;
  workspaceUrl: string
}

<<<<<<< HEAD

  company: Company;
}

;
interface CompanyDashboardProps {;

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
interface CompanyDashboardProps {
;
interface CompanyDashboardProps {;

<<<<<<< HEAD

  company: Company;
}

export function CompanyDashboard({ company }: CompanyDashboardProps) {
  return (
    <div className="container mx-auto max-w-7xl py-8 px-4 md:px-6">
      <WorkspaceHeader company={company} />


      


      
      
=======
  company: Company;
}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      <div className="mt-8 grid grid-cols-1 lg: grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <QuickActions />
          <RecentActivity />
          <TalentPool />
        </div>
<<<<<<< HEAD


        


        
        
        <div className="space-y-6">
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          <TeamStats />
          <SharedInbox />
        </div>
      </div>

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  );
}
  )
;
export function CompanyDashboard({ company }: CompanyDashboardProps) {;
  return (;

<<<<<<< HEAD

interface CompanyDashboardProps {;
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  company: Company;
}

export function CompanyDashboard(): any ({ company }: CompanyDashboardProps) {;
  return (
    <div className="container mx-auto max-w-7xl py-8 px-4 md:px-6">;
      <WorkspaceHeader company={company} />;

      <div className="mt-8 grid grid-cols-1 lg: grid-cols-3 gap-6">;
        <div className="lg:col-span-2 space-y-6">;
<<<<<<< HEAD
import React from './react';
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
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
  );
}
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
  );
=======
    <div className="container mx - auto max - w-7xl py - 8 px - 4 md:px-6">;
      <WorkspaceHeader company={company} />;
      <div className="mt - 8 grid grid - cols - 1 lg: grid - cols - 3 gap-6">;
        <div className="lg:col - span - 2 space-y-6">;
}  );
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
}
;
