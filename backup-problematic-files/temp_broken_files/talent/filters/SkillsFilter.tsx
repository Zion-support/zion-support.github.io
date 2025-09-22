<<<<<<< HEAD

=======
import { ChevronDown, ChevronUp } from "lucide-react",;
import { Button } from "@/components/ui/button",;
import { Checkbox } from "@/components/ui/checkbox",;
import { SkillsFilterProps } from "@/types/filters",;
;
// Common skills in AI and tech;
const POPULAR_SKILLS = [;
  "Machine Learning",;
  "Deep Learning",;
  "Python",;
  "TensorFlow",;
  "PyTorch",;
  "Computer Vision",;
  "NLP",;
  "Data Science",;
  "AWS",;
  "Docker",;
  "Kubernetes",;
  "React",;
  "Node.js",;
  "TypeScript",;
  "DevOps",;
  "Security";
],;
;
export function SkillsFilter({ selectedSkills, toggleSkill, expanded, toggleSection, isMobileFilterOpen } SkillsFilterProps) {;
  return (;
    <div className="mb-6 border-b border-zion-blue-light pb-6">;
      <button;
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium";
      >;
        <span>Skills</span>;
        {expanded ? (;
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />;
        ) :(;
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />;
        )}
      </button>;
      ;
      {expanded && (;
        <div className="mt-4 space-y-2">;
          {POPULAR_SKILLS.map(skill => (;
            <div key={skill} className="flex items-center">;
              <Checkbox;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                id={`skill-${skill}`}
                checked={selectedSkills.includes(skill)}
                onCheckedChange={() => toggleSkill(skill)}
                className="border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple";
              />;
<<<<<<< HEAD

=======
 //Common skills in AI and tech const POPULAR SKILLS = [ "Machine Learning";";""Deep Learning";";""Python";";""TensorFlow";";""PyTorch";";""Computer Vision";";""NLP";";""Data Science";";""AWS";";""Docker";";""Kubernetes";";""React";";""Node.js";";""TypeScript";";""DevOps";";""Security" ];"toggleSection ";"}className="flex w-full items-center justify-between text-white font-medium" > <span>Skills</span>) : (<ChevronDown className="h-4 w-4 text-zion-slate-light" />) ;
}</button> {;
  POPULAR SKILLS.map (skill => (<div key= {;"  skill ";"}className="flex items-center" > <Checkbox > {;
  skill ;
}</label> </div>) ) ;
}</div>) ;
}</div>) ;"}"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
