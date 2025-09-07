<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { WorkExperience  } from '@/types/resume';
import { format } from 'date-fns';
interface WorkExperienceSectionProps {
  workExperience: WorkExperience[]
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
import {WorkExperience} from '@/types / resume';'
import {format} from 'date - fns';'
import {WorkExperience} from '@/types/resume';'
import {format} from 'date-fns';'
import { WorkExperience  } from '@/types/resume';'
import { format } from 'date-fns';'
<<<<<<< HEAD
import {WorkExperience} from '@/types/resume';'
import {format} from 'date-fns';'
interface WorkExperienceSectionProps {
=======
=======
import {WorkExperience} from '@/types / resume';
import {format} from 'date - fns';

import {WorkExperience} from '@/types / resume';
import {format} from 'date - fns';
import {WorkExperience} from '@/types/resume';
import {format} from 'date-fns';

>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {WorkExperience} from '@/types / resume';
import {format} from 'date - fns';



import {WorkExperience} from '@/types/resume';
import {format} from 'date-fns';

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
interface WorkExperienceSectionProps {

  work_experience: WorkExperience[];
}

  const sortedWorkExperience = [...workExperience].sort((a, b) => {;

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

<<<<<<< HEAD
=======
<<<<<<< HEAD

import { WorkExperience  } from '@/types/resume';
import { format } from 'date-fns';
import {WorkExperience} from '@/types/resume';
import {format} from 'date-fns';
interface WorkExperienceSectionProps {
  workExperience: WorkExperience[]
}
>>>>>>> merged-prs-20250907-203621
export function WorkExperienceSection({ workExperience }: WorkExperienceSectionProps) {
  // Sort work experience by date (newest first)

  const sortedWorkExperience = [...workExperience].sort((a, b) => {
<<<<<<< HEAD
    if (a.is_current && !b.is_current) return -1,
    if (!a.is_current && b.is_current) return 1,
    
    const dateA = a.start_date instanceof Date ? a.start_date : new Date($2);
    const dateB = b.start_date instanceof Date ? b.start_date : new Date($2);
    return dateB.getTime() - dateA.getTime()
  }),

  const formatDate = $2;
    if (typeof date === 'string') {
      return format(new Date(date), 'MMM yyyy')
    }
    return format(date, 'MMM yyyy')
  },

  if (sortedWorkExperience.length = $2;
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold border-b mb-3">Professional Experience</h2>
      <div className="space-y-4">
        {sortedWorkExperience.map((work, index) => (
          <div key={work.id |index} className="space-y-1">
            <div className="flex justify-between items-start">
              <h3 className="font-medium">{work.role_title}</h3>
              <span className="text-sm">
                {formatDate(work.start_date)} - {work.is_current ? 'Present' : formatDate(work.end_date)}
              </span>
            </div>
            <div className="flex justify-between">
              <p className="text-sm">{work.company_name}</p>
              {work.location && (
                <span className="text-sm">{work.location}</span>
=======
  const sortedWorkExperience = [...workExperience].sort((a, b) => {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    if (a.is_current && !b.is_current) return -1;

    if (!a.is_current && b.is_current) return 1;
    const dateA = a.start_date instanceof Date ? a.start_date : new Date(a.start_date);
    const dateB = b.start_date instanceof Date ? b.start_date : new Date(b.start_date);
    return dateB.getTime() - dateA.getTime()
  });
<<<<<<< HEAD

    }
=======
<<<<<<< HEAD
=======
  const formatDate = (date: Date | string | undefined) => {
    if (!date) return ''
    if (typeof date === 'string') {
      return format(new Date(date), 'MMM yyyy')


<<<<<<< HEAD
    }
    return format(date, 'MMM yyyy')
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
  }
  if (sortedWorkExperience.length === 0) return null;
=======
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    return format(date, 'MMM yyyy')
>>>>>>> origin/chore/fix-lint-and-merge
  }
  if (sortedWorkExperience.length === 0) return null;

<<<<<<< HEAD
=======
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { WorkExperience } from '@/types/resume',;

import { format } from 'date-fns',;
interface WorkExperienceSectionProps {;
  workExperience: WorkExperience[];
}
;
export function WorkExperienceSection() { return null; }
  }),;

      return format(new Date(date), 'MMM yyyy');

<<<<<<< HEAD
    }

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    }

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    return format(date, 'MMM yyyy')
  }
  if (sortedWorkExperience.length === 0) return null;

<<<<<<< HEAD
=======
=======
  if (sortedWorkExperience.length === 0) return null,
  
<<<<<<< HEAD
  
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  return (
    <div className="mb-6">"
      <h2 className="text-lg font-semibold border-b mb-3">Professional Experience</h2>"
      <div className="space-y-4">
        {sortedWorkExperience.map((work, index) => ("
          <div key={work.id |index} className="space-y-1">"
            <div className="flex justify-between items-start">"
              <h3 className="font-medium">{work.role_title}</h3>"
              <span className="text-sm">'
                {formatDate(work.start_date)} - {work.is_current ? 'Present' : formatDate(work.end_date)}
              </span>
            </div>"
            <div className="flex justify-between">"
              <p className="text-sm">{work.company_name}</p>
              {work.location && ("
                <span className="text-sm">{work.location}</span>
<<<<<<< HEAD

}

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
=======
import {WorkExperience} from '@/types/resume';
import {format} from 'date-fns';
interface WorkExperienceSectionProps {;
  workExperience: WorkExperience[];
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              )}
            </div>;
            {work && work.description && (;"
              <p className="text-sm mt-2 whitespace-pre-line">{work && work.description}</p>;
            )}
          </div>;
        ))}

export /**;
 * WorkExperienceSection - Function description;
<<<<<<< HEAD
=======
=======
import { WorkExperience } from '@/types/resume',;
import { format } from 'date-fns',;
;
interface WorkExperienceSectionProps {;
  workExperience:WorkExperience[];
}
;
export function WorkExperienceSection({ workExperience } WorkExperienceSectionProps) {;
  // Sort work experience by date (newest first);
  const sortedWorkExperience = [...workExperience].sort((a, b) => {;
    if (a.is_current && !b.is_current) return -1,;
    if (!a.is_current && b.is_current) return 1,;
    ;
    const dateA = a.start_date instanceof Date ? a.start_date :new Date(a.start_date),;
    const dateB = b.start_date instanceof Date ? b.start_date :new Date(b.start_date),;
    return dateB.getTime() - dateA.getTime(),;
  }),;
;
  const formatDate = (date:Date | string | undefined) => {;
    if (!date) return '',;
    if (typeof date === 'string') {;
      return format(new Date(date), 'MMM yyyy'),;
    }
    return format(date, 'MMM yyyy'),;
  },;
;
  if (sortedWorkExperience.length === 0) return null,;
  ;
  return (;
    <div className="mb-6">;
      <h2 className="text-lg font-semibold border-b mb-3">Professional Experience</h2>;
      <div className="space-y-4">;
        {sortedWorkExperience.map((work, index) => (;
          <div key={work.id || index} className="space-y-1">;
            <div className="flex justify-between items-start">;
              <h3 className="font-medium">{work.role_title}</h3>;
              <span className="text-sm">;
                {formatDate(work.start_date)} - {work.is_current ? 'Present' :formatDate(work.end_date)}
              </span>;
            </div>;
            <div className="flex justify-between">;
              <p className="text-sm">{work.company_name}</p>;
              {work.location && (;
                <span className="text-sm">{work.location}</span>;
              )}
            </div>;
            {work.description && (;
              <p className="text-sm mt-2 whitespace-pre-line">{work.description}</p>;
            )}
          </div>;
        ))}
      </div>;
    </div>;
export /**
 * WorkExperienceSection - Function description
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
 */
function WorkExperienceSection() {}
  // Sort work experience by date (newest first);
  const sortedWorkExperience = [...work_experience].sort ((a, b) => {}
    // Check condition;
if (return -1) {}
  $2;
}
    // Check condition;
if (return 1) {}
  $2;
}
    const date_a = a.start_date instanceof Date ? a.start_date : new Date (a.start_date);
    const date_b = b.start_date instanceof Date ? b.start_date : new Date (b.start_date);
    return date_b.get_time () - date_a.get_time ();
  });
;
  const format_date = (date: Date | string | undefined) =>: any {}
    // Check condition'
if (return '', ) {}
  $2;
}
    // Check condition;
if ( {) {}
  $2;
}'
      return format (new Date (date), 'MMM yyyy');
    }'
    return format (date, 'MMM yyyy');
  }
;
  // Check condition;
if (return null) {}
  $2;
}
  return ("
    <div className="mb - 6">;"
      <h2 className="text - lg font - semibold border - b mb - 3">Professional Experience</h2>;"
      <div className="space - y-4">;
        {sortedWorkExperience.map ((work, index) => ("
          <div key={work.id || index} className="space - y-1">;"
            <div className="flex justify - between items - start">;"
              <h3 className="font - medium">{work.role_title}</h3>;"
              <span className="text - sm">;'
                {format_date (work.start_date)} - {work.is_current ? 'Present' : format_date (work.end_date)}
              </span>;
            </div>;"
            <div className="flex justify - between">;"
              <p className="text - sm">{work.company_name}</p>;
              {work.location && ("
                <span className="text - sm">{work.location}</span>)}
            </div>;
            {work.description && ("
              <p className="text - sm mt - 2 whitespace - pre - line">{work.description}</p>)}
          </div>))}
      </div>;
    </div>);
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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
}
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  ),;}
 if (sortedWorkExperience.length === 0) return null;
) 
}</div>) ) 
}</div> </div>) 
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              <p className="text-sm mt-2 whitespace-pre-line">{work.description}</p>"
          </div>
pr-12325
      </div>
    </div>
  )
<<<<<<< HEAD
}
=======
}
=======
}
>>>>>>> merged-prs-20250907-203621
              )}
            </div>
            {work.description && (
              <p className="text-sm mt-2 whitespace-pre-line">{work.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
