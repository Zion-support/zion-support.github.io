
import React, { useState } from "react";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {Briefcase, Users, Check} from "lucide-react";
type UserRole = "talent" | "client" | null;
import { Briefcase, Users, Check } from "lucide-react";

import React, { useState } from './react';
import { Button } from '@/components / ui / button';
import { Card, CardContent } from '@/components / ui / card';

import React, { useState } from './react';'
import { Button } from '@/components / ui / button';'
import { Card, CardContent } from '@/components / ui / card';'
import { Briefcase, Users, Check } from './lucide-react';
;"
type UserRole = "talent" | "client" | null;
;

"
import React, { useState } from "react","
import { Button } from "@/components/ui/button","
import { Card, CardContent } from "@/components/ui/card","
import { Briefcase, Users, Check } from "lucide-react",
type UserRole = "talent" | "client" | null,

interface RolePickerProps {
"
type UserRole = "talent" | "client" | null,

interface RolePickerProps {};
  onSelect: (role: UserRole) => void;
}
const handleSelect = (role: UserRole) => {
    setSelectedRole(role)
    onSelect(role)

  },

export function RolePicker({ onSelect }: RolePickerProps) {;
  const [selectedRole, setSelectedRole] = useState<UserRole>(null);
export function RolePicker({ onSelect }: RolePickerProps) {
  const [selectedRole, setSelectedRole] = useState<UserRole>(null);
  const [selectedRole, setSelectedRole] = useState<UserRole>(null),

  const handleSelect = (role: UserRole) => {
    setSelectedRole(role)
    onSelect(role)

  const handleSelect = (role: UserRole) => {}
    (setSelectedRole(role), onSelect(role));
  };

  return ("
    <div className="space-y-4 px-4">"
      <h2 className="text-xl font-medium">What brings you to Zion?</h2>"
      <p className="text-muted-foreground">
        Choose how you want to use our platform;
      </p>
"
      <div className="space-y-3 mt-6">
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
        <Card
          className={`cursor-pointer transition-all ${
            selectedRole === "talent"
              ? "border-primary bg-primary/5"
        <Card;
          className={`cursor-pointer transition-all ${"
            selectedRole === "talent""
              ? "border-primary bg-primary/5""
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
            </div>
          </CardContent>
        </Card>

        >
          <CardContent className="p-5">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
`
          }`}"
          onClick={() => handleSelect("talent")}
        >"
          <CardContent className="p-5">"
            <div className="flex items-center">"
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">"
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
          className={`cursor-pointer transition-all ${
            selectedRole === "client"
              ? "border-primary bg-primary/5"
              : "border-border hover:border-primary/40"
          }`}
          onClick={() => handleSelect('client')}

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

            </div>;
          </CardContent>;
        </Card>;
      </div>;

}


import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { Card, CardContent } from "@/components/ui/card",
import { Briefcase, Users, Check } from "lucide-react",

'"`

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

