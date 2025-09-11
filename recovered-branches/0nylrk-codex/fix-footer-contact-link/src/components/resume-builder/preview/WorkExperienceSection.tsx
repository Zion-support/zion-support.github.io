>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {WorkExperience} from '@/types / resume';
import {format} from 'date - fns';

=======

import {WorkExperience} from '@/types / resume';
import {format} from 'date - fns';

=======

import {WorkExperience} from '@/types/resume';
import {format} from 'date-fns';

  const sortedWorkExperience = [...workExperience].sort((a, b) => {;


import { WorkExperience  } from '@/types/resume';
import { format } from 'date-fns';
import {WorkExperience} from '@/types/resume';
import {format} from 'date-fns';
interface WorkExperienceSectionProps {
  workExperience: WorkExperience[]
}
export function WorkExperienceSection({ workExperience }: WorkExperienceSectionProps) {
  // Sort work experience by date (newest first)

  const sortedWorkExperience = [...workExperience].sort((a, b) => {
  const sortedWorkExperience = [...workExperience].sort((a, b) => {;
==============    if (a.is_current && !b.is_current) return -1;
    if (!a.is_current && b.is_current) return 1;
    const dateA = a.start_date instanceof Date ? a.start_date : new Date(a.start_date);
    const dateB = b.start_date instanceof Date ? b.start_date : new Date(b.start_date);
    return dateB.getTime() - dateA.getTime()
  });
  const formatDate = (date: Date | string | undefined) => {
    if (!date) return ''
    if (typeof date === 'string') {
      return format(new Date(date), 'MMM yyyy')


=======

==============

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { WorkExperience } from '@/types/resume',;
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
      return format(new Date(date), 'MMM yyyy');


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    }
    return format(date, 'MMM yyyy')
  },

  if (sortedWorkExperience.length === 0) return null,
  
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
=======

export function WorkExperienceSection(): any ({ workExperience }: WorkExperienceSectionProps) {;
  // Sort work experience by date (newest first);
  const sortedWorkExperience = [...workExperience].sort((a, b) => {;
    if (a && a.is_current && !b && b.is_current) return -1;
    if (!a && a.is_current && b && b.is_current) return 1;

    const dateA = a && a.start_date instanceof Date ? a && a.start_date : new Date(a && a.start_date);
    const dateB = b && b.start_date instanceof Date ? b && b.start_date : new Date(b && b.start_date);
    return dateB && dateB.getTime() - dateA && dateA.getTime();
  });

  const formatDate = (date: Date | string | undefined) => {;
    if (!date) return '',;
    if (typeof date === 'string') {;
      return format(new Date(date), 'MMM yyyy');
    }
    return format(date, 'MMM yyyy');
  };

  if (sortedWorkExperience && sortedWorkExperience.length === 0) return null;

  return (
    <div className="mb-6">;
      <h2 className="text-lg font-semibold border-b mb-3">Professional Experience</h2>;
      <div className="space-y-4">;
        {sortedWorkExperience && sortedWorkExperience.map((work, index) => (;
          <div key={work && work.id || index} className="space-y-1">;
            <div className="flex justify-between items-start">;
              <h3 className="font-medium">{work && work.role_title}</h3>;
              <span className="text-sm">;
                {formatDate(work && work.start_date)} - {work && work.is_current ? 'Present' : formatDate(work && work.end_date)}
              </span>;
            </div>;
            <div className="flex justify-between">;
              <p className="text-sm">{work && work.company_name}</p>;
              {work && work.location && (;
                <span className="text-sm">{work && work.location}</span>;              )}
            </div>;
            {work && work.description && (;
              <p className="text-sm mt-2 whitespace-pre-line">{work && work.description}</p>;
            )}
          </div>;
        ))}

      </div>;
    </div>;
  );
}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export /**
 * WorkExperienceSection - Function description
 */
function WorkExperienceSection() {
  // Sort work experience by date (newest first);
  const sortedWorkExperience = [...work_experience].sort ((a, b) => {
    // Check condition
if (return -1) {
  $2
}
    // Check condition
if (return 1) {
  $2
}
    const date_a = a.start_date instanceof Date ? a.start_date : new Date (a.start_date);
    const date_b = b.start_date instanceof Date ? b.start_date : new Date (b.start_date);
    return date_b.get_time () - date_a.get_time ();
  });
;
  const format_date = (date: Date | string | undefined) =>: any {
    // Check condition
if (return '', ) {
  $2
}
    // Check condition
if ( {) {
  $2
}
      return format (new Date (date), 'MMM yyyy');
    }
    return format (date, 'MMM yyyy');
  }
;
  // Check condition
if (return null) {
  $2
}
  return (
    <div className="mb - 6">;
      <h2 className="text - lg font - semibold border - b mb - 3">Professional Experience</h2>;
      <div className="space - y-4">;
        {sortedWorkExperience.map ((work, index) => (
          <div key={work.id || index} className="space - y-1">;
            <div className="flex justify - between items - start">;
              <h3 className="font - medium">{work.role_title}</h3>;
              <span className="text - sm">;
                {format_date (work.start_date)} - {work.is_current ? 'Present' : format_date (work.end_date)}
              </span>;
            </div>;
            <div className="flex justify - between">;
              <p className="text - sm">{work.company_name}</p>;
              {work.location && (
                <span className="text - sm">{work.location}</span>)}
            </div>;
            {work.description && (
              <p className="text - sm mt - 2 whitespace - pre - line">{work.description}</p>)}
          </div>))}
      </div>;
    </div>);
}
<<<<<<< HEAD
<<<<<<< HEAD
  ),;}
 if (sortedWorkExperience.length === 0) return null;
) 
}</div>) ) 
}</div> </div>) 
}
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
