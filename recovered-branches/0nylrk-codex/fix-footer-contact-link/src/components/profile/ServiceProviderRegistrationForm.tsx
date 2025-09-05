
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react",
import { useForm } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import { z } from "zod",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Switch } from "@/components/ui/switch",
import { Badge } from "@/components/ui/badge",
import { Separator } from "@/components/ui/separator",
=======
import React, { useState } from &quot;react&quot;;
import { useForm } from &quot;react-hook-form&quot;;
import { zodResolver } from &quot;@hookform/resolvers/zod&quot;;
import { z } from &quot;zod&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Textarea } from &quot;@/components/ui/textarea&quot;;
import { Switch } from &quot;@/components/ui/switch&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Separator } from &quot;@/components/ui/separator&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
<<<<<<< HEAD
  FormMessage} from "@/components/ui/form",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { X, Sparkles, Upload, Clock, Check, Briefcase, MapPin, UserRound, Globe } from "lucide-react",
import { toast } from "@/components/ui/use-toast",
import { supabase } from "@/integrations/supabase/client",
import { AspectRatio } from "@/components/ui/aspect-ratio",
import { useAuth } from "@/hooks/useAuth",
=======
  FormMessage} from &quot;@/components/ui/form&quot;;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { X, Sparkles, Upload, Clock, Check, Briefcase, MapPin, UserRound, Globe } from &quot;lucide-react&quot;;
import { toast } from &quot;@/components/ui/use-toast&quot;;
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { AspectRatio } from &quot;@/components/ui/aspect-ratio&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
=======
import React, {_useState} from "react";
import {_Form, _FormControl, _FormDescription, _FormField, _FormItem, _FormLabel, _FormMessage} from "@/components/ui/form";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
// Define form schema
<<<<<<< HEAD
const serviceProfileSchema = z.object({
  name: z.string().min(2, &quot;Name must be at least 2 characters long&quot;),
  title: z.string().min(5, &quot;Business name/title is required&quot;),
  bio: z.string().min(50, &quot;Bio must be at least 50 characters long&quot;).max(1000, &quot;Bio cannot exceed 1000 characters&quot;),
  location: z.string().min(2, &quot;Location is required&quot;),
  services: z.string().min(2, &quot;Enter at least one service&quot;),
  hourlyRate: z.string().refine((val) => !isNaN(Number(val)), {
    message: &quot;Rate must be a number&quot;}),
  availability: z.enum([&quot;available&quot;, &quot;limited&quot;, &quot;unavailable&quot;]),
  enhancedProfile: z.boolean().default(true),
<<<<<<< HEAD
  website: z.string().url("Please enter a valid URL").or(z.string().length(0)).optional()}),
=======
  website: z.string().url(&quot;Please enter a valid URL&quot;).or(z.string().length(0)).optional()});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
const _serviceProfileSchema = z.object({_name: z.string().min(2, _"Name must be at least 2 characters long"), _title: z.string().min(5, _"Business name/title is required"), _bio: z.string().min(50, _"Bio must be at least 50 characters long").max(1000, _"Bio cannot exceed 1000 characters"), _location: z.string().min(2, _"Location is required"), _services: z.string().min(2, _"Enter at least one service"), _hourlyRate: z.string().refine(_(val) => !isNaN(Number(val)), _{
    message: "Rate must be a number"}),
  availability: z.enum(["available", "limited", "unavailable"]),
  enhancedProfile: z.boolean().default(true),
  website: z.string().url("Please enter a valid window.URL").or(z.string().length(0)).optional()});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

type ServiceFormValues = z.infer<typeof serviceProfileSchema>,

<<<<<<< HEAD
export function ServiceProviderRegistrationForm() {
  const { user } = useAuth(),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [serviceTags, setServiceTags] = useState<string[]>([]),
  const [isGenerating, setIsGenerating] = useState(false),
  const [generatedContent, setGeneratedContent] = useState<{ summary: string, services: string[] } | null>(null),
  const [uploadedAvatar, setUploadedAvatar] = useState<string | null>(null),
  
  // Initialize form with default values
  const form = useForm<ServiceFormValues>({
    resolver: zodResolver(serviceProfileSchema),
    defaultValues: {
      name: user?.displayName || "&quot;,
      title: "&quot;,
      bio: "&quot;,
      location: "&quot;,
      services: "&quot;,
      hourlyRate: "&quot;,
      availability: &quot;available&quot;,
      enhancedProfile: true,
<<<<<<< HEAD
      website: ""}}),

  // Handle adding service tags
  const handleAddService = () => {
    const serviceInput = form.getValues("services"),
    if (serviceInput && !serviceTags.includes(serviceInput)) {
      setServiceTags([...serviceTags, serviceInput]),
      form.setValue("services", "")
=======
      website: "&quot;}});

  // Handle adding service tags
  const handleAddService = () => {
    const serviceInput = form.getValues(&quot;services&quot;);
    if (serviceInput && !serviceTags.includes(serviceInput)) {
      setServiceTags([...serviceTags, serviceInput]);
      form.setValue(&quot;services&quot;, "&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },

  // Handle removing service tags
  const handleRemoveService = (service: string) => {
    setServiceTags(serviceTags.filter((s) => s !== service))
  },

  // Handle key press in services input (add on enter)
  const handleServiceKeyPress = (e: React.KeyboardEvent) => {
<<<<<<< HEAD
    if (e.key === "Enter") {
      e.preventDefault(),
      handleAddService()
=======
    if (e.key === &quot;Enter&quot;) {
      e.preventDefault();
      handleAddService();
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },

  // Handle avatar upload
  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0],
    if (file) {
      const reader = new FileReader(),
      reader.onloadend = () => {
        setUploadedAvatar(reader.result as string)
      },
      reader.readAsDataURL(file)
=======
export function ServiceProviderRegistrationForm() {_const { user} = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serviceTags, setServiceTags] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<{_summary: string; services: string[]} | null>(null);
  const [uploadedAvatar, setUploadedAvatar] = useState<string | null>(null);
  
  // Initialize form with default values
  const _form = useForm<ServiceFormValues>({_resolver: zodResolver(serviceProfileSchema), _defaultValues: {
      name: user?.displayName || "", _title: "", _bio: "", _location: "", _services: "", _hourlyRate: "", _availability: "available", _enhancedProfile: true, _website: ""}});

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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },

  // Generate enhanced profile with AI
<<<<<<< HEAD
  const generateEnhancedProfile = async () => {
    const formData = form.getValues(),
    if (!formData.bio || formData.bio.length < 20) {
      toast({
<<<<<<< HEAD
        title: "More information needed",
        description: "Please provide at least a detailed bio before generating enhanced content."}),
      return
=======
        title: &quot;More information needed&quot;,
        description: &quot;Please provide at least a detailed bio before generating enhanced content.&quot;});
=======
  const _generateEnhancedProfile = async () => {_const _formData = form.getValues();
    if (!formData.bio || formData.bio.length < 20) {
      toast({
        title: "More information needed", _description: "Please provide at least a detailed bio before generating enhanced content."});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }

<<<<<<< HEAD
    try {
      setIsGenerating(true),
=======
    try {_setIsGenerating(true);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

      // Call the Supabase Edge Function
      const { data, _error} = await supabase.functions.invoke('service-profile-enhancer', {_body: {
          providerData: {
            name: formData.name, _title: formData.title, _bio: formData.bio, _services: serviceTags, _location: formData.location}
        }
      }),

<<<<<<< HEAD
      if (error) {
        throw new Error(error.message)
      }

      setGeneratedContent(data as { summary: string, services: string[] }),
      
      toast({
<<<<<<< HEAD
        title: "Enhanced Profile Generated",
        description: "AI has created a professional bio and suggested additional services for your profile."})
      
    } catch (error: any) {
      console.error("Error generating enhanced profile:", error),
      toast({
        title: "Generation failed",
        description: error.message || "There was an error generating your enhanced profile. Please try again.",
        variant: "destructive"})
=======
        title: &quot;Enhanced Profile Generated&quot;,
        description: &quot;AI has created a professional bio and suggested additional services for your profile.&quot;});
      
    } catch (error: any) {
      console.error(&quot;Error generating enhanced profile:&quot;, error);
      toast({
        title: &quot;Generation failed&quot;,
        description: error.message || &quot;There was an error generating your enhanced profile. Please try again.&quot;,
        variant: &quot;destructive&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsGenerating(false)
    }
  },

  // Apply generated content to form
  const applyGeneratedContent = () => {
    if (generatedContent) {
<<<<<<< HEAD
      form.setValue("bio", generatedContent.summary),
=======
      form.setValue(&quot;bio&quot;, generatedContent.summary);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
      if (error) {_throw new Error(error.message);}

      setGeneratedContent(data as {_summary: string; services: string[]});
      
      toast({_title: "Enhanced Profile Generated", _description: "AI has created a professional bio and suggested additional services for your profile."});
      
    } catch (error: unknown) {_toast({
        title: "Generation failed", _description: error.message || "There was an error generating your enhanced profile. Please try again.", _variant: "destructive"});
    } finally {_setIsGenerating(false);}
  };

  // Apply generated content to form
  const _applyGeneratedContent = () => {_if (generatedContent) {
      form.setValue("bio", _generatedContent.summary);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      if (generatedContent.services && generatedContent.services.length > 0) {
        const _newServices = generatedContent.services.filter(
          service => typeof service === 'string' && service && !serviceTags.includes(service)
        ),
        
        if (newServices.length > 0) {
<<<<<<< HEAD
          setServiceTags([...serviceTags, ...newServices])
        }
=======
          setServiceTags([...serviceTags, _...newServices]);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      }
    }
  },

  // Handle form submission
  const _onSubmit = async (_values: ServiceFormValues) => {_if (serviceTags.length === 0) {
      toast({
<<<<<<< HEAD
<<<<<<< HEAD
        title: "Services required",
        description: "Please add at least one service to your profile.",
        variant: "destructive"}),
      return
=======
        title: &quot;Services required&quot;,
        description: &quot;Please add at least one service to your profile.&quot;,
        variant: &quot;destructive&quot;});
=======
        title: "Services required", _description: "Please add at least one service to your profile.", _variant: "destructive"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }

    setIsSubmitting(true),

    try {_// For actual implementation with Supabase
      if (!user?.id) {
<<<<<<< HEAD
<<<<<<< HEAD
        throw new Error("User not authenticated")
=======
        throw new Error(&quot;User not authenticated&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }
      
      // Enhance profile if not already done
      let finalSummary = values.bio,
      let finalServices = serviceTags,
=======
        throw new Error("User not authenticated");}
      
      // Enhance profile if not already done
      let _finalSummary = values.bio;
      let _finalServices = serviceTags;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      if (values.enhancedProfile && !generatedContent) {_try {
          const { data: aiData} = await supabase.functions.invoke('service-profile-enhancer', {_body: {
              providerData: {
                name: values.name, _title: values.title, _bio: values.bio, _services: serviceTags, _location: values.location}
            }
          }),
          
<<<<<<< HEAD
          if (aiData) {
            finalSummary = (aiData as any).summary || values.bio,
            // Merge AI suggested services with user-provided services
            const aiServices = (aiData as any).services || [],
            finalServices = [...new Set([...serviceTags, ...aiServices])]
          }
        } catch (error) {
<<<<<<< HEAD
          console.error("Error enhancing profile:", error),
=======
          console.error(&quot;Error enhancing profile:&quot;, error);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
          // Continue with submission even if enhancement fails
        }
      } else if (generatedContent) {
        finalSummary = generatedContent.summary,
        finalServices = [...new Set([...serviceTags, ...generatedContent.services])]
      }

      // Get user email for notification
      const { data: userData } = await supabase.auth.getUser(),
      const userEmail = userData.user?.email,
=======
          if (aiData) {_finalSummary = (aiData as any).summary || values.bio;
            // Merge AI suggested services with user-provided services
            const _aiServices = (aiData as any).services || [];
            finalServices = [...new Set([...serviceTags, _...aiServices])];}
        } catch (error) {_// Continue with submission even if enhancement fails}
      } else if (generatedContent) {_finalSummary = generatedContent.summary;
        finalServices = [...new Set([...serviceTags, _...generatedContent.services])];}

      // Get user email for notification
      const {_data: userData} = await supabase.auth.getUser();
      const _userEmail = userData.user?.email;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

      // Create the service profile
      const {_data: profileData, _error} = await supabase
        .from('profiles')
<<<<<<< HEAD
        .update({
          display_name: values.name,
          bio: finalSummary,
          user_type: &quot;creator&quot;, // Set as service provider
          profile_complete: true,
          updated_at: new Date().toISOString(),
          headline: values.title,
          // Additional fields that might be in profiles table
        })
=======
        .update({_display_name: values.name, _bio: finalSummary, _user_type: "creator", _// Set as service provider
          profile_complete: true, _updated_at: new Date().toISOString(), _headline: values.title, _// Additional fields that might be in profiles table})
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        .eq('id', user.id)
        .select(),

      if (error) throw error,

      // Store service-specific data in service_profiles table
      // (This assumes you have a service_profiles table in your database)

      /*
      const {_error: serviceError} = await supabase
        .from('service_profiles')
<<<<<<< HEAD
        .insert({
          user_id: user.id,
          services: finalServices,
          hourly_rate: Number(values.hourlyRate),
          availability_status: values.availability,
          location: values.location,
          website: values.website || null}),
=======
        .insert({_user_id: user.id, _services: finalServices, _hourly_rate: Number(values.hourlyRate), _availability_status: values.availability, _location: values.location, _website: values.website || null});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

      if (serviceError) throw serviceError,
      */

      // Send notification email if available
      if (userEmail && values.enhancedProfile) {_try {
          await supabase.functions.invoke('send-email', _{
            body: {
<<<<<<< HEAD
              to: userEmail,
              subject: &quot;Your Zion Service Profile Is Ready&quot;,
              html: `
<<<<<<< HEAD
              <div style="font-family: Arial, sans-serif, max-width: 600px, margin: 0 auto,">
                <h2 style="color: #6D28D9,">Service Profile Created!</h2>
=======
              to: userEmail, _subject: "Your Zion Service Profile Is Ready", _html: `
              <div style="font-family: Arial, _sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #6D28D9;">Service Profile Created!</h2>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <p>Your service provider profile has been successfully created and published.</p>
                <p>We've enhanced your profile with AI to help you stand out to potential clients.</p>
                <p>You can now start receiving service requests and connecting with clients.</p>
                <div style="margin-top: 30px, padding-top: 20px, border-top: 1px solid #eee,">
                  <p style="color: #666, font-size: 12px,">© ${new Date().getFullYear()} Zion Marketplace</p>
=======
              <div style=&quot;font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;&quot;>
                <h2 style=&quot;color: #6D28D9;&quot;>Service Profile Created!</h2>
                <p>Your service provider profile has been successfully created and published.</p>
                <p>We've enhanced your profile with AI to help you stand out to potential clients.</p>
                <p>You can now start receiving service requests and connecting with clients.</p>
                <div style=&quot;margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;&quot;>
                  <p style=&quot;color: #666; font-size: 12px;&quot;>© ${new Date().getFullYear()} Zion Marketplace</p>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                </div>
              </div>
              `
            }
<<<<<<< HEAD
          })
        } catch (emailError) {
<<<<<<< HEAD
          console.error("Failed to send notification email:", emailError),
=======
          console.error(&quot;Failed to send notification email:&quot;, emailError);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
          // Continue with submission even if email fails
        }
      }
      
      toast({
<<<<<<< HEAD
        title: "Profile Created Successfully",
        description: "Your service provider profile has been published and is now visible in the directory."}),

      // Redirect to service provider dashboard or profile page
      setTimeout(() => {
        window.location.href = "/service-dashboard"
      }, 1500)
      
    } catch (error: any) {
      console.error("Error creating profile:", error),
      toast({
        title: "Error Creating Profile",
        description: error.message || "There was an error creating your profile. Please try again.",
        variant: "destructive"})
=======
        title: &quot;Profile Created Successfully&quot;,
        description: &quot;Your service provider profile has been published and is now visible in the directory.&quot;});

      // Redirect to service provider dashboard or profile page
      setTimeout(() => {
        window.location.href = &quot;/service-dashboard&quot;;
      }, 1500);
      
    } catch (error: any) {
      console.error(&quot;Error creating profile:&quot;, error);
      toast({
        title: &quot;Error Creating Profile&quot;,
        description: error.message || &quot;There was an error creating your profile. Please try again.&quot;,
        variant: &quot;destructive&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsSubmitting(false)
    }
  },
=======
          });
        } catch (emailError) {_// Continue with submission even if email fails}
      }
      
      toast({_title: "Profile Created Successfully", _description: "Your service provider profile has been published and is now visible in the directory."});

      // Redirect to service provider dashboard or profile page
      setTimeout__(() => {_window.location.href = "/service-dashboard";}, 1500);
      
    } catch (error: unknown) {_toast({
        title: "Error Creating Profile", _description: error.message || "There was an error creating your profile. Please try again.", _variant: "destructive"});
    } finally {_setIsSubmitting(false);}
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <div className=&quot;max-w-4xl mx-auto p-4 md:p-6&quot;>
      <Card className=&quot;bg-zion-blue-dark border-zion-blue-light&quot;>
        <CardHeader>
          <CardTitle className=&quot;text-2xl text-white&quot;>Create Your Service Provider Profile</CardTitle>
          <CardDescription className=&quot;text-zion-slate&quot;>
            Showcase your services and expertise to potential clients.
          </CardDescription>
        </CardHeader>

<<<<<<< HEAD
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className=&quot;space-y-8&quot;>
              {/* Basic Information */}
              <div className=&quot;space-y-4&quot;>
                <h3 className=&quot;text-lg font-medium text-white&quot;>Basic Information</h3>
                <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;>
                  <div className=&quot;col-span-1&quot;>
                    <FormField
                      control={form.control}
                      name=&quot;name&quot;
                      render={({ field }) => (
=======
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
                      render={_(_{ field}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        <FormItem>
                          <FormLabel className=&quot;text-zion-slate-light&quot;>Full Name</FormLabel>
                          <FormControl>
                            <div className=&quot;relative&quot;>
                              <UserRound className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4&quot; />
                              <Input
<<<<<<< HEAD
                                className=&quot;pl-10 bg-zion-blue border-zion-blue-light text-white&quot;
                                placeholder=&quot;Your full name&quot;
                                {...field}
=======
                                className="pl-10 bg-zion-blue border-zion-blue-light text-white"
                                placeholder="Your full name"
                                {_...field}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                              />
                            </div>
                          </FormControl>
                          <FormMessage className=&quot;text-red-400&quot; />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className=&quot;col-span-1&quot;>
                    <FormField
<<<<<<< HEAD
                      control={form.control}
                      name=&quot;title&quot;
                      render={({ field }) => (
=======
                      control={_form.control}
                      name="title"
                      render={_(_{ field}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        <FormItem>
                          <FormLabel className=&quot;text-zion-slate-light&quot;>Business/Service Name</FormLabel>
                          <FormControl>
                            <div className=&quot;relative&quot;>
                              <Briefcase className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4&quot; />
                              <Input
<<<<<<< HEAD
                                className=&quot;pl-10 bg-zion-blue border-zion-blue-light text-white&quot;
                                placeholder=&quot;e.g., Creative Design Studio&quot;
                                {...field}
=======
                                className="pl-10 bg-zion-blue border-zion-blue-light text-white"
                                placeholder="e.g., Creative Design Studio"
                                {_...field}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                              />
                            </div>
                          </FormControl>
                          <FormMessage className=&quot;text-red-400&quot; />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className=&quot;col-span-1&quot;>
                    <FormField
<<<<<<< HEAD
                      control={form.control}
                      name=&quot;location&quot;
                      render={({ field }) => (
=======
                      control={_form.control}
                      name="location"
                      render={_(_{ field}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        <FormItem>
                          <FormLabel className=&quot;text-zion-slate-light&quot;>Location</FormLabel>
                          <FormControl>
                            <div className=&quot;relative&quot;>
                              <MapPin className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4&quot; />
                              <Input
<<<<<<< HEAD
                                className=&quot;pl-10 bg-zion-blue border-zion-blue-light text-white&quot;
                                placeholder=&quot;City, State/Province, Country&quot;
                                {...field}
=======
                                className="pl-10 bg-zion-blue border-zion-blue-light text-white"
                                placeholder="City, State/Province, Country"
                                {_...field}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                              />
                            </div>
                          </FormControl>
                          <FormMessage className=&quot;text-red-400&quot; />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className=&quot;col-span-1&quot;>
                    <FormField
<<<<<<< HEAD
                      control={form.control}
                      name=&quot;website&quot;
                      render={({ field }) => (
=======
                      control={_form.control}
                      name="website"
                      render={_(_{ field}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        <FormItem>
                          <FormLabel className=&quot;text-zion-slate-light&quot;>Website (optional)</FormLabel>
                          <FormControl>
                            <div className=&quot;relative&quot;>
                              <Globe className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4&quot; />
                              <Input
<<<<<<< HEAD
                                className=&quot;pl-10 bg-zion-blue border-zion-blue-light text-white&quot;
                                placeholder=&quot;https://yourwebsite.com&quot;
                                {...field}
=======
                                className="pl-10 bg-zion-blue border-zion-blue-light text-white"
                                placeholder="https://yourwebsite.com"
                                {_...field}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                              />
                            </div>
                          </FormControl>
                          <FormMessage className=&quot;text-red-400&quot; />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                
<<<<<<< HEAD
                {/* Upload Avatar */}
                <div className=&quot;space-y-2&quot;>
                  <FormLabel className=&quot;text-zion-slate-light&quot;>Profile Picture</FormLabel>
                  <div className=&quot;flex items-center gap-6&quot;>
                    <div className=&quot;relative w-24 h-24 rounded-full overflow-hidden bg-zion-blue-light border border-zion-blue-light&quot;>
                      {uploadedAvatar ? (
                        <AspectRatio ratio={1/1}>
                          <img
                            src={uploadedAvatar}
                            alt=&quot;Avatar preview&quot;
                            className=&quot;w-full h-full object-cover&quot;
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          />
                        </AspectRatio>
                      ) : (
                        <div className=&quot;flex items-center justify-center h-full&quot;>
                          <UserRound className=&quot;h-10 w-10 text-zion-slate opacity-50&quot; />
                        </div>
                      )}
                    </div>

                    <label className=&quot;flex items-center justify-center px-4 py-2 rounded-md bg-zion-purple hover:bg-zion-purple-dark text-white cursor-pointer transition-colors&quot;>
                      <Upload className=&quot;mr-2 h-4 w-4&quot; />
                      <span>Upload Photo</span>
                      <input
<<<<<<< HEAD
                        type=&quot;file&quot;
                        accept=&quot;image/*&quot;
                        className=&quot;hidden&quot;
                        onChange={handleAvatarUpload}
=======
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={_handleAvatarUpload}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      />
                    </label>
                  </div>
                  <p className=&quot;text-sm text-zion-slate&quot;>
                    For best results, use an image at least 400x400 pixels in JPG, PNG, or GIF format.
                  </p>
                </div>
              </div>

              <Separator className=&quot;bg-zion-blue-light/50&quot; />

<<<<<<< HEAD
              {/* Bio Section */}
              <div className=&quot;space-y-4&quot;>
                <h3 className=&quot;text-lg font-medium text-white&quot;>Service Description</h3>
                <FormField
                  control={form.control}
                  name=&quot;bio&quot;
                  render={({ field }) => (
=======
              {_/* Bio Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">Service Description</h3>
                <FormField
                  control={_form.control}
                  name="bio"
                  render={_(_{ field}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    <FormItem>
                      <FormLabel className=&quot;text-zion-slate-light&quot;>About Your Services</FormLabel>
                      <FormControl>
                        <Textarea
<<<<<<< HEAD
                          className=&quot;h-32 min-h-[128px] bg-zion-blue border-zion-blue-light text-white&quot;
                          placeholder=&quot;Describe your services, expertise, and what sets you apart from others...&quot;
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className=&quot;text-red-400&quot; />
                      <FormDescription className=&quot;text-zion-slate&quot;>
                        {field.value?.length || 0}/1000 characters
=======
                          className="h-32 min-h-[128px] bg-zion-blue border-zion-blue-light text-white"
                          placeholder="Describe your services, expertise, and what sets you apart from others..."
                          {_...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                      <FormDescription className="text-zion-slate">
                        {_field.value?.length || 0}/1000 characters
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </FormDescription>
                    </FormItem>
                  )}
                />
                
                {_/* AI Enhancement Option */}
                <FormField
<<<<<<< HEAD
                  control={form.control}
                  name=&quot;enhancedProfile&quot;
                  render={({ field }) => (
                    <FormItem className=&quot;flex flex-row items-center justify-between p-3 border border-zion-blue-light bg-zion-blue/30 rounded-md&quot;>
                      <div className=&quot;space-y-0.5&quot;>
                        <FormLabel className=&quot;text-white flex items-center&quot;>
                          <Sparkles className=&quot;w-4 h-4 mr-2 text-zion-purple&quot; />
=======
                  control={_form.control}
                  name="enhancedProfile"
                  render={_(_{ field}) => (
                    <FormItem className="flex flex-row items-center justify-between p-3 border border-zion-blue-light bg-zion-blue/30 rounded-md">
                      <div className="space-y-0.5">
                        <FormLabel className="text-white flex items-center">
                          <Sparkles className="w-4 h-4 mr-2 text-zion-purple" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          AI Profile Enhancement
                        </FormLabel>
                        <FormDescription className=&quot;text-zion-slate-light&quot;>
                          Let AI help optimize your service description for better visibility and client engagement
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
<<<<<<< HEAD
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className=&quot;data-[state=checked]:bg-zion-purple&quot;
=======
                          checked={_field.value}
                          onCheckedChange={_field.onChange}
                          className="data-[state=checked]:bg-zion-purple"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
<<<<<<< HEAD
                {form.watch(&quot;enhancedProfile&quot;) && (
                  <div className=&quot;flex justify-end&quot;>
=======
                {_form.watch("enhancedProfile") && (
                  <div className="flex justify-end">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    <Button
                      type=&quot;button&quot;
                      variant=&quot;outline&quot;
                      className=&quot;border-zion-purple text-zion-purple hover:bg-zion-purple/10&quot;
                      onClick={generateEnhancedProfile}
                      disabled={_isGenerating}
                    >
<<<<<<< HEAD
                      <Sparkles className=&quot;mr-2 h-4 w-4&quot; />
                      {isGenerating ? &quot;Generating...&quot; : &quot;Generate Enhanced Profile&quot;}
=======
                      <Sparkles className="mr-2 h-4 w-4" />
                      {_isGenerating ? "Generating..." : "Generate Enhanced Profile"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </Button>
                  </div>
                )}

<<<<<<< HEAD
                {/* Generated Content Display */}
                {generatedContent && (
                  <div className=&quot;bg-zion-blue-light/20 border border-zion-blue-light rounded-md p-4&quot;>
                    <div className=&quot;flex items-center justify-between mb-3&quot;>
                      <h4 className=&quot;text-white font-medium flex items-center&quot;>
                        <Sparkles className=&quot;w-4 h-4 mr-2 text-zion-purple&quot; />
=======
                {_/* Generated Content Display */}
                {_generatedContent && (_<div className="bg-zion-blue-light/20 border border-zion-blue-light rounded-md p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-white font-medium flex items-center">
                        <Sparkles className="w-4 h-4 mr-2 text-zion-purple" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        AI-Generated Content
                      </h4>
                      <Button
                        type=&quot;button&quot;
                        size=&quot;sm&quot;
                        className=&quot;bg-zion-purple hover:bg-zion-purple-dark text-white&quot;
                        onClick={applyGeneratedContent}
                      >
                        <Check className=&quot;mr-1 h-3 w-3&quot; /> Apply
                      </Button>
                    </div>
                    
                    <div className=&quot;space-y-4&quot;>
                      <div>
<<<<<<< HEAD
                        <h5 className=&quot;text-zion-slate-light text-sm mb-1&quot;>Professional Summary</h5>
                        <p className=&quot;text-zion-slate italic&quot;>{generatedContent.summary}</p>
=======
                        <h5 className="text-zion-slate-light text-sm mb-1">Professional Summary</h5>
                        <p className="text-zion-slate italic">{_generatedContent.summary}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </div>
                      
                      {_generatedContent.services && generatedContent.services.length > 0 && (
                        <div>
<<<<<<< HEAD
                          <h5 className=&quot;text-zion-slate-light text-sm mb-1&quot;>Suggested Services</h5>
                          <div className=&quot;flex flex-wrap gap-2 mt-1&quot;>
                            {generatedContent.services.map((service, index) => (
=======
                          <h5 className="text-zion-slate-light text-sm mb-1">Suggested Services</h5>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {generatedContent.services.map((service, _index) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                              <Badge
                                key={index}
                                className=&quot;bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none&quot;
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

              <Separator className=&quot;bg-zion-blue-light/50&quot; />

<<<<<<< HEAD
              {/* Services and Availability */}
              <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
                {/* Services Section */}
                <div className=&quot;space-y-4&quot;>
                  <h3 className=&quot;text-lg font-medium text-white&quot;>Services Offered</h3>
                  <FormField
                    control={form.control}
                    name=&quot;services&quot;
                    render={({ field }) => (
=======
              {_/* Services and Availability */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {_/* Services Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-white">Services Offered</h3>
                  <FormField
                    control={_form.control}
                    name="services"
                    render={_(_{ field}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      <FormItem>
                        <FormLabel className=&quot;text-zion-slate-light&quot;>Services</FormLabel>
                        <div className=&quot;flex gap-2&quot;>
                          <FormControl>
                            <Input
<<<<<<< HEAD
                              className=&quot;flex-1 bg-zion-blue border-zion-blue-light text-white&quot;
                              placeholder=&quot;Add a service...&quot;
                              {...field}
                              onKeyDown={handleServiceKeyPress}
                            />
                          </FormControl>
                          <Button
                            type=&quot;button&quot;
                            variant=&quot;outline&quot;
                            className=&quot;border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white&quot;
                            onClick={handleAddService}
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          >
                            Add
                          </Button>
                        </div>
                        <FormDescription className=&quot;text-zion-slate&quot;>
                          Press Enter or click Add to include a service
                        </FormDescription>
                        <FormMessage className=&quot;text-red-400&quot; />
                      </FormItem>
                    )}
                  />

<<<<<<< HEAD
                  <div className=&quot;flex flex-wrap gap-2 mt-2&quot;>
                    {serviceTags.map(service => (
=======
                  <div className="flex flex-wrap gap-2 mt-2">
                    {_serviceTags.map(_service => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      <Badge
                        key={service}
                        className=&quot;bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none pl-2 pr-1 py-1.5 flex items-center gap-1&quot;
                      >
                        {_service}
                        <button
<<<<<<< HEAD
                          type=&quot;button&quot;
                          onClick={() => handleRemoveService(service)}
                          className=&quot;rounded-full hover:bg-zion-purple-dark/20 p-0.5&quot;
=======
                          type="button"
                          onClick={_() => handleRemoveService(service)}
                          className="rounded-full hover:bg-zion-purple-dark/20 p-0.5"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        >
                          <X className=&quot;h-3 w-3&quot; />
                        </button>
                      </Badge>
                    ))}
<<<<<<< HEAD
                    {serviceTags.length === 0 && (
                      <p className=&quot;text-zion-slate text-sm italic&quot;>No services added yet</p>
=======
                    {_serviceTags.length === 0 && (
                      <p className="text-zion-slate text-sm italic">No services added yet</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    )}
                  </div>
                </div>

<<<<<<< HEAD
                {/* Pricing and Availability Section */}
                <div className=&quot;space-y-4&quot;>
                  <h3 className=&quot;text-lg font-medium text-white&quot;>Pricing & Availability</h3>
                  <FormField
                    control={form.control}
                    name=&quot;hourlyRate&quot;
                    render={({ field }) => (
=======
                {_/* Pricing and Availability Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-white">Pricing & Availability</h3>
                  <FormField
                    control={_form.control}
                    name="hourlyRate"
                    render={_(_{ field}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      <FormItem>
                        <FormLabel className=&quot;text-zion-slate-light&quot;>Starting Rate (USD)</FormLabel>
                        <FormControl>
                          <div className=&quot;relative&quot;>
                            <span className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate&quot;>$</span>
                            <Input
<<<<<<< HEAD
                              className=&quot;pl-8 bg-zion-blue border-zion-blue-light text-white&quot;
                              placeholder=&quot;e.g., 85&quot;
                              {...field}
=======
                              className="pl-8 bg-zion-blue border-zion-blue-light text-white"
                              placeholder="e.g., 85"
                              {_...field}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                            />
                          </div>
                        </FormControl>
                        <FormDescription className=&quot;text-zion-slate&quot;>
                          Your base hourly or project rate
                        </FormDescription>
                        <FormMessage className=&quot;text-red-400&quot; />
                      </FormItem>
                    )}
                  />

                  <FormField
<<<<<<< HEAD
                    control={form.control}
                    name=&quot;availability&quot;
                    render={({ field }) => (
                      <FormItem className=&quot;space-y-4&quot;>
                        <FormLabel className=&quot;text-zion-slate-light&quot;>Current Status</FormLabel>
=======
                    control={_form.control}
                    name="availability"
                    render={_(_{ field}) => (_<FormItem className="space-y-4">
                        <FormLabel className="text-zion-slate-light">Current Status</FormLabel>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        <FormControl>
                          <div className=&quot;space-y-2&quot;>
                            <div className=&quot;flex items-center space-x-2&quot;>
                              <input
<<<<<<< HEAD
                                type=&quot;radio&quot;
                                id=&quot;available&quot;
                                value=&quot;available&quot;
                                checked={field.value === &quot;available&quot;}
                                onChange={() => field.onChange(&quot;available&quot;)}
                                className=&quot;text-zion-purple focus:ring-zion-purple&quot;
=======
                                type="radio"
                                id="available"
                                value="available"
                                checked={_field.value === "available"}
                                onChange={_() => field.onChange("available")}
                                className="text-zion-purple focus:ring-zion-purple"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                              />
                              <label htmlFor=&quot;available&quot; className=&quot;text-white flex items-center gap-2&quot;>
                                <div className=&quot;h-2 w-2 rounded-full bg-green-500&quot;></div>
                                Available for Work
                              </label>
                            </div>

                            <div className=&quot;flex items-center space-x-2&quot;>
                              <input
<<<<<<< HEAD
                                type=&quot;radio&quot;
                                id=&quot;limited&quot;
                                value=&quot;limited&quot;
                                checked={field.value === &quot;limited&quot;}
                                onChange={() => field.onChange(&quot;limited&quot;)}
                                className=&quot;text-zion-purple focus:ring-zion-purple&quot;
=======
                                type="radio"
                                id="limited"
                                value="limited"
                                checked={_field.value === "limited"}
                                onChange={_() => field.onChange("limited")}
                                className="text-zion-purple focus:ring-zion-purple"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                              />
                              <label htmlFor=&quot;limited&quot; className=&quot;text-white flex items-center gap-2&quot;>
                                <div className=&quot;h-2 w-2 rounded-full bg-yellow-500&quot;></div>
                                Limited Availability
                              </label>
                            </div>

                            <div className=&quot;flex items-center space-x-2&quot;>
                              <input
<<<<<<< HEAD
                                type=&quot;radio&quot;
                                id=&quot;unavailable&quot;
                                value=&quot;unavailable&quot;
                                checked={field.value === &quot;unavailable&quot;}
                                onChange={() => field.onChange(&quot;unavailable&quot;)}
                                className=&quot;text-zion-purple focus:ring-zion-purple&quot;
=======
                                type="radio"
                                id="unavailable"
                                value="unavailable"
                                checked={_field.value === "unavailable"}
                                onChange={_() => field.onChange("unavailable")}
                                className="text-zion-purple focus:ring-zion-purple"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                              />
                              <label htmlFor=&quot;unavailable&quot; className=&quot;text-white flex items-center gap-2&quot;>
                                <div className=&quot;h-2 w-2 rounded-full bg-red-500&quot;></div>
                                Currently Unavailable
                              </label>
                            </div>
                          </div>
                        </FormControl>
                        <FormMessage className=&quot;text-red-400&quot; />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </CardContent>

            <CardFooter className=&quot;border-t border-zion-blue-light pt-6&quot;>
              <div className=&quot;flex flex-col sm:flex-row gap-4 w-full sm:justify-between&quot;>
                <Button
                  type=&quot;button&quot;
                  variant=&quot;outline&quot;
                  className=&quot;border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white&quot;
                >
                  Save as Draft
                </Button>
                <Button 
<<<<<<< HEAD
                  type=&quot;submit&quot;
                  className=&quot;bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white&quot;
                  disabled={isSubmitting}
                >
                  {isSubmitting ? &quot;Creating Profile...&quot; : &quot;Create Service Profile&quot;}
=======
                  type="submit"
                  className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                  disabled={_isSubmitting}
                >
                  {_isSubmitting ? "Creating Profile..." : "Create Service Profile"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </Button>
              </div>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  )
}
