<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

import {ChevronDown, ChevronUp} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Checkbox} from "@/components/ui/checkbox";
import {SkillsFilterProps} from "@/types/filters";
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
import { ChevronDown, ChevronUp } from "lucide-react",
import { Button } from "@/components/ui/button",
import { Checkbox } from "@/components/ui/checkbox";
import { SkillsFilterProps } from "@/types/filters";
<<<<<<< HEAD
// Common skills in AI and tech
const POPULAR_SKILLS = $2;
=======
import { Checkbox } from "@/components/ui/checkbox",
import { SkillsFilterProps } from "@/types/filters",
=======
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
// Common skills in AI and tech

const POPULAR_SKILLS = [
  "Machine Learning",
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
  "Security"
],

export function SkillsFilter({ selectedSkills, toggleSkill, expanded, toggleSection, isMobileFilterOpen }: SkillsFilterProps) {
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
                className="border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple"
              />
              <label
                htmlFor={`skill-${skill}`}
                className="ml-2 text-sm text-zion-slate-light cursor-pointer"
              >
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  "Security"
],

export function SkillsFilter({ selectedSkills, toggleSkill, expanded, toggleSection, isMobileFilterOpen }: SkillsFilterProps) {}
  return ("
    <div className="mb-6 border-b border-zion-blue-light pb-6">;
      <button;
        onClick={toggleSection}"
        className="flex w-full items-center justify-between text-white font-medium"
      >
        <span>Skills</span>
        {expanded ? ("
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />
        ) : ("
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />
        )}
      </button>
      {expanded && ("
        <div className="mt-4 space-y-2">
          {POPULAR_SKILLS.map(skill => ("
            <div key={skill} className="flex items-center">
              <Checkbox;
                id={`skill-${skill}`}
                checked={selectedSkills.includes(skill)}
                onCheckedChange={() => toggleSkill(skill)}"
                className="border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple"
              />
              <label;`
                htmlFor={`skill-${skill}`}"
                className="ml-2 text-sm text-zion-slate-light cursor-pointer"
              >
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { ChevronDown, ChevronUp } from "lucide-react",;

import { Button } from "@/components/ui/button",;
import { Checkbox } from "@/components/ui/checkbox",;
import { SkillsFilterProps } from "@/types/filters",;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
      </button>;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
// Common skills in AI and tech;
<<<<<<< HEAD
  "Machine Learning";"
  "Deep Learning";"
  "Python";"
  "TensorFlow";"
  "PyTorch";"
  "Computer Vision";"
  "NLP";"
  "Data Science";"
  "AWS";"
  "Docker";"
  "Kubernetes";"
  "React";"
  "Node && Node.js";"
  "TypeScript";"
  "DevOps";"
  "Security";"
=======
const POPULAR_SKILLS = [;

  "Machine Learning";
  "Deep Learning";
  "Python";
  "TensorFlow";
  "PyTorch";
  "Computer Vision";
  "NLP";
  "Data Science";
  "AWS";
  "Docker";
  "Kubernetes";
  "React";
  "Node && Node.js";
  "TypeScript";
  "DevOps";
  "Security";
>>>>>>> origin/chore/fix-lint-and-merge
];

      </button>;

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      {expanded && (;
        <div className="mt-4 space-y-2">;
          {POPULAR_SKILLS && POPULAR_SKILLS.map(skill => (;
            <div key={skill} className="flex items-center">;
<<<<<<< HEAD
=======
<<<<<<< HEAD
              <Checkbox

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
];
export function SkillsFilter({ selectedSkills, toggleSkill, expanded, toggleSection, isMobileFilterOpen }: SkillsFilterProps) {;
  return (;
    <div className="mb-6 border-b border-zion-blue-light pb-6">;
      <button;
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium";
      >;
        <span>Skills</span>;
        {expanded ? (;
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />;
        ) : (;
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />;
        )}
      </button>;
      {expanded && (;
        <div className="mt-4 space-y-2">;
          {POPULAR_SKILLS.map(skill => (;
            <div key={skill} className="flex items-center">;
              <Checkbox;
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

              <Checkbox

                id={`skill-${skill}`}
                checked={selectedSkills && selectedSkills.includes(skill)}
                onCheckedChange={() => toggleSkill(skill)}"
                className="border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple";
              />;
              <label;`
                htmlFor={`skill-${skill}`}
"
                className="ml-2 text-sm text-zion-slate-light cursor-pointer"
              >

                className="ml-2 text-sm text-zion-slate-light cursor-pointer">;

                {skill}
              </label>;
            </div>;
          ))}
        </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
      )}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    </div>;
  );
}

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    </div>;
  );
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
;
export /**
 * SkillsFilter - Function description
 */
function SkillsFilter() {
  return (
    <div className="mb - 6 border - b border - zion - blue - light pb - 6">;
const POPULAR_SKILLS = ["
  "Machine Learning",""
  "Deep Learning",""
  "Python",""
  "TensorFlow",""
  "PyTorch",""
  "Computer Vision",""
  "NLP",""
  "Data Science",""
  "AWS",""
  "Docker",""
  "Kubernetes",""
  "React",""
  "Node.js",""
  "TypeScript",""
  "DevOps",""
  "Security""]
],

export function SkillsFilter({ selectedSkills, toggleSkill, expanded, toggleSection, isMobileFilterOpen }: SkillsFilterProps) {
  return ("
    <div className="mb-6 border-b border-zion-blue-light pb-6">"
</div>
      <button;
        onClick={toggleSection}"
        className="flex w-full items-center justify-between text-white font-medium""
      >
</button>
        <span>Skills</span>"
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />"
"
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />"

      </button>"
        <div className="mt-4 space-y-2">"
</div>"
            <div key={skill} className="flex items-center">"
              <Checkbox;
                id={`skill-${skill}`})
                checked={selectedSkills.includes(skill)}
                onCheckedChange={() => toggleSkill(skill)}

              <label;`;
                htmlFor={`skill-${skill}`}"
                className="ml-2 text-sm text-zion-slate-light cursor-pointer""
</label>
      </button>;"
        <div className="mt-4 space-y-2">;"
            <div key={skill} className="flex items-center">;"
              <Checkbox;`;
                id={`skill-${skill}`}
                checked={selectedSkills && selectedSkills.includes(skill)}

                htmlFor={`skill-${skill}`}
              </label>;
            </div>;
"
                className="ml-2 text-sm text-zion-slate-light cursor-pointer""
              >
</label>

              </label>;
            </div>;
        </div>;

    </div>;"
    <div className="mb - 6 border - b border - zion - blue - light pb - 6">;"
        on_click={toggle_section}"
        className="flex w - full items - center justify - between text - white font - medium";"
      >;
        <span > Skills</span>;"
          <ChevronUp className="h - 4 w - 4 text - zion - slate - light" />) : ("
)"
          <ChevronDown className="h - 4 w - 4 text - zion - slate - light" />)}"

        <div className="mt - 4 space - y-2">;"
            <div key={skill} className="flex items - center">;"
                checked={selected_skills.includes (skill)}
                onCheckedChange={() => toggle_skill (skill)}

            </div>))}
        </div>)}
    </div>);
}

};
;

<<<<<<< HEAD
};
;

=======
<<<<<<< HEAD
};
;

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              <label;
                htmlFor={`skill-${skill}`}
                className="ml-2 text-sm text-zion-slate-light cursor-pointer";
              >;
<<<<<<< HEAD
=======
                {skill}
              </label>;
<<<<<<< HEAD
                className="ml-2 text-sm text-zion-slate-light cursor-pointer";"
            </div>;          ))}
}className="flex w-full items-center justify-between text-white font-medium" > <span>Skills</span>) : (<ChevronDown className="h-4 w-4 text-zion-slate-light" />)"
}</button> {
  POPULAR SKILLS.map (skill => (<div key= {
  skill;"
}className="flex items-center" > <Checkbox > {"
</div>)
}</label> </div>) ) 
}</div>) 
    </div>"`;
pr-12325
}</div>) 
              <label;
                htmlFor={`skill-${skill}`}"
                className="ml-2 text-sm text-zion-slate-light cursor-pointer""
              >
</label>
              </label>
            </div>
=======
            </div>;          ))}
        </div>;
      )}
    </div>;
  ),;}
 //Common skills in AI and tech const POPULAR SKILLS = [ "Machine Learning";
"Deep Learning";
"Python";
"TensorFlow";
"PyTorch";
"Computer Vision";
"NLP";
"Data Science";
"AWS";
"Docker";
"Kubernetes";
"React";
"Node.js";
"TypeScript";
"DevOps";
"Security" ];
toggleSection 
}className="flex w-full items-center justify-between text-white font-medium" > <span>Skills</span>) : (<ChevronDown className="h-4 w-4 text-zion-slate-light" />) 
}</button> {
  POPULAR SKILLS.map (skill => (<div key= {
  skill 
}className="flex items-center" > <Checkbox > {
  skill 
}</label> </div>) ) 
}</div>) 
}</div>) 
}
                id={`skill-${skill}`}
                checked={selectedSkills.includes(skill)}
                onCheckedChange={() => toggleSkill(skill)}
                className="border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple"
              />
              <label
                htmlFor={`skill-${skill}`}
                className="ml-2 text-sm text-zion-slate-light cursor-pointer"
              >
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                {skill}
              </label>;
                className="ml-2 text-sm text-zion-slate-light cursor-pointer";"
            </div>;          ))}
}className="flex w-full items-center justify-between text-white font-medium" > <span>Skills</span>) : (<ChevronDown className="h-4 w-4 text-zion-slate-light" />)"
}</button> {
  POPULAR SKILLS.map (skill => (<div key= {
  skill;"
}className="flex items-center" > <Checkbox > {"
</div>)
}</label> </div>) ) 
}</div>) 
    </div>"`;
pr-12325
}</div>) 
              <label;
                htmlFor={`skill-${skill}`}"
                className="ml-2 text-sm text-zion-slate-light cursor-pointer""
              >
</label>
              </label>
            </div>
<<<<<<< HEAD
=======
          ))}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        </div>
      )}
    </div>
  )
}
<<<<<<< HEAD
};
;
=======
<<<<<<< HEAD
=======
};
<<<<<<< HEAD
;
=======
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
