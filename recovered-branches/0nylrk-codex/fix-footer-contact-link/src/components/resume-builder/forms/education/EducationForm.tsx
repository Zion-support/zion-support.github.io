

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

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-2">Education</h2>
        <p className="text-muted-foreground">
          Add your educational background and academic achievements.
        </p>
      </div>

      <EducationList 
        educationEntries={_educationEntries} 
        onEdit={_handleEdit}
        onDelete={_handleDelete}
      />

      <div className="bg-muted/40 p-6 rounded-lg">
        <h3 className="text-md font-medium mb-4">
          {_editingId ? 'Update Education' : 'Add Education'}
        </h3>

        <EducationFormFields
          isEditing={_!!editingId}
          onSubmit={_handleAddOrUpdate}
          onCancel={_handleCancel}
        />
      </div>

      {_!editingId && educationEntries.length > 0 && (
        <div className="flex justify-end">
          <Button type="button" onClick={onComplete}>
            Next
          </Button>
        </div>
      )}
    </div>
  );
}
