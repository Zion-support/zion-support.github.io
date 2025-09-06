
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { SkillsFilterProps } from '@/types/filters'
// Common skills in AI and tech
const POPULAR_SKILLS = [
  'Machine Learning',
  'Deep Learning',
  'Python',
  'TensorFlow',
  'PyTorch',
  'Computer Vision',
  'NLP',
  'Data Science',
  'AWS',
  'Docker',
  'Kubernetes',
  'React',
  'Node.js',
  'TypeScript',
  'DevOps',
  'Security',
]
export function SkillsFilter({
  selectedSkills,
  toggleSkill,
  expanded,
  toggleSection,
  isMobileFilterOpen,
}: SkillsFilterProps) {

=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from "@/components/ui/button",
import { Checkbox } from "@/components/ui/checkbox";
import { SkillsFilterProps } from "@/types/filters";
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

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">
      <button
        onClick={toggleSection}

        className="flex w-full items-center justify-between text-white font-medium"
      >

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        <span>Skills</span>
        {expanded ? (
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />
        ) : (
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />
        )}
      </button>

      

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from "@/components/ui/button",;
import { Checkbox } from "@/components/ui/checkbox",;
import { SkillsFilterProps } from "@/types/filters",;
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
];
export function SkillsFilter({ selectedSkills, toggleSkill, expanded, toggleSection, isMobileFilterOpen }: SkillsFilterProps) {;
  return (;
    <div className="mb-6 border-b border-zion-blue-light pb-6">;
      <button;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
                className='border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple'              />
              <label
                htmlFor={`skill-${skill}`}

                className="ml-2 text-sm text-zion-slate-light cursor-pointer";
              >;

                {skill}
              ">
              </label>
            </div>
          ))}
        </div>

                className="ml-2 text-sm text-zion-slate-light cursor-pointer";
              >;
                {skill}
              </label>;
            </div>;
          ))}
        </div>;
      )}
=======
      )};

    </div>;
  );
};
}

;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
