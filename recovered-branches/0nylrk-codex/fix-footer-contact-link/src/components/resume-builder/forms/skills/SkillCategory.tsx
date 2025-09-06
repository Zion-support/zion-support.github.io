import { SkillCategoryProps  } from './types';
import { SkillItem  } from './SkillItem';
export const SkillCategory = ({
  category
  skills
  onDelete
}: SkillCategoryProps) => {

<<<<<<< HEAD
  if (!skills |skills.length === 0) return null;
=======
<<<<<<< HEAD
<<<<<<< HEAD
  if (!skills |skills.length === 0) return null;
=======
import {SkillCategoryProps} from './types';
import {SkillItem} from './SkillItem';
export const SkillCategory = ({ category, skills, onDelete }: SkillCategoryProps) => {;
  if (!skills || skills.length === 0) return null;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import { SkillCategoryProps } from './types',
import { SkillItem } from './SkillItem',
export const SkillCategory = ({ category, skills, onDelete }: SkillCategoryProps) => {
  if (!skills || skills.length === 0) return null,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
  );
}

=======
<<<<<<< HEAD
      </div>
    </div>
<<<<<<< HEAD
  );
}

=======

  )
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
      </div>;
    </div>;
  );
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
            on_delete={on_delete}
          />))}
      </div>;
    </div>);
}
;
