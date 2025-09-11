
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
=======

import { ProfileExperience as ProfileExperienceType } from "@/types/profile",
import { Briefcase } from "lucide-react",

=======
import {ProfileExperience, as, ProfileExperienceType} from "@/types/profile";
import {Briefcase} from "lucide-react";
=======
import { ProfileExperience as ProfileExperienceType } from "@/types/profile",
import { Briefcase } from "lucide-react",

==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="space-y-6">
        {experience.map((exp) => (
          <div key={exp.id} className="flex">
            <div className="mr-4">
              <div className="h-10 w-10 rounded-full bg-zion-purple/20 flex items-center justify-center">
                <Briefcase className="h-5 w-5 text-zion-purple" />
              </div>
            </div>
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div>
              <h4 className="text-white font-medium">{exp.role}</h4>
              <div className="text-zion-cyan mb-1">{exp.company}</div>
              <div className="text-sm text-zion-slate-light mb-2">
                {exp.startDate} - {exp.current ? "Present" : exp.endDate}
              </div>
              <p className="text-zion-slate">{exp.description}</p>
            </div>
          </div>
import {ProfileExperience, as, ProfileExperienceType} from "@/types/profile";
import {Briefcase} from "lucide-react";
interface ProfileExperienceProps {;
  experience: ProfileExperienceType[];
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { ProfileExperience as ProfileExperienceType } from "@/types/profile",;
import { Briefcase } from "lucide-react";
interface ProfileExperienceProps {;
  experience: ProfileExperienceType[];
}
        ))}
      </div>
    </div>
}
export function ProfileExperience(): any ({ experience }: ProfileExperienceProps) {;
  return (
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">;
      <h3 className="text-xl font-bold text-white mb-4">Experience</h3>;      <div className="space-y-6">;
        {experience && experience.map((exp) => (;
          <div key={exp && exp.id} className="flex">;
            <div className="mr-4">;
              <div className="h-10 w-10 rounded-full bg-zion-purple/20 flex items-center justify-center">;
                <Briefcase className="h-5 w-5 text-zion-purple" />;
              </div>;
            </div>;
<<<<<<< HEAD
=======
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
        ))}
      </div>
    </div>
  )
}
;
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
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
              <p className="text - zion - slate">{exp.description}</p>;
            </div>;
          </div>))}
      </div>;
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
