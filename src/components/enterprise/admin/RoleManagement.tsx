
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
=======
import React from &quot;react&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
<<<<<<< HEAD
  TableRow} from "@/components/ui/table",
import { Badge } from "@/components/ui/badge",
import { Switch } from "@/components/ui/switch",
import { toast } from "@/hooks/use-toast",
=======
  TableRow} from &quot;@/components/ui/table&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Switch } from &quot;@/components/ui/switch&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import { InfoIcon } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
<<<<<<< HEAD
  TooltipTrigger} from "@/components/ui/tooltip",
=======
  TooltipTrigger} from &quot;@/components/ui/tooltip&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

export function RoleManagement() {
  // Mock team members data
  const teamMembers = [
    {
      id: 1,
      name: &quot;Alex Johnson&quot;,
      email: &quot;alex@example.com&quot;,
      role: &quot;Admin&quot;,
      permissions: {
        viewCandidates: true,
        editCandidates: true,
        createJobs: true,
        manageTeam: true,
        viewBilling: true,
        manageBilling: true}},
    {
      id: 2,
      name: &quot;Jamie Smith&quot;,
      email: &quot;jamie@example.com&quot;,
      role: &quot;Recruiter&quot;,
      permissions: {
        viewCandidates: true,
        editCandidates: true,
        createJobs: true,
        manageTeam: false,
        viewBilling: false,
        manageBilling: false}},
    {
      id: 3,
      name: &quot;Sam Williams&quot;,
      email: &quot;sam@example.com&quot;,
      role: &quot;Manager&quot;,
      permissions: {
        viewCandidates: true,
        editCandidates: false,
        createJobs: true,
        manageTeam: false,
        viewBilling: true,
        manageBilling: false}},
    {
      id: 4,
      name: &quot;Taylor Brown&quot;,
      email: &quot;taylor@example.com&quot;,
      role: &quot;Viewer&quot;,
      permissions: {
        viewCandidates: true,
        editCandidates: false,
        createJobs: false,
        manageTeam: false,
        viewBilling: false,
        manageBilling: false}}],

  const handlePermissionChange = (_memberId: number, permission: string, value: boolean) => {
    // In a real app, this would make an API call to update permissions
    toast({
<<<<<<< HEAD
      title: "Permission updated",
      description: `Permission ${permission} has been ${value ? "granted" : "revoked"}.`})
  },

  const roleDescriptions: Record<string string> = {
    "Admin": "Full access to all features and settings",
    "Recruiter": "Can manage candidates and job postings",
    "Manager": "Can view candidates and create jobs",
    "Viewer": "Read-only access to candidates"},
=======
      title: &quot;Permission updated&quot;,
      description: `Permission ${permission} has been ${value ? &quot;granted&quot; : &quot;revoked&quot;}.`});
  };

  const roleDescriptions: Record<string, string> = {
    &quot;Admin&quot;: &quot;Full access to all features and settings&quot;,
    &quot;Recruiter&quot;: &quot;Can manage candidates and job postings&quot;,
    &quot;Manager&quot;: &quot;Can view candidates and create jobs&quot;,
    &quot;Viewer&quot;: &quot;Read-only access to candidates&quot;};
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  return (
    <div className=&quot;space-y-6&quot;>
      <div>
        <h3 className=&quot;text-xl font-medium mb-4&quot;>Role Permissions</h3>
        <div className=&quot;grid grid-cols-1 md:grid-cols-4 gap-4 mb-6&quot;>
          {Object.entries(roleDescriptions).map(([role, description]) => (
            <div key={role} className=&quot;bg-card rounded-lg p-4 border border-border&quot;>
              <div className=&quot;flex items-center gap-2 mb-2&quot;>
                <Badge variant={role === &quot;Admin&quot; ? &quot;default&quot; : &quot;outline&quot;}>{role}</Badge>
              </div>
              <p className=&quot;text-sm text-muted-foreground&quot;>{description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className=&quot;rounded-md border&quot;>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Team Member</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className=&quot;text-center&quot;>
                <div className=&quot;flex items-center justify-center gap-1&quot;>
                  View Candidates
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <InfoIcon className=&quot;h-4 w-4 text-muted-foreground&quot; />
                      </TooltipTrigger>
                      <TooltipContent>
                        Can view candidate profiles and applications
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </TableHead>
              <TableHead className=&quot;text-center&quot;>
                <div className=&quot;flex items-center justify-center gap-1&quot;>
                  Edit Candidates
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <InfoIcon className=&quot;h-4 w-4 text-muted-foreground&quot; />
                      </TooltipTrigger>
                      <TooltipContent>
                        Can edit candidate information and status
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </TableHead>
              <TableHead className=&quot;text-center&quot;>
                <div className=&quot;flex items-center justify-center gap-1&quot;>
                  Create Jobs
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <InfoIcon className=&quot;h-4 w-4 text-muted-foreground&quot; />
                      </TooltipTrigger>
                      <TooltipContent>
                        Can create and publish job listings
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </TableHead>
              <TableHead className=&quot;text-center&quot;>
                <div className=&quot;flex items-center justify-center gap-1&quot;>
                  Manage Team
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <InfoIcon className=&quot;h-4 w-4 text-muted-foreground&quot; />
                      </TooltipTrigger>
                      <TooltipContent>
                        Can add, edit, and remove team members
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </TableHead>
              <TableHead className=&quot;text-center&quot;>
                <div className=&quot;flex items-center justify-center gap-1&quot;>
                  Billing Access
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <InfoIcon className=&quot;h-4 w-4 text-muted-foreground&quot; />
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
                  <div className=&quot;font-medium&quot;>{member.name}</div>
                  <div className=&quot;text-sm text-muted-foreground&quot;>
                    {member.email}
                  </div>
                </TableCell>
                <TableCell>
                  <select 
                    className=&quot;w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring&quot;
                    defaultValue={member.role}
                  >
                    <option value=&quot;Admin&quot;>Admin</option>
                    <option value=&quot;Recruiter&quot;>Recruiter</option>
                    <option value=&quot;Manager&quot;>Manager</option>
                    <option value=&quot;Viewer&quot;>Viewer</option>
                  </select>
                </TableCell>
                <TableCell className=&quot;text-center&quot;>
                  <Switch
                    aria-label=&quot;View candidates&quot;
                    checked={member.permissions.viewCandidates}
                    onCheckedChange={(checked) =>
                      handlePermissionChange(member.id, &quot;viewCandidates&quot;, checked)
                    }
                  />
                </TableCell>
                <TableCell className=&quot;text-center&quot;>
                  <Switch
                    aria-label=&quot;Edit candidates&quot;
                    checked={member.permissions.editCandidates}
                    onCheckedChange={(checked) =>
                      handlePermissionChange(member.id, &quot;editCandidates&quot;, checked)
                    }
                  />
                </TableCell>
                <TableCell className=&quot;text-center&quot;>
                  <Switch
                    aria-label=&quot;Create jobs&quot;
                    checked={member.permissions.createJobs}
                    onCheckedChange={(checked) =>
                      handlePermissionChange(member.id, &quot;createJobs&quot;, checked)
                    }
                  />
                </TableCell>
                <TableCell className=&quot;text-center&quot;>
                  <Switch
                    aria-label=&quot;Manage team&quot;
                    checked={member.permissions.manageTeam}
                    onCheckedChange={(checked) =>
                      handlePermissionChange(member.id, &quot;manageTeam&quot;, checked)
                    }
                  />
                </TableCell>
                <TableCell className=&quot;text-center&quot;>
                  <Switch
                    aria-label=&quot;View billing&quot;
                    checked={member.permissions.viewBilling}
                    onCheckedChange={(checked) =>
                      handlePermissionChange(member.id, &quot;viewBilling&quot;, checked)
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
                    onCheckedChange={(checked) =>;
                      handlePermissionChange(member.id, "viewBilling", checked);
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
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
}
;