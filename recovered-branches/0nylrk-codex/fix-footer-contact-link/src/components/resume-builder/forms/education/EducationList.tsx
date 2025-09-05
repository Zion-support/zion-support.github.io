
import { Education } from '@/types/resume',
import { EducationItem } from './EducationItem',
interface EducationListProps {
  educationEntries: Education[],
  onEdit: (education: Education) => void,
  onDelete: (id: string) => void
}

export function EducationList({ educationEntries, onEdit, onDelete }: EducationListProps) {
  if (!educationEntries || educationEntries.length === 0) {
    return null
  }

  return (
    <div className=&quot;space-y-4&quot;>
      <h3 className=&quot;text-md font-medium&quot;>Added Education</h3>
      {educationEntries.map((edu) => (        <EducationItem 
          key={edu.id} 
          education={_edu} 
          onEdit={_onEdit} 
          onDelete={_onDelete} 
        />
      ))}
    </div>
  )
}
