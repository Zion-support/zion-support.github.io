
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/onboarding/RolePicker.tsx
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React, { useState } from "react";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {Briefcase, Users, Check} from "lucide-react";
<<<<<<< HEAD

<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/onboarding/RolePicker.tsx
import React, { useState } from './react';
import { Button } from '@/components / ui / button';
import { Card, CardContent } from '@/components / ui / card';
import { Briefcase, Users, Check } from './lucide-react';
;
type UserRole = "talent" | "client" | null;
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/onboarding/RolePicker.tsx

=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
type UserRole = "talent" | "client" | null;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { Card, CardContent } from "@/components/ui/card",
import { Briefcase, Users, Check } from "lucide-react",
<<<<<<< HEAD
<<<<<<< HEAD

type UserRole = "talent" | "client" | null,

=======


=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

type UserRole = "talent" | "client" | null,

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
interface RolePickerProps {
  on_select: (role: UserRole) => void;
}

<<<<<<< HEAD
export function RolePicker({ onSelect }: RolePickerProps) {

  const handleSelect = (role: UserRole) => {
    setSelectedRole(role)
    onSelect(role)
=======



  const handleSelect = (role: UserRole) => {
    setSelectedRole(role)
    onSelect(role)

  },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
interface RolePickerProps {
  onSelect: (role: UserRole) => void
}
<<<<<<< HEAD
=======

<<<<<<< HEAD
export function RolePicker({ onSelect }: RolePickerProps) {;
  const [selectedRole, setSelectedRole] = useState<UserRole>(null);
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export function RolePicker({ onSelect }: RolePickerProps) {
<<<<<<< HEAD
  const [selectedRole, setSelectedRole] = useState<UserRole>(null);
=======
  const [selectedRole, setSelectedRole] = useState<UserRole>(null),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const handleSelect = (role: UserRole) => {
    setSelectedRole(role)
    onSelect(role)
<<<<<<< HEAD
  }
=======
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

  return (
    <div className="space-y-4 px-4">
      <h2 className="text-xl font-medium">What brings you to Zion?</h2>
      <p className="text-muted-foreground">Choose how you want to use our platform</p>
      <div className="space-y-3 mt-6">
<<<<<<< HEAD
=======

========
interface RolePickerProps {
  on_select: (role: UserRole) => void;
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/onboarding/RolePicker.tsx
interface RolePickerProps {;
  onSelect: (role: UserRole) => void;
}
export function RolePicker(): any ({ onSelect }: RolePickerProps) {;
  const [selectedRole, setSelectedRole] = useState<UserRole>(null);
  const handleSelect = (role: UserRole) => {;
    setSelectedRole(role),;
    onSelect(role);
  };
  return (
    <div className="space-y-4 px-4">;
      <h2 className="text-xl font-medium">What brings you to Zion?</h2>;
      <p className="text-muted-foreground">Choose how you want to use our platform</p>;
      <div className="space-y-3 mt-6">;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <Card
          className={`cursor-pointer transition-all ${
            selectedRole === 'talent'
              ? "border-primary bg-primary/5"
              : "border-border hover:border-primary/40"
<<<<<<< HEAD
=======

import React, { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent } from "@/components/ui/card",;
import { Briefcase, Users, Check } from "lucide-react",;
;
type UserRole = "talent" | "client" | null,;
;
interface RolePickerProps {;
  onSelect:(role:UserRole) => void;
}
;
export function RolePicker({ onSelect } RolePickerProps) {;
  const [selectedRole, setSelectedRole] = useState<UserRole>(null),;
;
  const handleSelect = (role:UserRole) => {;
    setSelectedRole(role),;
    onSelect(role);
  },;
;
  return (;
    <div className="space-y-4 px-4">;
      <h2 className="text-xl font-medium">What brings you to Zion?</h2>;
      <p className="text-muted-foreground">Choose how you want to use our platform</p>;
;
      <div className="space-y-3 mt-6">;
        <Card ;
          className={`cursor-pointer transition-all ${;
            selectedRole === 'talent' ;
              ? "border-primary bg-primary/5" ;
              :"border-border hover:border-primary/40";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/onboarding/RolePicker.tsx
<<<<<<< HEAD
            </div>
          </CardContent>
        </Card>

=======

            </div>;
          </CardContent>;
        </Card>;


========
            </div>;
          </CardContent>;
        </Card>;
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/onboarding/RolePicker.tsx
        <Card
=======

        <Card 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
        <Card
=======
        <Card 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          className={`cursor-pointer transition-all ${
            selectedRole === 'client'
              ? "border-primary bg-primary/5"
              : "border-border hover:border-primary/40"
<<<<<<< HEAD
=======
;
        <Card ;
          className={`cursor-pointer transition-all ${;
            selectedRole === 'client' ;
              ? "border-primary bg-primary/5" ;
              :"border-border hover:border-primary/40";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          }`}
          onClick={() => handleSelect('client')}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/onboarding/RolePicker.tsx

=======
========
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/onboarding/RolePicker.tsx
export /**
 * RolePicker - Function description
 */
function RolePicker() {
  const [selected_role, setSelectedRole] = useState < UserRole>(null);
=======
=======
          }`}
          onClick={() => handleSelect('client')}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
                <Check className="h-5 w-5 text-primary" />
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
import React, { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent } from "@/components/ui/card",;
import { Briefcase, Users, Check } from "lucide-react",;
type UserRole = "talent" | "client" | null,;
interface RolePickerProps {;
  onSelect: (role: UserRole) => void;
}
<<<<<<< HEAD

;
  const handle_select = (role: UserRole) =>: any {
    setSelectedRole (role),
    on_select (role);
  }
;
  return (
    <div className="space - y-4 px - 4">;
      <h2 className="text - xl font - medium">What brings you to Zion?</h2>;
      <p className="text - muted - foreground">Choose how you want to use our platform</p>;
      <div className="space - y-3 mt - 6">;
        <Card;
          className={`cursor - pointer transition - all ${
            selected_role === 'talent';
              ? "border - primary bg - primary / 5";
              : "border - border hover:border - primary / 40";
          }`}
          on_click={() => handle_select ('talent')}
        >;
          <CardContent className="p - 5">;
            <div className="flex items - center">;
              <div className="w - 12 h - 12 rounded - full bg - primary / 10 flex items - center justify - center mr - 4">;
                <Briefcase className="h - 6 w - 6 text - primary" />;
              </div>;
              <div className="flex - 1">;
                <h3 className="font - medium">I'm offering services</h3>;
                <p className="text - sm text - muted - foreground">Find work and showcase your skills</p>;
              </div>;
              {selected_role === 'talent' && (
                <Check className="h - 5 w - 5 text - primary" />)}
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </div>;
          </CardContent>;
        </Card>;
        <Card;
<<<<<<< HEAD
          className={`cursor - pointer transition - all ${
            selected_role === 'client';
              ? "border - primary bg - primary / 5";
              : "border - border hover:border - primary / 40";
          }`}
          on_click={() => handle_select ('client')}
        >;
          <CardContent className="p - 5">;
            <div className="flex items - center">;
              <div className="w - 12 h - 12 rounded - full bg - primary / 10 flex items - center justify - center mr - 4">;
                <Users className="h - 6 w - 6 text - primary" />;
              </div>;
              <div className="flex - 1">;
                <h3 className="font - medium">I'm hiring</h3>;
                <p className="text - sm text - muted - foreground">Post jobs and find talented professionals</p>;
              </div>;
              {selected_role === 'client' && (
                <Check className="h - 5 w - 5 text - primary" />)}
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
          className={`cursor-pointer transition-all ${;
            selectedRole === 'client';
              ? "border-primary bg-primary/5";
              : "border-border hover:border-primary/40";
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
                <Check className="h-5 w-5 text-primary" />
              )}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </div>;
          </CardContent>;
        </Card>;
      </div>;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/onboarding/RolePicker.tsx

    </div>);
}

=======
;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
<<<<<<< HEAD
    </div>);
}
=======
    </div>;
  ),;}
 type UserRole = "talent" | "client" | null;
space-y-3 mt-6"> <Card className= {
  `cursor-pointer transition-all $ {
  selectedRole === 'talent' > <CardContent className=" p-5"> <div className=" flex items-center"> <div className=" w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4"> <Briefcase className=" h-6 w-6 text-primary"/> </div> <div className=" flex-1"> <h3 className=" font-medium">I'm offering services</h3> <p className=" text-sm text-muted-foreground">Find work and showcase your skills</p> </div>) 
}</div> </CardContent> </Card> <Card className= {
  `cursor-pointer transition-all $ {
  selectedRole === 'client'> <CardContent className=" p-5"> <div className=" flex items-center"> <div className=" w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4"> <Users className=" h-6 w-6 text-primary"/> </div> <div className=" flex-1"> <h3 className=" font-medium">I'm hiring</h3> <p className=" text-sm text-muted-foreground" >Post jobs and find talented professionals</p> </div>) 
}</div> </CardContent> </Card> </div> </div>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/onboarding/RolePicker.tsx
=======
    </div>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
