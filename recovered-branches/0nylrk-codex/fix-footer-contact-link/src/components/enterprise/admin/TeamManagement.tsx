import React, { useState } from "react";
<<<<<<< HEAD
import {
=======

import React, { useState } from "react";

<<<<<<< HEAD
import {

  Table;
  TableBody;
  TableCell;

  TableHead;
  TableHeader;
<<<<<<< HEAD
  TableRow} from "@/components/ui/table","
  }
=======
  TableRow} from "@/components/ui/table",

>>>>>>> origin/chore/fix-lint-and-merge
  Dialog;
  DialogContent;
  DialogDescription;

  DialogFooter;
  DialogHeader;
<<<<<<< HEAD
  DialogTitle;import React, { useState } from "react","
  }
=======
<<<<<<< HEAD
import React, { useState } from "react";
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React, { useState } from "react",

import {

>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
  Table,
  TableBody,
  TableCell,

  TableHead,
<<<<<<< HEAD
  TableHeader,
<<<<<<< HEAD
  TableRow} from "@/components/ui/table",
import {
=======
  TableRow} from "@/components/ui/table","
  }
=======
  TableHeader,"
  TableRow} from "@/components/ui/table",

>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
  Dialog,
  DialogContent,
  DialogDescription,

  DialogFooter,
  DialogHeader,
<<<<<<< HEAD
  DialogTitle,
  DialogTrigger} from "@/components/ui/dialog",
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { PlusCircle, Trash, Mail, UserPlus } from "lucide-react";
import { toast } from "@/hooks/use-toast";
export function TeamManagement() {
  const [isAddingMember, setIsAddingMember] = useState($2);
  const [newMemberEmail, setNewMemberEmail] = useState($2);
  // Mock team members data
  const teamMembers = $2;
      name: "Alex Johnson",
      email: "alex@example.com",
      role: "Admin",
      status: "active",
      lastActive: "2 hours ago"},
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
      id: 4,
      name: "Taylor Brown",
      email: "taylor@example.com",
      role: "Viewer",
      status: "active",
      lastActive: "3 days ago"}],

  const handleAddMember = () => {
    // In a real app, this would make an API call to add the member
    if (!newMemberEmail) {
      toast($2);
      return
    }

    toast($2);
    setNewMemberEmail($2);
    setIsAddingMember(false)
  },

  const handleRemoveMember = (memberId: number) => {
    // In a real app, this would make an API call to remove the member
    toast({
      title: "Team member removed",
      description: "The team member has been removed from your workspace."})
  },

  const handleResendInvite = (memberEmail: string) => {
    // In a real app, this would make an API call to resend the invitation
    toast({
      title: "Invitation resent",
      description: `A new invitation has been sent to ${memberEmail}`})
=======
<<<<<<< HEAD

=======
  DialogTitle,
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  DialogTrigger} from "@/components/ui/dialog",

import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Label } from "@/components/ui/label",

import { Badge } from "@/components/ui/badge",

<<<<<<< HEAD
=======

<<<<<<< HEAD
import { PlusCircle, Trash, Mail, UserPlus } from "lucide-react";
import { toast } from "@/hooks/use-toast";
export function TeamManagement() {
  const [isAddingMember, setIsAddingMember] = useState(false);
  const [newMemberEmail, setNewMemberEmail] = useState("");
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { PlusCircle, Trash, Mail, UserPlus } from "lucide-react",

import { toast } from "@/hooks/use-toast",
export function TeamManagement() {}
  const [isAddingMember, setIsAddingMember] = useState(false),"

  const [newMemberEmail, setNewMemberEmail] = useState(""),

<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  // Mock team members data

  const teamMembers = [
    {
      id: 1
      name: "Alex Johnson"
      email: "alex@example.com"
      role: "Admin"
      status: "active"

      lastActive: "2 hours ago"}
    {}
      id: 2"
      name: "Jamie Smith""
      email: "jamie@example.com""
      role: "Recruiter""
      status: "active""
      lastActive: "Yesterday"}
    {}
      id: 3"
      name: "Sam Williams""
      email: "sam@example.com""
      role: "Manager""
      status: "pending""
      lastActive: "Never"}
    {}
      id: 4"
      name: "Taylor Brown""
      email: "taylor@example.com""
      role: "Viewer""
      status: "active""
      lastActive: "3 days ago"}]
  const handleAddMember = () => {}
    // In a real app, this would make an API call to add the member;
    if (!newMemberEmail) {}
      toast({"
        title: "Email required""
        description: "Please enter an email address for the new team member.""
        variant: "destructive"})
      return;
    }

<<<<<<< HEAD
      title: "Invitation sent"
      description: `An invitation has been sent to ${newMemberEmail}`})
    setNewMemberEmail("");
    setIsAddingMember(false)
  }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      title: "Invitation sent",
      description: `An invitation has been sent to ${newMemberEmail}`}),
"
    setNewMemberEmail(""),
    setIsAddingMember(false)
  },

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const handleRemoveMember = (memberId: number) => {
    // In a real app, this would make an API call to remove the member
    toast({
      title: "Team member removed"
      description: "The team member has been removed from your workspace."})


  },



<<<<<<< HEAD
  }
  },

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const handleResendInvite = (memberEmail: string) => {
    // In a real app, this would make an API call to resend the invitation
    toast({
      title: "Invitation resent"

<<<<<<< HEAD

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
=======
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const handleAddMember = () => {;
    // In a real app, this would make an API call to add the member;
    if (!newMemberEmail) {;
      toast({;
<<<<<<< HEAD
        title: "Email required",
=======
<<<<<<< HEAD

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
=======
        title: "Email required",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        description: "Please enter an email address for the new team member.",;
        variant: "destructive"}),;
      return;
    }

    toast({;
      title: "Invitation sent",
      description: `An invitation has been sent to ${newMemberEmail}`}),;

    setNewMemberEmail("");
    setIsAddingMember(false);
  };

  const handleRemoveMember = (memberId: number) => {;

    // In a real app, this would make an API call to remove the member;
    toast({"
      title: "Team member removed""
      description: "The team member has been removed from your workspace."})

  const handleResendInvite = (memberEmail: string) => {}
    // In a real app, this would make an API call to resend the invitation;
    toast({"
      title: "Invitation resent"`
      description: `A new invitation has been sent to ${memberEmail}`})

  return (
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <div className="space-y-6">;
      <div className="flex items-center justify-between">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        <h3 className="text-xl font-medium">Team Members</h3>;
        <Dialog open={isAddingMember} onOpenChange={setIsAddingMember}>;
          <DialogTrigger asChild>;"
            <Button className="gap-2">;"
              <UserPlus className="h-4 w-4" />;
<<<<<<< HEAD
import React, { useState } from './react';'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components / ui / table';'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components / ui / dialog';'
import { Button } from '@/components / ui / button';'
import { Input } from '@/components / ui / input';'
import { Label } from '@/components / ui / label';'
import { Badge } from '@/components / ui / badge';'
import { PlusCircle, Trash, Mail, UserPlus } from './lucide-react';'
=======
<<<<<<< HEAD
=======
=======
import React, { useState } from './react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components / ui / table';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components / ui / dialog';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
import { Label } from '@/components / ui / label';
import { Badge } from '@/components / ui / badge';
import { PlusCircle, Trash, Mail, UserPlus } from './lucide-react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { toast } from '@/hooks / use - toast';
export /**;
 * TeamManagement - Function description;
 */
function TeamManagement() {}
  const [isAddingMember, setIsAddingMember] = useState (false);"
  const [newMemberEmail, setNewMemberEmail] = useState ("");
;
  // Mock team members data;
  const team_members = [;
    {}
      id: 1,"
      name: "Alex Johnson","
      email: "alex@example.com","
      role: "Admin","
      status: "active","
      last_active: "2 hours ago"},
    {}
      id: 2,"
      name: "Jamie Smith","
      email: "jamie@example.com","
      role: "Recruiter","
      status: "active","
      last_active: "Yesterday"},
    {}
      id: 3,"
      name: "Sam Williams","
      email: "sam@example.com","
      role: "Manager","
      status: "pending","
      last_active: "Never"},
    {}
      id: 4,"
      name: "Taylor Brown","
      email: "taylor@example.com","
      role: "Viewer","
      status: "active","
      last_active: "3 days ago"}],
  const handleAddMember = () =>: any {}
    // In a real app, this would make an API call to add the member;
    // Check condition;
if ( {) {}
  $2;
}
      toast ({"
        title: "Email required","
        description: "Please enter an email address for the new team member.","
        variant: "destructive"}),
      return;
    }
    toast ({"
      title: "Invitation sent",`
      description: `An invitation has been sent to ${newMemberEmail}`}),"
    setNewMemberEmail ("");
    setIsAddingMember (false);
  }
;
  const handleRemoveMember = (member_id: number) =>: any {}
    // In a real app, this would make an API call to remove the member;
    toast ({"
      title: "Team member removed","
      description: "The team member has been removed from your workspace."});
  }
;
  const handleResendInvite = (member_email: string) =>: any {}
    // In a real app, this would make an API call to resend the invitation;
    toast ({"
      title: "Invitation resent",`
      description: `A new invitation has been sent to ${member_email}`});
  }
;

  return (
    <div className="space-y-6">;
      <div className="flex items - center justify-between">;
        <h3 className="text - xl font-medium">Team Members</h3>;
        <Dialog open={isAddingMember} onOpenChange={setIsAddingMember}>;
          <DialogTrigger as_child>;
<<<<<<< HEAD

=======
            <Button className="gap - 2">;
              <UserPlus className="h - 4 w - 4" />;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              Add Team Member;
            </Button>;
          </DialogTrigger>;
          <DialogContent>;
            <DialogHeader>;
<<<<<<< HEAD
              <DialogTitle>Add Team Member</DialogTitle>;
=======

<<<<<<< HEAD
=======
              <DialogTitle > Add Team Member</DialogTitle>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <DialogDescription>;
                Send an invitation to join your workspace. They'll receive an email with instructions.;
              </DialogDescription>;
            </DialogHeader>;
<<<<<<< HEAD
  }
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
=======
=======

                  className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">;
=======
            <div className="grid gap - 4 py - 4">;
              <div className="grid grid - cols - 4 items - center gap - 4">;
                <Label html_for="email" className="text - right">;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
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
                        onClick={() => handleRemoveMember(member.id)}
                      >
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React, { useState } from "react",;
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;

  TableRow} from "@/components/ui/table",;
import {;
  Dialog,;
  DialogContent,;
  DialogDescription,;
  DialogFooter,;
  DialogHeader,;

      lastActive: "3 days ago"}],;
  const handleAddMember = () => {;
    // In a real app, this would make an API call to add the member;
    if (!newMemberEmail) {;

        variant: "destructive"}),;
      return;
    }
;

    setNewMemberEmail(""),;
    setIsAddingMember(false);
  },;
  const handleRemoveMember = (memberId: number) => {;
    // In a real app, this would make an API call to remove the member;

      description: "The team member has been removed from your workspace."});
  },;
  const handleResendInvite = (memberEmail: string) => {;
    // In a real app, this would make an API call to resend the invitation;

              <UserPlus className="h-4 w-4" />;
              Add Team Member;
            </Button>;
          </DialogTrigger>;
          <DialogContent>;
            <DialogHeader>;
              <DialogTitle>Add Team Member</DialogTitle>;
<<<<<<< HEAD

                  <option value="viewer">Viewer</option>;
</TableCell>
                  <Badge;"
                    variant={member.status === "active" ? "default" : "outline"}"
                  >
</Badge>
                  </Badge>
                </TableCell>
                <TableCell>{member.lastActive}</TableCell>"
                <TableCell className="text-right">"
</TableCell>"
                  <div className="flex justify-end gap-2">"
</div>
                      <Button;"
                        variant="ghost"""
                        size="sm"")
                        onClick={() => handleResendInvite(member.email)}
</Button>"
                        <Mail className="h-4 w-4 mr-1" />"
</Mail>
                      </Button>
                      <Button;"
                        variant="ghost"""
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
import {;
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
export function TeamManagement() {;
  const [isAddingMember, setIsAddingMember] = useState(false),;"
  const [newMemberEmail, setNewMemberEmail] = useState(""),;"
  // Mock team members data;
  const teamMembers = [;
    {;
      id: 1,;"
      name: "Alex Johnson",;""
      email: "alex@example.com",;""
      role: "Admin",;""
      status: "active",;""
      lastActive: "2 hours ago"},;"
    {;
      id: 2,;"
      name: "Jamie Smith",;""
      email: "jamie@example.com",;""
      role: "Recruiter",;""
      status: "active",;""
      lastActive: "Yesterday"},;"
    {;
      id: 3,;"
      name: "Sam Williams",;""
      email: "sam@example.com",;""
      role: "Manager",;""
      status: "pending",;""
      lastActive: "Never"},;"
    {;
      id: 4,;"
      name: "Taylor Brown",;""
      email: "taylor@example.com",;""
      role: "Viewer",;""
      status: "active",;"]"
      lastActive: "3 days ago"}],;"
  const handleAddMember = () => {;
</Button>"
    <div className="space-y-6">;"
</div>"
      <div className="flex items-center justify-between">;"
</div>"
        <h3 className="text-xl font-medium">Team Members</h3>;"
        <Dialog open={isAddingMember} onOpenChange={setIsAddingMember}>;
</Dialog>
          <DialogTrigger asChild>;
</DialogTrigger>"
            <Button className="gap-2">;"
</Button>"
              <UserPlus className="h-4 w-4" />;"
</UserPlus>
            </Button>;
          </DialogTrigger>;
          <DialogContent>;
</DialogContent>
            <DialogHeader>;
</DialogHeader>
              <DialogTitle>Add Team Member</DialogTitle>;
              <DialogDescription>;
</DialogDescription>
              </DialogDescription>;
            </DialogHeader>;"
            <div className="grid gap-4 py-4">;"
</div>"
              <div className="grid grid-cols-4 items-center gap-4">;"
</div>"
                <Label htmlFor="email" className="text-right">;"
</Label>
                </Label>;
                <Input;"
                  id="email";""
                  type="email";""
                  placeholder="colleague@company.com";""
                  className="col - span - 3";"
                  value={newMemberEmail}
                  on_change={(e) => setNewMemberEmail (e.target.value)}
</Input>
              </div>;"
              <div className="grid grid - cols - 4 items - center gap - 4">;"
</div>"
                <Label html_for="role" className="text - right">;"
</Label>
                </Label>;
                <select;"
                  id="role";""
                  className="col - span - 3 flex h - 10 w - full rounded - md border border - input bg - background px - 3 py - 2 text - sm ring - offset - background file:border - 0 file:bg - transparent file:text - sm file:font - medium placeholder:text - muted - foreground focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - ring focus - visible:ring - offset - 2 disabled:cursor - not - allowed disabled:opacity - 50";"
                >;
</select>
                </Label>;"
                  <option value="admin">Admin</option>;""
                  <option value="recruiter">Recruiter</option>;""
                  <option value="manager">Manager</option>;""
                  <option value="viewer">Viewer</option>;"
=======
              <DialogDescription>;
                Send an invitation to join your workspace. They'll receive an email with instructions.;
              </DialogDescription>;
            </DialogHeader>;
            <div className="grid gap-4 py-4">;
              <div className="grid grid-cols-4 items-center gap-4">;
                <Label htmlFor="email" className="text-right">;
<<<<<<< HEAD
            <div className="grid gap-4 py-4">;
              <div className="grid grid-cols-4 items-center gap-4">;
                <Label htmlFor="email" className="text-right">;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  Email;
                </Label>;
                <Input;
                  id="email";
                  type="email";
                  placeholder="colleague@company.com";
<<<<<<< HEAD
                  className="col-span-3";
                  value={newMemberEmail}
                  onChange={(e) => setNewMemberEmail(e.target.value)}
                />;
              </div>;
              <div className="grid grid-cols-4 items-center gap-4">;
                <Label htmlFor="role" className="text-right">;
=======
                  className="col - span - 3";
                  value={newMemberEmail}
                  on_change={(e) => setNewMemberEmail (e.target.value)}
                />;
              </div>;
              <div className="grid grid - cols - 4 items - center gap - 4">;
                <Label html_for="role" className="text - right">;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  Role;
                </Label>;
                <select;
                  id="role";
<<<<<<< HEAD
                  className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";
                  className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";
                >;
=======
                  className="col - span - 3 flex h - 10 w - full rounded - md border border - input bg - background px - 3 py - 2 text - sm ring - offset - background file:border - 0 file:bg - transparent file:text - sm file:font - medium placeholder:text - muted - foreground focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - ring focus - visible:ring - offset - 2 disabled:cursor - not - allowed disabled:opacity - 50";
                >;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  <option value="admin">Admin</option>;
                  <option value="recruiter">Recruiter</option>;
                  <option value="manager">Manager</option>;
                  <option value="viewer">Viewer</option>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                </select>;
              </div>;
            </div>;
            <DialogFooter>;
<<<<<<< HEAD
              <Button variant="outline" onClick={() => setIsAddingMember(false)}>;
                Cancel;
              </Button>;
              <Button onClick={handleAddMember}>Send Invitation</Button>;
=======

<Button variant="outline" onClick={() => setIsAddingMember(false)}>;
                Cancel;
              </Button>;
<<<<<<< HEAD
              <Button onClick={handleAddMember}>Send Invitation</Button>;
=======
              <Button on_click={handleAddMember}>Send Invitation</Button>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            </DialogFooter>;
          </DialogContent>;
        </Dialog>;
      </div>;
<<<<<<< HEAD
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
=======

<<<<<<< HEAD
=======
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                      </div>;
                    </div>;
                  </div>;
                </TableCell>;
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
          </TableBody>;
        </Table>;
      </div>;
    </div>;
  );
}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                <TableCell>{member.role}</TableCell>;

                <TableCell>;
                  <Badge;"
                    variant={member.status === "active" ? "default" : "outline"}
<<<<<<< HEAD

                <TableCell>;
                  <Badge;"
=======
                <TableCell>{member.role}</TableCell>;
                <TableCell>;
                  <Badge;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    variant={member.status === "active" ? "default" :"outline"}
                  >;
                    {member.status}
                  </Badge>;
                </TableCell>;
                  >;
                    {member.status}
<<<<<<< HEAD
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
=======
                  </Badge>;
                </TableCell>;
                <TableCell>{member.last_active}</TableCell>;
                <TableCell className="text - right">;
                  <div className="flex justify - end gap - 2">;
                    {member.status === "pending" ? (
                      <Button;
                        variant="ghost";
                        size="sm";

                        className="text-destructive hover:text-destructive";

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
              <Button on_click={handleAddMember}>Send Invitation</Button>;                <TableCell>{member.role}</TableCell>;
                <TableCell>;
                  <Badge;
                    variant={member.status === "active" ? "default" : "outline"}
                <TableCell>;
                  <Badge;
                    variant={member.status === "active" ? "default" :"outline"}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                        onClick={() => handleRemoveMember(member.id)}
                      >"
>>>>>>> merged-prs-20250907-203621
                        <Trash className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
</DialogFooter>
"
              <Button variant="outline" on_click={() => setIsAddingMember (false)}>;"
</Button>
              </Button>;
              <Button on_click={handleAddMember}>Send Invitation</Button>;
            </DialogFooter>;
          </DialogContent>;
        </Dialog>;
      </div>;"
      <div className="rounded - md border">;"
</div>
        <Table>;
</Table>
          <TableHeader>;
</TableHeader>
            <TableRow>;
</TableRow>
              <TableHead > Name</TableHead>;
              <TableHead > Role</TableHead>;
              <TableHead > Status</TableHead>;
              <TableHead > Last Active</TableHead>;"
              <TableHead className="text - right">Actions</TableHead>;"
            </TableRow>;
          </TableHeader>;
          <TableBody>;
</TableBody>
              <TableRow key={member.id}>;
</TableRow>
                <TableCell>;
</TableCell>"
                  <div className="flex items - center gap - 2">;"
</div>"
                    <div className="h - 8 w - 8 rounded - full bg - muted flex items - center justify - center">;"
</div>"
                      <span className="text - sm font - medium">;"
</span>
                      </span>;
                    </div>;
                    <div>;
</div>"
                      <div className="font - medium">{member.name}</div>;""
                      <div className="text - sm text - muted - foreground">;"
</div>
                      </div>;
                    </div>;
                  </div>;
                </TableCell>;
          </TableBody>;
        </Table>;
      </div>;
    </div>;
                <TableCell>{member.role}</TableCell>;
                <TableCell>;
</TableCell>
                  <Badge;"
                    variant={member.status === "active" ? "default" : "outline"}"
                <TableCell>{member.role}</TableCell>;
</Badge>
                <TableCell>;
</TableCell>
                  <Badge;"
                    variant={member.status === "active" ? "default" :"outline"}"
                  >;
</Badge>
                  </Badge>;
                </TableCell>;
                <TableCell>{member.last_active}</TableCell>;"
                <TableCell className="text - right">;"
</TableCell>"
                  <div className="flex justify - end gap - 2">;"
</div>
                      <Button;"
                        variant="ghost";""
                        size="sm";""
                        className="text-destructive hover:text-destructive";"
                        onClick={() => handleRemoveMember(member.id)}
</Button>"
                        <Trash className="h-4 w-4" />"
</Trash>

                      </Button>
                  </div>
                </TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
<<<<<<< HEAD
  )
=======
  )
<<<<<<< HEAD
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
<<<<<<< HEAD
=======
}
=======
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
