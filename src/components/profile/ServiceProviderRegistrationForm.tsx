
// Handle form submission
  const onSubmit = async (values: ServiceFormValues,) => {
    if (serviceTags.length === 0) {
      toast({

  // Handle form submission;
  const on_submit = async (values: ServiceFormValues, ) => {
    // Check condition
if ( {) {
  $2
}
      toast ({
        title: 'Services required',
        description: 'Please add at least one service to your profile.',
        variant: 'destructive',
      });

        title: 'Services required',
        description: 'Please add at least one service to your profile.',
        variant: 'destructive',

      return;
    }
    setIsSubmitting (true);
    try {
      // For actual implementation with Supabase
      if (!user?.id) {
        throw new Error('User not authenticated')
      }
        try {
          const { data: ai_data } = await supabase.functions.invoke (
            'service - profile - enhancer',
            {
              body: {
                provider_data: {
                  name: values.name,
                  title: values.title,
                  bio: values.bio,
                  services: service_tags,
                  location: values.location,
                },
              },
            }
          }
        } catch (error) {
          logErrorToProduction('Error enhancing profile:', { data: error })
          // Continue with submission even if enhancement fails
        }
        title: "Services required",
        description: "Please add at least one service to your profile.",
        variant: "destructive"}),
      return
    }

    setIsSubmitting(true),

    try {
      // For actual implementation with Supabase
      if (!user?.id) {
        throw new Error("User not authenticated")
;
      // Check if data exists before type assertion;
      if (data && typeof data === 'object') {;
        setGeneratedContent(data as { summary: string, services: string[] }),;
        toast({;
          title: "Enhanced Profile Generated",;
          description: "AI has created a professional bio and suggested additional services for your profile."});
      } else {;
        // Fallback for mock/development mode;
        logWarn('Mock AI response - using fallback content'),;
        setGeneratedContent({;
          summary: "Professional service provider with expertise in delivering high-quality solutions.",;
          services: ["Consulting", "Project Management", "Technical Support"];
        }),;
        toast({;
          title: "Enhanced Profile Generated",;
          description: "AI has created a professional bio and suggested additional services for your profile."});
      }
;
    } catch (error: any) {;
      logErrorToProduction('Error generating enhanced profile:', { data: error }),;
      toast({;
        title: "Generation failed",;
        description: error.message || "There was an error generating your enhanced profile. Please try again.",;
        variant: "destructive"});
    } finally {;
      setIsGenerating(false);
    }
  },;
  // Apply generated content to form;
  const applyGeneratedContent = () => {;
    if (generatedContent) {;
      form.setValue("bio", generatedContent.summary),;
      if (generatedContent.services && generatedContent.services.length > 0) {;
        const newServices = generatedContent.services.filter(;
          service => typeof service === 'string' && service && !serviceTags.includes(service);
        ),;
        if (newServices.length > 0) {;
          setServiceTags([...serviceTags, ...newServices]);
        }
      }
    }
  },;
  // Handle form submission;
  const onSubmit = async (values: ServiceFormValues) => {;
    if (serviceTags.length === 0) {;
      toast({;
        title: "Services required",;
        description: "Please add at least one service to your profile.",;
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
      let finalSummary = values.bio,;
      let finalServices = serviceTags,;
      if (values.enhancedProfile && !generatedContent) {;
        try {;
          const { data: aiData } = await supabase.functions.invoke('service-profile-enhancer', {;
            body: {;
              providerData: {;
                name: values.name,;
                title: values.title,;
                bio: values.bio,;
                services: serviceTags,;
                location: values.location;
              }
            }

          }),;
          if (aiData) {;
            finalSummary = (aiData as any).summary || values.bio,;
            // Merge AI suggested services with user-provided services;
            const aiServices = (aiData as any).services || [],;
            finalServices = [...new Set([...serviceTags, ...aiServices])];
          }
        } catch (error) {;
          logErrorToProduction('Error enhancing profile:', { data: error }),;
          // Continue with submission even if enhancement fails;
        }
      } else if (generatedContent) {;
        finalSummary = generatedContent.summary,;
        finalServices = [...new Set([...serviceTags, ...generatedContent.services])];
      }

      // Get user email for notification
      const { data: userData } = await supabase.auth.getUser(),
      const userEmail = (userData as any).user?.email,

      // Create the service profile
      const { data: profileData, error } = await supabase
        .from('profiles')
        .update({
          display_name: values.name
          bio: finalSummary
          user_type: 'creator', // Set as service provider
          profile_complete: true
          updated_at: new Date().toISOString()
          headline: values.title
          // Additional fields that might be in profiles table
        })
        .eq('id', user.id)
        .select()
      if (error) throw error

          display_name: values.name,
          bio: finalSummary,
          user_type: "creator", // Set as service provider
          profile_complete: true,
          updated_at: new Date().toISOString(),
          headline: values.title,
          // Additional fields that might be in profiles table
        })
        .eq('id', user.id)

      // Store service-specific data in service_profiles table
      // (This assumes you have a service_profiles table in your database)
      /*
      const { error: serviceError } = await supabase
        .from('service_profiles')
        .insert({
          user_id: user.id
          services: finalServices
          hourly_rate: Number(values.hourlyRate)
          availability_status: values.availability
          location: values.location
          website: values.website |null})
      if (serviceError) throw serviceError

          user_id: user.id,
          services: finalServices,
          hourly_rate: Number(values.hourlyRate),
          availability_status: values.availability,
          location: values.location,

      */
      // Send notification email if available
      if (userEmail && values.enhancedProfile) {
      } else // Check condition
if ( {) {
  $2
}
        final_summary = generated_content.summary;
        final_services = [;
          ...new Set ([...service_tags, ...generated_content.services]),
        ];
      }
      // Get user email for notification;
      const { data: user_data } = await supabase.auth.get_user ();
      const user_email = (user_data as any).user?.email;
      // Create the service profile;
      const { data: profile_data, error } = await supabase;
        .from ('profiles');
        .update ({
          display_name: values.name,
          bio: final_summary,
          user_type: 'creator', // Set as service provider;
          profile_complete: true,
          updated_at: new Date ().toISOString (),
          headline: values.title,
          // Additional fields that might be in profiles table;
        });
        .eq ('id', user.id);
        .select ();
      // Check condition
if (throw error) {
  $2
}
      // Store service - specific data in service_profiles table;
      // (This assumes you have a service_profiles table in your database);
      /*;
      const { error: service_error } = await supabase;
        .from ('service_profiles');
        .insert ({
          user_id: user.id,
          services: final_services,
          hourly_rate: Number (values.hourly_rate),
          availability_status: values.availability,
          location: values.location,
          website: values.website || null});
      // Check condition
if (throw service_error) {
  $2
}
      */;
      // Send notification email if available;
      // Check condition
if ( {) {
  $2
}
        try {
          await supabase.functions.invoke('send-email', {
            body: {
              to: userEmail
              subject: 'Your Zion Service Profile Is Ready'
              to: userEmail,
              subject: "Your Zion Service Profile Is Ready",

              html: `
              <div style="font-family: Arial, sans-serif, max-width: 600px, margin: 0 auto,">
                <h2 style="color: #6D28D9,">Service Profile Created!</h2>
                <p>Your service provider profile has been successfully created and published.</p>
                <p>We've enhanced your profile with AI to help you stand out to potential clients.</p>
                <p>You can now start receiving service requests and connecting with clients.</p>
                <div style="margin-top: 30px, padding-top: 20px, border-top: 1px solid #eee,">
                  <p style="color: #666, font-size: 12px,">© ${new Date().getFullYear()} Zion Marketplace</p>
                </div>
              </div>
      // Get user email for notification;
      const { data: userData } = await supabase.auth.getUser(),;
      const userEmail = (userData as any).user?.email,;
      // Create the service profile;
      const { data: profileData, error } = await supabase;
        .from('profiles');
        .update({;
          display_name: values.name,;
          bio: finalSummary,;
          user_type: "creator", // Set as service provider;
          profile_complete: true,;
          updated_at: new Date().toISOString(),;
          headline: values.title,;
          // Additional fields that might be in profiles table;
        });
        .eq('id', user.id);
        .select(),;
      if (error) throw error,;
      // Store service-specific data in service_profiles table;
      // (This assumes you have a service_profiles table in your database);
      /*;
      const { error: serviceError } = await supabase;
        .from('service_profiles');
        .insert({;
          user_id: user.id,;
          services: finalServices,;
          hourly_rate: Number(values.hourlyRate),;
          availability_status: values.availability,;
          location: values.location,;
          website: values.website || null}),;
      if (serviceError) throw serviceError,;
      */;
      // Send notification email if available;
      if (userEmail && values.enhancedProfile) {;
        try {;
          await supabase.functions.invoke('send-email', {;
            body: {;
              to: userEmail,;
              subject: "Your Zion Service Profile Is Ready",;
              html: `;
              <div style="font-family: Arial, sans-serif, max-width: 600px, margin: 0 auto,">;
                <h2 style="color: #6D28D9,">Service Profile Created!</h2>;
                <p>Your service provider profile has been successfully created and published.</p>;
                <p>We've enhanced your profile with AI to help you stand out to potential clients.</p>;
                <p>You can now start receiving service requests and connecting with clients.</p>;
                <div style="margin-top: 30px, padding-top: 20px, border-top: 1px solid #eee,">;
                  <p style="color: #666, font-size: 12px,">© ${new Date().getFullYear()} Zion Marketplace</p>;
                </div>;
              </div>;
              `;
            }
          });
        } catch (emailError) {;
          logErrorToProduction('Failed to send notification email:', { data: emailError }),;
          // Continue with submission even if email fails;
        }
      }
      
      toast({
        title: "Profile Created Successfully",
        description: "Your service provider profile has been published and is now visible in the directory."}),

      // Redirect to service provider dashboard or profile page;
      setTimeout(() => {;
        router && router.push('/service-dashboard');
      }, 1500);    } catch (error: any) {;
      logErrorToProduction('Error creating profile:', { data: error });
      toast({;
        title: 'Error Creating Profile',;
        description:;
          error && error.message ||;
          'There was an error creating your profile. Please try again.',;
        variant: 'destructive',;
      });
    } finally {;
      setIsSubmitting(false);

              to: user_email,
              subject: 'Your Zion Service Profile Is Ready',
              html: `;
              <div style="font - family: Arial, sans - serif; max - width: 600px; margin: 0 auto;">;
                <h2 style="color: #6D28D9;">Service Profile Created!</h2>;
                <p > Your service provider profile has been successfully created and published.</p>;
                <p > We've enhanced your profile with AI to help you stand out to potential clients.</p>;
                <p > You can now start receiving service requests and connecting with clients.</p>;
                <div style="margin - top: 30px; padding - top: 20px; border - top: 1px solid #eee;">;
                  <p style="color: #666; font - size: 12px;">© ${new Date ().getFullYear ()} Zion Marketplace</p>;
                </div>;
              </div>;
              `,
            },
          });
        } catch (email_error) {
          logErrorToProduction ('Failed to send notification email:', {
            data: email_error,
          });
          // Continue with submission even if email fails;
        }
      }
      toast ({
        title: 'Profile Created Successfully',
        description:;
          'Your service provider profile has been published and is now visible in the directory.',
      });
      // Redirect to service provider dashboard or profile page;
      set_timeout (() => {
        router.push ('/service - dashboard');
      }, 1500) } catch (error: any) {
      logErrorToProduction ('Error creating profile:', { data: error });
      toast ({
        title: 'Error Creating Profile',
        description:;
          error.message ||;
          'There was an error creating your profile. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting (false);
    }

  return (

    <div className='max-w-4xl mx-auto p-4 md:p-6'>;
      <Card className='bg-zion-blue-dark border-zion-blue-light'>;
            <CardContent className="space-y-8">
              {/* Basic Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">Basic Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="col-span-1">
                    <FormField
                      control={form.control}
                      name='name'
                      render={({ field }: { field: any }) => (                        <FormItem>
                          <FormLabel className='text-zion-slate-light'>
                            Full Name
                          </FormLabel>
                            <div className="relative">
                              <UserRound className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                              <Input
                                className="pl-10 bg-zion-blue border-zion-blue-light text-white"
                                placeholder="Your full name"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className='col-span-1'>
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }: { field: any }) => (
                        <FormItem>
                          <FormLabel className="text-zion-slate-light">Business/Service Name</FormLabel>

              {/* Basic Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">Basic Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="col-span-1">
                    <FormField
                      control={form.control}
                          <FormControl>
                            <div className="relative">
                              <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                              <Input
                                className="pl-10 bg-zion-blue border-zion-blue-light text-white"
                                placeholder="e.g., Creative Design Studio"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className='col-span-1'>
                    <FormField
                      control={form.control}
                      name='location'
                      render={({ field }: { field: any }) => (                        <FormItem>
                          <FormLabel className='text-zion-slate-light'>
                            Location
                          </FormLabel>

                  <div className="col-span-1">
                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }: { field: any }) => (
                        <FormItem>
                          <FormLabel className="text-zion-slate-light">Location</FormLabel>

                          <FormControl>
                            <div className="relative">
                              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                              <Input
                                className="pl-10 bg-zion-blue border-zion-blue-light text-white"
                                placeholder="City, State/Province, Country"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className='col-span-1'>
                    <FormField
                      control={form.control}
                      name='website'
                      render={({ field }: { field: any }) => (                        <FormItem>
                          <FormLabel className='text-zion-slate-light'>
                            Website (optional)
                          </FormLabel>

                  <div className="col-span-1">
                    <FormField
                      control={form.control}
                      name="website"
                      render={({ field }: { field: any }) => (
                        <FormItem>
                          <FormLabel className="text-zion-slate-light">Website (optional)</FormLabel>

                          <FormControl>
                            <div className="relative">
                              <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                              <Input
                                className="pl-10 bg-zion-blue border-zion-blue-light text-white"
                                placeholder="https://yourwebsite.com"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
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
;
      toast({;
        title: "Profile Created Successfully",;
        description: "Your service provider profile has been published and is now visible in the directory."}),;
      // Redirect to service provider dashboard or profile page;
      setTimeout(() => {;
        router.push('/service-dashboard');
      }, 1500);
    } catch (error: any) {;
      logErrorToProduction('Error creating profile:', { data: error }),;
      toast({;
        title: "Error Creating Profile",;
        description: error.message || "There was an error creating your profile. Please try again.";
        variant: "destructive"});
    } finally {;
      setIsSubmitting(false);
    }
  };
  return (;
    <div className="max-w-4xl mx-auto p-4 md:p-6">;
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader>;
                                {...field}
                              />;
                            </div>;
                          </FormControl>;
                                {...field}
                              />;
                            </div>;
                          </FormControl>;
                                {...field}
                              />;
                            </div>;
                          </FormControl>;
                <div className="space-y-2">
                  <FormLabel className="text-zion-slate-light">Profile Picture</FormLabel>
                  <div className="flex items-center gap-6">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden bg-zion-blue-light border border-zion-blue-light">
                      {uploadedAvatar ? (
                        <AspectRatio ratio={1/1}>
                          <img
                            src={uploadedAvatar}
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
                    <label className='flex items-center justify-center px-4 py-2 rounded-md bg-zion-purple hover:bg-zion-purple-dark text-white cursor-pointer transition-colors'>
                      <Upload className='mr-2 h-4 w-4' />
                      <span>Upload Photo</span>
                      <input
                        type='file'
                        accept='image/*'
                        className='hidden'
                            alt="Avatar preview"
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />

                        <div className="flex items-center justify-center h-full">
                          <UserRound className="h-10 w-10 text-zion-slate opacity-50" />
                        </div>
                      )}
                    </div>
                    <label className='flex items-center justify-center px-4 py-2 rounded-md bg-zion-purple hover:bg-zion-purple-dark text-white cursor-pointer transition-colors'>
                      <Upload className='mr-2 h-4 w-4' />
                      <span>Upload Photo</span>
                      <input
                        type='file'
                        accept='image/*'
                        className='hidden'
                        onChange={handleAvatarUpload}                      />
                    </label>
                  <p className='text-sm text-zion-slate'>
                    For best results, use an image at least 400x400 pixels in
                    JPG, PNG, or GIF format.
                        onChange={handleAvatarUpload}                      />

                    <label className="flex items-center justify-center px-4 py-2 rounded-md bg-zion-purple hover:bg-zion-purple-dark text-white cursor-pointer transition-colors">
                      <Upload className="mr-2 h-4 w-4" />
                      <span>Upload Photo</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleAvatarUpload}
                      />

                    </label>
                  </div>
                  <p className='text-sm text-zion-slate'>
                    For best results, use an image at least 400x400 pixels in
                    JPG, PNG, or GIF format.
                  </p>
                </div>
              </div>
              <Separator className='bg-zion-blue-light/50' />
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">Service Description</h3>
ursor/fix-website-loading-errors-and-merge-6662
                        onChange={handleAvatarUpload}                      />;
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

                        onChange={handleAvatarUpload}                      />;
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

              <Separator className="bg-zion-blue-light/50" />

              <Separator className="bg-zion-blue-light/50" />

              {/* Bio Section */}
              <div className='space-y-4'>;
                <h3 className='text-lg font-medium text-white'>;
                  Service Description;
                </h3>;

                  control={form.control}
              <Separator className='bg-zion-blue-light/50' />

              <Separator className="bg-zion-blue-light/50" />

              {/* Bio Section */}
                  render={({ field }: { field: any }) => (
                    <FormItem>
                      <FormLabel className="text-zion-slate-light">About Your Services</FormLabel>

                      <FormControl>
                />;
                {/* AI Enhancement Option */}
                <FormField;
                  control={form.control}
                  name="enhancedProfile"

                  render={({ field }: { field: any }) => (
                    <FormItem className='flex flex - row items - center justify - between p - 3 border border - zion - blue - light bg - zion - blue / 30 rounded - md'>;
                      <div className='space - y-0.5'>;
                        <FormLabel className='text - white flex items - center'>;
                          <Sparkles className='w - 4 h - 4 mr - 2 text - zion - purple' />                          AI Profile Enhancement;
                        </FormLabel>;
                        <FormDescription className='text - zion - slate - light'>;
                          Let AI help optimize your service description for;
                          better visibility and client engagement;
                        </FormDescription>;
                      </div>;
                      <FormControl>;

                />;

                {form && form.watch('enhancedProfile') && (;
                  <div className='flex justify-end'>;

                    <Button
                      type='button'
                      variant='outline'
                      className='border-zion-purple text-zion-purple hover:bg-zion-purple/10'
                      onClick={generateEnhancedProfile}
                        : 'Generate Enhanced Profile'}
                    </Button>;
                  </div>;

                        </FormLabel>
                        <FormDescription className="text-zion-slate-light">
                          Let AI help optimize your service description for better visibility and client engagement
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          aria-label='AI profile enhancement'
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className='data-[state=checked]:bg-zion-purple'                        />
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
                {generatedContent && (
                  <div className="bg-zion-blue-light/20 border border-zion-blue-light rounded-md p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-white font-medium flex items-center">
                        <Sparkles className="w-4 h-4 mr-2 text-zion-purple" />
                        AI-Generated Content
                      </h4>
                      <Button
                        type='button'
                        size='sm'
                        className='bg-zion-purple hover:bg-zion-purple-dark text-white'
                        onClick={applyGeneratedContent}                      >
                        <Check className='mr-1 h-3 w-3' /> Apply
                      </Button>
                    </div>
                    <div className='space-y-4'>

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
                        <p className="text-zion-slate italic">{generatedContent.summary}</p>
                      </div>
                                  <Badge
                                    key={index}
                                    className='bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none'
                                  >
                                    {service}
                                  </Badge>
                                )
                              )}
                            </div>                          </div>
                        )}

                      {generatedContent.services && generatedContent.services.length > 0 && (
                        <div>
                          <h5 className="text-zion-slate-light text-sm mb-1">Suggested Services</h5>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {generatedContent.services.map((service, index) => (
                              <Badge
                                key={index}
                                className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none"
                              >
                                {service}
                              </Badge>;
                            ))}
                          </div>;
                        </div>;
                      )}
                    </div>;
                  </div>;
                )}

              </div>;

              <Separator className="bg-zion-blue-light/50" />

              <Separator className="bg-zion-blue-light/50" />

              <Separator className='bg-zion-blue-light/50' />;

ursor/expand-services-advertise-and-build-project-4b36

              <Separator className="bg-zion-blue-light/50" />

              {/* Services and Availability */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Services Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-white">Services Offered</h3>
                  <FormField
                    control={form.control}
                    name='services'
                    render={({ field }: { field: any }) => (                      <FormItem>
                        <FormLabel className='text-zion-slate-light'>
                          Services
                        </FormLabel>
                        <div className='flex gap-2'>

                    name="services"
                    render={({ field }: { field: any }) => (
                      <FormItem>
                        <FormLabel className="text-zion-slate-light">Services</FormLabel>
                        <div className="flex gap-2">

                          <FormControl>
                            <Input
                              className="flex-1 bg-zion-blue border-zion-blue-light text-white"
                              placeholder="Add a service..."
                              {...field}
                              onKeyDown={handleServiceKeyPress}
                            />
                          </FormControl>
                          <Button

                  />;

                  <div className='flex flex-wrap gap-2 mt-2'>;
                    {serviceTags && serviceTags.map(service => (;

                      <Badge
                        key={service}

                        {service}
                        <button
                          type='button'
                          onClick={() => handleRemoveService(service)}
                          className='rounded-full hover:bg-zion-purple-dark/20 p-0 && 0.5'                        >;
                          <X className='h-3 w-3' />;
                        </button>;
                      </Badge>;
                    ))}
                    {serviceTags && serviceTags.length === 0 && (;
                      <p className='text-zion-slate text-sm italic'>;
                        No services added yet;
                      </p>;
                    )}

                  </div>;
                </div>;

                {/* Pricing and Availability Section */}
                  <FormField
                    control={form && form.control}
                    name='hourlyRate'
                    render={({ field }: { field: any }) => (                      <FormItem>;
                        <FormLabel className='text-zion-slate-light'>;
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
                      {generated_content.services &&;
                        generated_content.services.length > 0 && (
                          <div>;
                            <h5 className='text - zion - slate - light text - sm mb - 1'>;
                              Suggested Services;
                            </h5>;
                            <div className='flex flex - wrap gap - 2 mt - 1'>;
                              {generated_content.services.map (
                                (service, index) => (
                                  <Badge;
                                    key={index}
                                    className='bg - zion - purple / 20 hover:bg - zion - purple / 30 text - zion - purple border - none';
                                  >;
                                    {service}
                                  </Badge>))}
                            </div>                          </div>)}
                    </div>;
                  </div>)}
              </div>;
              <Separator className='bg - zion - blue - light / 50' />;
              {/* Services and Availability */}
              <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 8'>;
                {/* Services Section */}
                <div className='space - y-4'>;
                  <h3 className='text - lg font - medium text - white'>;
                    Services Offered;
                  </h3>;
                  <FormField;
                    control={form.control}
                    name='services';
                    render={({ field }: { field: any }) => (                      <FormItem>;
                        <FormLabel className='text - zion - slate - light'>;
                          Services;
                        </FormLabel>;
                        <div className='flex gap - 2'>;
                          <FormControl>;
                            <Input;
                              className='flex - 1 bg - zion - blue border - zion - blue - light text - white';
                              placeholder='Add a service...';
                              {...field}
                              onKeyDown = {handleServiceKeyPress, }
                            />;
                          </FormControl>;
                          <Button;
                            type='button';
                            variant='outline';
                            className='border - zion - blue - light text - zion - slate - light hover:bg - zion - blue - light hover:text - white';
                            on_click={handleAddService}                          >;
                            Add;
                          </Button>;
                        </div>;
                        <FormDescription className='text - zion - slate'>;
                          Press Enter or click Add to include a service;
                        </FormDescription>;
                        <FormMessage className='text - red - 400' />;
                      </FormItem>)}
                  />;
                  <div className='flex flex - wrap gap - 2 mt - 2'>;
                    {service_tags.map (service => (
                      <Badge;
                        key={service}
                        className='bg - zion - purple / 20 hover:bg - zion - purple / 30 text - zion - purple border - none pl - 2 pr - 1 py - 1.5 flex items - center gap - 1';
                      >;
                        {service}
                        <button;
                          type='button';
                          on_click={() => handleRemoveService (service)}
                          className='rounded - full hover:bg - zion - purple - dark / 20 p - 0.5'                        >;
                          <X className='h - 3 w - 3' />;
                        </button>;
                      </Badge>))}
                    {service_tags.length === 0 && (
                      <p className='text - zion - slate text - sm italic'>;
                        No services added yet;
                      </p>)}

                            type="button"
                            variant="outline"
                            className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"
                            onClick={handleAddService}
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
                        </button>
                      </Badge>
                    ))}
                    {serviceTags.length === 0 && (
                      <p className='text-zion-slate text-sm italic'>
                        No services added yet
                      </p>
                    )}
                  </div>
                </div>
                {/* Pricing and Availability Section */}
                <div className='space-y-4'>
                  <h3 className='text-lg font-medium text-white'>
                    Pricing & Availability
                  </h3>
                  <FormField
                    control={form.control}
                    name='hourlyRate'
                    render={({ field }: { field: any }) => (                      <FormItem>
                        <FormLabel className='text-zion-slate-light'>
                          Starting Rate (USD)
                        </FormLabel>

                      <p className="text-zion-slate text-sm italic">No services added yet</p>
                    )}
                  </div>;
                </div>;
                {/* Pricing and Availability Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-white">Pricing & Availability</h3>
                  <FormField
                    control={form.control}

                    name="hourlyRate"
                    render={({ field }: { field: any }) => (
                      <FormItem>
                        <FormLabel className="text-zion-slate-light">Starting Rate (USD)</FormLabel>

                        <FormControl>
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate">$</span>
                            <Input
                              {...field}
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
                    control={form.control}
                    name='availability'
                    render={({ field }: { field: any }) => (
                      <FormItem className='space-y-4'>
                        <FormLabel className='text-zion-slate-light'>
                          Current Status
                        </FormLabel>                        <FormControl>
                          <div className='space-y-2'>
                            <div className='flex items-center space-x-2'>
                              <input
                                type='radio'
                                id='available'
                                value='available'
                                checked={field.value === 'available'}
                                onChange={() => field.onChange('available')}
                                className='text-zion-purple focus:ring-zion-purple'                              />
                              <label
                                htmlFor='available'
                                className='text-white flex items-center gap-2'>;
                                <div className='h-2 w-2 rounded-full bg-green-500'></div>;
                                Available for Work;
                              </label>;
                            </div>;

                            <div className='flex items-center space-x-2'>;

                              <input
                                type='radio'
                                id='limited'
                                value='limited'
                                checked={field.value === 'limited'}
                                onChange={() => field.onChange('limited')}
                                className='text-zion-purple focus:ring-zion-purple'                              />
                              <label
                                htmlFor='limited'

                                className='text-white flex items-center gap-2'>;
                                <div className='h-2 w-2 rounded-full bg-yellow-500'></div>;
                                Limited Availability;
                              </label>;
                            </div>;

                            <div className='flex items-center space-x-2'>;

                              <input
                                type='radio'
                                id='unavailable'
                                value='unavailable'
                                checked={field.value === 'unavailable'}
                                onChange={() => field.onChange('unavailable')}
                                className='text-zion-purple focus:ring-zion-purple'                              />
                              <label
                                htmlFor='unavailable'
                                className='text-white flex items-center gap-2'>;
                                <div className='h-2 w-2 rounded-full bg-red-500'></div>;
                        <FormDescription className='text - zion - slate'>;
                          Your base hourly or project rate;
                        </FormDescription>;
                        <FormMessage className='text - red - 400' />;
                      </FormItem>)}

                  />;
                  <FormField;
                    control={form.control}
                    name="availability"
                    render={({ field }: { field: any }) => (

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
                                Available for Work
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

                        <FormMessage className='text - red - 400' />;
                      </FormItem>)}

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
                  type='submit'
                  className='bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white'
                  disabled={isSubmitting}                >
                  {isSubmitting
                    ? 'Creating Profile...'
                    : 'Create Service Profile'}

                <Button 
                  type="submit"
                  className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Creating Profile..." : "Create Service Profile"}

                </Button>
              </div>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  )
}

}
//Handle avatar upload const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0]
if (file) {
  const reader = new FileReader ()
reader.onloadend = () => {

  setUploadedAvatar (reader.result as string);
}
reader.readAsDataURL (file);

}
//Generate enhanced profile with AI return;
}//Call the Supabase Edge Function const {

  data, error;
}= await supabase.functions.invoke ('service - profile - enhancer', {
  body: {
  provider_data: {
  name: form_data.name, title: form_data.title, bio: form_data.bio,  services: service_tags, location: form_data.location;
});
}else {';
  //Fallback for mock / development mode log_warn ('Mock AI response - using fallback content');

setGeneratedContent ({
}catch (error: any) {'
  logErrorToProduction ('Error generating enhanced profile:', {

  data: error;
});
toast ({
}finally {
  setIsGenerating (false);

}
//Apply generated content to form const applyGeneratedContent = () => {
  if (generatedContent) {'
  const newServices = generatedContent.services.filter (service => typeof service === 'string' && service && !serviceTags.includes (service) )
if (newServices.length > 0) {
}
//Handle form submission const onSubmit = async (values: ServiceFormValues) => {
  if (serviceTags.length === 0) {
  toast ({
  return;
}setIsSubmitting (true)
try {
  //For actual implementation with Supabase if (!user?.id) {
}//Enhance profile if not already done let finalSummary = values.bio
let finalServices = serviceTags
try {
  const {
  data: aiData '
}= await supabase.functions.invoke ('service-profile-enhancer', {
  body: {

  new Date () .getFullYear () 
}Zion Marketplace</p>
}//Continue with submission even if email fails 

}//Redirect to service provider dashboard or profile page setTimeout ( () => {'
  router.push ('/service-dashboard')
}, 1500)
}catch (error: any) {'
  logErrorToProduction ('Error creating profile:', {
  data: error
})
toast ({
}finally {
  setIsSubmitting (false)
};"
max-w-4xl mx-auto p-4 md:p-6"> <Card className=" bg-zion-blue-dark border-zion-blue-light"> <CardHeader> <CardTitle className=" text-2xl text-white">Create Your Service Provider Profile</CardTitle> <CardDescription className=" text-zion-slate"> Showcase your services and expertise to potential clients. </CardDescription> </CardHeader> <FormItem> <FormLabel className=" text-zion-slate-light">Full Name</FormLabel> <FormControl> <div className=" relative"> <UserRound className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4"/> <Input /> </div> </FormControl> <FormMessage className=" text-red-400"/> </FormItem>) "
}/> </div> <div className=" col-span-1"> <FormField <FormItem> <FormLabel className=" text-zion-slate-light">Business/Service Name</FormLabel> <FormControl> <div className=" relative"> <Briefcase className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4"/> <Input /> </div> </FormControl> <FormMessage className=" text-red-400"/> </FormItem>) "
}/> </div> <div className=" col-span-1"> <FormField <FormItem> <FormLabel className=" text-zion-slate-light">Location</FormLabel> <FormControl> <div className=" relative"> <MapPin className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4"/> <Input /> </div> </FormControl> <FormMessage className=" text-red-400"/> </FormItem>) "
}/> </div> <div className=" col-span-1"> <FormField <FormItem> <FormLabel className=" text-zion-slate-light">Website (optional) </FormLabel> <FormControl> <div className=" relative"> <Globe className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4"/> <Input /> </div> </FormControl> <FormMessage className=" text-red-400"/> </FormItem>) "
}/> </div> </div> /> </AspectRatio>) : (<div className=" flex items-center justify-center h-full"> <UserRound className=" h-10 w-10 text-zion-slate opacity-50"/> </div>) "
}</div> <label className=" flex items-center justify-center px-4 py-2 rounded-md bg-zion-purple hover:bg-zion-purple-dark text-white cursor-pointer transition-colors"> <Upload className=" mr-2 h-4 w-4"/> <span>Upload Photo</span> <input /> </label> </div> <p className=" text-sm text-zion-slate"> For best results, use an image at least 400x400 pixels in JPG, PNG, or GIF format. </p> </div> </div> <Separator className=" bg-zion-blue-light/50"/> <FormItem> <FormLabel className=" text-zion-slate-light">About Your Services</FormLabel> <FormControl> <Textarea </FormDescription> </FormItem>)
}/> {
  /* AI Enhancement Option */ "
}<FormField AI Profile Enhancement </FormLabel> <FormDescription className=" text-zion-slate-light"> Let AI help optimize your service description for better visibility and client engagement </FormDescription> </div> <FormControl> <Switch /> </FormControl> </FormItem>) "
}/> <Button type=" button"variant=" outline"className=" border-zion-purple text-zion-purple hover:bg-zion-purple/10"onClick={
  generateEnhancedProfile
}disabled= {
  isGenerating
}> </Button> </div>) "
}AI-Generated Content </h4> <Button type=" button"size=" sm"className=" bg-zion-purple hover:bg-zion-purple-dark text-white"onClick={
  applyGeneratedContent "
}> <Check className=" mr-1 h-3 w-3"/> Apply </Button> </div> <div className=" space-y-4"> <div> </div> {
  generatedContent.services && generatedContent.services.length > 0 && (<div> <Badge key= {
  index "
}className=" bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none"> {
  service
}</Badge>) )
}</div> </div>)
}</div> </div>) "
}</div> <Separator className=" bg-zion-blue-light/50"/> <FormItem> <FormLabel className=" text-zion-slate-light">Services</FormLabel> <div className=" flex gap-2"> <FormControl> <Input > Add </Button> </div> <FormDescription className=" text-zion-slate"> Press Enter or click Add to include a service </FormDescription> <FormMessage className=" text-red-400"/> </FormItem>)
}/> <Badge key= {
  service "
}className=" bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none pl-2 pr-1 py-1.5 flex items-center gap-1"> {
  service "
}<button > <X className=" h-3 w-3"/> </button> </Badge>) )
}) "
}</div> </div> <FormItem> <FormLabel className=" text-zion-slate-light">Starting Rate (USD) </FormLabel> <FormControl> <div className=" relative"> <span className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate">$</span> <Input /> </div> </FormControl> <FormDescription className=" text-zion-slate"> Your base hourly or project rate </FormDescription> <FormMessage className=" text-red-400"/> </FormItem>) "
}/> <FormField <FormControl> <div className=" space-y-2"> <div className=" flex items-center space-x-2"> <input /> <label htmlFor=" available"className=" text-white flex items-center gap-2"> <div className=" h-2 w-2 rounded-full bg-green-500"></div> Available for Work </label> </div> <div className=" flex items-center space-x-2"> <input /> <label htmlFor=" limited"className=" text-white flex items-center gap-2"> <div className=" h-2 w-2 rounded-full bg-yellow-500"></div> Limited Availability </label> </div> <div className=" flex items-center space-x-2"> <input /> <label htmlFor=" unavailable"className=" text-white flex items-center gap-2"> <div className=" h-2 w-2 rounded-full bg-red-500"></div> Currently Unavailable </label> </div> </div> </FormControl> <FormMessage className=" text-red-400"/> </FormItem>) "
}/> </div> </div> </CardContent> <CardFooter className=" border-t border-zion-blue-light pt-6"> <div className=" flex flex-col sm:flex-row gap-4 w-full sm:justify-between"> <Button type=" button"variant=" outline"className=" border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white" > Save as Draft </Button> <Button </Button> </div> </CardFooter> </form> </Form> </Card> </div>)
}'"}

;
;

  provider_data: {
  name: values.name, title: values.title, bio: values.bio,  services: service_tags, location: values.location;
});
//Create the service profile const {
  data: profile_data, error ';
}= await supabase .from ('profiles') .eq ('id', user.id) .select ();
// Check condition
if (throw error) {
  $2
}
//Store service - specific data in service profiles table // (This assumes you have a service profiles table in your database) /* const {
  error: service_error ';
}= await supabase .from ('service profiles') // Check condition
if (throw service_error) {
  $2
}
*/ //Send notification email if available // Check condition
if ( {) {
  $2
}
  try {';
  await supabase.functions.invoke ('send - email', {
  body: {';
  <p > Your service provider profile has been successfully created and published.</p> <p > We've enhanced your profile with AI to help you stand out to potential clients.</p> <p > You can now start receiving service requests and connecting with clients.</p> <div style="margin - top: 30px, padding - top: 20px, border - top: 1px solid #eee, "> <p style="color: #666,  font - size: 12px, ">© $ {
  new Date () .getFullYear ();
}Zion Marketplace</p>;
}//Continue with submission even if email fails;
}//Redirect to service provider dashboard or profile page set_timeout ( () => {';
  router.push ('/service - dashboard');
}, 1500);
}catch (error: any) {';
  logErrorToProduction ('Error creating profile:', {
  data: error;
});
toast ({
}finally {
  setIsSubmitting (false);
}";
max - w-4xl mx - auto p - 4 md:p - 6"> <Card className=" bg - zion - blue - dark border - zion - blue - light"> <CardHeader> <CardTitle className=" text - 2xl text - white">Create Your Service Provider Profile</CardTitle> <CardDescription className=" text - zion - slate"> Showcase your services and expertise to potential clients. </CardDescription> </CardHeader> <FormItem> <FormLabel className=" text - zion - slate - light">Full Name</FormLabel> <FormControl> <div className=" relative"> <UserRound className=" absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4"/> <Input /> </div> </FormControl> <FormMessage className=" text - red - 400"/> </FormItem>) ";
}/> </div> <div className=" col - span - 1"> <FormField <FormItem> <FormLabel className=" text - zion - slate - light">Business / Service Name</FormLabel> <FormControl> <div className=" relative"> <Briefcase className=" absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4"/> <Input /> </div> </FormControl> <FormMessage className=" text - red - 400"/> </FormItem>) ";
}/> </div> <div className=" col - span - 1"> <FormField <FormItem> <FormLabel className=" text - zion - slate - light">Location</FormLabel> <FormControl> <div className=" relative"> <MapPin className=" absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4"/> <Input /> </div> </FormControl> <FormMessage className=" text - red - 400"/> </FormItem>) ";
}/> </div> <div className=" col - span - 1"> <FormField <FormItem> <FormLabel className=" text - zion - slate - light">Website (optional) </FormLabel> <FormControl> <div className=" relative"> <Globe className=" absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4"/> <Input /> </div> </FormControl> <FormMessage className=" text - red - 400"/> </FormItem>) ";
}/> </div> </div> /> </AspectRatio>) : (<div className=" flex items - center justify - center h - full"> <UserRound className=" h - 10 w - 10 text - zion - slate opacity - 50"/> </div>) ";
}</div> <label className=" flex items - center justify - center px - 4 py - 2 rounded - md bg - zion - purple hover:bg - zion - purple - dark text - white cursor - pointer transition - colors"> <Upload className=" mr - 2 h - 4 w - 4"/> <span > Upload Photo</span> <input /> </label> </div> <p className=" text - sm text - zion - slate"> For best results, use an image at least 400x400 pixels in JPG, PNG, or GIF format. </p> </div> </div> <Separator className=" bg - zion - blue - light / 50"/> <FormItem> <FormLabel className=" text - zion - slate - light">About Your Services</FormLabel> <FormControl> <Textarea </FormDescription> </FormItem>);
}/> {
  /* AI Enhancement Option */ ";
}<FormField AI Profile Enhancement </FormLabel> <FormDescription className=" text - zion - slate - light"> Let AI help optimize your service description for better visibility and client engagement </FormDescription> </div> <FormControl> <Switch /> </FormControl> </FormItem>) ";
}/> <Button type=" button"variant=" outline"className=" border - zion - purple text - zion - purple hover:bg - zion - purple / 10"on_click={
  generateEnhancedProfile;
}disabled= {
  is_generating;
}> </Button> </div>) ";
}AI - Generated Content </h4> <Button type=" button"size=" sm"className=" bg - zion - purple hover:bg - zion - purple - dark text - white"on_click={
  applyGeneratedContent ";
}> <Check className=" mr - 1 h - 3 w - 3"/> Apply </Button> </div> <div className=" space - y-4"> <div> </div> {
  generated_content.services && generated_content.services.length > 0 && (<div> <Badge key= {
  index ";
}className=" bg - zion - purple / 20 hover:bg - zion - purple / 30 text - zion - purple border - none"> {
  service;
}</Badge>) );
}</div> </div>);
}</div> </div>) ";
}</div> <Separator className=" bg - zion - blue - light / 50"/> <FormItem> <FormLabel className=" text - zion - slate - light">Services</FormLabel> <div className=" flex gap - 2"> <FormControl> <Input > Add </Button> </div> <FormDescription className=" text - zion - slate"> Press Enter or click Add to include a service </FormDescription> <FormMessage className=" text - red - 400"/> </FormItem>);
}/> <Badge key= {
  service ";
}className=" bg - zion - purple / 20 hover:bg - zion - purple / 30 text - zion - purple border - none pl - 2 pr - 1 py - 1.5 flex items - center gap - 1"> {
  service ";
}<button > <X className=" h - 3 w - 3"/> </button> </Badge>) );
}) ";
}</div> </div> <FormItem> <FormLabel className=" text - zion - slate - light">Starting Rate (USD) </FormLabel> <FormControl> <div className=" relative"> <span className=" absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate">$</span> <Input /> </div> </FormControl> <FormDescription className=" text - zion - slate"> Your base hourly or project rate </FormDescription> <FormMessage className=" text - red - 400"/> </FormItem>) ";
}/> <FormField <FormControl> <div className=" space - y-2"> <div className=" flex items - center space - x-2"> <input /> <label html_for=" available"className=" text - white flex items - center gap - 2"> <div className=" h - 2 w - 2 rounded - full bg - green - 500"></div> Available for Work </label> </div> <div className=" flex items - center space - x-2"> <input /> <label html_for=" limited"className=" text - white flex items - center gap - 2"> <div className=" h - 2 w - 2 rounded - full bg - yellow - 500"></div> Limited Availability </label> </div> <div className=" flex items - center space - x-2"> <input /> <label html_for=" unavailable"className=" text - white flex items - center gap - 2"> <div className=" h - 2 w - 2 rounded - full bg - red - 500"></div> Currently Unavailable </label> </div> </div> </FormControl> <FormMessage className=" text - red - 400"/> </FormItem>) ";
}/> </div> </div> </CardContent> <CardFooter className=" border - t border - zion - blue - light pt - 6"> <div className=" flex flex - col sm:flex - row gap - 4 w - full sm:justify - between"> <Button type=" button"variant=" outline"className=" border - zion - blue - light text - zion - slate - light hover:bg - zion - blue - light hover:text - white" > Save as Draft </Button> <Button </Button> </div> </CardFooter> </form> </Form> </Card> </div>);
}'"}

