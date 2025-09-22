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

import React from "react",;
import { WorkspaceHeader } from "./WorkspaceHeader",;
import { SharedInbox } from "./SharedInbox",;
import { TeamStats } from "./TeamStats",;
import { QuickActions } from "./QuickActions",;

import { RecentActivity } from "./RecentActivity";
import { TalentPool } from "./TalentPool";
import { RecentActivity } from "./RecentActivity",
import { TalentPool } from "./TalentPool",
import { TalentPool } from "./TalentPool",
import { RecentActivity } from "./RecentActivity",;
import { TalentPool } from "./TalentPool",    primaryColor: string,;
    backgroundColor: string,
    textColor: string

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
import { TalentPool } from "./TalentPool",    primaryColor: string,
import { TalentPool } from "./TalentPool",    primaryColor: string,

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
    backgroundColor: string,
    textColor: string

    backgroundColor: string,
    textColor: string;
pr-12325
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
    primaryColor: string;
    backgroundColor: string;

    textColor: string;
  },;
  plan: string,;
  teamSize: number,;

  teamLimit: number;
    textColor: string;  teamLimit: number;
  billingCycle: string;
  workspaceUrl: string;
}
;
interface CompanyDashboardProps {;

interface CompanyDashboardProps {
;
interface CompanyDashboardProps {;
  company: Company;
}

  billingCycle: string;
  workspaceUrl: string
}

    textColor: string;  teamLimit: number;
  billingCycle: string;
  workspaceUrl: string

}

  company: Company;
}

;
interface CompanyDashboardProps {;
interface CompanyDashboardProps {

interface CompanyDashboardProps {}
;
interface CompanyDashboardProps {;

  company: Company;
}

export function CompanyDashboard({ company }: CompanyDashboardProps) {
  return (
    <div className="container mx-auto max-w-7xl py-8 px-4 md:px-6">
      <WorkspaceHeader company={company} />


      <div className="mt-8 grid grid-cols-1 lg: grid-cols-3 gap-6">

"
      <div className="mt-8 grid grid-cols-1 lg: grid-cols-3 gap-6">"
        <div className="lg:col-span-2 space-y-6">
          <QuickActions />
          <RecentActivity />
          <TalentPool />
        </div>



"
        <div className="space-y-6">

        <div className="space-y-6">
          <TeamStats />
          <SharedInbox />
        </div>
      </div>
    </div>


;
</div>
  );
}
  )
;
export function CompanyDashboard({ company }: CompanyDashboardProps) {;
  return (;

interface CompanyDashboardProps {;
  company: Company;
}

export function CompanyDashboard(): any ({ company }: CompanyDashboardProps) {;
  return (
    <div className="container mx-auto max-w-7xl py-8 px-4 md:px-6">;
      <WorkspaceHeader company={company} />;
"
      <div className="mt-8 grid grid-cols-1 lg: grid-cols-3 gap-6">;"
        <div className="lg:col-span-2 space-y-6">;
import React from './react';
import React from './react';
import { WorkspaceHeader  } from './WorkspaceHeader';
import { SharedInbox  } from './SharedInbox';
import { TeamStats  } from './TeamStats';
import { QuickActions  } from './QuickActions';
import { RecentActivity  } from './RecentActivity';

import React from './react';'
import { WorkspaceHeader  } from './WorkspaceHeader';'
import { SharedInbox  } from './SharedInbox';'
import { TeamStats  } from './TeamStats';'
import { QuickActions  } from './QuickActions';'
import { RecentActivity  } from './RecentActivity';'
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
function CompanyDashboard() {
  return (
    <div className="container mx - auto max - w-7xl py - 8 px - 4 md:px-6">;
      <WorkspaceHeader company={company} />;
      <div className="mt - 8 grid grid - cols - 1 lg: grid - cols - 3 gap - 6">;
        <div className="lg:col - span - 2 space - y-6">;

          <QuickActions />;
          <RecentActivity />;
          <TalentPool />;
        </div>;

        <div className="space - y-6">;

<div className="space - y-6">;
          <TeamStats />;
          <SharedInbox />;
        </div>;
      </div>;

    </div>

    </div>;
  );
</div>);
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
      <div className="mt - 8 grid grid - cols - 1 lg: grid - cols - 3 gap-6">;
        <div className="lg:col - span - 2 space-y-6">;
}  );
}
;

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

  },;
  plan: string,;
  teamSize: number,;

  teamLimit: number;,
  billingCycle: string;
  workspaceUrl: string;

  company: Company;

;
interface CompanyDashboardProps {;

interface CompanyDashboardProps {
  // TODO: Implement

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

      "
      <div className="mt-8 grid grid-cols-1 lg: grid-cols-3 gap-6">"
</div>"
        <div className="lg:col-span-2 space-y-6">"
</div>

          <QuickActions />

          <RecentActivity />

          <TalentPool />

        <div className="space-y-6">"
</div>

          <TeamStats />

          <SharedInbox />

</SharedInbox>
        </div>

      </div>"
    <div className="container mx-auto max-w-7xl py-8 px-4 md:px-6">;"
      <WorkspaceHeader company={company} />;

      <div className="mt-8 grid grid-cols-1 lg: grid-cols-3 gap-6">;"
        <div className="lg:col-span-2 space-y-6">;"
    <div className="container mx - auto max - w-7xl py - 8 px - 4 md:px - 6">;"
      <div className="mt - 8 grid grid - cols - 1 lg: grid - cols - 3 gap - 6">;"
        <div className="lg:col - span - 2 space - y-6">;"
          <QuickActions />;

          <RecentActivity />;

          <TalentPool />;

        </div>;"
        <div className="space - y-6">;"
          <TeamStats />;

          <SharedInbox />;

        </div>;

    </div>;)
    </div>);
    </div>);"
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">;"

        <div className="space-y-6">;"

pr-12325
</div>
          <TeamStats />;
</TeamStats>
          <SharedInbox />;
</SharedInbox>
        </div>;
      </div>;
    </div>;
  );
}
;
  );
}
;
export function CompanyDashboard({ company } CompanyDashboardProps) {;
  return (;
    <div className="container mx-auto max-w-7xl py-8 px-4 md:px-6">;
      <WorkspaceHeader company={company} />;
      ;"
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">;"
        <div className="lg:col-span-2 space-y-6">;
          <QuickActions />;
          <RecentActivity />;
          <TalentPool />;
        </div>;
        ;"
        <div className="space-y-6">;
          <TeamStats />;
          <SharedInbox />;
        </div>;
      </div>;
    </div>;
  );
}
;
}
  );
}
;

  );
}
;

'"
    </div>;"

