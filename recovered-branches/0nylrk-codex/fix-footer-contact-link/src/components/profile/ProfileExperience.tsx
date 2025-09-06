<<<<<<< HEAD



import { ProfileExperience as ProfileExperienceType } from "@/types/profile",
import { Briefcase } from "lucide-react",

import { ProfileExperience as ProfileExperienceType } from "@/types/profile";
import { Briefcase } from "lucide-react";
import { ProfileExperience as ProfileExperienceType } from "@/types/profile",
import { Briefcase } from "lucide-react",
import {ProfileExperience, as, ProfileExperienceType} from "@/types/profile";
import {Briefcase} from "lucide-react";
import { ProfileExperience as ProfileExperienceType } from "@/types/profile",
import { Briefcase } from "lucide-react",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
import { ProfileExperience, as, ProfileExperienceType } from "@/types/profile";
import { Briefcase } from "lucide-react";
>>>>>>> main
interface ProfileExperienceProps {
  experience: ProfileExperienceType[];
}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
interface ProfileExperienceProps {
  experience: ProfileExperienceType[];
}
export function ProfileExperience({ experience }: ProfileExperienceProps) {
  return (
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">
      <h3 className="text-xl font-bold text-white mb-4">Experience</h3>
<<<<<<< HEAD
=======

>>>>>>> main
      <div className="space-y-6">
        {experience.map((exp) => (
          <div key={exp.id} className="flex">
            <div className="mr-4">
              <div className="h-10 w-10 rounded-full bg-zion-purple/20 flex items-center justify-center">
                <Briefcase className="h-5 w-5 text-zion-purple" />
              </div>
            </div>
<<<<<<< HEAD
=======

>>>>>>> main
            <div>
              <h4 className="text-white font-medium">{exp.role}</h4>
              <div className="text-zion-cyan mb-1">{exp.company}</div>
              <div className="text-sm text-zion-slate-light mb-2">
                {exp.startDate} - {exp.current ? "Present" : exp.endDate}
              </div>
              <p className="text-zion-slate">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { ProfileExperience as ProfileExperienceType } from "@/types/profile",;
import { Briefcase } from "lucide-react";
interface ProfileExperienceProps {;
  experience: ProfileExperienceType[];
}

        ))}
      </div>
    </div>
  );
}

export function ProfileExperience(): any ({ experience }: ProfileExperienceProps) {;
  return (
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">;
      <h3 className="text-xl font-bold text-white mb-4">Experience</h3>;
      <div className="space-y-6">;
        {experience && experience.map((exp) => (;
          <div key={exp && exp.id} className="flex">;
            <div className="mr-4">;
              <div className="h-10 w-10 rounded-full bg-zion-purple/20 flex items-center justify-center">;
                <Briefcase className="h-5 w-5 text-zion-purple" />;
              </div>;
            </div>;
            <div>;
              <h4 className="text-white font-medium">{exp && exp.role}</h4>;
              <div className="text-zion-cyan mb-1">{exp && exp.company}</div>;
              <div className="text-sm text-zion-slate-light mb-2">;
                {exp && exp.startDate} - {exp && exp.current ? 'Present' : exp && exp.endDate}
              </div>;
              <p className="text-zion-slate">{exp && exp.description}</p>;
            </div>;
          </div>;
        ))}
      </div>;
    </div>;
  );
}

import { ProfileExperience as ProfileExperienceType } from "@/types/profile",;
import { Briefcase } from "lucide-react",;
;
interface ProfileExperienceProps {;
  experience:ProfileExperienceType[];
}
;
export function ProfileExperience({ experience } ProfileExperienceProps) {;
  return (;
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">;
      <h3 className="text-xl font-bold text-white mb-4">Experience</h3>;
      ;
      <div className="space-y-6">;
        {experience.map((exp) => (;
          <div key={exp.id} className="flex">;
            <div className="mr-4">;
              <div className="h-10 w-10 rounded-full bg-zion-purple/20 flex items-center justify-center">;
                <Briefcase className="h-5 w-5 text-zion-purple" />;
              </div>;
            </div>;
            ;
            <div>;
              <h4 className="text-white font-medium">{exp.role}</h4>;
              <div className="text-zion-cyan mb-1">{exp.company}</div>;
              <div className="text-sm text-zion-slate-light mb-2">;
                {exp.startDate} - {exp.current ? 'Present' :exp.endDate}
              </div>;
              <p className="text-zion-slate">{exp.description}</p>;
            </div>;
          </div>;
        ))}
      </div>;
    </div>;
  ),;}
 interface ProfileExperienceProps {
  experience: ProfileExperienceType[] 
}export function ProfileExperience ({
  experience 
}: ProfileExperienceProps) {
  return (<div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8" > <h3 className="text-xl font-bold text-white mb-4" >Experience</h3> space-y-6"> {
  experience.map ( (exp) => (<div key= {
  exp.id 
}className=" flex"> <div className=" mr-4"> <div className=" h-10 w-10 rounded-full bg-zion-purple/20 flex items-center justify-center"> <Briefcase className=" h-5 w-5 text-zion-purple" /> </div> </div> <div> </div> </div>) ) 
}</div> </div>) 
}
  );
}
;

        ))}
      </div>
    </div>
  )
}
;
