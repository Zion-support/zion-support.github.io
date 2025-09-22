:src_backup/components/enterprise/admin/RoleManagement.tsx

import React from "react",
export function RoleManagement() {
  // Mock team members data
  const teamMembers = [
import React from 'react';
:src/components/enterprise/admin/RoleManagement.tsx
import React from 'react';

import React from 'react';
origin/cursor/automate-test-improve-and-merge-code-2533
import {
export function RoleManagement() {};
  // Mock team members data;
  const teamMembers = []
import React from 'react';
import {}
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
:src_backup/components/enterprise/admin/RoleManagement.tsx
  TableRow} from "@/components/ui/table",
import { Badge } from "@/components/ui/badge",
import { Switch } from "@/components/ui/switch",
import { toast } from "@/hooks/use-toast",
import { InfoIcon } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger} from "@/components/ui/tooltip",

export function RoleManagement() {
  // Mock team members data
  const teamMembers = [
    {
  TableRow,
} from '@/components / ui / table';
import { Badge } from '@/components / ui / badge';
import { Switch } from '@/components / ui / switch';
import { toast } from '@/hooks / use - toast'; import { InfoIcon } from 'lucide-react';
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,'
} from '@/components / ui / tooltip';
export /**;
 * RoleManagement - Function description;
 */
function RoleManagement() {}
  // Mock team members data;
  const team_members = [;
    {}
        view_candidates: true,
        edit_candidates: true,
        create_jobs: true,
        manage_team: true,
        view_billing: true,
        manage_billing: true,
      },
    },

:src_backup/components/enterprise/admin/RoleManagement.tsx
    {
      id: 2
      name: 'Jamie Smith'
      email: 'jamie@example.com'
      role: 'Recruiter'
      permissions: {}
        view_candidates: true,
        edit_candidates: true,
        create_jobs: true,
        manage_team: false,
        view_billing: false,
        manage_billing: false,
      },
    },

    {}
      id: 3'
      name: 'Sam Williams''
      email: 'sam@example.com''
      role: 'Manager'
      permissions: {}
        view_candidates: true,
        edit_candidates: false,
        create_jobs: true,
        manage_team: false,
        view_billing: true,
        manage_billing: false,
      },
    },

    {}
      id: 4'
      name: 'Taylor Brown''
      email: 'taylor@example.com''
      role: 'Viewer'
      permissions: {}
        view_candidates: true,
        edit_candidates: false,
        create_jobs: false,
        manage_team: false,
        view_billing: false,
        manage_billing: false,
      },
    },
  ];
  const handlePermissionChange = (
    _memberId: number,
    permission: string,
    value: boolean) =>: any {    // In a real app, this would make an API call to update permissions;
    toast ({'
      title: 'Permission updated','
      description: `Permission ${permission} has been ${value ? 'granted' : 'revoked'}.`,
    });
  }
  const role_descriptions: Record < string, string> = {'
    Admin: 'Full access to all features and settings','
    Recruiter: 'Can manage candidates and job postings','
    Manager: 'Can view candidates and create jobs','
    Viewer: 'Read - only access to candidates',

  }'
import React from 'react';
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
:src_backup/components/enterprise/admin/RoleManagement.tsx
origin/cursor/automate-test-improve-and-merge-code-2533
  TableRow,;
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { toast } from '@/hooks/use-toast';
import { InfoIcon } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,;
} from '@/components/ui/tooltip';

import React from "react";
import {
  Table;
  TableBody;
  TableCell;
  TableHead;
  TableHeader;
  TableRow} from "@/components/ui/table",
import { Badge } from "@/components/ui/badge",;
import { Switch } from "@/components/ui/switch";
import { toast } from "@/hooks/use-toast";
import { InfoIcon } from 'lucide-react'
import {
  Tooltip;
  TooltipContent;
  TooltipProvider;
  TooltipTrigger} from "@/components/ui/tooltip",
  TableRow,;'
} from '@/components/ui/table';'
import { Badge } from '@/components/ui/badge';'
import { Switch } from '@/components/ui/switch';'
import { toast } from '@/hooks/use-toast';import { InfoIcon } from 'lucide-react';
import {;
  Tooltip,;
  TooltipContent,;
  TooltipProvider,;
  TooltipTrigger,;'
} from '@/components/ui/tooltip';

export function RoleManagement() { return null; }
      },;
    },;
    {;
      id: 2,;'
      name: 'Jamie Smith',;'
      email: 'jamie@example && example.com',;'
      role: 'Recruiter',;
      permissions: {;
        viewCandidates: true,;
        editCandidates: true,;
        createJobs: true,;
        manageTeam: false,;
        viewBilling: false,;
        manageBilling: false,;
      },;
    },;
    {;
      id: 3,;'
      name: 'Sam Williams',;'
      email: 'sam@example && example.com',;'
      role: 'Manager',;
      permissions: {;
        viewCandidates: true,;
        editCandidates: false,;
        createJobs: true,;
        manageTeam: false,;
        viewBilling: true,;
        manageBilling: false,;
      },;
    },;
    {;
      id: 4,;'
      name: 'Taylor Brown',;'
      email: 'taylor@example && example.com',;'
      role: 'Viewer',;
      permissions: {;
        viewCandidates: true,;
        editCandidates: false,;
        createJobs: false,;
        manageTeam: false,;
        viewBilling: false,;
        manageBilling: false,;
      },;
    },;
  ];

  const handlePermissionChange = (;
    _memberId: number,;
    permission: string,;
    value: boolean;
  ) => {    // In a real app, this would make an API call to update permissions;
    toast({;'
      title: 'Permission updated',;'`
      description: `Permission ${permission} has been ${value ? 'granted' : 'revoked'}.`,;
    });
  };

  const roleDescriptions: Record<string, string> = {;'
    Admin: 'Full access to all features and settings',;'
    Recruiter: 'Can manage candidates and job postings',;'
    Manager: 'Can view candidates and create jobs',;'
    Viewer: 'Read-only access to candidates',;
  };

export function RoleManagement() {
  // Mock team members data
  const teamMembers = null;
:src_backup/components/enterprise/admin/RoleManagement.tsx
origin/cursor/automate-test-improve-and-merge-code-2533
  return (

      id: 1,
      name: "Alex Johnson","
      email: "alex@example.com","
      role: "Admin",
      permissions: {}
        viewCandidates: true,
        editCandidates: true,
        createJobs: true,
        manageTeam: true,
        viewBilling: true,
        manageBilling: true}},
    {}
      id: 2,"
      name: "Jamie Smith","
      email: "jamie@example.com","
      role: "Recruiter",
      permissions: {}
        viewCandidates: true,
        editCandidates: true,
        createJobs: true,
        manageTeam: false,
        viewBilling: false,
        manageBilling: false}},
    {}
      id: 3,"
      name: "Sam Williams","
      email: "sam@example.com","
      role: "Manager",
      permissions: {}
        viewCandidates: true,
        editCandidates: false,
        createJobs: true,
        manageTeam: false,
        viewBilling: true,
        manageBilling: false}},
    {}
      id: 4,"
      name: "Taylor Brown","
      email: "taylor@example.com","
      role: "Viewer",
      permissions: {}
        viewCandidates: true,
        editCandidates: false,
        createJobs: false,
        manageTeam: false,
        viewBilling: false,
        manageBilling: false}}],

  const handlePermissionChange = (_memberId: number, permission: string, value: boolean) => {
    // In a real app, this would make an API call to update permissions
    toast({
      title: "Permission updated",
      description: `Permission ${permission} has been ${value ? "granted" : "revoked"}.`})
  },

const roleDescriptions: Record<string string> = {
    "Admin": "Full access to all features and settings",
    "Recruiter": "Can manage candidates and job postings",
    "Manager": "Can view candidates and create jobs",
    "Viewer": "Read-only access to candidates"},


  return ("
    <div className="space-y-6">
      <div>
:src_backup/components/enterprise/admin/RoleManagement.tsx

        <h3 className="text-xl font-medium mb-4">Role Permissions</h3>
  return (
    <div className="space-y-6">
      <div>
:src_backup/components/enterprise/admin/RoleManagement.tsx

        <h3 className="text-xl font-medium mb-4">Role Permissions</h3>
"
        <h3 className="text-xl font-medium mb-4">Role Permissions</h3>"
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {Object.entries(roleDescriptions).map(([role, description]) => ("
            <div key={role} className="bg-card rounded-lg p-4 border border-border">"
              <div className="flex items-center gap-2 mb-2">"
                <Badge variant={role === "Admin" ? "default" : "outline"}>{role}</Badge>
              </div>"
              <p className="text-sm text-muted-foreground">{description}</p>
:src/components/enterprise/admin/RoleManagement.tsx
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-md border">

import React from "react",;
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow} from "@/components/ui/table",
import { Badge } from "@/components/ui/badge",;
import { Switch } from "@/components/ui/switch",;
import { toast } from "@/hooks/use-toast",;
import { InfoIcon } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger} from "@/components/ui/tooltip",

export function RoleManagement() {
  // Mock team members data
  const teamMembers = [
    {
        manageBilling: false}}],

  const handlePermissionChange = (_memberId: number, permission: string, value: boolean) => {
    // In a real app, this would make an API call to update permissions
    toast({
      title: "Permission updated",
      description: `Permission ${permission} has been ${value ? "granted" : "revoked"}.`})
  },

  const roleDescriptions: Record<string string> = {
    "Admin": "Full access to all features and settings",
    "Recruiter": "Can manage candidates and job postings",
    "Manager": "Can view candidates and create jobs",
    "Viewer": "Read-only access to candidates"},

  return (
    <div className="space-y-6">
      <div>
            </div>
          ))}
:src_backup/components/enterprise/admin/RoleManagement.tsx

"
      <div className="rounded-md border">


        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Team Member</TableHead>
:src_backup/components/enterprise/admin/RoleManagement.tsx
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
                        Can view candidate profiles and applications;
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
:src_backup/components/enterprise/admin/RoleManagement.tsx
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
                        Can edit candidate information and status;
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
:src_backup/components/enterprise/admin/RoleManagement.tsx
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
                        Can create and publish job listings;
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
:src_backup/components/enterprise/admin/RoleManagement.tsx
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
                        Can add, edit, and remove team members;
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
:src_backup/components/enterprise/admin/RoleManagement.tsx
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
                        Can view and manage billing information;
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
:src_backup/components/enterprise/admin/RoleManagement.tsx
            {teamMembers.map((member) => (
              <TableRow key={member.id}>
                <TableCell>
                  <div className="font-medium">{member.name}</div>
                  <div className="text-sm text-muted-foreground">
            {teamMembers.map((member) => (
              <TableRow key={member.id}>

:src_backup/components/enterprise/admin/RoleManagement.tsx
<TableCell>
                  <div className='font-medium'>{member.name}</div>
                  <div className='text-sm text-muted-foreground'>
            {teamMembers.map((member) => (
              <TableRow key={member.id}>
                <TableCell>
                  <div className="font-medium">{member.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {member.email}
                  </div>
                </TableCell>
                <TableCell>
:src_backup/components/enterprise/admin/RoleManagement.tsx


                  <select 
                  <select "
                    className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    defaultValue={member.role}
                  >"
                    <option value="Admin">Admin</option>"
                    <option value="Recruiter">Recruiter</option>"
                    <option value="Manager">Manager</option>"
                    <option value="Viewer">Viewer</option>
:src_backup/components/enterprise/admin/RoleManagement.tsx


                  </select>
                </TableCell>"
                <TableCell className="text-center">
:src_backup/components/enterprise/admin/RoleManagement.tsx
                  <Switch

                  <Switch;
"
                    aria-label="View candidates"
                    checked={member.permissions.viewCandidates}
                    onCheckedChange={(checked) =>"
                      handlePermissionChange(member.id, "viewCandidates", checked)
                    }
                  />
                </TableCell>"
                <TableCell className="text-center">
                  <Switch"
                    aria-label="Edit candidates"
                    checked={member.permissions.editCandidates}
                    onCheckedChange={(checked) =>"
                      handlePermissionChange(member.id, "editCandidates", checked)
                    }
                  />
                </TableCell>"
                <TableCell className="text-center">
                  <Switch"
                    aria-label="Create jobs"
                    checked={member.permissions.createJobs}
                    onCheckedChange={(checked) =>"
                      handlePermissionChange(member.id, "createJobs", checked)
                    }
                  />
                </TableCell>"
                <TableCell className="text-center">
                  <Switch"
                    aria-label="Manage team"
                    checked={member.permissions.manageTeam}
                    onCheckedChange={(checked) =>"
                      handlePermissionChange(member.id, "manageTeam", checked)
                    }
                  />
                </TableCell>"
                <TableCell className="text-center">
                  <Switch"
                    aria-label="View billing"
                    checked={member.permissions.viewBilling}
                    onCheckedChange={(checked) =>"
                      handlePermissionChange(member.id, "viewBilling", checked)"
import React from "react",;
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
:src_backup/components/enterprise/admin/RoleManagement.tsx
  TableHeader,;"
  TableRow} from "@/components/ui/table",;"
import { Badge } from "@/components/ui/badge",;"
import { Switch } from "@/components/ui/switch",;"
import { toast } from "@/hooks/use-toast",;'
import { InfoIcon } from 'lucide-react';
import {;
  Tooltip,;
  TooltipContent,;
  TooltipProvider,;"
  TooltipTrigger} from "@/components/ui/tooltip",;
:src_backup/components/enterprise/admin/RoleManagement.tsx
export function RoleManagement() { return null; }
        manageBilling: true}},;
    {;
      id: 2,;"
      name: "Jamie Smith",;"
      email: "jamie@example.com",;"
      role: "Recruiter",;
      permissions: {;,
      permissions: {;
        viewCandidates: true,;
        editCandidates: true,;
        createJobs: true,;
        manageTeam: false,;
        viewBilling: false,;
        manageBilling: false}},;
    {;
      id: 3,;"
      name: "Sam Williams",;"
      email: "sam@example.com",;"
      role: "Manager",;
      permissions: {;,
      permissions: {;
        viewCandidates: true,;
        editCandidates: false,;
        createJobs: true,;
        manageTeam: false,;
        viewBilling: true,;
        manageBilling: false}},;
    {;
      id: 4,;"
      name: "Taylor Brown",;"
      email: "taylor@example.com",;"
      role: "Viewer",;
      permissions: {;,
      permissions: {;
        viewCandidates: true,;
        editCandidates: false,;
        createJobs: false,;
        manageTeam: false,;
        viewBilling: false,;
        manageBilling: false}}],;
  const handlePermissionChange = (_memberId: number, permission: string, value:,  boolean) => {;
    // In a real app, this would make an API call to update permissions;
    toast({;
      title: "Permission updated",;
      description: `Permission ${permission} has been ${value ? "granted" : "revoked"}.`});`
  const handlePermissionChange = (_memberId: number, permission: string, value: boolean) => {;
    // In a real app, this would make an API call to update permissions;
:src_backup/components/enterprise/admin/RoleManagement.tsx
    toast({;
      title: "Permission updated",,
  description: `Permission ${permission} has been ${value ? "granted" : "revoked"}.`});
  },;
  const roleDescriptions: Record<string string> = {;"
    "Admin": "Full access to all features and settings",;"
    "Recruiter": "Can manage candidates and job postings",;"
    "Manager": "Can view candidates and create jobs";"
    "Viewer": "Read-only access to candidates"};
  return (;"
    <div className="space-y-6">;
      <div>;"
        <h3 className="text-xl font-medium mb-4">Role Permissions</h3>;"
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">;
          {Object.entries(roleDescriptions).map(([role, description]) => (;"
            <div key={role} className="bg-card rounded-lg p-4 border border-border">;"
              <div className="flex items-center gap-2 mb-2">;"
                <Badge variant={role === "Admin" ? "default" : "outline"}>{role}</Badge>;
              </div>;"
              <p className="text-sm text-muted-foreground">{description}</p>;
            </div>;
          ))}
        </div>;
      </div>;
:src_backup/components/enterprise/admin/RoleManagement.tsx
<div className="rounded-md border">;
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead>Team Member</TableHead>;
:src_backup/components/enterprise/admin/RoleManagement.tsx
              <TableHead>Role</TableHead>;
              <TableHead className="text-center">;
                <div className="flex items-center justify-center gap-1">;
                <div className='flex items-center justify-center gap-1'>;
:src_backup/components/enterprise/admin/RoleManagement.tsx

                  View Candidates;
                  <TooltipProvider>;
                    <Tooltip>;
:src_backup/components/enterprise/admin/RoleManagement.tsx
                      <TooltipTrigger>;
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />;
:src_backup/components/enterprise/admin/RoleManagement.tsx

                      </TooltipTrigger>;
                      <TooltipContent>;
                        Can view candidate profiles and applications;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
:src_backup/components/enterprise/admin/RoleManagement.tsx
              </TableHead>;
              <TableHead className="text-center">;
                <div className="flex items-center justify-center gap-1">;
                <div className='flex items-center justify-center gap-1'>;
:src_backup/components/enterprise/admin/RoleManagement.tsx

                  Edit Candidates;
                  <TooltipProvider>;
                    <Tooltip>;
:src_backup/components/enterprise/admin/RoleManagement.tsx
                      <TooltipTrigger>;
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />;
:src_backup/components/enterprise/admin/RoleManagement.tsx

                      </TooltipTrigger>;
                      <TooltipContent>;
                        Can edit candidate information and status;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
:src_backup/components/enterprise/admin/RoleManagement.tsx
              </TableHead>;
              <TableHead className="text-center">;
                <div className="flex items-center justify-center gap-1">;
                <div className='flex items-center justify-center gap-1'>;
:src_backup/components/enterprise/admin/RoleManagement.tsx

                  Create Jobs;
                  <TooltipProvider>;
                    <Tooltip>;
:src_backup/components/enterprise/admin/RoleManagement.tsx
                      <TooltipTrigger>;
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />;
:src_backup/components/enterprise/admin/RoleManagement.tsx

                      </TooltipTrigger>;
                      <TooltipContent>;
                        Can create and publish job listings;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
:src_backup/components/enterprise/admin/RoleManagement.tsx
              </TableHead>;
              <TableHead className="text-center">;
                <div className="flex items-center justify-center gap-1">;
                <div className='flex items-center justify-center gap-1'>;
:src_backup/components/enterprise/admin/RoleManagement.tsx

                  Manage Team;
                  <TooltipProvider>;
                    <Tooltip>;
:src_backup/components/enterprise/admin/RoleManagement.tsx
                      <TooltipTrigger>;
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />;
:src_backup/components/enterprise/admin/RoleManagement.tsx

                      </TooltipTrigger>;
                      <TooltipContent>;
                        Can add, edit, and remove team members;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
:src_backup/components/enterprise/admin/RoleManagement.tsx
              </TableHead>;
              <TableHead className="text-center">;
                <div className="flex items-center justify-center gap-1">;
                <div className='flex items-center justify-center gap-1'>;
:src_backup/components/enterprise/admin/RoleManagement.tsx

                  Billing Access;
                  <TooltipProvider>;
                    <Tooltip>;
:src_backup/components/enterprise/admin/RoleManagement.tsx
                      <TooltipTrigger>;
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />;
:src_backup/components/enterprise/admin/RoleManagement.tsx

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
:src_backup/components/enterprise/admin/RoleManagement.tsx
            {teamMembers.map((member) => (;
              <TableRow key={member.id}>;
                <TableCell>;
                  <div className="font-medium">{member.name}</div>;
                  <div className="text-sm text-muted-foreground">;
          {Object.entries (role_descriptions).map (([role, description]) => (
    value: boolean;)
  ) => {    // In a real app, this would make an API call to update permissions;
    toast({;
      title: 'Permission updated',;`;
      description: `Permission ${permission} has been ${value ? 'granted' : 'revoked'}.`,;')
  };

  const roleDescriptions: Record<string, string> = {;
</string>
    <div className="space-y-6">"
</div>
      <div>
"
        <h3 className="text-xl font-medium mb-4">Role Permissions</h3>""
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">"
</div>"
            <div key={role} className="bg-card rounded-lg p-4 border border-border">"
              <div className="flex items-center gap-2 mb-2">"
                <Badge variant={role === "Admin" ? "default" : "outline"}>{role}"
              <p className="text-sm text-muted-foreground">{description}</p>"
      <div className="rounded-md border">"
        <Table>

          <TableHeader>

            <TableRow>

              <TableHead>Team Member
              <TableHead>Role"
              <TableHead className='text-center'>

                <div className='flex items-center justify-center gap-1'>
                  <TooltipProvider>

                    <Tooltip>

                      <TooltipTrigger>

                        <InfoIcon className='h-4 w-4 text-muted-foreground' />

                      <TooltipContent>

          <TableBody>

              <TableRow key={member.id}>

                <TableCell>

                  <div className='font-medium'>{member.name}</div>
                  <div className='text-sm text-muted-foreground'>

                  <select;
                    className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring""
                    defaultValue={member.role}
                  >
</select>"
                    <option value="Admin">Admin</option>""
                    <option value="Recruiter">Recruiter</option>""
                    <option value="Manager">Manager</option>""
                    <option value="Viewer">Viewer</option>"
                  </select>
                <TableCell className="text-center">"

                  <Switch;"
                    aria-label="View candidates""
                    checked={member.permissions.viewCandidates}
                    onCheckedChange={(checked) =>

                    aria-label="Edit candidates""
                    checked={member.permissions.editCandidates}

                    aria-label="Create jobs""
                    checked={member.permissions.createJobs}

                    aria-label="Manage team""
                    checked={member.permissions.manageTeam}

                    aria-label="View billing""
                    checked={member.permissions.viewBilling}

  const roleDescriptions: Record<string string> = {;
</string>"
    <div className="space-y-6">;"
      <div>;
        <h3 className="text-xl font-medium mb-4">Role Permissions</h3>;""
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">;"
            <div key={role} className="bg-card rounded-lg p-4 border border-border">;"
              <div className="flex items-center gap-2 mb-2">;"
                <Badge variant={role === "Admin" ? "default" : "outline"}>{role};"
              </div>;"
              <p className="text-sm text-muted-foreground">{description}</p>;"
            </div>;
      <div className='rounded-md border'>;
        <Table>;

          <TableHeader>;

            <TableRow>;

              <TableHead>Team Member;
              <TableHead>Role;
              <TableHead className='text-center'>;

                <div className='flex items-center justify-center gap-1'>;
                  <TooltipProvider>;

                    <Tooltip>;

                      <TooltipTrigger>;

                        <InfoIcon className='h-4 w-4 text-muted-foreground' />;

                      ;
                      <TooltipContent>;

          <TableBody>;

            {teamMembers && teamMembers.map(member => (              <TableRow key={member && member.id}>;

                <TableCell>;

                  <div className='font-medium'>{member && member.name}</div>;
                  <div className='text-sm text-muted-foreground'>;

                    className='w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
                    defaultValue={member && member.role}>;
    <div className='space - y-6'>;
        <h3 className='text - xl font - medium mb - 4'>Role Permissions</h3>;
        <div className='grid grid - cols - 1 md:grid - cols - 4 gap - 4 mb - 6'>;
pr-12325
            <div;
              key={role}'
              className='bg - card rounded - lg p - 4 border border - border';
            >;'
              <div className='flex items - center gap - 2 mb - 2'>;'
                <Badge variant={role === 'Admin' ? 'default' : 'outline'}>;
                  {role}
                </Badge>              </div>;'
              <p className='text - sm text - muted - foreground'>{description}</p>;
            </div>))}
        </div>;
      </div>;'
      <div className='rounded - md border'>;
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead > Team Member</TableHead>;
              <TableHead > Role</TableHead>;'
              <TableHead className='text - center'>;'
                <div className='flex items - center justify - center gap - 1'>;
                  View Candidates;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;'
                        <InfoIcon className='h - 4 w - 4 text - muted - foreground' />;
                      </TooltipTrigger>;
                      <TooltipContent>;
                        Can view candidate profiles and applications;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
              </TableHead>;'
              <TableHead className='text - center'>;'
                <div className='flex items - center justify - center gap - 1'>;
                  Edit Candidates;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;'
                        <InfoIcon className='h - 4 w - 4 text - muted - foreground' />;
                      </TooltipTrigger>;
                      <TooltipContent>;
                        Can edit candidate information and status;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
              </TableHead>;'
              <TableHead className='text - center'>;'
                <div className='flex items - center justify - center gap - 1'>;
                  Create Jobs;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;'
                        <InfoIcon className='h - 4 w - 4 text - muted - foreground' />;
                      </TooltipTrigger>;
                      <TooltipContent>;
                        Can create and publish job listings;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
              </TableHead>;'
              <TableHead className='text - center'>;'
                <div className='flex items - center justify - center gap - 1'>;
                  Manage Team;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;'
                        <InfoIcon className='h - 4 w - 4 text - muted - foreground' />;
                      </TooltipTrigger>;
                      <TooltipContent>;
                        Can add, edit, and remove team members;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
              </TableHead>;'
              <TableHead className='text - center'>;'
                <div className='flex items - center justify - center gap - 1'>;
                  Billing Access;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;'
                        <InfoIcon className='h - 4 w - 4 text - muted - foreground' />;
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
            {team_members.map (member => (              <TableRow key={member.id}>;
                <TableCell>;'
                  <div className='font - medium'>{member.name}</div>;'
                  <div className='text - sm text - muted - foreground'>;
:src_backup/components/enterprise/admin/RoleManagement.tsx
                    {member.email}
                  </div>;
                </TableCell>;
                <TableCell>;
:src_backup/components/enterprise/admin/RoleManagement.tsx
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
                    className='w - full h - 9 rounded - md border border - input bg - background px - 3 py - 1 text - sm shadow - sm transition - colors focus - visible:outline - none focus - visible:ring - 1 focus - visible:ring - ring';
                    default_value={member.role}                  >;'
                    <option value='Admin'>Admin</option>;'
                    <option value='Recruiter'>Recruiter</option>;'
                    <option value='Manager'>Manager</option>;'
                    <option value='Viewer'>Viewer</option>;
                    className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring";
                    defaultValue={member.role}
                  >;
                    <option value="Admin">Admin</option>;
                    <option value="Recruiter">Recruiter</option>;
                    <option value="Manager">Manager</option>;
                    <option value="Viewer">Viewer</option>;
                  </select>;
                </TableCell>;
:src_backup/components/enterprise/admin/RoleManagement.tsx
"
                <TableCell className="text-center">;
                  <Switch;"
                    aria-label="View candidates";
                    checked={member.permissions.viewCandidates}
                    onCheckedChange={(checked) =>;
                      handlePermissionChange(member.id, "viewCandidates", checked);
                    }
                  />;
                </TableCell>;
                <TableCell className="text-center">;
                  <Switch;
                    aria-label="Edit candidates";
                    checked={member.permissions.editCandidates}
                    onCheckedChange={(checked) =>;
                      handlePermissionChange(member.id, "editCandidates", checked);
                    }
                  />;
                </TableCell>;
<TableCell className="text-center">;
                    checked={member.permissions.viewCandidates}
                    onCheckedChange={checked =>
                      handlePermissionChange(
                        member.id'
                        'viewCandidates'
                        checked;
                      )
                    }                  />
                </TableCell>'
                <TableCell className='text-center'>
                  <Switch'
                    aria-label='Edit candidates'
                    checked={member.permissions.editCandidates}
                    onCheckedChange={checked =>
                      handlePermissionChange(
                        member.id'
                        'editCandidates'
                        checked;
                      )
                    }                  />
                </TableCell>'
                <TableCell className='text-center'>
:src/components/enterprise/admin/RoleManagement.tsx
                  <Switch
                    aria-label='Create jobs'
                    checked={member.permissions.createJobs}
                    onCheckedChange={checked =>
                      handlePermissionChange(member.id, 'createJobs', checked)
                    }                  />
                </TableCell>
                <TableCell className='text-center'>
                  <Switch
                    aria-label='Manage team'
                    checked={member.permissions.manageTeam}
                    onCheckedChange={checked =>
                      handlePermissionChange(member.id, 'manageTeam', checked)
                    }                  />
                </TableCell>
                <TableCell className='text-center'>
                  <Switch
                    aria-label='View billing'      </div>;
                    onCheckedChange={checked =>;
                      handlePermissionChange(;
                        member && member.id,;'
                        'viewCandidates',;
                        checked;
                      );
                    }                  />;
                </TableCell>;'
                <TableCell className='text-center'>;
                  <Switch'
                    aria-label='Edit candidates'
                    checked={member && member.permissions.editCandidates}
                    onCheckedChange={checked =>;
                      handlePermissionChange(;
                        member && member.id,;'
                        'editCandidates',;
                        checked;
                      );
                    }                  />;
                </TableCell>;'
                <TableCell className='text-center'>;
                  <Switch'
                    aria-label='Create jobs'
                    checked={member && member.permissions.createJobs}
                    onCheckedChange={checked =>;'
                      handlePermissionChange(member && member.id, 'createJobs', checked);
                    }                  />;
                </TableCell>;'
                <TableCell className='text-center'>;
                  <Switch'
                    aria-label='Manage team'
                    checked={member && member.permissions.manageTeam}
                    onCheckedChange={checked =>;'
                      handlePermissionChange(member && member.id, 'manageTeam', checked);
                    }                  />;
                </TableCell>;'
                <TableCell className='text-center'>;
:src_backup/components/enterprise/admin/RoleManagement.tsx
                  <Switch'
                    aria-label='View billing'

                    checked={member.permissions.viewBilling}

      </div>;
    </div>;
  )
};
                    onCheckedChange={(checked) =>;
                      handlePermissionChange(member.id, "viewCandidates", checked);
                    }
                  />;
                </TableCell>;
                <TableCell className="text-center">;
                  <Switch;
                    aria-label="Edit candidates";
                    checked={member.permissions.editCandidates}
                    onCheckedChange={(checked) =>;
                      handlePermissionChange(member.id, "editCandidates", checked);
                    }
                  />;
                </TableCell>;
                <TableCell className="text-center">;
                  <Switch;
                    aria-label="Create jobs";
                    checked={member.permissions.createJobs}
                    onCheckedChange={(checked) =>;
                      handlePermissionChange(member.id, "createJobs", checked);
                    }
                  />;
                </TableCell>;
                <TableCell className="text-center">;
                  <Switch;
                    aria-label="Manage team";
                    checked={member.permissions.manageTeam}
                    onCheckedChange={(checked) =>;
                      handlePermissionChange(member.id, "manageTeam", checked);
                    }
                  />;
                </TableCell>;
                <TableCell className="text-center">;
                  <Switch;
                    aria-label="View billing";

:src_backup/components/enterprise/admin/RoleManagement.tsx
                    checked={member.permissions.viewBilling}
                    onCheckedChange={(checked) =>;
                    onCheckedChange={(checked) =>;"
                      handlePermissionChange(member.id, "viewBilling", checked);
                    }
                  />;
                </TableCell>;
              </TableRow>;
            ))}
:src_backup/components/enterprise/admin/RoleManagement.tsx

          </TableBody>;
        </Table>;
      </div>;
    </div>;
  );
}
:src_backup/components/enterprise/admin/RoleManagement.tsx

'
                <TableCell className='text - center'>;
:src_backup/components/enterprise/admin/RoleManagement.tsx
                  <Switch;
                    aria-label="Create jobs";
                    checked={member.permissions.createJobs}
                    onCheckedChange={(checked) =>;
                      handlePermissionChange(member.id, "createJobs", checked);
                    }
                  />;
                </TableCell>;
                <TableCell className="text-center">;
                  <Switch;
                    aria-label="Manage team";
                    checked={member.permissions.manageTeam}
                    onCheckedChange={(checked) =>;
                      handlePermissionChange(member.id, "manageTeam", checked);
                    }
                  />;
                </TableCell>;
                <TableCell className="text-center">;
                  <Switch;
aria-label="View billing";
                    checked={member.permissions.viewBilling}
                    onCheckedChange={(checked) =>;
                      handlePermissionChange(member.id, "viewBilling", checked);
                    }
                  />;
                </TableCell>;
              </TableRow>;
            ))}
          </TableBody>;
        </Table>;
      </div>;
    </div>;
  );
                        checked);
                    }                  />;
                </TableCell>;'
                <TableCell className='text - center'>;
                  <Switch;'
                    aria - label='Edit candidates';
                    checked={member.permissions.edit_candidates}
                    onCheckedChange={checked =>;
                      handlePermissionChange (
:src_backup/components/enterprise/admin/RoleManagement.tsx
                        member.id,'
                        'edit_candidates',
                        checked);
                    }                  />;
                </TableCell>;'
                <TableCell className='text - center'>;
                  <Switch;'
                    aria - label='Create jobs';
                    checked={member.permissions.create_jobs}
                    onCheckedChange={checked =>;'
                      handlePermissionChange (member.id, 'create_jobs', checked);
                    }                  />;
                </TableCell>;'
                <TableCell className='text - center'>;
                  <Switch;'
                    aria - label='Manage team';
                    checked={member.permissions.manage_team}
                    onCheckedChange={checked =>;'
                      handlePermissionChange (member.id, 'manage_team', checked);
                    }                  />;
                </TableCell>;'
                <TableCell className='text - center'>;
                  <Switch;'
                    aria - label='View billing';
                    checked={member.permissions.view_billing}
                    onCheckedChange={checked =>;'
                      handlePermissionChange (member.id, 'view_billing', checked);
                    }                  />;
                </TableCell>;
              </TableRow>))}
          </TableBody>;
        </Table>;
      </div>;
    </div>);
}
:src_backup/components/enterprise/admin/RoleManagement.tsx
;

}}))]
;
          </TableBody>
        </Table>
      </div>
    </div>
  );
:src/components/enterprise/admin/RoleManagement.tsx
;'"`
                <TableCell className="text-center">;"

                    aria-label="View candidates";"
                    onCheckedChange={checked =>

                <TableCell className='text-center'>

                  <Switch;
                    aria-label='Edit candidates

                <TableCell className='text-center'>;

                    checked={member && member.permissions.editCandidates}
                    onCheckedChange={checked =>;

                    aria-label='Create jobs
                    checked={member && member.permissions.createJobs}

                    aria-label='Manage team
                    checked={member && member.permissions.manageTeam}

                    aria-label='View billing

                <TableCell className='text - center'>;

                    aria - label='View candidates';
                    checked={member.permissions.view_candidates}

                    aria - label='Edit candidates';
                    checked={member.permissions.edit_candidates}

                    aria - label='Create jobs';
                    checked={member.permissions.create_jobs}

                    aria - label='Manage team';
                    checked={member.permissions.manage_team}

                    aria - label='View billing';
                    checked={member.permissions.view_billing}

                ;)
              ))}
    </div>);`;
pr-12325
