  enhancedProfile: z.boolean().transform(val => !!val),
  website: z.string().url("Please enter a valid URL").or(z.string().length(0)).optional()}),

type ServiceFormValues = z.infer<typeof serviceProfileSchema>;




      let finalSummary = values.bio;
      let finalServices = serviceTags;
      
          
          website: values.website || null}),

