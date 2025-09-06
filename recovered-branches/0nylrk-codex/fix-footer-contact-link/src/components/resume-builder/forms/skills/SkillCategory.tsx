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

=======
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

import {SkillCategoryProps} from './types';
import {SkillItem} from './SkillItem';
export const SkillCategory = ({ category, skills, onDelete }: SkillCategoryProps) => {;
  if (!skills || skills.length === 0) return null;
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { SkillCategoryProps } from './types',
import { SkillItem } from './SkillItem',
export const SkillCategory = ({ category, skills, onDelete }: SkillCategoryProps) => {
  if (!skills || skills.length === 0) return null,
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
          />;
        ))}
      </div>;
    </div>;
  );
=======

=======
  
=======
import { SkillCategoryProps } from "./types";
import { SkillItem } from "./SkillItem";
export const SkillCategory = ({
  category,
  skills,
  onDelete,
}: SkillCategoryProps) => {
  if (!skills || skills.length === 0) return null;

>>>>>>> main
  return (
    <div className="space-y-2">
      <h4 className="text-sm font-medium text-muted-foreground">{category}</h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillItem
            key={skill.id}
            skill={skill}
            category={category}
            onDelete={onDelete}
          />
        ))}
<<<<<<< HEAD
      </div>
    </div>
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  )

      </div>;
    </div>;
  );
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
  );
>>>>>>> main
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
            on_delete={on_delete}
          />))}
      </div>;
    </div>);
}
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
import { SkillCategoryProps } from "./types";
import { SkillItem } from "./SkillItem";
export const SkillCategory = ({
category
  skills
  onDelete
}: SkillCategoryProps) => {

  if (!skills |skills.length === 0) return null;

  category,
  skills,
  onDelete,
}: SkillCategoryProps) => {
  if (!skills || skills.length === 0) return null;

  
  return (
    <div className="space-y-2">
      <h4 className="text-sm font-medium text-muted-foreground">{category}</h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillItem
            key={skill.id}
            skill={skill}
            category={category}
            onDelete={onDelete}
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
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
