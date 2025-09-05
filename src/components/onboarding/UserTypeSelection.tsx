
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react",
import { Briefcase, Star, User } from 'lucide-react'
import { Button } from "@/components/ui/button",
interface UserTypeOption {
  id: "serviceProvider" | "talent" | "client",
  name: string,
  description: string,
  icon: React.ElementType
}

interface UserTypeSelectionProps {
  onSelect: (userType: "serviceProvider" | "talent" | "client") => void,
  selectedType: string | null
=======
import { useState } from &quot;react&quot;;
import { Briefcase, Star, User } from 'lucide-react'
import { Button } from &quot;@/components/ui/button&quot;;

interface UserTypeOption {
  id: &quot;serviceProvider&quot; | &quot;talent&quot; | &quot;client&quot;;
=======

interface UserTypeOption {_id: "serviceProvider" | "talent" | "client";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  name: string;
  description: string;
  icon: React.ElementType;}

<<<<<<< HEAD
interface UserTypeSelectionProps {
  onSelect: (userType: &quot;serviceProvider&quot; | &quot;talent&quot; | &quot;client&quot;) => void;
  selectedType: string | null;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
}
=======
interface UserTypeSelectionProps {_onSelect: (_userType: "serviceProvider" | "talent" | "client") => void;
  selectedType: string | null;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export function UserTypeSelection(_{_onSelect, _selectedType}: UserTypeSelectionProps) {_const userTypes: UserTypeOption[] = [
    {
<<<<<<< HEAD
      id: &quot;serviceProvider&quot;,
      name: &quot;Service Provider&quot;,
      description: &quot;I want to offer services on the platform&quot;,
      icon: Briefcase
    },
    {
      id: &quot;talent&quot;,
      name: &quot;Talent&quot;,
      description: &quot;I want to showcase my skills and find opportunities&quot;,
      icon: Star
    },
    {
      id: &quot;client&quot;,
      name: &quot;Client&quot;,
      description: &quot;I want to discover and hire talent or services&quot;,
      icon: User
    }
  ],

  return (
    <div className=&quot;space-y-6&quot;>
      <div className=&quot;text-center mb-6&quot;>
        <h3 className=&quot;text-2xl font-bold text-white&quot;>Choose your role</h3>
        <p className=&quot;text-zion-slate-light mt-2&quot;>
=======
      id: "serviceProvider", _name: "Service Provider", _description: "I want to offer services on the platform", _icon: Briefcase},
    {_id: "talent", _name: "Talent", _description: "I want to showcase my skills and find opportunities", _icon: Star},
    {_id: "client", _name: "Client", _description: "I want to discover and hire talent or services", _icon: User}
  ];

  return (_<div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white">Choose your role</h3>
        <p className="text-zion-slate-light mt-2">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          This helps us personalize your experience
        </p>
      </div>
      
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="grid gap-4 md: grid-cols-3">
=======
      <div className=&quot;grid gap-4 md:grid-cols-3&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        {userTypes.map((type) => {
          const Icon = type.icon,
          const isSelected = selectedType === type.id,
=======
      <div className="grid gap-4 md:grid-cols-3">
        {_userTypes.map((type) => {
          const _Icon = type.icon;
          const _isSelected = selectedType === type.id;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          
          return (_<Button
              key={type.id}
<<<<<<< HEAD
              onClick={() => onSelect(type.id)}
              variant=&quot;outline&quot;
              className={`h-auto flex flex-col items-center justify-center p-6 space-y-3 border ${
                isSelected 
                  ? &quot;border-zion-purple bg-zion-purple/10 text-zion-purple&quot; 
                  : &quot;border-zion-blue-light hover:border-zion-cyan/50 text-white&quot;
              }`}
            >
              <div className={`p-3 rounded-full ${isSelected ? &quot;bg-zion-purple&quot; : &quot;bg-zion-blue&quot;}`}>
                <Icon className={`h-6 w-6 ${isSelected ? &quot;text-white&quot; : &quot;text-zion-slate-light&quot;}`} />
              </div>
              <div className=&quot;text-center&quot;>
                <h4 className=&quot;font-medium&quot;>{type.name}</h4>
                <p className=&quot;text-sm text-zion-slate-light mt-1&quot;>
                  {type.description}
=======
              onClick={_() => onSelect(type.id)}
              variant="outline"
              className={_`h-auto flex flex-col items-center justify-center p-6 space-y-3 border ${
                isSelected 
                  ? "border-zion-purple bg-zion-purple/10 text-zion-purple" 
                  : "border-zion-blue-light hover:border-zion-cyan/50 text-white"}`}
            >
              <div className={_`p-3 rounded-full ${isSelected ? "bg-zion-purple" : "bg-zion-blue"}`}>
                <Icon className={_`h-6 w-6 ${isSelected ? "text-white" : "text-zion-slate-light"}`} />
              </div>
              <div className="text-center">
                <h4 className="font-medium">{_type.name}</h4>
                <p className="text-sm text-zion-slate-light mt-1">
                  {_type.description}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </p>
              </div>
            </Button>
          )
        })}
      </div>
    </div>
  )
}
