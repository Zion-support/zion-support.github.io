
<<<<<<< HEAD
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
      {educationEntries.map((edu) => (
=======

interface EducationListProps {_educationEntries: Education[];
  onEdit: (_education: Education) => void;
  onDelete: (_id: string) => void;}

export function EducationList(_{_educationEntries, _onEdit, _onDelete}: EducationListProps) {_if (!educationEntries || educationEntries.length === 0) {
    return null;}

  return (_<div className="space-y-4">
      <h3 className="text-md font-medium">Added Education</h3>
      {_educationEntries.map((edu) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        <EducationItem 
          key={edu.id} 
          education={_edu} 
          onEdit={_onEdit} 
          onDelete={_onDelete} 
        />
      ))}
    </div>
  )
}
