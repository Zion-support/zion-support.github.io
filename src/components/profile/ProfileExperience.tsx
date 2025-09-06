
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

          <div key={exp.id} className="flex">
            <div className="mr-4">
              <div className="h-10 w-10 rounded-full bg-zion-purple/20 flex items-center justify-center">
                <Briefcase className="h-5 w-5 text-zion-purple" />
              </div>
            </div>
=======
            
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168


interface ProfileExperienceProps {
  experience: ProfileExperienceType[]
}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
            <div>
              <h4 className="text-white font-medium">{exp.role}</h4>
              <div className="text-zion-cyan mb-1">{exp.company}</div>
              <div className="text-sm text-zion-slate-light mb-2">
                {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
              </div>
<<<<<<< HEAD
<<<<<<< HEAD
    </div>

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

import { ProfileExperience as ProfileExperienceType } from '@/types/profile';

}
<<<<<<< HEAD
<<<<<<< HEAD

              <p className="text-zion-slate">{exp.description}</p>
            </div>
          </div>
import { ProfileExperience as ProfileExperienceType } from "@/types/profile",;
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
<<<<<<< HEAD

  );
}

    <div className='bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6 mb - 8'>;
      <h3 className='text - xl font - bold text - white mb - 4'>Experience</h3>;
      <div className='space - y-6'>;
        {experience.map (exp => (
          <div key={exp.id} className='flex'>;
            <div className='mr - 4'>;
              <div className='h - 10 w - 10 rounded - full bg - zion - purple / 20 flex items - center justify - center'>;
                <Briefcase className='h - 5 w - 5 text - zion - purple' />    <div className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6 mb - 8">;
      <h3 className="text - xl font - bold text - white mb - 4">Experience</h3>;
      <div className="space - y-6">;
        {experience.map ((exp, ) => (
          <div key={exp.id} className="flex">;
            <div className="mr - 4">;
              <div className="h - 10 w - 10 rounded - full bg - zion - purple / 20 flex items - center justify - center">;
                <Briefcase className="h - 5 w - 5 text - zion - purple" />;
              </div>;
            </div>;
            <div>;
              <h4 className='text - white font - medium'>{exp.role}</h4>;
              <div className='text - zion - cyan mb - 1'>{exp.company}</div>;
              <div className='text - sm text - zion - slate - light mb - 2'>;
                {exp.start_date} - {exp.current ? 'Present' : exp.end_date}
              </div>;
              <p className='text - zion - slate'>{exp.description}</p>            </div>              <p className="text - zion - slate">{exp.description}</p>;
            </div>;
          </div>))}
      </div>;
    </div>);
}
;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
