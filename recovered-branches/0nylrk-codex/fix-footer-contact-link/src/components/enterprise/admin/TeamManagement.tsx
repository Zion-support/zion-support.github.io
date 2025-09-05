
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
  const handleAddMember = () => {;
    // In a real app, this would make an API call to add the member;
    if (!newMemberEmail) {;
      toast({;
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
                </select>;
              </div>;
            </div>;
            <DialogFooter>;
              <Button variant="outline" onClick={() => setIsAddingMember(false)}>;
                Cancel;
              </Button>;
              <Button onClick={handleAddMember}>Send Invitation</Button>;
            </DialogFooter>;
          </DialogContent>;
        </Dialog>;
      </div>;
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
                      </span>;
                    </div>;
                    <div>;
                      <div className="font-medium">{member.name}</div>;
                      <div className="text-sm text-muted-foreground">;
                        {member.email}
                      </div>;
                    </div>;
                  </div>;
                </TableCell>;
                <TableCell>{member.role}</TableCell>;
                <TableCell>;
                  <Badge;
                    variant={member.status === "active" ? "default" :"outline"}
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
                    ) :(;
                      <Button;
                        variant="ghost";
                        size="sm";
                        className="text-destructive hover:text-destructive";
                        onClick={() => handleRemoveMember(member.id)}
                      >;
                        <Trash className="h-4 w-4" />;
                      </Button>;
=======
import React, { useState } from "react",import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow} from "@/components/ui/table",import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger} from "@/components/ui/dialog",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Label } from "@/components/ui/label",
import { Badge } from "@/components/ui/badge",
import { PlusCircle, Trash, Mail, UserPlus } from "lucide-react",
import { toast } from "@/hooks/use-toast",
export function TeamManagement() {
  const [isAddingMember, setIsAddingMember] = useState(false),
  const [newMemberEmail, setNewMemberEmail] = useState(""),import React, {useState} from "react";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";

export function TeamManagement() {const [isAddingMember, setIsAddingMember] = useState(false);
  const [newMemberEmail, setNewMemberEmail] = useState("");

  // Mock team members data,
const teamMembers = [
    {
      id: 1,
      name: &quot;Alex Johnson&quot;,
      email: &quot;alex@example.com&quot;,
      role: &quot;Admin&quot;,
      status: &quot;active&quot;,
      lastActive: &quot;2 hours ago&quot},
    {
      id: 2,
      name: &quot;Jamie Smith&quot;,
      email: &quot;jamie@example.com&quot;,
      role: &quot;Recruiter&quot;,
      status: &quot;active&quot;,
      lastActive: &quot;Yesterday&quot},
    {
      id: 3,
      name: &quot;Sam Williams&quot;,
      email: &quot;sam@example.com&quot;,
      role: &quot;Manager&quot;,
      status: &quot;pending&quot;,
      lastActive: &quot;Never&quot},
    {
      id: 4,
      name: "Taylor Brown",
      email: "taylor@example.com",
      role: "Viewer",
      status: "active",
      lastActive: "3 days ago"}],      id: 1, name: "Alex Johnson", email: "alex@example.com", role: "Admin", status: "active", lastActive: "2 hours ago"},
    {id: 2, name: "Jamie Smith", email: "jamie@example.com", role: "Recruiter", status: "active", lastActive: "Yesterday"},
    {id: 3, name: "Sam Williams", email: "sam@example.com", role: "Manager", status: "pending", lastActive: "Never"},
    {id: 4, name: "Taylor Brown", email: "taylor@example.com", role: "Viewer", status: "active", lastActive: "3 days ago"}];

  const handleAddMember = () => {_// In a real app, this would make an API call to add the member,
if (!newMemberEmail) {
      toast({
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
    setNewMemberEmail("&quot;);
    setIsAddingMember(false)
  };

  const handleRemoveMember = (memberId: number) => {_// In a real app, this would make an API call to remove the member,
toast({
      title: "Team member removed",
      description: "The team member has been removed from your workspace."})
  }  };

  const handleResendInvite = (memberEmail: string) => {_// In a real app, this would make an API call to resend the invitation,
toast({
      title: "Invitation resent",
      description: `A new invitation has been sent to ${memberEmail}`})
  }  };

  return (
    <div className=&quot;space-y-6&quot;>
      <div className=&quot;flex items-center justify-between&quot;>
        <h3 className=&quot;text-xl font-medium&quot;>Team Members</h3>
        <Dialog open={isAddingMember} onOpenChange={setIsAddingMember}>          <DialogTrigger asChild>
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
                <Input,
id=&quot;email&quot;
                  type=&quot;email&quot;
                  placeholder=&quot;colleague@company.com&quot;
                  className=&quot;col-span-3&quot;
                  value={newMemberEmail}
                  onChange={(e) => setNewMemberEmail(e.target.value)}                />
              </div>
              <div className=&quot;grid grid-cols-4 items-center gap-4&quot;>
                <Label htmlFor=&quot;role&quot; className=&quot;text-right&quot;>
                  Role
                </Label>
                <select,
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
              <Button variant=&quot;outline&quot; onClick={() => setIsAddingMember(false)}>                Cancel
              </Button>
              <Button onClick={handleAddMember}>Send Invitation</Button>
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
            {teamMembers.map(_(member) => (
              <TableRow key={member.id}>
                <TableCell>
                  <div className=&quot;flex items-center gap-2&quot;>
                    <div className=&quot;h-8 w-8 rounded-full bg-muted flex items-center justify-center&quot;>
                      <span className=&quot;text-sm font-medium&quot;>
                        {member.name
                          .split(&quot; &quot;)
                          .map((n) => n[0])                          .join("")}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium">{member.name}</div>
                      <div className="text-sm text-muted-foreground&quot;>
                        {member.email}                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{member.role}</TableCell>
                <TableCell>
                  <Badge,
variant={member.status === &quot;active&quot; ? &quot;default&quot; : &quot;outline"}                  >
                    {member.status}
                  </Badge>
                </TableCell>
                <TableCell>{member.lastActive}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2&quot;>
                    {member.status === &quot;pending&quot; ? (
                      <Button,
variant=&quot;ghost&quot;
                        size=&quot;sm"                        onClick={() => handleResendInvite(member.email)}
                      >
                        <Mail className="h-4 w-4 mr-1&quot; />
                        Resend
                      </Button>
                    ) : (
                      <Button,
variant=&quot;ghost&quot;
                        size=&quot;sm"                        className="text-destructive hover:text-destructive"
                        onClick={_() => handleRemoveMember(member.id)}
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
                    )}
                  </div>;
                </TableCell>;
              </TableRow>;
            ))}
<<<<<<< HEAD
          </TableBody>;
        </Table>;
      </div>;
    </div>;
  ),;
=======
          </TableBody>
        </Table>
      </div>
    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
