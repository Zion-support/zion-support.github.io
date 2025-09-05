
interface AddSkillFormProps {_resumeId: string;
  onAddSkill: (_skill: Skill) => Promise<boolean>;}

export const _AddSkillForm = (_{_resumeId, _onAddSkill}: AddSkillFormProps) => {_const [skillName, _setSkillName] = useState('');
  const [skillCategory, _setSkillCategory] = useState('');
  const [proficiency, _setProficiency] = useState<number>(3);
  
  const _handleSubmit = async (_e: React.FormEvent) => {
    e.preventDefault();
    
    if (!skillName.trim()) return;
    
    const newSkill: Skill = {
      name: skillName.trim(), _category: skillCategory || 'Other', _proficiency: proficiency};
    
    const _success = await onAddSkill(newSkill);
    if (success) {_setSkillName('');
      setProficiency(3);}
  };
  
  const _handleEnhanceSkill = (_enhancedCategory: string) => {_setSkillCategory(enhancedCategory);};
  
  return (_<form onSubmit={_handleSubmit} className="space-y-4">
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex-1">
          <Label htmlFor="skill-name">Skill Name</Label>
          <Input
            id="skill-name"
            value={_skillName}
            onChange={_(e) => setSkillName(e.target.value)}
            placeholder="Enter a skill (e.g., React)"
          />
        </div>
        
        <div className="w-full md:w-44">
          <div className="flex justify-between items-center">
            <Label htmlFor="skill-category">Category</Label>
            {_skillName && (
              <AIEnhancementButton 
                currentContent={skillName}
                enhancementType="general"
                onEnhanced={_handleEnhanceSkill}
                buttonText="Suggest"
                className="h-4"
              />
            )}
          </div>
          <Select 
            value={_skillCategory} 
            onValueChange={_setSkillCategory}
          >
            <SelectTrigger id="skill-category">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Programming">Programming</SelectItem>
              <SelectItem value="Design">Design</SelectItem>
              <SelectItem value="Soft Skills">Soft Skills</SelectItem>
              <SelectItem value="DevOps">DevOps</SelectItem>
              <SelectItem value="Data Science">Data Science</SelectItem>
              <SelectItem value="AI/ML">AI/ML</SelectItem>
              <SelectItem value="Management">Management</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="skill-proficiency">Proficiency (1-5)</Label>
          <div className="flex gap-4">
            <Input
              id="skill-proficiency"
              type="number"
              min={_1}
              max={_5}
              value={_proficiency}
              onChange={_(_e) => setProficiency(Number(e.target.value))}
              className="w-20"
            />
            <Button type="submit">Add</Button>
          </div>
        </div>
      </div>
    </form>
  );
};
