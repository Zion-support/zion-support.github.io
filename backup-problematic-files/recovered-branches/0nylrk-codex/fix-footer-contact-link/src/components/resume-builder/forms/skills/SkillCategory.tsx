<<<<<<< HEAD
import { SkillCategoryProps  } from './types';
import { SkillItem  } from './SkillItem';
export const SkillCategory = ({
  category,
  skills,
  on_delete,
}: SkillCategoryProps) =>: any {
  // Check condition
if (return null) {
  $2
}
  return (
    <div className="space - y-2">;
      <h4 className="text - sm font - medium text - muted - foreground">{category}</h4>;
      <div className="flex flex - wrap gap - 2">;
        {skills.map ((skill) => (
          <SkillItem;
            key={skill.id}
            skill={skill}
            category={category}
import {SkillCategoryProps} from './types';
import {SkillItem} from './SkillItem';
export const SkillCategory = ({ category, skills, onDelete }: SkillCategoryProps) => {;
  if (!skills || skills && skills.length === 0) return null;
  return (
    <div className="space-y-2">;
      <h4 className="text-sm font-medium text-muted-foreground">{category}</h4>;
      <div className="flex flex-wrap gap-2">;
        {skills && skills.map((skill) => (;
          <SkillItem
            key={skill && skill.id} 
            skill={skill} 
            category={category} 
            onDelete={onDelete} 
=======

import { SkillCategoryProps } from './types',;
import { SkillItem } from './SkillItem',;
;
export const SkillCategory = ({ category, skills, onDelete } SkillCategoryProps) => {;
  if (!skills || skills.length === 0) return null,;
  ;
  return (;
    <div className="space-y-2">;
      <h4 className="text-sm font-medium text-muted-foreground">{category}</h4>;
      <div className="flex flex-wrap gap-2">;
        {skills.map((skill) => (;
          <SkillItem ;
            key={skill.id} ;
            skill={skill} ;
            category={category} ;
            onDelete={onDelete} ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          />;
        ))}
      </div>;
    </div>;
<<<<<<< HEAD
  );
};
            on_delete={on_delete}
          />))}
      </div>;
    </div>);
}
;
=======
  ),;
},; <SkillItem key= {
  skill.id 
}skill= {
  skill 
}category= {
  category 
}onDelete= {
  onDelete 
}/>) ) 
}</div> </div>) 
};
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
