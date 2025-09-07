import React, { useState } from "react";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {Briefcase, Users, Check} from "lucide-react";
<<<<<<< HEAD
=======

<<<<<<< HEAD
import { Briefcase, Users, Check } from "lucide-react";

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React, { useState } from './react';
import { Button } from '@/components / ui / button';
import { Card, CardContent } from '@/components / ui / card';

import { Briefcase, Users, Check } from './lucide-react';
;"
type UserRole = "talent" | "client" | null;
;

<<<<<<< HEAD
"
import React, { useState } from "react","
import { Button } from "@/components/ui/button","
import { Card, CardContent } from "@/components/ui/card","
import { Briefcase, Users, Check } from "lucide-react",

type UserRole = "talent" | "client" | null,

interface RolePickerProps {

  onSelect: (role: UserRole) => void;
}

export function RolePicker({ onSelect }: RolePickerProps) {;
  const [selectedRole, setSelectedRole] = useState<UserRole>(null);
export function RolePicker({ onSelect }: RolePickerProps) {
  const [selectedRole, setSelectedRole] = useState<UserRole>(null);
  const [selectedRole, setSelectedRole] = useState<UserRole>(null),
=======

<<<<<<< HEAD
type UserRole = "talent" | "client" | null;
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { Card, CardContent } from "@/components/ui/card",
import { Briefcase, Users, Check } from "lucide-react",


<<<<<<< HEAD

type UserRole = "talent" | "client" | null,



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  const handleSelect = (role: UserRole) => {
    setSelectedRole(role)
    onSelect(role)

    (setSelectedRole(role), onSelect(role));
  };

<<<<<<< HEAD
  return ("
    <div className="space-y-4 px-4">"
      <h2 className="text-xl font-medium">What brings you to Zion?</h2>"
      <p className="text-muted-foreground">
        Choose how you want to use our platform;
      </p>
"
      <div className="space-y-3 mt-6">
=======


type UserRole = "talent" | "client" | null,

interface RolePickerProps {
  onSelect: (role: UserRole) => void
}

export function RolePicker({ onSelect }: RolePickerProps) {;
  const [selectedRole, setSelectedRole] = useState<UserRole>(null);
export function RolePicker({ onSelect }: RolePickerProps) {
  const [selectedRole, setSelectedRole] = useState<UserRole>(null);
  const [selectedRole, setSelectedRole] = useState<UserRole>(null),
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

type UserRole = "talent" | "client" | null,

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
interface RolePickerProps {
  on_select: (role: UserRole) => void;
}



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  const handleSelect = (role: UserRole) => {
    setSelectedRole(role)
    onSelect(role)
<<<<<<< HEAD
  }
  },
=======

  },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  return (
    <div className="space-y-4 px-4">
      <h2 className="text-xl font-medium">What brings you to Zion?</h2>
      <p className="text-muted-foreground">Choose how you want to use our platform</p>
      <div className="space-y-3 mt-6">
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

interface RolePickerProps {
  on_select: (role: UserRole) => void;
}
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
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        <Card
          className={`cursor-pointer transition-all ${
            selectedRole === "talent"
              ? "border-primary bg-primary/5"

              : "border-border hover:border-primary/40"

<<<<<<< HEAD
"
import React, { useState } from "react",;"
import { Button } from "@/components/ui/button",;"
import { Card, CardContent } from "@/components/ui/card",;"
import { Briefcase, Users, Check } from "lucide-react",;
;"
=======
import React, { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent } from "@/components/ui/card",;
import { Briefcase, Users, Check } from "lucide-react",;
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
type UserRole = "talent" | "client" | null,;
;
interface RolePickerProps {;
  onSelect:(role:UserRole) => void;
}
;
<<<<<<< HEAD
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

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          }`}

        >
          <CardContent className="p-5">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">

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

          className={`cursor-pointer transition-all ${
            selectedRole === "client"
              ? "border-primary bg-primary/5"
              : "border-border hover:border-primary/40"

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

            </div>;
          </CardContent>;
        </Card>;
        <Card;

            </div>;
          </CardContent>;
        </Card>;
      </div>;

}

import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { Card, CardContent } from "@/components/ui/card",
import { Briefcase, Users, Check } from "lucide-react",

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

<<<<<<< HEAD
        <Card
<Card
=======
            </div>;
          </CardContent>;
        </Card>;

        <Card 

<<<<<<< HEAD
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          className={`cursor-pointer transition-all ${
            selectedRole === "client"
              ? "border-primary bg-primary/5"
              : "border-border hover:border-primary/40"
;
        <Card ;
          className={`cursor-pointer transition-all ${;
            selectedRole === 'client' ;
              ? "border-primary bg-primary/5" ;
              :"border-border hover:border-primary/40";
          }`}
<<<<<<< HEAD
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
=======
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
<<<<<<< HEAD
=======

=======
export /**
 * RolePicker - Function description
 */
function RolePicker() {
  const [selected_role, setSelectedRole] = useState < UserRole>(null);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
              )}
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======

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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            </div>;
          </CardContent>;
        </Card>;
        <Card;
<<<<<<< HEAD
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
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            </div>;
          </CardContent>;
        </Card>;
      </div>;
<<<<<<< HEAD
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
}
;
=======

    </div>);
<<<<<<< HEAD
;
=======
}

=======
;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
