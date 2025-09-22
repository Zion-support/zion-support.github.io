<<<<<<< HEAD

<<<<<<< HEAD
import {useState} from "react";
import {Briefcase, Star, User} from "lucide-react";
import {Button} from "@/components/ui/button";
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import {useState} from "react";
import {Briefcase, Star, User} from "lucide-react";
import {Button} from "@/components/ui/button";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useState } from "react",
import { Briefcase, Star, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Briefcase, Star, User } from "lucide-react",
<<<<<<< HEAD
import { Button } from "@/components/ui/button",
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface UserTypeOption {
=======
import { useState } from "react",";
import { Briefcase, Star, User } from "lucide-react";"
import { Button } from "@/components/ui/button";"
import { Briefcase, Star, User } from "lucide-react","
import { Button } from "@/components/ui/button",
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

      id: "serviceProvider",
      name: "Service Provider",
      description: "I want to offer services on the platform",

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    {
=======
import { Button } from "@/components/ui/button",    {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import { Button } from "@/components/ui/button",    {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

id: "talent"
      name: "Talent"
      description: "I want to showcase my skills and find opportunities"

<<<<<<< HEAD
<<<<<<< HEAD
      icon: Star
<<<<<<< HEAD

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

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    {
id: "client"
      name: "Client"
      description: "I want to discover and hire talent or services"

      icon: User
<<<<<<< HEAD
<<<<<<< HEAD

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
}
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
interface UserTypeSelectionProps {;"
  onSelect: (userType: "serviceProvider" | "talent" | "client") => void,;"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    }

  ],

  return (

import { useState } from './react';'
import { Briefcase, Star, User } from './lucide-react';'
import { Button } from '@/components / ui / button';
interface UserTypeOption {"
  id: "service_provider" | "talent" | "client",
  name: string,
  description: string,
  icon: React.ElementType;
}
interface UserTypeSelectionProps {"
  on_select: (user_type: "service_provider" | "talent" | "client") => void,
  selected_type: string | null;
}
export /**;
 * UserTypeSelection - Function description;
 */
function UserTypeSelection() {}
  const user_types: UserTypeOption[] = [;
    {"
      id: "service_provider","
      name: "Service Provider","
      description: "I want to offer services on the platform",
      icon: Briefcase;
    }
    {"
      id: "talent","
      name: "Talent","
      description: "I want to showcase my skills and find opportunities",
      icon: Star;
    }
    {"
      id: "client","
      name: "Client","
      description: "I want to discover and hire talent or services",
=======
    {"
      id: "client",""
      name: "Client",""
      description: "I want to discover and hire talent or services","
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      icon: User;
    }]
  ];
;
return ("
    <div className="space - y-6">;"
      <div className="text - center mb - 6">;"
        <h3 className="text - 2xl font - bold text - white">Choose your role</h3>;"
        <p className="text - zion - slate - light mt - 2">;
          This helps us personalize your experience;
        </p>;
      </div>;"
      <div className="grid gap - 4 md: grid - cols - 3">;
<<<<<<< HEAD
        {user_types.map ((type) => {
          const Icon = type.icon;
          const is_selected = selected_type === type.id,

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
          const Icon = type.icon;
          const is_selected = selected_type === type.id,

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
      icon: Star          const Icon = type.icon;
          const is_selected = selected_type === type.id,

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  return (
    <div className="space - y-6">;
      <div className="text - center mb - 6">;
        <h3 className="text - 2xl font - bold text - white">Choose your role</h3>;
        <p className="text - zion - slate - light mt - 2">;
          This helps us personalize your experience;
=======
  return ("
    <div className="space - y-6">;"
</div>"
      <div className="text - center mb - 6">;"
</div>"
        <h3 className="text - 2xl font - bold text - white">Choose your role</h3>;""
        <p className="text - zion - slate - light mt - 2">;"
</p>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        </p>;
      </div>;"
      <div className="grid gap - 4 md: grid - cols - 3">;"
</div>

          const Icon = type.icon;
          const is_selected = selected_type === type.id,

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          const Icon = type.icon,
          const isSelected = selectedType === type.id,

          return (
            <Button;
              key={type.id}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          const Icon = type.icon;
          const is_selected = selected_type === type.id,

          const Icon = type.icon,
          const isSelected = selectedType === type.id,

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          return (
            <Button
              key={type.id}
              onClick={() => onSelect(type.id)}
              variant="outline"
              className={`h-auto flex flex-col items-center justify-center p-6 space-y-3 border ${
                isSelected
                  ? "border-zion-purple bg-zion-purple/10 text-zion-purple"
                  : "border-zion-blue-light hover:border-zion-cyan/50 text-white"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          return (
=======
=======          return (
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
          return (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <Button;
              key={type.id}

              }`}
            >"`
              <div className={`p-3 rounded-full ${isSelected ? "bg-zion-purple" : "bg-zion-blue"}`}>"`
=======
          return (
            <Button;
              key={type.id}
            <Button;

              key={type.id}
              }`}

            >
              <div className={`p-3 rounded-full ${isSelected ? "bg-zion-purple" : "bg-zion-blue"}`}>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                <Icon className={`h-6 w-6 ${isSelected ? "text-white" : "text-zion-slate-light"}`} />
              </div>"
              <div className="text-center">"
                <h4 className="font-medium">{type.name}</h4>"
                <p className="text-sm text-zion-slate-light mt-1">
<<<<<<< HEAD
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
}

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { useState } from "react",;
import { Briefcase, Star, User } from "lucide-react",;
=======
"
import { useState } from "react",;"
import { Briefcase, Star, User } from "lucide-react",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Button } from "@/components/ui/button",;
interface UserTypeOption {;"
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { useState } from "react",;
import { Briefcase, Star, User } from "lucide-react",;
import { Button } from "@/components/ui/button",;
interface UserTypeOption {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  id: "serviceProvider" | "talent" | "client",;
  name: string,;
  description: string,;
  icon: React.ElementType;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
}
;
<<<<<<< HEAD
  onSelect: (userType: "serviceProvider" | "talent" | "client") => void,;
  selectedType: string | null;
}
;
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
  return (;

<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    <div className="space-y-6">;
      <div className="text-center mb-6">;
        <h3 className="text-2xl font-bold text-white">Choose your role</h3>;
=======
"
    <div className="space-y-6">;"
      <div className="text-center mb-6">;"
        <h3 className="text-2xl font-bold text-white">Choose your role</h3>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <p className="text-zion-slate-light mt-2">;
          This helps us personalize your experience;
        </p>;
      </div>;

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
<<<<<<< HEAD
<<<<<<< HEAD
                  ? "border-zion-purple bg-zion-purple/10 text-zion-purple" ;
<<<<<<< HEAD
            <Button;
              key={type && type.id}
              onClick={() => onSelect(type && type.id)}"
              variant="outline";`
              className={`h-auto flex flex-col items-center justify-center p-6 space-y-3 border ${;
                isSelected ;"
                  ? "border-zion-purple bg-zion-purple/10 text-zion-purple" ;
"
                  : "border-zion-blue-light hover:border-zion-cyan/50 text-white";

"
                  : "border-zion-blue-light hover:border-zion-cyan/50 text-white";
    }
  ];
  return (
          return (
            <Button;
              key={type.id}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              }`}
<<<<<<< HEAD
=======
              }`}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
                  ? "border-zion-purple bg-zion-purple/10 text-zion-purple" ;              }`}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            >;
              <div className={`p-3 rounded-full ${isSelected ? "bg-zion-purple" : "bg-zion-blue"}`}>;
=======
`
              }`}
            >;"`
              <div className={`p-3 rounded-full ${isSelected ? "bg-zion-purple" : "bg-zion-blue"}`}>;"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                <Icon className={`h-6 w-6 ${isSelected ? "text-white" : "text-zion-slate-light"}`} />;
              </div>;"
              <div className="text-center">;
                <h4 className="font-medium">{type && type.name}</h4>;
                <p className="text-sm text-zion-slate-light mt-1">;
                  {type && type.description}
                </p>;
              </div>;
            </Button>;
          );
        })}

}      </div>;
=======

}      </div>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    </div>;
  );

}
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

              on_click={() => on_select (type.id)}"
              variant="outline";`
              className={`h - auto flex flex - col items - center justify - center p - 6 space - y-3 border ${}
                is_selected;"
                  ? "border - zion - purple bg - zion - purple / 10 text - zion - purple";"
                  : "border - zion - blue - light hover:border - zion - cyan / 50 text - white";`
              }`}
            >;"`
              <div className={`p - 3 rounded - full ${is_selected ? "bg - zion - purple" : "bg - zion - blue"}`}>;"`
                <Icon className={`h - 6 w - 6 ${is_selected ? "text - white" : "text - zion - slate - light"}`} />;
              </div>;"
              <div className="text - center">;"
                <h4 className="font - medium">{type.name}</h4>;"
                <p className="text - sm text - zion - slate - light mt - 1">;
                  {type.description}
                </p>;
              </div>;
            </Button>);
        })}
      </div>;
    </div>);
}

}

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  return ("
    <div className="space - y-6">;"
</div>"
      <div className="text - center mb - 6">;"
        <h3 className="text - 2xl font - bold text - white">Choose your role</h3>;""
        <p className="text - zion - slate - light mt - 2">;"
</p>
        </p>;
      </div>;"
      <div className="grid gap - 4 md: grid - cols - 3">;"
</div>
            <Button;
              key={type.id}

              }`}
            >
"`;
</Button>"
              <div className={`p-3 rounded-full ${isSelected ? "bg-zion-purple" : "bg-zion-blue"}`}>"
</div>"`;
                <Icon className={`h-6 w-6 ${isSelected ? "text-white" : "text-zion-slate-light"}`} />"

              <div className="text-center">"
                <h4 className="font-medium">{type.name}</h4>""
                <p className="text-sm text-zion-slate-light mt-1">"
</p>"
    <div className="space-y-6">;"
      <div className="text-center mb-6">;"
        <h3 className="text-2xl font-bold text-white">Choose your role</h3>;""
        <p className="text-zion-slate-light mt-2">;"
      <div className="grid gap-4 md: grid-cols-3">;"
              key={type && type.id})
              onClick={() => onSelect(type && type.id)}

              key={type.id}`;
            >;
              <div className={`p-3 rounded-full ${isSelected ? "bg-zion-purple" : "bg-zion-blue"}`}>;"
                <Icon className={`h-6 w-6 ${isSelected ? "text-white" : "text-zion-slate-light"}`} />;"

              <div className="text-center">;"
                <h4 className="font-medium">{type && type.name}</h4>;""
                <p className="text-sm text-zion-slate-light mt-1">;"
              </div>;
    </div>;"`;
              <div className={`p - 3 rounded - full ${is_selected ? "bg - zion - purple" : "bg - zion - blue"}`}>;"
                <Icon className={`h - 6 w - 6 ${is_selected ? "text - white" : "text - zion - slate - light"}`} />;"

              <div className="text - center">;"
                <h4 className="font - medium">{type.name}</h4>;""
                <p className="text - sm text - zion - slate - light mt - 1">;"
            );
    </div>);"`;
              <div className={`p-3 rounded-full ${isSelected ? "bg-zion-purple" :"bg-zion-blue"}`}>;"
                <Icon className={`h-6 w-6 ${isSelected ? "text-white" :"text-zion-slate-light"}`} />;"

                <h4 className="font-medium">{type.name}</h4>;""
pr-12325
                <p className="text-sm text-zion-slate-light mt-1">;"
</p>
                </p>;
              </div>;
            </Button>;
      </div>;
    </div>;"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
