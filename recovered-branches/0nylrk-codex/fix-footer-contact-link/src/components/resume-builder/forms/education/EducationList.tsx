
<<<<<<< HEAD
import { Education  } from '@/types/resume';
import { EducationItem } from './EducationItem';
interface EducationListProps {
  educationEntries: Education[];
  onEdit: (education: Education) => void;
  onDelete: (id: string) => void
=======
import { Education } from '@/types/resume',;
import { EducationItem } from './EducationItem',;
interface EducationListProps {;
  educationEntries: Education[],;
  onEdit: (education: Education) => void;
  onDelete: (id: string) => void;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
export function EducationList({
  educationEntries
  onEdit
  onDelete
}: EducationListProps) {
  if (!educationEntries |educationEntries.length === 0) {
    return null;
  }
<<<<<<< HEAD
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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