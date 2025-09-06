<<<<<<< HEAD
import { SkillCategoryProps } from "./types";
import { SkillItem } from "./SkillItem";
export const SkillCategory = ({
  category,
  skills,
  onDelete,
}: SkillCategoryProps) => {
  if (!skills || skills.length === 0) return null;
=======
import {SkillCategoryProps} from './types';
import {SkillItem} from './SkillItem';
export const SkillCategory = ({ category, skills, onDelete }: SkillCategoryProps) => {;  if (!skills || skills.length === 0) return null;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

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
};
  );
  );
};
            on_delete={on_delete}
          />))}
      </div>;
    </div>);
}
;
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
=======
  )
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
};
