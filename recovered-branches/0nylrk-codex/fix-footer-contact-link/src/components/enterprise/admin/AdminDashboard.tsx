<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import React from "react",
import { AdminHeader } from "./AdminHeader",
import { TeamManagement } from "./TeamManagement",
import { UsageStats } from "./UsageStats",
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from "react";
import { AdminHeader } from "./AdminHeader";
import { TeamManagement } from "./TeamManagement";
import { UsageStats } from "./UsageStats";
<<<<<<< HEAD
=======
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { RoleManagement } from "./RoleManagement";
import { TeamActivity } from "./TeamActivity";
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc


<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======


<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export function AdminDashboard() {
  return (
    <div className="container mx-auto max-w-7xl py-8 px-4 md: px-6">
      <AdminHeader />
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
import { AdminHeader } from "./AdminHeader";
import { TeamManagement } from "./TeamManagement";
import { UsageStats } from "./UsageStats";

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

import { AdminHeader } from "./AdminHeader";
import { TeamManagement } from "./TeamManagement";
import { UsageStats } from "./UsageStats";

<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

import { RoleManagement } from "./RoleManagement";
import { TeamActivity } from "./TeamActivity";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

<<<<<<< HEAD


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
export function AdminDashboard() {
  return (
    <div className="container mx-auto max-w-7xl py-8 px-4 md: px-6">
      <AdminHeader />
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import React from "react",
import { AdminHeader } from "./AdminHeader",
import { TeamManagement } from "./TeamManagement",
import { UsageStats } from "./UsageStats",
import { RoleManagement } from "./RoleManagement",
=======

import React from "react";"
import { AdminHeader } from "./AdminHeader";"
import { TeamManagement } from "./TeamManagement";"
import { UsageStats } from "./UsageStats";
"
import { RoleManagement } from "./RoleManagement";"
import { TeamActivity } from "./TeamActivity";
"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";



"
import React from "react","
import { AdminHeader } from "./AdminHeader","
import { TeamManagement } from "./TeamManagement","
import { UsageStats } from "./UsageStats","
import { RoleManagement } from "./RoleManagement","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { TeamActivity } from "./TeamActivity",
import {}
  Tabs,
  TabsContent,
  TabsList,"
  TabsTrigger} from "@/components/ui/tabs",

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      <Tabs defaultValue="team" className="mt-8">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="team">Team Management</TabsTrigger>
          <TabsTrigger value="roles">Role Assignment</TabsTrigger>
          <TabsTrigger value="usage">Usage Limits</TabsTrigger>
=======


"
      <Tabs defaultValue="team" className="mt-8">"
        <TabsList className="grid w-full grid-cols-4 mb-8">"
          <TabsTrigger value="team">Team Management</TabsTrigger>"
          <TabsTrigger value="roles">Role Assignment</TabsTrigger>"
          <TabsTrigger value="usage">Usage Limits</TabsTrigger>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <TabsTrigger value="activity">Team Activity</TabsTrigger>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        </TabsList>
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <TabsContent value="team" className="space-y-8">
          <TeamManagement />
        </TabsContent>"
        <TabsContent value="roles" className="space-y-8">
          <RoleManagement />
        </TabsContent>"
        <TabsContent value="usage" className="space-y-8">
          <UsageStats />
        </TabsContent>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        
=======
        </TabsList>        
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        </TabsList>        
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
        </TabsList>

        <TabsContent value="team" className="space-y-8">
          <TeamManagement />
        </TabsContent>
        <TabsContent value="roles" className="space-y-8">
          <RoleManagement />
        </TabsContent>
        <TabsContent value="usage" className="space-y-8">
          <UsageStats />
        </TabsContent>
<<<<<<< HEAD
        
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        <TabsContent value="team" className="space-y-8">
          <TeamManagement />
        </TabsContent>
        <TabsContent value="roles" className="space-y-8">
          <RoleManagement />
        </TabsContent>
        <TabsContent value="usage" className="space-y-8">
          <UsageStats />
        </TabsContent>
<<<<<<< HEAD
        
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <TabsContent value="activity" className="space-y-8">
          <TeamActivity />
        </TabsContent>
      </Tabs>
<<<<<<< HEAD
<<<<<<< HEAD
    </div>
  );
}
=======
<<<<<<< HEAD
<<<<<<< HEAD

    <div className="container mx-auto max-w-7xl py-8 px-4 md: px-6">;
      <AdminHeader />;

      <Tabs defaultValue="team" className="mt-8">;
        <TabsList className="grid w-full grid-cols-4 mb-8">;
=======
import React from './react';
import { AdminHeader  } from './AdminHeader';
import { TeamManagement  } from './TeamManagement';
import { UsageStats  } from './UsageStats';
import { RoleManagement  } from './RoleManagement';
import { TeamActivity  } from './TeamActivity';
import { Tabs, TabsContent, TabsList, TabsTrigger  } from '@/components / ui / tabs';
;
export /**
 * AdminDashboard - Function description
 */
function AdminDashboard() {
  return (
    <div className="container mx - auto max - w-7xl py - 8 px - 4 md: px - 6">;
      <AdminHeader />;
      <Tabs default_value="team" className="mt - 8">;
        <TabsList className="grid w - full grid - cols - 4 mb - 8">;

=======
    </div>
  );
}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    </div>;
  );
}
    </div>
  )"
import React from "react",;"
import { AdminHeader } from "./AdminHeader",;"
import { TeamManagement } from "./TeamManagement",;"
import { UsageStats } from "./UsageStats",;"
import { RoleManagement } from "./RoleManagement",;"
import { TeamActivity } from "./TeamActivity",;
import {;
  Tabs,;
  TabsContent,;
  TabsList,;"
  TabsTrigger} from "@/components/ui/tabs";
<<<<<<< HEAD
export function AdminDashboard() {;
  return (;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

    <div className="container mx-auto max-w-7xl py-8 px-4 md: px-6">;
<<<<<<< HEAD
      <AdminHeader />;
      <Tabs defaultValue="team" className="mt-8">;
        <TabsList className="grid w-full grid-cols-4 mb-8">;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          <TabsTrigger value="team">Team Management</TabsTrigger>;
          <TabsTrigger value="roles">Role Assignment</TabsTrigger>;
=======
        <TabsContent value="activity" className="space-y-8">
          <TeamActivity />
        </TabsContent>
      </Tabs>          <TabsTrigger value="roles">Role Assignment</TabsTrigger>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        <TabsContent value="activity" className="space-y-8">
          <TeamActivity />
        </TabsContent>
      </Tabs>          <TabsTrigger value="roles">Role Assignment</TabsTrigger>;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

        <TabsContent value="activity" className="space-y-8">
          <TeamActivity />
        </TabsContent>
      </Tabs>

    <div className="container mx-auto max-w-7xl py-8 px-4 md: px-6">;
      <AdminHeader />;

      <Tabs defaultValue="team" className="mt-8">;
        <TabsList className="grid w-full grid-cols-4 mb-8">;
import React from './react';
import { AdminHeader  } from './AdminHeader';
import { TeamManagement  } from './TeamManagement';
import { UsageStats  } from './UsageStats';
import { RoleManagement  } from './RoleManagement';
import { TeamActivity  } from './TeamActivity';
import { Tabs, TabsContent, TabsList, TabsTrigger  } from '@/components / ui / tabs';
;
export /**
 * AdminDashboard - Function description
 */
function AdminDashboard() {
  return (
    <div className="container mx - auto max - w-7xl py - 8 px - 4 md: px - 6">;
      <AdminHeader />;
      <Tabs default_value="team" className="mt - 8">;
        <TabsList className="grid w - full grid - cols - 4 mb - 8">;

    </div>
  );
}
    </div>;
  );
}
    </div>
  )
import React from "react",;
import { AdminHeader } from "./AdminHeader",;
import { TeamManagement } from "./TeamManagement",;
import { UsageStats } from "./UsageStats",;
import { RoleManagement } from "./RoleManagement",;
import { TeamActivity } from "./TeamActivity",;
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger} from "@/components/ui/tabs",

    <div className="container mx-auto max-w-7xl py-8 px-4 md: px-6">;
      <AdminHeader />;
      <Tabs defaultValue="team" className="mt-8">;
        <TabsList className="grid w-full grid-cols-4 mb-8">;
          <TabsTrigger value="team">Team Management</TabsTrigger>;
          <TabsTrigger value="roles">Role Assignment</TabsTrigger>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <TabsTrigger value="usage">Usage Limits</TabsTrigger>;
          <TabsTrigger value="activity">Team Activity</TabsTrigger>;
        </TabsList>;

        <TabsContent value="team" className="space - y-8">;
          <TeamManagement />;
        </TabsContent>;
        <TabsContent value="roles" className="space - y-8">;
          <RoleManagement />;
        </TabsContent>;
        <TabsContent value="usage" className="space - y-8">;
          <UsageStats />;
        </TabsContent>;
        <TabsContent value="activity" className="space - y-8">;
          <TeamActivity />;
        </TabsContent>;
      </Tabs>;
    </div>);

}

      <Tabs defaultValue="team" className="mt-8">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="team">Team Management</TabsTrigger>
          <TabsTrigger value="roles">Role Assignment</TabsTrigger>
          <TabsTrigger value="usage">Usage Limits</TabsTrigger>
          <TabsTrigger value="activity">Team Activity</TabsTrigger>
        </TabsList>        
        <TabsContent value="team" className="space-y-8">
          <TeamManagement />
        </TabsContent>
        <TabsContent value="roles" className="space-y-8">
          <RoleManagement />
        </TabsContent>
        <TabsContent value="usage" className="space-y-8">
          <UsageStats />
        </TabsContent>

        <TabsContent value="activity" className="space-y-8">
          <TeamActivity />
        </TabsContent>
      </Tabs>          <TabsTrigger value="roles">Role Assignment</TabsTrigger>;
          <TabsTrigger value="usage">Usage Limits</TabsTrigger>;
          <TabsTrigger value="activity">Team Activity</TabsTrigger>;
        </TabsList>;
}
}
        ;
=======
export function AdminDashboard() { return null; }
}
        ;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <TabsContent value="team" className="space-y-8">;
          <TeamManagement />;
        </TabsContent>;
        ;"
        <TabsContent value="roles" className="space-y-8">;
          <RoleManagement />;
        </TabsContent>;
        ;"
        <TabsContent value="usage" className="space-y-8">;
          <UsageStats />;
        </TabsContent>;
        ;"
        <TabsContent value="team" className="space-y-8">;
          <TeamManagement />;
        </TabsContent>;"
        <TabsContent value="roles" className="space-y-8">;
          <RoleManagement />;
        </TabsContent>;"
        <TabsContent value="usage" className="space-y-8">;
          <UsageStats />;
        </TabsContent>;"
        <TabsContent value="activity" className="space-y-8">;
          <TeamActivity />;
        </TabsContent>;
      </Tabs>;
    </div>;
  );
}
;
<<<<<<< HEAD
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


}

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
import React from "react";""
import { AdminHeader } from "./AdminHeader";""
import { TeamManagement } from "./TeamManagement";""
import { UsageStats } from "./UsageStats";""
import { RoleManagement } from "./RoleManagement";""
import { TeamActivity } from "./TeamActivity";""
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";""
import React from "react",""
import { AdminHeader } from "./AdminHeader",""
import { TeamManagement } from "./TeamManagement",""
import { UsageStats } from "./UsageStats",""
import { RoleManagement } from "./RoleManagement",""
import { TeamActivity } from "./TeamActivity","
import {
  // TODO: Implement
}
  Tabs,
  TabsContent,
  TabsList,"
  TabsTrigger} from "@/components/ui/tabs",""
      <Tabs defaultValue="team" className="mt-8">"
"
        <TabsList className="grid w-full grid-cols-4 mb-8">"
          <TabsTrigger value="team">Team Management""
          <TabsTrigger value="roles">Role Assignment""
          <TabsTrigger value="usage">Usage Limits""
          <TabsTrigger value="activity">Team Activity"

        <TabsContent value="team" className="space-y-8">"

          <TeamManagement />

        <TabsContent value="roles" className="space-y-8">"

          <RoleManagement />

        <TabsContent value="usage" className="space-y-8">"

          <UsageStats />








        <TabsContent value="activity" className="space-y-8">"

          <TeamActivity />

    <div className="container mx-auto max-w-7xl py-8 px-4 md: px-6">;"
</div>
      <AdminHeader />;

      <Tabs defaultValue="team" className="mt-8">;"
        <TabsList className="grid w-full grid-cols-4 mb-8">;"

    </div>;
    </div>"
          <TabsTrigger value="team">Team Management;""
          <TabsTrigger value="roles">Role Assignment;""
          <TabsTrigger value="usage">Usage Limits;""
          <TabsTrigger value="activity">Team Activity;"
        ;"
        <TabsContent value="team" className="space - y-8">;"

          <TeamManagement />;

        <TabsContent value="roles" className="space - y-8">;"

          <RoleManagement />;

        <TabsContent value="usage" className="space - y-8">;"

          <UsageStats />;

        <TabsContent value="activity" className="space - y-8">;"

          <TeamActivity />;

        ;
    </div>);"
        <TabsContent value="team" className="space-y-8">;"


        <TabsContent value="roles" className="space-y-8">;"


        <TabsContent value="usage" className="space-y-8">;"








        <TabsContent value="activity" className="space-y-8">;"


    </div>;"
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
