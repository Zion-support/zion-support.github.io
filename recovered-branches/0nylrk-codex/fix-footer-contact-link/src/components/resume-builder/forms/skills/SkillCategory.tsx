import { SkillCategoryProps } from "./types";
import { SkillItem } from "./SkillItem";
export const SkillCategory = ({
  category
  skills
  onDelete
}: SkillCategoryProps) => {

<<<<<<< HEAD
  if (!skills |skills.length === 0) return null;
=======
import { SkillCategoryProps } from './types',
import { SkillItem } from './SkillItem',
export const SkillCategory = ({ category, skills, onDelete }: SkillCategoryProps) => {
  if (!skills || skills.length === 0) return null,
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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

=======
      </div>;
    </div>;
  );
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
