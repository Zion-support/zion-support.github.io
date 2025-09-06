
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
import {useState} from "react";
import {Briefcase, Star, User} from "lucide-react";
import {Button} from "@/components/ui/button";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { useState } from "react",
<<<<<<< HEAD
import { Briefcase, Star, User } from "lucide-react";
import { Button } from "@/components/ui/button";
=======
import { Briefcase, Star, User } from "lucide-react",
import { Button } from "@/components/ui/button",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
interface UserTypeOption {

  id: "serviceProvider" | "talent" | "client"
  name: string
  description: string

  icon: React.ElementType
}
interface UserTypeSelectionProps {

  onSelect: (userType: "serviceProvider" | "talent" | "client") => void

  selectedType: string | null
}
export function UserTypeSelection({ onSelect, selectedType }: UserTypeSelectionProps) {
  const userTypes: UserTypeOption[] = [
    {
<<<<<<< HEAD
<<<<<<< HEAD

      id: "serviceProvider"
      name: "Service Provider"
      description: "I want to offer services on the platform"

=======
      id: "serviceProvider",
      name: "Service Provider",
      description: "I want to offer services on the platform",
<<<<<<< HEAD
      icon: Briefcase;
    };
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      icon: Briefcase
<<<<<<< HEAD
    }
=======
    },
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


      id: "serviceProvider",
      name: "Service Provider",
      description: "I want to offer services on the platform",


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
    {

      id: "talent"
      name: "Talent"
      description: "I want to showcase my skills and find opportunities"

      icon: Star
<<<<<<< HEAD
<<<<<<< HEAD
    }
=======
    },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======


    },


>>>>>>> main
    {

      id: "client"
      name: "Client"
      description: "I want to discover and hire talent or services"

      icon: User
<<<<<<< HEAD
    }
<<<<<<< HEAD
  ];
=======
  ],

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return (

    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white">Choose your role</h3>
        <p className="text-zion-slate-light mt-2">
          This helps us personalize your experience
        </p>
      </div>
      <div className="grid gap-4 md: grid-cols-3">
        {userTypes.map((type) => {
<<<<<<< HEAD
          const Icon = type.icon;
          const isSelected = selectedType === type.id

=======
          const Icon = type.icon,
          const isSelected = selectedType === type.id,
          
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
          return (
            <Button
              key={type.id}
              onClick={() => onSelect(type.id)}
              variant="outline"
              className={`h-auto flex flex-col items-center justify-center p-6 space-y-3 border ${
                isSelected
                  ? "border-zion-purple bg-zion-purple/10 text-zion-purple"
                  : "border-zion-blue-light hover:border-zion-cyan/50 text-white"
=======

import {useState} from "react";
import {Briefcase, Star, User} from "lucide-react";
import {Button} from "@/components/ui/button";
interface UserTypeOption {;
  id: "serviceProvider" | "talent" | "client",;
  name: string,;
  description: string,;
  icon: React && React.ElementType;
}

interface UserTypeSelectionProps {;
  onSelect: (userType: "serviceProvider" | "talent" | "client") => void,;
  selectedType: string | null;
}

export function UserTypeSelection(): any ({ onSelect, selectedType }: UserTypeSelectionProps) {;
  const userTypes: UserTypeOption[] = [;
    {;
      id: "serviceProvider",;
      name: "Service Provider",;
      description: "I want to offer services on the platform",;
      icon: Briefcase;
    };
    {;
      id: "talent",;
      name: "Talent",;
      description: "I want to showcase my skills and find opportunities",;
      icon: Star;
    };
    {;
      id: "client",;
      name: "Client",;
      description: "I want to discover and hire talent or services",;
      icon: User;

    }
  ];
=======
    }

  ],


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (

import { useState } from './react';
import { Briefcase, Star, User } from './lucide-react';
import { Button } from '@/components / ui / button';
interface UserTypeOption {
  id: "service_provider" | "talent" | "client",
  name: string,
  description: string,
  icon: React.ElementType;
}
interface UserTypeSelectionProps {
  on_select: (user_type: "service_provider" | "talent" | "client") => void,
  selected_type: string | null;
}
export /**
 * UserTypeSelection - Function description
 */
function UserTypeSelection() {
  const user_types: UserTypeOption[] = [;
    {
      id: "service_provider",
      name: "Service Provider",
      description: "I want to offer services on the platform",
      icon: Briefcase;
    }
    {
      id: "talent",
      name: "Talent",
      description: "I want to showcase my skills and find opportunities",
      icon: Star;
    }
    {
      id: "client",
      name: "Client",
      description: "I want to discover and hire talent or services",
      icon: User;
    }
  ];
;
  return (
    <div className="space - y-6">;
      <div className="text - center mb - 6">;
        <h3 className="text - 2xl font - bold text - white">Choose your role</h3>;
        <p className="text - zion - slate - light mt - 2">;
          This helps us personalize your experience;
        </p>;
      </div>;
      <div className="grid gap - 4 md: grid - cols - 3">;
        {user_types.map ((type) => {
          const Icon = type.icon;
          const is_selected = selected_type === type.id,

=======

          const Icon = type.icon,
          const isSelected = selectedType === type.id,
          

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          return (
            <Button;
              key={type.id}

=======
>>>>>>> main
              }`}
            >
              <div className={`p-3 rounded-full ${isSelected ? "bg-zion-purple" : "bg-zion-blue"}`}>
                <Icon className={`h-6 w-6 ${isSelected ? "text-white" : "text-zion-slate-light"}`} />
              </div>
              <div className="text-center">
                <h4 className="font-medium">{type.name}</h4>
                <p className="text-sm text-zion-slate-light mt-1">
<<<<<<< HEAD
<<<<<<< HEAD
                  {type.description}
                </p>
              </div>
            </Button>
          )
        })}
      </div>
    </div>
  )
<<<<<<< HEAD
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


>>>>>>> main
=======
import { useState } from "react",;
import { Briefcase, Star, User } from "lucide-react",;
import { Button } from "@/components/ui/button",;
interface UserTypeOption {;
  id: "serviceProvider" | "talent" | "client",;
  name: string,;
  description: string,;
  icon: React.ElementType;
}
;
interface UserTypeSelectionProps {;
  onSelect: (userType: "serviceProvider" | "talent" | "client") => void,;
  selectedType: string | null;
}
;
export function UserTypeSelection({ onSelect, selectedType }: UserTypeSelectionProps) {;
  const userTypes: UserTypeOption[] = [;
    {;
      id: "serviceProvider",;
      name: "Service Provider",;
      description: "I want to offer services on the platform",;
      icon: Briefcase;
    },;
    {;
      id: "talent",;
      name: "Talent",;
      description: "I want to showcase my skills and find opportunities",;
      icon: Star;
    },;
    {;
      id: "client",;
      name: "Client",;
      description: "I want to discover and hire talent or services",;
      icon: User;
    }
  ],;
  return (;
<<<<<<< HEAD
=======

>>>>>>> main
    <div className="space-y-6">;
      <div className="text-center mb-6">;
        <h3 className="text-2xl font-bold text-white">Choose your role</h3>;
        <p className="text-zion-slate-light mt-2">;
          This helps us personalize your experience;
        </p>;
      </div>;
<<<<<<< HEAD
      <div className="grid gap-4 md: grid-cols-3">;
        {userTypes.map((type) => {;
          const Icon = type.icon;
          const isSelected = selectedType === type.id;
          return (;
            <Button;
              key={type.id}
              onClick={() => onSelect(type.id)}
              variant="outline";
              className={`h-auto flex flex-col items-center justify-center p-6 space-y-3 border ${;
                isSelected;
                  ? "border-zion-purple bg-zion-purple/10 text-zion-purple";
                  : "border-zion-blue-light hover:border-zion-cyan/50 text-white";
=======

      <div className="grid gap-4 md: grid-cols-3">;
        {userTypes && userTypes.map((type) => {;
          const Icon = type && type.icon;
          const isSelected = selectedType === type && type.id,;

          return (
            <Button
              key={type && type.id}
              onClick={() => onSelect(type && type.id)}
              variant="outline";
              className={`h-auto flex flex-col items-center justify-center p-6 space-y-3 border ${;
                isSelected ;
                  ? "border-zion-purple bg-zion-purple/10 text-zion-purple" ;
                  : "border-zion-blue-light hover:border-zion-cyan/50 text-white";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> main
              }`}
            >;
              <div className={`p-3 rounded-full ${isSelected ? "bg-zion-purple" : "bg-zion-blue"}`}>;
                <Icon className={`h-6 w-6 ${isSelected ? "text-white" : "text-zion-slate-light"}`} />;
              </div>;
              <div className="text-center">;
<<<<<<< HEAD
                <h4 className="font-medium">{type.name}</h4>;
                <p className="text-sm text-zion-slate-light mt-1">;
                  {type.description}
=======
                <h4 className="font-medium">{type && type.name}</h4>;
                <p className="text-sm text-zion-slate-light mt-1">;
                  {type && type.description}
>>>>>>> main
                </p>;
              </div>;
            </Button>;
          );
        })}
<<<<<<< HEAD
      </div>;
    </div>;
  );
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

      </div>;
    </div>;
  );

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
              on_click={() => on_select (type.id)}
              variant="outline";
              className={`h - auto flex flex - col items - center justify - center p - 6 space - y-3 border ${
                is_selected;
                  ? "border - zion - purple bg - zion - purple / 10 text - zion - purple";
                  : "border - zion - blue - light hover:border - zion - cyan / 50 text - white";
              }`}
            >;
              <div className={`p - 3 rounded - full ${is_selected ? "bg - zion - purple" : "bg - zion - blue"}`}>;
                <Icon className={`h - 6 w - 6 ${is_selected ? "text - white" : "text - zion - slate - light"}`} />;
              </div>;
              <div className="text - center">;
                <h4 className="font - medium">{type.name}</h4>;
                <p className="text - sm text - zion - slate - light mt - 1">;
                  {type.description}
                </p>;
              </div>;
            </Button>);
        })}
      </div>;
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> main
