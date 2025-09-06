<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

import { useState, useEffect  } from 'react';
import { Skill  } from '@/types/resume';
import { SkillCategory } from './SkillCategory';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { useState, useEffect  } from 'react';
import { Skill  } from '@/types/resume';
import { SkillCategory } from './SkillCategory';
import {useState, useEffect} from 'react';
import {Skill} from '@/types/resume';
import {SkillCategory} from './SkillCategory';
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
=======
import { useState, useEffect } from "react";
import { Skill } from "@/types/resume";
import { SkillCategory } from "./SkillCategory";
>>>>>>> main
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import { useState, useEffect } from "react";
import { Skill } from "@/types/resume";
import { SkillCategory } from "./SkillCategory";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
interface SkillsListProps {
  skills: Skill[];
  onDeleteSkill: (id: string, category: string) => Promise<void>;
}

<<<<<<< HEAD
<<<<<<< HEAD
export const SkillsList = ({ skills, onDeleteSkill }: SkillsListProps) => {
  const [skillsByCategory, setSkillsByCategory] = useState<
    Record<string, Skill[]>
  >({});
export const SkillsList = ({ skills, onDeleteSkill }: SkillsListProps) => {;
  const [skillsByCategory, setSkillsByCategory] = useState<Record<string, Skill[]>>({});
  
=======
<<<<<<< HEAD
<<<<<<< HEAD

export const SkillsList = ({ skills, onDeleteSkill }: SkillsListProps) => {;
  const [skillsByCategory, setSkillsByCategory] = useState<Record<string, Skill[]>>({});
  


=======
<<<<<<< HEAD
export const SkillsList = ({ skills, onDeleteSkill }: SkillsListProps) => {;
  const [skillsByCategory, setSkillsByCategory] = useState<Record<string, Skill[]>>({});
  
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
export const SkillsList = ({ skills, onDeleteSkill }: SkillsListProps) => {
  const [skillsByCategory, setSkillsByCategory] = useState<
    Record<string, Skill[]>
  >({});
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> main
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  useEffect(() => {
    // Group skills by category
    const grouped = skills.reduce(
      (acc, skill) => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
      }
      {} as Record<string, Skill[]>
=======


    return null

=======
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
        const category = skill.category || "Other";
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(skill);
        return acc;
      },
      {} as Record<string, Skill[]>,
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    );

    setSkillsByCategory(grouped);
  }, [skills]);

  if (Object.keys(skillsByCategory).length === 0) {
    return null;
  }
<<<<<<< HEAD
    return null
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    return null

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc



  }
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (
    <div className="space-y-6">
      <h3 className="text-md font-medium">Your Skills</h3>
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
    return null;
>>>>>>> main
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  }
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

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
<<<<<<< HEAD
<<<<<<< HEAD
      </div>
    </div>
  );
}

  )
      </div>;
    </div>;
  );
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
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

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
      </div>
    </div>
  );
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
  );
>>>>>>> main
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  );
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
