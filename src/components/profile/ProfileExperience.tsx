<<<<<<< HEAD
import { ProfileExperience as ProfileExperienceType } from '@/types/profile';
import { Briefcase } from 'lucide-react';
=======
<<<<<<< HEAD
<<<<<<< HEAD
import { ProfileExperience as ProfileExperienceType } from '@/types/profile';
import { Briefcase } from 'lucide-react';
=======

import { ProfileExperience as ProfileExperienceType } from "@/types/profile";
import { Briefcase } from 'lucide-react'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

interface ProfileExperienceProps {
  experience: ProfileExperienceType[];

export function ProfileExperience({ experience }: ProfileExperienceProps) {
  return (
    <div className='bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8'>
      <h3 className='text-xl font-bold text-white mb-4'>Experience</h3>

      <div className='space-y-6'>
        {experience.map(exp => (
          <div key={exp.id} className='flex'>
            <div className='mr-4'>
              <div className='h-10 w-10 rounded-full bg-zion-purple/20 flex items-center justify-center'>
                <Briefcase className='h-5 w-5 text-zion-purple' />
              </div>
            </div>

            <div>
              <h4 className='text-white font-medium'>{exp.role}</h4>
              <div className='text-zion-cyan mb-1'>{exp.company}</div>
              <div className='text-sm text-zion-slate-light mb-2'>
                {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
              </div>
<<<<<<< HEAD
              <p className='text-zion-slate'>{exp.description}</p>            </div>
=======
<<<<<<< HEAD
              <p className='text-zion-slate'>{exp.description}</p>
=======

import { ProfileExperience as ProfileExperienceType } from "@/types/profile";
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
            <div className="mr-4">
              <div className="h-10 w-10 rounded-full bg-zion-purple/20 flex items-center justify-center">
                <Briefcase className="h-5 w-5 text-zion-purple" />
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-medium">{exp.role}</h4>
              <div className="text-zion-cyan mb-1">{exp.company}</div>
              <div className="text-sm text-zion-slate-light mb-2">
                {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
              </div>
              <p className="text-zion-slate">{exp.description}</p>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <p className="text-zion-slate">{exp.description}</p>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            </div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          </div>
        ))}
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
