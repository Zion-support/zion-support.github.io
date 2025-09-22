<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import React, { useState } from "react";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {Briefcase, Users, Check} from "lucide-react";
type UserRole = "talent" | "client" | null;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
import { Briefcase, Users, Check } from "lucide-react";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

import React, { useState } from './react';
import { Button } from '@/components / ui / button';
import { Card, CardContent } from '@/components / ui / card';
=======

import React, { useState } from './react';'
import { Button } from '@/components / ui / button';'
import { Card, CardContent } from '@/components / ui / card';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Briefcase, Users, Check } from './lucide-react';
;"
type UserRole = "talent" | "client" | null;
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

"
import React, { useState } from "react","
import { Button } from "@/components/ui/button","
import { Card, CardContent } from "@/components/ui/card","
import { Briefcase, Users, Check } from "lucide-react",
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
type UserRole = "talent" | "client" | null,

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
interface RolePickerProps {
=======
"
type UserRole = "talent" | "client" | null,

interface RolePickerProps {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  onSelect: (role: UserRole) => void;
}
const handleSelect = (role: UserRole) => {
<<<<<<< HEAD
    setSelectedRole(role)
    onSelect(role)

  },

<<<<<<< HEAD
export function RolePicker({ onSelect }: RolePickerProps) {;
  const [selectedRole, setSelectedRole] = useState<UserRole>(null);
export function RolePicker({ onSelect }: RolePickerProps) {
  const [selectedRole, setSelectedRole] = useState<UserRole>(null);
  const [selectedRole, setSelectedRole] = useState<UserRole>(null),
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

  const handleSelect = (role: UserRole) => {
    setSelectedRole(role)
    onSelect(role)
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======

  const handleSelect = (role: UserRole) => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    (setSelectedRole(role), onSelect(role));
  };
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

  return ("
    <div className="space-y-4 px-4">"
      <h2 className="text-xl font-medium">What brings you to Zion?</h2>"
      <p className="text-muted-foreground">
        Choose how you want to use our platform;
      </p>
"
      <div className="space-y-3 mt-6">
<<<<<<< HEAD
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
        <Card
          className={`cursor-pointer transition-all ${
            selectedRole === "talent"
              ? "border-primary bg-primary/5"
=======
        <Card;
          className={`cursor-pointer transition-all ${"
            selectedRole === "talent""
              ? "border-primary bg-primary/5""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              : "border-border hover:border-primary/40"

"
import React, { useState } from "react",;"
import { Button } from "@/components/ui/button",;"
import { Card, CardContent } from "@/components/ui/card",;"
import { Briefcase, Users, Check } from "lucide-react",;
;"
type UserRole = "talent" | "client" | null,;
;
interface RolePickerProps {;
  onSelect:(role:UserRole) => void;
}
;
export function RolePicker() { return null; }
  },;
;
  return (;"
    <div className="space-y-4 px-4">;"
      <h2 className="text-xl font-medium">What brings you to Zion?</h2>;"
      <p className="text-muted-foreground">Choose how you want to use our platform</p>;
;"
      <div className="space-y-3 mt-6">;
        <Card ;`
          className={`cursor-pointer transition-all ${;'
            selectedRole === 'talent' ;"
              ? "border-primary bg-primary/5" ;"
              :"border-border hover:border-primary/40";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
        >
          <CardContent className="p-5">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
=======
`
          }`}"
          onClick={() => handleSelect("talent")}
        >"
          <CardContent className="p-5">"
            <div className="flex items-center">"
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                <Briefcase className="h-6 w-6 text-primary" />
              </div>"
              <div className="flex-1">'"
                <h3 className="font-medium">I'm offering services</h3>"
                <p className="text-sm text-muted-foreground">
                  Find work and showcase your skills;
                </p>
              </div>"
              {selectedRole === "talent" && ("
                <Check className="h-5 w-5 text-primary" />
              )}

            </div>;
          </CardContent>;
        </Card>;

<Card
<Card
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          className={`cursor-pointer transition-all ${
            selectedRole === "client"
              ? "border-primary bg-primary/5"
              : "border-border hover:border-primary/40"
<<<<<<< HEAD
          }`}
<<<<<<< HEAD
          onClick={() => handleSelect('client')}

<<<<<<< HEAD
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
                <p className="text-sm text-muted-foreground">
                  Post jobs and find talented professionals
                </p>
              </div>
              {selectedRole === "client" && (
                <Check className="h-5 w-5 text-primary" />
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
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
            </div>;
          </CardContent>;
        </Card>;
        <Card;
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            </div>;
          </CardContent>;
        </Card>;
      </div>;

}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { Card, CardContent } from "@/components/ui/card",
import { Briefcase, Users, Check } from "lucide-react",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

  const [selectedRole, setSelectedRole] = useState<UserRole>(null),;
    <div className="space-y-4 px-4">;"
      <h2 className="text-xl font-medium">What brings you to Zion?</h2>;""
      <p className="text-muted-foreground">Choose how you want to use our platform</p>;""
      <div className="space-y-3 mt-6">;"
        <Card ;`;
          className={`cursor-pointer transition-all ${;"
            selectedRole === 'talent' ;
              ? "border-primary bg-primary/5" ;
              :"border-border hover:border-primary/40";
          }`}
          onClick={() => handleSelect("talent")}
        >
          <CardContent className="p-5">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
              ? "border-primary bg-primary/5" ;""
              :"border-border hover:border-primary/40";"`;
          }`}"
          onClick={() => handleSelect("talent")}"
          <CardContent className="p-5">"
            <div className="flex items-center">"
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">"
                <Briefcase className="h-6 w-6 text-primary" />"

              <div className="flex-1">"
                <h3 className="font-medium">I'm offering services</h3>
                <p className="text-sm text-muted-foreground">"
                <Check className="h-5 w-5 text-primary" />"

            </div>;
        <Card;`;
          onClick={() => handleSelect("client")}"
                <Users className="h-6 w-6 text-primary" />"

        <Card
<Card
          className={`cursor-pointer transition-all ${
            selectedRole === "client"
              ? "border-primary bg-primary/5"
              : "border-border hover:border-primary/40"
          }`}
          onClick={() => handleSelect("client")}
        >
          <CardContent className="p-5">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">I'm hiring</h3>
                <p className="text-sm text-muted-foreground">
                  Post jobs and find talented professionals
                </p>
              </div>
              {selectedRole === "client" && (
                <Check className="h-5 w-5 text-primary" />
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
                <h3 className="font-medium">I'm hiring</h3>

    <div className="space - y-4 px - 4">;"
      <h2 className="text - xl font - medium">What brings you to Zion?</h2>;""
      <p className="text - muted - foreground">Choose how you want to use our platform</p>;""
      <div className="space - y-3 mt - 6">;"
          className={`cursor - pointer transition - all ${"
            selected_role === 'talent';
              ? "border - primary bg - primary / 5";""
              : "border - border hover:border - primary / 40";"`;
          on_click={() => handle_select ('talent')}

          <CardContent className="p - 5">;"
            <div className="flex items - center">;"
              <div className="w - 12 h - 12 rounded - full bg - primary / 10 flex items - center justify - center mr - 4">;"
                <Briefcase className="h - 6 w - 6 text - primary" />;"

              </div>;"
              <div className="flex - 1">;"
                <h3 className="font - medium">I'm offering services</h3>;
                <p className="text - sm text - muted - foreground">Find work and showcase your skills</p>;
              </div>;
              {selected_role === 'talent' && (
                <Check className="h - 5 w - 5 text - primary" />)}
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
            </div>;
          </CardContent>;
        </Card>;
        <Card;
          className={`cursor - pointer transition - all ${
                <p className="text - sm text - muted - foreground">Find work and showcase your skills</p>;"
                <Check className="h - 5 w - 5 text - primary" />)}"

            selected_role === 'client';
          on_click={() => handle_select ('client')}

                <Users className="h - 6 w - 6 text - primary" />;"

                <h3 className="font - medium">I'm hiring</h3>;
                <p className="text - sm text - muted - foreground">Post jobs and find talented professionals</p>;
              </div>;
              {selected_role === 'client' && (
                <Check className="h - 5 w - 5 text - primary" />)}
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
            </div>;
          </CardContent>;
        </Card>;
      </div>;

    </div>);
;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
