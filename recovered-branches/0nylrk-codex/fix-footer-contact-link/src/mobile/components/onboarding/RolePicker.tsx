import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Users, Check } from "lucide-react";

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import React, { useState } from './react';
import { Button } from '@/components / ui / button';
import { Card, CardContent } from '@/components / ui / card';

import { Briefcase, Users, Check } from './lucide-react';
;"
type UserRole = "talent" | "client" | null;
;

<<<<<<< HEAD
=======

import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { Card, CardContent } from "@/components/ui/card",
import { Briefcase, Users, Check } from "lucide-react",




type UserRole = "talent" | "client" | null,
>>>>>>> origin/cursor/delete-old-data-records-6bba




<<<<<<< HEAD
=======
  const handleSelect = (role: UserRole) => {
    (setSelectedRole(role), onSelect(role));
  };

  return (
    <div className="space-y-4 px-4">
      <h2 className="text-xl font-medium">What brings you to Zion?</h2>
      <p className="text-muted-foreground">Choose how you want to use our platform</p>
      <div className="space-y-3 mt-6">
        <Card
          className={`cursor-pointer transition-all ${
            selectedRole === "talent"
              ? "border-primary bg-primary/5"

              : "border-border hover:border-primary/40"

<<<<<<< HEAD

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


<<<<<<< HEAD
<<<<<<< HEAD
        <Card
=======

        <Card
          className={`cursor-pointer transition-all ${
            selectedRole === "client"
              ? "border-primary bg-primary/5"
              : "border-border hover:border-primary/40"
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
        >
          <CardContent className="p-5">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
<<<<<<< HEAD
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

=======
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">I'm offering services</h3>
                <p className="text-sm text-muted-foreground">Find work and showcase your skills</p>
              </div>
              {selectedRole === 'talent' && (
                <Check className="h-5 w-5 text-primary" />
              )}
>>>>>>> origin/cursor/delete-old-data-records-6bba
            </div>;
          </CardContent>;
        </Card>;
        <Card;
<<<<<<< HEAD

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


            </div>;
          </CardContent>;
        </Card>;

        <Card 



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
          }`}
          onClick={() => handleSelect('client')}

=======
          className={`cursor-pointer transition-all ${;
            selectedRole === 'client';
              ? "border-primary bg-primary/5";
              : "border-border hover:border-primary/40";
          }`}
          onClick={() => handleSelect('client')}
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
            </div>;
          </CardContent>;
        </Card>;
      </div>;
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


    </div>);
;
>>>>>>> origin/cursor/delete-old-data-records-6bba
