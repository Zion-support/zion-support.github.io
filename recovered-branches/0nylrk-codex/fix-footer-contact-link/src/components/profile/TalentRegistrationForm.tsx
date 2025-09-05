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
import { X, Sparkles, Upload, Clock, Check, Briefcase, MapPin, UserRound } from "lucide-react",
import { toast } from "@/components/ui/use-toast",
import { supabase } from "@/integrations/supabase/client",
import { AspectRatio } from "@/components/ui/aspect-ratio",
import { useAuth } from "@/hooks/useAuth",
=======
  FormMessage} from &quot;@/components/ui/form&quot;;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { X, Sparkles, Upload, Clock, Check, Briefcase, MapPin, UserRound } from &quot;lucide-react&quot;;
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
const talentProfileSchema = z.object({
  name: z.string().min(2, &quot;Name must be at least 2 characters long&quot;),
  title: z.string().min(5, &quot;Professional title is required&quot;),
  bio: z.string().min(50, &quot;Bio must be at least 50 characters long&quot;).max(1000, &quot;Bio cannot exceed 1000 characters&quot;),
  location: z.string().min(2, &quot;Location is required&quot;),
  skills: z.string().min(2, &quot;Enter at least one skill&quot;),
  hourlyRate: z.string().refine((val) => !isNaN(Number(val)), {
<<<<<<< HEAD
=======
const _talentProfileSchema = z.object({_name: z.string().min(2, _"Name must be at least 2 characters long"), _title: z.string().min(5, _"Professional title is required"), _bio: z.string().min(50, _"Bio must be at least 50 characters long").max(1000, _"Bio cannot exceed 1000 characters"), _location: z.string().min(2, _"Location is required"), _skills: z.string().min(2, _"Enter at least one skill"), _hourlyRate: z.string().refine(_(val) => !isNaN(Number(val)), _{
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    message: "Hourly rate must be a number"}),
  availability: z.enum(["available", "limited", "unavailable"]),
  enhancedProfile: z.boolean().default(true)}),
=======
    message: &quot;Hourly rate must be a number&quot;}),
  availability: z.enum([&quot;available&quot;, &quot;limited&quot;, &quot;unavailable&quot;]),
  enhancedProfile: z.boolean().default(true)});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

type TalentFormValues = z.infer<typeof talentProfileSchema>,

type CategoryType = 'programming' | 'devops' | 'platforms' | 'softSkills' | 'other',

<<<<<<< HEAD
interface CategorizedSkills {
  programming: string[],
  devops: string[],
  platforms: string[],
  softSkills: string[],
  other: string[]
}

interface EnhancedProfile {
  summary: string,
  categorizedSkills: CategorizedSkills
}

export function TalentRegistrationForm() {
  // Remove the useToast() hook since we're importing the toast function directly
  const { user } = useAuth(),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [skillTags, setSkillTags] = useState<string[]>([]),
  const [isGenerating, setIsGenerating] = useState(false),
  const [generatedContent, setGeneratedContent] = useState<EnhancedProfile | null>(null),
  const [uploadedAvatar, setUploadedAvatar] = useState<string | null>(null),
  
  // Initialize form with default values
  const form = useForm<TalentFormValues>({
    resolver: zodResolver(talentProfileSchema),
    defaultValues: {
<<<<<<< HEAD
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
=======
      name: user?.displayName || "&quot;,
      title: "&quot;,
      bio: "&quot;,
      location: "&quot;,
      skills: "&quot;,
      hourlyRate: "&quot;,
      availability: &quot;available&quot;,
      enhancedProfile: true}});

  // Handle adding skill tags
  const handleAddSkill = () => {
    const skillInput = form.getValues(&quot;skills&quot;);
    if (skillInput && !skillTags.includes(skillInput)) {
      setSkillTags([...skillTags, skillInput]);
      form.setValue(&quot;skills&quot;, "&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },

  // Handle removing skill tags
  const handleRemoveSkill = (skill: string) => {
    setSkillTags(skillTags.filter((s) => s !== skill))
  },

  // Handle key press in skills input (add on enter)
  const handleSkillKeyPress = (e: React.KeyboardEvent) => {
<<<<<<< HEAD
    if (e.key === "Enter") {
      e.preventDefault(),
      handleAddSkill()
=======
    if (e.key === &quot;Enter&quot;) {
      e.preventDefault();
      handleAddSkill();
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
  const _form = useForm<TalentFormValues>({_resolver: zodResolver(talentProfileSchema), _defaultValues: {
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
      const { data, _error} = await supabase.functions.invoke('talent-profile-enhancer', {_body: {
          talentData: {
            name: formData.name, _title: formData.title, _bio: formData.bio, _skills: skillTags, _location: formData.location}
        }
      }),

<<<<<<< HEAD
      if (error) {
        throw new Error(error.message)
      }
=======
      if (error) {_throw new Error(error.message);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

      setGeneratedContent(data as EnhancedProfile),
      
<<<<<<< HEAD
      toast({
<<<<<<< HEAD
        title: "Enhanced Profile Generated",
        description: "AI has created a professional bio and suggested additional skills for your profile."})
      
    } catch (error: any) {
      console.error("Error generating enhanced profile:", error),
      toast({
        title: "Generation failed",
        description: error.message || "There was an error generating your enhanced profile. Please try again.",
        variant: "destructive"})
=======
        title: &quot;Enhanced Profile Generated&quot;,
        description: &quot;AI has created a professional bio and suggested additional skills for your profile.&quot;});
      
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
      
      // Extract all skills from categorized skills and properly type cast them
      const allCategorizedSkills = generatedContent.categorizedSkills,
      const newSkills: string[] = [],
=======
      toast({_title: "Enhanced Profile Generated", _description: "AI has created a professional bio and suggested additional skills for your profile."});
      
    } catch (error: unknown) {_toast({
        title: "Generation failed", _description: error.message || "There was an error generating your enhanced profile. Please try again.", _variant: "destructive"});
    } finally {_setIsGenerating(false);}
  };

  // Apply generated content to form
  const _applyGeneratedContent = () => {_if (generatedContent) {
      form.setValue("bio", _generatedContent.summary);
      
      // Extract all skills from categorized skills and properly type cast them
      const _allCategorizedSkills = generatedContent.categorizedSkills;
      const newSkills: string[] = [];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      // Safely extract and flatten skills from each category
      Object.values(allCategorizedSkills).forEach(categorySkills => {
        if (Array.isArray(categorySkills)) {
          categorySkills.forEach(skill => {
            if (typeof skill === 'string' && skill && !skillTags.includes(skill)) {
<<<<<<< HEAD
              newSkills.push(skill)
            }
          })
=======
              newSkills.push(skill);}
          });
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        }
      }),
        
<<<<<<< HEAD
      if (newSkills.length > 0) {
        setSkillTags([...skillTags, ...newSkills])
      }
=======
      if (newSkills.length > 0) {_setSkillTags([...skillTags, _...newSkills]);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },

  // Get category color
<<<<<<< HEAD
  const getCategoryColor = (category: CategoryType) => {
    switch (category) {
      case 'programming': return 'bg-blue-500/20 hover:bg-blue-500/30 text-blue-500',
      case 'devops': return 'bg-green-500/20 hover:bg-green-500/30 text-green-500',
      case 'platforms': return 'bg-amber-500/20 hover:bg-amber-500/30 text-amber-500',
      case 'softSkills': return 'bg-purple-500/20 hover:bg-purple-500/30 text-purple-500',
      case 'other': return 'bg-gray-500/20 hover:bg-gray-500/30 text-gray-500',
      default: return 'bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple'
    }
  },
=======
  const _getCategoryColor = (_category: CategoryType) => {_switch (category) {
      case 'programming': return 'bg-blue-500/20 hover:bg-blue-500/30 text-blue-500';
      case 'devops': return 'bg-green-500/20 hover:bg-green-500/30 text-green-500';
      case 'platforms': return 'bg-amber-500/20 hover:bg-amber-500/30 text-amber-500';
      case 'softSkills': return 'bg-purple-500/20 hover:bg-purple-500/30 text-purple-500';
      case 'other': return 'bg-gray-500/20 hover:bg-gray-500/30 text-gray-500';
      default: return 'bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple';}
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  // Send notification email
  const _sendEnhancementNotification = async (_userId: string, _email: string) => {_try {
      await supabase.functions.invoke('send-email', _{
        body: {
<<<<<<< HEAD
          to: email,
          subject: &quot;Your Zion Talent Profile Has Been Enhanced&quot;,
          html: `
<<<<<<< HEAD
          <div style="font-family: Arial, sans-serif, max-width: 600px, margin: 0 auto,">
            <h2 style="color: #6D28D9,">Profile Enhancement Complete</h2>
=======
          to: email, _subject: "Your Zion Talent Profile Has Been Enhanced", _html: `
          <div style="font-family: Arial, _sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #6D28D9;">Profile Enhancement Complete</h2>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <p>Your profile has been enhanced with AI. You're now more discoverable to recruiters and companies!</p>
            <p>We've added a professional summary and categorized your skills to help you stand out.</p>
            <p>You can review and edit these enhancements in your profile dashboard.</p>
            <div style="margin-top: 30px, padding-top: 20px, border-top: 1px solid #eee,">
              <p style="color: #666, font-size: 12px,">© ${new Date().getFullYear()} Zion Marketplace</p>
=======
          <div style=&quot;font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;&quot;>
            <h2 style=&quot;color: #6D28D9;&quot;>Profile Enhancement Complete</h2>
            <p>Your profile has been enhanced with AI. You're now more discoverable to recruiters and companies!</p>
            <p>We've added a professional summary and categorized your skills to help you stand out.</p>
            <p>You can review and edit these enhancements in your profile dashboard.</p>
            <div style=&quot;margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;&quot;>
              <p style=&quot;color: #666; font-size: 12px;&quot;>© ${new Date().getFullYear()} Zion Marketplace</p>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            </div>
          </div>
          `
        }
<<<<<<< HEAD
      })
    } catch (error) {
<<<<<<< HEAD
      console.error("Failed to send notification email:", error)
=======
      console.error(&quot;Failed to send notification email:&quot;, error);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },
=======
      });
    } catch (error) {}
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  // Handle form submission
  const _onSubmit = async (_values: TalentFormValues) => {_if (skillTags.length === 0) {
      toast({
<<<<<<< HEAD
<<<<<<< HEAD
        title: "Skills required",
        description: "Please add at least one skill to your profile.",
        variant: "destructive"}),
      return
=======
        title: &quot;Skills required&quot;,
        description: &quot;Please add at least one skill to your profile.&quot;,
        variant: &quot;destructive&quot;});
=======
        title: "Skills required", _description: "Please add at least one skill to your profile.", _variant: "destructive"});
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
      }
      
      // Enhance profile if not already done
      let finalSummary = "",
      let finalSkills = skillTags,
=======
        throw new Error(&quot;User not authenticated&quot;);
      }
      
      // Enhance profile if not already done
      let finalSummary = "&quot;;
      let finalSkills = skillTags;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
        throw new Error("User not authenticated");}
      
      // Enhance profile if not already done
      let _finalSummary = "";
      let _finalSkills = skillTags;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      if (values.enhancedProfile && !generatedContent) {_try {
          const { data: aiData} = await supabase.functions.invoke('talent-profile-enhancer', {_body: {
              talentData: {
                name: values.name, _title: values.title, _bio: values.bio, _skills: skillTags, _location: values.location}
            }
          }),
          
<<<<<<< HEAD
          if (aiData) {
            finalSummary = (aiData as EnhancedProfile).summary,
            // Safely merge AI suggested skills with user-provided skills
            const categorizedSkills = (aiData as EnhancedProfile).categorizedSkills,
            const aiSkills: string[] = [],
=======
          if (aiData) {_finalSummary = (aiData as EnhancedProfile).summary;
            // Safely merge AI suggested skills with user-provided skills
            const _categorizedSkills = (aiData as EnhancedProfile).categorizedSkills;
            const aiSkills: string[] = [];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            
            // Extract skills from each category and ensure they're strings
            Object.values(categorizedSkills).forEach(categorySkills => {
              if (Array.isArray(categorySkills)) {
                categorySkills.forEach(skill => {
                  if (typeof skill === 'string' && skill) {
<<<<<<< HEAD
                    aiSkills.push(skill)
                  }
                })
=======
                    aiSkills.push(skill);}
                });
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              }
            }),
            
            // Create a unique set of skills
            finalSkills = [...new Set([...skillTags, ...aiSkills])]
          }
<<<<<<< HEAD
        } catch (error) {
<<<<<<< HEAD
          console.error("Error enhancing profile:", error),
          // Continue with submission even if enhancement fails
          finalSummary = ""
=======
          console.error(&quot;Error enhancing profile:&quot;, error);
          // Continue with submission even if enhancement fails
          finalSummary = "&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        }
      } else if (generatedContent) {
        finalSummary = generatedContent.summary
      }

      // Get user email for notification
      const { data: userData } = await supabase.auth.getUser(),
      const userEmail = userData.user?.email,

      // Create the talent profile
      // In a real implementation, this would save to Supabase
      setTimeout(() => {
        toast({
<<<<<<< HEAD
          title: "Profile Created Successfully",
          description: "Your talent profile has been published and is now visible in the directory."}),
=======
          title: &quot;Profile Created Successfully&quot;,
          description: &quot;Your talent profile has been published and is now visible in the directory.&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        
        // Send notification email if we have user email
        if (userEmail && values.enhancedProfile) {
          sendEnhancementNotification(user.id, userEmail)
        }
=======
        } catch (error) {_// Continue with submission even if enhancement fails
          finalSummary = "";}
      } else if (generatedContent) {_finalSummary = generatedContent.summary;}

      // Get user email for notification
      const {_data: userData} = await supabase.auth.getUser();
      const _userEmail = userData.user?.email;

      // Create the talent profile
      // In a real implementation, this would save to Supabase
      setTimeout__(() => {_toast({
          title: "Profile Created Successfully", _description: "Your talent profile has been published and is now visible in the directory."});
        
        // Send notification email if we have user email
        if (userEmail && values.enhancedProfile) {_sendEnhancementNotification(user.id, _userEmail);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        
        setIsSubmitting(false)
      }, 1500),

      // Here would be the actual code to save the profile to Supabase
      /*
      const {_error} = await supabase
        .from('talent_profiles')
        .insert({_user_id: user.id, _name: values.name, _title: values.title, _bio: values.bio, _summary: finalSummary, _location: values.location, _skills: finalSkills.map(name => ({ name, _level: 4})), // Default skill level
          hourly_rate: Number(values.hourlyRate),
          availability_status: values.availability,
          // Other fields would be handled here
        }),

      if (error) throw error,
      */

<<<<<<< HEAD
    } catch (error: any) {
<<<<<<< HEAD
      console.error("Error creating profile:", error),
      toast({
        title: "Error Creating Profile",
        description: error.message || "There was an error creating your profile. Please try again.",
        variant: "destructive"}),
      setIsSubmitting(false)
=======
      console.error(&quot;Error creating profile:&quot;, error);
      toast({
        title: &quot;Error Creating Profile&quot;,
        description: error.message || &quot;There was an error creating your profile. Please try again.&quot;,
        variant: &quot;destructive"});
=======
    } catch (error: unknown) {_toast({
        title: "Error Creating Profile", _description: error.message || "There was an error creating your profile. Please try again.", _variant: "destructive"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      setIsSubmitting(false);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },

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
                  <div className="col-span-1&quot;>
                    <FormField
<<<<<<< HEAD
                      control={form.control}
                      name=&quot;name"
                      render={({ field }) => (
=======
                      control={_form.control}
                      name="name"
                      render={_(_{ field}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        <FormItem>
                          <FormLabel className="text-zion-slate-light">Full Name</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <UserRound className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                              <Input
<<<<<<< HEAD
                                className="pl-10 bg-zion-blue border-zion-blue-light text-white&quot;
                                placeholder=&quot;Your full name"
                                {...field}
=======
                                className="pl-10 bg-zion-blue border-zion-blue-light text-white"
                                placeholder="Your full name"
                                {_...field}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                              />
                            </div>
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="col-span-1&quot;>
                    <FormField
<<<<<<< HEAD
                      control={form.control}
                      name=&quot;title"
                      render={({ field }) => (
=======
                      control={_form.control}
                      name="title"
                      render={_(_{ field}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        <FormItem>
                          <FormLabel className="text-zion-slate-light">Professional Title</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                              <Input
<<<<<<< HEAD
                                className="pl-10 bg-zion-blue border-zion-blue-light text-white&quot;
                                placeholder=&quot;e.g., Senior Software Developer"
                                {...field}
=======
                                className="pl-10 bg-zion-blue border-zion-blue-light text-white"
                                placeholder="e.g., Senior Software Developer"
                                {_...field}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                              />
                            </div>
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="col-span-1&quot;>
                    <FormField
<<<<<<< HEAD
                      control={form.control}
                      name=&quot;location"
                      render={({ field }) => (
=======
                      control={_form.control}
                      name="location"
                      render={_(_{ field}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        <FormItem>
                          <FormLabel className="text-zion-slate-light">Location</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                              <Input
<<<<<<< HEAD
                                className="pl-10 bg-zion-blue border-zion-blue-light text-white&quot;
                                placeholder=&quot;City, State/Province, Country"
                                {...field}
=======
                                className="pl-10 bg-zion-blue border-zion-blue-light text-white"
                                placeholder="City, State/Province, Country"
                                {_...field}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                              />
                            </div>
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="col-span-1&quot;>
                    <FormField
<<<<<<< HEAD
                      control={form.control}
                      name=&quot;hourlyRate"
                      render={({ field }) => (
=======
                      control={_form.control}
                      name="hourlyRate"
                      render={_(_{ field}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        <FormItem>
                          <FormLabel className="text-zion-slate-light">Hourly Rate (USD)</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate">$</span>
                              <Input
<<<<<<< HEAD
                                className="pl-8 bg-zion-blue border-zion-blue-light text-white&quot;
                                placeholder=&quot;e.g., 85"
                                {...field}
=======
                                className="pl-8 bg-zion-blue border-zion-blue-light text-white"
                                placeholder="e.g., 85"
                                {_...field}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
                          />
                        </AspectRatio>
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <UserRound className="h-10 w-10 text-zion-slate opacity-50" />
                        </div>
                      )}
                    </div>

                    <label className="flex items-center justify-center px-4 py-2 rounded-md bg-zion-purple hover:bg-zion-purple-dark text-white cursor-pointer transition-colors">
                      <Upload className="mr-2 h-4 w-4&quot; />
                      <span>Upload Photo</span>
                      <input
                        type=&quot;file&quot;
                        accept=&quot;image/*"
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
                <h3 className="text-lg font-medium text-white&quot;>Professional Bio</h3>
                <FormField
<<<<<<< HEAD
                  control={form.control}
                  name=&quot;bio"
                  render={({ field }) => (
=======
                  control={_form.control}
                  name="bio"
                  render={_(_{ field}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    <FormItem>
                      <FormLabel className="text-zion-slate-light">About Yourself</FormLabel>
                      <FormControl>
                        <Textarea
<<<<<<< HEAD
                          className="h-32 min-h-[128px] bg-zion-blue border-zion-blue-light text-white&quot;
                          placeholder=&quot;Describe your professional background, expertise, and the value you bring to clients..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                      <FormDescription className="text-zion-slate&quot;>
                        {field.value?.length || 0}/1000 characters
=======
                          className="h-32 min-h-[128px] bg-zion-blue border-zion-blue-light text-white"
                          placeholder="Describe your professional background, expertise, and the value you bring to clients..."
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
                  name=&quot;enhancedProfile"
                  render={({ field }) => (
=======
                  control={_form.control}
                  name="enhancedProfile"
                  render={_(_{ field}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
<<<<<<< HEAD
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="data-[state=checked]:bg-zion-purple&quot;
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
                {form.watch(&quot;enhancedProfile") && (
                  <div className="flex justify-end&quot;>
=======
                {_form.watch("enhancedProfile") && (
                  <div className="flex justify-end">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    <Button
                      type=&quot;button&quot;
                      variant=&quot;outline"
                      className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
                      onClick={generateEnhancedProfile}
                      disabled={_isGenerating}
                    >
<<<<<<< HEAD
                      <Sparkles className="mr-2 h-4 w-4&quot; />
                      {isGenerating ? &quot;Generating...&quot; : &quot;Generate Enhanced Profile"}
=======
                      <Sparkles className="mr-2 h-4 w-4" />
                      {_isGenerating ? "Generating..." : "Generate Enhanced Profile"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </Button>
                  </div>
                )}

                {_/* Generated Content Display */}
                {_generatedContent && (
                  <div className="bg-zion-blue-light/20 border border-zion-blue-light rounded-md p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-white font-medium flex items-center">
                        <Sparkles className="w-4 h-4 mr-2 text-zion-purple&quot; />
                        AI-Generated Content
                      </h4>
                      <Button
                        type=&quot;button&quot;
                        size=&quot;sm"
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
                                  {_skills.map(skill => (
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
                  <h3 className="text-lg font-medium text-white&quot;>Skills & Expertise</h3>
                  <FormField
<<<<<<< HEAD
                    control={form.control}
                    name=&quot;skills"
                    render={({ field }) => (
=======
                    control={_form.control}
                    name="skills"
                    render={_(_{ field}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      <FormItem>
                        <FormLabel className="text-zion-slate-light">Skills</FormLabel>
                        <div className="flex gap-2">
                          <FormControl>
                            <Input
<<<<<<< HEAD
                              className="flex-1 bg-zion-blue border-zion-blue-light text-white&quot;
                              placeholder=&quot;Add a skill...&quot;
                              {...field}
                              onKeyDown={handleSkillKeyPress}
=======
                              className="flex-1 bg-zion-blue border-zion-blue-light text-white"
                              placeholder="Add a skill..."
                              {_...field}
                              onKeyDown={_handleSkillKeyPress}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                            />
                          </FormControl>
                          <Button
                            type=&quot;button&quot;
                            variant=&quot;outline"
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
                        className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none pl-2 pr-1 py-1.5 flex items-center gap-1&quot;
                      >
                        {_skill}
                        <button
<<<<<<< HEAD
                          type=&quot;button"
                          onClick={() => handleRemoveSkill(skill)}
=======
                          type="button"
                          onClick={_() => handleRemoveSkill(skill)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
                  <h3 className="text-lg font-medium text-white&quot;>Availability</h3>
                  <FormField
<<<<<<< HEAD
                    control={form.control}
                    name=&quot;availability"
                    render={({ field }) => (
                      <FormItem className="space-y-4">
=======
                    control={_form.control}
                    name="availability"
                    render={_(_{ field}) => (_<FormItem className="space-y-4">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        <FormLabel className="text-zion-slate-light">Current Status</FormLabel>
                        <FormControl>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2&quot;>
                              <input
<<<<<<< HEAD
                                type=&quot;radio&quot;
                                id=&quot;available&quot;
                                value=&quot;available&quot;
                                checked={field.value === &quot;available&quot;}
                                onChange={() => field.onChange(&quot;available")}
                                className="text-zion-purple focus:ring-zion-purple&quot;
=======
                                type="radio"
                                id="available"
                                value="available"
                                checked={_field.value === "available"}
                                onChange={_() => field.onChange("available")}
                                className="text-zion-purple focus:ring-zion-purple"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                              />
                              <label htmlFor=&quot;available" className="text-white flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                                Available Now
                              </label>
                            </div>

                            <div className="flex items-center space-x-2&quot;>
                              <input
<<<<<<< HEAD
                                type=&quot;radio&quot;
                                id=&quot;limited&quot;
                                value=&quot;limited&quot;
                                checked={field.value === &quot;limited&quot;}
                                onChange={() => field.onChange(&quot;limited")}
                                className="text-zion-purple focus:ring-zion-purple&quot;
=======
                                type="radio"
                                id="limited"
                                value="limited"
                                checked={_field.value === "limited"}
                                onChange={_() => field.onChange("limited")}
                                className="text-zion-purple focus:ring-zion-purple"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                              />
                              <label htmlFor=&quot;limited" className="text-white flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                                Limited Availability
                              </label>
                            </div>

                            <div className="flex items-center space-x-2&quot;>
                              <input
<<<<<<< HEAD
                                type=&quot;radio&quot;
                                id=&quot;unavailable&quot;
                                value=&quot;unavailable&quot;
                                checked={field.value === &quot;unavailable&quot;}
                                onChange={() => field.onChange(&quot;unavailable")}
                                className="text-zion-purple focus:ring-zion-purple&quot;
=======
                                type="radio"
                                id="unavailable"
                                value="unavailable"
                                checked={_field.value === "unavailable"}
                                onChange={_() => field.onChange("unavailable")}
                                className="text-zion-purple focus:ring-zion-purple"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                              />
                              <label htmlFor=&quot;unavailable" className="text-white flex items-center gap-2">
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

                  <div className="pt-2">
                    <FormLabel className="text-zion-slate-light&quot;>Availability Message</FormLabel>
                    <Textarea
                      placeholder=&quot;Describe your availability, working hours, or when you'll be available next..."
                      className="mt-1.5 bg-zion-blue border-zion-blue-light text-white"
                    />
                    <FormDescription className="text-zion-slate mt-1.5 text-sm">
                      Let clients know about your working hours, time zone, or availability for calls.
                    </FormDescription>
                  </div>
                </div>
              </div>
            </CardContent>

            <CardFooter className="border-t border-zion-blue-light pt-6">
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:justify-between&quot;>
                <Button
                  type=&quot;button&quot;
                  variant=&quot;outline"
                  className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white&quot;
                >
                  Save as Draft
                </Button>
                <Button 
<<<<<<< HEAD
                  type=&quot;submit"
                  className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white&quot;
                  disabled={isSubmitting}
                >
                  {isSubmitting ? &quot;Creating Profile...&quot; : &quot;Create Profile"}
=======
                  type="submit"
                  className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                  disabled={_isSubmitting}
                >
                  {_isSubmitting ? "Creating Profile..." : "Create Profile"}
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
