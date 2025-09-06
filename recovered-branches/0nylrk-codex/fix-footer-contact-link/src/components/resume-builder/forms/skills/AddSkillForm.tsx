

import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';
import {Skill} from '@/types/resume';
import {AIEnhancementButton} from '@/components/resume-builder/forms/AIEnhancementButton';


<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
interface AddSkillFormProps {

  resumeId: string
  onAddSkill: (skill: Skill) => Promise<boolean>
}

<<<<<<< HEAD
export const AddSkillForm = ({ resumeId, onAddSkill }: AddSkillFormProps) => {

export const AddSkillForm = ({ resumeId, onAddSkill }: AddSkillFormProps) => {;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======


export const AddSkillForm = ({ resumeId, onAddSkill }: AddSkillFormProps) => {;


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  const [skillName, setSkillName] = useState('');
  const [skillCategory, setSkillCategory] = useState('');
  const [proficiency, setProficiency] = useState<number>(3);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!skillName.trim()) return
    const newSkill: Skill = {
      name: skillName.trim()
      category: skillCategory |'Other'
      proficiency: proficiency}
<<<<<<< HEAD

    const success = await onAddSkill(newSkill);
    if (success) {
      setSkillName('');
      setProficiency(3)
    }


=======
=======
import React from 'react';
import {useState} from 'react';

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
import { useState } from 'react',;
import { Button } from '@/components/ui/button',;
import { Input } from '@/components/ui/input',;
import { Label } from '@/components/ui/label',;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select',;
import { Skill } from '@/types/resume',;
import { AIEnhancementButton } from '@/components/resume-builder/forms/AIEnhancementButton',;
interface AddSkillFormProps {;
  resumeId: string,;
  onAddSkill: (skill: Skill) => Promise<boolean>;
}
;
export const AddSkillForm = ({ resumeId, onAddSkill }: AddSkillFormProps) => {;
  const [skillName, setSkillName] = useState(''),;
  const [skillCategory, setSkillCategory] = useState(''),;
  const [proficiency, setProficiency] = useState<number>(3),;
  const handleSubmit = async (e: React.FormEvent) => {;
    e.preventDefault(),;
    if (!skillName.trim()) return,;
    const newSkill: Skill = {;
      name: skillName.trim(),;
      category: skillCategory || 'Other',;
      proficiency: proficiency},;
    const success = await onAddSkill(newSkill),;
    if (success) {;
      setSkillName(''),;
      setProficiency(3);
    }
  },



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  
  const handleEnhanceSkill = (enhancedCategory: string) => {
    setSkillCategory(enhancedCategory)
  },
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">;
      <div className="flex flex-col gap-4 md:flex-row">;
        <div className="flex-1">;
          <Label htmlFor="skill-name">Skill Name</Label>;
          <Input
            id="skill-name"
            value={skillName}

            onChange={(e) => setSkillName(e && e.target.value)}
            placeholder="Enter a skill (e && e.g., React)";
          />;
        </div>;

        <div className="w-full md:w-44">;
          <div className="flex justify-between items-center">;
            <Label htmlFor="skill-category">Category</Label>;
            {skillName && (;

              <AIEnhancementButton
                currentContent={skillName}
                enhancementType="general"
                onEnhanced={handleEnhanceSkill}
                buttonText="Suggest"
                className="h-4"
              />;
            )}

          </div>;
          <Select
            value={skillCategory} 
            onValueChange={setSkillCategory}>;
            <SelectTrigger id="skill-category">;


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
=======
        <div>;
          <Label html_for="skill - proficiency">Proficiency (1 - 5)</Label>;
          <div className="flex gap - 4">;
            <Input;
              id="skill - proficiency";
              type="number";
              min={1}
              max={5}
              value={proficiency}
              on_change={(e) => set_proficiency (Number (e.target.value))}
              className="w - 20";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
            />;
            <Button type="submit">Add</Button>;
          </div>;
        </div>;
      </div>;

    </form>);
}
;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
