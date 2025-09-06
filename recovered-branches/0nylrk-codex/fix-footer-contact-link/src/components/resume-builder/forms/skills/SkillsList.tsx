
<<<<<<< HEAD
import { useState, useEffect  } from './react';
import { Skill  } from '@/types / resume';
import { SkillCategory  } from './SkillCategory';
interface SkillsListProps {
  skills: Skill[];
  onDeleteSkill: (id: string, category: string) => Promise < void>;

}
export const SkillsList = ({ skills, onDeleteSkill }: SkillsListProps) =>: any {
  const [skillsByCategory, setSkillsByCategory] = useState<;
    Record < string, Skill[]>;
  >({});



import {useState, useEffect} from 'react';
import {Skill} from '@/types/resume';
import {SkillCategory} from './SkillCategory';

=======
<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect  } from 'react';
import { Skill  } from '@/types/resume';
import { SkillCategory } from './SkillCategory';
=======
import {useState, useEffect} from 'react';
import {Skill} from '@/types/resume';
import {SkillCategory} from './SkillCategory';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
interface SkillsListProps {
  skills: Skill[];
  onDeleteSkill: (id: string, category: string) => Promise<void>
}

<<<<<<< HEAD

export const SkillsList = ({ skills, onDeleteSkill }: SkillsListProps) => {;
  const [skillsByCategory, setSkillsByCategory] = useState<Record<string, Skill[]>>({});
  


=======
<<<<<<< HEAD
export const SkillsList = ({ skills, onDeleteSkill }: SkillsListProps) => {
  const [skillsByCategory, setSkillsByCategory] = useState<
    Record<string, Skill[]>
  >({});
=======
export const SkillsList = ({ skills, onDeleteSkill }: SkillsListProps) => {;
  const [skillsByCategory, setSkillsByCategory] = useState<Record<string, Skill[]>>({});
  
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  useEffect(() => {
    // Group skills by category
    const grouped = skills.reduce(
      (acc, skill) => {
        const category = skill.category |"Other";
        if (!acc[category]) {
=======
;
  useEffect (() => {
    // Group skills by category;
    const grouped = skills.reduce (
      (acc, skill) => {
        const category = skill.category || "Other";
        // Check condition
if ( {) {
  $2
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
          acc[category] = [];
        }
        acc[category].push (skill);
        return acc;
<<<<<<< HEAD


    return null

=======
      }
      {} as Record<string, Skill[]>
    );
    setSkillsByCategory(grouped);
  }, [skills]);
  if (Object.keys(skillsByCategory).length === 0) {
<<<<<<< HEAD
    return null;
  }
=======
    return null
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
import { useState, useEffect } from 'react',;
import { Skill } from '@/types/resume',;
import { SkillCategory } from './SkillCategory',;
interface SkillsListProps {;
  skills: Skill[],;
  onDeleteSkill: (id: string, category: string) => Promise<void>;
}
;
export const SkillsList = ({ skills, onDeleteSkill }: SkillsListProps) => {;
  const [skillsByCategory, setSkillsByCategory] = useState<Record<string Skill[]>>({}),;
  useEffect(() => {;
    // Group skills by category;
    const grouped = skills.reduce((acc, skill) => {;
      const category = skill.category || 'Other',;
      if (!acc[category]) {;
        acc[category] = [];
      }
      acc[category].push(skill),;
      return acc;
    }, {} as Record<string Skill[]>),;
    setSkillsByCategory(grouped);
  }, [skills]);
  if (Object.keys(skillsByCategory).length === 0) {;
    return null;
<<<<<<< HEAD



=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  }
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (
    <div className="space-y-6">
      <h3 className="text-md font-medium">Your Skills</h3>
      <div className="space-y-4">
        {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
          <SkillCategory
            key={category}
            category={category}
            skills={categorySkills}
            onDelete={onDeleteSkill}
          />
        ))}
<<<<<<< HEAD

import {useState, useEffect} from 'react';
import {Skill} from '@/types/resume';
import {SkillCategory} from './SkillCategory';
interface SkillsListProps {;
  skills: Skill[],;
  onDeleteSkill: (id: string, category: string) => Promise<void>;
}

export const SkillsList = ({ skills, onDeleteSkill }: SkillsListProps) => {;
  const [skillsByCategory, setSkillsByCategory] = useState<Record<string, Skill[]>>({});
=======
<<<<<<< HEAD
      </div>
    </div>
<<<<<<< HEAD
  );
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

  useEffect(() => {;
    // Group skills by category;
    const grouped = skills && skills.reduce((acc, skill) => {;
      const category = skill && skill.category || 'Other';
      if (!acc[category]) {;
        acc[category] = [];
      }
      acc[category].push(skill);
      return acc;
    }, {} as Record<string, Skill[]>);

    setSkillsByCategory(grouped);
  }, [skills]);

  if (Object && Object.keys(skillsByCategory).length === 0) {;
    return null;
  }

  return (
    <div className="space-y-6">;
      <h3 className="text-md font-medium">Your Skills</h3>;

      <div className="space-y-4">;
        {Object && Object.entries(skillsByCategory).map(([category, categorySkills]) => (;
          <SkillCategory
            key={category} 
            category={category} 
            skills={categorySkills} 
            onDelete={onDeleteSkill} 
          />;
        ))}
      </div>;
    </div>;
  );
=======

  )
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
      </div>;
    </div>;
  );
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
      },
      {} as Record < string, Skill[]>,
    );
;
    setSkillsByCategory (grouped);
  }, [skills]);
;
  // Check condition
if (.length === 0) {) {
  $2
}
    return null;
  }
  return (
    <div className="space - y-6">;
      <h3 className="text - md font - medium">Your Skills</h3>;
      <div className="space - y-4">;
        {Object.entries (skillsByCategory).map (([category, category_skills]) => (
          <SkillCategory;
            key={category}
            category={category}
            skills={category_skills}
            on_delete={onDeleteSkill}
          />))}
      </div>;
    </div>);
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
