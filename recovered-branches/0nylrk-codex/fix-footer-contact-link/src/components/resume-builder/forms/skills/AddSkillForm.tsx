
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { useState  } from 'react';
import { Button  } from '@/components/ui/button';
import { Input  } from '@/components/ui/input';
import { Label  } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue  } from '@/components/ui/select';
import { Skill  } from '@/types/resume';


import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';
import {Skill} from '@/types/resume';
import {AIEnhancementButton} from '@/components/resume-builder/forms/AIEnhancementButton';
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
interface AddSkillFormProps {

interface AddSkillFormProps {}
  resumeId: string;
  onAddSkill: (skill: Skill) => Promise<boolean>
}

<<<<<<< HEAD



export const AddSkillForm = ({ resumeId, onAddSkill }: AddSkillFormProps) => {;



=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
  const [skillName, setSkillName] = useState('');

  const [skillCategory, setSkillCategory] = useState('');
  const [proficiency, setProficiency] = useState<number>(3);
  const handleSubmit = async (e: React.FormEvent) => {}
    e.preventDefault();
    if (!skillName.trim()) return;
    const newSkill: Skill = {}
      name: skillName.trim()'
      category: skillCategory |'Other'
<<<<<<< HEAD

      proficiency: proficiency}

import { useState } from 'react',;
import { Button } from '@/components/ui/button',;
import { Input } from '@/components/ui/input',;
import { Label } from '@/components/ui/label',;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select',;
import { Skill } from '@/types/resume',;
import { AIEnhancementButton } from '@/components/resume-builder/forms/AIEnhancementButton',;

import React from 'react';
import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';
import {Skill} from '@/types/resume';
import {AIEnhancementButton} from '@/components/resume-builder/forms/AIEnhancementButton';

interface AddSkillFormProps {;
  resumeId:string,;
  onAddSkill:(skill:Skill) => Promise<boolean>;
}
;
export const AddSkillForm = ({ resumeId, onAddSkill } AddSkillFormProps) => {;
  const [skillName, setSkillName] = useState(''),;
  const [skillCategory, setSkillCategory] = useState(''),;
  const [proficiency, setProficiency] = useState<number>(3),;
  ;
  const handleSubmit = async (e:React.FormEvent) => {;
    e.preventDefault(),;
    ;
    if (!skillName.trim()) return,;

export const AddSkillForm = ({ resumeId, onAddSkill }: AddSkillFormProps) => {;
  const [skillName, setSkillName] = useState('');
  const [skillCategory, setSkillCategory] = useState('');
  const [proficiency, setProficiency] = useState<number>(3);
  const handleSubmit = async (e: React && React.FormEvent) => {;
    e && e.preventDefault();
    if (!skillName && skillName.trim()) return,;
    const newSkill: Skill = {;
      name: skillName.trim(),;
      category: skillCategory || 'Other',;
      proficiency: proficiency},;
    const success = await onAddSkill(newSkill);

    const success = await onAddSkill(newSkill),;
    if (success) {;
      setSkillName(''),;
      setProficiency(3),;
    }



  },


  return (
=======


  }
  const handleEnhanceSkill = (enhancedCategory: string) => {}
    setSkillCategory(enhancedCategory)
  }
  };

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

  },

  const handleEnhanceSkill = (enhancedCategory: string) => {}
    setSkillCategory(enhancedCategory)
  },

  return (

  const handleEnhanceSkill = (enhancedCategory: string) => {
    setSkillCategory(enhancedCategory)
  },
  return (

  const handleEnhanceSkill = (enhancedCategory: string) => {;
    setSkillCategory(enhancedCategory);
  };
  return (

>>>>>>> origin/cursor/delete-old-data-records-6bba
import { useState } from 'react',;
import { Button } from '@/components/ui/button',;
import { Input } from '@/components/ui/input',;
import { Label } from '@/components/ui/label',;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select',;
import { Skill } from '@/types/resume',;
import { AIEnhancementButton } from '@/components/resume-builder/forms/AIEnhancementButton',;
;
interface AddSkillFormProps {;
  resumeId:string,;
  onAddSkill:(skill:Skill) => Promise<boolean>;
}
;
export const AddSkillForm = ({ resumeId, onAddSkill } AddSkillFormProps) => {;
  const [skillName, setSkillName] = useState(''),;
  const [skillCategory, setSkillCategory] = useState(''),;
  const [proficiency, setProficiency] = useState<number>(3),;
  ;
  const handleSubmit = async (e:React.FormEvent) => {;
    e.preventDefault(),;
    ;
    if (!skillName.trim()) return,;
    ;
    const newSkill:Skill = {;
      name:skillName.trim(),;
      category:skillCategory || 'Other',;
      proficiency:proficiency},;
    ;
    const success = await onAddSkill(newSkill),;
    if (success) {;
      setSkillName(''),;
      setProficiency(3),;
    }
  },;
  ;
  const handleEnhanceSkill = (enhancedCategory:string) => {;
    setSkillCategory(enhancedCategory);
  },;
  ;
  return (;

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
    <form onSubmit={handleSubmit} className="space-y-4">;
      <div className="flex flex-col gap-4 md:flex-row">;
        <div className="flex-1">;
          <Label htmlFor="skill-name">Skill Name</Label>;
<<<<<<< HEAD

            onChange={(e) => setSkillName(e && e.target.value)}
            placeholder="Enter a skill (e && e.g., React)";
          />;
        </div>;
          <Input;
            id="skill-name";
            value={skillName}
            onChange={(e) => setSkillName(e.target.value)}
            placeholder="Enter a skill (e.g., React)";
          />;
        </div>;
        ;
        <div className="w-full md:w-44">;
          <div className="flex justify-between items-center">;

            <Label htmlFor="skill-category">Category</Label>;
            {skillName && (;



=======


  return (

    <form onSubmit={handleSubmit} className="space-y-4">;"
      <div className="flex flex-col gap-4 md:flex-row">;"
        <div className="flex-1">;"
          <Label htmlFor="skill-name">Skill Name</Label>;

            onChange={(e) => setSkillName(e && e.target.value)}"
            placeholder="Enter a skill (e && e.g., React)";
          />;
        </div>;
"
        <div className="w-full md:w-44">;"
          <div className="flex justify-between items-center">;"

            <Label htmlFor="skill-category">Category</Label>;
            {skillName && (;
              <AIEnhancementButton ;
                currentContent={skillName}
                enhancementType="general";
                onEnhanced={handleEnhanceSkill}
>>>>>>> origin/cursor/delete-old-data-records-6bba
          </div>;
          <Select;
            value={skillCategory} 
            onValueChange={setSkillCategory}>;"
            <SelectTrigger id="skill-category">;

<<<<<<< HEAD
import {Button} from '@/components / ui / button';
import {Input} from '@/components / ui / input';
import {Label} from '@/components / ui / label';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components / ui / select';
import {Skill} from '@/types / resume';
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

import {AIEnhancementButton} from '@/components / resume - builder / forms / AIEnhancementButton';
interface AddSkillFormProps {}
  resume_id: string,
  onAddSkill: (skill: Skill) => Promise < boolean>;
}
export const AddSkillForm = ({ resume_id, onAddSkill }: AddSkillFormProps) =>: any {';
  const [skill_name, setSkillName] = useState ('');'
  const [skill_category, setSkillCategory] = useState ('');
  const [proficiency, set_proficiency] = useState < number>(3);
;
  const handle_submit = async (e: React.FormEvent) => {}
    e.prevent_default ();
;
    if () return, ) {}
  $2;
}
    const new_skill: Skill = {}
      name: skill_name.trim (),'
      category: skill_category || 'Other',
      proficiency: proficiency},
    const success = await onAddSkill (new_skill);
    // Check condition;
if ( {) {}
  $2;
}'
      setSkillName ('');
      set_proficiency (3);
    }
  }
;
  const handleEnhanceSkill = (enhanced_category: string) =>: any {}
    setSkillCategory (enhanced_category);
  }
;
  return ("
    <form on_submit={handle_submit} className="space - y-4">;"
      <div className="flex flex - col gap - 4 md:flex - row">;"
        <div className="flex - 1">;"
          <Label html_for="skill - name">Skill Name</Label>;
          <Input;"
            id="skill - name";
            value={skill_name}
            on_change={(e) => setSkillName (e.target.value)}"
            placeholder="Enter a skill (e.g., React)";
          />;
        </div>;"
        <div className="w - full md:w - 44">;"
          <div className="flex justify - between items - center">;"
            <Label html_for="skill - category">Category</Label>;
            {skill_name && (
              <AIEnhancementButton;
                current_content={skill_name}"
                enhancement_type="general";
                on_enhanced={handleEnhanceSkill}"
                button_text="Suggest";"
                className="h - 4";
              />)}
          </div>;
          <Select;
            value={skill_category}
            onValueChange={setSkillCategory}
          >;"
            <SelectTrigger id="skill - category">;
<<<<<<< HEAD

                buttonText="Suggest";
                className="h-4";
              />;
            )}
          </div>;
          <Select ;
            value={skillCategory} ;
            onValueChange={setSkillCategory}
          >;
            <SelectTrigger id="skill-category">;
              <SelectValue placeholder="Select category" />;
            </SelectTrigger>;
            <SelectContent>;
              <SelectItem value="Programming">Programming</SelectItem>;
              <SelectItem value="Design">Design</SelectItem>;
              <SelectItem value="Soft Skills">Soft Skills</SelectItem>;
              <SelectItem value="DevOps">DevOps</SelectItem>;
              <SelectItem value="Data Science">Data Science</SelectItem>;
              <SelectItem value="AI/ML">AI/ML</SelectItem>;
              <SelectItem value="Management">Management</SelectItem>;
              <SelectItem value="Other">Other</SelectItem>;
            </SelectContent>;
          </Select>;
        </div>;
=======


                currentContent={skillName}"
                enhancementType="general";
                onEnhanced={handleEnhanceSkill}
"
              <SelectValue placeholder="Select category" />;

            <Button type="submit">Add</Button>
          </div>
        </div>
      </div>
    </form>
  )
>>>>>>> origin/cursor/delete-old-data-records-6bba


},
};
},

<<<<<<< HEAD


  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex-1">
          <Label htmlFor="skill-name">Skill Name</Label>
          <Input
            id="skill-name"
            value={skillName}
            onChange={(e) => setSkillName(e.target.value)}
            placeholder="Enter a skill (e.g., React)"
          />
        </div>
        <div className="w-full md:w-44">
          <div className="flex justify-between items-center">
            <Label htmlFor="skill-category">Category</Label>
            {skillName && (
              <AIEnhancementButton
                currentContent={skillName}
                enhancementType="general"
                onEnhanced={handleEnhanceSkill}
                buttonText="Suggest"
                className="h-4"
              />
            )}
          </div>
          <Select
            value={skillCategory}
            onValueChange={setSkillCategory}
          >
            <SelectTrigger id="skill-category">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Programming">Programming</SelectItem>
              <SelectItem value="Design">Design</SelectItem>
              <SelectItem value="Soft Skills">Soft Skills</SelectItem>
              <SelectItem value="DevOps">DevOps</SelectItem>
              <SelectItem value="Data Science">Data Science</SelectItem>
              <SelectItem value="AI/ML">AI/ML</SelectItem>
              <SelectItem value="Management">Management</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="skill-proficiency">Proficiency (1-5)</Label>
          <div className="flex gap-4">
            <Input
              id="skill-proficiency"
              type="number"
              min={1}
              max={5}
              value={proficiency}
              onChange={(e) => setProficiency(Number(e.target.value))}
              className="w-20"
            />
            <Button type="submit">Add</Button>
          </div>
        </div>
      </div>
    </form>
  )
              on_change={(e) => set_proficiency (Number (e.target.value))}
              className="w - 20";
        ;
        <div>;
          <Label htmlFor="skill-proficiency">Proficiency (1-5)</Label>;
          <div className="flex gap-4">;
            <Input;
              id="skill-proficiency";
              type="number";              min={1}
              max={5}
              value={proficiency}
              onChange={(e) => setProficiency(Number(e.target.value))}
              className="w-20";

=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
            />;

            <Button type="submit">Add</Button>;
          </div>;
        </div>;
<<<<<<< HEAD

      </div>;
    </form>;
  ),;
},; if (!skillName.trim () ) return;
const newSkill: Skill = {
  />) 
}</div> <Select value= {
  skillCategory 
}onValueChange= {
  setSkillCategory 
}> <SelectTrigger id="skill-category" > <SelectValue placeholder="Select category" /> </SelectTrigger> <SelectContent> <SelectItem value="Programming" >Programming</SelectItem> <SelectItem value="Design" >Design</SelectItem> <SelectItem value="Soft Skills" >Soft Skills</SelectItem> <SelectItem value="DevOps" >DevOps</SelectItem> <SelectItem value="Data Science" >Data Science</SelectItem> <SelectItem value="AI/ML" >AI/ML</SelectItem> <SelectItem value="Management" >Management</SelectItem> <SelectItem value="Other" >Other</SelectItem> </SelectContent> </Select> </div> <div> <Label htmlFor="skill-proficiency" >Proficiency (1-5) </Label> <div className="flex gap-4" > <Input /> <Button type="submit" >Add</Button> </div> </div> </div> </form>) 
};
}



=======

      </div>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
