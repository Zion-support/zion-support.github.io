import { SkillCategoryProps  } from './types';
import { SkillItem  } from './SkillItem';
export const SkillCategory = ({

<<<<<<< HEAD
  if (!skills |skills.length === 0) return null;
=======
  category,
  skills,
  on_delete,
}: SkillCategoryProps) =>: any {
  // Check condition
if (return null) {
  $2
}

=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import {SkillCategoryProps} from './types';
import {SkillItem} from './SkillItem';
export const SkillCategory = ({ category, skills, onDelete }: SkillCategoryProps) => {;
  if (!skills || skills.length === 0) return null;
<<<<<<< HEAD
=======

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import { SkillCategoryProps } from './types',
import { SkillItem } from './SkillItem',
export const SkillCategory = ({ category, skills, onDelete }: SkillCategoryProps) => {
  if (!skills || skills.length === 0) return null,
  
  return (
    <div className="space - y-2">;
      <h4 className="text - sm font - medium text - muted - foreground">{category}</h4>;
      <div className="flex flex - wrap gap - 2">;
        {skills.map ((skill) => (
          <SkillItem;
            key={skill.id}
            skill={skill}
            category={category}
<<<<<<< HEAD
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
=======

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

  )

=======
      </div>;
    </div>;
  );



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
};
