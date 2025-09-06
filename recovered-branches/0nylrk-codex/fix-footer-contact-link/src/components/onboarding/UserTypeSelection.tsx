<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/onboarding/UserTypeSelection.tsx


<<<<<<< HEAD
import { useState } from "react",

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

import {useState} from "react";
import {Briefcase, Star, User} from "lucide-react";
import {Button} from "@/components/ui/button";
import { useState } from "react",
import { Briefcase, Star, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Briefcase, Star, User } from "lucide-react",
import { Button } from "@/components/ui/button",
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
      icon: Briefcase

=======

      id: "serviceProvider",
      name: "Service Provider",
      description: "I want to offer services on the platform",


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD

      id: "serviceProvider"
      name: "Service Provider"
      description: "I want to offer services on the platform"

      id: "serviceProvider",
      name: "Service Provider",
      description: "I want to offer services on the platform",
      icon: Briefcase;
    };
      icon: Briefcase
    }
    },
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    {

      id: "talent"
      name: "Talent"
      description: "I want to showcase my skills and find opportunities"

      icon: Star
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

    },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    }
    },
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    {

      id: "client"
      name: "Client"
      description: "I want to discover and hire talent or services"

      icon: User
<<<<<<< HEAD

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/onboarding/UserTypeSelection.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/onboarding/UserTypeSelection.tsx

    }
<<<<<<< HEAD

=======
    }
  ];
  ],

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

=======
  ];
=======
    }

  ],


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (

========
    }
  ];
  return (
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/onboarding/UserTypeSelection.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/onboarding/UserTypeSelection.tsx

=======

          const Icon = type.icon,
          const isSelected = selectedType === type.id,
          

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          return (
            <Button;
              key={type.id}

=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          const Icon = type.icon;
          const isSelected = selectedType === type.id

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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

========
          return (
            <Button;
              key={type.id}
=======

import { useState } from "react",;
import { Briefcase, Star, User } from "lucide-react",;
import { Button } from "@/components/ui/button",;
;
interface UserTypeOption {;
  id:"serviceProvider" | "talent" | "client",;
  name:string,;
  description:string,;
  icon:React.ElementType;
}
;
interface UserTypeSelectionProps {;
  onSelect:(userType:"serviceProvider" | "talent" | "client") => void,;
  selectedType:string | null;
}
;
export function UserTypeSelection({ onSelect, selectedType } UserTypeSelectionProps) {;
  const userTypes:UserTypeOption[] = [;
    {;
      id:"serviceProvider",;
      name:"Service Provider",;
      description:"I want to offer services on the platform",;
      icon:Briefcase;
    },;
    {;
      id:"talent",;
      name:"Talent",;
      description:"I want to showcase my skills and find opportunities",;
      icon:Star;
    },;
    {;
      id:"client",;
      name:"Client",;
      description:"I want to discover and hire talent or services",;
      icon:User;
    }
  ],;
;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/onboarding/UserTypeSelection.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <div className="space-y-6">;
      <div className="text-center mb-6">;
        <h3 className="text-2xl font-bold text-white">Choose your role</h3>;
        <p className="text-zion-slate-light mt-2">;
          This helps us personalize your experience;
        </p>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="grid gap-4 md: grid-cols-3">;
        {userTypes && userTypes.map((type) => {;
          const Icon = type && type.icon;
          const isSelected = selectedType === type && type.id,;
          return (
            <Button
              key={type && type.id}
              onClick={() => onSelect(type && type.id)}
=======
      ;
      <div className="grid gap-4 md:grid-cols-3">;
        {userTypes.map((type) => {;
          const Icon = type.icon,;
          const isSelected = selectedType === type.id,;
          ;
=======
      <div className="grid gap-4 md: grid-cols-3">;
        {userTypes.map((type) => {;
          const Icon = type.icon;
          const isSelected = selectedType === type.id;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          return (;
            <Button;
              key={type.id}
              onClick={() => onSelect(type.id)}
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              variant="outline";
              className={`h-auto flex flex-col items-center justify-center p-6 space-y-3 border ${;
                isSelected ;
                  ? "border-zion-purple bg-zion-purple/10 text-zion-purple" ;
<<<<<<< HEAD
=======
              variant="outline";
              className={`h-auto flex flex-col items-center justify-center p-6 space-y-3 border ${;
                isSelected;
                  ? "border-zion-purple bg-zion-purple/10 text-zion-purple";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  : "border-zion-blue-light hover:border-zion-cyan/50 text-white";
              }`}
            >;
              <div className={`p-3 rounded-full ${isSelected ? "bg-zion-purple" : "bg-zion-blue"}`}>;
                <Icon className={`h-6 w-6 ${isSelected ? "text-white" : "text-zion-slate-light"}`} />;
              </div>;
              <div className="text-center">;
<<<<<<< HEAD
                <h4 className="font-medium">{type && type.name}</h4>;
                <p className="text-sm text-zion-slate-light mt-1">;
                  {type && type.description}
                </p>;
              </div>;
            </Button>;
          );
        })}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/onboarding/UserTypeSelection.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/onboarding/UserTypeSelection.tsx
      </div>;
    </div>;
  );

}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/onboarding/UserTypeSelection.tsx
<<<<<<< HEAD
;

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/onboarding/UserTypeSelection.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/onboarding/UserTypeSelection.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
                  :"border-zion-blue-light hover:border-zion-cyan/50 text-white";
              }`}
            >;
              <div className={`p-3 rounded-full ${isSelected ? "bg-zion-purple" :"bg-zion-blue"}`}>;
                <Icon className={`h-6 w-6 ${isSelected ? "text-white" :"text-zion-slate-light"}`} />;
              </div>;
              <div className="text-center">;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <h4 className="font-medium">{type.name}</h4>;
                <p className="text-sm text-zion-slate-light mt-1">;
                  {type.description}
                </p>;
              </div>;
            </Button>;
<<<<<<< HEAD
          ),;
        })}
      </div>;
    </div>;
  ),;}
 name: string;
description: string;
icon: React.ElementType;
}export function UserTypeSelection ({
  onSelect, selectedType 
}: UserTypeSelectionProps) {
  const userTypes: UserTypeOption[] = [ {
  This helps us personalize your experience </p> </div> {
  userTypes.map ( (type) => {
  const Icon = type.icon;
const isSelected = selectedType === type.id;
type.id 
}</p> </div> </Button>) 
}) 
}</div> </div>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/onboarding/UserTypeSelection.tsx
=======
          );
        })}
      </div>;
    </div>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
