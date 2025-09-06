

import React from "react",
import { WorkspaceHeader } from "./WorkspaceHeader",
import { SharedInbox } from "./SharedInbox",
import { TeamStats } from "./TeamStats",
import { QuickActions } from "./QuickActions",

export interface Company {
  id: string,
  name: string,
  logoUrl?: string,
  theme?: {

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

=======


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  teamLimit: number;
  billingCycle: string;
  workspaceUrl: string;
}

  company: Company;
}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export function CompanyDashboard({ company }: CompanyDashboardProps) {
  return (
    <div className="container mx-auto max-w-7xl py-8 px-4 md:px-6">
      <WorkspaceHeader company={company} />

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      <div className="mt-8 grid grid-cols-1 lg: grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <QuickActions />
          <RecentActivity />
          <TalentPool />
        </div>

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        <div className="space-y-6">
          <TeamStats />
          <SharedInbox />
        </div>
      </div>

  )
;
export function CompanyDashboard({ company }: CompanyDashboardProps) {;
  return (;
    <div className="container mx-auto max-w-7xl py-8 px-4 md:px-6">;
      <WorkspaceHeader company={company} />;

      <div className="mt-8 grid grid-cols-1 lg: grid-cols-3 gap-6">;
        <div className="lg:col-span-2 space-y-6">;
    </div>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  );
<<<<<<< HEAD
}
;
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
