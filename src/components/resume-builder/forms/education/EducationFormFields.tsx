<<<<<<< HEAD
  end_date: z.string().optional(),
  is_current: z.boolean().default(false),
  description: z.string().optional(),
  location: z.string().optional()}),

type EducationFormValues = z.infer<typeof educationSchema>;

<<<<<<< HEAD

