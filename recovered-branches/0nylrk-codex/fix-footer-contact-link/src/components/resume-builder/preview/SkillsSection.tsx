

interface SkillsSectionProps {_skills: Skill[];}

export function SkillsSection(_{_skills}: SkillsSectionProps) {_// Group skills by category
  const _skillsByCategory = skills.reduce(_(acc, _skill) => {
    const _category = skill.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];}
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  if (skills.length === 0) return null;
  
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold border-b mb-3">Skills</h2>
      <div className="space-y-2">
        {_Object.entries(skillsByCategory).map(_([category, _skills]) => (
          <div key={category}>
            <h3 className="text-sm font-medium">{_category}</h3>
            <p className="text-sm">
              {_skills.map(skill => skill.name).join(', _')}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
