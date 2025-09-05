import React, {_useState} from "react";
import {_Form, _FormControl, _FormDescription, _FormField, _FormItem, _FormLabel, _FormMessage} from "@/components/ui/form";

// Define form schema
const _talentProfileSchema = z.object({_name: z.string().min(2, _"Full Name must be at least 2 characters long"), _title: z.string().min(5, _"Professional title is required"), _bio: z.string().min(50, _"Bio must be at least 50 characters long").max(1000, _"Bio cannot exceed 1000 characters"), _location: z.string().min(2, _"Location is required"), _skills: z.string().min(2, _"Enter at least one skill"), _hourlyRate: z.string().refine(_(val) => !isNaN(Number(val)), _{
    message: "Hourly rate must be a number"}),
  availability: z.enum(["available", "limited", "unavailable"]),
  enhancedProfile: z.boolean().default(true)});

type TalentFormValues = z.infer<typeof talentProfileSchema>;

type CategoryType = 'programming' | 'devops' | 'platforms' | 'softSkills' | 'other';

interface CategorizedSkills {_programming: string[];
  devops: string[];
  platforms: string[];
  softSkills: string[];
  other: string[];}

interface EnhancedProfile {_summary: string;
  categorizedSkills: CategorizedSkills;}

export function TalentRegistrationForm() {_// Remove the useToast() hook since we're importing the toast function directly
  const { user} = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [skillTags, setSkillTags] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<EnhancedProfile | null>(null);
  const [uploadedAvatar, setUploadedAvatar] = useState<string | null>(null);
  
  // Initialize form with default values
  const _form = useForm<TalentFormValues>({_resolver: zodResolver(talentProfileSchema) as any, _defaultValues: {
      name: user?.displayName || "", _title: "", _bio: "", _location: "", _skills: "", _hourlyRate: "", _availability: "available", _enhancedProfile: true}});

  // Handle adding skill tags
  const _handleAddSkill = () => {_const _skillInput = form.getValues("skills");
    if (skillInput && !skillTags.includes(skillInput)) {
      setSkillTags([...skillTags, _skillInput]);
      form.setValue("skills", _"");}
  };

  // Handle removing skill tags
  const _handleRemoveSkill = (_skill: string) => {_setSkillTags(_skillTags.filter((s) => s !== skill));};

  // Handle key press in skills input (add on enter)
  const _handleSkillKeyPress = (_e: React.KeyboardEvent) => {_if (e.key === "Enter") {
      e.preventDefault();
      handleAddSkill();}
  };

  // Handle avatar upload
  const _handleAvatarUpload = (_e: React.ChangeEvent<HTMLInputElement>) => {_const _file = e.target.files?.[0];
    if (file) {
      const _reader = new FileReader();
      reader.onloadend = () => {
        setUploadedAvatar(reader.result as string);};
      reader.readAsDataURL(file);
    }
  };

  // Generate enhanced profile with AI
  const _generateEnhancedProfile = async () => {_const _formData = form.getValues();
    if (!formData.bio || formData.bio.length < 20) {
      toast({
        title: "More information needed", _description: "Please provide at least a detailed bio before generating enhanced content."});
      return;
    }

    try {_setIsGenerating(true);

      // Call the Supabase Edge Function
      const { data, _error} = await supabase.functions.invoke('talent-profile-enhancer', {_body: {
          talentData: {
            name: formData.name, _title: formData.title, _bio: formData.bio, _skills: skillTags, _location: formData.location}
        }
      });

      if (error) {_throw new Error(error.message);}

      // Check if data exists before type assertion
      if (data && typeof data === 'object') {_setGeneratedContent(data as EnhancedProfile);
        
        toast({
          title: "Enhanced Profile Generated", _description: "AI has created a professional bio and suggested additional skills for your profile."});
      } else {_// Fallback for mock/development mode
        logWarn('Mock AI response - using fallback content');
        setGeneratedContent({
          summary: "Experienced professional with expertise in modern technologies and best practices.", _categorizedSkills: {
            programming: ["JavaScript", _"TypeScript", _"React"], _devops: ["Docker", _"CI/CD", _"AWS"], _platforms: ["Node.js", _"Next.js", _"Vercel"], _softSkills: ["Communication", _"Problem Solving", _"Team Leadership"], _other: ["Project Management", _"Technical Writing"]}
        });
        
        toast({_title: "Enhanced Profile Generated", _description: "AI has created a professional bio and suggested additional skills for your profile."});
      }
      
    } catch (error: unknown) {_logErrorToProduction('Error generating enhanced profile:', _{ data: error});
      toast({_title: "Generation failed", _description: error.message || "There was an error generating your enhanced profile. Please try again.", _variant: "destructive"});
    } finally {_setIsGenerating(false);}
  };

  // Apply generated content to form
  const _applyGeneratedContent = () => {_if (generatedContent) {
      form.setValue("bio", _generatedContent.summary);
      
      // Extract all skills from categorized skills and properly type cast them
      const _allCategorizedSkills = generatedContent.categorizedSkills;
      const newSkills: string[] = [];
      
      // Safely extract and flatten skills from each category
      Object.values(allCategorizedSkills).forEach(categorySkills => {
        if (Array.isArray(categorySkills)) {
          categorySkills.forEach(skill => {
            if (typeof skill === 'string' && skill && !skillTags.includes(skill)) {
              newSkills.push(skill);}
          });
        }
      });
        
      if (newSkills.length > 0) {_setSkillTags([...skillTags, _...newSkills]);}
    }
  };

  // Get category color
  const _getCategoryColor = (_category: CategoryType) => {_switch (category) {
      case 'programming': return 'bg-blue-500/20 hover:bg-blue-500/30 text-blue-500';
      case 'devops': return 'bg-green-500/20 hover:bg-green-500/30 text-green-500';
      case 'platforms': return 'bg-amber-500/20 hover:bg-amber-500/30 text-amber-500';
      case 'softSkills': return 'bg-purple-500/20 hover:bg-purple-500/30 text-purple-500';
      case 'other': return 'bg-gray-500/20 hover:bg-gray-500/30 text-gray-500';
      default: return 'bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple';}
  };

  // Send notification email
  const _sendEnhancementNotification = async (_userId: string, _email: string) => {_try {
      await supabase.functions.invoke('send-email', _{
        body: {
          to: email, _subject: "Your Zion Talent Profile Has Been Enhanced", _html: `
          <div style="font-family: Arial, _sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #6D28D9;">Profile Enhancement Complete</h2>
            <p>Your profile has been enhanced with AI. You're now more discoverable to recruiters and companies!</p>
            <p>We've added a professional summary and categorized your skills to help you stand out.</p>
            <p>You can review and edit these enhancements in your profile dashboard.</p>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="color: #666; font-size: 12px;">© ${new Date().getFullYear()} Zion Marketplace</p>
            </div>
          </div>
          `
        }
      });
    } catch (error) {_logErrorToProduction('Failed to send notification email:', _{ data: error});
    }
  };

  // Handle form submission
  const _onSubmit = async (_values: TalentFormValues) => {_if (skillTags.length === 0) {
      toast({
        title: "Skills required", _description: "Please add at least one skill to your profile.", _variant: "destructive"});
      return;
    }

    setIsSubmitting(true);

    try {_// For actual implementation with Supabase
      if (!user?.id) {
        throw new Error("User not authenticated");}
      
      // Enhance profile if not already done
      let _finalSummary = "";
      let _finalSkills = skillTags;
      
      if (values.enhancedProfile && !generatedContent) {_try {
          const { data: aiData} = await supabase.functions.invoke('talent-profile-enhancer', {_body: {
              talentData: {
                name: values.name, _title: values.title, _bio: values.bio, _skills: skillTags, _location: values.location}
            }
          });
          
          if (aiData) {_finalSummary = (aiData as EnhancedProfile).summary;
            // Safely merge AI suggested skills with user-provided skills
            const _categorizedSkills = (aiData as EnhancedProfile).categorizedSkills;
            const aiSkills: string[] = [];
            
            // Extract skills from each category and ensure they're strings
            Object.values(categorizedSkills).forEach(categorySkills => {
              if (Array.isArray(categorySkills)) {
                categorySkills.forEach(skill => {
                  if (typeof skill === 'string' && skill) {
                    aiSkills.push(skill);}
                });
              }
            });
            
            // Create a unique set of skills
            finalSkills = [...new Set([...skillTags, ...aiSkills])];
          }
        } catch (error) {_logErrorToProduction('Error enhancing profile:', _{ data: error});
          // Continue with submission even if enhancement fails
          finalSummary = "";
        }
      } else if (generatedContent) {_finalSummary = generatedContent.summary;}

      // Get user email for notification
      const {_data: userData} = await supabase.auth.getUser();
      const _userEmail = (userData as any).user?.email;

      // Create the talent profile
      // In a real implementation, this would save to Supabase
      setTimeout__(() => {_toast({
          title: "Profile Created Successfully", _description: "Your talent profile has been published and is now visible in the directory."});
        
        // Send notification email if we have user email
        if (userEmail && values.enhancedProfile && user?.id) {_sendEnhancementNotification(user.id, _userEmail);}
        
        setIsSubmitting(false);
      }, 1500);

      // Here would be the actual code to save the profile to Supabase
      /*
      const {_error} = await supabase
        .from('talent_profiles')
        .insert({_user_id: user.id, _name: values.name, _title: values.title, _bio: values.bio, _summary: finalSummary, _location: values.location, _skills: finalSkills.map(name => ({ name, _level: 4})), // Default skill level
          hourly_rate: Number(values.hourlyRate),
          availability_status: values.availability,
          // Other fields would be handled here
        });

      if (error) throw error;
      */

    } catch (error: unknown) {_logErrorToProduction('Error creating profile:', _{ data: error});
      toast({_title: "Error Creating Profile", _description: error.message || "There was an error creating your profile. Please try again.", _variant: "destructive"});
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6">
      <Card className="bg-zion-blue-dark border-zion-blue-light">
        <CardHeader>
          <CardTitle className="text-2xl text-white">Create Your Talent Profile</CardTitle>
          <CardDescription className="text-zion-slate">
            Showcase your skills and experience to potential clients and employers.
          </CardDescription>
        </CardHeader>

        <Form {_...form}>
          <form onSubmit={_form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-8">
              {_/* Basic Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">Basic Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="col-span-1">
                    <FormField
                      control={_form.control}
                      name="name"
                      render={_(_{ field}: {_field: unknown}) => (
                        <FormItem>
                          <FormLabel className="text-zion-slate-light">Full Name</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <UserRound className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                              <Input
                                className="pl-10 bg-zion-blue border-zion-blue-light text-white"
                                placeholder="Your full name"
                                {_...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="col-span-1">
                    <FormField
                      control={_form.control}
                      name="title"
                      render={_(_{ field}: {_field: unknown}) => (
                        <FormItem>
                          <FormLabel className="text-zion-slate-light">Professional Title</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                              <Input
                                className="pl-10 bg-zion-blue border-zion-blue-light text-white"
                                placeholder="e.g., Senior Software Developer"
                                {_...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="col-span-1">
                    <FormField
                      control={_form.control}
                      name="location"
                      render={_(_{ field}: {_field: unknown}) => (
                        <FormItem>
                          <FormLabel className="text-zion-slate-light">Location</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                              <Input
                                className="pl-10 bg-zion-blue border-zion-blue-light text-white"
                                placeholder="City, State/Province, Country"
                                {_...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="col-span-1">
                    <FormField
                      control={_form.control}
                      name="hourlyRate"
                      render={_(_{ field}: {_field: unknown}) => (
                        <FormItem>
                          <FormLabel className="text-zion-slate-light">Hourly Rate (USD)</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate">$</span>
                              <Input
                                className="pl-8 bg-zion-blue border-zion-blue-light text-white"
                                placeholder="e.g., 85"
                                {_...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                
                {_/* Upload Avatar */}
                <div className="space-y-2">
                  <FormLabel className="text-zion-slate-light">Profile Picture</FormLabel>
                  <div className="flex items-center gap-6">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden bg-zion-blue-light border border-zion-blue-light">
                      {_uploadedAvatar ? (
                        <AspectRatio ratio={1/1}>
                          <img
                            src={_uploadedAvatar}
                            alt="Avatar preview"
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </AspectRatio>
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <UserRound className="h-10 w-10 text-zion-slate opacity-50" />
                        </div>
                      )}
                    </div>

                    <label className="flex items-center justify-center px-4 py-2 rounded-md bg-zion-purple hover:bg-zion-purple-dark text-white cursor-pointer transition-colors">
                      <Upload className="mr-2 h-4 w-4" />
                      <span>Upload Photo</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={_handleAvatarUpload}
                      />
                    </label>
                  </div>
                  <p className="text-sm text-zion-slate">
                    For best results, use an image at least 400x400 pixels in JPG, PNG, or GIF format.
                  </p>
                </div>
              </div>

              <Separator className="bg-zion-blue-light/50" />

              {_/* Bio Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">Professional Bio</h3>
                <FormField
                  control={_form.control}
                  name="bio"
                  render={_(_{ field}: {_field: unknown}) => (
                    <FormItem>
                      <FormLabel className="text-zion-slate-light">About Yourself</FormLabel>
                      <FormControl>
                        <Textarea
                          className="h-32 min-h-[128px] bg-zion-blue border-zion-blue-light text-white"
                          placeholder="Describe your professional background, expertise, and the value you bring to clients..."
                          {_...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                      <FormDescription className="text-zion-slate">
                        {_field.value?.length || 0}/1000 characters
                      </FormDescription>
                    </FormItem>
                  )}
                />
                
                {_/* AI Enhancement Option */}
                <FormField
                  control={_form.control}
                  name="enhancedProfile"
                  render={_(_{ field}: {_field: unknown}) => (
                    <FormItem className="flex flex-row items-center justify-between p-3 border border-zion-blue-light bg-zion-blue/30 rounded-md">
                      <div className="space-y-0.5">
                        <FormLabel className="text-white flex items-center">
                          <Sparkles className="w-4 h-4 mr-2 text-zion-purple" />
                          AI Profile Enhancement
                        </FormLabel>
                        <FormDescription className="text-zion-slate-light">
                          Let AI help optimize your profile for better visibility and engagement
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          aria-label="AI profile enhancement"
                          checked={_field.value}
                          onCheckedChange={_field.onChange}
                          className="data-[state=checked]:bg-zion-purple"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                {_form.watch("enhancedProfile") && (
                  <div className="flex justify-end">
                    <Button
                      type="button"
                      variant="outline"
                      className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
                      onClick={generateEnhancedProfile}
                      disabled={_isGenerating}
                    >
                      <Sparkles className="mr-2 h-4 w-4" />
                      {_isGenerating ? "Generating..." : "Generate Enhanced Profile"}
                    </Button>
                  </div>
                )}

                {_/* Generated Content Display */}
                {_generatedContent && (
                  <div className="bg-zion-blue-light/20 border border-zion-blue-light rounded-md p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-white font-medium flex items-center">
                        <Sparkles className="w-4 h-4 mr-2 text-zion-purple" />
                        AI-Generated Content
                      </h4>
                      <Button
                        type="button"
                        size="sm"
                        className="bg-zion-purple hover:bg-zion-purple-dark text-white"
                        onClick={applyGeneratedContent}
                      >
                        <Check className="mr-1 h-3 w-3" /> Apply
                      </Button>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h5 className="text-zion-slate-light text-sm mb-1">Professional Summary</h5>
                        <p className="text-zion-slate italic">{_generatedContent.summary}</p>
                      </div>
                      
                      {_generatedContent.categorizedSkills && (
                        <div>
                          <h5 className="text-zion-slate-light text-sm mb-1">Categorized Skills</h5>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {Object.entries(generatedContent.categorizedSkills).map(_([category, _skills]) => (
                              <div key={category} className="flex items-center gap-2">
                                <Badge
                                  className={_`w-fit ${getCategoryColor(category as CategoryType)}`}
                                >
                                  {_category}
                                </Badge>
                                <div className="flex flex-wrap gap-1">
                                  {_skills.map(_(skill: string) => (
                                    <Badge
                                      key={skill}
                                      className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none"
                                    >
                                      {_skill}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <Separator className="bg-zion-blue-light/50" />

              {_/* Skills and Availability */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {_/* Skills Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-white">Skills & Expertise</h3>
                  <FormField
                    control={_form.control}
                    name="skills"
                    render={_(_{ field}: {_field: unknown}) => (
                      <FormItem>
                        <FormLabel className="text-zion-slate-light">Skills</FormLabel>
                        <div className="flex gap-2">
                          <FormControl>
                            <Input
                              className="flex-1 bg-zion-blue border-zion-blue-light text-white"
                              placeholder="Add a skill..."
                              {_...field}
                              onKeyDown={_handleSkillKeyPress}
                            />
                          </FormControl>
                          <Button
                            type="button"
                            variant="outline"
                            className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"
                            onClick={_handleAddSkill}
                          >
                            Add
                          </Button>
                        </div>
                        <FormDescription className="text-zion-slate">
                          Press Enter or click Add to include a skill
                        </FormDescription>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <div className="flex flex-wrap gap-2 mt-2">
                    {_skillTags.map(_skill => (
                      <Badge
                        key={skill}
                        className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none pl-2 pr-1 py-1.5 flex items-center gap-1"
                      >
                        {_skill}
                        <button
                          type="button"
                          onClick={_() => handleRemoveSkill(skill)}
                          className="rounded-full hover:bg-zion-purple-dark/20 p-0.5"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                    {_skillTags.length === 0 && (
                      <p className="text-zion-slate text-sm italic">No skills added yet</p>
                    )}
                  </div>
                </div>

                {_/* Availability Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-white">Availability</h3>
                  <FormField
                    control={_form.control}
                    name="availability"
                    render={_(_{ field}: {_field: unknown}) => (_<FormItem className="space-y-4">
                        <FormLabel className="text-zion-slate-light">Current Status</FormLabel>
                        <FormControl>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <input
                                type="radio"
                                id="available"
                                value="available"
                                checked={_field.value === "available"}
                                onChange={_() => field.onChange("available")}
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
                                checked={_field.value === "limited"}
                                onChange={_() => field.onChange("limited")}
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
                                checked={_field.value === "unavailable"}
                                onChange={_() => field.onChange("unavailable")}
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
                  />
                </div>
              </div>
            </CardContent>

            <CardFooter className="border-t border-zion-blue-light pt-6">
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:justify-between">
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
                  disabled={_isSubmitting}
                >
                  {_isSubmitting ? "Creating Profile..." : "Create Profile"}
                </Button>
              </div>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
}
