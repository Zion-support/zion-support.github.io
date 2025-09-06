<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
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
=======
import { useState, useEffect  } from './react';
import { Skill  } from '@/types / resume';
import { SkillCategory  } from './SkillCategory';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
interface SkillsListProps {
=======
  >({});interface SkillsListProps {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  skills: Skill[];
  onDeleteSkill: (id: string, category: string) => Promise < void>;

}
export const SkillsList = ({ skills, onDeleteSkill }: SkillsListProps) =>: any {
  const [skillsByCategory, setSkillsByCategory] = useState<;
    Record < string, Skill[]>;
  >({});interface SkillsListProps {
=======
import { useState, useEffect } from "react";"
import { Skill } from "@/types/resume";"
import { SkillCategory } from "./SkillCategory";
interface SkillsListProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  skills: Skill[];
=======
import { useState, useEffect } from "react";
import { Skill } from "@/types/resume";
import { SkillCategory } from "./SkillCategory";
interface SkillsListProps {
  skills: Skill[];
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  onDeleteSkill: (id: string, category: string) => Promise<void>;
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export const SkillsList = ({ skills, onDeleteSkill }: SkillsListProps) => {
=======
export const SkillsList = ({ skills, onDeleteSkill }: SkillsListProps) => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const [skillsByCategory, setSkillsByCategory] = useState<
    Record<string, Skill[]>;
  >({});
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> main
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  useEffect(() => {
    // Group skills by category
    const grouped = skills.reduce(
      (acc, skill) => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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


=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
=======
    return null
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

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
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
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
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  )
};
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


  );



  );

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  );
  );
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
  return (
<<<<<<< HEAD
    <div className="space-y-6">;
      <h3 className="text - md font-medium">Your Skills</h3>;
      <div className="space-y-4">;
=======
  return ("
    <div className="space - y-6">;"
      <h3 className="text - md font - medium">Your Skills</h3>;"
      <div className="space - y-4">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    <div className="space - y-6">;
      <h3 className="text - md font - medium">Your Skills</h3>;
      <div className="space - y-4">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
;
=======
;



"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
;
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
