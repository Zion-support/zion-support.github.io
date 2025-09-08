

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


          display_name: values.name,
          bio: finalSummary,
          user_type: "creator", // Set as service provider
          profile_complete: true,
          updated_at: new Date().toISOString(),
          headline: values.title,
          // Additional fields that might be in profiles table
        })
        .eq('id', user.id)


      /*
      const { error: serviceError } = await supabase
        .from('service_profiles')
        .insert({


          user_id: user.id,
          services: finalServices,
          hourly_rate: Number(values.hourlyRate),
          availability_status: values.availability,
          location: values.location,


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


      
      toast({
        title: "Profile Created Successfully",
        description: "Your service provider profile has been published and is now visible in the directory."}),



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

                          <FormControl>
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
                      name="location"
                      render={({ field }: { field: any }) => (
                        <FormItem>
                          <FormLabel className="text-zion-slate-light">Location</FormLabel>

                          <FormControl>
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
                      name="website"
                      render={({ field }: { field: any }) => (
                        <FormItem>
                          <FormLabel className="text-zion-slate-light">Website (optional)</FormLabel>

                          <FormControl>
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
                        <AspectRatio ratio={1/1}>
                          <img
                            src={uploadedAvatar}
                            alt='Avatar preview'
                            className='w-full h-full object-cover'
                            loading='lazy'                          />
ursor/fix-website-loading-errors-and-merge-6662

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
          <CardTitle className='text-2xl text-white'>;
            Create Your Service Provider Profile;
          </CardTitle>;
          <CardDescription className='text-zion-slate'>;
            Showcase your services and expertise to potential clients.;
          </CardDescription>;
        </CardHeader>;

        <Form {...form}>;
          <form onSubmit={form && form.handleSubmit(onSubmit)}>;
            <CardContent className='space-y-8'>;

                        </FormLabel>
                        <FormDescription className="text-zion-slate-light">
                          Let AI help optimize your service description for better visibility and client engagement
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
                {form.watch('enhancedProfile') && (
                  <div className='flex justify-end'>
                    <Button
                      type='button'
                      variant='outline'
                      className='border-zion-purple text-zion-purple hover:bg-zion-purple/10'
                      onClick={generateEnhancedProfile}
                      disabled={isGenerating}                    >
                      <Sparkles className='mr-2 h-4 w-4' />
                      {isGenerating
                        ? 'Generating...'
                        : 'Generate Enhanced Profile'}

                
                {form.watch("enhancedProfile") && (
                  <div className="flex justify-end">
                    <Button
                      type="button"
                      variant="outline"
                      className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
                      onClick={generateEnhancedProfile}
                      disabled={isGenerating}
                    >
                      <Sparkles className="mr-2 h-4 w-4" />
                      {isGenerating ? "Generating..." : "Generate Enhanced Profile"}

                      </FormControl>
                    </FormItem>
                  )}
                />


                {/* Generated Content Display */}
                {generatedContent && (
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
                        <h5 className='text-zion-slate-light text-sm mb-1'>
                          Professional Summary
                        </h5>
                        <p className='text-zion-slate italic'>
                          {generatedContent.summary}
                        </p>
                      </div>

                        onClick={applyGeneratedContent}>;
                        <Check className='mr-1 h-3 w-3' /> Apply;
                      </Button>;
                    </div>;

                    <div className='space-y-4'>;
                      <div>;
                        <h5 className='text-zion-slate-light text-sm mb-1'>;
                          Professional Summary;
                        </h5>;
                        <p className='text-zion-slate italic'>;
                          {generatedContent && generatedContent.summary}
                        </p>;
                      </div>;

                      {generatedContent && generatedContent.services &&;
                        generatedContent && generatedContent.services.length > 0 && (;
                          <div>;
                            <h5 className='text-zion-slate-light text-sm mb-1'>;
                              Suggested Services;
                            </h5>;
                            <div className='flex flex-wrap gap-2 mt-1'>;
                              {generatedContent && generatedContent.services.map(;
                                (service, index) => (;

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

              {/* Services and Availability */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Services Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-white">Services Offered</h3>
                  <FormField


                    name="services"
                    render={({ field }: { field: any }) => (
                      <FormItem>
                        <FormLabel className="text-zion-slate-light">Services</FormLabel>
                        <div className="flex gap-2">


                          <FormControl>
                            <Input
                              className="flex-1 bg-zion-blue border-zion-blue-light text-white"
                              placeholder="Add a service..."

                    name='services'
                    render={({ field }: { field: any }) => (                      <FormItem>
                        <FormLabel className='text-zion-slate-light'>
                          Services
                        </FormLabel>
                        <div className='flex gap-2'>
ursor/fix-website-loading-errors-and-merge-6662
                              className='flex-1 bg-zion-blue border-zion-blue-light text-white'
                              placeholder='Add a service...'

                              {...field}
                              onKeyDown={handleServiceKeyPress}
                            />
                          </FormControl>
                          <Button


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

                  <div className='flex flex-wrap gap-2 mt-2'>
                    {serviceTags.map(service => (
                      <Badge
                        key={service}
                        className='bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none pl-2 pr-1 py-1.5 flex items-center gap-1'
                      >
                        {service}
                        <button
                          type='button'
                          onClick={() => handleRemoveService(service)}
                          className='rounded-full hover:bg-zion-purple-dark/20 p-0.5'                        >
                          <X className='h-3 w-3' />


                  <div className="flex flex-wrap gap-2 mt-2">
                    {serviceTags.map(service => (
                      <Badge
                        key={service}
                        className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none pl-2 pr-1 py-1.5 flex items-center gap-1"
                      >
                        {service}
                        <button
                          type="button"
                          onClick={() => handleRemoveService(service)}
                          className="rounded-full hover:bg-zion-purple-dark/20 p-0.5"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                    {serviceTags.length === 0 && (


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
                  {isSubmitting ? "Creating Profile..." : "Create Service Profile"}


                </Button>

            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  )
}


