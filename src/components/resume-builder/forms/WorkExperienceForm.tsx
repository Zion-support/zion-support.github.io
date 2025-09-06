<<<<<<< HEAD
  end_date: z.string().optional(),
  is_current: z.boolean().default(false),
  description: z.string().optional(),
  location: z.string().optional()}),

type WorkExperienceFormValues = z.infer<typeof workExperienceSchema>;

<<<<<<< HEAD

  const handleEdit = (work: WorkExperience) => {
    setEditingId(work.id!);
    form.reset({
      ...work;
      start_date: formatDateValue(work.start_date),
      end_date: work.end_date && !work.is_current ? formatDateValue(work.end_date) : undefined})
  };

<<<<<<< HEAD

