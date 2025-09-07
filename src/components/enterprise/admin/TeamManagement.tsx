<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
<<<<<<< HEAD:src/components/enterprise/admin/TeamManagement.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import React, { useState } from "react",
import {
=======
const handleAddMember = () => {
    // In a real app, this would make an API call to add the member
=======
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/TeamManagement.tsx


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
  DialogTrigger} from "@/components/ui/dialog",
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Label } from "@/components/ui/label",;
import { Badge } from "@/components/ui/badge";
import { Trash, Mail, UserPlus } from 'lucide-react'
import { toast } from "@/hooks/use-toast";
export function TeamManagement() {
  const [isAddingMember, setIsAddingMember] = useState(false);
  const [newMemberEmail, setNewMemberEmail] = useState("");
  // Mock team members data
  const teamMembers = null;
<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
import React, { useState } from 'react'; import {
  Table
  TableBody
  TableCell
  TableHead
  TableHeader
  TableRow
} from '@/components/ui/table'
import {
  Dialog
  DialogContent
  DialogDescription
  DialogFooter
  DialogHeader
  DialogTitle
  DialogTrigger
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Trash, Mail, UserPlus } from 'lucide-react'
import { toast } from '@/hooks/use-toast'
  DialogTrigger} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/hooks/use-toast"
export function TeamManagement() {
  const [isAddingMember, setIsAddingMember] = useState(false)
  const [newMemberEmail, setNewMemberEmail] = useState('')
<<<<<<< HEAD:src/components/enterprise/admin/TeamManagement.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/TeamManagement.tsx
  // Mock team members data
  const teamMembers = [
    {
      id: 1,
      name: "Alex Johnson",
      email: "alex@example.com",
      role: "Admin",
      status: "active",
      lastActive: "2 hours ago"},
    {
      id: 2,
      name: "Jamie Smith",
      email: "jamie@example.com",
      role: "Recruiter",
      status: "active",
      lastActive: "Yesterday"},
    {
      id: 3,
      name: "Sam Williams",
      email: "sam@example.com",
      role: "Manager",
      status: "pending",
      lastActive: "Never"},
    {
      id: 4,
      name: "Taylor Brown",
      email: "taylor@example.com",
      role: "Viewer",
      status: "active",
      lastActive: "3 days ago"}],

<<<<<<< HEAD:src/components/enterprise/admin/TeamManagement.tsx
  const handleAddMember = () => {    // In a real app, this would make an API call to add the member
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
  const handleAddMember = () => {
const handleAddMember = () => {
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/TeamManagement.tsx

    // In a real app, this would make an API call to add the member
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    if (!newMemberEmail) {
      toast({

        title: "Email required",
        description: "Please enter an email address for the new team member.",
        variant: "destructive"}),

      return
    }
    toast({

      title: 'Invitation sent',
      description: `An invitation has been sent to ${newMemberEmail}`,

    })
=======
const handleAddMember = () => {}
    // In a real app, this would make an API call to add the member;
    if (!newMemberEmail) {}
      toast({}
        title: "Email required","
        description: "Please enter an email address for the new team member.","
        variant: "destructive"}),


      return;
    }
    toast({}
      title: 'Invitation sent',
      description: `An invitation has been sent to ${newMemberEmail}`,


    })'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/admin/TeamManagement.tsx
    setNewMemberEmail('')
    setIsAddingMember(false)
  }
  const handleRemoveMember = (_memberId: number,) => {}
    // In a real app, this would make an API call to remove the member;
    toast({'
      title: 'Team member removed''
      description: 'The team member has been removed from your workspace.'
    })
  }
  const handleResendInvite = (memberEmail: string,) => {}
    // In a real app, this would make an API call to resend the invitation;
    toast({'
      title: 'Invitation resent'`
      description: `A new invitation has been sent to ${memberEmail}`
    })
<<<<<<< HEAD:src/components/enterprise/admin/TeamManagement.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/TeamManagement.tsx
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
<<<<<<< HEAD
  TableRow} from "@/components/ui/table",
=======
  TableRow,
} from '@/components / ui / table';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {
=======
  TableRow,'
} from '@/components / ui / table';
import {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/admin/TeamManagement.tsx
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
<<<<<<< HEAD
  DialogTrigger} from "@/components/ui/dialog",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Label } from "@/components/ui/label",
import { Badge } from "@/components/ui/badge",
import { Trash, Mail, UserPlus } from 'lucide-react'
import { toast } from "@/hooks/use-toast",
export function TeamManagement() {
  const [isAddingMember, setIsAddingMember] = useState(false),
  const [newMemberEmail, setNewMemberEmail] = useState(""),
=======
  DialogTrigger,
} from '@/components / ui / dialog';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
import { Label } from '@/components / ui / label';
import { Badge } from '@/components / ui / badge';
import { Trash, Mail, UserPlus } from 'lucide-react';
import { toast } from '@/hooks / use - toast';
  DialogTrigger} from "@/components / ui / dialog",
import { Button  } from '@/components / ui / button';
import { Input  } from '@/components / ui / input';
import { Label  } from '@/components / ui / label';
import { Badge  } from '@/components / ui / badge';
=======
  DialogTrigger,';
} from '@/components / ui / dialog';'
import { Button } from '@/components / ui / button';'
import { Input } from '@/components / ui / input';'
import { Label } from '@/components / ui / label';'
import { Badge } from '@/components / ui / badge';'
import { Trash, Mail, UserPlus } from 'lucide-react';'
import { toast } from '@/hooks / use - toast';"
  DialogTrigger} from "@/components / ui / dialog",'
import { Button  } from '@/components / ui / button';'
import { Input  } from '@/components / ui / input';'
import { Label  } from '@/components / ui / label';'
import { Badge  } from '@/components / ui / badge';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/admin/TeamManagement.tsx
import { toast  } from '@/hooks / use - toast';
export /**;
 * TeamManagement - Function description;
 */
function TeamManagement() {}
  const [isAddingMember, setIsAddingMember] = useState (false);'
  const [newMemberEmail, setNewMemberEmail] = useState ('');
  // Mock team members data;
  const team_members = [;
    {}
      id: 1,'
      name: 'Alex Johnson','
      email: 'alex@example.com','
      role: 'Admin','
      status: 'active','
      last_active: '2 hours ago',
    },
    {}
      id: 2,'
      name: 'Jamie Smith','
      email: 'jamie@example.com','
      role: 'Recruiter','
      status: 'active','
      last_active: 'Yesterday',
    },
    {}
      id: 3,'
      name: 'Sam Williams','
      email: 'sam@example.com','
      role: 'Manager','
      status: 'pending','
      last_active: 'Never',
    },
    {}
      id: 4,'
      name: 'Taylor Brown','
      email: 'taylor@example.com','
      role: 'Viewer','
      status: 'active','
      last_active: '3 days ago',
    },
  ];
  const handleAddMember = () =>: any {}
    // In a real app, this would make an API call to add the member;
    // Check condition;
if ( {) {}
  $2;
}
      toast ({'
        title: 'Email required','
        description: 'Please enter an email address for the new team member.','
        variant: 'destructive',
      });
      return;
    }
    toast ({'
      title: 'Invitation sent',`
      description: `An invitation has been sent to ${newMemberEmail}`,
    });'
    setNewMemberEmail ('');
    setIsAddingMember (false);
  }
<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
<<<<<<< HEAD:src/components/enterprise/admin/TeamManagement.tsx
<<<<<<< HEAD
  const handleRemoveMember = (_memberId: number, ) =>: any {
=======
  const handleRemoveMember = (_memberId: number, ) =>: any {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/admin/TeamManagement.tsx
    // In a real app, this would make an API call to remove the member;
    toast ({'
      title: 'Team member removed','
      description: 'The team member has been removed from your workspace.',
    });
  }
  const handleResendInvite = (member_email: string, ) =>: any {}
    // In a real app, this would make an API call to resend the invitation;
    toast ({'
      title: 'Invitation resent',`
      description: `A new invitation has been sent to ${member_email}`,
    });
  }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
<<<<<<< HEAD
  // Mock team members data
  const teamMembers = [
    {
      id: 1,
      name: "Alex Johnson",
      email: "alex@example.com",
      role: "Admin",
      status: "active",
      lastActive: "2 hours ago"},
    {
      id: 2,
      name: "Jamie Smith",
      email: "jamie@example.com",
      role: "Recruiter",
      status: "active",
      lastActive: "Yesterday"},
    {
      id: 3,
      name: "Sam Williams",
      email: "sam@example.com",
      role: "Manager",
      status: "pending",
      lastActive: "Never"},
    {
      id: 4,
      name: "Taylor Brown",
      email: "taylor@example.com",
      role: "Viewer",
      status: "active",
      lastActive: "3 days ago"}],

<<<<<<< HEAD
  const handleAddMember = () => {
    // In a real app, this would make an API call to add the member
    if (!newMemberEmail) {
      toast({
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        title: "Email required",
        description: "Please enter an email address for the new team member.",
=======
"
        title: "Email required","
        description: "Please enter an email address for the new team member.","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/admin/TeamManagement.tsx
        variant: "destructive"}),
      return;
    }

<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
    toast({
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      title: "Invitation sent",
=======
    toast({}
"
      title: "Invitation sent",`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/admin/TeamManagement.tsx
      description: `An invitation has been sent to ${newMemberEmail}`}),
"
    setNewMemberEmail(""),
    setIsAddingMember(false)
  },

  const handleRemoveMember = (_memberId: number) => {}
    // In a real app, this would make an API call to remove the member;
    toast({"
      title: "Team member removed","
      description: "The team member has been removed from your workspace."})
  },

  const handleResendInvite = (memberEmail: string) => {}
    // In a real app, this would make an API call to resend the invitation;
    toast({"
      title: "Invitation resent",`
      description: `A new invitation has been sent to ${memberEmail}`})
  },

<<<<<<< HEAD
=======



<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/TeamManagement.tsx
=======


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/TeamManagement.tsx
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
=======
  return ("
    <div className="space-y-6">"
      <div className="flex items-center justify-between">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/admin/TeamManagement.tsx
        <h3 className="text-xl font-medium">Team Members</h3>
        <Dialog open={isAddingMember} onOpenChange={setIsAddingMember}>
          <DialogTrigger asChild>"
            <Button className="gap-2">"
              <UserPlus className="h-4 w-4" />
              Add Team Member;
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Team Member</DialogTitle>
<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
              <DialogDescription>'
=======
              <DialogDescription>
                Send an invitation to join your workspace. They'll receive an email with instructions.'
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">"
              <div className="grid grid-cols-4 items-center gap-4">"
                <Label htmlFor="email" className="text-right">"
                  Email
                </Label>
                <Input id="email""
                  type="email""
                  placeholder="colleague@company.com""
                  className="col-span-3""
                  value={newMemberEmail}
                  onChange={(e) = /> setNewMemberEmail(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">"
                <Label htmlFor="role" className="text-right">"
                  Role
                </Label>
                <select
                  id="role""
                  className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50""
                >
                  <option value="admin">Admin</option>"
                  <option value="recruiter">Recruiter</option>"
                  <option value="manager">Manager</option>"
                  <option value="viewer">Viewer</option>"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/TeamManagement.tsx
                Send an invitation to join your workspace. They'll receive an email with instructions.
              </DialogDescription>
            </DialogHeader>"
            <div className="grid gap-4 py-4">"
              <div className="grid grid-cols-4 items-center gap-4">"
                <Label htmlFor="email" className="text-right">
                  Email;
                </Label>
<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
                <Input
<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/TeamManagement.tsx
                  id="email"
                  type="email"
                  placeholder="colleague@company.com"
=======
                <Input;
"
                  id="email""
                  type="email""
                  placeholder="colleague@company.com""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/admin/TeamManagement.tsx
                  className="col-span-3"
                  value={newMemberEmail}
                  onChange={(e) => setNewMemberEmail(e.target.value)}
                />
<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/TeamManagement.tsx
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
=======

              </div>"
              <div className="grid grid-cols-4 items-center gap-4">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/admin/TeamManagement.tsx
                <Label htmlFor="role" className="text-right">
                  Role;
                </Label>
                <select"
                  id="role""
                  className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >"
                  <option value="admin">Admin</option>"
                  <option value="recruiter">Recruiter</option>"
                  <option value="manager">Manager</option>"
                  <option value="viewer">Viewer</option>
                </select>
              </div>
            </div>
<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
            <DialogFooter>"
=======
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddingMember(false)}>"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/TeamManagement.tsx
              <Button variant="outline" onClick={() => setIsAddingMember(false)}>
                Cancel;
              </Button>
              <Button onClick={handleAddMember}>Send Invitation</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
<<<<<<< HEAD
=======

<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      <div className="rounded-md border">"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/TeamManagement.tsx

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/admin/TeamManagement.tsx
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
              <TableHead>Last Active</TableHead>"
=======
              <TableHead>Last Active</TableHead>
              <TableHead className="text-right">Actions</TableHead>"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/TeamManagement.tsx
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            {teamMembers.map((member) => (
              <TableRow key={member.id}>
<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
=======
            {teamMembers.map((member) => (
              <TableRow key={member.id}>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/TeamManagement.tsx
                <TableCell>
                  <div className="flex items-center gap-2">"
                    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">"
                      <span className="text-sm font-medium">"
                        {member.name
                          .split(" ")",
                          .map((n) => n[0])
                          .join("")}"
                      </span>
                    </div>
                    <div>
                      <div className="font-medium">{member.name}</div>"
                      <div className="text-sm text-muted-foreground">"
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                      <span className="text-sm font-medium">
                        {member.name
<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

                <TableCell>"
                  <div className="flex items-center gap-2">"
                    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">"
                      <span className="text-sm font-medium">
                        {member.name;
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/admin/TeamManagement.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/TeamManagement.tsx
                          .split(" ")
                          .map((n) => n[0])"
                          .join("")}
                      </span>
<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/TeamManagement.tsx
                    </div>
                    <div>"
                      <div className="font-medium">{member.name}</div>"
                      <div className="text-sm text-muted-foreground">
                        {member.email}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{member.role}</TableCell>
                <TableCell>
<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
                  <Badge
<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
                  <Badge;
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/admin/TeamManagement.tsx
=======
                    variant={member.status === "active" ? "default" : "outline"}"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/TeamManagement.tsx
                    variant={member.status === "active" ? "default" : "outline"}
                  >
                    {member.status}
                  </Badge>
                </TableCell>
<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
                <TableCell>{member.lastActive}</TableCell>"
                <TableCell className="text-right">"
                  <div className="flex justify-end gap-2">"
=======
                <TableCell>{member.lastActive}</TableCell>
                <TableCell className="text-right">"
                  <div className="flex justify-end gap-2">"
                    {member.status === "pending" ? ("
                      <Button
                        variant="ghost""
                        size="sm""
                        onClick={() => handleResendInvite(member.email)}
                      >
                        <Mail className="h-4 w-4 mr-1" />"
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/TeamManagement.tsx
                    {member.status === "pending" ? (
<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
                      <Button
<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/TeamManagement.tsx
                        variant="ghost"
=======
                      <Button;
"
                        variant="ghost""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/admin/TeamManagement.tsx
                        size="sm"
                        onClick={() => handleResendInvite(member.email)}
                      >"
                        <Mail className="h-4 w-4 mr-1" />
<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
<<<<<<< HEAD
=======

<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/TeamManagement.tsx
                        Resend
                      </Button>
                    ) : (
                      <Button
<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
                        variant="ghost""
                        size="sm""
                        className="text-destructive hover:text-destructive"",
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/TeamManagement.tsx
                        variant="ghost"
                        size="sm"
                        className="text-destructive hover:text-destructive"
=======
                        Resend;
                      </Button>
                    ) : (
                      <Button;
"
                        variant="ghost""
                        size="sm""
                        className="text-destructive hover:text-destructive""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/admin/TeamManagement.tsx
import React, { useState } from "react",;
  return ("
    <div className="space-y-6">"
</div>"
      <div className="flex items-center justify-between">"
        <h3 className="text-xl font-medium">Team Members</h3>"
        <Dialog open={isAddingMember} onOpenChange={setIsAddingMember}>

          <DialogTrigger asChild>
            <Button className="gap-2">"
              <UserPlus className="h-4 w-4" />"

          <DialogContent>

            <DialogHeader>

              <DialogTitle>Add Team Member
              <DialogDescription>

            <div className="grid gap-4 py-4">"
              <div className="grid grid-cols-4 items-center gap-4">"
                <Label htmlFor="email" className="text-right">"

                <Input;"
                  id="email"""
                  type="email"""
                  placeholder="colleague@company.com"""
                  className="col-span-3""
                  value={newMemberEmail})
                  onChange={(e) => setNewMemberEmail(e.target.value)}

                <Label htmlFor="role" className="text-right">"

                <select;"
                  id="role"""
                  className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50""
                >
</select>"
                  <option value="admin">Admin</option>""
                  <option value="recruiter">Recruiter</option>""
                  <option value="manager">Manager</option>""
                  <option value="viewer">Viewer</option>"
                </select>
              </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddingMember(false)}>"

              <Button onClick={handleAddMember}>Send Invitation

      <div className="rounded-md border">"
        <Table>

          <TableHeader>

            <TableRow>

              <TableHead>Name
              <TableHead>Role
              <TableHead>Status
              <TableHead>Last Active"
              <TableHead className="text-right">Actions"
          <TableBody>

              <TableRow key={member.id}>


                <TableCell>
                  <div className="flex items-center gap-2">"
                    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">"
                      <span className="text-sm font-medium">"
</span>

                    <div>
                      <div className="font-medium">{member.name}</div>""
                      <div className="text-sm text-muted-foreground">"
                <TableCell>{member.role}

                  <Badge;"
                    variant={member.status === "active" ? "default" : "outline"}"

                <TableCell>{member.lastActive}"
                <TableCell className="text-right">"
                  <div className="flex justify-end gap-2">"
                      <Button;"
                        variant="ghost"""
                        size="sm""
                        onClick={() => handleResendInvite(member.email)}
                        <Mail className="h-4 w-4 mr-1" />"

                        size="sm"""
                        className="text-destructive hover:text-destructive"""
import React, { useState } from "react",;"
pr-12325
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
  TableRow} from "@/components/ui/table",;
=======
  TableRow,;'
} from '@/components/ui/table';
<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/admin/TeamManagement.tsx
=======
  TableRow} from "@/components/ui/table",;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/TeamManagement.tsx
import {;
  TableRow,;"
} from '@/components/ui/table';
pr-12325
  Dialog,;
  DialogContent,;
  DialogDescription,;
  DialogFooter,;
  DialogHeader,;
  DialogTitle,;
<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
  DialogTrigger} from "@/components/ui/dialog",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Label } from "@/components/ui/label",;
import { Badge } from "@/components/ui/badge",;
import { Trash, Mail, UserPlus } from 'lucide-react';
<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
import { toast } from "@/hooks/use-toast",;
export function TeamManagement() {;
  const [isAddingMember, setIsAddingMember] = useState(false),;
  const [newMemberEmail, setNewMemberEmail] = useState(""),;
=======
import { toast } from "@/hooks/use-toast";
export function TeamManagement() {;,
  const [isAddingMember, setIsAddingMember] = useState(false);,
  const [newMemberEmail, setNewMemberEmail] = useState('');

import { toast } from '@/hooks/use-toast';
  DialogTrigger} from "@/components/ui/dialog",;""
import { Button } from "@/components/ui/button";""
import { Input } from "@/components/ui/input";""
import { Label } from "@/components/ui/label";""
import { Badge } from "@/components/ui/badge";""
import { toast } from "@/hooks/use-toast";"
export function TeamManagement() {;
  const [isAddingMember, setIsAddingMember] = useState(false);"
  const [newMemberEmail, setNewMemberEmail] = useState();
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/TeamManagement.tsx
  // Mock team members data;
  const teamMembers = [;,
    {;
      id: 1,;
      name: "Alex Johnson",;
      email: "alex@example.com",;
      role: "Admin",;
      status: "active",;
      lastActive: "2 hours ago"},;
    {;
pr-12325
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
<<<<<<< HEAD
        title: "Email required",;
        description: "Please enter an email address for the new team member.",;
        variant: "destructive"}),;
=======
        title: 'Email required',,
  description: 'Please enter an email address for the new team member.',;
=======
  DialogTrigger,;'
} from '@/components/ui/dialog';'
import { Button } from '@/components/ui/button';'
import { Input } from '@/components/ui/input';'
import { Label } from '@/components/ui/label';'
import { Badge } from '@/components/ui/badge';'
import { Trash, Mail, UserPlus } from 'lucide-react';'
import { toast } from '@/hooks/use-toast';"
  DialogTrigger} from "@/components/ui/dialog",;"
import { Button } from "@/components/ui/button";"
import { Input } from "@/components/ui/input";"
import { Label } from "@/components/ui/label";"
import { Badge } from "@/components/ui/badge";'
import { Trash, Mail, UserPlus } from 'lucide-react';"
import { toast } from "@/hooks/use-toast";
export function TeamManagement() { return null; }
    },;
    {;
      id: 2,;'
      name: 'Jamie Smith',;'
      email: 'jamie@example && example.com',;'
      role: 'Recruiter',;'
      status: 'active',;'
      lastActive: 'Yesterday',;
    },;
    {;
<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
      id: 3,;'
      name: 'Sam Williams',;'
      email: 'sam@example && example.com',;'
      role: 'Manager',;'
      status: 'pending',;'
      lastActive: 'Never',;
    },;
    {;
      id: 4,;'
      name: 'Taylor Brown',;'
      email: 'taylor@example && example.com',;'
      role: 'Viewer',;'
      status: 'active',;'
=======
      lastActive: 'Yesterday',;
pr-12325
      id: 3,;
      name: 'Sam Williams',;
      email: 'sam@example && example.com',;
      role: 'Manager',;
      status: 'pending',;
      lastActive: 'Never',;
    },;
    {;
pr-12325
      id: 4,;
      name: 'Taylor Brown',;
      email: 'taylor@example && example.com',;
      role: 'Viewer',;
      status: 'active',;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/TeamManagement.tsx
      lastActive: '3 days ago',;
    },;
  ];
  DialogTrigger} from "@/components/ui/dialog",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Label } from "@/components/ui/label",;
import { Badge } from "@/components/ui/badge",;
import { Trash, Mail, UserPlus } from 'lucide-react';
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
      toast({;'
        title: 'Email required',;'
        description: 'Please enter an email address for the new team member.',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/admin/TeamManagement.tsx
        variant: 'destructive',;
      });
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      return;
    }
<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
;
    toast({;
<<<<<<< HEAD
      title: "Invitation sent",;
      description: `An invitation has been sent to ${newMemberEmail}`}),;
    setNewMemberEmail(""),;
=======
    toast({;
      title: 'Invitation sent',;
      description: `An invitation has been sent to ${newMemberEmail}`,;`
    });
    setNewMemberEmail('');
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/TeamManagement.tsx
    setIsAddingMember(false);
  },;
  const handleRemoveMember = (_memberId: number) => {;
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
<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
  return (;
    <div className="space-y-6">;
      <div className="flex items-center justify-between">;
        <h3 className="text-xl font-medium">Team Members</h3>;
=======
      title: 'Invitation sent',,
  description: `An invitation has been sent to ${newMemberEmail}`,;
=======

    toast({;'
      title: 'Invitation sent',;`
      description: `An invitation has been sent to ${newMemberEmail}`,;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/admin/TeamManagement.tsx
    });
'
    setNewMemberEmail('');
    setIsAddingMember(false)
};

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/TeamManagement.tsx
  const handleRemoveMember = (_memberId: number,) => {;
    // In a real app, this would make an API call to remove the member;
<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
    toast({;
      title: 'Team member removed',,
  description: 'The team member has been removed from your workspace.',;
    })
};

  const handleResendInvite = (memberEmail: string,) => {;
    // In a real app, this would make an API call to resend the invitation;
    toast({;
      title: 'Invitation resent',,
  description: `A new invitation has been sent to ${memberEmail}`,;
    })
};
=======
    toast({;'
      title: 'Team member removed',;'
      description: 'The team member has been removed from your workspace.',;
    });
  };
  const handleResendInvite = (memberEmail: string,) => {;
    // In a real app, this would make an API call to resend the invitation;
<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
    toast({;'
      title: 'Invitation resent',;`
      description: `A new invitation has been sent to ${memberEmail}`,;
    });
  };
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/admin/TeamManagement.tsx

  return (
'
    <div className='space - y-6'>;'
      <div className='flex items - center justify - between'>;'
=======
    toast({;
      title: 'Invitation resent',;
      description: `A new invitation has been sent to ${memberEmail}`,;`
    });
  };
  return (
      lastActive: '3 days ago',;
    },;]

  const handleAddMember = () => {;
pr-12325

    <div className='space - y-6'>;
      <div className='flex items - center justify - between'>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/TeamManagement.tsx
        <h3 className='text - xl font - medium'>Team Members</h3>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        <Dialog open={isAddingMember} onOpenChange={setIsAddingMember}>;
<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
          <DialogTrigger asChild>;
            <Button className="gap-2">;
              <UserPlus className="h-4 w-4" />;
=======
          <DialogTrigger as_child>;'
            <Button className='gap - 2'>;'
              <UserPlus className='h - 4 w - 4' />;
<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/admin/TeamManagement.tsx
=======
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
  const handleRemoveMember = (_memberId: number) => {;
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/TeamManagement.tsx
              Add Team Member;
            </Button>;
          </DialogTrigger>;
          <DialogContent>;
            <DialogHeader>;
<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
              <DialogTitle>Add Team Member</DialogTitle>;
              <DialogDescription>;
                Send an invitation to join your workspace. They'll receive an email with instructions.;
              </DialogDescription>;
            </DialogHeader>;
            <div className="grid gap-4 py-4">;
              <div className="grid grid-cols-4 items-center gap-4">;
                <Label htmlFor="email" className="text-right">;
                  Email;
                </Label>;
                <Input;
                  id="email";
                  type="email";
                  placeholder="colleague@company.com";
                  className="col-span-3";
                  value={newMemberEmail}
                  onChange={(e) => setNewMemberEmail(e.target.value)}
                />;
              </div>;
              <div className="grid grid-cols-4 items-center gap-4">;
                <Label htmlFor="role" className="text-right">;
                  Role;
                </Label>;
                <select;
                  id="role";
                  className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";
                >;
                  <option value="admin">Admin</option>;
                  <option value="recruiter">Recruiter</option>;
                  <option value="manager">Manager</option>;
                  <option value="viewer">Viewer</option>;
=======

              <DialogTitle > Add Team Member</DialogTitle>;

              <DialogDescription>;'
=======
              <DialogTitle > Add Team Member</DialogTitle>;
              <DialogDescription>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/TeamManagement.tsx
                Send an invitation to join your workspace. They'll receive an;
                email with instructions.;
              </DialogDescription>;
            </DialogHeader>;
<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
'
            <div className='grid gap - 4 py - 4'>;'
              <div className='grid grid - cols - 4 items - center gap - 4'>;'
                <Label html_for='email' className='text - right'>;
                  Email;
                </Label>;
                <Input;'
                  id='email';'
                  type='email';'
                  placeholder='colleague@company.com';'
                  className='col - span - 3';
                  value={newMemberEmail}
                  on_change={e => setNewMemberEmail (e.target.value)}                />;
              </div>;'
              <div className='grid grid - cols - 4 items - center gap - 4'>;'
                <Label html_for='role' className='text - right'>;
                  Role;
                </Label>;
                <select;'
                  id='role';'
                  className='col - span - 3 flex h - 10 w - full rounded - md border border - input bg - background px - 3 py - 2 text - sm ring - offset - background file:border - 0 file:bg - transparent file:text - sm file:font - medium placeholder:text - muted - foreground focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - ring focus - visible:ring - offset - 2 disabled:cursor - not - allowed disabled:opacity - 50';
                >;
'
                  <option value='admin'>Admin</option>;'
                  <option value='recruiter'>Recruiter</option>;'
                  <option value='manager'>Manager</option>;'
                  <option value='viewer'>Viewer</option>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/admin/TeamManagement.tsx
=======

          <DialogTrigger as_child>;

            <Button className='gap - 2'>;

              <UserPlus className='h - 4 w - 4' />;

            ;
          <DialogContent>;

            <DialogHeader>;


              <DialogTitle > Add Team Member;
              <DialogDescription>;
pr-12325

            <div className='grid gap - 4 py - 4'>;
              <div className='grid grid - cols - 4 items - center gap - 4'>;
                <Label html_for='email' className='text - right'>;
                  Email;
                </Label>;
                <Input ;

pr-12325
                <Input;
                  id='email';
                  type='email';
                  placeholder='colleague@company.com';
                  className='col - span - 3';
                  value={newMemberEmail}
                  on_change={e = /> setNewMemberEmail (e.target.value)}                />;
              </div>;
              <div className='grid grid - cols - 4 items - center gap - 4'>;
                <Label html_for='role' className='text - right'>;
                  Role;
                </Label>;

              </div>;
                <Label html_for='role' className='text - right'>;

pr-12325
                <select;
                  id='role';
                  className='col - span - 3 flex h - 10 w - full rounded - md border border - input bg - background px - 3 py - 2 text - sm ring - offset - background file:border - 0 file:bg - transparent file:text - sm file:font - medium placeholder:text - muted - foreground focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - ring focus - visible:ring - offset - 2 disabled:cursor - not - allowed disabled:opacity - 50';
                >;
                  <option value='admin'>Admin</option>;
                  <option value='recruiter'>Recruiter</option>;
                  <option value='manager'>Manager</option>;
                  <option value='viewer'>Viewer</option>;
              <DialogTitle>Add Team Member</DialogTitle>;
              <DialogDescription>;
                Send an invitation to join your workspace. They'll receive an email with instructions.;
              </DialogDescription>;
            </DialogHeader>;
            <div className="grid gap-4 py-4">;
              <div className="grid grid-cols-4 items-center gap-4">;
                <Label htmlFor="email" className="text-right">;
                  Email;
                </Label>;
                <Input;
                  id="email";
                  type="email";
                  placeholder="colleague@company.com";
                  className="col-span-3";
                  value={newMemberEmail}
                  onChange={(e) => setNewMemberEmail(e.target.value)}
                />;
              </div>;
              <div className="grid grid-cols-4 items-center gap-4">;
                <Label htmlFor="role" className="text-right">;
                  Role;
                </Label>;
                <select;
                  id="role";
                  className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";
                >;
                  <option value="admin">Admin</option>;
                  <option value="recruiter">Recruiter</option>;
                  <option value="manager">Manager</option>;
                  <option value="viewer">Viewer</option>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/TeamManagement.tsx
                </select>;
              </div>;
            </div>;
            <DialogFooter>;
<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
=======
              >;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/TeamManagement.tsx
              <Button variant="outline" onClick={() => setIsAddingMember(false)}>;
                Cancel;
              </Button>;
              <Button onClick={handleAddMember}>Send Invitation</Button>;
            </DialogFooter>;
          </DialogContent>;
        </Dialog>;
      </div>;
<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
      <div className="rounded-md border">;
=======
'
      <div className='rounded-md border'>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/admin/TeamManagement.tsx
=======
      <div className='rounded-md border'>;
      <div className="rounded-md border">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/TeamManagement.tsx
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead>Name</TableHead>;
              <TableHead>Role</TableHead>;
              <TableHead>Status</TableHead>;
<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
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
                      </span>;
                    </div>;
                    <div>;
                      <div className="font-medium">{member.name}</div>;
                      <div className="text-sm text-muted-foreground">;
=======
              <TableHead>Last Active</TableHead>;'
              <TableHead className='text-right'>Actions</TableHead>;
            </TableRow>;
          </TableHeader>;
          <TableBody>;
            {teamMembers && teamMembers.map(member => (              <TableRow key={member && member.id}>;
                <TableCell>;'
                  <div className='flex items-center gap-2'>;'
                    <div className='h-8 w-8 rounded-full bg-muted flex items-center justify-center'>;'
                      <span className='text-sm font-medium'>;
                        {member && member.name;'
                          .split(' ');
<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
                          .map(n => n[0]);'
=======
                          .map(n => n[0]);,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/TeamManagement.tsx
                          .join('')}                      </span>;
                    </div>;
                    <div>;'
                      <div className='font-medium'>{member && member.name}</div>;'
                      <div className='text-sm text-muted-foreground'>;
                        {member && member.email}
              <Button;'
                variant='outline';
                on_click={() => setIsAddingMember (false)}
              >;
                Cancel;
              </Button>;
              <Button on_click={handleAddMember}>Send Invitation</Button>;
            </DialogFooter>;
          </DialogContent>;
        </Dialog>;
      </div>;'
      <div className='rounded - md border'>;
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead > Name</TableHead>;
              <TableHead > Role</TableHead>;
              <TableHead > Status</TableHead>;
              <TableHead > Last Active</TableHead>;'
              <TableHead className='text - right'>Actions</TableHead>;
            </TableRow>;
          </TableHeader>;
          <TableBody>;
            {team_members.map (member => (              <TableRow key={member.id}>;
                <TableCell>;'
                  <div className='flex items - center gap - 2'>;'
                    <div className='h - 8 w - 8 rounded - full bg - muted flex items - center justify - center'>;'
                      <span className='text - sm font - medium'>;
<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
                        {member.name;'
                          .split (' ');
                          .map (number => n[0]);'
=======
                        {member.name;
                          .split (' ');,
                          .map (number => n[0]);
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/TeamManagement.tsx
                          .join ('')}                      </span>;
                    </div>;
                    <div>;'
                      <div className='font - medium'>{member.name}</div>;'
                      <div className='text - sm text - muted - foreground'>;
<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/admin/TeamManagement.tsx
=======
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
                      </span>;
                    </div>;
                    <div>;
                      <div className="font-medium">{member.name}</div>;
                      <div className="text-sm text-muted-foreground">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/TeamManagement.tsx
                        {member.email}
                      </div>;
                    </div>;
                  </div>;
                </TableCell>;
<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/TeamManagement.tsx
                <TableCell>{member.role}</TableCell>;
                <TableCell>;
                  <Badge;
                    variant={member.status === "active" ? "default" : "outline"}
                  >;
                    {member.status}
                  </Badge>;
                </TableCell>;
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
                    ) : (;
                      <Button;
                        variant="ghost";
                        size="sm";
                        className="text-destructive hover:text-destructive";
                        onClick={() => handleRemoveMember(member.id)}
                      >;
                        <Trash className="h-4 w-4" />;
                      </Button>;
<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/TeamManagement.tsx
                    )}
                  </div>;
                </TableCell>;
              </TableRow>;
            ))}
<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
<<<<<<< HEAD:src/components/enterprise/admin/TeamManagement.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/TeamManagement.tsx



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/TeamManagement.tsx
          </TableBody>;
        </Table>;
      </div>;
    </div>;
  );
<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
<<<<<<< HEAD
}
=======



=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/TeamManagement.tsx
                <TableCell>{member.role}</TableCell>;
                <TableCell>;
                  <Badge;'
                    variant={member.status === 'active' ? 'default' : 'outline'}                  >;
                    {member.status}
                  </Badge>;
                </TableCell>;
<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
                <TableCell>{member.last_active}</TableCell>;'
                <TableCell className='text - right'>;'
                  <div className='flex justify - end gap - 2'>;'
                    {member.status === 'pending' ? (
                      <Button;'
                        variant='ghost';'
=======
                <TableCell>{member.last_active}</TableCell>;
                <TableCell className='text - right'>;
                  <div className='flex justify - end gap - 2'>;
                    {member.status === 'pending' ? ('
                      <Button;
                        variant='ghost';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/TeamManagement.tsx
                        size='sm';
                        on_click={() => handleResendInvite (member.email)}                      >;'
                        <Mail className='h - 4 w - 4 mr - 1' />;
                        Resend;
                      </Button>) : (
<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
                      <Button;'
                        variant='ghost';'
                        size='sm';'
                        className='text - destructive hover:text - destructive';
                        on_click={() => handleRemoveMember (member.id)}                      >;'
=======
                      <Button;
                        variant='ghost';
                        size='sm';
                        className='text - destructive hover:text - destructive';',
                        on_click={() => handleRemoveMember (member.id)}                      >;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/TeamManagement.tsx
                        <Trash className='h - 4 w - 4' />;
                      </Button>)}
                  </div>;
                </TableCell>;
              </TableRow>))}
          </TableBody>;
        </Table>;
      </div>;
    </div>);
  //In a real app, this would make an API call to remove the member toast ({}
}
<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
  //In a real app, this would make an API call to resend the invitation toast ({"
}";"
  handleAddMember ";"
}>Send Invitation</Button> </DialogFooter> </DialogContent> </Dialog> </div> <div className=" rounded - md border"> <Table> <TableHeader> <TableRow> <TableHead > Name</TableHead> <TableHead > Role</TableHead> <TableHead > Status</TableHead> <TableHead > Last Active</TableHead> <TableHead className=" text - right">Actions</TableHead> </TableRow> </TableHeader> <TableBody> {}
  team_members.map ( (member) => (<TableRow key= {"
  member.id ";"
=======
  //In a real app, this would make an API call to resend the invitation toast ({
}";
  handleAddMember ";
}>Send Invitation</Button> </DialogFooter> </DialogContent> </Dialog> </div> <div className=" rounded - md border"> <Table> <TableHeader> <TableRow> <TableHead > Name</TableHead> <TableHead > Role</TableHead> <TableHead > Status</TableHead> <TableHead > Last Active</TableHead> <TableHead className=" text - right">Actions</TableHead> </TableRow> </TableHeader> <TableBody> {"
  team_members.map ( (member) => (<TableRow key= {
  member.id ";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/TeamManagement.tsx
}> <TableCell> .join ("");
}</span> </div> <div> </div> </div> </div> </TableCell> <TableCell> {}
  member.role;
}</TableCell> <TableCell> <Badge > {}
  member.status;
<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
}</Badge> </TableCell> <TableCell> {"
  member.last_active ";"
}</TableCell> <TableCell className="text - right"> on_click={"
  () => handleResendInvite (member.email) ";"
}> <Mail className="h - 4 w - 4 mr - 1"/> Resend </Button> className="text - destructive hover:text - destructive"on_click={"
  () => handleRemoveMember (member.id) ";"
}> <Trash className="h - 4 w - 4" /> </Button>);
}</div> </TableCell> </TableRow>) );
}</TableBody> </Table> </div> </div>);'"
}'"}
=======
}</Badge> </TableCell> <TableCell> {
  member.last_active ";
}</TableCell> <TableCell className="text - right"> on_click={"
  () => handleResendInvite (member.email) ";
}> <Mail className="h - 4 w - 4 mr - 1"/> Resend </Button> className="text - destructive hover:text - destructive"on_click={"
  () => handleRemoveMember (member.id) ";
}> <Trash className="h - 4 w - 4" /> </Button>);
}</div> </TableCell> </TableRow>) );
}</TableBody> </Table> </div> </div>);
}'"}"
}
;)
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/TeamManagement.tsx
}
<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
<<<<<<< HEAD:src/components/enterprise/admin/TeamManagement.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/TeamManagement.tsx
=======
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/TeamManagement.tsx
          </TableBody>
        </Table>
      </div>
    </div>
  );

  //In a real app, this would make an API call to remove the member toast ({;
  ;
};
  //In a real app, this would make an API call to resend the invitation toast ({;
  ;
};";
  handleAddMember ";
}>Send Invitation</Button> </DialogFooter> </DialogContent> </Dialog> </div> <div className=" rounded-md border"> <Table> <TableHeader> <TableRow> <TableHead>Name</TableHead> <TableHead>Role</TableHead> <TableHead>Status</TableHead> <TableHead>Last Active</TableHead> <TableHead className=" text-right">Actions</TableHead> </TableRow> </TableHeader> <TableBody> {;
  teamMembers.map ( (member) => (<TableRow key= {;
  member.id ";
}> <TableCell> .join ("") ;
}</span> </div> <div> </div> </div> </div> </TableCell> <TableCell> {;
  member.role ;
}</TableCell> <TableCell> <Badge > {;
  member.status ;
}</Badge> </TableCell> <TableCell> {;
  member.lastActive ";
}</TableCell> <TableCell className="text-right"> onClick={;
  () => handleResendInvite (member.email) ";
}> <Mail className="h-4 w-4 mr-1"/> Resend </Button> className="text-destructive hover:text-destructive"onClick={;
  () => handleRemoveMember (member.id) ";
}> <Trash className="h-4 w-4" /> </Button>) ;
}</div> </TableCell> </TableRow>) ) ;
}</TableBody> </Table> </div> </div>) ;
}'"
<<<<<<< HEAD:src/components/enterprise/admin/TeamManagement.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD:src_backup/components/enterprise/admin/TeamManagement.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/admin/TeamManagement.tsx
=======
;'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/admin/TeamManagement.tsx
=======
            <DialogFooter>;

              <Button onClick={handleAddMember}>Send Invitation;
      <div className='rounded-md border'>;
        <Table>;

          <TableHeader>;

            <TableRow>;

              <TableHead>Name;
              <TableHead>Role;
              <TableHead>Status;
              <TableHead>Last Active;
              <TableHead className='text-right'>Actions;
          <TableBody>;

            {teamMembers && teamMembers.map(member => (              <TableRow key={member && member.id}>;

                <TableCell>;

                  <div className='flex items-center gap-2'>;
                    <div className='h-8 w-8 rounded-full bg-muted flex items-center justify-center'>;
                      <span className='text-sm font-medium'>;
</span>)
                          .join()}                      </span>;
                    <div>;
                      <div className='font-medium'>{member && member.name}</div>;
                      <div className='text-sm text-muted-foreground'>;
              <Button;
                variant='outline';
                on_click={() => setIsAddingMember (false)}

              <Button on_click={handleAddMember}>Send Invitation;
      <div className='rounded - md border'>;



              <TableHead > Name;
              <TableHead > Role;
              <TableHead > Status;
              <TableHead > Last Active;
              <TableHead className='text - right'>Actions;

            {team_members.map (member => (              <TableRow key={member.id}>;


                  <div className='flex items - center gap - 2'>;
                    <div className='h - 8 w - 8 rounded - full bg - muted flex items - center justify - center'>;
                      <span className='text - sm font - medium'>;
                          .join ()}                      </span>;
                      <div className='font - medium'>{member.name}</div>;
                      <div className='text - sm text - muted - foreground'>;
                <TableCell>{member.role};

                  <Badge;
                    variant={member.status === 'active' ? 'default' : 'outline'}                  >;

                <TableCell>{member.last_active};
                <TableCell className='text - right'>;

                  <div className='flex justify - end gap - 2'>;
                        variant='ghost';
                        size='sm';
                        on_click={() => handleResendInvite (member.email)}                      >;

                        <Mail className='h - 4 w - 4 mr - 1' />;

                      ) : (
                        className='text - destructive hover:text - destructive';')
                        on_click={() => handleRemoveMember (member.id)}                      >;

                        <Trash className='h - 4 w - 4' />;

                      )}
              ))}
    </div>);
}>Send Invitation    </div> <div className=" rounded - md border"> <Table> <TableHeader> <TableRow> <TableHead > Name <TableHead > Role <TableHead > Status <TableHead > Last Active <TableHead className=" text - right">Actions   <TableBody> {"
  team_members.map ( (member) => (<TableRow key= {"
  member.id ";")"
}> <TableCell> .join ("");"

}</span> </div> <div> </div> </div> </div>  <TableCell> {
  member.role;
} <TableCell> <Badge > {

}  <TableCell> {
} <TableCell className="text - right"> on_click={"
}> <Mail className="h - 4 w - 4 mr - 1"/> Resend  className="text - destructive hover:text - destructive"on_click={"
}> <Trash className="h - 4 w - 4" /> );"

}</div>  ) );
}  </div> </div>);"`;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/admin/TeamManagement.tsx
