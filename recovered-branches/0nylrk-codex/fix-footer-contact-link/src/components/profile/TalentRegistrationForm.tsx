<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  FormMessage} from "@/components/ui/form",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { X, Sparkles, Upload, Clock, Check, Briefcase, MapPin, UserRound } from "lucide-react",
import { toast } from "@/components/ui/use-toast",
import { supabase } from "@/integrations/supabase/client",

// Define form schema;
const talentProfileSchema = z.object({}
  name: z.string().min(2, "Name must be at least 2 characters long"),"
  title: z.string().min(5, "Professional title is required"),"
  bio: z.string().min(50, "Bio must be at least 50 characters long").max(1000, "Bio cannot exceed 1000 characters"),"
  location: z.string().min(2, "Location is required"),"
  skills: z.string().min(2, "Enter at least one skill"),
hourlyRate: z.string().refine((val) => !isNaN(Number(val)), {

interface CategorizedSkills {
  programming: string[]
  devops: string[]
  platforms: string[]
  softSkills: string[]
  other: string[]
=======
    message: "Hourly rate must be a number"}),
=======
  hourlyRate: z.string().refine((val) => !isNaN(Number(val)), {}
"
    message: "Hourly rate must be a number"}),"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  availability: z.enum(["available", "limited", "unavailable"]),
  enhancedProfile: z.boolean().default(true)}),

type TalentFormValues = z.infer<typeof talentProfileSchema>,

type CategoryType = 'programming' | 'devops' | 'platforms' | 'softSkills' | 'other',

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
interface CategorizedSkills {
=======

interface CategorizedSkills {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  programming: string[]
  devops: string[]
  platforms: string[]
  softSkills: string[]
  other: string[]
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
<<<<<<< HEAD
<<<<<<< HEAD
import {useAuth} from "@/hooks/useAuth";
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
import {};
=======
import { Separator } from "@/components/ui/separator";
import {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  Form;
  FormControl;
  FormDescription;
  FormField;
  FormItem;
FormLabel;"
  FormMessage} from "@/components/ui/form","
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card","
import { X, Sparkles, Upload, Clock, Check, Briefcase, MapPin, UserRound } from "lucide-react","
import { toast } from "@/components/ui/use-toast","
import { supabase } from "@/integrations/supabase/client",
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useAuth } from "@/hooks/useAuth";
import { AspectRatio } from "@/components/ui/aspect-ratio",
import { useAuth } from "@/hooks/useAuth",
// Define form schema

const talentProfileSchema = z.object({"
  name: z.string().min(2, "Name must be at least 2 characters long"),"
  title: z.string().min(5, "Professional title is required"),"
  bio: z.string().min(50, "Bio must be at least 50 characters long").max(1000, "Bio cannot exceed 1000 characters"),"
  location: z.string().min(2, "Location is required"),"
  skills: z.string().min(2, "Enter at least one skill"),
  hourlyRate: z.string().refine((val) => !isNaN(Number(val)), {"
    message: "Hourly rate must be a number"})";
  availability: z.enum(["available", "limited", "unavailable"]);
  enhancedProfile: z.boolean().default(true)})
type TalentFormValues = z.infer<typeof talentProfileSchema>;'
type CategoryType = 'programming' | 'devops' | 'platforms' | 'softSkills' | 'other';"
    message: "Hourly rate must be a number"}),"
  availability: z.enum(["available", "limited", "unavailable"]),
  enhancedProfile: z.boolean().default(true)}),

type TalentFormValues = z.infer<typeof talentProfileSchema>,
'
type CategoryType = 'programming' | 'devops' | 'platforms' | 'softSkills' | 'other',

interface CategorizedSkills {}
  programming: string[]
  devops: string[]
  platforms: string[]
  softSkills: string[]
  other: string[]
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import React, { useState } from "react",;
import { useForm } from "react-hook-form",;
=======
import {useAuth} from "@/hooks/useAuth";import { useForm } from "react-hook-form",;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { zodResolver } from "@hookform/resolvers/zod",;
import { z } from "zod",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Switch } from "@/components/ui/switch",;
import { Badge } from "@/components/ui/badge",;
=======
"
import React, { useState } from "react",;"
import { useForm } from "react-hook-form",;"
import { zodResolver } from "@hookform/resolvers/zod",;"
import { z } from "zod",;"
import { Button } from "@/components/ui/button",;"
import { Input } from "@/components/ui/input",;"
import { Textarea } from "@/components/ui/textarea",;"
import { Switch } from "@/components/ui/switch",;"
import { Badge } from "@/components/ui/badge",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
import { useAuth } from "@/hooks/useAuth",;

interface CategorizedSkills {;
  programming: string[],;
  devops: string[],;
  platforms: string[],;
  softSkills: string[],;
  other: string[];
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}
interface EnhancedProfile {}
  summary: string;
  categorizedSkills: CategorizedSkills;
}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  // Initialize form with default values
  const form = useForm<TalentFormValues>({
=======
import { useAuth } from "@/hooks/useAuth",;  const form = useForm<TalentFormValues>({
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import { useAuth } from "@/hooks/useAuth",;  const form = useForm<TalentFormValues>({
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  // Initialize form with default values;
  const form = useForm<TalentFormValues>({}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    resolver: zodResolver(talentProfileSchema)
    defaultValues: {"
      name: user?.displayName |"""
      title: """
      bio: """
      location: """
      skills: """
      hourlyRate: """
      availability: "available"
      enhancedProfile: true}})
  // Handle adding skill tags;
  const handleAddSkill = () => {"
    const skillInput = form.getValues("skills"),
if (skillInput && !skillTags.includes(skillInput)) {

  // Handle key press in skills input (add on enter)
  const handleSkillKeyPress = (e: React.KeyboardEvent) => {"
    if (e.key === "Enter") {}
      e.preventDefault()
      handleAddSkill()

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
  }
  // Generate enhanced profile with AI;
  const generateEnhancedProfile = async () => {}
    const formData = form.getValues();
    if (!formData.bio |formData.bio.length < 20) {}
  };
;
export function TalentRegistrationForm() { return null; }
  const { user } = useAuth(),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [skillTags, setSkillTags] = useState<string[]>([]),;
  const [isGenerating, setIsGenerating] = useState(false),;
  const [generatedContent, setGeneratedContent] = useState<EnhancedProfile | null>(null),;
  const [uploadedAvatar, setUploadedAvatar] = useState<string | null>(null),;
}

    const skillInput = form.getValues("skills"),;
    if (skillInput && !skillTags.includes(skillInput)) {;
      setSkillTags([...skillTags, skillInput]),;
      form.setValue("skills", "");
    }
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  },;
  // Handle removing skill tags;
  const handleRemoveSkill = (skill: string) => {;
    setSkillTags(skillTags.filter((s) => s !== skill));
  },;
  // Handle key press in skills input (add on enter);
  const handleSkillKeyPress = (e: React.KeyboardEvent) => {;"
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

// Generate enhanced profile with AI
  const generateEnhancedProfile = async () => {
const formData = form.getValues(),
    if (!formData.bio || formData.bio.length < 20) {

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
        description: "Please provide at least a detailed bio before generating enhanced content."})
      return;
  };
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

  // Handle removing skill tags;
  const handleRemoveSkill = (skill: string) => {;
    setSkillTags(skillTags && skillTags.filter((s) => s !== skill))
};

  // Handle key press in skills input (add on enter);
  const handleSkillKeyPress = (e: React && React.KeyboardEvent) => {;"
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
        setUploadedAvatar(reader && reader.result as string)
};
      reader && reader.readAsDataURL(file);
    }
  };

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  },;

  // Generate enhanced profile with AI;
  const generateEnhancedProfile = async () => {;
    const formData = form && form.getValues();
    if (!formData && formData.bio || formData && formData.bio.length < 20) {;
toast({;
        title: "More information needed",,
  description: "Please provide at least a detailed bio before generating enhanced content."}),;
      return;
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

    try {;
      setIsGenerating(true);

      // Call the Supabase Edge Function;'
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

      }),;
      if (error) {;
        throw new Error(error.message);

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      if (error) {;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        throw new Error(error && error.message);
}
      setGeneratedContent(data as EnhancedProfile);
;
  // Apply generated content to form;
  const applyGeneratedContent = () =>: any {}
    // Check condition;
if ( {) {}
  $2;
}
setSkillTags ([...skill_tags, skill_input]);
      form.set_value ("skills", "");
    }
<<<<<<< HEAD

            }
          });
        }

      if (newSkills && newSkills.length > 0) {;
        setSkillTags([...skillTags, ...newSkills]);
      }
    }
  };

  // Get category color;
  const getCategoryColor = (category: CategoryType) => {;
<<<<<<< HEAD
    switch (category) {;
import React, { useState } from "react",;
import { useForm } from "react-hook-form",;
import {useAuth} from "@/hooks/useAuth";import { useForm } from "react-hook-form",;
import { zodResolver } from "@hookform/resolvers/zod",;
import { z } from "zod",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Switch } from "@/components/ui/switch",;
import { Badge } from "@/components/ui/badge",;
import { Separator } from "@/components/ui/separator",;

// Define form schema;
const talentProfileSchema = z.object({)
  name: z.string().min(2, "Name must be at least 2 characters long"),""
  title: z.string().min(5, "Professional title is required"),""
  bio: z.string().min(50, "Bio must be at least 50 characters long").max(1000, "Bio cannot exceed 1000 characters"),""
  location: z.string().min(2, "Location is required"),""
  skills: z.string().min(2, "Enter at least one skill"),"
  hourlyRate: z.string().refine((val) => !isNaN(Number(val)), {
"
    message: "Hourly rate must be a number"}),""
  availability: z.enum(["available", "limited", "unavailable"]),"
  enhancedProfile: z.boolean().default(true)}),

type TalentFormValues = z.infer<typeof talentProfileSchema>,
</typeof>
type TalentFormValues = z.infer<typeof talentProfileSchema>;
type TalentFormValues = z && z.infer<typeof talentProfileSchema>;
  const [skillTags, setSkillTags] = useState<string[]>([]);
</string>
  const [generatedContent, setGeneratedContent] = useState<EnhancedProfile | null>(null);

  const [uploadedAvatar, setUploadedAvatar] = useState<string | null>(null);

  const [skillTags, setSkillTags] = useState<string[]>([]),
  const [generatedContent, setGeneratedContent] = useState<EnhancedProfile | null>(null),

  const [uploadedAvatar, setUploadedAvatar] = useState<string | null>(null),
  const form = useForm<TalentFormValues>({
)
</typeof>
type TalentFormValues = z.infer<typeof talentProfileSchema>,
</typeof>
type TalentFormValues = z && z.infer<typeof talentProfileSchema>;
</typeof>
  const [skillTags, setSkillTags] = useState<string[]>([]);
</string>
  const [generatedContent, setGeneratedContent] = useState<EnhancedProfile | null>(null);
</EnhancedProfile>
  const [uploadedAvatar, setUploadedAvatar] = useState<string | null>(null);
</string>
  const [skillTags, setSkillTags] = useState<string[]>([]);
</string>
  const [generatedContent, setGeneratedContent] = useState<EnhancedProfile | null>(null);
</EnhancedProfile>
  const [uploadedAvatar, setUploadedAvatar] = useState<string | null>(null);
</string>
  const [skillTags, setSkillTags] = useState<string[]>([]),
</string>
  const [generatedContent, setGeneratedContent] = useState<EnhancedProfile | null>(null),
</EnhancedProfile>
  const [uploadedAvatar, setUploadedAvatar] = useState<string | null>(null),
</string>
  const form = useForm<TalentFormValues>({
</TalentFormValues>)
    if (!formData.bio |formData.bio.length < 20) {
  };
;
export function TalentRegistrationForm() {;"
  // Remove the useToast() hook since we're importing the toast function directly;
  const { user } = useAuth(),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [skillTags, setSkillTags] = useState<string[]>([]),;
  const [generatedContent, setGeneratedContent] = useState<EnhancedProfile | null>(null),;

  const [uploadedAvatar, setUploadedAvatar] = useState<string | null>(null),;
  const form = useForm<TalentFormValues>({;
  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {;

  const handleAvatarUpload = (e: React && React.ChangeEvent<HTMLInputElement>) => {;

    if (!formData && formData.bio || formData && formData.bio.length < 20) {;
      toast({;
  // Remove the useToast() hook since we're importing the toast function directly;'
  const { user } = useAuth(),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [skillTags, setSkillTags] = useState<string[]>([]),;
</string>
  const [generatedContent, setGeneratedContent] = useState<EnhancedProfile | null>(null),;
</EnhancedProfile>
  const [uploadedAvatar, setUploadedAvatar] = useState<string | null>(null),;
</string>
  const form = useForm<TalentFormValues>({;
</TalentFormValues>)
  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {;
</HTMLInputElement>
  const handleAvatarUpload = (e: React && React.ChangeEvent<HTMLInputElement>) => {;
</HTMLInputElement>
    if (!formData && formData.bio || formData && formData.bio.length < 20) {;
      toast({;'
        title: "More information needed",;")"
        description: "Please provide at least a detailed bio before generating enhanced content."}),;"
      return;
    }

    try {;
      setIsGenerating(true);

      // Call the Supabase Edge Function;"
      const { data, error } = await supabase && supabase.functions.invoke('talent-profile-enhancer', {;
      const { data, error } = await supabase && supabase.functions.invoke('talent-profile-enhancer', {;'
        body: {;,
  talentData: {;
            name: formData && formData.name,;
            title: formData && formData.title,;
            bio: formData && formData.bio,;
            skills: skillTags,;
            location: formData && formData.location;
          }
        }
)
      }),;
      if (error) {;
        throw new Error(error.message);

        throw new Error(error && error.message);
      setGeneratedContent(data as EnhancedProfile);

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
const talentProfileSchema = z.object ({)
      }
        throw new Error(error && error.message);
      }
      setGeneratedContent(data as EnhancedProfile);

'
import React, { useState } from './react';''
import { use_form } from './react - hook - form';''
import { zod_resolver } from '@hookform / resolvers / zod';''
import { z } from './zod';''
import { Button } from '@/components / ui / button';''
import { Input } from '@/components / ui / input';''
import { Textarea } from '@/components / ui / textarea';''
import { Switch } from '@/components / ui / switch';''
import { Badge } from '@/components / ui / badge';''
import { Separator } from '@/components / ui / separator';''
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components / ui / form';''
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components / ui / card';''
import { X, Sparkles, Upload, Clock, Check, Briefcase, MapPin, UserRound } from './lucide-react';''
import { toast } from '@/components / ui / use - toast';''
import { supabase } from '@/integrations / supabase / client';''
import { AspectRatio } from '@/components / ui / aspect - ratio';''
import { use_auth } from '@/hooks / use_auth';'
// Define form schema;
const talentProfileSchema = z.object ({)'
  name: z.string ().min (2, "Name must be at least 2 characters long");""
  title: z.string ().min (5, "Professional title is required");""
  bio: z.string ().min (50, "Bio must be at least 50 characters long").max (1000, "Bio cannot exceed 1000 characters");""
  location: z.string ().min (2, "Location is required");""
  skills: z.string ().min (2, "Enter at least one skill");"
  hourly_rate: z.string ().refine ((val) => !isNaN (Number (val)), {"
  availability: z.enum (["available", "limited", "unavailable"]);"
  enhanced_profile: z.boolean ().default (true)}),
type TalentFormValues = z.infer < typeof talentProfileSchema>;

  // Apply generated content to form;
  const applyGeneratedContent = () =>: any {
  // TODO: Implement
    // Check condition;
if ( {) {
  $2;
      setSkillTags ([...skill_tags, skill_input]);"
      form.set_value ("skills", "");"

          });

      if (newSkills && newSkills.length > 0) {;
        setSkillTags([...skillTags, ...newSkills]);

  // Get category color;
  const getCategoryColor = (category: CategoryType) => {;
    switch (category) {;

  // Handle removing skill tags;
  const handleRemoveSkill = (skill: string) =>: any {
  // TODO: Implement
    setSkillTags (skill_tags.filter ((s) => s !== skill));
  // Handle key press in skills input (add on enter);
  const handleSkillKeyPress = (e: React.KeyboardEvent) =>: any {
  // TODO: Implement
    // Check condition;
      e.prevent_default (),
      handleAddSkill ();
  // Handle avatar upload;
  const handleAvatarUpload = (e: React.ChangeEvent < HTMLInputElement>) =>: any {
  // TODO: Implement
    const file = e.target.files?.[0];
    // Check condition;
      const reader = new FileReader (),
      reader.onloadend = () => {
        setUploadedAvatar (reader.result as string);
      reader.readAsDataURL (file);
  // Generate enhanced profile with AI;
  const generateEnhancedProfile = async () => {
    const form_data = form.get_values ();
    // Check condition;
      toast ({"
        title: "More information needed",")"
        description: "Please provide at least a detailed bio before generating enhanced content."}),"
    try {
  // TODO: Implement
      setIsGenerating (true);
      // Call the Supabase Edge Function;"
      const { data, error } = await supabase.functions.invoke ('talent - profile - enhancer', {
        body: {,
  talent_data: {
            name: form_data.name,
            title: form_data.title,
            bio: form_data.bio,
            skills: skill_tags,
            location: form_data.location;
        })
      // Check condition;
        throw new Error (error.message);
import React, { useState } from "react",;""
import { useForm } from "react-hook-form",;""
import { zodResolver } from "@hookform/resolvers/zod",;""
import { z } from "zod",;""
import { Button } from "@/components/ui/button",;""
import { Input } from "@/components/ui/input",;""
import { Textarea } from "@/components/ui/textarea",;""
import { Switch } from "@/components/ui/switch",;""
import { Badge } from "@/components/ui/badge",;""
import { Separator } from "@/components/ui/separator",;"
pr-12325
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
      return;
    }

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

      }),;
      if (error) {;
        throw new Error(error.message);

      }

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
      // Safely extract and flatten skills from each category
      Object.values(allCategorizedSkills).forEach(categorySkills => {
        if (Array.isArray(categorySkills)) {
          categorySkills.forEach(skill => {
            if (typeof skill === 'string' && skill && !skillTags.includes(skill)) {
              newSkills.push(skill)
      });
      if (error) {;
        throw new Error(error && error.message);
      }
      setGeneratedContent(data as EnhancedProfile);

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
      }
      setGeneratedContent(data as EnhancedProfile);

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  },;
  // Apply generated content to form;
  const applyGeneratedContent = () => {;
    if (generatedContent) {;
      form.setValue("bio", generatedContent.summary),;
      // Extract all skills from categorized skills and properly type cast them;
      const allCategorizedSkills = generatedContent.categorizedSkills,;
      const newSkills: string[] = [],;
      // Safely extract and flatten skills from each category;
      Object.values(allCategorizedSkills).forEach(categorySkills => {;
        if (Array.isArray(categorySkills)) {;
          categorySkills.forEach(skill => {;
            if (typeof skill === 'string' && skill && !skillTags.includes(skill)) {;
              newSkills.push(skill);
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
            }
          })
        }

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

  // Handle form submission
  const onSubmit = async (values: TalentFormValues) => {
    if (skillTags.length === 0) {
      toast({
        title: "Skills required"
        description: "Please add at least one skill to your profile."
        variant: "destructive"})
      return
    }

    try {
      // For actual implementation with Supabase
      if (!user?.id) {
        throw new Error("User not authenticated")
      }
// Enhance profile if not already done

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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      form.set_value ("bio", generated_content.summary);
;
      // Extract all skills from categorized skills and properly type cast them;
      const allCategorizedSkills = generated_content.categorized_skills;
      const new_skills: string[] = [],
      // Safely extract and flatten skills from each category;
      Object.values (allCategorizedSkills).for_each (category_skills => {}
        if () {) {}
  $2;
}
          category_skills.for_each (skill => {}
            if () {) {}
  $2;
}
              new_skills.push (skill);
            }
          });
        }
      });
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      case 'programming': return 'bg-blue-500/20 hover:bg-blue-500/30 text-blue-500';
=======
    switch (category) {;      case 'programming': return 'bg-blue-500/20 hover:bg-blue-500/30 text-blue-500';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      case 'devops': return 'bg-green-500/20 hover:bg-green-500/30 text-green-500';
      case 'platforms': return 'bg-amber-500/20 hover:bg-amber-500/30 text-amber-500';
      case 'softSkills': return 'bg-purple-500/20 hover:bg-purple-500/30 text-purple-500';
=======
'
      case 'programming': return 'bg-blue-500/20 hover:bg-blue-500/30 text-blue-500';'
      case 'devops': return 'bg-green-500/20 hover:bg-green-500/30 text-green-500';'
      case 'platforms': return 'bg-amber-500/20 hover:bg-amber-500/30 text-amber-500';'
      case 'softSkills': return 'bg-purple-500/20 hover:bg-purple-500/30 text-purple-500';

  };

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      }),;
      if (newSkills.length > 0) {;
        setSkillTags([...skillTags, ...newSkills]);
      }
    }
  },;
  // Get category color;
  const getCategoryColor = (category: CategoryType) => {;
    switch (category) {;'
      case 'programming': return 'bg-blue-500/20 hover:bg-blue-500/30 text-blue-500',;'
      case 'devops': return 'bg-green-500/20 hover:bg-green-500/30 text-green-500',;'
      case 'platforms': return 'bg-amber-500/20 hover:bg-amber-500/30 text-amber-500',;'
      case 'softSkills': return 'bg-purple-500/20 hover:bg-purple-500/30 text-purple-500',;'
      case 'other': return 'bg-gray-500/20 hover:bg-gray-500/30 text-gray-500',;'
      default: return 'bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple';
    }
  },

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  // Send notification email
  const sendEnhancementNotification = async (userId: string, email: string) => {
    try {
      await supabase.functions.invoke('send-email', {
        body: {
          to: email
          subject: "Your Zion Talent Profile Has Been Enhanced"
          html: `"
          <div style="font-family: Arial, sans-serif, max-width: 600px, margin: 0 auto,">"
            <h2 style="color: #6D28D9,">Profile Enhancement Complete</h2>'
            <p>Your profile has been enhanced with AI. You're now more discoverable to recruiters and companies!</p>'
            <p>We've added a professional summary and categorized your skills to help you stand out.</p>
            <p>You can review and edit these enhancements in your profile dashboard.</p>"
            <div style="margin-top: 30px, padding-top: 20px, border-top: 1px solid #eee,">"
              <p style="color: #666, font-size: 12px,">© ${new Date().getFullYear()} Zion Marketplace</p>
            </div>
          </div>`
          `
        }
      })
    } catch (error) {"
      console.error("Failed to send notification email:", error)
    }
  }
  },

  // Handle form submission;
  const onSubmit = async (values: TalentFormValues) => {}
    if (skillTags.length === 0) {}
      toast({"
        title: "Skills required""
        description: "Please add at least one skill to your profile.""
        variant: "destructive"})
      return;
    }
    setIsSubmitting(true);

    setIsSubmitting(true),

    try {}
      // For actual implementation with Supabase;
      if (!user?.id) {"
        throw new Error("User not authenticated")
      }
      // Enhance profile if not already done"
      let finalSummary = "";
      let finalSkills = skillTags;"
      let finalSummary = "",
      let finalSkills = skillTags,
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

  // Send notification email
  const sendEnhancementNotification = async (userId: string, email: string) => {
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
  const getCategoryColor = (category: CategoryType) =>: any {}
    switch (category) {'
      case 'programming': return 'bg - blue - 500 / 20 hover:bg - blue - 500 / 30 text - blue - 500';'
      case 'devops': return 'bg - green - 500 / 20 hover:bg - green - 500 / 30 text - green - 500';'
      case 'platforms': return 'bg - amber - 500 / 20 hover:bg - amber - 500 / 30 text - amber - 500';'
      case 'soft_skills': return 'bg - purple - 500 / 20 hover:bg - purple - 500 / 30 text - purple - 500';'
      case 'other': return 'bg - gray - 500 / 20 hover:bg - gray - 500 / 30 text - gray - 500','
      default: return 'bg - zion - purple / 20 hover:bg - zion - purple / 30 text - zion - purple';
    }
  }
;
  // Send notification email;
const sendEnhancementNotification = async (user_id: string, email: string) => {
    try {
      await supabase.functions.invoke ('send - email', {
        body: {

      case 'other': return 'bg-gray-500/20 hover:bg-gray-500/30 text-gray-500',;
      default: return 'bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple';
    }

        }
      });
    } catch (error) {;
      console && console.error("Failed to send notification email:", error);
    }

  };

  // Handle form submission;
  const onSubmit = async (values: TalentFormValues) => {;
if (skillTags && skillTags.length === 0) {;              }
            }
          });
          if (aiData) {}
            finalSummary = (aiData as EnhancedProfile).summary;
            // Safely merge AI suggested skills with user-provided skills;
            const categorizedSkills = (aiData as EnhancedProfile).categorizedSkills;
            const aiSkills: string[] = []'
            // Extract skills from each category and ensure they're strings;
            Object.values(categorizedSkills).forEach(categorySkills => {}
              if (Array.isArray(categorySkills)) {}
                categorySkills.forEach(skill => {'
                  if (typeof skill === 'string' && skill) {}
                    aiSkills.push(skill)
  },;
  // Send notification email;
  const sendEnhancementNotification = async (user_id: string, email: string) => {}
    try {'
      await supabase.functions.invoke ('send - email', {}
        body: {}
        }
      });
    } catch (error) {;"
      console && console.error("Failed to send notification email:", error);
    }
},;
  // Handle form submission;
  const onSubmit = async (values: TalentFormValues) => {;
    if (skillTags.length === 0) {;
      toast({;
        title: "Skills required",,
  description: "Please add at least one skill to your profile.",;
        variant: "destructive"}),;
      return;

    }
    setIsSubmitting(true);

}
    setIsSubmitting(true);
          to: email,
          subject: "Your Zion Talent Profile Has Been Enhanced",
          html: `;
          <div style="font - family: Arial, sans - serif, max - width: 600px, margin: 0 auto, ">;
            <h2 style="color: #6D28D9, ">Profile Enhancement Complete</h2>;
            <p > Your profile has been enhanced with AI. You're now more discoverable to recruiters and companies!</p>;
            <p > We've added a professional summary and categorized your skills to help you stand out.</p>;
            <p > You can review and edit these enhancements in your profile dashboard.</p>;"
            <div style="margin - top: 30px, padding - top: 20px, border - top: 1px solid #eee, ">;"
              <p style="color: #666, font - size: 12px, ">© ${new Date ().getFullYear ()} Zion Marketplace</p>;
            </div>;
          </div>;`
          `;
        }
      });
    } catch (error) {"
      console.error ("Failed to send notification email:", error);
    }
  }
;
  // Handle form submission;
  const on_submit = async (values: TalentFormValues) => {}
    // Check condition;
if ( {) {}
  $2;
}
      toast ({"
        title: "Skills required","
        description: "Please add at least one skill to your profile.","
        variant: "destructive"}),
      return;
    }
    setIsSubmitting (true);
;
try {
      // For actual implementation with Supabase;
      // Check condition;
if ( {) {}
  $2;
}"
        throw new Error ("User not authenticated");
<<<<<<< HEAD
      }

      // Enhance profile if not already done;"
      let final_summary = "";
      let final_skills = skill_tags;
;
      // Check condition;
if ( {) {}
  $2;
}

    try {;
      // For actual implementation with Supabase;
      if (!user?.id) {;"
        throw new Error("User not authenticated");
      }
'
            // Extract skills from each category and ensure they're strings;
            Object && Object.values(categorizedSkills).forEach(categorySkills => {;
              if (Array && Array.isArray(categorySkills)) {;
                categorySkills && categorySkills.forEach(skill => {;

              talent_data: {}
                name: values.name,
                title: values.title,
                bio: values.bio,
                skills: skill_tags,
                location: values.location;
              }
            }
          });
;
          // Check condition;
if ( {) {}
  $2;
}
            final_summary = (ai_data as EnhancedProfile).summary;
            // Safely merge AI suggested skills with user - provided skills;
            const categorized_skills = (ai_data as EnhancedProfile).categorized_skills;
            const ai_skills: string[] = [],'
            // Extract skills from each category and ensure they're strings;

Object.values(categorizedSkills).forEach(categorySkills => {;
              if (Array.isArray(categorySkills)) {;
                categorySkills.forEach(skill => {;
                  if (typeof skill === 'string' && skill) {;
                    aiSkills.push(skill);
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  }
                });
              }

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
      }                  }
                });
              }

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            // Create a unique set of skills;
            finalSkills = [...new Set([...skillTags, ...aiSkills])];

          }                  if (typeof skill === 'string' && skill) {;
=======
'
                  if (typeof skill === 'string' && skill) {;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    aiSkills && aiSkills.push(skill);
              talent_data: {}
                name: values.name,
                title: values.title,
                bio: values.bio,
                skills: skill_tags,
                location: values.location;
              }
            }
          });
;
          // Check condition;
if ( {) {}
  $2;
}
            final_summary = (ai_data as EnhancedProfile).summary;
            // Safely merge AI suggested skills with user - provided skills;
            const categorized_skills = (ai_data as EnhancedProfile).categorized_skills;
            const ai_skills: string[] = [],'
            // Extract skills from each category and ensure they're strings;
;
      // Enhance profile if not already done;"
      let finalSummary = "",;
      let finalSkills = skillTags,;
      if (values.enhancedProfile && !generatedContent) {;
        try {;'
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
            const aiSkills: string[] = [],;'
            // Extract skills from each category and ensure they're strings;
            Object.values(categorizedSkills).forEach(categorySkills => {;
              if (Array.isArray(categorySkills)) {;
                categorySkills.forEach(skill => {;'
                  if (typeof skill === 'string' && skill) {;
                    aiSkills.push(skill);

            // Create a unique set of skills;
            finalSkills = [...new Set([...skillTags, ...aiSkills])];
Object.values (categorized_skills).for_each (category_skills => {
              if () {) {
  $2
}
                category_skills.for_each (skill => {}
                  // Check condition;
if ( {) {}
  $2;
}
                    ai_skills.push (skill);
                  }
                });
              }
            });
// Create a unique set of skills;
            finalSkills = [...new Set([...skillTags, ...aiSkills])];
          }

            }),;
            // Create a unique set of skills;
            finalSkills = [...new Set([...skillTags, ...aiSkills])];

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          }
        } catch (error) {"
          console.error("Error enhancing profile:", error),
          // Continue with submission even if enhancement fails"
          finalSummary = ""

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        } catch (error) {;
=======

        } catch (error) {;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          console && console.error("Error enhancing profile:", error);
          // Continue with submission even if enhancement fails;"
          finalSummary = "";
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        }
      } else if (generatedContent) {;
        finalSummary = generatedContent && generatedContent.summary;
      }
// Get user email for notification;
      const { data: userData } = await supabase.auth.getUser(),
      const userEmail = userData.user?.email,
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      // Create the talent profile
=======
        } catch (error) {
          console.error("Error enhancing profile:", error),
          // Continue with submission even if enhancement fails
          finalSummary = ""      // Create the talent profile
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        } catch (error) {
          console.error("Error enhancing profile:", error),
          // Continue with submission even if enhancement fails
          finalSummary = ""      // Create the talent profile
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
          }
        } catch (error) {
          console.error("Error enhancing profile:", error),
          // Continue with submission even if enhancement fails
          finalSummary = ""

        } catch (error) {;
          console && console.error("Error enhancing profile:", error);
          // Continue with submission even if enhancement fails;
          finalSummary = "";
        }
      } else if (generatedContent) {;
        finalSummary = generatedContent && generatedContent.summary;
      }
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

      // Get user email for notification
      const { data: userData } = await supabase.auth.getUser(),
      const userEmail = userData.user?.email,

      // Create the talent profile
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      // In a real implementation, this would save to Supabase
      setTimeout(() => {
        toast({
          title: "Profile Created Successfully"
=======

      // Create the talent profile;
      // In a real implementation, this would save to Supabase;
      setTimeout(() => {}
        toast({"
          title: "Profile Created Successfully""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          description: "Your talent profile has been published and is now visible in the directory."})
        // Send notification email if we have user email;
        if (userEmail && values.enhancedProfile) {}
          sendEnhancementNotification(user.id, userEmail)
        }
        setIsSubmitting(false)
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

      }, 1500),

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

      }, 1500),

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
}, 1500);
      }, 1500),
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      // Here would be the actual code to save the profile to Supabase
=======

      // Here would be the actual code to save the profile to Supabase;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      /*
      const { error } = await supabase'
        .from('talent_profiles')
        .insert({}
          user_id: user.id;
          name: values.name;
          title: values.title;
          bio: values.bio;
          summary: finalSummary;
          location: values.location;
          skills: finalSkills.map(name => ({ name, level: 4 })), // Default skill level;
          hourly_rate: Number(values.hourlyRate)
availability_status: values.availability
<<<<<<< HEAD
<<<<<<< HEAD
          // Other fields would be handled here
<<<<<<< HEAD

      // Get user email for notification;
      const { data: userData } = await supabase && supabase.auth.getUser(),;
      const userEmail = userData && userData.user?.email;
<<<<<<< HEAD

<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      // Create the talent profile;
      // In a real implementation, this would save to Supabase;
      setTimeout(() => {;
        toast({;
// Here would be the actual code to save the profile to Supabase;
      /*;
      const { error } = await supabase;'
        .from('talent_profiles');
        .insert({;

        }),
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

      */
    } catch (error: any) {}
      toast({"
        title: "Error Creating Profile""
        description: error.message |"There was an error creating your profile. Please try again.""
        variant: "destructive"})
      setIsSubmitting(false)
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    }
  }

  return (

    } catch (error: any) {;
      console && console.error("Error creating profile:", error);
      toast({;
        title: "Error Creating Profile",;
        description: error && error.message || "There was an error creating your profile. Please try again.",;
        variant: "destructive"}),;
      setIsSubmitting(false);
}
  }
  return (

    }
  }

  return (

});
      if (error) throw error;
      */;
    } catch (error: any) {;
      console && console.error("Error creating profile:", error);
      toast({;
        title: "Error Creating Profile",;
        description: error && error.message || "There was an error creating your profile. Please try again.",;
        variant: "destructive"}),;
      setIsSubmitting(false);
    }
  }
  return (

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
;
      // Get user email for notification;
      const { data: userData } = await supabase.auth.getUser(),;
      const userEmail = userData.user?.email,;
      // Create the talent profile;
      // In a real implementation, this would save to Supabase;
      setTimeout(() => {;
toast({;"
          title: "Profile Created Successfully",;"
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
const { error } = await supabase;'
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
} catch (error: any) {;"
      console.error("Error creating profile:", error),;
      toast({;"
        title: "Error Creating Profile",;"
        description: error.message || "There was an error creating your profile. Please try again.",;"
        variant: "destructive"});
      setIsSubmitting(false);
    }
  };
  return (;

};
  return (;
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    <div className="max-w-4xl mx-auto p-4 md:p-6">;
=======
"
    <div className="max-w-4xl mx-auto p-4 md:p-6">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  };
  return (;
    <div className="max-w-4xl mx-auto p-4 md:p-6">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
  };
  return (;
    <div className="max-w-4xl mx-auto p-4 md:p-6">;
          // Other fields would be handled here    <div className="max-w-4xl mx-auto p-4 md:p-6">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader>;"
          <CardTitle className="text-2xl text-white">Create Your Talent Profile</CardTitle>;"
          <CardDescription className="text-zion-slate">;
            Showcase your skills and experience to potential clients and employers.;
          </CardDescription>;
        </CardHeader>;
<Form {...form}>;
          <form onSubmit={form && form.handleSubmit(onSubmit)}>;
            <CardContent className="space-y-8">;

<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
;
        <Form {...form}>;
          <form onSubmit={form.handleSubmit(onSubmit)}>;
            <CardContent className="space-y-8">;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              {/* Basic Information */}
              <div className="space-y-4">;
                <h3 className="text-lg font-medium text-white">Basic Information</h3>;
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
                  <div className="col-span-1">;
                    <FormField
                      control={form && form.control}
                      name="name"
<FormField;
                      control={form.control}
                      name="name";
                    <FormField
                      name="name"                    <FormField
                      control={form && form.control}
                      name="name"
=======
              {/* Basic Information */}"
              <div className="space-y-4">;"
                <h3 className="text-lg font-medium text-white">Basic Information</h3>;"
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;"
                  <div className="col-span-1">;

                    <FormField;
                      control={form && form.control}"
                      name="name"

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                      render={({ field }) => (;
                        <FormItem>;"
                          <FormLabel className="text-zion-slate-light">Full Name</FormLabel>;
                          <FormControl>;"
                            <div className="relative">;"
                              <UserRound className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                              <Input
                                className="pl-10 bg-zion-blue border-zion-blue-light text-white"
                                placeholder="Your full name"

;
            // Create a unique set of skills;
            final_skills = [...new Set ([...skill_tags, ...ai_skills])];
          }
} catch (error) {"
          console.error ("Error enhancing profile:", error);
          // Continue with submission even if enhancement fails;"
          final_summary = "";
        }
      } else // Check condition;
if ( {) {}
  $2;
}
        final_summary = generated_content.summary;
      }
      // Get user email for notification;
      const { data: user_data } = await supabase.auth.get_user (),
      const user_email = user_data.user?.email;
;
      // Create the talent profile;
      // In a real implementation, this would save to Supabase;
set_timeout (() => {}
        toast ({"
          title: "Profile Created Successfully","
          description: "Your talent profile has been published and is now visible in the directory."}),
        // Send notification email if we have user email;
        // Check condition;
if ( {) {}
  $2;
}
          sendEnhancementNotification (user.id, user_email);
        }
        setIsSubmitting (false);
      }, 1500);
;
      // Here would be the actual code to save the profile to Supabase;
      /*;
const { error } = await supabase;'
        .from ('talent_profiles');
        .insert ({}
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
// Check condition;
if (throw error) {}
  $2;
}
      */;
    } catch (error: any) {"
      console.error ("Error creating profile:", error);
      toast ({"
        title: "Error Creating Profile","
        description: error.message || "There was an error creating your profile. Please try again.","
        variant: "destructive"}),
      setIsSubmitting (false);
    }
  }
;
return ("
    <div className="max - w-4xl mx - auto p - 4 md:p - 6">;"
      <Card className="bg - zion - blue - dark border - zion - blue - light">;
        <CardHeader>;"
          <CardTitle className="text - 2xl text - white">Create Your Talent Profile</CardTitle>;"
          <CardDescription className="text - zion - slate">;
            Showcase your skills and experience to potential clients and employers.;
          </CardDescription>;
        </CardHeader>;
        <Form {...form}>;
<form on_submit={form.handle_submit (on_submit)}>;"
            <CardContent className="space - y-8">;
              {/* Basic Information */}"
              <div className="space - y-4">;"
                <h3 className="text - lg font - medium text - white">Basic Information</h3>;"
                <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 6">;"
                  <div className="col - span - 1">;
                    <FormField;
                      control={form.control}"
                      name="name";
                      render={({ field }) => (
                        <FormItem>;"
                          <FormLabel className="text - zion - slate - light">Full Name</FormLabel>;
                          <FormControl>;"
                            <div className="relative">;"
                              <UserRound className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" />;
                              <Input;"
                                className="pl - 10 bg - zion - blue border - zion - blue - light text - white";"
                                placeholder="Your full name";
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                    />;
                  </div>;
                  <div className="col-span-1">;
                    <FormField
                      control={form && form.control}
                      name="title"
                              <Input;
                                className="pl-10 bg-zion-blue border-zion-blue-light text-white";
                                placeholder="Your full name";
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                                {...field}
                              />;
                            </div>;
                          </FormControl>;

<FormField;
                      control={form && form.control}"
                      name="title"

                      render={({ field }) => (;
                        <FormItem>;"
                          <FormLabel className="text-zion-slate-light">Professional Title</FormLabel>;
                          <FormControl>;"
                            <div className="relative">;"
                              <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
<<<<<<< HEAD
<<<<<<< HEAD
                              <Input
                                className="pl-10 bg-zion-blue border-zion-blue-light text-white"
                                placeholder="e && e.g., Senior Software Developer"

                          <FormMessage className="text - red - 400" />;
                        </FormItem>)}
                    />;
                  </div>;"
                  <div className="col - span - 1">;
                    <FormField;
                      control={form.control}"
                      name="title";
                      render={({ field }) => (
                        <FormItem>;"
                          <FormLabel className="text - zion - slate - light">Professional Title</FormLabel>;
                          <FormControl>;"
                            <div className="relative">;"
                              <Briefcase className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" />;
                              <Input;"
                                className="pl - 10 bg - zion - blue border - zion - blue - light text - white";"
                                placeholder="e.g., Senior Software Developer";
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                    />;
                  </div>;
                  <div className="col-span-1">;
                    <FormField
                      control={form && form.control}
                      name="location"
                              <Input;
                                className="pl-10 bg-zion-blue border-zion-blue-light text-white";
                                placeholder="e.g., Senior Software Developer";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                                {...field}
                              />;
                            </div>;
                          </FormControl>;

<FormField;
                      control={form && form.control}"
                      name="location"

                      render={({ field }) => (;

=======
                    />;
                  </div>;

                  <div className="col-span-1">;

                    <FormField
                      control={form && form.control}
                      name="location"
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
                    <FormField
                      control={form && form.control}
                      name="location"
                      render={({ field }) => (;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                        <FormItem>;
=======
                        <FormItem>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                          <FormLabel className="text-zion-slate-light">Location</FormLabel>;
                          <FormControl>;"
                            <div className="relative">;"
                              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;

                    />;
                  </div>;
                  <div className="col-span-1">;
                    <FormField
                      control={form && form.control}
                      name="hourlyRate"
                              <Input;
                                className="pl-10 bg-zion-blue border-zion-blue-light text-white";
                                placeholder="City, State/Province, Country";
                                {...field}
                              />;
                            </div>;
                          </FormControl>;

                    />;
                  </div>;

                  <div className="col-span-1">;

                    <FormField
                      control={form && form.control}
                      name="hourlyRate"
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
                    <FormField
                      control={form && form.control}
                      name="hourlyRate"
                      render={({ field }) => (;
                        <FormItem>;
=======

                              <Input"
                                className="pl-10 bg-zion-blue border-zion-blue-light text-white""
                                placeholder="City, State/Province, Country"
                      control={form.control}"
                      name="location";
                      render={({ field }) => (
                        <FormItem>;"
                          <FormLabel className="text - zion - slate - light">Location</FormLabel>;
                          <FormControl>;"
                            <div className="relative">;"
                              <MapPin className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" />;
                              <Input;"
                                className="pl - 10 bg - zion - blue border - zion - blue - light text - white";"
                                placeholder="City, State / Province, Country";

                                {...field}
                              />;
                            </div>;
                          </FormControl>;

                    <FormField;
                      control={form && form.control}"
                      name="hourlyRate"

                      render={({ field }) => (;
                        <FormItem>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                          <FormLabel className="text-zion-slate-light">Hourly Rate (USD)</FormLabel>;
                          <FormControl>;"
                            <div className="relative">;"
                              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate">$</span>;
<Input;
                                className="pl-8 bg-zion-blue border-zion-blue-light text-white";
                                placeholder="e.g., 85";
                                {...field}
                              />;
                            </div>;
                          </FormControl>;

                    />;
                  </div>;
                </div>;

<FormMessage className="text-red-400" />;
                        </FormItem>;
                      )}
                    />;
                  </div>;
                </div>;
                ;
                {/* Upload Avatar */}
                <div className="space-y-2">;
                  <FormLabel className="text-zion-slate-light">Profile Picture</FormLabel>;
                  <div className="flex items-center gap-6">;
                    <div className="relative w-24 h-24 rounded-full overflow-hidden bg-zion-blue-light border border-zion-blue-light">;
                      {uploadedAvatar ? (;
                        <AspectRatio ratio={1/1}>;
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
                          <img
                              <Input;
                                className="pl-8 bg-zion-blue border-zion-blue-light text-white";
                                placeholder="e.g., 85";
                            src={uploadedAvatar}
                            alt="Avatar preview"
                            className="w-full h-full object-cover"
                          />;
                        </AspectRatio>;
) : (;                        <div className="flex items-center justify-center h-full">;
=======
                      ) : (;
<img;
                            src={uploadedAvatar}
                            alt="Avatar preview";
                            className="w-full h-full object-cover";
                          />;
                        </AspectRatio>;
                      ) :(;
                        <div className="flex items-center justify-center h-full">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                          <UserRound className="h-10 w-10 text-zion-slate opacity-50" />;
                        </div>;
                      )}

<label className="flex items-center justify-center px-4 py-2 rounded-md bg-zion-purple hover:bg-zion-purple-dark text-white cursor-pointer transition-colors">;
                      <Upload className="mr-2 h-4 w-4" />;
                      <span>Upload Photo</span>;

</div>;
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
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleAvatarUpload}

                      />;
                    </label>;
                  </div>;
                  <p className="text-sm text-zion-slate">;
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
;
                    <label className="flex items-center justify-center px-4 py-2 rounded-md bg-zion-purple hover:bg-zion-purple-dark text-white cursor-pointer transition-colors">;
                      <Upload className="mr-2 h-4 w-4" />;
                      <span>Upload Photo</span>;
                      <input;
                        type="file";
                        accept="image/*";
                        className="hidden";
                        on_change={handleAvatarUpload}
                      />;
                    </label>;
                  </div>;
                  <p className="text - sm text - zion - slate">;

onChange={handleAvatarUpload}
                      />;
                    </label>;
                  </div>;
                  <p className="text-sm text-zion-slate">;
                    For best results, use an image at least 400x400 pixels in JPG, PNG, or GIF format.;
                  </p>;
                </div>;
              </div>;

;
              <Separator className="bg-zion-blue-light/50" />;
;
                      <span>Upload Photo</span>;                    For best results, use an image at least 400x400 pixels in JPG, PNG, or GIF format.;
                  </p>;
                </div>;
              </div>;
              {/* Bio Section */}
              <div className="space-y-4">;
                <h3 className="text-lg font-medium text-white">Professional Bio</h3>;
                <FormField;
                  control={form.control}"
                  name="bio";
                  render={({ field }) => (;
                    <FormItem>;"
                      <FormLabel className="text-zion-slate-light">About Yourself</FormLabel>;
                      <FormControl>;
                        <Textarea;"
                          className="h-32 min-h-[128px] bg-zion-blue border-zion-blue-light text-white";"
                          placeholder="Describe your professional background, expertise, and the value you bring to clients...";
                          {...field}
/>;
                      </FormControl>;
                      <FormMessage className="text-red-400" />;
                      <FormDescription className="text-zion-slate">;
                        {field && field.value?.length || 0}/1000 characters;
{field.value?.length || 0}/1000 characters;
                      </FormDescription>;
                    </FormItem>;
                  )}
                />;

                {/* AI Enhancement Option */}
                <FormField
                  control={form && form.control}
                  name="enhancedProfile"
                  render={({ field }) => (;
                    <FormItem className="flex flex-row items-center justify-between p-3 border border-zion-blue-light bg-zion-blue/30 rounded-md">;
                      <div className="space-y-0 && 0.5">;
;
                {/* AI Enhancement Option */}
                <FormField;
                  control={form.control}
                  name="enhancedProfile";
                  render={({ field }) => (;
                    <FormItem className="flex flex-row items-center justify-between p-3 border border-zion-blue-light bg-zion-blue/30 rounded-md">;
                      <div className="space-y-0.5">;
                        <FormLabel className="text-white flex items-center">;
                          <Sparkles className="w-4 h-4 mr-2 text-zion-purple" />;
                          AI Profile Enhancement;
                        </FormLabel>;
                        <FormDescription className="text-zion-slate-light">;
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
                          Let AI help optimize your profile for better visibility and engagement;
                        </FormDescription>;
                      </div>;
                      <FormControl>;

                />;

                {form && form.watch("enhancedProfile") && (;
                  <div className="flex justify-end">;

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
                        {field && field.value?.length || 0}/1000 characters;                      </FormDescription>;
                    </FormItem>;
                  )}
                />;
                    <Button
                      type="button"
                      variant="outline"
                      className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
<<<<<<< HEAD
                      onClick={generateEnhancedProfile}

                    </Button>;
                  </div>;
                )}

<<<<<<< HEAD
                      {isGenerating ? "Generating..." : "Generate Enhanced Profile"}
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
                    </Button>;
                  </div>;
                )}

{/* Generated Content Display */}
                {generatedContent && (;"
                  <div className="bg-zion-blue-light/20 border border-zion-blue-light rounded-md p-4">;"
                    <div className="flex items-center justify-between mb-3">;"
                      <h4 className="text-white font-medium flex items-center">;"
                        <Sparkles className="w-4 h-4 mr-2 text-zion-purple" />;
                        AI-Generated Content;
                      </h4>;

                      <Button"
                        type="button""
                        size="sm""
                        className="bg-zion-purple hover:bg-zion-purple-dark text-white"

                        onClick={applyGeneratedContent}>;"
                        <Check className="mr-1 h-3 w-3" /> Apply;
                      </Button>;
                    </div>;
"
                    <div className="space-y-4">;
                      <div>;"
                        <h5 className="text-zion-slate-light text-sm mb-1">Professional Summary</h5>;"
                      {isGenerating ? "Generating..." : "Generate Enhanced Profile"}
                    </Button>;
                  </div>;
                )}
                {/* Generated Content Display */}
                {generatedContent && (;
                  <div className="bg-zion-blue-light/20 border border-zion-blue-light rounded-md p-4">;
                    <div className="flex items-center justify-between mb-3">;
                      <h4 className="text-white font-medium flex items-center">;
                        <Sparkles className="w-4 h-4 mr-2 text-zion-purple" />;
                        AI-Generated Content;
                      </h4>;
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
                      <Button
                        type="button"
                        size="sm"
                        className="bg-zion-purple hover:bg-zion-purple-dark text-white"

                        onClick={applyGeneratedContent}>;
                        <Check className="mr-1 h-3 w-3" /> Apply;
                      </Button>;
                    </div>;

                    <div className="space-y-4">;
                      <div>;
                        <h5 className="text-zion-slate-light text-sm mb-1">Professional Summary</h5>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                        <p className="text-zion-slate italic">{generatedContent && generatedContent.summary}</p>;
                      </div>;

                      {generatedContent && generatedContent.categorizedSkills && (;
<div>;"
                          <h5 className="text-zion-slate-light text-sm mb-1">Categorized Skills</h5>;"
                          <div className="flex flex-wrap gap-2 mt-1">;
                            {Object && Object.entries(generatedContent && generatedContent.categorizedSkills).map(([category, skills]) => (;"
                              <div key={category} className="flex items-center gap-2">;

<<<<<<< HEAD
                                <Badge
=======
                      onClick={generateEnhancedProfile}                                <Badge
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                      onClick={generateEnhancedProfile}                                <Badge
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

                                <Badge;`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                        <div>;
                          <h5 className="text-zion-slate-light text-sm mb-1">Categorized Skills</h5>;
                          <div className="flex flex-wrap gap-2 mt-1">;
                            {Object && Object.entries(generatedContent && generatedContent.categorizedSkills).map(([category, skills]) => (;
                              <div key={category} className="flex items-center gap-2">;

                                <Badge
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                                  className={`w-fit ${getCategoryColor(category as CategoryType)}`}>;
                                  {category}
                                </Badge>;"
                                <div className="flex flex-wrap gap-1">;
                                  {skills && skills.map(skill => (;
                                    <Badge;
                                      key={skill}"
                                      className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none">;
                                      {skill}

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

</div>;

              <Separator className="bg-zion-blue-light/50" />;

</div>;
;
              <Separator className="bg-zion-blue-light/50" />;
;
              {/* Skills and Availability */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
                {/* Skills Section */}
                <div className="space-y-4">;
                  <h3 className="text-lg font-medium text-white">Skills & Expertise</h3>;
                  <FormField
                    control={form && form.control}
                    name="skills"
<FormField;
                    control={form.control}
                    name="skills";
                  <FormField
                    control={form && form.control}
                    name="skills"
                    render={({ field }) => (;
                      <FormItem>;
                        <FormLabel className="text-zion-slate-light">Skills</FormLabel>;
                        <div className="flex gap-2">;
                          <FormControl>;
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
                              placeholder="Add a skill...";
<Input;
                              className="flex-1 bg-zion-blue border-zion-blue-light text-white";
                              placeholder="Add a skill...";
                              {...field}
                              onKeyDown={handleSkillKeyPress}
                            />;
                          </FormControl>;

                  />;

                  <div className="flex flex-wrap gap-2 mt-2">;
                    {skillTags && skillTags.map(skill => (;

                      <Badge
                        key={skill}
                        className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none pl-2 pr-1 py-1 && 1.5 flex items-center gap-1">;
                        {skill}
                        <button
                          type="button"
                          onClick={() => handleRemoveSkill(skill)}
                          className="rounded-full hover:bg-zion-purple-dark/20 p-0 && 0.5";
                        >;
                          <X className="h-3 w-3" />;
                        </button>;
                      </Badge>;
                    ))}
                    {skillTags && skillTags.length === 0 && (;
                      <p className="text-zion-slate text-sm italic">No skills added yet</p>;
                    )}
                {/* Availability Section */}
                <div className="space-y-4">;
                  <h3 className="text-lg font-medium text-white">Availability</h3>;
                  <FormField
                    control={form && form.control}
                    name="availability"
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
                  />;
;
                  <div className="flex flex-wrap gap-2 mt-2">;
                    {skillTags.map(skill => (;
                      <Badge;
                        key={skill}
                        className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none pl-2 pr-1 py-1.5 flex items-center gap-1";
                      >;
                        {skill}
                        <button;
                          type="button";
                          onClick={() => handleRemoveSkill(skill)}
                          className="rounded-full hover:bg-zion-purple-dark/20 p-0.5";
                        >;
                          <X className="h-3 w-3" />;
                        </button>;
                      </Badge>;                    ))}
                    {skillTags.length === 0 && (;
                      <p className="text-zion-slate text-sm italic">No skills added yet</p>;
                    )}
                  </div>;
                </div>;
;
                {/* Availability Section */}
                <div className="space-y-4">;
                  <h3 className="text-lg font-medium text-white">Availability</h3>;
                  <FormField;
                    control={form.control}
                    name="availability";
                    render={({ field }) => (;
                      <FormItem className="space-y-4">;
                        <FormLabel className="text-zion-slate-light">Current Status</FormLabel>;
                        <FormControl>;
                          <div className="space-y-2">;
                            <div className="flex items-center space-x-2">;
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
                              <input
                                type="radio"
                                id="available"
                                value="available"

                                checked={field && field.value === "available"}
                                onChange={() => field && field.onChange("available")}
checked={field && field.value === "available"}
                                onChange={() => field && field.onChange("available")}
                              <input;
                                type="radio";
                                id="available";
                                value="available";
                                checked={field.value === "available"}
                                onChange={() => field.onChange("available")}
                                className="text-zion-purple focus:ring-zion-purple";
                                onChange={() => field && field.onChange("available")}                                className="text-zion-purple focus:ring-zion-purple";
                              />;
                              <label htmlFor="available" className="text-white flex items-center gap-2">;
                                <div className="h-2 w-2 rounded-full bg-green-500"></div>;
                                Available Now;
                              </label>;
                            </div>;

<div className="flex items-center space-x-2">;                              <input
                                type="radio"
                                id="unavailable"
                                value="unavailable"
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
;
                            <div className="flex items-center space-x-2">;
                              <input;
                            <div className="flex items-center space-x-2">;                              <input
                                type="radio"
                                id="unavailable"
                                value="unavailable"                              <input;
                                type="radio";
                                id="unavailable";
                                value="unavailable";
                                checked={field.value === "unavailable"}
                                on_change={() => field.on_change ("unavailable")}
                                className="text - zion - purple focus:ring - zion-purple";
                              />;
<<<<<<< HEAD
<<<<<<< HEAD
                              <label html_for="unavailable" className="text - white flex items - center gap - 2">;
                                <div className="h - 2 w - 2 rounded - full bg - red - 500"></div>;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                                onChange={() => field.onChange("unavailable")}
                                className="text-zion-purple focus:ring-zion-purple";
                              />;
                              <label htmlFor="unavailable" className="text-white flex items-center gap-2">;
                                <div className="h-2 w-2 rounded-full bg-red-500"></div>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
                              <label html_for="unavailable" className="text - white flex items - center gap-2">;
                                <div className="h - 2 w - 2 rounded - full bg - red-500"></div>;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

                              <input"
                                type="radio""
                                id="limited""
                                value="limited"
"
                                className="text-zion-purple focus:ring-zion-purple";
                              />;"
                              <label htmlFor="limited" className="text-white flex items-center gap-2">;"
                                <div className="h-2 w-2 rounded-full bg-yellow-500"></div>;
                                Limited Availability;
                              </label>;
                            </div>;

                              <input"
                                type="radio""
                                id="unavailable""
                                value="unavailable"

                              <input;"
                                type="radio";"
                                id="unavailable";"
                                value="unavailable";

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
                              <label html_for="unavailable" className="text - white flex items - center gap-2">;
                                <div className="h - 2 w - 2 rounded - full bg - red-500"></div>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                                Currently Unavailable;
                              </label>;
                            </div>;
                          </div>;
                        </FormControl>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

                  />;
"
                  <div className="pt-2">;"
                    <FormLabel className="text-zion-slate-light">Availability Message</FormLabel>;
                    <Textarea'"
                      placeholder="Describe your availability, working hours, or when you'll be available next..."

=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                      className="mt-1 && 1.5 bg-zion-blue border-zion-blue-light text-white"
                    />;"
                    <FormDescription className="text-zion-slate mt-1 && 1.5 text-sm">;
"
                        <FormMessage className="text - red - 400" />;
                      </FormItem>)}
                  />;"
                  <div className="pt - 2">;"
                    <FormLabel className="text - zion - slate - light">Availability Message</FormLabel>;
                    <Textarea;'"
                      placeholder="Describe your availability, working hours, or when you'll be available next...";"
                      className="mt - 1.5 bg - zion - blue border - zion - blue - light text - white";
                    />;"
                    <FormDescription className="text - zion - slate mt - 1.5 text - sm">;

                      Let clients know about your working hours, time zone, or availability for calls.;
                    </FormDescription>;
                  </div>;
                </div>;
              </div>;
            </CardContent>;

                </Button>;
              </div>;
            </CardFooter>;
          </form>;
        </Form>;
      </Card>;

    </div>;
  ),; import {};
  Form;
FormControl;
FormDescription;
FormField;
FormItem;
FormLabel;
});"
availability: z.enum (["available", "limited", "unavailable"]);
enhancedProfile: z.boolean () .default (true) 
});'
type CategoryType = 'programming' | 'devops' | 'platforms' | 'softSkills' | 'other';
}

}
;

};
//Handle removing skill tags const handleRemoveSkill = (skill: string) => {}
  setSkillTags (skillTags.filter ( (s) => s !== skill) ) 
};
//Handle key press in skills input (add on enter) const handleSkillKeyPress = (e: React.KeyboardEvent) => {}
}
};
//Handle avatar upload const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {}
  const file = e.target.files?.[0];
if (file) {}
  const reader = new FileReader ();
reader.onloadend = () => {}
  setUploadedAvatar (reader.result as string) 
};
reader.readAsDataURL (file) 
}
};
//Generate enhanced profile with AI return;
}//Call the Supabase Edge Function const {}
  data, error '
}= await supabase.functions.invoke ('talent-profile-enhancer', {}
  body: {}
  talentData: {}
  name: formData.name, title: formData.title, bio: formData.bio, skills: skillTags, location: formData.location;
}
}
});
setGeneratedContent (data as EnhancedProfile);
}finally {}
  setIsGenerating (false) 
}
};
//Apply generated content to form const applyGeneratedContent = () => {}
  if (generatedContent) {}
  //Extract all skills from categorized skills and properly type cast them const allCategorizedSkills = generatedContent.categorizedSkills;
const newSkills: string[] = [];
if (Array.isArray (categorySkills) ) {}
  categorySkills.forEach (skill => {'
  if (typeof skill === 'string' && skill && !skillTags.includes (skill) ) {}
}
});
}
};
//Get category color //Send notification email const sendEnhancementNotification = async (userId: string, email: string) => {}
  try {'
  await supabase.functions.invoke ('send-email', {}
  body: {'"
  <p>Your profile has been enhanced with AI. You're now more discoverable to recruiters and companies!</p> <p>We've added a professional summary and categorized your skills to help you stand out.</p> <p>You can review and edit these enhancements in your profile dashboard.</p> <div style="margin-top: 30px, padding-top: 20px, border-top: 1px solid #eee, "> <p style="color: #666, font-size: 12px, ">© $ {}
  new Date () .getFullYear () 
}Zion Marketplace</p> 
}
}
};
if (skillTags.length === 0) {}
  toast ({}
  return;
}setIsSubmitting (true);
try {}
  //For actual implementation with Supabase if (!user?.id) {}
  try {}
  const {}
  data: aiData '
}= await supabase.functions.invoke ('talent-profile-enhancer', {}
  body: {}
  talentData: {}
  name: values.name, title: values.title, bio: values.bio, skills: skillTags, location: values.location;
}
}
});'
//Extract skills from each category and ensure they're strings Object.values (categorizedSkills) .forEach (categorySkills => {}
  if (Array.isArray (categorySkills) ) {}
  categorySkills.forEach (skill => {'
  if (typeof skill === 'string'&& skill) {}
}
});
//Create a unique set of skills finalSkills = [...new Set ([...skillTags, ...aiSkills]) ] 
}
}
}else if (generatedContent) {}
  finalSummary = generatedContent.summary;
}//Get user email for notification const {}
  data: userData;
}= await supabase.auth.getUser ();
const userEmail = userData.user?.email;
//Create the talent profile //In a real implementation, this would save to Supabase setTimeout ( () => {}
  toast ({}
  //Send notification email if we have user email if (userEmail && values.enhancedProfile) {}
  sendEnhancementNotification (user.id, userEmail) 
}
}, 1500);
//Here would be the actual code to save the profile to Supabase /* const {}
  error '
}= await supabase .from ('talent profiles') .insert ({}
  user id: user.id, name: values.name, title: values.title, bio: values.bio, summary: finalSummary, location: values.location, skills: finalSkills.map (name => ({}
  name, level: 4;
}) ), //Default skill level hourly rate: Number (values.hourlyRate);
availability status: values.availability;
//Other fields would be handled here;
});
if (error) throw error;
*/ setIsSubmitting (false);
}
};"
return (<div className="max-w-4xl mx-auto p-4 md:p-6"> <Card className="bg-zion-blue-dark border-zion-blue-light"> <CardHeader> <CardTitle className="text-2xl text-white">Create Your Talent Profile</CardTitle> <CardDescription className="text-zion-slate"> Showcase your skills and experience to potential clients and employers. </CardDescription> </CardHeader> <Form {}
  ...form;
}> <form onSubmit= {}
  form.handleSubmit (onSubmit) "
}> <CardContent className="space-y-8"> {}
  /* Basic Information */ "
}<div className="space-y-4"> <h3 className="text-lg font-medium text-white">Basic Information</h3> <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> <div className="col-span-1" > <FormField <FormItem> <FormLabel className="text-zion-slate-light">Full Name</FormLabel> <FormControl> <div className="relative"> <UserRound className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> <Input /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) "
}/> </div> <div className="col-span-1" > <FormField <FormItem> <FormLabel className="text-zion-slate-light">Professional Title</FormLabel> <FormControl> <div className="relative"> <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> <Input /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) "
}/> </div> <div className="col-span-1" > <FormField <FormItem> <FormLabel className="text-zion-slate-light">Location</FormLabel> <FormControl> <div className="relative"> <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> <Input /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) "
}/> </div> <div className="col-span-1" > <FormField <FormItem> <FormLabel className="text-zion-slate-light">Hourly Rate (USD) </FormLabel> <FormControl> <div className="relative"> <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate">$</span> <Input /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) 
}/> </div> </div> {}
  /* Upload Avatar */ "
}<div className="space-y-2"> <FormLabel className="text-zion-slate-light">Profile Picture</FormLabel> <div className="flex items-center gap-6"> <div className="relative w-24 h-24 rounded-full overflow-hidden bg-zion-blue-light border border-zion-blue-light"> {}
  uploadedAvatar ? (<AspectRatio ratio= {}
  1/1;
}> <img src= {}
  uploadedAvatar "
}alt="Avatar preview" className="w-full h-full object-cover" /> </AspectRatio>) : (<div className="flex items-center justify-center h-full"> <UserRound className="h-10 w-10 text-zion-slate opacity-50" /> </div>) "
}</div> <label className="flex items-center justify-center px-4 py-2 rounded-md bg-zion-purple hover:bg-zion-purple-dark text-white cursor-pointer transition-colors"> <Upload className="mr-2 h-4 w-4" /> <span>Upload Photo</span> <input type="file" accept="image/*" className="hidden" onChange= {}
  handleAvatarUpload "
}/> </label> </div> <p className="text-sm text-zion-slate"> For best results, use an image at least 400x400 pixels in JPG, PNG, or GIF format. </p> </div> </div> <Separator className="bg-zion-blue-light/50" /> {}
  /* Bio Section */ "
}<div className="space-y-4"> <h3 className="text-lg font-medium text-white" >Professional Bio</h3> <FormField <FormItem> <FormLabel className="text-zion-slate-light">About Yourself</FormLabel> <FormControl> <Textarea </FormDescription> </FormItem>) 
}/> {}
  /* AI Enhancement Option */ "
}<FormField <FormItem className="flex flex-row items-center justify-between p-3 border border-zion-blue-light bg-zion-blue/30 rounded-md"> <div className="space-y-0.5"> <FormLabel className="text-white flex items-center"> <Sparkles className="w-4 h-4 mr-2 text-zion-purple" /> AI Profile Enhancement </FormLabel> <FormDescription className="text-zion-slate-light"> Let AI help optimize your profile for better visibility and engagement </FormDescription> </div> <FormControl> <Switch /> </FormControl> </FormItem>) "
}/> <Button type="button" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple/10" onClick= {}
  generateEnhancedProfile;
}disabled= {}
  isGenerating;
}> </Button> </div>) 
}{}
  /* Generated Content Display */ 
}{"
  generatedContent && (<div className="bg-zion-blue-light/20 border border-zion-blue-light rounded-md p-4"> <div className="flex items-center justify-between mb-3"> <h4 className="text-white font-medium flex items-center"> <Sparkles className="w-4 h-4 mr-2 text-zion-purple" /> AI-Generated Content </h4> <Button type="button" size="sm" className="bg-zion-purple hover:bg-zion-purple-dark text-white" onClick= {}
  applyGeneratedContent "
}> <Check className="mr-1 h-3 w-3" /> Apply </Button> </div> <div className="space-y-4"> <div> <h5 className="text-zion-slate-light text-sm mb-1">Professional Summary</h5> <p className="text-zion-slate italic"> {}
  generatedContent.summary;
}</p> </div> {"
  generatedContent.categorizedSkills && (<div> <h5 className="text-zion-slate-light text-sm mb-1">Categorized Skills</h5> <div className="flex flex-wrap gap-2 mt-1"> {}
  Object.entries (generatedContent.categorizedSkills) .map ( ([category, skills]) => (<div key= {}
  category "
}className="flex items-center gap-2"> <Badge className= {}`
  `w-fit $ {}
  getCategoryColor (category as CategoryType) `
}` 
}> {}
  category "
}</Badge> <div className="flex flex-wrap gap-1"> {}
  skills.map (skill => (<Badge key= {}
  skill "
}className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none" > {}
  skill;
}</Badge>) ) 
}</div> </div>) ) 
}</div> </div>) 
}</div> </div>) "
}</div> <Separator className="bg-zion-blue-light/50" /> {}
  /* Skills and Availability */ "
}<div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {}
  /* Skills Section */ "
}<div className="space-y-4"> <h3 className="text-lg font-medium text-white" >Skills & Expertise</h3> <FormField <FormItem> <FormLabel className="text-zion-slate-light">Skills</FormLabel> <div className="flex gap-2"> <FormControl> <Input /> </FormControl> <Button type="button" variant="outline" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white" onClick= {}
  handleAddSkill "
}> Add </Button> </div> <FormDescription className="text-zion-slate"> Press Enter or click Add to include a skill </FormDescription> <FormMessage className="text-red-400" /> </FormItem>) "
}/> <div className="flex flex-wrap gap-2 mt-2"> {}
  skillTags.map (skill => (<Badge key= {}
  skill "
}className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none pl-2 pr-1 py-1.5 flex items-center gap-1" > {}
  skill "
}<button className="rounded-full hover:bg-zion-purple-dark/20 p-0.5" > <X className="h-3 w-3" /> </button> </Badge>) ) 
}{"
  skillTags.length === 0 && (<p className="text-zion-slate text-sm italic">No skills added yet</p>) 
}</div> </div> {}
  /* Availability Section */ "
}<div className="space-y-4"> <h3 className="text-lg font-medium text-white" >Availability</h3> <FormField <FormLabel className="text-zion-slate-light">Current Status</FormLabel> <FormControl> <div className="space-y-2"> <div className="flex items-center space-x-2" > <input /> <label htmlFor="available" className="text-white flex items-center gap-2"> <div className="h-2 w-2 rounded-full bg-green-500"></div> Available Now </label> </div> <div className="flex items-center space-x-2" > <input /> <label htmlFor="limited" className="text-white flex items-center gap-2"> <div className="h-2 w-2 rounded-full bg-yellow-500"></div> Limited Availability </label> </div> <div className="flex items-center space-x-2" > <input /> <label htmlFor="unavailable" className="text-white flex items-center gap-2"> <div className="h-2 w-2 rounded-full bg-red-500"></div> Currently Unavailable </label> </div> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) '"
}/> <div className="pt-2"> <FormLabel className="text-zion-slate-light" >Availability Message</FormLabel> <Textarea placeholder="Describe your availability, working hours, or when you'll be available next..." className="mt-1.5 bg-zion-blue border-zion-blue-light text-white" /> <FormDescription className="text-zion-slate mt-1.5 text-sm"> Let clients know about your working hours, time zone, or availability for calls. </FormDescription> </div> </div> </div> </CardContent> <CardFooter className="border-t border-zion-blue-light pt-6"> <div className="flex flex-col sm:flex-row gap-4 w-full sm:justify-between" > <Button type="button" variant="outline" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white" > Save as Draft </Button> <Button </Button> </div> </CardFooter> </form> </Form> </Card> </div>) 
}
}
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
                    />;
                    <FormDescription className="text-zion-slate mt-1 && 1.5 text-sm">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                    />;
                    <FormDescription className="text-zion-slate mt-1 && 1.5 text-sm">;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

                  />;

                  <div className="pt-2">;
                    <FormLabel className="text-zion-slate-light">Availability Message</FormLabel>;
                    <Textarea
                      placeholder="Describe your availability, working hours, or when you'll be available next..."
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
                      Let clients know about your working hours, time zone, or availability for calls.;
                    </FormDescription>;
                  </div>;
                </div>;
              </div>;
            </CardContent>;

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
                </Button>;
              </div>;
            </CardFooter>;
          </form>;
        </Form>;
      </Card>;

    </div>);
}

}
;
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

}
;

};
//Handle removing skill tags const handleRemoveSkill = (skill: string) => {
  setSkillTags (skillTags.filter ( (s) => s !== skill) ) 
};
//Handle key press in skills input (add on enter) const handleSkillKeyPress = (e: React.KeyboardEvent) => {
}
};
                    />;
                    <FormDescription className="text-zion-slate mt-1 && 1.5 text-sm">;

      }),;
      if (newSkills.length > 0) {;}
        setSkillTags([...skillTags, ...newSkills]);}
      }
    }
  },;
  // Get category color;

  const getCategoryColor = (category: CategoryType) => {;
    switch (category) {;'
      case 'programming': return 'bg-blue-500/20 hover:bg-blue-500/30 text-blue-500',;''
      case 'devops': return 'bg-green-500/20 hover:bg-green-500/30 text-green-500',;''
      case 'platforms': return 'bg-amber-500/20 hover:bg-amber-500/30 text-amber-500',;''
      case 'softSkills': return 'bg-purple-500/20 hover:bg-purple-500/30 text-purple-500',;''
      case 'other': return 'bg-gray-500/20 hover:bg-gray-500/30 text-gray-500',;''
      default: return 'bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple';'
    }
  },

  // Send notification email;
  const sendEnhancementNotification = async (userId: string, email: string) => {
  // TODO: Implement
      await supabase.functions.invoke('send-email', {
  to: email;
          subject: "Your Zion Talent Profile Has Been Enhanced"",
  html: `"
          <div style="font-family: Arial, sans-serif, max-width: 600px, margin: 0 auto,">"
</div>"
            <h2 style="color: #6D28D9,">Profile Enhancement Complete</h2>""
            <p>Your profile has been enhanced with AI. You're now more discoverable to recruiters and companies!</p>
            <p>We've added a professional summary and categorized your skills to help you stand out.</p>
            <p>You can review and edit these enhancements in your profile dashboard.</p>
            <div style="margin-top: 30px, padding-top: 20px, border-top: 1px solid #eee,">"
</div>)"
              <p style="color: #666, font-size: 12px,">© ${new Date().getFullYear()} Zion Marketplace</p>"
            </div>
          <div style="font - family: Arial, sans - serif, max - width: 600px, margin: 0 auto, ">;"
            <h2 style="color: #6D28D9, ">Profile Enhancement Complete</h2>;""
            <p > Your profile has been enhanced with AI. You're now more discoverable to recruiters and companies!</p>;
            <p > We've added a professional summary and categorized your skills to help you stand out.</p>;
            <p > You can review and edit these enhancements in your profile dashboard.</p>;
            <div style="margin - top: 30px, padding - top: 20px, border - top: 1px solid #eee, ">;"
              <p style="color: #666, font - size: 12px, ">© ${new Date ().getFullYear ()} Zion Marketplace</p>;"
            </div>;
          </div>;"
    <div className="max-w-4xl mx-auto p-4 md:p-6">;"
      <Card className="bg-zion-blue-dark border-zion-blue-light">;"

        <CardHeader>;
          <CardTitle className="text-2xl text-white">Create Your Talent Profile;""
          <CardDescription className="text-zion-slate">;"

        <Form {...form}>;

          <form onSubmit={form && form.handleSubmit(onSubmit)}>;
</form>"
            <CardContent className="space-y-8">;"

          <form onSubmit={form.handleSubmit(onSubmit)}>;
              <div className="space-y-4">;"
                <h3 className="text-lg font-medium text-white">Basic Information</h3>;""
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;"
                  <div className="col-span-1">;"
                    <FormField;
                      control={form && form.control}"
                      name="name""
                      render={({ field }) => (;

                        <FormItem>;
                          <FormLabel className="text-zion-slate-light">Full Name;"
                          <FormControl>;
                            <div className="relative">;"
                              <UserRound className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;"

                              <Input;"
                                className="pl-10 bg-zion-blue border-zion-blue-light text-white"""
                                placeholder="Your full name""
            // Create a unique set of skills;)
            final_skills = [...new Set ([...skill_tags, ...ai_skills])];
        } catch (error) {"
          console.error ("Error enhancing profile:", error);"
          // Continue with submission even if enhancement fails;"
          final_summary = "";"
      } else // Check condition;
        final_summary = generated_content.summary;
      // Get user email for notification;
      const { data: user_data } = await supabase.auth.get_user (),
      const user_email = user_data.user?.email;
      // Create the talent profile;
      // In a real implementation, this would save to Supabase;
      set_timeout (() => {
    <div className="max - w-4xl mx - auto p - 4 md:p - 6">;"
      <Card className="bg - zion - blue - dark border - zion - blue - light">;"

          <CardTitle className="text - 2xl text - white">Create Your Talent Profile;""
          <CardDescription className="text - zion - slate">;"

          <form on_submit={form.handle_submit (on_submit)}>;
            <CardContent className="space - y-8">;"
              <div className="space - y-4">;"
                <h3 className="text - lg font - medium text - white">Basic Information</h3>;""
                <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 6">;"
                  <div className="col - span - 1">;"
                      control={form.control}"
                      name="name";"
                      render={({ field }) => (

                          <FormLabel className="text - zion - slate - light">Full Name;"
                              <UserRound className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" />;"

                                className="pl - 10 bg - zion - blue border - zion - blue - light text - white";""
                                placeholder="Your full name";"
                    />;

                      name="title""
                                className="pl-10 bg-zion-blue border-zion-blue-light text-white";""
                                {...field}

                      name="title"")

                          <FormLabel className="text-zion-slate-light">Professional Title;"
                              <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;"

                                placeholder="e && e.g., Senior Software Developer"""
                          <FormMessage className="text - red - 400" />;"
                        )}
                      name="title";"

                          <FormLabel className="text - zion - slate - light">Professional Title;"
                              <Briefcase className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" />;"

                                placeholder="e.g., Senior Software Developer";"

                      name="location""

                      name="location"")

                          <FormLabel className="text-zion-slate-light">Location;"
                              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;"

                                placeholder="City, State/Province, Country""
                      name="location";")

                          <FormLabel className="text - zion - slate - light">Location;"
                              <MapPin className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" />;"

                                placeholder="City, State / Province, Country";"

                      name="hourlyRate""
                                placeholder="City, State/Province, Country";"

                      name="hourlyRate"")

)"
                          <FormLabel className="text-zion-slate-light">Hourly Rate (USD);"
                              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate">$</span>;"
                                className="pl-8 bg-zion-blue border-zion-blue-light text-white"""
                                placeholder="e && e.g., 85"""

                      name="hourly_rate";"

                          <FormLabel className="text - zion - slate - light">Hourly Rate (USD);"
                              <span className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate">$</span>;"
                                className="pl - 8 bg - zion - blue border - zion - blue - light text - white";""
                                placeholder="e.g., 85";"
                                className="pl-8 bg-zion-blue border-zion-blue-light text-white";""

                <div className="space-y-2">;"
                  <FormLabel className="text-zion-slate-light">Profile Picture;""
                  <div className="flex items-center gap-6">;"
                    <div className="relative w-24 h-24 rounded-full overflow-hidden bg-zion-blue-light border border-zion-blue-light">;"
                        <AspectRatio ratio={1/1}>;

                          <img;
                            src={uploadedAvatar}"
                            alt="Avatar preview"""
                            className="w-full h-full object-cover""
</img>
                        ;"
                        <div className="flex items-center justify-center h-full">;"
                          <UserRound className="h-10 w-10 text-zion-slate opacity-50" />;"

                    <label className="flex items-center justify-center px-4 py-2 rounded-md bg-zion-purple hover:bg-zion-purple-dark text-white cursor-pointer transition-colors">;"
</label>"
                      <Upload className="mr-2 h-4 w-4" />;"

                      <span>Upload Photo</span>;
                      <input;"
                        type="file"""
                        accept="image/*"""
                        className="hidden""
                        onChange={handleAvatarUpload}

</input>
                    </label>;
                  <p className="text-sm text-zion-slate">;"
</p>
                        type="file";""
                        accept="image/*";""
                        className="hidden";"
                        on_change={handleAvatarUpload}
                  <p className="text - sm text - zion - slate">;"
                  </p>;
                <h3 className="text-lg font-medium text-white">Professional Bio</h3>;"
                  name="bio";"

                      <FormLabel className="text-zion-slate-light">About Yourself;"

                        <Textarea;"
                          className="h-32 min-h-[128px] bg-zion-blue border-zion-blue-light text-white";""
                          placeholder="Describe your professional background, expertise, and the value you bring to clients...";"

                      <FormMessage className="text-red-400" />;"
                      <FormDescription className="text-zion-slate">;"

                  name="enhancedProfile"")
                    <FormItem className="flex flex-row items-center justify-between p-3 border border-zion-blue-light bg-zion-blue/30 rounded-md">;"
                      <div className="space-y-0 && 0.5">;"
                        <FormLabel className="text-white flex items-center">;"
                          <Sparkles className="w-4 h-4 mr-2 text-zion-purple" />;"

                        <FormDescription className="text-zion-slate-light">;"
              <Separator className="bg - zion - blue - light / 50" />;"
                <h3 className="text - lg font - medium text - white">Professional Bio</h3>;"
                  name="bio";")

                      <FormLabel className="text - zion - slate - light">About Yourself;"

                          className="h - 32 min - h-[128px] bg - zion - blue border - zion - blue - light text - white";""

                      <FormDescription className="text - zion - slate">;"

                      ;)
                  name="enhanced_profile";"
                    <FormItem className="flex flex - row items - center justify - between p - 3 border border - zion - blue - light bg - zion - blue / 30 rounded - md">;"
                      <div className="space - y-0.5">;"
                        <FormLabel className="text - white flex items - center">;"
                          <Sparkles className="w - 4 h - 4 mr - 2 text - zion - purple" />;"

                        <FormDescription className="text - zion - slate - light">;"

                  <div className="flex justify-end">;"
                    <Button;"
                      type="button"""
                      variant="outline"""
                      className="border-zion-purple text-zion-purple hover:bg-zion-purple/10""
                      onClick={generateEnhancedProfile}
                      disabled={isGenerating}>;
                      <Sparkles className="mr-2 h-4 w-4" />;"

                  <div className="bg-zion-blue-light/20 border border-zion-blue-light rounded-md p-4">;"
                    <div className="flex items-center justify-between mb-3">;"
                      <h4 className="text-white font-medium flex items-center">;"
</h4>"

                      </h4>;
                        size="sm"""
                        className="bg-zion-purple hover:bg-zion-purple-dark text-white""
                        onClick={applyGeneratedContent}>;
                        <Check className="mr-1 h-3 w-3" /> Apply;"

                      <div>;
                        <h5 className="text-zion-slate-light text-sm mb-1">Professional Summary</h5>;""
                        <p className="text-zion-slate italic">{generatedContent && generatedContent.summary}</p>;"
                          <h5 className="text-zion-slate-light text-sm mb-1">Categorized Skills</h5>;""
                          <div className="flex flex-wrap gap-2 mt-1">;"
                              <div key={category} className="flex items-center gap-2">;"
                                <Badge;)`;
                                  className={`w-fit ${getCategoryColor(category as CategoryType)}`}>;

                                <div className="flex flex-wrap gap-1">;"
                                    <Badge;
                                      key={skill}"
                                      className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none">;"

</Badge>

                                    </Badge>;
                                </div>;
                              </div>;
                          </div>;
                        </div>;
                    </div>;
                  </div>;

              </div>;"
              <Separator className="bg-zion-blue-light/50" />;"
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;"
                  <h3 className="text-lg font-medium text-white">Skills & Expertise</h3>;"
                    name="skills""

                        <FormLabel className="text-zion-slate-light">Skills;""
                        <div className="flex gap-2">;"

                              className="flex-1 bg-zion-blue border-zion-blue-light text-white"""
                              placeholder="Add a skill...""
                        <Switch;
                          checked={field.value}
                          onCheckedChange={field.on_change}"
                          className="data-[state = checked]:bg - zion - purple";"

                    )}"
                  <div className="flex justify - end">;"
                      type="button";""
                      variant="outline";""
                      className="border - zion - purple text - zion - purple hover:bg - zion - purple / 10";"
                      on_click={generateEnhancedProfile}
                      disabled={is_generating}
                    >;
                      <Sparkles className="mr - 2 h - 4 w - 4" />;"

                  </div>)}"
                  <div className="bg - zion - blue - light / 20 border border - zion - blue - light rounded - md p - 4">;"
                    <div className="flex items - center justify - between mb - 3">;"
                      <h4 className="text - white font - medium flex items - center">;"

                        size="sm";""
                        className="bg - zion - purple hover:bg - zion - purple - dark text - white";"
                        on_click={applyGeneratedContent}
                        <Check className="mr - 1 h - 3 w - 3" /> Apply;"

                        <h5 className="text - zion - slate - light text - sm mb - 1">Professional Summary</h5>;""
                        <p className="text - zion - slate italic">{generated_content.summary}</p>;"
                          <h5 className="text - zion - slate - light text - sm mb - 1">Categorized Skills</h5>;""
                          <div className="flex flex - wrap gap - 2 mt - 1">;"
                              <div key={category} className="flex items - center gap - 2">;"
                                <Badge;`;
                                  className={`w - fit ${getCategoryColor (category as CategoryType)}`}

                                <div className="flex flex - wrap gap - 1">;"
                                      className="bg - zion - purple / 20 hover:bg - zion - purple / 30 text - zion - purple border - none";"

                                    ))}
                              </div>))}
                        </div>)}
              <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 8">;"
                  <h3 className="text - lg font - medium text - white">Skills & Expertise</h3>;"
                    name="skills";"

                        <FormLabel className="text - zion - slate - light">Skills;""
                        <div className="flex gap - 2">;"

                              className="flex - 1 bg - zion - blue border - zion - blue - light text - white";""
                              placeholder="Add a skill...";"
                              className="flex-1 bg-zion-blue border-zion-blue-light text-white";""
                              onKeyDown={handleSkillKeyPress}

                  <div className="flex flex-wrap gap-2 mt-2">;"
                        className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none pl-2 pr-1 py-1 && 1.5 flex items-center gap-1">;"

                        <button;"
                          type="button"")
                          onClick={() => handleRemoveSkill(skill)}
</button>"
                          <X className="h-3 w-3" />;"

                        </button>;
                      <p className="text-zion-slate text-sm italic">No skills added yet</p>;""
                  <h3 className="text-lg font-medium text-white">Availability</h3>;"
                    name="availability""
                      <FormItem className="space-y-4">;"
                        <FormLabel className="text-zion-slate-light">Current Status;"
                            <div className="flex items-center space-x-2">;"
                                type="radio"""
                                id="available"""
                                value="available"""
                                checked={field && field.value === "available"}")"
                                onChange={() => field && field.onChange("available")}"
</input>"
                              <label htmlFor="available" className="text-white flex items-center gap-2">;"
                                <div className="h-2 w-2 rounded-full bg-green-500"></div>;"
                                id="limited"""
                                value="limited"""
                                checked={field && field.value === "limited"}""
                                onChange={() => field && field.onChange("limited")}"
                              <label htmlFor="limited" className="text-white flex items-center gap-2">;"
                                <div className="h-2 w-2 rounded-full bg-yellow-500"></div>;"
                                id="unavailable"""
                                value="unavailable"""
                                checked={field && field.value === "unavailable"}""
                                onChange={() => field && field.onChange("unavailable")}"
                              <label htmlFor="unavailable" className="text-white flex items-center gap-2">;"
                                <div className="h-2 w-2 rounded-full bg-red-500"></div>;"
                                type="radio";""
                                id="unavailable";""
                                value="unavailable";""
                                checked={field.value === "unavailable"}""
                                on_change={() => field.on_change ("unavailable")}"
                              <label html_for="unavailable" className="text - white flex items - center gap - 2">;"
                                <div className="h - 2 w - 2 rounded - full bg - red - 500"></div>;""
                  <div className="pt-2">;"
                    <FormLabel className="text-zion-slate-light">Availability Message;"
                      placeholder="Describe your availability, working hours, or when you'll be available next..."""
                      className="mt-1 && 1.5 bg-zion-blue border-zion-blue-light text-white""
                    <FormDescription className="text-zion-slate mt-1 && 1.5 text-sm">;"

                  <div className="pt - 2">;"
                    <FormLabel className="text - zion - slate - light">Availability Message;"
                      placeholder="Describe your availability, working hours, or when you'll be available next...";""
                      className="mt - 1.5 bg - zion - blue border - zion - blue - light text - white";"
                    <FormDescription className="text - zion - slate mt - 1.5 text - sm">;"

          </form>;
    </div>);
//Handle avatar upload const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
  <p>Your profile has been enhanced with AI. You're now more discoverable to recruiters and companies!</p> <p>We've added a professional summary and categorized your skills to help you stand out.</p> <p>You can review and edit these enhancements in your profile dashboard.</p> <div style="margin-top: 30px, padding-top: 20px, border-top: 1px solid #eee, "> <p style="color: #666, font-size: 12px, ">© $ {"
  new Date () .getFullYear () 
}Zion Marketplace</p> "
return (<div className="max-w-4xl mx-auto p-4 md:p-6"> <Card className="bg-zion-blue-dark border-zion-blue-light"> <CardHeader> <CardTitle className="text-2xl text-white">Create Your Talent Profile <CardDescription className="text-zion-slate"> Showcase your skills and experience to potential clients and employers.   <Form {"
}> <form onSubmit= {)
  form.handleSubmit (onSubmit) "
}> <CardContent className="space-y-8"> {"
}<div className="space-y-4"> <h3 className="text-lg font-medium text-white">Basic Information</h3> <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> <div className="col-span-1" > <FormField <FormItem> <FormLabel className="text-zion-slate-light">Full Name <FormControl> <div className="relative"> <UserRound className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> <Input /> </div>  <FormMessage className="text-red-400" /> )""
}/> </div> <div className="col-span-1" > <FormField <FormItem> <FormLabel className="text-zion-slate-light">Professional Title <FormControl> <div className="relative"> <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> <Input /> </div>  <FormMessage className="text-red-400" /> )""
}/> </div> <div className="col-span-1" > <FormField <FormItem> <FormLabel className="text-zion-slate-light">Location <FormControl> <div className="relative"> <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> <Input /> </div>  <FormMessage className="text-red-400" /> )""
}/> </div> <div className="col-span-1" > <FormField <FormItem> <FormLabel className="text-zion-slate-light">Hourly Rate (USD)  <FormControl> <div className="relative"> <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate">$</span> <Input /> </div>  <FormMessage className="text-red-400" /> )"
}/> </div> </div> {"
}<div className="space-y-2"> <FormLabel className="text-zion-slate-light">Profile Picture <div className="flex items-center gap-6"> <div className="relative w-24 h-24 rounded-full overflow-hidden bg-zion-blue-light border border-zion-blue-light"> {"
  uploadedAvatar ? (<AspectRatio ratio= {
  1/1;
}> <img src= {
}alt="Avatar preview" className="w-full h-full object-cover" /> ) : (<div className="flex items-center justify-center h-full"> <UserRound className="h-10 w-10 text-zion-slate opacity-50" /> </div>)""
}</div> <label className="flex items-center justify-center px-4 py-2 rounded-md bg-zion-purple hover:bg-zion-purple-dark text-white cursor-pointer transition-colors"> <Upload className="mr-2 h-4 w-4" /> <span>Upload Photo</span> <input type="file" accept="image/*" className="hidden" onChange= {"
}/> </label> </div> <p className="text-sm text-zion-slate"> For best results, use an image at least 400x400 pixels in JPG, PNG, or GIF format. </p> </div> </div> <Separator className="bg-zion-blue-light/50" /> {"
  /* Bio Section */ "
}<div className="space-y-4"> <h3 className="text-lg font-medium text-white" >Professional Bio</h3> <FormField <FormItem> <FormLabel className="text-zion-slate-light">About Yourself <FormControl> <Textarea  )"
}<FormField <FormItem className="flex flex-row items-center justify-between p-3 border border-zion-blue-light bg-zion-blue/30 rounded-md"> <div className="space-y-0.5"> <FormLabel className="text-white flex items-center"> <Sparkles className="w-4 h-4 mr-2 text-zion-purple" /> AI Profile Enhancement  <FormDescription className="text-zion-slate-light"> Let AI help optimize your profile for better visibility and engagement  </div> <FormControl> <Switch />  )"
}/> <Button type="button" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple/10" onClick= {"
  generateEnhancedProfile;
}disabled= {
  isGenerating;
}>  </div>) "
  generatedContent && (<div className="bg-zion-blue-light/20 border border-zion-blue-light rounded-md p-4"> <div className="flex items-center justify-between mb-3"> <h4 className="text-white font-medium flex items-center"> <Sparkles className="w-4 h-4 mr-2 text-zion-purple" /> AI-Generated Content </h4> <Button type="button" size="sm" className="bg-zion-purple hover:bg-zion-purple-dark text-white" onClick= {"
}> <Check className="mr-1 h-3 w-3" /> Apply  </div> <div className="space-y-4"> <div> <h5 className="text-zion-slate-light text-sm mb-1">Professional Summary</h5> <p className="text-zion-slate italic"> {"

}</p> </div> {"
  generatedContent.categorizedSkills && (<div> <h5 className="text-zion-slate-light text-sm mb-1">Categorized Skills</h5> <div className="flex flex-wrap gap-2 mt-1"> {"
</div>)
  Object.entries (generatedContent.categorizedSkills) .map ( ([category, skills]) => (<div key= {
  category;"
}className="flex items-center gap-2"> <Badge className= {"
} <div className="flex flex-wrap gap-1"> {"
  skills.map (skill => (<Badge key= {
  skill;"
}className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none" > {"
}) ) 
}</div> </div>) ) 
}</div> </div>) 
}</div> </div>) "
}</div> <Separator className="bg-zion-blue-light/50" /> {"
}<div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {"
}<div className="space-y-4"> <h3 className="text-lg font-medium text-white" >Skills & Expertise</h3> <FormField <FormItem> <FormLabel className="text-zion-slate-light">Skills <div className="flex gap-2"> <FormControl> <Input />  <Button type="button" variant="outline" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white" onClick= {"
}> Add  </div> <FormDescription className="text-zion-slate"> Press Enter or click Add to include a skill  <FormMessage className="text-red-400" /> )""
}/> <div className="flex flex-wrap gap-2 mt-2"> {"
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
}
}
}
;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
