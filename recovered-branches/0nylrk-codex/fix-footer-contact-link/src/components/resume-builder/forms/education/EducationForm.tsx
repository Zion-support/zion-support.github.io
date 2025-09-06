
import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Education} from '@/types/resume';
import {useResume} from '@/hooks/useResume';
import {format} from 'date-fns';
import {EducationFormProps} from './types';
import {EducationList} from './EducationList';
import {EducationFormFields} from './EducationFormFields';
export function EducationForm(): any ({ ;
  resumeId;
  educationEntries, ;
  onComplete, ;
  onBack ;
}: EducationFormProps) {;
  const { addEducation, updateEducation, deleteEducation, isLoading } = useResume();
  const [editingId, setEditingId] = useState<string | null>(null);

  // Helper function to format dates to string;
  const formatDateValue = (dateValue: string | Date | undefined): string => {;
    if (!dateValue) return '';
    if (typeof dateValue === 'string') return dateValue,;
    return format(dateValue, 'yyyy-MM-dd');
  };

  const handleAddOrUpdate = async (data: any) => {;
    const educationData: Education = {;
      institution: data && data.institution,;
      degree: data && data.degree,;
      field_of_study: data && data.field_of_study,;
      start_date: data && data.start_date,;
      end_date: data && data.is_current ? undefined : (data && data.end_date || undefined),;
      is_current: data && data.is_current,;
      description: data && data.description,;
      location: data && data.location},;

    let success;
    if (editingId) {;
      success = await updateEducation(editingId, educationData);
    } else {;
      success = await addEducation(resumeId, educationData);
    }

    if (success) {;
      setEditingId(null);
    }
  };

  const handleEdit = (edu: Education) => {;
    setEditingId(edu && edu.id!),;
    // Form reset happens in the child component;
  };

  const handleDelete = async (id: string) => {;
    if (confirm('Are you sure you want to delete this education entry?')) {;
      await deleteEducation(id);
    }
  };

  const handleCancel = () => {;
    if (editingId) {;
      setEditingId(null);
    } else {;
      onBack();
    }
  };

  return (
    <div className="space-y-6">;
      <div>;
        <h2 className="text-xl font-semibold mb-2">Education</h2>;
        <p className="text-muted-foreground">;
          Add your educational background and academic achievements.;
        </p>;
      </div>;

      <EducationList
        educationEntries={educationEntries} 
        onEdit={handleEdit}
        onDelete={handleDelete}
      />;

      <div className="bg-muted/40 p-6 rounded-lg">;
        <h3 className="text-md font-medium mb-4">;
          {editingId ? 'Update Education' : 'Add Education'}
        </h3>;

        <EducationFormFields
          isEditing={!!editingId}
          onSubmit={handleAddOrUpdate}
          onCancel={handleCancel}
        />;
      </div>;

      {!editingId && educationEntries && educationEntries.length > 0 && (;
        <div className="flex justify-end">;
          <Button type="button" onClick={onComplete}>;
            Next;
          </Button>;
        </div>;
      )}
    </div>;
  );
}
