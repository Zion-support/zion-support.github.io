

<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
import {
  Dialog;
  DialogContent;
  DialogDescription;
  DialogHeader;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState } from 'react',
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  DialogTitle} from "@/components/ui/dialog",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Label } from "@/components/ui/label",
import { Textarea } from "@/components/ui/textarea",
import { toast } from "@/hooks/use-toast",
import { supabase } from "@/integrations/supabase/client",
import { TalentProfile } from "@/types/talent",
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { useAuth } from "@/hooks/useAuth";
import { JobApplication } from "@/types/jobs";
export interface HireConfirmationModalProps {

  isOpen: boolean
  onClose: () => void
  candidateData?: TalentProfile;
  application?: JobApplication;
  onConfirm: () => void

<<<<<<< HEAD
  isSubmitting?: boolean
}
export function HireConfirmationModal({
=======
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
export function HireConfirmationModal(): any ({ ;
  isOpen;
  onClose, ;
  candidateData, ;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export interface HireConfirmationModalProps {;
  isOpen: boolean,;
  onClose: () => void,;
  candidateData?: TalentProfile;
  application?: JobApplication;
  onConfirm: () => void,;
  isSubmitting?: boolean;
}

<<<<<<< HEAD
=======
export function HireConfirmationModal({ ;
  isOpen;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export function HireConfirmationModal({ ;


  isOpen;
  onClose, ;
  candidateData, ;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  application;
  onConfirm;
  isSubmitting = false;
}: HireConfirmationModalProps) {;
<<<<<<< HEAD
<<<<<<< HEAD
export interface HireConfirmationModalProps {
  isOpen: boolean,
  onClose: () => void,;
  candidateData?: TalentProfile;
  application?: JobApplication;
  onConfirm: () => void,
  isSubmitting?: boolean
}

export function HireConfirmationModal({ ;
  isOpen;

  onClose
  candidateData
  application;
  onConfirm;
  isSubmitting = false
}: HireConfirmationModalProps) {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [updateAvailability, setUpdateAvailability] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();
<<<<<<< HEAD
<<<<<<< HEAD
  // Get talent information from either candidateData or application
  const talentData = candidateData |(application?.talent_profile as TalentProfile);
  const handleHireCandidate = async () => {
    if (!projectName |!projectDescription) {
      toast({
        title: 'Required fields missing'
        description: 'Please fill in both project name and description.'
        variant: 'destructive'})
      return

=======

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState } from 'react',
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { useAuth } from "@/hooks/useAuth",
import { JobApplication } from "@/types/jobs",
export interface HireConfirmationModalProps {
  isOpen: boolean,
  onClose: () => void,
  candidateData?: TalentProfile,
  application?: JobApplication,
  onConfirm: () => void,
  isSubmitting?: boolean
import React, { useState } from 'react',;
import {;
  Dialog,;
  DialogContent,;
  DialogDescription,;
  DialogHeader,;
  DialogTitle} from "@/components/ui/dialog",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Label } from "@/components/ui/label",;
import { Textarea } from "@/components/ui/textarea",;
import { toast } from "@/hooks/use-toast",;
import { supabase } from "@/integrations/supabase/client",;
import { TalentProfile } from "@/types/talent",;
import { useAuth } from "@/hooks/useAuth",;
import { JobApplication } from "@/types/jobs",;
export interface HireConfirmationModalProps {;
  isOpen: boolean,;
  onClose: () => void,;
  candidateData?: TalentProfile,;
  application?: JobApplication,;
  onConfirm: () => void,;
  isSubmitting?: boolean;
}
;
export function HireConfirmationModal({;
  isOpen,;
  onClose,;
  candidateData,;
  application,;
  onConfirm,;
  isSubmitting = false;
}: HireConfirmationModalProps) {;
  const [projectName, setProjectName] = useState(''),;
  const [projectDescription, setProjectDescription] = useState(''),;
  const [updateAvailability, setUpdateAvailability] = useState(true),;
  const [isLoading, setIsLoading] = useState(false),;
  const { user } = useAuth(),;
  // Get talent information from either candidateData or application;
  const talentData = candidateData || (application?.talent_profile as TalentProfile),;
  const handleHireCandidate = async () => {;
    if (!projectName || !projectDescription) {;
      toast({;
        title: 'Required fields missing',;
        description: 'Please fill in both project name and description.',;
        variant: 'destructive'}),;
      return;


<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    if (!user) {
      toast({
        title: 'Not authenticated'
        description: 'You must be logged in to hire a candidate.'
        variant: 'destructive'})
      return
    }
    if (!talentData) {
      toast({
        title: 'Missing talent data'
        description: 'Talent information is missing.'
        variant: 'destructive'})
      return
<<<<<<< HEAD
<<<<<<< HEAD
  // Get talent information from either candidateData or application;
  const talentData = candidateData || (application?.talent_profile as TalentProfile);
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  // Get talent information from either candidateData or application;
  const talentData = candidateData || (application?.talent_profile as TalentProfile);

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleHireCandidate = async () => {;
    if (!projectName || !projectDescription) {;
      toast({;
        title: 'Required fields missing',;
        description: 'Please fill in both project name and description.',;
        variant: 'destructive'}),;
      return;
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    if (!user) {;
      toast({;
        title: 'Not authenticated',;
        description: 'You must be logged in to hire a candidate.',;
        variant: 'destructive'}),;
      return;
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    if (!talentData) {;
      toast({;
        title: 'Missing talent data',;
        description: 'Talent information is missing.',;
        variant: 'destructive'}),;
      return;
<<<<<<< HEAD
<<<<<<< HEAD
=======

    }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    }
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }



<<<<<<< HEAD
<<<<<<< HEAD
    setIsLoading(true);

    }
    setIsLoading(true);
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    setIsLoading(true);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    setIsLoading(true);

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components / ui / dialog';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
import { Label } from '@/components / ui / label';
import { Textarea } from '@/components / ui / textarea';
import { toast } from '@/hooks / use - toast';
import { supabase } from '@/integrations / supabase / client';
import { TalentProfile } from '@/types / talent';
import { use_auth } from '@/hooks / use_auth';
import { JobApplication } from '@/types / jobs';
export interface HireConfirmationModalProps {
  is_open: boolean,
  on_close: () => void,
  candidate_data?: TalentProfile;
  application?: JobApplication;
  on_confirm: () => void,
  is_submitting?: boolean;
}
export /**
 * HireConfirmationModal - Function description
 */
function HireConfirmationModal() {
  const [project_name, setProjectName] = useState ('');
  const [project_description, setProjectDescription] = useState ('');
  const [update_availability, setUpdateAvailability] = useState (true);
  const [is_loading, setIsLoading] = useState (false);
  const { user } = use_auth ();
;
  // Get talent information from either candidate_data or application;
  const talent_data = candidate_data || (application?.talent_profile as TalentProfile);
;
  const handleHireCandidate = async () => {
    // Check condition
if ( {) {
  $2
}
      toast ({
        title: 'Required fields missing',
        description: 'Please fill in both project name and description.',
        variant: 'destructive'}),
      return;
    }
    // Check condition
if ( {) {
  $2
}
      toast ({
        title: 'Not authenticated',
        description: 'You must be logged in to hire a candidate.',
        variant: 'destructive'}),
      return;
    }
    // Check condition
if ( {) {
  $2
}
      toast ({
        title: 'Missing talent data',
        description: 'Talent information is missing.',
        variant: 'destructive'}),
      return;
    }
    setIsLoading (true);
;
    // Create a new project;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    try {
      const { data: project_data, error: project_error } = await supabase;
        .from ('projects');
        .insert ([;
          {
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Create a new project;
    try {;
      const { data: projectData, error: projectError } = await supabase;
        .from('projects');
        .insert([;
          {;
            client_id: user && user.id,;
            talent_id: talentData && talentData.user_id,;
            job_id: application?.job_id || null,;
            title: projectName,;
            description: projectDescription,;
            status: 'active',;
            payment_terms: 'hourly'}]);
        .select();
        .single();
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      if (projectError) {;
        toast({;
          title: 'Error creating project',;
          description: projectError && projectError.message,;
          variant: 'destructive'}),;
<<<<<<< HEAD
<<<<<<< HEAD
        setIsLoading(false);
        return;
      }
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        setIsLoading(false);
        return;
      }


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // Create a new hiring record;
      const { error: hiringError } = await supabase;
        .from('hiring_records');
        .insert([;
          {;
            client_id: user && user.id,;
            talent_id: talentData && talentData.user_id,;
            project_id: projectData && projectData.id,;
            hire_date: new Date().toISOString(),;
            status: 'active'}]),;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      if (hiringError) {;
        toast({;
          title: 'Error creating hiring record',;
          description: hiringError && hiringError.message,;
          variant: 'destructive'}),;
<<<<<<< HEAD
<<<<<<< HEAD
        setIsLoading(false);
        return;
      }
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        setIsLoading(false);
        return;
      }


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // Update the availability status;
      if (updateAvailability) {;
        try {;
          const { error: availabilityError } = await supabase;
            .from('talent_profiles');
            .update({ availability_type: 'unavailable' });
            .eq('id', talentData && talentData.id);
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          if (availabilityError) {;
            toast({;
              title: 'Error updating availability',;
              description: availabilityError && availabilityError.message,;
              variant: 'destructive'}),;
<<<<<<< HEAD
<<<<<<< HEAD
            setIsLoading(false);
=======

            setIsLoading(false);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

            setIsLoading(false);
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            client_id: user.id,
            talent_id: talent_data.user_id,
            job_id: application?.job_id || null,
            title: project_name,
            description: project_description,
            status: 'active',
            payment_terms: 'hourly'}]);
        .select ();
        .single ();
;
      // Check condition
if ( {) {
  $2
}
        toast ({
          title: 'Error creating project',
          description: project_error.message,
          variant: 'destructive'}),
        setIsLoading (false);
        return;
      }
      // Create a new hiring record;
      const { error: hiring_error } = await supabase;
        .from ('hiring_records');
        .insert ([;
          {
            client_id: user.id,
            talent_id: talent_data.user_id,
            project_id: project_data.id,
            hire_date: new Date ().toISOString (),
            status: 'active'}]),
      // Check condition
if ( {) {
  $2
}
        toast ({
          title: 'Error creating hiring record',
          description: hiring_error.message,
          variant: 'destructive'}),
        setIsLoading (false);
        return;
      }
      // Update the availability status;
      // Check condition
if ( {) {
  $2
}
        try {
          const { error: availability_error } = await supabase;
            .from ('talent_profiles');
            .update ({ availability_type: 'unavailable' });
            .eq ('id', talent_data.id);
;
          // Check condition
if ( {) {
  $2
}
            toast ({
              title: 'Error updating availability',
              description: availability_error.message,
              variant: 'destructive'}),
            setIsLoading (false);
<<<<<<< HEAD
<<<<<<< HEAD
            return;
          }
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
            return;
          }

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        } catch (error) {;
          console && console.error('Error updating availability:', error);
          toast({;
            title: 'Error updating availability',;
            description: 'Failed to update candidate availability status.',;
            variant: 'destructive'}),;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          setIsLoading(false);
          return;
        }
      }
<<<<<<< HEAD
<<<<<<< HEAD
    }

    setIsLoading(true);
    // Create a new project
    try {
      const { data: projectData, error: projectError } = await supabase
        .from('projects')
        .insert([
          {
            client_id: user.id
            talent_id: talentData.user_id
            job_id: application?.job_id |null
            title: projectName
            description: projectDescription
            status: 'active'
            payment_terms: 'hourly'}])
        .select()
        .single();
      if (projectError) {
        toast({
          title: 'Error creating project'
          description: projectError.message
          variant: 'destructive'})
        setIsLoading(false);
        return
      }
      // Create a new hiring record
      const { error: hiringError } = await supabase
        .from('hiring_records')
        .insert([
          {
            client_id: user.id
            talent_id: talentData.user_id
            project_id: projectData.id
            hire_date: new Date().toISOString()
            status: 'active'}])
      if (hiringError) {
        toast({
          title: 'Error creating hiring record'
          description: hiringError.message
          variant: 'destructive'})
        setIsLoading(false);
        return
      }
      // Update the availability status
      if (updateAvailability) {
        try {
          const { error: availabilityError } = await supabase
            .from('talent_profiles')
            .update({ availability_type: 'unavailable' })
            .eq('id', talentData.id);
          if (availabilityError) {
            toast({
              title: 'Error updating availability'
              description: availabilityError.message
              variant: 'destructive'})
            setIsLoading(false);
            return
          }
        } catch (error) {
          console.error('Error updating availability:', error);
          toast({
            title: 'Error updating availability'
            description: 'Failed to update candidate availability status.'
            variant: 'destructive'})
          setIsLoading(false);
          return
        }
      }
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      toast({
        title: 'Candidate hired successfully'
        description: `${talentData.full_name} has been hired for the project.`})
      onConfirm();
      onClose()
    } catch (error) {
      console.error('Error hiring candidate:', error);
      toast({
        title: 'Error hiring candidate'
        description: 'Failed to hire candidate. Please try again.'
        variant: 'destructive'})
    } finally {
      setIsLoading(false)
    }

<<<<<<< HEAD

=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }

  };

<<<<<<< HEAD
  }
  };
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  };

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
    setIsLoading(true),;
    // Create a new project;
    try {;
      const { data: projectData, error: projectError } = await supabase;
        .from('projects');
        .insert([;
          {;
            client_id: user.id,;
            talent_id: talentData.user_id,;
            job_id: application?.job_id || null,;
            title: projectName,;
            description: projectDescription,;
            status: 'active',;
            payment_terms: 'hourly'}]);
        .select();
        .single(),;
      if (projectError) {;
        toast({;
          title: 'Error creating project',;
          description: projectError.message,;
          variant: 'destructive'}),;
        setIsLoading(false),;
        return;
      }
;
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
          title: 'Error creating hiring record',;
          description: hiringError.message,;
          variant: 'destructive'}),;
        setIsLoading(false),;
        return;
      }
;
      // Update the availability status;
      if (updateAvailability) {;
        try {;
          const { error: availabilityError } = await supabase;
            .from('talent_profiles');
            .update({ availability_type: 'unavailable' });
            .eq('id', talentData.id),;
          if (availabilityError) {;
            toast({;
              title: 'Error updating availability',;
              description: availabilityError.message,;
              variant: 'destructive'}),;
            setIsLoading(false),;
            return;
          }
        } catch (error) {;
          console.error('Error updating availability:', error),;
          toast({;
            title: 'Error updating availability',;
            description: 'Failed to update candidate availability status.',;
            variant: 'destructive'}),;
          setIsLoading(false),;
          return;
        }
      }
;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      toast({;
        title: 'Candidate hired successfully',;
        description: `${talentData && talentData.full_name} has been hired for the project.`}),;
      onConfirm();
      onClose();
    } catch (error) {;
      console && console.error('Error hiring candidate:', error);
      toast({;
        title: 'Error hiring candidate',;
        description: 'Failed to hire candidate. Please try again.',;
<<<<<<< HEAD
<<<<<<< HEAD
      toast({;
        title: 'Candidate hired successfully',;
        description: `${talentData.full_name} has been hired for the project.`}),;
      onConfirm(),;
      onClose();
    } catch (error) {;
      console.error('Error hiring candidate:', error),;
      toast({;
        title: 'Error hiring candidate',;
        description: 'Failed to hire candidate. Please try again.';
        variant: 'destructive'});
    } finally {;
      setIsLoading(false);
    }




  return (

  }
  return (

import React, { useState } from 'react',;
import {;
  Dialog,;
  DialogContent,;
  DialogDescription,;
  DialogHeader,;
  DialogTitle} from "@/components/ui/dialog",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Label } from "@/components/ui/label",;
import { Textarea } from "@/components/ui/textarea",;
import { toast } from "@/hooks/use-toast",;
import { supabase } from "@/integrations/supabase/client",;
import { TalentProfile } from "@/types/talent",;
import { useAuth } from "@/hooks/useAuth",;
import { JobApplication } from "@/types/jobs",;
;
export interface HireConfirmationModalProps {;
  isOpen:boolean,;
  onClose:() => void,;
  candidateData?:TalentProfile,;
  application?:JobApplication,;
  onConfirm:() => void,;
  isSubmitting?:boolean;
}
;
export function HireConfirmationModal({ ;
  isOpen,;
  onClose, ;
  candidateData, ;
  application,;
  onConfirm,;
  isSubmitting = false;
} HireConfirmationModalProps) {;
  const [projectName, setProjectName] = useState(''),;
  const [projectDescription, setProjectDescription] = useState(''),;
  const [updateAvailability, setUpdateAvailability] = useState(true),;
  const [isLoading, setIsLoading] = useState(false),;
  const { user } = useAuth(),;
;
  // Get talent information from either candidateData or application;
  const talentData = candidateData || (application?.talent_profile as TalentProfile),;
;
  const handleHireCandidate = async () => {;
    if (!projectName || !projectDescription) {;
      toast({;
        title:'Required fields missing',;
        description:'Please fill in both project name and description.',;
        variant:'destructive'}),;
      return,;
    }
;
    if (!user) {;
      toast({;
        title:'Not authenticated',;
        description:'You must be logged in to hire a candidate.',;
        variant:'destructive'}),;
      return,;
    }
;
    if (!talentData) {;
      toast({;
        title:'Missing talent data',;
        description:'Talent information is missing.',;
        variant:'destructive'}),;
      return,;
    }
;
    setIsLoading(true),;
;
    // Create a new project;
    try {;
      const { data:projectData, error:projectError } = await supabase;
        .from('projects');
        .insert([;
          {;
            client_id:user.id,;
            talent_id:talentData.user_id,;
            job_id:application?.job_id || null,;
            title:projectName,;
            description:projectDescription,;
            status:'active',;
            payment_terms:'hourly'}]);
        .select();
        .single(),;
;
      if (projectError) {;
        toast({;
          title:'Error creating project',;
          description:projectError.message,;
          variant:'destructive'}),;
        setIsLoading(false),;
        return,;
      }
;
      // Create a new hiring record;
      const { error:hiringError } = await supabase;
        .from('hiring_records');
        .insert([;
          {;
            client_id:user.id,;
            talent_id:talentData.user_id,;
            project_id:projectData.id,;
            hire_date:new Date().toISOString(),;
            status:'active'}]),;
;
      if (hiringError) {;
        toast({;
          title:'Error creating hiring record',;
          description:hiringError.message,;
          variant:'destructive'}),;
        setIsLoading(false),;
        return,;
      }
;
      // Update the availability status;
      if (updateAvailability) {;
        try {;
          const { error:availabilityError } = await supabase;
            .from('talent_profiles');
            .update({ availability_type:'unavailable' });
            .eq('id', talentData.id),;
;
          if (availabilityError) {;
            toast({;
              title:'Error updating availability',;
              description:availabilityError.message,;
              variant:'destructive'}),;
            setIsLoading(false),;
            return,;
          }
        } catch (error) {;
          console.error('Error updating availability:', error),;
          toast({;
            title:'Error updating availability',;
            description:'Failed to update candidate availability status.',;
            variant:'destructive'}),;
          setIsLoading(false),;
          return,;
        }
      }
;
      toast({;
        title:'Candidate hired successfully',;
        description:`${talentData.full_name} has been hired for the project.`}),;
      onConfirm(),;
      onClose(),;
    } catch (error) {;
      console.error('Error hiring candidate:', error),;
      toast({;
        title:'Error hiring candidate',;
        description:'Failed to hire candidate. Please try again.',;
        variant:'destructive'}),;
    } finally {;
      setIsLoading(false),;
    }
  },;
;
  return (;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        variant: 'destructive'});
    } finally {;
      setIsLoading(false);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }

  },



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

  return (

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <Dialog open={isOpen} onOpenChange={onClose}>;
      <DialogContent className="sm:max-w-[425px]">;
        <DialogHeader>;
          <DialogTitle>Confirm Hire</DialogTitle>;
          <DialogDescription>;
            Confirm that you want to hire {talentData?.full_name || "this candidate"} for a new project.;
          </DialogDescription>;
        </DialogHeader>;
        <div className="grid gap-4 py-4">;
          <div className="grid grid-cols-4 items-center gap-4">;
            <Label htmlFor="projectName" className="text-right">;
              Project Name;
            </Label>;
<<<<<<< HEAD
<<<<<<< HEAD
            <Input;
              id="projectName";
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            <Input
              id="projectName"
              value={projectName}
              onChange={(e) => setProjectName(e && e.target.value)}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              className="col-span-3";
            />;
          </div>;
          <div className="grid grid-cols-4 items-start gap-4">;
            <Label htmlFor="projectDescription" className="text-right mt-2">;
              Project Description;
            </Label>;
<<<<<<< HEAD
<<<<<<< HEAD
            <Textarea;
              id="projectDescription";
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Textarea
              id="projectDescription"
              value={projectDescription}
              onChange={(e) => setProjectDescription(e && e.target.value)}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              className="col-span-3";
            />;
          </div>;
          <div className="flex items-center space-x-2">;
<<<<<<< HEAD
<<<<<<< HEAD
  },

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Confirm Hire</DialogTitle>
          <DialogDescription>
            Confirm that you want to hire {talentData?.full_name |"this candidate"} for a new project.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="projectName" className="text-right">
              Project Name
            </Label>
            <Input
              id="projectName"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-start gap-4">
            <Label htmlFor="projectDescription" className="text-right mt-2">
              Project Description
            </Label>
            <Textarea
              id="projectDescription"
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="flex items-center space-x-2">
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <input
              type="checkbox"
              id="updateAvailability"
              className="h-4 w-4"
              checked={updateAvailability}
<<<<<<< HEAD
<<<<<<< HEAD
              onChange={(e) => setUpdateAvailability(e.target.checked)}
            />
=======
              onChange={(e) => setUpdateAvailability(e && e.target.checked)}
            />;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <label
              htmlFor="updateAvailability"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed"
            >
              Update talent availability to "Unavailable"
            </label>
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <Button type="button" variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button type="button" onClick={handleHireCandidate} disabled={isSubmitting |isLoading}>
            {isLoading ? "Hiring..." : "Confirm Hire"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
<<<<<<< HEAD
=======
              onChange={(e) => setUpdateAvailability(e && e.target.checked)}
            />;
            <label
              htmlFor="updateAvailability"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed">;
          console.error ('Error updating availability:', error);
          toast ({
            title: 'Error updating availability',
            description: 'Failed to update candidate availability status.',
            variant: 'destructive'}),
          setIsLoading (false);
          return;
        }
      }
      toast ({
        title: 'Candidate hired successfully',
        description: `${talent_data.full_name} has been hired for the project.`}),
      on_confirm ();
      on_close ();
    } catch (error) {
      console.error ('Error hiring candidate:', error);
      toast ({
        title: 'Error hiring candidate',
        description: 'Failed to hire candidate. Please try again.',
        variant: 'destructive'});
    } finally {
      setIsLoading (false);
    }
  }
;
  return (
    <Dialog open={is_open} onOpenChange={on_close}>;
      <DialogContent className="sm:max - w-[425px]">;
        <DialogHeader>;
          <DialogTitle > Confirm Hire</DialogTitle>;
          <DialogDescription>;
            Confirm that you want to hire {talent_data?.full_name || "this candidate"} for a new project.;
          </DialogDescription>;
        </DialogHeader>;
        <div className="grid gap - 4 py - 4">;
          <div className="grid grid - cols - 4 items - center gap - 4">;
            <Label html_for="project_name" className="text - right">;
              Project Name;
            </Label>;
            <Input;
              id="project_name";
              value={project_name}
              on_change={(e) => setProjectName (e.target.value)}
              className="col - span - 3";
            />;
          </div>;
          <div className="grid grid - cols - 4 items - start gap - 4">;
            <Label html_for="project_description" className="text - right mt - 2">;
              Project Description;
            </Label>;
            <Textarea;
              id="project_description";
              value={project_description}
              on_change={(e) => setProjectDescription (e.target.value)}
              className="col - span - 3";
            />;
          </div>;
          <div className="flex items - center space - x-2">;
            <input;
              type="checkbox";
              id="update_availability";
              className="h - 4 w - 4";
              checked={update_availability}
              on_change={(e) => setUpdateAvailability (e.target.checked)}
            />;
            <label;
              html_for="update_availability";
              className="text - sm font - medium leading - none peer - disabled:cursor - not - allowed";
            <input;
              type="checkbox";
              id="updateAvailability";
              className="h-4 w-4";
              checked={updateAvailability}
              onChange={(e) => setUpdateAvailability(e.target.checked)}
            />;
            <label;
              htmlFor="updateAvailability";
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed";
            >;
              Update talent availability to "Unavailable";
            </label>;
          </div>;
        </div>;

}
;

<<<<<<< HEAD
        <div className="flex justify-end gap-2">;
          <Button type="button" variant="secondary" onClick={onClose}>;
            Cancel;
          </Button>;
          <Button type="button" onClick={handleHireCandidate} disabled={isSubmitting || isLoading}>;
            {isLoading ? "Hiring..." :"Confirm Hire"}
          </Button>;
        </div>;
      </DialogContent>;
    </Dialog>;
  ),;}
 export interface HireConfirmationModalProps {
  isOpen: boolean;
onClose: () => void;
candidateData?: TalentProfile;
application?: JobApplication;
onConfirm: () => void;
isSubmitting?: boolean 
}export function HireConfirmationModal ({
  isOpen;
onClose;
candidateData;
application;
onConfirm;
isSubmitting = false 
}: HireConfirmationModalProps) {
  const [projectName, setProjectName] = useState ('');
const [projectDescription, setProjectDescription] = useState ('');
const [updateAvailability, setUpdateAvailability] = useState (true);
const [isLoading, setIsLoading] = useState (false);
const {
  user 
}= useAuth ();
//Get talent information from either candidateData or application const talentData = candidateData || (application?.talent profile as TalentProfile);
if (!projectName || !projectDescription) {
  toast ({
  
}setIsLoading (true);
//Create a new project try {
  const {
  data: projectData, error: projectError 
}= await supabase .from ('projects') .insert ([ {
  client id: user.id, talent id: talentData.user id, job id: application?.job id || null, title: projectName, description: projectDescription, status: 'active', payment terms: 'hourly' 
}]) .select () .single ();
}//Create a new hiring record const {
  error: hiringError 
}= await supabase .from ('hiring records') .insert ([ 
}//Update the availability status if (updateAvailability) {
  try {
  const {
  error: availabilityError 
}= await supabase .from ('talent profiles') </DialogDescription> </DialogHeader> <div className="grid gap-4 py-4" > <div className="grid grid-cols-4 items-center gap-4" > <Label htmlFor="projectName" className="text-right" > Project Name </Label> <Input /> </div> <div className="grid grid-cols-4 items-start gap-4" > <Label htmlFor="projectDescription" className="text-right mt-2" > Project Description </Label> <Textarea /> </div> <div className="flex items-center space-x-2" > <input /> <label htmlFor="updateAvailability" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed" > Update talent availability to "Unavailable" </label> </div> </div> </Button> </div> </DialogContent> </Dialog>) 
}
}
}
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
}
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
