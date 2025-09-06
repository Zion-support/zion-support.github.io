<<<<<<< HEAD
<<<<<<< HEAD
import { SkillCategoryProps  } from './types';
import { SkillItem  } from './SkillItem';
export const SkillCategory = ({
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/SkillCategory.tsx

<<<<<<< HEAD
<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/SkillCategory.tsx
  category,
  skills,
  on_delete,
}: SkillCategoryProps) =>: any {
  // Check condition
if (return null) {
  $2
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/SkillCategory.tsx

=======

=======
  if (!skills |skills.length === 0) return null;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import {SkillCategoryProps} from './types';
import {SkillItem} from './SkillItem';
export const SkillCategory = ({ category, skills, onDelete }: SkillCategoryProps) => {;
  if (!skills || skills.length === 0) return null;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { SkillCategoryProps } from './types',
import { SkillItem } from './SkillItem',
export const SkillCategory = ({ category, skills, onDelete }: SkillCategoryProps) => {
  if (!skills || skills.length === 0) return null,
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/SkillCategory.tsx
  return (
    <div className="space - y-2">;
      <h4 className="text - sm font - medium text - muted - foreground">{category}</h4>;
      <div className="flex flex - wrap gap - 2">;
        {skills.map ((skill) => (
          <SkillItem;
            key={skill.id}
            skill={skill}
            category={category}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/SkillCategory.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/SkillCategory.tsx
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
<<<<<<< HEAD

=======
      </div>;
    </div>;
<<<<<<< HEAD
  );
=======

  )

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      </div>;
    </div>;
  );

<<<<<<< HEAD
};

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
};
            on_delete={on_delete}
          />))}
      </div>;
    </div>);
}
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/SkillCategory.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/SkillCategory.tsx
=======
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

=======
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

  );
}

  );

};

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
      </div>
    </div>
  );
}

  )
      </div>;
    </div>;
  );
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
