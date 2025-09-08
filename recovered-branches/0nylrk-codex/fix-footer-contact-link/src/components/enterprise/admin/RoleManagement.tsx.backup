import React from "react";


<<<<<<< HEAD

import React from "react",
import {}


  Table,
  TableBody,
  TableCell,
  TableHead,


=======
import React from "react";

import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";
import {Switch} from "@/components/ui/switch";
import {toast} from "@/hooks/use-toast";
import {InfoIcon} from "lucide-react";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
>>>>>>> origin/cursor/delete-old-data-records-6bba

export function RoleManagement() {
  // Mock team members data

  const teamMembers = [
import React from './react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components / ui / table';
import { Badge } from '@/components / ui / badge';
import { Switch } from '@/components / ui / switch';
import { toast } from '@/hooks / use - toast';
import { InfoIcon } from './lucide-react';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components / ui / tooltip';
;
export /**;
 * RoleManagement - Function description;
 */
function RoleManagement() {}
  // Mock team members data;
  const team_members = [;


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    {
      id: 1
      name: "Alex Johnson"
      email: "alex@example.com"
      role: "Admin"
      permissions: {

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        view_candidates: true,
        edit_candidates: true,
        create_jobs: true,
        manage_team: true,
        view_billing: true,
        manage_billing: true}},

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    {
      id: 2
      name: "Jamie Smith"
      email: "jamie@example.com"
      role: "Recruiter"
      permissions: {

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        view_candidates: true,
        edit_candidates: true,
        create_jobs: true,
        manage_team: false,
        view_billing: false,
        manage_billing: false}},

<<<<<<< HEAD


    {

=======
    {
    {
>>>>>>> origin/cursor/delete-old-data-records-6bba
      id: 3
      name: "Sam Williams"
      email: "sam@example.com"
      role: "Manager"
      permissions: {

<<<<<<< HEAD

=======
        view_candidates: true,
        edit_candidates: false,
        create_jobs: true,
        manage_team: false,
        view_billing: true,
        manage_billing: false}},

        viewCandidates: true
        editCandidates: false
        createJobs: true
        manageTeam: false
        viewBilling: true
        manageBilling: false}}
>>>>>>> origin/cursor/delete-old-data-records-6bba
    {
      id: 4
      name: "Taylor Brown"
      email: "taylor@example.com"
      role: "Viewer"
      permissions: {

<<<<<<< HEAD
=======
        viewCandidates: true
        editCandidates: false
        createJobs: false
        manageTeam: false
        viewBilling: false
        manageBilling: false}}]
  const handlePermissionChange = (memberId: number, permission: string, value: boolean) => {
    // In a real app, this would make an API call to update permissions
    toast({

      title: "Permission updated",
      description: `Permission ${permission} has been ${value ? "granted" : "revoked"}.`});
  },
  description: `Permission ${permission} has been ${value ? "granted" : "revoked"}.`})

  }
  const roleDescriptions: Record<string, string> = {"
    "Admin": "Full access to all features and settings";"
    "Recruiter": "Can manage candidates and job postings";"
    "Manager": "Can view candidates and create jobs";"
    "Viewer": "Read-only access to candidates"}
  },

  const roleDescriptions: Record<string string> = {"
    "Admin": "Full access to all features and settings","
    "Recruiter": "Can manage candidates and job postings","
    "Manager": "Can view candidates and create jobs","
    "Viewer": "Read-only access to candidates"},

                  <Switch

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
                  <Switch
                    checked={member.permissions.viewBilling}
                    onCheckedChange={(checked) =>
                      handlePermissionChange(member.id, "viewBilling", checked)
                    }
                  />
                </TableCell>
              </TableRow>
                  <Switch;
                    checked={member.permissions.viewBilling} 
                    onCheckedChange={(checked) => "
                      handlePermissionChange(member.id, "viewBilling", checked)"
                    onCheckedChange={(checked) => 
                      handlePermissionChange(member.id, "viewBilling", checked)
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

        viewCandidates: true
        editCandidates: false
        createJobs: false
        manageTeam: false
        viewBilling: false
        manageBilling: false}}]
  const handlePermissionChange = (memberId: number, permission: string, value: boolean) => {
    // In a real app, this would make an API call to update permissions
    toast({

      title: "Permission updated",
      description: `Permission ${permission} has been ${value ? "granted" : "revoked"}.`});
  },
  description: `Permission ${permission} has been ${value ? "granted" : "revoked"}.`})

  }
  const roleDescriptions: Record<string, string> = {"
    "Admin": "Full access to all features and settings";"
    "Recruiter": "Can manage candidates and job postings";"
    "Manager": "Can view candidates and create jobs";"
    "Viewer": "Read-only access to candidates"}
  },

  const roleDescriptions: Record<string string> = {"
    "Admin": "Full access to all features and settings","
    "Recruiter": "Can manage candidates and job postings","
    "Manager": "Can view candidates and create jobs","
    "Viewer": "Read-only access to candidates"},

                  <Switch

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
import { InfoIcon } from "lucide-react",;"
  }
  Tooltip,;
  TooltipContent,;

  TooltipTrigger} from "@/components/ui/tooltip",;
>>>>>>> origin/cursor/delete-old-data-records-6bba

export function RoleManagement() {;
  // Mock team members data;
  const teamMembers = [;
    {;
      id: 1,;
      name: "Alex Johnson",;


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      role: "Admin",;
      permissions: {;
        viewCandidates: true,;
        editCandidates: true,;
        createJobs: true,;
        manageTeam: true,;
        viewBilling: true,;
<<<<<<< HEAD


        manageBilling: true}},;
    {;
      id: 2,;"
      name: "Jamie Smith",;


=======
        manageBilling: true}},;
    {;
      id: 2,;
      name: "Jamie Smith",;
      email: "jamie@example.com",;

"
      email: "jamie@example && example.com",;
"
>>>>>>> origin/cursor/delete-old-data-records-6bba
      role: "Recruiter",;
      permissions: {;
        viewCandidates: true,;
        editCandidates: true,;
        createJobs: true,;
        manageTeam: false,;
        viewBilling: false,;
        manageBilling: false}},;
    {;
<<<<<<< HEAD

      id: 3,;"
      name: "Sam Williams",;


=======
      id: 3,;
      name: "Sam Williams",;
      email: "sam@example.com",;

"
      email: "sam@example && example.com",;
"
>>>>>>> origin/cursor/delete-old-data-records-6bba
      role: "Manager",;
      permissions: {;
        viewCandidates: true,;
        editCandidates: false,;
        createJobs: true,;
        manageTeam: false,;
        viewBilling: true,;
        manageBilling: false}},;
    {;
<<<<<<< HEAD

      id: 4,;"
      name: "Taylor Brown",;

=======
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
  const handlePermissionChange = (memberId: number, permission: string, value: boolean) => {;
    // In a real app, this would make an API call to update permissions;
    toast({;
      title: "Permission updated",;
      description: `Permission ${permission} has been ${value ? "granted" : "revoked"}.`});

      title: "Permission updated",


"
      email: "taylor@example && example.com",;
>>>>>>> origin/cursor/delete-old-data-records-6bba

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

=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
export function RoleManagement() {;
  // Mock team members data;
  const teamMembers = [;
    {;

<<<<<<< HEAD
      email: "taylor@example.com",;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

      role: "Viewer",;
      permissions: {;
        viewCandidates: true,;
        editCandidates: false,;
        createJobs: false,;
        manageTeam: false,;
        viewBilling: false,;
        manageBilling: false}}],;
<<<<<<< HEAD

  const handlePermissionChange = (memberId: number, permission: string, value: boolean) => {;
    // In a real app, this would make an API call to update permissions;
    toast({;
      title: "Permission updated",;
      description: `Permission ${permission} has been ${value ? "granted" : "revoked"}.`});
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
          {Object.entries(roleDescriptions).map(([role, description]) => (;
            <div key={role} className="bg-card rounded-lg p-4 border border-border">;
              <div className="flex items-center gap-2 mb-2">;

                <Badge variant={role === "Admin" ? "default" :"outline"}>{role}</Badge>;
          {Object.entries(roleDescriptions).map(([role, description]) => (;
            <div key={role} className="bg-card rounded-lg p-4 border border-border">;
              <div className="flex items-center gap-2 mb-2">;

                <Badge variant={role === "Admin" ? "default" : "outline"}>{role}</Badge>;
              </div>;
              <p className="text-sm text-muted-foreground">{description}</p>;
            </div>;
          ))}

;
        </div>;
      </div>;


=======


  const handlePermissionChange = (memberId: number, permission: string, value: boolean) => {;
    // In a real app, this would make an API call to update permissions;

>>>>>>> origin/cursor/delete-old-data-records-6bba
      <div className="rounded-md border">;
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead>Team Member</TableHead>;
<<<<<<< HEAD



=======
              <TableHead>Role</TableHead>;
              <TableHead className="text-center">;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                <div className="flex items-center justify-center gap-1">;
                  View Candidates;
                  <TooltipProvider>;
                    <Tooltip>;
<<<<<<< HEAD



=======
                      <TooltipTrigger>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
                      </TooltipTrigger>;
                      <TooltipContent>;
                        Can view candidate profiles and applications;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;

<<<<<<< HEAD


=======
                <div className="flex items - center justify - center gap - 1">;
                  Edit Candidates;
                  <TooltipProvider>;
                    <Tooltip>;

                        <InfoIcon className="h - 4 w - 4 text - muted - foreground" />;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                <div className="flex items-center justify-center gap-1">;
                  Edit Candidates;
                  <TooltipProvider>;
                    <Tooltip>;
<<<<<<< HEAD



=======
                      <TooltipTrigger>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
                      </TooltipTrigger>;
                      <TooltipContent>;
                        Can edit candidate information and status;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;

<<<<<<< HEAD


=======
                <div className="flex items - center justify - center gap - 1">;
                  Create Jobs;
                  <TooltipProvider>;
                    <Tooltip>;

                        <InfoIcon className="h - 4 w - 4 text - muted - foreground" />;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                <div className="flex items-center justify-center gap-1">;
                  Create Jobs;
                  <TooltipProvider>;
                    <Tooltip>;
<<<<<<< HEAD



=======
                      <TooltipTrigger>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
                      </TooltipTrigger>;
                      <TooltipContent>;
                        Can create and publish job listings;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;

<<<<<<< HEAD


=======
                <div className="flex items - center justify - center gap - 1">;
                  Manage Team;
                  <TooltipProvider>;
                    <Tooltip>;

                        <InfoIcon className="h - 4 w - 4 text - muted - foreground" />;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                <div className="flex items-center justify-center gap-1">;
                  Manage Team;
                  <TooltipProvider>;
                    <Tooltip>;
<<<<<<< HEAD



=======
                      <TooltipTrigger>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />;
                      </TooltipTrigger>;
                      <TooltipContent>;
                        Can add, edit, and remove team members;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;

<<<<<<< HEAD


=======
                <div className="flex items - center justify - center gap - 1">;
                  Billing Access;
                  <TooltipProvider>;
                    <Tooltip>;

                        <InfoIcon className="h - 4 w - 4 text - muted - foreground" />;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                <div className="flex items-center justify-center gap-1">;
                  Billing Access;
                  <TooltipProvider>;
                    <Tooltip>;
<<<<<<< HEAD



=======
                      <TooltipTrigger>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

                    }
                  />;
                </TableCell>;
                <TableCell className="text-center">;

                  <Switch
                    checked={member && member.permissions.editCandidates} 
                    onCheckedChange={(checked) => ;
                      handlePermissionChange(member && member.id, "editCandidates", checked);

                    }
                  />;
                </TableCell>;
                <TableCell className="text-center">;

                  <Switch
                    checked={member && member.permissions.createJobs} 
                    onCheckedChange={(checked) => ;
                      handlePermissionChange(member && member.id, "createJobs", checked);

                    }
                  />;
                </TableCell>;
                <TableCell className="text-center">;

                  <Switch
                    checked={member && member.permissions.manageTeam} 
                    onCheckedChange={(checked) => ;
                      handlePermissionChange(member && member.id, "manageTeam", checked);

                    }
                  />;
                </TableCell>;
                <TableCell className="text-center">;

                  <Switch
                    checked={member && member.permissions.viewBilling} 
                    onCheckedChange={(checked) => ;
                      handlePermissionChange(member && member.id, "viewBilling", checked);


                    }
                  />;
                </TableCell>;
              </TableRow>;


=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
            ))}

            ))}
          </TableBody>;

        </Table>;
      </div>;
    </div>;
<<<<<<< HEAD


=======

  );

>>>>>>> origin/cursor/delete-old-data-records-6bba
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

      <div className="rounded - md border">;

        <Table>;

          <TableHeader>;

            <TableRow>;

                <div className="flex items - center justify - center gap - 1">;
                  View Candidates;

                  <TooltipProvider>;

                    <Tooltip>;

                        <InfoIcon className="h - 4 w - 4 text - muted - foreground" />;
                      </TooltipTrigger>;
                      <TooltipContent>;
                        Can view candidate profiles and applications;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;

                <div className="flex items - center justify - center gap - 1">;
                  Edit Candidates;
                  <TooltipProvider>;
                    <Tooltip>;

                        <InfoIcon className="h - 4 w - 4 text - muted - foreground" />;
                      </TooltipTrigger>;
                      <TooltipContent>;
                        Can edit candidate information and status;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;

                <div className="flex items - center justify - center gap - 1">;
                  Create Jobs;
                  <TooltipProvider>;
                    <Tooltip>;

                        <InfoIcon className="h - 4 w - 4 text - muted - foreground" />;
                      </TooltipTrigger>;
                      <TooltipContent>;
                        Can create and publish job listings;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;

                <div className="flex items - center justify - center gap - 1">;
                  Manage Team;
                  <TooltipProvider>;
                    <Tooltip>;

                        <InfoIcon className="h - 4 w - 4 text - muted - foreground" />;
                      </TooltipTrigger>;
                      <TooltipContent>;
                        Can add, edit, and remove team members;
                      </TooltipContent>;
                    </Tooltip>;
                  </TooltipProvider>;
                </div>;

                <div className="flex items - center justify - center gap - 1">;
                  Billing Access;
                  <TooltipProvider>;
                    <Tooltip>;

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

                  <div className="text - sm text - muted - foreground">;
                    {member.email}
                  </div>;
                </TableCell>;
                <TableCell>;

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

          </TableBody>;
</Switch>
        </Table>;
      </div>;
    </div>);
}

<<<<<<< HEAD
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
>>>>>>> origin/cursor/delete-old-data-records-6bba



<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
