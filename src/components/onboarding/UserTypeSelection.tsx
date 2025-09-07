<<<<<<< HEAD:src_backup/components/onboarding/UserTypeSelection.tsx
<<<<<<< HEAD:src_backup/components/onboarding/UserTypeSelection.tsx
<<<<<<< HEAD:src/components/onboarding/UserTypeSelection.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/onboarding/UserTypeSelection.tsx
import { useState } from 'react';
import { Briefcase, Star, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/onboarding/UserTypeSelection.tsx

import { useState } from "react";
<<<<<<< HEAD:src/components/onboarding/UserTypeSelection.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/onboarding/UserTypeSelection.tsx
import { Briefcase, Star, User } from 'lucide-react'
import { Button } from "@/components/ui/button";
interface UserTypeOption {
export function UserTypeSelection({
  onSelect
  selectedType
}: UserTypeSelectionProps) {
id: 'serviceProvider'
      name: 'Service Provider'
=======
id: 'serviceProvider''
      name: 'Service Provider''
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/onboarding/UserTypeSelection.tsx
      description: 'I want to offer services on the platform'
<<<<<<< HEAD:src_backup/components/onboarding/UserTypeSelection.tsx
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
=======
      icon: Briefcase
    }
import { useState } from 'react';
import { Briefcase, Star, User } from 'lucide-react';
import { Button } from '@/components / ui / button';
interface UserTypeOption {
  id: 'service_provider' | 'talent' | 'client';',
  name: string;,
  description: string;,
  icon: React.ElementType;,
interface UserTypeSelectionProps {
  on_select: (user_type: 'service_provider' | 'talent' | 'client') => void;',
  selected_type: string | null;,
export /**
 * UserTypeSelection - Function description
id: 'serviceProvider,
  name: 'Service Provider
      description: 'I want to offer services on the platform,
  icon: Briefcase;
    }
import { useState } from 'react';
import { Briefcase, Star, User } from 'lucide-react';
import { Button } from '@/components/ui/ button';
interface UserTypeOption {
  // TODO: Implement
  id: 'service_provider' | 'talent' | 'client';',
  name: string;
  description: string;,
  icon: React.ElementType;
interface UserTypeSelectionProps {
  // TODO: Implement
  on_select: (user_type: 'service_provider' | 'talent' | 'client') => void;',
  selected_type: string | null;
export /**
 * UserTypeSelection - Function description;
pr-12325
 */
function UserTypeSelection() {
  const user_types: UserTypeOption[] = [;,
    {
      id: 'service_provider','
      name: 'Service Provider','
      description: 'I want to offer services on the platform','
      icon: Briefcase,
    },
    {
      id: 'talent'',
      name: 'Talent'',
      description: 'I want to showcase my skills and find opportunities'',
      icon: Star
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/onboarding/UserTypeSelection.tsx
    }
<<<<<<< HEAD:src_backup/components/onboarding/UserTypeSelection.tsx
    {
import { Briefcase, Star, User } from 'lucide-react''
      id: 'talent,
  name: 'Talent
      description: 'I want to showcase my skills and find opportunities,
  icon: Star;
pr-12325



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

import { useState } from "react",
import { Briefcase, Star, User } from 'lucide-react'
<<<<<<< HEAD
import { Button } from "@/components/ui/button",
interface UserTypeOption {
  id: "serviceProvider" | "talent" | "client",
  name: string,
  description: string,
  icon: React.ElementType
}
=======
import { Button } from "@/components/ui/button";
<<<<<<< HEAD:src_backup/components/onboarding/UserTypeSelection.tsx
interface UserTypeOption {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

interface UserTypeSelectionProps {
  onSelect: (userType: "serviceProvider" | "talent" | "client") => void,
  selectedType: string | null
}

<<<<<<< HEAD:src/components/onboarding/UserTypeSelection.tsx
<<<<<<< HEAD
export function UserTypeSelection({ onSelect, selectedType }: UserTypeSelectionProps) {
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/onboarding/UserTypeSelection.tsx
  const userTypes: UserTypeOption[] = [
    {
      id: "serviceProvider",
      name: "Service Provider",
=======
    {}
'
import { Briefcase, Star, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
interface UserTypeOption {}
  const userTypes: UserTypeOption[] = []
    {"
      id: "serviceProvider","
      name: "Service Provider","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/onboarding/UserTypeSelection.tsx
      description: "I want to offer services on the platform",
      icon: Briefcase;
    },
    {"
      id: "talent","
      name: "Talent","
      description: "I want to showcase my skills and find opportunities",
      icon: Star;
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/onboarding/UserTypeSelection.tsx
    },
<<<<<<< HEAD:src_backup/components/onboarding/UserTypeSelection.tsx
    {
<<<<<<< HEAD:src_backup/components/onboarding/UserTypeSelection.tsx
<<<<<<< HEAD:src/components/onboarding/UserTypeSelection.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/onboarding/UserTypeSelection.tsx
      id: "client",
      name: "Client",
      description: "I want to discover and hire talent or services",
      icon: User
    }
  ],
<<<<<<< HEAD:src_backup/components/onboarding/UserTypeSelection.tsx
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/onboarding/UserTypeSelection.tsx

=======
import { Briefcase, Star, User } from 'lucide-react
import { Button } from "@/components/ui/button";"
  // TODO: Implement
}]
  const userTypes: UserTypeOption[] = [
    {"
      id: "serviceProvider",""
      name: "Service Provider",""
      description: "I want to offer services on the platform","
      id: "talent",""
      name: "Talent",""
      description: "I want to showcase my skills and find opportunities","
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/onboarding/UserTypeSelection.tsx



<<<<<<< HEAD:src/components/onboarding/UserTypeSelection.tsx
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/onboarding/UserTypeSelection.tsx

  return (
<<<<<<< HEAD:src_backup/components/onboarding/UserTypeSelection.tsx
<<<<<<< HEAD
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white">Choose your role</h3>
        <p className="text-zion-slate-light mt-2">
          This helps us personalize your experience
        </p>
      </div>
=======

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/onboarding/UserTypeSelection.tsx
    <div className='space-y-6'>;
      <div className='text-center mb-6'>;
        <h3 className='text-2xl font-bold text-white'>Choose your role</h3>;
=======
    {}
  return (
'
    <div className='space-y-6'>;'
      <div className='text-center mb-6'>;'
        <h3 className='text-2xl font-bold text-white'>Choose your role</h3>;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/onboarding/UserTypeSelection.tsx
        <p className='text-zion-slate-light mt-2'>;
          This helps us personalize your experience;
        </p>;
      </div>;
<<<<<<< HEAD:src_backup/components/onboarding/UserTypeSelection.tsx
'
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/onboarding/UserTypeSelection.tsx
      <div className='grid gap-4 md:grid-cols-3'>;
        {userTypes && userTypes.map(type => {;
          const Icon = type && type.icon;
          const isSelected = selectedType === type && type.id;
<<<<<<< HEAD:src_backup/components/onboarding/UserTypeSelection.tsx

<<<<<<< HEAD:src_backup/components/onboarding/UserTypeSelection.tsx
              onClick={() => onSelect(type && type.id)}
=======

              onClick={() => onSelect(type && type.id)}'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/onboarding/UserTypeSelection.tsx
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
=======
              onClick={() => onSelect(type && type.id)}
              variant='outline'              className={`h-auto flex flex-col items-center justify-center p-6 space-y-3 border ${;`
                isSelected;
                  ? 'border-zion-purple bg-zion-purple/10 text-zion-purple';
                  : 'border-zion-blue-light hover:border-zion-cyan/50 text-white';
              }`}`
            >;
              <div
                className={`p-3 rounded-full ${isSelected ? 'bg-zion-purple' : 'bg-zion-blue'}`}>;`
                <Icon
                  className={`h-6 w-6 ${isSelected ? 'text-white' : 'text-zion-slate-light'}`}`
      id: 'client','
      name: 'Client','
      description: 'I want to discover and hire talent or services','
                  className={`h-6 w-6 ${isSelected ? 'text-white' : 'text-zion-slate-light'}`}


  return (
"
    <div className='space-y-6'>;
</div>
      <div className='text-center mb-6'>;
        <h3 className='text-2xl font-bold text-white'>Choose your role</h3>;
        <p className='text-zion-slate-light mt-2'>;
</p>
        </p>;
      </div>;
      <div className='grid gap-4 md:grid-cols-3'>;
              <div;
                className={`p-3 rounded-full ${isSelected ? 'bg-zion-purple' : 'bg-zion-blue'}`}>;
                <Icon;`;
                  className={`h-6 w-6 ${isSelected ? 'text-white' : 'text-zion-slate-light'}`}
pr-12325
      id: 'client',
      name: 'Client',
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/onboarding/UserTypeSelection.tsx
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
<<<<<<< HEAD:src_backup/components/onboarding/UserTypeSelection.tsx
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
=======
              on_click={() => on_select (type.id)}
              variant='outline'              className={`h - auto flex flex - col items - center justify - center p - 6 space - y-3 border ${`
                is_selected;
                  ? 'border - zion - purple bg - zion - purple / 10 text - zion - purple';
                  : 'border - zion - blue - light hover:border - zion - cyan / 50 text - white';
              }`}`
            >;
              <div;
                className={`p - 3 rounded - full ${is_selected ? 'bg - zion - purple' : 'bg - zion - blue'}`}`
              >;
                <Icon;
                  className={`h - 6 w - 6 ${is_selected ? 'text - white' : 'text - zion - slate - light'}`}`
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/onboarding/UserTypeSelection.tsx
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


<<<<<<< HEAD:src_backup/components/onboarding/UserTypeSelection.tsx
<<<<<<< HEAD:src_backup/components/onboarding/UserTypeSelection.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
      "
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/onboarding/UserTypeSelection.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/onboarding/UserTypeSelection.tsx
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
<<<<<<< HEAD:src_backup/components/onboarding/UserTypeSelection.tsx
<<<<<<< HEAD:src_backup/components/onboarding/UserTypeSelection.tsx
              onClick={() => onSelect(type.id)}
<<<<<<< HEAD:src/components/onboarding/UserTypeSelection.tsx
<<<<<<< HEAD
              variant="outline"
              className={`h-auto flex flex-col items-center justify-center p-6 space-y-3 border ${
                isSelected 
                  ? "border-zion-purple bg-zion-purple/10 text-zion-purple" 
=======
              onClick={() => onSelect(type.id)}"
              variant="outline"`
              className={`h-auto flex flex-col items-center justify-center p-6 space-y-3 border ${}
                isSelected "
                  ? "border-zion-purple bg-zion-purple/10 text-zion-purple" "
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/onboarding/UserTypeSelection.tsx
                  : "border-zion-blue-light hover:border-zion-cyan/50 text-white"
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/onboarding/UserTypeSelection.tsx

<<<<<<< HEAD
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/onboarding/UserTypeSelection.tsx

<<<<<<< HEAD:src_backup/components/onboarding/UserTypeSelection.tsx

              variant='outline'              className={`h-auto flex flex-col items-center justify-center p-6 space-y-3 border ${
                isSelected
                  ? 'border-zion-purple bg-zion-purple/10 text-zion-purple'
                  : 'border-zion-blue-light hover:border-zion-cyan/50 text-white'
<<<<<<< HEAD:src/components/onboarding/UserTypeSelection.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/onboarding/UserTypeSelection.tsx
=======
`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/onboarding/UserTypeSelection.tsx
              }`}
            >"`
              <div className={`p-3 rounded-full ${isSelected ? "bg-zion-purple" : "bg-zion-blue"}`}>"`
                <Icon className={`h-6 w-6 ${isSelected ? "text-white" : "text-zion-slate-light"}`} />
              </div>
<<<<<<< HEAD:src_backup/components/onboarding/UserTypeSelection.tsx
<<<<<<< HEAD
=======

<<<<<<< HEAD:src_backup/components/onboarding/UserTypeSelection.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/onboarding/UserTypeSelection.tsx
              <div className="text-center">
                <h4 className="font-medium">{type.name}</h4>
                <p className="text-sm text-zion-slate-light mt-1">
import { useState } from "react",;
import { Briefcase, Star, User } from 'lucide-react';
=======
"
              <div className="text-center">"
                <h4 className="font-medium">{type.name}</h4>"
                <p className="text-sm text-zion-slate-light mt-1">"
import { useState } from "react",;'
import { Briefcase, Star, User } from 'lucide-react';"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/onboarding/UserTypeSelection.tsx
import { Button } from "@/components/ui/button",;
interface UserTypeOption {;"
  id: "serviceProvider" | "talent" | "client",;
  name: string,;
  description: string,;
  icon: React.ElementType;
}
<<<<<<< HEAD:src/components/onboarding/UserTypeSelection.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/onboarding/UserTypeSelection.tsx
;
interface UserTypeSelectionProps {;"
  onSelect: (userType: "serviceProvider" | "talent" | "client") => void,;
  selectedType: string | null;
}
;
<<<<<<< HEAD:src_backup/components/onboarding/UserTypeSelection.tsx
export function UserTypeSelection() { return null; }
=======
export function UserTypeSelection({ onSelect, selectedType }:,  UserTypeSelectionProps) {;,
  const userTypes: UserTypeOption[] = [;,
export function UserTypeSelection({ onSelect, selectedType }: UserTypeSelectionProps) {;
  const userTypes: UserTypeOption[] = [;
    {;
      id: "serviceProvider",;
      name: "Service Provider",;
      description: "I want to offer services on the platform",;
      icon: Briefcase;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/onboarding/UserTypeSelection.tsx
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
<<<<<<< HEAD:src_backup/components/onboarding/UserTypeSelection.tsx
              onClick={() => onSelect(type.id)}"
              variant="outline";`
=======
              onClick={() => onSelect(type.id)}
              variant="outline";
              className={`h-auto flex flex-col items-center justify-center p-6 space-y-3 border ${;`
                isSelected;
                  ? "border-zion-purple bg-zion-purple/10 text-zion-purple";
                  : "border-zion-blue-light hover:border-zion-cyan/50 text-white";
              }`}`
            >;
              <div className={`p-3 rounded-full ${isSelected ? "bg-zion-purple" : "bg-zion-blue"}`}>;`
                <Icon className={`h-6 w-6 ${isSelected ? "text-white" : "text-zion-slate-light"}`} />;`
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/onboarding/UserTypeSelection.tsx
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
<<<<<<< HEAD:src_backup/components/onboarding/UserTypeSelection.tsx
<<<<<<< HEAD:src/components/onboarding/UserTypeSelection.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        })}
<<<<<<< HEAD
      </div>;
    </div>;
  );
=======

        })}
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/onboarding/UserTypeSelection.tsx

<<<<<<< HEAD


      </div>;
    </div>);
}

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
        })}
      </div>;
    </div>;
  );
      </div>;
    </div>);
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/onboarding/UserTypeSelection.tsx
}
<<<<<<< HEAD:src_backup/components/onboarding/UserTypeSelection.tsx
;
<<<<<<< HEAD:src_backup/components/onboarding/UserTypeSelection.tsx
<<<<<<< HEAD:src/components/onboarding/UserTypeSelection.tsx
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
      </div>
    </div>
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

=======
}}}}}}})))]
}
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/onboarding/UserTypeSelection.tsx
      </div>
    </div>
  );
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD:src_backup/components/onboarding/UserTypeSelection.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/onboarding/UserTypeSelection.tsx
=======
;'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/onboarding/UserTypeSelection.tsx
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/onboarding/UserTypeSelection.tsx
