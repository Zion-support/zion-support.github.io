<<<<<<< HEAD
<<<<<<< HEAD

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
import React, { useState } from 'react'; import {
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
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
  // Mock team members data
  const teamMembers = [
    {
      id: 1
      name: 'Alex Johnson'
      email: 'alex@example.com'
      role: 'Admin'
      status: 'active'
      lastActive: '2 hours ago'
    }
    {
      id: 2
      name: 'Jamie Smith'
      email: 'jamie@example.com'
      role: 'Recruiter'
      status: 'active'
      lastActive: 'Yesterday'
    }
    {
      id: 3
      name: 'Sam Williams'
      email: 'sam@example.com'
      role: 'Manager'
      status: 'pending'
      lastActive: 'Never'
    }
    {
      id: 4
      name: 'Taylor Brown'
      email: 'taylor@example.com'
      role: 'Viewer'
      status: 'active'
      lastActive: '3 days ago'
    }
  ]
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,;
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,

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
      name: 'Taylor Brown',
      email: 'taylor@example.com',
      role: 'Viewer',
      status: 'active',
      lastActive: '3 days ago',
    },
  ]
      name: "Taylor Brown",
      email: "taylor@example.com",
      role: "Viewer",
      status: "active",
      lastActive: "3 days ago"}],

  const handleAddMember = () => {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const handleAddMember = () => {
    // In a real app, this would make an API call to add the member
    if (!newMemberEmail) {
      toast({
<<<<<<< HEAD
<<<<<<< HEAD
    // In a real app, this would make an API call to add the member
    if (!newMemberEmail) {
      toast({
        title: 'Email required'
        description: 'Please enter an email address for the new team member.'
        variant: 'destructive'
      })
        title: "Email required",
        description: "Please enter an email address for the new team member.",
        variant: "destructive"}),
      return
        title: 'Email required',
        description: 'Please enter an email address for the new team member.',
        variant: 'destructive',
      })
      return;
    toast({
      title: 'Invitation sent'
      description: `An invitation has been sent to ${newMemberEmail}`
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


        title: "Email required",
        description: "Please enter an email address for the new team member.",
        variant: "destructive"}),


      return
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }
    toast({
      title: 'Invitation sent'
      description: `An invitation has been sent to ${newMemberEmail}`
      title: 'Invitation sent',
      description: `An invitation has been sent to ${newMemberEmail}`,
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    }
    toast({


      title: 'Invitation sent',
      description: `An invitation has been sent to ${newMemberEmail}`,


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    })
    setNewMemberEmail('')
    setIsAddingMember(false)
  }
  const handleRemoveMember = (_memberId: number,) => {
    // In a real app, this would make an API call to remove the member
    toast({
      title: 'Team member removed'
      description: 'The team member has been removed from your workspace.'
    })
  }
  const handleResendInvite = (memberEmail: string,) => {
    // In a real app, this would make an API call to resend the invitation
    toast({
      title: 'Invitation resent'
      description: `A new invitation has been sent to ${memberEmail}`
    })
  Table,
<<<<<<< HEAD
  }


=======
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components / ui / table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
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
import { toast  } from '@/hooks / use - toast';
export /**
 * TeamManagement - Function description
 */
function TeamManagement() {
  const [isAddingMember, setIsAddingMember] = useState (false);
  const [newMemberEmail, setNewMemberEmail] = useState ('');
  // Mock team members data;
  const team_members = [;
    {
      id: 1,
      name: 'Alex Johnson',
      email: 'alex@example.com',
      role: 'Admin',
      status: 'active',
      last_active: '2 hours ago',
    },
    {
      id: 2,
      name: 'Jamie Smith',
      email: 'jamie@example.com',
      role: 'Recruiter',
      status: 'active',
      last_active: 'Yesterday',
    },
    {
      id: 3,
      name: 'Sam Williams',
      email: 'sam@example.com',
      role: 'Manager',
      status: 'pending',
      last_active: 'Never',
    },
    {
      id: 4,
      name: 'Taylor Brown',
      email: 'taylor@example.com',
      role: 'Viewer',
      status: 'active',
      last_active: '3 days ago',
    },
  ];
  const handleAddMember = () =>: any {
    // In a real app, this would make an API call to add the member;
    // Check condition
if ( {) {
  $2
}
      toast ({
        title: 'Email required',
        description: 'Please enter an email address for the new team member.',
        variant: 'destructive',
      });
      return;
    }
    toast ({
      title: 'Invitation sent',
      description: `An invitation has been sent to ${newMemberEmail}`,
    });
    setNewMemberEmail ('');
    setIsAddingMember (false);
  }
  const handleRemoveMember = (_memberId: number, ) =>: any {
    // In a real app, this would make an API call to remove the member;
    toast ({
      title: 'Team member removed',
      description: 'The team member has been removed from your workspace.',
    });
  }
  const handleResendInvite = (member_email: string, ) =>: any {
    // In a real app, this would make an API call to resend the invitation;
    toast ({
      title: 'Invitation resent',
      description: `A new invitation has been sent to ${member_email}`,
    });
  }


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        title: "Email required",
        description: "Please enter an email address for the new team member.",
        variant: "destructive"}),
      return
    }

    toast({
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      title: "Invitation sent",
      description: `An invitation has been sent to ${newMemberEmail}`}),

    setNewMemberEmail(""),
    setIsAddingMember(false)
  },

  const handleRemoveMember = (_memberId: number) => {
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
  },
<<<<<<< HEAD
<<<<<<< HEAD
  return (



=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  id='email'
                  type='email'
                  placeholder='colleague@company.com'
                  className='col-span-3'
                  value={newMemberEmail}
                  onChange={e => setNewMemberEmail(e.target.value)}                />
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
      <div className='rounded-md border'>
        <Table>
      <div className='rounded-md border'>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      <div className='rounded-md border'>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
<<<<<<< HEAD
            {teamMembers.map(member => (              <TableRow key={member.id}>
                <TableCell>
            {teamMembers.map(member => (              <TableRow key={member.id}>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            {teamMembers.map(member => (              <TableRow key={member.id}>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {teamMembers.map((member) => (
              <TableRow key={member.id}>

                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                      <span className="text-sm font-medium">
                        {member.name
<<<<<<< HEAD
<<<<<<< HEAD
                          .split(' ')
                          .map(n => n[0])
                          .join('')}                      </span>
                    </div>
                          .split(' ')
                          .map(n => n[0])
                          .join('')}                      </span>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                          .split(' ')
                          .map(n => n[0])
                          .join('')}                      </span>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
                    variant={member.status === 'active' ? 'default' : 'outline'}                  >
                    {member.status}
                    variant={member.status === 'active' ? 'default' : 'outline'}                  >
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                    variant={member.status === 'active' ? 'default' : 'outline'}                  >
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                        variant="ghost"
                        size="sm"
                        onClick={() => handleResendInvite(member.email)}
                      >
                        <Mail className="h-4 w-4 mr-1" />

                        Resend
                      </Button>
                    ) : (
                      <Button
<<<<<<< HEAD

                    )}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        variant='ghost'
                        size='sm'
                        onClick={() => handleResendInvite(member.email)}                      >
                        <Mail className='h-4 w-4 mr-1' />
                        variant="ghost"
                        size="sm"
                        onClick={() => handleResendInvite(member.email)}
                      >
                        <Mail className="h-4 w-4 mr-1" />
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        Resend
                      </Button>
                    ) : (
                      <Button
                        variant='ghost'
                        size='sm'
                        className='text-destructive hover:text-destructive'
                        onClick={() => handleRemoveMember(member.id)}                      >
                        <Trash className='h-4 w-4' />
                      </Button>
<<<<<<< HEAD
          </TableBody>
        </Table>
      </div>
    </div>
  );
  //In a real app, this would make an API call to remove the member toast ({;
};
  //In a real app, this would make an API call to resend the invitation toast ({};"
  handleAddMember "
}>Send Invitation</Button> </DialogFooter> </DialogContent> </Dialog> </div> <div className=" rounded-md border"> <Table> <TableHeader> <TableRow> <TableHead>Name</TableHead> <TableHead>Role</TableHead> <TableHead>Status</TableHead> <TableHead>Last Active</TableHead> <TableHead className=" text-right">Actions</TableHead> </TableRow> </TableHeader> <TableBody> {
  teamMembers.map ( (member) => (<TableRow key= {
  member.id "
}> <TableCell> .join ("")
}</span> </div> <div> </div> </div> </div> </TableCell> <TableCell> {
  member.role
}</TableCell> <TableCell> <Badge > {
  member.status
}</Badge> </TableCell> <TableCell> {
  member.lastActive "
}</TableCell> <TableCell className="text-right"> onClick={
  () => handleResendInvite (member.email) "
}> <Mail className="h-4 w-4 mr-1"/> Resend </Button> className="text-destructive hover:text-destructive"onClick={
  () => handleRemoveMember (member.id) "
}> <Trash className="h-4 w-4" /> </Button>)
}</div> </TableCell> </TableRow>) )
}</TableBody> </Table> </div> </div>)
}'"}
                        Resend
                      </Button>
                    ) : (
                      <Button
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        variant="ghost"
                        size="sm"
                        className="text-destructive hover:text-destructive"
import React, { useState } from "react",;
import {;
<<<<<<< HEAD
import React, { useState } from 'react';import {;

import React, { useState } from "react",;
import {;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
<<<<<<< HEAD
<<<<<<< HEAD
  TableRow} from "@/components/ui/table",;
  TableRow} from "@/components/ui/table",;
=======
  TableRow,;
} from '@/components/ui/table';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  TableRow,;
} from '@/components/ui/table';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {;
  Dialog,;
  DialogContent,;
  DialogDescription,;
  DialogFooter,;
  DialogHeader,;
  DialogTitle,;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  DialogTrigger,;
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Trash, Mail, UserPlus } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
  DialogTrigger} from "@/components/ui/dialog",;
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Trash, Mail, UserPlus } from 'lucide-react';
import { toast } from "@/hooks/use-toast";
export function TeamManagement() {;
  const [isAddingMember, setIsAddingMember] = useState(false);
  const [newMemberEmail, setNewMemberEmail] = useState('');

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Mock team members data;
  const teamMembers = [;
    {;
      id: 1,;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      name: 'Alex Johnson',;
      email: 'alex@example && example.com',;
      role: 'Admin',;
      status: 'active',;
      lastActive: '2 hours ago',;
    },;
    {;
      id: 2,;
      name: 'Jamie Smith',;
      email: 'jamie@example && example.com',;
      role: 'Recruiter',;
      status: 'active',;
      lastActive: 'Yesterday',;
    },;
    {;
      id: 3,;
      name: 'Sam Williams',;
      email: 'sam@example && example.com',;
      role: 'Manager',;
      status: 'pending',;
      lastActive: 'Never',;
    },;
    {;
      id: 4,;
      name: 'Taylor Brown',;
      email: 'taylor@example && example.com',;
      role: 'Viewer',;
      status: 'active',;
      lastActive: '3 days ago',;
    },;
  ];

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleAddMember = () => {;
    // In a real app, this would make an API call to add the member;
    if (!newMemberEmail) {;
      toast({;
<<<<<<< HEAD
<<<<<<< HEAD

  return (
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        title: 'Email required',;
        description: 'Please enter an email address for the new team member.',;
        variant: 'destructive',;
      });
      return;
    }

    toast({;
      title: 'Invitation sent',;
      description: `An invitation has been sent to ${newMemberEmail}`,;
    });

    setNewMemberEmail('');
    setIsAddingMember(false);
  };

  const handleRemoveMember = (_memberId: number,) => {;
    // In a real app, this would make an API call to remove the member;
    toast({;
      title: 'Team member removed',;
      description: 'The team member has been removed from your workspace.',;
    });
  };

  const handleResendInvite = (memberEmail: string,) => {;
    // In a real app, this would make an API call to resend the invitation;
    toast({;
      title: 'Invitation resent',;
      description: `A new invitation has been sent to ${memberEmail}`,;
    });
  };

  return (

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <div className='space - y-6'>;
      <div className='flex items - center justify - between'>;
        <h3 className='text - xl font - medium'>Team Members</h3>;
        <Dialog open={isAddingMember} onOpenChange={setIsAddingMember}>;
          <DialogTrigger as_child>;
            <Button className='gap - 2'>;
              <UserPlus className='h - 4 w - 4' />;
<<<<<<< HEAD
<<<<<<< HEAD
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
  const handleRemoveMember = (_memberId:number) => {;
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              Add Team Member;
            </Button>;
          </DialogTrigger>;
          <DialogContent>;
            <DialogHeader>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              <DialogTitle > Add Team Member</DialogTitle>;

              <DialogDescription>;
                Send an invitation to join your workspace. They'll receive an;
                email with instructions.;
              </DialogDescription>;
            </DialogHeader>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className='grid gap - 4 py - 4'>;
              <div className='grid grid - cols - 4 items - center gap - 4'>;
                <Label html_for='email' className='text - right'>;
                  Email;
                </Label>;
                <Input;
                  id='email';
                  type='email';
                  placeholder='colleague@company.com';
                  className='col - span - 3';
                  value={newMemberEmail}
                  on_change={e => setNewMemberEmail (e.target.value)}                />;
              </div>;
              <div className='grid grid - cols - 4 items - center gap - 4'>;
                <Label html_for='role' className='text - right'>;
                  Role;
                </Label>;
                <select;
                  id='role';
                  className='col - span - 3 flex h - 10 w - full rounded - md border border - input bg - background px - 3 py - 2 text - sm ring - offset - background file:border - 0 file:bg - transparent file:text - sm file:font - medium placeholder:text - muted - foreground focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - ring focus - visible:ring - offset - 2 disabled:cursor - not - allowed disabled:opacity - 50';
                >;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <option value='admin'>Admin</option>;
                  <option value='recruiter'>Recruiter</option>;
                  <option value='manager'>Manager</option>;
                  <option value='viewer'>Viewer</option>;
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </select>;
              </div>;
            </div>;
            <DialogFooter>;
<<<<<<< HEAD
<<<<<<< HEAD
              <Button variant="outline" onClick={() => setIsAddingMember(false)}>;
              <Button variant="outline" onClick={() => setIsAddingMember(false)}>;
=======

              >;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

              >;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                Cancel;
              </Button>;
              <Button onClick={handleAddMember}>Send Invitation</Button>;
            </DialogFooter>;
          </DialogContent>;
        </Dialog>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
;
      <div className="rounded-md border">;
      <div className="rounded-md border">;
=======

      <div className='rounded-md border'>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

      <div className='rounded-md border'>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead>Name</TableHead>;
              <TableHead>Role</TableHead>;
              <TableHead>Status</TableHead>;
              <TableHead>Last Active</TableHead>;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <TableHead className='text-right'>Actions</TableHead>;
            </TableRow>;
          </TableHeader>;
          <TableBody>;
            {teamMembers && teamMembers.map(member => (              <TableRow key={member && member.id}>;
                <TableCell>;
                  <div className='flex items-center gap-2'>;
                    <div className='h-8 w-8 rounded-full bg-muted flex items-center justify-center'>;
                      <span className='text-sm font-medium'>;
                        {member && member.name;
                          .split(' ');
                          .map(n => n[0]);
                          .join('')}                      </span>;
                    </div>;
                    <div>;
                      <div className='font-medium'>{member && member.name}</div>;
                      <div className='text-sm text-muted-foreground'>;
                        {member && member.email}
              <Button;
                variant='outline';
                on_click={() => setIsAddingMember (false)}
              >;
                Cancel;
              </Button>;
              <Button on_click={handleAddMember}>Send Invitation</Button>;
            </DialogFooter>;
          </DialogContent>;
        </Dialog>;
      </div>;
      <div className='rounded - md border'>;
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead > Name</TableHead>;
              <TableHead > Role</TableHead>;
              <TableHead > Status</TableHead>;
              <TableHead > Last Active</TableHead>;
              <TableHead className='text - right'>Actions</TableHead>;
            </TableRow>;
          </TableHeader>;
          <TableBody>;
            {team_members.map (member => (              <TableRow key={member.id}>;
                <TableCell>;
                  <div className='flex items - center gap - 2'>;
                    <div className='h - 8 w - 8 rounded - full bg - muted flex items - center justify - center'>;
                      <span className='text - sm font - medium'>;
                        {member.name;
                          .split (' ');
                          .map (number => n[0]);
                          .join ('')}                      </span>;
                    </div>;
                    <div>;
                      <div className='font - medium'>{member.name}</div>;
                      <div className='text - sm text - muted - foreground'>;
                        {member.email}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      </div>;
                    </div>;
                  </div>;
                </TableCell>;
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    )}
                  </div>;
                </TableCell>;
              </TableRow>;
            ))}



<<<<<<< HEAD
<<<<<<< HEAD
  //In a real app, this would make an API call to remove the member toast ({;
};
  //In a real app, this would make an API call to resend the invitation toast ({;
};";
  handleAddMember ";
}>Send Invitation</Button> </DialogFooter> </DialogContent> </Dialog> </div> <div className=" rounded-md border"> <Table> <TableHeader> <TableRow> <TableHead>Name</TableHead> <TableHead>Role</TableHead> <TableHead>Status</TableHead> <TableHead>Last Active</TableHead> <TableHead className=" text-right">Actions</TableHead> </TableRow> </TableHeader> <TableBody> {;
  teamMembers && teamMembers.map ( (member) => (<TableRowkey= {
  member && member.id "
}> <TableCell> .join ("") ;
}</span> </div> <div> </div> </div> </div> </TableCell> <TableCell> {;
  member && member.role ;
}</TableCell> <TableCell> <Badge > {;
  member && member.status ;
}</Badge> </TableCell> <TableCell> {;
  member && member.lastActive ";
}</TableCell> <TableCell className="text-right"> onClick={;
  () => handleResendInvite (member && member.email) ";
}> <Mail className="h-4 w-4 mr-1"/> Resend </Button> className="text-destructive hover:text-destructive"onClick={;
  () => handleRemoveMember (member && member.id) ";
}> <Trash className="h-4 w-4" /> </Button>) ;
}</div> </TableCell> </TableRow>) ) ;
}</TableBody> </Table> </div> </div>) ;
}'"}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </TableBody>;
        </Table>;
      </div>;
    </div>;
  );


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                <TableCell>{member.role}</TableCell>;
                <TableCell>;
                  <Badge;
                    variant={member.status === 'active' ? 'default' : 'outline'}                  >;
                    {member.status}
                  </Badge>;
                </TableCell>;
                <TableCell>{member.last_active}</TableCell>;
                <TableCell className='text - right'>;
                  <div className='flex justify - end gap - 2'>;
                    {member.status === 'pending' ? (
                      <Button;
                        variant='ghost';
                        size='sm';
                        on_click={() => handleResendInvite (member.email)}                      >;
                        <Mail className='h - 4 w - 4 mr - 1' />;
                        Resend;
                      </Button>) : (
                      <Button;
                        variant='ghost';
                        size='sm';
                        className='text - destructive hover:text - destructive';
                        on_click={() => handleRemoveMember (member.id)}                      >;
                        <Trash className='h - 4 w - 4' />;
                      </Button>)}
                  </div>;
                </TableCell>;
              </TableRow>))}
          </TableBody>;
        </Table>;
      </div>;
    </div>);
  //In a real app, this would make an API call to remove the member toast ({
}
  //In a real app, this would make an API call to resend the invitation toast ({
}";
  handleAddMember ";
}>Send Invitation</Button> </DialogFooter> </DialogContent> </Dialog> </div> <div className=" rounded - md border"> <Table> <TableHeader> <TableRow> <TableHead > Name</TableHead> <TableHead > Role</TableHead> <TableHead > Status</TableHead> <TableHead > Last Active</TableHead> <TableHead className=" text - right">Actions</TableHead> </TableRow> </TableHeader> <TableBody> {
  team_members.map ( (member) => (<TableRow key= {
  member.id ";
}> <TableCell> .join ("");
}</span> </div> <div> </div> </div> </div> </TableCell> <TableCell> {
  member.role;
}</TableCell> <TableCell> <Badge > {
  member.status;
}</Badge> </TableCell> <TableCell> {
  member.last_active ";
}</TableCell> <TableCell className="text - right"> on_click={
  () => handleResendInvite (member.email) ";
}> <Mail className="h - 4 w - 4 mr - 1"/> Resend </Button> className="text - destructive hover:text - destructive"on_click={
  () => handleRemoveMember (member.id) ";
}> <Trash className="h - 4 w - 4" /> </Button>);
}</div> </TableCell> </TableRow>) );
}</TableBody> </Table> </div> </div>);
}'"}
<<<<<<< HEAD
                <TableCell>{member.role}</TableCell>;
                <TableCell>;
                  <Badge;
                    variant={member.status === "active" ? "default" :"outline"}
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
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
  //In a real app, this would make an API call to remove the member toast ({;
};
  //In a real app, this would make an API call to resend the invitation toast ({};"
  handleAddMember "
}>Send Invitation</Button> </DialogFooter> </DialogContent> </Dialog> </div> <div className=" rounded-md border"> <Table> <TableHeader> <TableRow> <TableHead>Name</TableHead> <TableHead>Role</TableHead> <TableHead>Status</TableHead> <TableHead>Last Active</TableHead> <TableHead className=" text-right">Actions</TableHead> </TableRow> </TableHeader> <TableBody> {
  teamMembers.map ( (member) => (<TableRow key= {
  member.id "
}> <TableCell> .join ("")
}</span> </div> <div> </div> </div> </div> </TableCell> <TableCell> {
  member.role
}</TableCell> <TableCell> <Badge > {
  member.status
}</Badge> </TableCell> <TableCell> {
  member.lastActive "
}</TableCell> <TableCell className="text-right"> onClick={
  () => handleResendInvite (member.email) "
}> <Mail className="h-4 w-4 mr-1"/> Resend </Button> className="text-destructive hover:text-destructive"onClick={
  () => handleRemoveMember (member.id) "
}> <Trash className="h-4 w-4" /> </Button>)
}</div> </TableCell> </TableRow>) )
}</TableBody> </Table> </div> </div>)
}'"}
          </TableBody>;
        </Table>;
      </div>;
    </div>;
  );
}
;
}
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
