<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
=======
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
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export interface Company {
  id: string,
  name: string,
  logoUrl?: string,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

<<<<<<< HEAD
=======
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


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    primaryColor: string,
    backgroundColor: string,
    textColor: string
  },
  plan: string,
  teamSize: number,
  teamLimit: number,
  billingCycle: string,
  workspaceUrl: string
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React from "react",;
import { WorkspaceHeader } from "./WorkspaceHeader",;
import { SharedInbox } from "./SharedInbox",;
import { TeamStats } from "./TeamStats",;
import { QuickActions } from "./QuickActions",;

import { RecentActivity } from "./RecentActivity";
import { TalentPool } from "./TalentPool";

export interface Company {
  // TODO: Implement
}
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

    primaryColor: string,

  },
  plan: string,
  teamSize: number,
  teamLimit: number,
  billingCycle: string,
  workspaceUrl: string"
import React from "react",;"
import { WorkspaceHeader } from "./WorkspaceHeader",;"
import { SharedInbox } from "./SharedInbox",;"
import { TeamStats } from "./TeamStats",;"
import { QuickActions } from "./QuickActions",;"
import { RecentActivity } from "./RecentActivity",;"
import { TalentPool } from "./TalentPool",;
export interface Company {;
  id: string;
  name: string;
  logoUrl?: string;
  theme?: {;
<<<<<<< HEAD
    primaryColor: string;
    backgroundColor: string;
=======
    primaryColor: string,;
    backgroundColor: string,;
    textColor: string;
  },;
  plan: string,;
  teamSize: number,;


<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  teamLimit: number;

  billingCycle: string;
  workspaceUrl: string;
}

<<<<<<< HEAD
  company: Company;
}

  billingCycle: string;
  workspaceUrl: string
}

}

  company: Company;
}

;
interface CompanyDashboardProps {;
interface CompanyDashboardProps {

;
interface CompanyDashboardProps {;
=======
<<<<<<< HEAD
;
interface CompanyDashboardProps {;

interface CompanyDashboardProps {
;
interface CompanyDashboardProps {;
  company: Company;
}

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  company: Company;
}

<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export function CompanyDashboard({ company }: CompanyDashboardProps) {
  return (
    <div className="container mx-auto max-w-7xl py-8 px-4 md:px-6">
      <WorkspaceHeader company={company} />
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      


<<<<<<< HEAD
      
      
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      <div className="mt-8 grid grid-cols-1 lg: grid-cols-3 gap-6">

        <div className="lg:col-span-2 space-y-6">
          <QuickActions />
          <RecentActivity />
          <TalentPool />
        </div>
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        


<<<<<<< HEAD
        
        
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        <div className="space-y-6">

        <div className="space-y-6">

          <TeamStats />
          <SharedInbox />
        </div>
      </div>
<<<<<<< HEAD
    </div>
  );
}
  )
;
export function CompanyDashboard({ company }: CompanyDashboardProps) {;
  return (;
=======

<<<<<<< HEAD
    </div>

  );
});
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

interface CompanyDashboardProps {;
  company: Company;
}
export function CompanyDashboard(): any ({ company }: CompanyDashboardProps) {;
  return (

    <div className="container mx-auto max-w-7xl py-8 px-4 md:px-6">;
      <WorkspaceHeader company={company} />;
<<<<<<< HEAD
"
      <div className="mt-8 grid grid-cols-1 lg: grid-cols-3 gap-6">;"
        <div className="lg:col-span-2 space-y-6">;

=======
      <div className="mt-8 grid grid-cols-1 lg: grid-cols-3 gap-6">;
        <div className="lg:col-span-2 space-y-6">;
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React from './react';

import { WorkspaceHeader  } from './WorkspaceHeader';
import { SharedInbox  } from './SharedInbox';
import { TeamStats  } from './TeamStats';
import { QuickActions  } from './QuickActions';
import { RecentActivity  } from './RecentActivity';

import { TalentPool  } from './TalentPool';
export interface Company {};
  id: string;
  name: string;
  logo_url?: string;
  theme?: {}
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
interface CompanyDashboardProps {}
  company: Company;
}
export /**;
 * CompanyDashboard - Function description;
 */

<<<<<<< HEAD
      <WorkspaceHeader company={company} />;
      ;"
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">;"
        <div className="lg:col-span-2 space-y-6">;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          <QuickActions />;
          <RecentActivity />;
          <TalentPool />;
        </div>;
<<<<<<< HEAD
        ;"
        <div className="space-y-6">;
=======
<<<<<<< HEAD
        <div className="space - y-6">;
=======

        <div className="space - y-6">;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          <TeamStats />;
          <SharedInbox />;
        </div>;
      </div>;
<<<<<<< HEAD
=======

<<<<<<< HEAD
    </div>;
  );
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    </div>


    </div>;
  );
    </div>);
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
