

// Common skills in AI and tech
const _POPULAR_SKILLS = [
  "Machine Learning",
  "Deep Learning",
  "Python",
  "TensorFlow",
  "PyTorch",
  "Computer Vision",
  "NLP",
  "Data Science",
  "AWS",
  "Docker",
  "Kubernetes",
  "React",
  "Node.js",
  "TypeScript",
  "DevOps",
  "Security"
];

export function SkillsFilter(_{_selectedSkills, _toggleSkill, _expanded, _toggleSection, _isMobileFilterOpen}: SkillsFilterProps) {_return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">
      <button
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium"
      >
        <span>Skills</span>
        {_expanded ? (
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />
        ) : (
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />
        )}
      </button>
      
      {_expanded && (
        <div className="mt-4 space-y-2">
          {POPULAR_SKILLS.map(skill => (
            <div key={skill} className="flex items-center">
              <Checkbox
                id={_`skill-${skill}`}
                checked={_selectedSkills.includes(skill)}
                onCheckedChange={_() => toggleSkill(skill)}
                className="border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple"
              />
              <label
                htmlFor={_`skill-${skill}`}
                className="ml-2 text-sm text-zion-slate-light cursor-pointer"
              >
                {_skill}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
