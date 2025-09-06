<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from "@/components/ui/button",
import { Checkbox } from "@/components/ui/checkbox";
import { SkillsFilterProps } from "@/types/filters";
// Common skills in AI and tech

const POPULAR_SKILLS = [
  'Machine Learning'
  'Deep Learning'
  'Python'
  'TensorFlow'
  'PyTorch'
  'Computer Vision'
  'NLP'
  'Data Science'
  'AWS'
  'Docker'
  'Kubernetes'
  'React'
  'Node.js'
  'TypeScript'
  'DevOps'
  'Security'
]
export function SkillsFilter({
  selectedSkills
  toggleSkill
  expanded
  toggleSection
  isMobileFilterOpen
}: SkillsFilterProps) {
import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { SkillsFilterProps } from '@/types/filters';

// Common skills in AI and tech;
const POPULAR_SKILLS = [;
  'Machine Learning',;
  'Deep Learning',;
  'Python',;
  'TensorFlow',;
  'PyTorch',;
  'Computer Vision',;
  'NLP',;
  'Data Science',;
  'AWS',;
  'Docker',;
  'Kubernetes',;
  'React',;
  'Node && Node.js',;
  'TypeScript',;
  'DevOps',;
  'Security',;
];

export function SkillsFilter(): any ({;
  selectedSkills,;
  toggleSkill,;
  expanded,;
  toggleSection,;
  isMobileFilterOpen,;
}: SkillsFilterProps) {;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  return (
    <div className='mb-6 border-b border-zion-blue-light pb-6'>;
      <button
        onClick={toggleSection}
<<<<<<< HEAD
        className='flex w-full items-center justify-between text-white font-medium'>;
        <span>Skills</span>;
        {expanded ? (;
          <ChevronUp className='h-4 w-4 text-zion-slate-light' />;
        ) : (;
          <ChevronDown className='h-4 w-4 text-zion-slate-light' />;
        )}
      </button>
=======


        className="flex w-full items-center justify-between text-white font-medium"
      >
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        <span>Skills</span>
        {expanded ? (
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />
        ) : (
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        )}
      </button>
<<<<<<< HEAD
=======
      
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      {expanded && (
        <div className="mt-4 space-y-2">
          {POPULAR_SKILLS.map(skill => (
            <div key={skill} className="flex items-center">
              <Checkbox
                id={`skill-${skill}`}
                checked={selectedSkills.includes(skill)}
                onCheckedChange={() => toggleSkill(skill)}
<<<<<<< HEAD
            <div key={skill} className="flex items-center">
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { SkillsFilterProps } from "@/types/filters"
// Common skills in AI and tech
const POPULAR_SKILLS = [
  "Machine Learning"
  "Deep Learning"
  "Python"
  "TensorFlow"
  "PyTorch"
  "Computer Vision"
  "NLP"
  "Data Science"
  "AWS"
  "Docker"
  "Kubernetes"
  "React"
  "Node.js"
  "TypeScript"
  "DevOps"
  "Security"
]


      


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
      {expanded && (
        <div className='mt-4 space-y-2'>
          {POPULAR_SKILLS.map(skill => (

      {expanded && (;
        <div className='mt-4 space-y-2'>;
          {POPULAR_SKILLS && POPULAR_SKILLS.map(skill => (;
            <div key={skill} className='flex items-center'>              <Checkbox
                id={`skill-${skill}`}
                checked={selectedSkills && selectedSkills.includes(skill)}
                onCheckedChange={() => toggleSkill(skill)}
            <div key={skill} className="flex items-center">
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { SkillsFilterProps } from "@/types/filters"
// Common skills in AI and tech
const POPULAR_SKILLS = [
  "Machine Learning"
  "Deep Learning"
  "Python"
  "TensorFlow"
  "PyTorch"
  "Computer Vision"
  "NLP"
  "Data Science"
  "AWS"
  "Docker"
  "Kubernetes"
  "React"
  "Node.js"
  "TypeScript"
  "DevOps"
  "Security"
]
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
<<<<<<< HEAD

export function SkillsFilter(): any ({ selectedSkills, toggleSkill, expanded, toggleSection, isMobileFilterOpen }: SkillsFilterProps) {;
  return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">;
      <button
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium">;
        <span>Skills</span>;
        {expanded ? (;
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />;
        ) : (;
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />;
=======
export function SkillsFilter({ selectedSkills, toggleSkill, expanded, toggleSection, isMobileFilterOpen }: SkillsFilterProps) {;
  return (;
    <div className="mb-6 border-b border-zion-blue-light pb-6">;
      <button;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium"
      >
        <span>Skills</span>
        {expanded ? (
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />
        ) : (
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
        )}
      </button>
      {expanded && (
        <div className="mt-4 space-y-2">
          {POPULAR_SKILLS.map(skill => (
            <div key={skill} className="flex items-center">
<<<<<<< HEAD
      </button>;

      {expanded && (;
        <div className="mt-4 space-y-2">;
          {POPULAR_SKILLS && POPULAR_SKILLS.map(skill => (;
            <div key={skill} className="flex items-center">;
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
              <Checkbox
                id={`skill-${skill}`}
                checked={selectedSkills && selectedSkills.includes(skill)}
                onCheckedChange={() => toggleSkill(skill)}
                className='border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple'              />;
              <label
                htmlFor={`skill-${skill}`}
                className='ml-2 text-sm text-zion-slate-light cursor-pointer'>                {skill}                className="ml-2 text-sm text-zion-slate-light cursor-pointer";
               htmlFor="input-;
                {skill}
              ">;
              </label>;
            </div>;
          ))}
<<<<<<< HEAD
        </div>;
=======
        </div>
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
      )}
    </div>
  )
}
    </div>
  );
}
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
                className='border - zion - slate - light data-[state = checked]:bg - zion - purple data-[state = checked]:border - zion - purple'              />;
              <label;
                html_for={`skill-${skill}`}
                className='ml - 2 text - sm text - zion - slate - light cursor - pointer';
              >                {skill}                className="ml - 2 text - sm text - zion - slate - light cursor - pointer";
              html_for="input-;
                {skill}
              ">;
              </label>;
            </div>))}
        </div>)}
    </div>);
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    </div>;
  );
};
}

;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
