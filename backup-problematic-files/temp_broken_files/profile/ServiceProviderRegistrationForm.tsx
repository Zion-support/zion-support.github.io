
=======
import React, { useState } from "react",;
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
  FormLabel,;
  FormMessage} from "@/components/ui/form",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { X, Sparkles, Upload, Clock, Check, Briefcase, MapPin, UserRound, Globe } from "lucide-react",;
import { toast } from "@/components/ui/use-toast",;
import { supabase } from "@/integrations/supabase/client",;
import { AspectRatio } from "@/components/ui/aspect-ratio",;
import { useAuth } from "@/hooks/useAuth",;
;
// Define form schema;
const serviceProfileSchema = z.object({;
  name:z.string().min(2, "Name must be at least 2 characters long"),;
  title:z.string().min(5, "Business name/title is required"),;
  bio:z.string().min(50, "Bio must be at least 50 characters long").max(1000, "Bio cannot exceed 1000 characters"),;
  location:z.string().min(2, "Location is required"),;
  services:z.string().min(2, "Enter at least one service"),;
  hourlyRate:z.string().refine((val) => !isNaN(Number(val)), {;
    message:"Rate must be a number"}),;
  availability:z.enum(["available", "limited", "unavailable"]),;
  enhancedProfile:z.boolean().default(true),;
  website:z.string().url("Please enter a valid URL").or(z.string().length(0)).optional()}),;
;
type ServiceFormValues = z.infer<typeof serviceProfileSchema>,;
;
export function ServiceProviderRegistrationForm() {;
  const { user } = useAuth(),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [serviceTags, setServiceTags] = useState<string[]>([]),;
  const [isGenerating, setIsGenerating] = useState(false),;
  const [generatedContent, setGeneratedContent] = useState<{ summary:string, services:string[] } | null>(null),;
  const [uploadedAvatar, setUploadedAvatar] = useState<string | null>(null),;
  ;
  // Initialize form with default values;
  const form = useForm<ServiceFormValues>({;
    resolver:zodResolver(serviceProfileSchema),;
    defaultValues:{;
      name:user?.displayName || "",;
      title:"",;
      bio:"",;
      location:"",;
      services:"",;
      hourlyRate:"",;
      availability:"available",;
      enhancedProfile:true,;
      website:""}}),;
;
  // Handle adding service tags;
  const handleAddService = () => {;
    const serviceInput = form.getValues("services"),;
    if (serviceInput && !serviceTags.includes(serviceInput)) {;
      setServiceTags([...serviceTags, serviceInput]),;
      form.setValue("services", ""),;
    }
  },;
;
  // Handle removing service tags;
  const handleRemoveService = (service:string) => {;
    setServiceTags(serviceTags.filter((s) => s !== service));
  },;
;
  // Handle key press in services input (add on enter);
  const handleServiceKeyPress = (e:React.KeyboardEvent) => {;
    if (e.key === "Enter") {;
      e.preventDefault(),;
      handleAddService();
    }
  },;
;
  // Handle avatar upload;
  const handleAvatarUpload = (e:React.ChangeEvent<HTMLInputElement>) => {;
    const file = e.target.files?.[0],;
    if (file) {;
      const reader = new FileReader(),;
      reader.onloadend = () => {;
        setUploadedAvatar(reader.result as string);
      },;
      reader.readAsDataURL(file),;
    }
  },;
;
  // Generate enhanced profile with AI;
  const generateEnhancedProfile = async () => {;
    const formData = form.getValues(),;
    if (!formData.bio || formData.bio.length < 20) {;
      toast({;
        title:"More information needed",;
        description:"Please provide at least a detailed bio before generating enhanced content."}),;
      return,;
    }
;
    try {;
      setIsGenerating(true),;
;
      // Call the Supabase Edge Function;
      const { data, error } = await supabase.functions.invoke('service-profile-enhancer', {;
        body:{;
          providerData:{;
            name:formData.name,;
            title:formData.title,;
            bio:formData.bio,;
            services:serviceTags,;
            location:formData.location;
          }
        }
      }),;
;
      if (error) {;
        throw new Error(error.message),;
      }
;
      setGeneratedContent(data as { summary:string, services:string[] }),;
      ;
      toast({;
        title:"Enhanced Profile Generated",;
        description:"AI has created a professional bio and suggested additional services for your profile."}),;
      ;
    } catch (error:any) {;
      console.error("Error generating enhanced profile:", error),;
      toast({;
        title:"Generation failed",;
        description:error.message || "There was an error generating your enhanced profile. Please try again.",;
        variant:"destructive"}),;
    } finally {;
      setIsGenerating(false),;
    }
  },;
;
  // Apply generated content to form;
  const applyGeneratedContent = () => {;
    if (generatedContent) {;
      form.setValue("bio", generatedContent.summary),;
      ;
      if (generatedContent.services && generatedContent.services.length > 0) {;
        const newServices = generatedContent.services.filter(;
          service => typeof service === 'string' && service && !serviceTags.includes(service);
        ),;
        ;
        if (newServices.length > 0) {;
          setServiceTags([...serviceTags, ...newServices]),;
        }
      }
    }
  },;
;
  // Handle form submission;
  const onSubmit = async (values:ServiceFormValues) => {;
    if (serviceTags.length === 0) {;
      toast({;
        title:"Services required",;
        description:"Please add at least one service to your profile.",;
        variant:"destructive"}),;
      return,;
    }
;
    setIsSubmitting(true),;
;
    try {;
      // For actual implementation with Supabase;
      if (!user?.id) {;
        throw new Error("User not authenticated"),;
      }
      ;
      // Enhance profile if not already done;
      let finalSummary = values.bio,;
      let finalServices = serviceTags,;
      ;
      if (values.enhancedProfile && !generatedContent) {;
        try {;
          const { data:aiData } = await supabase.functions.invoke('service-profile-enhancer', {;
            body:{;
              providerData:{;
                name:values.name,;
                title:values.title,;
                bio:values.bio,;
                services:serviceTags,;
                location:values.location;
              }
            }
          }),;
          ;
          if (aiData) {;
            finalSummary = (aiData as any).summary || values.bio,;
            // Merge AI suggested services with user-provided services;
            const aiServices = (aiData as any).services || [],;
            finalServices = [...new Set([...serviceTags, ...aiServices])],;
          }
        } catch (error) {;
          console.error("Error enhancing profile:", error),;
          // Continue with submission even if enhancement fails;
        }
      } else if (generatedContent) {;
        finalSummary = generatedContent.summary,;
        finalServices = [...new Set([...serviceTags, ...generatedContent.services])],;
      }
;
      // Get user email for notification;
      const { data:userData } = await supabase.auth.getUser(),;
      const userEmail = userData.user?.email,;
;
      // Create the service profile;
      const { data:profileData, error } = await supabase;
        .from('profiles');
        .update({;
          display_name:values.name,;
          bio:finalSummary,;
          user_type:"creator", // Set as service provider;
          profile_complete:true,;
          updated_at:new Date().toISOString(),;
          headline:values.title,;
          // Additional fields that might be in profiles table;
        });
        .eq('id', user.id);
        .select(),;
;
      if (error) throw error,;
;
      // Store service-specific data in service_profiles table;
      // (This assumes you have a service_profiles table in your database);
;
      /*;
      const { error:serviceError } = await supabase;
        .from('service_profiles');
        .insert({;
          user_id:user.id,;
          services:finalServices,;
          hourly_rate:Number(values.hourlyRate),;
          availability_status:values.availability,;
          location:values.location,;
          website:values.website || null}),;
;
      if (serviceError) throw serviceError,;
      */;
;
      // Send notification email if available;
      if (userEmail && values.enhancedProfile) {;
        try {;
          await supabase.functions.invoke('send-email', {;
            body:{;
              to:userEmail,;
              subject:"Your Zion Service Profile Is Ready",;
              html:`;
              <div style="font-family:Arial, sans-serif, max-width:600px, margin:0 auto,">;
                <h2 style="color:#6D28D9,">Service Profile Created!</h2>;
                <p>Your service provider profile has been successfully created and published.</p>;
                <p>We've enhanced your profile with AI to help you stand out to potential clients.</p>;
                <p>You can now start receiving service requests and connecting with clients.</p>;
                <div style="margin-top:30px, padding-top:20px, border-top:1px solid #eee,">;
                  <p style="color:#666, font-size:12px,">© ${new Date().getFullYear()} Zion Marketplace</p>;
                </div>;
              </div>;
              `;
            }
          }),;
        } catch (emailError) {;
          console.error("Failed to send notification email:", emailError),;
          // Continue with submission even if email fails;
        }
      }
      ;
      toast({;
        title:"Profile Created Successfully",;
        description:"Your service provider profile has been published and is now visible in the directory."}),;
;
      // Redirect to service provider dashboard or profile page;
      setTimeout(() => {;
        window.location.href = "/service-dashboard",;
      }, 1500),;
      ;
    } catch (error:any) {;
      console.error("Error creating profile:", error),;
      toast({;
        title:"Error Creating Profile",;
        description:error.message || "There was an error creating your profile. Please try again.",;
        variant:"destructive"}),;
    } finally {;
      setIsSubmitting(false),;
    }
  },;
;
  return (;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    <div className="max-w-4xl mx-auto p-4 md:p-6">;
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader>;
          <CardTitle className="text-2xl text-white">Create Your Service Provider Profile</CardTitle>;
          <CardDescription className="text-zion-slate">;
            Showcase your services and expertise to potential clients.;
          </CardDescription>;
        </CardHeader>;
<<<<<<< HEAD

            <CardContent className="space-y-8">;
              {/* Basic Information */}
              <div className="space-y-4">;
                <h3 className="text-lg font-medium text-white">Basic Information</h3>;
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
                  <div className="col-span-1">;

                      render={({ field }) => (;
                        <FormItem>;
                          <FormLabel className="text-zion-slate-light">Full Name</FormLabel>;
                          <FormControl>;
                            <div className="relative">;
                              <UserRound className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;

                      render={({ field }) => (;
                        <FormItem>;
                          <FormLabel className="text-zion-slate-light">Business/Service Name</FormLabel>;
                          <FormControl>;
                            <div className="relative">;
                              <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;

                      render={({ field }) => (;
                        <FormItem>;
                          <FormLabel className="text-zion-slate-light">Location</FormLabel>;
                          <FormControl>;
                            <div className="relative">;
                              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;

                      render={({ field }) => (;
                        <FormItem>;
                          <FormLabel className="text-zion-slate-light">Website (optional)</FormLabel>;
                          <FormControl>;
                            <div className="relative">;
                              <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;

                                placeholder="https://yourwebsite.com";
                                {...field}
                              />;
                            </div>;
                          </FormControl>;

                {/* Upload Avatar */}
                <div className="space-y-2">;
                  <FormLabel className="text-zion-slate-light">Profile Picture</FormLabel>;
                  <div className="flex items-center gap-6">;
                    <div className="relative w-24 h-24 rounded-full overflow-hidden bg-zion-blue-light border border-zion-blue-light">;
                      {uploadedAvatar ? (;
                        <AspectRatio ratio={1/1}>;

                        <div className="flex items-center justify-center h-full">;
                          <UserRound className="h-10 w-10 text-zion-slate opacity-50" />;
                        </div>;
                      )}
                    </div>;

                        onChange={handleAvatarUpload}
                      />;
                    </label>;
                  </div>;
                  <p className="text-sm text-zion-slate">;

                        />;
                      </FormControl>;
                      <FormMessage className="text-red-400" />;
                      <FormDescription className="text-zion-slate">;

                      </FormDescription>;
                    </FormItem>;
                  )}
                />;

                        <FormLabel className="text-white flex items-center">;
                          <Sparkles className="w-4 h-4 mr-2 text-zion-purple" />;
                          AI Profile Enhancement;
                        </FormLabel>;
                        <FormDescription className="text-zion-slate-light">;

                {/* Generated Content Display */}
                {generatedContent && (;
                  <div className="bg-zion-blue-light/20 border border-zion-blue-light rounded-md p-4">;
                    <div className="flex items-center justify-between mb-3">;
                      <h4 className="text-white font-medium flex items-center">;
                        <Sparkles className="w-4 h-4 mr-2 text-zion-purple" />;
                        AI-Generated Content;
                      </h4>;

                              </Badge>;
                            ))}
                          </div>;
                        </div>;
                      )}
                    </div>;
                  </div>;
                )}
              </div>;

              {/* Services and Availability */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
                {/* Services Section */}
                <div className="space-y-4">;
                  <h3 className="text-lg font-medium text-white">Services Offered</h3>;

                    render={({ field }) => (;
                      <FormItem>;
                        <FormLabel className="text-zion-slate-light">Services</FormLabel>;
                        <div className="flex gap-2">;
                          <FormControl>;

                              placeholder="Add a service...";
                              {...field}
                              onKeyDown={handleServiceKeyPress}
                            />;
                          </FormControl>;

                        {service}
                        <button;
                          type="button";
                          onClick={() => handleRemoveService(service)}

                        >;
                          <X className="h-3 w-3" />;
                        </button>;
                      </Badge>;
                    ))}

                      <p className="text-zion-slate text-sm italic">No services added yet</p>;
                    )}
                  </div>;
                </div>;

                    render={({ field }) => (;
                      <FormItem>;
                        <FormLabel className="text-zion-slate-light">Starting Rate (USD)</FormLabel>;
                        <FormControl>;
                          <div className="relative">;
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate">$</span>;

                    render={({ field }) => (;
                      <FormItem className="space-y-4">;
                        <FormLabel className="text-zion-slate-light">Current Status</FormLabel>;
                        <FormControl>;
                          <div className="space-y-2">;
                            <div className="flex items-center space-x-2">;

                                className="text-zion-purple focus:ring-zion-purple";
                              />;
                              <label htmlFor="available" className="text-white flex items-center gap-2">;
                                <div className="h-2 w-2 rounded-full bg-green-500"></div>;
                                Available for Work;
                              </label>;
                            </div>;

                                className="text-zion-purple focus:ring-zion-purple";
                              />;
                              <label htmlFor="limited" className="text-white flex items-center gap-2">;
                                <div className="h-2 w-2 rounded-full bg-yellow-500"></div>;
                                Limited Availability;
                              </label>;
                            </div>;

                              <input;
                                type="radio";
                                id="unavailable";
                                value="unavailable";
                                checked={field.value === "unavailable"}

                                Currently Unavailable;
                              </label>;
                            </div>;
                          </div>;
                        </FormControl>;

                  />;
                </div>;
              </div>;
            </CardContent>;

                </Button>;
              </div>;
            </CardFooter>;
          </form>;
        </Form>;
      </Card>;

}