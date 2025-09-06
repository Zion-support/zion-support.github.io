<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { Card, CardContent } from "@/components/ui/card",
import { Briefcase, Users, Check } from 'lucide-react'

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
          className={`cursor-pointer transition-all ${
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
className={`cursor-pointer transition-all ${
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
className={`cursor-pointer transition-all ${}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            selectedRole === 'client' 
              ? "border-primary bg-primary/5" "
              : "border-border hover:border-primary/40"`
          }`}'
          onClick={() => handleSelect('client')}
        >"
          <CardContent className="p-5">"
            <div className="flex items-center">"
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">"
                <Users className="h-6 w-6 text-primary" />
              </div>"
              <div className="flex-1">'"
                <h3 className="font-medium">I'm hiring</h3>"
                <p className="text-sm text-muted-foreground">Post jobs and find talented professionals</p>
              </div>'
              {selectedRole === 'client' && (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Users, Check } from 'lucide-react';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                <Check className="h-5 w-5 text-primary" />
import React, { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent } from "@/components/ui/card",;
import { Briefcase, Users, Check } from 'lucide-react';
=======
"
                <Check className="h-5 w-5 text-primary" />"
import React, { useState } from "react",;"
import { Button } from "@/components/ui/button",;"
import { Card, CardContent } from "@/components/ui/card",;'
import { Briefcase, Users, Check } from 'lucide-react';"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
type UserRole = "talent" | "client" | null,;
interface RolePickerProps {;
  onSelect: (role: UserRole) => void;
}
;
<<<<<<< HEAD
export function RolePicker({ onSelect }: RolePickerProps) {;
  const [selectedRole, setSelectedRole] = useState<UserRole>(null),;
  const handleSelect = (role: UserRole) => {;
    setSelectedRole(role);
<<<<<<< HEAD
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
=======
    onSelect(role)
};
  return (
    <div className='space-y-4 px-4'>;
      <h2 className='text-xl font-medium'>What brings you to Zion?</h2>;
=======
export function RolePicker() { return null; }
  };
  return ('
    <div className='space-y-4 px-4'>;'
      <h2 className='text-xl font-medium'>What brings you to Zion?</h2>;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      <p className='text-muted-foreground'>;
        Choose how you want to use our platform;
      </p>;
'
      <div className='space-y-3 mt-6'>;
<<<<<<< HEAD
        <Card
          className={`cursor-pointer transition-all ${
            selectedRole === 'talent'
              ? 'border-primary bg-primary/5'
              : 'border-border hover:border-primary/40'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          }`}
<<<<<<< HEAD
<<<<<<< HEAD
          onClick = {(,) => handleSelect('talent'),}
        >;
          <CardContent className='p-5'>;
            <div className='flex items-center'>;
              <div className='w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4'>;
                <Briefcase className='h-6 w-6 text-primary' />;
              </div>;
              <div className='flex-1'>;
                <h3 className='font-medium'>I'm offering services</h3>;
                <p className='text-sm text-muted-foreground'>;
                  Find work and showcase your skills;
                </p>;
              </div>;
              {selectedRole === 'talent' && (;
<<<<<<< HEAD
=======
        <Card;`
          className={`cursor-pointer transition-all ${'
            selectedRole === 'talent''
              ? 'border-primary bg-primary/5''
              : 'border-border hover:border-primary/40'`
          }`}'
          onClick={() => handleSelect('talent')}
        >;"
          <CardContent className="p-5">;"
            <div className="flex items-center">;"
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">;"
                <Briefcase className="h-6 w-6 text-primary" />;
              </div>;"
              <div className="flex-1">;'"
                <h3 className="font-medium">I'm offering services</h3>;"
                <p className="text-sm text-muted-foreground">Find work and showcase your skills</p>;
              </div>;'
              {selectedRole === 'talent' && (;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                <Check className="h-5 w-5 text-primary" />;
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              )}
            </div>;
          </CardContent>;
        </Card>;
        <Card;
          className={`cursor-pointer transition-all ${;
            selectedRole === 'client';
              ? "border-primary bg-primary/5";
              : "border-border hover:border-primary/40";
=======
                <Check className='h-5 w-5 text-primary' />;              )}

            </div>;
          </CardContent>;
        </Card>;

<<<<<<< HEAD
        <Card
          className={`cursor-pointer transition-all ${
            selectedRole === 'client'
              ? 'border-primary bg-primary/5'
              : 'border-border hover:border-primary/40'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          }`}
<<<<<<< HEAD
<<<<<<< HEAD
          onClick = {() => handleSelect('client'),}        >;
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

        >;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          <CardContent className='p-5'>;
            <div className='flex items-center'>;
              <div className='w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4'>;
                <Users className='h-6 w-6 text-primary' />;
              </div>;
              <div className='flex-1'>;
                <h3 className='font-medium'>I'm hiring</h3>;
                <p className='text-sm text-muted-foreground'>;
                  Post jobs and find talented professionals;
                </p>;
              </div>;
              {selectedRole === 'client' && (;
                <Check className='h-5 w-5 text-primary' />;
              )}
<<<<<<< HEAD
=======
<<<<<<< HEAD

import React, { useState } from 'react';
import { Button } from '@/components / ui / button';
import { Card, CardContent } from '@/components / ui / card';
import { Briefcase, Users, Check } from 'lucide-react';
=======

        <Card;`
          className={`cursor-pointer transition-all ${'
            selectedRole === 'client''
              ? 'border-primary bg-primary/5''
              : 'border-border hover:border-primary/40'`
          }`}'
          onClick={() => handleSelect('client')}
        >;"
          <CardContent className="p-5">;"
            <div className="flex items-center">;"
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">;"
                <Users className="h-6 w-6 text-primary" />;
              </div>;"
              <div className="flex-1">;'"
                <h3 className="font-medium">I'm hiring</h3>;"
                <p className="text-sm text-muted-foreground">Post jobs and find talented professionals</p>;
              </div>;'
              {selectedRole === 'client' && (;"
                <Check className="h-5 w-5 text-primary" />;
              )}
'
import React, { useState } from 'react';'
import { Button } from '@/components / ui / button';'
import { Card, CardContent } from '@/components / ui / card';'
import { Briefcase, Users, Check } from 'lucide-react';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
type UserRole = 'talent' | 'client' | null;
interface RolePickerProps {}
  on_select: (role: UserRole) => void;
export /**;
 * RolePicker - Function description;
 */
function RolePicker() {}
  const [selected_role, setSelectedRole] = useState < UserRole>(null);
  const handle_select = (role: UserRole) =>: any {}
    setSelectedRole (role);
    on_select (role);
  }
  return ('
    <div className='space - y-4 px - 4'>;'
      <h2 className='text - xl font - medium'>What brings you to Zion?</h2>;'
      <p className='text - muted - foreground'>;
        Choose how you want to use our platform;
      </p>;'
      <div className='space - y-3 mt - 6'>;
        <Card;`
          className={`cursor - pointer transition - all ${'
            selected_role === 'talent';'
              ? 'border - primary bg - primary / 5';'
              : 'border - border hover:border - primary / 40';`
          }`}'
          on_click = {(, ) => handle_select ('talent'), }
        >;'
          <CardContent className='p - 5'>;'
            <div className='flex items - center'>;'
              <div className='w - 12 h - 12 rounded - full bg - primary / 10 flex items - center justify - center mr - 4'>;'
                <Briefcase className='h - 6 w - 6 text - primary' />;
              </div>;'
              <div className='flex - 1'>;'
                <h3 className='font - medium'>I'm offering services</h3>;'
                <p className='text - sm text - muted - foreground'>;
                  Find work and showcase your skills;
                </p>;
              </div>;'
              {selected_role === 'talent' && ('
                <Check className='h - 5 w - 5 text - primary' />)}
            </div>;
          </CardContent>;
        </Card>;
        <Card;`
          className={`cursor - pointer transition - all ${'
            selected_role === 'client';'
              ? 'border - primary bg - primary / 5';'
              : 'border - border hover:border - primary / 40';`
          }`}'
          on_click = {() => handle_select ('client'), }
        >;'
          <CardContent className='p - 5'>;'
            <div className='flex items - center'>;'
              <div className='w - 12 h - 12 rounded - full bg - primary / 10 flex items - center justify - center mr - 4'>;'
                <Users className='h - 6 w - 6 text - primary' />;
              </div>;'
              <div className='flex - 1'>;'
                <h3 className='font - medium'>I'm hiring</h3>;'
                <p className='text - sm text - muted - foreground'>;
                  Post jobs and find talented professionals;
                </p>;
              </div>;'
              {selected_role === 'client' && ('
                <Check className='h - 5 w - 5 text - primary' />)}

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            </div>;
          </CardContent>;
        </Card>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    </div>;
  );
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

    </div>);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
<<<<<<< HEAD
;
=======
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
;'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
