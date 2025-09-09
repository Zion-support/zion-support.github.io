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
      is_current: data.is_current,,
  description: data.description,;
      location: data.location},;
    let success,;
      success = await updateEducation(editingId, educationData);
    } else {;
      success = await addEducation(resumeId, educationData);
    }
    if (success) {}
      setEditingId(null)
    }

    }
    if (success) {;
      setEditingId(null);
    }

  };

  },;

  const handleEdit = (edu: Education) => {;
    setEditingId(edu && edu.id!),;
    // Form reset happens in the child component
};  const handleDelete = async (id: string) => {;
    if (confirm('Are you sure you want to delete this education entry?')) {;
      await deleteEducation(id);
    }
  };



