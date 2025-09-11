
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';
import {Skill} from '@/types/resume';
import {AIEnhancementButton} from '@/components/resume-builder/forms/AIEnhancementButton';
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface AddSkillFormProps {

  resumeId: string
  onAddSkill: (skill: Skill) => Promise<boolean>
}



export const AddSkillForm = ({ resumeId, onAddSkill }: AddSkillFormProps) => {;


export const AddSkillForm = ({ resumeId, onAddSkill }: AddSkillFormProps) => {;
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  }
  const handleEnhanceSkill = (enhancedCategory: string) => {
    setSkillCategory(enhancedCategory)
  }
  };
=======
==============
import React from 'react';
import {useState} from 'react';

=======

  },

=======
  },


  
  const handleEnhanceSkill = (enhancedCategory: string) => {
    setSkillCategory(enhancedCategory)
  },
  
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            onChange={(e) => setSkillName(e && e.target.value)}
            placeholder="Enter a skill (e && e.g., React)";
          />;
        </div>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <SelectValue placeholder="Select category" />;
            </SelectTrigger>;
            <SelectContent>;
              <SelectItem value="Programming">Programming</SelectItem>;
              <SelectItem value="Design">Design</SelectItem>;
              <SelectItem value="Soft Skills">Soft Skills</SelectItem>;
              <SelectItem value="DevOps">DevOps</SelectItem>;
              <SelectItem value="Data Science">Data Science</SelectItem>;
<<<<<<< HEAD
              <SelectItem value="AI/ML">AI/ML</SelectItem>;
=======

              <SelectItem value="AI / ML">AI / ML</SelectItem>;
              <SelectItem value="Management">Management</SelectItem>;
              <SelectItem value="Other">Other</SelectItem>;
            </SelectContent>;
          </Select>;
        </div>;


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
              onChange={(e) => setProficiency(Number(e && e.target.value))}
              className="w-20";
=======

},


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
              className="w - 20";>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            />;
            <Button type="submit">Add</Button>;
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD
},
};
},
==============

    </form>);
}
;
