
import React, {_useState} from "react";
import {_Table, _TableBody, _TableCell, _TableHead, _TableHeader, _TableRow} from "@/components/ui/table";
import {_Dialog, _DialogContent, _DialogDescription, _DialogFooter, _DialogHeader, _DialogTitle, _DialogTrigger} from "@/components/ui/dialog";

export function TeamManagement() {_const [isAddingMember, _setIsAddingMember] = useState(false);
  const [newMemberEmail, _setNewMemberEmail] = useState("");

  // Mock team members data
  const _teamMembers = [
    {
      id: 1, _name: "Alex Johnson", _email: "alex@example.com", _role: "Admin", _status: "active", _lastActive: "2 hours ago"},
    {_id: 2, _name: "Jamie Smith", _email: "jamie@example.com", _role: "Recruiter", _status: "active", _lastActive: "Yesterday"},
    {_id: 3, _name: "Sam Williams", _email: "sam@example.com", _role: "Manager", _status: "pending", _lastActive: "Never"},
    {_id: 4, _name: "Taylor Brown", _email: "taylor@example.com", _role: "Viewer", _status: "active", _lastActive: "3 days ago"}];

  const _handleAddMember = () => {_// In a real app, _this would make an API call to add the member
    if (!newMemberEmail) {
      toast({
        title: "Email required", _description: "Please enter an email address for the new team member.", _variant: "destructive"});
      return;
    }

    toast({_title: "Invitation sent", _description: `An invitation has been sent to ${newMemberEmail}`});

    setNewMemberEmail("");
    setIsAddingMember(false);
  };

  const _handleRemoveMember = (_memberId: number) => {_// In a real app, _this would make an API call to remove the member
    toast({
      title: "Team member removed", _description: "The team member has been removed from your workspace."});
  };

  const _handleResendInvite = (_memberEmail: string) => {_// In a real app, _this would make an API call to resend the invitation
    toast({
      title: "Invitation resent", _description: `A new invitation has been sent to ${memberEmail}`});
  };

  return (_<div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-medium">Team Members</h3>
        <Dialog open={_isAddingMember} onOpenChange={_setIsAddingMember}>
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
                  value={_newMemberEmail}
                  onChange={_(e) => setNewMemberEmail(e.target.value)}
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
              <Button variant="outline" onClick={_() => setIsAddingMember(false)}>
                Cancel
              </Button>
              <Button onClick={_handleAddMember}>Send Invitation</Button>
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
            {_teamMembers.map(_(member) => (
              <TableRow key={member.id}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                      <span className="text-sm font-medium">
                        {_member.name
                          .split(" ")
                          .map(_(n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium">{_member.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {_member.email}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{_member.role}</TableCell>
                <TableCell>
                  <Badge
                    variant={_member.status === "active" ? "default" : "outline"}
                  >
                    {_member.status}
                  </Badge>
                </TableCell>
                <TableCell>{_member.lastActive}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    {_member.status === "pending" ? (_<Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleResendInvite(member.email)}
                      >
                        <Mail className="h-4 w-4 mr-1" />
                        Resend
                      </Button>
                    ) : (_<Button
                        variant="ghost"
                        size="sm"
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
  );
}
