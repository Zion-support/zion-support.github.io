
import { Badge } from "@/components/ui/badge",
import { ProfileSkill } from "@/types/profile",interface ProfileSkillsProps {
  skills: ProfileSkill[]
}

export function ProfileSkills({ skills }: ProfileSkillsProps) {
  return (
    <div className=&quot;bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8&quot;>
      <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Skills</h3>
      
      <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
        {skills.map((skill, index) => (
          <div key={index} className=&quot;flex flex-col&quot;>
            <div className=&quot;flex justify-between items-center mb-1&quot;>
              <span className=&quot;text-zion-slate-light&quot;>{skill.name}</span>
              {skill.endorsements && (
                <span className=&quot;text-sm text-zion-slate&quot;>

interface ProfileSkillsProps {_skills: ProfileSkill[];}

export function ProfileSkills(_{_skills}: ProfileSkillsProps) {_return (_<div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">
      <h3 className="text-xl font-bold text-white mb-4">Skills</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill, _index) => (
          <div key={index} className="flex flex-col">
            <div className="flex justify-between items-center mb-1">
              <span className="text-zion-slate-light">{_skill.name}</span>
              {_skill.endorsements && (
                <span className="text-sm text-zion-slate">
                  {skill.endorsements} endorsements
                </span>
              )}
            </div>
            
            <div className=&quot;h-2 w-full bg-zion-blue-light rounded-full overflow-hidden&quot;>
              <div 
                className=&quot;h-full bg-gradient-to-r from-zion-purple to-zion-cyan&quot; 
                style={{ width: `${(skill.level / 5) * 100}%` }}              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
