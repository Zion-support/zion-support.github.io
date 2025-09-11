<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import {
ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function RoleManagement() {
  // Mock team members data
  const teamMembers = [
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import {

import React from "react";
import {
import React from 'react'
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
import React from 'react'
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { toast } from '@/hooks/use-toast'; import { InfoIcon } from 'lucide-react'
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
} from '@/components / ui / tooltip';
export /**
 * RoleManagement - Function description
 */
function RoleManagement() {
  // Mock team members data;
  const team_members = [;
    {
<<<<<<< HEAD
<<<<<<< HEAD
export function RoleManagement() {
  // Mock team members data
  const teamMembers = [
    {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      id: 2
      name: 'Jamie Smith'
      email: 'jamie@example.com'
      role: 'Recruiter'
      permissions: {
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        view_candidates: true,
        edit_candidates: true,
        create_jobs: true,
        manage_team: false,
        view_billing: false,
        manage_billing: false,
      },
    },
<<<<<<< HEAD
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      id: 3
      name: 'Sam Williams'
      email: 'sam@example.com'
      role: 'Manager'
      permissions: {
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        view_candidates: true,
        edit_candidates: false,
        create_jobs: true,
        manage_team: false,
        view_billing: true,
        manage_billing: false,
      },
    },
<<<<<<< HEAD
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      id: 4
      name: 'Taylor Brown'
      email: 'taylor@example.com'
      role: 'Viewer'
      permissions: {
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
  }
import React from 'react';

import React from "react",;
=======

  }
import React from 'react';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

  }
import React from 'react';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
<<<<<<< HEAD
<<<<<<< HEAD
  TableRow} from "@/components/ui/table",;
import { Badge } from "@/components/ui/badge",;
import { Switch } from "@/components/ui/switch",;
import { toast } from "@/hooks/use-toast",;
import { InfoIcon } from 'lucide-react';
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  TableRow,;
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { toast } from '@/hooks/use-toast';import { InfoIcon } from 'lucide-react';
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {;
  Tooltip,;
  TooltipContent,;
  TooltipProvider,;
<<<<<<< HEAD
<<<<<<< HEAD
  TooltipTrigger} from "@/components/ui/tooltip",;
;
=======
  TooltipTrigger,;
} from '@/components/ui/tooltip';

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  TooltipTrigger,;
} from '@/components/ui/tooltip';

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function RoleManagement() {;
  // Mock team members data;
  const teamMembers = [;
    {;
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const roleDescriptions: Record<string string> = {
    "Admin": "Full access to all features and settings",
    "Recruiter": "Can manage candidates and job postings",
    "Manager": "Can view candidates and create jobs",
    "Viewer": "Read-only access to candidates"},
<<<<<<< HEAD
    <div className="space-y-6">
      <div>
=======




>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  return (
    <div className="space-y-6">
      <div>
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======


  return (
    <div className="space-y-6">
      <div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
        </div>
      </div>
      <div className='rounded-md border'>
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        </div>
      </div>
      <div className='rounded-md border'>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      <div className="rounded-md border">


        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Team Member</TableHead>
              <TableHead>Role</TableHead>
<<<<<<< HEAD
<<<<<<< HEAD
              <TableHead className="text-center">
                <div className="flex items-center justify-center gap-1">
=======
              <TableHead className='text-center'>
                <div className='flex items-center justify-center gap-1'>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              <TableHead className='text-center'>
                <div className='flex items-center justify-center gap-1'>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  View Candidates
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
<<<<<<< HEAD
<<<<<<< HEAD
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />
=======
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      </TooltipTrigger>
                      <TooltipContent>
                        Can view candidate profiles and applications
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </TableHead>
<<<<<<< HEAD
<<<<<<< HEAD
              <TableHead className="text-center">
                <div className="flex items-center justify-center gap-1">
=======
              <TableHead className='text-center'>
                <div className='flex items-center justify-center gap-1'>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              <TableHead className='text-center'>
                <div className='flex items-center justify-center gap-1'>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  Edit Candidates
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
<<<<<<< HEAD
<<<<<<< HEAD
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />
=======
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      </TooltipTrigger>
                      <TooltipContent>
                        Can edit candidate information and status
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </TableHead>
<<<<<<< HEAD
<<<<<<< HEAD
              <TableHead className="text-center">
                <div className="flex items-center justify-center gap-1">
=======
              <TableHead className='text-center'>
                <div className='flex items-center justify-center gap-1'>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              <TableHead className='text-center'>
                <div className='flex items-center justify-center gap-1'>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  Create Jobs
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
<<<<<<< HEAD
<<<<<<< HEAD
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />
=======
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      </TooltipTrigger>
                      <TooltipContent>
                        Can create and publish job listings
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </TableHead>
<<<<<<< HEAD
<<<<<<< HEAD
              <TableHead className="text-center">
                <div className="flex items-center justify-center gap-1">
=======
              <TableHead className='text-center'>
                <div className='flex items-center justify-center gap-1'>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              <TableHead className='text-center'>
                <div className='flex items-center justify-center gap-1'>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  Manage Team
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
<<<<<<< HEAD
<<<<<<< HEAD
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />
=======
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      </TooltipTrigger>
                      <TooltipContent>
                        Can add, edit, and remove team members
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </TableHead>
<<<<<<< HEAD
<<<<<<< HEAD
              <TableHead className="text-center">
                <div className="flex items-center justify-center gap-1">
=======
              <TableHead className='text-center'>
                <div className='flex items-center justify-center gap-1'>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              <TableHead className='text-center'>
                <div className='flex items-center justify-center gap-1'>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  Billing Access
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
<<<<<<< HEAD
<<<<<<< HEAD
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />
=======
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
            {teamMembers.map(member => (              <TableRow key={member.id}>
                  <div className="font-medium">{member.name}</div>
                  <div className="text-sm text-muted-foreground">
ursor/fix-website-loading-errors-and-merge-6662
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
            {teamMembers.map(member => (              <TableRow key={member.id}>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {teamMembers.map((member) => (
              <TableRow key={member.id}>


                <TableCell>
                  <div className='font-medium'>{member.name}</div>
                  <div className='text-sm text-muted-foreground'>
<<<<<<< HEAD
<<<<<<< HEAD
            {teamMembers.map(member => (              <TableRow key={member.id}>
            {teamMembers.map((member) => (
              <TableRow key={member.id}>
                <TableCell>
                  <div className="font-medium">{member.name}</div>
                  <div className="text-sm text-muted-foreground">
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    {member.email}
                  </div>
                </TableCell>
                <TableCell>
<<<<<<< HEAD
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


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <select 
                    className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    defaultValue={member.role}
                  >
                    <option value="Admin">Admin</option>
                    <option value="Recruiter">Recruiter</option>
                    <option value="Manager">Manager</option>
                    <option value="Viewer">Viewer</option>
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </select>
                </TableCell>
                <TableCell className="text-center">
                  <Switch
<<<<<<< HEAD
<<<<<<< HEAD
                    aria-label='View candidates'
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                    aria-label='View candidates'
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  return (;
    <div className="space-y-6">;
      <div>;
        <h3 className="text-xl font-medium mb-4">Role Permissions</h3>;
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">;
          {Object.entries(roleDescriptions).map(([role, description]) => (;
            <div key={role} className="bg-card rounded-lg p-4 border border-border">;
              <div className="flex items-center gap-2 mb-2">;
                <Badge variant={role === "Admin" ? "default" : "outline"}>{role}</Badge>;
              </div>;
              <p className="text-sm text-muted-foreground">{description}</p>;
            </div>;
          ))}
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="rounded-md border">;
=======

      <div className='rounded-md border'>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

      <div className='rounded-md border'>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead>Team Member</TableHead>;
              <TableHead>Role</TableHead>;
<<<<<<< HEAD
<<<<<<< HEAD
              <TableHead className="text-center">;
                <div className="flex items-center justify-center gap-1">;
              <TableHead className="text-center">;
                <div className="flex items-center justify-center gap-1">;
=======
              <TableHead className='text-center'>;
                <div className='flex items-center justify-center gap-1'>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              <TableHead className='text-center'>;
                <div className='flex items-center justify-center gap-1'>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  View Candidates;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;
<<<<<<< HEAD
<<<<<<< HEAD
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
=======
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
              <TableHead className="text-center">;
                <div className="flex items-center justify-center gap-1">;
              <TableHead className="text-center">;
                <div className="flex items-center justify-center gap-1">;
=======
              <TableHead className='text-center'>;
                <div className='flex items-center justify-center gap-1'>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              <TableHead className='text-center'>;
                <div className='flex items-center justify-center gap-1'>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  Edit Candidates;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;
<<<<<<< HEAD
<<<<<<< HEAD
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
=======
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
              <TableHead className="text-center">;
                <div className="flex items-center justify-center gap-1">;
              <TableHead className="text-center">;
                <div className="flex items-center justify-center gap-1">;
=======
              <TableHead className='text-center'>;
                <div className='flex items-center justify-center gap-1'>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              <TableHead className='text-center'>;
                <div className='flex items-center justify-center gap-1'>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  Create Jobs;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;
<<<<<<< HEAD
<<<<<<< HEAD
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
=======
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
              <TableHead className="text-center">;
                <div className="flex items-center justify-center gap-1">;
              <TableHead className="text-center">;
                <div className="flex items-center justify-center gap-1">;
=======
              <TableHead className='text-center'>;
                <div className='flex items-center justify-center gap-1'>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              <TableHead className='text-center'>;
                <div className='flex items-center justify-center gap-1'>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  Manage Team;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;
<<<<<<< HEAD
<<<<<<< HEAD
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
=======
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
              <TableHead className="text-center">;
                <div className="flex items-center justify-center gap-1">;
              <TableHead className="text-center">;
                <div className="flex items-center justify-center gap-1">;
=======
              <TableHead className='text-center'>;
                <div className='flex items-center justify-center gap-1'>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              <TableHead className='text-center'>;
                <div className='flex items-center justify-center gap-1'>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  Billing Access;
                  <TooltipProvider>;
                    <Tooltip>;
                      <TooltipTrigger>;
<<<<<<< HEAD
<<<<<<< HEAD
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
=======
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
            {teamMembers.map((member) => (;
              <TableRow key={member.id}>;
                <TableCell>;
                  <div className="font-medium">{member.name}</div>;
                  <div className="text-sm text-muted-foreground">;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    {member.email}
                  </div>;
                </TableCell>;
                <TableCell>;
                  <select;
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    className='w - full h - 9 rounded - md border border - input bg - background px - 3 py - 1 text - sm shadow - sm transition - colors focus - visible:outline - none focus - visible:ring - 1 focus - visible:ring - ring';
                    default_value={member.role}                  >;
                    <option value='Admin'>Admin</option>;
                    <option value='Recruiter'>Recruiter</option>;
                    <option value='Manager'>Manager</option>;
                    <option value='Viewer'>Viewer</option>;
                  </select>;
                </TableCell>;

                <TableCell className="text-center">;
                  <Switch;
                    aria-label="View candidates";


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    checked={member.permissions.viewCandidates}
                    onCheckedChange={checked =>
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
<<<<<<< HEAD
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      </div>;
    </div>;
  );
};

                    onCheckedChange={(checked) =>;
                      handlePermissionChange(member.id, "viewBilling", checked);
                    }
                  />;
                </TableCell>;
              </TableRow>;
            ))}
<<<<<<< HEAD
<<<<<<< HEAD
                </TableCell>;
              </TableRow>;
            ))}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </TableBody>;
        </Table>;
      </div>;
    </div>;
<<<<<<< HEAD
<<<<<<< HEAD
;
=======
  );

}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36




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
=======
  );

}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
