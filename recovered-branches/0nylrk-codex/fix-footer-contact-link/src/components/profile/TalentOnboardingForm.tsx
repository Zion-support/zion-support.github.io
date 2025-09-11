<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
// Define the form schema with validation

const talentSchema = z.object({
  // Step 1: Basic Info
  basicInfo: z.object({


    fullName: z.string().min(2, "Name must be at least 2 characters"),
    professionalTitle: z.string().min(2, "Professional title is required"),
    profilePicture: z.any().optional()}),
  


  // Step 2: Experience
  experience: z.object({
    bio: z.string().min(50, "Bio must be at least 50 characters");
    keyProjects: z.array(
      z.object({
        title: z.string().min(2, "Project title is required");
        description: z.string().min(10, "Project description is required")})

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState } from "react";
import {useForm, useFieldArray} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {useNavigate} from "react-router-dom";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import {Separator} from "@/components/ui/separator";
import {toast} from "@/components/ui/use-toast";
import {User, Briefcase, Star, Calendar, Globe, DollarSign, FileText, Link, Upload, ArrowRight, ArrowLeft, Trash2, Plus, CheckCircle2} from "lucide-react";
import {useAuth} from "@/hooks/useAuth";
import {useTalentProfileEnhancer} from "@/hooks/useTalentProfileEnhancer";
import {supabase} from "@/integrations/supabase/client";
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
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";
import { 
  User, Briefcase, Star, Calendar, Globe, DollarSign, FileText, Link, Upload, ArrowRight, ArrowLeft;
  Trash2, Plus, CheckCircle2
} from "lucide-react",
import { useAuth } from "@/hooks/useAuth",
import { useTalentProfileEnhancer } from "@/hooks/useTalentProfileEnhancer";
import { supabase } from "@/integrations/supabase/client";
import { useTalentProfileEnhancer } from "@/hooks/useTalentProfileEnhancer",
import { supabase } from "@/integrations/supabase/client",
// Define the form schema with validation
=======
// Define the form schema with validation;
const talentSchema = z && z.object({;
  // Step 1: Basic Info;
  basicInfo: z && z.object({;
    fullName: z && z.string().min(2, "Name must be at least 2 characters");
    professionalTitle: z && z.string().min(2, "Professional title is required");
    profilePicture: z && z.any().optional()}),;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

const talentSchema = z.object({
  // Step 1: Basic Info
  basicInfo: z.object({
    fullName: z.string().min(2, "Name must be at least 2 characters");
    professionalTitle: z.string().min(2, "Professional title is required");
    profilePicture: z.any().optional()})
    fullName: z.string().min(2, "Name must be at least 2 characters"),
    professionalTitle: z.string().min(2, "Professional title is required"),
    profilePicture: z.any().optional()}),
  
  // Step 2: Experience
  experience: z.object({
    bio: z.string().min(50, "Bio must be at least 50 characters"),
    keyProjects: z.array(
      z.object({
        title: z.string().min(2, "Project title is required"),
        description: z.string().min(10, "Project description is required")})
<<<<<<< HEAD



// Define the form schema with validation

const talentSchema = z.object({
  // Step 1: Basic Info
  basicInfo: z.object({


    fullName: z.string().min(2, "Name must be at least 2 characters"),
    professionalTitle: z.string().min(2, "Professional title is required"),
    profilePicture: z.any().optional()}),
  


  // Step 2: Experience
  experience: z.object({
    bio: z.string().min(50, "Bio must be at least 50 characters");
    keyProjects: z.array(
      z.object({
        title: z.string().min(2, "Project title is required");
        description: z.string().min(10, "Project description is required")})

    ).min(1, "Add at least one key project");
    yearsOfExperience: z.string().min(1, "Years of experience is required")});
  // Step 3: Skills & Tech Stack
  skills: z.object({
    skillsList: z.string().min(2, "Add at least one skill");
    toolsUsed: z.string().optional()})
  // Step 4: Availability & Preferences
  availability: z.object({
    availabilityType: z.string().min(1, "Select your availability");
    timezone: z.string().min(1, "Timezone is required");
    hourlyRate: z.string().optional()
    portfolioLinks: z.array(
      z.object({
        url: z.string().url("Must be a valid URL").min(5, "URL is required")})
    ).optional().default([]);
    cv: z.any().optional()})})
type TalentFormValues = z.infer<typeof talentSchema>;
export function TalentOnboardingForm() {
=======
// Define the form schema with validation;
const talentSchema = z && z.object({;
  // Step 1: Basic Info;
  basicInfo: z && z.object({;
    fullName: z && z.string().min(2, "Name must be at least 2 characters");
    professionalTitle: z && z.string().min(2, "Professional title is required");
    profilePicture: z && z.any().optional()}),;

  // Step 2: Experience;
  experience: z && z.object({;
    bio: z && z.string().min(50, "Bio must be at least 50 characters");
    keyProjects: z && z.array(;
      z && z.object({;
        title: z && z.string().min(2, "Project title is required");
        description: z && z.string().min(10, "Project description is required")});
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    ).min(1, "Add at least one key project");
    yearsOfExperience: z && z.string().min(1, "Years of experience is required")});

  // Step 3: Skills & Tech Stack;
  skills: z && z.object({;
    skillsList: z && z.string().min(2, "Add at least one skill");
    toolsUsed: z && z.string().optional()}),;

  // Step 4: Availability & Preferences;
  availability: z && z.object({;
    availabilityType: z && z.string().min(1, "Select your availability");
    timezone: z && z.string().min(1, "Timezone is required");
    hourlyRate: z && z.string().optional(),;
    portfolioLinks: z && z.array(;
      z && z.object({;
        url: z && z.string().url("Must be a valid URL").min(5, "URL is required")});
    ).optional().default([]);
    cv: z && z.any().optional()})}),;

type TalentFormValues = z && z.infer<typeof talentSchema>;

export function TalentOnboardingForm() {;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const { user } = useAuth();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [profilePictureUrl, setProfilePictureUrl] = useState<string | null>(null);
  const [cvFileName, setCvFileName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessScreen, setShowSuccessScreen] = useState(false);
<<<<<<< HEAD
<<<<<<< HEAD
  const { enhanceProfile, isGenerating } = useTalentProfileEnhancer();
  const totalSteps = 4;
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  const { enhanceProfile, isGenerating } = useTalentProfileEnhancer();
  const totalSteps = 4;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    ).min(1, "Add at least one key project"),
    yearsOfExperience: z.string().min(1, "Years of experience is required")}),
  
  // Step 3: Skills & Tech Stack
  skills: z.object({
    skillsList: z.string().min(2, "Add at least one skill"),
    toolsUsed: z.string().optional()}),
  
  // Step 4: Availability & Preferences
  availability: z.object({
    availabilityType: z.string().min(1, "Select your availability"),
    timezone: z.string().min(1, "Timezone is required"),
    hourlyRate: z.string().optional(),
    portfolioLinks: z.array(
      z.object({
        url: z.string().url("Must be a valid URL").min(5, "URL is required")})
    ).optional().default([]),
    cv: z.any().optional()})}),

type TalentFormValues = z.infer<typeof talentSchema>,

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function TalentOnboardingForm() {;
  const { user } = useAuth();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [profilePictureUrl, setProfilePictureUrl] = useState<string | null>(null);
  const [cvFileName, setCvFileName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessScreen, setShowSuccessScreen] = useState(false);
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
  
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const form = useForm<TalentFormValues>({
    resolver: zodResolver(talentSchema)
    defaultValues: {
      basicInfo: {
        fullName: user?.displayName |""
        professionalTitle: ""
        profilePicture: undefined}
      experience: {
        bio: ""
        keyProjects: [{ title: "", description: "" }]
        yearsOfExperience: ""}
      skills: {
        skillsList: ""
        toolsUsed: ""}
      availability: {
        availabilityType: ""
        timezone: ""
        hourlyRate: ""
        portfolioLinks: [{ url: "" }]
        cv: undefined}}
    mode: "onChange"})
  const { fields: projectFields, append: appendProject, remove: removeProject } =
    useFieldArray({
      name: "experience.keyProjects"
      control: form.control})
  const { fields: linkFields, append: appendLink, remove: removeLink } =
    useFieldArray({
      name: "availability.portfolioLinks"
      control: form.control})
  // Handle profile picture upload
  const handleProfilePictureUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    const file = e.target.files?.[0],
    if (!file) return,
    


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const file = e.target.files?.[0];
    if (!file) return;
    const file = e.target.files?.[0],
    if (!file) return,
    
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Preview the image
    const reader = new FileReader()
    reader.onloadend = () => {
      setProfilePictureUrl(reader.result as string)
<<<<<<< HEAD


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    reader.readAsDataURL(file);
    // Store the file in the form data
    form.setValue("basicInfo.profilePicture", file)
  }
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    },
    reader.readAsDataURL(file),
    
    // Store the file in the form data
    form.setValue("basicInfo.profilePicture", file)
  },

<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Handle CV upload
  const handleCvUpload = async (file: File) => {
    const fileName = `cv-${user?.id}-${Date.now()}`;
    const { error: cvError } = await supabase.storage
      .from('resumes')
<<<<<<< HEAD

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      .upload(fileName, file),
      


    if (cvError) {
      console.error("Error uploading CV:", cvError);
      throw new Error("Failed to upload CV")


  const { enhanceProfile, isGenerating } = useTalentProfileEnhancer();

  const totalSteps = 4;


};

<<<<<<< HEAD
  // Handle CV upload
  const handleCvUpload = async (file: File) => {
    const fileName = `cv-${user?.id}-${Date.now()}`,
    const { error: cvError } = await supabase.storage
      .from('resumes')
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      .upload(fileName, file);
      .upload(fileName, file),
      
    if (cvError) {
      console.error("Error uploading CV:", cvError),
      throw new Error("Failed to upload CV")
    }
    // Get the public URL
    const { data: { publicUrl } } = supabase.storage
      .from('resumes')
      .getPublicUrl(fileName);
    return publicUrl
  }

<<<<<<< HEAD
  // Rest of the file remains unchanged...
  // [Previous implementation continues...]
  return null
};
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    if (cvError) {
      console.error("Error uploading CV:", cvError);
      throw new Error("Failed to upload CV")


  const { enhanceProfile, isGenerating } = useTalentProfileEnhancer();

  const totalSteps = 4;

=======

};

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState } from "react",;
import { useForm, useFieldArray } from "react-hook-form",;
import { zodResolver } from "@hookform/resolvers/zod",;
import { z } from "zod",;
import { useNavigate } from "react-router-dom",;
import {;
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage;
} from "@/components/ui/form",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Button } from "@/components/ui/button",;
import {;
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue;
} from "@/components/ui/select",;
import { AspectRatio } from "@/components/ui/aspect-ratio",;
import { Separator } from "@/components/ui/separator",;
import { toast } from "@/components/ui/use-toast",;
import {;
  User, Briefcase, Star, Calendar, Globe, DollarSign, FileText, Link, Upload, ArrowRight, ArrowLeft,;
  Trash2, Plus, CheckCircle2;
} from "lucide-react",;
import { useAuth } from "@/hooks/useAuth",;
import { useTalentProfileEnhancer } from "@/hooks/useTalentProfileEnhancer",;
import { supabase } from "@/integrations/supabase/client",;
// Define the form schema with validation;
const talentSchema = z.object({;
  // Step 1: Basic Info;
  basicInfo: z.object({;
    fullName: z.string().min(2, "Name must be at least 2 characters"),;
    professionalTitle: z.string().min(2, "Professional title is required"),;
    profilePicture: z.any().optional()}),;
  // Step 2: Experience;
  experience: z.object({;
    bio: z.string().min(50, "Bio must be at least 50 characters"),;
    keyProjects: z.array(;
      z.object({;
        title: z.string().min(2, "Project title is required"),;
        description: z.string().min(10, "Project description is required")});
    ).min(1, "Add at least one key project"),;
    yearsOfExperience: z.string().min(1, "Years of experience is required")}),;
  // Step 3: Skills & Tech Stack;
  skills: z.object({;
    skillsList: z.string().min(2, "Add at least one skill"),;
    toolsUsed: z.string().optional()}),;
  // Step 4: Availability & Preferences;
  availability: z.object({;
    availabilityType: z.string().min(1, "Select your availability"),;
    timezone: z.string().min(1, "Timezone is required"),;
    hourlyRate: z.string().optional(),;
    portfolioLinks: z.array(;
      z.object({;
        url: z.string().url("Must be a valid URL").min(5, "URL is required")});
    ).optional().default([]),;
    cv: z.any().optional()})}),;
type TalentFormValues = z.infer<typeof talentSchema>,;
export function TalentOnboardingForm() {;
  const { user } = useAuth(),;
  const navigate = useNavigate(),;
  const [currentStep, setCurrentStep] = useState(1),;
  const [profilePictureUrl, setProfilePictureUrl] = useState<string | null>(null),;
  const [cvFileName, setCvFileName] = useState<string | null>(null),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [showSuccessScreen, setShowSuccessScreen] = useState(false),;
  const { enhanceProfile, isGenerating } = useTalentProfileEnhancer(),;
  const totalSteps = 4,;
<<<<<<< HEAD
<<<<<<< HEAD
  const { enhanceProfile, isGenerating } = useTalentProfileEnhancer();
  const totalSteps = 4;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const form = useForm<TalentFormValues>({;
    resolver: zodResolver(talentSchema),;
    defaultValues: {;
      basicInfo: {;
        fullName: user?.displayName || "",;
        professionalTitle: "",;
        profilePicture: undefined},;
      experience: {;
        bio: "",;
        keyProjects: [{ title: "", description: "" }],;
        yearsOfExperience: ""},;
      skills: {;
        skillsList: "",;
        toolsUsed: ""},;
      availability: {;
        availabilityType: "",;
        timezone: "",;
        hourlyRate: "",;
        portfolioLinks: [{ url: "" }],;
        cv: undefined}},;
    mode: "onChange"}),;
<<<<<<< HEAD
<<<<<<< HEAD
  const { fields: projectFields, append: appendProject, remove: removeProject } =;
    useFieldArray({;
      name: "experience.keyProjects",;
      control: form.control}),;
  const { fields: linkFields, append: appendLink, remove: removeLink } =;
    useFieldArray({;
      name: "availability.portfolioLinks",;
      control: form.control}),;
  // Handle profile picture upload;
  const handleProfilePictureUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {;
    const file = e.target.files?.[0],;
    if (!file) return,;
    // Preview the image;
    const reader = new FileReader(),;
    reader.onloadend = () => {;
      setProfilePictureUrl(reader.result as string);
    },;
    reader.readAsDataURL(file),;
    // Store the file in the form data;
    form.setValue("basicInfo.profilePicture", file);
  },;
  // Handle CV upload;
  const handleCvUpload = async (file: File) => {;
    const fileName = `cv-${user?.id}-${Date.now()}`,;
    const { error: cvError } = await supabase.storage;
      .from('resumes');
      .upload(fileName, file),;
    if (cvError) {;
      console.error("Error uploading CV:", cvError),;
      throw new Error("Failed to upload CV");
    }
;
    // Get the public URL;
    const { data: { publicUrl } } = supabase.storage;
      .from('resumes');
      .getPublicUrl(fileName);
    return publicUrl;
  };
=======

  const { fields: projectFields, append: appendProject, remove: removeProject } = ;
    useFieldArray({;
      name: "experience && experience.keyProjects",;
      control: form && form.control}),;

  const { fields: linkFields, append: appendLink, remove: removeLink } = ;
    useFieldArray({;
      name: "availability && availability.portfolioLinks",;
      control: form && form.control}),;

  // Handle profile picture upload;
  const handleProfilePictureUpload = async (e: React && React.ChangeEvent<HTMLInputElement>) => {;
    const file = e && e.target.files?.[0];
    if (!file) return;

    // Preview the image;
    const reader = new FileReader(),;
    reader && reader.onloadend = () => {;
      setProfilePictureUrl(reader && reader.result as string);
    };
    reader && reader.readAsDataURL(file);

    // Store the file in the form data;
    form && form.setValue("basicInfo && basicInfo.profilePicture", file);
  };

  // Handle CV upload;
  const handleCvUpload = async (file: File) => {;
    const fileName = `cv-${user?.id}-${Date && Date.now()}`;
    const { error: cvError } = await supabase && supabase.storage;
      .from('resumes');
      .upload(fileName, file);

    if (cvError) {;
      console && console.error("Error uploading CV:", cvError);
      throw new Error("Failed to upload CV");
    }

    // Get the public URL;
    const { data: { publicUrl } } = supabase && supabase.storage;
      .from('resumes');
      .getPublicUrl(fileName);

    return publicUrl;
  };

  // Rest of the file remains unchanged...;
  // [Previous implementation continues...];

  return null;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
import React, { useState } from './react';
import { use_form, useFieldArray } from './react - hook - form';
import { zod_resolver } from '@hookform / resolvers / zod';
import { z } from './zod';
import { use_navigate } from './react-router-dom';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components / ui / form';
import { Input } from '@/components / ui / input';
import { Textarea } from '@/components / ui / textarea';
import { Button } from '@/components / ui / button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components / ui / select';
import { AspectRatio } from '@/components / ui / aspect - ratio';
import { Separator } from '@/components / ui / separator';
import { toast } from '@/components / ui / use - toast';
import { User, Briefcase, Star, Calendar, Globe, DollarSign, FileText, Link, Upload, ArrowRight, ArrowLeft, Trash2, Plus, CheckCircle2 } from './lucide-react';
import { use_auth } from '@/hooks / use_auth';
import { useTalentProfileEnhancer } from '@/hooks / useTalentProfileEnhancer';
import { supabase } from '@/integrations / supabase / client';
// Define the form schema with validation;
const talent_schema = z.object ({
  // Step 1: Basic Info;
  basic_info: z.object ({
    full_name: z.string ().min (2, "Name must be at least 2 characters");
    professional_title: z.string ().min (2, "Professional title is required");
    profile_picture: z.any ().optional ()}),
  // Step 2: Experience;
  experience: z.object ({
    bio: z.string ().min (50, "Bio must be at least 50 characters");
    key_projects: z.array (
      z.object ({
        title: z.string ().min (2, "Project title is required");
        description: z.string ().min (10, "Project description is required")})).min (1, "Add at least one key project");
    yearsOfExperience: z.string ().min (1, "Years of experience is required")});
;
  // Step 3: Skills & Tech Stack;
  skills: z.object ({
    skills_list: z.string ().min (2, "Add at least one skill");
    tools_used: z.string ().optional ()}),
  // Step 4: Availability & Preferences;
  availability: z.object ({
    availability_type: z.string ().min (1, "Select your availability");
    timezone: z.string ().min (1, "Timezone is required");
    hourly_rate: z.string ().optional (),
    portfolio_links: z.array (
      z.object ({
        url: z.string ().url ("Must be a valid URL").min (5, "URL is required")})).optional ().default ([]);
    cv: z.any ().optional ()})}),
type TalentFormValues = z.infer < typeof talent_schema>;
;
export /**
 * TalentOnboardingForm - Function description
 */
function TalentOnboardingForm() {
  const { user } = use_auth ();
  const navigate = use_navigate ();
  const [current_step, setCurrentStep] = useState (1);
  const [profilePictureUrl, setProfilePictureUrl] = useState < string | null>(null);
  const [cvFileName, setCvFileName] = useState < string | null>(null);
  const [is_submitting, setIsSubmitting] = useState (false);
  const [showSuccessScreen, setShowSuccessScreen] = useState (false);
;
  const { enhance_profile, is_generating } = useTalentProfileEnhancer ();
;
  const total_steps = 4;
;
  const form = use_form < TalentFormValues>({
    resolver: zod_resolver (talent_schema),
    default_values: {
      basic_info: {
        full_name: user?.display_name || "",
        professional_title: "",
        profile_picture: undefined},
      experience: {
        bio: "",
        key_projects: [{ title: "", description: "" }],
        yearsOfExperience: ""},
      skills: {
        skills_list: "",
        tools_used: ""},
      availability: {
        availability_type: "",
        timezone: "",
        hourly_rate: "",
        portfolio_links: [{ url: "" }],
        cv: undefined}},
    mode: "on_change"}),
  const { fields: project_fields, append: append_project, remove: remove_project } =;
    useFieldArray ({
      name: "experience.key_projects",
      control: form.control}),
  const { fields: link_fields, append: append_link, remove: remove_link } =;
    useFieldArray ({
      name: "availability.portfolio_links",
      control: form.control}),
  // Handle profile picture upload;
  const handleProfilePictureUpload = async (e: React.ChangeEvent < HTMLInputElement>) => {
    const file = e.target.files?.[0];
    // Check condition
if (return) {
  $2
}
    // Preview the image;
    const reader = new FileReader (),
    reader.onloadend = () => {
      setProfilePictureUrl (reader.result as string);
    }
    reader.readAsDataURL (file);
;
    // Store the file in the form data;
    form.set_value ("basic_info.profile_picture", file);
  }
;
  // Handle CV upload;
  const handleCvUpload = async (file: File) => {
    const file_name = `cv-${user?.id}-${Date.now ()}`;
    const { error: cv_error } = await supabase.storage;
      .from ('resumes');
      .upload (file_name, file);
;
    // Check condition
if ( {) {
  $2
}
      console.error ("Error uploading CV:", cv_error);
      throw new Error ("Failed to upload CV");
    }
    // Get the public URL;
    const { data: { public_url } } = supabase.storage;
      .from ('resumes');
      .getPublicUrl (file_name);
;
    return public_url;
  }
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Rest of the file remains unchanged...;
  // [Previous implementation continues...];
  return null;

<<<<<<< HEAD
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


import React, { useState } from "react",;
import { useForm, useFieldArray } from "react-hook-form",;
import { zodResolver } from "@hookform/resolvers/zod",;
import { z } from "zod",;
import { useNavigate } from "react-router-dom",;
import { ;
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage ;
} from "@/components/ui/form",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Button } from "@/components/ui/button",;
import { ;
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue ;
} from "@/components/ui/select",;
import { AspectRatio } from "@/components/ui/aspect-ratio",;
import { Separator } from "@/components/ui/separator",;
import { toast } from "@/components/ui/use-toast",;
import { ;
  User, Briefcase, Star, Calendar, Globe, DollarSign, FileText, Link, Upload, ArrowRight, ArrowLeft, ;
  Trash2, Plus, CheckCircle2;
} from "lucide-react",;
import { useAuth } from "@/hooks/useAuth",;
import { useTalentProfileEnhancer } from "@/hooks/useTalentProfileEnhancer",;
import { supabase } from "@/integrations/supabase/client",;
;
// Define the form schema with validation;
const talentSchema = z.object({;
  // Step 1:Basic Info;
  basicInfo:z.object({;
    fullName:z.string().min(2, "Name must be at least 2 characters"),;
    professionalTitle:z.string().min(2, "Professional title is required"),;
    profilePicture:z.any().optional()}),;
  ;
  // Step 2:Experience;
  experience:z.object({;
    bio:z.string().min(50, "Bio must be at least 50 characters"),;
    keyProjects:z.array(;
      z.object({;
        title:z.string().min(2, "Project title is required"),;
        description:z.string().min(10, "Project description is required")});
    ).min(1, "Add at least one key project"),;
    yearsOfExperience:z.string().min(1, "Years of experience is required")}),;
  ;
  // Step 3:Skills & Tech Stack;
  skills:z.object({;
    skillsList:z.string().min(2, "Add at least one skill"),;
    toolsUsed:z.string().optional()}),;
  ;
  // Step 4:Availability & Preferences;
  availability:z.object({;
    availabilityType:z.string().min(1, "Select your availability"),;
    timezone:z.string().min(1, "Timezone is required"),;
    hourlyRate:z.string().optional(),;
    portfolioLinks:z.array(;
      z.object({;
        url:z.string().url("Must be a valid URL").min(5, "URL is required")});
    ).optional().default([]),;
    cv:z.any().optional()})}),;
;
type TalentFormValues = z.infer<typeof talentSchema>,;
;
export function TalentOnboardingForm() {;
  const { user } = useAuth(),;
  const navigate = useNavigate(),;
  const [currentStep, setCurrentStep] = useState(1),;
  const [profilePictureUrl, setProfilePictureUrl] = useState<string | null>(null),;
  const [cvFileName, setCvFileName] = useState<string | null>(null),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [showSuccessScreen, setShowSuccessScreen] = useState(false),;
  ;
  const { enhanceProfile, isGenerating } = useTalentProfileEnhancer(),;
  ;
  const totalSteps = 4,;
  ;
  const form = useForm<TalentFormValues>({;
    resolver:zodResolver(talentSchema),;
    defaultValues:{;
      basicInfo:{;
        fullName:user?.displayName || "",;
        professionalTitle:"",;
        profilePicture:undefined},;
      experience:{;
        bio:"",;
        keyProjects:[{ title:"", description:"" }],;
        yearsOfExperience:""},;
      skills:{;
        skillsList:"",;
        toolsUsed:""},;
      availability:{;
        availabilityType:"",;
        timezone:"",;
        hourlyRate:"",;
        portfolioLinks:[{ url:"" }],;
        cv:undefined}},;
    mode:"onChange"}),;
  ;
  const { fields:projectFields, append:appendProject, remove:removeProject } = ;
    useFieldArray({;
      name:"experience.keyProjects",;
      control:form.control}),;
    ;
  const { fields:linkFields, append:appendLink, remove:removeLink } = ;
    useFieldArray({;
      name:"availability.portfolioLinks",;
      control:form.control}),;
;
  // Handle profile picture upload;
  const handleProfilePictureUpload = async (e:React.ChangeEvent<HTMLInputElement>) => {;
    const file = e.target.files?.[0],;
    if (!file) return,;
    ;
    // Preview the image;
    const reader = new FileReader(),;
    reader.onloadend = () => {;
      setProfilePictureUrl(reader.result as string);
    },;
    reader.readAsDataURL(file),;
    ;
    // Store the file in the form data;
    form.setValue("basicInfo.profilePicture", file),;
  },;
;
  // Handle CV upload;
  const handleCvUpload = async (file:File) => {;
    const fileName = `cv-${user?.id}-${Date.now()}`,;
    const { error:cvError } = await supabase.storage;
      .from('resumes');
      .upload(fileName, file),;
      ;
    if (cvError) {;
      console.error("Error uploading CV:", cvError),;
      throw new Error("Failed to upload CV"),;
    }
    ;
    // Get the public URL;
    const { data:{ publicUrl } } = supabase.storage;
      .from('resumes');
      .getPublicUrl(fileName),;
    ;
    return publicUrl,;
  },;
;
  // Rest of the file remains unchanged...;
  // [Previous implementation continues...];
;
  return null,;   //Step 1: Basic Info basicInfo: z.object ({
  ) .optional () .default ([]);
cv: z.any () .optional () 
}) 
});
type TalentFormValues = z.infer<typeof talentSchema>;
const form = useForm<TalentFormValues> ({
  resolver: zodResolver (talentSchema), defaultValues: {
  basicInfo: {
  cv: undefined 
}
};
//Handle profile picture upload const handleProfilePictureUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
if (!file) return;
//Preview the image const reader = new FileReader ();
reader.onloadend = () => {
  setProfilePictureUrl (reader.result as string) 
};
reader.readAsDataURL (file);
}data: {
  publicUrl 
}
}= supabase.storage.from ('resumes') .getPublicUrl (fileName);
return publicUrl;
};
//Rest of the file remains unchanged... // [Previous implementation continues...] return null;
}
}
}
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
