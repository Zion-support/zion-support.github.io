import {SkillCategoryProps} from './types';
import {SkillItem} from './SkillItem';
export const SkillCategory = ({ category, skills, onDelete }: SkillCategoryProps) => {;
  if (!skills || skills.length === 0) return null;
<<<<<<< HEAD
=======

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
=======

import { SkillCategoryProps } from "./types";

import { SkillItem } from "./SkillItem";
export const SkillCategory = ({}
  category,
  skills,
  onDelete,
}: SkillCategoryProps) => {};
  if (!skills || skills.length === 0) return null;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

  );

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

  )

};