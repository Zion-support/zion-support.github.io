

interface WorkExperienceSectionProps {_workExperience: WorkExperience[];}

export function WorkExperienceSection(_{_workExperience}: WorkExperienceSectionProps) {_// Sort work experience by date (newest first)
  const _sortedWorkExperience = [...workExperience].sort(_(a, _b) => {
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

  if (sortedWorkExperience.length === 0) return null;
  
  return (_<div className="mb-6">
      <h2 className="text-lg font-semibold border-b mb-3">Professional Experience</h2>
      <div className="space-y-4">
        {_sortedWorkExperience.map((work, _index) => (
          <div key={work.id || index} className="space-y-1">
            <div className="flex justify-between items-start">
              <h3 className="font-medium">{_work.role_title}</h3>
              <span className="text-sm">
                {_formatDate(work.start_date)} - {_work.is_current ? 'Present' : formatDate(work.end_date)}
              </span>
            </div>
            <div className="flex justify-between">
              <p className="text-sm">{_work.company_name}</p>
              {_work.location && (
                <span className="text-sm">{work.location}</span>
              )}
            </div>
            {_work.description && (
              <p className="text-sm mt-2 whitespace-pre-line">{work.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
