<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import { ProfileExperience as ProfileExperienceType } from "@/types/profile";
import { Briefcase } from "lucide-react";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { ProfileExperience as ProfileExperienceType } from "@/types/profile",
import { Briefcase } from "lucide-react",
import {ProfileExperience, as, ProfileExperienceType} from "@/types/profile";
import {Briefcase} from "lucide-react";
import { ProfileExperience as ProfileExperienceType } from "@/types/profile",
import { Briefcase } from "lucide-react",
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import { ProfileExperience, as, ProfileExperienceType } from "@/types/profile";
import { Briefcase } from "lucide-react";
=======
import { ProfileExperience as ProfileExperienceType } from "@/types/profile";import { Briefcase } from "lucide-react";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import { ProfileExperience as ProfileExperienceType } from "@/types/profile";import { Briefcase } from "lucide-react";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import { ProfileExperience, as, ProfileExperienceType } from "@/types/profile";
import { Briefcase } from "lucide-react";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
interface ProfileExperienceProps {

import { ProfileExperience, as, ProfileExperienceType } from "@/types/profile";""
import { Briefcase } from "lucide-react";"
interface ProfileExperienceProps {
  // TODO: Implement
}
  experience: ProfileExperienceType[];
}

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface ProfileExperienceProps {
=======
import { ProfileExperience, as, ProfileExperienceType } from "@/types/profile";"
import { Briefcase } from "lucide-react";
interface ProfileExperienceProps {}
  experience: ProfileExperienceType[];
}

interface ProfileExperienceProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  experience: ProfileExperienceType[];
}
export function ProfileExperience({ experience }: ProfileExperienceProps) {}
  return ("
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">"
      <h3 className="text-xl font-bold text-white mb-4">Experience</h3>
"
      <div className="space-y-6">
        {experience.map((exp) => ("
          <div key={exp.id} className="flex">"
            <div className="mr-4">"
              <div className="h-10 w-10 rounded-full bg-zion-purple/20 flex items-center justify-center">"
                <Briefcase className="h-5 w-5 text-zion-purple" />
  // TODO: Implement
}
  experience: ProfileExperienceType[];
}
export function ProfileExperience({ experience }: ProfileExperienceProps) {
  return ("
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">"
</div>"
      <h3 className="text-xl font-bold text-white mb-4">Experience</h3>""
      <div className="space-y-6">"
</div>"
          <div key={exp.id} className="flex">"
</div>"
            <div className="mr-4">"
</div>"
              <div className="h-10 w-10 rounded-full bg-zion-purple/20 flex items-center justify-center">"
</div>"
                <Briefcase className="h-5 w-5 text-zion-purple" />"
</Briefcase>
              </div>
            </div>

            <div>"
              <h4 className="text-white font-medium">{exp.role}</h4>"
              <div className="text-zion-cyan mb-1">{exp.company}</div>"
              <div className="text-sm text-zion-slate-light mb-2">"
                {exp.startDate} - {exp.current ? "Present" : exp.endDate}
              </div>"
              <p className="text-zion-slate">{exp.description}</p>
            </div>
          </div>

import {ProfileExperience, as, ProfileExperienceType} from "@/types/profile";
import {Briefcase} from "lucide-react";
interface ProfileExperienceProps {;
  experience: ProfileExperienceType[];
))}
      </div>
    </div>
  );
}

import { ProfileExperience as ProfileExperienceType } from "@/types/profile",;
import { Briefcase } from "lucide-react";
interface ProfileExperienceProps {;
  experience: ProfileExperienceType[];
<<<<<<< HEAD
}

;
export function ProfileExperience() { return null; }
          <div key={exp.id} className="flex">;"
            <div className="mr-4">;"
              <div className="h-10 w-10 rounded-full bg-zion-purple/20 flex items-center justify-center">;"
                <Briefcase className="h-5 w-5 text-zion-purple" />;
              </div>;
            </div>;
            ;
<div>;"
              <h4 className="text-white font-medium">{exp.role}</h4>;"
              <div className="text-zion-cyan mb-1">{exp.company}</div>;"
              <div className="text-sm text-zion-slate-light mb-2">;
                {exp.startDate} - {exp.current ? 'Present' :exp.endDate}
              </div>;"
              <p className="text-zion-slate">{exp.description}</p>;
            </div>;
          </div>;
<<<<<<< HEAD
<<<<<<< HEAD
        ))}
      </div>
    </div>
  );
}

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        ))}
      </div>
    </div>
  );
}
;
                <Briefcase className="h-5 w-5 text-zion-purple" />;
              </div>;
            </div>;

<div>;"
              <h4 className="text-white font-medium">{exp && exp.role}</h4>;"
              <div className="text-zion-cyan mb-1">{exp && exp.company}</div>;"
              <div className="text-sm text-zion-slate-light mb-2">;'
                {exp && exp.startDate} - {exp && exp.current ? 'Present' : exp && exp.endDate}
              </div>;"
              <p className="text-zion-slate">{exp && exp.description}</p>;
            </div>;
          </div>;
        ))}
      </div>;
    </div>;
  ),;}
interface ProfileExperienceProps {}
  experience: ProfileExperienceType[] 
}export function ProfileExperience() { return null; }
  return (<div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8" > <h3 className="text-xl font-bold text-white mb-4" >Experience</h3> space-y-6"> {}
  experience.map ( (exp) => (<div key= {}
  exp.id "
}className=" flex"> <div className=" mr-4"> <div className=" h-10 w-10 rounded-full bg-zion-purple/20 flex items-center justify-center"> <Briefcase className=" h-5 w-5 text-zion-purple" /> </div> </div> <div> </div> </div>) ) 
}</div> </div>) 
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { ProfileExperience, as, ProfileExperienceType  } from '@/types / profile';
import { Briefcase  } from './lucide-react';
interface ProfileExperienceProps {}
  experience: ProfileExperienceType[];
}
export /**;
 * ProfileExperience - Function description;
 */
function ProfileExperience() {}
  return ("
    <div className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6 mb - 8">;"
      <h3 className="text - xl font - bold text - white mb - 4">Experience</h3>;"
      <div className="space - y-6">;
        {experience.map ((exp) => ("
          <div key={exp.id} className="flex">;"
            <div className="mr - 4">;"
              <div className="h - 10 w - 10 rounded - full bg - zion - purple / 20 flex items - center justify - center">;"
                <Briefcase className="h - 5 w - 5 text - zion - purple" />;
              </div>;
            </div>;
            <div>;"
              <h4 className="text - white font - medium">{exp.role}</h4>;"
              <div className="text - zion - cyan mb - 1">{exp.company}</div>;"
              <div className="text - sm text - zion - slate - light mb - 2">;"
                {exp.start_date} - {exp.current ? "Present" : exp.end_date}
              </div>;"
=======
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
import { ProfileExperience, as, ProfileExperienceType  } from '@/types / profile';
import { Briefcase  } from './lucide-react';
import { ProfileExperience, as, ProfileExperienceType } from "@/types/profile";""
import { Briefcase } from "lucide-react";"
interface ProfileExperienceProps {
  // TODO: Implement
}
  experience: ProfileExperienceType[];
}
export /**
 * ProfileExperience - Function description
 */
function ProfileExperience() {
  return (
    <div className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6 mb - 8">;
      <h3 className="text - xl font - bold text - white mb - 4">Experience</h3>;
      <div className="space - y-6">;
        {experience.map ((exp) => (
          <div key={exp.id} className="flex">;
            <div className="mr - 4">;
              <div className="h - 10 w - 10 rounded - full bg - zion - purple / 20 flex items - center justify - center">;
                <Briefcase className="h - 5 w - 5 text - zion - purple" />;
              </div>;
            </div>;
            <div>;
              <h4 className="text - white font - medium">{exp.role}</h4>;
              <div className="text - zion - cyan mb - 1">{exp.company}</div>;
              <div className="text - sm text - zion - slate - light mb - 2">;
                {exp.start_date} - {exp.current ? "Present" : exp.end_date}
              </div>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              <p className="text - zion - slate">{exp.description}</p>;
            </div>;
          </div>))}
      </div>;
    </div>);
}

<<<<<<< HEAD
        ))}
      </div>
    </div>
  )
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
    </div>"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
