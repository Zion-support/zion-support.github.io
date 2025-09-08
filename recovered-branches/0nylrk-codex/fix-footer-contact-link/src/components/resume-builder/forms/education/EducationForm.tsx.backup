
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {useState} from 'react';
import {Button} from '@/components / ui / button';
import {Education} from '@/types / resume';
import {use_resume} from '@/hooks / use_resume';
import {format} from 'date - fns';
import {EducationFormProps} from './types';
import {EducationList} from './EducationList';
import {EducationFormFields} from './EducationFormFields';

export function EducationForm({ ;

import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Education} from '@/types/resume';
import {useResume} from '@/hooks/useResume';
import {format} from 'date-fns';
import {EducationFormProps} from './types';
import {EducationList} from './EducationList';
import {EducationFormFields} from './EducationFormFields';
export function EducationForm({
export function EducationForm({ ;

  resumeId;
  educationEntries;
  onComplete;
  onBack;
}: EducationFormProps) {}
  const { addEducation, updateEducation, deleteEducation, isLoading } = useResume();
  const [editingId, setEditingId] = useState<string | null>(null);
  // Helper function to format dates to string;
  const formatDateValue = (dateValue: string | Date | undefined): string => {'
    if (!dateValue) return '';'
    if (typeof dateValue === 'string') return dateValue'
    return format(dateValue, 'yyyy-MM-dd')
  }
  const handleAddOrUpdate = async (data: any) => {}
    const educationData: Education = {}
      institution: data.institution;
      degree: data.degree;
      field_of_study: data.field_of_study;
      start_date: data.start_date;
      end_date: data.is_current ? undefined : (data.end_date |undefined)
      is_current: data.is_current;
      description: data.description;
      location: data.location}


<<<<<<< HEAD

=======
import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Education} from '@/types/resume';
import {useResume} from '@/hooks/useResume';
import {format} from 'date-fns';
import {EducationFormProps} from './types';
import {EducationList} from './EducationList';
import {EducationFormFields} from './EducationFormFields';
export function EducationForm({
export function EducationForm({ ;
>>>>>>> origin/cursor/delete-old-data-records-6bba
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


export function EducationForm(): any ({ ;
  resumeId;
  educationEntries, ;
  onComplete, ;
  onBack ;

}: EducationFormProps) {;
  const { addEducation, updateEducation, deleteEducation, isLoading } = useResume();
  const [editingId, setEditingId] = useState<string | null>(null);
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  // Helper function to format dates to string;
  const formatDateValue = (dateValue: string | Date | undefined): string => {;
    if (!dateValue) return '';
    if (typeof dateValue === 'string') return dateValue,;
    return format(dateValue, 'yyyy-MM-dd');
  };
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD



=======
    let success;
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
    let success;
>>>>>>> origin/cursor/delete-old-data-records-6bba
    if (editingId) {;
      success = await updateEducation(editingId, educationData);
    } else {;
      success = await addEducation(resumeId, educationData);
<<<<<<< HEAD


=======
    }
    if (success) {}
      setEditingId(null)
    }

    }
    if (success) {}
      setEditingId(null)
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }

    }

  };


<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
  };

  const handleEdit = (edu: Education) => {

    setEditingId(edu.id!)
    // Form reset happens in the child component;
  }
  const handleDelete = async (id: string) => {'
    if (confirm('Are you sure you want to delete this education entry?')) {}
      await deleteEducation(id)
    }
  }
  const handleCancel = () => {}
    if (editingId) {}
      setEditingId(null)
    } else {}
      onBack()

    }

>>>>>>> origin/cursor/delete-old-data-records-6bba

    }
    if (success) {;
      setEditingId(null);
    }

  };


  },;

  const handleEdit = (edu: Education) => {;
    setEditingId(edu && edu.id!),;

<<<<<<< HEAD
    // Form reset happens in the child component;
  };
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

    if (confirm('Are you sure you want to delete this education entry?')) {;
      await deleteEducation(id);
    }
  };

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const handleCancel = () => {;
    if (editingId) {;
      setEditingId(null);
    } else {;
      onBack();


<<<<<<< HEAD




=======
    }
>>>>>>> origin/cursor/delete-old-data-records-6bba

  return (

  return (

      <EducationList 
import {useState} from 'react';
import {Button} from '@/components / ui / button';
import {Education} from '@/types / resume';
import {use_resume} from '@/hooks / use_resume';
import {format} from 'date - fns';
import {EducationFormProps} from './types';
import {EducationList} from './EducationList';
import {EducationFormFields} from './EducationFormFields';
export function EducationForm({ ;

  resumeId;
  educationEntries;
  onComplete;
  onBack;)
}: EducationFormProps) {
  const { addEducation, updateEducation, deleteEducation, isLoading } = useResume();
  const [editingId, setEditingId] = useState<string | null>(null);
</string>
    <div className="space-y-6">"
</div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Education</h2>

        <p className="text-muted-foreground">
          Add your educational background and academic achievements.
        </p>
      </div>

      <EducationList 
</div>"
        <h2 className="text-xl font-semibold mb-2">Education</h2>""
        <p className="text-muted-foreground">"
</p>
      <EducationList;
pr-12325
        educationEntries={educationEntries} 

  return (

      <EducationList;
        educationEntries={educationEntries} 

        onEdit={handleEdit}
        onDelete={handleDelete}
      />

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      <EducationList

        educationEntries={educationEntries}
      <EducationList 
        educationEntries={educationEntries} 
        onEdit={handleEdit}
        onDelete={handleDelete}
      />


<<<<<<< HEAD
=======
      <div className="bg-muted/40 p-6 rounded-lg">
        <h3 className="text-md font-medium mb-4">
          {editingId ? 'Update Education' : 'Add Education'}
        </h3>
>>>>>>> origin/cursor/delete-old-data-records-6bba



      <div className="bg-muted/40 p-6 rounded-lg">
        <h3 className="text-md font-medium mb-4">
          {editingId ? 'Update Education' : 'Add Education'}
        </h3>
<<<<<<< HEAD

=======
}

  return (

import { useState } from 'react',;
import { Button } from '@/components/ui/button',;
import { Education } from '@/types/resume',;
import { useResume } from '@/hooks/useResume',;
import { format } from 'date-fns',;
import { EducationFormProps } from './types',;
import { EducationList } from './EducationList',;
import { EducationFormFields } from './EducationFormFields',;
;
export function EducationForm({ ;
  resumeId,;
  educationEntries, ;
  onComplete, ;
  onBack ;
} EducationFormProps) {;
  const { addEducation, updateEducation, deleteEducation, isLoading } = useResume(),;
  const [editingId, setEditingId] = useState<string | null>(null),;
  ;
  // Helper function to format dates to string;
  const formatDateValue = (dateValue:string | Date | undefined):string => {;
    if (!dateValue) return '',;
    if (typeof dateValue === 'string') return dateValue,;
    return format(dateValue, 'yyyy-MM-dd'),;
  },;
;
  const handleAddOrUpdate = async (data:any) => {;
    const educationData:Education = {;
      institution:data.institution,;
      degree:data.degree,;
      field_of_study:data.field_of_study,;
      start_date:data.start_date,;
      end_date:data.is_current ? undefined :(data.end_date || undefined),;
      is_current:data.is_current,;
      description:data.description,;
      location:data.location},;
;
    let success,;
    if (editingId) {;
      success = await updateEducation(editingId, educationData),;
    } else {;
      success = await addEducation(resumeId, educationData),;
    }
;
    if (success) {;
      setEditingId(null),;    }
  },;
;
  const handleEdit = (edu:Education) => {;
    setEditingId(edu.id!),;
    // Form reset happens in the child component;
  },;
;
  const handleDelete = async (id:string) => {;
    if (confirm('Are you sure you want to delete this education entry?')) {;
      await deleteEducation(id);
    }
  },;
;
  const handleCancel = () => {;
    if (editingId) {;
      setEditingId(null),;
    } else {;
      onBack(),;
    }
  },;
;
  return (;
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

        <EducationFormFields
          isEditing={!!editingId}
          onSubmit={handleAddOrUpdate}
          onCancel={handleCancel}

<<<<<<< HEAD

        />;
      </div>;

=======
        />;
      </div>;
        />;
      </div>;
>>>>>>> origin/cursor/delete-old-data-records-6bba

;
      {!editingId && educationEntries.length > 0 && (;
        <div className="flex justify-end">;

          <Button type="button" onClick={onComplete}>;
            Next;
          </Button>;
        </div>;
      )}
    </div>;
<<<<<<< HEAD

export /**
 * EducationForm - Function description
 */
function EducationForm() {

=======

  );
}

>>>>>>> origin/cursor/delete-old-data-records-6bba
  const { add_education, update_education, delete_education, is_loading } = use_resume ();

"
      <div className="bg-muted/40 p-6 rounded-lg">"
        <h3 className="text-md font-medium mb-4">"
</h3>
        </h3>"
    <div className="space-y-6">;"
      <div>;
        <h2 className="text-xl font-semibold mb-2">Education</h2>;""
        <p className="text-muted-foreground">;"
        </p>;
      </div>;
      />;

      <div className="bg-muted/40 p-6 rounded-lg">;"
        <h3 className="text-md font-medium mb-4">;"
        </h3>;
        <EducationFormFields;
          isEditing={!!editingId}
          onSubmit={handleAddOrUpdate}
          onCancel={handleCancel}

      <EducationList ;
        educationEntries={educationEntries} ;

      </div>;"
        <div className="flex justify-end">;"
          <Button type="button" onClick={onComplete}>;"

          ;
  const [editing_id, setEditingId] = useState < string | null>(null);
  // Helper function to format dates to string;

      institution: data.institution,

      degree: data.degree,
      field_of_study: data.field_of_study,
      start_date: data.start_date,
      end_date: data.is_current ? undefined : (data.end_date || undefined),
      is_current: data.is_current,
      description: data.description,
      location: data.location},
    let success;

if ( {) {
      success = await update_education (editing_id, education_data);
    } else {
  // TODO: Implement
      success = await add_education (resume_id, education_data);

    setEditingId (edu.id!),
    // Form reset happens in the child component;
  }
;

}
      await delete_education (id);
    }
  }
;

      on_back ();
    }
  }
;

        <p className="text - muted - foreground">;
          Add your educational background and academic achievements.;
        </p>;
      </div>;
      <EducationList;
        education_entries={education_entries}
        on_edit={handle_edit}
        on_delete={handle_delete}

          {editing_id ? 'Update Education' : 'Add Education'}
        </h3>;
        <EducationFormFields;
          is_editing={!!editing_id}
          on_submit={handleAddOrUpdate}
          on_cancel={handle_cancel}
        />;
      </div>;

          <Button type="button" on_click={on_complete}>;
            Next;
          </Button>;

        </div>)}
    </div>);

}
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
