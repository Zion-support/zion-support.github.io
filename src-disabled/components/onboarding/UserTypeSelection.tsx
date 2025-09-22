:src_backup/components/onboarding/UserTypeSelection.tsx
import { useState } from 'react';
import { Briefcase, Star, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { useState } from "react";
:src/components/onboarding/UserTypeSelection.tsx
import { Briefcase, Star, User } from 'lucide-react'
import { Button } from "@/components/ui/button";
interface UserTypeOption {
export function UserTypeSelection({
  onSelect
  selectedType
}: UserTypeSelectionProps) {
id: 'serviceProvider'
      name: 'Service Provider'
id: 'serviceProvider''
      name: 'Service Provider''
      description: 'I want to offer services on the platform'
:src_backup/components/onboarding/UserTypeSelection.tsx
      icon: Briefcase;
    }'
import { useState } from 'react';'
import { Briefcase, Star, User } from 'lucide-react';'
import { Button } from '@/components / ui / button';
interface UserTypeOption {'
  id: 'service_provider' | 'talent' | 'client';
  name: string;
  description: string;
  icon: React.ElementType;
interface UserTypeSelectionProps {'
  on_select: (user_type: 'service_provider' | 'talent' | 'client') => void;
  selected_type: string | null;
export /**;
 * UserTypeSelection - Function description;
 */
function UserTypeSelection() {}
  const user_types: UserTypeOption[] = [;
    {'
      id: 'service_provider','
      name: 'Service Provider','
      description: 'I want to offer services on the platform',
      icon: Briefcase,
    },
    {'
      id: 'talent''
      name: 'Talent''
      description: 'I want to showcase my skills and find opportunities'
      icon: Star;
    }
:src_backup/components/onboarding/UserTypeSelection.tsx
    {
import { Briefcase, Star, User } from 'lucide-react''
      id: 'talent,
  name: 'Talent
      description: 'I want to showcase my skills and find opportunities,
  icon: Star;
pr-12325


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
}

:src/components/onboarding/UserTypeSelection.tsx
export function UserTypeSelection({ onSelect, selectedType }: UserTypeSelectionProps) {

  const userTypes: UserTypeOption[] = [
    {
      id: "serviceProvider",
      name: "Service Provider",
    {}
'
import { Briefcase, Star, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
interface UserTypeOption {}
  const userTypes: UserTypeOption[] = []
    {"
      id: "serviceProvider","
      name: "Service Provider","
      description: "I want to offer services on the platform",
      icon: Briefcase;
    },
    {"
      id: "talent","
      name: "Talent","
      description: "I want to showcase my skills and find opportunities",
      icon: Star;
interface UserTypeOption {,
  const userTypes: UserTypeOption[] = [,
    {
      id: "serviceProvider","
      name: "Service Provider","
      description: "I want to offer services on the platform","
      icon: Briefcase
    },
    {
      id: "talent","
      name: "Talent","
      description: "I want to showcase my skills and find opportunities","
      icon: Star
    },
:src_backup/components/onboarding/UserTypeSelection.tsx
    {
      id: "client",
      name: "Client",
      description: "I want to discover and hire talent or services",
      icon: User
    }
  ],
:src_backup/components/onboarding/UserTypeSelection.tsx

:src/components/onboarding/UserTypeSelection.tsx


  return (
:src_backup/components/onboarding/UserTypeSelection.tsx
<div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white">Choose your role</h3>
        <p className="text-zion-slate-light mt-2">
          This helps us personalize your experience
        </p>
      </div>
    <div className='space-y-6'>;
      <div className='text-center mb-6'>;
        <h3 className='text-2xl font-bold text-white'>Choose your role</h3>;
        <p className='text-zion-slate-light mt-2'>;
          This helps us personalize your experience;
        </p>;
      </div>;
:src_backup/components/onboarding/UserTypeSelection.tsx
'
      <div className='grid gap-4 md:grid-cols-3'>;
        {userTypes && userTypes.map(type => {;
          const Icon = type && type.icon;
          const isSelected = selectedType === type && type.id;
:src_backup/components/onboarding/UserTypeSelection.tsx

onClick={() => onSelect(type && type.id)}
              variant='outline'              className={`h-auto flex flex-col items-center justify-center p-6 space-y-3 border ${;
                isSelected;'
                  ? 'border-zion-purple bg-zion-purple/10 text-zion-purple';'
                  : 'border-zion-blue-light hover:border-zion-cyan/50 text-white';
`
              }`}
            >;
              <div'`
                className={`p-3 rounded-full ${isSelected ? 'bg-zion-purple' : 'bg-zion-blue'}`}>;
                <Icon'`
                  className={`h-6 w-6 ${isSelected ? 'text-white' : 'text-zion-slate-light'}`}
'
      id: 'client','
      name: 'Client','
      description: 'I want to discover and hire talent or services',
      icon: User,
    },
  ];
  return ('
    <div className='space - y-6'>;'
      <div className='text - center mb - 6'>;'
        <h3 className='text - 2xl font - bold text - white'>Choose your role</h3>;'
        <p className='text - zion - slate - light mt - 2'>;
          This helps us personalize your experience;
        </p>;
      </div>;'
      <div className='grid gap - 4 md:grid - cols - 3'>;
        {user_types.map (type => {}
          const Icon = type.icon;
          const is_selected = selected_type === type.id;
:src_backup/components/onboarding/UserTypeSelection.tsx
              on_click={() => on_select (type.id)}'`
              variant='outline'              className={`h - auto flex flex - col items - center justify - center p - 6 space - y-3 border ${}
                is_selected;'
                  ? 'border - zion - purple bg - zion - purple / 10 text - zion - purple';'
                  : 'border - zion - blue - light hover:border - zion - cyan / 50 text - white';`
              }`}
            >;
              <div;'`
                className={`p - 3 rounded - full ${is_selected ? 'bg - zion - purple' : 'bg - zion - blue'}`}
              >;
                <Icon;'`
                  className={`h - 6 w - 6 ${is_selected ? 'text - white' : 'text - zion - slate - light'}`}
                />;
              </div>;'
              <div className='text - center'>;'
                <h4 className='font - medium'>{type.name}</h4>;'
                <p className='text - sm text - zion - slate - light mt - 1'>;
                  {type.description}
                </p>;
              </div>;
            </Button>);
        })}
                />;
      <div className="grid gap-4 md: grid-cols-3">"
        {userTypes.map((type) => {
          const Icon = type.icon,
          const isSelected = selectedType === type.id,

:src_backup/components/onboarding/UserTypeSelection.tsx
      <div className="grid gap-4 md: grid-cols-3">
        {userTypes.map((type) => {}
          const Icon = type.icon,
          const isSelected = selectedType === type.id,
  const userTypes: UserTypeOption[] = [
    {
      id: "serviceProvider";
      name: "Service Provider";
      description: "I want to offer services on the platform";
      icon: Briefcase
    },
    {
      id: "talent";
      name: "Talent";
      description: "I want to showcase my skills and find opportunities";
      icon: Star
    },
    {
      id: "client";
      name: "Client";
      description: "I want to discover and hire talent or services";
      icon: User
    }
  ],

  return (
    <div className;
origin/cursor/automate-test-improve-and-merge-code-2533
          return (
            <Button;
              key={type.id}
:src_backup/components/onboarding/UserTypeSelection.tsx
onClick={() => onSelect(type.id)}
              variant="outline"
              className={`h-auto flex flex-col items-center justify-center p-6 space-y-3 border ${
                isSelected 
                  ? "border-zion-purple bg-zion-purple/10 text-zion-purple"
                  : "border-zion-blue-light hover:border-zion-cyan/50 text-white"

:src_backup/components/onboarding/UserTypeSelection.tsx

              variant='outline'              className={`h-auto flex flex-col items-center justify-center p-6 space-y-3 border ${
                isSelected
                  ? 'border-zion-purple bg-zion-purple/10 text-zion-purple'
                  : 'border-zion-blue-light hover:border-zion-cyan/50 text-white'
              }`}
            >"`
              <div className={`p-3 rounded-full ${isSelected ? "bg-zion-purple" : "bg-zion-blue"}`}>"`
                <Icon className={`h-6 w-6 ${isSelected ? "text-white" : "text-zion-slate-light"}`} />
              </div>
:src_backup/components/onboarding/UserTypeSelection.tsx

              <div className="text-center">
                <h4 className="font-medium">{type.name}</h4>
                <p className="text-sm text-zion-slate-light mt-1">
import { useState } from "react",;
import { Briefcase, Star, User } from 'lucide-react';
"
              <div className="text-center">"
                <h4 className="font-medium">{type.name}</h4>"
                <p className="text-sm text-zion-slate-light mt-1">"
import { useState } from "react",;'
import { Briefcase, Star, User } from 'lucide-react';"
import { Button } from "@/components/ui/button",;
interface UserTypeOption {;"
  id: "serviceProvider" | "talent" | "client",;
  name: string,;
  description: string,;
  icon: React.ElementType;
}
:src/components/onboarding/UserTypeSelection.tsx
;
interface UserTypeSelectionProps {;"
  onSelect: (userType: "serviceProvider" | "talent" | "client") => void,;
  selectedType: string | null;
}
;
:src_backup/components/onboarding/UserTypeSelection.tsx
export function UserTypeSelection() { return null; }
    },;
    {;"
      id: "talent",;"
      name: "Talent",;"
      description: "I want to showcase my skills and find opportunities",;
      icon: Star;
    },;
    {;"
      id: "client",;"
      name: "Client",;"
      description: "I want to discover and hire talent or services",;
      icon: User;
    }
  ],;
  return (;"
    <div className="space-y-6">;"
      <div className="text-center mb-6">;"
        <h3 className="text-2xl font-bold text-white">Choose your role</h3>;"
        <p className="text-zion-slate-light mt-2">;
          This helps us personalize your experience;
        </p>;
      </div>;"
      <div className="grid gap-4 md: grid-cols-3">;
        {userTypes.map((type) => {;
          const Icon = type.icon;
          const isSelected = selectedType === type.id;
          return (;
            <Button;
              key={type.id}
:src_backup/components/onboarding/UserTypeSelection.tsx
              onClick={() => onSelect(type.id)}"
              variant="outline";`
              className={`h-auto flex flex-col items-center justify-center p-6 space-y-3 border ${;
                isSelected;"
                  ? "border-zion-purple bg-zion-purple/10 text-zion-purple";"
                  : "border-zion-blue-light hover:border-zion-cyan/50 text-white";`
              }`}
            >;"`
              <div className={`p-3 rounded-full ${isSelected ? "bg-zion-purple" : "bg-zion-blue"}`}>;"`
                <Icon className={`h-6 w-6 ${isSelected ? "text-white" : "text-zion-slate-light"}`} />;
              </div>;"
              <div className="text-center">;"
                <h4 className="font-medium">{type.name}</h4>;"
                <p className="text-sm text-zion-slate-light mt-1">;
                  {type.description}
                </p>;
              </div>;
            </Button>;
          );
:src_backup/components/onboarding/UserTypeSelection.tsx

        })}
</div>;
    </div>;
  );

</div>;
    </div>);
}

}
:src_backup/components/onboarding/UserTypeSelection.tsx
;

}}}}}}})))]
}
;
      </div>
    </div>
  );
origin/cursor/automate-test-improve-and-merge-code-2533
:src_backup/components/onboarding/UserTypeSelection.tsx
    },]
  ];
    <div className='space - y-6'>;

      <div className='text - center mb - 6'>;
        <h3 className='text - 2xl font - bold text - white'>Choose your role</h3>;
        <p className='text - zion - slate - light mt - 2'>;
      <div className='grid gap - 4 md:grid - cols - 3'>;
              <div;`;
                className={`p - 3 rounded - full ${is_selected ? 'bg - zion - purple' : 'bg - zion - blue'}`}
              >;
                  className={`h - 6 w - 6 ${is_selected ? 'text - white' : 'text - zion - slate - light'}`}
                />;

              <div className='text - center'>;
                <h4 className='font - medium'>{type.name}</h4>;
                <p className='text - sm text - zion - slate - light mt - 1'>;
              </div>;)
            );
      <div className="grid gap-4 md: grid-cols-3">"
            <Button;
              key={type.id}
              onClick={() => onSelect(type.id)}
"`;
              <div className={`p-3 rounded-full ${isSelected ? "bg-zion-purple" : "bg-zion-blue"}`}>"
</div>"`;
                <Icon className={`h-6 w-6 ${isSelected ? "text-white" : "text-zion-slate-light"}`} />"

              <div className="text-center">"
</div>"
                <h4 className="font-medium">{type.name}</h4>""
                <p className="text-sm text-zion-slate-light mt-1">"
</p>"
    <div className="space-y-6">;"
      <div className="text-center mb-6">;"
        <h3 className="text-2xl font-bold text-white">Choose your role</h3>;""
        <p className="text-zion-slate-light mt-2">;"
      </div>;"
      <div className="grid gap-4 md: grid-cols-3">;"
              <div className={`p-3 rounded-full ${isSelected ? "bg-zion-purple" : "bg-zion-blue"}`}>;"
                <Icon className={`h-6 w-6 ${isSelected ? "text-white" : "text-zion-slate-light"}`} />;"

              <div className="text-center">;"
                <h4 className="font-medium">{type.name}</h4>;""
                <p className="text-sm text-zion-slate-light mt-1">;"
            ;
    </div>);"`;
pr-12325
