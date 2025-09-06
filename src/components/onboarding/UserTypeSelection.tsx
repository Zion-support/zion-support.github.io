<<<<<<< HEAD
=======
<<<<<<< HEAD
import { useState } from 'react'
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4



      id: 'serviceProvider'
      name: 'Service Provider'
      description: 'I want to offer services on the platform'
      icon: Briefcase
    }
=======
import { useState } from "react",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { Briefcase, Star, User } from 'lucide-react'
import { Button } from "@/components/ui/button";
interface UserTypeOption {
<<<<<<< HEAD
  id: "serviceProvider" | "talent" | "client";
  name: string;
  description: string;
  icon: React.ElementType
interface UserTypeSelectionProps {
  onSelect: (userType: "serviceProvider" | "talent" | "client") => void;
  selectedType: string | null
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export function UserTypeSelection({
  onSelect
  selectedType
}: UserTypeSelectionProps) {
<<<<<<< HEAD
  const userTypes: UserTypeOption[] = [
    {
=======
  id: "serviceProvider" | "talent" | "client",
  name: string,
  description: string,
  icon: React.ElementType
}

interface UserTypeSelectionProps {
  onSelect: (userType: "serviceProvider" | "talent" | "client") => void,
  selectedType: string | null
}

export function UserTypeSelection({ onSelect, selectedType }: UserTypeSelectionProps) {
=======
=======
}

export function UserTypeSelection({ onSelect, selectedType }: UserTypeSelectionProps) {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const userTypes: UserTypeOption[] = [
    {
      id: "serviceProvider",
      name: "Service Provider",
      description: "I want to offer services on the platform",
      icon: Briefcase
    },
    {
      id: "talent",
      name: "Talent",
      description: "I want to showcase my skills and find opportunities",
      icon: Star
    },
    {
<<<<<<< HEAD
=======
<<<<<<< HEAD
      id: 'client',
      name: 'Client',
      description: 'I want to discover and hire talent or services',
      icon: User,
    },
  ]
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      id: "client",
      name: "Client",
      description: "I want to discover and hire talent or services",
      icon: User
    }
  ],
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

<<<<<<< HEAD
      id: 'serviceProvider'
      name: 'Service Provider'
      description: 'I want to offer services on the platform'
      icon: Briefcase
    }
    {
      id: 'talent'
      name: 'Talent'
      description: 'I want to showcase my skills and find opportunities'
      icon: Star
    }
    {
      id: 'client'
      name: 'Client'
      description: 'I want to discover and hire talent or services'
      icon: User
    }
  ]
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
    <div className='space - y-6'>;
      <div className='text - center mb - 6'>;
        <h3 className='text - 2xl font - bold text - white'>Choose your role</h3>;
        <p className='text - zion - slate - light mt - 2'>;
          This helps us personalize your experience;
        </p>;
      </div>;
      <div className='grid gap - 4 md:grid - cols - 3'>;
        {user_types.map (type => {
          const Icon = type.icon;
          const is_selected = selected_type === type.id;
              on_click={() => on_select (type.id)}
              variant='outline'              className={`h - auto flex flex - col items - center justify - center p - 6 space - y-3 border ${
                is_selected;
                  ? 'border - zion - purple bg - zion - purple / 10 text - zion - purple';
                  : 'border - zion - blue - light hover:border - zion - cyan / 50 text - white';
              }`}
            >;
              <div;
                className={`p - 3 rounded - full ${is_selected ? 'bg - zion - purple' : 'bg - zion - blue'}`}
              >;
                <Icon;
                  className={`h - 6 w - 6 ${is_selected ? 'text - white' : 'text - zion - slate - light'}`}
                />;
              </div>;
              <div className='text - center'>;
                <h4 className='font - medium'>{type.name}</h4>;
                <p className='text - sm text - zion - slate - light mt - 1'>;

                  {type.description}
                </p>;
              </div>;
            </Button>);
        })}

                />;
=======

      
      <div className="grid gap-4 md: grid-cols-3">
        {userTypes.map((type) => {
          const Icon = type.icon,
          const isSelected = selectedType === type.id,
          
          return (
            <Button
              key={type.id}
              onClick={() => onSelect(type.id)}
              variant="outline"
              className={`h-auto flex flex-col items-center justify-center p-6 space-y-3 border ${
                isSelected 
                  ? "border-zion-purple bg-zion-purple/10 text-zion-purple" 
                  : "border-zion-blue-light hover:border-zion-cyan/50 text-white"
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              }`}
            >
              <div className={`p-3 rounded-full ${isSelected ? "bg-zion-purple" : "bg-zion-blue"}`}>
                <Icon className={`h-6 w-6 ${isSelected ? "text-white" : "text-zion-slate-light"}`} />
              </div>
<<<<<<< HEAD
              <div className='text-center'>
                <h4 className='font-medium'>{type.name}</h4>
                <p className='text-sm text-zion-slate-light mt-1'>
                  {type.description}
                </p>
              </div>
            </Button>
          )
<<<<<<< HEAD
        })}
      </div>
    </div>
  )
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
              <div className="text-center">
                <h4 className="font-medium">{type.name}</h4>
                <p className="text-sm text-zion-slate-light mt-1">
import { useState } from "react",;
import { Briefcase, Star, User } from 'lucide-react';
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
    <div className="space-y-6">;
      <div className="text-center mb-6">;
        <h3 className="text-2xl font-bold text-white">Choose your role</h3>;
        <p className="text-zion-slate-light mt-2">;
          This helps us personalize your experience;
        </p>;
      </div>;
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
              }`}
            >;
              <div className={`p-3 rounded-full ${isSelected ? "bg-zion-purple" : "bg-zion-blue"}`}>;
                <Icon className={`h-6 w-6 ${isSelected ? "text-white" : "text-zion-slate-light"}`} />;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              </div>;
              <div className='text-center'>;
                <h4 className='font-medium'>{type && type.name}</h4>;
                <p className='text-sm text-zion-slate-light mt-1'>;
                  {type && type.description}
                </p>;
              </div>;
            </Button>;
          );
        })}
      </div>;
    </div>;
  );


=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
      </div>;
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
