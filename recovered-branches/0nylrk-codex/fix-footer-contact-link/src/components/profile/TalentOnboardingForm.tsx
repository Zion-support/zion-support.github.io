



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


  const { user } = useAuth();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [profilePictureUrl, setProfilePictureUrl] = useState<string | null>(null);
  const [cvFileName, setCvFileName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessScreen, setShowSuccessScreen] = useState(false);


  const form = useForm<TalentFormValues>({

    resolver: zodResolver(talentSchema)
    defaultValues: {}
      basicInfo: {"
        fullName: user?.displayName |"""
        professionalTitle: ""
        profilePicture: undefined}
      experience: {"
        bio: """
        keyProjects: [{ title: "", description: "" }]"
        yearsOfExperience: ""}
      skills: {"
        skillsList: """
        toolsUsed: ""}
      availability: {"
        availabilityType: """
        timezone: """
        hourlyRate: """
        portfolioLinks: [{ url: "" }]
        cv: undefined}}"
    mode: "onChange"})
  const { fields: projectFields, append: appendProject, remove: removeProject } =
    useFieldArray({"
      name: "experience.keyProjects"
      control: form.control})
  const { fields: linkFields, append: appendLink, remove: removeLink } =
    useFieldArray({"
      name: "availability.portfolioLinks"
      control: form.control})



    
    // Store the file in the form data"
    form.setValue("basicInfo.profilePicture", file)
  },

      .upload(fileName, file),

    if (cvError) {



    // Preview the image
    const reader = new FileReader()
    reader.onloadend = () => {
      setProfilePictureUrl(reader.result as string)




    },
    reader.readAsDataURL(file),
    // Store the file in the form data
    form.setValue("basicInfo.profilePicture", file)
  },



      .upload(fileName, file),

    if (cvError) {

      console.error("Error uploading CV:", cvError);

      throw new Error("Failed to upload CV")

  const { enhanceProfile, isGenerating } = useTalentProfileEnhancer();

  const totalSteps = 4;



};


import { supabase } from "@/integrations/supabase/client",;
// Define the form schema with validation;
const talentSchema = z.object({;
  // Step 1: Basic Info;

        url: z.string().url("Must be a valid URL").min(5, "URL is required")});
    ).optional().default([]),;
    cv: z.any().optional()})}),;
type TalentFormValues = z.infer<typeof talentSchema>,;

  const { user } = useAuth(),;
  const navigate = useNavigate(),;
  const [currentStep, setCurrentStep] = useState(1),;
  const [profilePictureUrl, setProfilePictureUrl] = useState<string | null>(null),;
  const [cvFileName, setCvFileName] = useState<string | null>(null),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [showSuccessScreen, setShowSuccessScreen] = useState(false),;
  const { enhanceProfile, isGenerating } = useTalentProfileEnhancer(),;
  const totalSteps = 4,;



  const form = useForm<TalentFormValues>({;
    resolver: zodResolver(talentSchema),;
    defaultValues: {;
      basicInfo: {;"
        fullName: user?.displayName || "",;"
        professionalTitle: "",;
        profilePicture: undefined},;
      experience: {;"
        bio: "",;"
        keyProjects: [{ title: "", description: "" }],;"
        yearsOfExperience: ""},;
      skills: {;"
        skillsList: "",;"
        toolsUsed: ""},;
      availability: {;"
        availabilityType: "",;"
        timezone: "",;"
        hourlyRate: "",;"
        portfolioLinks: [{ url: "" }],;
        cv: undefined}},;"
    mode: "onChange"}),;


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


      console.error ("Error uploading CV:", cv_error);
      throw new Error ("Failed to upload CV");
    }
    // Get the public URL;
    const { data: { public_url } } = supabase.storage;
      .from ('resumes');
    const { error: cv_error } = await supabase.storage;"
      .from ('resumes');'
      .upload (file_name, file);
;
    // Check condition;




