

interface EducationListProps {_educationEntries: Education[];
  onEdit: (_education: Education) => void;
  onDelete: (_id: string) => void;}

export function EducationList(_{_educationEntries, _onEdit, _onDelete}: EducationListProps) {_if (!educationEntries || educationEntries.length === 0) {
    return null;}

  return (_<div className="space-y-4">
      <h3 className="text-md font-medium">Added Education</h3>
      {_educationEntries.map((edu) => (
        <EducationItem 
          key={edu.id} 
          education={_edu} 
          onEdit={_onEdit} 
          onDelete={_onDelete} 
        />
      ))}
    </div>
  );
}
