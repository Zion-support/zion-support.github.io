
import { useState } from "react",
import { Briefcase, Star, User } from "lucide-react";
import { Button } from "@/components/ui/button";
interface UserTypeOption {
<<<<<<< HEAD
  id: "serviceProvider" | "talent" | "client";
  name: string;
  description: string;
=======
  id: "serviceProvider" | "talent" | "client"
  name: string
  description: string
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  icon: React.ElementType
}
interface UserTypeSelectionProps {
<<<<<<< HEAD
<<<<<<< HEAD
  onSelect: (userType: "serviceProvider" | "talent" | "client") => void;
=======
  onSelect: (userType: "serviceProvider" | "talent" | "client") => void
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  selectedType: string | null
}
export function UserTypeSelection({ onSelect, selectedType }: UserTypeSelectionProps) {
=======
  onSelect: (userType: 'serviceProvider' | 'talent' | 'client') => void;
  selectedType: string | null;
}

export function UserTypeSelection({
  onSelect,
  selectedType,
}: UserTypeSelectionProps) {
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  const userTypes: UserTypeOption[] = [
    {
<<<<<<< HEAD
      id: "serviceProvider";
      name: "Service Provider";
      description: "I want to offer services on the platform";
=======
      id: "serviceProvider"
      name: "Service Provider"
      description: "I want to offer services on the platform"
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
      icon: Briefcase
    }
    {
<<<<<<< HEAD
      id: "talent";
      name: "Talent";
      description: "I want to showcase my skills and find opportunities";
=======
      id: "talent"
      name: "Talent"
      description: "I want to showcase my skills and find opportunities"
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
      icon: Star
    }
    {
<<<<<<< HEAD
      id: "client";
      name: "Client";
      description: "I want to discover and hire talent or services";
=======
      id: "client"
      name: "Client"
      description: "I want to discover and hire talent or services"
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
      icon: User
    }
  ];
  return (
<<<<<<< HEAD
    <div className;
=======
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white">Choose your role</h3>
        <p className="text-zion-slate-light mt-2">
          This helps us personalize your experience
        </p>
      </div>
      <div className="grid gap-4 md: grid-cols-3">
        {userTypes.map((type) => {
          const Icon = type.icon;
          const isSelected = selectedType === type.id
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
          return (
            <Button
              key={type.id}
              onClick={() => onSelect(type.id)}
              variant="outline"
              className={`h-auto flex flex-col items-center justify-center p-6 space-y-3 border ${
                isSelected
                  ? "border-zion-purple bg-zion-purple/10 text-zion-purple"
                  : "border-zion-blue-light hover:border-zion-cyan/50 text-white"
              }`}
            >
              <div className={`p-3 rounded-full ${isSelected ? "bg-zion-purple" : "bg-zion-blue"}`}>
                <Icon className={`h-6 w-6 ${isSelected ? "text-white" : "text-zion-slate-light"}`} />
              </div>
              <div className="text-center">
                <h4 className="font-medium">{type.name}</h4>
                <p className="text-sm text-zion-slate-light mt-1">
                  {type.description}
                </p>
              </div>
            </Button>
          )
        })}
      </div>
    </div>
  )
}