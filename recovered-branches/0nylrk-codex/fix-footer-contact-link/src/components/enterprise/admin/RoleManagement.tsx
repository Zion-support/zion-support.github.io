
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from "react";

import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";
import {Switch} from "@/components/ui/switch";
import {toast} from "@/hooks/use-toast";
import {InfoIcon} from "lucide-react";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
export function RoleManagement() {
  // Mock team members data
  const teamMembers = [
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function RoleManagement() {
  // Mock team members data
  const teamMembers = [
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      id: 1
      name: "Alex Johnson"
      email: "alex@example.com"
      role: "Admin"
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
        manage_team: true,
        view_billing: true,
        manage_billing: true}},
<<<<<<< HEAD
<<<<<<< HEAD
        viewCandidates: true
        editCandidates: true
        createJobs: true
        manageTeam: true
        viewBilling: true
        manageBilling: true}}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      id: 2
      name: "Jamie Smith"
      email: "jamie@example.com"
      role: "Recruiter"
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
        manage_billing: false}},
<<<<<<< HEAD
<<<<<<< HEAD
        viewCandidates: true
        editCandidates: true
        createJobs: true
        manageTeam: false
        viewBilling: false
        manageBilling: false}}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      id: 3
      name: "Sam Williams"
      email: "sam@example.com"
      role: "Manager"
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
        manage_billing: false}},
<<<<<<< HEAD
<<<<<<< HEAD
        viewCandidates: true
        editCandidates: false
        createJobs: true
        manageTeam: false
        viewBilling: true
        manageBilling: false}}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      id: 4
      name: "Taylor Brown"
      email: "taylor@example.com"
      role: "Viewer"
      permissions: {
<<<<<<< HEAD
<<<<<<< HEAD
        viewCandidates: true
        editCandidates: false
        createJobs: false
        manageTeam: false
        viewBilling: false
        manageBilling: false}}]
  const handlePermissionChange = (memberId: number, permission: string, value: boolean) => {
    // In a real app, this would make an API call to update permissions
    toast({
      title: "Permission updated"
      title: "Permission updated",
      description: `Permission ${permission} has been ${value ? "granted" : "revoked"}.`});
  };
      description: `Permission ${permission} has been ${value ? "granted" : "revoked"}.`})
  }
  const roleDescriptions: Record<string, string> = {
    "Admin": "Full access to all features and settings";
    "Recruiter": "Can manage candidates and job postings";
    "Manager": "Can view candidates and create jobs";
    "Viewer": "Read-only access to candidates"}
  },
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const roleDescriptions: Record<string string> = {
    "Admin": "Full access to all features and settings",
    "Recruiter": "Can manage candidates and job postings",
    "Manager": "Can view candidates and create jobs",
    "Viewer": "Read-only access to candidates"},

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
                  <Switch
                    checked={member.permissions.viewCandidates}
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
                  <Switch 
                    checked={member.permissions.viewBilling} 
                    onCheckedChange={(checked) =>
                      handlePermissionChange(member.id, "viewBilling", checked)
                    }
                  />
                </TableCell>
              </TableRow>
                  <Switch 
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
import { InfoIcon } from "lucide-react",;
import {;
  Tooltip,;
  TooltipContent,;
  TooltipProvider,;
  TooltipTrigger} from "@/components/ui/tooltip",;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function RoleManagement() {;
  // Mock team members data;
  const teamMembers = [;
    {;
      id: 1,;
      name: "Alex Johnson",;
<<<<<<< HEAD
<<<<<<< HEAD
      email: "alex@example.com",;
=======
      email: "alex@example && example.com",;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      email: "alex@example && example.com",;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
      email: "jamie@example.com",;
=======
      email: "jamie@example && example.com",;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      email: "jamie@example && example.com",;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
      email: "sam@example.com",;
=======
      email: "sam@example && example.com",;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      email: "sam@example && example.com",;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      title: "Permission updated",

=======

      title: "Permission updated",

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
export function RoleManagement() {;
  // Mock team members data;
  const teamMembers = [;
    {;
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        </div>;
      </div>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <option value="Admin">Admin</option>;
                    <option value="Recruiter">Recruiter</option>;
                    <option value="Manager">Manager</option>;
                    <option value="Viewer">Viewer</option>;
                  </select>;
                </TableCell>;
                <TableCell className="text-center">;
<<<<<<< HEAD
<<<<<<< HEAD
                  <Switch ;
                    checked={member.permissions.viewCandidates} ;
                    onCheckedChange={(checked) => ;
                      handlePermissionChange(member.id, "viewCandidates", checked);
                  <Switch;
                    checked={member.permissions.viewCandidates} ;
                    onCheckedChange={(checked) =>;
                      handlePermissionChange(member.id, "viewCandidates", checked);
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <Switch
                    checked={member && member.permissions.viewCandidates} 
                    onCheckedChange={(checked) => ;
                      handlePermissionChange(member && member.id, "viewCandidates", checked);
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    }
                  />;
                </TableCell>;
                <TableCell className="text-center">;
<<<<<<< HEAD
<<<<<<< HEAD
                  <Switch ;
                    checked={member.permissions.editCandidates} ;
                    onCheckedChange={(checked) => ;
                      handlePermissionChange(member.id, "editCandidates", checked);
                  <Switch;
                    checked={member.permissions.editCandidates} ;
                    onCheckedChange={(checked) =>;
                      handlePermissionChange(member.id, "editCandidates", checked);
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <Switch
                    checked={member && member.permissions.editCandidates} 
                    onCheckedChange={(checked) => ;
                      handlePermissionChange(member && member.id, "editCandidates", checked);
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    }
                  />;
                </TableCell>;
                <TableCell className="text-center">;
<<<<<<< HEAD
<<<<<<< HEAD
                  <Switch ;
                    checked={member.permissions.createJobs} ;
                    onCheckedChange={(checked) => ;
                      handlePermissionChange(member.id, "createJobs", checked);
                  <Switch;
                    checked={member.permissions.createJobs} ;
                    onCheckedChange={(checked) =>;
                      handlePermissionChange(member.id, "createJobs", checked);
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <Switch
                    checked={member && member.permissions.createJobs} 
                    onCheckedChange={(checked) => ;
                      handlePermissionChange(member && member.id, "createJobs", checked);
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    }
                  />;
                </TableCell>;
                <TableCell className="text-center">;
<<<<<<< HEAD
<<<<<<< HEAD
                  <Switch ;
                    checked={member.permissions.manageTeam} ;
                    onCheckedChange={(checked) => ;
                      handlePermissionChange(member.id, "manageTeam", checked);
                  <Switch;
                    checked={member.permissions.manageTeam} ;
                    onCheckedChange={(checked) =>;
                      handlePermissionChange(member.id, "manageTeam", checked);
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <Switch
                    checked={member && member.permissions.manageTeam} 
                    onCheckedChange={(checked) => ;
                      handlePermissionChange(member && member.id, "manageTeam", checked);
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    }
                  />;
                </TableCell>;
                <TableCell className="text-center">;
<<<<<<< HEAD
<<<<<<< HEAD
                  <Switch ;
                    checked={member.permissions.viewBilling} ;
                    onCheckedChange={(checked) => ;
                      handlePermissionChange(member.id, "viewBilling", checked);
                  <Switch;
                    checked={member.permissions.viewBilling} ;
                    onCheckedChange={(checked) =>;
                      handlePermissionChange(member.id, "viewBilling", checked);
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <Switch
                    checked={member && member.permissions.viewBilling} 
                    onCheckedChange={(checked) => ;
                      handlePermissionChange(member && member.id, "viewBilling", checked);

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    }
                  />;
                </TableCell>;
              </TableRow>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                  <Switch 
                    checked={member.permissions.viewBilling} 

<<<<<<< HEAD
            ))}

            ))}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            ))}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </TableBody>;
        </Table>;
      </div>;
    </div>;
<<<<<<< HEAD
=======
  );
}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
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
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
