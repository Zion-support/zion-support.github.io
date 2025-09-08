import React, { useState } from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Switch} from "@/components/ui/switch";
import {Badge} from "@/components/ui/badge";
import {Separator} from "@/components/ui/separator";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {X, Sparkles, Upload, Clock, Check, Briefcase, MapPin, UserRound, Globe} from "lucide-react";
import {toast} from "@/components/ui/use-toast";
import {supabase} from "@/integrations/supabase/client";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import {useAuth} from "@/hooks/useAuth";
// Define form schema;
const serviceProfileSchema = z && z.object({;
  }
  "name": z && z.string().min(2, "Name must be at least 2 characters long");"
  "title": z && z.string().min(5, "Business name/title is required");"
  "bio": z && z.string().min(50, "Bio must be at least 50 characters long").max(1000, "Bio cannot exceed 1000 characters");"
  "location": z && z.string().min(2, "Location is required");"
  "services": z && z.string().min(2, "Enter at least one service");"
  "hourlyRate": z && z.string().refine((val) => !isNaN(Number(val)), {;
    }
    "message": "Rate must be a number"}),;"
  "availability": z && z.enum(["available", "limited", "unavailable"]);"
  "enhancedProfile": z && z.boolean().default(true),;
  "website": z && z.string().url("Please enter a valid URL").or(z && z.string().length(0)).optional()}),;"
type ServiceFormValues = z && z.infer<typeof serviceProfileSchema>;
export function ServiceProviderRegistrationForm() {;
import React, { useState } from "react",
import { useForm } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import { z } from "zod",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Switch } from "@/components/ui/switch",
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  }
import { Separator } from "@/components/ui/separator";
import {};
  Form;
  FormControl;
  FormDescription;
  FormField;
  FormItem;
  FormLabel;
import { Badge } from "@/components/ui/badge","
import { Separator } from "@/components/ui/separator","
import {
  }
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage} from "@/components/ui/form",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { X, Sparkles, Upload, Clock, Check, Briefcase, MapPin, UserRound, Globe } from "lucide-react",
import { toast } from "@/components/ui/use-toast",
import { supabase } from "@/integrations/supabase/client",
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useAuth } from "@/hooks/useAuth";
import { AspectRatio } from "@/components/ui/aspect-ratio",
import { useAuth } from "@/hooks/useAuth",    message: "Rate must be a number"}),
  availability: z.enum(["available", "limited", "unavailable"]),
  enhancedProfile: z.boolean().default(true),"
  website: z.string().url("Please enter a valid URL").or(z.string().length(0)).optional()}),

<<<<<<< HEAD

type ServiceFormValues = z.infer<typeof serviceProfileSchema>,
  // Initialize form with default values
  const form = useForm<ServiceFormValues>({
    resolver: zodResolver(serviceProfileSchema)
    defaultValues: {
      name: user?.displayName |""
      title: ""
      bio: ""
      location: ""
      services: ""
      hourlyRate: ""
      availability: "available"
      enhancedProfile: true
      website: ""}})
  // Handle adding service tags
  const handleAddService = () => {
    const serviceInput = form.getValues("services"),
    if (serviceInput && !serviceTags.includes(serviceInput)) {      setServiceTags([...serviceTags, serviceInput]),
      form.setValue("services", "")
    }
  }
  // Generate enhanced profile with AI
  const generateEnhancedProfile = async () => {

    const formData = form.getValues();
    if (!formData.bio |formData.bio.length < 20) {}
  };
import { useForm } from "react-hook-form",;
import { zodResolver } from "@hookform/resolvers/zod",;
import { z } from "zod",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Switch } from "@/components/ui/switch",;
import { Badge } from "@/components/ui/badge",;

import { Separator } from "@/components/ui/separator",;
import {;
  Form,;
  FormControl,;
  FormDescription,;
  FormField,;
  FormItem,;
  FormLabel,;"
  FormMessage} from "@/components/ui/form",;"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;"
import { X, Sparkles, Upload, Clock, Check, Briefcase, MapPin, UserRound, Globe } from "lucide-react",;"
import { toast } from "@/components/ui/use-toast",;"
import { supabase } from "@/integrations/supabase/client",;"
import { AspectRatio } from "@/components/ui/aspect-ratio",;"
import { useAuth } from "@/hooks/useAuth",;
// Define form schema;
const serviceProfileSchema = z.object({;"
  name: z.string().min(2, "Name must be at least 2 characters long"),;"
  title: z.string().min(5, "Business name/title is required"),;"
  bio: z.string().min(50, "Bio must be at least 50 characters long").max(1000, "Bio cannot exceed 1000 characters"),;"
  location: z.string().min(2, "Location is required"),;"
  services: z.string().min(2, "Enter at least one service"),;
  hourlyRate: z.string().refine((val) => !isNaN(Number(val)), {;"
    message: "Rate must be a number"}),;"
  availability: z.enum(["available", "limited", "unavailable"]),;
  enhancedProfile: z.boolean().default(true),;"
  website: z.string().url("Please enter a valid URL").or(z.string().length(0)).optional()}),;
type ServiceFormValues = z.infer<typeof serviceProfileSchema>,;
export function ServiceProviderRegistrationForm() { return null; }
  const { user } = useAuth(),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [serviceTags, setServiceTags] = useState<string[]>([]),;
  const [isGenerating, setIsGenerating] = useState(false),;

  const [generatedContent, setGeneratedContent] = useState<{ summary: string, services: string[] } | null>(null),;
  const [uploadedAvatar, setUploadedAvatar] = useState<string | null>(null);

  const [generatedContent, setGeneratedContent] = useState<{ summary: string, services: string[] } | null>(null),;
  const [uploadedAvatar, setUploadedAvatar] = useState<string | null>(null);
  // Initialize form with default values;
  const form = useForm<ServiceFormValues>({;
    resolver: zodResolver(serviceProfileSchema),;
    defaultValues: {;"
      name: user?.displayName || "",;"
      title: "","
      bio: "",;"
      location: "",;"
      services: "",;"
      hourlyRate: "",;"
      availability: "available",;
      enhancedProfile: true,;"
      website: ""}}),;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

  // Handle adding service tags;
  const handleAddService = () => {;
    const serviceInput = form && form.getValues("services");
    if (serviceInput && !serviceTags && serviceTags.includes(serviceInput)) {;
      setServiceTags([...serviceTags, serviceInput]);
      form && form.setValue("services", "");
    }
    } finally {
      setIsGenerating (false);
    }  },;
  // Handle removing service tags;
  const handleRemoveService = (service: string) => {;
    setServiceTags(serviceTags.filter((s) => s !== service));
  },;
  // Handle key press in services input (add on enter);
  const handleServiceKeyPress = (e: React.KeyboardEvent) => {;"
    if (e.key === "Enter") {;
      e.preventDefault(),;
      handleAddService();
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
  },  // Generate enhanced profile with AI
  const generateEnhancedProfile = async () => {
      toast({
        title: "More information needed"
        description: "Please provide at least a detailed bio before generating enhanced content."})
      return      toast({
        title: "Enhanced Profile Generated"
        description: "AI has created a professional bio and suggested additional services for your profile."})
    } catch (error: any) {
      console.error("Error generating enhanced profile:", error),      console.error("Error generating enhanced profile:", error),
      toast({
        title: "Generation failed"
        description: error.message |"There was an error generating your enhanced profile. Please try again."
        variant: "destructive"})        }
      }
    }

  },

        }
      }
    }
  }
  },

  const onSubmit = async (values: ServiceFormValues) => {
    if (serviceTags.length === 0) {
      toast({
        title: "Services required"
        description: "Please add at least one service to your profile."
        variant: "destructive"})
      return
  },;
  // Handle form submission;
  const onSubmit = async (values: ServiceFormValues) => {;
    if (serviceTags.length === 0) {;
;
  // Handle form submission;
  const on_submit = async (values: ServiceFormValues) => {}
    // Check condition;
if ( {) {}
  $2;
}
      toast ({"
        title: "Services required","
        description: "Please add at least one service to your profile.","
        variant: "destructive"}),
      return;
    }
    setIsSubmitting (true);
;
    try {
      // For actual implementation with Supabase;
      // Check condition
if ( {) {
  $2
}
        throw new Error ("User not authenticated");
      }    try {;
      // For actual implementation with Supabase;
      if (!user?.id) {;"
        throw new Error("User not authenticated");
      }

      // Enhance profile if not already done;
      let finalSummary = values && values.bio;
      let finalServices = serviceTags;

      if (values && values.enhancedProfile && !generatedContent) {;
        try {;
          const { data: aiData } = await supabase && supabase.functions.invoke('service-profile-enhancer', {;
            body: {;
              providerData: {;
                name: values && values.name,;
                title: values && values.title,;
                bio: values && values.bio,;
                services: serviceTags,;
                location: values && values.location;
              }
            }
          });
          if (aiData) {;
            finalSummary = (aiData as any).summary || values && values.bio;
            // Merge AI suggested services with user-provided services;
            const aiServices = (aiData as any).services || [];
            finalServices = [...new Set([...serviceTags, ...aiServices])];

        } catch (error) {;

          console && console.error("Error enhancing profile:", error);
          // Continue with submission even if enhancement fails;
        }
      } else if (generatedContent) {;

        finalSummary = generatedContent.summary,;
        finalServices = [...new Set([...serviceTags, ...generatedContent.services])];

      }

      // Get user email for notification;
      const { data: userData } = await supabase && supabase.auth.getUser(),;
      const userEmail = userData && userData.user?.email;
        .select(),

      if (error) throw error,

      // Store service-specific data in service_profiles table

      // (This assumes you have a service_profiles table in your database)
      /*
<<<<<<< HEAD

      const { error: serviceError } = await supabase'
        .from('service_profiles')
        .insert({            }
          })
        } catch (emailError) {"
          console.error("Failed to send notification email:", emailError),
          // Continue with submission even if email fails;
        }
      }
      toast({"
        title: "Profile Created Successfully""
        description: "Your service provider profile has been published and is now visible in the directory."})
      // Redirect to service provider dashboard or profile page;
      setTimeout(() => {"
        window.location.href = "/service-dashboard"
      }, 1500)
    } catch (error: any) {"
      console.error("Error creating profile:", error),
      toast({"
        title: "Error Creating Profile""
        description: error.message |"There was an error creating your profile. Please try again.""
        variant: "destructive"})
    } finally {}
      setIsSubmitting(false)
    }  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6">

      <Card className="bg-zion-blue-dark border-zion-blue-light">
        <CardHeader>"
          <CardTitle className="text-2xl text-white">Create Your Service Provider Profile</CardTitle>"
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          <CardDescription className="text-zion-slate">
            Showcase your services and expertise to potential clients.
          </CardDescription>
        </CardHeader>
        <Form {...form}>
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          <form onSubmit={form.handleSubmit(onSubmit)}>"
            <CardContent className="space-y-8">
              {/* Basic Information */}"
              <div className="space-y-4">"
                <h3 className="text-lg font-medium text-white">Basic Information</h3>"
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">"
                  <div className="col-span-1">
                    <FormField;
                      control={form.control}"
                      name="name"
                      render={({ field }) => (
                        <FormItem>"
                          <FormLabel className="text-zion-slate-light">Full Name</FormLabel>
                          <FormControl>"
                            <div className="relative">"
                              <UserRound className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                              <Input"
                                className="pl-10 bg-zion-blue border-zion-blue-light text-white""
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                                placeholder="Your full name"
                                {...field}
                              />
                            </div>
<<<<<<< HEAD

                          </FormControl>"

=======
                          </FormControl>"
>>>>>>> origin/cursor/delete-old-data-records-6bba
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  </div>"
                  <div className="col-span-1">
                    <FormField;
                      control={form.control}"
                      name="title"
                      render={({ field }) => (
                        <FormItem>"
                          <FormLabel className="text-zion-slate-light">Business/Service Name</FormLabel>
                          <FormControl>"
                            <div className="relative">"
                              <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                              <Input"
                                className="pl-10 bg-zion-blue border-zion-blue-light text-white""
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                                placeholder="e.g., Creative Design Studio"
                                {...field}
                              />
                            </div>
<<<<<<< HEAD

                          </FormControl>"

=======
                          </FormControl>"
>>>>>>> origin/cursor/delete-old-data-records-6bba
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  </div>"
                  <div className="col-span-1">
                    <FormField;
                      control={form.control}"
                      name="location"
                      render={({ field }) => (
                        <FormItem>"
                          <FormLabel className="text-zion-slate-light">Location</FormLabel>
                          <FormControl>"
                            <div className="relative">"
                              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                              <Input"
                                className="pl-10 bg-zion-blue border-zion-blue-light text-white""
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                                placeholder="City, State/Province, Country"
                                {...field}
                              />
                            </div>
<<<<<<< HEAD

                          </FormControl>"

=======
                          </FormControl>"
>>>>>>> origin/cursor/delete-old-data-records-6bba
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  </div>"
                  <div className="col-span-1">
                    <FormField;
                      control={form.control}"
                      name="website"
                      render={({ field }) => (
                        <FormItem>"
                          <FormLabel className="text-zion-slate-light">Website (optional)</FormLabel>
                          <FormControl>"
                            <div className="relative">"
                              <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                              <Input"
                                className="pl-10 bg-zion-blue border-zion-blue-light text-white""
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                                placeholder="https://yourwebsite.com"
                                {...field}
                              />
                            </div>
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                          </FormControl>"
                          <FormMessage className="text-red-400" />
                        </FormItem>;
      // Get user email for notification;
      const { data: userData } = await supabase.auth.getUser(),;
      const userEmail = userData.user?.email,;
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
            body: {;
              to: userEmail,;"
              subject: "Your Zion Service Profile Is Ready",;
              html: `;"
              <div style="font-family: Arial, sans-serif, max-width: 600px, margin: 0 auto,">;"
                <h2 style="color: #6D28D9,">Service Profile Created!</h2>;
                <p>Your service provider profile has been successfully created and published.</p>;'
                <p>We've enhanced your profile with AI to help you stand out to potential clients.</p>;
                <p>You can now start receiving service requests and connecting with clients.</p>;"
                <div style="margin-top: 30px, padding-top: 20px, border-top: 1px solid #eee,">;"
                  <p style="color: #666, font-size: 12px,">© ${new Date().getFullYear()} Zion Marketplace</p>;
                </div>;
              </div>;`
              `;
        finalSummary = generatedContent && generatedContent.summary;
        finalServices = [...new Set([...serviceTags, ...generatedContent && generatedContent.services])];
      }
        .select();
      if (error) throw error;
        try {
          await supabase.functions.invoke ('send - email', {
            body: {
            }
          });
        } catch (emailError) {;
        title: "Profile Created Successfully",,
  description: "Your service provider profile has been published and is now visible in the directory."}),;

      // Redirect to service provider dashboard or profile page;
      setTimeout(() => {;
        window && window.location.href = "/service-dashboard";
      }, 1500);

    } catch (error: any) {;
      console && console.error("Error creating profile:", error);
      toast({;
        title: "Error Creating Profile",,
  description: error && error.message || "There was an error creating your profile. Please try again.",;
        variant: "destructive"});
    } finally {;
      setIsSubmitting(false);
    }
  }

  return (              {/* Basic Information */}
              <div className="space-y-4">;
                <h3 className="text-lg font-medium text-white">Basic Information</h3>;
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
                  <div className="col-span-1">;
                    <FormField
                      control={form && form.control}
                      name="name"                    <FormField
                      control={form && form.control}
                      name="name"
                      render={({ field }) => (;
                        <FormItem>;
                          <FormLabel className="text-zion-slate-light">Full Name</FormLabel>;
                          <FormControl>;
                            <div className="relative">;
                              <UserRound className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
                    />;
                  </div>;"
                  <div className="col-span-1">;
                    <FormField;
                      control={form && form.control}"
                      name="title"
                              <Input;"
                                className="pl-10 bg-zion-blue border-zion-blue-light text-white";"
                                placeholder="Your full name";
                        <FormItem>;
                          <FormLabel className="text-zion-slate-light">Location</FormLabel>;
                          <FormControl>;"
                            <div className="relative">;"
                              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
                    />;
                  </div>;"
                  <div className="col-span-1">;
                    <FormField;
                      control={form && form.control}"
                      name="website"
                              <Input;"
                                className="pl-10 bg-zion-blue border-zion-blue-light text-white";"
                                placeholder="City, State/Province, Country";
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
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-zion-slate-light">Full Name</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <UserRound className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                              <Input
                                className="pl-10 bg-zion-blue border-zion-blue-light text-white"
                                placeholder="Your full name"
                                {...field}
                              />
                            </div>
>>>>>>> origin/cursor/delete-old-data-records-6bba
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    />;
                  </div>;
                  <div className="col-span-1">;
                    <FormField;
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-zion-slate-light">Business/Service Name</FormLabel>
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
                    />;
                  </div>;
                  <div className="col-span-1">;
                    <FormField;
                      control={form.control}
                      name="location"
                      render={({ field }) => (
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
                    />;
                  </div>;
                  <div className="col-span-1">;
                    <FormField;
                      control={form.control}
                      name="website"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-zion-slate-light">Website (optional)</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                              <Input
                                className="pl-10 bg-zion-blue border-zion-blue-light text-white"
                                placeholder="https://yourwebsite.com"
                                {...field}
                              />;
                            </div>;
                          </FormControl>;


                  <div className="col-span-1">;                {/* Upload Avatar */}
                <div className="space-y-2">;
                  <FormLabel className="text-zion-slate-light">Profile Picture</FormLabel>;
                  <div className="flex items-center gap-6">;
                    <div className="relative w-24 h-24 rounded-full overflow-hidden bg-zion-blue-light border border-zion-blue-light">;
                      {uploadedAvatar ? (;
                        <AspectRatio ratio={1/1}>;
                          <img
                            src={uploadedAvatar}
                            alt="Avatar preview"
                            className="w-full h-full object-cover"
                          />;
                        </AspectRatio>;
                      ) : (;                        <div className="flex items-center justify-center h-full">;
                          <UserRound className="h-10 w-10 text-zion-slate opacity-50" />;
                        </div>;
                      )}


                    <label className="flex items-center justify-center px-4 py-2 rounded-md bg-zion-purple hover:bg-zion-purple-dark text-white cursor-pointer transition-colors">;
                      <Upload className="mr-2 h-4 w-4" />;
                      <span>Upload Photo</span>;                    For best results, use an image at least 400x400 pixels in JPG, PNG, or GIF format.;
                  </p>;
                </div>;
              </div>;
              {/* Bio Section */}
              <div className="space-y-4">;
                <h3 className="text-lg font-medium text-white">Service Description</h3>;
                <FormField;
                  control={form.control}
                  name="bio";
                  render={({ field }) => (;
                    <FormItem>;
                      <FormLabel className="text-zion-slate-light">About Your Services</FormLabel>;
                      <FormControl>;
                        <Textarea;
                          className="h-32 min-h-[128px] bg-zion-blue border-zion-blue-light text-white";
=======

              {/* Bio Section */}
              <div className="space-y-4">;

                <h3 className="text-lg font-medium text-white">Service Description</h3>;
                <FormField;
                  control={form.control}"
                  name="bio";
                  render={({ field }) => (;
                    <FormItem>;"
                      <FormLabel className="text-zion-slate-light">About Your Services</FormLabel>;
                      <FormControl>;
                        <Textarea;"
                          className="h-32 min-h-[128px] bg-zion-blue border-zion-blue-light text-white";"
                          placeholder="Describe your services, expertise, and what sets you apart from others...";
                          {...field}

                {/* AI Enhancement Option */}
                <FormField;
                  control={form && form.control}"
                  name="enhancedProfile"
                  render={({ field }) => (;"
                    <FormItem className="flex flex-row items-center justify-between p-3 border border-zion-blue-light bg-zion-blue/30 rounded-md">;"
                      <div className="space-y-0 && 0.5">;

"
                        <FormLabel className="text-white flex items-center">;"
                          <Sparkles className="w-4 h-4 mr-2 text-zion-purple" />;
                          AI Profile Enhancement;
                        </FormLabel>;"
                        <FormDescription className="text-zion-slate-light">;
"
              <Separator className="bg - zion - blue - light / 50" />;
              {/* Bio Section */}"
              <div className="space - y-4">;"
                <h3 className="text - lg font - medium text - white">Service Description</h3>;
                <FormField;
                  control={form.control}"
                  name="bio";
                  render={({ field }) => (

                    <FormItem>;
                      <FormLabel className="text - zion - slate - light">About Your Services</FormLabel>;
                      <FormControl>;
                        <Textarea;
                          className="h - 32 min - h-[128px] bg - zion - blue border - zion - blue - light text - white";
>>>>>>> origin/cursor/delete-old-data-records-6bba
                          placeholder="Describe your services, expertise, and what sets you apart from others...";
                          {...field}
                        />;
                      </FormControl>;
<<<<<<< HEAD
                      <FormMessage className="text-red-400" />;
                      <FormDescription className="text-zion-slate">;
                        {field && field.value?.length || 0}/1000 characters;                      </FormDescription>;
                    </FormItem>;
                  )}
                />;
                    <Button
                      type="button"
                      variant="outline"
                      className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
                      onClick={generateEnhancedProfile}                              </Badge>;
                            ))}
                          </div>;
                        </div>;
                      )}
                    </div>;
                  </div>;
                )}


              <Separator className="bg-zion-blue-light/50" />;
                        >;
                          <X className="h-3 w-3" />;"
                        </button>;
                      </Badge>;
                    ))}
                          <X className="h-3 w-3" />;
                        </button>;
                      </Badge>;
                    ))}
                    {serviceTags && serviceTags.length === 0 && (;
                      <p className="text-zion-slate text-sm italic">No services added yet</p>;
                    )}
                  </div>;
                </div>;

                <div className="space-y-4">;
                  <h3 className="text-lg font-medium text-white">Pricing & Availability</h3>;
                  <FormField
                    control={form && form.control}
                    name="hourlyRate"                              <input
                                type="radio"
                                id="limited"
                                value="limited"

                                checked={field && field.value === "limited"}
                                onChange={() => field && field.onChange("limited")}                                className="text-zion-purple focus:ring-zion-purple";
                              />;
                              <label htmlFor="limited" className="text-white flex items-center gap-2">;
                              <input

                                <div className="h-2 w-2 rounded-full bg-yellow-500"></div>;
                                Limited Availability;
                              </label>;
                            </div>;

                            <div className="flex items-center space-x-2">;                              <input;
                                type="radio";
                                id="unavailable";
                                value="unavailable";
                                checked={field.value === "unavailable"}
                                on_change={() => field.on_change ("unavailable")}
                                className="text - zion - purple focus:ring - zion-purple";
                              />;
                              <label html_for="unavailable" className="text - white flex items - center gap-2">;
                                <div className="h - 2 w - 2 rounded - full bg - red-500"></div>;
                                Currently Unavailable;
                              </label>;
                            </div>;
                          </div>;
                        </FormControl>;
