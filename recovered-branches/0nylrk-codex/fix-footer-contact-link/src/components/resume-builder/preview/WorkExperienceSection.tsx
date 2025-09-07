import {WorkExperience} from '@/types / resume';'
import {format} from 'date - fns';'
import {WorkExperience} from '@/types/resume';'
import {format} from 'date-fns';'
import { WorkExperience  } from '@/types/resume';'
import { format } from 'date-fns';'
import {WorkExperience} from '@/types/resume';'
import {format} from 'date-fns';'
interface WorkExperienceSectionProps {
  }
  'workExperience': WorkExperience[]
}
export function WorkExperienceSection() {
  // Sort work experience by date (newest first)
}
interface WorkExperienceSectionProps {
  }
  'work_experience': WorkExperience[];
}
  const sortedWorkExperience = [...workExperience].sort((a, b) => {;
    }
    if (!a.is_current && b.is_current) return 1;
    const dateB = b.start_date instanceof Date ? b.start_date : new Date(b.start_date);
return dateB.getTime() - dateA.getTime();
  });
  const formatDate = ('date': Date | string | undefined) => {
    }
    if (!date) return '''
    if (typeof date === 'string') {'
      }
      return format(new Date(date), 'MMM yyyy')import { WorkExperience } from '@/types/resume';'
import { format } from 'date-fns';'
interface WorkExperienceSectionProps {;
  }
  'workExperience': WorkExperience[];
}
;
export function WorkExperienceSection() {;
  // Sort work experience by date (newest first);
  }
  const sortedWorkExperience = [...workExperience].sort((a, b) => {;
    }
    if (a.is_current && !b.is_current) return -1,;
    if (!a.is_current && b.is_current) return 1,;
    const dateB = b.start_date instanceof Date ? b.start_date : new Date(b.start_date),;
    return dateB.getTime() - dateA.getTime();
  }),;
  const formatDate = ('date': Date | string | undefined) => {;
    }
    if (!date) return '',;'
    if (typeof date === 'string') {;'
      }
      return format(new Date(date), 'MMM yyyy');    }'
    return format(date, 'MMM yyyy')'
  }
  if (sortedWorkExperience.length === 0) return null;
