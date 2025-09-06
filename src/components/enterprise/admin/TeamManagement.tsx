
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



        title: "Email required",
        description: "Please enter an email address for the new team member.",
        variant: "destructive"}),
      return
    }

    toast({

                  onChange={(e) => setNewMemberEmail(e.target.value)}
                />

      <div className='rounded-md border'>

            {teamMembers.map((member) => (
              <TableRow key={member.id}>


                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>


                    variant={member.status === "active" ? "default" : "outline"}
                  >


                        variant="ghost"
                        size="sm"
                        onClick={() => handleResendInvite(member.email)}
                      >
                        <Mail className="h-4 w-4 mr-1" />

}
;
