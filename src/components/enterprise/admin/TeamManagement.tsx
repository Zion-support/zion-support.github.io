
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react",
=======
import React, { useState } from &quot;react&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
<<<<<<< HEAD
  TableRow} from "@/components/ui/table",
=======
  TableRow} from &quot;@/components/ui/table&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
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
  DialogTrigger} from &quot;@/components/ui/dialog&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Label } from &quot;@/components/ui/label&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Trash, Mail, UserPlus } from 'lucide-react'
import { toast } from &quot;@/hooks/use-toast&quot;;

export function TeamManagement() {
  const [isAddingMember, setIsAddingMember] = useState(false);
  const [newMemberEmail, setNewMemberEmail] = useState("&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
import React, {_useState} from "react";
import {_Table, _TableBody, _TableCell, _TableHead, _TableHeader, _TableRow} from "@/components/ui/table";
import {_Dialog, _DialogContent, _DialogDescription, _DialogFooter, _DialogHeader, _DialogTitle, _DialogTrigger} from "@/components/ui/dialog";

export function TeamManagement() {_const [isAddingMember, _setIsAddingMember] = useState(false);
  const [newMemberEmail, _setNewMemberEmail] = useState("");
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  // Mock team members data
  const _teamMembers = [
    {
<<<<<<< HEAD
      id: 1,
      name: &quot;Alex Johnson&quot;,
      email: &quot;alex@example.com&quot;,
      role: &quot;Admin&quot;,
      status: &quot;active&quot;,
      lastActive: &quot;2 hours ago&quot;},
    {
      id: 2,
      name: &quot;Jamie Smith&quot;,
      email: &quot;jamie@example.com&quot;,
      role: &quot;Recruiter&quot;,
      status: &quot;active&quot;,
      lastActive: &quot;Yesterday&quot;},
    {
      id: 3,
      name: &quot;Sam Williams&quot;,
      email: &quot;sam@example.com&quot;,
      role: &quot;Manager&quot;,
      status: &quot;pending&quot;,
      lastActive: &quot;Never&quot;},
    {
      id: 4,
<<<<<<< HEAD
      name: "Taylor Brown",
      email: "taylor@example.com",
      role: "Viewer",
      status: "active",
      lastActive: "3 days ago"}],
=======
      name: &quot;Taylor Brown&quot;,
      email: &quot;taylor@example.com&quot;,
      role: &quot;Viewer&quot;,
      status: &quot;active&quot;,
      lastActive: &quot;3 days ago&quot;}];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
      id: 1, _name: "Alex Johnson", _email: "alex@example.com", _role: "Admin", _status: "active", _lastActive: "2 hours ago"},
    {_id: 2, _name: "Jamie Smith", _email: "jamie@example.com", _role: "Recruiter", _status: "active", _lastActive: "Yesterday"},
    {_id: 3, _name: "Sam Williams", _email: "sam@example.com", _role: "Manager", _status: "pending", _lastActive: "Never"},
    {_id: 4, _name: "Taylor Brown", _email: "taylor@example.com", _role: "Viewer", _status: "active", _lastActive: "3 days ago"}];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _handleAddMember = () => {_// In a real app, _this would make an API call to add the member
    if (!newMemberEmail) {
      toast({
<<<<<<< HEAD
<<<<<<< HEAD
        title: "Email required",
        description: "Please enter an email address for the new team member.",
        variant: "destructive"}),
      return
    }

    toast({
      title: "Invitation sent",
      description: `An invitation has been sent to ${newMemberEmail}`}),

    setNewMemberEmail(""),
    setIsAddingMember(false)
  },
=======
        title: &quot;Email required&quot;,
        description: &quot;Please enter an email address for the new team member.&quot;,
        variant: &quot;destructive&quot;});
      return;
    }

    toast({
      title: &quot;Invitation sent&quot;,
      description: `An invitation has been sent to ${newMemberEmail}`});
=======
        title: "Email required", _description: "Please enter an email address for the new team member.", _variant: "destructive"});
      return;
    }

    toast({_title: "Invitation sent", _description: `An invitation has been sent to ${newMemberEmail}`});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    setNewMemberEmail("&quot;);
    setIsAddingMember(false);
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  const _handleRemoveMember = (_memberId: number) => {_// In a real app, _this would make an API call to remove the member
    toast({
<<<<<<< HEAD
<<<<<<< HEAD
      title: "Team member removed",
      description: "The team member has been removed from your workspace."})
  },
=======
      title: &quot;Team member removed&quot;,
      description: &quot;The team member has been removed from your workspace.&quot;});
=======
      title: "Team member removed", _description: "The team member has been removed from your workspace."});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  const _handleResendInvite = (_memberEmail: string) => {_// In a real app, _this would make an API call to resend the invitation
    toast({
<<<<<<< HEAD
<<<<<<< HEAD
      title: "Invitation resent",
      description: `A new invitation has been sent to ${memberEmail}`})
  },
=======
      title: &quot;Invitation resent&quot;,
      description: `A new invitation has been sent to ${memberEmail}`});
=======
      title: "Invitation resent", _description: `A new invitation has been sent to ${memberEmail}`});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
  return (
    <div className=&quot;space-y-6&quot;>
      <div className=&quot;flex items-center justify-between&quot;>
        <h3 className=&quot;text-xl font-medium&quot;>Team Members</h3>
        <Dialog open={isAddingMember} onOpenChange={setIsAddingMember}>
=======
  return (_<div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-medium">Team Members</h3>
        <Dialog open={_isAddingMember} onOpenChange={_setIsAddingMember}>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <DialogTrigger asChild>
            <Button className=&quot;gap-2&quot;>
              <UserPlus className=&quot;h-4 w-4&quot; />
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
            <div className=&quot;grid gap-4 py-4&quot;>
              <div className=&quot;grid grid-cols-4 items-center gap-4&quot;>
                <Label htmlFor=&quot;email&quot; className=&quot;text-right&quot;>
                  Email
                </Label>
                <Input
<<<<<<< HEAD
                  id=&quot;email&quot;
                  type=&quot;email&quot;
                  placeholder=&quot;colleague@company.com&quot;
                  className=&quot;col-span-3&quot;
                  value={newMemberEmail}
                  onChange={(e) => setNewMemberEmail(e.target.value)}
=======
                  id="email"
                  type="email"
                  placeholder="colleague@company.com"
                  className="col-span-3"
                  value={_newMemberEmail}
                  onChange={_(e) => setNewMemberEmail(e.target.value)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                />
              </div>
              <div className=&quot;grid grid-cols-4 items-center gap-4&quot;>
                <Label htmlFor=&quot;role&quot; className=&quot;text-right&quot;>
                  Role
                </Label>
                <select
                  id=&quot;role&quot;
                  className=&quot;col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50&quot;
                >
                  <option value=&quot;admin&quot;>Admin</option>
                  <option value=&quot;recruiter&quot;>Recruiter</option>
                  <option value=&quot;manager&quot;>Manager</option>
                  <option value=&quot;viewer&quot;>Viewer</option>
                </select>
              </div>
            </div>
            <DialogFooter>
<<<<<<< HEAD
              <Button variant=&quot;outline&quot; onClick={() => setIsAddingMember(false)}>
=======
              <Button variant="outline" onClick={_() => setIsAddingMember(false)}>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                Cancel
              </Button>
              <Button onClick={_handleAddMember}>Send Invitation</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className=&quot;rounded-md border&quot;>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Active</TableHead>
              <TableHead className=&quot;text-right&quot;>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {_teamMembers.map(_(member) => (
              <TableRow key={member.id}>
                <TableCell>
<<<<<<< HEAD
                  <div className=&quot;flex items-center gap-2&quot;>
                    <div className=&quot;h-8 w-8 rounded-full bg-muted flex items-center justify-center&quot;>
                      <span className=&quot;text-sm font-medium&quot;>
                        {member.name
                          .split(&quot; &quot;)
                          .map((n) => n[0])
=======
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                      <span className="text-sm font-medium">
                        {_member.name
                          .split(" ")
                          .map(_(n) => n[0])
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          .join("")}
                      </span>
                    </div>
                    <div>
<<<<<<< HEAD
                      <div className="font-medium">{member.name}</div>
                      <div className="text-sm text-muted-foreground&quot;>
                        {member.email}
=======
                      <div className="font-medium">{_member.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {_member.email}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{_member.role}</TableCell>
                <TableCell>
                  <Badge
<<<<<<< HEAD
                    variant={member.status === &quot;active&quot; ? &quot;default&quot; : &quot;outline"}
=======
                    variant={_member.status === "active" ? "default" : "outline"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  >
                    {_member.status}
                  </Badge>
                </TableCell>
                <TableCell>{_member.lastActive}</TableCell>
                <TableCell className="text-right">
<<<<<<< HEAD
                  <div className="flex justify-end gap-2&quot;>
                    {member.status === &quot;pending&quot; ? (
                      <Button
                        variant=&quot;ghost&quot;
                        size=&quot;sm"
=======
                  <div className="flex justify-end gap-2">
                    {_member.status === "pending" ? (_<Button
                        variant="ghost"
                        size="sm"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        onClick={() => handleResendInvite(member.email)}
                      >
                        <Mail className="h-4 w-4 mr-1&quot; />
                        Resend
                      </Button>
<<<<<<< HEAD
                    ) : (
                      <Button
                        variant=&quot;ghost&quot;
                        size=&quot;sm"
=======
                    ) : (_<Button
                        variant="ghost"
                        size="sm"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        className="text-destructive hover:text-destructive"
                        onClick={_() => handleRemoveMember(member.id)}
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
}
