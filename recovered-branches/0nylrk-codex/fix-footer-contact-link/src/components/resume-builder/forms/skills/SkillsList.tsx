<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import { useState, useEffect  } from './react';
import { Skill  } from '@/types / resume';
import { SkillCategory  } from './SkillCategory';
interface SkillsListProps {
  skills: Skill[];
  onDeleteSkill: (id: string, category: string) => Promise < void>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
export const SkillsList = ({ skills, onDeleteSkill }: SkillsListProps) =>: any {
  const [skillsByCategory, setSkillsByCategory] = useState<;
    Record < string, Skill[]>;
  >({});

<<<<<<< HEAD
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


import {useState, useEffect} from 'react';
import {Skill} from '@/types/resume';
import {SkillCategory} from './SkillCategory';

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface SkillsListProps {
  skills: Skill[];
  onDeleteSkill: (id: string, category: string) => Promise<void>
}


export const SkillsList = ({ skills, onDeleteSkill }: SkillsListProps) => {;
  const [skillsByCategory, setSkillsByCategory] = useState<Record<string, Skill[]>>({});
  


<<<<<<< HEAD
export const SkillsList = ({ skills, onDeleteSkill }: SkillsListProps) => {
  const [skillsByCategory, setSkillsByCategory] = useState<
    Record<string, Skill[]>
  >({});
export const SkillsList = ({ skills, onDeleteSkill }: SkillsListProps) => {;
  const [skillsByCategory, setSkillsByCategory] = useState<Record<string, Skill[]>>({});
  
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  useEffect(() => {
    // Group skills by category
    const grouped = skills.reduce(
      (acc, skill) => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
        const category = skill.category |"Other";
        if (!acc[category]) {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        const category = skill.category |"Other";
        if (!acc[category]) {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          acc[category] = [];
        }
        acc[category].push (skill);
        return acc;
<<<<<<< HEAD
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

    return null;
  }
    return null
=======


    return null

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  }
  
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  
  return (
    <div className="space-y-6">
      <h3 className="text-md font-medium">Your Skills</h3>
<<<<<<< HEAD
<<<<<<< HEAD
return null;
  }
  }

  return (
    <div className="space-y-6">
      <h3 className="text-md font-medium">Your Skills</h3>

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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="space-y-4">
        {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
          <SkillCategory
            key={category}
            category={category}
            skills={categorySkills}
            onDelete={onDeleteSkill}
          />
        ))}

import {useState, useEffect} from 'react';
import {Skill} from '@/types/resume';
import {SkillCategory} from './SkillCategory';
interface SkillsListProps {;
  skills: Skill[],;
  onDeleteSkill: (id: string, category: string) => Promise<void>;
}
<<<<<<< HEAD
export const SkillsList = ({ skills, onDeleteSkill }: SkillsListProps) => {;
  const [skillsByCategory, setSkillsByCategory] = useState<Record<string, Skill[]>>({});
=======

export const SkillsList = ({ skills, onDeleteSkill }: SkillsListProps) => {;
  const [skillsByCategory, setSkillsByCategory] = useState<Record<string, Skill[]>>({});

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
    setSkillsByCategory(grouped);
  }, [skills]);
  if (Object && Object.keys(skillsByCategory).length === 0) {;
    return null;
  }
  return (
    <div className="space-y-6">;
      <h3 className="text-md font-medium">Your Skills</h3>;
=======

    setSkillsByCategory(grouped);
  }, [skills]);

  if (Object && Object.keys(skillsByCategory).length === 0) {;
    return null;
  }

  return (
    <div className="space-y-6">;
      <h3 className="text-md font-medium">Your Skills</h3>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="space-y-4">;
        {Object && Object.entries(skillsByCategory).map(([category, categorySkills]) => (;
          <SkillCategory
            key={category} 
            category={category} 
            skills={categorySkills} 
            onDelete={onDeleteSkill} 
<<<<<<< HEAD

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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          />;
        ))}
      </div>;
    </div>;
<<<<<<< HEAD

  )

      </div>;
    </div>;
  );



};
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
=======
  );
=======

  )

=======
      </div>;
    </div>;
  );



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
};
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
