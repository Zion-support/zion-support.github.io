
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { RoleManagement } from "./RoleManagement";
import { TeamActivity } from "./TeamActivity";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <Tabs defaultValue="team" className="mt-8">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="team">Team Management</TabsTrigger>
          <TabsTrigger value="roles">Role Assignment</TabsTrigger>
          <TabsTrigger value="usage">Usage Limits</TabsTrigger>
          <TabsTrigger value="activity">Team Activity</TabsTrigger>
        </TabsList>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
        
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <TabsContent value="activity" className="space-y-8">
          <TeamActivity />
        </TabsContent>
      </Tabs>
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
=======
    <div className="container mx-auto max-w-7xl py-8 px-4 md: px-6">;
      <AdminHeader />;
      <Tabs defaultValue="team" className="mt-8">;
        <TabsList className="grid w-full grid-cols-4 mb-8">;
    <div className="container mx-auto max-w-7xl py-8 px-4 md: px-6">;
      <AdminHeader />;

      <Tabs defaultValue="team" className="mt-8">;
        <TabsList className="grid w-full grid-cols-4 mb-8">;=======
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
=======
=======        <TabsContent value="team" className="space - y-8">;
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
