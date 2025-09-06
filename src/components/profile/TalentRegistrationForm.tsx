<<<<<<< HEAD

=======
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { logWarn, logErrorToProduction } from '@/utils/productionLogger'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import React, { useState } from "react",
import { useForm } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import { z } from "zod",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Switch } from "@/components/ui/switch",
import { Badge } from "@/components/ui/badge",
<<<<<<< HEAD

=======
import { Separator } from "@/components/ui/separator";
import { logWarn, logErrorToProduction } from '@/utils/productionLogger';
import {

  Form
  FormControl
  FormDescription
  FormField
  FormItem
  FormLabel
  FormMessage
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD
=======
//Handle key press in skills input (add on enter) const handleSkillKeyPress = (e: React.KeyboardEvent) => {
export function TalentRegistrationForm() {
  // Remove the useToast() hook since we're importing the toast function directly
  const { user } = useAuth()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [skillTags, setSkillTags] = useState<string[]>([])
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedContent, setGeneratedContent] =
    useState<EnhancedProfile | null>(null)
  const [uploadedAvatar, setUploadedAvatar] = useState<string | null>(null)
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

export function TalentRegistrationForm() {
  // Remove the useToast() hook since we're importing the toast function directly
  const { user } = useAuth(),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [skillTags, setSkillTags] = useState<string[]>([]),
  const [isGenerating, setIsGenerating] = useState(false),
  const [generatedContent, setGeneratedContent] = useState<EnhancedProfile | null>(null),
  const [uploadedAvatar, setUploadedAvatar] = useState<string | null>(null),
<<<<<<< HEAD

  // Initialize form with default values
  const form = useForm<TalentFormValues>({
    resolver: zodResolver(talentProfileSchema) as any
    defaultValues: {

=======
  
>>>>>>>   // Initialize form with default values
  const form = useForm<TalentFormValues>({
    resolver: zodResolver(talentProfileSchema) as any
    defaultValues: {
      name: user?.displayName |''
      title: ''
      bio: ''
      location: ''
      skills: ''
      hourlyRate: ''
      availability: 'available'
      enhancedProfile: true
    }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  })
  // Handle adding skill tags
  const handleAddSkill = () => {
    const skillInput = form.getValues('skills')
    if (skillInput && !skillTags.includes(skillInput)) {
      setSkillTags([...skillTags, skillInput])
      form.setValue('skills', '')
    }
  }
  // Handle removing skill tags;
  const handleRemoveSkill = (skill: string) =>: any {
    setSkillTags (skill_tags.filter (string => s !== skill));
  }
  // Handle key press in skills input (add on enter);
  const handleSkillKeyPress = (e: React.KeyboardEvent) =>: any {
    // Check condition
if ( {) {
  $2
}
      e.prevent_default ();
      handleAddSkill () }
  }
  // Handle avatar upload;
  const handleAvatarUpload = (e: React.ChangeEvent < HTMLInputElement>) =>: any {
    const file = e.target.files?.[0];    // Check condition
if ( {) {
  $2
}
      const reader = new FileReader ();
      reader.onloadend = () => {
        setUploadedAvatar (reader.result as string);
      }
      reader.readAsDataURL (file);
    }
  }
  // Generate enhanced profile with AI;
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
      setIsGenerating (false);
    }
  }

      )
      if (error) {
        throw new Error(error.message)
<<<<<<< HEAD

=======
      }
      // Check if data exists before type assertion
      if (data && typeof data === 'object') {
        setGeneratedContent(data as EnhancedProfile)
        toast({
          title: 'Enhanced Profile Generated'
          description:
            'AI has created a professional bio and suggested additional skills for your profile.'
        })
      } else {
        // Fallback for mock/development mode
        logWarn('Mock AI response - using fallback content')
        setGeneratedContent({
          summary:
            'Experienced professional with expertise in modern technologies and best practices.'
          categorizedSkills: {
            programming: ['JavaScript', 'TypeScript', 'React']
            devops: ['Docker', 'CI/CD', 'AWS']
            platforms: ['Node.js', 'Next.js', 'Vercel']
            softSkills: ['Communication', 'Problem Solving', 'Team Leadership']
            other: ['Project Management', 'Technical Writing']
          }
        })
        toast({
          title: 'Enhanced Profile Generated'
          description:
            'AI has created a professional bio and suggested additional skills for your profile.'
        })
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
    }
  },

  // Handle removing skill tags
  const handleRemoveSkill = (skill: string) => {
    setSkillTags(skillTags.filter((s) => s !== skill))
  },

  // Handle key press in skills input (add on enter)
  const handleSkillKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault(),
      handleAddSkill()
;
export function TalentRegistrationForm() {;
  // Remove the useToast() hook since we're importing the toast function directly;
  const { user } = useAuth(),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [skillTags, setSkillTags] = useState<string[]>([]),;
  const [isGenerating, setIsGenerating] = useState(false),;
  const [generatedContent, setGeneratedContent] = useState<EnhancedProfile | null>(null),;
  const [uploadedAvatar, setUploadedAvatar] = useState<string | null>(null),;
  // Initialize form with default values;
  const form = useForm<TalentFormValues>({;
    resolver: zodResolver(talentProfileSchema) as any,;
    defaultValues: {;
      name: user?.displayName || "",;
      title: "",;
      bio: "",;
      location: "",;
      skills: "",;
      hourlyRate: "",;
      availability: "available",;
      enhancedProfile: true}}),;
  // Handle adding skill tags;
  const handleAddSkill = () => {;
    const skillInput = form.getValues("skills"),;
    if (skillInput && !skillTags.includes(skillInput)) {;
      setSkillTags([...skillTags, skillInput]),;
      form.setValue("skills", "");
    }
  },;
  // Handle removing skill tags;
  const handleRemoveSkill = (skill: string) => {;
    setSkillTags(skillTags.filter((s) => s !== skill));
  },;
  // Handle key press in skills input (add on enter);
  const handleSkillKeyPress = (e: React.KeyboardEvent) => {;
    if (e.key === "Enter") {;
      e.preventDefault(),;
      handleAddSkill();
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
  },

  // Generate enhanced profile with AI
  const generateEnhancedProfile = async () => {
    const formData = form.getValues(),
    if (!formData.bio || formData.bio.length < 20) {
      toast({
        title: "More information needed",
        description: "Please provide at least a detailed bio before generating enhanced content."}),
      return
  },;
  // Generate enhanced profile with AI;
  const generateEnhancedProfile = async () => {;
    const formData = form.getValues(),;
    if (!formData.bio || formData.bio.length < 20) {;
      toast({;
        title: "More information needed",;
        description: "Please provide at least a detailed bio before generating enhanced content."}),;
      return;
    }
;
    try {;
      setIsGenerating(true),;
      // Call the Supabase Edge Function;
      const { data, error } = await supabase.functions.invoke('talent-profile-enhancer', {;
        body: {;
          talentData: {;
            name: formData.name,;
            title: formData.title,;
            bio: formData.bio,;
            skills: skillTags,;
            location: formData.location;
          }
        }
      }),;
      if (error) {;
        throw new Error(error.message);
<<<<<<< HEAD

      }

      // Check if data exists before type assertion
      if (data && typeof data === 'object') {

=======
>>>>>>>       }

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        setGeneratedContent(data as EnhancedProfile),
        
        toast({
          title: "Enhanced Profile Generated",
          description: "AI has created a professional bio and suggested additional skills for your profile."})
      } else {
        // Fallback for mock/development mode
        logWarn('Mock AI response - using fallback content'),
<<<<<<< HEAD

        setGeneratedContent({
          summary: "Experienced professional with expertise in modern technologies and best practices.",
          categorizedSkills: {

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD

      }
      
    } catch (error: any) {

      // Safely extract and flatten skills from each category
      Object.values(allCategorizedSkills).forEach(categorySkills => {
        if (Array.isArray(categorySkills)) {
          categorySkills.forEach(skill => {

=======
>>>>>>>       }
      
    } catch (error: any) {
      logErrorToProduction('Error generating enhanced profile:', {
        data: error
      })
      toast({
        title: 'Generation failed'
        description:
          error.message |
          'There was an error generating your enhanced profile. Please try again.'
        variant: 'destructive'
      })
    } finally {
      setIsGenerating(false)
    }
  }
  // Apply generated content to form
  const applyGeneratedContent = () => {
    if (generatedContent) {
      form.setValue('bio', generatedContent.summary)
      // Extract all skills from categorized skills and properly type cast them
      const allCategorizedSkills = generatedContent.categorizedSkills
      const newSkills: string[] = []
>>>>>>>       // Safely extract and flatten skills from each category
      Object.values(allCategorizedSkills).forEach(categorySkills => {
        if (Array.isArray(categorySkills)) {
          categorySkills.forEach(skill => {
            if (
              typeof skill === 'string' &&
              skill &&
              !skillTags.includes(skill)
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            ) {
              newSkills.push(skill)
            }
          })
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            if (typeof skill === 'string' && skill && !skillTags.includes(skill)) {
              newSkills.push(skill)
;
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
      // Safely extract and flatten skills from each category
      Object.values(allCategorizedSkills).forEach(categorySkills => {
        if (Array.isArray(categorySkills)) {
          categorySkills.forEach(skill => {


            if (true) {}


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
      );

      if (error) {;
        throw new Error(error && error.message);
      }

>>>>>>>       // Check if data exists before type assertion;
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
            }
          });
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
  // Get category color;
  const getCategoryColor = (category: CategoryType, ) =>: any {
    switch (category) {
      case 'programming':;
        return 'bg - blue - 500 / 20 hover:bg - blue - 500 / 30 text - blue - 500';
      case 'devops':;
        return 'bg - green - 500 / 20 hover:bg - green - 500 / 30 text - green - 500';
      case 'platforms':;
        return 'bg - amber - 500 / 20 hover:bg - amber - 500 / 30 text - amber - 500';
      case 'soft_skills':;
        return 'bg - purple - 500 / 20 hover:bg - purple - 500 / 30 text - purple - 500';
      case 'other':;
        return 'bg - gray - 500 / 20 hover:bg - gray - 500 / 30 text - gray - 500';
      default:;
        return 'bg - zion - purple / 20 hover:bg - zion - purple / 30 text - zion - purple';
    }

  },

<<<<<<< HEAD
  // Send notification email
=======
>>>>>>>   // Send notification email
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const sendEnhancementNotification = async (userId: string, email: string) => {
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
    try {
      await supabase.functions.invoke ('send - email', {
        body: {
<<<<<<< HEAD

=======
          to: email
          subject: 'Your Zion Talent Profile Has Been Enhanced'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #6D28D9;">Profile Enhancement Complete</h2>
            <p>Your profile has been enhanced with AI. You're now more discoverable to recruiters and companies!</p>
            <p>We've added a professional summary and categorized your skills to help you stand out.</p>
            <p>You can review and edit these enhancements in your profile dashboard.</p>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="color: #666; font-size: 12px;">© ${new Date().getFullYear()} Zion Marketplace</p>
            </div>
          </div>
<<<<<<< HEAD

=======
        }
          `,
        },
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      })
    } catch (error) {
      logErrorToProduction('Failed to send notification email:', {
        data: error
      })
    }
  }
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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

<<<<<<< HEAD
  // Handle form submission
  const onSubmit = async (values: TalentFormValues) => {
    if (skillTags.length === 0) {
      toast({

=======
>>>>>>>   // Handle form submission
  const onSubmit = async (values: TalentFormValues) => {
    if (skillTags.length === 0) {
      toast({
        title: 'Skills required'
        description: 'Please add at least one skill to your profile.'
        variant: 'destructive'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      })

      return;
    }
    setIsSubmitting (true);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    try {

      // For actual implementation with Supabase
      if (!user?.id) {
        throw new Error('User not authenticated')
<<<<<<< HEAD

      }
      // Enhance profile if not already done

=======
>>>>>>>       }
      // Enhance profile if not already done
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      let finalSummary = ''
      let finalSkills = skillTags
      if (values.enhancedProfile && !generatedContent) {
        try {
          const { data: aiData } = await supabase.functions.invoke(
            'talent-profile-enhancer'
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
<<<<<<< HEAD

=======
        title: "Skills required",
        description: "Please add at least one skill to your profile.",
        variant: "destructive"}),
      return
ursor/fix-website-loading-errors-and-merge-6662
      }

      });

      if (newSkills && newSkills.length > 0) {;
        setSkillTags([...skillTags, ...newSkills]);
      }
>>>>>>>     }
  };

  // Get category color;
  const getCategoryColor = (category: CategoryType,) => {;
    switch (category) {;
      case 'programming':;
        return 'bg-blue-500/20 hover:bg-blue-500/30 text-blue-500';
      case 'devops':;
        return 'bg-green-500/20 hover:bg-green-500/30 text-green-500';
      case 'platforms':;
        return 'bg-amber-500/20 hover:bg-amber-500/30 text-amber-500';
      case 'softSkills':;
        return 'bg-purple-500/20 hover:bg-purple-500/30 text-purple-500';
      case 'other':;
        return 'bg-gray-500/20 hover:bg-gray-500/30 text-gray-500';
      default:;
        return 'bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple';
    }
  };

  // Send notification email;
  const sendEnhancementNotification = async (userId: string, email: string,) => {;
    try {;
      await supabase && supabase.functions.invoke('send-email', {;
        body: {;
          to: email,;
          subject: 'Your Zion Talent Profile Has Been Enhanced',;
          html: `;
          <divstyle="font-family: Arial, sans-serif max-width: 600px margin: 0 auto">;
            <h2style="color: #6D28D9">Profile Enhancement Complete</h2>;
            <p>Your profile has been enhanced with AI. You're now more discoverable to recruiters and companies!</p>;
            <p>We've added a professional summary and categorized your skills to help you stand out.</p>;
            <p>You can review and edit these enhancements in your profile dashboard.</p>;
            <divstyle="margin-top: 30px padding-top: 20px border-top: 1px solid #eee">;
              <pstyle="color: #666 font-size: 12px">© ${new Date().getFullYear()} Zion Marketplace</p>;
            </div>;
          </div>;
          `,;
        },;
      });
    } catch (error) {;
      logErrorToProduction('Failed to send notification email:', {;
        data: error,;
      });
    }
  };

    try {
      // For actual implementation with Supabase
      if (!user?.id) {
        throw new Error("User not authenticated")
      }
      
      // Enhance profile if not already done
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      let finalSummary = "",
      let finalSkills = skillTags,
      
      if (values.enhancedProfile && !generatedContent) {
        try {
          const { data: aiData } = await supabase.functions.invoke('talent-profile-enhancer', {
            body: {
              talentData: {
                name: values.name,
                title: values.title,
                bio: values.bio,
                skills: skillTags,
                location: values.location
  },;
  // Handle form submission;
  const onSubmit = async (values: TalentFormValues,) => {;
    if (skillTags && skillTags.length === 0) {;
      toast({;
        title: 'Skills required',;
        description: 'Please add at least one skill to your profile.',;
        variant: 'destructive',;
      });
      return;
    }

    setIsSubmitting(true);

    try {;
      // For actual implementation with Supabase;
      if (!user?.id) {;
        throw new Error('User not authenticated');
      }

      // Enhance profile if not already done;
      let finalSummary = '';
      let finalSkills = skillTags;

      if (values && values.enhancedProfile && !generatedContent) {;
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
                    aiSkills.push(skill);
<<<<<<< HEAD

                  }
                })
              }

=======
>>>>>>>                   }
                })
              }
            })
            // Create a unique set of skills
            finalSkills = [...new Set([...skillTags, ...aiSkills])]
ursor/fix-website-loading-errors-and-merge-6662
                  }
                });
              }

            });
            // Create a unique set of skills;
            final_skills = [...new Set ([...skill_tags, ...ai_skills])];

>>>>>>>           }
        } catch (error) {
          logErrorToProduction ('Error enhancing profile:', { data: error });
          // Continue with submission even if enhancement fails;
          final_summary = '';
        }
      } else // Check condition
if ( {) {
  $2
}
        final_summary = generated_content.summary;
      }
      // Get user email for notification
      const { data: userData } = await supabase.auth.getUser()
      const userEmail = (userData as any).user?.email
>>>>>>>       // Create the talent profile
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      // Create the talent profile
>>>>>>>       // In a real implementation, this would save to Supabase
      setTimeout((,) => {
        toast({
<<<<<<< HEAD

          description:
            'Your talent profile has been published and is now visible in the directory.'
        })

          title: "Profile Created Successfully",
          description: "Your talent profile has been published and is now visible in the directory."}),

=======
          title: 'Profile Created Successfully'
          description:
            'Your talent profile has been published and is now visible in the directory.'
        })
          title: "Profile Created Successfully",
          description: "Your talent profile has been published and is now visible in the directory."}),
        
>>>>>>>         // Send notification email if we have user email
        if (userEmail && values.enhancedProfile && user?.id) {
          sendEnhancementNotification(user.id, userEmail)
        }
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        // Send notification email if we have user email
        if (userEmail && values.enhancedProfile && user?.id) {
          sendEnhancementNotification(user.id, userEmail)
        }

<<<<<<< HEAD
        setIsSubmitting(false)
      }, 1500)

        setIsSubmitting(false)
      }, 1500),

=======



>>>>>>>         setIsSubmitting(false)
      }, 1500)
        
        setIsSubmitting(false)
      }, 1500),

>>>>>>>       // Here would be the actual code to save the profile to Supabase
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      // Here would be the actual code to save the profile to Supabase
>>>>>>>       /*
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
<<<<<<< HEAD

=======
        })
      if (error) throw error
>>>>>>>       */


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      */
    } catch (error: any) {
<<<<<<< HEAD

                        </AspectRatio>
=======
      logErrorToProduction('Error creating profile:', { data: error })
      toast({
        title: 'Error Creating Profile'
        description:
          error.message |
          'There was an error creating your profile. Please try again.'
        variant: 'destructive'
      })
      setIsSubmitting(false)
    }
  }

  return (
    <div className='max-w-4xl mx-auto p-4 md:p-6'>
      <Card className='bg-zion-blue-dark border-zion-blue-light'>
        <CardHeader>
          <CardTitle className='text-2xl text-white'>
            Create Your Talent Profile
          </CardTitle>
          <CardDescription className='text-zion-slate'>
            Showcase your skills and experience to potential clients and
            employers.
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className='space-y-8'>
              {/* Basic Information */}
              <div className='space-y-4'>
                <h3 className='text-lg font-medium text-white'>
                  Basic Information
                </h3>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div className='col-span-1'>
                    <FormField
                      control={form.control}
                      name='name'
                      render={({ field }: { field: any }) => (                        <FormItem>
                          <FormLabel className='text-zion-slate-light'>
                            Full Name
                          </FormLabel>
                          <FormControl>
                            <div className='relative'>
                              <UserRound className='absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4' />
                              <Input
                                className='pl-10 bg-zion-blue border-zion-blue-light text-white'
                                placeholder='Your full name'
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage className='text-red-400' />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className='col-span-1'>
                    <FormField
                      control={form.control}
                      name='title'
                      render={({ field }: { field: any }) => (                        <FormItem>
                          <FormLabel className='text-zion-slate-light'>
                            Professional Title
                          </FormLabel>
                          <FormControl>
                            <div className='relative'>
                              <Briefcase className='absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4' />
                              <Input
                                className='pl-10 bg-zion-blue border-zion-blue-light text-white'
                                placeholder='e.g., Senior Software Developer'
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage className='text-red-400' />
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
                          <FormControl>
                            <div className='relative'>
                              <MapPin className='absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4' />
                              <Input
                                className='pl-10 bg-zion-blue border-zion-blue-light text-white'
                                placeholder='City, State/Province, Country'
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage className='text-red-400' />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className='col-span-1'>
                    <FormField
                      control={form.control}
                      name='hourlyRate'
                      render={({ field }: { field: any }) => (                        <FormItem>
                          <FormLabel className='text-zion-slate-light'>
                            Hourly Rate (USD)
                          </FormLabel>
                          <FormControl>
                            <div className='relative'>
                              <span className='absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate'>
                                $
                              </span>
                              <Input
                                className='pl-8 bg-zion-blue border-zion-blue-light text-white'
                                placeholder='e.g., 85'
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage className='text-red-400' />
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
                      {uploadedAvatar ? (
                        <AspectRatio ratio={1 / 1}>
ursor/fix-website-loading-errors-and-merge-6662
                                {...field}
                              />;
                            </div>;
                          </FormControl>;

                    />;
                  </div>;

                  <div className='col-span-1'>;

                    <FormField
                      control={form && form.control}
                      name='title'
                      render={({ field }: { field: any }) => (                        <FormItem>;
                          <FormLabel className='text-zion-slate-light'>;
                          <FormMessage className='text - red - 400' />;
                        </FormItem>)}
                    />;
                  </div>;
                  <div className='col - span - 1'>;
                    <FormField;
                      control={form.control}
                      name='title';
                      render={({ field }: { field: any }) => (                        <FormItem>;
                          <FormLabel className='text - zion - slate - light'>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                            Professional Title;
                          </FormLabel>;
                          <FormControl>;
                            <div className='relative'>;

                              <Briefcase className='absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4' />;
                              <Input;
                                className='pl - 10 bg - zion - blue border - zion - blue - light text - white';
                                placeholder='e.g., Senior Software Developer';

                                {...field}
                              />;
                            </div>;
                          </FormControl>;

                    />;
                  </div>;

                  <div className='col-span-1'>;

                    <FormField
                      control={form && form.control}
                      name='location'
                      render={({ field }: { field: any }) => (                        <FormItem>;
                          <FormLabel className='text-zion-slate-light'>;
                          <FormMessage className='text - red - 400' />;
                        </FormItem>)}
                    />;
                  </div>;
                  <div className='col - span - 1'>;
                    <FormField;
                      control={form.control}
                      name='location';
                      render={({ field }: { field: any }) => (                        <FormItem>;
                          <FormLabel className='text - zion - slate - light'>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                            Location;
                          </FormLabel>;
                          <FormControl>;
                            <div className='relative'>;

                              <MapPin className='absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4' />;
                              <Input;
                                className='pl - 10 bg - zion - blue border - zion - blue - light text - white';
                                placeholder='City, State / Province, Country';

                                {...field}
                              />;
                            </div>;
                          </FormControl>;

                    />;
                  </div>;

                  <div className='col-span-1'>;

                    <FormField
                      control={form && form.control}
                      name='hourlyRate'
                      render={({ field }: { field: any }) => (                        <FormItem>;
                          <FormLabel className='text-zion-slate-light'>;
                          <FormMessage className='text - red - 400' />;
                        </FormItem>)}
                    />;
                  </div>;
                  <div className='col - span - 1'>;
                    <FormField;
                      control={form.control}
                      name='hourly_rate';
                      render={({ field }: { field: any }) => (                        <FormItem>;
                          <FormLabel className='text - zion - slate - light'>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                            Hourly Rate (USD);
                          </FormLabel>;
                          <FormControl>;
                            <div className='relative'>;

                              <span className='absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate'>;
                                $;
                              </span>;
                              <Input;
                                className='pl - 8 bg - zion - blue border - zion - blue - light text - white';
                                placeholder='e.g., 85';

                                {...field}
                              />;
                            </div>;
                          </FormControl>;

                    />;
                  </div>;
                </div>;


                {/* Upload Avatar */}
                <div className='space-y-2'>;
                  <FormLabel className='text-zion-slate-light'>;
                    Profile Picture;
                  </FormLabel>;
                  <div className='flex items-center gap-6'>;
                    <div className='relative w-24 h-24 rounded-full overflow-hidden bg-zion-blue-light border border-zion-blue-light'>;
                      {uploadedAvatar ? (;
                        <AspectRatio ratio={1 / 1}>;
>>>>>>>                           <img
                            src={uploadedAvatar}
                            alt='Avatar preview'
                            className='w-full h-full object-cover'
                            loading='lazy'                          />
>>>>>>>                         </AspectRatio>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <UserRound className="h-10 w-10 text-zion-slate opacity-50" />
                        </div>
                      )}
                    </div>
<<<<<<< HEAD
=======
                    <label className='flex items-center justify-center px-4 py-2 rounded-md bg-zion-purple hover:bg-zion-purple-dark text-white cursor-pointer transition-colors'>
                      <Upload className='mr-2 h-4 w-4' />
                      <span>Upload Photo</span>
                      <input
                        type='file'
                        accept='image/*'
                        className='hidden'
                        onChange={handleAvatarUpload}                      />
                    </label>
                  </div>
                  <p className='text-sm text-zion-slate'>
                    For best results, use an image at least 400x400 pixels in
                    JPG, PNG, or GIF format.
                  </p>
                </div>
              </div>
              <Separator className='bg-zion-blue-light/50' />
              {/* Bio Section */}
              <div className='space-y-4'>
                <h3 className='text-lg font-medium text-white'>
                  Professional Bio
                </h3>
                <FormField
                  control={form.control}
                  name='bio'
                  render={({ field }: { field: any }) => (                    <FormItem>
                      <FormLabel className='text-zion-slate-light'>
                        About Yourself
                      </FormLabel>
>>>>>>>                       <FormControl>
ursor/fix-website-loading-errors-and-merge-6662
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                    For best results, use an image at least 400x400 pixels in;
                    JPG, PNG, or GIF format.;
                  </p>;
                </div>;
              </div>;

              <Separator className="bg-zion-blue-light/50" />;
              {/* Bio Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">Professional Bio</h3>
                <FormField
                  control={form.control}
                  name="bio"
                  render={({ field }: { field: any }) => (
                    <FormItem>
                      <FormLabel className="text-zion-slate-light">About Yourself</FormLabel>

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

                      <FormControl>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>                         <Textarea
                          className='h-32 min-h-[128px] bg-zion-blue border-zion-blue-light text-white'
                          placeholder='Describe your professional background, expertise, and the value you bring to clients...'
                          {...field}
                        />
                      </FormControl>
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                />
                {/* AI Enhancement Option */}
                <FormField
                  control={form && form.control}
                  name='enhancedProfile'
                  render={({ field }: { field: any }) => (
                    <FormItem className='flex flex-row items-center justify-between p-3 border border-zion-blue-light bg-zion-blue/30 rounded-md'>
                      <div className='space-y-0.5'>
                        <FormLabel className='text-white flex items-center'>
                          <Sparkles className='w-4 h-4 mr-2 text-zion-purple' />                          AI Profile Enhancement
<<<<<<< HEAD

=======
                      <FormMessage className="text-red-400" />
                      <FormDescription className="text-zion-slate">
                        {field.value?.length || 0}/1000 characters
                      </FormDescription>
                    </FormItem>
                  )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                />;
                {/* AI Enhancement Option */}
                <FormField;
                  control={form.control}
                  name='enhanced_profile';
                  render={({ field }: { field: any }) => (
                    <FormItem className="flex flex-row items-center justify-between p-3 border border-zion-blue-light bg-zion-blue/30 rounded-md">
                      <div className="space-y-0.5">
                        <FormLabel className="text-white flex items-center">
                          <Sparkles className="w-4 h-4 mr-2 text-zion-purple" />
                          AI Profile Enhancement
<<<<<<< HEAD

                        </FormLabel>
=======
>>>>>>>                         </FormLabel>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                        <FormDescription className="text-zion-slate-light">
                          Let AI help optimize your profile for better visibility and engagement
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
<<<<<<< HEAD

                      </FormControl>
                    </FormItem>
                  )}
                />

=======
                          aria-label='AI profile enhancement'
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className='data-[state=checked]:bg-zion-purple'                        />
>>>>>>>                       </FormControl>
                    </FormItem>
                  )}
                />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                      type='button'
                      variant='outline'
                      className='border-zion-purple text-zion-purple hover:bg-zion-purple/10'
                      onClick={generateEnhancedProfile}
                      disabled={isGenerating}                    >
                      <Sparkles className='mr-2 h-4 w-4' />
                      {isGenerating
                        ? 'Generating...'
                        : 'Generate Enhanced Profile'}
<<<<<<< HEAD

=======
                
                {form.watch("enhancedProfile") && (
                  <div className="flex justify-end">
                    <Button
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                      type="button"
                      variant="outline"
                      className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
                      onClick={generateEnhancedProfile}
                      disabled={isGenerating}
                    >
                      <Sparkles className="mr-2 h-4 w-4" />
                      {isGenerating ? "Generating..." : "Generate Enhanced Profile"}
<<<<<<< HEAD
=======
>>>>>>>                     </Button>
                      </FormControl>
                    </FormItem>
                  )}
                />

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

                    </Button>
>>>>>>>                   </div>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
                )}
                {/* Generated Content Display */}
                {generatedContent && (;
                  <div className='bg-zion-blue-light/20 border border-zion-blue-light rounded-md p-4'>;
                    <div className='flex items-center justify-between mb-3'>;
                      <h4 className='text-white font-medium flex items-center'>;
                        <Sparkles className='w-4 h-4 mr-2 text-zion-purple' />;
                        AI-Generated Content;
                      </h4>;
                      <Button
<<<<<<< HEAD

                                  className={`w-fit ${getCategoryColor(category as CategoryType)}`}
                                >
                                  {category}

                                      {skill}
=======
                        type='button'
                        size='sm'
                        className='bg-zion-purple hover:bg-zion-purple-dark text-white'
                        onClick={applyGeneratedContent}                      >
                        <Check className='mr-1 h-3 w-3' /> Apply
                      </Button>
                    </div>
                    <div className='space-y-4'>
                      <div>
                        <h5 className='text-zion-slate-light text-sm mb-1'>
                          Professional Summary
                        </h5>
                        <p className='text-zion-slate italic'>
                          {generatedContent.summary}
                        </p>
                      </div>
                      {generatedContent.categorizedSkills && (
                        <div>
                          <h5 className='text-zion-slate-light text-sm mb-1'>
                            Categorized Skills
                          </h5>
                          <div className='flex flex-wrap gap-2 mt-1'>
                            {Object.entries(
                              generatedContent.categorizedSkills
                            ).map(([category, skills]) => (
                              <div
                                key={category}
                                className='flex items-center gap-2'
                              >                                <Badge
>>>>>>>                                   className={`w-fit ${getCategoryColor(category as CategoryType)}`}
                                >
                                  {category}
                                </Badge>
                                <div className='flex flex-wrap gap-1'>
                                  {skills.map((skill: string) => (
                                    <Badge
                                      key={skill}
                                      className='bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none'                                    >
>>>>>>>                                       {skill}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                                    </Badge>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
                                      {skill}
                                    </Badge>;
>>>>>>>                                   ))}
                                </div>;
                              </div>;
                            ))}
                          </div>;
                        </div>;
                      )}
                    </div>;
                  </div>;
                )}
<<<<<<< HEAD

                          <FormControl>
                            <Input
                              className="flex-1 bg-zion-blue border-zion-blue-light text-white"
                              placeholder="Add a skill..."
=======
              </div>
              <Separator className='bg-zion-blue-light/50' />
              {/* Skills and Availability */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {/* Skills Section */}
                <div className='space-y-4'>
                  <h3 className='text-lg font-medium text-white'>
                    Skills & Expertise
                  </h3>
                  <FormField
                    control={form.control}
                    name='skills'
                    render={({ field }: { field: any }) => (                      <FormItem>
                        <FormLabel className='text-zion-slate-light'>
                          Skills
                        </FormLabel>
                        <div className='flex gap-2'>
>>>>>>>                           <FormControl>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>                             <Input
                              className='flex-1 bg-zion-blue border-zion-blue-light text-white'
                              placeholder='Add a skill...'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                              {...field}
                              onKeyDown = {handleSkillKeyPress,}
                            />;
                          </FormControl>;
                          <Button
<<<<<<< HEAD

                    )}
                  </div>
                </div>
                {/* Availability Section */}

=======
                            type='button'
                            variant='outline'
                            className='border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white'
                            onClick={handleAddSkill}                          >
                            Add
                          </Button>
                        </div>
                        <FormDescription className='text-zion-slate'>
                          Press Enter or click Add to include a skill
                        </FormDescription>
                        <FormMessage className='text-red-400' />
                      </FormItem>
                    )}
                  />
                  <div className='flex flex-wrap gap-2 mt-2'>
                    {skillTags.map(skill => (
                      <Badge
                        key={skill}
                        className='bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none pl-2 pr-1 py-1 && 1.5 flex items-center gap-1'>;
                        {skill}
                        <button
                          type='button'
                          onClick={() => handleRemoveSkill(skill)}
                          className='rounded-full hover:bg-zion-purple-dark/20 p-0 && 0.5'                        >;
                          <X className='h-3 w-3' />;
                        </button>;
                      </Badge>;
                    ))}
                    {skillTags.length === 0 && (
                      <p className='text-zion-slate text-sm italic'>
                        No skills added yet
                      </p>
>>>>>>>                     )}
                  </div>
                </div>
                {/* Availability Section */}
                <div className='space-y-4'>
                  <h3 className='text-lg font-medium text-white'>
                    Availability
                  </h3>
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
                                className='text-white flex items-center gap-2'
                              >
                                <div className='h-2 w-2 rounded-full bg-green-500'></div>
                                Available Now
                              </label>
                            </div>
                            <div className='flex items-center space-x-2'>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
                    )}

                  </div>;
                </div>;


                {/* Availability Section */}

                                className='text-white flex items-center gap-2'>;
                                <div className='h-2 w-2 rounded-full bg-green-500'></div>;
                                Available Now;
                              </label>;
                            </div>;

                            <div className='flex items-center space-x-2'>;

>>>>>>>                               <input
                                type='radio'
                                id='limited'
                                value='limited'
                                checked={field && field.value === 'limited'}
                                onChange={() => field && field.onChange('limited')}
                                className='text-zion-purple focus:ring-zion-purple'                              />;
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
                                checked={field && field.value === 'unavailable'}
                                onChange={() => field && field.onChange('unavailable')}
                                className='text-zion-purple focus:ring-zion-purple'                              />;
                              <label
                                htmlFor='unavailable'
                                className='text-white flex items-center gap-2'
                              >
                                <div className='h-2 w-2 rounded-full bg-red-500'></div>
>>>>>>>                                 Currently Unavailable
ursor/fix-website-loading-errors-and-merge-6662
                    control={form.control}
                    name='skills';
                    render={({ field }: { field: any }) => (                      <FormItem>;
                        <FormLabel className='text - zion - slate - light'>;
                          Skills;
                        </FormLabel>;
                        <div className='flex gap - 2'>;
                          <FormControl>;
                            <Input;
                              className='flex - 1 bg - zion - blue border - zion - blue - light text - white';
                              placeholder='Add a skill...';
                              {...field}
                              onKeyDown = {handleSkillKeyPress, }
                            />;
                          </FormControl>;
                          <Button;
                            type='button';
                            variant='outline';
                            className='border - zion - blue - light text - zion - slate - light hover:bg - zion - blue - light hover:text - white';
                            on_click={handleAddSkill}                          >;
                            Add;
                          </Button>;
                        </div>;
                        <FormDescription className='text - zion - slate'>;
                          Press Enter or click Add to include a skill;
                        </FormDescription>;
                        <FormMessage className='text - red - 400' />;
                      </FormItem>)}
                  />;
                  <div className='flex flex - wrap gap - 2 mt - 2'>;
                    {skill_tags.map (skill => (
                      <Badge;
                        key={skill}
                        className='bg - zion - purple / 20 hover:bg - zion - purple / 30 text - zion - purple border - none pl - 2 pr - 1 py - 1.5 flex items - center gap - 1';
                      >;
                        {skill}
                        <button;
                          type='button';
                          on_click={() => handleRemoveSkill (skill)}
                          className='rounded - full hover:bg - zion - purple - dark / 20 p - 0.5'                        >;
                          <X className='h - 3 w - 3' />;
                        </button>;
                      </Badge>))}
                    {skill_tags.length === 0 && (
                      <p className='text - zion - slate text - sm italic'>;
                        No skills added yet;
                      </p>)}
                  </div>;
                </div>;
                {/* Availability Section */}
                <div className='space - y-4'>;
                  <h3 className='text - lg font - medium text - white'>;
                    Availability;
                  </h3>;
                  <FormField;
                    control={form.control}
                    name='availability';
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
                                Available Now
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


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                                Currently Unavailable
>>>>>>>                               </label>
                            </div>
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
                    )}
                  />
                </div>
              </div>
            </CardContent>
<<<<<<< HEAD

                <Button
=======
            <CardFooter className='border-t border-zion-blue-light pt-6'>
              <div className='flex flex-col sm:flex-row gap-4 w-full sm:justify-between'>
>>>>>>>                 <Button
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  type="button"
                  variant="outline"
                  className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"
                >
                  Save as Draft
                </Button>
<<<<<<< HEAD

=======
                <Button
                  type='submit'
                  className='bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white'
                  disabled={isSubmitting}                >
                  {isSubmitting ? 'Creating Profile...' : 'Create Profile'}
>>>>>>>                 </Button>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                </Button>
>>>>>>>               </div>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  )
}
<<<<<<< HEAD

=======
//Generate enhanced profile with AI return
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD

=======
  new Date () .getFullYear ()
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
}Zion Marketplace</p>
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
  uploadedAvatar "
}alt="Avatar preview" className="w-full h-full object-cover" loading="lazy" /> </AspectRatio>) : (<div className="flex items-center justify-center h-full"> <UserRound className="h-10 w-10 text-zion-slate opacity-50" /> </div>) "
}</div> <label className="flex items-center justify-center px-4 py-2 rounded-md bg-zion-purple hover:bg-zion-purple-dark text-white cursor-pointer transition-colors"> <Upload className="mr-2 h-4 w-4" /> <span>Upload Photo</span> <input type="file" accept="image/*" className="hidden" onChange= {
  handleAvatarUpload "
}/> </label> </div> <p className="text-sm text-zion-slate"> For best results, use an image at least 400x400 pixels in JPG, PNG, or GIF format. </p> </div> </div> <Separator className="bg-zion-blue-light/50" /> {
  /* Bio Section */ "
}<div className="space-y-4"> <h3 className="text-lg font-medium text-white" >Professional Bio</h3> <FormField <FormItem> <FormLabel className="text-zion-slate-light">About Yourself</FormLabel> <FormControl> <Textarea </FormDescription> </FormItem>)
}/> {
  /* AI Enhancement Option */ "
}<FormField <FormItem className="flex flex-row items-center justify-between p-3 border border-zion-blue-light bg-zion-blue/30 rounded-md"> <div className="space-y-0.5"> <FormLabel className="text-white flex items-center"> <Sparkles className="w-4 h-4 mr-2 text-zion-purple" /> AI Profile Enhancement </FormLabel> <FormDescription className="text-zion-slate-light" > Let AI help optimize your profile for better visibility and engagement </FormDescription> </div> <FormControl> <Switch /> </FormControl> </FormItem>) "
}/> <Button type="button" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple/10" onClick={
  generateEnhancedProfile
}disabled= {
  isGenerating
}> </Button> </div>)
}{
  /* Generated Content Display */
}{"
  generatedContent && (<div className="bg-zion-blue-light/20 border border-zion-blue-light rounded-md p-4"> <div className="flex items-center justify-between mb-3"> <h4 className="text-white font-medium flex items-center"> <Sparkles className="w-4 h-4 mr-2 text-zion-purple" /> AI-Generated Content </h4> <Button type="button" size="sm" className="bg-zion-purple hover:bg-zion-purple-dark text-white" onClick={
  applyGeneratedContent "
}> <Check className="mr-1 h-3 w-3" /> Apply </Button> </div> <div className="space-y-4"> <div> <h5 className="text-zion-slate-light text-sm mb-1">Professional Summary</h5> <p className="text-zion-slate italic"> {
  generatedContent.summary
}</p> </div> {"
  generatedContent.categorizedSkills && (<div> <h5 className="text-zion-slate-light text-sm mb-1">Categorized Skills</h5> <div className="flex flex-wrap gap-2 mt-1"> {
  Object.entries (generatedContent.categorizedSkills) .map ( ([category, skills]) => (<div key= {
  category "
}className="flex items-center gap-2"> <Badge className= {
  `w-fit $ {
  getCategoryColor (category as CategoryType)
}`
}> {
  category "
}</Badge> <div className="flex flex-wrap gap-1"> {
  skills.map ( (skill: string) => (<Badge key= {
  skill "
}className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none" > {
  skill
}</Badge>) )
}</div> </div>) )
}</div> </div>)
}</div> </div>) "
}</div> <Separator className="bg-zion-blue-light/50" /> {
  /* Skills and Availability */ "
}<div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {
  /* Skills Section */ "
}<div className="space-y-4"> <h3 className="text-lg font-medium text-white" >Skills & Expertise</h3> <FormField <FormItem> <FormLabel className="text-zion-slate-light">Skills</FormLabel> <div className="flex gap-2"> <FormControl> <Input /> </FormControl> <Button type="button" variant="outline" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white" onClick={
  handleAddSkill "
}> Add </Button> </div> <FormDescription className="text-zion-slate"> Press Enter or click Add to include a skill </FormDescription> <FormMessage className="text-red-400" /> </FormItem>) "
}/> <div className="flex flex-wrap gap-2 mt-2"> {
  skillTags.map (skill => (<Badge key= {
  skill "
}className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none pl-2 pr-1 py-1.5 flex items-center gap-1" > {
  skill "
}<button className="rounded-full hover:bg-zion-purple-dark/20 p-0.5" > <X className="h-3 w-3" /> </button> </Badge>) )
}{"
  skillTags.length === 0 && (<p className="text-zion-slate text-sm italic">No skills added yet</p>)
}</div> </div> {
  /* Availability Section */ "
}<div className="space-y-4"> <h3 className="text-lg font-medium text-white" >Availability</h3> <FormField <FormLabel className="text-zion-slate-light">Current Status</FormLabel> <FormControl> <div className="space-y-2"> <div className="flex items-center space-x-2" > <input /> <label htmlFor="available" className="text-white flex items-center gap-2"> <div className="h-2 w-2 rounded-full bg-green-500"></div> Available Now </label> </div> <div className="flex items-center space-x-2" > <input /> <label htmlFor="limited" className="text-white flex items-center gap-2"> <div className="h-2 w-2 rounded-full bg-yellow-500"></div> Limited Availability </label> </div> <div className="flex items-center space-x-2" > <input /> <label htmlFor="unavailable" className="text-white flex items-center gap-2"> <div className="h-2 w-2 rounded-full bg-red-500"></div> Currently Unavailable </label> </div> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) "
}/> </div> </div> </CardContent> <CardFooter className="border-t border-zion-blue-light pt-6"> <div className="flex flex-col sm:flex-row gap-4 w-full sm:justify-between" > <Button type="button" variant="outline" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white" > Save as Draft </Button> <Button </Button> </div> </CardFooter> </form> </Form> </Card> </div>)
}'"}
<<<<<<< HEAD
=======
}
}
;
>>>>>>> >>>>>>> 
ursor/fix-website-loading-errors-and-merge-6662
}//Call the Supabase Edge Function const {
  data, error ';
}= await supabase.functions.invoke ('talent - profile - enhancer', {
  body: {

  talent_data: {
  name: form_data.name, title: form_data.title, bio: form_data.bio,  skills: skill_tags, location: form_data.location;
});
}else {';
  //Fallback for mock / development mode log_warn ('Mock AI response - using fallback content');
setGeneratedContent ({";
  summary: "Experienced professional with expertise in modern technologies and best practices.";
categorized_skills: {";
  programming: ["JavaScript", "TypeScript", "React" ];";
devops: ["Docker", "CI / CD", "AWS" ];";
platforms: ["Node.js", "Next.js", "Vercel" ];";
soft_skills: ["Communication", "Problem Solving",  "Team Leadership" ];";
other: ["Project Management", "Technical Writing" ];
});

toast ({
}catch (error: any) {';
  logErrorToProduction ('Error generating enhanced profile:', {

  data: error;
});
toast ({
}finally {
  setIsGenerating (false);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

}
//Apply generated content to form const applyGeneratedContent = () =>: any {
  // Check condition
if ( {) {
  $2
}

<<<<<<< HEAD
;

=======

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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
  toast ({
  return;
}setIsSubmitting (true);
try {
  //For actual implementation with Supabase // Check condition
if ( {) {
  $2
}
  try {
  const {
  data: ai_data ';
}= await supabase.functions.invoke ('talent - profile - enhancer', {
  body: {

  talent_data: {
  name: values.name, title: values.title, bio: values.bio,  skills: skill_tags, location: values.location;
});';
//Extract skills from each category and ensure they're strings Object.values (categorized_skills) .for_each (category_skills => {
  if () {) {
  $2
}
  category_skills.for_each (skill => {';
  // Check condition
if ( {) {
  $2
}
});
//Create a unique set of skills final_skills = [...new Set ([...skill_tags, ...ai_skills]) ];
}//Continue with submission even if enhancement fails;
}//Send notification email if we have user email // Check condition
if ( {) {
  $2
}
  sendEnhancementNotification (user.id, user_email);
}, 1500);

//Here would be the actual code to save the profile to Supabase /* const {
  error ';
}= await supabase .from ('talent profiles') .insert ({

  user id: user.id, name: values.name, title: values.title, bio: values.bio, summary: final_summary, location: values.location,  skills: final_skills.map (name => ({
  name, level: 4;
}) ), //Default skill level hourly rate: Number (values.hourly_rate);
availability status: values.availability;
//Other fields would be handled here;
});
// Check condition
if (throw error) {
  $2
}
*/ setIsSubmitting (false);
}";
return (<div className="max - w-4xl mx - auto p - 4 md:p - 6"> <Card className="bg - zion - blue - dark border - zion - blue - light"> <CardHeader> <CardTitle className="text - 2xl text - white">Create Your Talent Profile</CardTitle> <CardDescription className="text - zion - slate"> Showcase your skills and experience to potential clients and employers. </CardDescription> </CardHeader> <Form {
  ...form;
}> <form on_submit= {
  form.handle_submit (on_submit) ";
}> <CardContent className="space - y-8"> {
  /* Basic Information */ ";
}<div className="space - y-4"> <h3 className="text - lg font - medium text - white">Basic Information</h3> <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 6"> <div className="col - span - 1" > <FormField <FormItem> <FormLabel className="text - zion - slate - light">Full Name</FormLabel> <FormControl> <div className="relative"> <UserRound className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" /> <Input /> </div> </FormControl> <FormMessage className="text - red - 400" /> </FormItem>) ";
}/> </div> <div className="col - span - 1" > <FormField <FormItem> <FormLabel className="text - zion - slate - light">Professional Title</FormLabel> <FormControl> <div className="relative"> <Briefcase className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" /> <Input /> </div> </FormControl> <FormMessage className="text - red - 400" /> </FormItem>) ";
}/> </div> <div className="col - span - 1" > <FormField <FormItem> <FormLabel className="text - zion - slate - light">Location</FormLabel> <FormControl> <div className="relative"> <MapPin className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" /> <Input /> </div> </FormControl> <FormMessage className="text - red - 400" /> </FormItem>) ";
}/> </div> <div className="col - span - 1" > <FormField <FormItem> <FormLabel className="text - zion - slate - light">Hourly Rate (USD) </FormLabel> <FormControl> <div className="relative"> <span className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate">$</span> <Input /> </div> </FormControl> <FormMessage className="text - red - 400" /> </FormItem>);
}/> </div> </div> {
  /* Upload Avatar */ ";
}<div className="space - y-2"> <FormLabel className="text - zion - slate - light">Profile Picture</FormLabel> <div className="flex items - center gap - 6"> <div className="relative w - 24 h - 24 rounded - full overflow - hidden bg - zion - blue - light border border - zion - blue - light"> {
  uploaded_avatar ? (<AspectRatio ratio= {
  1 / 1;
}> <img src= {
  uploaded_avatar ";
}alt="Avatar preview" className="w - full h - full object - cover" loading="lazy" /> </AspectRatio>) : (<div className="flex items - center justify - center h - full"> <UserRound className="h - 10 w - 10 text - zion - slate opacity - 50" /> </div>) ";
}</div> <label className="flex items - center justify - center px - 4 py - 2 rounded - md bg - zion - purple hover:bg - zion - purple - dark text - white cursor - pointer transition - colors"> <Upload className="mr - 2 h - 4 w - 4" /> <span > Upload Photo</span> <input type="file" accept="image/*" className="hidden" on_change= {
  handleAvatarUpload ";
}/> </label> </div> <p className="text - sm text - zion - slate"> For best results, use an image at least 400x400 pixels in JPG, PNG, or GIF format. </p> </div> </div> <Separator className="bg - zion - blue - light / 50" /> {
  /* Bio Section */ ";
}<div className="space - y-4"> <h3 className="text - lg font - medium text - white" >Professional Bio</h3> <FormField <FormItem> <FormLabel className="text - zion - slate - light">About Yourself</FormLabel> <FormControl> <Textarea </FormDescription> </FormItem>);
}/> {
  /* AI Enhancement Option */ ";
}<FormField <FormItem className="flex flex - row items - center justify - between p - 3 border border - zion - blue - light bg - zion - blue / 30 rounded - md"> <div className="space - y-0.5"> <FormLabel className="text - white flex items - center"> <Sparkles className="w - 4 h - 4 mr - 2 text - zion - purple" /> AI Profile Enhancement </FormLabel> <FormDescription className="text - zion - slate - light" > Let AI help optimize your profile for better visibility and engagement </FormDescription> </div> <FormControl> <Switch /> </FormControl> </FormItem>) ";
}/> <Button type="button" variant="outline" className="border - zion - purple text - zion - purple hover:bg - zion - purple / 10" on_click={
  generateEnhancedProfile;
}disabled= {
  is_generating;
}> </Button> </div>);
}{
  /* Generated Content Display */;
}{";
  generated_content && (<div className="bg - zion - blue - light / 20 border border - zion - blue - light rounded - md p - 4"> <div className="flex items - center justify - between mb - 3"> <h4 className="text - white font - medium flex items - center"> <Sparkles className="w - 4 h - 4 mr - 2 text - zion - purple" /> AI - Generated Content </h4> <Button type="button" size="sm" className="bg - zion - purple hover:bg - zion - purple - dark text - white" on_click={
  applyGeneratedContent ";
}> <Check className="mr - 1 h - 3 w - 3" /> Apply </Button> </div> <div className="space - y-4"> <div> <h5 className="text - zion - slate - light text - sm mb - 1">Professional Summary</h5> <p className="text - zion - slate italic"> {
  generated_content.summary;
}</p> </div> {";
  generated_content.categorized_skills && (<div> <h5 className="text - zion - slate - light text - sm mb - 1">Categorized Skills</h5> <div className="flex flex - wrap gap - 2 mt - 1"> {
  Object.entries (generated_content.categorized_skills) .map ( ([category, skills]) => (<div key= {
  category ";
}className="flex items - center gap - 2"> <Badge className= {
  `w - fit $ {
  getCategoryColor (category as CategoryType);
}`;

}> {
  category ";
}</Badge> <div className="flex flex - wrap gap - 1"> {
  skills.map ( (skill: string) => (<Badge key= {

                </Button>;
              </div>;
            </CardFooter>;
          </form>;
        </Form>;
      </Card>;
    </div>;
  );

};
//Generate enhanced profile with AI return;
}//Call the Supabase Edge Function const {;
  data, error ';
}= await supabase && supabase.functions.invoke ('talent-profile-enhancer', {;
  body: {;
  talentData: {;
  name: formData && formData.name, title: formData && formData.title, bio: formData && formData.bio,  skills: skillTags, location: formData && formData.location ;

});
}else {';
  //Fallback for mock/development mode logWarn ('Mock AI response - using fallback content');
setGeneratedContent ({";
  summary: "Experienced professional with expertise in modern technologies and best practices.";
categorizedSkills: {";
  programming: ["JavaScript", "TypeScript", "React" ];";
devops: ["Docker", "CI/CD", "AWS" ];";
platforms: ["Node && Node.js", "Next && Next.js", "Vercel" ];";
softSkills: ["Communication", "Problem Solving",  "Team Leadership" ];";
other: ["Project Management", "Technical Writing" ] ;

});
toast ({;


}catch (error: any) {';
  logErrorToProduction ('Error generating enhanced profile:', {;
  data: error ;
});
toast ({;

}finally {;
  setIsGenerating (false) ;

};
//Apply generated content to form const applyGeneratedContent = () => {;
  if (generatedContent) {;
  //Extract all skills from categorized skills and properly type cast them const allCategorizedSkills = generatedContent && generatedContent.categorizedSkills;
const newSkills: string[] = [];
if (Array && Array.isArray (categorySkills) ) {;
  categorySkills && categorySkills.forEach (skill => {';
  if (typeof skill === 'string' && skill && !skillTags && skillTags.includes (skill) ) {;


});

};
//Get category color //Send notification email const sendEnhancementNotification = async (userId: string, email: string) => {;
  try {';
  await supabase && supabase.functions.invoke ('send-email', {;
  body: {'";
  <p>Your profile has been enhanced with AI. You're now more discoverable to recruiters and companies!</p> <p>We've added a professional summary and categorized your skills to help you stand out.</p> <p>You can review and edit these enhancements in your profile dashboard.</p> <div style="margin-top: 30px, padding-top: 20px, border-top: 1px solid #eee, "> <p style="color: #666,  font-size: 12px, ">© $ {;
  new Date () .getFullYear () ;
}Zion Marketplace</p> ;

};
//Handle form submission const onSubmit = async (values: TalentFormValues) => {;
  if (skillTags && skillTags.length === 0) {;
  toast ({;
  return;
}setIsSubmitting (true);
try {;
  //For actual implementation with Supabase if (!user?.id) {;
  try {;
  const {;
  data: aiData ';
}= await supabase && supabase.functions.invoke ('talent-profile-enhancer', {;
  body: {;
  talentData: {;
  name: values && values.name, title: values && values.title, bio: values && values.bio,  skills: skillTags, location: values && values.location ;

});';
//Extract skills from each category and ensure they're strings Object && Object.values (categorizedSkills) .forEach (categorySkills => {;
  if (Array && Array.isArray (categorySkills) ) {;
  categorySkills && categorySkills.forEach (skill => {';
  if (typeof skill === 'string'&& skill) {;


});
//Create a unique set of skills finalSkills = [...new Set ([...skillTags, ...aiSkills]) ] ;
}//Continue with submission even if enhancement fails ;
}//Send notification email if we have user email if (userEmail && values && values.enhancedProfile && user?.id) {;
  sendEnhancementNotification (user && user.id, userEmail) ;

}, 1500);
//Here would be the actual code to save the profile to Supabase /* const {;
  error ';
}= await supabase .from ('talent profiles') .insert ({;
  user id: user && user.id, name: values && values.name, title: values && values.title, bio: values && values.bio, summary: finalSummary, location: values && values.location,  skills: finalSkills && finalSkills.map (name => ({;
  name, level: 4 ;
}) ), //Default skill level hourly rate: Number (values && values.hourlyRate);
availability status: values && values.availability;
//Other fields would be handled here ;
});
if (error) throw error;
*/ setIsSubmitting (false);

};";
return (<div className="max-w-4xl mx-auto p-4 md:p-6"> <Card className="bg-zion-blue-dark border-zion-blue-light"> <CardHeader> <CardTitle className="text-2xl text-white">Create Your Talent Profile</CardTitle> <CardDescription className="text-zion-slate"> Showcase your skills and experience to potential clients and employers. </CardDescription> </CardHeader> <Form{
  ...form 
}> <formonSubmit= {
  form && form.handleSubmit (onSubmit) "
}> <CardContent className="space-y-8"> {;
  /* Basic Information */ ";
}<div className="space-y-4"> <h3 className="text-lg font-medium text-white">Basic Information</h3> <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> <div className="col-span-1" > <FormField <FormItem> <FormLabel className="text-zion-slate-light">Full Name</FormLabel> <FormControl> <div className="relative"> <UserRound className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> <Input /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ";
}/> </div> <div className="col-span-1" > <FormField <FormItem> <FormLabel className="text-zion-slate-light">Professional Title</FormLabel> <FormControl> <div className="relative"> <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> <Input /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ";
}/> </div> <div className="col-span-1" > <FormField <FormItem> <FormLabel className="text-zion-slate-light">Location</FormLabel> <FormControl> <div className="relative"> <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> <Input /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ";
}/> </div> <div className="col-span-1" > <FormField <FormItem> <FormLabel className="text-zion-slate-light">Hourly Rate (USD) </FormLabel> <FormControl> <div className="relative"> <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate">$</span> <Input /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ;
}/> </div> </div> {;
  /* Upload Avatar */ ";
}<div className="space-y-2"> <FormLabel className="text-zion-slate-light">Profile Picture</FormLabel> <div className="flex items-center gap-6"> <div className="relative w-24 h-24 rounded-full overflow-hidden bg-zion-blue-light border border-zion-blue-light"> {;
  uploadedAvatar ? (<AspectRatioratio= {
  1/1 
}> <imgsrc= {
  uploadedAvatar "
}alt="Avatar preview" className="w-full h-full object-cover" loading="lazy" /> </AspectRatio>) : (<div className="flex items-center justify-center h-full"> <UserRound className="h-10 w-10 text-zion-slate opacity-50" /> </div>) ";
}</div> <label className="flex items-center justify-center px-4 py-2 rounded-md bg-zion-purple hover:bg-zion-purple-dark text-white cursor-pointer transition-colors"> <Upload className="mr-2 h-4 w-4" /> <span>Upload Photo</span> <inputtype="file" accept="image/*" className="hidden" onChange= {
  handleAvatarUpload "
}/> </label> </div> <p className="text-sm text-zion-slate"> For best results, use an image at least 400x400 pixels in JPG, PNG, or GIF format. </p> </div> </div> <Separator className="bg-zion-blue-light/50" /> {;
  /* Bio Section */ ";
}<div className="space-y-4"> <h3 className="text-lg font-medium text-white" >Professional Bio</h3> <FormField <FormItem> <FormLabel className="text-zion-slate-light">About Yourself</FormLabel> <FormControl> <Textarea </FormDescription> </FormItem>) ;
}/> {;
  /* AI Enhancement Option */ ";
}<FormField <FormItem className="flex flex-row items-center justify-between p-3 border border-zion-blue-light bg-zion-blue/30 rounded-md"> <div className="space-y-0 && 0.5"> <FormLabel className="text-white flex items-center"> <Sparkles className="w-4 h-4 mr-2 text-zion-purple" /> AI Profile Enhancement </FormLabel> <FormDescription className="text-zion-slate-light" > Let AI help optimize your profile for better visibility and engagement </FormDescription> </div> <FormControl> <Switch /> </FormControl> </FormItem>) ";
}/> <Buttontype="button" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple/10" onClick={
  generateEnhancedProfile 
}disabled= {
  isGenerating 
}> </Button> </div>) ;
}{;
  /* Generated Content Display */ ;
}{";
  generatedContent && (<div className="bg-zion-blue-light/20 border border-zion-blue-light rounded-md p-4"> <div className="flex items-center justify-between mb-3"> <h4 className="text-white font-medium flex items-center"> <Sparkles className="w-4 h-4 mr-2 text-zion-purple" /> AI-Generated Content </h4> <Buttontype="button" size="sm" className="bg-zion-purple hover:bg-zion-purple-dark text-white" onClick={
  applyGeneratedContent "
}> <Check className="mr-1 h-3 w-3" /> Apply </Button> </div> <div className="space-y-4"> <div> <h5 className="text-zion-slate-light text-sm mb-1">Professional Summary</h5> <p className="text-zion-slate italic"> {;
  generatedContent && generatedContent.summary ;
}</p> </div> {";
  generatedContent && generatedContent.categorizedSkills && (<div> <h5 className="text-zion-slate-light text-sm mb-1">Categorized Skills</h5> <div className="flex flex-wrap gap-2 mt-1"> {;
  Object && Object.entries (generatedContent && generatedContent.categorizedSkills) .map ( ([category, skills]) => (<divkey= {
  category "
}className="flex items-center gap-2"> <BadgeclassName= {
  `w-fit $ {
  getCategoryColor (category as CategoryType) 
}` 
}> {;
  category ";
}</Badge> <div className="flex flex-wrap gap-1"> {;
  skills && skills.map ( (skill: string) => (<Badgekey= {
  skill "
}className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none"> {;
  skill ;
}</Badge>) ) ;
}</div> </div>) ) ;
}</div> </div>) ;
}</div> </div>) ";
}</div> <Separator className="bg-zion-blue-light/50" /> {;
  /* Skills and Availability */ ";
}<div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {;
  /* Skills Section */ ";
}<div className="space-y-4"> <h3 className="text-lg font-medium text-white" >Skills & Expertise</h3> <FormField <FormItem> <FormLabel className="text-zion-slate-light">Skills</FormLabel> <div className="flex gap-2"> <FormControl> <Input /> </FormControl> <Buttontype="button" variant="outline" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white" onClick={
  handleAddSkill "
}> Add </Button> </div> <FormDescription className="text-zion-slate"> Press Enter or click Add to include a skill </FormDescription> <FormMessage className="text-red-400" /> </FormItem>) ";
}/> <div className="flex flex-wrap gap-2 mt-2"> {;
  skillTags && skillTags.map (skill => (<Badgekey= {
  skill "
}className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none pl-2 pr-1 py-1 && 1.5 flex items-center gap-1"> {;
  skill ";
}<button className="rounded-full hover:bg-zion-purple-dark/20 p-0 && 0.5" > <X className="h-3 w-3" /> </button> </Badge>) ) ;
}{";
  skillTags && skillTags.length === 0 && (<p className="text-zion-slate text-sm italic">No skills added yet</p>) ;
}</div> </div> {;
  /* Availability Section */ ";
}<div className="space-y-4"> <h3 className="text-lg font-medium text-white" >Availability</h3> <FormField <FormLabel className="text-zion-slate-light">Current Status</FormLabel> <FormControl> <div className="space-y-2"> <div className="flex items-center space-x-2" > <input /> <label htmlFor="available" className="text-white flex items-center gap-2"> <div className="h-2 w-2 rounded-full bg-green-500"></div> Available Now </label> </div> <div className="flex items-center space-x-2" > <input /> <label htmlFor="limited" className="text-white flex items-center gap-2"> <div className="h-2 w-2 rounded-full bg-yellow-500"></div> Limited Availability </label> </div> <div className="flex items-center space-x-2" > <input /> <label htmlFor="unavailable" className="text-white flex items-center gap-2"> <div className="h-2 w-2 rounded-full bg-red-500"></div> Currently Unavailable </label> </div> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ";
}/> </div> </div> </CardContent> <CardFooter className="border-t border-zion-blue-light pt-6"> <div className="flex flex-col sm:flex-row gap-4 w-full sm:justify-between" > <Button type="button" variant="outline" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white" > Save as Draft </Button> <Button </Button> </div> </CardFooter> </form> </Form> </Card> </div>) ;
}'"}

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  skill ";
}className="bg - zion - purple / 20 hover:bg - zion - purple / 30 text - zion - purple border - none" > {
  skill;
}</Badge>) );
}</div> </div>) );
}</div> </div>);
}</div> </div>) ";
}</div> <Separator className="bg - zion - blue - light / 50" /> {
  /* Skills and Availability */ ";
}<div className="grid grid - cols - 1 md:grid - cols - 2 gap - 8"> {
  /* Skills Section */ ";
}<div className="space - y-4"> <h3 className="text - lg font - medium text - white" >Skills & Expertise</h3> <FormField <FormItem> <FormLabel className="text - zion - slate - light">Skills</FormLabel> <div className="flex gap - 2"> <FormControl> <Input /> </FormControl> <Button type="button" variant="outline" className="border - zion - blue - light text - zion - slate - light hover:bg - zion - blue - light hover:text - white" on_click={
  handleAddSkill ";
}> Add </Button> </div> <FormDescription className="text - zion - slate"> Press Enter or click Add to include a skill </FormDescription> <FormMessage className="text - red - 400" /> </FormItem>) ";
}/> <div className="flex flex - wrap gap - 2 mt - 2"> {
  skill_tags.map (skill => (<Badge key= {
  skill ";
}className="bg - zion - purple / 20 hover:bg - zion - purple / 30 text - zion - purple border - none pl - 2 pr - 1 py - 1.5 flex items - center gap - 1" > {
  skill ";
}<button className="rounded - full hover:bg - zion - purple - dark / 20 p - 0.5" > <X className="h - 3 w - 3" /> </button> </Badge>) );
}{";
  skill_tags.length === 0 && (<p className="text - zion - slate text - sm italic">No skills added yet</p>);
}</div> </div> {
  /* Availability Section */ ";
}<div className="space - y-4"> <h3 className="text - lg font - medium text - white" >Availability</h3> <FormField <FormLabel className="text - zion - slate - light">Current Status</FormLabel> <FormControl> <div className="space - y-2"> <div className="flex items - center space - x-2" > <input /> <label html_for="available" className="text - white flex items - center gap - 2"> <div className="h - 2 w - 2 rounded - full bg - green - 500"></div> Available Now </label> </div> <div className="flex items - center space - x-2" > <input /> <label html_for="limited" className="text - white flex items - center gap - 2"> <div className="h - 2 w - 2 rounded - full bg - yellow - 500"></div> Limited Availability </label> </div> <div className="flex items - center space - x-2" > <input /> <label html_for="unavailable" className="text - white flex items - center gap - 2"> <div className="h - 2 w - 2 rounded - full bg - red - 500"></div> Currently Unavailable </label> </div> </div> </FormControl> <FormMessage className="text - red - 400" /> </FormItem>) ";
}/> </div> </div> </CardContent> <CardFooter className="border - t border - zion - blue - light pt - 6"> <div className="flex flex - col sm:flex - row gap - 4 w - full sm:justify - between" > <Button type="button" variant="outline" className="border - zion - blue - light text - zion - slate - light hover:bg - zion - blue - light hover:text - white" > Save as Draft </Button> <Button </Button> </div> </CardFooter> </form> </Form> </Card> </div>);
}'"}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> >>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
