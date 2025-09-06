
import React from "react"
import { AdminHeader } from "./
import { TeamManagement } from "./
import { UsageStats } from "./
import { RoleManagement } from "./
import { TeamActivity } from "./
  TabsTrigger} from "@/components/ui/
team"className=" mt-8"> <TabsList className=" grid w-full grid-cols-4 mb-8"> <TabsTrigger value=" team">Team Management</TabsTrigger> <TabsTrigger value=" roles">Role Assignment</TabsTrigger> <TabsTrigger value=" usage">Usage Limits</TabsTrigger> <TabsTrigger value=" activity">Team Activity</TabsTrigger> </TabsList> <TabsContent value=" team"className=" space-y-8"> <TeamManagement /> </TabsContent> <TabsContent value=" roles"className=" space-y-8"> <RoleManagement /> </TabsContent> <TabsContent value=" usage"className=" space-y-8"> <UsageStats /> 