<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD



=======
<<<<<<< HEAD



import { ProfileExperience as ProfileExperienceType } from "@/types/profile",
import { Briefcase } from "lucide-react",
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

import { ProfileExperience as ProfileExperienceType } from "@/types/profile";
import { Briefcase } from "lucide-react";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
import { ProfileExperience as ProfileExperienceType } from "@/types/profile";
import { Briefcase } from "lucide-react";
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { ProfileExperience as ProfileExperienceType } from "@/types/profile",
import { Briefcase } from "lucide-react",
import {ProfileExperience, as, ProfileExperienceType} from "@/types/profile";
import {Briefcase} from "lucide-react";
import { ProfileExperience as ProfileExperienceType } from "@/types/profile",
import { Briefcase } from "lucide-react",
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
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
interface ProfileExperienceProps {
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

<<<<<<< HEAD
import {ProfileExperience, as, ProfileExperienceType} from "@/types/profile";
import {Briefcase} from "lucide-react";
interface ProfileExperienceProps {;
  experience: ProfileExperienceType[];

import { ProfileExperience as ProfileExperienceType } from "@/types/profile",;
=======
";
import { ProfileExperience as ProfileExperienceType } from "@/types/profile",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Briefcase } from "lucide-react";
interface ProfileExperienceProps {;
  experience: ProfileExperienceType[];
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}

;
export function ProfileExperience() { return null; }
          <div key={exp.id} className="flex">;"
            <div className="mr-4">;"
              <div className="h-10 w-10 rounded-full bg-zion-purple/20 flex items-center justify-center">;"
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                <Briefcase className="h-5 w-5 text-zion-purple" />;
              </div>;
            </div>;
            ;
<<<<<<< HEAD
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
=======




>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
            <div>;
              <h4 className="text-white font-medium">{exp.role}</h4>;
              <div className="text-zion-cyan mb-1">{exp.company}</div>;
              <div className="text-sm text-zion-slate-light mb-2">;
                {exp.startDate} - {exp.current ? 'Present' :exp.endDate}
              </div>;
              <p className="text-zion-slate">{exp.description}</p>;
            </div>;
          </div>;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        ))}
      </div>
    </div>
  );
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        ))}
      </div>
    </div>
  );
}
<<<<<<< HEAD
;
=======
=======

export function ProfileExperience(): any ({ experience }: ProfileExperienceProps) {;
  return ("
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">;"
      <h3 className="text-xl font-bold text-white mb-4">Experience</h3>;
"
      <div className="space-y-6">;
        {experience && experience.map((exp) => (;"
          <div key={exp && exp.id} className="flex">;"
            <div className="mr-4">;"
              <div className="h-10 w-10 rounded-full bg-zion-purple/20 flex items-center justify-center">;"
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                <Briefcase className="h-5 w-5 text-zion-purple" />;
              </div>;
            </div>;

<<<<<<< HEAD
            <div>;"
              <h4 className="text-white font-medium">{exp && exp.role}</h4>;"
              <div className="text-zion-cyan mb-1">{exp && exp.company}</div>;"
              <div className="text-sm text-zion-slate-light mb-2">;'
                {exp && exp.startDate} - {exp && exp.current ? 'Present' : exp && exp.endDate}
              </div>;"
=======
            <div>;
              <h4 className="text-white font-medium">{exp && exp.role}</h4>;
              <div className="text-zion-cyan mb-1">{exp && exp.company}</div>;
              <div className="text-sm text-zion-slate-light mb-2">;
                {exp && exp.startDate} - {exp && exp.current ? 'Present' : exp && exp.endDate}
              </div>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              <p className="text-zion-slate">{exp && exp.description}</p>;
            </div>;
          </div>;
        ))}
      </div>;
    </div>;
  ),;}
<<<<<<< HEAD
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { ProfileExperience, as, ProfileExperienceType  } from '@/types / profile';
=======
'
import { ProfileExperience, as, ProfileExperienceType  } from '@/types / profile';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
interface ProfileExperienceProps {
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

<<<<<<< HEAD
=======
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

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        ))}
      </div>
    </div>
  )
}
;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
