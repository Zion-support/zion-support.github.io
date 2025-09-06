<<<<<<< HEAD
<<<<<<< HEAD
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { SkillsFilterProps } from '@/types/filters';
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

import { ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { SkillsFilterProps } from "@/types/filters";
// Common skills in AI and tech
const POPULAR_SKILLS = [
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
  "Security"
];

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
<<<<<<< HEAD
            <div key={skill} className='flex items-center'>
=======

import { ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { SkillsFilterProps } from "@/types/filters";
// Common skills in AI and tech
const POPULAR_SKILLS = [
  "Machine Learning",
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
  "Security"
];


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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <div key={skill} className="flex items-center">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              <Checkbox
                id={`skill-${skill}`}
                checked={selectedSkills.includes(skill)}
                onCheckedChange={() => toggleSkill(skill)}
<<<<<<< HEAD
<<<<<<< HEAD
                className='border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple'
              />
              <label
                htmlFor={`skill-${skill}`}
                className='ml-2 text-sm text-zion-slate-light cursor-pointer'
              >
=======
                className="border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple"
              />
              <label
                htmlFor={`skill-${skill}`}
=======
                className="border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple"
              />
              <label
                htmlFor={`skill-${skill}`}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                className="ml-2 text-sm text-zion-slate-light cursor-pointer"
               htmlFor="input-
                {skill}
              ">
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                {skill}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
