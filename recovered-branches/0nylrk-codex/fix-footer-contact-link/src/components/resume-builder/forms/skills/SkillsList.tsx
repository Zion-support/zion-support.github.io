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

import { useState, useEffect  } from 'react';
import { Skill  } from '@/types/resume';
import { SkillCategory } from './SkillCategory';
import { useState, useEffect  } from 'react';
import { Skill  } from '@/types/resume';
import { SkillCategory } from './SkillCategory';
import {useState, useEffect} from 'react';
import {Skill} from '@/types/resume';
import {SkillCategory} from './SkillCategory';

import { useState, useEffect } from "react";
import { Skill } from "@/types/resume";
import { SkillCategory } from "./SkillCategory";
import { useState, useEffect  } from './react';
import { Skill  } from '@/types / resume';
import { SkillCategory  } from './SkillCategory';
interface SkillsListProps {
  >({});interface SkillsListProps {
  skills: Skill[];
  onDeleteSkill: (id: string, category: string) => Promise < void>;

}
export const SkillsList = ({ skills, onDeleteSkill }: SkillsListProps) =>: any {
  const [skillsByCategory, setSkillsByCategory] = useState<;
    Record < string, Skill[]>;
  >({});interface SkillsListProps {
import { useState, useEffect } from "react";"
import { Skill } from "@/types/resume";"
import { SkillCategory } from "./SkillCategory";
interface SkillsListProps {}
  skills: Skill[];
import { useState, useEffect } from "react";
import { Skill } from "@/types/resume";
import { SkillCategory } from "./SkillCategory";
interface SkillsListProps {
  skills: Skill[];
  onDeleteSkill: (id: string, category: string) => Promise<void>;
}

export const SkillsList = ({ skills, onDeleteSkill }: SkillsListProps) => {
  const [skillsByCategory, setSkillsByCategory] = useState<
    Record<string, Skill[]>;
  >({});
export const SkillsList = ({ skills, onDeleteSkill }: SkillsListProps) => {;
  const [skillsByCategory, setSkillsByCategory] = useState<Record<string, Skill[]>>({});
export const SkillsList = ({ skills, onDeleteSkill }: SkillsListProps) => {
  const [skillsByCategory, setSkillsByCategory] = useState<
    Record<string, Skill[]>
  >({});


  useEffect(() => {
    // Group skills by category
    const grouped = skills.reduce(
      (acc, skill) => {
        const category = skill.category |"Other";
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push (skill);
        return acc;
}
      {} as Record<string, Skill[]>
    return null
        const category = skill.category || "Other";
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(skill);
        return acc;
      },
      {} as Record<string, Skill[]>,
    );
    return null

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
      }    return null;
        const category = skill.category || "Other";
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(skill);
        return acc;
      },
      {} as Record<string, Skill[]>,
    );

    setSkillsByCategory(grouped);
  }, [skills]);

  if (Object.keys(skillsByCategory).length === 0) {
    return null;
  }
return null

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

  }

  return (
    <div className="space-y-6">
      <h3 className="text-md font-medium">Your Skills</h3>
    return null;
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
      </div>
    </div>
  );
}

  )
      </div>;
    </div>;
  );
      </div>
    </div>
  );
};
  );
  )
};

  );

  );

  );
  );
};
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
return (
<div className="space-y-6">;
      <h3 className="text - md font-medium">Your Skills</h3>;
      <div className="space-y-4">;
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

