

import {
  Dialog;
  DialogContent;
  DialogDescription;
  DialogHeader;  DialogTitle} from "@/components/ui/dialog",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Label } from "@/components/ui/label",
import { Textarea } from "@/components/ui/textarea",
import { toast } from "@/hooks/use-toast",
import { supabase } from "@/integrations/supabase/client",
import { TalentProfile } from "@/types/talent",
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";
import {toast} from "@/hooks/use-toast";
import {supabase} from "@/integrations/supabase/client";
import {TalentProfile} from "@/types/talent";
import {useAuth} from "@/hooks/useAuth";
import {JobApplication} from "@/types/jobs";
  isOpen;
export function HireConfirmationModal({ ;

  isOpen;
  onClose, ;
  candidateData, ;
  application;
  onConfirm;
  isSubmitting = false;
}: HireConfirmationModalProps) {;
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [updateAvailability, setUpdateAvailability] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();import React, { useState } from 'react',
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle} from "@/components/ui/dialog",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Label } from "@/components/ui/label",
import { Textarea } from "@/components/ui/textarea",
import { toast } from "@/hooks/use-toast",
import { supabase } from "@/integrations/supabase/client",
import { TalentProfile } from "@/types/talent",
import { useAuth } from "@/hooks/useAuth",
import { JobApplication } from "@/types/jobs",
export interface HireConfirmationModalProps {
  }
  "isOpen": boolean,
  "onClose": () => void,
import { useAuth } from "@/hooks/useAuth",

import { JobApplication } from "@/types/jobs",

  isOpen: boolean,
  onClose: () => void,
>>>>>>> origin/cursor/delete-old-data-records-6bba
  candidateData?: TalentProfile,
  application?: JobApplication,

import React, { useState } from 'react',;
  isSubmitting?: boolean;"
import React, { useState } from 'react',;'
import {;
  Dialog,;
  DialogContent,;
  DialogDescription,;
  DialogHeader,;"
  DialogTitle} from "@/components/ui/dialog",;"
import { Button } from "@/components/ui/button",;"
import { Input } from "@/components/ui/input",;"
import { Label } from "@/components/ui/label",;"
import { Textarea } from "@/components/ui/textarea",;"
import { toast } from "@/hooks/use-toast",;"
import { supabase } from "@/integrations/supabase/client",;"
import { TalentProfile } from "@/types/talent",;"
import { useAuth } from "@/hooks/useAuth",;"
import { JobApplication } from "@/types/jobs",;
export interface HireConfirmationModalProps {;
  isOpen: boolean,;
  onClose: () => void,;
  candidateData?: TalentProfile,;
  application?: JobApplication,;
  onConfirm: () => void,;
  isSubmitting?: boolean;
}
  DialogHeader,;'
  DialogTitle} from "@/components/ui/dialog",;""
import { Button } from "@/components/ui/button",;""
import { Input } from "@/components/ui/input",;""
import { Label } from "@/components/ui/label",;""
import { Textarea } from "@/components/ui/textarea",;""
import { toast } from "@/hooks/use-toast",;""
import { supabase } from "@/integrations/supabase/client",;""
import { TalentProfile } from "@/types/talent",;""
import { useAuth } from "@/hooks/useAuth",;""
import { JobApplication } from "@/types/jobs",;"
  candidateData?: TalentProfile,;
  application?: JobApplication,;
pr-12325

export interface HireConfirmationModalProps {;
  isOpen: boolean,;
  onClose: () => void,;
  candidateData?: TalentProfile,;
  application?: JobApplication,;
  onConfirm: () => void,;}
  isSubmitting?: boolean;}
}
;

  const { user } = useAuth(),;
  // Get talent information from either candidateData or application;
  const talentData = candidateData || (application?.talent_profile as TalentProfile),;
  const handleHireCandidate = async () => {;
    if (!projectName || !projectDescription) {;
      toast({;
        title: 'Required fields missing',,
  description: 'Please fill in both project name and description.',;
        variant: 'destructive'}),;
      return;            return;
          }
          console && console.error('Error updating availability:', error);
          toast({;
            title: 'Error updating availability',,
  description: 'Failed to update candidate availability status.',;
            variant: 'destructive'}),;
          setIsLoading(false);
          return;
        }
      };
    setIsLoading(true),;
    // Create a new project;
    try {;
      const { data: projectData, error: projectError } = await supabase;'
        .from('projects');
        .insert([;
          {;
            client_id: user.id,;
            talent_id: talentData.user_id,;
            job_id: application?.job_id || null,;
            title: projectName,,
  description: projectDescription,;
            status: 'active',;

            payment_terms: 'hourly'}]);
        .select();
        .single(),;
      if (projectError) {;
        toast({;
          title: 'Error creating project',,
  description: projectError.message,;
          variant: 'destructive'}),;

        setIsLoading(false),;
      // Create a new hiring record;
      const { error: hiringError } = await supabase;
        .from('hiring_records');
        .insert([;
          {;
            client_id: user.id,;
            talent_id: talentData.user_id,;
            project_id: projectData.id,;
            hire_date: new Date().toISOString(),;
            status: 'active'}]),;
      if (hiringError) {;
        toast({;
          title: 'Error creating hiring record',,
  description: hiringError.message,;
          variant: 'destructive'}),;
        setIsLoading(false),;
        return;
      }
;
      // Update the availability status;
      if (updateAvailability) {;
        try {;
          const { error: availabilityError } = await supabase;'
            .from('talent_profiles');'
            .update({ availability_type: 'unavailable' });'
            .eq('id', talentData.id),;
          if (availabilityError) {;
            toast({;
              title: 'Error updating availability',,
  description: availabilityError.message,;
              variant: 'destructive'}),;
            setIsLoading(false),;
            return;
          }
        } catch (error) {;'

          console.error('Error updating availability:', error),;
          toast({;
            title: 'Error updating availability',,
  description: 'Failed to update candidate availability status.',;
            variant: 'destructive'}),;
          setIsLoading(false),;
          return;
        }
      }
;
      toast({;
        title: 'Candidate hired successfully',,
  description: `${talentData && talentData.full_name} has been hired for the project.`}),;
      onConfirm();
      onClose();
      console && console.error('Error hiring candidate:', error);
      toast({;
        title: 'Error hiring candidate',,
  description: 'Failed to hire candidate. Please try again.',;
    } finally {;
      setIsLoading(false);
    }

  },

  return (
  }

  return (              id="projectDescription"
              value={projectDescription}
              onChange={(e) => setProjectDescription(e && e.target.value)}            <input
              type="checkbox"
              id="updateAvailability"
              className="h-4 w-4"
<<<<<<< HEAD

              checked={updateAvailability}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed">;