<<<<<<< HEAD



import {Education} from '@/types/resume';
import {EducationItem} from './EducationItem';


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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
import { Education } from "@/types/resume";
import { EducationItem } from "./EducationItem";
interface EducationListProps {
  educationEntries: Education[];
  onEdit: (education: Education) => void;
  onDelete: (id: string) => void;
>>>>>>> main
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
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
