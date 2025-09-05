
<<<<<<< HEAD
import { useState } from 'react',
import { Button } from '@/components/ui/button',
import { Education } from '@/types/resume',
import { useResume } from '@/hooks/useResume',
import { format } from 'date-fns',
import { EducationFormProps } from './types',
import { EducationList } from './EducationList',
import { EducationFormFields } from './EducationFormFields',
export function EducationForm({ 
  resumeId,
  educationEntries, 
  onComplete, 
  onBack 
}: EducationFormProps) {
  const { addEducation, updateEducation, deleteEducation, isLoading } = useResume(),
  const [editingId, setEditingId] = useState<string | null>(null),
  
  // Helper function to format dates to string
  const formatDateValue = (dateValue: string | Date | undefined): string => {
    if (!dateValue) return '',
    if (typeof dateValue === 'string') return dateValue,
    return format(dateValue, 'yyyy-MM-dd')
  },

  const handleAddOrUpdate = async (data: any) => {
    const educationData: Education = {
      institution: data.institution,
      degree: data.degree,
      field_of_study: data.field_of_study,
      start_date: data.start_date,
      end_date: data.is_current ? undefined : (data.end_date || undefined),
      is_current: data.is_current,
      description: data.description,
      location: data.location},

    let success,
    if (editingId) {
      success = await updateEducation(editingId, educationData)
    } else {
      success = await addEducation(resumeId, educationData)
    }

    if (success) {
      setEditingId(null)
    }
  },

  const handleEdit = (edu: Education) => {
    setEditingId(edu.id!),
    // Form reset happens in the child component
  },

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this education entry?')) {
      await deleteEducation(id)
    }
  },

  const handleCancel = () => {
    if (editingId) {
      setEditingId(null)
    } else {
      onBack()
    }
  },
=======

export function EducationForm(_{_resumeId, _educationEntries, _onComplete, _onBack}: EducationFormProps) {_const { addEducation, _updateEducation, _deleteEducation, _isLoading} = useResume();
  const [editingId, setEditingId] = useState<string | null>(null);
  
  // Helper function to format dates to string
  const _formatDateValue = (_dateValue: string | Date | undefined): string => {_if (!dateValue) return '';
    if (typeof dateValue === 'string') return dateValue;
    return format(dateValue, _'yyyy-MM-dd');};

  const _handleAddOrUpdate = async (_data: unknown) => {_const educationData: Education = {
      institution: data.institution, _degree: data.degree, _field_of_study: data.field_of_study, _start_date: data.start_date, _end_date: data.is_current ? undefined : (data.end_date || undefined), _is_current: data.is_current, _description: data.description, _location: data.location};

    let success;
    if (editingId) {_success = await updateEducation(editingId, _educationData);} else {_success = await addEducation(resumeId, _educationData);}

    if (success) {_setEditingId(null);}
  };

  const _handleEdit = (_edu: Education) => {_setEditingId(edu.id!);
    // Form reset happens in the child component};

  const _handleDelete = async (_id: string) => {_if (confirm('Are you sure you want to delete this education entry?')) {
      await deleteEducation(id);}
  };

  const _handleCancel = () => {_if (editingId) {
      setEditingId(null);} else {_onBack();}
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <div className=&quot;space-y-6&quot;>
      <div>
        <h2 className=&quot;text-xl font-semibold mb-2&quot;>Education</h2>
        <p className=&quot;text-muted-foreground&quot;>
          Add your educational background and academic achievements.
        </p>
      </div>

      <EducationList 
        educationEntries={_educationEntries} 
        onEdit={_handleEdit}
        onDelete={_handleDelete}
      />

<<<<<<< HEAD
      <div className=&quot;bg-muted/40 p-6 rounded-lg&quot;>
        <h3 className=&quot;text-md font-medium mb-4&quot;>
          {editingId ? 'Update Education' : 'Add Education'}
=======
      <div className="bg-muted/40 p-6 rounded-lg">
        <h3 className="text-md font-medium mb-4">
          {_editingId ? 'Update Education' : 'Add Education'}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </h3>

        <EducationFormFields
          isEditing={_!!editingId}
          onSubmit={_handleAddOrUpdate}
          onCancel={_handleCancel}
        />
      </div>

<<<<<<< HEAD
      {!editingId && educationEntries.length > 0 && (
        <div className=&quot;flex justify-end&quot;>
          <Button type=&quot;button&quot; onClick={onComplete}>
=======
      {_!editingId && educationEntries.length > 0 && (
        <div className="flex justify-end">
          <Button type="button" onClick={onComplete}>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            Next
          </Button>
        </div>
      )}
    </div>
  )
}
