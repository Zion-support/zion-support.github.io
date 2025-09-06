import {WorkExperience} from '@/types / resume';
import {format} from 'date - fns';
interface WorkExperienceSectionProps {
  work_experience: WorkExperience[];
}
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