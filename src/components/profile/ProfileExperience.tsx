
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { ProfileExperience as ProfileExperienceType } from "@/types/profile";
import { ProfileExperience as ProfileExperienceType } from '@/types/profile'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { ProfileExperience as ProfileExperienceType } from "@/types/profile";
import { ProfileExperience as ProfileExperienceType } from '@/types/profile'
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <div key={exp.id} className="flex">
=======
>>>>>>>           <div key={exp.id} className="flex">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            <div className="mr-4">
              <div className="h-10 w-10 rounded-full bg-zion-purple/20 flex items-center justify-center">
                <Briefcase className="h-5 w-5 text-zion-purple" />
              </div>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

            <div>
=======
>>>>>>>             <div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              <h4 className="text-white font-medium">{exp.role}</h4>
              <div className="text-zion-cyan mb-1">{exp.company}</div>
              <div className="text-sm text-zion-slate-light mb-2">
                {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
              </div>
<<<<<<< HEAD

              <p className="text-zion-slate">{exp.description}</p>
=======

ursor/fix-website-loading-errors-and-merge-6662
=======
=======
            
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
            
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            <div>
              <h4 className="text-white font-medium">{exp.role}</h4>
              <div className="text-zion-cyan mb-1">{exp.company}</div>
              <div className="text-sm text-zion-slate-light mb-2">
                {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
              </div>
<<<<<<< HEAD
<<<<<<< HEAD

              <p className="text-zion-slate">{exp.description}</p>

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              <p className='text-zion-slate'>{exp.description}</p>            </div>              <p className="text-zion-slate">{exp.description}</p>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </div>
          </div>
        ))}
      </div>
<<<<<<< HEAD
    </div>


import { ProfileExperience as ProfileExperienceType } from '@/types/profile';
}

>>>>>>>               <p className="text-zion-slate">{exp.description}</p>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            </div>
          </div>
import { ProfileExperience as ProfileExperienceType } from "@/types/profile",;
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
    </div>;
  );
};
}

}
              <p className="text-zion-slate">{exp.description}</p>
            </div>
          </div>
import { ProfileExperience as ProfileExperienceType } from "@/types/profile",;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { Briefcase } from 'lucide-react';
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
              <h4 className="text-white font-medium">{exp.role}</h4>;
              <div className="text-zion-cyan mb-1">{exp.company}</div>;
              <div className="text-sm text-zion-slate-light mb-2">;
                {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
              </div>;
              <p className="text-zion-slate">{exp.description}</p>;
            </div>;
          </div>;
        ))}
      </div>;
    </div>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
