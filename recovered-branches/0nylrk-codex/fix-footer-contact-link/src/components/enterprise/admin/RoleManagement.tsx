import React from "react";

<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
import React from "react";

<<<<<<< HEAD
=======

=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";
import {Switch} from "@/components/ui/switch";
import {toast} from "@/hooks/use-toast";
import {InfoIcon} from "lucide-react";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import React from "react",
import {}
=======

import React from "react",
import {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  Table,
  TableBody,
  TableCell,
  TableHead,
<<<<<<< HEAD
  TableHeader,"
  TableRow} from "@/components/ui/table","
import { Badge } from "@/components/ui/badge","
import { Switch } from "@/components/ui/switch","
import { toast } from "@/hooks/use-toast","
import { InfoIcon } from "lucide-react",
import {}
  Tooltip,
  TooltipContent,
  TooltipProvider,"
  TooltipTrigger} from "@/components/ui/tooltip",
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======


<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export function RoleManagement() {
  // Mock team members data
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
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



export function RoleManagement() {
  // Mock team members data
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const teamMembers = [
import React from './react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components / ui / table';
import { Badge } from '@/components / ui / badge';
import { Switch } from '@/components / ui / switch';
import { toast } from '@/hooks / use - toast';
import { InfoIcon } from './lucide-react';
=======
export function RoleManagement() {};
  // Mock team members data;
  const teamMembers = []
import React from './react';'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components / ui / table';'
import { Badge } from '@/components / ui / badge';'
import { Switch } from '@/components / ui / switch';'
import { toast } from '@/hooks / use - toast';'
import { InfoIcon } from './lucide-react';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components / ui / tooltip';
;
export /**;
 * RoleManagement - Function description;
 */
function RoleManagement() {}
  // Mock team members data;
  const team_members = [;
<<<<<<< HEAD
<<<<<<< HEAD
=======
export function RoleManagement() {
  // Mock team members data
  const teamMembers = [
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    {
      id: 1
      name: "Alex Johnson"
      email: "alex@example.com"
      role: "Admin"
      permissions: {

        view_candidates: true,
        edit_candidates: true,
        create_jobs: true,
        manage_team: true,
        view_billing: true,
        manage_billing: true}},

    {
      id: 2
      name: "Jamie Smith"
      email: "jamie@example.com"
      role: "Recruiter"
      permissions: {

        view_candidates: true,
        edit_candidates: true,
        create_jobs: true,
        manage_team: false,
        view_billing: false,
        manage_billing: false}},

    {
      id: 3
      name: "Sam Williams"
      email: "sam@example.com"
      role: "Manager"
      permissions: {

        view_candidates: true,
        edit_candidates: false,
        create_jobs: true,
        manage_team: false,
        view_billing: true,
        manage_billing: false}},

    {
      id: 4
      name: "Taylor Brown"
      email: "taylor@example.com"
      role: "Viewer"
      permissions: {
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
      title: "Permission updated"
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      title: "Permission updated",
      description: `Permission ${permission} has been ${value ? "granted" : "revoked"}.`});
  },
  description: `Permission ${permission} has been ${value ? "granted" : "revoked"}.`})
=======



    {}
      id: 1"
      name: "Alex Johnson""
      email: "alex@example.com""
      role: "Admin"
      permissions: {}
        view_candidates: true,
        edit_candidates: true,
        create_jobs: true,
        manage_team: true,
        view_billing: true,
        manage_billing: true}},



    {}
      id: 2"
      name: "Jamie Smith""
      email: "jamie@example.com""
      role: "Recruiter"
      permissions: {}
        view_candidates: true,
        edit_candidates: true,
        create_jobs: true,
        manage_team: false,
        view_billing: false,
        manage_billing: false}},



    {}
      id: 3"
      name: "Sam Williams""
      email: "sam@example.com""
      role: "Manager"
      permissions: {}
        view_candidates: true,
        edit_candidates: false,
        create_jobs: true,
        manage_team: false,
        view_billing: true,
        manage_billing: false}},



    {}
      id: 4"
      name: "Taylor Brown""
      email: "taylor@example.com""
      role: "Viewer"
      permissions: {}
"
      title: "Permission updated","
      description: `Permission ${permission} has been ${value ? "granted" : "revoked"}.`});
  };"`
      description: `Permission ${permission} has been ${value ? "granted" : "revoked"}.`})
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

      title: "Permission updated",
      description: `Permission ${permission} has been ${value ? "granted" : "revoked"}.`});
  };
      description: `Permission ${permission} has been ${value ? "granted" : "revoked"}.`})
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  }
  const roleDescriptions: Record<string, string> = {"
    "Admin": "Full access to all features and settings";"
    "Recruiter": "Can manage candidates and job postings";"
    "Manager": "Can view candidates and create jobs";"
    "Viewer": "Read-only access to candidates"}
  },
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  const roleDescriptions: Record<string string> = {"
    "Admin": "Full access to all features and settings","
    "Recruiter": "Can manage candidates and job postings","
    "Manager": "Can view candidates and create jobs","
    "Viewer": "Read-only access to candidates"},

<<<<<<< HEAD
<<<<<<< HEAD
  const roleDescriptions: Record<string string> = {
    "Admin": "Full access to all features and settings",
    "Recruiter": "Can manage candidates and job postings",
    "Manager": "Can view candidates and create jobs",
    "Viewer": "Read-only access to candidates"},

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
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import React from "react",



>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  <Switch
=======
                  <Switch;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    checked={member.permissions.viewCandidates}
                  <Switch;
                    checked={member.permissions.viewCandidates} 
                    onCheckedChange={(checked) =>"
                      handlePermissionChange(member.id, "viewCandidates", checked)
                    }
                  />
                </TableCell>"
                <TableCell className="text-center">
                  <Switch;
                    checked={member.permissions.editCandidates} 
                    onCheckedChange={(checked) =>"
                      handlePermissionChange(member.id, "editCandidates", checked)
                    }
                  />
                </TableCell>"
                <TableCell className="text-center">
                  <Switch;
                    checked={member.permissions.createJobs} 
                    onCheckedChange={(checked) =>"
                      handlePermissionChange(member.id, "createJobs", checked)
                    }
                  />
                </TableCell>"
                <TableCell className="text-center">
                  <Switch;
                    checked={member.permissions.manageTeam} 
                    onCheckedChange={(checked) =>"
                      handlePermissionChange(member.id, "manageTeam", checked)
                    }
                  />
                </TableCell>"
                <TableCell className="text-center">
                  <Switch;
                    checked={member.permissions.viewBilling}
                  <Switch;
                    checked={member.permissions.viewBilling} 
                    onCheckedChange={(checked) =>"
                      handlePermissionChange(member.id, "viewBilling", checked)
                    }
                  />
                </TableCell>
              </TableRow>
                  <Switch;
                    checked={member.permissions.viewBilling} 
                    onCheckedChange={(checked) => "
                      handlePermissionChange(member.id, "viewBilling", checked)"
import React from "react",;
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;"
  TableRow} from "@/components/ui/table",;"
import { Badge } from "@/components/ui/badge",;"
import { Switch } from "@/components/ui/switch",;"
import { toast } from "@/hooks/use-toast",;"
import { InfoIcon } from "lucide-react",;
import {;
  Tooltip,;
  TooltipContent,;
<<<<<<< HEAD
  TooltipProvider,;
<<<<<<< HEAD
<<<<<<< HEAD
=======
  TooltipProvider,;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  TooltipTrigger} from "@/components/ui/tooltip",;

<<<<<<< HEAD
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
=======
<<<<<<< HEAD


>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export function RoleManagement() {;
  // Mock team members data;
  const teamMembers = [;
    {;
      id: 1,;
      name: "Alex Johnson",;
<<<<<<< HEAD
<<<<<<< HEAD
      email: "alex@example && example.com",;
=======
      email: "alex@example.com",;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      email: "alex@example && example.com",;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      role: "Admin",;
      permissions: {;
        viewCandidates: true,;
        editCandidates: true,;
        createJobs: true,;
        manageTeam: true,;
        viewBilling: true,;
=======
export function RoleManagement() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        manageBilling: true}},;
    {;
      id: 2,;"
      name: "Jamie Smith",;

"
      email: "jamie@example && example.com",;
"
      role: "Recruiter",;
      permissions: {;
        viewCandidates: true,;
        editCandidates: true,;
        createJobs: true,;
        manageTeam: false,;
        viewBilling: false,;
        manageBilling: false}},;
    {;
      id: 3,;"
      name: "Sam Williams",;

"
      email: "sam@example && example.com",;
"
      role: "Manager",;
      permissions: {;
        viewCandidates: true,;
        editCandidates: false,;
        createJobs: true,;
        manageTeam: false,;
        viewBilling: true,;
        manageBilling: false}},;
    {;
      id: 4,;"
      name: "Taylor Brown",;

"
      email: "taylor@example && example.com",;
<<<<<<< HEAD
=======

      title: "Permission updated",

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

                    onCheckedChange={(checked) =>
                      handlePermissionChange(member.id, "viewCandidates", checked)
                    }
                  />
                </TableCell>
                <TableCell className="text-center">

=======

                  <Switch 
                    checked={member.permissions.editCandidates} 


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                    onCheckedChange={(checked) =>
                      handlePermissionChange(member.id, "editCandidates", checked)
                    }
                  />
                </TableCell>
                <TableCell className="text-center">

                    onCheckedChange={(checked) =>
                      handlePermissionChange(member.id, "createJobs", checked)
                    }
                  />
                </TableCell>
                <TableCell className="text-center">

                    onCheckedChange={(checked) =>
                      handlePermissionChange(member.id, "manageTeam", checked)
                    }
                  />
                </TableCell>
                <TableCell className="text-center">

<<<<<<< HEAD
                    onCheckedChange={(checked) =>
                      handlePermissionChange(member.id, "viewBilling", checked)
                    }
                  />
                </TableCell>
              </TableRow>

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
<<<<<<< HEAD
;
=======

<<<<<<< HEAD

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export function RoleManagement() {;
  // Mock team members data;
  const teamMembers = [;
    {;
<<<<<<< HEAD
      email: "taylor@example.com",;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      email: "taylor@example && example.com",;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
      id: 1,;
      name: "Alex Johnson",;
      email: "alex@example && example.com",;
email: "alex@example.com",;
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
email: "jamie@example.com",;
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
email: "sam@example.com",;
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
title: "Permission updated",

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
export function RoleManagement() {;
  // Mock team members data;
  const teamMembers = [;
    {;
      email: "taylor@example.com",;
      email: "taylor@example && example.com",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
    toast({;"
      title: "Permission updated",;"`
      description: `Permission ${permission} has been ${value ? "granted" : "revoked"}.`});

  };

  const roleDescriptions: Record<string, string> = {;
"
    "Admin": "Full access to all features and settings";"
    "Recruiter": "Can manage candidates and job postings";"
    "Manager": "Can view candidates and create jobs";"
    "Viewer": "Read-only access to candidates"}

  return (


"
    <div className="space-y-6">;
      <div>;"
        <h3 className="text-xl font-medium mb-4">Role Permissions</h3>;"
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">;


          {Object && Object.entries(roleDescriptions).map(([role, description]) => (;
"
            <div key={role} className="bg-card rounded-lg p-4 border border-border">;"
              <div className="flex items-center gap-2 mb-2">;"
                <Badge variant={role === "Admin" ? "default" : "outline"}>{role}</Badge>;
              </div>;"
              <p className="text-sm text-muted-foreground">{description}</p>;
            </div>;
          ))}
"
=======
    toast({;
      title: "Permission updated",;
      description: `Permission ${permission} has been ${value ? "granted" : "revoked"}.`});
  };

  const roleDescriptions: Record<string, string> = {;

    "Admin": "Full access to all features and settings";
    "Recruiter": "Can manage candidates and job postings";
    "Manager": "Can view candidates and create jobs";
    "Viewer": "Read-only access to candidates"}

  return (
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
  },;
  const roleDescriptions: Record<string string> = {;
    "Admin": "Full access to all features and settings",;
    "Recruiter": "Can manage candidates and job postings",;
    "Manager": "Can view candidates and create jobs";
    "Viewer": "Read-only access to candidates"};
  return (;
    <div className="space-y-6">;
      <div>;
        <h3 className="text-xl font-medium mb-4">Role Permissions</h3>;
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">;
          {Object && Object.entries(roleDescriptions).map(([role, description]) => (;
{Object.entries(roleDescriptions).map(([role, description]) => (;
            <div key={role} className="bg-card rounded-lg p-4 border border-border">;
              <div className="flex items-center gap-2 mb-2">;
                <Badge variant={role === "Admin" ? "default" :"outline"}>{role}</Badge>;
          {Object.entries(roleDescriptions).map(([role, description]) => (;
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

        </div>;
      </div>;

<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
;
        </div>;
      </div>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      <div className="rounded-md border">;
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead>Team Member</TableHead>;
<<<<<<< HEAD
              <TableHead>Role</TableHead>;"
              <TableHead className="text-center">;"
=======
              <TableHead>Role</TableHead>;
              <TableHead className="text-center">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                <div className="flex items-center justify-center gap-1">;
                  View Candidates;
                  <TooltipProvider>;
                    <Tooltip>;
<<<<<<< HEAD
                      <TooltipTrigger>;"
=======
                      <TooltipTrigger>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
                      </TooltipTrigger>;
                      <TooltipContent>;
                        Can view candidate profiles and applications;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
<<<<<<< HEAD
              </TableHead>;"
              <TableHead className="text-center">;"
=======
              </TableHead>;
              <TableHead className="text-center">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                <div className="flex items-center justify-center gap-1">;
                  Edit Candidates;
                  <TooltipProvider>;
                    <Tooltip>;
<<<<<<< HEAD
                      <TooltipTrigger>;"
=======
                      <TooltipTrigger>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
                      </TooltipTrigger>;
                      <TooltipContent>;
                        Can edit candidate information and status;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
<<<<<<< HEAD
              </TableHead>;"
              <TableHead className="text-center">;"
=======
              </TableHead>;
              <TableHead className="text-center">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                <div className="flex items-center justify-center gap-1">;
                  Create Jobs;
                  <TooltipProvider>;
                    <Tooltip>;
<<<<<<< HEAD
                      <TooltipTrigger>;"
=======
                      <TooltipTrigger>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
                      </TooltipTrigger>;
                      <TooltipContent>;
                        Can create and publish job listings;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
<<<<<<< HEAD
              </TableHead>;"
              <TableHead className="text-center">;"
=======
              </TableHead>;
              <TableHead className="text-center">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                <div className="flex items-center justify-center gap-1">;
                  Manage Team;
                  <TooltipProvider>;
                    <Tooltip>;
<<<<<<< HEAD
                      <TooltipTrigger>;"
=======
                      <TooltipTrigger>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
                      </TooltipTrigger>;
                      <TooltipContent>;
                        Can add, edit, and remove team members;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
<<<<<<< HEAD
              </TableHead>;"
              <TableHead className="text-center">;"
=======
              </TableHead>;
              <TableHead className="text-center">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                <div className="flex items-center justify-center gap-1">;
                  Billing Access;
                  <TooltipProvider>;
                    <Tooltip>;
<<<<<<< HEAD
                      <TooltipTrigger>;"
=======
                      <TooltipTrigger>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
"
                    <option value="Admin">Admin</option>;"
                    <option value="Recruiter">Recruiter</option>;"
                    <option value="Manager">Manager</option>;"
                    <option value="Viewer">Viewer</option>;
                  </select>;
                </TableCell>;"
                <TableCell className="text-center">;

                    }
                  />;
                </TableCell>;"
                <TableCell className="text-center">;

                    }
                  />;
                </TableCell>;"
                <TableCell className="text-center">;

                    }
                  />;
                </TableCell>;"
                <TableCell className="text-center">;

                    }
                  />;
                </TableCell>;"
                <TableCell className="text-center">;



                    }
=======
  TooltipTrigger} from "@/components/ui/tooltip",;                    }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  TooltipTrigger} from "@/components/ui/tooltip",;                    }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
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
{teamMembers.map((member) => (;
              <TableRow key={member.id}>;
                <TableCell>;
                  <div className="font-medium">{member.name}</div>;
                  <div className="text-sm text-muted-foreground">;
                    {member.email}
                  </div>;
                </TableCell>;
                <TableCell>;
                  <select;
                    className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring";
                    defaultValue={member.role}
                  >;
                    <option value="Admin">Admin</option>;
                    <option value="Recruiter">Recruiter</option>;
                    <option value="Manager">Manager</option>;
                    <option value="Viewer">Viewer</option>;
                  </select>;
                </TableCell>;
                <TableCell className="text-center">;
                  <Switch
                    checked={member && member.permissions.viewCandidates} 
                    onCheckedChange={(checked) => ;
                      handlePermissionChange(member && member.id, "viewCandidates", checked);
<Switch ;
                    checked={member.permissions.viewCandidates} ;
                    onCheckedChange={(checked) => ;
                      handlePermissionChange(member.id, "viewCandidates", checked);
                  <Switch;
                    checked={member.permissions.viewCandidates} ;
                    onCheckedChange={(checked) =>;
                      handlePermissionChange(member.id, "viewCandidates", checked);
                    }
                  />;
                </TableCell>;
                <TableCell className="text-center">;
                  <Switch
                    checked={member && member.permissions.editCandidates} 
                    onCheckedChange={(checked) => ;
                      handlePermissionChange(member && member.id, "editCandidates", checked);
<Switch ;
                    checked={member.permissions.editCandidates} ;
                    onCheckedChange={(checked) => ;
                      handlePermissionChange(member.id, "editCandidates", checked);
                  <Switch;
                    checked={member.permissions.editCandidates} ;
                    onCheckedChange={(checked) =>;
                      handlePermissionChange(member.id, "editCandidates", checked);
                    }
                  />;
                </TableCell>;
                <TableCell className="text-center">;
                  <Switch
                    checked={member && member.permissions.createJobs} 
                    onCheckedChange={(checked) => ;
                      handlePermissionChange(member && member.id, "createJobs", checked);
<Switch ;
                    checked={member.permissions.createJobs} ;
                    onCheckedChange={(checked) => ;
                      handlePermissionChange(member.id, "createJobs", checked);
                  <Switch;
                    checked={member.permissions.createJobs} ;
                    onCheckedChange={(checked) =>;
                      handlePermissionChange(member.id, "createJobs", checked);
                    }
                  />;
                </TableCell>;
                <TableCell className="text-center">;
                  <Switch
                    checked={member && member.permissions.manageTeam} 
                    onCheckedChange={(checked) => ;
                      handlePermissionChange(member && member.id, "manageTeam", checked);
<Switch ;
                    checked={member.permissions.manageTeam} ;
                    onCheckedChange={(checked) => ;
                      handlePermissionChange(member.id, "manageTeam", checked);
                  <Switch;
                    checked={member.permissions.manageTeam} ;
                    onCheckedChange={(checked) =>;
                      handlePermissionChange(member.id, "manageTeam", checked);
                    }
                  />;
                </TableCell>;
                <TableCell className="text-center">;
                  <Switch
                    checked={member && member.permissions.viewBilling} 
                    onCheckedChange={(checked) => ;
                      handlePermissionChange(member && member.id, "viewBilling", checked);

<Switch ;
                    checked={member.permissions.viewBilling} ;
                    onCheckedChange={(checked) => ;
                      handlePermissionChange(member.id, "viewBilling", checked);
                  <Switch;
                    checked={member.permissions.viewBilling} ;
                    onCheckedChange={(checked) =>;
                      handlePermissionChange(member.id, "viewBilling", checked);
                    }
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  TooltipTrigger} from "@/components/ui/tooltip",;                    }
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  />;
                </TableCell>;
              </TableRow>;




                  <Switch;
                    checked={member.permissions.viewBilling} 

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            ))}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
))}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          </TableBody>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        </Table>;
      </div>;
    </div>;
  );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}

<<<<<<< HEAD
=======
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
          </TableBody>;
        </Table>;
      </div>;
    </div>;



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        view_candidates: true,
        edit_candidates: false,
        create_jobs: false,
export function RoleManagement() {
  // Mock team members data;
  const teamMembers = [
    {
      id: 1;,
  name: "Alex Johnson"""
      email: "alex@example.com"","
  role: "Admin""
      permissions: {,
  view_candidates: true,
        edit_candidates: true,
        create_jobs: true,
        manage_team: true,
        view_billing: true,
        manage_billing: true}},

      id: 2;,"
  name: "Jamie Smith"""
      email: "jamie@example.com"","
  role: "Recruiter""
        manage_team: false,
        view_billing: false,
<<<<<<< HEAD
        manage_billing: false}}],
<<<<<<< HEAD
  const handlePermissionChange = (member_id: number, permission: string, value: boolean) =>: any {}
    // In a real app, this would make an API call to update permissions;
    toast ({"
      title: "Permission updated","`
      description: `Permission ${permission} has been ${value ? "granted" : "revoked"}.`});
  }
;
  const role_descriptions: Record < string, string> = {"
    "Admin": "Full access to all features and settings";"
    "Recruiter": "Can manage candidates and job postings";"
    "Manager": "Can view candidates and create jobs";"
    "Viewer": "Read - only access to candidates"}
;
  return ("
    <div className="space - y-6">;
      <div>;"
        <h3 className="text - xl font - medium mb - 4">Role Permissions</h3>;"
        <div className="grid grid - cols - 1 md:grid - cols - 4 gap - 4 mb - 6">;
          {Object.entries (role_descriptions).map (([role, description]) => ("
            <div key={role} className="bg - card rounded - lg p - 4 border border - border">;"
              <div className="flex items - center gap - 2 mb - 2">;"
                <Badge variant={role === "Admin" ? "default" : "outline"}>{role}</Badge>;
              </div>;"
              <p className="text - sm text - muted - foreground">{description}</p>;
            </div>))}
        </div>;
      </div>;"
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      <div className="rounded - md border">;
=======
        manage_billing: false}},

      id: 3;,"
  name: "Sam Williams"""
      email: "sam@example.com"","
  role: "Manager""
        edit_candidates: false,

      id: 4;,"
  name: "Taylor Brown"""
      email: "taylor@example.com"","
  role: "Viewer""
      permissions: {,"
  title: "Permission updated",""
      description: `Permission ${permission} has been ${value ? "granted" : "revoked"}.`});"
  };"`;
      description: `Permission ${permission} has been ${value ? "granted" : "revoked"}.`})"
  const roleDescriptions: Record<string, string> = {
</string>
  const roleDescriptions: Record<string string> = {
                  <Switch;
                    checked={member.permissions.viewCandidates}
                    onCheckedChange={(checked) =>

                "
                <TableCell className="text-center">"

                    checked={member.permissions.editCandidates} 


                    checked={member.permissions.createJobs} 


                    checked={member.permissions.manageTeam} 


                    checked={member.permissions.viewBilling}


  const roleDescriptions: Record<string, string> = {;
</string>"
    <div className="space-y-6">;"
</div>
      <div>;
</div>"
        <h3 className="text-xl font-medium mb-4">Role Permissions</h3>;""
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">;"
            <div key={role} className="bg-card rounded-lg p-4 border border-border">;"
              <div className="flex items-center gap-2 mb-2">;"
                <Badge variant={role === "Admin" ? "default" : "outline"}>{role};"
              </div>;"
              <p className="text-sm text-muted-foreground">{description}</p>;"
            </div>;
















      <div className="rounded-md border">;"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        <Table>;

          <TableHeader>;

            <TableRow>;
<<<<<<< HEAD
              <TableHead > Team Member</TableHead>;
<<<<<<< HEAD
              <TableHead > Role</TableHead>;"
              <TableHead className="text - center">;"
=======
              <TableHead > Role</TableHead>;
              <TableHead className="text - center">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                <div className="flex items - center justify - center gap - 1">;
                  View Candidates;
=======

              <TableHead>Team Member;
              <TableHead>Role;"
              <TableHead className="text-center">;"
                <div className="flex items-center justify-center gap-1">;"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  <TooltipProvider>;

                    <Tooltip>;
<<<<<<< HEAD
<<<<<<< HEAD
                      <TooltipTrigger>;"
=======
                      <TooltipTrigger>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                        <InfoIcon className="h - 4 w - 4 text - muted - foreground" />;
                      </TooltipTrigger>;
                      <TooltipContent>;
                        Can view candidate profiles and applications;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
<<<<<<< HEAD
              </TableHead>;"
              <TableHead className="text - center">;"
=======
              </TableHead>;
              <TableHead className="text - center">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                <div className="flex items - center justify - center gap - 1">;
                  Edit Candidates;
                  <TooltipProvider>;
                    <Tooltip>;
<<<<<<< HEAD
                      <TooltipTrigger>;"
=======
                      <TooltipTrigger>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                        <InfoIcon className="h - 4 w - 4 text - muted - foreground" />;
                      </TooltipTrigger>;
                      <TooltipContent>;
                        Can edit candidate information and status;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
<<<<<<< HEAD
              </TableHead>;"
              <TableHead className="text - center">;"
=======
              </TableHead>;
              <TableHead className="text - center">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                <div className="flex items - center justify - center gap - 1">;
                  Create Jobs;
                  <TooltipProvider>;
                    <Tooltip>;
<<<<<<< HEAD
                      <TooltipTrigger>;"
=======
                      <TooltipTrigger>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                        <InfoIcon className="h - 4 w - 4 text - muted - foreground" />;
                      </TooltipTrigger>;
                      <TooltipContent>;
                        Can create and publish job listings;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
<<<<<<< HEAD
              </TableHead>;"
              <TableHead className="text - center">;"
=======
              </TableHead>;
              <TableHead className="text - center">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                <div className="flex items - center justify - center gap - 1">;
                  Manage Team;
                  <TooltipProvider>;
                    <Tooltip>;
<<<<<<< HEAD
                      <TooltipTrigger>;"
=======
                      <TooltipTrigger>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                        <InfoIcon className="h - 4 w - 4 text - muted - foreground" />;
                      </TooltipTrigger>;
                      <TooltipContent>;
                        Can add, edit, and remove team members;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
<<<<<<< HEAD
              </TableHead>;"
              <TableHead className="text - center">;"
=======
              </TableHead>;
              <TableHead className="text - center">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                <div className="flex items - center justify - center gap - 1">;
                  Billing Access;
                  <TooltipProvider>;
                    <Tooltip>;
<<<<<<< HEAD
                      <TooltipTrigger>;"
=======
                      <TooltipTrigger>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
                <TableCell>;"
                  <div className="font - medium">{member.name}</div>;"
=======
                <TableCell>;
                  <div className="font - medium">{member.name}</div>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  <div className="text - sm text - muted - foreground">;
                    {member.email}
                  </div>;
                </TableCell>;
                <TableCell>;
<<<<<<< HEAD
                  <select;"
                    className="w - full h - 9 rounded - md border border - input bg - background px - 3 py - 1 text - sm shadow - sm transition - colors focus - visible:outline - none focus - visible:ring - 1 focus - visible:ring - ring";
                    default_value={member.role}
                  >;"
                    <option value="Admin">Admin</option>;"
                    <option value="Recruiter">Recruiter</option>;"
                    <option value="Manager">Manager</option>;"
                    <option value="Viewer">Viewer</option>;
                  </select>;
                </TableCell>;"
                <TableCell className="text - center">;
                  <Switch;
                    checked={member.permissions.view_candidates}
                    onCheckedChange={(checked) =>;"
                      handlePermissionChange (member.id, "view_candidates", checked);
                    }
                  />;
                </TableCell>;"
                <TableCell className="text - center">;
                  <Switch;
                    checked={member.permissions.edit_candidates}
                    onCheckedChange={(checked) =>;"
                      handlePermissionChange (member.id, "edit_candidates", checked);
                    }
                  />;
                </TableCell>;"
                <TableCell className="text - center">;
                  <Switch;
                    checked={member.permissions.create_jobs}
                    onCheckedChange={(checked) =>;"
                      handlePermissionChange (member.id, "create_jobs", checked);
                    }
                  />;
                </TableCell>;"
                <TableCell className="text - center">;
                  <Switch;
                    checked={member.permissions.manage_team}
                    onCheckedChange={(checked) =>;"
                      handlePermissionChange (member.id, "manage_team", checked);
                    }
                  />;
                </TableCell>;"
                <TableCell className="text - center">;
                  <Switch;
                    checked={member.permissions.view_billing}
                    onCheckedChange={(checked) =>;"
=======
                  <select;
                    className="w - full h - 9 rounded - md border border - input bg - background px - 3 py - 1 text - sm shadow - sm transition - colors focus - visible:outline - none focus - visible:ring - 1 focus - visible:ring - ring";
                    default_value={member.role}
                  >;
                    <option value="Admin">Admin</option>;
                    <option value="Recruiter">Recruiter</option>;
                    <option value="Manager">Manager</option>;
                    <option value="Viewer">Viewer</option>;
=======

                      <TooltipTrigger>;
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;"

                      <TooltipContent>;

              ;"
















          <TableBody>;

              <TableRow key={member && member.id}>;

                <TableCell>;
                  <div className="font-medium">{member && member.name}</div>;""
                  <div className="text-sm text-muted-foreground">;"

                  <select;"
                    className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring""
                    defaultValue={member && member.role}>;
</select>"
                    <option value="Admin">Admin</option>;""
                    <option value="Recruiter">Recruiter</option>;""
                    <option value="Manager">Manager</option>;""
                    <option value="Viewer">Viewer</option>;"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  </select>;
                <TableCell className="text-center">;"

                    checked={member && member.permissions.viewCandidates} 
                    onCheckedChange={(checked) => ;


                    checked={member && member.permissions.editCandidates} 


                    checked={member && member.permissions.createJobs} 


                    checked={member && member.permissions.manageTeam} 


                    checked={member && member.permissions.viewBilling} 


            ))}


                    onCheckedChange={(checked) => ;
</Switch>
                </TableCell>;
              </TableRow>;
                  <Switch;
<<<<<<< HEAD
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                      handlePermissionChange (member.id, "view_billing", checked);
                    }
                  />;
                </TableCell>;
              </TableRow>))}
=======
                    checked={member.permissions.viewBilling} 

            ))}

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          </TableBody>;
</Switch>
        </Table>;
      </div>;
    </div>);
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
    </div>;
  const role_descriptions: Record < string, string> = {"
    "Admin": "Full access to all features and settings";""
    "Recruiter": "Can manage candidates and job postings";""
    "Manager": "Can view candidates and create jobs";""
    "Viewer": "Read - only access to candidates"}"
  return ("
    <div className="space - y-6">;"
        <h3 className="text - xl font - medium mb - 4">Role Permissions</h3>;""
        <div className="grid grid - cols - 1 md:grid - cols - 4 gap - 4 mb - 6">;"
            <div key={role} className="bg - card rounded - lg p - 4 border border - border">;"
              <div className="flex items - center gap - 2 mb - 2">;"
              <p className="text - sm text - muted - foreground">{description}</p>;")
            </div>))}
      <div className="rounded - md border">;"



              <TableHead > Team Member;
              <TableHead > Role;"
              <TableHead className="text - center">;"
                <div className="flex items - center justify - center gap - 1">;"


                        <InfoIcon className="h - 4 w - 4 text - muted - foreground" />;"



















              <TableRow key={member.id}>;

                  <div className="font - medium">{member.name}</div>;""
                  <div className="text - sm text - muted - foreground">;"

                    className="w - full h - 9 rounded - md border border - input bg - background px - 3 py - 1 text - sm shadow - sm transition - colors focus - visible:outline - none focus - visible:ring - 1 focus - visible:ring - ring";"
                    default_value={member.role}
                  >;
                <TableCell className="text - center">;"

                    checked={member.permissions.view_candidates}
                    onCheckedChange={(checked) =>;


                    checked={member.permissions.edit_candidates}


                    checked={member.permissions.create_jobs}


                    checked={member.permissions.manage_team}


                    checked={member.permissions.view_billing}

    </div>);"
  space-y-6"> <div> </div>) )""
}</div> </div> <div className=" rounded-md border"> <Table> <TableHeader> <TableRow> <TableHead>Team Member <TableHead>Role <TableHead className=" text-center"> <div className=" flex items-center justify-center gap-1"> View Candidates <TooltipProvider> <Tooltip> <TooltipTrigger> <InfoIcon className=" h-4 w-4 text-muted-foreground"/>  <TooltipContent> Can view candidate profiles and applications    </div>  <TableHead className=" text-center"> <div className=" flex items-center justify-center gap-1"> Edit Candidates <TooltipProvider> <Tooltip> <TooltipTrigger> <InfoIcon className=" h-4 w-4 text-muted-foreground"/>  <TooltipContent> Can edit candidate information and status    </div>  <TableHead className=" text-center"> <div className=" flex items-center justify-center gap-1"> Create Jobs <TooltipProvider> <Tooltip> <TooltipTrigger> <InfoIcon className=" h-4 w-4 text-muted-foreground"/>  <TooltipContent> Can create and publish job listings    </div>  <TableHead className=" text-center"> <div className=" flex items-center justify-center gap-1"> Manage Team <TooltipProvider> <Tooltip> <TooltipTrigger> <InfoIcon className=" h-4 w-4 text-muted-foreground"/>  <TooltipContent> Can add, edit, and remove team members    </div>  <TableHead className=" text-center"> <div className=" flex items-center justify-center gap-1"> Billing Access <TooltipProvider> <Tooltip> <TooltipTrigger> <InfoIcon className=" h-4 w-4 text-muted-foreground"/>  <TooltipContent> Can view and manage billing information    </div>    <TableBody> {"
  teamMembers.map ( (member) => (<TableRow key= {
  member.id;)"
}> <TableCell> </div>  <TableCell> <select > <option value=" Admin">Admin</option> <option value=" Recruiter">Recruiter</option> <option value=" Manager">Manager</option> <option value=" Viewer">Viewer</option> </select>  <TableCell className=" text-center"> <Switch />  <TableCell className=" text-center"> <Switch />  <TableCell className=" text-center"> <Switch />  <TableCell className=" text-center"> <Switch />  <TableCell className=" text-center" > <Switch />  ) )"
}  </div> </div>) 
    </div>]"`;
pr-12325
}> <TableCell> </div> </TableCell> <TableCell> <select > <option value=" Admin">Admin</option> <option value=" Recruiter">Recruiter</option> <option value=" Manager">Manager</option> <option value=" Viewer">Viewer</option> </select> </TableCell> <TableCell className=" text-center"> <Switch /> </TableCell> <TableCell className=" text-center"> <Switch /> </TableCell> <TableCell className=" text-center"> <Switch /> </TableCell> <TableCell className=" text-center"> <Switch /> </TableCell> <TableCell className=" text-center" > <Switch /> </TableCell> </TableRow>) )"
}</TableBody> </Table> </div> </div>) 
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
    </div>]"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
