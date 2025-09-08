
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {SkillCategoryProps} from './types';
import {SkillItem} from './SkillItem';
export const SkillCategory = ({ category, skills, onDelete }: SkillCategoryProps) => {;
  if (!skills || skills.length === 0) return null;

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { SkillCategoryProps } from './types',
import { SkillItem } from './SkillItem',
export const SkillCategory = ({ category, skills, onDelete }: SkillCategoryProps) => {
  if (!skills || skills.length === 0) return null,


<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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


>>>>>>> origin/cursor/delete-old-data-records-6bba
  return (
    <div className="space-y-2">
      <h4 className="text-sm font-medium text-muted-foreground">{category}</h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillItem

<<<<<<< HEAD
            key={skill && skill.id} 
            skill={skill} 
            category={category} 
            onDelete={onDelete} 

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            on_delete={on_delete}
          />))}
      </div>;
    </div>);
}
;

<<<<<<< HEAD




=======
};
>>>>>>> origin/cursor/delete-old-data-records-6bba
