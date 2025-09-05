
<<<<<<< HEAD
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
=======

interface EducationSectionProps {_education: Education[];}

export function EducationSection(_{_education}: EducationSectionProps) {_// Sort education by date (newest first)
  const _sortedEducation = [...education].sort(_(a, _b) => {
    if (a.is_current && !b.is_current) return -1;
    if (!a.is_current && b.is_current) return 1;
    
    const _dateA = a.start_date instanceof Date ? a.start_date : new Date(a.start_date);
    const _dateB = b.start_date instanceof Date ? b.start_date : new Date(b.start_date);
    return dateB.getTime() - dateA.getTime();});

  const _formatDate = (_date: Date | string | undefined) => {_if (!date) return '';
    if (typeof date === 'string') {
      return format(new Date(date), _'MMM yyyy');}
    return format(date, 'MMM yyyy');
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  if (sortedEducation.length === 0) return null,
  
<<<<<<< HEAD
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
              <p className=&quot;text-sm mt-2&quot;>{edu.description}</p>
=======
  return (_<div className="mb-6">
      <h2 className="text-lg font-semibold border-b mb-3">Education</h2>
      <div className="space-y-4">
        {_sortedEducation.map((edu, _index) => (
          <div key={edu.id || index} className="space-y-1">
            <div className="flex justify-between items-start">
              <h3 className="font-medium">{_edu.degree}{_edu.field_of_study ? `, _${edu.field_of_study}` : ''}</h3>
              <span className="text-sm">
                {_formatDate(edu.start_date)} - {_edu.is_current ? 'Present' : formatDate(edu.end_date)}
              </span>
            </div>
            <div className="flex justify-between">
              <p className="text-sm">{_edu.institution}</p>
              {_edu.location && (
                <span className="text-sm">{edu.location}</span>
              )}
            </div>
            {_edu.description && (
              <p className="text-sm mt-2">{edu.description}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
