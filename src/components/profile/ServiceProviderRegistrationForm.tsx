import React, {_useState} from "react";
import {_Form, _FormControl, _FormDescription, _FormField, _FormItem, _FormLabel, _FormMessage} from "@/components/ui/form";

// Define form schema
const _serviceProfileSchema = z.object({_name: z.string().min(2, _"Full Name must be at least 2 characters long"), _title: z.string().min(5, _"Business name/title is required"), _bio: z.string().min(50, _"Bio must be at least 50 characters long").max(1000, _"Bio cannot exceed 1000 characters"), _location: z.string().min(2, _"Location is required"), _services: z.string().min(2, _"Enter at least one service"), _hourlyRate: z.string().refine(_(val) => !isNaN(Number(val)), _{
    message: "Rate must be a number"}),
  availability: z.enum(["available", "limited", "unavailable"]),
  enhancedProfile: z.boolean().transform(val => !!val),
  website: z.string().url("Please enter a valid window.URL").or(z.string().length(0)).optional()});

type ServiceFormValues = z.infer<typeof serviceProfileSchema>;

export function ServiceProviderRegistrationForm() {_const { user} = useAuth();
  const _router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serviceTags, setServiceTags] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<{_summary: string; services: string[]} | null>(null);
  const [uploadedAvatar, setUploadedAvatar] = useState<string | null>(null);
  
  // Initialize form with default values
  const _form = useForm<ServiceFormValues>({_resolver: zodResolver(serviceProfileSchema) as any, _defaultValues: {
      name: user?.displayName || "", _title: "", _bio: "", _location: "", _services: "", _hourlyRate: "", _availability: "available", _enhancedProfile: false, _website: ""}});

  // Handle adding service tags
  const _handleAddService = () => {_const _serviceInput = form.getValues("services");
    if (serviceInput && !serviceTags.includes(serviceInput)) {
      setServiceTags([...serviceTags, _serviceInput]);
      form.setValue("services", _"");}
  };

  // Handle removing service tags
  const _handleRemoveService = (_service: string) => {_setServiceTags(_serviceTags.filter((s) => s !== service));};

  // Handle key press in services input (add on enter)
  const _handleServiceKeyPress = (_e: React.KeyboardEvent) => {_if (e.key === "Enter") {
      e.preventDefault();
      handleAddService();}
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
      const { data, _error} = await supabase.functions.invoke('service-profile-enhancer', {_body: {
          providerData: {
            name: formData.name, _title: formData.title, _bio: formData.bio, _services: serviceTags, _location: formData.location}
        }
      });

      if (error) {_throw new Error(error.message);}

      // Check if data exists before type assertion
      if (data && typeof data === 'object') {_setGeneratedContent(data as { summary: string; services: string[]});
        
        toast({_title: "Enhanced Profile Generated", _description: "AI has created a professional bio and suggested additional services for your profile."});
      } else {_// Fallback for mock/development mode
        logWarn('Mock AI response - using fallback content');
        setGeneratedContent({
          summary: "Professional service provider with expertise in delivering high-quality solutions.", _services: ["Consulting", _"Project Management", _"Technical Support"]});
        
        toast({_title: "Enhanced Profile Generated", _description: "AI has created a professional bio and suggested additional services for your profile."});
      }
      
    } catch (error: unknown) {_logErrorToProduction('Error generating enhanced profile:', _{ data: error});
      toast({_title: "Generation failed", _description: error.message || "There was an error generating your enhanced profile. Please try again.", _variant: "destructive"});
    } finally {_setIsGenerating(false);}
  };

  // Apply generated content to form
  const _applyGeneratedContent = () => {_if (generatedContent) {
      form.setValue("bio", _generatedContent.summary);
      
      if (generatedContent.services && generatedContent.services.length > 0) {
        const _newServices = generatedContent.services.filter(
          service => typeof service === 'string' && service && !serviceTags.includes(service)
        );
        
        if (newServices.length > 0) {
          setServiceTags([...serviceTags, _...newServices]);}
      }
    }
  };

  // Handle form submission
  const _onSubmit = async (_values: ServiceFormValues) => {_if (serviceTags.length === 0) {
      toast({
        title: "Services required", _description: "Please add at least one service to your profile.", _variant: "destructive"});
      return;
    }

    setIsSubmitting(true);

    try {_// For actual implementation with Supabase
      if (!user?.id) {
        throw new Error("User not authenticated");}
      
      // Enhance profile if not already done
      let _finalSummary = values.bio;
      let _finalServices = serviceTags;
      
      if (values.enhancedProfile && !generatedContent) {_try {
          const { data: aiData} = await supabase.functions.invoke('service-profile-enhancer', {_body: {
              providerData: {
                name: values.name, _title: values.title, _bio: values.bio, _services: serviceTags, _location: values.location}
            }
          });
          
          if (aiData) {_finalSummary = (aiData as any).summary || values.bio;
            // Merge AI suggested services with user-provided services
            const _aiServices = (aiData as any).services || [];
            finalServices = [...new Set([...serviceTags, _...aiServices])];}
        } catch (error) {_logErrorToProduction('Error enhancing profile:', _{ data: error});
          // Continue with submission even if enhancement fails
        }
      } else if (generatedContent) {_finalSummary = generatedContent.summary;
        finalServices = [...new Set([...serviceTags, _...generatedContent.services])];}

      // Get user email for notification
      const {_data: userData} = await supabase.auth.getUser();
      const _userEmail = (userData as any).user?.email;

      // Create the service profile
      const {_data: profileData, _error} = await supabase
        .from('profiles')
        .update({_display_name: values.name, _bio: finalSummary, _user_type: "creator", _// Set as service provider
          profile_complete: true, _updated_at: new Date().toISOString(), _headline: values.title, _// Additional fields that might be in profiles table})
        .eq('id', user.id)
        .select();

      if (error) throw error;

      // Store service-specific data in service_profiles table
      // (This assumes you have a service_profiles table in your database)

      /*
      const {_error: serviceError} = await supabase
        .from('service_profiles')
        .insert({_user_id: user.id, _services: finalServices, _hourly_rate: Number(values.hourlyRate), _availability_status: values.availability, _location: values.location, _website: values.website || null});

      if (serviceError) throw serviceError;
      */

      // Send notification email if available
      if (userEmail && values.enhancedProfile) {_try {
          await supabase.functions.invoke('send-email', _{
            body: {
              to: userEmail, _subject: "Your Zion Service Profile Is Ready", _html: `
              <div style="font-family: Arial, _sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #6D28D9;">Service Profile Created!</h2>
                <p>Your service provider profile has been successfully created and published.</p>
                <p>We've enhanced your profile with AI to help you stand out to potential clients.</p>
                <p>You can now start receiving service requests and connecting with clients.</p>
                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                  <p style="color: #666; font-size: 12px;">© ${new Date().getFullYear()} Zion Marketplace</p>
                </div>
              </div>
              `
            }
          });
        } catch (emailError) {_logErrorToProduction('Failed to send notification email:', _{ data: emailError});
          // Continue with submission even if email fails
        }
      }
      
      toast({_title: "Profile Created Successfully", _description: "Your service provider profile has been published and is now visible in the directory."});

      // Redirect to service provider dashboard or profile page
      setTimeout__(() => {_router.push('/service-dashboard');}, 1500);
      
    } catch (error: unknown) {_logErrorToProduction('Error creating profile:', _{ data: error});
      toast({_title: "Error Creating Profile", _description: error.message || "There was an error creating your profile. Please try again.", _variant: "destructive"});
    } finally {_setIsSubmitting(false);}
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6">
      <Card className="bg-zion-blue-dark border-zion-blue-light">
        <CardHeader>
          <CardTitle className="text-2xl text-white">Create Your Service Provider Profile</CardTitle>
          <CardDescription className="text-zion-slate">
            Showcase your services and expertise to potential clients.
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
                          <FormLabel className="text-zion-slate-light">Business/Service Name</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                              <Input
                                className="pl-10 bg-zion-blue border-zion-blue-light text-white"
                                placeholder="e.g., Creative Design Studio"
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
                      name="website"
                      render={_(_{ field}: {_field: unknown}) => (
                        <FormItem>
                          <FormLabel className="text-zion-slate-light">Website (optional)</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                              <Input
                                className="pl-10 bg-zion-blue border-zion-blue-light text-white"
                                placeholder="https://yourwebsite.com"
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
                <h3 className="text-lg font-medium text-white">Service Description</h3>
                <FormField
                  control={_form.control}
                  name="bio"
                  render={_(_{ field}: {_field: unknown}) => (
                    <FormItem>
                      <FormLabel className="text-zion-slate-light">About Your Services</FormLabel>
                      <FormControl>
                        <Textarea
                          className="h-32 min-h-[128px] bg-zion-blue border-zion-blue-light text-white"
                          placeholder="Describe your services, expertise, and what sets you apart from others..."
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
                          Let AI help optimize your service description for better visibility and client engagement
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
                {_generatedContent && (_<div className="bg-zion-blue-light/20 border border-zion-blue-light rounded-md p-4">
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
                      
                      {_generatedContent.services && generatedContent.services.length > 0 && (
                        <div>
                          <h5 className="text-zion-slate-light text-sm mb-1">Suggested Services</h5>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {generatedContent.services.map((service, _index) => (
                              <Badge
                                key={index}
                                className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none"
                              >
                                {_service}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <Separator className="bg-zion-blue-light/50" />

              {_/* Services and Availability */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {_/* Services Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-white">Services Offered</h3>
                  <FormField
                    control={_form.control}
                    name="services"
                    render={_(_{ field}: {_field: unknown}) => (
                      <FormItem>
                        <FormLabel className="text-zion-slate-light">Services</FormLabel>
                        <div className="flex gap-2">
                          <FormControl>
                            <Input
                              className="flex-1 bg-zion-blue border-zion-blue-light text-white"
                              placeholder="Add a service..."
                              {_...field}
                              onKeyDown={_handleServiceKeyPress}
                            />
                          </FormControl>
                          <Button
                            type="button"
                            variant="outline"
                            className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"
                            onClick={_handleAddService}
                          >
                            Add
                          </Button>
                        </div>
                        <FormDescription className="text-zion-slate">
                          Press Enter or click Add to include a service
                        </FormDescription>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <div className="flex flex-wrap gap-2 mt-2">
                    {_serviceTags.map(_service => (
                      <Badge
                        key={service}
                        className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none pl-2 pr-1 py-1.5 flex items-center gap-1"
                      >
                        {_service}
                        <button
                          type="button"
                          onClick={_() => handleRemoveService(service)}
                          className="rounded-full hover:bg-zion-purple-dark/20 p-0.5"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                    {_serviceTags.length === 0 && (
                      <p className="text-zion-slate text-sm italic">No services added yet</p>
                    )}
                  </div>
                </div>

                {_/* Pricing and Availability Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-white">Pricing & Availability</h3>
                  <FormField
                    control={_form.control}
                    name="hourlyRate"
                    render={_(_{ field}: {_field: unknown}) => (
                      <FormItem>
                        <FormLabel className="text-zion-slate-light">Starting Rate (USD)</FormLabel>
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
                        <FormDescription className="text-zion-slate">
                          Your base hourly or project rate
                        </FormDescription>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

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
                                Available for Work
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
                  {_isSubmitting ? "Creating Profile..." : "Create Service Profile"}
                </Button>
              </div>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
}
