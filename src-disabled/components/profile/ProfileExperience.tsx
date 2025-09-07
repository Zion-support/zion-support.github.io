<<<<<<< HEAD
import { ProfileExperience as ProfileExperienceType } from "@/types/profile";
import { ProfileExperience as ProfileExperienceType } from '@/types/profile'
import { ProfileExperience as ProfileExperienceType } from "@/types/profile";
import { ProfileExperience as ProfileExperienceType } from '@/types/profile'
import { Briefcase } from 'lucide-react'
interface ProfileExperienceProps {
  experience: ProfileExperienceType[]
export function ProfileExperience({ experience }: ProfileExperienceProps) {
  return (

    <div className='bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8'>
      <h3 className='text-xl font-bold text-white mb-4'>Experience</h3>
      <div className='space-y-6'>
        {experience.map(exp => (
          <div key={exp.id} className='flex'>
            <div className='mr-4'>
              <div className='h-10 w-10 rounded-full bg-zion-purple/20 flex items-center justify-center'>
                <Briefcase className='h-5 w-5 text-zion-purple' />    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">
      <h3 className="text-xl font-bold text-white mb-4">Experience</h3>
      <div className="space-y-6">
        {experience.map((exp,) => (


import { ProfileExperience as ProfileExperienceType } from "@/types/profile",
import { Briefcase } from 'lucide-react'

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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
<div key={exp.id} className="flex">

            <div className="mr-4">
              <div className="h-10 w-10 rounded-full bg-zion-purple/20 flex items-center justify-center">

                <Briefcase className="h-5 w-5 text-zion-purple" />
              </div>
            </div>
<<<<<<< HEAD
=======

<<<<<<< HEAD:src-disabled/components/profile/ProfileExperience.tsx
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

            


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/profile/ProfileExperience.tsx
            <div>
              <h4 className="text-white font-medium">{exp.role}</h4>
              <div className="text-zion-cyan mb-1">{exp.company}</div>
              <div className="text-sm text-zion-slate-light mb-2">
                {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
              </div>

<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
            
            
            <div>
              <h4 className="text-white font-medium">{exp.role}</h4>
              <div className="text-zion-cyan mb-1">{exp.company}</div>
              <div className="text-sm text-zion-slate-light mb-2">
                {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
              </div>
              <p className='text-zion-slate'>{exp.description}</p>            </div>              <p className="text-zion-slate">{exp.description}</p>
=======
              <p className="text-zion-slate">{exp.description}</p>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            </div>
          </div>
        ))}
      </div>
<<<<<<< HEAD
    </div>;
  );
};
}

}

}

=======
    </div>

import { ProfileExperience as ProfileExperienceType } from '@/types/profile';

}
<<<<<<< HEAD:src-disabled/components/profile/ProfileExperience.tsx
"
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/profile/ProfileExperience.tsx
              <p className="text-zion-slate">{exp.description}</p>
            </div>

interface ProfileExperienceProps {;
  experience: ProfileExperienceType[];
}
;
export function ProfileExperience({ experience }: ProfileExperienceProps) {;
  return (;
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">;
      <h3 className="text-xl font-bold text-white mb-4">Experience</h3>;
      <div className="space-y-6">;
        {experience.map((exp) => (;
          <div key={exp.id} className="flex">;
            <div className="mr-4">;
              <div className="h-10 w-10 rounded-full bg-zion-purple/20 flex items-center justify-center">;
                <Briefcase className="h-5 w-5 text-zion-purple" />;
              </div>;
            </div>;
            <div>;
<<<<<<< HEAD:src-disabled/components/profile/ProfileExperience.tsx

              <h4 className='text-white font-medium'>{exp && exp.role}</h4>;
              <div className='text-zion-cyan mb-1'>{exp && exp.company}</div>;
              <div className='text-sm text-zion-slate-light mb-2'>;
                {exp && exp.startDate} - {exp && exp.current ? 'Present' : exp && exp.endDate}
              </div>;
              <p className='text-zion-slate'>{exp && exp.description}</p>            </div>              <p className="text-zion-slate">{exp && exp.description}</p>;

=======
              <h4 className="text-white font-medium">{exp.role}</h4>;
              <div className="text-zion-cyan mb-1">{exp.company}</div>;
              <div className="text-sm text-zion-slate-light mb-2">;
                {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
              </div>;
              <p className="text-zion-slate">{exp.description}</p>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/profile/ProfileExperience.tsx
            </div>;
          </div>;
        ))}
      </div>;
    </div>;
  );
}

        {experience.map (exp => (
          <div key={exp.id} className='flex'>;
            <div className='mr - 4'>;
              <div className='h - 10 w - 10 rounded - full bg - zion - purple / 20 flex items - center justify - center'>;

              </div>;
            </div>;
            <div>;'
              <h4 className='text - white font - medium'>{exp.role}</h4>;'
              <div className='text - zion - cyan mb - 1'>{exp.company}</div>;'
              <div className='text - sm text - zion - slate - light mb - 2'>;'
                {exp.start_date} - {exp.current ? 'Present' : exp.end_date}

            </div>;
          </div>))}
      </div>;
    </div>);
<<<<<<< HEAD:src-disabled/components/profile/ProfileExperience.tsx
}
=======
}
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/profile/ProfileExperience.tsx
