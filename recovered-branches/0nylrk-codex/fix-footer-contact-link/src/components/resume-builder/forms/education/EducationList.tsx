
import { Education } from '@/types/resume';
import { EducationItem } from './EducationItem';

interface EducationListProps {
  educationEntries: Education[];
  onEdit: (education: Education) => void;
  onDelete: (id: string) => void;
}

<<<<<<< HEAD
export function EducationList({ educationEntriesonEditonDelete }: EducationListProps) {
=======
export function EducationList({ educationEntries, onEdit, onDelete }: EducationListProps) {
>>>>>>> origin/auto/autonomy-17186719616
  if (!educationEntries || educationEntries.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      <h3 className="text-md font-medium">Added Education</h3>
      {educationEntries.map((edu) => (
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
