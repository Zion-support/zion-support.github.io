<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/filters/SkillsFilter.tsx

<<<<<<< HEAD

import { ChevronDown, ChevronUp } from "lucide-react",
import { Button } from "@/components/ui/button",
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/filters/SkillsFilter.tsx
=======

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import {ChevronDown, ChevronUp} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Checkbox} from "@/components/ui/checkbox";
import {SkillsFilterProps} from "@/types/filters";
<<<<<<< HEAD
=======
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { ChevronDown, ChevronUp } from "lucide-react",
import { Button } from "@/components/ui/button",
import { Checkbox } from "@/components/ui/checkbox";
import { SkillsFilterProps } from "@/types/filters";
import { Checkbox } from "@/components/ui/checkbox",
import { SkillsFilterProps } from "@/types/filters",
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
// Common skills in AI and tech

const POPULAR_SKILLS = [
  "Machine Learning",
  "Deep Learning",
  "Python",
  "TensorFlow",
  "PyTorch",
  "Computer Vision",
  "NLP",
  "Data Science",
  "AWS",
  "Docker",
  "Kubernetes",
  "React",
  "Node.js",
  "TypeScript",
  "DevOps",
  "Security"
],

export function SkillsFilter({ selectedSkills, toggleSkill, expanded, toggleSection, isMobileFilterOpen }: SkillsFilterProps) {
  return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">
      <button
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium"
      >
        <span>Skills</span>
        {expanded ? (
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />
        ) : (
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />
        )}
      </button>
      {expanded && (
        <div className="mt-4 space-y-2">
          {POPULAR_SKILLS.map(skill => (
            <div key={skill} className="flex items-center">
              <Checkbox
                id={`skill-${skill}`}
                checked={selectedSkills.includes(skill)}
                onCheckedChange={() => toggleSkill(skill)}
                className="border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple"
              />
              <label
                htmlFor={`skill-${skill}`}
                className="ml-2 text-sm text-zion-slate-light cursor-pointer"
              >
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { ChevronDown, ChevronUp } from "lucide-react",;
import { Button } from "@/components/ui/button",;
import { Checkbox } from "@/components/ui/checkbox",;
import { SkillsFilterProps } from "@/types/filters",;
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
// Common skills in AI and tech;
const POPULAR_SKILLS = [;
import { ChevronDown, ChevronUp } from './lucide-react';
import { Button } from '@/components / ui / button';
import { Checkbox } from '@/components / ui / checkbox';
import { SkillsFilterProps } from '@/types / filters';
// Common skills in AI and tech;
const POPULAR_SKILLS = [;
  "Machine Learning";
  "Deep Learning";
  "Python";
  "TensorFlow";
  "PyTorch";
  "Computer Vision";
  "NLP";
  "Data Science";
  "AWS";
  "Docker";
  "Kubernetes";
  "React";
  "Node && Node.js";
  "TypeScript";
  "DevOps";
  "Security";
];
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/filters/SkillsFilter.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/filters/SkillsFilter.tsx
      </button>;
      {expanded && (;
        <div className="mt-4 space-y-2">;
          {POPULAR_SKILLS && POPULAR_SKILLS.map(skill => (;
            <div key={skill} className="flex items-center">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/filters/SkillsFilter.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/filters/SkillsFilter.tsx
              <Checkbox
=======

import { ChevronDown, ChevronUp } from "lucide-react",;
import { Button } from "@/components/ui/button",;
import { Checkbox } from "@/components/ui/checkbox",;
import { SkillsFilterProps } from "@/types/filters",;
;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
// Common skills in AI and tech;
const POPULAR_SKILLS = [;
  "Machine Learning",;
  "Deep Learning",;
  "Python",;
  "TensorFlow",;
  "PyTorch",;
  "Computer Vision",;
  "NLP",;
  "Data Science",;
  "AWS",;
  "Docker",;
  "Kubernetes",;
  "React",;
  "Node.js",;
  "TypeScript",;
  "DevOps",;
  "Security";
<<<<<<< HEAD
],;
;
export function SkillsFilter({ selectedSkills, toggleSkill, expanded, toggleSection, isMobileFilterOpen } SkillsFilterProps) {;
=======
];
export function SkillsFilter({ selectedSkills, toggleSkill, expanded, toggleSection, isMobileFilterOpen }: SkillsFilterProps) {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (;
    <div className="mb-6 border-b border-zion-blue-light pb-6">;
      <button;
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium";
      >;
        <span>Skills</span>;
        {expanded ? (;
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />;
<<<<<<< HEAD
        ) :(;
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />;
        )}
      </button>;
      ;
=======
        ) : (;
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />;
        )}
      </button>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {expanded && (;
        <div className="mt-4 space-y-2">;
          {POPULAR_SKILLS.map(skill => (;
            <div key={skill} className="flex items-center">;
              <Checkbox;
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                id={`skill-${skill}`}
                checked={selectedSkills && selectedSkills.includes(skill)}
                onCheckedChange={() => toggleSkill(skill)}
                className="border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple";
              />;
<<<<<<< HEAD
              <label
                htmlFor={`skill-${skill}`}

                className="ml-2 text-sm text-zion-slate-light cursor-pointer"
              >


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                {skill}
              </label>;
            </div>;
          ))}
        </div>;
      )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/filters/SkillsFilter.tsx
<<<<<<< HEAD
    </div>
  )

=======

    </div>;
  );
}

=======
========
    </div>;
  );
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/filters/SkillsFilter.tsx
;
export /**
 * SkillsFilter - Function description
 */
function SkillsFilter() {
  return (
    <div className="mb - 6 border - b border - zion - blue - light pb - 6">;
      <button;
        on_click={toggle_section}
        className="flex w - full items - center justify - between text - white font - medium";
      >;
        <span > Skills</span>;
        {expanded ? (
          <ChevronUp className="h - 4 w - 4 text - zion - slate - light" />) : (
          <ChevronDown className="h - 4 w - 4 text - zion - slate - light" />)}
      </button>;
      {expanded && (
        <div className="mt - 4 space - y-2">;
          {POPULAR_SKILLS.map (skill => (
            <div key={skill} className="flex items - center">;
              <Checkbox;
                id={`skill-${skill}`}
                checked={selected_skills.includes (skill)}
                onCheckedChange={() => toggle_skill (skill)}
                className="border - zion - slate - light data-[state = checked]:bg - zion - purple data-[state = checked]:border - zion - purple";
              />;
              <label;
                html_for={`skill-${skill}`}
                className="ml - 2 text - sm text - zion - slate - light cursor - pointer";
              >;
                {skill}
              </label>;
            </div>))}
        </div>)}
    </div>);
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/filters/SkillsFilter.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

};
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
              <label;
                htmlFor={`skill-${skill}`}
                className="ml-2 text-sm text-zion-slate-light cursor-pointer";
              >;
                {skill}
              </label>;
            </div>;          ))}
        </div>;
      )}
    </div>;
  ),;}
 //Common skills in AI and tech const POPULAR SKILLS = [ "Machine Learning";
"Deep Learning";
"Python";
"TensorFlow";
"PyTorch";
"Computer Vision";
"NLP";
"Data Science";
"AWS";
"Docker";
"Kubernetes";
"React";
"Node.js";
"TypeScript";
"DevOps";
"Security" ];
toggleSection 
}className="flex w-full items-center justify-between text-white font-medium" > <span>Skills</span>) : (<ChevronDown className="h-4 w-4 text-zion-slate-light" />) 
}</button> {
  POPULAR SKILLS.map (skill => (<div key= {
  skill 
}className="flex items-center" > <Checkbox > {
  skill 
}</label> </div>) ) 
}</div>) 
}</div>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/filters/SkillsFilter.tsx
=======
                id={`skill-${skill}`}
                checked={selectedSkills.includes(skill)}
                onCheckedChange={() => toggleSkill(skill)}
                className="border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple"
              />
              <label
                htmlFor={`skill-${skill}`}
                className="ml-2 text-sm text-zion-slate-light cursor-pointer"
              >
                {skill}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
};
;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
