
<<<<<<< HEAD
=======

pr-12325
>>>>>>> origin/main
import { useState  } from 'react';
import { Button  } from '@/components/ui/button';
import { Input  } from '@/components/ui/input';
import { Label  } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue  } from '@/components/ui/select';
import { Skill  } from '@/types/resume';
import { AIEnhancementButton } from '@/components/resume-builder/forms/AIEnhancementButton';interface AddSkillFormProps {

  resumeId: string
  onAddSkill: (skill: Skill) => Promise<boolean>
}

export const AddSkillForm = ({ resumeId, onAddSkill }: AddSkillFormProps) => {;

  const [skillName, setSkillName] = useState('');
  const [skillCategory, setSkillCategory] = useState('');
  const [proficiency, setProficiency] = useState<number>(3);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!skillName.trim()) return
    const newSkill: Skill = {
      name: skillName.trim()
      category: skillCategory |'Other'
      proficiency: proficiency}  return (  return (
    <form onSubmit={handleSubmit} className="space-y-4">;
      <div className="flex flex-col gap-4 md:flex-row">;
        <div className="flex-1">;
          <Label htmlFor="skill-name">Skill Name</Label>;              <SelectValue placeholder="Select category" />;
            </SelectTrigger>;
            <SelectContent>;
              <SelectItem value="Programming">Programming</SelectItem>;
              <SelectItem value="Design">Design</SelectItem>;
              <SelectItem value="Soft Skills">Soft Skills</SelectItem>;
              <SelectItem value="DevOps">DevOps</SelectItem>;
              <SelectItem value="Data Science">Data Science</SelectItem>;

              <SelectItem value="AI / ML">AI / ML</SelectItem>;}

},
};
},
              on_change={(e) => set_proficiency (Number (e.target.value))}
              className="w-20";
            />;
            <Button type="submit">Add</Button>;
          </div>;
        </div>;
      </div>;

    </form>);}

},
};
},
import { AIEnhancementButton } from '@/components/resume-builder/forms/AIEnhancementButton';
<<<<<<< HEAD

interface AddSkillFormProps {
  resumeId: string;
  onAddSkill: (skill: Skill) => Promise<boolean>
}


export const AddSkillForm = null;

=======
import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';
import {Skill} from '@/types/resume';
import {AIEnhancementButton} from '@/components/resume-builder/forms/AIEnhancementButton';


import { useState  } from 'react';''
import { Button  } from '@/components/ui/button';''
import { Input  } from '@/components/ui/input';''
import { Label  } from '@/components/ui/label';''
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue  } from '@/components/ui/select';''
import { Skill  } from '@/types/resume';''
import { AIEnhancementButton } from '@/components/resume-builder/forms/AIEnhancementButton';''
import {useState} from 'react';''
import {Button} from '@/components/ui/button';''
import {Input} from '@/components/ui/input';''
import {Label} from '@/components/ui/label';''
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';''
import {Skill} from '@/types/resume';''
import {AIEnhancementButton} from '@/components/resume-builder/forms/AIEnhancementButton';'
interface AddSkillFormProps {
  // TODO: Implement
}
  resumeId: string;,
  onAddSkill: (skill: Skill) => Promise<boolean>
</boolean>
  const [proficiency, setProficiency] = useState<number>(3);
</number>
  onAddSkill: (skill: Skill) => Promise<boolean>;
  const [proficiency, setProficiency] = useState<number>(3),;
  onAddSkill:(skill:Skill) => Promise<boolean>;
    <form onSubmit={handleSubmit} className="space-y-4">;"
</form>"
      <div className="flex flex-col gap-4 md:flex-row">;"
</div>"
        <div className="flex-1">;"
          <Label htmlFor="skill-name">Skill Name;"
          <Input;"
            id="skill-name""
            value={skillName}

            onChange={(e) => setSkillName(e && e.target.value)}

        </div>;"
        <div className="w-full md:w-44">;"
          <div className="flex justify-between items-center">;"
            <Label htmlFor="skill-category">Category;"
              <AIEnhancementButton;
                currentContent={skillName}"
                enhancementType="general""
                onEnhanced={handleEnhanceSkill}"
                buttonText="Suggest"""
                className="h-4""
              />;

          </div>;
          <Select;
            value={skillCategory} 
            onValueChange={setSkillCategory}>;
"
            <SelectTrigger id="skill-category">;"

  onAddSkill: (skill: Skill) => Promise < boolean>;
export const AddSkillForm = ({ resume_id, onAddSkill }: AddSkillFormProps) =>: any {
  // TODO: Implement
}"
  const [skill_name, setSkillName] = useState ();
  const [skill_category, setSkillCategory] = useState ();
  const [proficiency, set_proficiency] = useState < number>(3);
;
  const handle_submit = async (e: React.FormEvent) => {
    e.prevent_default ();
    if () return, ) {
  $2;
    const new_skill: Skill = {,
  name: skill_name.trim (),
      category: skill_category || 'Other',
      proficiency: proficiency},
    const success = await onAddSkill (new_skill);
    // Check condition;
if ( {) {
      setSkillName ();
      set_proficiency (3);
  const handleEnhanceSkill = (enhanced_category: string) =>: any {
  // TODO: Implement
    setSkillCategory (enhanced_category);
  return (
    <form on_submit={handle_submit} className="space - y-4">;"
      <div className="flex flex - col gap - 4 md:flex - row">;"
        <div className="flex - 1">;"
          <Label html_for="skill - name">Skill Name;"
            id="skill - name";"
            value={skill_name})
            on_change={(e) => setSkillName (e.target.value)}

        <div className="w - full md:w - 44">;"
          <div className="flex justify - between items - center">;"
            <Label html_for="skill - category">Category;"
                current_content={skill_name}"
                enhancement_type="general";"
                on_enhanced={handleEnhanceSkill}"
                button_text="Suggest";""
                className="h - 4";"
              />)}

            value={skill_category}
            onValueChange={setSkillCategory}
          >;
            <SelectTrigger id="skill - category">;"
              <SelectValue placeholder="Select category" />;"

            <SelectContent>;
              <SelectItem value="Programming">Programming;""
              <SelectItem value="Design">Design;""
              <SelectItem value="Soft Skills">Soft Skills;""
              <SelectItem value="DevOps">DevOps;""
              <SelectItem value="Data Science">Data Science;""
              <SelectItem value="AI / ML">AI / ML;""
              <SelectItem value="Management">Management;""
              <SelectItem value="Other">Other;"
            <Button type="submit">Add"
          </div>
    </form>
        <div>;
          <Label htmlFor="skill-proficiency">Proficiency (1-5);""
          <div className="flex gap-4">;"
              id="skill-proficiency";""
              type="number";              min={1}"
              max={5}
              value={proficiency}
              onChange={(e) => setProficiency(Number(e.target.value))}
            <Button type="submit">Add;"
    </form>);"
pr-12325
</Input>"
            <Button type="submit">Add</Button>;"
          </div>;
        </div>;
      </div>;
    </form>);}
},
};
},
>>>>>>> origin/main
