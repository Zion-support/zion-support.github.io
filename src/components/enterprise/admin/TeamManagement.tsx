
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

      name: "Taylor Brown",
      email: "taylor@example.com",
      role: "Viewer",
      status: "active",
      lastActive: "3 days ago"}],

  const handleAddMember = () => {
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
    }
    toast({
      title: 'Invitation sent'
      description: `An invitation has been sent to ${newMemberEmail}`
      title: 'Invitation sent',
      description: `An invitation has been sent to ${newMemberEmail}`,
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
