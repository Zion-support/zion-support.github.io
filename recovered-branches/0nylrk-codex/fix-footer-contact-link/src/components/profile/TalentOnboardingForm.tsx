
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

// Define the form schema with validation

const talentSchema = z.object({
  // Step 1: Basic Info
  basicInfo: z.object({

  // Step 2: Experience
  experience: z.object({
    bio: z.string().min(50, "Bio must be at least 50 characters"),
    keyProjects: z.array(
      z.object({
        title: z.string().min(2, "Project title is required"),
        description: z.string().min(10, "Project description is required")})

  const { enhanceProfile, isGenerating } = useTalentProfileEnhancer(),

  const totalSteps = 4,
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

  const { user } = useAuth();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [profilePictureUrl, setProfilePictureUrl] = useState<string | null>(null);
  const [cvFileName, setCvFileName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessScreen, setShowSuccessScreen] = useState(false);


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


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

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

=======

    const file = e.target.files?.[0],
    if (!file) return,
    


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    // Preview the image
    const reader = new FileReader()
    reader.onloadend = () => {
      setProfilePictureUrl(reader.result as string)

  // Handle CV upload
  const handleCvUpload = async (file: File) => {
    const fileName = `cv-${user?.id}-${Date.now()}`;
    const { error: cvError } = await supabase.storage
      .from('resumes')

    if (cvError) {
      console.error("Error uploading CV:", cvError),
      throw new Error("Failed to upload CV")
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
