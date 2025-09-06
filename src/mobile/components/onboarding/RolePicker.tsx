import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Briefcase, Users, Check } from 'lucide-react'
type UserRole = 'talent' | 'client' | null
interface RolePickerProps {
  onSelect: (role: UserRole) => void
export function RolePicker({ onSelect }: RolePickerProps) {
  const [selectedRole, setSelectedRole] = useState<UserRole>(null)
  const handleSelect = (role: UserRole) => {
    setSelectedRole(role)
    onSelect(role)
  }
  return (
    <div className='space-y-4 px-4'>
      <h2 className='text-xl font-medium'>What brings you to Zion?</h2>
      <p className='text-muted-foreground'>
        Choose how you want to use our platform
      </p>
      <div className='space-y-3 mt-6'>
        <Card


type UserRole = any;
  return (
    <div className='space-y-4 px-4'>
      <h2 className='text-xl font-medium'>What brings you to Zion?</h2>
      <p className='text-muted-foreground'>
        Choose how you want to use our platform
      </p>
      <div className='space-y-3 mt-6'>
        <Card

                <Check className="h-5 w-5 text-primary" />
import React, { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent } from "@/components/ui/card",;
import { Briefcase, Users, Check } from 'lucide-react';
type UserRole = "talent" | "client" | null,;

    </div>);
}
;
