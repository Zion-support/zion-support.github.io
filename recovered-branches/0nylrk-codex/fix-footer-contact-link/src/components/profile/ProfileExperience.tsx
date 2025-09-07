<<<<<<< HEAD
import { ProfileExperience as ProfileExperienceType } from "@/types/profile";
import { Briefcase } from "lucide-react";

import { ProfileExperience as ProfileExperienceType } from "@/types/profile",
import { Briefcase } from "lucide-react",
import {ProfileExperience, as, ProfileExperienceType} from "@/types/profile";
import {Briefcase} from "lucide-react";
import { ProfileExperience as ProfileExperienceType } from "@/types/profile",
import { Briefcase } from "lucide-react",

import { ProfileExperience, as, ProfileExperienceType } from "@/types/profile";
import { Briefcase } from "lucide-react";

interface ProfileExperienceProps {

import { ProfileExperience, as, ProfileExperienceType } from "@/types/profile";""
import { Briefcase } from "lucide-react";"
interface ProfileExperienceProps {
  // TODO: Implement
}
  experience: ProfileExperienceType[];
}

interface ProfileExperienceProps {

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
=======
<<<<<<< HEAD
import { ProfileExperience as ProfileExperienceType } from "@/types/profile";
import { Briefcase } from "lucide-react";
interface ProfileExperienceProps {
  experience: ProfileExperienceType[]
}
export function ProfileExperience({ experience }: ProfileExperienceProps) {
  return (
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">
      <h3 className="text-xl font-bold text-white mb-4">Experience</h3>

      <div className="space-y-6">
        {experience.map((exp) => (
          <div key={exp.id} className="flex">
            <div className="mr-4">
              <div className="h-10 w-10 rounded-full bg-zion-purple/20 flex items-center justify-center">
                <Briefcase className="h-5 w-5 text-zion-purple" />
              </div>
            </div>
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
  )
}
=======
<<<<<<< HEAD
import { ProfileExperience as ProfileExperienceType } from "@/types/profile";
import { Briefcase } from "lucide-react";
=======

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

import { ProfileExperience as ProfileExperienceType } from "@/types/profile";
import { Briefcase } from "lucide-react";

import { ProfileExperience, as, ProfileExperienceType } from "@/types/profile";
import { Briefcase } from "lucide-react";

=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

import { ProfileExperience as ProfileExperienceType } from "@/types/profile",
import { Briefcase } from "lucide-react",
import {ProfileExperience, as, ProfileExperienceType} from "@/types/profile";
import {Briefcase} from "lucide-react";
import { ProfileExperience as ProfileExperienceType } from "@/types/profile",
import { Briefcase } from "lucide-react",

<<<<<<< HEAD
import { ProfileExperience, as, ProfileExperienceType } from "@/types/profile";
import { Briefcase } from "lucide-react";

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface ProfileExperienceProps {

import { ProfileExperience, as, ProfileExperienceType } from "@/types/profile";""
import { Briefcase } from "lucide-react";"
interface ProfileExperienceProps {
  // TODO: Implement
}
  experience: ProfileExperienceType[];
}

interface ProfileExperienceProps {

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
<<<<<<< HEAD
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

            <div>"
              <h4 className="text-white font-medium">{exp.role}</h4>"
              <div className="text-zion-cyan mb-1">{exp.company}</div>"
              <div className="text-sm text-zion-slate-light mb-2">"
<<<<<<< HEAD
=======
=======
  return (
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">
      <h3 className="text-xl font-bold text-white mb-4">Experience</h3>
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <div>
              <h4 className="text-white font-medium">{exp.role}</h4>
              <div className="text-zion-cyan mb-1">{exp.company}</div>
              <div className="text-sm text-zion-slate-light mb-2">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                {exp.startDate} - {exp.current ? "Present" : exp.endDate}
              </div>"
              <p className="text-zion-slate">{exp.description}</p>
            </div>
          </div>
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
        ))}
      </div>
    </div>
  );
}
<<<<<<< HEAD
;
=======
=======

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { Briefcase } from "lucide-react";
interface ProfileExperienceProps {;
  experience: ProfileExperienceType[];

                <Briefcase className="h-5 w-5 text-zion-purple" />;
              </div>;
            </div>;
            ;
<<<<<<< HEAD
=======
=======
import {ProfileExperience, as, ProfileExperienceType} from "@/types/profile";
import {Briefcase} from "lucide-react";
interface ProfileExperienceProps {;
  experience: ProfileExperienceType[];
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import { ProfileExperience as ProfileExperienceType } from "@/types/profile",;
import { Briefcase } from "lucide-react";
interface ProfileExperienceProps {;
  experience: ProfileExperienceType[];
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

        ))}
      </div>
    </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  );
}

        ))}
      </div>
    </div>
  );
}

                <Briefcase className="h-5 w-5 text-zion-purple" />;
              </div>;
            </div>;

<<<<<<< HEAD
=======
=======

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              <p className="text-zion-slate">{exp && exp.description}</p>;
            </div>;
          </div>;
        ))}
      </div>;
    </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  ),;}

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

              <p className="text - zion - slate">{exp.description}</p>;
<<<<<<< HEAD
            </div>;
          </div>))}
      </div>;
    </div>);
}

        ))}

=======
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD

        ))}

=======
<<<<<<< HEAD
  );
}
;

        ))}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      </div>
    </div>
  )
}
<<<<<<< HEAD
;
=======
<<<<<<< HEAD
;
=======
;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
