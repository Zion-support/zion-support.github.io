
<<<<<<< HEAD

  enhancedProfile: z.boolean().transform(val => !!val),
  website: z.string().url("Please enter a valid URL").or(z.string().length(0)).optional()}),

type ServiceFormValues = z.infer<typeof serviceProfileSchema>;


<<<<<<< HEAD



<<<<<<< HEAD
      let finalSummary = values.bio;
      let finalServices = serviceTags;
      
<<<<<<< HEAD
          
<<<<<<< HEAD
          website: values.website || null}),


