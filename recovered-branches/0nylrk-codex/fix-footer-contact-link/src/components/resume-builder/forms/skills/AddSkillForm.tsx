<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/AddSkillForm.tsx
=======

=======
<<<<<<< HEAD
<<<<<<< HEAD
import { useState  } from 'react';
import { Button  } from '@/components/ui/button';
import { Input  } from '@/components/ui/input';
import { Label  } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue  } from '@/components/ui/select';
import { Skill  } from '@/types/resume';
import { AIEnhancementButton } from '@/components/resume-builder/forms/AIEnhancementButton';
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';
import {Skill} from '@/types/resume';
import {AIEnhancementButton} from '@/components/resume-builder/forms/AIEnhancementButton';
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface AddSkillFormProps {

  resumeId: string
  onAddSkill: (skill: Skill) => Promise<boolean>
}
<<<<<<< HEAD
<<<<<<< HEAD

=======



export const AddSkillForm = ({ resumeId, onAddSkill }: AddSkillFormProps) => {;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
export const AddSkillForm = ({ resumeId, onAddSkill }: AddSkillFormProps) => {
=======

export const AddSkillForm = ({ resumeId, onAddSkill }: AddSkillFormProps) => {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    const success = await onAddSkill(newSkill);
    if (success) {
      setSkillName('');
      setProficiency(3)
    }
<<<<<<< HEAD

=======
=======
import React from 'react';
import {useState} from 'react';

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
  }
  const handleEnhanceSkill = (enhancedCategory: string) => {
    setSkillCategory(enhancedCategory)
  }
=======
  };
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { useState } from 'react',;
import { Button } from '@/components/ui/button',;
import { Input } from '@/components/ui/input',;
import { Label } from '@/components/ui/label',;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select',;
import { Skill } from '@/types/resume',;
import { AIEnhancementButton } from '@/components/resume-builder/forms/AIEnhancementButton',;
<<<<<<< HEAD
========
import React from 'react';
import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';
import {Skill} from '@/types/resume';
import {AIEnhancementButton} from '@/components/resume-builder/forms/AIEnhancementButton';
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/AddSkillForm.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface AddSkillFormProps {;
  resumeId: string,;
  onAddSkill: (skill: Skill) => Promise<boolean>;
}
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/AddSkillForm.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
;
export const AddSkillForm = ({ resumeId, onAddSkill }: AddSkillFormProps) => {;
  const [skillName, setSkillName] = useState(''),;
  const [skillCategory, setSkillCategory] = useState(''),;
  const [proficiency, setProficiency] = useState<number>(3),;
  const handleSubmit = async (e: React.FormEvent) => {;
    e.preventDefault(),;
    if (!skillName.trim()) return,;
<<<<<<< HEAD
========
export const AddSkillForm = ({ resumeId, onAddSkill }: AddSkillFormProps) => {;
  const [skillName, setSkillName] = useState('');
  const [skillCategory, setSkillCategory] = useState('');
  const [proficiency, setProficiency] = useState<number>(3);
  const handleSubmit = async (e: React && React.FormEvent) => {;
    e && e.preventDefault();
    if (!skillName && skillName.trim()) return,;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/AddSkillForm.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    const newSkill: Skill = {;
      name: skillName.trim(),;
      category: skillCategory || 'Other',;
      proficiency: proficiency},;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/AddSkillForm.tsx
    const success = await onAddSkill(newSkill),;
========
    const success = await onAddSkill(newSkill);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/AddSkillForm.tsx
=======
    const success = await onAddSkill(newSkill),;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    if (success) {;
      setSkillName(''),;
      setProficiency(3);
    }
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/AddSkillForm.tsx
  },

<<<<<<< HEAD
  const handleEnhanceSkill = (enhancedCategory: string) => {
    setSkillCategory(enhancedCategory)
  },

=======


=======
  },
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  
  const handleEnhanceSkill = (enhancedCategory: string) => {
    setSkillCategory(enhancedCategory)
  },
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
  };
  const handleEnhanceSkill = (enhancedCategory: string) => {;
    setSkillCategory(enhancedCategory);
  };
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/AddSkillForm.tsx
  return (
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <form onSubmit={handleSubmit} className="space-y-4">;
      <div className="flex flex-col gap-4 md:flex-row">;
        <div className="flex-1">;
          <Label htmlFor="skill-name">Skill Name</Label>;
<<<<<<< HEAD
          <Input
            id="skill-name"
            value={skillName}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/AddSkillForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/AddSkillForm.tsx
            onChange={(e) => setSkillName(e && e.target.value)}
            placeholder="Enter a skill (e && e.g., React)";
          />;
        </div>;
=======
          <Input;
            id="skill-name";
            value={skillName}
            onChange={(e) => setSkillName(e.target.value)}
            placeholder="Enter a skill (e.g., React)";
          />;
        </div>;
        ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        <div className="w-full md:w-44">;
          <div className="flex justify-between items-center">;
            <Label htmlFor="skill-category">Category</Label>;
            {skillName && (;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/AddSkillForm.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/AddSkillForm.tsx
              <AIEnhancementButton
=======
              <AIEnhancementButton ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                currentContent={skillName}
                enhancementType="general";
                onEnhanced={handleEnhanceSkill}
<<<<<<< HEAD
                buttonText="Suggest"
                className="h-4"
              />;
            )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/AddSkillForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/AddSkillForm.tsx
          </div>;
          <Select
            value={skillCategory} 
            onValueChange={setSkillCategory}>;
            <SelectTrigger id="skill-category">;
import {Button} from '@/components / ui / button';
import {Input} from '@/components / ui / input';
import {Label} from '@/components / ui / label';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components / ui / select';
import {Skill} from '@/types / resume';
import {AIEnhancementButton} from '@/components / resume - builder / forms / AIEnhancementButton';
interface AddSkillFormProps {
  resume_id: string,
  onAddSkill: (skill: Skill) => Promise < boolean>;
}
export const AddSkillForm = ({ resume_id, onAddSkill }: AddSkillFormProps) =>: any {
  const [skill_name, setSkillName] = useState ('');
  const [skill_category, setSkillCategory] = useState ('');
  const [proficiency, set_proficiency] = useState < number>(3);
;
  const handle_submit = async (e: React.FormEvent) => {
    e.prevent_default ();
;
    if () return, ) {
  $2
}
    const new_skill: Skill = {
      name: skill_name.trim (),
      category: skill_category || 'Other',
      proficiency: proficiency},
    const success = await onAddSkill (new_skill);
    // Check condition
if ( {) {
  $2
}
      setSkillName ('');
      set_proficiency (3);
    }
  }
;
  const handleEnhanceSkill = (enhanced_category: string) =>: any {
    setSkillCategory (enhanced_category);
  }
;
  return (
    <form on_submit={handle_submit} className="space - y-4">;
      <div className="flex flex - col gap - 4 md:flex - row">;
        <div className="flex - 1">;
          <Label html_for="skill - name">Skill Name</Label>;
          <Input;
            id="skill - name";
            value={skill_name}
            on_change={(e) => setSkillName (e.target.value)}
            placeholder="Enter a skill (e.g., React)";
          />;
        </div>;
        <div className="w - full md:w - 44">;
          <div className="flex justify - between items - center">;
            <Label html_for="skill - category">Category</Label>;
            {skill_name && (
              <AIEnhancementButton;
                current_content={skill_name}
                enhancement_type="general";
                on_enhanced={handleEnhanceSkill}
                button_text="Suggest";
                className="h - 4";
              />)}
          </div>;
          <Select;
            value={skill_category}
            onValueChange={setSkillCategory}
          >;
            <SelectTrigger id="skill - category">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/AddSkillForm.tsx

========
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/AddSkillForm.tsx
              <SelectValue placeholder="Select category" />;
            </SelectTrigger>;
            <SelectContent>;
              <SelectItem value="Programming">Programming</SelectItem>;
              <SelectItem value="Design">Design</SelectItem>;
              <SelectItem value="Soft Skills">Soft Skills</SelectItem>;
              <SelectItem value="DevOps">DevOps</SelectItem>;
              <SelectItem value="Data Science">Data Science</SelectItem>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/AddSkillForm.tsx

              <SelectItem value="AI / ML">AI / ML</SelectItem>;

========
<<<<<<< HEAD
              <SelectItem value="AI / ML">AI / ML</SelectItem>;
=======
              <SelectItem value="AI/ML">AI/ML</SelectItem>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/AddSkillForm.tsx
              <SelectItem value="Management">Management</SelectItem>;
              <SelectItem value="Other">Other</SelectItem>;
            </SelectContent>;
          </Select>;
        </div>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/AddSkillForm.tsx

              onChange={(e) => setProficiency(Number(e && e.target.value))}
              className="w-20";
=======

},


=======
========
<<<<<<< HEAD
              onChange={(e) => setProficiency(Number(e && e.target.value))}
              className="w-20";
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/AddSkillForm.tsx
        <div>;
          <Label html_for="skill - proficiency">Proficiency (1 - 5)</Label>;
          <div className="flex gap - 4">;
            <Input;
              id="skill - proficiency";
              type="number";
              min={1}
              max={5}
              value={proficiency}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/AddSkillForm.tsx
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              onChange={(e) => setProficiency(Number(e.target.value))}
              className="w-20"
            />
            <Button type="submit">Add</Button>
          </div>
        </div>
      </div>
    </form>
  )
<<<<<<< HEAD

};

},

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/AddSkillForm.tsx
              on_change={(e) => set_proficiency (Number (e.target.value))}
              className="w - 20";
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            />;
            <Button type="submit">Add</Button>;
          </div>;
        </div>;
      </div>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/AddSkillForm.tsx

    </form>);
}
;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
<<<<<<< HEAD
    </form>);
}
;
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/AddSkillForm.tsx
=======
<<<<<<< HEAD
<<<<<<< HEAD
}

=======
},
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
};
=======
},
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
