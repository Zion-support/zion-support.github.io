

export const _SkillCategory = (_{_category, _skills, _onDelete}: SkillCategoryProps) => {_if (!skills || skills.length === 0) return null;
  
  return (_<div className="space-y-2">
      <h4 className="text-sm font-medium text-muted-foreground">{category}</h4>
      <div className="flex flex-wrap gap-2">
        {_skills.map((skill) => (
          <SkillItem 
            key={skill.id} 
            skill={_skill} 
            category={_category} 
            onDelete={_onDelete} 
          />
        ))}
      </div>
    </div>
  );
};
