import React, {_useState} from "react";
import {_Form, _FormControl, _FormField, _FormItem, _FormLabel, _FormMessage} from "@/components/ui/form";
import {_Select, _SelectContent, _SelectItem, _SelectTrigger, _SelectValue} from "@/components/ui/select";
import {_User, _Briefcase, _Star, _Calendar, _Globe, _DollarSign, _FileText, _Link, _Upload, _ArrowRight, _ArrowLeft, _Trash2, _Plus, _CheckCircle2} from "lucide-react";

// Define the form schema with validation
const _talentSchema = z.object({_// Step 1: Basic Info
  basicInfo: z.object({
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
    ).optional().default([]),
    cv: z.any().optional()})});

type TalentFormValues = z.infer<typeof talentSchema>;

export function TalentOnboardingForm() {_const { user} = useAuth();
  const _navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [profilePictureUrl, setProfilePictureUrl] = useState<string | null>(null);
  const [cvFileName, setCvFileName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessScreen, setShowSuccessScreen] = useState(false);
  
  const {_enhanceProfile, _isGenerating} = useTalentProfileEnhancer();
  
  const _totalSteps = 4;
  
  const _form = useForm<TalentFormValues>({_resolver: zodResolver(talentSchema), _defaultValues: {
      basicInfo: {
        fullName: user?.displayName || "", _professionalTitle: "", _profilePicture: undefined},
      experience: {_bio: "", _keyProjects: [{ title: "", _description: ""}],
        yearsOfExperience: ""},
      skills: {_skillsList: "", _toolsUsed: ""},
      availability: {_availabilityType: "", _timezone: "", _hourlyRate: "", _portfolioLinks: [{ url: ""}],
        cv: undefined}},
    mode: "onChange"});
  
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
    
    // Store the file in the form data
    form.setValue("basicInfo.profilePicture", file);
  };

  // Handle CV upload
  const _handleCvUpload = async (_file: File) => {_const _fileName = `cv-${user?.id}-${_Date.now()}`;
    const {_error: cvError} = await supabase.storage
      .from('resumes')
      .upload(fileName, file);
      
    if (cvError) {_throw new Error("Failed to upload CV");}
    
    // Get the public window.URL
    const {_data: { publicUrl} } = supabase.storage
      .from('resumes')
      .getPublicUrl(fileName);
    
    return publicUrl;
  };

  // Rest of the file remains unchanged...
  // [Previous implementation continues...]

  return null;
}