import React, { useState } from "react",
import { useForm } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import { z } from "zod",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Switch } from "@/components/ui/switch",
import { Badge } from "@/components/ui/badge",
import { Separator } from "@/components/ui/separator",import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage} from "@/components/ui/form",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { X, Sparkles, Upload, Clock, Check, Briefcase, MapPin, UserRound } from "lucide-react",
import { toast } from "@/components/ui/use-toast",
import { supabase } from "@/integrations/supabase/client",
import { AspectRatio } from "@/components/ui/aspect-ratio",
import { useAuth } from "@/hooks/useAuth",
// Define form schema,
const talentProfileSchema = z.object({
  name: z.string().min(2, &quot;Name must be at least 2 characters long&quot;),
  title: z.string().min(5, &quot;Professional title is required&quot;),
  bio: z.string().min(50, &quot;Bio must be at least 50 characters long&quot;).max(1000, &quot;Bio cannot exceed 1000 characters&quot;),
  location: z.string().min(2, &quot;Location is required&quot;),
  skills: z.string().min(2, &quot;Enter at least one skill&quot;),
  hourlyRate: z.string().refine((val) => !isNaN(Number(val)), {
    message: "Hourly rate must be a number"}),
  availability: z.enum(["available", "limited", "unavailable"]),
  enhancedProfile: z.boolean().default(true)}),
    message: &quot;Hourly rate must be a number&quot}),
  availability: z.enum([&quot;available&quot;, &quot;limited&quot;, &quot;unavailable&quot]),
  enhancedProfile: z.boolean().default(true)});

type TalentFormValues = z.infer<typeof talentProfileSchema>,

type CategoryType = 'programming' | 'devops' | 'platforms' | 'softSkills' | 'other',

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
  // Remove the useToast() hook since we're importing the toast function directly,
const { user } = useAuth(),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [skillTags, setSkillTags] = useState<string[]>([]),
  const [isGenerating, setIsGenerating] = useState(false),
  const [generatedContent, setGeneratedContent] = useState<EnhancedProfile | null>(null),
  const [uploadedAvatar, setUploadedAvatar] = useState<string | null>(null),
  
  // Initialize form with default values,
const form = useForm<TalentFormValues>({
    resolver: zodResolver(talentProfileSchema),
    defaultValues: {
      name: user?.displayName || "",
      title: "",
      bio: "",
      location: "",
      skills: "",
      hourlyRate: "",
      availability: "available",
      enhancedProfile: true}}),

  // Handle adding skill tags,
const handleAddSkill = () => {
    const skillInput = form.getValues("skills"),
    if (skillInput && !skillTags.includes(skillInput)) {
      setSkillTags([...skillTags, skillInput]),
      form.setValue("skills", "")    }
  },

  // Handle removing skill tags,
const handleRemoveSkill = (skill: string) => {
    setSkillTags(skillTags.filter((s) => s !== skill))
  },

  // Handle key press in skills input (add on enter)
  const handleSkillKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault(),
      handleAddSkill()    }
  },

  // Handle avatar upload,
const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0],
    if (file) {
      const reader = new FileReader(),
      reader.onloadend = () => {
        setUploadedAvatar(reader.result as string)
      },
      reader.readAsDataURL(file)
interface CategorizedSkills {programming: string[];
  devops: string[];
  platforms: string[];
  softSkills: string[];
  other: string[]}

interface EnhancedProfile {summary: string,
  categorizedSkills: CategorizedSkills}

export function TalentRegistrationForm() {_// Remove the useToast() hook since we're importing the toast function directly,
const { user} = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [skillTags, setSkillTags] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<EnhancedProfile | null>(null);
  const [uploadedAvatar, setUploadedAvatar] = useState<string | null>(null);
  
  // Initialize form with default values,
const form = useForm<TalentFormValues>({resolver: zodResolver(talentProfileSchema), defaultValues: {
      name: user?.displayName || "", title: "", bio: "", location: "", skills: "", hourlyRate: "", availability: "available", enhancedProfile: true}});

  // Handle adding skill tags,
const handleAddSkill = () => {const skillInput = form.getValues("skills");
    if (skillInput && !skillTags.includes(skillInput)) {
      setSkillTags([...skillTags, skillInput]);
      form.setValue("skills", _"")}
  };

  // Handle removing skill tags,
const handleRemoveSkill = (skill: string) => {setSkillTags(skillTags.filter((s) => s !== skill))};

  // Handle key press in skills input (add on enter)
  const handleSkillKeyPress = (e: React.KeyboardEvent) => {if (e.key === "Enter") {
      e.preventDefault();
      handleAddSkill()}
  };

  // Handle avatar upload,
const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedAvatar(reader.result as string)};
      reader.readAsDataURL(file)
    }
  },

  // Generate enhanced profile with AI,
const generateEnhancedProfile = async () => {
    const formData = form.getValues(),
    if (!formData.bio || formData.bio.length < 20) {
      toast({
        title: "More information needed",
        description: "Please provide at least a detailed bio before generating enhanced content."}),
      return      return
    }

    try {
      setIsGenerating(true),
      // Call the Supabase Edge Function,
const { data, error} = await supabase.functions.invoke('talent-profile-enhancer', {body: {
          talentData: {
            name: formData.name, title: formData.title, bio: formData.bio, skills: skillTags, location: formData.location}
        }
      }),

      if (error) {
        throw new Error(error.message)
      }
      setGeneratedContent(data as EnhancedProfile),
      
      toast({
        title: "Enhanced Profile Generated",
        description: "AI has created a professional bio and suggested additional skills for your profile."})
      
    } catch (error: any) {
      console.error("Error generating enhanced profile:", error),
      toast({
        title: "Generation failed",
        description: error.message || "There was an error generating your enhanced profile. Please try again.",
        variant: "destructive"})    } finally {
      setIsGenerating(false)
    }
  },

  // Apply generated content to form,
const applyGeneratedContent = () => {
    if (generatedContent) {
      form.setValue("bio", generatedContent.summary),      
      // Extract all skills from categorized skills and properly type cast them,
const allCategorizedSkills = generatedContent.categorizedSkills,
      const newSkills: string[] = [],
      toast({title: "Enhanced Profile Generated", description: "AI has created a professional bio and suggested additional skills for your profile."})
      
    } catch (error: unknown) {toast({
        title: "Generation failed", description: error.message || "There was an error generating your enhanced profile. Please try again.", variant: "destructive"})
    } finally {setIsGenerating(false)}
  };

  // Apply generated content to form,
const applyGeneratedContent = () => {if (generatedContent) {
      form.setValue("bio", generatedContent.summary);
      
      // Extract all skills from categorized skills and properly type cast them,
const allCategorizedSkills = generatedContent.categorizedSkills;
      const newSkills: string[] = [];
      
      // Safely extract and flatten skills from each category,
Object.values(allCategorizedSkills).forEach(categorySkills => {
        if (Array.isArray(categorySkills)) {
          categorySkills.forEach(skill => {
            if (typeof skill === 'string' && skill && !skillTags.includes(skill)) {
              newSkills.push(skill)
            }
          })        }
      }),
        
      if (newSkills.length > 0) {
        setSkillTags([...skillTags, ...newSkills])
      }    }
  },

  // Get category color,
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
  // Send notification email,
const sendEnhancementNotification = async (userId: string, email: string) => {try {
      await supabase.functions.invoke('send-email', _{
        body: {
          to: email,
          subject: &quot;Your Zion Talent Profile Has Been Enhanced&quot;,
          html: `
          <div style="font-family: Arial, sans-serif, max-width: 600px, margin: 0 auto,">
            <h2 style="color: #6D28D9,">Profile Enhancement Complete</h2>            <p>Your profile has been enhanced with AI. You're now more discoverable to recruiters and companies!</p>
            <p>We've added a professional summary and categorized your skills to help you stand out.</p>
            <p>You can review and edit these enhancements in your profile dashboard.</p>
            <div style="margin-top: 30px, padding-top: 20px, border-top: 1px solid #eee,">
              <p style="color: #666, font-size: 12px,">© ${new Date().getFullYear()} Zion Marketplace</p>
          <div style=&quot;font-family: Arial, sans-serif; max-width: 600px, margin: 0 auto;&quot;>
            <h2 style=&quot;color: #6D28D9;&quot;>Profile Enhancement Complete</h2>
            <p>Your profile has been enhanced with AI. You're now more discoverable to recruiters and companies!</p>
            <p>We've added a professional summary and categorized your skills to help you stand out.</p>
            <p>You can review and edit these enhancements in your profile dashboard.</p>
            <div style=&quot;margin-top: 30px, padding-top: 20px, border-top: 1px solid #eee;&quot;>
              <p style=&quot;color: #666; font-size: 12px,&quot;>© ${new Date().getFullYear()} Zion Marketplace</p>
            </div>
          </div>
          `
        }
      })
    } catch (error) {
      console.error("Failed to send notification email:", error)    }
  }
      })
    } catch (error) {}
  };

  // Handle form submission,
const onSubmit = async (values: TalentFormValues) => {if (skillTags.length === 0) {
      toast({
        title: "Skills required",
        description: "Please add at least one skill to your profile.",
        variant: "destructive"}),
      return      return
    }

    setIsSubmitting(true),

    try {_// For actual implementation with Supabase,
if (!user?.id) {
        throw new Error("User not authenticated")
      }
      
      // Enhance profile if not already done,
let finalSummary = "",
      let finalSkills = skillTags,        throw new Error("User not authenticated")}
      
      // Enhance profile if not already done,
let finalSummary = "";
      let finalSkills = skillTags;
      
      if (values.enhancedProfile && !generatedContent) {try {
          const { data: aiData} = await supabase.functions.invoke('talent-profile-enhancer', {body: {
              talentData: {
                name: values.name, title: values.title, bio: values.bio, skills: skillTags, location: values.location}
            }
          }),
          
          if (aiData) {
            finalSummary = (aiData as EnhancedProfile).summary,
            // Safely merge AI suggested skills with user-provided skills,
const categorizedSkills = (aiData as EnhancedProfile).categorizedSkills,
            const aiSkills: string[] = [],            
            // Extract skills from each category and ensure they're strings,
Object.values(categorizedSkills).forEach(categorySkills => {
              if (Array.isArray(categorySkills)) {
                categorySkills.forEach(skill => {
                  if (typeof skill === 'string' && skill) {
                    aiSkills.push(skill)
                  }
                })              }
            }),
            
            // Create a unique set of skills,
finalSkills = [...new Set([...skillTags, ...aiSkills])]
          }
        } catch (error) {
          console.error("Error enhancing profile:", error),
          // Continue with submission even if enhancement fails,
finalSummary = ""        }
      } else if (generatedContent) {
        finalSummary = generatedContent.summary
      }

      // Get user email for notification,
const { data: userData } = await supabase.auth.getUser(),
      const userEmail = userData.user?.email,

      // Create the talent profile
      // In a real implementation, this would save to Supabase,
setTimeout(() => {
        toast({
          title: "Profile Created Successfully",
          description: "Your talent profile has been published and is now visible in the directory."}),        
        // Send notification email if we have user email,
if (userEmail && values.enhancedProfile) {
          sendEnhancementNotification(user.id, userEmail)
        }
        } catch (error) {_// Continue with submission even if enhancement fails,
finalSummary = ""}
      } else if (generatedContent) {finalSummary = generatedContent.summary}

      // Get user email for notification,
const {data: userData} = await supabase.auth.getUser();
      const userEmail = userData.user?.email;

      // Create the talent profile
      // In a real implementation, this would save to Supabase,
setTimeout_(() => {toast({
          title: "Profile Created Successfully", description: "Your talent profile has been published and is now visible in the directory."});
        
        // Send notification email if we have user email,
if (userEmail && values.enhancedProfile) {sendEnhancementNotification(user.id, userEmail)}
        
        setIsSubmitting(false)
      }, 1500),

      // Here would be the actual code to save the profile to Supabase
      /*
      const {error} = await supabase
        .from('talentprofiles')
        .insert({user_id: user.id, name: values.name, title: values.title, bio: values.bio, summary: finalSummary, location: values.location, skills: finalSkills.map(name => ({ name, level: 4})), // Default skill level,
hourlyrate: Number(values.hourlyRate),
          availabilitystatus: values.availability,
          // Other fields would be handled here
        }),

      if (error) throw error,
      */

    } catch (error: any) {
      console.error("Error creating profile:", error),
      toast({
        title: "Error Creating Profile",
        description: error.message || "There was an error creating your profile. Please try again.",
        variant: "destructive"}),
      setIsSubmitting(false)      setIsSubmitting(false)
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
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-8">
              {_/* Basic Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">Basic Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="col-span-1&quot;>
                    <FormField,
control={form.control}
                      name=&quot;name"
                      render={({ field }) => (                        <FormItem>
                          <FormLabel className="text-zion-slate-light">Full Name</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <UserRound className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                              <Input,
className="pl-10 bg-zion-blue border-zion-blue-light text-white&quot;
                                placeholder=&quot;Your full name"
                                {...field}                              />
                            </div>
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="col-span-1&quot;>
                    <FormField,
control={form.control}
                      name=&quot;title"
                      render={({ field }) => (                        <FormItem>
                          <FormLabel className="text-zion-slate-light">Professional Title</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                              <Input,
className="pl-10 bg-zion-blue border-zion-blue-light text-white&quot;
                                placeholder=&quot;e.g., Senior Software Developer"
                                {...field}                              />
                            </div>
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="col-span-1&quot;>
                    <FormField,
control={form.control}
                      name=&quot;location"
                      render={({ field }) => (                        <FormItem>
                          <FormLabel className="text-zion-slate-light">Location</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                              <Input,
className="pl-10 bg-zion-blue border-zion-blue-light text-white&quot;
                                placeholder=&quot;City, State/Province, Country"
                                {...field}                              />
                            </div>
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="col-span-1&quot;>
                    <FormField,
control={form.control}
                      name=&quot;hourlyRate"
                      render={({ field }) => (                        <FormItem>
                          <FormLabel className="text-zion-slate-light">Hourly Rate (USD)</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate">$</span>
                              <Input,
className="pl-8 bg-zion-blue border-zion-blue-light text-white&quot;
                                placeholder=&quot;e.g., 85"
                                {...field}                              />
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
                      {uploadedAvatar ? (
                        <AspectRatio ratio={1/1}>
                          <img,
src={uploadedAvatar}
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
                      <input,
type=&quot;file&quot;
                        accept=&quot;image/*"
                        className="hidden"
                        onChange={handleAvatarUpload}
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
                <FormField,
control={form.control}
                  name=&quot;bio"
                  render={({ field }) => (                    <FormItem>
                      <FormLabel className="text-zion-slate-light">About Yourself</FormLabel>
                      <FormControl>
                        <Textarea,
className="h-32 min-h-[128px] bg-zion-blue border-zion-blue-light text-white&quot;
                          placeholder=&quot;Describe your professional background, expertise, and the value you bring to clients..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                      <FormDescription className="text-zion-slate&quot;>
                        {field.value?.length || 0}/1000 characters                      </FormDescription>
                    </FormItem>
                  )}
                />
                
                {_/* AI Enhancement Option */}
                <FormField,
control={form.control}
                  name=&quot;enhancedProfile"
                  render={({ field }) => (                    <FormItem className="flex flex-row items-center justify-between p-3 border border-zion-blue-light bg-zion-blue/30 rounded-md">
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
                        <Switch,
checked={field.value}
                          onCheckedChange={field.onChange}
                          className="data-[state=checked]:bg-zion-purple&quot;                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                {form.watch(&quot;enhancedProfile") && (
                  <div className="flex justify-end&quot;>                    <Button,
type=&quot;button&quot;
                      variant=&quot;outline"
                      className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
                      onClick={generateEnhancedProfile}
                      disabled={isGenerating}
                    >
                      <Sparkles className="mr-2 h-4 w-4&quot; />
                      {isGenerating ? &quot;Generating...&quot; : &quot;Generate Enhanced Profile"}                    </Button>
                  </div>
                )}

                {_/* Generated Content Display */}
                {generatedContent && (
                  <div className="bg-zion-blue-light/20 border border-zion-blue-light rounded-md p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-white font-medium flex items-center">
                        <Sparkles className="w-4 h-4 mr-2 text-zion-purple&quot; />
                        AI-Generated Content
                      </h4>
                      <Button,
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
                        <p className="text-zion-slate italic">{generatedContent.summary}</p>
                      </div>
                      
                      {generatedContent.categorizedSkills && (
                        <div>
                          <h5 className="text-zion-slate-light text-sm mb-1">Categorized Skills</h5>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {Object.entries(generatedContent.categorizedSkills).map(_([category, skills]) => (
                              <div key={category} className="flex items-center gap-2">
                                <Badge,
className={_`w-fit ${getCategoryColor(category as CategoryType)}`}
                                >
                                  {category}
                                </Badge>
                                <div className="flex flex-wrap gap-1">
                                  {skills.map(skill => (
                                    <Badge,
key={skill}
                                      className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none"
                                    >
                                      {skill}
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
                  <FormField,
control={form.control}
                    name=&quot;skills"
                    render={({ field }) => (                      <FormItem>
                        <FormLabel className="text-zion-slate-light">Skills</FormLabel>
                        <div className="flex gap-2">
                          <FormControl>
                            <Input,
className="flex-1 bg-zion-blue border-zion-blue-light text-white&quot;
                              placeholder=&quot;Add a skill...&quot;
                              {...field}
                              onKeyDown={handleSkillKeyPress}                            />
                          </FormControl>
                          <Button,
type=&quot;button&quot;
                            variant=&quot;outline"
                            className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"
                            onClick={handleAddSkill}
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
                    {skillTags.map(skill => (
                      <Badge,
key={skill}
                        className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none pl-2 pr-1 py-1.5 flex items-center gap-1&quot;
                      >
                        {skill}
                        <button,
type=&quot;button"
                          onClick={() => handleRemoveSkill(skill)}                          className="rounded-full hover:bg-zion-purple-dark/20 p-0.5"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                    {skillTags.length === 0 && (
                      <p className="text-zion-slate text-sm italic">No skills added yet</p>
                    )}
                  </div>
                </div>

                {_/* Availability Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-white&quot;>Availability</h3>
                  <FormField,
control={form.control}
                    name=&quot;availability"
                    render={({ field }) => (
                      <FormItem className="space-y-4">                        <FormLabel className="text-zion-slate-light">Current Status</FormLabel>
                        <FormControl>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2&quot;>
                              <input,
type=&quot;radio&quot;
                                id=&quot;available&quot;
                                value=&quot;available&quot;
                                checked={field.value === &quot;available&quot}
                                onChange={() => field.onChange(&quot;available")}
                                className="text-zion-purple focus:ring-zion-purple&quot;                              />
                              <label htmlFor=&quot;available" className="text-white flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                                Available Now
                              </label>
                            </div>

                            <div className="flex items-center space-x-2&quot;>
                              <input,
type=&quot;radio&quot;
                                id=&quot;limited&quot;
                                value=&quot;limited&quot;
                                checked={field.value === &quot;limited&quot}
                                onChange={() => field.onChange(&quot;limited")}
                                className="text-zion-purple focus:ring-zion-purple&quot;                              />
                              <label htmlFor=&quot;limited" className="text-white flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                                Limited Availability
                              </label>
                            </div>

                            <div className="flex items-center space-x-2&quot;>
                              <input,
type=&quot;radio&quot;
                                id=&quot;unavailable&quot;
                                value=&quot;unavailable&quot;
                                checked={field.value === &quot;unavailable&quot}
                                onChange={() => field.onChange(&quot;unavailable")}
                                className="text-zion-purple focus:ring-zion-purple&quot;                              />
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
                    <Textarea,
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
                <Button,
type=&quot;button&quot;
                  variant=&quot;outline"
                  className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white&quot;
                >
                  Save as Draft
                </Button>
                <Button,
type=&quot;submit"
                  className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white&quot;
                  disabled={isSubmitting}
                >
                  {isSubmitting ? &quot;Creating Profile...&quot; : &quot;Create Profile"}                </Button>
              </div>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  )
}
