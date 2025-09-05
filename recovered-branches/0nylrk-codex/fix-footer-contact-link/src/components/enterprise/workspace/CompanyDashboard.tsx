
import React from "react";

export interface Company {_id: string;
  name: string;
  logoUrl?: string;
  theme?: {
    primaryColor: string;
    backgroundColor: string;
    textColor: string;};
  plan: string;
  teamSize: number;
  teamLimit: number;
  billingCycle: string;
  workspaceUrl: string;
}

interface CompanyDashboardProps {_company: Company;}

export function CompanyDashboard(_{_company}: CompanyDashboardProps) {_return (
    <div className="container mx-auto max-w-7xl py-8 px-4 md:px-6">
      <WorkspaceHeader company={company} />
      
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <QuickActions />
          <RecentActivity />
          <TalentPool />
        </div>
        
        <div className="space-y-6">
          <TeamStats />
          <SharedInbox />
        </div>
      </div>
    </div>
  );
}
