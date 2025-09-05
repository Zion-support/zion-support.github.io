
import { Education } from '@/types/resume',
import { format } from 'date-fns',
interface EducationSectionProps {
  education: Education[]
}

export function EducationSection({ education }: EducationSectionProps) {
  // Sort education by date (newest first)
  const sortedEducation = [...education].sort((a, b) => {
    if (a.is_current && !b.is_current) return -1,
    if (!a.is_current && b.is_current) return 1,
    
    const dateA = a.start_date instanceof Date ? a.start_date : new Date(a.start_date),
    const dateB = b.start_date instanceof Date ? b.start_date : new Date(b.start_date),
    return dateB.getTime() - dateA.getTime()
  }),

  const formatDate = (date: Date | string | undefined) => {
    if (!date) return '',
    if (typeof date === 'string') {
      return format(new Date(date), 'MMM yyyy')
    }
    return format(date, 'MMM yyyy')
  },
  if (sortedEducation.length === 0) return null,
  
  return (
    <div className=&quot;mb-6&quot;>
      <h2 className=&quot;text-lg font-semibold border-b mb-3&quot;>Education</h2>
      <div className=&quot;space-y-4&quot;>
        {sortedEducation.map((edu, index) => (
          <div key={edu.id || index} className=&quot;space-y-1&quot;>
            <div className=&quot;flex justify-between items-start&quot;>
              <h3 className=&quot;font-medium&quot;>{edu.degree}{edu.field_of_study ? `, ${edu.field_of_study}` : ''}</h3>
              <span className=&quot;text-sm&quot;>
                {formatDate(edu.start_date)} - {edu.is_current ? 'Present' : formatDate(edu.end_date)}
              </span>
            </div>
            <div className=&quot;flex justify-between&quot;>
              <p className=&quot;text-sm&quot;>{edu.institution}</p>
              {edu.location && (
                <span className=&quot;text-sm&quot;>{edu.location}</span>
              )}
            </div>
            {edu.description && (
              <p className=&quot;text-sm mt-2&quot;>{edu.description}</p>            )}
          </div>
        ))}
      </div>
    </div>
  )
}
