
<<<<<<< HEAD
import React{ useState } from "react";
=======
import React, { useState } from "react";
>>>>>>> origin/auto/autonomy-17186719616
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
<<<<<<< HEAD
  DialogTrigger} from "@/components/ui/dialog";
=======
  DialogTrigger,
} from "@/components/ui/dialog";
>>>>>>> origin/auto/autonomy-17186719616
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
<<<<<<< HEAD
import { PlusCircleTrashMailUserPlus } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export function TeamManagement() {
  const [isAddingMembersetIsAddingMember] = useState(false);
  const [newMemberEmailsetNewMemberEmail] = useState("");
=======
import { PlusCircle, Trash, Mail, UserPlus } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export function TeamManagement() {
  const [isAddingMember, setIsAddingMember] = useState(false);
  const [newMemberEmail, setNewMemberEmail] = useState("");
>>>>>>> origin/auto/autonomy-17186719616

  // Mock team members data
  const teamMembers = [
    {
      id: 1,
      name: "Alex Johnson",
      email: "alex@example.com",
      role: "Admin",
      status: "active",
<<<<<<< HEAD
      lastActive: "2 hours ago"},
=======
      lastActive: "2 hours ago",
    },
>>>>>>> origin/auto/autonomy-17186719616
    {
      id: 2,
      name: "Jamie Smith",
      email: "jamie@example.com",
      role: "Recruiter",
      status: "active",
<<<<<<< HEAD
      lastActive: "Yesterday"},
=======
      lastActive: "Yesterday",
    },
>>>>>>> origin/auto/autonomy-17186719616
    {
      id: 3,
      name: "Sam Williams",
      email: "sam@example.com",
      role: "Manager",
      status: "pending",
<<<<<<< HEAD
      lastActive: "Never"},
=======
      lastActive: "Never",
    },
>>>>>>> origin/auto/autonomy-17186719616
    {
      id: 4,
      name: "Taylor Brown",
      email: "taylor@example.com",
      role: "Viewer",
      status: "active",
<<<<<<< HEAD
      lastActive: "3 days ago"}];

  const handleAddMember = () => {
    // In a real appthis would make an API call to add the member
=======
      lastActive: "3 days ago",
    },
  ];

  const handleAddMember = () => {
    // In a real app, this would make an API call to add the member
>>>>>>> origin/auto/autonomy-17186719616
    if (!newMemberEmail) {
      toast({
        title: "Email required",
        description: "Please enter an email address for the new team member.",
<<<<<<< HEAD
        variant: "destructive"});
=======
        variant: "destructive",
      });
>>>>>>> origin/auto/autonomy-17186719616
      return;
    }

    toast({
      title: "Invitation sent",
<<<<<<< HEAD
      description: `An invitation has been sent to ${newMemberEmail}`});
=======
      description: `An invitation has been sent to ${newMemberEmail}`,
    });
>>>>>>> origin/auto/autonomy-17186719616

    setNewMemberEmail("");
    setIsAddingMember(false);
  };

  const handleRemoveMember = (memberId: number) => {
<<<<<<< HEAD
    // In a real appthis would make an API call to remove the member
    toast({
      title: "Team member removed",
      description: "The team member has been removed from your workspace."});
  };

  const handleResendInvite = (memberEmail: string) => {
    // In a real appthis would make an API call to resend the invitation
    toast({
      title: "Invitation resent",
      description: `A new invitation has been sent to ${memberEmail}`});
=======
    // In a real app, this would make an API call to remove the member
    toast({
      title: "Team member removed",
      description: "The team member has been removed from your workspace.",
    });
  };

  const handleResendInvite = (memberEmail: string) => {
    // In a real app, this would make an API call to resend the invitation
    toast({
      title: "Invitation resent",
      description: `A new invitation has been sent to ${memberEmail}`,
    });
>>>>>>> origin/auto/autonomy-17186719616
  };

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
  );
}
