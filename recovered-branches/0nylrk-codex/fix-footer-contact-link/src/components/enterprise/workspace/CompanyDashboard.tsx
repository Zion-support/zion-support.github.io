<<<<<<< HEAD
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

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
<<<<<<< HEAD
import { TalentPool } from "./TalentPool",
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import { TalentPool } from "./TalentPool",
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    primaryColor: string,
=======
import { TalentPool } from "./TalentPool",    primaryColor: string,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import { TalentPool } from "./TalentPool",    primaryColor: string,
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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

    primaryColor: string,
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    backgroundColor: string,
    textColor: string
=======

    backgroundColor: string,
    textColor: string;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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

<<<<<<< HEAD
<<<<<<< HEAD
    textColor: string;
<<<<<<< HEAD
<<<<<<< HEAD
  },;
  plan: string,;
  teamSize: number,;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  teamLimit: number;
=======
    textColor: string;  teamLimit: number;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  billingCycle: string;
  workspaceUrl: string;
}
;
interface CompanyDashboardProps {;

interface CompanyDashboardProps {
;
interface CompanyDashboardProps {;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  company: Company;
}

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  billingCycle: string;
  workspaceUrl: string
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

    textColor: string;  teamLimit: number;
  billingCycle: string;
  workspaceUrl: string
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

}

  company: Company;
}

;
interface CompanyDashboardProps {;
interface CompanyDashboardProps {
=======

interface CompanyDashboardProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
;
interface CompanyDashboardProps {;

  company: Company;
}
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export function CompanyDashboard({ company }: CompanyDashboardProps) {
  return (
    <div className="container mx-auto max-w-7xl py-8 px-4 md:px-6">
      <WorkspaceHeader company={company} />
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      <div className="mt-8 grid grid-cols-1 lg: grid-cols-3 gap-6">
=======

"
      <div className="mt-8 grid grid-cols-1 lg: grid-cols-3 gap-6">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <div className="lg:col-span-2 space-y-6">
          <QuickActions />
          <RecentActivity />
          <TalentPool />
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <div className="space-y-6">
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        <div className="space-y-6">
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <TeamStats />
          <SharedInbox />
        </div>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
    </div>
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
</div>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  );
}
  )
;
export function CompanyDashboard({ company }: CompanyDashboardProps) {;
  return (;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

interface CompanyDashboardProps {;
  company: Company;
}

export function CompanyDashboard(): any ({ company }: CompanyDashboardProps) {;
  return (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    <div className="container mx-auto max-w-7xl py-8 px-4 md:px-6">;
      <WorkspaceHeader company={company} />;
"
      <div className="mt-8 grid grid-cols-1 lg: grid-cols-3 gap-6">;"
        <div className="lg:col-span-2 space-y-6">;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from './react';
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import React from './react';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { WorkspaceHeader  } from './WorkspaceHeader';
import { SharedInbox  } from './SharedInbox';
import { TeamStats  } from './TeamStats';
import { QuickActions  } from './QuickActions';
import { RecentActivity  } from './RecentActivity';
=======

import React from './react';'
import { WorkspaceHeader  } from './WorkspaceHeader';'
import { SharedInbox  } from './SharedInbox';'
import { TeamStats  } from './TeamStats';'
import { QuickActions  } from './QuickActions';'
import { RecentActivity  } from './RecentActivity';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    </div>;
  );
}
;
<<<<<<< HEAD
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  );
}
;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

  );
}
;

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    </div>;"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
