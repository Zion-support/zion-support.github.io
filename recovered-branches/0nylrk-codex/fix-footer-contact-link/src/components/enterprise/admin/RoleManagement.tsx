
import React from "react";
import {_Table, _TableBody, _TableCell, _TableHead, _TableHeader, _TableRow} from "@/components/ui/table";
import {_Tooltip, _TooltipContent, _TooltipProvider, _TooltipTrigger} from "@/components/ui/tooltip";

export function RoleManagement() {_// Mock team members data
  const _teamMembers = [
    {
      id: 1, _name: "Alex Johnson", _email: "alex@example.com", _role: "Admin", _permissions: {
        viewCandidates: true, _editCandidates: true, _createJobs: true, _manageTeam: true, _viewBilling: true, _manageBilling: true}},
    {_id: 2, _name: "Jamie Smith", _email: "jamie@example.com", _role: "Recruiter", _permissions: {
        viewCandidates: true, _editCandidates: true, _createJobs: true, _manageTeam: false, _viewBilling: false, _manageBilling: false}},
    {_id: 3, _name: "Sam Williams", _email: "sam@example.com", _role: "Manager", _permissions: {
        viewCandidates: true, _editCandidates: false, _createJobs: true, _manageTeam: false, _viewBilling: true, _manageBilling: false}},
    {_id: 4, _name: "Taylor Brown", _email: "taylor@example.com", _role: "Viewer", _permissions: {
        viewCandidates: true, _editCandidates: false, _createJobs: false, _manageTeam: false, _viewBilling: false, _manageBilling: false}}];

  const _handlePermissionChange = (_memberId: number, _permission: string, _value: boolean) => {_// In a real app, _this would make an API call to update permissions
    toast({
      title: "Permission updated", _description: `Permission ${permission} has been ${_value ? "granted" : "revoked"}.`});
  };

  const roleDescriptions: Record<string, string> = {_"Admin": "Full access to all features and settings", _"Recruiter": "Can manage candidates and job postings", _"Manager": "Can view candidates and create jobs", _"Viewer": "Read-only access to candidates"};

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-medium mb-4">Role Permissions</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {_Object.entries(roleDescriptions).map(_([role, _description]) => (
            <div key={role} className="bg-card rounded-lg p-4 border border-border">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant={_role === "Admin" ? "default" : "outline"}>{_role}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">{_description}</p>
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
            {_teamMembers.map(_(member) => (_<TableRow key={member.id}>
                <TableCell>
                  <div className="font-medium">{_member.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {_member.email}
                  </div>
                </TableCell>
                <TableCell>
                  <select 
                    className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    defaultValue={_member.role}
                  >
                    <option value="Admin">Admin</option>
                    <option value="Recruiter">Recruiter</option>
                    <option value="Manager">Manager</option>
                    <option value="Viewer">Viewer</option>
                  </select>
                </TableCell>
                <TableCell className="text-center">
                  <Switch 
                    checked={_member.permissions.viewCandidates} 
                    onCheckedChange={_(checked) => 
                      handlePermissionChange(member.id, _"viewCandidates", _checked)}
                  />
                </TableCell>
                <TableCell className="text-center">
                  <Switch 
                    checked={_member.permissions.editCandidates} 
                    onCheckedChange={_(_checked) => 
                      handlePermissionChange(member.id, _"editCandidates", _checked)}
                  />
                </TableCell>
                <TableCell className="text-center">
                  <Switch 
                    checked={_member.permissions.createJobs} 
                    onCheckedChange={_(_checked) => 
                      handlePermissionChange(member.id, _"createJobs", _checked)}
                  />
                </TableCell>
                <TableCell className="text-center">
                  <Switch 
                    checked={_member.permissions.manageTeam} 
                    onCheckedChange={_(_checked) => 
                      handlePermissionChange(member.id, _"manageTeam", _checked)}
                  />
                </TableCell>
                <TableCell className="text-center">
                  <Switch 
                    checked={_member.permissions.viewBilling} 
                    onCheckedChange={_(_checked) => 
                      handlePermissionChange(member.id, _"viewBilling", _checked)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
