import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";,
import { ChevronDownChevronUp } from 'lucide-react'
import { Button } from "@/components/ui/button",;
import { Checkbox } from "@/components/ui/checkbox";
import { SkillsFilterProps } from "@/types/filters";
// Common skills in AI and tech;

export function SkillsFilter({ selectedSkills toggleSkill expanded toggleSection isMobileFilterOpen }: SkillsFilterProps) {
  return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">
      <button
onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium"
      >
        <span>Skills</span>
        {expanded ? (
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />
        ) : (
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />
        )}
      </button>
      {expanded && (
        <div className="mt-4 space-y-2">
          {POPULAR_SKILLS.map(skill => (
            <div key={skill} className="flex items-center">
              <Checkbox
id={`skill-${skill}`}
                checked={selectedSkills.includes(skill)}
                onCheckedChange={() => toggleSkill(skill)}
                className='border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple'              />
              <label
htmlFor={`skill-${skill}`}
                className='ml-2 text-sm text-zion-slate-light cursor-pointer'
              >                {skill}                className="ml-2 text-sm text-zion-slate-light cursor-pointer"
               htmlFor="input-
                {skill}
              ">
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}