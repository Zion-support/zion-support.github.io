
import React, { useState } from "react",
import { useForm } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import { z } from "zod",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Switch } from "@/components/ui/switch",
import { Badge } from "@/components/ui/badge",

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,

  FormMessage} from "@/components/ui/form",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { X, Sparkles, Upload, Clock, Check, Briefcase, MapPin, UserRound } from 'lucide-react'
import { toast } from "@/components/ui/use-toast",
import { supabase } from "@/integrations/supabase/client",
import { AspectRatio } from "@/components/ui/aspect-ratio",
import { useAuth } from "@/hooks/useAuth",
// Define form schema
const talentProfileSchema = z.object({
  name: z.string().min(2, "Full Name must be at least 2 characters long"),
  title: z.string().min(5, "Professional title is required"),
  bio: z.string().min(50, "Bio must be at least 50 characters long").max(1000, "Bio cannot exceed 1000 characters"),
  location: z.string().min(2, "Location is required"),
  skills: z.string().min(2, "Enter at least one skill"),
  hourlyRate: z.string().refine((val) => !isNaN(Number(val)), {
    message: "Hourly rate must be a number"}),
  availability: z.enum(["available", "limited", "unavailable"]),
  enhancedProfile: z.boolean().default(true)}),

type TalentFormValues = z.infer<typeof talentProfileSchema>,

type CategoryType = 'programming' | 'devops' | 'platforms' | 'softSkills' | 'other',

interface CategorizedSkills {
  programming: string[],
  devops: string[],
  platforms: string[],
  softSkills: string[],
  other: string[]
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
import { logWarn, logErrorToProduction } from '@/utils/productionLogger',;
import {;
  Form,;
  FormControl,;
  FormDescription,;
  FormField,;
  FormItem,;
  FormLabel,;
  FormMessage} from "@/components/ui/form",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { X, Sparkles, Upload, Clock, Check, Briefcase, MapPin, UserRound } from 'lucide-react';
import { toast } from "@/components/ui/use-toast",;
import { supabase } from "@/integrations/supabase/client",;
import { AspectRatio } from "@/components/ui/aspect-ratio",;
import { useAuth } from "@/hooks/useAuth",;
// Define form schema;
const talentProfileSchema = z.object({;
  name: z.string().min(2, "Full Name must be at least 2 characters long"),;
  title: z.string().min(5, "Professional title is required"),;
  bio: z.string().min(50, "Bio must be at least 50 characters long").max(1000, "Bio cannot exceed 1000 characters"),;
  location: z.string().min(2, "Location is required"),;
  skills: z.string().min(2, "Enter at least one skill"),;
  hourlyRate: z.string().refine((val) => !isNaN(Number(val)), {;
    message: "Hourly rate must be a number"}),;
  availability: z.enum(["available", "limited", "unavailable"]),;
  enhancedProfile: z.boolean().default(true)}),;
type TalentFormValues = z.infer<typeof talentProfileSchema>,;
type CategoryType = 'programming' | 'devops' | 'platforms' | 'softSkills' | 'other',;
interface CategorizedSkills {;
  programming: string[],;
  devops: string[],;
  platforms: string[],;
  softSkills: string[],;
  other: string[];

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
    resolver: zodResolver(talentProfileSchema) as any
    defaultValues: {

  })
  // Handle adding skill tags
  const handleAddSkill = () => {
    const skillInput = form.getValues('skills')
    if (skillInput && !skillTags.includes(skillInput)) {
      setSkillTags([...skillTags, skillInput])
      form.setValue('skills', '')
    }
  }
  // Handle removing skill tags
  const handleRemoveSkill = (skill: string) => {
    setSkillTags(skillTags.filter(s => s !== skill))
  }
  // Handle key press in skills input (add on enter)
  const handleSkillKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleAddSkill() }
  }
  // Handle avatar upload;
  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {;
    const file = e.target.files?.[0];    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setUploadedAvatar(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }
  // Generate enhanced profile with AI
  const generateEnhancedProfile = async () => {

    const form_data = form.get_values ();
    // Check condition
if ( {) {
  $2
}
      toast ({
        title: 'More information needed',
        description:;
          'Please provide at least a detailed bio before generating enhanced content.',
      });
      return;
    }
    try {
      setIsGenerating (true);
      // Call the Supabase Edge Function;
      const { data, error } = await supabase.functions.invoke (
        'talent - profile - enhancer',
        {
          body: {
            talent_data: {
              name: form_data.name,
              title: form_data.title,
              bio: form_data.bio,
              skills: skill_tags,
              location: form_data.location,
            },
          },

        }

      // Check if data exists before type assertion;
      // Check condition
if ( {) {
  $2
}
        setGeneratedContent (data as EnhancedProfile);
        toast ({
          title: 'Enhanced Profile Generated',
          description:;
            'AI has created a professional bio and suggested additional skills for your profile.',
        });
      } else {
        // Fallback for mock / development mode;
        log_warn ('Mock AI response - using fallback content');
        setGeneratedContent ({
          summary:;
            'Experienced professional with expertise in modern technologies and best practices.',
          categorized_skills: {
            programming: ['JavaScript', 'TypeScript', 'React'],
            devops: ['Docker', 'CI / CD', 'AWS'],
            platforms: ['Node.js', 'Next.js', 'Vercel'],
            soft_skills: ['Communication', 'Problem Solving', 'Team Leadership'],
            other: ['Project Management', 'Technical Writing'],
          },
        });
        toast ({
          title: 'Enhanced Profile Generated',
          description:;
            'AI has created a professional bio and suggested additional skills for your profile.',
        });
      }
    } catch (error: any) {
      logErrorToProduction ('Error generating enhanced profile:', {
        data: error,
      });
      toast ({
        title: 'Generation failed',
        description:;
          error.message ||;
          'There was an error generating your enhanced profile. Please try again.',
        variant: 'destructive',
      });

    } finally {
      setIsGenerating(false)
    }
  }

      )
      if (error) {
        throw new Error(error.message)
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      }

      // Check if data exists before type assertion
      if (data && typeof data === 'object') {
        setGeneratedContent(data as EnhancedProfile)
        toast({
          title: 'Enhanced Profile Generated',
          description:
            'AI has created a professional bio and suggested additional skills for your profile.',
        })
      } else {
        // Fallback for mock/development mode
        logWarn('Mock AI response - using fallback content')
        setGeneratedContent(data as EnhancedProfile),
        
        toast({
          title: "Enhanced Profile Generated",
          description: "AI has created a professional bio and suggested additional skills for your profile."})
      } else {
        // Fallback for mock/development mode
        logWarn('Mock AI response - using fallback content'),
        setGeneratedContent({
          summary: "Experienced professional with expertise in modern technologies and best practices.",
          categorizedSkills: {
        setGeneratedContent({
          summary: "Experienced professional with expertise in modern technologies and best practices.",
          categorizedSkills: {
            programming: ['JavaScript', 'TypeScript', 'React'],
            devops: ['Docker', 'CI/CD', 'AWS'],
            platforms: ['Node.js', 'Next.js', 'Vercel'],
            softSkills: ['Communication', 'Problem Solving', 'Team Leadership'],
            other: ['Project Management', 'Technical Writing'],
          },
        })
        toast({
          title: 'Enhanced Profile Generated',
          description:
            'AI has created a professional bio and suggested additional skills for your profile.',
        })
            programming: ["JavaScript", "TypeScript", "React"],
            devops: ["Docker", "CI/CD", "AWS"],
            platforms: ["Node.js", "Next.js", "Vercel"],
            softSkills: ["Communication", "Problem Solving", "Team Leadership"],
            other: ["Project Management", "Technical Writing"]
          }
        }),
        
        toast({
          title: "Enhanced Profile Generated",
          description: "AI has created a professional bio and suggested additional skills for your profile."})
      }

    } catch (error: any) {
            ) {
              newSkills.push(skill)
import {;
  Form,;
  FormControl,;
  FormDescription,;
  FormField,;
  FormItem,;
  FormLabel,;
  FormMessage,;
} from '@/components/ui/form';
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;
  CardHeader,;
  CardTitle,;
} from '@/components/ui/card';
import {;
  X,;
  Sparkles,;
  Upload,;
  Clock,;
  Check,;
  Briefcase,;
  MapPin,;
  UserRound,;
} from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useAuth } from '@/hooks/useAuth';

// Define form schema;
const talentProfileSchema = z && z.object({;
  name: z && z.string().min(2, 'Full Name must be at least 2 characters long'),;
  title: z && z.string().min(5, 'Professional title is required'),;
  bio: z;
    .string();
    .min(50, 'Bio must be at least 50 characters long');
    .max(1000, 'Bio cannot exceed 1000 characters'),;
  location: z && z.string().min(2, 'Location is required'),;
  skills: z && z.string().min(2, 'Enter at least one skill'),;
  hourlyRate: z && z.string().refine(val => !isNaN(Number(val)), {;
    message: 'Hourly rate must be a number',;
  }),;
  availability: z && z.enum(['available', 'limited', 'unavailable']),;
  enhancedProfile: z && z.boolean().default(true),;
});
type TalentFormValues = z && z.infer<typeof talentProfileSchema>;

type CategoryType =;
  | 'programming';
  | 'devops';
  | 'platforms';
  | 'softSkills';
  | 'other';

interface CategorizedSkills {;
  programming: string[];
  devops: string[];
  platforms: string[];
  softSkills: string[];
  other: string[];
});";
availability: z && z.enum (["available", "limited", "unavailable"]);
enhancedProfile: z && z.boolean () .default (true) ;
});
type CategoryType = 'programming' | 'devops' | 'platforms' | 'softSkills' | 'other';

};
//Handle removing skill tags const handleRemoveSkill = (skill: string) => {;
  setSkillTags (skillTags && skillTags.filter ( (s) => s !== skill) ) ;
};
//Handle key press in skills input (add on enter) const handleSkillKeyPress = (e: React && React.KeyboardEvent) => {;


export function TalentRegistrationForm() {;
  // Remove the useToast() hook since we're importing the toast function directly;
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [skillTags, setSkillTags] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] =;
    useState<EnhancedProfile | null>(null);
  const [uploadedAvatar, setUploadedAvatar] = useState<string | null>(null);

  // Initialize form with default values;
  const form = useForm<TalentFormValues>({;
    resolver: zodResolver(talentProfileSchema) as any,;
    defaultValues: {;
      name: user?.displayName || '',;
      title: '',;
      bio: '',;
      location: '',;
      skills: '',;
      hourlyRate: '',;
      availability: 'available',;
      enhancedProfile: true,;
    },;
  });

  // Handle adding skill tags;
  const handleAddSkill = () => {;
    const skillInput = form && form.getValues('skills');
    if (skillInput && !skillTags && skillTags.includes(skillInput)) {;
      setSkillTags([...skillTags, skillInput]);
      form && form.setValue('skills', '');
    }
  };

  // Handle removing skill tags;
  const handleRemoveSkill = (skill: string) => {;
    setSkillTags(skillTags && skillTags.filter(s => s !== skill));
  };

  // Handle key press in skills input (add on enter);
  const handleSkillKeyPress = (e: React && React.KeyboardEvent) => {;
    if (e && e.key === 'Enter') {;
      e && e.preventDefault();
      handleAddSkill();    }
  };

  // Handle avatar upload;
  const handleAvatarUpload = (e: React && React.ChangeEvent<HTMLInputElement>) => {;
    const file = e && e.target.files?.[0];    if (file) {;
      const reader = new FileReader();
      reader && reader.onloadend = () => {;
        setUploadedAvatar(reader && reader.result as string);
      };
      reader && reader.readAsDataURL(file);
    }
  };

  // Generate enhanced profile with AI;
  const generateEnhancedProfile = async () => {;
    const formData = form && form.getValues();
    if (!formData && formData.bio || formData && formData.bio.length < 20) {;
      toast({;
        title: 'More information needed',;
        description:;
          'Please provide at least a detailed bio before generating enhanced content.',;
      });
      return;
    }

    try {;
      setIsGenerating(true);

      // Call the Supabase Edge Function;
      const { data, error } = await supabase && supabase.functions.invoke(;
        'talent-profile-enhancer',;
        {;
          body: {;
            talentData: {;
              name: formData && formData.name,;
              title: formData && formData.title,;
              bio: formData && formData.bio,;
              skills: skillTags,;
              location: formData && formData.location,;
            },;
          },;
        }
      })
      if (newSkills.length > 0) {
        setSkillTags([...skillTags, ...newSkills])
      }
    }
  }
  // Get category color
  const getCategoryColor = (category: CategoryType,) => {
    switch (category) {
      case 'programming':
        return 'bg-blue-500/20 hover:bg-blue-500/30 text-blue-500'
      case 'devops':
        return 'bg-green-500/20 hover:bg-green-500/30 text-green-500'
      case 'platforms':
        return 'bg-amber-500/20 hover:bg-amber-500/30 text-amber-500'
      case 'softSkills':
        return 'bg-purple-500/20 hover:bg-purple-500/30 text-purple-500'
      case 'other':
        return 'bg-gray-500/20 hover:bg-gray-500/30 text-gray-500'
      default:
        return 'bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple'
    }
  }
            if (typeof skill === 'string' && skill && !skillTags.includes(skill)) {
              newSkills.push(skill)
;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      // Check if data exists before type assertion;
      if (data && typeof data === 'object') {;
        setGeneratedContent(data as EnhancedProfile);

        toast({;
          title: 'Enhanced Profile Generated',;
          description:;
            'AI has created a professional bio and suggested additional skills for your profile.',;
        });
      } else {;
        // Fallback for mock/development mode;
        logWarn('Mock AI response - using fallback content');
        setGeneratedContent({;
          summary:;
            'Experienced professional with expertise in modern technologies and best practices.',;
          categorizedSkills: {;
            programming: ['JavaScript', 'TypeScript', 'React'],;
            devops: ['Docker', 'CI/CD', 'AWS'],;
            platforms: ['Node && Node.js', 'Next && Next.js', 'Vercel'],;
            softSkills: ['Communication', 'Problem Solving', 'Team Leadership'],;
            other: ['Project Management', 'Technical Writing'],;
          },;
        });

        toast({;
          title: 'Enhanced Profile Generated',;
          description:;
            'AI has created a professional bio and suggested additional skills for your profile.',;
        });
      }
    } catch (error: any) {;
      logErrorToProduction('Error generating enhanced profile:', {;
        data: error,;
      });
      toast({;
        title: 'Generation failed',;
        description:;
          error && error.message ||;
          'There was an error generating your enhanced profile. Please try again.',;
        variant: 'destructive',;
      });
    } finally {;
      setIsGenerating(false);
    }
  };

  // Apply generated content to form;
  const applyGeneratedContent = () => {;
    if (generatedContent) {;
      form && form.setValue('bio', generatedContent && generatedContent.summary);

      // Extract all skills from categorized skills and properly type cast them;
      const allCategorizedSkills = generatedContent && generatedContent.categorizedSkills;
      const newSkills: string[] = [];

      // Safely extract and flatten skills from each category;
      Object && Object.values(allCategorizedSkills).forEach(categorySkills => {;
        if (Array && Array.isArray(categorySkills)) {;
          categorySkills && categorySkills.forEach(skill => {;
            if (;
              typeof skill === 'string' &&;
              skill &&;
              !skillTags && skillTags.includes(skill);
            ) {;
              newSkills && newSkills.push(skill);
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
            }
          })
        }

      });
      // Check condition
if ( {) {
  $2
}
        setSkillTags ([...skill_tags, ...new_skills]);

      }
    }
  }
  // Get category color
  const getCategoryColor = (category: CategoryType,) => {
    switch (category) {
      case 'programming':
        return 'bg-blue-500/20 hover:bg-blue-500/30 text-blue-500'
      case 'devops':
        return 'bg-green-500/20 hover:bg-green-500/30 text-green-500'
      case 'platforms':
        return 'bg-amber-500/20 hover:bg-amber-500/30 text-amber-500'
      case 'softSkills':
        return 'bg-purple-500/20 hover:bg-purple-500/30 text-purple-500'
      case 'other':
        return 'bg-gray-500/20 hover:bg-gray-500/30 text-gray-500'
      default:
        return 'bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple'
    }
  }

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  // Send notification email
  const sendEnhancementNotification = async (userId: string, email: string) => {
    try {
      await supabase.functions.invoke('send-email', {
        body: {

          html: `
          <div style="font-family: Arial, sans-serif, max-width: 600px, margin: 0 auto,">
            <h2 style="color: #6D28D9,">Profile Enhancement Complete</h2>
            <p>Your profile has been enhanced with AI. You're now more discoverable to recruiters and companies!</p>
            <p>We've added a professional summary and categorized your skills to help you stand out.</p>
            <p>You can review and edit these enhancements in your profile dashboard.</p>
            <div style="margin-top: 30px, padding-top: 20px, border-top: 1px solid #eee,">
              <p style="color: #666, font-size: 12px,">© ${new Date().getFullYear()} Zion Marketplace</p>
            </div>
          </div>
          `
        }
          `,
        },
      })
    } catch (error) {
      logErrorToProduction('Failed to send notification email:', {
        data: error
      })
    }
  }
          `
  },;
  // Send notification email;
  const sendEnhancementNotification = async (userId: string, email: string) => {;
    try {;
      await supabase.functions.invoke('send-email', {;
        body: {;
          to: email,;
          subject: "Your Zion Talent Profile Has Been Enhanced",;
          html: `;
          <div style="font-family: Arial, sans-serif, max-width: 600px, margin: 0 auto,">;
            <h2 style="color: #6D28D9,">Profile Enhancement Complete</h2>;
            <p>Your profile has been enhanced with AI. You're now more discoverable to recruiters and companies!</p>;
            <p>We've added a professional summary and categorized your skills to help you stand out.</p>;
            <p>You can review and edit these enhancements in your profile dashboard.</p>;
            <div style="margin-top: 30px, padding-top: 20px, border-top: 1px solid #eee,">;
              <p style="color: #666, font-size: 12px,">© ${new Date().getFullYear()} Zion Marketplace</p>;
            </div>;
          </div>;
          `;
        }
      });
    } catch (error) {;
      logErrorToProduction('Failed to send notification email:', { data: error });
    }
  },
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

  // Handle form submission
  const onSubmit = async (values: TalentFormValues) => {
    if (skillTags.length === 0) {
      toast({
        title: 'Skills required'
        description: 'Please add at least one skill to your profile.'
        variant: 'destructive'
        title: 'Skills required',
        description: 'Please add at least one skill to your profile.',
        variant: 'destructive',
      });

        title: 'Skills required',
        description: 'Please add at least one skill to your profile.',
        variant: 'destructive',

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      })

      return;
    }
    setIsSubmitting (true);
    try {

      // For actual implementation with Supabase
      if (!user?.id) {
        throw new Error('User not authenticated')
<<<<<<< HEAD


      }

      });

    setIsSubmitting(true),

    try {
      // For actual implementation with Supabase
      if (!user?.id) {
        throw new Error("User not authenticated")
      }
      
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      // Enhance profile if not already done

      let finalSummary = ''
      let finalSkills = skillTags
      if (values.enhancedProfile && !generatedContent) {
        try {
<<<<<<< HEAD
          const { data: aiData } = await supabase.functions.invoke(
            'talent-profile-enhancer'
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
          const { data: aiData } = await supabase && supabase.functions.invoke(;
            'talent-profile-enhancer',;
            {;
              body: {;
                talentData: {;
                  name: values && values.name,;
                  title: values && values.title,;
                  bio: values && values.bio,;
                  skills: skillTags,;
                  location: values && values.location,;
                },;
              },;
            }
          );

          if (aiData) {;
            finalSummary = (aiData as EnhancedProfile).summary;
            // Safely merge AI suggested skills with user-provided skills;
            const categorizedSkills = (aiData as EnhancedProfile);
              .categorizedSkills;
            const aiSkills: string[] = [];

            // Extract skills from each category and ensure they're strings;
            Object && Object.values(categorizedSkills).forEach(categorySkills => {;
              if (Array && Array.isArray(categorySkills)) {;
                categorySkills && categorySkills.forEach(skill => {;
                  if (typeof skill === 'string' && skill) {;
<<<<<<< HEAD
            {
              body: {
                talentData: {
                  name: values.name
                  title: values.title
                  bio: values.bio
                  skills: skillTags
                  location: values.location
                }
              }
            }
          )
          if (aiData) {
            finalSummary = (aiData as EnhancedProfile).summary
            // Safely merge AI suggested skills with user-provided skills
            const categorizedSkills = (aiData as EnhancedProfile)
              .categorizedSkills
            const aiSkills: string[] = []
            // Extract skills from each category and ensure they're strings
            Object.values(categorizedSkills).forEach(categorySkills => {
              if (Array.isArray(categorySkills)) {
                categorySkills.forEach(skill => {
                  if (typeof skill === 'string' && skill) {
                    aiSkills.push(skill)

                  }
                });
              }

          }
        } catch (error) {
          logErrorToProduction('Error enhancing profile:', { data: error })
          // Continue with submission even if enhancement fails
          finalSummary = ''
        }
      } else if (generatedContent) {
        finalSummary = generatedContent.summary
      }
      // Get user email for notification
      const { data: userData } = await supabase.auth.getUser()
      const userEmail = (userData as any).user?.email
            }),;
            // Create a unique set of skills;
            finalSkills = [...new Set([...skillTags, ...aiSkills])];
          }
        } catch (error) {
          logErrorToProduction('Error enhancing profile:', { data: error }),
          // Continue with submission even if enhancement fails
          finalSummary = ""
        } catch (error) {;
          logErrorToProduction('Error enhancing profile:', { data: error }),;
          // Continue with submission even if enhancement fails;
          finalSummary = "";
        }
      } else if (generatedContent) {;
        finalSummary = generatedContent.summary;
      }

      // Get user email for notification
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea


>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      // Create the talent profile
      // In a real implementation, this would save to Supabase
      setTimeout(() => {
        toast({
          title: 'Profile Created Successfully'
          title: 'Profile Created Successfully',
          description:
            'Your talent profile has been published and is now visible in the directory.'
        })
          title: "Profile Created Successfully",
          description: "Your talent profile has been published and is now visible in the directory."}),
        
<<<<<<< HEAD

        // Send notification email if we have user email
        if (userEmail && values.enhancedProfile && user?.id) {
          sendEnhancementNotification(user.id, userEmail)
        }
<<<<<<< HEAD

        setIsSubmitting(false)
      }, 1500)
        
        setIsSubmitting(false)
      }, 1500),

<<<<<<< HEAD

      // Here would be the actual code to save the profile to Supabase
      /*
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
                        </AspectRatio>
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <UserRound className="h-10 w-10 text-zion-slate opacity-50" />
                        </div>
                      )}
                    </div>

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                      <FormControl>
                        <Textarea
                          className='h-32 min-h-[128px] bg-zion-blue border-zion-blue-light text-white'
                          placeholder='Describe your professional background, expertise, and the value you bring to clients...'
                          {...field}
                        />
                      </FormControl>

                />
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                {/* AI Enhancement Option */}
                <FormField
                  control={form && form.control}
                  name='enhancedProfile'
                  render={({ field }: { field: any }) => (;
                    <FormItem className='flex flex-row items-center justify-between p-3 border border-zion-blue-light bg-zion-blue/30 rounded-md'>;
                      <div className='space-y-0 && 0.5'>;
                        <FormLabel className='text-white flex items-center'>;
                          <Sparkles className='w-4 h-4 mr-2 text-zion-purple' />                          AI Profile Enhancement;
                        </FormLabel>;
                        <FormDescription className='text-zion-slate-light'>;
              <Separator className='bg - zion - blue - light / 50' />;
              {/* Bio Section */}
              <div className='space - y-4'>;
                <h3 className='text - lg font - medium text - white'>;
                  Professional Bio;
                </h3>;
                <FormField;
                  control={form.control}
                  name='enhancedProfile'
                  render={({ field }: { field: any }) => (
                    <FormItem className='flex flex-row items-center justify-between p-3 border border-zion-blue-light bg-zion-blue/30 rounded-md'>
                      <div className='space-y-0.5'>
                        <FormLabel className='text-white flex items-center'>
                          <Sparkles className='w-4 h-4 mr-2 text-zion-purple' />                          AI Profile Enhancement
                />;
                {/* AI Enhancement Option */}
                <FormField;
                  control={form.control}
                  name="enhancedProfile"
                  render={({ field }: { field: any }) => (
<<<<<<< HEAD

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                        </FormLabel>
                        <FormDescription className="text-zion-slate-light">
                          Let AI help optimize your profile for better visibility and engagement
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
=======
                          aria-label='AI profile enhancement'
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className='data-[state=checked]:bg-zion-purple'                        />
                          aria-label="AI profile enhancement"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="data-[state=checked]:bg-zion-purple"
                        />
<<<<<<< HEAD

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

                                  className={`w-fit ${getCategoryColor(category as CategoryType)}`}
                                >
                                  {category}

                                  className={`w-fit ${getCategoryColor(category as CategoryType)}`}
                                >
                                  {category}
                                </Badge>
                                <div className='flex flex-wrap gap-1'>
                                  {skills.map((skill: string) => (
                                    <Badge
                                      key={skill}
                                      className='bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none'                                    >
                                </Badge>;
                                <div className="flex flex-wrap gap-1">;
                                  {skills.map((skill: string) => (;
                                    <Badge;
                                      key={skill}
                                      className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none";
                                    >;
<<<<<<< HEAD
                          <FormControl>
                            <Input
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                              className="flex-1 bg-zion-blue border-zion-blue-light text-white"
                              placeholder="Add a skill..."
                              {...field}
                              onKeyDown={handleSkillKeyPress}
                            />
                          </FormControl>
                          <Button
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

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                <Button
                  type="button"
                  variant="outline"
                  className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"
                >
                  Save as Draft
                </Button>
=======
                <Button
                  type='submit'
                  className='bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white'
                  disabled={isSubmitting}                >
                  {isSubmitting ? 'Creating Profile...' : 'Create Profile'}
                <Button 
                  type="submit"
                  className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Creating Profile..." : "Create Profile"}
<<<<<<< HEAD

                </Button>
              </div>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  )
}
//Generate enhanced profile with AI return
//Generate enhanced profile with AI return;
}

//Generate enhanced profile with AI return;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

}//Call the Supabase Edge Function const {
  data, error '
}= await supabase.functions.invoke ('talent-profile-enhancer', {
  body: {
  talentData: {
  name: formData.name, title: formData.title, bio: formData.bio,  skills: skillTags, location: formData.location
})
}else {'
  //Fallback for mock/development mode logWarn ('Mock AI response - using fallback content')
setGeneratedContent ({"
  summary: "Experienced professional with expertise in modern technologies and best practices."
categorizedSkills: {"
  programming: ["JavaScript", "TypeScript", "React" ];"
devops: ["Docker", "CI/CD", "AWS" ];"
platforms: ["Node.js", "Next.js", "Vercel" ];"
softSkills: ["Communication", "Problem Solving",  "Team Leadership" ];"
other: ["Project Management", "Technical Writing" ]
})
toast ({
}catch (error: any) {'
  logErrorToProduction ('Error generating enhanced profile:', {
  data: error
})
toast ({
}finally {
  setIsGenerating (false)
}
//Apply generated content to form const applyGeneratedContent = () => {
  if (generatedContent) {
  //Extract all skills from categorized skills and properly type cast them const allCategorizedSkills = generatedContent.categorizedSkills
const newSkills: string[] = []
if (Array.isArray (categorySkills) ) {
  categorySkills.forEach (skill => {'
  if (typeof skill === 'string' && skill && !skillTags.includes (skill) ) {
})
}
//Get category color //Send notification email const sendEnhancementNotification = async (userId: string, email: string) => {
  try {'
  await supabase.functions.invoke ('send-email', {
  body: {'"
  <p>Your profile has been enhanced with AI. You're now more discoverable to recruiters and companies!</p> <p>We've added a professional summary and categorized your skills to help you stand out.</p> <p>You can review and edit these enhancements in your profile dashboard.</p> <div style="margin-top: 30px, padding-top: 20px, border-top: 1px solid #eee, "> <p style="color: #666,  font-size: 12px, ">© $ {
  new Date () .getFullYear ()
  new Date () .getFullYear () 
}Zion Marketplace</p>
  //Extract all skills from categorized skills and properly type cast them const allCategorizedSkills = generated_content.categorized_skills;
const new_skills: string[] = [];
if () {) {
  $2
}
  category_skills.for_each (skill => {';
  if () {) {
  $2
}
});
}
//Get category color //Send notification email const sendEnhancementNotification = async (user_id: string, email: string) => {
  try {';
  await supabase.functions.invoke ('send - email', {
  body: {'";
  <p > Your profile has been enhanced with AI. You're now more discoverable to recruiters and companies!</p> <p > We've added a professional summary and categorized your skills to help you stand out.</p> <p > You can review and edit these enhancements in your profile dashboard.</p> <div style="margin - top: 30px, padding - top: 20px, border - top: 1px solid #eee, "> <p style="color: #666,  font - size: 12px, ">© $ {
  new Date () .getFullYear ();
}Zion Marketplace</p>;
}
//Handle form submission const on_submit = async (values: TalentFormValues) => {
  // Check condition
if ( {) {
  $2
}
//Handle form submission const onSubmit = async (values: TalentFormValues) => {
  if (skillTags.length === 0) {
  toast ({
  return;
}setIsSubmitting (true)
try {
  //For actual implementation with Supabase if (!user?.id) {
  try {
  const {
  data: aiData '
}= await supabase.functions.invoke ('talent-profile-enhancer', {
  body: {
  talentData: {
  name: values.name, title: values.title, bio: values.bio,  skills: skillTags, location: values.location
});'
//Extract skills from each category and ensure they're strings Object.values (categorizedSkills) .forEach (categorySkills => {
  if (Array.isArray (categorySkills) ) {
  categorySkills.forEach (skill => {'
  if (typeof skill === 'string'&& skill) {
})
//Create a unique set of skills finalSkills = [...new Set ([...skillTags, ...aiSkills]) ]
}//Continue with submission even if enhancement fails
}//Send notification email if we have user email if (userEmail && values.enhancedProfile && user?.id) {
  sendEnhancementNotification (user.id, userEmail)
}, 1500)
//Here would be the actual code to save the profile to Supabase /* const {
  error '
}= await supabase .from ('talent profiles') .insert ({
  user id: user.id, name: values.name, title: values.title, bio: values.bio, summary: finalSummary, location: values.location,  skills: finalSkills.map (name => ({
  name, level: 4
}) ), //Default skill level hourly rate: Number (values.hourlyRate)
availability status: values.availability
//Other fields would be handled here
})
if (error) throw error
*/ setIsSubmitting (false)
};"
return (<div className="max-w-4xl mx-auto p-4 md:p-6"> <Card className="bg-zion-blue-dark border-zion-blue-light"> <CardHeader> <CardTitle className="text-2xl text-white">Create Your Talent Profile</CardTitle> <CardDescription className="text-zion-slate"> Showcase your skills and experience to potential clients and employers. </CardDescription> </CardHeader> <Form {
  ...form
}> <form onSubmit= {
  form.handleSubmit (onSubmit) "
}> <CardContent className="space-y-8"> {
  /* Basic Information */ "
}<div className="space-y-4"> <h3 className="text-lg font-medium text-white">Basic Information</h3> <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> <div className="col-span-1" > <FormField <FormItem> <FormLabel className="text-zion-slate-light">Full Name</FormLabel> <FormControl> <div className="relative"> <UserRound className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> <Input /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) "
}/> </div> <div className="col-span-1" > <FormField <FormItem> <FormLabel className="text-zion-slate-light">Professional Title</FormLabel> <FormControl> <div className="relative"> <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> <Input /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) "
}/> </div> <div className="col-span-1" > <FormField <FormItem> <FormLabel className="text-zion-slate-light">Location</FormLabel> <FormControl> <div className="relative"> <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> <Input /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) "
}/> </div> <div className="col-span-1" > <FormField <FormItem> <FormLabel className="text-zion-slate-light">Hourly Rate (USD) </FormLabel> <FormControl> <div className="relative"> <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate">$</span> <Input /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>)
}/> </div> </div> {
  /* Upload Avatar */ "
}<div className="space-y-2"> <FormLabel className="text-zion-slate-light">Profile Picture</FormLabel> <div className="flex items-center gap-6"> <div className="relative w-24 h-24 rounded-full overflow-hidden bg-zion-blue-light border border-zion-blue-light"> {
  uploadedAvatar ? (<AspectRatio ratio= {
  1/1
}> <img src= {
<<<<<<< HEAD
