import { Education } from "@/types/resume";
export interface EducationFormProps {
  resumeId: string;
  educationEntries: Education[];
  onComplete: () => void;
  onBack: () => void;
}
export interface EducationItemProps {
  education: Education;
  onEdit: (education: Education) => void;
  onDelete: (id: string) => void;
}

export interface EducationFormFieldsProps {
  isEditing: boolean;
  onSubmit: (data: any) => Promise<void>;
  onCancel: () => void;
}
;
export interface EducationItemProps {;
  education: Education,;
  onEdit: (education: Education) => void,;
  onDelete: (id: string) => void;
}
;
export interface EducationFormFieldsProps {;
  isEditing: boolean;
  onSubmit: (data: any) => Promise<void>;
  onCancel: () => void;
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
