

<<<<<<< HEAD
=======
import React from "react",
import { AdminHeader } from "./AdminHeader",
import { TeamManagement } from "./TeamManagement",
import { UsageStats } from "./UsageStats",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import React from "react";
import { AdminHeader } from "./AdminHeader";
import { TeamManagement } from "./TeamManagement";
import { UsageStats } from "./UsageStats";
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { RoleManagement } from "./RoleManagement";
import { TeamActivity } from "./TeamActivity";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";



<<<<<<< HEAD
=======
export function AdminDashboard() {
  return (
    <div className="container mx-auto max-w-7xl py-8 px-4 md: px-6">
      <AdminHeader />
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import React from "react",
import { AdminHeader } from "./AdminHeader",
import { TeamManagement } from "./TeamManagement",
import { UsageStats } from "./UsageStats",
import { RoleManagement } from "./RoleManagement",
import { TeamActivity } from "./TeamActivity",
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger} from "@/components/ui/tabs",

<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      <Tabs defaultValue="team" className="mt-8">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="team">Team Management</TabsTrigger>
          <TabsTrigger value="roles">Role Assignment</TabsTrigger>
          <TabsTrigger value="usage">Usage Limits</TabsTrigger>
          <TabsTrigger value="activity">Team Activity</TabsTrigger>
        </TabsList>

<<<<<<< HEAD

=======
        <TabsContent value="team" className="space-y-8">
          <TeamManagement />
        </TabsContent>
        <TabsContent value="roles" className="space-y-8">
          <RoleManagement />
        </TabsContent>
        <TabsContent value="usage" className="space-y-8">
          <UsageStats />
        </TabsContent>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        
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


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        <TabsContent value="activity" className="space-y-8">
          <TeamActivity />
        </TabsContent>
      </Tabs>
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
import {;
  Tabs,;
  TabsContent,;
  TabsList,;
  TabsTrigger} from "@/components/ui/tabs";
export function AdminDashboard() {;
  return (;
    <div className="container mx-auto max-w-7xl py-8 px-4 md: px-6">;

import React from "react",;
import { AdminHeader } from "./AdminHeader",;
import { TeamManagement } from "./TeamManagement",;
import { UsageStats } from "./UsageStats",;
import { RoleManagement } from "./RoleManagement",;
import { TeamActivity } from "./TeamActivity",;
import {;
  Tabs,;
  TabsContent,;
  TabsList,;
  TabsTrigger} from "@/components/ui/tabs",;
;
export function AdminDashboard() {;
  return (;
    <div className="container mx-auto max-w-7xl py-8 px-4 md:px-6">;
      <AdminHeader />;
      ;
      <Tabs defaultValue="team" className="mt-8">;
        <TabsList className="grid w-full grid-cols-4 mb-8">;
    <div className="container mx-auto max-w-7xl py-8 px-4 md: px-6">;
      <AdminHeader />;
      <Tabs defaultValue="team" className="mt-8">;
        <TabsList className="grid w-full grid-cols-4 mb-8">;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          <TabsTrigger value="team">Team Management</TabsTrigger>;
          <TabsTrigger value="roles">Role Assignment</TabsTrigger>;
          <TabsTrigger value="usage">Usage Limits</TabsTrigger>;
          <TabsTrigger value="activity">Team Activity</TabsTrigger>;
        </TabsList>;

<<<<<<< HEAD
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
=======

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

}
        ;
        <TabsContent value="team" className="space-y-8">;
          <TeamManagement />;
        </TabsContent>;
        ;
        <TabsContent value="roles" className="space-y-8">;
          <RoleManagement />;
        </TabsContent>;
        ;
        <TabsContent value="usage" className="space-y-8">;
          <UsageStats />;
        </TabsContent>;
        ;
        <TabsContent value="team" className="space-y-8">;
          <TeamManagement />;
        </TabsContent>;
        <TabsContent value="roles" className="space-y-8">;
          <RoleManagement />;
        </TabsContent>;
        <TabsContent value="usage" className="space-y-8">;
          <UsageStats />;
        </TabsContent>;
        <TabsContent value="activity" className="space-y-8">;
          <TeamActivity />;
        </TabsContent>;
      </Tabs>;
    </div>;
  );
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
