




import React, { useState } from "react";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {Briefcase, Users, Check} from "lucide-react";

import React, { useState } from './react';
import { Button } from '@/components / ui / button';
import { Card, CardContent } from '@/components / ui / card';
import { Briefcase, Users, Check } from './lucide-react';
;
type UserRole = "talent" | "client" | null;
;





import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { Card, CardContent } from "@/components/ui/card",
import { Briefcase, Users, Check } from "lucide-react",



type UserRole = "talent" | "client" | null,

interface RolePickerProps {
  on_select: (role: UserRole) => void;
}



type UserRole = "talent" | "client" | null,





  const handleSelect = (role: UserRole) => {
    setSelectedRole(role)
    onSelect(role)

  },




type UserRole = "talent" | "client" | null,

interface RolePickerProps {
  onSelect: (role: UserRole) => void;
}



  return (
    <div className="space-y-4 px-4">
      <h2 className="text-xl font-medium">What brings you to Zion?</h2>

      <p className="text-muted-foreground">Choose how you want to use our platform</p>
      <div className="space-y-3 mt-6">


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
            selectedRole === 'talent'

              ? "border-primary bg-primary/5"
              : "border-border hover:border-primary/40"


          className={`cursor-pointer transition-all ${
            selectedRole === 'client'

              ? "border-primary bg-primary/5"
              : "border-border hover:border-primary/40"

export /**
 * RolePicker - Function description
 */
function RolePicker() {
  const [selected_role, setSelectedRole] = useState < UserRole>(null);


