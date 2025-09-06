
<<<<<<< HEAD
<<<<<<< HEAD
import { Education  } from '@/types/resume';
import { EducationItem } from './EducationItem';
=======
import {Education} from '@/types/resume';
import {EducationItem} from './EducationItem';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
export function EducationList({
  educationEntries
  onEdit
  onDelete
}: EducationListProps) {
  if (!educationEntries |educationEntries.length === 0) {
=======
import {Education} from '@/types/resume';
import {EducationItem} from './EducationItem';
interface EducationListProps {;
  educationEntries: Education[],;
  onEdit: (education: Education) => void,;
  onDelete: (id: string) => void;
}

export function EducationList(): any ({ educationEntries, onEdit, onDelete }: EducationListProps) {;
  if (!educationEntries || educationEntries && educationEntries.length === 0) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return null;
  }





  return (

    <div className="space-y-4">;
      <h3 className="text-md font-medium">Added Education</h3>;
      {educationEntries && educationEntries.map((edu) => (;
        <EducationItem
          key={edu && edu.id} 
          education={edu} 
          onEdit={onEdit} 
          onDelete={onDelete} 
        />;
      ))}
    </div>;
  );
}

=======
import { Education  } from '@/types / resume';
import { EducationItem  } from './EducationItem';
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
    <div className="space - y-4">;
      <h3 className="text - md font - medium">Added Education</h3>;
      {education_entries.map ((edu) => (
        <EducationItem;
          key={edu.id}
          education={edu}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
<<<<<<< HEAD
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  )
}
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
