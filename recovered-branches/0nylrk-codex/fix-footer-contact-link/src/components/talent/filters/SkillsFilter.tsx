
<<<<<<< HEAD
import { ChevronDown, ChevronUp } from "lucide-react",
import { Button } from "@/components/ui/button",
import { Checkbox } from "@/components/ui/checkbox",
import { SkillsFilterProps } from "@/types/filters",
// Common skills in AI and tech
const POPULAR_SKILLS = [
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
],
=======
import { ChevronDown, ChevronUp } from &quot;lucide-react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Checkbox } from &quot;@/components/ui/checkbox&quot;;
import { SkillsFilterProps } from &quot;@/types/filters&quot;;

// Common skills in AI and tech
const POPULAR_SKILLS = [
  &quot;Machine Learning&quot;,
  &quot;Deep Learning&quot;,
  &quot;Python&quot;,
  &quot;TensorFlow&quot;,
  &quot;PyTorch&quot;,
  &quot;Computer Vision&quot;,
  &quot;NLP&quot;,
  &quot;Data Science&quot;,
  &quot;AWS&quot;,
  &quot;Docker&quot;,
  &quot;Kubernetes&quot;,
  &quot;React&quot;,
  &quot;Node.js&quot;,
  &quot;TypeScript&quot;,
  &quot;DevOps&quot;,
  &quot;Security&quot;
];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

export function SkillsFilter({ selectedSkills, toggleSkill, expanded, toggleSection, isMobileFilterOpen }: SkillsFilterProps) {
  return (
    <div className=&quot;mb-6 border-b border-zion-blue-light pb-6&quot;>
      <button
        onClick={toggleSection}
        className=&quot;flex w-full items-center justify-between text-white font-medium&quot;
      >
        <span>Skills</span>
        {expanded ? (
          <ChevronUp className=&quot;h-4 w-4 text-zion-slate-light&quot; />
        ) : (
          <ChevronDown className=&quot;h-4 w-4 text-zion-slate-light&quot; />
        )}
      </button>
      
      {expanded && (
        <div className=&quot;mt-4 space-y-2&quot;>
          {POPULAR_SKILLS.map(skill => (
            <div key={skill} className=&quot;flex items-center&quot;>
              <Checkbox
                id={`skill-${skill}`}
                checked={selectedSkills.includes(skill)}
                onCheckedChange={() => toggleSkill(skill)}
                className=&quot;border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple&quot;
              />
              <label
                htmlFor={`skill-${skill}`}
                className=&quot;ml-2 text-sm text-zion-slate-light cursor-pointer&quot;
              >
                {skill}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
