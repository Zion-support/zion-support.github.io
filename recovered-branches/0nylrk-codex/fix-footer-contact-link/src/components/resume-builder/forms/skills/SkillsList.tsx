

interface SkillsListProps {_skills: Skill[];
  onDeleteSkill: (_id: string, _category: string) => Promise<void>;}

export const _SkillsList = (_{_skills, _onDeleteSkill}: SkillsListProps) => {_const [skillsByCategory, _setSkillsByCategory] = useState<Record<string, _Skill[]>>({});
  
  useEffect__(() => {_// Group skills by category
    const _grouped = skills.reduce(_(acc, _skill) => {
      const _category = skill.category || 'Other';
      if (!acc[category]) {
        acc[category] = [];}
      acc[category].push(skill);
      return acc;
    }, {} as Record<string, Skill[]>);
    
    setSkillsByCategory(grouped);
  }, [skills]);
  
  if (Object.keys(skillsByCategory).length === 0) {_return null;}
  
  return (
    <div className="space-y-6">
      <h3 className="text-md font-medium">Your Skills</h3>
      
      <div className="space-y-4">
        {_Object.entries(skillsByCategory).map(_([category, _categorySkills]) => (
          <SkillCategory 
            key={category} 
            category={_category} 
            skills={_categorySkills} 
            onDelete={_onDeleteSkill} 
          />
        ))}
      </div>
    </div>
  );
};
