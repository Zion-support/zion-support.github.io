
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
  id: string;
  name: string;
  logoUrl?: string;
  theme?: {;
    primaryColor: string;
    backgroundColor: string;

    textColor: string;



  teamLimit: number;
  billingCycle: string;
  workspaceUrl: string
}


;
interface CompanyDashboardProps {;


      <div className="mt-8 grid grid-cols-1 lg: grid-cols-3 gap-6">
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

    </div>);

}


