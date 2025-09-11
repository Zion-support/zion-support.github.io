

<<<<<<< HEAD
import React from "react",
import { AdminHeader } from "./AdminHeader",
import { TeamManagement } from "./TeamManagement",
import { UsageStats } from "./UsageStats",
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from "react";
import { AdminHeader } from "./AdminHeader";
import { TeamManagement } from "./TeamManagement";
import { UsageStats } from "./UsageStats";
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { RoleManagement } from "./RoleManagement";
import { TeamActivity } from "./TeamActivity";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";



<<<<<<< HEAD
export function AdminDashboard() {
  return (
    <div className="container mx-auto max-w-7xl py-8 px-4 md: px-6">
      <AdminHeader />
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <Tabs defaultValue="team" className="mt-8">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="team">Team Management</TabsTrigger>
          <TabsTrigger value="roles">Role Assignment</TabsTrigger>
          <TabsTrigger value="usage">Usage Limits</TabsTrigger>
          <TabsTrigger value="activity">Team Activity</TabsTrigger>
        </TabsList>

<<<<<<< HEAD
        <TabsContent value="team" className="space-y-8">
          <TeamManagement />
        </TabsContent>
        <TabsContent value="roles" className="space-y-8">
          <RoleManagement />
        </TabsContent>
        <TabsContent value="usage" className="space-y-8">
          <UsageStats />
        </TabsContent>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        
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


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <TabsContent value="activity" className="space-y-8">
          <TeamActivity />
        </TabsContent>
      </Tabs>
<<<<<<< HEAD
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <div className="container mx-auto max-w-7xl py-8 px-4 md: px-6">;
      <AdminHeader />;
      <Tabs defaultValue="team" className="mt-8">;
        <TabsList className="grid w-full grid-cols-4 mb-8">;
<<<<<<< HEAD
=======
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <TabsTrigger value="team">Team Management</TabsTrigger>;
          <TabsTrigger value="roles">Role Assignment</TabsTrigger>;
          <TabsTrigger value="usage">Usage Limits</TabsTrigger>;
          <TabsTrigger value="activity">Team Activity</TabsTrigger>;
        </TabsList>;

<<<<<<< HEAD

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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
