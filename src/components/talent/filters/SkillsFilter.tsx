<<<<<<< HEAD
<<<<<<< HEAD


=======
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

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { ChevronDown, ChevronUp } from 'lucide-react'
=======
>>>>>>> import { ChevronDown, ChevronUp } from 'lucide-react'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import { Button } from "@/components/ui/button",
import { Checkbox } from "@/components/ui/checkbox";
import { SkillsFilterProps } from "@/types/filters";
// Common skills in AI and tech
<<<<<<< HEAD

<<<<<<< HEAD
  return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">
      <button
        onClick={toggleSection}
=======
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
<<<<<<< HEAD
>>>>>>>   return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">
      <button
        onClick={toggleSection}
        className='flex w-full items-center justify-between text-white font-medium'      >
>>>>>>>         <span>Skills</span>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
=======
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">
      <button
        onClick={toggleSection}
<<<<<<< HEAD


        className="flex w-full items-center justify-between text-white font-medium"
      >

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

        <span>Skills</span>
>>>>>>>         {expanded ? (
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />
        ) : (
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
        )}
      </button>
<<<<<<< HEAD

      {expanded && (
=======
>>>>>>>       {expanded && (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
        className='flex w-full items-center justify-between text-white font-medium'      >
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className="mt-4 space-y-2">
          {POPULAR_SKILLS.map(skill => (
            <div key={skill} className="flex items-center">
              <Checkbox
                id={`skill-${skill}`}
                checked={selectedSkills.includes(skill)}
                onCheckedChange={() => toggleSkill(skill)}
<<<<<<< HEAD

        onClick={toggleSection}
=======
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
<<<<<<< HEAD

export function SkillsFilter({ selectedSkills, toggleSkill, expanded, toggleSection, isMobileFilterOpen }: SkillsFilterProps) {
  return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">
      <button
>>>>>>>         onClick={toggleSection}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
ursor/fix-website-loading-errors-and-merge-6662
      {expanded && (
        <div className='mt-4 space-y-2'>
          {POPULAR_SKILLS.map(skill => (
      </button>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

      {expanded && (;
        <div className='mt-4 space-y-2'>;
          {POPULAR_SKILLS && POPULAR_SKILLS.map(skill => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            <div key={skill} className='flex items-center'>              <Checkbox
                id={`skill-${skill}`}
                checked={selectedSkills && selectedSkills.includes(skill)}
                onCheckedChange={() => toggleSkill(skill)}

            <div key={skill} className="flex items-center">;

import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { SkillsFilterProps } from "@/types/filters";
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components / ui / button';
import { Checkbox } from '@/components / ui / checkbox';
import { SkillsFilterProps } from '@/types / filters';
// Common skills in AI and tech;
const POPULAR_SKILLS = [;
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
];
export /**
 * SkillsFilter - Function description
 */
function SkillsFilter() {
  return (
    <div className='mb - 6 border - b border - zion - blue - light pb - 6'>;
      <button;
        on_click={toggle_section}
        className='flex w - full items - center justify - between text - white font - medium'      >;
        <span > Skills</span>;
        {expanded ? (
          <ChevronUp className='h - 4 w - 4 text - zion - slate - light' />) : (
          <ChevronDown className='h - 4 w - 4 text - zion - slate - light' />)}
      </button>;
      {expanded && (
        <div className='mt - 4 space - y-2'>;
          {POPULAR_SKILLS.map (skill => (
            <div key={skill} className='flex items - center'>              <Checkbox;
                id={`skill-${skill}`}
                checked={selected_skills.includes (skill)}
                onCheckedChange={() => toggle_skill (skill)}
            <div key={skill} className="flex items - center">;
import { Button  } from '@/components / ui / button';
import { Checkbox  } from '@/components / ui / checkbox';
import { SkillsFilterProps  } from '@/types / filters';

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

  "Node.js";

  "TypeScript";
  "DevOps";
  "Security";
];


>>>>>>> >>>>>>>               <Checkbox
                id={`skill-${skill}`}
                checked={selectedSkills && selectedSkills.includes(skill)}
                onCheckedChange={() => toggleSkill(skill)}
                className='border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple'              />
              <label
                htmlFor={`skill-${skill}`}
<<<<<<< HEAD

=======
                className='ml-2 text-sm text-zion-slate-light cursor-pointer'
              >                {skill}                className="ml-2 text-sm text-zion-slate-light cursor-pointer"
               htmlFor="input-
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

export function SkillsFilter({ selectedSkills, toggleSkill, expanded, toggleSection, isMobileFilterOpen }: SkillsFilterProps) {
  return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">
      <button
=======
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
<<<<<<< HEAD
                className='ml-2 text-sm text-zion-slate-light cursor-pointer'
              >                {skill}                className="ml-2 text-sm text-zion-slate-light cursor-pointer"
               htmlFor="input-
=======
                className="ml-2 text-sm text-zion-slate-light cursor-pointer";
              >;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                {skill}
              ">
              </label>
            </div>
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>>           ))}
        </div>
<<<<<<< HEAD

=======
=======
          ))}
        </div>
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      )}
    </div>
  )
}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    </div>;
  );
};
}
<<<<<<< HEAD

=======
}
}
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
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
<<<<<<< HEAD
}
}
=======
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
