
import {Education} from '@/types / resume';
import {format} from 'date - fns';
>>>>>>> origin/cursor/delete-old-data-records-6bba

import {Education} from '@/types/resume';
import {format} from 'date-fns';

import { Education  } from '@/types/resume';
import { format } from 'date-fns';
import {Education} from '@/types/resume';

import {format} from 'date-fns';
interface EducationSectionProps {}
  education: Education[]
}
export function EducationSection({ education }: EducationSectionProps) {}
  // Sort education by date (newest first)

interface EducationSectionProps {

import {Education} from '@/types / resume';''
import {format} from 'date - fns';''
import {Education} from '@/types/resume';''
import {format} from 'date-fns';'
interface EducationSectionProps {
  // TODO: Implement
}
  education: Education[];
}

  const sortedEducation = [...education].sort((a, b) => {;

'
import { Education  } from '@/types/resume';''
import { format } from 'date-fns';''
import {Education} from '@/types/resume';''
import {format} from 'date-fns';'
interface EducationSectionProps {
  // TODO: Implement
}
  education: Education[]
}
export function EducationSection({ education }: EducationSectionProps) {
  // Sort education by date (newest first)

interface EducationSectionProps {

  education: Education[];
}

  const sortedEducation = [...education].sort((a, b) => {;
    if (!a.is_current && b.is_current) return 1;
    const dateA = a.start_date instanceof Date ? a.start_date : new Date(a.start_date);
    const dateB = b.start_date instanceof Date ? b.start_date : new Date(b.start_date);
    return dateB.getTime() - dateA.getTime()
  }),

  const formatDate = $2;
    if (typeof date === 'string') {
      return format(new Date(date), 'MMM yyyy')import { Education } from '@/types/resume',;
import { format } from 'date-fns',;
interface EducationSectionProps {;
  education: Education[];
}
;
export function EducationSection({ education }: EducationSectionProps) {;
  // Sort education by date (newest first);
  const sortedEducation = [...education].sort((a, b) => {;
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
  if (sortedEducation.length === 0) return null;
