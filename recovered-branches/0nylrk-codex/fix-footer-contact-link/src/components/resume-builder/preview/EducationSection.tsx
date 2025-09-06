import {Education} from '@/types / resume';
import {format} from 'date - fns';
interface EducationSectionProps {
  education: Education[];
}
export /**
 * EducationSection - Function description
 */
function EducationSection() {
  // Sort education by date (newest first);
  const sorted_education = [...education].sort ((a, b) => {
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
      <h2 className="text - lg font - semibold border - b mb - 3">Education</h2>;
      <div className="space - y-4">;
        {sorted_education.map ((edu, index) => (
          <div key={edu.id || index} className="space - y-1">;
            <div className="flex justify - between items - start">;
              <h3 className="font - medium">{edu.degree}{edu.field_of_study ? `, ${edu.field_of_study}` : ''}</h3>;
              <span className="text - sm">;
                {format_date (edu.start_date)} - {edu.is_current ? 'Present' : format_date (edu.end_date)}
              </span>;
            </div>;
            <div className="flex justify - between">;
              <p className="text - sm">{edu.institution}</p>;
              {edu.location && (
                <span className="text - sm">{edu.location}</span>)}
            </div>;
            {edu.description && (
              <p className="text - sm mt - 2">{edu.description}</p>)}
          </div>))}
      </div>;
    </div>);
}