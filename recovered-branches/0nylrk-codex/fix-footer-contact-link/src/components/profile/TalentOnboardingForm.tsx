import React from 'react',
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import {,
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { useTalentProfileEnhancer } from "@/hooks/useTalentProfileEnhancer";
import { supabase } from "@/integrations/supabase/client";
} from "@/components/ui/form";
} from "@/components/ui/select";
} from "lucide-react";
// Define the form schema with validation,
const talentSchema = z.object({,
  // Step 1: Basic Info,
  basicInfo: z.object({,
type TalentFormValues = z.infer<typeof talentSchema>;
export function TalentOnboardingForm() {,
  const { user } = useAuth();
  const navigate = useNavigate();
  const totalSteps = 4;
  const form = useForm<TalentFormValues>({,
    resolver: zodResolver(talentSchema);
    defaultValues: {,
      basicInfo: {,
        fullName: user?.displayName || "";
        professionalTitle: "";
      availability: {,
        availabilityType: "";
        timezone: "";
        hourlyRate: "";
        portfolioLinks: [{ url: "" ,}];
  // Handle profile picture upload,
  const handleProfilePictureUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {,
    const file = e.target.files?.[0];
    if (!file) return;
    // Preview the image,
    const reader = new FileReader();
    reader.onloadend = () => {,
      setProfilePictureUrl(reader.result as string),
    };
    reader.readAsDataURL(file);
    // Store the file in the form data,
  };
  // Handle CV upload,
  const handleCvUpload = async (file: File) => {,
    const fileName = `cv-${user?.id,}-${Date.now()}`;
    const { error: cvError ,} = await supabase.storage,
      .from('resumes'),
      throw new Error("Failed to upload CV");
    }
,
    // Get the public URL,
    const { data: { publicUrl ,} } = supabase.storage,
      .from('resumes'),
      .getPublicUrl(fileName);
    return publicUrl;
  };
  // Rest of the file remains unchanged...,
  // [Previous implementation continues...],
  return null;
}
}}}}})))