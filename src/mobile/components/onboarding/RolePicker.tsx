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

<<<<<<< HEAD
=======
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
=======
import React, { useState } from "react",
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
          className={`cursor-pointer transition-all ${
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
type UserRole = any;
  return (
    <div className='space-y-4 px-4'>
      <h2 className='text-xl font-medium'>What brings you to Zion?</h2>
      <p className='text-muted-foreground'>
        Choose how you want to use our platform
      </p>
      <div className='space-y-3 mt-6'>
        <Card
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>           className={`cursor-pointer transition-all ${
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            selectedRole === 'talent' 
              ? "border-primary bg-primary/5" 
              : "border-border hover:border-primary/40"
          }`}
          onClick={() => handleSelect('talent')}
        >
          <CardContent className="p-5">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">I'm offering services</h3>
                <p className="text-sm text-muted-foreground">Find work and showcase your skills</p>
              </div>
              {selectedRole === 'talent' && (
                <Check className="h-5 w-5 text-primary" />
              )}
            </div>
          </CardContent>
        </Card>
<<<<<<< HEAD

          className={`cursor-pointer transition-all ${
=======
        <Card
>>>>>>>           className={`cursor-pointer transition-all ${
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
type UserRole = "talent" | "client" | null,

interface RolePickerProps {
  onSelect: (role: UserRole) => void
}

export function RolePicker({ onSelect }: RolePickerProps) {
  const [selectedRole, setSelectedRole] = useState<UserRole>(null),

  const handleSelect = (role: UserRole) => {
    setSelectedRole(role),
    onSelect(role)
  },

  return (
    <div className="space-y-4 px-4">
      <h2 className="text-xl font-medium">What brings you to Zion?</h2>
      <p className="text-muted-foreground">Choose how you want to use our platform</p>

      <div className="space-y-3 mt-6">
        <Card 
          className={`cursor-pointer transition-all ${
            selectedRole === 'talent' 
              ? "border-primary bg-primary/5" 
              : "border-border hover:border-primary/40"
          }`}
          onClick={() => handleSelect('talent')}
        >
          <CardContent className="p-5">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">I'm offering services</h3>
                <p className="text-sm text-muted-foreground">Find work and showcase your skills</p>
              </div>
              {selectedRole === 'talent' && (
                <Check className="h-5 w-5 text-primary" />
              )}
            </div>
          </CardContent>
        </Card>
        <Card

        <Card 
          className={`cursor-pointer transition-all ${
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            selectedRole === 'client' 
              ? "border-primary bg-primary/5" 
              : "border-border hover:border-primary/40"
          }`}
          onClick={() => handleSelect('client')}
        >
          <CardContent className="p-5">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">I'm hiring</h3>
                <p className="text-sm text-muted-foreground">Post jobs and find talented professionals</p>
              </div>
              {selectedRole === 'client' && (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                <Check className='h-5 w-5 text-primary' />
              )}
            </div>
          </CardContent>
        </Card>
      </div>;
    </div>;
  );
};
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 
ursor/fix-website-loading-errors-and-merge-6662
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                <Check className="h-5 w-5 text-primary" />
import React, { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent } from "@/components/ui/card",;
import { Briefcase, Users, Check } from 'lucide-react';
type UserRole = "talent" | "client" | null,;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface RolePickerProps {;
  onSelect: (role: UserRole) => void;
}
;
export function RolePicker({ onSelect }: RolePickerProps) {;
  const [selectedRole, setSelectedRole] = useState<UserRole>(null),;
  const handleSelect = (role: UserRole) => {;
    setSelectedRole(role);
    onSelect(role);
  };
  return (;
    <div className="space-y-4 px-4">;
      <h2 className="text-xl font-medium">What brings you to Zion?</h2>;
      <p className="text-muted-foreground">Choose how you want to use our platform</p>;
      <div className="space-y-3 mt-6">;
        <Card;
          className={`cursor-pointer transition-all ${;
            selectedRole === 'talent';
              ? "border-primary bg-primary/5";
              : "border-border hover:border-primary/40";
          }`}
          onClick={() => handleSelect('talent')}
        >;
          <CardContent className="p-5">;
            <div className="flex items-center">;
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">;
                <Briefcase className="h-6 w-6 text-primary" />;
              </div>;
              <div className="flex-1">;
                <h3 className="font-medium">I'm offering services</h3>;
                <p className="text-sm text-muted-foreground">Find work and showcase your skills</p>;
              </div>;
              {selectedRole === 'talent' && (;
                <Check className="h-5 w-5 text-primary" />;
              )}
<<<<<<< HEAD

            </div>;
          </CardContent>;
        </Card>;


        <Card
          className={`cursor-pointer transition-all ${
            selectedRole === 'client'
              ? 'border-primary bg-primary/5'
              : 'border-border hover:border-primary/40'
=======
            </div>;
          </CardContent>;
        </Card>;
        <Card;
          className={`cursor-pointer transition-all ${;
            selectedRole === 'client';
              ? "border-primary bg-primary/5";
              : "border-border hover:border-primary/40";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          }`}
          onClick={() => handleSelect('client')}
        >;
          <CardContent className="p-5">;
            <div className="flex items-center">;
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">;
                <Users className="h-6 w-6 text-primary" />;
              </div>;
              <div className="flex-1">;
                <h3 className="font-medium">I'm hiring</h3>;
                <p className="text-sm text-muted-foreground">Post jobs and find talented professionals</p>;
              </div>;
              {selectedRole === 'client' && (;
                <Check className="h-5 w-5 text-primary" />;
              )}
<<<<<<< HEAD

import React, { useState } from 'react';
import { Button } from '@/components / ui / button';
import { Card, CardContent } from '@/components / ui / card';
import { Briefcase, Users, Check } from 'lucide-react';
type UserRole = 'talent' | 'client' | null;
interface RolePickerProps {
  on_select: (role: UserRole) => void;
export /**
 * RolePicker - Function description
 */
function RolePicker() {
  const [selected_role, setSelectedRole] = useState < UserRole>(null);
  const handle_select = (role: UserRole) =>: any {
    setSelectedRole (role);
    on_select (role);
  }
  return (
    <div className='space - y-4 px - 4'>;
      <h2 className='text - xl font - medium'>What brings you to Zion?</h2>;
      <p className='text - muted - foreground'>;
        Choose how you want to use our platform;
      </p>;
      <div className='space - y-3 mt - 6'>;
        <Card;
          className={`cursor - pointer transition - all ${
            selected_role === 'talent';
              ? 'border - primary bg - primary / 5';
              : 'border - border hover:border - primary / 40';
          }`}
          on_click = {(, ) => handle_select ('talent'), }
        >;
          <CardContent className='p - 5'>;
            <div className='flex items - center'>;
              <div className='w - 12 h - 12 rounded - full bg - primary / 10 flex items - center justify - center mr - 4'>;
                <Briefcase className='h - 6 w - 6 text - primary' />;
              </div>;
              <div className='flex - 1'>;
                <h3 className='font - medium'>I'm offering services</h3>;
                <p className='text - sm text - muted - foreground'>;
                  Find work and showcase your skills;
                </p>;
              </div>;
              {selected_role === 'talent' && (
                <Check className='h - 5 w - 5 text - primary' />)}
            </div>;
          </CardContent>;
        </Card>;
        <Card;
          className={`cursor - pointer transition - all ${
            selected_role === 'client';
              ? 'border - primary bg - primary / 5';
              : 'border - border hover:border - primary / 40';
          }`}
          on_click = {() => handle_select ('client'), }
        >;
          <CardContent className='p - 5'>;
            <div className='flex items - center'>;
              <div className='w - 12 h - 12 rounded - full bg - primary / 10 flex items - center justify - center mr - 4'>;
                <Users className='h - 6 w - 6 text - primary' />;
              </div>;
              <div className='flex - 1'>;
                <h3 className='font - medium'>I'm hiring</h3>;
                <p className='text - sm text - muted - foreground'>;
                  Post jobs and find talented professionals;
                </p>;
              </div>;
              {selected_role === 'client' && (
                <Check className='h - 5 w - 5 text - primary' />)}

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </div>;
          </CardContent>;
        </Card>;
      </div>;
<<<<<<< HEAD


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> ;

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
    </div>;
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
