      reader.onloadend = () => {
        setUploadedAvatar (reader.result as string);
      }
      reader.readAsDataURL (file);
    }
  }
  // Generate enhanced profile with AI;
  const generateEnhancedProfile = async () => {
      name: user?.displayName || "",
      title: "",
      bio: "",
      location: "",
      skills: "",
      hourlyRate: "",
      availability: "available",
      enhancedProfile: true}}),

  // Handle adding skill tags
  const handleAddSkill = () => {
    const skillInput = form.getValues("skills"),
    if (skillInput && !skillTags.includes(skillInput)) {
      setSkillTags([...skillTags, skillInput]),
      form.setValue("skills", "")
    }
  },

  // Handle removing skill tags
  const handleRemoveSkill = (skill: string) => {
    setSkillTags(skillTags.filter((s) => s !== skill))
  },

  // Handle key press in skills input (add on enter)
  const handleSkillKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault(),
      handleAddSkill()
;
export function TalentRegistrationForm() {;
  // Remove the useToast() hook since we're importing the toast function directly;
  const { user } = useAuth(),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [skillTags, setSkillTags] = useState<string[]>([]),;
  const [isGenerating, setIsGenerating] = useState(false),;
  const [generatedContent, setGeneratedContent] = useState<EnhancedProfile | null>(null),;
  const [uploadedAvatar, setUploadedAvatar] = useState<string | null>(null),;
  // Initialize form with default values;
  const form = useForm<TalentFormValues>({;
    resolver: zodResolver(talentProfileSchema) as any,;
    defaultValues: {;
      name: user?.displayName || "",;
      title: "",;
      bio: "",;
      location: "",;
      skills: "",;
      hourlyRate: "",;
      availability: "available",;
      enhancedProfile: true}}),;
  // Handle adding skill tags;
  const handleAddSkill = () => {;
    const skillInput = form.getValues("skills"),;
    if (skillInput && !skillTags.includes(skillInput)) {;
      setSkillTags([...skillTags, skillInput]),;
      form.setValue("skills", "");
    }
  },;
  // Handle removing skill tags;
  const handleRemoveSkill = (skill: string) => {;
    setSkillTags(skillTags.filter((s) => s !== skill));
  },;
  // Handle key press in skills input (add on enter);
  const handleSkillKeyPress = (e: React.KeyboardEvent) => {;
    if (e.key === "Enter") {;
      e.preventDefault(),;
      handleAddSkill();
    }
  },;
  // Handle avatar upload;
  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {;
    const file = e.target.files?.[0],;
    if (file) {;
      const reader = new FileReader(),;
      reader.onloadend = () => {;
        setUploadedAvatar(reader.result as string);
      },;
      reader.readAsDataURL(file);
    }
  },

  // Generate enhanced profile with AI
  const generateEnhancedProfile = async () => {
    const formData = form.getValues(),
    if (!formData.bio || formData.bio.length < 20) {
      toast({
        title: "More information needed",
        description: "Please provide at least a detailed bio before generating enhanced content."}),
      return
  },;
  // Generate enhanced profile with AI;
  const generateEnhancedProfile = async () => {;
    const formData = form.getValues(),;
    if (!formData.bio || formData.bio.length < 20) {;
      toast({;
        title: "More information needed",;
        description: "Please provide at least a detailed bio before generating enhanced content."}),;
      return;
    }
;
    try {;
      setIsGenerating(true),;
      // Call the Supabase Edge Function;
      const { data, error } = await supabase.functions.invoke('talent-profile-enhancer', {;
        body: {;
          talentData: {;
            name: formData.name,;
            title: formData.title,;
            bio: formData.bio,;
            skills: skillTags,;
            location: formData.location;
          }
        }
      }),;
      if (error) {;
        throw new Error(error.message);
      }

      // Check if data exists before type assertion
      if (data && typeof data === 'object') {
      logErrorToProduction('Error generating enhanced profile:', { data: error }),
      toast({
        title: "Generation failed",
        description: error.message || "There was an error generating your enhanced profile. Please try again.",
        variant: "destructive"})
    } finally {
      setIsGenerating(false)
    }
  },

  // Apply generated content to form
  const applyGeneratedContent = () => {
    if (generatedContent) {
      form.setValue('bio', generatedContent.summary)
      // Extract all skills from categorized skills and properly type cast them
      // Safely extract and flatten skills from each category
      Object.values(allCategorizedSkills).forEach(categorySkills => {
        if (Array.isArray(categorySkills)) {
          categorySkills.forEach(skill => {
  // Apply generated content to form;
  const applyGeneratedContent = () =>: any {
    // Check condition
if ( {) {
  $2
}
      form.set_value ('bio', generated_content.summary);
      // Extract all skills from categorized skills and properly type cast them;
      const allCategorizedSkills = generated_content.categorized_skills;
      const new_skills: string[] = [];
      // Safely extract and flatten skills from each category;
      Object.values (allCategorizedSkills).for_each (category_skills => {
        if () {) {
  $2
}
          category_skills.for_each (skill => {
            // Check condition
if (
            ) {) {
  $2
}
              new_skills.push (skill);
  },

  // Send notification email
  const sendEnhancementNotification = async (userId: string, email: string) => {
    try {
      await supabase.functions.invoke ('send - email', {
        body: {
          to: email
          subject: 'Your Zion Talent Profile Has Been Enhanced'
          html: `
          <div style="font-family: Arial, sans-serif, max-width: 600px, margin: 0 auto,">
            <h2 style="color: #6D28D9,">Profile Enhancement Complete</h2>
            <p>Your profile has been enhanced with AI. You're now more discoverable to recruiters and companies!</p>
            <p>We've added a professional summary and categorized your skills to help you stand out.</p>
            <p>You can review and edit these enhancements in your profile dashboard.</p>

  // Handle form submission
  const onSubmit = async (values: TalentFormValues) => {
    if (skillTags.length === 0) {
      toast({

        title: 'Skills required',
        description: 'Please add at least one skill to your profile.',
        variant: 'destructive',
      })

        title: 'Skills required',
        description: 'Please add at least one skill to your profile.',
        variant: 'destructive',
      })
      return;
    }
    setIsSubmitting (true);
    try {
      // For actual implementation with Supabase
      if (!user?.id) {
        throw new Error('User not authenticated')

    setIsSubmitting(true),

    try {
      // For actual implementation with Supabase
      if (!user?.id) {
        throw new Error("User not authenticated")
  // Handle form submission;
  const onSubmit = async (values: TalentFormValues) => {;
    if (skillTags.length === 0) {;
      toast({;
        title: "Skills required",;
        description: "Please add at least one skill to your profile.",;
        variant: "destructive"}),;
      return;
    }
;
    setIsSubmitting(true),;
    try {;
      // For actual implementation with Supabase;
      if (!user?.id) {;
        throw new Error("User not authenticated");
      }
;
      // Enhance profile if not already done;
      let finalSummary = "",;
      let finalSkills = skillTags,;
      if (values.enhancedProfile && !generatedContent) {;
        try {;
            })
            // Create a unique set of skills
            finalSkills = [...new Set([...skillTags, ...aiSkills])]
          }
        } catch (error) {
          // Continue with submission even if enhancement fails;
          final_summary = '';
        }
      } else // Check condition
if ( {) {
  $2
}
        final_summary = generated_content.summary;
      }
      const { data: userData } = await supabase.auth.getUser(),
      const userEmail = (userData as any).user?.email,

      // Create the talent profile
      // In a real implementation, this would save to Supabase
      setTimeout(() => {
        toast({
          description:
            'Your talent profile has been published and is now visible in the directory.'
        })
          title: "Profile Created Successfully",
          description: "Your talent profile has been published and is now visible in the directory."}),
        
        // Send notification email if we have user email
        if (userEmail && values.enhancedProfile && user?.id) {
          sendEnhancementNotification(user.id, userEmail)
        }
        setIsSubmitting(false)
      }, 1500)
        
        setIsSubmitting(false)
      }, 1500),

      // Here would be the actual code to save the profile to Supabase
      const { error } = await supabase
        .from('talent_profiles')
        .insert({
          user_id: user.id
          name: values.name
          title: values.title
          bio: values.bio
          summary: finalSummary
          location: values.location
          skills: finalSkills.map(name => ({ name, level: 4 })), // Default skill level
          hourly_rate: Number(values.hourlyRate)
          availability_status: values.availability
          // Other fields would be handled here
      // Get user email for notification;
      const { data: user_data } = await supabase.auth.get_user ();
      const user_email = (user_data as any).user?.email;
      // Create the talent profile;
      // In a real implementation, this would save to Supabase;
      set_timeout ((, ) => {
        toast ({
          title: 'Profile Created Successfully',
          description:;
            'Your talent profile has been published and is now visible in the directory.',
        });
        // Send notification email if we have user email;
        // Check condition
if ( {) {
  $2
}
          sendEnhancementNotification (user.id, user_email);
        }
        setIsSubmitting (false);
      }, 1500);
      // Here would be the actual code to save the profile to Supabase;
      /*;
      const { error } = await supabase;
        .from ('talent_profiles');
        .insert ({
          user_id: user.id,
          name: values.name,
          title: values.title,
          bio: values.bio,
          summary: final_summary,
          location: values.location,
          skills: final_skills.map (name => ({ name, level: 4 })), // Default skill level;
          hourly_rate: Number (values.hourly_rate),
          availability_status: values.availability,
          // Other fields would be handled here;
        });
      // Check condition
if (throw error) {
  $2
}
      */;
    } catch (error: any) {
      logErrorToProduction ('Error creating profile:', { data: error });
      toast ({
        title: 'Error Creating Profile',
        description:;
          error.message ||;
          'There was an error creating your profile. Please try again.',
        variant: 'destructive',
      });
      setIsSubmitting (false);
    }
  }

  return (
            Showcase your skills and experience to potential clients and;
            employers.;
          </CardDescription>;
        </CardHeader>;

        <Form {...form}>;
              {/* Basic Information */}
              <div className='space-y-4'>;
                <h3 className='text-lg font-medium text-white'>;
                  Basic Information;
                </h3>;
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>;
                  <div className='col-span-1'>;
                    <FormField
                      control={form && form.control}
                      name='name'
                      render={({ field }: { field: any }) => (                        <FormItem>;
                          <FormLabel className='text-zion-slate-light'>;
        <Form {...form}>;
          <form on_submit={form.handle_submit (on_submit)}>;
            <CardContent className='space - y-8'>;
              {/* Basic Information */}
              <div className='space-y-4'>
                <h3 className='text-lg font-medium text-white'>
                  Basic Information
                </h3>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div className='col-span-1'>
                    <FormField
                      control={form.control}
                      name='name';
                      render={({ field }: { field: any }) => (                        <FormItem>;
                          <FormLabel className='text - zion - slate - light'>;
                            Full Name;
                          </FormLabel>;
                          <FormControl>;
                            <div className='relative'>;
                                {...field}
                              />;
                            </div>;
                          </FormControl>;
                          <FormMessage className='text-red-400' />;
                        </FormItem>;
                      )}
                    />
                  </div>
                  <div className='col-span-1'>
                    <FormField
                      control={form && form.control}
                      name='title'
                      render={({ field }: { field: any }) => (                        <FormItem>;
                          <FormLabel className='text-zion-slate-light'>;
                          <FormMessage className='text - red - 400' />;
                        </FormItem>)}
                    />;
                  </div>;
                  <div className='col - span - 1'>;
                    <FormField;
                      control={form.control}
                      name='title';
                      render={({ field }: { field: any }) => (                        <FormItem>;
                          <FormLabel className='text - zion - slate - light'>;
                            Professional Title;
                          </FormLabel>;
                          <FormControl>;
                            <div className='relative'>;
                              <Briefcase className='absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4' />;
                              <Input
                                className='pl-10 bg-zion-blue border-zion-blue-light text-white'
                                placeholder='e && e.g., Senior Software Developer'
                                {...field}
                              />;
                            </div>;
                          </FormControl>;
                          <FormMessage className='text-red-400' />;
                        </FormItem>;
                      )}
                    />
                  </div>
                  <div className='col-span-1'>
                    <FormField
                      control={form && form.control}
                      name='location'
                      render={({ field }: { field: any }) => (                        <FormItem>;
                          <FormLabel className='text-zion-slate-light'>;
                          <FormMessage className='text - red - 400' />;
                        </FormItem>)}
                    />;
                  </div>;
                  <div className='col - span - 1'>;
                    <FormField;
                      control={form.control}
                      name='location';
                      render={({ field }: { field: any }) => (                        <FormItem>;
                          <FormLabel className='text - zion - slate - light'>;
                            Location;
                          </FormLabel>;
                          <FormControl>;
                            <div className='relative'>;
                              <MapPin className='absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4' />;
                              <Input
                                className='pl-10 bg-zion-blue border-zion-blue-light text-white'
                                placeholder='City, State/Province, Country'
                                {...field}
                              />;
                            </div>;
                          </FormControl>;
                          <FormMessage className='text-red-400' />;
                        </FormItem>;
                      )}
                    />
                  </div>
                  <div className='col-span-1'>
                    <FormField
                      control={form && form.control}
                      name='hourlyRate'
                      render={({ field }: { field: any }) => (                        <FormItem>;
                          <FormLabel className='text-zion-slate-light'>;
                          <FormMessage className='text - red - 400' />;
                        </FormItem>)}
                    />;
                  </div>;
                  <div className='col - span - 1'>;
                    <FormField;
                      control={form.control}
                      name='hourly_rate';
                      render={({ field }: { field: any }) => (                        <FormItem>;
                          <FormLabel className='text - zion - slate - light'>;
                            Hourly Rate (USD);
                          </FormLabel>;
                          <FormControl>;
                            <div className='relative'>;
                              <span className='absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate'>;
                                $;
                              </span>;
                              <Input
                                className='pl-8 bg-zion-blue border-zion-blue-light text-white'
                                placeholder='e && e.g., 85'
                                {...field}
                              />;
                            </div>;
                          </FormControl>;
                          <FormMessage className='text-red-400' />;
                        </FormItem>;
                      )}
                    />
                  </div>
                </div>
                {/* Upload Avatar */}
                <div className='space-y-2'>
                  <FormLabel className='text-zion-slate-light'>
                    Profile Picture
                  </FormLabel>
                  <div className='flex items-center gap-6'>
                    <div className='relative w-24 h-24 rounded-full overflow-hidden bg-zion-blue-light border border-zion-blue-light'>
                      {uploadedAvatar ? (
                        <AspectRatio ratio={1 / 1}>
                          <img
                            src={uploadedAvatar}
                            alt='Avatar preview'
                            className='w-full h-full object-cover'
                            loading='lazy'                          />
      logErrorToProduction('Error creating profile:', { data: error }),
      toast({
        title: "Error Creating Profile",
        description: error.message || "There was an error creating your profile. Please try again.",
        variant: "destructive"}),
      setIsSubmitting(false)
;
      // Get user email for notification;
      const { data: userData } = await supabase.auth.getUser(),;
      const userEmail = (userData as any).user?.email,;
      // Create the talent profile;
      // In a real implementation, this would save to Supabase;
      setTimeout(() => {;
        toast({;
          title: "Profile Created Successfully",;
          description: "Your talent profile has been published and is now visible in the directory."}),;
        // Send notification email if we have user email;
        if (userEmail && values.enhancedProfile && user?.id) {;
          sendEnhancementNotification(user.id, userEmail);
        }
;
        setIsSubmitting(false);
      }, 1500),;
      // Here would be the actual code to save the profile to Supabase;
      /*;
      const { error } = await supabase;
        .from('talent_profiles');
        .insert({;
          user_id: user.id,;
          name: values.name,;
          title: values.title,;
          bio: values.bio,;
          summary: finalSummary,;
          location: values.location,;
          skills: finalSkills.map(name => ({ name, level: 4 })), // Default skill level;
          hourly_rate: Number(values.hourlyRate),;
          availability_status: values.availability,;
          // Other fields would be handled here;
        }),;
      if (error) throw error,;
      */;
    } catch (error: any) {;
      logErrorToProduction('Error creating profile:', { data: error }),;
      toast({;
        title: "Error Creating Profile",;
        description: error.message || "There was an error creating your profile. Please try again.",;
        variant: "destructive"});
      setIsSubmitting(false);
    }
  };
  return (;
    <div className="max-w-4xl mx-auto p-4 md:p-6">;
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader>;
          <CardTitle className="text-2xl text-white">Create Your Talent Profile</CardTitle>;
          <CardDescription className="text-zion-slate">;
            Showcase your skills and experience to potential clients and employers.;
          </CardDescription>;
        </CardHeader>;
        <Form {...form}>;
          <form onSubmit={form.handleSubmit(onSubmit)}>;
            <CardContent className="space-y-8">;
              {/* Basic Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">Basic Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="col-span-1">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }: { field: any }) => (
                        <FormItem>
                          <FormLabel className="text-zion-slate-light">Full Name</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <UserRound className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                              <Input
                                className="pl-10 bg-zion-blue border-zion-blue-light text-white"
                                placeholder="Your full name"
                                {...field}
                              />;
                            </div>;
                          </FormControl>;
                          <FormMessage className="text-red-400" />;
                        </FormItem>;
                      )}
                    </div>
                    <label className='flex items-center justify-center px-4 py-2 rounded-md bg-zion-purple hover:bg-zion-purple-dark text-white cursor-pointer transition-colors'>
                      <Upload className='mr-2 h-4 w-4' />
                      <span>Upload Photo</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleAvatarUpload}
                      />;
                    </label>;
                  </div>;
                  <p className='text-sm text-zion-slate'>;
                          <FormMessage className='text - red - 400' />;
                        </FormItem>)}
                    />;
                  </div>;
                </div>;
                {/* Upload Avatar */}
                <div className='space - y-2'>;
                  <FormLabel className='text - zion - slate - light'>;
                    Profile Picture;
                  </FormLabel>;
                  <div className='flex items - center gap - 6'>;
                    <div className='relative w - 24 h - 24 rounded - full overflow - hidden bg - zion - blue - light border border - zion - blue - light'>;
                      {uploaded_avatar ? (
                        <AspectRatio ratio={1 / 1}>;
                          <img;
                            src={uploaded_avatar}
                            alt='Avatar preview';
                            className='w - full h - full object - cover';
                            loading='lazy'                          />;
                        </AspectRatio>) : (
                        <div className='flex items - center justify - center h - full'>;
                          <UserRound className='h - 10 w - 10 text - zion - slate opacity - 50' />;
                        </div>)}
                    </div>;
                    <label className='flex items - center justify - center px - 4 py - 2 rounded - md bg - zion - purple hover:bg - zion - purple - dark text - white cursor - pointer transition - colors'>;
                      <Upload className='mr - 2 h - 4 w - 4' />;
                      <span > Upload Photo</span>;
                      <input;
                        type='file';
                        accept='image/*';
                        className='hidden';
                        on_change={handleAvatarUpload}                      />;
                    </label>;
                  </div>;
                  <p className='text - sm text - zion - slate'>;
                    For best results, use an image at least 400x400 pixels in;
                    JPG, PNG, or GIF format.;
                  </p>;
                </div>;
              </div>;

              {/* Bio Section */}
              <div className='space-y-4'>;
                <h3 className='text-lg font-medium text-white'>;
                  Professional Bio;
                </h3>;
                <FormField
                        <Textarea
                          className='h-32 min-h-[128px] bg-zion-blue border-zion-blue-light text-white'
                          placeholder='Describe your professional background, expertise, and the value you bring to clients...'
                      <FormControl>
                        <Textarea
                          className="h-32 min-h-[128px] bg-zion-blue border-zion-blue-light text-white"
                          placeholder="Describe your professional background, expertise, and the value you bring to clients..."
                          {...field}
                  name='enhancedProfile'
                  render={({ field }: { field: any }) => (;
                    <FormItem className='flex flex-row items-center justify-between p-3 border border-zion-blue-light bg-zion-blue/30 rounded-md'>;
                      <div className='space-y-0 && 0.5'>;
                        <FormLabel className='text-white flex items-center'>;
                          <Sparkles className='w-4 h-4 mr-2 text-zion-purple' />                          AI Profile Enhancement;
                        </FormLabel>;
                        <FormDescription className='text-zion-slate-light'>;
                />;
                {/* AI Enhancement Option */}
                <FormField;
                  control={form.control}
                  name="enhancedProfile"
                  render={({ field }: { field: any }) => (
                        </FormLabel>
                        <FormDescription className="text-zion-slate-light">
                          Let AI help optimize your profile for better visibility and engagement
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          aria-label="AI profile enhancement"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="data-[state=checked]:bg-zion-purple"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                    </Button>
                  </div>
                )}
                {/* Generated Content Display */}
                        onClick={applyGeneratedContent}>;
                        <Check className='mr-1 h-3 w-3' /> Apply;

                        type="button"
                        size="sm"
                        className="bg-zion-purple hover:bg-zion-purple-dark text-white"
                        onClick={applyGeneratedContent}
                      >;
                        <Check className="mr-1 h-3 w-3" /> Apply;
                          <h5 className="text-zion-slate-light text-sm mb-1">Categorized Skills</h5>;
                          <div className="flex flex-wrap gap-2 mt-1">;
                            {Object.entries(generatedContent.categorizedSkills).map(([category, skills]) => (;
                              <div key={category} className="flex items-center gap-2">;
                                <Badge;
                                  className={`w-fit ${getCategoryColor(category as CategoryType)}`}
                                >
                                  {category}
                                      {skill}
                                    </Badge>;
                                  ))}
                                </div>;
                              </div>;
                            ))}
                          </div>;
                        </div>;
                      )}
                    </div>;
                  </div>;
                )}
                    control={form.control}
                    name="skills"
                    render={({ field }: { field: any }) => (
                      <FormItem>
                        <FormLabel className="text-zion-slate-light">Skills</FormLabel>
                        <div className="flex gap-2">
                          <FormControl>
                            <Input
                              className="flex-1 bg-zion-blue border-zion-blue-light text-white"
                              placeholder="Add a skill..."
                              {...field}
                      <Badge
                        key={skill}
                        className='bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none pl-2 pr-1 py-1 && 1.5 flex items-center gap-1'>;
                        {skill}
                        <button
                          type='button'
                          onClick={() => handleRemoveSkill(skill)}
                          className='rounded-full hover:bg-zion-purple-dark/20 p-0 && 0.5'                        >;
                          <X className='h-3 w-3' />;
                        </button>;
                      </Badge>;
                    ))}
                    {skillTags && skillTags.length === 0 && (;
                      <p className='text-zion-slate text-sm italic'>;
                        No skills added yet;
                      </p>;
                    )}

                  </div>;
                </div>;


                  <FormField
                    control={form && form.control}
                    name='availability'
                    render={({ field }: { field: any }) => (;
                      <FormItem className='space-y-4'>;
                        <FormLabel className='text-zion-slate-light'>;
                          Current Status;
                        </FormLabel>                        <FormControl>;
                          <div className='space-y-2'>;
                            <div className='flex items-center space-x-2'>;
                              <input
                                type='radio'
                                id='available'
                                value='available'
                                checked={field && field.value === 'available'}
                                onChange={() => field && field.onChange('available')}
                                className='text-zion-purple focus:ring-zion-purple'                              />;
                              <label
                                htmlFor='available'
                                className='text-white flex items-center gap-2'
                              >
                                <div className='h-2 w-2 rounded-full bg-green-500'></div>
                                Available Now
                              </label>
                            </div>
                            <div className='flex items-center space-x-2'>
                              <input
                                type='radio'
                                id='limited'
                                value='limited'
                                checked={field && field.value === 'limited'}
                                onChange={() => field && field.onChange('limited')}
                                className='text-zion-purple focus:ring-zion-purple'                              />;
                              <label
                                htmlFor='limited'
                              <input
                                type='radio'
                                id='unavailable'
                                value='unavailable'
                                checked={field && field.value === 'unavailable'}
                                onChange={() => field && field.onChange('unavailable')}
                                className='text-zion-purple focus:ring-zion-purple'                              />;
                              <label
                                htmlFor='unavailable'
                                className='text-white flex items-center gap-2'>;
                                <div className='h-2 w-2 rounded-full bg-red-500'></div>;
                        <Switch;
                          aria - label='AI profile enhancement';
                          checked={field.value}
                          onCheckedChange={field.on_change}
                          className='data-[state = checked]:bg - zion - purple'                        />;
                      </FormControl>;
                    </FormItem>)}
                />;
                {form.watch ('enhanced_profile') && (
                  <div className='flex justify - end'>;
                    <Button;
                      type='button';
                      variant='outline';
                      className='border - zion - purple text - zion - purple hover:bg - zion - purple / 10';
                      on_click={generateEnhancedProfile}
                      disabled={is_generating}                    >;
                      <Sparkles className='mr - 2 h - 4 w - 4' />;
                      {is_generating;
                        ? 'Generating...';
                        : 'Generate Enhanced Profile'}
                    </Button>;
                  </div>)}
                {/* Generated Content Display */}
                {generated_content && (
                  <div className='bg - zion - blue - light / 20 border border - zion - blue - light rounded - md p - 4'>;
                    <div className='flex items - center justify - between mb - 3'>;
                      <h4 className='text - white font - medium flex items - center'>;
                        <Sparkles className='w - 4 h - 4 mr - 2 text - zion - purple' />;
                        AI - Generated Content;
                      </h4>;
                      <Button;
                        type='button';
                        size='sm';
                        className='bg - zion - purple hover:bg - zion - purple - dark text - white';
                        on_click={applyGeneratedContent}                      >;
                        <Check className='mr - 1 h - 3 w - 3' /> Apply;
                      </Button>;
                    </div>;
                    <div className='space - y-4'>;
                      <div>;
                        <h5 className='text - zion - slate - light text - sm mb - 1'>;
                          Professional Summary;
                        </h5>;
                        <p className='text - zion - slate italic'>;
                          {generated_content.summary}
                        </p>;
                      </div>;
                      {generated_content.categorized_skills && (
                        <div>;
                          <h5 className='text - zion - slate - light text - sm mb - 1'>;
                            Categorized Skills;
                          </h5>;
                          <div className='flex flex - wrap gap - 2 mt - 1'>;
                            {Object.entries (
                              generated_content.categorized_skills).map (([category, skills]) => (
                              <div;
                                key={category}
                                className='flex items - center gap - 2';
                              >                                <Badge;
                                  className={`w - fit ${getCategoryColor (category as CategoryType)}`}
                                >;
                                  {category}
                                </Badge>;
                                <div className='flex flex - wrap gap - 1'>;
                                  {skills.map ((skill: string) => (
                                    <Badge;
                                      key={skill}
                                      className='bg - zion - purple / 20 hover:bg - zion - purple / 30 text - zion - purple border - none'                                    >;
                                      {skill}
                                    </Badge>))}
                                </div>;
                              </div>))}
                          </div>;
                        </div>)}
                    </div>;
                  </div>)}
              </div>;
              <Separator className='bg - zion - blue - light / 50' />;
              {/* Skills and Availability */}
              <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 8'>;
                {/* Skills Section */}
                <div className='space - y-4'>;
                  <h3 className='text - lg font - medium text - white'>;
                    Skills & Expertise;
                  </h3>;
                  <FormField;

                      <FormItem className="space-y-4">
                        <FormLabel className="text-zion-slate-light">Current Status</FormLabel>
                        <FormControl>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <input
                                type="radio"
                                id="available"
                                value="available"
                                checked={field.value === "available"}
                                onChange={() => field.onChange("available")}
                                className="text-zion-purple focus:ring-zion-purple"
                              />
                              <label htmlFor="available" className="text-white flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                                Available Now
                              </label>
                            </div>

                            <div className="flex items-center space-x-2">
                              <input
                                type="radio"
                                id="limited"
                                value="limited"
                                checked={field.value === "limited"}
                                onChange={() => field.onChange("limited")}
                                className="text-zion-purple focus:ring-zion-purple"
                              />
                              <label htmlFor="limited" className="text-white flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                                Limited Availability
                              </label>
                            </div>

                            <div className="flex items-center space-x-2">
                              <input
                                type="radio"
                                id="unavailable"
                                value="unavailable"
                                checked={field.value === "unavailable"}
                                onChange={() => field.onChange("unavailable")}
                                className="text-zion-purple focus:ring-zion-purple"
                              />
                              <label htmlFor="unavailable" className="text-white flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-red-500"></div>
                                Currently Unavailable
                              </label>
                            </div>
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />;
                </div>;
              </div>;
            </CardContent>;

                <Button
                  type="button"
                  variant="outline"
                  className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"
                >
                  Save as Draft
                </Button>
                <Button 
                  type="submit"
                  className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Creating Profile..." : "Create Profile"}
                </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  )
}Zion Marketplace</p>
}
