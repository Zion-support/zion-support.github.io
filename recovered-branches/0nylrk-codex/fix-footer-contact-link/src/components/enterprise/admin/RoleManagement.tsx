<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/admin/RoleManagement.tsx


<<<<<<< HEAD
=======

=======

<<<<<<< HEAD
import React from "react";

import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";
import {Switch} from "@/components/ui/switch";
import {toast} from "@/hooks/use-toast";
import {InfoIcon} from "lucide-react";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from "react",
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow} from "@/components/ui/table",
import { Badge } from "@/components/ui/badge",
import { Switch } from "@/components/ui/switch",
import { toast } from "@/hooks/use-toast",
import { InfoIcon } from "lucide-react",
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger} from "@/components/ui/tooltip",
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
export function RoleManagement() {
  // Mock team members data
  const teamMembers = [
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/admin/RoleManagement.tsx
import React from './react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components / ui / table';
import { Badge } from '@/components / ui / badge';
import { Switch } from '@/components / ui / switch';
import { toast } from '@/hooks / use - toast';
import { InfoIcon } from './lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components / ui / tooltip';
;
export /**
 * RoleManagement - Function description
 */
function RoleManagement() {
  // Mock team members data;
  const team_members = [;
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export function RoleManagement() {
  // Mock team members data
  const teamMembers = [
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    {
      id: 1
      name: "Alex Johnson"
      email: "alex@example.com"
      role: "Admin"
      permissions: {
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/admin/RoleManagement.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/admin/RoleManagement.tsx
        view_candidates: true,
        edit_candidates: true,
        create_jobs: true,
        manage_team: true,
        view_billing: true,
        manage_billing: true}},
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/admin/RoleManagement.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/admin/RoleManagement.tsx
=======
        viewCandidates: true
        editCandidates: true
        createJobs: true
        manageTeam: true
        viewBilling: true
        manageBilling: true}}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    {
      id: 2
      name: "Jamie Smith"
      email: "jamie@example.com"
      role: "Recruiter"
      permissions: {
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/admin/RoleManagement.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/admin/RoleManagement.tsx
        view_candidates: true,
        edit_candidates: true,
        create_jobs: true,
        manage_team: false,
        view_billing: false,
        manage_billing: false}},
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/admin/RoleManagement.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/admin/RoleManagement.tsx
=======
        viewCandidates: true
        editCandidates: true
        createJobs: true
        manageTeam: false
        viewBilling: false
        manageBilling: false}}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    {
      id: 3
      name: "Sam Williams"
      email: "sam@example.com"
      role: "Manager"
      permissions: {
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/admin/RoleManagement.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/admin/RoleManagement.tsx
        view_candidates: true,
        edit_candidates: false,
        create_jobs: true,
        manage_team: false,
        view_billing: true,
        manage_billing: false}},
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/admin/RoleManagement.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/admin/RoleManagement.tsx
=======
        viewCandidates: true
        editCandidates: false
        createJobs: true
        manageTeam: false
        viewBilling: true
        manageBilling: false}}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    {
      id: 4
      name: "Taylor Brown"
      email: "taylor@example.com"
      role: "Viewer"
      permissions: {
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/admin/RoleManagement.tsx
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        viewCandidates: true
        editCandidates: false
        createJobs: false
        manageTeam: false
        viewBilling: false
        manageBilling: false}}]
  const handlePermissionChange = (memberId: number, permission: string, value: boolean) => {
    // In a real app, this would make an API call to update permissions
    toast({
<<<<<<< HEAD

      description: `Permission ${permission} has been ${value ? "granted" : "revoked"}.`})
=======
<<<<<<< HEAD
      title: "Permission updated"
=======
      title: "Permission updated",
<<<<<<< HEAD
      description: `Permission ${permission} has been ${value ? "granted" : "revoked"}.`});
  };
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      description: `Permission ${permission} has been ${value ? "granted" : "revoked"}.`})
<<<<<<< HEAD
  }
  const roleDescriptions: Record<string, string> = {
    "Admin": "Full access to all features and settings";
    "Recruiter": "Can manage candidates and job postings";
    "Manager": "Can view candidates and create jobs";
    "Viewer": "Read-only access to candidates"}
=======
  },
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

  const roleDescriptions: Record<string string> = {
    "Admin": "Full access to all features and settings",
    "Recruiter": "Can manage candidates and job postings",
    "Manager": "Can view candidates and create jobs",
    "Viewer": "Read-only access to candidates"},
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-medium mb-4">Role Permissions</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {Object.entries(roleDescriptions).map(([role, description]) => (
            <div key={role} className="bg-card rounded-lg p-4 border border-border">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant={role === "Admin" ? "default" : "outline"}>{role}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Team Member</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className="text-center">
                <div className="flex items-center justify-center gap-1">
                  View Candidates
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        Can view candidate profiles and applications
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </TableHead>
              <TableHead className="text-center">
                <div className="flex items-center justify-center gap-1">
                  Edit Candidates
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        Can edit candidate information and status
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </TableHead>
              <TableHead className="text-center">
                <div className="flex items-center justify-center gap-1">
                  Create Jobs
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        Can create and publish job listings
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </TableHead>
              <TableHead className="text-center">
                <div className="flex items-center justify-center gap-1">
                  Manage Team
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        Can add, edit, and remove team members
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </TableHead>
              <TableHead className="text-center">
                <div className="flex items-center justify-center gap-1">
                  Billing Access
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        Can view and manage billing information
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {teamMembers.map((member) => (
              <TableRow key={member.id}>
                <TableCell>
                  <div className="font-medium">{member.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {member.email}
                  </div>
                </TableCell>
                <TableCell>
                  <select
                    className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    defaultValue={member.role}
                  >
                    <option value="Admin">Admin</option>
                    <option value="Recruiter">Recruiter</option>
                    <option value="Manager">Manager</option>
                    <option value="Viewer">Viewer</option>
                  </select>
                </TableCell>
                <TableCell className="text-center">
<<<<<<< HEAD

=======
<<<<<<< HEAD
                  <Switch
                    checked={member.permissions.viewCandidates}
=======
                  <Switch 
                    checked={member.permissions.viewCandidates} 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    onCheckedChange={(checked) =>
                      handlePermissionChange(member.id, "viewCandidates", checked)
                    }
                  />
                </TableCell>
                <TableCell className="text-center">
<<<<<<< HEAD

=======
<<<<<<< HEAD
                  <Switch
                    checked={member.permissions.editCandidates}
=======
                  <Switch 
                    checked={member.permissions.editCandidates} 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    onCheckedChange={(checked) =>
                      handlePermissionChange(member.id, "editCandidates", checked)
                    }
                  />
                </TableCell>
                <TableCell className="text-center">
<<<<<<< HEAD

=======
<<<<<<< HEAD
                  <Switch
                    checked={member.permissions.createJobs}
=======
                  <Switch 
                    checked={member.permissions.createJobs} 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    onCheckedChange={(checked) =>
                      handlePermissionChange(member.id, "createJobs", checked)
                    }
                  />
                </TableCell>
                <TableCell className="text-center">
<<<<<<< HEAD

=======
<<<<<<< HEAD
                  <Switch
                    checked={member.permissions.manageTeam}
=======
                  <Switch 
                    checked={member.permissions.manageTeam} 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    onCheckedChange={(checked) =>
                      handlePermissionChange(member.id, "manageTeam", checked)
                    }
                  />
                </TableCell>
                <TableCell className="text-center">
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
                  <Switch
                    checked={member.permissions.viewBilling}
=======
                  <Switch 
                    checked={member.permissions.viewBilling} 
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    onCheckedChange={(checked) =>
                      handlePermissionChange(member.id, "viewBilling", checked)
                    }
                  />
                </TableCell>
              </TableRow>
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
                  <Switch 
                    checked={member.permissions.viewBilling} 
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    onCheckedChange={(checked) => 
                      handlePermissionChange(member.id, "viewBilling", checked)
import React from "react",;
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
  TableRow} from "@/components/ui/table",;
import { Badge } from "@/components/ui/badge",;
import { Switch } from "@/components/ui/switch",;
import { toast } from "@/hooks/use-toast",;
import { InfoIcon } from "lucide-react",;
import {;
  Tooltip,;
  TooltipContent,;
  TooltipProvider,;
  TooltipTrigger} from "@/components/ui/tooltip",;
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export function RoleManagement() {;
  // Mock team members data;
  const teamMembers = [;
    {;
      id: 1,;
      name: "Alex Johnson",;
<<<<<<< HEAD
      email: "alex@example && example.com",;
=======
      email: "alex@example.com",;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      role: "Admin",;
      permissions: {;
        viewCandidates: true,;
        editCandidates: true,;
        createJobs: true,;
        manageTeam: true,;
        viewBilling: true,;
        manageBilling: true}},;
    {;
      id: 2,;
      name: "Jamie Smith",;
<<<<<<< HEAD
      email: "jamie@example && example.com",;
=======
      email: "jamie@example.com",;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      role: "Recruiter",;
      permissions: {;
        viewCandidates: true,;
        editCandidates: true,;
        createJobs: true,;
        manageTeam: false,;
        viewBilling: false,;
        manageBilling: false}},;
    {;
      id: 3,;
      name: "Sam Williams",;
<<<<<<< HEAD
      email: "sam@example && example.com",;
=======
      email: "sam@example.com",;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      role: "Manager",;
      permissions: {;
        viewCandidates: true,;
        editCandidates: false,;
        createJobs: true,;
        manageTeam: false,;
        viewBilling: true,;
        manageBilling: false}},;
    {;
      id: 4,;
      name: "Taylor Brown",;
<<<<<<< HEAD
      email: "taylor@example && example.com",;
      role: "Viewer",;
      permissions: {;
        viewCandidates: true,;
        editCandidates: false,;
        createJobs: false,;
        manageTeam: false,;
        viewBilling: false,;
        manageBilling: false}}],;

  const handlePermissionChange = (memberId: number, permission: string, value: boolean) => {;
    // In a real app, this would make an API call to update permissions;
    toast({;
      title: "Permission updated",;
      description: `Permission ${permission} has been ${value ? "granted" : "revoked"}.`});
  };

  const roleDescriptions: Record<string, string> = {;

    "Admin": "Full access to all features and settings";
    "Recruiter": "Can manage candidates and job postings";
    "Manager": "Can view candidates and create jobs";
    "Viewer": "Read-only access to candidates"}
=======

      title: "Permission updated",

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

  return (
    <div className="space-y-6">;
      <div>;
        <h3 className="text-xl font-medium mb-4">Role Permissions</h3>;
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">;
          {Object && Object.entries(roleDescriptions).map(([role, description]) => (;
            <div key={role} className="bg-card rounded-lg p-4 border border-border">;
              <div className="flex items-center gap-2 mb-2">;
                <Badge variant={role === "Admin" ? "default" : "outline"}>{role}</Badge>;
              </div>;
              <p className="text-sm text-muted-foreground">{description}</p>;
            </div>;
          ))}


                  <Switch 
                    checked={member.permissions.viewCandidates} 


                    onCheckedChange={(checked) =>
                      handlePermissionChange(member.id, "viewCandidates", checked)
                    }
                  />
                </TableCell>
                <TableCell className="text-center">


                  <Switch 
                    checked={member.permissions.editCandidates} 


                    onCheckedChange={(checked) =>
                      handlePermissionChange(member.id, "editCandidates", checked)
                    }
                  />
                </TableCell>
                <TableCell className="text-center">


                  <Switch 
                    checked={member.permissions.createJobs} 


                    onCheckedChange={(checked) =>
                      handlePermissionChange(member.id, "createJobs", checked)
                    }
                  />
                </TableCell>
                <TableCell className="text-center">


                  <Switch 
                    checked={member.permissions.manageTeam} 


                    onCheckedChange={(checked) =>
                      handlePermissionChange(member.id, "manageTeam", checked)
                    }
                  />
                </TableCell>
                <TableCell className="text-center">

========
=======

import React from "react",;
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
  TableRow} from "@/components/ui/table",;
import { Badge } from "@/components/ui/badge",;
import { Switch } from "@/components/ui/switch",;
import { toast } from "@/hooks/use-toast",;
import { InfoIcon } from "lucide-react",;
import {;
  Tooltip,;
  TooltipContent,;
  TooltipProvider,;
  TooltipTrigger} from "@/components/ui/tooltip",;
;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
export function RoleManagement() {;
  // Mock team members data;
  const teamMembers = [;
    {;
<<<<<<< HEAD
      id: 1,;
      name: "Alex Johnson",;
      email: "alex@example && example.com",;
      role: "Admin",;
      permissions: {;
        viewCandidates: true,;
        editCandidates: true,;
        createJobs: true,;
        manageTeam: true,;
        viewBilling: true,;
        manageBilling: true}},;
    {;
      id: 2,;
      name: "Jamie Smith",;
      email: "jamie@example && example.com",;
      role: "Recruiter",;
      permissions: {;
        viewCandidates: true,;
        editCandidates: true,;
        createJobs: true,;
        manageTeam: false,;
        viewBilling: false,;
        manageBilling: false}},;
    {;
      id: 3,;
      name: "Sam Williams",;
      email: "sam@example && example.com",;
      role: "Manager",;
      permissions: {;
        viewCandidates: true,;
        editCandidates: false,;
        createJobs: true,;
        manageTeam: false,;
        viewBilling: true,;
        manageBilling: false}},;
    {;
      id: 4,;
      name: "Taylor Brown",;
      email: "taylor@example && example.com",;
=======
      email: "taylor@example.com",;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      role: "Viewer",;
      permissions: {;
        viewCandidates: true,;
        editCandidates: false,;
        createJobs: false,;
        manageTeam: false,;
        viewBilling: false,;
        manageBilling: false}}],;
  const handlePermissionChange = (memberId: number, permission: string, value: boolean) => {;
    // In a real app, this would make an API call to update permissions;
    toast({;
      title: "Permission updated",;
      description: `Permission ${permission} has been ${value ? "granted" : "revoked"}.`});
<<<<<<< HEAD
  };
  const roleDescriptions: Record<string, string> = {;
    "Admin": "Full access to all features and settings";
    "Recruiter": "Can manage candidates and job postings";
    "Manager": "Can view candidates and create jobs";
    "Viewer": "Read-only access to candidates"}
  return (
=======
      id:1,;
      name:"Alex Johnson",;
      email:"alex@example.com",;
      role:"Admin",;
      permissions:{;
        viewCandidates:true,;
        editCandidates:true,;
        createJobs:true,;
        manageTeam:true,;
        viewBilling:true,;
        manageBilling:true}},;
    {;
      id:2,;
      name:"Jamie Smith",;
      email:"jamie@example.com",;
      role:"Recruiter",;
      permissions:{;
        viewCandidates:true,;
        editCandidates:true,;
        createJobs:true,;
        manageTeam:false,;
        viewBilling:false,;
        manageBilling:false}},;
    {;
      id:3,;
      name:"Sam Williams",;
      email:"sam@example.com",;
      role:"Manager",;
      permissions:{;
        viewCandidates:true,;
        editCandidates:false,;
        createJobs:true,;
        manageTeam:false,;
        viewBilling:true,;
        manageBilling:false}},;
    {;
      id:4,;
      name:"Taylor Brown",;
      email:"taylor@example.com",;
      role:"Viewer",;
      permissions:{;
        viewCandidates:true,;
        editCandidates:false,;
        createJobs:false,;
        manageTeam:false,;
        viewBilling:false,;
        manageBilling:false}}],;
;
  const handlePermissionChange = (memberId:number, permission:string, value:boolean) => {;
    // In a real app, this would make an API call to update permissions;
    toast({;
      title:"Permission updated",;
      description:`Permission ${permission} has been ${value ? "granted" :"revoked"}.`}),;
  },;
;
  const roleDescriptions:Record<string string> = {;
    "Admin":"Full access to all features and settings",;
    "Recruiter":"Can manage candidates and job postings",;
    "Manager":"Can view candidates and create jobs",;
    "Viewer":"Read-only access to candidates"},;
;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
  },;
  const roleDescriptions: Record<string string> = {;
    "Admin": "Full access to all features and settings",;
    "Recruiter": "Can manage candidates and job postings",;
    "Manager": "Can view candidates and create jobs";
    "Viewer": "Read-only access to candidates"};
  return (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <div className="space-y-6">;
      <div>;
        <h3 className="text-xl font-medium mb-4">Role Permissions</h3>;
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">;
<<<<<<< HEAD
<<<<<<< HEAD
          {Object && Object.entries(roleDescriptions).map(([role, description]) => (;
            <div key={role} className="bg-card rounded-lg p-4 border border-border">;
              <div className="flex items-center gap-2 mb-2">;
                <Badge variant={role === "Admin" ? "default" : "outline"}>{role}</Badge>;
=======
          {Object.entries(roleDescriptions).map(([role, description]) => (;
            <div key={role} className="bg-card rounded-lg p-4 border border-border">;
              <div className="flex items-center gap-2 mb-2">;
                <Badge variant={role === "Admin" ? "default" :"outline"}>{role}</Badge>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
          {Object.entries(roleDescriptions).map(([role, description]) => (;
            <div key={role} className="bg-card rounded-lg p-4 border border-border">;
              <div className="flex items-center gap-2 mb-2">;
                <Badge variant={role === "Admin" ? "default" : "outline"}>{role}</Badge>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </div>;
              <p className="text-sm text-muted-foreground">{description}</p>;
            </div>;
          ))}
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/admin/RoleManagement.tsx
        </div>;
      </div>;
<<<<<<< HEAD
=======
;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
        </div>;
      </div>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <div className="rounded-md border">;
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead>Team Member</TableHead>;
              <TableHead>Role</TableHead>;
              <TableHead className="text-center">;
                <div className="flex items-center justify-center gap-1">;
                  View Candidates;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
                      </TooltipTrigger>;
                      <TooltipContent>;
                        Can view candidate profiles and applications;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
              </TableHead>;
              <TableHead className="text-center">;
                <div className="flex items-center justify-center gap-1">;
                  Edit Candidates;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
                      </TooltipTrigger>;
                      <TooltipContent>;
                        Can edit candidate information and status;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
              </TableHead>;
              <TableHead className="text-center">;
                <div className="flex items-center justify-center gap-1">;
                  Create Jobs;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
                      </TooltipTrigger>;
                      <TooltipContent>;
                        Can create and publish job listings;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
              </TableHead>;
              <TableHead className="text-center">;
                <div className="flex items-center justify-center gap-1">;
                  Manage Team;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
                      </TooltipTrigger>;
                      <TooltipContent>;
                        Can add, edit, and remove team members;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
              </TableHead>;
              <TableHead className="text-center">;
                <div className="flex items-center justify-center gap-1">;
                  Billing Access;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
                      </TooltipTrigger>;
                      <TooltipContent>;
                        Can view and manage billing information;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
              </TableHead>;
            </TableRow>;
          </TableHeader>;
          <TableBody>;
<<<<<<< HEAD
<<<<<<< HEAD
            {teamMembers && teamMembers.map((member) => (;
              <TableRow key={member && member.id}>;
                <TableCell>;
                  <div className="font-medium">{member && member.name}</div>;
                  <div className="text-sm text-muted-foreground">;
                    {member && member.email}
                  </div>;
                </TableCell>;
                <TableCell>;
                  <select
                    className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    defaultValue={member && member.role}>;
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            {teamMembers.map((member) => (;
              <TableRow key={member.id}>;
                <TableCell>;
                  <div className="font-medium">{member.name}</div>;
                  <div className="text-sm text-muted-foreground">;
                    {member.email}
                  </div>;
                </TableCell>;
                <TableCell>;
<<<<<<< HEAD
                  <select ;
                    className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring";
                    defaultValue={member.role}
                  >;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
                  <select;
                    className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring";
                    defaultValue={member.role}
                  >;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    <option value="Admin">Admin</option>;
                    <option value="Recruiter">Recruiter</option>;
                    <option value="Manager">Manager</option>;
                    <option value="Viewer">Viewer</option>;
                  </select>;
                </TableCell>;
                <TableCell className="text-center">;
<<<<<<< HEAD
<<<<<<< HEAD
                  <Switch
                    checked={member && member.permissions.viewCandidates} 
                    onCheckedChange={(checked) => ;
                      handlePermissionChange(member && member.id, "viewCandidates", checked);
=======
                  <Switch ;
                    checked={member.permissions.viewCandidates} ;
                    onCheckedChange={(checked) => ;
                      handlePermissionChange(member.id, "viewCandidates", checked);
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
                  <Switch;
                    checked={member.permissions.viewCandidates} ;
                    onCheckedChange={(checked) =>;
                      handlePermissionChange(member.id, "viewCandidates", checked);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    }
                  />;
                </TableCell>;
                <TableCell className="text-center">;
<<<<<<< HEAD
<<<<<<< HEAD
                  <Switch
                    checked={member && member.permissions.editCandidates} 
                    onCheckedChange={(checked) => ;
                      handlePermissionChange(member && member.id, "editCandidates", checked);
=======
                  <Switch ;
                    checked={member.permissions.editCandidates} ;
                    onCheckedChange={(checked) => ;
                      handlePermissionChange(member.id, "editCandidates", checked);
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
                  <Switch;
                    checked={member.permissions.editCandidates} ;
                    onCheckedChange={(checked) =>;
                      handlePermissionChange(member.id, "editCandidates", checked);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    }
                  />;
                </TableCell>;
                <TableCell className="text-center">;
<<<<<<< HEAD
<<<<<<< HEAD
                  <Switch
                    checked={member && member.permissions.createJobs} 
                    onCheckedChange={(checked) => ;
                      handlePermissionChange(member && member.id, "createJobs", checked);
=======
                  <Switch ;
                    checked={member.permissions.createJobs} ;
                    onCheckedChange={(checked) => ;
                      handlePermissionChange(member.id, "createJobs", checked);
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
                  <Switch;
                    checked={member.permissions.createJobs} ;
                    onCheckedChange={(checked) =>;
                      handlePermissionChange(member.id, "createJobs", checked);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    }
                  />;
                </TableCell>;
                <TableCell className="text-center">;
<<<<<<< HEAD
<<<<<<< HEAD
                  <Switch
                    checked={member && member.permissions.manageTeam} 
                    onCheckedChange={(checked) => ;
                      handlePermissionChange(member && member.id, "manageTeam", checked);
=======
                  <Switch ;
                    checked={member.permissions.manageTeam} ;
                    onCheckedChange={(checked) => ;
                      handlePermissionChange(member.id, "manageTeam", checked);
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
                  <Switch;
                    checked={member.permissions.manageTeam} ;
                    onCheckedChange={(checked) =>;
                      handlePermissionChange(member.id, "manageTeam", checked);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    }
                  />;
                </TableCell>;
                <TableCell className="text-center">;
<<<<<<< HEAD
<<<<<<< HEAD
                  <Switch
                    checked={member && member.permissions.viewBilling} 
                    onCheckedChange={(checked) => ;
                      handlePermissionChange(member && member.id, "viewBilling", checked);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/admin/RoleManagement.tsx

========
=======
                  <Switch ;
                    checked={member.permissions.viewBilling} ;
                    onCheckedChange={(checked) => ;
                      handlePermissionChange(member.id, "viewBilling", checked);
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/admin/RoleManagement.tsx
=======
                  <Switch;
                    checked={member.permissions.viewBilling} ;
                    onCheckedChange={(checked) =>;
                      handlePermissionChange(member.id, "viewBilling", checked);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    }
                  />;
                </TableCell>;
              </TableRow>;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/admin/RoleManagement.tsx
<<<<<<< HEAD

=======
=======

                  <Switch 
                    checked={member.permissions.viewBilling} 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            ))}

========
            ))}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/admin/RoleManagement.tsx
          </TableBody>;
        </Table>;
      </div>;
    </div>;
<<<<<<< HEAD
  );
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/admin/RoleManagement.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/admin/RoleManagement.tsx
        view_candidates: true,
        edit_candidates: false,
        create_jobs: false,
        manage_team: false,
        view_billing: false,
        manage_billing: false}}],
  const handlePermissionChange = (member_id: number, permission: string, value: boolean) =>: any {
    // In a real app, this would make an API call to update permissions;
    toast ({
      title: "Permission updated",
      description: `Permission ${permission} has been ${value ? "granted" : "revoked"}.`});
  }
;
  const role_descriptions: Record < string, string> = {
    "Admin": "Full access to all features and settings";
    "Recruiter": "Can manage candidates and job postings";
    "Manager": "Can view candidates and create jobs";
    "Viewer": "Read - only access to candidates"}
;
  return (
    <div className="space - y-6">;
      <div>;
        <h3 className="text - xl font - medium mb - 4">Role Permissions</h3>;
        <div className="grid grid - cols - 1 md:grid - cols - 4 gap - 4 mb - 6">;
          {Object.entries (role_descriptions).map (([role, description]) => (
            <div key={role} className="bg - card rounded - lg p - 4 border border - border">;
              <div className="flex items - center gap - 2 mb - 2">;
                <Badge variant={role === "Admin" ? "default" : "outline"}>{role}</Badge>;
              </div>;
              <p className="text - sm text - muted - foreground">{description}</p>;
            </div>))}
        </div>;
      </div>;
      <div className="rounded - md border">;
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead > Team Member</TableHead>;
              <TableHead > Role</TableHead>;
              <TableHead className="text - center">;
                <div className="flex items - center justify - center gap - 1">;
                  View Candidates;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;
                        <InfoIcon className="h - 4 w - 4 text - muted - foreground" />;
                      </TooltipTrigger>;
                      <TooltipContent>;
                        Can view candidate profiles and applications;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
              </TableHead>;
              <TableHead className="text - center">;
                <div className="flex items - center justify - center gap - 1">;
                  Edit Candidates;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;
                        <InfoIcon className="h - 4 w - 4 text - muted - foreground" />;
                      </TooltipTrigger>;
                      <TooltipContent>;
                        Can edit candidate information and status;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
              </TableHead>;
              <TableHead className="text - center">;
                <div className="flex items - center justify - center gap - 1">;
                  Create Jobs;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;
                        <InfoIcon className="h - 4 w - 4 text - muted - foreground" />;
                      </TooltipTrigger>;
                      <TooltipContent>;
                        Can create and publish job listings;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
              </TableHead>;
              <TableHead className="text - center">;
                <div className="flex items - center justify - center gap - 1">;
                  Manage Team;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;
                        <InfoIcon className="h - 4 w - 4 text - muted - foreground" />;
                      </TooltipTrigger>;
                      <TooltipContent>;
                        Can add, edit, and remove team members;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
              </TableHead>;
              <TableHead className="text - center">;
                <div className="flex items - center justify - center gap - 1">;
                  Billing Access;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;
                        <InfoIcon className="h - 4 w - 4 text - muted - foreground" />;
                      </TooltipTrigger>;
                      <TooltipContent>;
                        Can view and manage billing information;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
              </TableHead>;
            </TableRow>;
          </TableHeader>;
          <TableBody>;
            {team_members.map ((member) => (
              <TableRow key={member.id}>;
                <TableCell>;
                  <div className="font - medium">{member.name}</div>;
                  <div className="text - sm text - muted - foreground">;
                    {member.email}
                  </div>;
                </TableCell>;
                <TableCell>;
                  <select;
                    className="w - full h - 9 rounded - md border border - input bg - background px - 3 py - 1 text - sm shadow - sm transition - colors focus - visible:outline - none focus - visible:ring - 1 focus - visible:ring - ring";
                    default_value={member.role}
                  >;
                    <option value="Admin">Admin</option>;
                    <option value="Recruiter">Recruiter</option>;
                    <option value="Manager">Manager</option>;
                    <option value="Viewer">Viewer</option>;
                  </select>;
                </TableCell>;
                <TableCell className="text - center">;
                  <Switch;
                    checked={member.permissions.view_candidates}
                    onCheckedChange={(checked) =>;
                      handlePermissionChange (member.id, "view_candidates", checked);
                    }
                  />;
                </TableCell>;
                <TableCell className="text - center">;
                  <Switch;
                    checked={member.permissions.edit_candidates}
                    onCheckedChange={(checked) =>;
                      handlePermissionChange (member.id, "edit_candidates", checked);
                    }
                  />;
                </TableCell>;
                <TableCell className="text - center">;
                  <Switch;
                    checked={member.permissions.create_jobs}
                    onCheckedChange={(checked) =>;
                      handlePermissionChange (member.id, "create_jobs", checked);
                    }
                  />;
                </TableCell>;
                <TableCell className="text - center">;
                  <Switch;
                    checked={member.permissions.manage_team}
                    onCheckedChange={(checked) =>;
                      handlePermissionChange (member.id, "manage_team", checked);
                    }
                  />;
                </TableCell>;
                <TableCell className="text - center">;
                  <Switch;
                    checked={member.permissions.view_billing}
                    onCheckedChange={(checked) =>;
                      handlePermissionChange (member.id, "view_billing", checked);
                    }
                  />;
                </TableCell>;
              </TableRow>))}
          </TableBody>;
        </Table>;
      </div>;
    </div>);
}
=======
  ),;}
 import {
  Table;
TableBody;
TableCell;
TableHead;
TableHeader;
import {
  Tooltip;
TooltipContent;
TooltipProvider;
//Mock team members data const teamMembers = [ {
  const handlePermissionChange = (memberId: number, permission: string, value: boolean) => {
  //In a real app, this would make an API call to update permissions toast ({
  space-y-6"> <div> </div>) ) 
}</div> </div> <div className=" rounded-md border"> <Table> <TableHeader> <TableRow> <TableHead>Team Member</TableHead> <TableHead>Role</TableHead> <TableHead className=" text-center"> <div className=" flex items-center justify-center gap-1"> View Candidates <TooltipProvider> <Tooltip> <TooltipTrigger> <InfoIcon className=" h-4 w-4 text-muted-foreground"/> </TooltipTrigger> <TooltipContent> Can view candidate profiles and applications </TooltipContent> </Tooltip> </TooltipProvider> </div> </TableHead> <TableHead className=" text-center"> <div className=" flex items-center justify-center gap-1"> Edit Candidates <TooltipProvider> <Tooltip> <TooltipTrigger> <InfoIcon className=" h-4 w-4 text-muted-foreground"/> </TooltipTrigger> <TooltipContent> Can edit candidate information and status </TooltipContent> </Tooltip> </TooltipProvider> </div> </TableHead> <TableHead className=" text-center"> <div className=" flex items-center justify-center gap-1"> Create Jobs <TooltipProvider> <Tooltip> <TooltipTrigger> <InfoIcon className=" h-4 w-4 text-muted-foreground"/> </TooltipTrigger> <TooltipContent> Can create and publish job listings </TooltipContent> </Tooltip> </TooltipProvider> </div> </TableHead> <TableHead className=" text-center"> <div className=" flex items-center justify-center gap-1"> Manage Team <TooltipProvider> <Tooltip> <TooltipTrigger> <InfoIcon className=" h-4 w-4 text-muted-foreground"/> </TooltipTrigger> <TooltipContent> Can add, edit, and remove team members </TooltipContent> </Tooltip> </TooltipProvider> </div> </TableHead> <TableHead className=" text-center"> <div className=" flex items-center justify-center gap-1"> Billing Access <TooltipProvider> <Tooltip> <TooltipTrigger> <InfoIcon className=" h-4 w-4 text-muted-foreground"/> </TooltipTrigger> <TooltipContent> Can view and manage billing information </TooltipContent> </Tooltip> </TooltipProvider> </div> </TableHead> </TableRow> </TableHeader> <TableBody> {
  teamMembers.map ( (member) => (<TableRow key= {
  member.id 
}> <TableCell> </div> </TableCell> <TableCell> <select > <option value=" Admin">Admin</option> <option value=" Recruiter">Recruiter</option> <option value=" Manager">Manager</option> <option value=" Viewer">Viewer</option> </select> </TableCell> <TableCell className=" text-center"> <Switch /> </TableCell> <TableCell className=" text-center"> <Switch /> </TableCell> <TableCell className=" text-center"> <Switch /> </TableCell> <TableCell className=" text-center"> <Switch /> </TableCell> <TableCell className=" text-center" > <Switch /> </TableCell> </TableRow>) ) 
}</TableBody> </Table> </div> </div>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
