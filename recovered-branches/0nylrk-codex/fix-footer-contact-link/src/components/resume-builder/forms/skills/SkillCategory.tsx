import { SkillCategoryProps } from "./types";
import { SkillItem } from "./SkillItem";
export const SkillCategory = ({
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
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
