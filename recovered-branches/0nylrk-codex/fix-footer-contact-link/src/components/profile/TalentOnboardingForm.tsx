



const talentSchema = z.object({
  // Step 1: Basic Info
  basicInfo: z.object({







};




    const { data:{ publicUrl } } = supabase.storage;
      .from('resumes');
      .getPublicUrl(fileName),;
    ;
    return publicUrl,;
  },;
;
  // Rest of the file remains unchanged...;
  // [Previous implementation continues...];
;
  return null,;   //Step 1: Basic Info basicInfo: z.object ({
  ) .optional () .default ([]);
cv: z.any () .optional () 
}) 
});
type TalentFormValues = z.infer<typeof talentSchema>;
const form = useForm<TalentFormValues> ({
  resolver: zodResolver (talentSchema), defaultValues: {
  basicInfo: {
  cv: undefined 


