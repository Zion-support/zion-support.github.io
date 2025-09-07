<<<<<<< HEAD
import React from "react";
import {
ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export function RoleManagement() {
  // Mock team members data
  const teamMembers = [
import React from 'react';
<<<<<<< HEAD:src-disabled/components/enterprise/admin/RoleManagement.tsx

=======
<<<<<<< HEAD
import {

import React from "react";
import {
import React from 'react'
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/enterprise/admin/RoleManagement.tsx
import {

  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,

  TableRow,
} from '@/components / ui / table';
import { Badge } from '@/components / ui / badge';
import { Switch } from '@/components / ui / switch';

import { toast } from '@/hooks / use - toast'; import { InfoIcon } from 'lucide-react';
<<<<<<< HEAD
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { toast } from '@/hooks/use-toast'; import { InfoIcon } from 'lucide-react'
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  Tooltip,
  TooltipContent,
  TooltipProvider,
<<<<<<< HEAD:src-disabled/components/enterprise/admin/RoleManagement.tsx
  TooltipTrigger,'
=======
  TooltipTrigger,
<<<<<<< HEAD
} from '@/components/ui/tooltip'

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
import { InfoIcon } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger} from "@/components/ui/tooltip",


  Table
  TableBody
  TableCell
  TableHead
  TableHeader
  TableRow
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import { toast } from '@/hooks/use-toast'; import { InfoIcon } from 'lucide-react'
  Tooltip
  TooltipContent
  TooltipProvider
  TooltipTrigger
} from '@/components/ui/tooltip'
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/enterprise/admin/RoleManagement.tsx
} from '@/components / ui / tooltip';
export /**;
 * RoleManagement - Function description;
 */
function RoleManagement() {}
  // Mock team members data;
  const team_members = [;
<<<<<<< HEAD:src-disabled/components/enterprise/admin/RoleManagement.tsx
    {}
=======
    {
<<<<<<< HEAD
export function RoleManagement() {
  // Mock team members data
  const teamMembers = [
    {
      id: 1
      name: 'Alex Johnson'
      email: 'alex@example.com'
      role: 'Admin'
      permissions: {
        viewCandidates: true
        editCandidates: true
        createJobs: true
        manageTeam: true
        viewBilling: true
        manageBilling: true
      }
    }
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/enterprise/admin/RoleManagement.tsx
        view_candidates: true,
        edit_candidates: true,
        create_jobs: true,
        manage_team: true,
        view_billing: true,
        manage_billing: true,
      },
    },
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    {
      id: 2
      name: 'Jamie Smith'
      email: 'jamie@example.com'
<<<<<<< HEAD:src-disabled/components/enterprise/admin/RoleManagement.tsx

      role: 'Recruiter'
      permissions: {}
=======
      role: 'Recruiter'
      permissions: {
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/enterprise/admin/RoleManagement.tsx
        view_candidates: true,
        edit_candidates: true,
        create_jobs: true,
        manage_team: false,
        view_billing: false,
        manage_billing: false,
      },
    },
<<<<<<< HEAD
        viewCandidates: true
        editCandidates: true
        createJobs: true
        manageTeam: false
        viewBilling: false
        manageBilling: false
      }
    }
=======

<<<<<<< HEAD:src-disabled/components/enterprise/admin/RoleManagement.tsx
    {}
      id: 3'
      name: 'Sam Williams''
      email: 'sam@example.com''
      role: 'Manager'
      permissions: {}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    {
      id: 3
      name: 'Sam Williams'
      email: 'sam@example.com'
      role: 'Manager'
      permissions: {
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/enterprise/admin/RoleManagement.tsx
        view_candidates: true,
        edit_candidates: false,
        create_jobs: true,
        manage_team: false,
        view_billing: true,
        manage_billing: false,
      },
    },
<<<<<<< HEAD
        viewCandidates: true
        editCandidates: false
        createJobs: true
        manageTeam: false
        viewBilling: true
        manageBilling: false
      }
    }
=======

<<<<<<< HEAD:src-disabled/components/enterprise/admin/RoleManagement.tsx
    {}
      id: 4'
      name: 'Taylor Brown''
      email: 'taylor@example.com''
      role: 'Viewer'
      permissions: {}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    {
      id: 4
      name: 'Taylor Brown'
      email: 'taylor@example.com'
      role: 'Viewer'
      permissions: {
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/enterprise/admin/RoleManagement.tsx
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
<<<<<<< HEAD
  }
import React from 'react';

import React from "react",;
=======

<<<<<<< HEAD:src-disabled/components/enterprise/admin/RoleManagement.tsx
  }'
=======
  }
import React from 'react';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/enterprise/admin/RoleManagement.tsx
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
<<<<<<< HEAD:src-disabled/components/enterprise/admin/RoleManagement.tsx

import React from "react";
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
  Tooltip;
  TooltipContent;
  TooltipProvider;
  TooltipTrigger} from "@/components/ui/tooltip",
=======
<<<<<<< HEAD
  TableRow} from "@/components/ui/table",;
import { Badge } from "@/components/ui/badge",;
import { Switch } from "@/components/ui/switch",;
import { toast } from "@/hooks/use-toast",;
import { InfoIcon } from 'lucide-react';
=======
  TableRow,;
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { toast } from '@/hooks/use-toast';import { InfoIcon } from 'lucide-react';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {;
  Tooltip,;
  TooltipContent,;
  TooltipProvider,;
<<<<<<< HEAD
  TooltipTrigger} from "@/components/ui/tooltip",;
;
=======
  TooltipTrigger,;
} from '@/components/ui/tooltip';

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export function RoleManagement() {;
  // Mock team members data;
  const teamMembers = [;
    {;
<<<<<<< HEAD

  return (
        viewCandidates: true
        editCandidates: false
        createJobs: false
        manageTeam: false
        viewBilling: false
        manageBilling: false
      }
    }
  ]
  const handlePermissionChange = (
    _memberId: number
    permission: string
    value: boolean
  ) => {    // In a real app, this would make an API call to update permissions
    toast({
      title: 'Permission updated'
      description: `Permission ${permission} has been ${value ? 'granted' : 'revoked'}.`
    })
  }
  const roleDescriptions: Record<string, string> = {
    Admin: 'Full access to all features and settings'
    Recruiter: 'Can manage candidates and job postings'
    Manager: 'Can view candidates and create jobs'
    Viewer: 'Read-only access to candidates'
  }
=======
      id: 1,;
      name: 'Alex Johnson',;
      email: 'alex@example && example.com',;
      role: 'Admin',;
      permissions: {;
        viewCandidates: true,;
        editCandidates: true,;
        createJobs: true,;
        manageTeam: true,;
        viewBilling: true,;
        manageBilling: true,;
      },;
    },;
    {;
      id: 2,;
      name: 'Jamie Smith',;
      email: 'jamie@example && example.com',;
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
      id: 3,;
      name: 'Sam Williams',;
      email: 'sam@example && example.com',;
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
      id: 4,;
      name: 'Taylor Brown',;
      email: 'taylor@example && example.com',;
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/enterprise/admin/RoleManagement.tsx

export function RoleManagement() {
  // Mock team members data
  const teamMembers = null;

  const roleDescriptions: Record<string string> = {
    "Admin": "Full access to all features and settings",
    "Recruiter": "Can manage candidates and job postings",
    "Manager": "Can view candidates and create jobs",
    "Viewer": "Read-only access to candidates"},

<<<<<<< HEAD:src-disabled/components/enterprise/admin/RoleManagement.tsx
  return ("
=======
  return (


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      id: 1,
      name: "Alex Johnson",
      email: "alex@example.com",
      role: "Admin",
      permissions: {
        viewCandidates: true,
        editCandidates: true,
        createJobs: true,
        manageTeam: true,
        viewBilling: true,
        manageBilling: true}},
    {
      id: 2,
      name: "Jamie Smith",
      email: "jamie@example.com",
      role: "Recruiter",
      permissions: {
        viewCandidates: true,
        editCandidates: true,
        createJobs: true,
        manageTeam: false,
        viewBilling: false,
        manageBilling: false}},
    {
      id: 3,
      name: "Sam Williams",
      email: "sam@example.com",
      role: "Manager",
      permissions: {
        viewCandidates: true,
        editCandidates: false,
        createJobs: true,
        manageTeam: false,
        viewBilling: true,
        manageBilling: false}},
    {
      id: 4,
      name: "Taylor Brown",
      email: "taylor@example.com",
      role: "Viewer",
      permissions: {
        viewCandidates: true,
        editCandidates: false,
        createJobs: false,
        manageTeam: false,
        viewBilling: false,
<<<<<<< HEAD
        manageBilling: false,
      },
    },
  ]
  const handlePermissionChange = (
    _memberId: number,
    permission: string,
    value: boolean
  ) => {    // In a real app, this would make an API call to update permissions
    toast({
      title: 'Permission updated',
      description: `Permission ${permission} has been ${value ? 'granted' : 'revoked'}.`,
    })
  }
  const roleDescriptions: Record<string, string> = {
    Admin: 'Full access to all features and settings',
    Recruiter: 'Can manage candidates and job postings',
    Manager: 'Can view candidates and create jobs',
    Viewer: 'Read-only access to candidates',
  }
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
    <div className="space-y-6">
      <div>
=======




>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/enterprise/admin/RoleManagement.tsx
    <div className="space-y-6">
      <div>
<<<<<<< HEAD
        <h3 className='text-xl font-medium mb-4'>Role Permissions</h3>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mb-6'>
          {Object.entries(roleDescriptions).map(([role, description]) => (
            <div
              key={role}
              className='bg-card rounded-lg p-4 border border-border'
            >
              <div className='flex items-center gap-2 mb-2'>
                <Badge variant={role === 'Admin' ? 'default' : 'outline'}>
                  {role}
                </Badge>              </div>
              <p className='text-sm text-muted-foreground'>{description}</p>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <h3 className="text-xl font-medium mb-4">Role Permissions</h3>

        <h3 className="text-xl font-medium mb-4">Role Permissions</h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {Object.entries(roleDescriptions).map(([role, description]) => ("
            <div key={role} className="bg-card rounded-lg p-4 border border-border">"
              <div className="flex items-center gap-2 mb-2">"
                <Badge variant={role === "Admin" ? "default" : "outline"}>{role}</Badge>
              </div>"
              <p className="text-sm text-muted-foreground">{description}</p>

<<<<<<< HEAD:src-disabled/components/enterprise/admin/RoleManagement.tsx
=======
            </div>
          ))}
<<<<<<< HEAD
        </div>
      </div>
      <div className='rounded-md border'>
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/enterprise/admin/RoleManagement.tsx
      <div className="rounded-md border">

                      </TooltipTrigger>
                      <TooltipContent>
                        Can view candidate profiles and applications;
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>

<<<<<<< HEAD:src-disabled/components/enterprise/admin/RoleManagement.tsx
=======
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Team Member</TableHead>
              <TableHead>Role</TableHead>
<<<<<<< HEAD
              <TableHead className="text-center">
                <div className="flex items-center justify-center gap-1">
=======
              <TableHead className='text-center'>
                <div className='flex items-center justify-center gap-1'>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  View Candidates
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
<<<<<<< HEAD
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />
=======
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/enterprise/admin/RoleManagement.tsx
                      </TooltipTrigger>
                      <TooltipContent>
                        Can edit candidate information and status;
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
<<<<<<< HEAD:src-disabled/components/enterprise/admin/RoleManagement.tsx

=======
              </TableHead>
<<<<<<< HEAD
              <TableHead className="text-center">
                <div className="flex items-center justify-center gap-1">
=======
              <TableHead className='text-center'>
                <div className='flex items-center justify-center gap-1'>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  Edit Candidates
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
<<<<<<< HEAD
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />
=======
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/enterprise/admin/RoleManagement.tsx
                      </TooltipTrigger>
                      <TooltipContent>
                        Can create and publish job listings;
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
<<<<<<< HEAD:src-disabled/components/enterprise/admin/RoleManagement.tsx

=======
              </TableHead>
<<<<<<< HEAD
              <TableHead className="text-center">
                <div className="flex items-center justify-center gap-1">
=======
              <TableHead className='text-center'>
                <div className='flex items-center justify-center gap-1'>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  Create Jobs
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
<<<<<<< HEAD
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />
=======
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/enterprise/admin/RoleManagement.tsx
                      </TooltipTrigger>
                      <TooltipContent>
                        Can add, edit, and remove team members;
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
<<<<<<< HEAD:src-disabled/components/enterprise/admin/RoleManagement.tsx

                      </TooltipTrigger>
                      <TooltipContent>
                        Can view and manage billing information;
=======
              </TableHead>
<<<<<<< HEAD
              <TableHead className="text-center">
                <div className="flex items-center justify-center gap-1">
=======
              <TableHead className='text-center'>
                <div className='flex items-center justify-center gap-1'>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  Manage Team
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
<<<<<<< HEAD
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />
=======
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      </TooltipTrigger>
                      <TooltipContent>
                        Can add, edit, and remove team members
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </TableHead>
<<<<<<< HEAD
              <TableHead className="text-center">
                <div className="flex items-center justify-center gap-1">
=======
              <TableHead className='text-center'>
                <div className='flex items-center justify-center gap-1'>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  Billing Access
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
<<<<<<< HEAD
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />
=======
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      </TooltipTrigger>
                      <TooltipContent>
                        Can view and manage billing information
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/enterprise/admin/RoleManagement.tsx
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
<<<<<<< HEAD
            {teamMembers.map(member => (              <TableRow key={member.id}>
                  <div className="font-medium">{member.name}</div>
                  <div className="text-sm text-muted-foreground">
ursor/fix-website-loading-errors-and-merge-6662
=======

<<<<<<< HEAD:src-disabled/components/enterprise/admin/RoleManagement.tsx
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/enterprise/admin/RoleManagement.tsx
            {teamMembers.map((member) => (
              <TableRow key={member.id}>

                <TableCell>
                  <div className='font-medium'>{member.name}</div>

                  <div className='text-sm text-muted-foreground'>
<<<<<<< HEAD:src-disabled/components/enterprise/admin/RoleManagement.tsx

=======
<<<<<<< HEAD
            {teamMembers.map(member => (              <TableRow key={member.id}>
            {teamMembers.map((member) => (
              <TableRow key={member.id}>
                <TableCell>
                  <div className="font-medium">{member.name}</div>
                  <div className="text-sm text-muted-foreground">
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/enterprise/admin/RoleManagement.tsx
                    {member.email}
                  </div>
                </TableCell>
                <TableCell>
<<<<<<< HEAD
                  <select
                    className='w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring'
                    defaultValue={member.role}                  >
                    <option value='Admin'>Admin</option>
                    <option value='Recruiter'>Recruiter</option>
                    <option value='Manager'>Manager</option>
                    <option value='Viewer'>Viewer</option>
        </div>;
      </div>;
      <div className='rounded-md border'>;
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
  const handlePermissionChange = (_memberId:number, permission:string, value:boolean) => {;
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

=======

<<<<<<< HEAD:src-disabled/components/enterprise/admin/RoleManagement.tsx
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/enterprise/admin/RoleManagement.tsx
                  <select 

                    className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    defaultValue={member.role}
                  >"
                    <option value="Admin">Admin</option>"
                    <option value="Recruiter">Recruiter</option>"
                    <option value="Manager">Manager</option>"
                    <option value="Viewer">Viewer</option>
<<<<<<< HEAD
=======

<<<<<<< HEAD:src-disabled/components/enterprise/admin/RoleManagement.tsx
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/enterprise/admin/RoleManagement.tsx
                  </select>
                </TableCell>"
                <TableCell className="text-center">
<<<<<<< HEAD:src-disabled/components/enterprise/admin/RoleManagement.tsx
=======
                  <Switch
<<<<<<< HEAD
                    aria-label='View candidates'
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/enterprise/admin/RoleManagement.tsx

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;

import { InfoIcon } from 'lucide-react';
  Tooltip,;
  TooltipContent,;
  TooltipProvider,;"
  TooltipTrigger} from "@/components/ui/tooltip",;

        manageBilling: true},;
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
        manageBilling: false},;
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
        manageBilling: false},;
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
        manageBilling: false}],;
  const handlePermissionChange = (_memberId: number, permission: string, value:,  boolean) => {;
    // In a real app, this would make an API call to update permissions;
    toast({;
      title: "Permission updated",
      description: `Permission ${permission} has been ${value ? "granted" : "revoked"}.`});`
  const handlePermissionChange = (_memberId: number, permission: string, value: boolean) => {;
    // In a real app, this would make an API call to update permissions;

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
<<<<<<< HEAD
      <div className="rounded-md border">;
=======

<<<<<<< HEAD:src-disabled/components/enterprise/admin/RoleManagement.tsx
=======
      <div className='rounded-md border'>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/enterprise/admin/RoleManagement.tsx
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead>Team Member</TableHead>;
<<<<<<< HEAD:src-disabled/components/enterprise/admin/RoleManagement.tsx

                <div className='flex items-center justify-center gap-1'>;

                  View Candidates;
                  <TooltipProvider>;
                    <Tooltip>;

                        <InfoIcon className='h-4 w-4 text-muted-foreground' />;

=======
              <TableHead>Role</TableHead>;
<<<<<<< HEAD
              <TableHead className="text-center">;
                <div className="flex items-center justify-center gap-1">;
              <TableHead className="text-center">;
                <div className="flex items-center justify-center gap-1">;
=======
              <TableHead className='text-center'>;
                <div className='flex items-center justify-center gap-1'>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  View Candidates;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;
<<<<<<< HEAD
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
=======
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/enterprise/admin/RoleManagement.tsx
                      </TooltipTrigger>;

                      <TooltipContent>;
                        Can view candidate profiles and applications;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
<<<<<<< HEAD:src-disabled/components/enterprise/admin/RoleManagement.tsx

                <div className='flex items-center justify-center gap-1'>;

                  Edit Candidates;
                  <TooltipProvider>;
                    <Tooltip>;

                        <InfoIcon className='h-4 w-4 text-muted-foreground' />;

=======
              </TableHead>;
<<<<<<< HEAD
              <TableHead className="text-center">;
                <div className="flex items-center justify-center gap-1">;
              <TableHead className="text-center">;
                <div className="flex items-center justify-center gap-1">;
=======
              <TableHead className='text-center'>;
                <div className='flex items-center justify-center gap-1'>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  Edit Candidates;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;
<<<<<<< HEAD
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
=======
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/enterprise/admin/RoleManagement.tsx
                      </TooltipTrigger>;

                      <TooltipContent>;
                        Can edit candidate information and status;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
<<<<<<< HEAD:src-disabled/components/enterprise/admin/RoleManagement.tsx

                <div className='flex items-center justify-center gap-1'>;

                  Create Jobs;
                  <TooltipProvider>;
                    <Tooltip>;

                        <InfoIcon className='h-4 w-4 text-muted-foreground' />;

=======
              </TableHead>;
<<<<<<< HEAD
              <TableHead className="text-center">;
                <div className="flex items-center justify-center gap-1">;
              <TableHead className="text-center">;
                <div className="flex items-center justify-center gap-1">;
=======
              <TableHead className='text-center'>;
                <div className='flex items-center justify-center gap-1'>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  Create Jobs;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;
<<<<<<< HEAD
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
=======
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/enterprise/admin/RoleManagement.tsx
                      </TooltipTrigger>;

                      <TooltipContent>;
                        Can create and publish job listings;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
<<<<<<< HEAD:src-disabled/components/enterprise/admin/RoleManagement.tsx

                <div className='flex items-center justify-center gap-1'>;

                  Manage Team;
                  <TooltipProvider>;
                    <Tooltip>;

                        <InfoIcon className='h-4 w-4 text-muted-foreground' />;

=======
              </TableHead>;
<<<<<<< HEAD
              <TableHead className="text-center">;
                <div className="flex items-center justify-center gap-1">;
              <TableHead className="text-center">;
                <div className="flex items-center justify-center gap-1">;
=======
              <TableHead className='text-center'>;
                <div className='flex items-center justify-center gap-1'>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  Manage Team;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;
<<<<<<< HEAD
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
=======
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/enterprise/admin/RoleManagement.tsx
                      </TooltipTrigger>;

                      <TooltipContent>;
                        Can add, edit, and remove team members;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
<<<<<<< HEAD:src-disabled/components/enterprise/admin/RoleManagement.tsx

                <div className='flex items-center justify-center gap-1'>;

                  Billing Access;
                  <TooltipProvider>;
                    <Tooltip>;

                        <InfoIcon className='h-4 w-4 text-muted-foreground' />;

=======
              </TableHead>;
<<<<<<< HEAD
              <TableHead className="text-center">;
                <div className="flex items-center justify-center gap-1">;
              <TableHead className="text-center">;
                <div className="flex items-center justify-center gap-1">;
=======
              <TableHead className='text-center'>;
                <div className='flex items-center justify-center gap-1'>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  Billing Access;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;
<<<<<<< HEAD
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
=======
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/enterprise/admin/RoleManagement.tsx
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
<<<<<<< HEAD:src-disabled/components/enterprise/admin/RoleManagement.tsx

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

=======
<<<<<<< HEAD
            {teamMembers.map((member) => (;
              <TableRow key={member.id}>;
                <TableCell>;
                  <div className="font-medium">{member.name}</div>;
                  <div className="text-sm text-muted-foreground">;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/enterprise/admin/RoleManagement.tsx
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
<<<<<<< HEAD:src-disabled/components/enterprise/admin/RoleManagement.tsx

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/enterprise/admin/RoleManagement.tsx
                    {member.email}
                  </div>;
                </TableCell>;
                <TableCell>;
<<<<<<< HEAD:src-disabled/components/enterprise/admin/RoleManagement.tsx

=======
                  <select;
<<<<<<< HEAD
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
                  <Switch;
                    aria-label="View candidates";
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/enterprise/admin/RoleManagement.tsx
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

                </TableCell>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD:src-disabled/components/enterprise/admin/RoleManagement.tsx
=======
                  <Switch
                    aria-label='View billing'
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
                    aria-label='View billing'
                    checked={member.permissions.viewBilling}
                    onCheckedChange={checked =>
                      handlePermissionChange(member.id, 'viewBilling', checked)
                    }                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
                    checked={member && member.permissions.viewBilling}
                    onCheckedChange={checked =>;
                      handlePermissionChange(member && member.id, 'viewBilling', checked);
                    }                  />;
                  <select ;
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
                  <Switch;
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/enterprise/admin/RoleManagement.tsx

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

                    onCheckedChange={(checked) =>;

                      handlePermissionChange(member.id, "viewBilling", checked);
                    }
                  />;
                </TableCell>;
              </TableRow>;
            ))}
<<<<<<< HEAD
                </TableCell>;
              </TableRow>;
            ))}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          </TableBody>;
        </Table>;
      </div>;
    </div>;
<<<<<<< HEAD
;
=======
  );
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                <TableCell className='text - center'>;

                        checked);
                    }                  />;
                </TableCell>;'
                <TableCell className='text - center'>;
                  <Switch;'
                    aria - label='Edit candidates';
                    checked={member.permissions.edit_candidates}
                    onCheckedChange={checked =>;
                      handlePermissionChange (

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
<<<<<<< HEAD:src-disabled/components/enterprise/admin/RoleManagement.tsx

          </TableBody>
        </Table>
      </div>
    </div>
  );
=======
<<<<<<< HEAD
  ),;}
 import { ;
  {;
  {;
  Table;
TableBody;
TableCell;
TableHead;
TableHeader;
import {;
  InfoIcon ;
 } from "lucide-react";
import {;
  Tooltip;
TooltipContent;
TooltipProvider;
//Mock team members data const teamMembers = [ {;
  const handlePermissionChange = (memberId: number, permission: string,  value: boolean) => {;
  //In a real app, this would make an API call to update permissions toast ({;
  space-y-6"> <div> </div>) ) ";
}</div> </div> <div className=" rounded-md border"> <Table> <TableHeader> <TableRow> <TableHead>Team Member</TableHead> <TableHead>Role</TableHead> <TableHead className=" text-center"> <div className=" flex items-center justify-center gap-1"> View Candidates <TooltipProvider> <Tooltip> <TooltipTrigger> <InfoIcon className=" h-4 w-4 text-muted-foreground"/> </TooltipTrigger> <TooltipContent> Can view candidate profiles and applications </TooltipContent> </Tooltip> </TooltipProvider> </div> </TableHead> <TableHead className=" text-center"> <div className=" flex items-center justify-center gap-1"> Edit Candidates <TooltipProvider> <Tooltip> <TooltipTrigger> <InfoIcon className=" h-4 w-4 text-muted-foreground"/> </TooltipTrigger> <TooltipContent> Can edit candidate information and status </TooltipContent> </Tooltip> </TooltipProvider> </div> </TableHead> <TableHead className=" text-center"> <div className=" flex items-center justify-center gap-1"> Create Jobs <TooltipProvider> <Tooltip> <TooltipTrigger> <InfoIcon className=" h-4 w-4 text-muted-foreground"/> </TooltipTrigger> <TooltipContent> Can create and publish job listings </TooltipContent> </Tooltip> </TooltipProvider> </div> </TableHead> <TableHead className=" text-center"> <div className=" flex items-center justify-center gap-1"> Manage Team <TooltipProvider> <Tooltip> <TooltipTrigger> <InfoIcon className=" h-4 w-4 text-muted-foreground"/> </TooltipTrigger> <TooltipContent> Can add, edit, and remove team members </TooltipContent> </Tooltip> </TooltipProvider> </div> </TableHead> <TableHead className=" text-center"> <div className=" flex items-center justify-center gap-1"> Billing Access <TooltipProvider> <Tooltip> <TooltipTrigger> <InfoIcon className=" h-4 w-4 text-muted-foreground"/> </TooltipTrigger> <TooltipContent> Can view and manage billing information </TooltipContent> </Tooltip> </TooltipProvider> </div> </TableHead> </TableRow> </TableHeader> <TableBody> {;
  teamMembers.map ( (member) => (<TableRow key= {;
  member.id ";
}> <TableCell> </div> </TableCell> <TableCell> <select > <option value=" Admin">Admin</option> <option value=" Recruiter">Recruiter</option> <option value=" Manager">Manager</option> <option value=" Viewer">Viewer</option> </select> </TableCell> <TableCell className=" text-center"> <Switch /> </TableCell> <TableCell className=" text-center"> <Switch /> </TableCell> <TableCell className=" text-center"> <Switch /> </TableCell> <TableCell className=" text-center"> <Switch /> </TableCell> <TableCell className=" text-center" > <Switch /> </TableCell> </TableRow>) ) ;
}</TableBody> </Table> </div> </div>) ;
}'"
  );
}
;
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/enterprise/admin/RoleManagement.tsx
