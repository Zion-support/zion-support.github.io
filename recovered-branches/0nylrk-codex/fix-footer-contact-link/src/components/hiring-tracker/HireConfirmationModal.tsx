
import React, { useState } from 'react';
import {
  Dialog;
  DialogContent;
  DialogDescription;
  DialogHeader;
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
import { useAuth } from "@/hooks/useAuth";
import { JobApplication } from "@/types/jobs";
export interface HireConfirmationModalProps {

  isOpen: boolean
  onClose: () => void
  candidateData?: TalentProfile;
  application?: JobApplication;
  onConfirm: () => void

  isSubmitting?: boolean
}
export function HireConfirmationModal({
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
export interface HireConfirmationModalProps {;
  isOpen: boolean,;
  onClose: () => void,;
  candidateData?: TalentProfile;
  application?: JobApplication;
  onConfirm: () => void

  isSubmitting?: boolean
}

export function HireConfirmationModal({ ;
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
  const { user } = useAuth();
  // Get talent information from either candidateData or application
  const talentData = candidateData |(application?.talent_profile as TalentProfile);
  const handleHireCandidate = async () => {
    if (!projectName |!projectDescription) {
      toast({
        title: 'Required fields missing'
        description: 'Please fill in both project name and description.'
        variant: 'destructive'})
      return
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
    }


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

      if (projectError) {;
        toast({;
          title: 'Error creating project',;
          description: projectError && projectError.message,;
          variant: 'destructive'}),;

        setIsLoading(false);
        return;
      }


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

      if (hiringError) {;
        toast({;
          title: 'Error creating hiring record',;
          description: hiringError && hiringError.message,;
          variant: 'destructive'}),;

        setIsLoading(false);
        return;
      }


      // Update the availability status;
      if (updateAvailability) {;
        try {;
          const { error: availabilityError } = await supabase;
            .from('talent_profiles');
            .update({ availability_type: 'unavailable' });
            .eq('id', talentData && talentData.id);

          if (availabilityError) {;
            toast({;
              title: 'Error updating availability',;
              description: availabilityError && availabilityError.message,;
              variant: 'destructive'}),;

            setIsLoading(false);
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
            return;
          }

        } catch (error) {;
          console && console.error('Error updating availability:', error);
          toast({;
            title: 'Error updating availability',;
            description: 'Failed to update candidate availability status.',;
            variant: 'destructive'}),;

          setIsLoading(false);
          return;
        }
      }
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
  }
  };
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

      toast({;
        title: 'Candidate hired successfully',;
        description: `${talentData && talentData.full_name} has been hired for the project.`}),;
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

  },
}
;
