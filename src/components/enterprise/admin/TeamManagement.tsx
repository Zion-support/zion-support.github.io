<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/enterprise/admin/TeamManagement.tsx

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React, { useState } from 'react'; import {
import {
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  // Mock team members data
=======
>>>>>>>   // Mock team members data
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  // Mock team members data
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      name: 'Taylor Brown',
      email: 'taylor@example.com',
      role: 'Viewer',
      status: 'active',
      lastActive: '3 days ago',
    },
  ]
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      name: "Taylor Brown",
      email: "taylor@example.com",
      role: "Viewer",
      status: "active",
      lastActive: "3 days ago"}],

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const handleAddMember = () => {
=======
const handleAddMember = () => {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
    // In a real app, this would make an API call to add the member
    if (!newMemberEmail) {
      toast({
<<<<<<< HEAD
<<<<<<< HEAD

      return

=======
>>>>>>>   const handleAddMember = () => {
    // In a real app, this would make an API call to add the member
    if (!newMemberEmail) {
      toast({
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        title: 'Email required'
        description: 'Please enter an email address for the new team member.'
        variant: 'destructive'
      })
<<<<<<< HEAD
<<<<<<< HEAD
      return
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        title: "Email required",
        description: "Please enter an email address for the new team member.",
        variant: "destructive"}),
      return
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        title: 'Email required',
        description: 'Please enter an email address for the new team member.',
        variant: 'destructive',
      })
      return;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

    }
    toast({

=======
>>>>>>>     }
    toast({
      title: 'Invitation sent'
      description: `An invitation has been sent to ${newMemberEmail}`
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    }
    toast({
      title: 'Invitation sent'
      description: `An invitation has been sent to ${newMemberEmail}`
      title: 'Invitation sent',
      description: `An invitation has been sent to ${newMemberEmail}`,
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  }

=======
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  Table,
========
<<<<<<< HEAD
Table,
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/TeamManagement.tsx
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
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/enterprise/admin/TeamManagement.tsx
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  }
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
        title: "Email required",
        description: "Please enter an email address for the new team member.",
        variant: "destructive"}),
      return
    }

    toast({
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return (
>>>>>>>     <div className="space-y-6">
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  return (
    <div className="space-y-6">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  id='email'
                  type='email'
                  placeholder='colleague@company.com'
                  className='col-span-3'
                  value={newMemberEmail}
                  onChange={e => setNewMemberEmail(e.target.value)}                />
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>               </div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              </div>
>>>>>>>               <div className="grid grid-cols-4 items-center gap-4">
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  id="email"
                  type="email"
                  placeholder="colleague@company.com"
                  className="col-span-3"
                  value={newMemberEmail}
                  onChange={(e) => setNewMemberEmail(e.target.value)}
                />
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
      <div className='rounded-md border'>
>>>>>>>         <Table>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        <Table>
>>>>>>>           <TableHeader>
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      <div className='rounded-md border'>

      <div className="rounded-md border">
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
        <Table>
          <TableHeader>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
            {teamMembers.map(member => (              <TableRow key={member.id}>
>>>>>>>                 <TableCell>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                <TableCell>
>>>>>>>                   <div className="flex items-center gap-2">
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            {teamMembers.map(member => (              <TableRow key={member.id}>
            {teamMembers.map((member) => (
              <TableRow key={member.id}>
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                <TableCell>
                  <div className="flex items-center gap-2">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                      <span className="text-sm font-medium">
                        {member.name
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
                          .split(' ')
                          .map(n => n[0])
                          .join('')}                      </span>
>>>>>>>                     </div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                    </div>
>>>>>>>                     <div>
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                          .split(' ')
                          .map(n => n[0])
                          .join('')}                      </span>
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                    </div>
                    <div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
                    variant={member.status === 'active' ? 'default' : 'outline'}                  >
>>>>>>>                     {member.status}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                    {member.status}
>>>>>>>                   </Badge>
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                    variant={member.status === 'active' ? 'default' : 'outline'}                  >
                    variant={member.status === "active" ? "default" : "outline"}
                  >
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                    {member.status}
                  </Badge>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                </TableCell>
                <TableCell>{member.lastActive}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    {member.status === "pending" ? (
                      <Button
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
                        variant="ghost"
                        size="sm"
                        onClick={() => handleResendInvite(member.email)}
                      >
                        <Mail className="h-4 w-4 mr-1" />

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                        Resend
                      </Button>
                    ) : (
                      <Button

                    )}
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                        variant='ghost'
                        size='sm'
                        onClick={() => handleResendInvite(member.email)}                      >
                        <Mail className='h-4 w-4 mr-1' />
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>                         Resend
                      </Button>
                    ) : (
                      <Button
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                        variant='ghost'
                        size='sm'
                        className='text-destructive hover:text-destructive'
                        onClick={() => handleRemoveMember(member.id)}                      >
                        <Trash className='h-4 w-4' />
                      </Button>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>                     )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  </div>
                </TableCell>
              </TableRow>
            ))}
<<<<<<< HEAD

=======
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
>>>>>>> 
                        Resend
                      </Button>
                    ) : (
                      <Button

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                        variant="ghost"
                        size="sm"
                        className="text-destructive hover:text-destructive"
import React, { useState } from "react",;
import {;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
========
import React, { useState } from 'react';import {;
=======

import React, { useState } from "react",;
import {;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/TeamManagement.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
<<<<<<< HEAD
<<<<<<< HEAD
  TableRow,;
} from '@/components/ui/table';
=======
  TableRow} from "@/components/ui/table",;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
  TableRow} from "@/components/ui/table",;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import {;
  Dialog,;
  DialogContent,;
  DialogDescription,;
  DialogFooter,;
  DialogHeader,;
  DialogTitle,;
<<<<<<< HEAD
<<<<<<< HEAD
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
  // Mock team members data;
  const teamMembers = [;
    {;
      id: 1,;
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
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  DialogTrigger} from "@/components/ui/dialog",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Label } from "@/components/ui/label",;
import { Badge } from "@/components/ui/badge",;
import { Trash, Mail, UserPlus } from 'lucide-react';
import { toast } from "@/hooks/use-toast",;
<<<<<<< HEAD
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const handleAddMember = () => {;
    // In a real app, this would make an API call to add the member;
    if (!newMemberEmail) {;
      toast({;
<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  return (
<<<<<<<< HEAD:src/components/enterprise/admin/TeamManagement.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/TeamManagement.tsx
    <div className='space - y-6'>;
      <div className='flex items - center justify - between'>;
        <h3 className='text - xl font - medium'>Team Members</h3>;
        <Dialog open={isAddingMember} onOpenChange={setIsAddingMember}>;
          <DialogTrigger as_child>;
            <Button className='gap - 2'>;
              <UserPlus className='h - 4 w - 4' />;
<<<<<<<< HEAD:src/components/enterprise/admin/TeamManagement.tsx

========
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (;
    <div className="space-y-6">;
      <div className="flex items-center justify-between">;
        <h3 className="text-xl font-medium">Team Members</h3>;
        <Dialog open={isAddingMember} onOpenChange={setIsAddingMember}>;
          <DialogTrigger asChild>;
            <Button className="gap-2">;
              <UserPlus className="h-4 w-4" />;
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/TeamManagement.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              Add Team Member;
            </Button>;
          </DialogTrigger>;
          <DialogContent>;
            <DialogHeader>;
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/enterprise/admin/TeamManagement.tsx

              <DialogTitle > Add Team Member</DialogTitle>;

========
<<<<<<< HEAD
              <DialogTitle > Add Team Member</DialogTitle>;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/TeamManagement.tsx
              <DialogDescription>;
                Send an invitation to join your workspace. They'll receive an;
                email with instructions.;
              </DialogDescription>;
            </DialogHeader>;
<<<<<<<< HEAD:src/components/enterprise/admin/TeamManagement.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/TeamManagement.tsx
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
<<<<<<<< HEAD:src/components/enterprise/admin/TeamManagement.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/TeamManagement.tsx
                  <option value='admin'>Admin</option>;
                  <option value='recruiter'>Recruiter</option>;
                  <option value='manager'>Manager</option>;
                  <option value='viewer'>Viewer</option>;
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                </select>;
              </div>;
            </div>;
            <DialogFooter>;
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/enterprise/admin/TeamManagement.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/TeamManagement.tsx
              >;
=======
              <Button variant="outline" onClick={() => setIsAddingMember(false)}>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
              <Button variant="outline" onClick={() => setIsAddingMember(false)}>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                Cancel;
              </Button>;
              <Button onClick={handleAddMember}>Send Invitation</Button>;
            </DialogFooter>;
          </DialogContent>;
        </Dialog>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
      <div className='rounded-md border'>;
=======
;
      <div className="rounded-md border">;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
      <div className="rounded-md border">;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead>Name</TableHead>;
              <TableHead>Role</TableHead>;
              <TableHead>Status</TableHead>;
              <TableHead>Last Active</TableHead>;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                        {member.email}
<<<<<<<< HEAD:src/components/enterprise/admin/TeamManagement.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/TeamManagement.tsx
=======
                        {member.email}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      </div>;
                    </div>;
                  </div>;
                </TableCell>;
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/enterprise/admin/TeamManagement.tsx



<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                    )}
                  </div>;
                </TableCell>;
              </TableRow>;
            ))}

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/TeamManagement.tsx
          </TableBody>;
        </Table>;
      </div>;
    </div>;
  );
<<<<<<<< HEAD:src/components/enterprise/admin/TeamManagement.tsx


<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
========
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/TeamManagement.tsx
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
<<<<<<<< HEAD:src/components/enterprise/admin/TeamManagement.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> }
;

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
                <TableCell>{member.role}</TableCell>;
                <TableCell>;
                  <Badge;
                    variant={member.status === "active" ? "default" :"outline"}
=======
                <TableCell>{member.role}</TableCell>;
                <TableCell>;
                  <Badge;
                    variant={member.status === "active" ? "default" : "outline"}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
                    ) :(;
=======
                    ) : (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      <Button;
                        variant="ghost";
                        size="sm";
                        className="text-destructive hover:text-destructive";
                        onClick={() => handleRemoveMember(member.id)}
                      >;
                        <Trash className="h-4 w-4" />;
<<<<<<< HEAD
                      </Button>;                    )}
                  </div>;
                </TableCell>;
              </TableRow>;
            ))}
=======
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          </TableBody>;
        </Table>;
      </div>;
    </div>;
<<<<<<< HEAD
  ),;}
 import {;
  Table;
TableBody;
TableCell;
TableHead;
TableHeader;
import {;
  Dialog;
DialogContent;
DialogDescription;
DialogFooter;
DialogHeader;
DialogTitle;
//In a real app, this would make an API call to add the member if (!newMemberEmail) {;
  toast ({;
  setNewMemberEmail ("");
setIsAddingMember (false);
};
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/TeamManagement.tsx
=======
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
}
;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
