
<<<<<<< HEAD
import React from "react",
import { WorkspaceHeader } from "./WorkspaceHeader",
import { SharedInbox } from "./SharedInbox",
import { TeamStats } from "./TeamStats",
import { QuickActions } from "./QuickActions",
import { RecentActivity } from "./RecentActivity",
import { TalentPool } from "./TalentPool",
=======
import React from &quot;react&quot;;
import { WorkspaceHeader } from &quot;./WorkspaceHeader&quot;;
import { SharedInbox } from &quot;./SharedInbox&quot;;
import { TeamStats } from &quot;./TeamStats&quot;;
import { QuickActions } from &quot;./QuickActions&quot;;
import { RecentActivity } from &quot;./RecentActivity&quot;;
import { TalentPool } from &quot;./TalentPool&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export interface Company {
  id: string,
  name: string,
  logoUrl?: string,
  theme?: {
    primaryColor: string,
    backgroundColor: string,
    textColor: string
  },
  plan: string,
  teamSize: number,
  teamLimit: number,
  billingCycle: string,
  workspaceUrl: string
}

interface CompanyDashboardProps {
  company: Company
}

export function CompanyDashboard({ company }: CompanyDashboardProps) {
  return (
    <div className=&quot;container mx-auto max-w-7xl py-8 px-4 md:px-6&quot;>
      <WorkspaceHeader company={company} />
      
<<<<<<< HEAD
      <div className="mt-8 grid grid-cols-1 lg: grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
=======
      <div className=&quot;mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6&quot;>
        <div className=&quot;lg:col-span-2 space-y-6&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
          <QuickActions />
          <RecentActivity />
          <TalentPool />
        </div>
        
        <div className=&quot;space-y-6&quot;>
          <TeamStats />
          <SharedInbox />
        </div>
      </div>
    </div>
  )
}
