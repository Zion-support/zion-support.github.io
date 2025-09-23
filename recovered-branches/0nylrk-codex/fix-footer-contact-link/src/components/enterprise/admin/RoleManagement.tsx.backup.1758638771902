
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
<<<<<<< HEAD
  TableRow} from "@/components/ui/table";
=======
  TableRow,
} from "@/components/ui/table";
>>>>>>> origin/auto/autonomy-17186719616
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/hooks/use-toast";
import { InfoIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
<<<<<<< HEAD
  TooltipTrigger} from "@/components/ui/tooltip";
=======
  TooltipTrigger,
} from "@/components/ui/tooltip";
>>>>>>> origin/auto/autonomy-17186719616

export function RoleManagement() {
  // Mock team members data
  const teamMembers = [
    {
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
<<<<<<< HEAD
        manageBilling: true}},
=======
        manageBilling: true,
      },
    },
>>>>>>> origin/auto/autonomy-17186719616
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
<<<<<<< HEAD
        manageBilling: false}},
=======
        manageBilling: false,
      },
    },
>>>>>>> origin/auto/autonomy-17186719616
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
<<<<<<< HEAD
        manageBilling: false}},
=======
        manageBilling: false,
      },
    },
>>>>>>> origin/auto/autonomy-17186719616
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
        manageBilling: false}}];

  const handlePermissionChange = (memberId: numberpermission: stringvalue: boolean) => {
    // In a real appthis would make an API call to update permissions
    toast({
      title: "Permission updated",
      description: `Permission ${permission} has been ${value ? "granted" : "revoked"}.`});
  };

  const roleDescriptions: Record<string> = {
    "Admin": "Full access to all features and settings",
    "Recruiter": "Can manage candidates and job postings",
    "Manager": "Can view candidates and create jobs",
    "Viewer": "Read-only access to candidates"};
=======
        manageBilling: false,
      },
    },
  ];

  const handlePermissionChange = (memberId: number, permission: string, value: boolean) => {
    // In a real app, this would make an API call to update permissions
    toast({
      title: "Permission updated",
      description: `Permission ${permission} has been ${value ? "granted" : "revoked"}.`,
    });
  };

  const roleDescriptions: Record<string, string> = {
    "Admin": "Full access to all features and settings",
    "Recruiter": "Can manage candidates and job postings",
    "Manager": "Can view candidates and create jobs",
    "Viewer": "Read-only access to candidates",
  };
>>>>>>> origin/auto/autonomy-17186719616

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-medium mb-4">Role Permissions</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
<<<<<<< HEAD
          {Object.entries(roleDescriptions).map(([roledescription]) => (
=======
          {Object.entries(roleDescriptions).map(([role, description]) => (
>>>>>>> origin/auto/autonomy-17186719616
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
<<<<<<< HEAD
                        Can addeditand remove team members
=======
                        Can add, edit, and remove team members
>>>>>>> origin/auto/autonomy-17186719616
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
<<<<<<< HEAD
                      handlePermissionChange(member.id"viewCandidates"checked)
=======
                      handlePermissionChange(member.id, "viewCandidates", checked)
>>>>>>> origin/auto/autonomy-17186719616
                    }
                  />
                </TableCell>
                <TableCell className="text-center">
                  <Switch 
                    checked={member.permissions.editCandidates} 
                    onCheckedChange={(checked) => 
<<<<<<< HEAD
                      handlePermissionChange(member.id"editCandidates"checked)
=======
                      handlePermissionChange(member.id, "editCandidates", checked)
>>>>>>> origin/auto/autonomy-17186719616
                    }
                  />
                </TableCell>
                <TableCell className="text-center">
                  <Switch 
                    checked={member.permissions.createJobs} 
                    onCheckedChange={(checked) => 
<<<<<<< HEAD
                      handlePermissionChange(member.id"createJobs"checked)
=======
                      handlePermissionChange(member.id, "createJobs", checked)
>>>>>>> origin/auto/autonomy-17186719616
                    }
                  />
                </TableCell>
                <TableCell className="text-center">
                  <Switch 
                    checked={member.permissions.manageTeam} 
                    onCheckedChange={(checked) => 
<<<<<<< HEAD
                      handlePermissionChange(member.id"manageTeam"checked)
=======
                      handlePermissionChange(member.id, "manageTeam", checked)
>>>>>>> origin/auto/autonomy-17186719616
                    }
                  />
                </TableCell>
                <TableCell className="text-center">
                  <Switch 
                    checked={member.permissions.viewBilling} 
                    onCheckedChange={(checked) => 
<<<<<<< HEAD
                      handlePermissionChange(member.id"viewBilling"checked)
=======
                      handlePermissionChange(member.id, "viewBilling", checked)
>>>>>>> origin/auto/autonomy-17186719616
                    }
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
