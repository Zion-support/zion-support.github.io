
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useState } from "react";
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import {
  Table;
  TableBody;
  TableCell;
  TableHead;
  TableHeader;
  TableRow} from "@/components/ui/table",
import {
  Dialog;
  DialogContent;
  DialogDescription;
  DialogFooter;
  DialogHeader;
  DialogTitle;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Badge} from "@/components/ui/badge";
import {PlusCircle, Trash, Mail, UserPlus} from "lucide-react";
import {toast} from "@/hooks/use-toast";
export function TeamManagement() {;
  const [isAddingMember, setIsAddingMember] = useState(false);
  const [newMemberEmail, setNewMemberEmail] = useState("");
<<<<<<< HEAD
=======

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useState } from "react",
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow} from "@/components/ui/table",
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  DialogTrigger} from "@/components/ui/dialog",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Label } from "@/components/ui/label",
import { Badge } from "@/components/ui/badge",

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
<<<<<<< HEAD

<<<<<<< HEAD
=======
import { PlusCircle, Trash, Mail, UserPlus } from "lucide-react";
import { toast } from "@/hooks/use-toast";
export function TeamManagement() {
  const [isAddingMember, setIsAddingMember] = useState(false);
  const [newMemberEmail, setNewMemberEmail] = useState("");
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { PlusCircle, Trash, Mail, UserPlus } from "lucide-react",
import { toast } from "@/hooks/use-toast",
export function TeamManagement() {
  const [isAddingMember, setIsAddingMember] = useState(false),
  const [newMemberEmail, setNewMemberEmail] = useState(""),


<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  // Mock team members data

  const teamMembers = [
    {
      id: 1
      name: "Alex Johnson"
      email: "alex@example.com"
      role: "Admin"
      status: "active"
      lastActive: "2 hours ago"}
    {
      id: 2
      name: "Jamie Smith"
      email: "jamie@example.com"
      role: "Recruiter"
      status: "active"
      lastActive: "Yesterday"}
    {
      id: 3
      name: "Sam Williams"
      email: "sam@example.com"
      role: "Manager"
      status: "pending"
      lastActive: "Never"}
    {
      id: 4
      name: "Taylor Brown"
      email: "taylor@example.com"
      role: "Viewer"
      status: "active"
      lastActive: "3 days ago"}]
  const handleAddMember = () => {
    // In a real app, this would make an API call to add the member
    if (!newMemberEmail) {
      toast({
        title: "Email required"
        description: "Please enter an email address for the new team member."
        variant: "destructive"})
      return
    }
    toast({
<<<<<<< HEAD
=======
<<<<<<< HEAD


<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      title: "Invitation sent"
      description: `An invitation has been sent to ${newMemberEmail}`})
    setNewMemberEmail("");
    setIsAddingMember(false)
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      title: "Invitation sent",
      description: `An invitation has been sent to ${newMemberEmail}`}),

    setNewMemberEmail(""),
    setIsAddingMember(false)
  },
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const handleRemoveMember = (memberId: number) => {
    // In a real app, this would make an API call to remove the member
    toast({
      title: "Team member removed"
      description: "The team member has been removed from your workspace."})
<<<<<<< HEAD
=======
<<<<<<< HEAD


  },



<<<<<<< HEAD
=======
  }
  },
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const handleResendInvite = (memberEmail: string) => {
    // In a real app, this would make an API call to resend the invitation
    toast({
      title: "Invitation resent"
      description: `A new invitation has been sent to ${memberEmail}`})
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Badge} from "@/components/ui/badge";
import {PlusCircle, Trash, Mail, UserPlus} from "lucide-react";
import {toast} from "@/hooks/use-toast";
export function TeamManagement() {;
  const [isAddingMember, setIsAddingMember] = useState(false);
  const [newMemberEmail, setNewMemberEmail] = useState("");

  // Mock team members data;
  const teamMembers = [;
    {;
      id: 1,;
      name: "Alex Johnson",;
      email: "alex@example && example.com",;
      role: "Admin",;
      status: "active",;
      lastActive: "2 hours ago"},;
    {;
      id: 2,;
      name: "Jamie Smith",;
      email: "jamie@example && example.com",;
      role: "Recruiter",;
      status: "active",;
      lastActive: "Yesterday"},;
    {;
      id: 3,;
      name: "Sam Williams",;
      email: "sam@example && example.com",;
      role: "Manager",;
      status: "pending",;
      lastActive: "Never"},;
    {;
      id: 4,;
      name: "Taylor Brown",;
      email: "taylor@example && example.com",;
      role: "Viewer",;
      status: "active",;
      lastActive: "3 days ago"}],;

  const handleAddMember = () => {;
    // In a real app, this would make an API call to add the member;
    if (!newMemberEmail) {;
      toast({;
        title: "Email required",;
        description: "Please enter an email address for the new team member.",;
        variant: "destructive"}),;
      return;
    }

    toast({;
      title: "Invitation sent",;
      description: `An invitation has been sent to ${newMemberEmail}`}),;

    setNewMemberEmail("");
    setIsAddingMember(false);
  };

  const handleRemoveMember = (memberId: number) => {;
    // In a real app, this would make an API call to remove the member;
    toast({;
      title: "Team member removed",;
      description: "The team member has been removed from your workspace."});
  };

  const handleResendInvite = (memberEmail: string) => {;
    // In a real app, this would make an API call to resend the invitation;
    toast({;
      title: "Invitation resent",;
      description: `A new invitation has been sent to ${memberEmail}`});
  };

=======

  },
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  return (
    <div className="space-y-6">;
      <div className="flex items-center justify-between">;
        <h3 className="text-xl font-medium">Team Members</h3>;
        <Dialog open={isAddingMember} onOpenChange={setIsAddingMember}>;
          <DialogTrigger asChild>;
            <Button className="gap-2">;
              <UserPlus className="h-4 w-4" />;
import React, { useState } from './react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components / ui / table';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components / ui / dialog';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
import { Label } from '@/components / ui / label';
import { Badge } from '@/components / ui / badge';
import { PlusCircle, Trash, Mail, UserPlus } from './lucide-react';
import { toast } from '@/hooks / use - toast';
export /**
 * TeamManagement - Function description
 */
function TeamManagement() {
  const [isAddingMember, setIsAddingMember] = useState (false);
  const [newMemberEmail, setNewMemberEmail] = useState ("");
;
  // Mock team members data;
  const team_members = [;
    {
      id: 1,
      name: "Alex Johnson",
      email: "alex@example.com",
      role: "Admin",
      status: "active",
      last_active: "2 hours ago"},
    {
      id: 2,
      name: "Jamie Smith",
      email: "jamie@example.com",
      role: "Recruiter",
      status: "active",
      last_active: "Yesterday"},
    {
      id: 3,
      name: "Sam Williams",
      email: "sam@example.com",
      role: "Manager",
      status: "pending",
      last_active: "Never"},
    {
      id: 4,
      name: "Taylor Brown",
      email: "taylor@example.com",
      role: "Viewer",
      status: "active",
      last_active: "3 days ago"}],
  const handleAddMember = () =>: any {
    // In a real app, this would make an API call to add the member;
    // Check condition
if ( {) {
  $2
}
      toast ({
        title: "Email required",
        description: "Please enter an email address for the new team member.",
        variant: "destructive"}),
      return;
    }
    toast ({
      title: "Invitation sent",
      description: `An invitation has been sent to ${newMemberEmail}`}),
    setNewMemberEmail ("");
    setIsAddingMember (false);
  }
;
  const handleRemoveMember = (member_id: number) =>: any {
    // In a real app, this would make an API call to remove the member;
    toast ({
      title: "Team member removed",
      description: "The team member has been removed from your workspace."});
  }
;
  const handleResendInvite = (member_email: string) =>: any {
    // In a real app, this would make an API call to resend the invitation;
    toast ({
      title: "Invitation resent",
      description: `A new invitation has been sent to ${member_email}`});
  }
;
  return (
    <div className="space - y-6">;
      <div className="flex items - center justify - between">;
        <h3 className="text - xl font - medium">Team Members</h3>;
        <Dialog open={isAddingMember} onOpenChange={setIsAddingMember}>;
          <DialogTrigger as_child>;
            <Button className="gap - 2">;
              <UserPlus className="h - 4 w - 4" />;
              Add Team Member;
            </Button>;
          </DialogTrigger>;
          <DialogContent>;
            <DialogHeader>;
              <DialogDescription>;
                Send an invitation to join your workspace. They'll receive an email with instructions.;
              </DialogDescription>;
            </DialogHeader>;
<<<<<<< HEAD

                  className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">;
=======
            <div className="grid gap - 4 py - 4">;
              <div className="grid grid - cols - 4 items - center gap - 4">;
                <Label html_for="email" className="text - right">;
=======
=======


import React, { useState } from "react",;
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
  TableRow} from "@/components/ui/table",;
import {;
  Dialog,;
  DialogContent,;
  DialogDescription,;
  DialogFooter,;
  DialogHeader,;
  DialogTitle,;
  DialogTrigger} from "@/components/ui/dialog",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Label } from "@/components/ui/label",;
import { Badge } from "@/components/ui/badge",;
import { PlusCircle, Trash, Mail, UserPlus } from "lucide-react",;
import { toast } from "@/hooks/use-toast",;
;
export function TeamManagement() {;
  const [isAddingMember, setIsAddingMember] = useState(false),;
  const [newMemberEmail, setNewMemberEmail] = useState(""),;
;
  // Mock team members data;
  const teamMembers = [;
    {;
      id:1,;
      name:"Alex Johnson",;
      email:"alex@example.com",;
      role:"Admin",;
      status:"active",;
      lastActive:"2 hours ago"},;
    {;
      id:2,;
      name:"Jamie Smith",;
      email:"jamie@example.com",;
      role:"Recruiter",;
      status:"active",;
      lastActive:"Yesterday"},;
    {;
      id:3,;
      name:"Sam Williams",;
      email:"sam@example.com",;
      role:"Manager",;
      status:"pending",;
      lastActive:"Never"},;
    {;
      id:4,;
      name:"Taylor Brown",;
      email:"taylor@example.com",;
      role:"Viewer",;
      status:"active",;
      lastActive:"3 days ago"}],;
;
  const handleAddMember = () => {;
    // In a real app, this would make an API call to add the member;
    if (!newMemberEmail) {;
      toast({;

  },


  return (
        title:"Email required",;
        description:"Please enter an email address for the new team member.",;
        variant:"destructive"}),;
      return,;
    }
;
    toast({;
      title:"Invitation sent",;
      description:`An invitation has been sent to ${newMemberEmail}`}),;
;
    setNewMemberEmail(""),;
    setIsAddingMember(false),;
  },;
;
  const handleRemoveMember = (memberId:number) => {;
    // In a real app, this would make an API call to remove the member;
    toast({;
      title:"Team member removed",;
      description:"The team member has been removed from your workspace."}),;
  },;
;
  const handleResendInvite = (memberEmail:string) => {;
    // In a real app, this would make an API call to resend the invitation;
    toast({;
      title:"Invitation resent",;
      description:`A new invitation has been sent to ${memberEmail}`}),;
  },;
;
  return (;
    <div className="space-y-6">;
      <div className="flex items-center justify-between">;
        <h3 className="text-xl font-medium">Team Members</h3>;
        <Dialog open={isAddingMember} onOpenChange={setIsAddingMember}>;
          <DialogTrigger asChild>;
            <Button className="gap-2">;
              <UserPlus className="h-4 w-4" />;
              Add Team Member;
            </Button>;
          </DialogTrigger>;
          <DialogContent>;
            <DialogHeader>;
              <DialogTitle>Add Team Member</DialogTitle>;
              <DialogDescription>;
                Send an invitation to join your workspace. They'll receive an email with instructions.;
              </DialogDescription>;
            </DialogHeader>;
  }
  },

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-medium">Team Members</h3>
        <Dialog open={isAddingMember} onOpenChange={setIsAddingMember}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <UserPlus className="h-4 w-4" />
              Add Team Member
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Team Member</DialogTitle>
              <DialogDescription>
                Send an invitation to join your workspace. They'll receive an email with instructions.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="colleague@company.com"
                  className="col-span-3"
                  value={newMemberEmail}
                  onChange={(e) => setNewMemberEmail(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="role" className="text-right">
                  Role
                </Label>
                <select
                  id="role"
                  className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="admin">Admin</option>
                  <option value="recruiter">Recruiter</option>
                  <option value="manager">Manager</option>
                  <option value="viewer">Viewer</option>
                </select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddingMember(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddMember}>Send Invitation</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Active</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {teamMembers.map((member) => (
              <TableRow key={member.id}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                      <span className="text-sm font-medium">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium">{member.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {member.email}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{member.role}</TableCell>
                <TableCell>
                  <Badge
                    variant={member.status === "active" ? "default" : "outline"}
                  >
                    {member.status}
                  </Badge>
                </TableCell>
                <TableCell>{member.lastActive}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    {member.status === "pending" ? (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleResendInvite(member.email)}
                      >
                        <Mail className="h-4 w-4 mr-1" />
                        Resend
                      </Button>
                    ) : (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-destructive hover:text-destructive"
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useState } from "react",;
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
  TableRow} from "@/components/ui/table",;
import {;
  Dialog,;
  DialogContent,;
  DialogDescription,;
  DialogFooter,;
  DialogHeader,;
  DialogTitle,;
  DialogTrigger} from "@/components/ui/dialog",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Label } from "@/components/ui/label",;
import { Badge } from "@/components/ui/badge",;
import { PlusCircle, Trash, Mail, UserPlus } from "lucide-react",;
import { toast } from "@/hooks/use-toast",;
export function TeamManagement() {;
  const [isAddingMember, setIsAddingMember] = useState(false),;
  const [newMemberEmail, setNewMemberEmail] = useState(""),;
  // Mock team members data;
  const teamMembers = [;
    {;
      id: 1,;
      name: "Alex Johnson",;
      email: "alex@example.com",;
      role: "Admin",;
      status: "active",;
      lastActive: "2 hours ago"},;
    {;
      id: 2,;
      name: "Jamie Smith",;
      email: "jamie@example.com",;
      role: "Recruiter",;
      status: "active",;
      lastActive: "Yesterday"},;
    {;
      id: 3,;
      name: "Sam Williams",;
      email: "sam@example.com",;
      role: "Manager",;
      status: "pending",;
      lastActive: "Never"},;
    {;
      id: 4,;
      name: "Taylor Brown",;
      email: "taylor@example.com",;
      role: "Viewer",;
      status: "active",;
      lastActive: "3 days ago"}],;
  const handleAddMember = () => {;
    // In a real app, this would make an API call to add the member;
    if (!newMemberEmail) {;
      toast({;
        title: "Email required",;
        description: "Please enter an email address for the new team member.",;
        variant: "destructive"}),;
      return;
    }
;
    toast({;
      title: "Invitation sent",;
      description: `An invitation has been sent to ${newMemberEmail}`}),;
    setNewMemberEmail(""),;
    setIsAddingMember(false);
  },;
  const handleRemoveMember = (memberId: number) => {;
    // In a real app, this would make an API call to remove the member;
    toast({;
      title: "Team member removed",;
      description: "The team member has been removed from your workspace."});
  },;
  const handleResendInvite = (memberEmail: string) => {;
    // In a real app, this would make an API call to resend the invitation;
    toast({;
      title: "Invitation resent";
      description: `A new invitation has been sent to ${memberEmail}`});
  };
  return (;
    <div className="space-y-6">;
      <div className="flex items-center justify-between">;
        <h3 className="text-xl font-medium">Team Members</h3>;
        <Dialog open={isAddingMember} onOpenChange={setIsAddingMember}>;
          <DialogTrigger asChild>;
            <Button className="gap-2">;
              <UserPlus className="h-4 w-4" />;
              Add Team Member;
            </Button>;
          </DialogTrigger>;
          <DialogContent>;
            <DialogHeader>;
              <DialogTitle>Add Team Member</DialogTitle>;
              <DialogDescription>;
                Send an invitation to join your workspace. They'll receive an email with instructions.;
              </DialogDescription>;
            </DialogHeader>;
            <div className="grid gap-4 py-4">;
              <div className="grid grid-cols-4 items-center gap-4">;
                <Label htmlFor="email" className="text-right">;
<<<<<<< HEAD

=======
            <div className="grid gap-4 py-4">;
              <div className="grid grid-cols-4 items-center gap-4">;
                <Label htmlFor="email" className="text-right">;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                  Email;
                </Label>;
                <Input;
                  id="email";
                  type="email";
                  placeholder="colleague@company.com";
<<<<<<< HEAD
                  className="col - span - 3";
                  value={newMemberEmail}
                  on_change={(e) => setNewMemberEmail (e.target.value)}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                />;
              </div>;
              <div className="grid grid - cols - 4 items - center gap - 4">;
                <Label html_for="role" className="text - right">;
<<<<<<< HEAD
=======
                  className="col-span-3";
                  value={newMemberEmail}
                  onChange={(e) => setNewMemberEmail(e.target.value)}
                />;
              </div>;
              <div className="grid grid-cols-4 items-center gap-4">;
                <Label htmlFor="role" className="text-right">;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                  Role;
                </Label>;
                <select;
                  id="role";
<<<<<<< HEAD
                  className="col - span - 3 flex h - 10 w - full rounded - md border border - input bg - background px - 3 py - 2 text - sm ring - offset - background file:border - 0 file:bg - transparent file:text - sm file:font - medium placeholder:text - muted - foreground focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - ring focus - visible:ring - offset - 2 disabled:cursor - not - allowed disabled:opacity - 50";
=======
                  className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";
                  className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                >;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
                  Role;
                </Label>;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  <option value="admin">Admin</option>;
                  <option value="recruiter">Recruiter</option>;
                  <option value="manager">Manager</option>;
                  <option value="viewer">Viewer</option>;
                </select>;
              </div>;
            </div>;
            <DialogFooter>;
<<<<<<< HEAD
<<<<<<< HEAD

              <Button variant="outline" on_click={() => setIsAddingMember (false)}>;
                Cancel;
              </Button>;
              <Button on_click={handleAddMember}>Send Invitation</Button>;

=======
              <Button variant="outline" onClick={() => setIsAddingMember(false)}>;
                Cancel;
              </Button>;
              <Button onClick={handleAddMember}>Send Invitation</Button>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            </DialogFooter>;
          </DialogContent>;
        </Dialog>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD

      <div className="rounded - md border">;
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead > Name</TableHead>;
              <TableHead > Role</TableHead>;
              <TableHead > Status</TableHead>;
              <TableHead > Last Active</TableHead>;
              <TableHead className="text - right">Actions</TableHead>;
            </TableRow>;
          </TableHeader>;
          <TableBody>;
            {team_members.map ((member) => (
              <TableRow key={member.id}>;
                <TableCell>;
                  <div className="flex items - center gap - 2">;
                    <div className="h - 8 w - 8 rounded - full bg - muted flex items - center justify - center">;
                      <span className="text - sm font - medium">;
                        {member.name;
                          .split (" ");
                          .map ((n) => n[0]);
                          .join ("")}
                      </span>;
                    </div>;
                    <div>;
                      <div className="font - medium">{member.name}</div>;
                      <div className="text - sm text - muted - foreground">;
                        {member.email}

=======
;
      <div className="rounded-md border">;
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead>Name</TableHead>;
              <TableHead>Role</TableHead>;
              <TableHead>Status</TableHead>;
              <TableHead>Last Active</TableHead>;
              <TableHead className="text-right">Actions</TableHead>;
            </TableRow>;
          </TableHeader>;
          <TableBody>;
            {teamMembers.map((member) => (;
              <TableRow key={member.id}>;
                <TableCell>;
                  <div className="flex items-center gap-2">;
                    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">;
                      <span className="text-sm font-medium">;
                        {member.name;
                          .split(" ");
                          .map((n) => n[0]);
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium">{member.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {member.email}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
                        {member.email}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                      </div>;
                    </div>;
                  </div>;
                </TableCell>;
<<<<<<< HEAD
<<<<<<< HEAD

          </TableBody>;
        </Table>;
      </div>;
    </div>;
  );
}

=======
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                <TableCell>{member.role}</TableCell>;
                <TableCell>;
                  <Badge;
                    variant={member.status === "active" ? "default" : "outline"}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                <TableCell>{member.role}</TableCell>;
                <TableCell>;
                  <Badge;
                    variant={member.status === "active" ? "default" :"outline"}
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  >;
                    {member.status}
                  </Badge>;
                </TableCell>;
<<<<<<< HEAD
<<<<<<< HEAD
                <TableCell>{member.last_active}</TableCell>;
                <TableCell className="text - right">;
                  <div className="flex justify - end gap - 2">;
                    {member.status === "pending" ? (
                      <Button;
                        variant="ghost";
                        size="sm";

                        className="text-destructive hover:text-destructive";


=======
                  >;
                    {member.status}
                  </Badge>
                </TableCell>
                <TableCell>{member.lastActive}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    {member.status === "pending" ? (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleResendInvite(member.email)}
                      >;
                        <Mail className="h-4 w-4 mr-1" />;
                        Resend;
                      </Button>;
                    ) : (;
                      <Button;
                        variant="ghost";
                        size="sm";
                        className="text-destructive hover:text-destructive";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                        onClick={() => handleRemoveMember(member.id)}
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
                <TableCell>{member.lastActive}</TableCell>;
                <TableCell className="text-right">;
                  <div className="flex justify-end gap-2">;
                    {member.status === "pending" ? (;
                      <Button;
                        variant="ghost";
                        size="sm";
                        onClick={() => handleResendInvite(member.email)}
                      >;
                        <Mail className="h-4 w-4 mr-1" />;
                        Resend;
                      </Button>;
                    ) :(;
                      <Button;
                        variant="ghost";
                        size="sm";
                        className="text-destructive hover:text-destructive";
                        onClick={() => handleRemoveMember(member.id)}
                      >;
                        <Trash className="h-4 w-4" />;
                      </Button>;                    )}
                  </div>;
                </TableCell>;
              </TableRow>;
            ))}
          </TableBody>;
        </Table>;
      </div>;
    </div>;
  ),;}
 import {
  Table;
TableBody;
TableCell;
TableHead;
TableHeader;
import {
  Dialog;
DialogContent;
DialogDescription;
DialogFooter;
DialogHeader;
DialogTitle;
//In a real app, this would make an API call to add the member if (!newMemberEmail) {
  toast ({
  setNewMemberEmail ("");
setIsAddingMember (false);
};
  //In a real app, this would make an API call to remove the member toast ({
  
};
  //In a real app, this would make an API call to resend the invitation toast ({
  
};
  handleAddMember 
}>Send Invitation</Button> </DialogFooter> </DialogContent> </Dialog> </div> <div className=" rounded-md border"> <Table> <TableHeader> <TableRow> <TableHead>Name</TableHead> <TableHead>Role</TableHead> <TableHead>Status</TableHead> <TableHead>Last Active</TableHead> <TableHead className=" text-right">Actions</TableHead> </TableRow> </TableHeader> <TableBody> {
  teamMembers.map ( (member) => (<TableRow key= {
  member.id 
}> <TableCell> .join ("") 
}</span> </div> <div> </div> </div> </div> </TableCell> <TableCell> {
  member.role 
}</TableCell> <TableCell> <Badge > {
  member.status 
}</Badge> </TableCell> <TableCell> {
  member.lastActive 
}</TableCell> <TableCell className="text-right"> onClick= {
  () => handleResendInvite (member.email) 
}> <Mail className="h-4 w-4 mr-1"/> Resend </Button> className="text-destructive hover:text-destructive"onClick= {
  () => handleRemoveMember (member.id) 
}> <Trash className="h-4 w-4" /> </Button>) 
}</div> </TableCell> </TableRow>) ) 
}</TableBody> </Table> </div> </div>) 
}
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
