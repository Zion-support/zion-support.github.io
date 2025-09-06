import { Briefcase, Star, User } from 'lucide-react'
import { Button } from "@/components/ui/button";
interface UserTypeOption {
<<<<<<< HEAD

<<<<<<< HEAD

=======
import { useState } from 'react'

import { useState } from "react";
import { useState } from "react",
import { Briefcase, Star, User } from 'lucide-react'
import { Button } from "@/components/ui/button";
interface UserTypeOption {
  id: "serviceProvider" | "talent" | "client";
  name: string;
  description: string;
  icon: React.ElementType
interface UserTypeSelectionProps {
  onSelect: (userType: "serviceProvider" | "talent" | "client") => void;
  selectedType: string | null
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export function UserTypeSelection({
  onSelect
  selectedType
}: UserTypeSelectionProps) {
<<<<<<< HEAD
import { useState } from 'react'

import { useState } from "react";
import { Button } from "@/components/ui/button";
interface UserTypeOption {
  const userTypes: UserTypeOption[] = [
    {
  const userTypes: UserTypeOption[] = [
    {
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
}

export function UserTypeSelection({ onSelect, selectedType }: UserTypeSelectionProps) {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
=======
      id: 'client',
      name: 'Client',
      description: 'I want to discover and hire talent or services',
      icon: User,
    },
  ]
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      id: "client",
      name: "Client",
      description: "I want to discover and hire talent or services",
      icon: User
    }
  ],

  return (
<<<<<<< HEAD
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white">Choose your role</h3>
        <p className="text-zion-slate-light mt-2">
          This helps us personalize your experience
        </p>
      </div>
      <div className='grid gap-4 md:grid-cols-3'>
        {userTypes.map(type => {
          const Icon = type.icon
          const isSelected = selectedType === type.id
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df




<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  return (

    <div className='space-y-6'>;
      <div className='text-center mb-6'>;
        <h3 className='text-2xl font-bold text-white'>Choose your role</h3>;
        <p className='text-zion-slate-light mt-2'>;
          This helps us personalize your experience;
        </p>;
      </div>;

      <div className='grid gap-4 md:grid-cols-3'>;
        {userTypes && userTypes.map(type => {;
          const Icon = type && type.icon;
          const isSelected = selectedType === type && type.id;


              onClick={() => onSelect(type && type.id)}
              variant='outline'              className={`h-auto flex flex-col items-center justify-center p-6 space-y-3 border ${;
                isSelected;
                  ? 'border-zion-purple bg-zion-purple/10 text-zion-purple';
                  : 'border-zion-blue-light hover:border-zion-cyan/50 text-white';

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              }`}
            >;
              <div
                className={`p-3 rounded-full ${isSelected ? 'bg-zion-purple' : 'bg-zion-blue'}`}>;
                <Icon
                  className={`h-6 w-6 ${isSelected ? 'text-white' : 'text-zion-slate-light'}`}
<<<<<<< HEAD

<<<<<<< HEAD
      id: 'client',
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      id: 'client',
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      name: 'Client',
      description: 'I want to discover and hire talent or services',
      icon: User,
    },
<<<<<<< HEAD
<<<<<<< HEAD
  ];
  return (
=======
  ]
      id: "client",
      name: "Client",
      description: "I want to discover and hire talent or services",
      icon: User
    }
  ],
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
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white">Choose your role</h3>
        <p className="text-zion-slate-light mt-2">
          This helps us personalize your experience
        </p>
      </div>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  return (
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white">Choose your role</h3>
        <p className="text-zion-slate-light mt-2">
          This helps us personalize your experience
        </p>
      </div>
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              }`}
            >
              <div className={`p-3 rounded-full ${isSelected ? "bg-zion-purple" : "bg-zion-blue"}`}>
                <Icon className={`h-6 w-6 ${isSelected ? "text-white" : "text-zion-slate-light"}`} />
              </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
        })}
      </div>
    </div>
  )
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


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
<<<<<<< HEAD
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
              </div>;
              <div className='text-center'>;
                <h4 className='font-medium'>{type && type.name}</h4>;
                <p className='text-sm text-zion-slate-light mt-1'>;
                  {type && type.description}
                </p>;
              </div>;
            </Button>;
          );
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        })}
      </div>;
    </div>;
  );
<<<<<<< HEAD

<<<<<<< HEAD


      </div>;
    </div>);
}

}
;
=======
      </div>;
    </div>;
  );
};
}
};
}
}
}
;

}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
