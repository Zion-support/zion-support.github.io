
<<<<<<< HEAD
import { Education } from '@/types/resume',;
import { EducationItem } from './EducationItem',;
;
interface EducationListProps {;
  educationEntries:Education[],;
  onEdit:(education:Education) => void,;
  onDelete:(id:string) => void;
}
;
export function EducationList({ educationEntries, onEdit, onDelete } EducationListProps) {;
  if (!educationEntries || educationEntries.length === 0) {;
    return null,;
  }
;
  return (;
    <div className="space-y-4">;
      <h3 className="text-md font-medium">Added Education</h3>;
      {educationEntries.map((edu) => (;
        <EducationItem ;
          key={edu.id} ;
          education={edu} ;
          onEdit={onEdit} ;
          onDelete={onDelete} ;
        />;
      ))}
    </div>;
  ),;
=======
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
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
