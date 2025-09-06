<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { useState  } from 'react';
import { Button  } from '@/components/ui/button';
import { Input  } from '@/components/ui/input';
import { Label  } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue  } from '@/components/ui/select';
import { Skill  } from '@/types/resume';
<<<<<<< HEAD
<<<<<<< HEAD
import { AIEnhancementButton } from '@/components/resume-builder/forms/AIEnhancementButton';
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';
import {Skill} from '@/types/resume';
import {AIEnhancementButton} from '@/components/resume-builder/forms/AIEnhancementButton';
<<<<<<< HEAD
=======


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface AddSkillFormProps {
=======
import { AIEnhancementButton } from '@/components/resume-builder/forms/AIEnhancementButton';interface AddSkillFormProps {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import { AIEnhancementButton } from '@/components/resume-builder/forms/AIEnhancementButton';interface AddSkillFormProps {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

import { useState  } from 'react';'
import { Button  } from '@/components/ui/button';'
import { Input  } from '@/components/ui/input';'
import { Label  } from '@/components/ui/label';'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue  } from '@/components/ui/select';'
import { Skill  } from '@/types/resume';'
import { AIEnhancementButton } from '@/components/resume-builder/forms/AIEnhancementButton';
'
import {useState} from 'react';'
import {Button} from '@/components/ui/button';'
import {Input} from '@/components/ui/input';'
import {Label} from '@/components/ui/label';'
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';'
import {Skill} from '@/types/resume';'
import {AIEnhancementButton} from '@/components/resume-builder/forms/AIEnhancementButton';


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

interface AddSkillFormProps {}
  resumeId: string;
  onAddSkill: (skill: Skill) => Promise<boolean>
}
<<<<<<< HEAD
export const AddSkillForm = ({ resumeId, onAddSkill }: AddSkillFormProps) => {

<<<<<<< HEAD
export const AddSkillForm = ({ resumeId, onAddSkill }: AddSkillFormProps) => {;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

export const AddSkillForm = ({ resumeId, onAddSkill }: AddSkillFormProps) => {;

<<<<<<< HEAD


<<<<<<< HEAD
export const AddSkillForm = ({ resumeId, onAddSkill }: AddSkillFormProps) => {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export const AddSkillForm = ({ resumeId, onAddSkill }: AddSkillFormProps) => {;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const [skillName, setSkillName] = useState('');
=======

'
  const [skillName, setSkillName] = useState('');'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const [skillCategory, setSkillCategory] = useState('');
  const [proficiency, setProficiency] = useState<number>(3);
  const handleSubmit = async (e: React.FormEvent) => {}
    e.preventDefault();
    if (!skillName.trim()) return;
    const newSkill: Skill = {}
      name: skillName.trim()'
      category: skillCategory |'Other'
<<<<<<< HEAD
<<<<<<< HEAD
      proficiency: proficiency}
<<<<<<< HEAD
<<<<<<< HEAD
    const success = await onAddSkill(newSkill);
    if (success) {
      setSkillName('');
      setProficiency(3)
    }

  const handleEnhanceSkill = (enhancedCategory: string) => {
    setSkillCategory(enhancedCategory)
  },

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react';
import {useState} from 'react';
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

  }
  const handleEnhanceSkill = (enhancedCategory: string) => {}
    setSkillCategory(enhancedCategory)
  }
  };
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { useState } from 'react',;
import { Button } from '@/components/ui/button',;
import { Input } from '@/components/ui/input',;
import { Label } from '@/components/ui/label',;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select',;
import { Skill } from '@/types/resume',;
=======
'
import { useState } from 'react',;'
import { Button } from '@/components/ui/button',;'
import { Input } from '@/components/ui/input',;'
import { Label } from '@/components/ui/label',;'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select',;'
import { Skill } from '@/types/resume',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { AIEnhancementButton } from '@/components/resume-builder/forms/AIEnhancementButton',;



interface AddSkillFormProps {;
  resumeId: string,;
  onAddSkill: (skill: Skill) => Promise<boolean>;
}
;
export const AddSkillForm = ({ resumeId, onAddSkill }: AddSkillFormProps) => {;



    const newSkill: Skill = {;
      name: skillName.trim(),;'
      category: skillCategory || 'Other',;
      proficiency: proficiency},;

    const success = await onAddSkill(newSkill),;


    if (success) {;'
      setSkillName('');
      setProficiency(3);
    }
<<<<<<< HEAD
<<<<<<< HEAD
  },
=======
<<<<<<< HEAD
<<<<<<< HEAD
  },



=======


  },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  
  const handleEnhanceSkill = (enhancedCategory: string) => {}
    setSkillCategory(enhancedCategory)
  },
  
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
=======
  };
  const handleEnhanceSkill = (enhancedCategory: string) => {;
    setSkillCategory(enhancedCategory);
  };
  return (
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  return (
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    <form onSubmit={handleSubmit} className="space-y-4">;
      <div className="flex flex-col gap-4 md:flex-row">;
        <div className="flex-1">;
          <Label htmlFor="skill-name">Skill Name</Label>;
<<<<<<< HEAD
<<<<<<< HEAD
          <Input
            id="skill-name"
            value={skillName}
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


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

          </div>;
          <Select;
            value={skillCategory} 
            onValueChange={setSkillCategory}>;"
            <SelectTrigger id="skill-category">;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
import {Button} from '@/components / ui / button';
import {Input} from '@/components / ui / input';
import {Label} from '@/components / ui / label';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components / ui / select';
import {Skill} from '@/types / resume';
=======
'
import {Button} from '@/components / ui / button';'
import {Input} from '@/components / ui / input';'
import {Label} from '@/components / ui / label';'
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components / ui / select';'
import {Skill} from '@/types / resume';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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


                currentContent={skillName}"
                enhancementType="general";
                onEnhanced={handleEnhanceSkill}
"
              <SelectValue placeholder="Select category" />;
=======
      proficiency: proficiency}  return (  return (
    <form onSubmit={handleSubmit} className="space-y-4">;
      <div className="flex flex-col gap-4 md:flex-row">;
        <div className="flex-1">;
          <Label htmlFor="skill-name">Skill Name</Label>;              <SelectValue placeholder="Select category" />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      proficiency: proficiency}  return (  return (
    <form onSubmit={handleSubmit} className="space-y-4">;
      <div className="flex flex-col gap-4 md:flex-row">;
        <div className="flex-1">;
          <Label htmlFor="skill-name">Skill Name</Label>;              <SelectValue placeholder="Select category" />;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            </SelectTrigger>;
            <SelectContent>;"
              <SelectItem value="Programming">Programming</SelectItem>;"
              <SelectItem value="Design">Design</SelectItem>;"
              <SelectItem value="Soft Skills">Soft Skills</SelectItem>;"
              <SelectItem value="DevOps">DevOps</SelectItem>;"
              <SelectItem value="Data Science">Data Science</SelectItem>;

<<<<<<< HEAD
              <SelectItem value="AI / ML">AI / ML</SelectItem>;}
=======

"
              <SelectItem value="Management">Management</SelectItem>;"
              <SelectItem value="Other">Other</SelectItem>;
            </SelectContent>;
          </Select>;
        </div>;


},



              min={1}
              max={5}
              value={proficiency}
              onChange={(e) => setProficiency(Number(e.target.value))}"
              className="w-20"
            />"
            <Button type="submit">Add</Button>
          </div>
        </div>
      </div>
    </form>
  )
              on_change={(e) => set_proficiency (Number (e.target.value))}"
              className="w - 20";


}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

},
};
},
<<<<<<< HEAD
              on_change={(e) => set_proficiency (Number (e.target.value))}
<<<<<<< HEAD
<<<<<<< HEAD
              className="w - 20";
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
              className="w-20";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
              className="w-20";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            />;
=======
              on_change={(e) => set_proficiency (Number (e.target.value))}"
              className="w - 20";

            />;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <Button type="submit">Add</Button>;
          </div>;
        </div>;
      </div>;

<<<<<<< HEAD
    </form>);}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
},
};
},
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
},
};
},
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
},
};
},
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
}




'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
