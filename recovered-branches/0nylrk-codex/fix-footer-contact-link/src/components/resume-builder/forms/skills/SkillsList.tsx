
<<<<<<< HEAD
=======
import { useState, useEffect  } from './react';
import { Skill  } from '@/types / resume';
import { SkillCategory  } from './SkillCategory';
interface SkillsListProps {
  skills: Skill[];
  onDeleteSkill: (id: string, category: string) => Promise < void>;
>>>>>>> origin/cursor/delete-old-data-records-6bba

}
export const SkillsList = ({ skills, onDeleteSkill }: SkillsListProps) =>: any {
  const [skillsByCategory, setSkillsByCategory] = useState<;
    Record < string, Skill[]>;

<<<<<<< HEAD
  >({});

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

import { useState, useEffect  } from 'react';
import { Skill  } from '@/types/resume';
import { SkillCategory } from './SkillCategory';


import { useState, useEffect  } from 'react';
import { Skill  } from '@/types/resume';
import { SkillCategory } from './SkillCategory';
import {useState, useEffect} from 'react';
import {Skill} from '@/types/resume';
import {SkillCategory} from './SkillCategory';

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
interface SkillsListProps {

  skills: Skill[];
  onDeleteSkill: (id: string, category: string) => Promise < void>;

}
export const SkillsList = ({ skills, onDeleteSkill }: SkillsListProps) =>: any {
  const [skillsByCategory, setSkillsByCategory] = useState<;
    Record < string, Skill[]>;
  >({});interface SkillsListProps {

  skills: Skill[];

  onDeleteSkill: (id: string, category: string) => Promise<void>;
}

export const SkillsList = ({ skills, onDeleteSkill }: SkillsListProps) => {
<<<<<<< HEAD


  const [skillsByCategory, setSkillsByCategory] = useState<
    Record<string, Skill[]>;
  >({});

export const SkillsList = ({ skills, onDeleteSkill }: SkillsListProps) => {
  const [skillsByCategory, setSkillsByCategory] = useState<

=======
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
    Record<string, Skill[]>
  >({});

  useEffect(() => {
    // Group skills by category
    const grouped = skills.reduce(
      (acc, skill) => {


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          acc[category] = [];
        }
        acc[category].push (skill);
        return acc;
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

    return null


<<<<<<< HEAD
    return null;
  }
    return null

=======
    return null


>>>>>>> origin/cursor/delete-old-data-records-6bba
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
    return null;


<<<<<<< HEAD


=======
  }

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


      },
      {} as Record < string, Skill[]>,
    );
;
    setSkillsByCategory (grouped);
  }, [skills]);
;
  // Check condition;
if (.length === 0) {) {}
  $2;
}
    return null;
  }

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
>>>>>>> origin/cursor/delete-old-data-records-6bba
