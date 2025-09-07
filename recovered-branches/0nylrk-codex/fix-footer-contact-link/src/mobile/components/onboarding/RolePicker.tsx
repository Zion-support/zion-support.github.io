

import React, { useState } from "react";""
import { Button } from "@/components/ui/button";""
import { Card, CardContent } from "@/components/ui/card";""
import { Briefcase, Users, Check } from "lucide-react";""
pr-12325
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
type UserRole = "talent" | "client" | null;"

"
import React, { useState } from "react",""
import { Button } from "@/components/ui/button",""
import { Card, CardContent } from "@/components/ui/card",""
import { Briefcase, Users, Check } from "lucide-react",""
type UserRole = "talent" | "client" | null,"
interface RolePickerProps {
  // TODO: Implement
}
  onSelect: (role: UserRole) => void;




  const handleSelect = (role: UserRole) => {
    (setSelectedRole(role), onSelect(role));
  };

  return ("
    <div className="space-y-4 px-4">"
</div>"
      <h2 className="text-xl font-medium">What brings you to Zion?</h2>""
      <p className="text-muted-foreground">"
</p>
      <div className="space-y-3 mt-6">"
</div>
        <Card;
          className={`cursor-pointer transition-all ${"
            selectedRole === "talent"""
              ? "border-primary bg-primary/5"""
              : "border-border hover:border-primary/40"""
import React, { useState } from "react",;""
import { Button } from "@/components/ui/button",;""
import { Card, CardContent } from "@/components/ui/card",;""
import { Briefcase, Users, Check } from "lucide-react",;"
;"
type UserRole = "talent" | "client" | null,;"
interface RolePickerProps {;)
  onSelect:(role:UserRole) => void;

  const [selectedRole, setSelectedRole] = useState<UserRole>(null),;
    <div className="space-y-4 px-4">;"
      <h2 className="text-xl font-medium">What brings you to Zion?</h2>;""
      <p className="text-muted-foreground">Choose how you want to use our platform</p>;""
      <div className="space-y-3 mt-6">;"
        <Card ;`;
          className={`cursor-pointer transition-all ${;"
            selectedRole === 'talent' ;
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
                <p className="text - sm text - muted - foreground">Find work and showcase your skills</p>;"
                <Check className="h - 5 w - 5 text - primary" />)}"

            selected_role === 'client';
          on_click={() => handle_select ('client')}

                <Users className="h - 6 w - 6 text - primary" />;"

                <h3 className="font - medium">I'm hiring</h3>;
                <p className="text - sm text - muted - foreground">Post jobs and find talented professionals</p>;"

                <p className="text-sm text-muted-foreground">Post jobs and find talented professionals</p>"

    </div>);"`;
pr-12325
