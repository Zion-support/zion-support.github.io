import React, { useState } from &quot;react&quot;;
import { useForm, useFieldArray } from &quot;react-hook-form&quot;;
import { zodResolver } from &quot;@hookform/resolvers/zod&quot;;
import { z } from &quot;zod&quot;;
import { useNavigate } from &quot;react-router-dom&quot;;
import { 
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage 
} from &quot;@/components/ui/form&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Textarea } from &quot;@/components/ui/textarea&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { 
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue 
} from &quot;@/components/ui/select&quot;;
import { AspectRatio } from &quot;@/components/ui/aspect-ratio&quot;;
import { Separator } from &quot;@/components/ui/separator&quot;;
import { toast } from &quot;@/components/ui/use-toast&quot;;
import { 
  User, Briefcase, Star, Calendar, Globe, DollarSign, FileText, Link, Upload, ArrowRight, ArrowLeft, 
  Trash2, Plus, CheckCircle2
} from &quot;lucide-react&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { useTalentProfileEnhancer } from &quot;@/hooks/useTalentProfileEnhancer&quot;;
import { supabase } from &quot;@/integrations/supabase/client&quot;;

// Define the form schema with validation
const talentSchema = z.object({
  // Step 1: Basic Info
  basicInfo: z.object({
    fullName: z.string().min(2, &quot;Name must be at least 2 characters&quot;),
    professionalTitle: z.string().min(2, &quot;Professional title is required&quot;),
    profilePicture: z.any().optional()}),
  
  // Step 2: Experience
  experience: z.object({
    bio: z.string().min(50, &quot;Bio must be at least 50 characters&quot;),
    keyProjects: z.array(
      z.object({
        title: z.string().min(2, &quot;Project title is required&quot;),
        description: z.string().min(10, &quot;Project description is required&quot;)})
    ).min(1, &quot;Add at least one key project&quot;),
    yearsOfExperience: z.string().min(1, &quot;Years of experience is required&quot;)}),
  
  // Step 3: Skills & Tech Stack
  skills: z.object({
    skillsList: z.string().min(2, &quot;Add at least one skill&quot;),
    toolsUsed: z.string().optional()}),
  
  // Step 4: Availability & Preferences
  availability: z.object({
    availabilityType: z.string().min(1, &quot;Select your availability&quot;),
    timezone: z.string().min(1, &quot;Timezone is required&quot;),
    hourlyRate: z.string().optional(),
    portfolioLinks: z.array(
      z.object({
        url: z.string().url(&quot;Must be a valid URL&quot;).min(5, &quot;URL is required&quot;)})
    ).optional().default([]),
    cv: z.any().optional()})});

type TalentFormValues = z.infer<typeof talentSchema>;

export function TalentOnboardingForm() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [profilePictureUrl, setProfilePictureUrl] = useState<string | null>(null);
  const [cvFileName, setCvFileName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessScreen, setShowSuccessScreen] = useState(false);
  
  const { enhanceProfile, isGenerating } = useTalentProfileEnhancer();
  
  const totalSteps = 4;
  
  const form = useForm<TalentFormValues>({
    resolver: zodResolver(talentSchema),
    defaultValues: {
      basicInfo: {
        fullName: user?.displayName || "&quot;,
        professionalTitle: "&quot;,
        profilePicture: undefined},
      experience: {
        bio: "&quot;,
        keyProjects: [{ title: "&quot;, description: "&quot; }],
        yearsOfExperience: "&quot;},
      skills: {
        skillsList: "&quot;,
        toolsUsed: "&quot;},
      availability: {
        availabilityType: "&quot;,
        timezone: "&quot;,
        hourlyRate: "&quot;,
        portfolioLinks: [{ url: "&quot; }],
        cv: undefined}},
    mode: &quot;onChange&quot;});
  
  const { fields: projectFields, append: appendProject, remove: removeProject } = 
    useFieldArray({
      name: &quot;experience.keyProjects&quot;,
      control: form.control});
    
  const { fields: linkFields, append: appendLink, remove: removeLink } = 
    useFieldArray({
      name: &quot;availability.portfolioLinks&quot;,
      control: form.control});

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
    form.setValue(&quot;basicInfo.profilePicture&quot;, file);
  };

  // Handle CV upload
  const handleCvUpload = async (file: File) => {
    const fileName = `cv-${user?.id}-${Date.now()}`;
    const { error: cvError } = await supabase.storage
      .from('resumes')
      .upload(fileName, file);
      
    if (cvError) {
      console.error(&quot;Error uploading CV:&quot;, cvError);
      throw new Error(&quot;Failed to upload CV&quot;);
    }
    
    // Get the public URL
    const { data: { publicUrl } } = supabase.storage
      .from('resumes')
      .getPublicUrl(fileName);
    
    return publicUrl;
  };

  // Rest of the file remains unchanged...
  // [Previous implementation continues...]

  return null;
}