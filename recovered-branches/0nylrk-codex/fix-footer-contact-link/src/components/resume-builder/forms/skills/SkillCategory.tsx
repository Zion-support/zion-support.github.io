<<<<<<< HEAD
=======
<<<<<<< HEAD
import { SkillCategoryProps } from "./types";
import { SkillItem } from "./SkillItem";
export const SkillCategory = ({
  category
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
import { SkillCategoryProps  } from './types';
import { SkillItem  } from './SkillItem';
export const SkillCategory = ({

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  category,
  skills,
  on_delete,
}: SkillCategoryProps) =>: any {
  // Check condition
if (return null) {
  $2
}

<<<<<<< HEAD
  if (!skills |skills.length === 0) return null;
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {SkillCategoryProps} from './types';
import {SkillItem} from './SkillItem';
export const SkillCategory = ({ category, skills, onDelete }: SkillCategoryProps) => {;
  if (!skills || skills.length === 0) return null;
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { SkillCategoryProps } from './types',
import { SkillItem } from './SkillItem',
export const SkillCategory = ({ category, skills, onDelete }: SkillCategoryProps) => {
  if (!skills || skills.length === 0) return null,
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
  
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {SkillCategoryProps} from './types';
import {SkillItem} from './SkillItem';
export const SkillCategory = ({ category, skills, onDelete }: SkillCategoryProps) => {;
  if (!skills || skills && skills.length === 0) return null;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  return (
    <div className="space-y-2">
      <h4 className="text-sm font-medium text-muted-foreground">{category}</h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillItem
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            key={skill.id}
            skill={skill}
            category={category}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>

<<<<<<< HEAD
=======
=======
            key={skill && skill.id} 
            skill={skill} 
            category={category} 
            onDelete={onDelete} 
<<<<<<< HEAD

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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          />;
        ))}
      </div>;
    </div>;
<<<<<<< HEAD

  )

      </div>;
    </div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  );

  );

<<<<<<< HEAD
=======
<<<<<<< HEAD
};
=======

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
};
            on_delete={on_delete}
          />))}
      </div>;
    </div>);
}
;
<<<<<<< HEAD
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
>>>>>>> merged-prs-20250907-203621
  skills
  onDelete
}: SkillCategoryProps) => {

<<<<<<< HEAD
import { SkillCategoryProps } from './types';
import { SkillItem } from './SkillItem';
export const SkillCategory = ({ category, skills, onDelete }: SkillCategoryProps) => {
  if (!skills || skills.length = $2;
  return (
    <div className = $2;
=======
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
=======
  );
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  )
      </div>;
    </div>;
  );
};
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            on_delete={on_delete}
          />))}
      </div>;
    </div>);
}
;
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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

  )

<<<<<<< HEAD
};
=======
};
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
