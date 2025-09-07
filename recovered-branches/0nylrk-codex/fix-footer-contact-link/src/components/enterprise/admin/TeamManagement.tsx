


import {
  // TODO: Implement
}
  Table;
  TableBody;
  TableCell;
  TableHead;
  TableHeader;
  TableRow} from "@/components/ui/table","
  // TODO: Implement
  Dialog;
  DialogContent;
  DialogDescription;
  DialogFooter;
  DialogHeader;
  DialogTitle;"
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";""
import {Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";""
import {Button} from "@/components/ui/button";""
import {Input} from "@/components/ui/input";""
import {Label} from "@/components/ui/label";""
import {Badge} from "@/components/ui/badge";""
import {PlusCircle, Trash, Mail, UserPlus} from "lucide-react";""
import {toast} from "@/hooks/use-toast";"
export function TeamManagement() {;
  const [isAddingMember, setIsAddingMember] = useState(false);"
  const [newMemberEmail, setNewMemberEmail] = useState("");""
import React, { useState } from "react","
  // TODO: Implement
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,"
  // TODO: Implement
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
"
  DialogTrigger} from "@/components/ui/dialog",""
import { Button } from "@/components/ui/button",""
import { Input } from "@/components/ui/input",""
import { Label } from "@/components/ui/label",""
import { Badge } from "@/components/ui/badge",""
import { PlusCircle, Trash, Mail, UserPlus } from "lucide-react",""
import { toast } from "@/hooks/use-toast","
export function TeamManagement() {
  const [isAddingMember, setIsAddingMember] = useState(false),"
  const [newMemberEmail, setNewMemberEmail] = useState(""),"
  // Mock team members data;
  const teamMembers = [
    {
      id: 1;,"
  name: "Alex Johnson"""
      email: "alex@example.com"","
  role: "Admin"""
      status: "active"","
  lastActive: "2 hours ago"}"
      id: 2;,"
  name: "Jamie Smith"""
      email: "jamie@example.com"","
  role: "Recruiter"""
  lastActive: "Yesterday"}"
      id: 3;,"
  name: "Sam Williams"""
      email: "sam@example.com"","
  role: "Manager"""
      status: "pending"","
  lastActive: "Never"}"
      id: 4;,"
  name: "Taylor Brown"""
      email: "taylor@example.com"","
  role: "Viewer"""
      status: "active"",]"
  lastActive: "3 days ago"}]"
  const handleAddMember = () => {
    // In a real app, this would make an API call to add the member;
    if (!newMemberEmail) {
      toast({"
        title: "Email required"","
  description: "Please enter an email address for the new team member."")"
        variant: "destructive"})"
      return;
    toast({

      title: "Invitation sent",")
      description: `An invitation has been sent to ${newMemberEmail}`}),
    setNewMemberEmail(""),"
    setIsAddingMember(false)
  },



  const handleRemoveMember = (memberId: number) => {
    // In a real app, this would make an API call to remove the member;
      title: "Team member removed"",)"
  description: "The team member has been removed from your workspace."})"



  const handleResendInvite = (memberEmail: string) => {
    // In a real app, this would make an API call to resend the invitation;
      title: "Invitation resent"",)`;
  description: `A new invitation has been sent to ${memberEmail}`})
  const [newMemberEmail, setNewMemberEmail] = useState("");"
  // Mock team members data;
  const teamMembers = [;
    {;
      id: 1,;"
      name: "Alex Johnson",;""
      email: "alex@example && example.com",;""
      role: "Admin",;""
      status: "active",;""
      lastActive: "2 hours ago"},;"
      id: 2,;"
      name: "Jamie Smith",;""
      email: "jamie@example && example.com",;""
      role: "Recruiter",;""
      lastActive: "Yesterday"},;"
      id: 3,;"
      name: "Sam Williams",;""
      email: "sam@example && example.com",;""
      role: "Manager",;""
      status: "pending",;""
      lastActive: "Never"},;"
      id: 4,;"
      name: "Taylor Brown",;""
      email: "taylor@example && example.com",;""
      role: "Viewer",;""
      status: "active",;"]"
      lastActive: "3 days ago"}],;"
  const handleAddMember = () => {;
    // In a real app, this would make an API call to add the member;
    if (!newMemberEmail) {;
      toast({;"
        title: "Email required",;""
        description: "Please enter an email address for the new team member.",;")"
        variant: "destructive"}),;"

      title: "Invitation sent",;")`;
      description: `An invitation has been sent to ${newMemberEmail}`}),;
    setNewMemberEmail("");"
    setIsAddingMember(false);
  };

  const handleRemoveMember = (memberId: number) => {;
    // In a real app, this would make an API call to remove the member;
      title: "Team member removed",;")"
      description: "The team member has been removed from your workspace."});"

  const handleResendInvite = (memberEmail: string) => {;
    // In a real app, this would make an API call to resend the invitation;
      title: "Invitation resent",;")`;
      description: `A new invitation has been sent to ${memberEmail}`});


  return ("
    <div className="space-y-6">;"
</div>"
      <div className="flex items-center justify-between">;"
        <h3 className="text-xl font-medium">Team Members</h3>;"
        <Dialog open={isAddingMember} onOpenChange={setIsAddingMember}>;

          <DialogTrigger asChild>;
            <Button className="gap-2">;"
              <UserPlus className="h-4 w-4" />;"
    <div className="space - y-6">;"
      <div className="flex items - center justify - between">;"
        <h3 className="text - xl font - medium">Team Members</h3>;"

          <DialogTrigger as_child>;
            <Button className="gap - 2">;"
              <UserPlus className="h - 4 w - 4" />;"

            ;
          <DialogContent>;

            <DialogHeader>;

              <DialogDescription>;

                      </span>
                    </div>
                    <div>
                      <div className="font-medium">{member.name}</div>""
                      <div className="text-sm text-muted-foreground">"
                
                <TableCell>{member.role}
                <TableCell>

                  <Badge;"
                    variant={member.status === "active" ? "default" : "outline"}"
                  >

                  
                
                <TableCell>{member.lastActive}"
                <TableCell className="text-right">"
                  <div className="flex justify-end gap-2">"
                      <Button;"
                        variant="ghost"""
                        size="sm"")
                        onClick={() => handleResendInvite(member.email)}
                        <Mail className="h-4 w-4 mr-1" />"

                      
                        size="sm"""
                        className="text-destructive hover:text-destructive"""
import React, { useState } from "react",;"
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;"
  TableRow} from "@/components/ui/table",;"
  Dialog,;
  DialogContent,;
  DialogDescription,;
  DialogFooter,;
  DialogHeader,;
  DialogTitle,;"
  DialogTrigger} from "@/components/ui/dialog",;""
import { Button } from "@/components/ui/button",;""
import { Input } from "@/components/ui/input",;""
import { Label } from "@/components/ui/label",;""
import { Badge } from "@/components/ui/badge",;""
import { PlusCircle, Trash, Mail, UserPlus } from "lucide-react",;""
import { toast } from "@/hooks/use-toast",;"
  const [isAddingMember, setIsAddingMember] = useState(false),;"
  const [newMemberEmail, setNewMemberEmail] = useState(""),;"
  // Mock team members data;
      email: "alex@example.com",;""
      email: "jamie@example.com",;""
      email: "sam@example.com",;""
      email: "taylor@example.com",;""




              <DialogTitle>Add Team Member;

            ;"
            <div className="grid gap-4 py-4">;"
              <div className="grid grid-cols-4 items-center gap-4">;"
                <Label htmlFor="email" className="text-right">;"

                <Input;"
                  id="email";""
                  type="email";""
                  placeholder="colleague@company.com";""
                  className="col - span - 3";"
                  value={newMemberEmail}
                  on_change={(e) => setNewMemberEmail (e.target.value)}

              </div>;"
              <div className="grid grid - cols - 4 items - center gap - 4">;"
                <Label html_for="role" className="text - right">;"

                <select;"
                  id="role";""
                  className="col - span - 3 flex h - 10 w - full rounded - md border border - input bg - background px - 3 py - 2 text - sm ring - offset - background file:border - 0 file:bg - transparent file:text - sm file:font - medium placeholder:text - muted - foreground focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - ring focus - visible:ring - offset - 2 disabled:cursor - not - allowed disabled:opacity - 50";"
                >;
</select>
                  <option value="admin">Admin</option>;""
                  <option value="recruiter">Recruiter</option>;""
                  <option value="manager">Manager</option>;""
                  <option value="viewer">Viewer</option>;"
                </select>;
              </div>;
            <DialogFooter>;

              <Button variant="outline" on_click={() => setIsAddingMember (false)}>;"

              <Button on_click={handleAddMember}>Send Invitation;
      <div className="rounded - md border">;"
        <Table>;

          <TableHeader>;

            <TableRow>;

              <TableHead > Name;
              <TableHead > Role;
              <TableHead > Status;
              <TableHead > Last Active;"
              <TableHead className="text - right">Actions;"
          <TableBody>;

              <TableRow key={member.id}>;

                <TableCell>;
                  <div className="flex items - center gap - 2">;"
                    <div className="h - 8 w - 8 rounded - full bg - muted flex items - center justify - center">;"
                      <span className="text - sm font - medium">;"
                      </span>;
                    <div>;
                      <div className="font - medium">{member.name}</div>;""
                      <div className="text - sm text - muted - foreground">;"
                <TableCell>{member.role};



                    variant={member.status === "active" ? "default" :"outline"}"

                <TableCell>{member.last_active};"
                <TableCell className="text - right">;"
                  <div className="flex justify - end gap - 2">;"
                        variant="ghost";""
                        size="sm";""
                        className="text-destructive hover:text-destructive";"
                        onClick={() => handleRemoveMember(member.id)}
                        <Trash className="h-4 w-4" />"

                      
                
              
          
        
                <TableCell>{member.lastActive};"
                <TableCell className="text-right">;"
                  <div className="flex justify-end gap-2">;"
                        size="sm";"
                        <Mail className="h-4 w-4 mr-1" />;"

                        <Trash className="h-4 w-4" />;"

                      ;                    )}
}>Send Invitation    </div> <div className=" rounded-md border"> <Table> <TableHeader> <TableRow> <TableHead>Name <TableHead>Role <TableHead>Status <TableHead>Last Active <TableHead className=" text-right">Actions   <TableBody> {"
  teamMembers.map ( (member) => (<TableRow key= {
  member.id;)"
}> <TableCell> .join ("")"

}</span> </div> <div> </div> </div> </div>  <TableCell> {
  member.role;
} <TableCell> <Badge > {

}  <TableCell> {
} <TableCell className="text-right"> onClick= {"
}> <Mail className="h-4 w-4 mr-1"/> Resend  className="text-destructive hover:text-destructive"onClick= {"
}> <Trash className="h-4 w-4" /> )"

}</div>  ) ) 
}  </div> </div>) "`;