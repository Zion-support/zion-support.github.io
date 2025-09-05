import { useState } from 'react',
import { Button } from '@/components/ui/button',
import { Input } from '@/components/ui/input',
import { Label } from '@/components/ui/label',
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select',
import { Skill } from '@/types/resume',
import { AIEnhancementButton } from '@/components/resume-builder/forms/AIEnhancementButton',
interface AddSkillFormProps {
  resumeId: string,
  onAddSkill: (skill: Skill) => Promise<boolean>
}

export const AddSkillForm = ({ resumeId, onAddSkill }: AddSkillFormProps) => {
  const [skillName, setSkillName] = useState(''),
  const [skillCategory, setSkillCategory] = useState(''),
  const [proficiency, setProficiency] = useState<number>(3),
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(),    
    if (!skillName.trim()) return,
    
    const newSkill: Skill = {
      name: skillName.trim(),
      category: skillCategory || 'Other',
      proficiency: proficiency},
    
    const success = await onAddSkill(newSkill),
    if (success) {
      setSkillName(''),
      setProficiency(3)
    }
  },
  
  const handleEnhanceSkill = (enhancedCategory: string) => {
    setSkillCategory(enhancedCategory)
  },
  
  return (
    <form onSubmit={handleSubmit} className=&quot;space-y-4&quot;>
      <div className=&quot;flex flex-col gap-4 md:flex-row&quot;>
        <div className=&quot;flex-1&quot;>
          <Label htmlFor=&quot;skill-name&quot;>Skill Name</Label>
          <Input
            id=&quot;skill-name&quot;
            value={skillName}
            onChange={(e) => setSkillName(e.target.value)}
            placeholder=&quot;Enter a skill (e.g., React)&quot;
          />
        </div>
        
        <div className=&quot;w-full md:w-44&quot;>
          <div className=&quot;flex justify-between items-center&quot;>
            <Label htmlFor=&quot;skill-category&quot;>Category</Label>
            {skillName && (
              <AIEnhancementButton 
                currentContent={skillName}
                enhancementType=&quot;general&quot;
                onEnhanced={handleEnhanceSkill}
                buttonText=&quot;Suggest&quot;
                className=&quot;h-4&quot;              />
            )}
          </div>
          <Select 
            value={_skillCategory} 
            onValueChange={_setSkillCategory}
          >
            <SelectTrigger id=&quot;skill-category&quot;>
              <SelectValue placeholder=&quot;Select category&quot; />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value=&quot;Programming&quot;>Programming</SelectItem>
              <SelectItem value=&quot;Design&quot;>Design</SelectItem>
              <SelectItem value=&quot;Soft Skills&quot;>Soft Skills</SelectItem>
              <SelectItem value=&quot;DevOps&quot;>DevOps</SelectItem>
              <SelectItem value=&quot;Data Science&quot;>Data Science</SelectItem>
              <SelectItem value=&quot;AI/ML&quot;>AI/ML</SelectItem>
              <SelectItem value=&quot;Management&quot;>Management</SelectItem>
              <SelectItem value=&quot;Other&quot;>Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor=&quot;skill-proficiency&quot;>Proficiency (1-5)</Label>
          <div className=&quot;flex gap-4&quot;>
            <Input
              id=&quot;skill-proficiency&quot;
              type=&quot;number&quot;
              min={1}
              max={5}
              value={proficiency}
              onChange={(e) => setProficiency(Number(e.target.value))}
              className=&quot;w-20&quot;            />
            <Button type=&quot;submit&quot;>Add</Button>
          </div>
        </div>
      </div>
    </form>
  )
},
