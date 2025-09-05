

export interface EducationFormProps {_resumeId: string;
  educationEntries: Education[];
  onComplete: () => void;
  onBack: () => void;}

export interface EducationItemProps {_education: Education;
  onEdit: (_education: Education) => void;
  onDelete: (_id: string) => void;}

export interface EducationFormFieldsProps {_isEditing: boolean;
  onSubmit: (_data: unknown) => Promise<void>;
  onCancel: () => void;}
