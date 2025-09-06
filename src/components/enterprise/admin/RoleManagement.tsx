
import React from "react";
import {
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
            <div
              key={role}
              className='bg-card rounded-lg p-4 border border-border'
            >
              <div className='flex items-center gap-2 mb-2'>
                <Badge variant={role === 'Admin' ? 'default' : 'outline'}>
                  {role}
                </Badge>              </div>
              <p className='text-sm text-muted-foreground'>{description}</p>


            {teamMembers.map((member) => (
              <TableRow key={member.id}>




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

                    checked={member.permissions.viewBilling}

      </div>;
    </div>;
  );
};





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
;
