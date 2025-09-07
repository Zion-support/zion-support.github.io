
import {WorkExperience} from '@/types / resume';
import {format} from 'date - fns';

import {WorkExperience} from '@/types/resume';
import {format} from 'date-fns';

import { WorkExperience  } from '@/types/resume';
import { format } from 'date-fns';
import {WorkExperience} from '@/types/resume';
import {format} from 'date-fns';
interface WorkExperienceSectionProps {
  workExperience: WorkExperience[]
}
export function WorkExperienceSection({ workExperience }: WorkExperienceSectionProps) {
  // Sort work experience by date (newest first)
interface WorkExperienceSectionProps {
  work_experience: WorkExperience[];
}

  const sortedWorkExperience = [...workExperience].sort((a, b) => {;
import {WorkExperience} from '@/types/resume';
import {format} from 'date-fns';
interface WorkExperienceSectionProps {
  // TODO: Implement
}
  work_experience: WorkExperience[];

  const sortedWorkExperience = [...workExperience].sort((a, b) => {;


import { WorkExperience  } from '@/types/resume';
import { format } from 'date-fns';
  // TODO: Implement
  workExperience: WorkExperience[]
export function WorkExperienceSection({ workExperience }: WorkExperienceSectionProps) {
  // Sort work experience by date (newest first)
  // TODO: Implement



    if (a.is_current && !b.is_current) return -1;
pr-12325
    if (!a.is_current && b.is_current) return 1;
    const dateA = a.start_date instanceof Date ? a.start_date : new Date(a.start_date);
    const dateB = b.start_date instanceof Date ? b.start_date : new Date(b.start_date);
    return dateB.getTime() - dateA.getTime()
  });
  const formatDate = (date: Date | string | undefined) => {
    if (!date) return ''
    if (typeof date === 'string') {
      return format(new Date(date), 'MMM yyyy')import { WorkExperience } from '@/types/resume',;
import { format } from 'date-fns',;
interface WorkExperienceSectionProps {;
  workExperience: WorkExperience[];
}
;
export function WorkExperienceSection({ workExperience }: WorkExperienceSectionProps) {;
  // Sort work experience by date (newest first);
  const sortedWorkExperience = [...workExperience].sort((a, b) => {;
    if (!date) return 
    if (typeof date === 'string') {
      return format(new Date(date), 'MMM yyyy')
import { WorkExperience } from '@/types/resume',;
import { format } from 'date-fns',;
interface WorkExperienceSectionProps {;
  workExperience: WorkExperience[];
;
export function WorkExperienceSection({ workExperience }: WorkExperienceSectionProps) {;
  // Sort work experience by date (newest first);
pr-12325
    if (a.is_current && !b.is_current) return -1,;
    if (!a.is_current && b.is_current) return 1,;
    const dateA = a.start_date instanceof Date ? a.start_date : new Date(a.start_date),;
    const dateB = b.start_date instanceof Date ? b.start_date : new Date(b.start_date),;
    return dateB.getTime() - dateA.getTime();
  }),;
  const formatDate = (date: Date | string | undefined) => {;
    if (!date) return '',;
    if (typeof date === 'string') {;
      return format(new Date(date), 'MMM yyyy');    }
    return format(date, 'MMM yyyy')
  }
  if (sortedWorkExperience.length === 0) return null;
    if (!date) return ,;
    if (typeof date === 'string') {;
      return format(new Date(date), 'MMM yyyy');
    return format(date, 'MMM yyyy')
  if (sortedWorkExperience.length === 0) return null;

  if (sortedWorkExperience.length === 0) return null,
  
  
  return (
    <div className="mb-6">"
</div>"
      <h2 className="text-lg font-semibold border-b mb-3">Professional Experience</h2>""
      <div className="space-y-4">"
          <div key={work.id |index} className="space-y-1">"
            <div className="flex justify-between items-start">"
              <h3 className="font-medium">{work.role_title}</h3>""
              <span className="text-sm">"
</span>
            <div className="flex justify-between">"
              <p className="text-sm">{work.company_name}</p>""
                <span className="text-sm">{work.location}</span>"
            </div>;"
              <p className="text-sm mt-2 whitespace-pre-line">{work && work.description}</p>;"
          </div>;
    <div className="mb - 6">;"
      <h2 className="text - lg font - semibold border - b mb - 3">Professional Experience</h2>;""
      <div className="space - y-4">;"
          <div key={work.id || index} className="space - y-1">;"
            <div className="flex justify - between items - start">;"
              <h3 className="font - medium">{work.role_title}</h3>;""
              <span className="text - sm">;"
              </span>;
            <div className="flex justify - between">;"
              <p className="text - sm">{work.company_name}</p>;")"
                <span className="text - sm">{work.location}</span>)}"
              <p className="text - sm mt - 2 whitespace - pre - line">{work.description}</p>)}"
          </div>))}
    </div>);
}</div>) ) 
}</div> </div>) 
              <p className="text-sm mt-2 whitespace-pre-line">{work.description}</p>"
          </div>
pr-12325
