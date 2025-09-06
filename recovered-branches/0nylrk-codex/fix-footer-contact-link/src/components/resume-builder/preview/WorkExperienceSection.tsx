
<<<<<<< HEAD
import { WorkExperience  } from '@/types/resume';
import { format } from 'date-fns';
interface WorkExperienceSectionProps {
  workExperience: WorkExperience[]
}
export function WorkExperienceSection({ workExperience }: WorkExperienceSectionProps) {
  // Sort work experience by date (newest first)

  const sortedWorkExperience = [...workExperience].sort((a, b) => {
    if (a.is_current && !b.is_current) return -1;
    if (!a.is_current && b.is_current) return 1;
    const dateA = a.start_date instanceof Date ? a.start_date : new Date(a.start_date);
    const dateB = b.start_date instanceof Date ? b.start_date : new Date(b.start_date);
    return dateB.getTime() - dateA.getTime()
  });
  const formatDate = (date: Date | string | undefined) => {
    if (!date) return ''
    if (typeof date === 'string') {
      return format(new Date(date), 'MMM yyyy')
    }
    return format(date, 'MMM yyyy')
  }
  if (sortedWorkExperience.length === 0) return null;

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
import {WorkExperience} from '@/types/resume';
import {format} from 'date-fns';
interface WorkExperienceSectionProps {;
  workExperience: WorkExperience[];
}

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
                <span className="text-sm">{work && work.location}</span>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              )}
            </div>;
            {work && work.description && (;
              <p className="text-sm mt-2 whitespace-pre-line">{work && work.description}</p>;
            )}
          </div>;
        ))}
<<<<<<< HEAD
      </div>
    </div>
  )
}
=======
      </div>;
    </div>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
