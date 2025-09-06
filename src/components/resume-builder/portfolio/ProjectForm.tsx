  pdf_url: z.string().optional()}),

type ProjectFormValues = z.infer<typeof projectSchema>;

  const isEditing = !!project;
  
  
  const onSubmit = async (data: ProjectFormValues) => {
    if (!user) return;
    
      
      let success = false;
      
  
