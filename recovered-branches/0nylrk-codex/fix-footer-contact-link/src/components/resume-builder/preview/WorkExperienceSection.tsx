
import {WorkExperience} from '@/types / resume';
import {format} from 'date - fns';
>>>>>>> origin/cursor/delete-old-data-records-6bba

import {WorkExperience} from '@/types/resume';
import {format} from 'date-fns';

import { WorkExperience  } from '@/types/resume';
import { format } from 'date-fns';
import {WorkExperience} from '@/types/resume';

import {format} from 'date-fns';
interface WorkExperienceSectionProps {}
  workExperience: WorkExperience[]
}
export function WorkExperienceSection({ workExperience }: WorkExperienceSectionProps) {}
  // Sort work experience by date (newest first)

interface WorkExperienceSectionProps {

import {WorkExperience} from '@/types / resume';''
import {format} from 'date - fns';''
import {WorkExperience} from '@/types/resume';''
import {format} from 'date-fns';'
interface WorkExperienceSectionProps {
  // TODO: Implement
}
  work_experience: WorkExperience[];
}

  const sortedWorkExperience = [...workExperience].sort((a, b) => {;

'
import { WorkExperience  } from '@/types/resume';''
import { format } from 'date-fns';''
import {WorkExperience} from '@/types/resume';''
import {format} from 'date-fns';'
interface WorkExperienceSectionProps {
  // TODO: Implement
}
  workExperience: WorkExperience[]
}
export function WorkExperienceSection({ workExperience }: WorkExperienceSectionProps) {
  // Sort work experience by date (newest first)

interface WorkExperienceSectionProps {

  work_experience: WorkExperience[];
}

  const sortedWorkExperience = [...workExperience].sort((a, b) => {;
    if (!a.is_current && b.is_current) return 1;
    const dateA = a.start_date instanceof Date ? a.start_date : new Date(a.start_date);
    const dateB = b.start_date instanceof Date ? b.start_date : new Date(b.start_date);
    return dateB.getTime() - dateA.getTime()
  }),

  const formatDate = $2;
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
