<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/enterprise/admin/RoleManagement.tsx

<<<<<<< HEAD

=======
import React from "react";
import {
>>>>>>> import {
ursor/fix-website-loading-errors-and-merge-6662
export function RoleManagement() {
  // Mock team members data
  const teamMembers = [
import React from 'react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import {
>>>>>>>   Table,
========
<<<<<<< HEAD
import React from 'react';
import {
  Table,
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/RoleManagement.tsx
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

import React from "react";
import {
import React from 'react'
import {
  Table,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/enterprise/admin/RoleManagement.tsx
<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/RoleManagement.tsx
  TableRow,
} from '@/components / ui / table';
import { Badge } from '@/components / ui / badge';
import { Switch } from '@/components / ui / switch';
import { toast } from '@/hooks / use - toast'; import { InfoIcon } from 'lucide-react';
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { toast } from '@/hooks/use-toast'; import { InfoIcon } from 'lucide-react'
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/enterprise/admin/RoleManagement.tsx
} from '@/components/ui/tooltip'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
} from '@/components/ui/tooltip'
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

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
=======
>>>>>>> 
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
xport function RoleManagement() {
  // Mock team members data
  const teamMembers = [
========
} from '@/components / ui / tooltip';
export /**
 * RoleManagement - Function description
 */
function RoleManagement() {
  // Mock team members data;
  const team_members = [;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/RoleManagement.tsx
    {
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export function RoleManagement() {
  // Mock team members data
  const teamMembers = [
    {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      id: 1
      name: 'Alex Johnson'
      email: 'alex@example.com'
      role: 'Admin'
      permissions: {
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/enterprise/admin/RoleManagement.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        viewCandidates: true
        editCandidates: true
        createJobs: true
        manageTeam: true
        viewBilling: true
        manageBilling: true
      }
    }
<<<<<<< HEAD
========
        view_candidates: true,
        edit_candidates: true,
        create_jobs: true,
        manage_team: true,
        view_billing: true,
        manage_billing: true,
      },
    },
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/RoleManagement.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    {
      id: 2
      name: 'Jamie Smith'
      email: 'jamie@example.com'
      role: 'Recruiter'
      permissions: {
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/enterprise/admin/RoleManagement.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/RoleManagement.tsx
        view_candidates: true,
        edit_candidates: true,
        create_jobs: true,
        manage_team: false,
        view_billing: false,
        manage_billing: false,
      },
    },
<<<<<<<< HEAD:src/components/enterprise/admin/RoleManagement.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/RoleManagement.tsx
=======
        viewCandidates: true
        editCandidates: true
        createJobs: true
        manageTeam: false
        viewBilling: false
        manageBilling: false
      }
    }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    {
      id: 3
      name: 'Sam Williams'
      email: 'sam@example.com'
      role: 'Manager'
      permissions: {
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/enterprise/admin/RoleManagement.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/RoleManagement.tsx
        view_candidates: true,
        edit_candidates: false,
        create_jobs: true,
        manage_team: false,
        view_billing: true,
        manage_billing: false,
      },
    },
<<<<<<<< HEAD:src/components/enterprise/admin/RoleManagement.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/RoleManagement.tsx
=======
        viewCandidates: true
        editCandidates: false
        createJobs: true
        manageTeam: false
        viewBilling: true
        manageBilling: false
      }
    }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    {
      id: 4
      name: 'Taylor Brown'
      email: 'taylor@example.com'
      role: 'Viewer'
      permissions: {
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/enterprise/admin/RoleManagement.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/RoleManagement.tsx
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
    toast ({
      title: 'Permission updated',
      description: `Permission ${permission} has been ${value ? 'granted' : 'revoked'}.`,
    });
  }
  const role_descriptions: Record < string, string> = {
    Admin: 'Full access to all features and settings',
    Recruiter: 'Can manage candidates and job postings',
    Manager: 'Can view candidates and create jobs',
    Viewer: 'Read - only access to candidates',
<<<<<<<< HEAD:src/components/enterprise/admin/RoleManagement.tsx

  }
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
========
  }
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/RoleManagement.tsx
import React from 'react';
=======

import React from "react",;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
<<<<<<< HEAD
  TableRow,;
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { toast } from '@/hooks/use-toast';import { InfoIcon } from 'lucide-react';
=======
  TableRow} from "@/components/ui/table",;
import { Badge } from "@/components/ui/badge",;
import { Switch } from "@/components/ui/switch",;
import { toast } from "@/hooks/use-toast",;
import { InfoIcon } from 'lucide-react';
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
import {;
  Tooltip,;
  TooltipContent,;
  TooltipProvider,;
<<<<<<< HEAD
  TooltipTrigger,;
} from '@/components/ui/tooltip';
=======
  TooltipTrigger} from "@/components/ui/tooltip",;
;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
export function RoleManagement() {;
  // Mock team members data;
  const teamMembers = [;
    {;
<<<<<<< HEAD
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
  const handlePermissionChange = (;
    _memberId: number,;
    permission: string,;
    value: boolean;
  ) => {    // In a real app, this would make an API call to update permissions;
    toast({;
      title: 'Permission updated',;
      description: `Permission ${permission} has been ${value ? 'granted' : 'revoked'}.`,;
    });
  };
  const roleDescriptions: Record<string, string> = {;
    Admin: 'Full access to all features and settings',;
    Recruiter: 'Can manage candidates and job postings',;
    Manager: 'Can view candidates and create jobs',;
    Viewer: 'Read-only access to candidates',;
  };
  return (
<<<<<<<< HEAD:src/components/enterprise/admin/RoleManagement.tsx


=======
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

  const roleDescriptions: Record<string string> = {
    "Admin": "Full access to all features and settings",
    "Recruiter": "Can manage candidates and job postings",
    "Manager": "Can view candidates and create jobs",
    "Viewer": "Read-only access to candidates"},
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  return (
    <div className="space-y-6">
      <div>

            </div>
          ))}
        </div>
      </div>

=======
>>>>>>> 
>>>>>>>   return (
    <div className="space-y-6">
      <div>
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

  return (
    <div className="space-y-6">
      <div>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>             </div>
          ))}
        </div>
      </div>
      <div className='rounded-md border'>
>>>>>>>         <Table>
            </div>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
          ))}



      <div className="rounded-md border">


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        <Table>
>>>>>>>           <TableHeader>
            <TableRow>
              <TableHead>Team Member</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className='text-center'>
                <div className='flex items-center justify-center gap-1'>
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
      <div className='rounded-md border'>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Team Member</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className="text-center">
                <div className="flex items-center justify-center gap-1">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  View Candidates
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
<<<<<<< HEAD
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />
=======
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      </TooltipTrigger>
                      <TooltipContent>
                        Can view candidate profiles and applications
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </TableHead>
<<<<<<< HEAD
              <TableHead className='text-center'>
                <div className='flex items-center justify-center gap-1'>
=======
              <TableHead className="text-center">
                <div className="flex items-center justify-center gap-1">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  Edit Candidates
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
<<<<<<< HEAD
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />
=======
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      </TooltipTrigger>
                      <TooltipContent>
                        Can edit candidate information and status
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </TableHead>
<<<<<<< HEAD
              <TableHead className='text-center'>
                <div className='flex items-center justify-center gap-1'>
=======
              <TableHead className="text-center">
                <div className="flex items-center justify-center gap-1">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  Create Jobs
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
<<<<<<< HEAD
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />
=======
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      </TooltipTrigger>
                      <TooltipContent>
                        Can create and publish job listings
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </TableHead>
<<<<<<< HEAD
              <TableHead className='text-center'>
                <div className='flex items-center justify-center gap-1'>
=======
              <TableHead className="text-center">
                <div className="flex items-center justify-center gap-1">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  Manage Team
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
<<<<<<< HEAD
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />
=======
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      </TooltipTrigger>
                      <TooltipContent>
                        Can add, edit, and remove team members
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </TableHead>
<<<<<<< HEAD
              <TableHead className='text-center'>
                <div className='flex items-center justify-center gap-1'>
=======
              <TableHead className="text-center">
                <div className="flex items-center justify-center gap-1">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  Billing Access
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
<<<<<<< HEAD
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />
=======
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

                <TableCell>
=======
            {teamMembers.map(member => (              <TableRow key={member.id}>
>>>>>>>                 <TableCell>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  <div className="font-medium">{member.name}</div>
                  <div className="text-sm text-muted-foreground">
ursor/fix-website-loading-errors-and-merge-6662
                <TableCell>
                  <div className='font-medium'>{member.name}</div>
                  <div className='text-sm text-muted-foreground'>
>>>>>>>                     {member.email}
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            {teamMembers.map(member => (              <TableRow key={member.id}>
            {teamMembers.map((member) => (
              <TableRow key={member.id}>
                <TableCell>
                  <div className="font-medium">{member.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {member.email}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  </div>
                </TableCell>
                <TableCell>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

                  </select>
                </TableCell>
                <TableCell className="text-center">
                  <Switch

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  <select
                    className='w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring'
                    defaultValue={member.role}                  >
                    <option value='Admin'>Admin</option>
                    <option value='Recruiter'>Recruiter</option>
                    <option value='Manager'>Manager</option>
                    <option value='Viewer'>Viewer</option>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>                   </select>
                </TableCell>
                <TableCell className="text-center">
                  <Switch
                    aria-label='View candidates'
>>>>>>>                     checked={member.permissions.viewCandidates}
ursor/fix-website-loading-errors-and-merge-6662
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/RoleManagement.tsx
        </div>;
      </div>;
      <div className='rounded-md border'>;
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
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
                  <Switch
                    aria-label='View candidates'
                    aria-label="View candidates"
                    checked={member.permissions.viewCandidates}
                    onCheckedChange={(checked) =>
                      handlePermissionChange(member.id, "viewCandidates", checked)
                    }
                  />
                </TableCell>
                <TableCell className="text-center">
                  <Switch
                    aria-label="Edit candidates"
                    checked={member.permissions.editCandidates}
                    onCheckedChange={(checked) =>
                      handlePermissionChange(member.id, "editCandidates", checked)
                    }
                  />
                </TableCell>
                <TableCell className="text-center">
                  <Switch
                    aria-label="Create jobs"
                    checked={member.permissions.createJobs}
                    onCheckedChange={(checked) =>
                      handlePermissionChange(member.id, "createJobs", checked)
                    }
                  />
                </TableCell>
                <TableCell className="text-center">
                  <Switch
                    aria-label="Manage team"
                    checked={member.permissions.manageTeam}
                    onCheckedChange={(checked) =>
                      handlePermissionChange(member.id, "manageTeam", checked)
                    }
                  />
                </TableCell>
                <TableCell className="text-center">
                  <Switch
                    aria-label="View billing"
                    checked={member.permissions.viewBilling}
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
import { InfoIcon } from 'lucide-react';
import {;
  Tooltip,;
  TooltipContent,;
  TooltipProvider,;
  TooltipTrigger} from "@/components/ui/tooltip",;
export function RoleManagement() {;
  // Mock team members data;
  const teamMembers = [;
    {;
      id: 1,;
      name: "Alex Johnson",;
      email: "alex@example.com",;
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
      email: "jamie@example.com",;
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
      email: "sam@example.com",;
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
      email: "taylor@example.com",;
      role: "Viewer",;
      permissions: {;
        viewCandidates: true,;
        editCandidates: false,;
        createJobs: false,;
        manageTeam: false,;
        viewBilling: false,;
        manageBilling: false}}],;
  const handlePermissionChange = (_memberId: number, permission: string, value: boolean) => {;
    // In a real app, this would make an API call to update permissions;
    toast({;
      title: "Permission updated",;
      description: `Permission ${permission} has been ${value ? "granted" : "revoked"}.`});
  },;
  const roleDescriptions: Record<string string> = {;
    "Admin": "Full access to all features and settings",;
    "Recruiter": "Can manage candidates and job postings",;
    "Manager": "Can view candidates and create jobs";
    "Viewer": "Read-only access to candidates"};
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (;
    <div className="space-y-6">;
      <div>;
        <h3 className="text-xl font-medium mb-4">Role Permissions</h3>;
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">;
          {Object.entries(roleDescriptions).map(([role, description]) => (;
            <div key={role} className="bg-card rounded-lg p-4 border border-border">;
              <div className="flex items-center gap-2 mb-2">;
<<<<<<< HEAD
                <Badge variant={role === "Admin" ? "default" :"outline"}>{role}</Badge>;
=======
                <Badge variant={role === "Admin" ? "default" : "outline"}>{role}</Badge>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </div>;
              <p className="text-sm text-muted-foreground">{description}</p>;
            </div>;
          ))}
        </div>;
      </div>;
<<<<<<< HEAD
;
      <div className="rounded-md border">;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
      <div className="rounded-md border">;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead>Team Member</TableHead>;
              <TableHead>Role</TableHead>;
<<<<<<< HEAD
<<<<<<< HEAD
              <TableHead className='text-center'>;
                <div className='flex items-center justify-center gap-1'>;
=======
              <TableHead className="text-center">;
                <div className="flex items-center justify-center gap-1">;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
              <TableHead className="text-center">;
                <div className="flex items-center justify-center gap-1">;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  View Candidates;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;
<<<<<<< HEAD
<<<<<<< HEAD
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />;
=======
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      </TooltipTrigger>;
                      <TooltipContent>;
                        Can view candidate profiles and applications;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
              </TableHead>;
<<<<<<< HEAD
<<<<<<< HEAD
              <TableHead className='text-center'>;
                <div className='flex items-center justify-center gap-1'>;
=======
              <TableHead className="text-center">;
                <div className="flex items-center justify-center gap-1">;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
              <TableHead className="text-center">;
                <div className="flex items-center justify-center gap-1">;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  Edit Candidates;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;
<<<<<<< HEAD
<<<<<<< HEAD
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />;
=======
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      </TooltipTrigger>;
                      <TooltipContent>;
                        Can edit candidate information and status;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
              </TableHead>;
<<<<<<< HEAD
<<<<<<< HEAD
              <TableHead className='text-center'>;
                <div className='flex items-center justify-center gap-1'>;
=======
              <TableHead className="text-center">;
                <div className="flex items-center justify-center gap-1">;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
              <TableHead className="text-center">;
                <div className="flex items-center justify-center gap-1">;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  Create Jobs;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;
<<<<<<< HEAD
<<<<<<< HEAD
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />;
=======
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      </TooltipTrigger>;
                      <TooltipContent>;
                        Can create and publish job listings;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
              </TableHead>;
<<<<<<< HEAD
<<<<<<< HEAD
              <TableHead className='text-center'>;
                <div className='flex items-center justify-center gap-1'>;
=======
              <TableHead className="text-center">;
                <div className="flex items-center justify-center gap-1">;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
              <TableHead className="text-center">;
                <div className="flex items-center justify-center gap-1">;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  Manage Team;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;
<<<<<<< HEAD
<<<<<<< HEAD
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />;
=======
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      </TooltipTrigger>;
                      <TooltipContent>;
                        Can add, edit, and remove team members;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
              </TableHead>;
<<<<<<< HEAD
<<<<<<< HEAD
              <TableHead className='text-center'>;
                <div className='flex items-center justify-center gap-1'>;
=======
              <TableHead className="text-center">;
                <div className="flex items-center justify-center gap-1">;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
              <TableHead className="text-center">;
                <div className="flex items-center justify-center gap-1">;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  Billing Access;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;
<<<<<<< HEAD
<<<<<<< HEAD
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />;
=======
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
            {teamMembers && teamMembers.map(member => (              <TableRow key={member && member.id}>;
                <TableCell>;
                  <div className='font-medium'>{member && member.name}</div>;
                  <div className='text-sm text-muted-foreground'>;
                    {member && member.email}
                  </div>;
                </TableCell>;
                <TableCell>;
                  <select
                    className='w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring'
                    defaultValue={member && member.role}>;
    <div className='space - y-6'>;
      <div>;
        <h3 className='text - xl font - medium mb - 4'>Role Permissions</h3>;
        <div className='grid grid - cols - 1 md:grid - cols - 4 gap - 4 mb - 6'>;
          {Object.entries (role_descriptions).map (([role, description]) => (
            <div;
              key={role}
              className='bg - card rounded - lg p - 4 border border - border';
            >;
              <div className='flex items - center gap - 2 mb - 2'>;
                <Badge variant={role === 'Admin' ? 'default' : 'outline'}>;
                  {role}
                </Badge>              </div>;
              <p className='text - sm text - muted - foreground'>{description}</p>;
            </div>))}
        </div>;
      </div>;
      <div className='rounded - md border'>;
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead > Team Member</TableHead>;
              <TableHead > Role</TableHead>;
              <TableHead className='text - center'>;
                <div className='flex items - center justify - center gap - 1'>;
                  View Candidates;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;
                        <InfoIcon className='h - 4 w - 4 text - muted - foreground' />;
                      </TooltipTrigger>;
                      <TooltipContent>;
                        Can view candidate profiles and applications;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
              </TableHead>;
              <TableHead className='text - center'>;
                <div className='flex items - center justify - center gap - 1'>;
                  Edit Candidates;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;
                        <InfoIcon className='h - 4 w - 4 text - muted - foreground' />;
                      </TooltipTrigger>;
                      <TooltipContent>;
                        Can edit candidate information and status;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
              </TableHead>;
              <TableHead className='text - center'>;
                <div className='flex items - center justify - center gap - 1'>;
                  Create Jobs;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;
                        <InfoIcon className='h - 4 w - 4 text - muted - foreground' />;
                      </TooltipTrigger>;
                      <TooltipContent>;
                        Can create and publish job listings;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
              </TableHead>;
              <TableHead className='text - center'>;
                <div className='flex items - center justify - center gap - 1'>;
                  Manage Team;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;
                        <InfoIcon className='h - 4 w - 4 text - muted - foreground' />;
                      </TooltipTrigger>;
                      <TooltipContent>;
                        Can add, edit, and remove team members;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;
              </TableHead>;
              <TableHead className='text - center'>;
                <div className='flex items - center justify - center gap - 1'>;
                  Billing Access;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;
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
                <TableCell>;
                  <div className='font - medium'>{member.name}</div>;
                  <div className='text - sm text - muted - foreground'>;
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            {teamMembers.map((member) => (;
              <TableRow key={member.id}>;
                <TableCell>;
                  <div className="font-medium">{member.name}</div>;
                  <div className="text-sm text-muted-foreground">;
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    {member.email}
                  </div>;
                </TableCell>;
                <TableCell>;
<<<<<<< HEAD
<<<<<<< HEAD
                  <select;
                    className='w - full h - 9 rounded - md border border - input bg - background px - 3 py - 1 text - sm shadow - sm transition - colors focus - visible:outline - none focus - visible:ring - 1 focus - visible:ring - ring';
                    default_value={member.role}                  >;
                    <option value='Admin'>Admin</option>;
                    <option value='Recruiter'>Recruiter</option>;
                    <option value='Manager'>Manager</option>;
                    <option value='Viewer'>Viewer</option>;
                  </select>;
                </TableCell>;
<<<<<<<< HEAD:src/components/enterprise/admin/RoleManagement.tsx

                <TableCell className="text-center">;
                  <Switch;
                    aria-label="View candidates";


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                    checked={member.permissions.viewCandidates}
>>>>>>>                     onCheckedChange={checked =>
=======
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
                  <Switch;
                    aria-label="View candidates";
                    checked={member.permissions.viewCandidates}
                    onCheckedChange={checked =>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      handlePermissionChange(
                        member.id
                        'viewCandidates'
                        checked
                      )
                    }                  />
                </TableCell>
                <TableCell className='text-center'>
                  <Switch
                    aria-label='Edit candidates'
                    checked={member.permissions.editCandidates}
                    onCheckedChange={checked =>
                      handlePermissionChange(
                        member.id
                        'editCandidates'
                        checked
                      )
                    }                  />
                </TableCell>
                <TableCell className='text-center'>
<<<<<<< HEAD
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/RoleManagement.tsx
                    checked={member && member.permissions.viewCandidates}
                    onCheckedChange={checked =>;
                      handlePermissionChange(;
                        member && member.id,;
                        'viewCandidates',;
                        checked;
                      );
                    }                  />;
                </TableCell>;
                <TableCell className='text-center'>;
                  <Switch
                    aria-label='Edit candidates'
                    checked={member && member.permissions.editCandidates}
                    onCheckedChange={checked =>;
                      handlePermissionChange(;
                        member && member.id,;
                        'editCandidates',;
                        checked;
                      );
                    }                  />;
                </TableCell>;
                <TableCell className='text-center'>;
                  <Switch
                    aria-label='Create jobs'
                    checked={member && member.permissions.createJobs}
                    onCheckedChange={checked =>;
                      handlePermissionChange(member && member.id, 'createJobs', checked);
                    }                  />;
                </TableCell>;
                <TableCell className='text-center'>;
                  <Switch
                    aria-label='Manage team'
                    checked={member && member.permissions.manageTeam}
                    onCheckedChange={checked =>;
                      handlePermissionChange(member && member.id, 'manageTeam', checked);
                    }                  />;
                </TableCell>;
                <TableCell className='text-center'>;
                  <Switch
                    aria-label='View billing'
<<<<<<<< HEAD:src/components/enterprise/admin/RoleManagement.tsx
                    checked={member.permissions.viewBilling}
<<<<<<< HEAD

=======
=======
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      </div>
    </div>
  )
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
                    checked={member && member.permissions.viewBilling}
                    onCheckedChange={checked =>;
                      handlePermissionChange(member && member.id, 'viewBilling', checked);
                    }                  />;
=======
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/RoleManagement.tsx
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      </div>;
    </div>;
  );
};
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                    onCheckedChange={(checked) =>;
                      handlePermissionChange(member.id, "viewBilling", checked);
                    }
                  />;
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/enterprise/admin/RoleManagement.tsx
                </TableCell>;
              </TableRow>;
            ))}

========
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                </TableCell>;
              </TableRow>;
            ))}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/RoleManagement.tsx
=======
                </TableCell>;
              </TableRow>;
            ))}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          </TableBody>;
        </Table>;
      </div>;
    </div>;
<<<<<<< HEAD
<<<<<<< HEAD
  );
}
<<<<<<<< HEAD:src/components/enterprise/admin/RoleManagement.tsx
;
<<<<<<< HEAD

=======
>>>>>>> 
;


>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
                <TableCell className='text - center'>;
                  <Switch;
                    aria - label='View candidates';
                    checked={member.permissions.view_candidates}
                    onCheckedChange={checked =>;
                      handlePermissionChange (
                        member.id,
                        'view_candidates',
                        checked);
                    }                  />;
                </TableCell>;
                <TableCell className='text - center'>;
                  <Switch;
                    aria - label='Edit candidates';
                    checked={member.permissions.edit_candidates}
                    onCheckedChange={checked =>;
                      handlePermissionChange (
                        member.id,
                        'edit_candidates',
                        checked);
                    }                  />;
                </TableCell>;
                <TableCell className='text - center'>;
                  <Switch;
                    aria - label='Create jobs';
                    checked={member.permissions.create_jobs}
                    onCheckedChange={checked =>;
                      handlePermissionChange (member.id, 'create_jobs', checked);
                    }                  />;
                </TableCell>;
                <TableCell className='text - center'>;
                  <Switch;
                    aria - label='Manage team';
                    checked={member.permissions.manage_team}
                    onCheckedChange={checked =>;
                      handlePermissionChange (member.id, 'manage_team', checked);
                    }                  />;
                </TableCell>;
                <TableCell className='text - center'>;
                  <Switch;
                    aria - label='View billing';
                    checked={member.permissions.view_billing}
                    onCheckedChange={checked =>;
                      handlePermissionChange (member.id, 'view_billing', checked);
                    }                  />;
                </TableCell>;
              </TableRow>))}
          </TableBody>;
        </Table>;
      </div>;
    </div>);
}
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/RoleManagement.tsx
=======
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
