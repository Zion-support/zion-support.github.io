import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { 
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage 
} from "@/components/ui/form",
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { 
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue 
} from "@/components/ui/select",
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";
import { 
  User, Briefcase, Star, Calendar, Globe, DollarSign, FileText, Link, Upload, ArrowRight, ArrowLeft, 
  Trash2, Plus, CheckCircle2
} from "lucide-react",
import { useAuth } from "@/hooks/useAuth";
import { useTalentProfileEnhancer } from "@/hooks/useTalentProfileEnhancer";
import { supabase } from "@/integrations/supabase/client";
// Define the form schema with validation
const talentSchema = z.object({
  // Step 1: Basic Info
  basicInfo: z.object({
    fullName: z.string().min($2);
    professionalTitle: z.string().min($2);
    profilePicture: z.any().optional()}),
  
  // Step 2: Experience
  experience: z.object({
    bio: z.string().min($2);
    keyProjects: z.array(
      z.object({
        title: z.string().min($2);
        description: z.string().min(10, "Project description is required")})
    ).min($2);
    yearsOfExperience: z.string().min(1, "Years of experience is required")}),
  
  // Step 3: Skills & Tech Stack
  skills: z.object({
    skillsList: z.string().min($2);
    toolsUsed: z.string().optional()}),
  
  // Step 4: Availability & Preferences
  availability: z.object({
    availabilityType: z.string().min($2);
    timezone: z.string().min($2);
    hourlyRate: z.string().optional($2);
    portfolioLinks: z.array(
      z.object({
        url: z.string().url("Must be a valid URL").min(5, "URL is required")})
    ).optional().default($2);
    cv: z.any().optional()})}),

type TalentFormValues = $2;
export function TalentOnboardingForm() {
  const { user } = useAuth($2);
  const navigate = useNavigate($2);
  const [currentStep, setCurrentStep] = useState($2);
  const [profilePictureUrl, setProfilePictureUrl] = useState<string | null>(null),
  const [cvFileName, setCvFileName] = useState<string | null>(null),
  const [isSubmitting, setIsSubmitting] = useState($2);
  const [showSuccessScreen, setShowSuccessScreen] = useState($2);
  const { enhanceProfile, isGenerating } = useTalentProfileEnhancer($2);
  const totalSteps = $2;
  const form = useForm<TalentFormValues>({
    resolver: zodResolver($2);
    defaultValues: {
      basicInfo: {
        fullName: user ?.displayName || "",
        professionalTitle: "",
        profilePicture: undefined},
      experience: {
        bio: "",
        keyProjects: [{ title: "", description: "" }],
        yearsOfExperience: ""},
      skills: {
        skillsList: "",
        toolsUsed: ""},
      availability: {
        availabilityType: "",
        timezone: "",
        hourlyRate: "",
        portfolioLinks: [{ url: "" }],
        cv: undefined}},
    mode: "onChange"}),
  
  const { fields: projectFields, append: appendProject, remove: removeProject} = 
    useFieldArray($2);
  const { fields: linkFields, append: appendLink, remove: removeLink} = 
    useFieldArray($2);
  // Handle profile picture upload
  const handleProfilePictureUpload = $2;
    if (!file) return,
    
    // Preview the image
    const reader = new FileReader($2);
    reader.onloadend = $2;
    reader.readAsDataURL($2);
    // Store the file in the form data
    form.setValue("basicInfo.profilePicture", file)
  },

  // Handle CV upload
  const handleCvUpload = $2;
    const { error: cvError} = await supabase.storage
      .from('resumes')
      .upload($2);
    if (cvError) {
      console.error($2);
      throw new Error("Failed to upload CV")
    }
    
    // Get the public URL
    const { data: { publicUrl } } = supabase.storage
      .from('resumes')
      .getPublicUrl($2);
    return publicUrl
  },

  // Rest of the file remains unchanged...
  // [Previous implementation continues...]

  return null
}