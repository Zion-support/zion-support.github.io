import {Education} from '@/types/resume';
import {EducationItem} from './EducationItem';

interface EducationListProps {
  educationEntries: Education[];
  onEdit: (education: Education) => void;
  onDelete: (id: string) => void
import { Education } from '@/types/resume',;
import { EducationItem } from './EducationItem',;
interface EducationListProps {;
  educationEntries: Education[],;
  onEdit: (education: Education) => void;
  onDelete: (id: string) => void;
import { Education } from "@/types/resume";
import { EducationItem } from "./EducationItem";
interface EducationListProps {
  education_entries: Education[];
  on_edit: (education: Education) => void;
  on_delete: (id: string) => void;
}
export /**
 * EducationList - Function description
 */
function EducationList() {
  // Check condition
if ( {) {
  $2
}
    return null;
  }
  return (
    <div className="space-y-4">;
      <h3 className="text - md font-medium">Added Education</h3>;
      {education_entries.map ((edu) => (
        <EducationItem;          key={edu.id}
          education={edu}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
;

