


<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useState } from "react";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {Briefcase, Users, Check} from "lucide-react";
<<<<<<< HEAD
type UserRole = "talent" | "client" | null;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React, { useState } from './react';
import { Button } from '@/components / ui / button';
import { Card, CardContent } from '@/components / ui / card';
import { Briefcase, Users, Check } from './lucide-react';
;
type UserRole = "talent" | "client" | null;
;
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


=======
=======


type UserRole = "talent" | "client" | null;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { Card, CardContent } from "@/components/ui/card",
import { Briefcase, Users, Check } from "lucide-react",
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======

<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
type UserRole = "talent" | "client" | null,

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
interface RolePickerProps {
  on_select: (role: UserRole) => void;
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
=======

type UserRole = "talent" | "client" | null,

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df



  const handleSelect = (role: UserRole) => {
    setSelectedRole(role)
    onSelect(role)

  },


<<<<<<< HEAD
=======

type UserRole = "talent" | "client" | null,

interface RolePickerProps {
  onSelect: (role: UserRole) => void
}

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export function RolePicker({ onSelect }: RolePickerProps) {;
  const [selectedRole, setSelectedRole] = useState<UserRole>(null);
export function RolePicker({ onSelect }: RolePickerProps) {
  const [selectedRole, setSelectedRole] = useState<UserRole>(null);
  const [selectedRole, setSelectedRole] = useState<UserRole>(null),
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======



>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  const handleSelect = (role: UserRole) => {
    setSelectedRole(role)
    onSelect(role)
<<<<<<< HEAD
=======
<<<<<<< HEAD
  }
  },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  return (
    <div className="space-y-4 px-4">
      <h2 className="text-xl font-medium">What brings you to Zion?</h2>
      <p className="text-muted-foreground">Choose how you want to use our platform</p>
      <div className="space-y-3 mt-6">
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======

interface RolePickerProps {
  on_select: (role: UserRole) => void;
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
interface RolePickerProps {;
  onSelect: (role: UserRole) => void;
}

export function RolePicker(): any ({ onSelect }: RolePickerProps) {;
  const [selectedRole, setSelectedRole] = useState<UserRole>(null);
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

  const handleSelect = (role: UserRole) => {;
    setSelectedRole(role),;
    onSelect(role);
  };
  return (
    <div className="space-y-4 px-4">;
      <h2 className="text-xl font-medium">What brings you to Zion?</h2>;
      <p className="text-muted-foreground">Choose how you want to use our platform</p>;
      <div className="space-y-3 mt-6">;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
interface RolePickerProps {
  on_select: (role: UserRole) => void;
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <Card
          className={`cursor-pointer transition-all ${
            selectedRole === 'talent'
              ? "border-primary bg-primary/5"
              : "border-border hover:border-primary/40"
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
            </div>
          </CardContent>
        </Card>

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

            </div>;
          </CardContent>;
        </Card>;


<<<<<<< HEAD
<<<<<<< HEAD
        <Card
=======

        <Card 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
            </div>;
          </CardContent>;
        </Card>;

        <Card 

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
        <Card
        <Card
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          className={`cursor-pointer transition-all ${
            selectedRole === 'client'
              ? "border-primary bg-primary/5"
              : "border-border hover:border-primary/40"
<<<<<<< HEAD
<<<<<<< HEAD
          }`}
          onClick={() => handleSelect('client')}

<<<<<<< HEAD
=======
=======
export /**
 * RolePicker - Function description
 */
function RolePicker() {
  const [selected_role, setSelectedRole] = useState < UserRole>(null);
=======
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
;
        <Card ;
          className={`cursor-pointer transition-all ${;
            selectedRole === 'client' ;
              ? "border-primary bg-primary/5" ;
              :"border-border hover:border-primary/40";
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
          }`}
          onClick={() => handleSelect('client')}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

=======
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            </div>;
          </CardContent>;
        </Card>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD

    </div>);
=======
;

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
    </div>;
  );
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}
<<<<<<< HEAD
=======
;
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
