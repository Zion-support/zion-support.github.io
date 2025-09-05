
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
import { InfoIcon } from "lucide-react",
=======
  TableRow} from &quot;@/components/ui/table&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Switch } from &quot;@/components/ui/switch&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;
import { InfoIcon } from &quot;lucide-react&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
<<<<<<< HEAD
  TooltipTrigger} from "@/components/ui/tooltip",
=======
  TooltipTrigger} from &quot;@/components/ui/tooltip&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
import React from "react";
import {_Table, _TableBody, _TableCell, _TableHead, _TableHeader, _TableRow} from "@/components/ui/table";
import {_Tooltip, _TooltipContent, _TooltipProvider, _TooltipTrigger} from "@/components/ui/tooltip";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export function RoleManagement() {_// Mock team members data
  const _teamMembers = [
    {
<<<<<<< HEAD
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
=======
      id: 1, _name: "Alex Johnson", _email: "alex@example.com", _role: "Admin", _permissions: {
        viewCandidates: true, _editCandidates: true, _createJobs: true, _manageTeam: true, _viewBilling: true, _manageBilling: true}},
    {_id: 2, _name: "Jamie Smith", _email: "jamie@example.com", _role: "Recruiter", _permissions: {
        viewCandidates: true, _editCandidates: true, _createJobs: true, _manageTeam: false, _viewBilling: false, _manageBilling: false}},
    {_id: 3, _name: "Sam Williams", _email: "sam@example.com", _role: "Manager", _permissions: {
        viewCandidates: true, _editCandidates: false, _createJobs: true, _manageTeam: false, _viewBilling: true, _manageBilling: false}},
    {_id: 4, _name: "Taylor Brown", _email: "taylor@example.com", _role: "Viewer", _permissions: {
        viewCandidates: true, _editCandidates: false, _createJobs: false, _manageTeam: false, _viewBilling: false, _manageBilling: false}}];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _handlePermissionChange = (_memberId: number, _permission: string, _value: boolean) => {_// In a real app, _this would make an API call to update permissions
    toast({
<<<<<<< HEAD
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
=======
      title: "Permission updated", _description: `Permission ${permission} has been ${_value ? "granted" : "revoked"}.`});
  };

  const roleDescriptions: Record<string, string> = {_"Admin": "Full access to all features and settings", _"Recruiter": "Can manage candidates and job postings", _"Manager": "Can view candidates and create jobs", _"Viewer": "Read-only access to candidates"};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <div className=&quot;space-y-6&quot;>
      <div>
<<<<<<< HEAD
        <h3 className=&quot;text-xl font-medium mb-4&quot;>Role Permissions</h3>
        <div className=&quot;grid grid-cols-1 md:grid-cols-4 gap-4 mb-6&quot;>
          {Object.entries(roleDescriptions).map(([role, description]) => (
            <div key={role} className=&quot;bg-card rounded-lg p-4 border border-border&quot;>
              <div className=&quot;flex items-center gap-2 mb-2&quot;>
                <Badge variant={role === &quot;Admin&quot; ? &quot;default&quot; : &quot;outline&quot;}>{role}</Badge>
              </div>
              <p className=&quot;text-sm text-muted-foreground&quot;>{description}</p>
=======
        <h3 className="text-xl font-medium mb-4">Role Permissions</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {_Object.entries(roleDescriptions).map(_([role, _description]) => (
            <div key={role} className="bg-card rounded-lg p-4 border border-border">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant={_role === "Admin" ? "default" : "outline"}>{_role}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">{_description}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
            {_teamMembers.map(_(member) => (_<TableRow key={member.id}>
                <TableCell>
<<<<<<< HEAD
                  <div className=&quot;font-medium&quot;>{member.name}</div>
                  <div className=&quot;text-sm text-muted-foreground&quot;>
                    {member.email}
=======
                  <div className="font-medium">{_member.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {_member.email}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </div>
                </TableCell>
                <TableCell>
                  <select 
<<<<<<< HEAD
                    className=&quot;w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring&quot;
                    defaultValue={member.role}
=======
                    className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    defaultValue={_member.role}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  >
                    <option value=&quot;Admin&quot;>Admin</option>
                    <option value=&quot;Recruiter&quot;>Recruiter</option>
                    <option value=&quot;Manager&quot;>Manager</option>
                    <option value=&quot;Viewer&quot;>Viewer</option>
                  </select>
                </TableCell>
                <TableCell className=&quot;text-center&quot;>
                  <Switch 
<<<<<<< HEAD
                    checked={member.permissions.viewCandidates} 
                    onCheckedChange={(checked) => 
                      handlePermissionChange(member.id, &quot;viewCandidates&quot;, checked)
                    }
=======
                    checked={_member.permissions.viewCandidates} 
                    onCheckedChange={_(checked) => 
                      handlePermissionChange(member.id, _"viewCandidates", _checked)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  />
                </TableCell>
                <TableCell className=&quot;text-center&quot;>
                  <Switch 
<<<<<<< HEAD
                    checked={member.permissions.editCandidates} 
                    onCheckedChange={(checked) => 
                      handlePermissionChange(member.id, &quot;editCandidates&quot;, checked)
                    }
=======
                    checked={_member.permissions.editCandidates} 
                    onCheckedChange={_(_checked) => 
                      handlePermissionChange(member.id, _"editCandidates", _checked)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  />
                </TableCell>
                <TableCell className=&quot;text-center&quot;>
                  <Switch 
<<<<<<< HEAD
                    checked={member.permissions.createJobs} 
                    onCheckedChange={(checked) => 
                      handlePermissionChange(member.id, &quot;createJobs&quot;, checked)
                    }
=======
                    checked={_member.permissions.createJobs} 
                    onCheckedChange={_(_checked) => 
                      handlePermissionChange(member.id, _"createJobs", _checked)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  />
                </TableCell>
                <TableCell className=&quot;text-center&quot;>
                  <Switch 
<<<<<<< HEAD
                    checked={member.permissions.manageTeam} 
                    onCheckedChange={(checked) => 
                      handlePermissionChange(member.id, &quot;manageTeam&quot;, checked)
                    }
=======
                    checked={_member.permissions.manageTeam} 
                    onCheckedChange={_(_checked) => 
                      handlePermissionChange(member.id, _"manageTeam", _checked)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  />
                </TableCell>
                <TableCell className=&quot;text-center&quot;>
                  <Switch 
<<<<<<< HEAD
                    checked={member.permissions.viewBilling} 
                    onCheckedChange={(checked) => 
                      handlePermissionChange(member.id, &quot;viewBilling&quot;, checked)
                    }
=======
                    checked={_member.permissions.viewBilling} 
                    onCheckedChange={_(_checked) => 
                      handlePermissionChange(member.id, _"viewBilling", _checked)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
