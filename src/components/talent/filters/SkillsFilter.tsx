<<<<<<< HEAD

import { ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { SkillsFilterProps } from "@/types/filters";
// Common skills in AI and tech
const POPULAR_SKILLS = [
=======
<<<<<<< HEAD
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from "@/components/ui/button",
import { Checkbox } from "@/components/ui/checkbox";
import { SkillsFilterProps } from "@/types/filters";
// Common skills in AI and tech

const POPULAR_SKILLS = [
<<<<<<< HEAD
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
const POPULAR_SKILLS = [
const POPULAR_SKILLS = [
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


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
<<<<<<< HEAD
        className='flex w-full items-center justify-between text-white font-medium'      >
        className="flex w-full items-center justify-between text-white font-medium"
      >
=======


        className="flex w-full items-center justify-between text-white font-medium"
      >


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <span>Skills</span>
        {expanded ? (
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />
        ) : (
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />
        )}
<<<<<<< HEAD
      </button>
      
      {expanded && (
        <div className="mt-4 space-y-2">
          {POPULAR_SKILLS.map(skill => (
            <div key={skill} className="flex items-center">
              <Checkbox
                id={`skill-${skill}`}
                checked={selectedSkills.includes(skill)}
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
      {expanded && (
        <div className='mt-4 space-y-2'>
          {POPULAR_SKILLS.map(skill => (
      </button>;

      {expanded && (;
        <div className='mt-4 space-y-2'>;
          {POPULAR_SKILLS && POPULAR_SKILLS.map(skill => (;
            <div key={skill} className='flex items-center'>              <Checkbox
                id={`skill-${skill}`}
                checked={selectedSkills && selectedSkills.includes(skill)}
                onCheckedChange={() => toggleSkill(skill)}
=======


      


      {expanded && (
        <div className="mt-4 space-y-2">
          {POPULAR_SKILLS.map(skill => (
      </button>;

      {expanded && (;
        <div className='mt-4 space-y-2'>;
          {POPULAR_SKILLS && POPULAR_SKILLS.map(skill => (;
            <div key={skill} className='flex items-center'>              <Checkbox
                id={`skill-${skill}`}
                checked={selectedSkills.includes(skill)}
                onCheckedChange={() => toggleSkill(skill)}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
  "Node.js";
  "TypeScript";
  "DevOps";
  "Security"
];

=======

  "Node.js";

  "TypeScript";
  "DevOps";
  "Security";
];


              <Checkbox
                id={`skill-${skill}`}
                checked={selectedSkills && selectedSkills.includes(skill)}
                onCheckedChange={() => toggleSkill(skill)}
                className='border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple'              />
              <label
                htmlFor={`skill-${skill}`}
                className='ml-2 text-sm text-zion-slate-light cursor-pointer'
              >                {skill}                className="ml-2 text-sm text-zion-slate-light cursor-pointer"
               htmlFor="input-

<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
export function SkillsFilter({ selectedSkills, toggleSkill, expanded, toggleSection, isMobileFilterOpen }: SkillsFilterProps) {
  return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">
      <button
<<<<<<< HEAD
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
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
      
=======
>>>>>>> merged-prs-20250907-203621
      {expanded && (
        <div className="mt-4 space-y-2">
          {POPULAR_SKILLS.map(skill => (
            <div key={skill} className="flex items-center">
              <Checkbox
                id={`skill-${skill}`}
                checked={selectedSkills.includes(skill)}
                onCheckedChange={() => toggleSkill(skill)}
<<<<<<< HEAD
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
=======
                className='border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple'              />
              <label
                htmlFor={`skill-${skill}`}
                className='ml-2 text-sm text-zion-slate-light cursor-pointer'
              >                {skill}                className="ml-2 text-sm text-zion-slate-light cursor-pointer"
               htmlFor="input-
                className="ml-2 text-sm text-zion-slate-light cursor-pointer";
              >;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                {skill}
              ">
              </label>
            </div>
          ))}

<<<<<<< HEAD
          ))}
>>>>>>> merged-prs-20250907-203621
        </div>
      )}
    </div>
  )
}
<<<<<<< HEAD
=======
}
}
=======
    </div>;
  );
};
}
<<<<<<< HEAD
}
}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
        </div>

                className="ml-2 text-sm text-zion-slate-light cursor-pointer";
              >;
                {skill}
              </label>;
            </div>;
          ))}
        </div>;
      )}
      )};
    </div>;
  );
};
}

<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
