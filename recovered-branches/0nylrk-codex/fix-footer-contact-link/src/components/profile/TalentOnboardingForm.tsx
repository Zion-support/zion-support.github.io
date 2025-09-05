<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react",
import { useForm, useFieldArray } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import { z } from "zod",
import { useNavigate } from "react-router-dom",
import { 
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage 
} from "@/components/ui/form",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Button } from "@/components/ui/button",
import { 
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue 
} from "@/components/ui/select",
import { AspectRatio } from "@/components/ui/aspect-ratio",
import { Separator } from "@/components/ui/separator",
import { toast } from "@/components/ui/use-toast",
import { 
  User, Briefcase, Star, Calendar, Globe, DollarSign, FileText, Link, Upload, ArrowRight, ArrowLeft, 
  Trash2, Plus, CheckCircle2
} from "lucide-react",
import { useAuth } from "@/hooks/useAuth",
import { useTalentProfileEnhancer } from "@/hooks/useTalentProfileEnhancer",
import { supabase } from "@/integrations/supabase/client",
=======
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
=======
import React, {_useState} from "react";
import {_Form, _FormControl, _FormField, _FormItem, _FormLabel, _FormMessage} from "@/components/ui/form";
import {_Select, _SelectContent, _SelectItem, _SelectTrigger, _SelectValue} from "@/components/ui/select";
import {_User, _Briefcase, _Star, _Calendar, _Globe, _DollarSign, _FileText, _Link, _Upload, _ArrowRight, _ArrowLeft, _Trash2, _Plus, _CheckCircle2} from "lucide-react";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
// Define the form schema with validation
const _talentSchema = z.object({_// Step 1: Basic Info
  basicInfo: z.object({
<<<<<<< HEAD
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
=======
    fullName: z.string().min(2, _"Name must be at least 2 characters"), _professionalTitle: z.string().min(2, _"Professional title is required"), _profilePicture: z.any().optional()}),
  
  // Step 2: Experience
  experience: z.object({_bio: z.string().min(50, _"Bio must be at least 50 characters"), _keyProjects: z.array(
      z.object({
        title: z.string().min(2, _"Project title is required"), _description: z.string().min(10, _"Project description is required")})
    ).min(1, "Add at least one key project"),
    yearsOfExperience: z.string().min(1, "Years of experience is required")}),
  
  // Step 3: Skills & Tech Stack
  skills: z.object({_skillsList: z.string().min(2, _"Add at least one skill"), _toolsUsed: z.string().optional()}),
  
  // Step 4: Availability & Preferences
  availability: z.object({_availabilityType: z.string().min(1, _"Select your availability"), _timezone: z.string().min(1, _"Timezone is required"), _hourlyRate: z.string().optional(), _portfolioLinks: z.array(
      z.object({
        url: z.string().url("Must be a valid window.URL").min(5, _"window.URL is required")})
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    ).optional().default([]),
    cv: z.any().optional()})}),

type TalentFormValues = z.infer<typeof talentSchema>,

<<<<<<< HEAD
export function TalentOnboardingForm() {
  const { user } = useAuth(),
  const navigate = useNavigate(),
  const [currentStep, setCurrentStep] = useState(1),
  const [profilePictureUrl, setProfilePictureUrl] = useState<string | null>(null),
  const [cvFileName, setCvFileName] = useState<string | null>(null),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [showSuccessScreen, setShowSuccessScreen] = useState(false),
  
  const { enhanceProfile, isGenerating } = useTalentProfileEnhancer(),
  
  const totalSteps = 4,
=======
export function TalentOnboardingForm() {_const { user} = useAuth();
  const _navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [profilePictureUrl, setProfilePictureUrl] = useState<string | null>(null);
  const [cvFileName, setCvFileName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessScreen, setShowSuccessScreen] = useState(false);
  
  const {_enhanceProfile, _isGenerating} = useTalentProfileEnhancer();
  
  const _totalSteps = 4;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  const _form = useForm<TalentFormValues>({_resolver: zodResolver(talentSchema), _defaultValues: {
      basicInfo: {
<<<<<<< HEAD
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
=======
        fullName: user?.displayName || "", _professionalTitle: "", _profilePicture: undefined},
      experience: {_bio: "", _keyProjects: [{ title: "", _description: ""}],
        yearsOfExperience: ""},
      skills: {_skillsList: "", _toolsUsed: ""},
      availability: {_availabilityType: "", _timezone: "", _hourlyRate: "", _portfolioLinks: [{ url: ""}],
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        cv: undefined}},
<<<<<<< HEAD
    mode: "onChange"}),
  
<<<<<<< HEAD
  const { fields: projectFields, append: appendProject, remove: removeProject } = 
    useFieldArray({
      name: "experience.keyProjects",
      control: form.control}),
    
  const { fields: linkFields, append: appendLink, remove: removeLink } = 
    useFieldArray({
      name: "availability.portfolioLinks",
      control: form.control}),
=======
    mode: &quot;onChange&quot;});
  
  const { fields: projectFields, append: appendProject, remove: removeProject } = 
    useFieldArray({
      name: &quot;experience.keyProjects&quot;,
      control: form.control});
    
  const { fields: linkFields, append: appendLink, remove: removeLink } = 
    useFieldArray({
      name: &quot;availability.portfolioLinks&quot;,
      control: form.control});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  // Handle profile picture upload
  const handleProfilePictureUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0],
    if (!file) return,
    
    // Preview the image
    const reader = new FileReader(),
    reader.onloadend = () => {
      setProfilePictureUrl(reader.result as string)
    },
    reader.readAsDataURL(file),
=======
  const {_fields: projectFields, _append: appendProject, _remove: removeProject} = 
    useFieldArray({_name: "experience.keyProjects", _control: form.control});
    
  const {_fields: linkFields, _append: appendLink, _remove: removeLink} = 
    useFieldArray({_name: "availability.portfolioLinks", _control: form.control});

  // Handle profile picture upload
  const _handleProfilePictureUpload = async (_e: React.ChangeEvent<HTMLInputElement>) => {_const _file = e.target.files?.[0];
    if (!file) return;
    
    // Preview the image
    const _reader = new FileReader();
    reader.onloadend = () => {
      setProfilePictureUrl(reader.result as string);};
    reader.readAsDataURL(file);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    // Store the file in the form data
<<<<<<< HEAD
    form.setValue("basicInfo.profilePicture", file)
  },
=======
    form.setValue(&quot;basicInfo.profilePicture&quot;, file);
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  // Handle CV upload
<<<<<<< HEAD
  const handleCvUpload = async (file: File) => {
    const fileName = `cv-${user?.id}-${Date.now()}`,
    const { error: cvError } = await supabase.storage
=======
  const _handleCvUpload = async (_file: File) => {_const _fileName = `cv-${user?.id}-${_Date.now()}`;
    const {_error: cvError} = await supabase.storage
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      .from('resumes')
      .upload(fileName, file),
      
<<<<<<< HEAD
    if (cvError) {
<<<<<<< HEAD
      console.error("Error uploading CV:", cvError),
      throw new Error("Failed to upload CV")
=======
      console.error(&quot;Error uploading CV:&quot;, cvError);
      throw new Error(&quot;Failed to upload CV&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
=======
    if (cvError) {_throw new Error("Failed to upload CV");}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    // Get the public window.URL
    const {_data: { publicUrl} } = supabase.storage
      .from('resumes')
      .getPublicUrl(fileName),
    
    return publicUrl
  },

  // Rest of the file remains unchanged...
  // [Previous implementation continues...]

  return null
}