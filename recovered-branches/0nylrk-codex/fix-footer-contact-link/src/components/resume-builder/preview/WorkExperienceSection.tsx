
import { WorkExperience } from '@/types/resume';
import { format } from 'date-fns';

interface WorkExperienceSectionProps {
  workExperience: WorkExperience[];
}

export function WorkExperienceSection({ workExperience }: WorkExperienceSectionProps) {
  // Sort work experience by date (newest first)
  const sortedWorkExperience = [...workExperience].sort((a, b) => {
    if (a.is_current && !b.is_current) return -1;
    if (!a.is_current && b.is_current) return 1;
    
    const dateA = a.start_date instanceof Date ? a.start_date : new Date(a.start_date);
    const dateB = b.start_date instanceof Date ? b.start_date : new Date(b.start_date);
    return dateB.getTime() - dateA.getTime();
  });

  const formatDate = (date: Date | string | undefined) => {
    if (!date) return '';
    if (typeof date === 'string') {
      return format(new Date(date), 'MMM yyyy');
    }
    return format(date, 'MMM yyyy');
  };

  if (sortedWorkExperience.length === 0) return null;
  
  return (
    <div className=&quot;mb-6&quot;>
      <h2 className=&quot;text-lg font-semibold border-b mb-3&quot;>Professional Experience</h2>
      <div className=&quot;space-y-4&quot;>
        {sortedWorkExperience.map((work, index) => (
          <div key={work.id || index} className=&quot;space-y-1&quot;>
            <div className=&quot;flex justify-between items-start&quot;>
              <h3 className=&quot;font-medium&quot;>{work.role_title}</h3>
              <span className=&quot;text-sm&quot;>
                {formatDate(work.start_date)} - {work.is_current ? 'Present' : formatDate(work.end_date)}
              </span>
            </div>
            <div className=&quot;flex justify-between&quot;>
              <p className=&quot;text-sm&quot;>{work.company_name}</p>
              {work.location && (
                <span className=&quot;text-sm&quot;>{work.location}</span>
              )}
            </div>
            {work.description && (
              <p className=&quot;text-sm mt-2 whitespace-pre-line&quot;>{work.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
