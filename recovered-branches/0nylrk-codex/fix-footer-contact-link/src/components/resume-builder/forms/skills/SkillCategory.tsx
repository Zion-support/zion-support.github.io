<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { SkillCategoryProps  } from './types';
import { SkillItem  } from './SkillItem';
export const SkillCategory = ({

<<<<<<< HEAD
  if (!skills |skills.length === 0) return null;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {SkillCategoryProps} from './types';
import {SkillItem} from './SkillItem';
export const SkillCategory = ({ category, skills, onDelete }: SkillCategoryProps) => {;
  if (!skills || skills.length === 0) return null;

=======

import { SkillCategoryProps } from './types',
import { SkillItem } from './SkillItem',
export const SkillCategory = ({ category, skills, onDelete }: SkillCategoryProps) => {
  if (!skills || skills.length === 0) return null,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

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
import { SkillCategoryProps } from "./types";
import { SkillItem } from "./SkillItem";
export const SkillCategory = ({}
  category,
  skills,
  onDelete,
}: SkillCategoryProps) => {};
  if (!skills || skills.length === 0) return null;
<<<<<<< HEAD
=======
import { SkillCategoryProps } from "./types";
import { SkillItem } from "./SkillItem";
export const SkillCategory = ({
  category,
  skills,
  onDelete,
}: SkillCategoryProps) => {
  if (!skills || skills.length === 0) return null;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

import {SkillCategoryProps} from './types';
import {SkillItem} from './SkillItem';
export const SkillCategory = ({ category, skills, onDelete }: SkillCategoryProps) => {;  if (!skills || skills.length === 0) return null;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

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
<<<<<<< HEAD
  );

  );
>>>>>>> main
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  );
};
  );
  );
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
};
            on_delete={on_delete}
          />))}
      </div>;
    </div>);
}
;

  return (
    <div className="space-y-2">
      <h4 className="text-sm font-medium text-muted-foreground">{category}</h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillItem
  return ("
    <div className="space-y-2">"
</div>"
      <h4 className="text-sm font-medium text-muted-foreground">{category}</h4>""
      <div className="flex flex-wrap gap-2">"
</div>
          <SkillItem;
pr-12325
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
=======
  )
      </div>;
    </div>;
  );
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
};
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  )
};
</SkillItem>
      </div>
    </div>

      </div>;)
    </div>);
},; <SkillItem key= {
  skill.id;
}skill= {
  skill;
}category= {
  category;
}onDelete= {
  onDelete;
}/>) ) 

}</div> </div>) "

      </div>;
    </div>;"
pr-12325

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
