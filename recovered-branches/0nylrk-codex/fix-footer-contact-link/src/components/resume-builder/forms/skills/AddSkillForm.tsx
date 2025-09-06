

import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';
import {Skill} from '@/types/resume';
import {AIEnhancementButton} from '@/components/resume-builder/forms/AIEnhancementButton';






interface AddSkillFormProps {

  resumeId: string
  onAddSkill: (skill: Skill) => Promise<boolean>
}





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





>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


  
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





