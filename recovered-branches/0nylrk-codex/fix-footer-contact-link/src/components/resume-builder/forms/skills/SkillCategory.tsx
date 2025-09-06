import { SkillCategoryProps  } from './types';
import { SkillItem  } from './SkillItem';
export const SkillCategory = ({

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  category,
  skills,
  on_delete,
}: SkillCategoryProps) =>: any {
  // Check condition
if (return null) {
  $2
}


<<<<<<< HEAD
=======
import {SkillCategoryProps} from './types';
import {SkillItem} from './SkillItem';
export const SkillCategory = ({ category, skills, onDelete }: SkillCategoryProps) => {;
  if (!skills || skills.length === 0) return null;

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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

            onDelete={onDelete}
          />
        ))}
<<<<<<< HEAD
      </div>
    </div>


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
};
