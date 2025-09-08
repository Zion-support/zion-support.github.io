
import React from "react",
import {}


  Table,
  TableBody,
  TableCell,
  TableHead,












    {





        manageBilling: true}},;
    {;
      id: 2,;"
      name: "Jamie Smith",;



      id: 3,;"
      name: "Sam Williams",;



      id: 4,;"
      name: "Taylor Brown",;



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

      email: "taylor@example.com",;

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




