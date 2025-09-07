<<<<<<< HEAD

            <Button;
              key={type.id}          return (
=======
import {useState} from "react";
import {Briefcase, Star, User} from "lucide-react";
import {Button} from "@/components/ui/button";

import { useState } from "react",
import { Briefcase, Star, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Briefcase, Star, User } from "lucide-react",

<<<<<<< HEAD
=======
<<<<<<< HEAD
import {useState} from "react";
import {Briefcase, Star, User} from "lucide-react";
import {Button} from "@/components/ui/button";
import { useState } from "react",
import { Briefcase, Star, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Briefcase, Star, User } from "lucide-react",
import { Button } from "@/components/ui/button",
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface UserTypeOption {

interface UserTypeOption {}
"
  id: "serviceProvider" | "talent" | "client";
  name: string;
  description: string;
  icon: React.ElementType;
}

interface UserTypeSelectionProps {

  onSelect: (userType: "serviceProvider" | "talent" | "client") => void

  selectedType: string | null
}
export function UserTypeSelection({ onSelect, selectedType }: UserTypeSelectionProps) {
  const userTypes: UserTypeOption[] = [
    {

      id: "serviceProvider",
      name: "Service Provider",
      description: "I want to offer services on the platform",
      icon: Briefcase;
    };
      icon: Briefcase
    }
    },

      id: "serviceProvider",
      name: "Service Provider",
      description: "I want to offer services on the platform",

<<<<<<< HEAD
    {

interface UserTypeOption {
  // TODO: Implement
}"
  id: "serviceProvider" | "talent" | "client"",
  name: string;
  description: string;,
  icon: React.ElementType;
}
interface UserTypeSelectionProps {
  // TODO: Implement
}"
  onSelect: (userType: "serviceProvider" | "talent" | "client") => void;",
  selectedType: string | null;
}
export function UserTypeSelection({ onSelect, selectedType }: UserTypeSelectionProps) {
  const userTypes: UserTypeOption[] = [
    {
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    {

      id: "talent"
      name: "Talent"
      description: "I want to showcase my skills and find opportunities"

      icon: Star

<<<<<<< HEAD
    },


    }
    },
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

"
      id: "serviceProvider",""
      name: "Service Provider",""
      description: "I want to offer services on the platform","
      icon: Briefcase;
    };
      icon: Briefcase;
    }
    },

      icon: User
"
      id: "serviceProvider",""
      name: "Service Provider",""
      description: "I want to offer services on the platform","
    {
"
      id: "talent"","
  name: "Talent"""
      description: "I want to showcase my skills and find opportunities"",
  icon: Star;
    },

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    {

<<<<<<< HEAD
=======
      id: "client"
      name: "Client"
      description: "I want to discover and hire talent or services"

      icon: User
<<<<<<< HEAD
    }
  ];
  ],

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
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import {useState} from "react";
import {Briefcase, Star, User} from "lucide-react";
import {Button} from "@/components/ui/button";
interface UserTypeOption {;
  id: "serviceProvider" | "talent" | "client",;

  name: string,;
  description: string,;
  icon: React && React.ElementType;
}

  selectedType: string | null;
}
export function UserTypeSelection({ onSelect, selectedType }: UserTypeSelectionProps) {}
  const userTypes: UserTypeOption[] = []
    {}
"
      id: "serviceProvider","
      name: "Service Provider","
      description: "I want to offer services on the platform",;
      icon: Briefcase;
    };
      icon: Briefcase;
    }
    },

"
      id: "serviceProvider","
      name: "Service Provider","
      description: "I want to offer services on the platform",

    {}
"
      id: "talent""
      name: "Talent""
      description: "I want to showcase my skills and find opportunities"

      icon: Star;
    {}
"
      id: "client""
      name: "Client""
      description: "I want to discover and hire talent or services"

      icon: User;

<<<<<<< HEAD
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
  ];

  selectedType: string | null;
}

export function UserTypeSelection(): any ({ onSelect, selectedType }: UserTypeSelectionProps) {;]
  const userTypes: UserTypeOption[] = [;
    {;"
      id: "serviceProvider",;""
      name: "Service Provider",;""
      description: "I want to offer services on the platform",;"
      icon: Briefcase;
    };
    {;"
      id: "talent",;""
      name: "Talent",;""
      description: "I want to showcase my skills and find opportunities",;"
      icon: Star;
    };
    {;"
      id: "client",;""
      name: "Client",;""
      description: "I want to discover and hire talent or services",;"
      icon: User;

    }]
  ];
}
  ];
  ],

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
  ];

=======
    }
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  ];
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    }

  ],

<<<<<<< HEAD
  return (

=======

  return (

    }
  ];
  return (
import { useState } from './react';
import { Briefcase, Star, User } from './lucide-react';
import { Button } from '@/components / ui / button';
interface UserTypeOption {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  id: "service_provider" | "talent" | "client",

  name: string,
  description: string,
  icon: React.ElementType;
}

      description: "I want to discover and hire talent or services",

      icon: User;
    }]
  ];
;

          const Icon = type.icon;
          const is_selected = selected_type === type.id,

<<<<<<< HEAD
        </p>;
      </div>;"
      <div className="grid gap - 4 md: grid - cols - 3">;"
</div>

          const Icon = type.icon;
          const is_selected = selected_type === type.id,

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          const Icon = type.icon,
          const isSelected = selectedType === type.id,

          return (
>>>>>>> origin/chore/fix-lint-and-merge
            <Button;
              key={type.id}

<<<<<<< HEAD
          const Icon = type.icon;
          const is_selected = selected_type === type.id,

          const Icon = type.icon,
          const isSelected = selectedType === type.id,

=======
<<<<<<< HEAD
          const Icon = type.icon;
          const isSelected = selectedType === type.id

          const Icon = type.icon,
          const isSelected = selectedType === type.id,
          
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

          return (

            <Button;
              key={type.id}

<<<<<<< HEAD
              </div>;
              <div className="text-center">;"
}      </div>;
    </div>;
  );
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              }`}
            >"`
              <div className={`p-3 rounded-full ${isSelected ? "bg-zion-purple" : "bg-zion-blue"}`}>"`

                <Icon className={`h-6 w-6 ${isSelected ? "text-white" : "text-zion-slate-light"}`} />
              </div>"
              <div className="text-center">"
                <h4 className="font-medium">{type.name}</h4>"
                <p className="text-sm text-zion-slate-light mt-1">
>>>>>>> origin/chore/fix-lint-and-merge

<<<<<<< HEAD
                  {type.description}

=======
<<<<<<< HEAD
                  {type.description}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

import { useState } from "react",;
import { Briefcase, Star, User } from "lucide-react",;

import { Button } from "@/components/ui/button",;
interface UserTypeOption {;"

=======
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { useState } from "react",;
import { Briefcase, Star, User } from "lucide-react",;
import { Button } from "@/components/ui/button",;
interface UserTypeOption {;

  id: "serviceProvider" | "talent" | "client",;
  name: string,;
  description: string,;
  icon: React.ElementType;

  onSelect: (userType: "serviceProvider" | "talent" | "client") => void,;
  selectedType: string | null;
}
<<<<<<< HEAD
=======
;

      description: "I want to discover and hire talent or services",;
      icon: User;
    }
  ],;
  return (;
<<<<<<< HEAD
          return (
            <Button;
              key={type.id}

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
<<<<<<< HEAD

=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    <div className="space-y-6">;
      <div className="text-center mb-6">;
        <h3 className="text-2xl font-bold text-white">Choose your role</h3>;

        <p className="text-zion-slate-light mt-2">;
          This helps us personalize your experience;
        </p>;
      </div>;
<<<<<<< HEAD
      ;
      <div className="grid gap-4 md:grid-cols-3">;
        {userTypes.map((type) => {;
          const Icon = type.icon,;
          const isSelected = selectedType === type.id,;
          ;
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

            <Button;
              key={type && type.id}
              onClick={() => onSelect(type && type.id)}"
              variant="outline";`
              className={`h-auto flex flex-col items-center justify-center p-6 space-y-3 border ${;
                isSelected ;"
                  ? "border-zion-purple bg-zion-purple/10 text-zion-purple" ;
"
                  : "border-zion-blue-light hover:border-zion-cyan/50 text-white";
<<<<<<< HEAD

"

                  : "border-zion-blue-light hover:border-zion-cyan/50 text-white";
    }
  ];
  return (
          return (
            <Button;
              key={type.id}

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              }`}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            >;
              <div className={`p-3 rounded-full ${isSelected ? "bg-zion-purple" : "bg-zion-blue"}`}>;

                <Icon className={`h-6 w-6 ${isSelected ? "text-white" : "text-zion-slate-light"}`} />;
              </div>;"
              <div className="text-center">;
<<<<<<< HEAD
=======
                <h4 className="font-medium">{type && type.name}</h4>;
                <p className="text-sm text-zion-slate-light mt-1">;
                  {type && type.description}
                </p>;
              </div>;
            </Button>;
          );
        })}

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      </div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    </div>;
  );

}
<<<<<<< HEAD

}
>>>>>>> origin/chore/fix-lint-and-merge
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
<<<<<<< HEAD
                  :"border-zion-blue-light hover:border-zion-cyan/50 text-white";
              }`}
            >;
              <div className={`p-3 rounded-full ${isSelected ? "bg-zion-purple" :"bg-zion-blue"}`}>;
                <Icon className={`h-6 w-6 ${isSelected ? "text-white" :"text-zion-slate-light"}`} />;
              </div>;
              <div className="text-center">;
                <h4 className="font-medium">{type.name}</h4>;
                <p className="text-sm text-zion-slate-light mt-1">;
                  {type.description}
                </p>;
              </div>;
            </Button>;
          );
        })}
      </div>;
    </div>;
  );
}
;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
