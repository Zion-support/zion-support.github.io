<<<<<<< HEAD
=======
import { ProfileExperience as ProfileExperienceType } from '@/types/profile';
import { Briefcase } from 'lucide-react';
>>>>>>> cursor/automate-test-improve-and-merge-code-107b

import { ProfileExperience as ProfileExperienceType } from "@/types/profile";
import { Briefcase } from 'lucide-react'
interface ProfileExperienceProps {
<<<<<<< HEAD
  experience: ProfileExperienceType[]
=======
  experience: ProfileExperienceType[];
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export function ProfileExperience({ experience }: ProfileExperienceProps) {
  return (
<<<<<<< HEAD
    <div className;
}
=======
    <div className='bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8'>
      <h3 className='text-xl font-bold text-white mb-4'>Experience</h3>
      <div className='space-y-6'>
        {experience.map(exp => (
          <div key={exp.id} className='flex'>
            <div className='mr-4'>
              <div className='h-10 w-10 rounded-full bg-zion-purple/20 flex items-center justify-center'>
<<<<<<< HEAD
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
                <Briefcase className='h-5 w-5 text-zion-purple' />
              </div>
            </div>

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
            <div>
              <h4 className='text-white font-medium'>{exp.role}</h4>
              <div className='text-zion-cyan mb-1'>{exp.company}</div>
              <div className='text-sm text-zion-slate-light mb-2'>
                {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
              </div>
<<<<<<< HEAD
              <p className='text-zion-slate'>{exp.description}</p>            </div>              <p className="text-zion-slate">{exp.description}</p>
=======
              <p className='text-zion-slate'>{exp.description}</p>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
            </div>
          </div>
        ))}
      </div>
    </div>
<<<<<<< HEAD
  )
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
