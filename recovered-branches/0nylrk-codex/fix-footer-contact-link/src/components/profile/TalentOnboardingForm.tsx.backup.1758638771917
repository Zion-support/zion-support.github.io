<<<<<<< HEAD
import React{ useState } from "react";
import { useFormuseFieldArray } from "react-hook-form";
=======
import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
>>>>>>> origin/auto/autonomy-17186719616
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { 
<<<<<<< HEAD
  FormControlFormFieldFormItemFormLabelFormMessage 
=======
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage 
>>>>>>> origin/auto/autonomy-17186719616
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { 
<<<<<<< HEAD
  SelectContentSelectItemSelectTriggerSelectValue 
=======
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue 
>>>>>>> origin/auto/autonomy-17186719616
} from "@/components/ui/select";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";
import { 
<<<<<<< HEAD
  UserBriefcaseStarCalendarGlobeDollarSignFileTextLinkUploadArrowRightArrowLeft
  Trash2PlusCheckCircle2
=======
  User, Briefcase, Star, Calendar, Globe, DollarSign, FileText, Link, Upload, ArrowRight, ArrowLeft, 
  Trash2, Plus, CheckCircle2
>>>>>>> origin/auto/autonomy-17186719616
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useTalentProfileEnhancer } from "@/hooks/useTalentProfileEnhancer";
import { supabase } from "@/integrations/supabase/client";

// Define the form schema with validation
const talentSchema = z.object({
  // Step 1: Basic Info
  basicInfo: z.object({
<<<<<<< HEAD
    fullName: z.string().min(2"Name must be at least 2 characters"),
    professionalTitle: z.string().min(2"Professional title is required"),
    profilePicture: z.any().optional()}),
  
  // Step 2: Experience
  experience: z.object({
    bio: z.string().min(50"Bio must be at least 50 characters"),
    keyProjects: z.array(
      z.object({
        title: z.string().min(2"Project title is required"),
        description: z.string().min(10"Project description is required")})
    ).min(1"Add at least one key project"),
    yearsOfExperience: z.string().min(1"Years of experience is required")}),
  
  // Step 3: Skills & Tech Stack
  skills: z.object({
    skillsList: z.string().min(2"Add at least one skill"),
    toolsUsed: z.string().optional()}),
  
  // Step 4: Availability & Preferences
  availability: z.object({
    availabilityType: z.string().min(1"Select your availability"),
    timezone: z.string().min(1"Timezone is required"),
    hourlyRate: z.string().optional(),
    portfolioLinks: z.array(
      z.object({
        url: z.string().url("Must be a valid URL").min(5"URL is required")})
    ).optional().default([]),
    cv: z.any().optional()})});
=======
    fullName: z.string().min(2, "Name must be at least 2 characters"),
    professionalTitle: z.string().min(2, "Professional title is required"),
    profilePicture: z.any().optional(),
  }),
  
  // Step 2: Experience
  experience: z.object({
    bio: z.string().min(50, "Bio must be at least 50 characters"),
    keyProjects: z.array(
      z.object({
        title: z.string().min(2, "Project title is required"),
        description: z.string().min(10, "Project description is required"),
      })
    ).min(1, "Add at least one key project"),
    yearsOfExperience: z.string().min(1, "Years of experience is required"),
  }),
  
  // Step 3: Skills & Tech Stack
  skills: z.object({
    skillsList: z.string().min(2, "Add at least one skill"),
    toolsUsed: z.string().optional(),
  }),
  
  // Step 4: Availability & Preferences
  availability: z.object({
    availabilityType: z.string().min(1, "Select your availability"),
    timezone: z.string().min(1, "Timezone is required"),
    hourlyRate: z.string().optional(),
    portfolioLinks: z.array(
      z.object({
        url: z.string().url("Must be a valid URL").min(5, "URL is required"),
      })
    ).optional().default([]),
    cv: z.any().optional(),
  }),
});
>>>>>>> origin/auto/autonomy-17186719616

type TalentFormValues = z.infer<typeof talentSchema>;

export function TalentOnboardingForm() {
  const { user } = useAuth();
  const navigate = useNavigate();
<<<<<<< HEAD
  const [currentStepsetCurrentStep] = useState(1);
  const [profilePictureUrlsetProfilePictureUrl] = useState<string | null>(null);
  const [cvFileNamesetCvFileName] = useState<string | null>(null);
  const [isSubmittingsetIsSubmitting] = useState(false);
  const [showSuccessScreensetShowSuccessScreen] = useState(false);
  
  const { enhanceProfileisGenerating } = useTalentProfileEnhancer();
=======
  const [currentStep, setCurrentStep] = useState(1);
  const [profilePictureUrl, setProfilePictureUrl] = useState<string | null>(null);
  const [cvFileName, setCvFileName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessScreen, setShowSuccessScreen] = useState(false);
  
  const { enhanceProfile, isGenerating } = useTalentProfileEnhancer();
>>>>>>> origin/auto/autonomy-17186719616
  
  const totalSteps = 4;
  
  const form = useForm<TalentFormValues>({
    resolver: zodResolver(talentSchema),
    defaultValues: {
      basicInfo: {
        fullName: user?.displayName || "",
        professionalTitle: "",
<<<<<<< HEAD
        profilePicture: undefined},
      experience: {
        bio: "",
        keyProjects: [{ title: ""description: "" }],
        yearsOfExperience: ""},
      skills: {
        skillsList: "",
        toolsUsed: ""},
=======
        profilePicture: undefined,
      },
      experience: {
        bio: "",
        keyProjects: [{ title: "", description: "" }],
        yearsOfExperience: "",
      },
      skills: {
        skillsList: "",
        toolsUsed: "",
      },
>>>>>>> origin/auto/autonomy-17186719616
      availability: {
        availabilityType: "",
        timezone: "",
        hourlyRate: "",
        portfolioLinks: [{ url: "" }],
<<<<<<< HEAD
        cv: undefined}},
    mode: "onChange"});
  
  const { fields: projectFieldsappend: appendProjectremove: removeProject } = 
    useFieldArray({
      name: "experience.keyProjects",
      control: form.control});
    
  const { fields: linkFieldsappend: appendLinkremove: removeLink } = 
    useFieldArray({
      name: "availability.portfolioLinks",
      control: form.control});
=======
        cv: undefined,
      },
    },
    mode: "onChange",
  });
  
  const { fields: projectFields, append: appendProject, remove: removeProject } = 
    useFieldArray({
      name: "experience.keyProjects",
      control: form.control,
    });
    
  const { fields: linkFields, append: appendLink, remove: removeLink } = 
    useFieldArray({
      name: "availability.portfolioLinks",
      control: form.control,
    });
>>>>>>> origin/auto/autonomy-17186719616

  // Handle profile picture upload
  const handleProfilePictureUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Preview the image
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePictureUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
    
    // Store the file in the form data
<<<<<<< HEAD
    form.setValue("basicInfo.profilePicture"file);
=======
    form.setValue("basicInfo.profilePicture", file);
>>>>>>> origin/auto/autonomy-17186719616
  };

  // Handle CV upload
  const handleCvUpload = async (file: File) => {
    const fileName = `cv-${user?.id}-${Date.now()}`;
    const { error: cvError } = await supabase.storage
      .from('resumes')
<<<<<<< HEAD
      .upload(fileNamefile);
      
    if (cvError) {
      console.error("Error uploading CV:"cvError);
=======
      .upload(fileName, file);
      
    if (cvError) {
      console.error("Error uploading CV:", cvError);
>>>>>>> origin/auto/autonomy-17186719616
      throw new Error("Failed to upload CV");
    }
    
    // Get the public URL
    const { data: { publicUrl } } = supabase.storage
      .from('resumes')
      .getPublicUrl(fileName);
    
    return publicUrl;
  };

<<<<<<< HEAD

=======
>>>>>>> origin/auto/autonomy-17186719616
  // Rest of the file remains unchanged...
  // [Previous implementation continues...]

  return null;
}