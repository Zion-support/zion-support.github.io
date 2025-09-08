

import React from "react",
import { WorkspaceHeader } from "./WorkspaceHeader",
import { SharedInbox } from "./SharedInbox",
import { TeamStats } from "./TeamStats",
import { QuickActions } from "./QuickActions",
import { RecentActivity } from "./RecentActivity";
import { TalentPool } from "./TalentPool";
import { RecentActivity } from "./RecentActivity",
import { TalentPool } from "./TalentPool",    primaryColor: string,
    backgroundColor: string,
    textColor: string
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

    textColor: string;  teamLimit: number;
  billingCycle: string;
  workspaceUrl: string;
}

interface CompanyDashboardProps {
;
interface CompanyDashboardProps {;

  company: Company;
}
      <div className="mt-8 grid grid-cols-1 lg: grid-cols-3 gap-6">


=======
      <div className="mt-8 grid grid-cols-1 lg: grid-cols-3 gap-6">


      


      
      
      <div className="mt-8 grid grid-cols-1 lg: grid-cols-3 gap-6">

>>>>>>> origin/cursor/delete-old-data-records-6bba
        <div className="lg:col-span-2 space-y-6">
          <QuickActions />
          <RecentActivity />
          <TalentPool />
        </div>
          <TeamStats />
          <SharedInbox />
        </div>
      </div>

  );
});

  company: Company;
}

export function CompanyDashboard(): any ({ company }: CompanyDashboardProps) {;
  return (

    <div className="container mx-auto max-w-7xl py-8 px-4 md:px-6">;
      <WorkspaceHeader company={company} />;
<<<<<<< HEAD

      <div className="mt-8 grid grid-cols-1 lg: grid-cols-3 gap-6">;
        <div className="lg:col-span-2 space-y-6">;
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
function CompanyDashboard() {
  return (
    <div className="container mx - auto max - w-7xl py - 8 px - 4 md:px-6">;
      <WorkspaceHeader company={company} />;
      <div className="mt - 8 grid grid - cols - 1 lg: grid - cols - 3 gap-6">;
        <div className="lg:col - span - 2 space-y-6">;
}  );
}
;
