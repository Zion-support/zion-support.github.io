

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,

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

export function RoleManagement() {
  // Mock team members data
  const teamMembers = [
    {

        manageBilling: false}}],


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
        </div>
      </div>

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

=======

            {teamMembers.map((member) => (
              <TableRow key={member.id}>


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                <TableCell>
                  <div className='font-medium'>{member.name}</div>
                  <div className='text-sm text-muted-foreground'>
                    {member.email}
                  </div>
                </TableCell>
                <TableCell>

                  </select>
                </TableCell>
                <TableCell className="text-center">
                  <Switch

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

                    checked={member.permissions.viewBilling}
<<<<<<< HEAD
