

import React, { useState } from "react";
  Table;
  TableBody;
  TableCell;
  TableHead;
  TableHeader;
  TableRow} from "@/components/ui/table",
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
import { toast } from "@/hooks/use-toast";
export function TeamManagement() {
  const [isAddingMember, setIsAddingMember] = useState(false);
  const [newMemberEmail, setNewMemberEmail] = useState("");
  // Mock team members data
  const teamMembers = null;

  // Mock team members data
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

    // In a real app, this would make an API call to add the member

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

  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,


  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,

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

        title: "Email required",
        description: "Please enter an email address for the new team member.",

        variant: "destructive"}),
      return;
    }

      title: "Invitation sent",

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

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">

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

                Send an invitation to join your workspace. They'll receive an email with instructions.
              </DialogDescription>
            </DialogHeader>"
            <div className="grid gap-4 py-4">"
              <div className="grid grid-cols-4 items-center gap-4">"
                <Label htmlFor="email" className="text-right">
                  Email;
                </Label>

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

              <Button variant="outline" onClick={() => setIsAddingMember(false)}>
                Cancel;
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

              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>

            {teamMembers.map((member) => (
              <TableRow key={member.id}>

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

                          .split(" ")
                          .map((n) => n[0])"
                          .join("")}
                      </span>

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

                    variant={member.status === "active" ? "default" : "outline"}
                  >
                    {member.status}
                  </Badge>
                </TableCell>

                    {member.status === "pending" ? (

                        variant="ghost"

                        size="sm"
                        onClick={() => handleResendInvite(member.email)}
                      >"
                        <Mail className="h-4 w-4 mr-1" />

                        Resend
                      </Button>
                    ) : (
                      <Button

                        variant="ghost"
                        size="sm"
                        className="text-destructive hover:text-destructive"

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

  TableRow,;"
} from '@/components/ui/table';
pr-12325
  Dialog,;
  DialogContent,;
  DialogDescription,;
  DialogFooter,;
  DialogHeader,;
  DialogTitle,;

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

      lastActive: '3 days ago',;
    },;
  ];
  DialogTrigger} from "@/components/ui/dialog",;
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
    // In a real app, this would make an API call to add the member;
    if (!newMemberEmail) {;
      toast({;'
        title: 'Email required',;'
        description: 'Please enter an email address for the new team member.',;'

        variant: 'destructive',;
      });

      return;
    }

    setIsAddingMember(false);
  },;
  const handleRemoveMember = (_memberId: number) => {;
    // In a real app, this would make an API call to remove the member;
    toast({;
      title: "Team member removed",
      description: "The team member has been removed from your workspace."});
  },;
  const handleResendInvite = (memberEmail: string) => {;
    // In a real app, this would make an API call to resend the invitation;
    toast({;
      title: "Invitation resent";
      description: `A new invitation has been sent to ${memberEmail}`});
  };

    });
'
    setNewMemberEmail('');
    setIsAddingMember(false)
};

  const handleRemoveMember = (_memberId: number,) => {;
    // In a real app, this would make an API call to remove the member;

  return (
'
    <div className='space - y-6'>;'
      <div className='flex items - center justify - between'>;'

        <h3 className='text - xl font - medium'>Team Members</h3>;

        <Dialog open={isAddingMember} onOpenChange={setIsAddingMember}>;

              Add Team Member;
            </Button>;
          </DialogTrigger>;
          <DialogContent>;
            <DialogHeader>;

                Send an invitation to join your workspace. They'll receive an;
                email with instructions.;
              </DialogDescription>;
            </DialogHeader>;

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

        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead>Name</TableHead>;
              <TableHead>Role</TableHead>;
              <TableHead>Status</TableHead>;

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

                          .join ('')}                      </span>;
                    </div>;
                    <div>;'
                      <div className='font - medium'>{member.name}</div>;'
                      <div className='text - sm text - muted - foreground'>;

                        {member.email}
                      </div>;
                    </div>;
                  </div>;
                </TableCell>;

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

                    )}
                  </div>;
                </TableCell>;
              </TableRow>;
            ))}

          </TableBody>;
        </Table>;
      </div>;
    </div>;
  );

                <TableCell>{member.role}</TableCell>;
                <TableCell>;
                  <Badge;'
                    variant={member.status === 'active' ? 'default' : 'outline'}                  >;
                    {member.status}
                  </Badge>;
                </TableCell>;

                        size='sm';
                        on_click={() => handleResendInvite (member.email)}                      >;'
                        <Mail className='h - 4 w - 4 mr - 1' />;
                        Resend;
                      </Button>) : (

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

}> <TableCell> .join ("");
}</span> </div> <div> </div> </div> </div> </TableCell> <TableCell> {}
  member.role;
}</TableCell> <TableCell> <Badge > {}
  member.status;

}

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