
<<<<<<< HEAD
<<<<<<< HEAD
import { useState  } from 'react';
import { Button  } from '@/components/ui/button';
import { Education  } from '@/types/resume';
import { useResume  } from '@/hooks/useResume';
import { format  } from 'date-fns';
import { EducationFormProps  } from './types';
import { EducationList  } from './EducationList';
import { EducationFormFields } from './EducationFormFields';
<<<<<<< HEAD
export function EducationForm({ 
  resumeId;
  educationEntries;
  onComplete;
  onBack 
=======
}

export function EducationForm({
  resumeId,
  educationEntries,
  onComplete,
  onBack,
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
}: EducationFormProps) {
  const { addEducation, updateEducation, deleteEducation, isLoading } = useResume();
  const [editingId, setEditingId] = useState<string | null>(null),
  
  // Helper function to format dates to string
  const formatDateValue = null;
=======
<<<<<<< HEAD

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Education} from '@/types/resume';
import {useResume} from '@/hooks/useResume';
import {format} from 'date-fns';
import {EducationFormProps} from './types';
import {EducationList} from './EducationList';
import {EducationFormFields} from './EducationFormFields';
<<<<<<< HEAD
export function EducationForm({
=======
export function EducationForm({ ;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  resumeId;
  educationEntries
  onComplete
  onBack
}: EducationFormProps) {
  const { addEducation, updateEducation, deleteEducation, isLoading } = useResume();
  const [editingId, setEditingId] = useState<string | null>(null);
  // Helper function to format dates to string
  const formatDateValue = (dateValue: string | Date | undefined): string => {
    if (!dateValue) return '';
    if (typeof dateValue === 'string') return dateValue
    return format(dateValue, 'yyyy-MM-dd')
  }
  const handleAddOrUpdate = async (data: any) => {
    const educationData: Education = {
      institution: data.institution
      degree: data.degree
      field_of_study: data.field_of_study
      start_date: data.start_date
      end_date: data.is_current ? undefined : (data.end_date |undefined)
      is_current: data.is_current
      description: data.description
      location: data.location}
    let success;
    if (editingId) {
      success = await updateEducation(editingId, educationData)
    } else {
      success = await addEducation(resumeId, educationData)
=======
import { useState } from 'react',;
import { Button } from '@/components/ui/button',;
import { Education } from '@/types/resume',;
import { useResume } from '@/hooks/useResume',;
import { format } from 'date-fns',;
import { EducationFormProps } from './types',;
import { EducationList } from './EducationList',;
import { EducationFormFields } from './EducationFormFields',;
export function EducationForm({;
  resumeId,;
  educationEntries,;
  onComplete,;
  onBack;
}: EducationFormProps) {;
  const { addEducation, updateEducation, deleteEducation, isLoading } = useResume(),;
  const [editingId, setEditingId] = useState<string | null>(null),;
  // Helper function to format dates to string;
  const formatDateValue = (dateValue: string | Date | undefined): string => {;
    if (!dateValue) return '',;
    if (typeof dateValue === 'string') return dateValue,;
    return format(dateValue, 'yyyy-MM-dd');
  },;
  const handleAddOrUpdate = async (data: any) => {;
    const educationData: Education = {;
      institution: data.institution,;
      degree: data.degree,;
      field_of_study: data.field_of_study,;
      start_date: data.start_date,;
      end_date: data.is_current ? undefined : (data.end_date || undefined),;
      is_current: data.is_current,;
      description: data.description,;
      location: data.location},;
    let success,;
    if (editingId) {;
      success = await updateEducation(editingId, educationData);
    } else {;
      success = await addEducation(resumeId, educationData);
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    }
    if (success) {
      setEditingId(null)
    }
<<<<<<< HEAD
<<<<<<< HEAD
  }
=======
  };

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const handleEdit = (edu: Education) => {
    setEditingId(edu.id!)
    // Form reset happens in the child component
  }
  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this education entry?')) {
      await deleteEducation(id)
    }
  }
  const handleCancel = () => {
    if (editingId) {
      setEditingId(null)
    } else {
      onBack()
    }
<<<<<<< HEAD
  }
=======
  };
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  },;
  const handleEdit = (edu: Education) => {;
    setEditingId(edu.id!),;
    // Form reset happens in the child component;
  },;
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
  },
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-2">Education</h2>
        <p className="text-muted-foreground">
          Add your educational background and academic achievements.
        </p>
      </div>
<<<<<<< HEAD
      <EducationList
        educationEntries={educationEntries}
=======
      <EducationList 
        educationEntries={educationEntries} 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      <div className="bg-muted/40 p-6 rounded-lg">
        <h3 className="text-md font-medium mb-4">
          {editingId ? 'Update Education' : 'Add Education'}
        </h3>
        <EducationFormFields
          isEditing={!!editingId}
          onSubmit={handleAddOrUpdate}
          onCancel={handleCancel}
        />
      </div>
      {!editingId && educationEntries.length > 0 && (
        <div className="flex justify-end">
          <Button type="button" onClick={onComplete}>
            Next
          </Button>
        </div>
      )}
    </div>
  )
}