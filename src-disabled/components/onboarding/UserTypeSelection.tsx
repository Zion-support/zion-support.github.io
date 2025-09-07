<<<<<<< HEAD
:src/components/onboarding/UserTypeSelection.tsx
import { useState } from "react;
import { useState } from 'react;
import { Briefcase, Star, User } from lucide-react';
import { Button } from '@/components/ui/button;

import { useState } from "react";
origin/cursor/automate-test-improve-and-merge-code-2533
=======
import { useState } from 'react';
import { Briefcase, Star, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { useState } from "react";
>>>>>>> origin/chore/fix-lint-and-merge

import { Briefcase, Star, User } from lucide-react'
import { Button } from "@/components/ui/button;
interface UserTypeOption {
export function UserTypeSelection({
  onSelect
  selectedType
}: UserTypeSelectionProps) {
<<<<<<< HEAD

:src/components/onboarding/UserTypeSelection.tsx
  const userTypes: UserTypeOption[] = [
    {
id: 'serviceProvider
      name: Service Provider'

      description: 'I want to offer services on the platform'
      icon: Briefcase

;
import { useState  } from react';
import { Briefcase, Star, User  } from 'lucide-react;
import { Button  } from @/components/ui/button';
interface UserTypeOption  {export function UserTypeSelection() {id: 'serviceProvider;
      name: Service Provider';
      description: 'I want to offer services on the platform;
      icon: Briefcase;
    }
import { Button  } from @/components / ui / button';
interface UserTypeOption  {id: 'service_provider | talent' | 'client;
  name: string;
  description: string;
  icon: React.ElementType;
interface UserTypeSelectionProps  {on_select: (user_type: service_provider' | 'talent | client') => void;
  selected_type: string | null;
export /**;
 * UserTypeSelection - Function description;
 */;
function UserTypeSelection() {const user_types: UserTypeOption[] = [;
    {id: 'service_provider,name: Service Provider',description: 'I want to offer services on the platform,icon: Briefcase},{id: talent';
      name: 'Talent;
      description: I want to showcase my skills and find opportunities';
      icon: Star;
    }
    {




import { Briefcase, Star, User } from 'lucide-react
import { Button } from @/components/ui/button";
interface UserTypeOption {}
=======
id: 'serviceProvider'
      name: 'Service Provider'

      description: 'I want to offer services on the platform'

    }
>>>>>>> origin/chore/fix-lint-and-merge

interface UserTypeSelectionProps {
  onSelect: (userType: "serviceProvider | talent" | "client) => void,
  selectedType: string | null
}

<<<<<<< HEAD

=======
  const userTypes: UserTypeOption[] = [
>>>>>>> origin/chore/fix-lint-and-merge
    {
      id: serviceProvider",
      name: "Service Provider,

      description: I want to offer services on the platform",
      icon: Briefcase;
    },
    {"
      id: talent,"
      name: "Talent,
      description: "I want to showcase my skills and find opportunities",
      icon: Star;

    },
<<<<<<< HEAD
:src/components/onboarding/UserTypeSelection.tsx
    {





=======
>>>>>>> origin/chore/fix-lint-and-merge

      id: client,
      name: "Client",
      description: I want to discover and hire talent or services,
      icon: User
    }
  ],

  return (
<<<<<<< HEAD
:src/components/onboarding/UserTypeSelection.tsx
    <div className="space-y-6">
      <div className=text-center mb-6>
        <h3 className="text-2xl font-bold text-white">Choose your role</h3>
        <p className=text-zion-slate-light mt-2>
          This helps us personalize your experience
        </p>
      </div>
      <div className=grid gap-4 md:grid-cols-3'>
        {userTypes.map(type => {
          const Icon = type.icon
          const isSelected = selectedType === type.id
              onClick={() => onSelect(type.id)}
              variant='outline              className={`h-auto flex flex-col items-center justify-center p-6 space-y-3 border ${
                isSelected
                  ? border-zion-purple bg-zion-purple/10 text-zion-purple'
                  : 'border-zion-blue-light hover:border-zion-cyan/50 text-white

    <div className=space-y-6'>;
    {interface UserTypeOption  {const userTypes: UserTypeOption[] = [;
    {id: "serviceProvider",name: Service Provider,description: "I want to offer services on the platform",icon: Briefcase;
    },{id: talent,name: "Talent",description: I want to showcase my skills and find opportunities,icon: Star;
    },{id: "client",name: Client,description: "I want to discover and hire talent or services",icon: User;
    }
  ],return (<div className='space-y-6>;
      <div className=text-center mb-6'>;
        <h3 className='text-2xl font-bold text-white>Choose your role</h3>;
=======

    <div className='space-y-6'>;
      <div className='text-center mb-6'>;
        <h3 className='text-2xl font-bold text-white'>Choose your role</h3>;
>>>>>>> origin/chore/fix-lint-and-merge

        <p className=text-zion-slate-light mt-2'>;
          This helps us personalize your experience;
        </p>;
<<<<<<< HEAD
      </div>;<div className='grid gap-4 md:grid-cols-3'>;
      </div>;<div className='grid gap-4 md:grid-cols-3>;
        {userTypes && userTypes.map(type => {const Icon = type && type.icon;
          const isSelected  = selectedType === type && type.id;onClick={() => onSelect(type && type.id)}
              variant=outline'              className={`h-auto flex flex-col items-center justify-center p-6 space-y-3 border ${isSelected;
                  ? 'border-zion-purple bg-zion-purple/10 text-zion-purple;
                  : border-zion-blue-light hover:border-zion-cyan/50 text-white';}`}
            >;
              <div;
                className={`p-3 rounded-full ${isSelected ? 'bg-zion-purple : bg-zion-blue'}`}>;
                <Icon;
                  className={`h-6 w-6 ${isSelected ? 'text-white : text-zion-slate-light'}`}id: 'client,name: Client',description: 'I want to discover and hire talent or services,icon: User}];
  return (<div className=space - y-6'>;
      <div className='text - center mb - 6>;
        <h3 className=text - 2xl font - bold text - white'>Choose your role</h3>;
=======
>>>>>>> origin/chore/fix-lint-and-merge
      </div>;

      <div className='grid gap-4 md:grid-cols-3>;
        {userTypes && userTypes.map(type => {
          const Icon = type && type.icon;
          const isSelected = selectedType === type && type.id;

              variant=outline'              className={`h-auto flex flex-col items-center justify-center p-6 space-y-3 border ${
                isSelected;'
                  ? border-zion-purple bg-zion-purple/10 text-zion-purple;'
                  : 'border-zion-blue-light hover:border-zion-cyan/50 text-white;
`
              }`}
            >;
              <div`
                className={`p-3 rounded-full ${isSelected ? 'bg-zion-purple' : bg-zion-blue}`}>;
                <Icon'`
                  className={`h-6 w-6 ${isSelected ? 'text-white : text-zion-slate-light'}`}
'
      id: client,'
      name: 'Client,

      description: 'I want to discover and hire talent or services',
      icon: User}];
  return (
    <div className=space - y-6'>;'
      <div className=text - center mb - 6>;'
        <h3 className='text - 2xl font - bold text - white>Choose your role</h3>;
        <p className='text - zion - slate - light mt - 2'>;
          This helps us personalize your experience;
        </p>;
      </div>;'
      <div className='grid gap - 4 md:grid - cols - 3'>;
<<<<<<< HEAD
        {user_types.map (type => {const Icon = type.icon;
          const is_selected = selected_type === type.id;
              on_click={() => on_select (type.id)}
              variant='outline              className={`h - auto flex flex - col items - center justify - center p - 6 space - y-3 border ${is_selected;
                  ? border - zion - purple bg - zion - purple / 10 text - zion - purple';
                  : 'border - zion - blue - light hover:border - zion - cyan / 50 text - white;
              }`}
            >;
              <div;
                className={`p - 3 rounded - full ${is_selected ? bg - zion - purple' : 'bg - zion - blue}`}
              >;
                <Icon;
                  className={`h - 6 w - 6 ${is_selected ? text - white' : 'text - zion - slate - light}`}
                />;
              </div>;
              <div className=text - center'>;
                <h4 className='font - medium>{type.name}</h4>;
                <p className=text - sm text - zion - slate - light mt - 1'>;{type.description}
=======
>>>>>>> origin/chore/fix-lint-and-merge
        {user_types.map (type => {}
          const Icon = type.icon;

                />;
              </div>;'
              <div className=text - center>;'
                <h4 className='font - medium>{type.name}</h4>;
                <p className='text - sm text - zion - slate - light mt - 1'>;
                  {type.description}
                </p>;
              </div>;
            </Button>);
        })}
                />;
      <div className=grid gap-4 md: grid-cols-3>"
        {userTypes.map((type) => {
          const Icon = type.icon,
          const isSelected = selectedType === type.id,
<<<<<<< HEAD
          

=======
>>>>>>> origin/chore/fix-lint-and-merge

      <div className="grid gap-4 md: grid-cols-3>
        {userTypes.map((type) => {}
    {
<<<<<<< HEAD
      id: serviceProvider";
            </Button>)})}/>;<div className="grid gap-4 md: grid-cols-3>;
        {userTypes.map((type) => {const Icon = type.icon,const isSelected = selectedType === type.id,const userTypes: UserTypeOption[] = [;
    {id: serviceProvider";
      name: "Service Provider;
      description: I want to offer services on the platform";
      icon: Briefcase;
    },{id: "talent;
      name: Talent";
      description: "I want to showcase my skills and find opportunities;
      icon: Star;
    },{id: "client";
=======
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
>>>>>>> origin/chore/fix-lint-and-merge
      name: "Client";
      description: "I want to discover and hire talent or services";
      icon: User
    }
  ],

  return (
    <div className;
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/chore/fix-lint-and-merge
origin/cursor/automate-test-improve-and-merge-code-2533
          return (
            <Button;
              key={type.id}
<<<<<<< HEAD
              onClick={() => onSelect(type.id)}



              variant="outline
              className={`h-auto flex flex-col items-center justify-center p-6 space-y-3 border ${
                isSelected 
                  ? border-zion-purple bg-zion-purple/10 text-zion-purple" 
                  : "border-zion-blue-light hover:border-zion-cyan/50 text-white
    <div className=space-y-6">
      <div className="text-center mb-6>
        <h3 className=text-2xl font-bold text-white">Choose your role</h3>
        <p className="text-zion-slate-light mt-2>
          This helps us personalize your experience
        </p>
      </div>

              variant=outline              className={`h-auto flex flex-col items-center justify-center p-6 space-y-3 border ${
                isSelected
                  ? 'border-zion-purple bg-zion-purple/10 text-zion-purple'
                  : 'border-zion-blue-light hover:border-zion-cyan/50 text-white'
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/chore/fix-lint-and-merge

                  : border-zion-blue-light hover:border-zion-cyan/50 text-white"

              }`}
            >"`
              <div className={`p-3 rounded-full ${isSelected ? bg-zion-purple : "bg-zion-blue"}`}>`
                <Icon className={`h-6 w-6 ${isSelected ? text-white" : "text-zion-slate-light}`} />
              </div>
<<<<<<< HEAD
:src/components/onboarding/UserTypeSelection.tsx
              <div className='text-center'>
                <h4 className=font-medium>{type.name}</h4>
                <p className='text-sm text-zion-slate-light mt-1'>
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
=======
>>>>>>> origin/chore/fix-lint-and-merge

              <div className=text-center">
                <h4 className="font-medium>{type.name}</h4>
                <p className=text-sm text-zion-slate-light mt-1">
import { useState } from "react,
import { Briefcase, Star, User } from lucide-react;

import { Button } from @/components/ui/button",
interface UserTypeOption {"
  id: serviceProvider | "talent" | client,
  name: string,
  description: string,
  icon: React.ElementType;
}

;
interface UserTypeSelectionProps {"
  onSelect: (userType: "serviceProvider | talent" | "client) => void,
  selectedType: string | null;
}

    },
    {
      id: "talent",
      name: Talent","
      description: I want to showcase my skills and find opportunities,
      icon: Star;
    },
    {"
      id: "client,
      name: "Client",
      description: I want to discover and hire talent or services",
      icon: User;
    }
<<<<<<< HEAD
  ],return (<div className;return (<Button;
              key={type.id}
              onClick={() => onSelect(type.id)}variant="outline;
              className={`h-auto flex flex-col items-center justify-center p-6 space-y-3 border ${isSelected;
                  ? border-zion-purple bg-zion-purple/10 text-zion-purple";
                  : "border-zion-blue-light hover:border-zion-cyan/50 text-white;
    <div className=space-y-6">;
      <div className="text-center mb-6>;
        <h3 className=text-2xl font-bold text-white">Choose your role</h3>;
        <p className="text-zion-slate-light mt-2>;
          This helps us personalize your experience;
        </p>;
      </div>;
              variant='outline'              className={`h-auto flex flex-col items-center justify-center p-6 space-y-3 border ${isSelected;
                  ? border-zion-purple bg-zion-purple/10 text-zion-purple;
                  : 'border-zion-blue-light hover:border-zion-cyan/50 text-white';
              }`}
            >;
              <div className={`p-3 rounded-full ${isSelected ? bg-zion-purple" : "bg-zion-blue}`}>;
                <Icon className={`h-6 w-6 ${isSelected ? text-white" : "text-zion-slate-light}`} />;
              </div>;
              <div className=text-center">;
                <h4 className="font-medium>{type.name}</h4>;
                <p className=text-sm text-zion-slate-light mt-1">;
import { useState } from "react,import { Button } from @/components/ui/button",interface UserTypeOption  {id: "serviceProvider | talent" | "client,name: string,description: string,icon: React.ElementType;
}interface UserTypeSelectionProps  {onSelect: (userType: serviceProvider" | "talent | client") => void,selectedType: string | null;
}export function UserTypeSelection() {const userTypes: UserTypeOption[] = [;
    {id: "serviceProvider,name: Service Provider",description: "I want to offer services on the platform,icon: Briefcase;
    },{id: talent",name: "Talent,description: I want to showcase my skills and find opportunities",icon: Star;
    },{id: "client,name: Client",description: "I want to discover and hire talent or services,icon: User;
    }
  ],return (<div className=space-y-6">;
      <div className="text-center mb-6>;
        <h3 className=text-2xl font-bold text-white">Choose your role</h3>;
        <p className="text-zion-slate-light mt-2>;
          This helps us personalize your experience;
        </p>;
      </div>;
  ],
  return (;
    <div className="space-y-6">;
      <div className=text-center mb-6">;"
        <h3 className=text-2xl font-bold text-white>Choose your role</h3>;"
        <p className="text-zion-slate-light mt-2>;
=======
  ],;
  return (;"
    <div className="space-y-6">;"
      <div className="text-center mb-6">;"
        <h3 className="text-2xl font-bold text-white">Choose your role</h3>;"
        <p className="text-zion-slate-light mt-2">;
>>>>>>> origin/chore/fix-lint-and-merge
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
<<<<<<< HEAD
              onClick={() => onSelect(type.id)}
              variant=outline;
              className={`h-auto flex flex-col items-center justify-center p-6 space-y-3 border ${isSelected;
                  ? "border-zion-purple bg-zion-purple/10 text-zion-purple";
                  : border-zion-blue-light hover:border-zion-cyan/50 text-white;
=======
>>>>>>> origin/chore/fix-lint-and-merge

              className={`h-auto flex flex-col items-center justify-center p-6 space-y-3 border ${
                isSelected;"
                  ? "border-zion-purple bg-zion-purple/10 text-zion-purple;
                  : "border-zion-blue-light hover:border-zion-cyan/50 text-white";`
              }`}
            >;`
              <div className={`p-3 rounded-full ${isSelected ? bg-zion-purple" : "bg-zion-blue}`}>;`
                <Icon className={`h-6 w-6 ${isSelected ? "text-white" : text-zion-slate-light}`} />;
              </div>;"
              <div className="text-center>;
                <h4 className="font-medium">{type.name}</h4>;
                <p className=text-sm text-zion-slate-light mt-1">;
                  {type.description}
                </p>;
              </div>;
            </Button>;
          );

        })}
<<<<<<< HEAD



      </div>;
    </div>);
}

}

      </div>
    </div>
  );
origin/cursor/automate-test-improve-and-merge-code-2533
          )})}</div>;
    </div>;
  )</div>;
    </div>)}}</div>;
    </div>;
  )
      </div>;
    </div>;
  );
=======
>>>>>>> origin/chore/fix-lint-and-merge

}

      </div>
    </div>
  );
<<<<<<< HEAD
:src/components/onboarding/UserTypeSelection.tsx
}
}
}
origin/cursor/automate-test-improve-and-merge-code-2533
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/chore/fix-lint-and-merge
