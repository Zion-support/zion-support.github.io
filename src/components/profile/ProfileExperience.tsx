<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

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
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
<div key={exp.id} className="flex">
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            <div className="mr-4">
              <div className="h-10 w-10 rounded-full bg-zion-purple/20 flex items-center justify-center">
=======
<div key={exp.id} className="flex">"
            <div className="mr-4">"
              <div className="h-10 w-10 rounded-full bg-zion-purple/20 flex items-center justify-center">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                <Briefcase className="h-5 w-5 text-zion-purple" />
              </div>
            </div>

            
<<<<<<< HEAD
=======

<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
import { ProfileExperience as ProfileExperienceType } from '@/types/profile';
import { Briefcase } from 'lucide-react';

import { ProfileExperience as ProfileExperienceType } from "@/types/profile";
import { Briefcase } from 'lucide-react'
interface ProfileExperienceProps {
  experience: ProfileExperienceType[]
export function ProfileExperience({ experience }: ProfileExperienceProps) {
  return (
                <Briefcase className='h-5 w-5 text-zion-purple' />
              </div>
            </div>

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            <div>
              <h4 className='text-white font-medium'>{exp.role}</h4>
              <div className='text-zion-cyan mb-1'>{exp.company}</div>
              <div className='text-sm text-zion-slate-light mb-2'>
                {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
              </div>
<<<<<<< HEAD
<<<<<<< HEAD
              <p className="text-zion-slate">{exp.description}</p>
            </div>
          </div>
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

=======
            <div>"
              <h4 className="text-white font-medium">{exp.role}</h4>"
              <div className="text-zion-cyan mb-1">{exp.company}</div>"
              <div className="text-sm text-zion-slate-light mb-2">
                {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
              </div>
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              <p className="text-zion-slate">{exp.description}</p>

=======
              <p className='text-zion-slate'>{exp.description}</p>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
            </div>
          </div>
        ))}
      </div>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======

'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { ProfileExperience as ProfileExperienceType } from '@/types/profile';

}
"
              <p className="text-zion-slate">{exp.description}</p>
            </div>
<<<<<<< HEAD
          </div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { ProfileExperience as ProfileExperienceType } from "@/types/profile",;
import { Briefcase } from 'lucide-react';
interface ProfileExperienceProps {;
  experience: ProfileExperienceType[];

export function ProfileExperience(): any ({ experience }: ProfileExperienceProps) {;
  return (
    <div className='bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8'>;
      <h3 className='text-xl font-bold text-white mb-4'>Experience</h3>;

      <div className='space-y-6'>;
        {experience && experience.map(exp => (;
          <div key={exp && exp.id} className='flex'>;
            <div className='mr-4'>;
              <div className='h-10 w-10 rounded-full bg-zion-purple/20 flex items-center justify-center'>;
                <Briefcase className='h-5 w-5 text-zion-purple' />    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">;
      <h3 className="text-xl font-bold text-white mb-4">Experience</h3>;

      <div className="space-y-6">;
        {experience && experience.map((exp,) => (;
          <div key={exp && exp.id} className="flex">;
            <div className="mr-4">;
              <div className="h-10 w-10 rounded-full bg-zion-purple/20 flex items-center justify-center">;
                <Briefcase className="h-5 w-5 text-zion-purple" />;
              </div>;
            </div>;

            <div>;
              <h4 className='text-white font-medium'>{exp && exp.role}</h4>;
              <div className='text-zion-cyan mb-1'>{exp && exp.company}</div>;
              <div className='text-sm text-zion-slate-light mb-2'>;
                {exp && exp.startDate} - {exp && exp.current ? 'Present' : exp && exp.endDate}
              </div>;
              <p className='text-zion-slate'>{exp && exp.description}</p>            </div>              <p className="text-zion-slate">{exp && exp.description}</p>;
=======
          </div>"
import { ProfileExperience as ProfileExperienceType } from "@/types/profile",;'
import { Briefcase } from 'lucide-react';
interface ProfileExperienceProps {;
  experience: ProfileExperienceType[];
}
;
export function ProfileExperience() { return null; }
          <div key={exp.id} className="flex">;"
            <div className="mr-4">;"
              <div className="h-10 w-10 rounded-full bg-zion-purple/20 flex items-center justify-center">;"
                <Briefcase className="h-5 w-5 text-zion-purple" />;
              </div>;
            </div>;
            <div>;"
              <h4 className="text-white font-medium">{exp.role}</h4>;"
              <div className="text-zion-cyan mb-1">{exp.company}</div>;"
              <div className="text-sm text-zion-slate-light mb-2">;'
                {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
              </div>;"
              <p className="text-zion-slate">{exp.description}</p>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            </div>;
          </div>;
        ))}
      </div>;
    </div>;
  );
}
<<<<<<< HEAD
=======

  );
}
'
    <div className='bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6 mb - 8'>;'
      <h3 className='text - xl font - bold text - white mb - 4'>Experience</h3>;'
      <div className='space - y-6'>;
<<<<<<< HEAD
        {experience.map (exp => (
          <div key={exp.id} className='flex'>;
            <div className='mr - 4'>;
              <div className='h - 10 w - 10 rounded - full bg - zion - purple / 20 flex items - center justify - center'>;
                <Briefcase className='h - 5 w - 5 text - zion - purple' />    <div className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6 mb-8">;
      <h3 className="text - xl font - bold text - white mb-4">Experience</h3>;
      <div className="space-y-6">;
        {experience.map ((exp, ) => (
          <div key={exp.id} className="flex">;
            <div className="mr-4">;
              <div className="h - 10 w - 10 rounded - full bg - zion - purple / 20 flex items - center justify-center">;
                <Briefcase className="h - 5 w - 5 text - zion-purple" />;
=======
        {experience.map (exp => ('
          <div key={exp.id} className='flex'>;'
            <div className='mr - 4'>;'
              <div className='h - 10 w - 10 rounded - full bg - zion - purple / 20 flex items - center justify - center'>;'"
                <Briefcase className='h - 5 w - 5 text - zion - purple' />    <div className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6 mb - 8">;"
      <h3 className="text - xl font - bold text - white mb - 4">Experience</h3>;"
      <div className="space - y-6">;
        {experience.map ((exp, ) => ("
          <div key={exp.id} className="flex">;"
            <div className="mr - 4">;"
              <div className="h - 10 w - 10 rounded - full bg - zion - purple / 20 flex items - center justify - center">;"
                <Briefcase className="h - 5 w - 5 text - zion - purple" />;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              </div>;
            </div>;
            <div>;'
              <h4 className='text - white font - medium'>{exp.role}</h4>;'
              <div className='text - zion - cyan mb - 1'>{exp.company}</div>;'
              <div className='text - sm text - zion - slate - light mb - 2'>;'
                {exp.start_date} - {exp.current ? 'Present' : exp.end_date}
<<<<<<< HEAD
              </div>;
              <p className='text - zion - slate'>{exp.description}</p>            </div>              <p className="text - zion-slate">{exp.description}</p>;
=======
              </div>;'"
              <p className='text - zion - slate'>{exp.description}</p>            </div>              <p className="text - zion - slate">{exp.description}</p>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            </div>;
          </div>))}
      </div>;
    </div>);
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
=======
;
=======
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
;'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
