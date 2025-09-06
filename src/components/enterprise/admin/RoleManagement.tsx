<<<<<<< HEAD
import React from 'react';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
=======

import React from "react";
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
<<<<<<< HEAD
  TableRow,;
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { toast } from '@/hooks/use-toast';
=======
  TableRow} from "@/components/ui/table",
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/hooks/use-toast";
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
import { InfoIcon } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,;
} from '@/components/ui/tooltip';

export function RoleManagement() {
  // Mock team members data
  const teamMembers = [
    {
      id: 1,
      name: 'Alex Johnson',
      email: 'alex@example.com',
      role: 'Admin',
      permissions: {
        viewCandidates: true,
        editCandidates: true,
        createJobs: true,
        manageTeam: true,
        viewBilling: true,
        manageBilling: true,
      },
    },
    {
      id: 2,
      name: 'Jamie Smith',
      email: 'jamie@example.com',
      role: 'Recruiter',
      permissions: {
        viewCandidates: true,
        editCandidates: true,
        createJobs: true,
        manageTeam: false,
        viewBilling: false,
        manageBilling: false,
      },
    },
    {
      id: 3,
      name: 'Sam Williams',
      email: 'sam@example.com',
      role: 'Manager',
      permissions: {
        viewCandidates: true,
        editCandidates: false,
        createJobs: true,
        manageTeam: false,
        viewBilling: true,
        manageBilling: false,
      },
    },
    {
      id: 4,
      name: 'Taylor Brown',
      email: 'taylor@example.com',
      role: 'Viewer',
      permissions: {
        viewCandidates: true,
        editCandidates: false,
        createJobs: false,
        manageTeam: false,
        viewBilling: false,
        manageBilling: false,
      },
    },
  ];

<<<<<<< HEAD
  const handlePermissionChange = (
    _memberId: number,
    permission: string,
    value: boolean
  ) => {
=======
  const handlePermissionChange = (_memberId: number, permission: string, value: boolean,) => {
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
    // In a real app, this would make an API call to update permissions
    toast({
      title: 'Permission updated',
      description: `Permission ${permission} has been ${value ? 'granted' : 'revoked'}.`,
    });
  };

  const roleDescriptions: Record<string, string> = {
    Admin: 'Full access to all features and settings',
    Recruiter: 'Can manage candidates and job postings',
    Manager: 'Can view candidates and create jobs',
    Viewer: 'Read-only access to candidates',
  };

  return (
    <div className='space-y-6'>
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
                </Badge>
=======
        <h3 className="text-xl font-medium mb-4">Role Permissions</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {Object.entries(roleDescriptions).map(([role, description],) => (
            <div key={role} className="bg-card rounded-lg p-4 border border-border">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant={role === "Admin" ? "default" : "outline"}>{role}</Badge>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
              </div>
              <p className='text-sm text-muted-foreground'>{description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='rounded-md border'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Team Member</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className='text-center'>
                <div className='flex items-center justify-center gap-1'>
                  View Candidates
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />
                      </TooltipTrigger>
                      <TooltipContent>
                        Can view candidate profiles and applications
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </TableHead>
              <TableHead className='text-center'>
                <div className='flex items-center justify-center gap-1'>
                  Edit Candidates
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />
                      </TooltipTrigger>
                      <TooltipContent>
                        Can edit candidate information and status
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </TableHead>
              <TableHead className='text-center'>
                <div className='flex items-center justify-center gap-1'>
                  Create Jobs
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />
                      </TooltipTrigger>
                      <TooltipContent>
                        Can create and publish job listings
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </TableHead>
              <TableHead className='text-center'>
                <div className='flex items-center justify-center gap-1'>
                  Manage Team
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />
                      </TooltipTrigger>
                      <TooltipContent>
                        Can add, edit, and remove team members
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </TableHead>
              <TableHead className='text-center'>
                <div className='flex items-center justify-center gap-1'>
                  Billing Access
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <InfoIcon className='h-4 w-4 text-muted-foreground' />
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
            {teamMembers.map(member => (
=======
            {teamMembers.map((member,) => (
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
              <TableRow key={member.id}>
                <TableCell>
                  <div className='font-medium'>{member.name}</div>
                  <div className='text-sm text-muted-foreground'>
                    {member.email}
                  </div>
                </TableCell>
                <TableCell>
<<<<<<< HEAD
                  <select
                    className='w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring'
                    defaultValue={member.role}
=======
                  <select 
                    className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    defaultValue = {member.role,}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
                  >
                    <option value='Admin'>Admin</option>
                    <option value='Recruiter'>Recruiter</option>
                    <option value='Manager'>Manager</option>
                    <option value='Viewer'>Viewer</option>
                  </select>
                </TableCell>
                <TableCell className='text-center'>
                  <Switch
<<<<<<< HEAD
                    aria-label='View candidates'
                    checked={member.permissions.viewCandidates}
                    onCheckedChange={checked =>
                      handlePermissionChange(
                        member.id,
                        'viewCandidates',
                        checked
                      )
                    }
=======
                    aria-label="View candidates"
                    checked = {member.permissions.viewCandidates,}
                    onCheckedChange = {(checked,) =>
                      handlePermissionChange(member.id, "viewCandidates", checked)
                    ,}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
                  />
                </TableCell>
                <TableCell className='text-center'>
                  <Switch
<<<<<<< HEAD
                    aria-label='Edit candidates'
                    checked={member.permissions.editCandidates}
                    onCheckedChange={checked =>
                      handlePermissionChange(
                        member.id,
                        'editCandidates',
                        checked
                      )
                    }
=======
                    aria-label="Edit candidates"
                    checked = {member.permissions.editCandidates,}
                    onCheckedChange = {(checked,) =>
                      handlePermissionChange(member.id, "editCandidates", checked)
                    ,}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
                  />
                </TableCell>
                <TableCell className='text-center'>
                  <Switch
<<<<<<< HEAD
                    aria-label='Create jobs'
                    checked={member.permissions.createJobs}
                    onCheckedChange={checked =>
                      handlePermissionChange(member.id, 'createJobs', checked)
                    }
=======
                    aria-label="Create jobs"
                    checked = {member.permissions.createJobs,}
                    onCheckedChange = {(checked,) =>
                      handlePermissionChange(member.id, "createJobs", checked)
                    ,}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
                  />
                </TableCell>
                <TableCell className='text-center'>
                  <Switch
<<<<<<< HEAD
                    aria-label='Manage team'
                    checked={member.permissions.manageTeam}
                    onCheckedChange={checked =>
                      handlePermissionChange(member.id, 'manageTeam', checked)
                    }
=======
                    aria-label="Manage team"
                    checked = {member.permissions.manageTeam,}
                    onCheckedChange = {(checked,) =>
                      handlePermissionChange(member.id, "manageTeam", checked)
                    ,}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
                  />
                </TableCell>
                <TableCell className='text-center'>
                  <Switch
<<<<<<< HEAD
                    aria-label='View billing'
                    checked={member.permissions.viewBilling}
                    onCheckedChange={checked =>
                      handlePermissionChange(member.id, 'viewBilling', checked)
                    }
=======
                    aria-label="View billing"
                    checked = {member.permissions.viewBilling,}
                    onCheckedChange = {(checked,) =>
                      handlePermissionChange(member.id, "viewBilling", checked)
                    ,}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
=======
}
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
=======
;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
