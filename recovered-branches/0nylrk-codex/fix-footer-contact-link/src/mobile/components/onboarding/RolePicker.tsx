




import React, { useState } from "react";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {Briefcase, Users, Check} from "lucide-react";
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import React, { useState } from './react';
import { Button } from '@/components / ui / button';
import { Card, CardContent } from '@/components / ui / card';
import { Briefcase, Users, Check } from './lucide-react';
;
type UserRole = "talent" | "client" | null;
;

==============
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { Card, CardContent } from "@/components/ui/card",
import { Briefcase, Users, Check } from "lucide-react",


type UserRole = "talent" | "client" | null,




  const handleSelect = (role: UserRole) => {
    setSelectedRole(role)
    onSelect(role)

  },



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
type UserRole = "talent" | "client" | null,

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

type UserRole = "talent" | "client" | null,

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface RolePickerProps {
  on_select: (role: UserRole) => void;
}



  const handleSelect = (role: UserRole) => {
    setSelectedRole(role)
    onSelect(role)
  },

=======
  }
  },
  return (
    <div className="space-y-4 px-4">
      <h2 className="text-xl font-medium">What brings you to Zion?</h2>
      <p className="text-muted-foreground">Choose how you want to use our platform</p>
      <div className="space-y-3 mt-6">
interface RolePickerProps {
  on_select: (role: UserRole) => void;
}
interface RolePickerProps {;
  onSelect: (role: UserRole) => void;
}
export function RolePicker(): any ({ onSelect }: RolePickerProps) {;
  const [selectedRole, setSelectedRole] = useState<UserRole>(null);
=======
=======

interface RolePickerProps {;
  onSelect: (role: UserRole) => void;
}

export function RolePicker(): any ({ onSelect }: RolePickerProps) {;
  const [selectedRole, setSelectedRole] = useState<UserRole>(null);
  const handleSelect = (role: UserRole) => {;
    setSelectedRole(role),;
    onSelect(role);
  };
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <div className="space-y-4 px-4">;
      <h2 className="text-xl font-medium">What brings you to Zion?</h2>;
      <p className="text-muted-foreground">Choose how you want to use our platform</p>;
      <div className="space-y-3 mt-6">;>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <Card
          className={`cursor-pointer transition-all ${
            selectedRole === 'talent'
              ? "border-primary bg-primary/5"
              : "border-border hover:border-primary/40"
            </div>;
          </CardContent>;
        </Card>;


        <Card 

          className={`cursor-pointer transition-all ${
            selectedRole === 'client'
              ? "border-primary bg-primary/5"
              : "border-border hover:border-primary/40"
=======
export /**
 * RolePicker - Function description
 */
function RolePicker() {
  const [selected_role, setSelectedRole] = useState < UserRole>(null);
=======
    </div>);
}

=======
;>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    </div>);
}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
