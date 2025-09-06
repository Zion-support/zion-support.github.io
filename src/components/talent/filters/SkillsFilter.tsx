>>>>>>> import { ChevronDown, ChevronUp } from 'lucide-react'
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
>>>>>>>   return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">
      <button
        onClick={toggleSection}
        className='flex w-full items-center justify-between text-white font-medium'      >
>>>>>>>         <span>Skills</span>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
  return (
    <div className='mb-6 border-b border-zion-blue-light pb-6'>;
      <button
        onClick={toggleSection}


        className="flex w-full items-center justify-between text-white font-medium"
      >


        <span>Skills</span>
>>>>>>>         {expanded ? (
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />
        ) : (
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
        )}
      </button>
>>>>>>>       {expanded && (
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

export function SkillsFilter({ selectedSkills, toggleSkill, expanded, toggleSection, isMobileFilterOpen }: SkillsFilterProps) {
  return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">
      <button
>>>>>>>         onClick={toggleSection}
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
                className='ml-2 text-sm text-zion-slate-light cursor-pointer'
              >                {skill}                className="ml-2 text-sm text-zion-slate-light cursor-pointer"
               htmlFor="input-
                {skill}
              ">
                {skill}
              </label>
            </div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>>           ))}
        </div>
      )}
    </div>
  )
}
    </div>;
  );
};
}
}
}
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 