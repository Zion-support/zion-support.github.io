
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { AdminHeader } from "./AdminHeader",
import { TeamManagement } from "./TeamManagement",
import { UsageStats } from "./UsageStats",
import { RoleManagement } from "./RoleManagement",
import { TeamActivity } from "./TeamActivity",
=======
import React from &quot;react&quot;;
import { AdminHeader } from &quot;./AdminHeader&quot;;
import { TeamManagement } from &quot;./TeamManagement&quot;;
import { UsageStats } from &quot;./UsageStats&quot;;
import { RoleManagement } from &quot;./RoleManagement&quot;;
import { TeamActivity } from &quot;./TeamActivity&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import {
  Tabs,
  TabsContent,
  TabsList,
<<<<<<< HEAD
  TabsTrigger} from "@/components/ui/tabs",

export function AdminDashboard() {
  return (
    <div className="container mx-auto max-w-7xl py-8 px-4 md: px-6">
=======
  TabsTrigger} from &quot;@/components/ui/tabs&quot;;

export function AdminDashboard() {
  return (
    <div className=&quot;container mx-auto max-w-7xl py-8 px-4 md:px-6&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
import React from "react";
import {_Tabs, _TabsContent, _TabsList, _TabsTrigger} from "@/components/ui/tabs";

export function AdminDashboard() {_return (
    <div className="container mx-auto max-w-7xl py-8 px-4 md:px-6">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      <AdminHeader />
      
      <Tabs defaultValue=&quot;team&quot; className=&quot;mt-8&quot;>
        <TabsList className=&quot;grid w-full grid-cols-4 mb-8&quot;>
          <TabsTrigger value=&quot;team&quot;>Team Management</TabsTrigger>
          <TabsTrigger value=&quot;roles&quot;>Role Assignment</TabsTrigger>
          <TabsTrigger value=&quot;usage&quot;>Usage Limits</TabsTrigger>
          <TabsTrigger value=&quot;activity&quot;>Team Activity</TabsTrigger>
        </TabsList>
        
        <TabsContent value=&quot;team&quot; className=&quot;space-y-8&quot;>
          <TeamManagement />
        </TabsContent>
        
        <TabsContent value=&quot;roles&quot; className=&quot;space-y-8&quot;>
          <RoleManagement />
        </TabsContent>
        
        <TabsContent value=&quot;usage&quot; className=&quot;space-y-8&quot;>
          <UsageStats />
        </TabsContent>
        
        <TabsContent value=&quot;activity&quot; className=&quot;space-y-8&quot;>
          <TeamActivity />
        </TabsContent>
      </Tabs>
    </div>
<<<<<<< HEAD
  )
}
=======
  );}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
