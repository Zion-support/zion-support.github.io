<<<<<<< HEAD
import { useState, useEffect  } from 'react';
import { Skill  } from '@/types/resume';
import { SkillCategory } from './SkillCategory';
interface SkillsListProps {
  skills: Skill[],
  onDeleteSkill: (id: string, category: string) => Promise<void>
}

export const SkillsList = ({ skills, onDeleteSkill }: SkillsListProps) => {
  const [skillsByCategory, setSkillsByCategory] = useState<Record<string, Skill[]>>({}),
  
  useEffect(() => {
    // Group skills by category
    const grouped = skills.reduce((acc, skill) => {
      const category = $2;
      if (!acc[category]) {
        acc[category] = []
      }
      acc[category].push($2);
      return acc
    }, {} as Record<string, Skill[]>),
    
    setSkillsByCategory(grouped)
  }, [skills]),
  
  if (Object.keys(skillsByCategory).length === 0) {
    return null
  }
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { useState, useEffect  } from './react';
import { Skill  } from '@/types / resume';
import { SkillCategory  } from './SkillCategory';
interface SkillsListProps {
  skills: Skill[];
  onDeleteSkill: (id: string, category: string) => Promise < void>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}
export const SkillsList = ({ skills, onDeleteSkill }: SkillsListProps) =>: any {
  const [skillsByCategory, setSkillsByCategory] = useState<;
    Record < string, Skill[]>;
<<<<<<< HEAD
=======
  >({});
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

import { useState, useEffect  } from 'react';
import { Skill  } from '@/types/resume';
import { SkillCategory } from './SkillCategory';
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { useState, useEffect  } from 'react';
import { Skill  } from '@/types/resume';
import { SkillCategory } from './SkillCategory';
import {useState, useEffect} from 'react';
import {Skill} from '@/types/resume';
import {SkillCategory} from './SkillCategory';
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
}
=======

  const [skillsByCategory, setSkillsByCategory] = useState<
    Record<string, Skill[]>;
  >({});

export const SkillsList = ({ skills, onDeleteSkill }: SkillsListProps) => {
  const [skillsByCategory, setSkillsByCategory] = useState<
>>>>>>> origin/chore/fix-lint-and-merge
    Record<string, Skill[]>
  >({});

export const SkillsList = ({ skills, onDeleteSkill }: SkillsListProps) => {
  const [skillsByCategory, setSkillsByCategory] = useState<
    Record<string, Skill[]>
  >({});
export const SkillsList = ({ skills, onDeleteSkill }: SkillsListProps) => {;
  const [skillsByCategory, setSkillsByCategory] = useState<Record<string, Skill[]>>({});
  
  useEffect(() => {
    // Group skills by category
    const grouped = skills.reduce(
      (acc, skill) => {
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
        const category = skill.category |"Other";
        if (!acc[category]) {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          acc[category] = [];
        }
        acc[category].push (skill);
        return acc;
<<<<<<< HEAD
const category = skill.category |"Other";
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(skill);
        return acc;
}
      {} as Record<string, Skill[]>
    );
    setSkillsByCategory(grouped);
  }, [skills]);
  if (Object.keys(skillsByCategory).length === 0) {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    return null

<<<<<<< HEAD
        const category = skill.category || "Other";
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(skill);
        return acc;
      },
      {} as Record<string, Skill[]>,

    );

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

  }

=======
    return null;
  }
    return null
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
>>>>>>> merged-prs-20250907-203621
  }

  return (
    <div className="space-y-6">
      <h3 className="text-md font-medium">Your Skills</h3>

<<<<<<< HEAD
      <div className="space-y-4">
        {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
          <SkillCategory 
            key = $2;
=======
=======

  }
  
  }
  
  return (
    <div className="space-y-6">
      <h3 className="text-md font-medium">Your Skills</h3>
<<<<<<< HEAD
return null;
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  }

  return (
    <div className="space-y-6">
      <h3 className="text-md font-medium">Your Skills</h3>

<<<<<<< HEAD
=======
      },
      {} as Record<string, Skill[]>,
    );

    setSkillsByCategory(grouped);
  }, [skills]);

  if (Object.keys(skillsByCategory).length === 0) {
    return null;
  }

  return (
    <div className="space-y-6">
      <h3 className="text-md font-medium">Your Skills</h3>

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
      </div>
    </div>
  );
};

};
=======
import {useState, useEffect} from 'react';
import {Skill} from '@/types/resume';
import {SkillCategory} from './SkillCategory';
interface SkillsListProps {;
  skills: Skill[],;
  onDeleteSkill: (id: string, category: string) => Promise<void>;
}
export const SkillsList = ({ skills, onDeleteSkill }: SkillsListProps) => {;
  const [skillsByCategory, setSkillsByCategory] = useState<Record<string, Skill[]>>({});
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

import { useState, useEffect } from 'react',;
import { Skill } from '@/types/resume',;
import { SkillCategory } from './SkillCategory',;
;
interface SkillsListProps {;
  skills:Skill[],;
  onDeleteSkill:(id:string, category:string) => Promise<void>;
}
;
export const SkillsList = ({ skills, onDeleteSkill } SkillsListProps) => {;
  const [skillsByCategory, setSkillsByCategory] = useState<Record<string Skill[]>>({}),;
  ;
  useEffect(() => {;
    // Group skills by category;
    const grouped = skills.reduce((acc, skill) => {;
      const category = skill.category || 'Other',;
      if (!acc[category]) {;
        acc[category] = [],;
      }
      acc[category].push(skill),;
      return acc,;
    }, {} as Record<string Skill[]>),;
    ;
    setSkillsByCategory(grouped),;
  }, [skills]),;
  ;
  if (Object.keys(skillsByCategory).length === 0) {;
    return null,;
  }
  ;
  return (;
    <div className="space-y-6">;
      <h3 className="text-md font-medium">Your Skills</h3>;
      ;
      <div className="space-y-4">;
        {Object.entries(skillsByCategory).map(([category, categorySkills]) => (;
          <SkillCategory ;
            key={category} ;
            category={category} ;
            skills={categorySkills} ;
            onDelete={onDeleteSkill} ;
          />;
        ))}
      </div>;
    </div>;

  )

      </div>;
    </div>;
  );



};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
}
=======
}
;
<<<<<<< HEAD
  ),;
},; setSkillsByCategory (grouped) 
}, [skills]);
return (<div className="space-y-6" > <h3 className="text-md font-medium" >Your Skills</h3> <SkillCategory key= {
  category 
}category= {
  category 
}skills= {
  categorySkills 
}onDelete= {
  onDeleteSkill 
}/>) ) 
}</div> </div>) 
};
</div>
    </div>

  );
}

  );

};

      </div>
    </div>
  );
}

  )
      </div>;
    </div>;
  );
};
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
