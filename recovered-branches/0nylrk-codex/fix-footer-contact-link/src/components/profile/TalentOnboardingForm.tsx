
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

    // Preview the image
    const reader = new FileReader()
    reader.onloadend = () => {
      setProfilePictureUrl(reader.result as string)

  // Handle CV upload
  const handleCvUpload = async (file: File) => {
    const fileName = `cv-${user?.id}-${Date.now()}`,
    const { error: cvError } = await supabase.storage
      .from('resumes')

    if (cvError) {
      console.error("Error uploading CV:", cvError),
      throw new Error("Failed to upload CV")
