<<<<<<< HEAD
import { Education } from '@/types/resume';
import { EducationItem } from './EducationItem';

interface EducationListProps {
  educationEntries: Education[];
  onEdit: (education: Education) => void;
  onDelete: (id: string) => void;
}

export function EducationList({
  educationEntries,
  onEdit,
  onDelete,
}: EducationListProps) {
  if (!educationEntries || educationEntries.length === 0) {
    return null;
  }

  return (
    <div className='space-y-4'>
      <h3 className='text-md font-medium'>Added Education</h3>
      {educationEntries.map(edu => (
        <EducationItem
          key={edu.id}
          education={edu}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
=======
 <EducationItem key= {
  edu.id 
}education= {
  edu 
}onEdit= {
  onEdit 
}onDelete= {
  onDelete 
}/>) ) 
}</div>) 
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
