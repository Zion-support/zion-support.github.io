<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx

<<<<<<< HEAD
import React, { useState } from "react",
import { useForm } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import { z } from "zod",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Switch } from "@/components/ui/switch",

  FormMessage} from "@/components/ui/form",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { X, Sparkles, Upload, Clock, Check, Briefcase, MapPin, UserRound } from "lucide-react",
import { toast } from "@/components/ui/use-toast",
import { supabase } from "@/integrations/supabase/client",

// Define form schema

const talentProfileSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  title: z.string().min(5, "Professional title is required"),
  bio: z.string().min(50, "Bio must be at least 50 characters long").max(1000, "Bio cannot exceed 1000 characters"),
  location: z.string().min(2, "Location is required"),
  skills: z.string().min(2, "Enter at least one skill"),
  hourlyRate: z.string().refine((val) => !isNaN(Number(val)), {

interface CategorizedSkills {
  programming: string[]
  devops: string[]
  platforms: string[]
  softSkills: string[]
  other: string[]
=======



// Define form schema

const talentProfileSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
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


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
interface CategorizedSkills {
  programming: string[]
  devops: string[]
  platforms: string[]
  softSkills: string[]
  other: string[]

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
import {X, Sparkles, Upload, Clock, Check, Briefcase, MapPin, UserRound} from "lucide-react";
import {toast} from "@/components/ui/use-toast";
import {supabase} from "@/integrations/supabase/client";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import {useAuth} from "@/hooks/useAuth";
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
  Form;
  FormControl;
  FormDescription;
  FormField;
  FormItem;
  FormLabel;
import { Badge } from "@/components/ui/badge",
import { Separator } from "@/components/ui/separator",
import {
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
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useAuth } from "@/hooks/useAuth";
import { AspectRatio } from "@/components/ui/aspect-ratio",
import { useAuth } from "@/hooks/useAuth",
// Define form schema

const talentProfileSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  title: z.string().min(5, "Professional title is required"),
  bio: z.string().min(50, "Bio must be at least 50 characters long").max(1000, "Bio cannot exceed 1000 characters"),
  location: z.string().min(2, "Location is required"),
  skills: z.string().min(2, "Enter at least one skill"),
  hourlyRate: z.string().refine((val) => !isNaN(Number(val)), {
    message: "Hourly rate must be a number"})
  availability: z.enum(["available", "limited", "unavailable"]);
  enhancedProfile: z.boolean().default(true)})
type TalentFormValues = z.infer<typeof talentProfileSchema>;
type CategoryType = 'programming' | 'devops' | 'platforms' | 'softSkills' | 'other';
    message: "Hourly rate must be a number"}),
  availability: z.enum(["available", "limited", "unavailable"]),
  enhancedProfile: z.boolean().default(true)}),

type TalentFormValues = z.infer<typeof talentProfileSchema>,

type CategoryType = 'programming' | 'devops' | 'platforms' | 'softSkills' | 'other',

interface CategorizedSkills {
  programming: string[]
  devops: string[]
  platforms: string[]
  softSkills: string[]
  other: string[]
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
import { X, Sparkles, Upload, Clock, Check, Briefcase, MapPin, UserRound } from "lucide-react",;
import { toast } from "@/components/ui/use-toast",;
import { supabase } from "@/integrations/supabase/client",;
import { AspectRatio } from "@/components/ui/aspect-ratio",;
import { useAuth } from "@/hooks/useAuth",;
<<<<<<< HEAD

// Define form schema;
const talentProfileSchema = z && z.object({;
  name: z && z.string().min(2, "Name must be at least 2 characters long");
  title: z && z.string().min(5, "Professional title is required");
  bio: z && z.string().min(50, "Bio must be at least 50 characters long").max(1000, "Bio cannot exceed 1000 characters");
  location: z && z.string().min(2, "Location is required");
  skills: z && z.string().min(2, "Enter at least one skill");
  hourlyRate: z && z.string().refine((val) => !isNaN(Number(val)), {;
    message: "Hourly rate must be a number"}),;
  availability: z && z.enum(["available", "limited", "unavailable"]);
  enhancedProfile: z && z.boolean().default(true)}),;
type TalentFormValues = z && z.infer<typeof talentProfileSchema>;
type CategoryType = 'programming' | 'devops' | 'platforms' | 'softSkills' | 'other';
=======
// Define form schema;
const talentProfileSchema = z.object({;
  name: z.string().min(2, "Name must be at least 2 characters long"),;
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface CategorizedSkills {;
  programming: string[],;
  devops: string[],;
  platforms: string[],;
  softSkills: string[],;
  other: string[];
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
interface EnhancedProfile {
  summary: string
  categorizedSkills: CategorizedSkills
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======


export function TalentRegistrationForm() {

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export function TalentRegistrationForm() {
  // Remove the useToast() hook since we're importing the toast function directly
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [skillTags, setSkillTags] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<EnhancedProfile | null>(null);
  const [uploadedAvatar, setUploadedAvatar] = useState<string | null>(null);

export function TalentRegistrationForm() {
  // Remove the useToast() hook since we're importing the toast function directly;
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [skillTags, setSkillTags] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<EnhancedProfile | null>(null);
  const [uploadedAvatar, setUploadedAvatar] = useState<string | null>(null);
  // Remove the useToast() hook since we're importing the toast function directly
  const { user } = useAuth(),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [skillTags, setSkillTags] = useState<string[]>([]),
  const [isGenerating, setIsGenerating] = useState(false),
  const [generatedContent, setGeneratedContent] = useState<EnhancedProfile | null>(null),
  const [uploadedAvatar, setUploadedAvatar] = useState<string | null>(null),
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  // Initialize form with default values
  const form = useForm<TalentFormValues>({
    resolver: zodResolver(talentProfileSchema)
    defaultValues: {
      name: user?.displayName |""
      title: ""
      bio: ""
      location: ""
      skills: ""
      hourlyRate: ""
      availability: "available"
      enhancedProfile: true}})
  // Handle adding skill tags
  const handleAddSkill = () => {
<<<<<<< HEAD
    const skillInput = form.getValues("skills");
    if (skillInput && !skillTags.includes(skillInput)) {


=======
=======
    const skillInput = form.getValues("skills"),
    if (skillInput && !skillTags.includes(skillInput)) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      setSkillTags([...skillTags, skillInput]),
      form.setValue("skills", "")
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }
  // Handle removing skill tags
  const handleRemoveSkill = (skill: string) => {
    setSkillTags(skillTags.filter((s) => s !== skill))
  }
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  },

  // Handle removing skill tags
  const handleRemoveSkill = (skill: string) => {
    setSkillTags(skillTags.filter((s) => s !== skill))
  },

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  // Handle key press in skills input (add on enter)
  const handleSkillKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      handleAddSkill()
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
  };

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    }
  }
  // Handle avatar upload
  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setUploadedAvatar(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }
  // Generate enhanced profile with AI
  const generateEnhancedProfile = async () => {
    const formData = form.getValues();
    if (!formData.bio |formData.bio.length < 20) {
  };
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
;
export function TalentRegistrationForm() {;
  // Remove the useToast() hook since we're importing the toast function directly;
  const { user } = useAuth(),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [skillTags, setSkillTags] = useState<string[]>([]),;
  const [isGenerating, setIsGenerating] = useState(false),;
  const [generatedContent, setGeneratedContent] = useState<EnhancedProfile | null>(null),;
  const [uploadedAvatar, setUploadedAvatar] = useState<string | null>(null),;
<<<<<<< HEAD

========
}
interface EnhancedProfile {;
  summary: string,;
  categorizedSkills: CategorizedSkills;
}
export function TalentRegistrationForm() {;
  // Remove the useToast() hook since we're importing the toast function directly;
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [skillTags, setSkillTags] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<EnhancedProfile | null>(null);
  const [uploadedAvatar, setUploadedAvatar] = useState<string | null>(null);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  // Initialize form with default values;
  const form = useForm<TalentFormValues>({;
    resolver: zodResolver(talentProfileSchema),;
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
<<<<<<< HEAD
    const skillInput = form && form.getValues("skills");
    if (skillInput && !skillTags && skillTags.includes(skillInput)) {;
      setSkillTags([...skillTags, skillInput]);
      form && form.setValue("skills", "");
    }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx

=======
    const skillInput = form.getValues("skills"),;
    if (skillInput && !skillTags.includes(skillInput)) {;
      setSkillTags([...skillTags, skillInput]),;
      form.setValue("skills", "");
    }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  // Generate enhanced profile with AI
  const generateEnhancedProfile = async () => {
<<<<<<< HEAD
    const formData = form.getValues(),
    if (!formData.bio || formData.bio.length < 20) {

=======
    const formData = form.getValues();
    if (!formData.bio |formData.bio.length < 20) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

  // Generate enhanced profile with AI
  const generateEnhancedProfile = async () => {
    const formData = form.getValues(),
    if (!formData.bio || formData.bio.length < 20) {
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      toast({
        title: "More information needed"
        description: "Please provide at least a detailed bio before generating enhanced content."})
      return
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
  };
  // Handle removing skill tags;
  const handleRemoveSkill = (skill: string) => {;
    setSkillTags(skillTags && skillTags.filter((s) => s !== skill));
  };
  // Handle key press in skills input (add on enter);
  const handleSkillKeyPress = (e: React && React.KeyboardEvent) => {;
    if (e && e.key === "Enter") {;
      e && e.preventDefault(),;
      handleAddSkill();
    }
  };
  // Handle avatar upload;
  const handleAvatarUpload = (e: React && React.ChangeEvent<HTMLInputElement>) => {;
    const file = e && e.target.files?.[0];
    if (file) {;
      const reader = new FileReader(),;
      reader && reader.onloadend = () => {;
        setUploadedAvatar(reader && reader.result as string);
      };
      reader && reader.readAsDataURL(file);
    }
  };
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx

=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  },;

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
  // Generate enhanced profile with AI;
  const generateEnhancedProfile = async () => {;
    const formData = form && form.getValues();
    if (!formData && formData.bio || formData && formData.bio.length < 20) {;
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    }
    try {
      setIsGenerating(true);
      // Call the Supabase Edge Function
      const { data, error } = await supabase.functions.invoke('talent-profile-enhancer', {
        body: {
          talentData: {
            name: formData.name
            title: formData.title
            bio: formData.bio
            skills: skillTags
            location: formData.location
          }
        }
      });
      if (error) {
        throw new Error(error.message)
      }
      setGeneratedContent(data as EnhancedProfile);
  },;
  // Generate enhanced profile with AI;
  const generateEnhancedProfile = async () => {;
    const formData = form.getValues(),;
    if (!formData.bio || formData.bio.length < 20) {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      toast({;
        title: "More information needed",;
        description: "Please provide at least a detailed bio before generating enhanced content."}),;
      return;
    }
<<<<<<< HEAD
    try {;
      setIsGenerating(true);
      // Call the Supabase Edge Function;
      const { data, error } = await supabase && supabase.functions.invoke('talent-profile-enhancer', {;
        body: {;
          talentData: {;
            name: formData && formData.name,;
            title: formData && formData.title,;
            bio: formData && formData.bio,;
            skills: skillTags,;
            location: formData && formData.location;
          }
        }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx

      }),;
      if (error) {;
        throw new Error(error.message);

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      }
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

<<<<<<< HEAD
      setGeneratedContent(data as EnhancedProfile),

=======
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
      }

      setGeneratedContent(data as EnhancedProfile),
      
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      toast({
        title: "Enhanced Profile Generated"
        description: "AI has created a professional bio and suggested additional skills for your profile."})
    } catch (error: any) {
      console.error("Error generating enhanced profile:", error),
      toast({
        title: "Generation failed"
        description: error.message |"There was an error generating your enhanced profile. Please try again."
        variant: "destructive"})
    } finally {
      setIsGenerating(false)
    }
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }
  // Apply generated content to form
  const applyGeneratedContent = () => {
    if (generatedContent) {
      form.setValue("bio", generatedContent.summary);
      // Extract all skills from categorized skills and properly type cast them
      const allCategorizedSkills = generatedContent.categorizedSkills;
      const newSkills: string[] = []
  },

  // Apply generated content to form
  const applyGeneratedContent = () => {
    if (generatedContent) {
      form.setValue("bio", generatedContent.summary),
      
      // Extract all skills from categorized skills and properly type cast them
      const allCategorizedSkills = generatedContent.categorizedSkills,
      const newSkills: string[] = [],
      
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      // Safely extract and flatten skills from each category
      Object.values(allCategorizedSkills).forEach(categorySkills => {
        if (Array.isArray(categorySkills)) {
          categorySkills.forEach(skill => {
            if (typeof skill === 'string' && skill && !skillTags.includes(skill)) {
              newSkills.push(skill)
<<<<<<< HEAD
<<<<<<< HEAD

=======
========
      });
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
      if (error) {;
        throw new Error(error && error.message);
      }
      setGeneratedContent(data as EnhancedProfile);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
import React, { useState } from './react';
import { use_form } from './react - hook - form';
import { zod_resolver } from '@hookform / resolvers / zod';
import { z } from './zod';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
import { Textarea } from '@/components / ui / textarea';
import { Switch } from '@/components / ui / switch';
import { Badge } from '@/components / ui / badge';
import { Separator } from '@/components / ui / separator';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components / ui / form';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components / ui / card';
import { X, Sparkles, Upload, Clock, Check, Briefcase, MapPin, UserRound } from './lucide-react';
import { toast } from '@/components / ui / use - toast';
import { supabase } from '@/integrations / supabase / client';
import { AspectRatio } from '@/components / ui / aspect - ratio';
import { use_auth } from '@/hooks / use_auth';
// Define form schema;
const talentProfileSchema = z.object ({
  name: z.string ().min (2, "Name must be at least 2 characters long");
  title: z.string ().min (5, "Professional title is required");
  bio: z.string ().min (50, "Bio must be at least 50 characters long").max (1000, "Bio cannot exceed 1000 characters");
  location: z.string ().min (2, "Location is required");
  skills: z.string ().min (2, "Enter at least one skill");
  hourly_rate: z.string ().refine ((val) => !isNaN (Number (val)), {
    message: "Hourly rate must be a number"}),
  availability: z.enum (["available", "limited", "unavailable"]);
  enhanced_profile: z.boolean ().default (true)}),
type TalentFormValues = z.infer < typeof talentProfileSchema>;
;
type CategoryType = 'programming' | 'devops' | 'platforms' | 'soft_skills' | 'other';
;
interface CategorizedSkills {
  programming: string[],
  devops: string[],
  platforms: string[],
  soft_skills: string[],
  other: string[];
}
interface EnhancedProfile {
  summary: string,
  categorized_skills: CategorizedSkills;
}
export /**
 * TalentRegistrationForm - Function description
 */
function TalentRegistrationForm() {
  // Remove the use_toast () hook since we're importing the toast function directly;
  const { user } = use_auth ();
  const [is_submitting, setIsSubmitting] = useState (false);
  const [skill_tags, setSkillTags] = useState < string[]>([]);
  const [is_generating, setIsGenerating] = useState (false);
  const [generated_content, setGeneratedContent] = useState < EnhancedProfile | null>(null);
  const [uploaded_avatar, setUploadedAvatar] = useState < string | null>(null);
;
  // Initialize form with default values;
  const form = use_form < TalentFormValues>({
    resolver: zod_resolver (talentProfileSchema),
    default_values: {
      name: user?.display_name || "",
      title: "",
      bio: "",
      location: "",
      skills: "",
      hourly_rate: "",
      availability: "available",
      enhanced_profile: true}}),
  // Handle adding skill tags;
  const handleAddSkill = () =>: any {
    const skill_input = form.get_values ("skills");
    if () {) {
  $2
}
      setSkillTags ([...skill_tags, skill_input]);
      form.set_value ("skills", "");
    }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            }
          });
        }

<<<<<<< HEAD
=======

========
  }
;
  // Handle removing skill tags;
  const handleRemoveSkill = (skill: string) =>: any {
    setSkillTags (skill_tags.filter ((s) => s !== skill));
  }
;
  // Handle key press in skills input (add on enter);
  const handleSkillKeyPress = (e: React.KeyboardEvent) =>: any {
    // Check condition
if ( {) {
  $2
}
      e.prevent_default (),
      handleAddSkill ();
    }
  }
;
  // Handle avatar upload;
  const handleAvatarUpload = (e: React.ChangeEvent < HTMLInputElement>) =>: any {
    const file = e.target.files?.[0];
    // Check condition
if ( {) {
  $2
}
      const reader = new FileReader (),
      reader.onloadend = () => {
        setUploadedAvatar (reader.result as string);
      }
      reader.readAsDataURL (file);
    }
  }
;
  // Generate enhanced profile with AI;
  const generateEnhancedProfile = async () => {
    const form_data = form.get_values ();
    // Check condition
if ( {) {
  $2
}
      toast ({
        title: "More information needed",
        description: "Please provide at least a detailed bio before generating enhanced content."}),
      return;
    }
    try {
      setIsGenerating (true);
;
      // Call the Supabase Edge Function;
      const { data, error } = await supabase.functions.invoke ('talent - profile - enhancer', {
        body: {
          talent_data: {
            name: form_data.name,
            title: form_data.title,
            bio: form_data.bio,
            skills: skill_tags,
            location: form_data.location;
          }
        }
      });
;
      // Check condition
if ( {) {
  $2
}
        throw new Error (error.message);
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
import { X, Sparkles, Upload, Clock, Check, Briefcase, MapPin, UserRound } from "lucide-react",;
import { toast } from "@/components/ui/use-toast",;
import { supabase } from "@/integrations/supabase/client",;
import { AspectRatio } from "@/components/ui/aspect-ratio",;
import { useAuth } from "@/hooks/useAuth",;
;
// Define form schema;
const talentProfileSchema = z.object({;
  name:z.string().min(2, "Name must be at least 2 characters long"),;
  title:z.string().min(5, "Professional title is required"),;
  bio:z.string().min(50, "Bio must be at least 50 characters long").max(1000, "Bio cannot exceed 1000 characters"),;
  location:z.string().min(2, "Location is required"),;
  skills:z.string().min(2, "Enter at least one skill"),;
  hourlyRate:z.string().refine((val) => !isNaN(Number(val)), {;
    message:"Hourly rate must be a number"}),;
  availability:z.enum(["available", "limited", "unavailable"]),;
  enhancedProfile:z.boolean().default(true)}),;
;
type TalentFormValues = z.infer<typeof talentProfileSchema>,;
;
type CategoryType = 'programming' | 'devops' | 'platforms' | 'softSkills' | 'other',;
;
interface CategorizedSkills {;
  programming:string[],;
  devops:string[],;
  platforms:string[],;
  softSkills:string[],;
  other:string[];}
;
interface EnhancedProfile {;
  summary:string,;
  categorizedSkills:CategorizedSkills;
}
;
export function TalentRegistrationForm() {;
  // Remove the useToast() hook since we're importing the toast function directly;
  const { user } = useAuth(),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [skillTags, setSkillTags] = useState<string[]>([]),;
  const [isGenerating, setIsGenerating] = useState(false),;
  const [generatedContent, setGeneratedContent] = useState<EnhancedProfile | null>(null),;
  const [uploadedAvatar, setUploadedAvatar] = useState<string | null>(null),;
  ;
  // Initialize form with default values;
  const form = useForm<TalentFormValues>({;
    resolver:zodResolver(talentProfileSchema),;
    defaultValues:{;
      name:user?.displayName || "",;
      title:"",;
      bio:"",;
      location:"",;
      skills:"",;
      hourlyRate:"",;
      availability:"available",;
      enhancedProfile:true}}),;
;
  // Handle adding skill tags;
  const handleAddSkill = () => {;
    const skillInput = form.getValues("skills"),;
    if (skillInput && !skillTags.includes(skillInput)) {;
      setSkillTags([...skillTags, skillInput]),;
      form.setValue("skills", ""),;
    }
  },;
;
  // Handle removing skill tags;
  const handleRemoveSkill = (skill:string) => {;
    setSkillTags(skillTags.filter((s) => s !== skill));
  },;
;
  // Handle key press in skills input (add on enter);
  const handleSkillKeyPress = (e:React.KeyboardEvent) => {;
    if (e.key === "Enter") {;
      e.preventDefault(),;
      handleAddSkill();
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
      const { data, error } = await supabase.functions.invoke('talent-profile-enhancer', {;
        body:{;
          talentData:{;
            name:formData.name,;
            title:formData.title,;
            bio:formData.bio,;
            skills:skillTags,;
            location:formData.location;
          }
        }
      }),;
;
      if (error) {;
        throw new Error(error.message),;
      }
;
      setGeneratedContent(data as EnhancedProfile),;
      ;
      toast({;
        title:"Enhanced Profile Generated",;
        description:"AI has created a professional bio and suggested additional skills for your profile."}),;
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
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
;
      setGeneratedContent(data as EnhancedProfile),;
      toast({;
        title: "Enhanced Profile Generated",;
        description: "AI has created a professional bio and suggested additional skills for your profile."});
    } catch (error: any) {;
      console.error("Error generating enhanced profile:", error),;
      toast({;
        title: "Generation failed",;
        description: error.message || "There was an error generating your enhanced profile. Please try again.",;
        variant: "destructive"});
    } finally {;
      setIsGenerating(false);
    }
  },;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  // Apply generated content to form;
  const applyGeneratedContent = () => {;
    if (generatedContent) {;
      form.setValue("bio", generatedContent.summary),;
<<<<<<< HEAD
      ;
      // Extract all skills from categorized skills and properly type cast them;
      const allCategorizedSkills = generatedContent.categorizedSkills,;
      const newSkills:string[] = [],;
      ;
=======
      // Extract all skills from categorized skills and properly type cast them;
      const allCategorizedSkills = generatedContent.categorizedSkills,;
      const newSkills: string[] = [],;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      // Safely extract and flatten skills from each category;
      Object.values(allCategorizedSkills).forEach(categorySkills => {;
        if (Array.isArray(categorySkills)) {;
          categorySkills.forEach(skill => {;
            if (typeof skill === 'string' && skill && !skillTags.includes(skill)) {;
              newSkills.push(skill);
<<<<<<< HEAD
<<<<<<< HEAD
            }
          }),;
        }
      }),;
        ;
      if (newSkills.length > 0) {;
        setSkillTags([...skillTags, ...newSkills]),;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      }
      setGeneratedContent (data as EnhancedProfile);
;
      toast ({
        title: "Enhanced Profile Generated",
        description: "AI has created a professional bio and suggested additional skills for your profile."});
    } catch (error: any) {
      console.error ("Error generating enhanced profile:", error);
      toast ({
        title: "Generation failed",
        description: error.message || "There was an error generating your enhanced profile. Please try again.",
        variant: "destructive"});
    } finally {
      setIsGenerating (false);
    }
<<<<<<< HEAD
  }
      toast({;
        title: "Enhanced Profile Generated",;
        description: "AI has created a professional bio and suggested additional skills for your profile."});
    } catch (error: any) {;
      console && console.error("Error generating enhanced profile:", error);
      toast({;
        title: "Generation failed",;
        description: error && error.message || "There was an error generating your enhanced profile. Please try again.",;
        variant: "destructive"});
    } finally {;
      setIsGenerating(false);
    }
  };
  // Apply generated content to form;
  const applyGeneratedContent = () => {;
    if (generatedContent) {;
      form && form.setValue("bio", generatedContent && generatedContent.summary);
      // Extract all skills from categorized skills and properly type cast them;
      const allCategorizedSkills = generatedContent && generatedContent.categorizedSkills;
      const newSkills: string[] = [],;
      // Safely extract and flatten skills from each category;
      Object && Object.values(allCategorizedSkills).forEach(categorySkills => {;
        if (Array && Array.isArray(categorySkills)) {;
          categorySkills && categorySkills.forEach(skill => {;
            if (typeof skill === 'string' && skill && !skillTags && skillTags.includes(skill)) {;
              newSkills && newSkills.push(skill);
;
  // Apply generated content to form;
  const applyGeneratedContent = () =>: any {
    // Check condition
if ( {) {
  $2
}
      form.set_value ("bio", generated_content.summary);
;
      // Extract all skills from categorized skills and properly type cast them;
      const allCategorizedSkills = generated_content.categorized_skills;
      const new_skills: string[] = [],
      // Safely extract and flatten skills from each category;
      Object.values (allCategorizedSkills).for_each (category_skills => {
        if () {) {
  $2
}
          category_skills.for_each (skill => {
            if () {) {
  $2
}
              new_skills.push (skill);
            }
          });
        }
      });
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
      if (newSkills && newSkills.length > 0) {;
        setSkillTags([...skillTags, ...newSkills]);
      }
    }
  };
  // Get category color;
  const getCategoryColor = (category: CategoryType) => {;
    switch (category) {;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            }
          })
        }
      });
      if (newSkills.length > 0) {
        setSkillTags([...skillTags, ...newSkills])
      }
    }
  }
  // Get category color
  const getCategoryColor = (category: CategoryType) => {
    switch (category) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      case 'programming': return 'bg-blue-500/20 hover:bg-blue-500/30 text-blue-500';
      case 'devops': return 'bg-green-500/20 hover:bg-green-500/30 text-green-500';
      case 'platforms': return 'bg-amber-500/20 hover:bg-amber-500/30 text-amber-500';
      case 'softSkills': return 'bg-purple-500/20 hover:bg-purple-500/30 text-purple-500';
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx


  };

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
      case 'other': return 'bg-gray-500/20 hover:bg-gray-500/30 text-gray-500'
      default: return 'bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple'
    }
  }
  };
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      }),;
      if (newSkills.length > 0) {;
        setSkillTags([...skillTags, ...newSkills]);
      }
    }
  },;
  // Get category color;
  const getCategoryColor = (category: CategoryType) => {;
    switch (category) {;
      case 'programming': return 'bg-blue-500/20 hover:bg-blue-500/30 text-blue-500',;
      case 'devops': return 'bg-green-500/20 hover:bg-green-500/30 text-green-500',;
      case 'platforms': return 'bg-amber-500/20 hover:bg-amber-500/30 text-amber-500',;
      case 'softSkills': return 'bg-purple-500/20 hover:bg-purple-500/30 text-purple-500',;
      case 'other': return 'bg-gray-500/20 hover:bg-gray-500/30 text-gray-500',;
      default: return 'bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple';
    }
  },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  // Send notification email
  const sendEnhancementNotification = async (userId: string, email: string) => {
    try {
      await supabase.functions.invoke('send-email', {
        body: {
          to: email
          subject: "Your Zion Talent Profile Has Been Enhanced"
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
      })
    } catch (error) {
      console.error("Failed to send notification email:", error)
    }
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }
  },

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  // Handle form submission
  const onSubmit = async (values: TalentFormValues) => {
    if (skillTags.length === 0) {
      toast({
        title: "Skills required"
        description: "Please add at least one skill to your profile."
        variant: "destructive"})
      return
    }
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    setIsSubmitting(true);

    setIsSubmitting(true),

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    try {
      // For actual implementation with Supabase
      if (!user?.id) {
        throw new Error("User not authenticated")
      }
      // Enhance profile if not already done
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      let finalSummary = "";
      let finalSkills = skillTags;
      let finalSummary = "",
      let finalSkills = skillTags,
      
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      if (values.enhancedProfile && !generatedContent) {
        try {
          const { data: aiData } = await supabase.functions.invoke('talent-profile-enhancer', {
            body: {
              talentData: {
                name: values.name
                title: values.title
                bio: values.bio
                skills: skillTags
                location: values.location
<<<<<<< HEAD
<<<<<<< HEAD

=======




>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  // Send notification email
  const sendEnhancementNotification = async (userId: string, email: string) => {
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
;
      // Check condition
if ( {) {
  $2
}
        setSkillTags ([...skill_tags, ...new_skills]);
      }
    }
  }
;
  // Get category color;
  const getCategoryColor = (category: CategoryType) =>: any {
    switch (category) {
      case 'programming': return 'bg - blue - 500 / 20 hover:bg - blue - 500 / 30 text - blue - 500';
      case 'devops': return 'bg - green - 500 / 20 hover:bg - green - 500 / 30 text - green - 500';
      case 'platforms': return 'bg - amber - 500 / 20 hover:bg - amber - 500 / 30 text - amber - 500';
      case 'soft_skills': return 'bg - purple - 500 / 20 hover:bg - purple - 500 / 30 text - purple - 500';
      case 'other': return 'bg - gray - 500 / 20 hover:bg - gray - 500 / 30 text - gray - 500',
      default: return 'bg - zion - purple / 20 hover:bg - zion - purple / 30 text - zion - purple';
    }
  }
;
  // Send notification email;
  const sendEnhancementNotification = async (user_id: string, email: string) => {
    try {
      await supabase.functions.invoke ('send - email', {
        body: {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx

      case 'other': return 'bg-gray-500/20 hover:bg-gray-500/30 text-gray-500',;
      default: return 'bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple';
    }

========
      case 'other': return 'bg-gray-500/20 hover:bg-gray-500/30 text-gray-500',;
      default: return 'bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple';
    }
  };
  // Send notification email;
  const sendEnhancementNotification = async (userId: string, email: string) => {;
    try {;
      await supabase && supabase.functions.invoke('send-email', {;
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              }
            }
          });
          if (aiData) {
            finalSummary = (aiData as EnhancedProfile).summary;
            // Safely merge AI suggested skills with user-provided skills
            const categorizedSkills = (aiData as EnhancedProfile).categorizedSkills;
            const aiSkills: string[] = []
            // Extract skills from each category and ensure they're strings
            Object.values(categorizedSkills).forEach(categorySkills => {
              if (Array.isArray(categorySkills)) {
                categorySkills.forEach(skill => {
                  if (typeof skill === 'string' && skill) {
                    aiSkills.push(skill)
  },;
  // Send notification email;
  const sendEnhancementNotification = async (userId: string, email: string) => {;
    try {;
      await supabase.functions.invoke('send-email', {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
        }
      });
    } catch (error) {;
      console && console.error("Failed to send notification email:", error);
    }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
  };
  // Handle form submission;
  const onSubmit = async (values: TalentFormValues) => {;
    if (skillTags && skillTags.length === 0) {;
=======
        }
      });
    } catch (error) {;
      console.error("Failed to send notification email:", error);
    }
  },;
  // Handle form submission;
  const onSubmit = async (values: TalentFormValues) => {;
    if (skillTags.length === 0) {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      toast({;
        title: "Skills required",;
        description: "Please add at least one skill to your profile.",;
        variant: "destructive"}),;
      return;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx

    }
    setIsSubmitting(true);

========
    }
    setIsSubmitting(true);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
          to: email,
          subject: "Your Zion Talent Profile Has Been Enhanced",
          html: `;
          <div style="font - family: Arial, sans - serif, max - width: 600px, margin: 0 auto, ">;
            <h2 style="color: #6D28D9, ">Profile Enhancement Complete</h2>;
            <p > Your profile has been enhanced with AI. You're now more discoverable to recruiters and companies!</p>;
            <p > We've added a professional summary and categorized your skills to help you stand out.</p>;
            <p > You can review and edit these enhancements in your profile dashboard.</p>;
            <div style="margin - top: 30px, padding - top: 20px, border - top: 1px solid #eee, ">;
              <p style="color: #666, font - size: 12px, ">© ${new Date ().getFullYear ()} Zion Marketplace</p>;
            </div>;
          </div>;
          `;
        }
      });
    } catch (error) {
      console.error ("Failed to send notification email:", error);
    }
  }
;
  // Handle form submission;
  const on_submit = async (values: TalentFormValues) => {
    // Check condition
if ( {) {
  $2
}
      toast ({
        title: "Skills required",
        description: "Please add at least one skill to your profile.",
        variant: "destructive"}),
      return;
    }
    setIsSubmitting (true);
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
    try {
      // For actual implementation with Supabase;
      // Check condition
if ( {) {
  $2
}
        throw new Error ("User not authenticated");
      }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
      // Enhance profile if not already done;
      let final_summary = "";
      let final_skills = skill_tags;
;
      // Check condition
if ( {) {
  $2
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx

        try {
          const { data: ai_data } = await supabase.functions.invoke ('talent - profile - enhancer', {
            body: {


========
        try {
          const { data: ai_data } = await supabase.functions.invoke ('talent - profile - enhancer', {
            body: {
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
=======
    }
;
    setIsSubmitting(true),;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    try {;
      // For actual implementation with Supabase;
      if (!user?.id) {;
        throw new Error("User not authenticated");
      }
<<<<<<< HEAD
      // Enhance profile if not already done;
      let finalSummary = "";
      let finalSkills = skillTags;
      if (values && values.enhancedProfile && !generatedContent) {;
        try {;
          const { data: aiData } = await supabase && supabase.functions.invoke('talent-profile-enhancer', {;
            body: {;
              talentData: {;
                name: values && values.name,;
                title: values && values.title,;
                bio: values && values.bio,;
                skills: skillTags,;
                location: values && values.location;
              }
            }
          });
          if (aiData) {;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx

            finalSummary = (aiData as EnhancedProfile).summary;
            // Safely merge AI suggested skills with user-provided skills;
            const categorizedSkills = (aiData as EnhancedProfile).categorizedSkills;

========
            finalSummary = (aiData as EnhancedProfile).summary;
            // Safely merge AI suggested skills with user-provided skills;
            const categorizedSkills = (aiData as EnhancedProfile).categorizedSkills;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
            const aiSkills: string[] = [],;
            // Extract skills from each category and ensure they're strings;
            Object && Object.values(categorizedSkills).forEach(categorySkills => {;
              if (Array && Array.isArray(categorySkills)) {;
                categorySkills && categorySkills.forEach(skill => {;
                  if (typeof skill === 'string' && skill) {;
                    aiSkills && aiSkills.push(skill);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
              talent_data: {
                name: values.name,
                title: values.title,
                bio: values.bio,
                skills: skill_tags,
                location: values.location;
              }
            }
          });
;
          // Check condition
if ( {) {
  $2
}
            final_summary = (ai_data as EnhancedProfile).summary;
            // Safely merge AI suggested skills with user - provided skills;
            const categorized_skills = (ai_data as EnhancedProfile).categorized_skills;
            const ai_skills: string[] = [],
            // Extract skills from each category and ensure they're strings;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx

=======
;
      // Enhance profile if not already done;
      let finalSummary = "",;
      let finalSkills = skillTags,;
      if (values.enhancedProfile && !generatedContent) {;
        try {;
          const { data: aiData } = await supabase.functions.invoke('talent-profile-enhancer', {;
            body: {;
              talentData: {;
                name: values.name,;
                title: values.title,;
                bio: values.bio,;
                skills: skillTags,;
                location: values.location;
              }
            }
          }),;
          if (aiData) {;
            finalSummary = (aiData as EnhancedProfile).summary,;
            // Safely merge AI suggested skills with user-provided skills;
            const categorizedSkills = (aiData as EnhancedProfile).categorizedSkills,;
            const aiSkills: string[] = [],;
            // Extract skills from each category and ensure they're strings;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            Object.values(categorizedSkills).forEach(categorySkills => {;
              if (Array.isArray(categorySkills)) {;
                categorySkills.forEach(skill => {;
                  if (typeof skill === 'string' && skill) {;
                    aiSkills.push(skill);
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  }
                });
              }

<<<<<<< HEAD
=======

            // Create a unique set of skills;
            finalSkills = [...new Set([...skillTags, ...aiSkills])];

========
            Object.values (categorized_skills).for_each (category_skills => {
              if () {) {
  $2
}
                category_skills.for_each (skill => {
                  // Check condition
if ( {) {
  $2
}
                    ai_skills.push (skill);
                  }
                });
              }
            });
            // Create a unique set of skills;
            finalSkills = [...new Set([...skillTags, ...aiSkills])];
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
          }
=======

            }),;
            // Create a unique set of skills;
            finalSkills = [...new Set([...skillTags, ...aiSkills])];

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  }
                })
              }
            });
            // Create a unique set of skills
            finalSkills = [...new Set([...skillTags, ...aiSkills])]
            }),;
            // Create a unique set of skills;
            finalSkills = [...new Set([...skillTags, ...aiSkills])];
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          }
        } catch (error) {
          console.error("Error enhancing profile:", error),
          // Continue with submission even if enhancement fails
          finalSummary = ""
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        } catch (error) {;
          console && console.error("Error enhancing profile:", error);
          // Continue with submission even if enhancement fails;
          finalSummary = "";



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        }
      } else if (generatedContent) {;
        finalSummary = generatedContent && generatedContent.summary;
      }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
<<<<<<< HEAD

=======


=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        } catch (error) {;
          console.error("Error enhancing profile:", error),;
          // Continue with submission even if enhancement fails;
          finalSummary = "";
        }
      } else if (generatedContent) {
        finalSummary = generatedContent.summary
      }
      // Get user email for notification
      const { data: userData } = await supabase.auth.getUser()
      const userEmail = userData.user?.email;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

      // Get user email for notification
      const { data: userData } = await supabase.auth.getUser(),
      const userEmail = userData.user?.email,

<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      // Create the talent profile
      // In a real implementation, this would save to Supabase
      setTimeout(() => {
        toast({
          title: "Profile Created Successfully"
          description: "Your talent profile has been published and is now visible in the directory."})
        // Send notification email if we have user email
        if (userEmail && values.enhancedProfile) {
          sendEnhancementNotification(user.id, userEmail)
        }
        setIsSubmitting(false)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======


      }, 1500),



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      }, 1500);
      }, 1500),

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
      // Get user email for notification;
      const { data: userData } = await supabase && supabase.auth.getUser(),;
      const userEmail = userData && userData.user?.email;
=======
  },;
;
  // Get category color;
  const getCategoryColor = (category:CategoryType) => {;
    switch (category) {;
      case 'programming':return 'bg-blue-500/20 hover:bg-blue-500/30 text-blue-500',;
      case 'devops':return 'bg-green-500/20 hover:bg-green-500/30 text-green-500',;
      case 'platforms':return 'bg-amber-500/20 hover:bg-amber-500/30 text-amber-500',;
      case 'softSkills':return 'bg-purple-500/20 hover:bg-purple-500/30 text-purple-500',;
      case 'other':return 'bg-gray-500/20 hover:bg-gray-500/30 text-gray-500',;
      default:return 'bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple';
    }
  },;
;
  // Send notification email;
  const sendEnhancementNotification = async (userId:string, email:string) => {;
    try {;
      await supabase.functions.invoke('send-email', {;
        body:{;
          to:email,;
          subject:"Your Zion Talent Profile Has Been Enhanced",;
          html:`;
          <div style="font-family:Arial, sans-serif, max-width:600px, margin:0 auto,">;
            <h2 style="color:#6D28D9,">Profile Enhancement Complete</h2>;
            <p>Your profile has been enhanced with AI. You're now more discoverable to recruiters and companies!</p>;
            <p>We've added a professional summary and categorized your skills to help you stand out.</p>;
            <p>You can review and edit these enhancements in your profile dashboard.</p>;
            <div style="margin-top:30px, padding-top:20px, border-top:1px solid #eee,">;
              <p style="color:#666, font-size:12px,">© ${new Date().getFullYear()} Zion Marketplace</p>;
            </div>;
          </div>;
          `;
        }
      }),;
    } catch (error) {;
      console.error("Failed to send notification email:", error),;
    }
  },;
;
  // Handle form submission;
  const onSubmit = async (values:TalentFormValues) => {;
    if (skillTags.length === 0) {;
      toast({;
        title:"Skills required",;
        description:"Please add at least one skill to your profile.",;
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
      let finalSummary = "",;
      let finalSkills = skillTags,;
      ;
      if (values.enhancedProfile && !generatedContent) {;
        try {;
          const { data:aiData } = await supabase.functions.invoke('talent-profile-enhancer', {;
            body:{;
              talentData:{;
                name:values.name,;
                title:values.title,;
                bio:values.bio,;
                skills:skillTags,;
                location:values.location;
              }
            }
          }),;
          ;
          if (aiData) {;
            finalSummary = (aiData as EnhancedProfile).summary,;
            // Safely merge AI suggested skills with user-provided skills;
            const categorizedSkills = (aiData as EnhancedProfile).categorizedSkills,;
            const aiSkills:string[] = [],;
            ;
            // Extract skills from each category and ensure they're strings;
            Object.values(categorizedSkills).forEach(categorySkills => {;
              if (Array.isArray(categorySkills)) {;
                categorySkills.forEach(skill => {;
                  if (typeof skill === 'string' && skill) {;
                    aiSkills.push(skill);
                  }
                }),;
              }
            }),;
            ;
            // Create a unique set of skills;
            finalSkills = [...new Set([...skillTags, ...aiSkills])],;
          }
        } catch (error) {;
          console.error("Error enhancing profile:", error),;
          // Continue with submission even if enhancement fails;
          finalSummary = "",;
        }
      } else if (generatedContent) {;
        finalSummary = generatedContent.summary,;
      }
;
      // Get user email for notification;
      const { data:userData } = await supabase.auth.getUser(),;
      const userEmail = userData.user?.email,;
;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      // Create the talent profile;
      // In a real implementation, this would save to Supabase;
      setTimeout(() => {;
        toast({;
<<<<<<< HEAD
          title: "Profile Created Successfully",;
          description: "Your talent profile has been published and is now visible in the directory."}),;
        // Send notification email if we have user email;
        if (userEmail && values && values.enhancedProfile) {;
          sendEnhancementNotification(user && user.id, userEmail);
        }
        setIsSubmitting(false);
      }, 1500);
=======
          title:"Profile Created Successfully",;
          description:"Your talent profile has been published and is now visible in the directory."}),;
        ;
        // Send notification email if we have user email;
        if (userEmail && values.enhancedProfile) {;
          sendEnhancementNotification(user.id, userEmail),;
        }
        ;
        setIsSubmitting(false),;
      }, 1500),;
;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      // Here would be the actual code to save the profile to Supabase;
      /*;
      const { error } = await supabase;
        .from('talent_profiles');
        .insert({;
<<<<<<< HEAD
          user_id: user && user.id,;
          name: values && values.name,;
          title: values && values.title,;
          bio: values && values.bio,;
          summary: finalSummary,;
          location: values && values.location,;
          skills: finalSkills && finalSkills.map(name => ({ name, level: 4 })), // Default skill level;
          hourly_rate: Number(values && values.hourlyRate),;
          availability_status: values && values.availability,;
          // Other fields would be handled here;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx

        });
      if (error) throw error;


        }),

      if (error) throw error,


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      */
    } catch (error: any) {
      console.error("Error creating profile:", error);
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        });
      if (error) throw error;
        }),

      if (error) throw error,
      */
    } catch (error: any) {
      console.error("Error creating profile:", error),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      toast({
        title: "Error Creating Profile"
        description: error.message |"There was an error creating your profile. Please try again."
        variant: "destructive"})
      setIsSubmitting(false)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======

========
        });
      if (error) throw error;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
      */;
    } catch (error: any) {;
      console && console.error("Error creating profile:", error);
      toast({;
        title: "Error Creating Profile",;
        description: error && error.message || "There was an error creating your profile. Please try again.",;
        variant: "destructive"}),;
      setIsSubmitting(false);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
    }
  }
  return (
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx

=======

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6">
      <Card className="bg-zion-blue-dark border-zion-blue-light">
        <CardHeader>
          <CardTitle className="text-2xl text-white">Create Your Talent Profile</CardTitle>
          <CardDescription className="text-zion-slate">
            Showcase your skills and experience to potential clients and employers.
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-8">
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
;
      // Get user email for notification;
      const { data: userData } = await supabase.auth.getUser(),;
      const userEmail = userData.user?.email,;
      // Create the talent profile;
      // In a real implementation, this would save to Supabase;
      setTimeout(() => {;
        toast({;
          title: "Profile Created Successfully",;
          description: "Your talent profile has been published and is now visible in the directory."}),;
        // Send notification email if we have user email;
        if (userEmail && values.enhancedProfile) {;
          sendEnhancementNotification(user.id, userEmail);
        }
;
        setIsSubmitting(false);
      }, 1500),;
      // Here would be the actual code to save the profile to Supabase;
      /*;
      const { error } = await supabase;
        .from('talent_profiles');
        .insert({;
          user_id: user.id,;
          name: values.name,;
          title: values.title,;
          bio: values.bio,;
          summary: finalSummary,;
          location: values.location,;
          skills: finalSkills.map(name => ({ name, level: 4 })), // Default skill level;
          hourly_rate: Number(values.hourlyRate),;
          availability_status: values.availability,;
          // Other fields would be handled here;
        }),;
      if (error) throw error,;
      */;
    } catch (error: any) {;
      console.error("Error creating profile:", error),;
      toast({;
        title: "Error Creating Profile",;
        description: error.message || "There was an error creating your profile. Please try again.",;
        variant: "destructive"});
      setIsSubmitting(false);
    }
  };
  return (;
<<<<<<< HEAD

========
=======
          user_id:user.id,;
          name:values.name,;
          title:values.title,;
          bio:values.bio,;
          summary:finalSummary,;
          location:values.location,;
          skills:finalSkills.map(name => ({ name, level:4 })), // Default skill level;
          hourly_rate:Number(values.hourlyRate),;
          availability_status:values.availability,;
          // Other fields would be handled here;
        }),;
;
      if (error) throw error,;
      */;
;
    } catch (error:any) {;
      console.error("Error creating profile:", error),;
      toast({;
        title:"Error Creating Profile",;
        description:error.message || "There was an error creating your profile. Please try again.",;
        variant:"destructive"}),;
      setIsSubmitting(false),;
    }
  },;
;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <div className="max-w-4xl mx-auto p-4 md:p-6">;
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader>;
          <CardTitle className="text-2xl text-white">Create Your Talent Profile</CardTitle>;
          <CardDescription className="text-zion-slate">;
            Showcase your skills and experience to potential clients and employers.;
          </CardDescription>;
        </CardHeader>;
<<<<<<< HEAD
<<<<<<< HEAD
        <Form {...form}>;
          <form onSubmit={form && form.handleSubmit(onSubmit)}>;
=======
;
        <Form {...form}>;
          <form onSubmit={form.handleSubmit(onSubmit)}>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            <CardContent className="space-y-8">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
              {/* Basic Information */}
              <div className="space-y-4">;
                <h3 className="text-lg font-medium text-white">Basic Information</h3>;
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
                  <div className="col-span-1">;
<<<<<<< HEAD
                    <FormField
                      control={form && form.control}
                      name="name"
=======
                    <FormField;
                      control={form.control}
                      name="name";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                      render={({ field }) => (;
                        <FormItem>;
                          <FormLabel className="text-zion-slate-light">Full Name</FormLabel>;
                          <FormControl>;
                            <div className="relative">;
                              <UserRound className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
<<<<<<< HEAD
                              <Input
                                className="pl-10 bg-zion-blue border-zion-blue-light text-white"
                                placeholder="Your full name"
;
            // Create a unique set of skills;
            final_skills = [...new Set ([...skill_tags, ...ai_skills])];
          }
        } catch (error) {
          console.error ("Error enhancing profile:", error);
          // Continue with submission even if enhancement fails;
          final_summary = "";
        }
      } else // Check condition
if ( {) {
  $2
}
        final_summary = generated_content.summary;
      }
      // Get user email for notification;
      const { data: user_data } = await supabase.auth.get_user (),
      const user_email = user_data.user?.email;
;
      // Create the talent profile;
      // In a real implementation, this would save to Supabase;
      set_timeout (() => {
        toast ({
          title: "Profile Created Successfully",
          description: "Your talent profile has been published and is now visible in the directory."}),
        // Send notification email if we have user email;
        // Check condition
if ( {) {
  $2
}
          sendEnhancementNotification (user.id, user_email);
        }
        setIsSubmitting (false);
      }, 1500);
;
      // Here would be the actual code to save the profile to Supabase;
      /*;
      const { error } = await supabase;
        .from ('talent_profiles');
        .insert ({
          user_id: user.id,
          name: values.name,
          title: values.title,
          bio: values.bio,
          summary: final_summary,
          location: values.location,
          skills: final_skills.map (name => ({ name, level: 4 })), // Default skill level;
          hourly_rate: Number (values.hourly_rate),
          availability_status: values.availability,
          // Other fields would be handled here;
        });
;
      // Check condition
if (throw error) {
  $2
}
      */;
    } catch (error: any) {
      console.error ("Error creating profile:", error);
      toast ({
        title: "Error Creating Profile",
        description: error.message || "There was an error creating your profile. Please try again.",
        variant: "destructive"}),
      setIsSubmitting (false);
    }
  }
;
  return (
    <div className="max - w-4xl mx - auto p - 4 md:p - 6">;
      <Card className="bg - zion - blue - dark border - zion - blue - light">;
        <CardHeader>;
          <CardTitle className="text - 2xl text - white">Create Your Talent Profile</CardTitle>;
          <CardDescription className="text - zion - slate">;
            Showcase your skills and experience to potential clients and employers.;
          </CardDescription>;
        </CardHeader>;
        <Form {...form}>;
          <form on_submit={form.handle_submit (on_submit)}>;
            <CardContent className="space - y-8">;
              {/* Basic Information */}
              <div className="space - y-4">;
                <h3 className="text - lg font - medium text - white">Basic Information</h3>;
                <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 6">;
                  <div className="col - span - 1">;
                    <FormField;
                      control={form.control}
                      name="name";
                      render={({ field }) => (
                        <FormItem>;
                          <FormLabel className="text - zion - slate - light">Full Name</FormLabel>;
                          <FormControl>;
                            <div className="relative">;
                              <UserRound className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" />;
                              <Input;
                                className="pl - 10 bg - zion - blue border - zion - blue - light text - white";
                                placeholder="Your full name";
                                {...field}
                              />;
                            </div>;
                          </FormControl>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
                    />;
                  </div>;
                  <div className="col-span-1">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
                    <FormField
                      control={form && form.control}
                      name="title"
=======
                              <Input;
                                className="pl-10 bg-zion-blue border-zion-blue-light text-white";
                                placeholder="Your full name";
                                {...field}
                              />;
                            </div>;
                          </FormControl>;
                          <FormMessage className="text-red-400" />;
                        </FormItem>;
                      )}
                    />;
                  </div>;
;
                  <div className="col-span-1">;
                    <FormField;
                      control={form.control}
                      name="title";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                      render={({ field }) => (;
                        <FormItem>;
                          <FormLabel className="text-zion-slate-light">Professional Title</FormLabel>;
                          <FormControl>;
                            <div className="relative">;
                              <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
<<<<<<< HEAD
                              <Input
                                className="pl-10 bg-zion-blue border-zion-blue-light text-white"
                                placeholder="e && e.g., Senior Software Developer"
                          <FormMessage className="text - red - 400" />;
                        </FormItem>)}
                    />;
                  </div>;
                  <div className="col - span - 1">;
                    <FormField;
                      control={form.control}
                      name="title";
                      render={({ field }) => (
                        <FormItem>;
                          <FormLabel className="text - zion - slate - light">Professional Title</FormLabel>;
                          <FormControl>;
                            <div className="relative">;
                              <Briefcase className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" />;
                              <Input;
                                className="pl - 10 bg - zion - blue border - zion - blue - light text - white";
                                placeholder="e.g., Senior Software Developer";
                                {...field}
                              />;
                            </div>;
                          </FormControl>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
                    />;
                  </div>;
                  <div className="col-span-1">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
                    <FormField
                      control={form && form.control}
                      name="location"
=======
                              <Input;
                                className="pl-10 bg-zion-blue border-zion-blue-light text-white";
                                placeholder="e.g., Senior Software Developer";
                                {...field}
                              />;
                            </div>;
                          </FormControl>;
                          <FormMessage className="text-red-400" />;
                        </FormItem>;
                      )}
                    />;
                  </div>;
;
                  <div className="col-span-1">;
                    <FormField;
                      control={form.control}
                      name="location";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                      render={({ field }) => (;
                        <FormItem>;
                          <FormLabel className="text-zion-slate-light">Location</FormLabel>;
                          <FormControl>;
                            <div className="relative">;
                              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
<<<<<<< HEAD
                              <Input
                                className="pl-10 bg-zion-blue border-zion-blue-light text-white"
                                placeholder="City, State/Province, Country"
                          <FormMessage className="text - red - 400" />;
                        </FormItem>)}
                    />;
                  </div>;
                  <div className="col - span - 1">;
                    <FormField;
                      control={form.control}
                      name="location";
                      render={({ field }) => (
                        <FormItem>;
                          <FormLabel className="text - zion - slate - light">Location</FormLabel>;
                          <FormControl>;
                            <div className="relative">;
                              <MapPin className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" />;
                              <Input;
                                className="pl - 10 bg - zion - blue border - zion - blue - light text - white";
                                placeholder="City, State / Province, Country";
                                {...field}
                              />;
                            </div>;
                          </FormControl>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
                    />;
                  </div>;
                  <div className="col-span-1">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
                    <FormField
                      control={form && form.control}
                      name="hourlyRate"
=======
                              <Input;
                                className="pl-10 bg-zion-blue border-zion-blue-light text-white";
                                placeholder="City, State/Province, Country";
                                {...field}
                              />;
                            </div>;
                          </FormControl>;
                          <FormMessage className="text-red-400" />;
                        </FormItem>;
                      )}
                    />;
                  </div>;
;
                  <div className="col-span-1">;
                    <FormField;
                      control={form.control}
                      name="hourlyRate";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                      render={({ field }) => (;
                        <FormItem>;
                          <FormLabel className="text-zion-slate-light">Hourly Rate (USD)</FormLabel>;
                          <FormControl>;
                            <div className="relative">;
                              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate">$</span>;
<<<<<<< HEAD
                              <Input
                                className="pl-8 bg-zion-blue border-zion-blue-light text-white"
                                placeholder="e && e.g., 85"
                          <FormMessage className="text - red - 400" />;
                        </FormItem>)}
                    />;
                  </div>;
                  <div className="col - span - 1">;
                    <FormField;
                      control={form.control}
                      name="hourly_rate";
                      render={({ field }) => (
                        <FormItem>;
                          <FormLabel className="text - zion - slate - light">Hourly Rate (USD)</FormLabel>;
                          <FormControl>;
                            <div className="relative">;
                              <span className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate">$</span>;
                              <Input;
                                className="pl - 8 bg - zion - blue border - zion - blue - light text - white";
=======
                              <Input;
                                className="pl-8 bg-zion-blue border-zion-blue-light text-white";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                                placeholder="e.g., 85";
                                {...field}
                              />;
                            </div>;
                          </FormControl>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx

                    />;
                  </div>;
                </div>;


========
<<<<<<< HEAD
                    />;
                  </div>;
                </div>;
=======
                          <FormMessage className="text-red-400" />;
                        </FormItem>;
                      )}
                    />;
                  </div>;
                </div>;
                ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
                {/* Upload Avatar */}
                <div className="space-y-2">;
                  <FormLabel className="text-zion-slate-light">Profile Picture</FormLabel>;
                  <div className="flex items-center gap-6">;
                    <div className="relative w-24 h-24 rounded-full overflow-hidden bg-zion-blue-light border border-zion-blue-light">;
                      {uploadedAvatar ? (;
                        <AspectRatio ratio={1/1}>;
<<<<<<< HEAD
=======
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
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="col-span-1">
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-zion-slate-light">Professional Title</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                              <Input
                                className="pl-10 bg-zion-blue border-zion-blue-light text-white"
                                placeholder="e.g., Senior Software Developer"
                                {...field}
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
                    />
                  </div>
                  <div className="col-span-1">
                    <FormField
                      control={form.control}
                      name="hourlyRate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-zion-slate-light">Hourly Rate (USD)</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate">$</span>
                              <Input
                                className="pl-8 bg-zion-blue border-zion-blue-light text-white"
                                placeholder="e.g., 85"
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
                <div className="space-y-2">
                  <FormLabel className="text-zion-slate-light">Profile Picture</FormLabel>
                  <div className="flex items-center gap-6">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden bg-zion-blue-light border border-zion-blue-light">
                      {uploadedAvatar ? (
                        <AspectRatio ratio={1/1}>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                          <img
                            src={uploadedAvatar}
                            alt="Avatar preview"
                            className="w-full h-full object-cover"
<<<<<<< HEAD
                          />;
                        </AspectRatio>;
                      ) : (;
=======
                          <img;
                            src={uploadedAvatar}
                            alt="Avatar preview";
                            className="w-full h-full object-cover";
                          />;
                        </AspectRatio>;
                      ) :(;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                        <div className="flex items-center justify-center h-full">;
                          <UserRound className="h-10 w-10 text-zion-slate opacity-50" />;
                        </div>;
                      )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
                    </div>;
<<<<<<< HEAD
                    <label className="flex items-center justify-center px-4 py-2 rounded-md bg-zion-purple hover:bg-zion-purple-dark text-white cursor-pointer transition-colors">;
                      <Upload className="mr-2 h-4 w-4" />;
                      <span>Upload Photo</span>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
                        onChange={handleAvatarUpload}

========
=======
;
                    <label className="flex items-center justify-center px-4 py-2 rounded-md bg-zion-purple hover:bg-zion-purple-dark text-white cursor-pointer transition-colors">;
                      <Upload className="mr-2 h-4 w-4" />;
                      <span>Upload Photo</span>;
                      <input;
                        type="file";
                        accept="image/*";
                        className="hidden";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                        onChange={handleAvatarUpload}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
                      />;
                    </label>;
                  </div>;
                  <p className="text-sm text-zion-slate">;
<<<<<<< HEAD
                          <FormMessage className="text - red - 400" />;
                        </FormItem>)}
                    />;
                  </div>;
                </div>;
                {/* Upload Avatar */}
                <div className="space - y-2">;
                  <FormLabel className="text - zion - slate - light">Profile Picture</FormLabel>;
                  <div className="flex items - center gap - 6">;
                    <div className="relative w - 24 h - 24 rounded - full overflow - hidden bg - zion - blue - light border border - zion - blue - light">;
                      {uploaded_avatar ? (
                        <AspectRatio ratio={1 / 1}>;
                          <img;
                            src={uploaded_avatar}
                            alt="Avatar preview";
                            className="w - full h - full object - cover";
                          />;
                        </AspectRatio>) : (
                        <div className="flex items - center justify - center h - full">;
                          <UserRound className="h - 10 w - 10 text - zion - slate opacity - 50" />;
                        </div>)}
                    </div>;
                    <label className="flex items - center justify - center px - 4 py - 2 rounded - md bg - zion - purple hover:bg - zion - purple - dark text - white cursor - pointer transition - colors">;
                      <Upload className="mr - 2 h - 4 w - 4" />;
                      <span > Upload Photo</span>;
                      <input;
                        type="file";
                        accept="image/*";
                        className="hidden";
                        on_change={handleAvatarUpload}
                      />;
                    </label>;
                  </div>;
                  <p className="text - sm text - zion - slate">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx

========
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
                    For best results, use an image at least 400x400 pixels in JPG, PNG, or GIF format.;
                  </p>;
                </div>;
              </div>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx

========
<<<<<<< HEAD
=======
;
              <Separator className="bg-zion-blue-light/50" />;
;
              {/* Bio Section */}
              <div className="space-y-4">;
                <h3 className="text-lg font-medium text-white">Professional Bio</h3>;
                <FormField;
                  control={form.control}
                  name="bio";
                  render={({ field }) => (;
                    <FormItem>;
                      <FormLabel className="text-zion-slate-light">About Yourself</FormLabel>;
                      <FormControl>;
                        <Textarea;
                          className="h-32 min-h-[128px] bg-zion-blue border-zion-blue-light text-white";
                          placeholder="Describe your professional background, expertise, and the value you bring to clients...";
                          {...field}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
                        />;
                      </FormControl>;
                      <FormMessage className="text-red-400" />;
                      <FormDescription className="text-zion-slate">;
<<<<<<< HEAD
                        {field && field.value?.length || 0}/1000 characters;
=======
                        {field.value?.length || 0}/1000 characters;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                      </FormDescription>;
                    </FormItem>;
                  )}
                />;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx


========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
                {/* AI Enhancement Option */}
                <FormField
                  control={form && form.control}
                  name="enhancedProfile"
                  render={({ field }) => (;
                    <FormItem className="flex flex-row items-center justify-between p-3 border border-zion-blue-light bg-zion-blue/30 rounded-md">;
                      <div className="space-y-0 && 0.5">;
=======
                ;
                {/* AI Enhancement Option */}
                <FormField;
                  control={form.control}
                  name="enhancedProfile";
                  render={({ field }) => (;
                    <FormItem className="flex flex-row items-center justify-between p-3 border border-zion-blue-light bg-zion-blue/30 rounded-md">;
                      <div className="space-y-0.5">;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                        <FormLabel className="text-white flex items-center">;
                          <Sparkles className="w-4 h-4 mr-2 text-zion-purple" />;
                          AI Profile Enhancement;
                        </FormLabel>;
                        <FormDescription className="text-zion-slate-light">;
<<<<<<< HEAD
              <Separator className="bg - zion - blue - light / 50" />;
              {/* Bio Section */}
              <div className="space - y-4">;
                <h3 className="text - lg font - medium text - white">Professional Bio</h3>;
                <FormField;
                  control={form.control}
                  name="bio";
                  render={({ field }) => (
                    <FormItem>;
                      <FormLabel className="text - zion - slate - light">About Yourself</FormLabel>;
                      <FormControl>;
                        <Textarea;
                          className="h - 32 min - h-[128px] bg - zion - blue border - zion - blue - light text - white";
                          placeholder="Describe your professional background, expertise, and the value you bring to clients...";
                          {...field}
                        />;
                      </FormControl>;
                      <FormMessage className="text - red - 400" />;
                      <FormDescription className="text - zion - slate">;
                        {field.value?.length || 0}/1000 characters;
                      </FormDescription>;
                    </FormItem>)}
                />;
                {/* AI Enhancement Option */}
                <FormField;
                  control={form.control}
                  name="enhanced_profile";
                  render={({ field }) => (
                    <FormItem className="flex flex - row items - center justify - between p - 3 border border - zion - blue - light bg - zion - blue / 30 rounded - md">;
                      <div className="space - y-0.5">;
                        <FormLabel className="text - white flex items - center">;
                          <Sparkles className="w - 4 h - 4 mr - 2 text - zion - purple" />;
                          AI Profile Enhancement;
                        </FormLabel>;
                        <FormDescription className="text - zion - slate - light">;
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                          Let AI help optimize your profile for better visibility and engagement;
                        </FormDescription>;
                      </div>;
                      <FormControl>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
                />;
                {form && form.watch("enhancedProfile") && (;
                  <div className="flex justify-end">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
=======
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
              {/* Bio Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">Professional Bio</h3>
                <FormField
                  control={form.control}
                  name="bio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-zion-slate-light">About Yourself</FormLabel>
                      <FormControl>
                        <Textarea
                          className="h-32 min-h-[128px] bg-zion-blue border-zion-blue-light text-white"
                          placeholder="Describe your professional background, expertise, and the value you bring to clients..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                      <FormDescription className="text-zion-slate">
                        {field.value?.length |0}/1000 characters
                      </FormDescription>
                    </FormItem>
                  )}
                />
                {/* AI Enhancement Option */}
                <FormField
                  control={form.control}
                  name="enhancedProfile"
                  render={({ field }) => (
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
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="data-[state=checked]:bg-zion-purple"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                {form.watch("enhancedProfile") && (
                  <div className="flex justify-end">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    <Button
                      type="button"
                      variant="outline"
                      className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
                      onClick={generateEnhancedProfile}
<<<<<<< HEAD
                      disabled={isGenerating}>;
                      <Sparkles className="mr-2 h-4 w-4" />;
                      {isGenerating ? "Generating..." : "Generate Enhanced Profile"}
=======
                        <Switch;
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="data-[state=checked]:bg-zion-purple";
                        />;
                      </FormControl>;
                    </FormItem>;
                  )}
                />;
                ;
                {form.watch("enhancedProfile") && (;
                  <div className="flex justify-end">;
                    <Button;
                      type="button";
                      variant="outline";
                      className="border-zion-purple text-zion-purple hover:bg-zion-purple/10";
                      onClick={generateEnhancedProfile}
                      disabled={isGenerating}
                    >;
                      <Sparkles className="mr-2 h-4 w-4" />;
                      {isGenerating ? "Generating..." :"Generate Enhanced Profile"}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                    </Button>;
                  </div>;
                )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx

<<<<<<< HEAD
=======




>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
                {/* Generated Content Display */}
                {generatedContent && (;
                  <div className="bg-zion-blue-light/20 border border-zion-blue-light rounded-md p-4">;
                    <div className="flex items-center justify-between mb-3">;
                      <h4 className="text-white font-medium flex items-center">;
                        <Sparkles className="w-4 h-4 mr-2 text-zion-purple" />;
                        AI-Generated Content;
                      </h4>;
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      <Button
                        type="button"
                        size="sm"
                        className="bg-zion-purple hover:bg-zion-purple-dark text-white"
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
                        onClick={applyGeneratedContent}>;
                        <Check className="mr-1 h-3 w-3" /> Apply;
                      </Button>;
                    </div>;
                    <div className="space-y-4">;
                      <div>;
                        <h5 className="text-zion-slate-light text-sm mb-1">Professional Summary</h5>;
                        <p className="text-zion-slate italic">{generatedContent && generatedContent.summary}</p>;
                      </div>;
                      {generatedContent && generatedContent.categorizedSkills && (;
                        <div>;
                          <h5 className="text-zion-slate-light text-sm mb-1">Categorized Skills</h5>;
                          <div className="flex flex-wrap gap-2 mt-1">;
                            {Object && Object.entries(generatedContent && generatedContent.categorizedSkills).map(([category, skills]) => (;
                              <div key={category} className="flex items-center gap-2">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
                                <Badge
                                  className={`w-fit ${getCategoryColor(category as CategoryType)}`}>;
                                  {category}
                                </Badge>;
                                <div className="flex flex-wrap gap-1">;
                                  {skills && skills.map(skill => (;
                                    <Badge
                                      key={skill}
                                      className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none">;
                                      {skill}
=======
                      <Button;
                        type="button";
                        size="sm";
                        className="bg-zion-purple hover:bg-zion-purple-dark text-white";
                        onClick={applyGeneratedContent}
                      >;
                        <Check className="mr-1 h-3 w-3" /> Apply;
                      </Button>;
                    </div>;
                    ;
                    <div className="space-y-4">;
                      <div>;
                        <h5 className="text-zion-slate-light text-sm mb-1">Professional Summary</h5>;
                        <p className="text-zion-slate italic">{generatedContent.summary}</p>;
                      </div>;
                      ;
                      {generatedContent.categorizedSkills && (;
                        <div>;
                          <h5 className="text-zion-slate-light text-sm mb-1">Categorized Skills</h5>;
                          <div className="flex flex-wrap gap-2 mt-1">;
                            {Object.entries(generatedContent.categorizedSkills).map(([category, skills]) => (;
                              <div key={category} className="flex items-center gap-2">;
                                <Badge;
                                  className={`w-fit ${getCategoryColor(category as CategoryType)}`}
                                >;
                                  {category}
                                </Badge>;
                                <div className="flex flex-wrap gap-1">;
                                  {skills.map(skill => (;
                                    <Badge;
                                      key={skill}
                                      className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none";
                                    >;                                      {skill}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                                    </Badge>;
                                  ))}
                                </div>;
                              </div>;
                            ))}
                          </div>;
                        </div>;
                      )}
                    </div>;
                  </div>;
                )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
              </div>;
<<<<<<< HEAD
              <Separator className="bg-zion-blue-light/50" />;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx


========
=======
;
              <Separator className="bg-zion-blue-light/50" />;
;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
              {/* Skills and Availability */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
                {/* Skills Section */}
                <div className="space-y-4">;
                  <h3 className="text-lg font-medium text-white">Skills & Expertise</h3>;
<<<<<<< HEAD
                  <FormField
                    control={form && form.control}
                    name="skills"
=======
                  <FormField;
                    control={form.control}
                    name="skills";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                    render={({ field }) => (;
                      <FormItem>;
                        <FormLabel className="text-zion-slate-light">Skills</FormLabel>;
                        <div className="flex gap-2">;
                          <FormControl>;
<<<<<<< HEAD
                            <Input
                              className="flex-1 bg-zion-blue border-zion-blue-light text-white"
                              placeholder="Add a skill..."
                        <Switch;
                          checked={field.value}
                          onCheckedChange={field.on_change}
                          className="data-[state = checked]:bg - zion - purple";
                        />;
                      </FormControl>;
                    </FormItem>)}
                />;
                {form.watch ("enhanced_profile") && (
                  <div className="flex justify - end">;
                    <Button;
                      type="button";
                      variant="outline";
                      className="border - zion - purple text - zion - purple hover:bg - zion - purple / 10";
                      on_click={generateEnhancedProfile}
                      disabled={is_generating}
                    >;
                      <Sparkles className="mr - 2 h - 4 w - 4" />;
                      {is_generating ? "Generating..." : "Generate Enhanced Profile"}
                    </Button>;
                  </div>)}
                {/* Generated Content Display */}
                {generated_content && (
                  <div className="bg - zion - blue - light / 20 border border - zion - blue - light rounded - md p - 4">;
                    <div className="flex items - center justify - between mb - 3">;
                      <h4 className="text - white font - medium flex items - center">;
                        <Sparkles className="w - 4 h - 4 mr - 2 text - zion - purple" />;
                        AI - Generated Content;
                      </h4>;
                      <Button;
                        type="button";
                        size="sm";
                        className="bg - zion - purple hover:bg - zion - purple - dark text - white";
                        on_click={applyGeneratedContent}
                      >;
                        <Check className="mr - 1 h - 3 w - 3" /> Apply;
                      </Button>;
                    </div>;
                    <div className="space - y-4">;
                      <div>;
                        <h5 className="text - zion - slate - light text - sm mb - 1">Professional Summary</h5>;
                        <p className="text - zion - slate italic">{generated_content.summary}</p>;
                      </div>;
                      {generated_content.categorized_skills && (
                        <div>;
                          <h5 className="text - zion - slate - light text - sm mb - 1">Categorized Skills</h5>;
                          <div className="flex flex - wrap gap - 2 mt - 1">;
                            {Object.entries (generated_content.categorized_skills).map (([category, skills]) => (
                              <div key={category} className="flex items - center gap - 2">;
                                <Badge;
                                  className={`w - fit ${getCategoryColor (category as CategoryType)}`}
                                >;
                                  {category}
                                </Badge>;
                                <div className="flex flex - wrap gap - 1">;
                                  {skills.map (skill => (
                                    <Badge;
                                      key={skill}
                                      className="bg - zion - purple / 20 hover:bg - zion - purple / 30 text - zion - purple border - none";
                                    >;
                                      {skill}
                                    </Badge>))}
                                </div>;
                              </div>))}
                          </div>;
                        </div>)}
                    </div>;
                  </div>)}
              </div>;
              <Separator className="bg - zion - blue - light / 50" />;
              {/* Skills and Availability */}
              <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 8">;
                {/* Skills Section */}
                <div className="space - y-4">;
                  <h3 className="text - lg font - medium text - white">Skills & Expertise</h3>;
                  <FormField;
                    control={form.control}
                    name="skills";
                    render={({ field }) => (
                      <FormItem>;
                        <FormLabel className="text - zion - slate - light">Skills</FormLabel>;
                        <div className="flex gap - 2">;
                          <FormControl>;
                            <Input;
                              className="flex - 1 bg - zion - blue border - zion - blue - light text - white";
=======
                            <Input;
                              className="flex-1 bg-zion-blue border-zion-blue-light text-white";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                              placeholder="Add a skill...";
                              {...field}
                              onKeyDown={handleSkillKeyPress}
                            />;
                          </FormControl>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx

========
<<<<<<< HEAD
                  />;
                  <div className="flex flex-wrap gap-2 mt-2">;
                    {skillTags && skillTags.map(skill => (;
                      <Badge
                        key={skill}
                        className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none pl-2 pr-1 py-1 && 1.5 flex items-center gap-1">;
=======
                          <Button;
                            type="button";
                            variant="outline";
                            className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white";                            onClick={handleAddSkill}
                          >;
                            Add;
                          </Button>;
                        </div>;
                        <FormDescription className="text-zion-slate">;
                          Press Enter or click Add to include a skill;
                        </FormDescription>;
                        <FormMessage className="text-red-400" />;
                      </FormItem>;
                    )}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
                  />;
;
                  <div className="flex flex-wrap gap-2 mt-2">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
                    {skillTags && skillTags.map(skill => (;

                      <Badge
========
                    {skillTags.map(skill => (;
                      <Badge;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
                        key={skill}
                        className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none pl-2 pr-1 py-1.5 flex items-center gap-1";
                      >;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                        {skill}
                        <button;
                          type="button";
                          onClick={() => handleRemoveSkill(skill)}
<<<<<<< HEAD
                          className="rounded-full hover:bg-zion-purple-dark/20 p-0 && 0.5";
                        >;
                          <X className="h-3 w-3" />;
                        </button>;
                      </Badge>;
                    ))}
                    {skillTags && skillTags.length === 0 && (;
=======
                          className="rounded-full hover:bg-zion-purple-dark/20 p-0.5";
                        >;
                          <X className="h-3 w-3" />;
                        </button>;
                      </Badge>;                    ))}
                    {skillTags.length === 0 && (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                      <p className="text-zion-slate text-sm italic">No skills added yet</p>;
                    )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx

                  </div>;
                </div>;


========
                  </div>;
                </div>;
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
                {/* Availability Section */}
                <div className="space-y-4">;
                  <h3 className="text-lg font-medium text-white">Availability</h3>;
                  <FormField
                    control={form && form.control}
                    name="availability"
=======
;
                {/* Availability Section */}
                <div className="space-y-4">;
                  <h3 className="text-lg font-medium text-white">Availability</h3>;
                  <FormField;
                    control={form.control}
                    name="availability";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                    render={({ field }) => (;
                      <FormItem className="space-y-4">;
                        <FormLabel className="text-zion-slate-light">Current Status</FormLabel>;
                        <FormControl>;
                          <div className="space-y-2">;
                            <div className="flex items-center space-x-2">;
<<<<<<< HEAD
=======
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
                            {Object.entries(generatedContent.categorizedSkills).map(([category, skills]) => (
                              <div key={category} className="flex items-center gap-2">
                                <Badge
                                  className={`w-fit ${getCategoryColor(category as CategoryType)}`}
                                >
                                  {category}
                                </Badge>
                                <div className="flex flex-wrap gap-1">
                                  {skills.map(skill => (
                                    <Badge
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
              {/* Skills and Availability */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Skills Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-white">Skills & Expertise</h3>
                  <FormField
                    control={form.control}
                    name="skills"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-zion-slate-light">Skills</FormLabel>
                        <div className="flex gap-2">
                          <FormControl>
                            <Input
                              className="flex-1 bg-zion-blue border-zion-blue-light text-white"
                              placeholder="Add a skill..."
                              {...field}
                              onKeyDown={handleSkillKeyPress}
                            />
                          </FormControl>
                          <Button
                            type="button"
                            variant="outline"
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
                      <Badge
                        key={skill}
                        className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none pl-2 pr-1 py-1.5 flex items-center gap-1"
                      >
                        {skill}
                        <button
                          type="button"
                          onClick={() => handleRemoveSkill(skill)}
                          className="rounded-full hover:bg-zion-purple-dark/20 p-0.5"
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
                {/* Availability Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-white">Availability</h3>
                  <FormField
                    control={form.control}
                    name="availability"
                    render={({ field }) => (
                      <FormItem className="space-y-4">
                        <FormLabel className="text-zion-slate-light">Current Status</FormLabel>
                        <FormControl>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                              <input
                                type="radio"
                                id="available"
                                value="available"
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
                                checked={field && field.value === "available"}
                                onChange={() => field && field.onChange("available")}
=======
                              <input;
                                type="radio";
                                id="available";
                                value="available";
                                checked={field.value === "available"}
                                onChange={() => field.onChange("available")}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                                className="text-zion-purple focus:ring-zion-purple";
                              />;
                              <label htmlFor="available" className="text-white flex items-center gap-2">;
                                <div className="h-2 w-2 rounded-full bg-green-500"></div>;
                                Available Now;
                              </label>;
                            </div>;
<<<<<<< HEAD
                            <div className="flex items-center space-x-2">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                              <input
                                type="radio"
                                id="limited"
                                value="limited"
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
                                checked={field && field.value === "limited"}
                                onChange={() => field && field.onChange("limited")}
=======
;
                            <div className="flex items-center space-x-2">;
                              <input;
                                type="radio";
                                id="limited";
                                value="limited";
                                checked={field.value === "limited"}
                                onChange={() => field.onChange("limited")}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                                className="text-zion-purple focus:ring-zion-purple";
                              />;
                              <label htmlFor="limited" className="text-white flex items-center gap-2">;
                                <div className="h-2 w-2 rounded-full bg-yellow-500"></div>;
                                Limited Availability;
                              </label>;
                            </div>;
<<<<<<< HEAD
                            <div className="flex items-center space-x-2">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                              <input
                                type="radio"
                                id="unavailable"
                                value="unavailable"
<<<<<<< HEAD
                                checked={field && field.value === "unavailable"}
                                onChange={() => field && field.onChange("unavailable")}
                                className="text-zion-purple focus:ring-zion-purple";
                              />;
                              <label htmlFor="unavailable" className="text-white flex items-center gap-2">;
                                <div className="h-2 w-2 rounded-full bg-red-500"></div>;
                          <Button;
                            type="button";
                            variant="outline";
                            className="border - zion - blue - light text - zion - slate - light hover:bg - zion - blue - light hover:text - white";
                            on_click={handleAddSkill}
                          >;
                            Add;
                          </Button>;
                        </div>;
                        <FormDescription className="text - zion - slate">;
                          Press Enter or click Add to include a skill;
                        </FormDescription>;
                        <FormMessage className="text - red - 400" />;
                      </FormItem>)}
                  />;
                  <div className="flex flex - wrap gap - 2 mt - 2">;
                    {skill_tags.map (skill => (
                      <Badge;
                        key={skill}
                        className="bg - zion - purple / 20 hover:bg - zion - purple / 30 text - zion - purple border - none pl - 2 pr - 1 py - 1.5 flex items - center gap - 1";
                      >;
                        {skill}
                        <button;
                          type="button";
                          on_click={() => handleRemoveSkill (skill)}
                          className="rounded - full hover:bg - zion - purple - dark / 20 p - 0.5";
                        >;
                          <X className="h - 3 w - 3" />;
                        </button>;
                      </Badge>))}
                    {skill_tags.length === 0 && (
                      <p className="text - zion - slate text - sm italic">No skills added yet</p>)}
                  </div>;
                </div>;
                {/* Availability Section */}
                <div className="space - y-4">;
                  <h3 className="text - lg font - medium text - white">Availability</h3>;
                  <FormField;
                    control={form.control}
                    name="availability";
                    render={({ field }) => (
                      <FormItem className="space - y-4">;
                        <FormLabel className="text - zion - slate - light">Current Status</FormLabel>;
                        <FormControl>;
                          <div className="space - y-2">;
                            <div className="flex items - center space - x-2">;
                              <input;
                                type="radio";
                                id="available";
                                value="available";
                                checked={field.value === "available"}
                                on_change={() => field.on_change ("available")}
                                className="text - zion - purple focus:ring - zion - purple";
                              />;
                              <label html_for="available" className="text - white flex items - center gap - 2">;
                                <div className="h - 2 w - 2 rounded - full bg - green - 500"></div>;
                                Available Now;
                              </label>;
                            </div>;
                            <div className="flex items - center space - x-2">;
                              <input;
                                type="radio";
                                id="limited";
                                value="limited";
                                checked={field.value === "limited"}
                                on_change={() => field.on_change ("limited")}
                                className="text - zion - purple focus:ring - zion - purple";
                              />;
                              <label html_for="limited" className="text - white flex items - center gap - 2">;
                                <div className="h - 2 w - 2 rounded - full bg - yellow - 500"></div>;
                                Limited Availability;
                              </label>;
                            </div>;
                            <div className="flex items - center space - x-2">;
=======
;
                            <div className="flex items-center space-x-2">;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                              <input;
                                type="radio";
                                id="unavailable";
                                value="unavailable";
                                checked={field.value === "unavailable"}
<<<<<<< HEAD
                                on_change={() => field.on_change ("unavailable")}
                                className="text - zion - purple focus:ring - zion - purple";
                              />;
                              <label html_for="unavailable" className="text - white flex items - center gap - 2">;
                                <div className="h - 2 w - 2 rounded - full bg - red - 500"></div>;
=======
                                onChange={() => field.onChange("unavailable")}
                                className="text-zion-purple focus:ring-zion-purple";
                              />;
                              <label htmlFor="unavailable" className="text-white flex items-center gap-2">;
                                <div className="h-2 w-2 rounded-full bg-red-500"></div>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                                Currently Unavailable;
                              </label>;
                            </div>;
                          </div>;
                        </FormControl>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx

                  />;

========
<<<<<<< HEAD
                  />;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
                  <div className="pt-2">;
                    <FormLabel className="text-zion-slate-light">Availability Message</FormLabel>;
                    <Textarea
                      placeholder="Describe your availability, working hours, or when you'll be available next..."
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
<<<<<<< HEAD
=======
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
                  />
                  <div className="pt-2">
                    <FormLabel className="text-zion-slate-light">Availability Message</FormLabel>
                    <Textarea
                      placeholder="Describe your availability, working hours, or when you'll be available next..."
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Creating Profile..." : "Create Profile"}
                </Button>
              </div>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
                      className="mt-1 && 1.5 bg-zion-blue border-zion-blue-light text-white"
                    />;
                    <FormDescription className="text-zion-slate mt-1 && 1.5 text-sm">;
                        <FormMessage className="text - red - 400" />;
                      </FormItem>)}
                  />;
                  <div className="pt - 2">;
                    <FormLabel className="text - zion - slate - light">Availability Message</FormLabel>;
                    <Textarea;
                      placeholder="Describe your availability, working hours, or when you'll be available next...";
                      className="mt - 1.5 bg - zion - blue border - zion - blue - light text - white";
                    />;
                    <FormDescription className="text - zion - slate mt - 1.5 text - sm">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx

========
=======
                        <FormMessage className="text-red-400" />;
                      </FormItem>;
                    )}
                  />;
;
                  <div className="pt-2">;
                    <FormLabel className="text-zion-slate-light">Availability Message</FormLabel>;
                    <Textarea;
                      placeholder="Describe your availability, working hours, or when you'll be available next...";
                      className="mt-1.5 bg-zion-blue border-zion-blue-light text-white";
                    />;
                    <FormDescription className="text-zion-slate mt-1.5 text-sm">;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
                      Let clients know about your working hours, time zone, or availability for calls.;
                    </FormDescription>;
                  </div>;
                </div>;
              </div>;
            </CardContent>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx

=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
            <CardFooter className="border - t border - zion - blue - light pt - 6">;
              <div className="flex flex - col sm:flex - row gap - 4 w - full sm:justify - between">;
                <Button;
                  type="button";
                  variant="outline";
                  className="border - zion - blue - light text - zion - slate - light hover:bg - zion - blue - light hover:text - white";
                >;
                  Save as Draft;
                </Button>;
                <Button;
                  type="submit";
                  className="bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white";
                  disabled={is_submitting}
                >;
                  {is_submitting ? "Creating Profile..." : "Create Profile"}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx

========
=======
;
            <CardFooter className="border-t border-zion-blue-light pt-6">;
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:justify-between">;
                <Button;
                  type="button";
                  variant="outline";
                  className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white";
                >;
                  Save as Draft;
                </Button>;
                <Button ;
                  type="submit";
                  className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white";
                  disabled={isSubmitting}
                >;
                  {isSubmitting ? "Creating Profile..." :"Create Profile"}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
                </Button>;
              </div>;
            </CardFooter>;
          </form>;
        </Form>;
      </Card>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
    </div>);
=======
    </div>;
  ),; import {
  Form;
FormControl;
FormDescription;
FormField;
FormItem;
FormLabel;
});
availability: z.enum (["available", "limited", "unavailable"]);
enhancedProfile: z.boolean () .default (true) 
});
type CategoryType = 'programming' | 'devops' | 'platforms' | 'softSkills' | 'other';
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx

=======

}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
};
//Handle removing skill tags const handleRemoveSkill = (skill: string) => {
  setSkillTags (skillTags.filter ( (s) => s !== skill) ) 
};
//Handle key press in skills input (add on enter) const handleSkillKeyPress = (e: React.KeyboardEvent) => {
  
}
};
//Handle avatar upload const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
if (file) {
  const reader = new FileReader ();
reader.onloadend = () => {
  setUploadedAvatar (reader.result as string) 
};
reader.readAsDataURL (file) 
}
};
//Generate enhanced profile with AI return;
}//Call the Supabase Edge Function const {
  data, error 
}= await supabase.functions.invoke ('talent-profile-enhancer', {
  body: {
  talentData: {
  name: formData.name, title: formData.title, bio: formData.bio, skills: skillTags, location: formData.location 
}
}
});
setGeneratedContent (data as EnhancedProfile);
}finally {
  setIsGenerating (false) 
}
};
//Apply generated content to form const applyGeneratedContent = () => {
  if (generatedContent) {
  //Extract all skills from categorized skills and properly type cast them const allCategorizedSkills = generatedContent.categorizedSkills;
const newSkills: string[] = [];
if (Array.isArray (categorySkills) ) {
  categorySkills.forEach (skill => {
  if (typeof skill === 'string' && skill && !skillTags.includes (skill) ) {
  
}
});
}
};
//Get category color //Send notification email const sendEnhancementNotification = async (userId: string, email: string) => {
  try {
  await supabase.functions.invoke ('send-email', {
  body: {
  <p>Your profile has been enhanced with AI. You're now more discoverable to recruiters and companies!</p> <p>We've added a professional summary and categorized your skills to help you stand out.</p> <p>You can review and edit these enhancements in your profile dashboard.</p> <div style="margin-top: 30px, padding-top: 20px, border-top: 1px solid #eee, "> <p style="color: #666, font-size: 12px, ">© $ {
  new Date () .getFullYear () 
}Zion Marketplace</p> 
}
}
};
if (skillTags.length === 0) {
  toast ({
  return;
}setIsSubmitting (true);
try {
  //For actual implementation with Supabase if (!user?.id) {
  try {
  const {
  data: aiData 
}= await supabase.functions.invoke ('talent-profile-enhancer', {
  body: {
  talentData: {
  name: values.name, title: values.title, bio: values.bio, skills: skillTags, location: values.location 
}
}
});
//Extract skills from each category and ensure they're strings Object.values (categorizedSkills) .forEach (categorySkills => {
  if (Array.isArray (categorySkills) ) {
  categorySkills.forEach (skill => {
  if (typeof skill === 'string'&& skill) {
  
}
});
//Create a unique set of skills finalSkills = [...new Set ([...skillTags, ...aiSkills]) ] 
}
}
}else if (generatedContent) {
  finalSummary = generatedContent.summary 
}//Get user email for notification const {
  data: userData 
}= await supabase.auth.getUser ();
const userEmail = userData.user?.email;
//Create the talent profile //In a real implementation, this would save to Supabase setTimeout ( () => {
  toast ({
  //Send notification email if we have user email if (userEmail && values.enhancedProfile) {
  sendEnhancementNotification (user.id, userEmail) 
}
}, 1500);
//Here would be the actual code to save the profile to Supabase /* const {
  error 
}= await supabase .from ('talent profiles') .insert ({
  user id: user.id, name: values.name, title: values.title, bio: values.bio, summary: finalSummary, location: values.location, skills: finalSkills.map (name => ({
  name, level: 4 
}) ), //Default skill level hourly rate: Number (values.hourlyRate);
availability status: values.availability;
//Other fields would be handled here 
});
if (error) throw error;
*/ setIsSubmitting (false);
}
};
return (<div className="max-w-4xl mx-auto p-4 md:p-6"> <Card className="bg-zion-blue-dark border-zion-blue-light"> <CardHeader> <CardTitle className="text-2xl text-white">Create Your Talent Profile</CardTitle> <CardDescription className="text-zion-slate"> Showcase your skills and experience to potential clients and employers. </CardDescription> </CardHeader> <Form {
  ...form 
}> <form onSubmit= {
  form.handleSubmit (onSubmit) 
}> <CardContent className="space-y-8"> {
  /* Basic Information */ 
}<div className="space-y-4"> <h3 className="text-lg font-medium text-white">Basic Information</h3> <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> <div className="col-span-1" > <FormField <FormItem> <FormLabel className="text-zion-slate-light">Full Name</FormLabel> <FormControl> <div className="relative"> <UserRound className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> <Input /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) 
}/> </div> <div className="col-span-1" > <FormField <FormItem> <FormLabel className="text-zion-slate-light">Professional Title</FormLabel> <FormControl> <div className="relative"> <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> <Input /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) 
}/> </div> <div className="col-span-1" > <FormField <FormItem> <FormLabel className="text-zion-slate-light">Location</FormLabel> <FormControl> <div className="relative"> <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> <Input /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) 
}/> </div> <div className="col-span-1" > <FormField <FormItem> <FormLabel className="text-zion-slate-light">Hourly Rate (USD) </FormLabel> <FormControl> <div className="relative"> <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate">$</span> <Input /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) 
}/> </div> </div> {
  /* Upload Avatar */ 
}<div className="space-y-2"> <FormLabel className="text-zion-slate-light">Profile Picture</FormLabel> <div className="flex items-center gap-6"> <div className="relative w-24 h-24 rounded-full overflow-hidden bg-zion-blue-light border border-zion-blue-light"> {
  uploadedAvatar ? (<AspectRatio ratio= {
  1/1 
}> <img src= {
  uploadedAvatar 
}alt="Avatar preview" className="w-full h-full object-cover" /> </AspectRatio>) : (<div className="flex items-center justify-center h-full"> <UserRound className="h-10 w-10 text-zion-slate opacity-50" /> </div>) 
}</div> <label className="flex items-center justify-center px-4 py-2 rounded-md bg-zion-purple hover:bg-zion-purple-dark text-white cursor-pointer transition-colors"> <Upload className="mr-2 h-4 w-4" /> <span>Upload Photo</span> <input type="file" accept="image/*" className="hidden" onChange= {
  handleAvatarUpload 
}/> </label> </div> <p className="text-sm text-zion-slate"> For best results, use an image at least 400x400 pixels in JPG, PNG, or GIF format. </p> </div> </div> <Separator className="bg-zion-blue-light/50" /> {
  /* Bio Section */ 
}<div className="space-y-4"> <h3 className="text-lg font-medium text-white" >Professional Bio</h3> <FormField <FormItem> <FormLabel className="text-zion-slate-light">About Yourself</FormLabel> <FormControl> <Textarea </FormDescription> </FormItem>) 
}/> {
  /* AI Enhancement Option */ 
}<FormField <FormItem className="flex flex-row items-center justify-between p-3 border border-zion-blue-light bg-zion-blue/30 rounded-md"> <div className="space-y-0.5"> <FormLabel className="text-white flex items-center"> <Sparkles className="w-4 h-4 mr-2 text-zion-purple" /> AI Profile Enhancement </FormLabel> <FormDescription className="text-zion-slate-light"> Let AI help optimize your profile for better visibility and engagement </FormDescription> </div> <FormControl> <Switch /> </FormControl> </FormItem>) 
}/> <Button type="button" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple/10" onClick= {
  generateEnhancedProfile 
}disabled= {
  isGenerating 
}> </Button> </div>) 
}{
  /* Generated Content Display */ 
}{
  generatedContent && (<div className="bg-zion-blue-light/20 border border-zion-blue-light rounded-md p-4"> <div className="flex items-center justify-between mb-3"> <h4 className="text-white font-medium flex items-center"> <Sparkles className="w-4 h-4 mr-2 text-zion-purple" /> AI-Generated Content </h4> <Button type="button" size="sm" className="bg-zion-purple hover:bg-zion-purple-dark text-white" onClick= {
  applyGeneratedContent 
}> <Check className="mr-1 h-3 w-3" /> Apply </Button> </div> <div className="space-y-4"> <div> <h5 className="text-zion-slate-light text-sm mb-1">Professional Summary</h5> <p className="text-zion-slate italic"> {
  generatedContent.summary 
}</p> </div> {
  generatedContent.categorizedSkills && (<div> <h5 className="text-zion-slate-light text-sm mb-1">Categorized Skills</h5> <div className="flex flex-wrap gap-2 mt-1"> {
  Object.entries (generatedContent.categorizedSkills) .map ( ([category, skills]) => (<div key= {
  category 
}className="flex items-center gap-2"> <Badge className= {
  `w-fit $ {
  getCategoryColor (category as CategoryType) 
}` 
}> {
  category 
}</Badge> <div className="flex flex-wrap gap-1"> {
  skills.map (skill => (<Badge key= {
  skill 
}className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none" > {
  skill 
}</Badge>) ) 
}</div> </div>) ) 
}</div> </div>) 
}</div> </div>) 
}</div> <Separator className="bg-zion-blue-light/50" /> {
  /* Skills and Availability */ 
}<div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {
  /* Skills Section */ 
}<div className="space-y-4"> <h3 className="text-lg font-medium text-white" >Skills & Expertise</h3> <FormField <FormItem> <FormLabel className="text-zion-slate-light">Skills</FormLabel> <div className="flex gap-2"> <FormControl> <Input /> </FormControl> <Button type="button" variant="outline" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white" onClick= {
  handleAddSkill 
}> Add </Button> </div> <FormDescription className="text-zion-slate"> Press Enter or click Add to include a skill </FormDescription> <FormMessage className="text-red-400" /> </FormItem>) 
}/> <div className="flex flex-wrap gap-2 mt-2"> {
  skillTags.map (skill => (<Badge key= {
  skill 
}className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none pl-2 pr-1 py-1.5 flex items-center gap-1" > {
  skill 
}<button className="rounded-full hover:bg-zion-purple-dark/20 p-0.5" > <X className="h-3 w-3" /> </button> </Badge>) ) 
}{
  skillTags.length === 0 && (<p className="text-zion-slate text-sm italic">No skills added yet</p>) 
}</div> </div> {
  /* Availability Section */ 
}<div className="space-y-4"> <h3 className="text-lg font-medium text-white" >Availability</h3> <FormField <FormLabel className="text-zion-slate-light">Current Status</FormLabel> <FormControl> <div className="space-y-2"> <div className="flex items-center space-x-2" > <input /> <label htmlFor="available" className="text-white flex items-center gap-2"> <div className="h-2 w-2 rounded-full bg-green-500"></div> Available Now </label> </div> <div className="flex items-center space-x-2" > <input /> <label htmlFor="limited" className="text-white flex items-center gap-2"> <div className="h-2 w-2 rounded-full bg-yellow-500"></div> Limited Availability </label> </div> <div className="flex items-center space-x-2" > <input /> <label htmlFor="unavailable" className="text-white flex items-center gap-2"> <div className="h-2 w-2 rounded-full bg-red-500"></div> Currently Unavailable </label> </div> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) 
}/> <div className="pt-2"> <FormLabel className="text-zion-slate-light" >Availability Message</FormLabel> <Textarea placeholder="Describe your availability, working hours, or when you'll be available next..." className="mt-1.5 bg-zion-blue border-zion-blue-light text-white" /> <FormDescription className="text-zion-slate mt-1.5 text-sm"> Let clients know about your working hours, time zone, or availability for calls. </FormDescription> </div> </div> </div> </CardContent> <CardFooter className="border-t border-zion-blue-light pt-6"> <div className="flex flex-col sm:flex-row gap-4 w-full sm:justify-between" > <Button type="button" variant="outline" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white" > Save as Draft </Button> <Button </Button> </div> </CardFooter> </form> </Form> </Card> </div>) 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/TalentRegistrationForm.tsx
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
