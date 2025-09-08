
import { useState  } from 'react';
import { Button  } from '@/components/ui/button';
import { Input  } from '@/components/ui/input';
import { Label  } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue  } from '@/components/ui/select';
import { Skill  } from '@/types/resume';
import { AIEnhancementButton } from '@/components/resume-builder/forms/AIEnhancementButton';interface AddSkillFormProps {

interface AddSkillFormProps {}
  resumeId: string;
  onAddSkill: (skill: Skill) => Promise<boolean>
}

export const AddSkillForm = ({ resumeId, onAddSkill }: AddSkillFormProps) => {;

  const [skillName, setSkillName] = useState('');

  const [skillCategory, setSkillCategory] = useState('');
  const [proficiency, setProficiency] = useState<number>(3);
  const handleSubmit = async (e: React.FormEvent) => {}
    e.preventDefault();
    if (!skillName.trim()) return;
    const newSkill: Skill = {}
      name: skillName.trim()'
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df