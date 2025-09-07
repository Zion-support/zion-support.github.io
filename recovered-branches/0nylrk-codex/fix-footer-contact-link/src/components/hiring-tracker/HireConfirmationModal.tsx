import React, { useState } from 'react';
<<<<<<< HEAD
import {
=======

import React, { useState } from 'react';

<<<<<<< HEAD
  Dialog;
  DialogContent;
  DialogDescription;
<<<<<<< HEAD
  DialogHeader;  DialogTitle} from "@/components/ui/dialog","
import { Button } from "@/components/ui/button","
import { Input } from "@/components/ui/input","
import { Label } from "@/components/ui/label","
import { Textarea } from "@/components/ui/textarea","
import { toast } from "@/hooks/use-toast","
import { supabase } from "@/integrations/supabase/client","
import { TalentProfile } from "@/types/talent","
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from "@/components/ui/dialog";"
import {Button} from "@/components/ui/button";"
import {Input} from "@/components/ui/input";"
import {Label} from "@/components/ui/label";"
import {Textarea} from "@/components/ui/textarea";"
import {toast} from "@/hooks/use-toast";"
import {supabase} from "@/integrations/supabase/client";"
import {TalentProfile} from "@/types/talent";"
import {useAuth} from "@/hooks/useAuth";"
import {JobApplication} from "@/types/jobs";"
  isOpen;
export function HireConfirmationModal() {;
  }
  const [projectName, setProjectName] = useState('');'
  const [projectDescription, setProjectDescription] = useState('');'
  const [updateAvailability, setUpdateAvailability] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
const { user } = useAuth();import React, { useState } from 'react',;'
  }
=======
<<<<<<< HEAD
import React, { useState } from 'react';
import {
  Dialog;
  DialogContent;
  DialogDescription;
  DialogHeader;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React, { useState } from 'react',
import {}

>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
<<<<<<< HEAD
  DialogTitle} from "@/components/ui/dialog",
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { TalentProfile } from "@/types/talent";
import { useAuth } from "@/hooks/useAuth";
import { JobApplication } from "@/types/jobs";
export interface HireConfirmationModalProps {
  isOpen: boolean,
  onClose: () => void,
  candidateData?: TalentProfile,
  application?: JobApplication,
  onConfirm: () => void,
  isSubmitting?: boolean
}

export function HireConfirmationModal({ 
  isOpen,
  onClose, 
  candidateData, 
  application,
  onConfirm,
  isSubmitting = false
}: HireConfirmationModalProps) {
  const [projectName, setProjectName] = useState($2);
  const [projectDescription, setProjectDescription] = useState($2);
  const [updateAvailability, setUpdateAvailability] = useState($2);
  const [isLoading, setIsLoading] = useState($2);
  const { user } = useAuth($2);
  // Get talent information from either candidateData or application
  const talentData = $2;
  const handleHireCandidate = async () => {
    if (!projectName || !projectDescription) {
      toast($2);
      return
    }
    if (!user) {
      toast($2);
      return
    }
    if (!talentData) {
      toast($2);
      return
    }

    setIsLoading($2);
    // Create a new project
    try {
      const { data: projectData, error: projectError} = await supabase
        .from('projects')
        .insert([
          {
            client_id: user.id,
            talent_id: talentData.user_id,
            job_id: application ?.job_id || null,
            title: projectName,
            description: projectDescription,
            status: 'active',
            payment_terms: 'hourly'}])
        .select()
        .single($2);
      if (projectError) {
        toast($2);
        setIsLoading($2);
        return
      }
      // Create a new hiring record
      const { error: hiringError} = await supabase
        .from('hiring_records')
        .insert([
          {
            client_id: user.id,
            talent_id: talentData.user_id,
            project_id: projectData.id,
            hire_date: new Date().toISOString($2);
            status: 'active'}]),

      if (hiringError) {
        toast($2);
        setIsLoading($2);
        return
      }
      // Update the availability status
      if (updateAvailability) {
        try {
          const { error: availabilityError} = await supabase
            .from('talent_profiles')
            .update({ availability_type: 'unavailable' })
            .eq($2);
          if (availabilityError) {
            toast($2);
            setIsLoading($2);
            return
          }
        } catch (error) {
          console.error($2);
          toast($2);
          setIsLoading($2);
          return
        }
      }

      toast($2);
      onConfirm($2);
      onClose()
    } catch (error) {
      console.error($2);
      toast({
        title: 'Error hiring candidate',
        description: 'Failed to hire candidate. Please try again.',
        variant: 'destructive'})
    } finally {
      setIsLoading(false)
    }
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
=======
<<<<<<< HEAD
=======

  DialogTitle} from "@/components/ui/dialog",

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  DialogTitle} from "@/components/ui/dialog",

import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Label } from "@/components/ui/label",
import { Textarea } from "@/components/ui/textarea",
import { toast } from "@/hooks/use-toast",
import { supabase } from "@/integrations/supabase/client",
<<<<<<< HEAD
=======
import { TalentProfile } from "@/types/talent",

<<<<<<< HEAD

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
=======
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

=======
<<<<<<< HEAD
export function HireConfirmationModal(): any ({ ;
  isOpen;
  onClose, ;
  candidateData, ;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export interface HireConfirmationModalProps {;
  isOpen: boolean,;
  onClose: () => void,;
  candidateData?: TalentProfile;
  application?: JobApplication;
  onConfirm: () => void,;
  isSubmitting?: boolean;
}

  isOpen;

export function HireConfirmationModal({ ;

  isOpen;
  onClose, ;
  candidateData, ;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  application;
  onConfirm;
  isSubmitting = false;
}: HireConfirmationModalProps) {;
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
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [updateAvailability, setUpdateAvailability] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
<<<<<<< HEAD
=======
  const { user } = useAuth();
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React, { useState } from 'react',

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

  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,"
  DialogTitle} from "@/components/ui/dialog","
<<<<<<< HEAD
import { useAuth } from "@/hooks/useAuth","
import { JobApplication } from "@/types/jobs","
export interface HireConfirmationModalProps {
  }
  "isOpen": boolean,
  "onClose": () => void,
=======
import { Button } from "@/components/ui/button","
import { Input } from "@/components/ui/input","
import { Label } from "@/components/ui/label","
import { Textarea } from "@/components/ui/textarea","
import { toast } from "@/hooks/use-toast","
import { supabase } from "@/integrations/supabase/client","
import { TalentProfile } from "@/types/talent",
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { useAuth } from "@/hooks/useAuth",

import { JobApplication } from "@/types/jobs",

  isOpen: boolean,
  onClose: () => void,
>>>>>>> origin/chore/fix-lint-and-merge
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

        variant: 'destructive'}),;

    }
    if (!user) {}
      toast({'
        title: 'Not authenticated''
        description: 'You must be logged in to hire a candidate.''
        variant: 'destructive'})
      return;
    }
    if (!talentData) {}
      toast({'
        title: 'Missing talent data''
        description: 'Talent information is missing.''
        variant: 'destructive'})

  // Get talent information from either candidateData or application;
  const talentData = candidateData || (application?.talent_profile as TalentProfile);

  const handleHireCandidate = async () => {;
    if (!projectName || !projectDescription) {;
      toast({;'
        title: 'Required fields missing',;'
        description: 'Please fill in both project name and description.',;'
        variant: 'destructive'}),;
      return;

    }

<<<<<<< HEAD
    if (!user) {;
      toast({;'
        title: 'Not authenticated',;'
        description: 'You must be logged in to hire a candidate.',;'

        variant: 'destructive'}),;
      return;            return;
          }
          console && console.error('Error updating availability:', error);
          toast({;
            title: 'Error updating availability',,
  description: 'Failed to update candidate availability status.',;
            variant: 'destructive'}),;

      toast({;'
        title: 'Required fields missing',;''
        description: 'Please fill in both project name and description.',;')'
        variant: 'destructive'}),;'
      return;

=======
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    }
    if (!user) {
      toast({'
        title: 'Not authenticated'','
  description: 'You must be logged in to hire a candidate.'')'
        variant: 'destructive'})'
      return;
    }
    if (!talentData) {
      toast({
        title: 'Missing talent data'
        description: 'Talent information is missing.'
        variant: 'destructive'})
      return
<<<<<<< HEAD
  // Get talent information from either candidateData or application;
  const talentData = candidateData || (application?.talent_profile as TalentProfile);
=======

  // Get talent information from either candidateData or application;
  const talentData = candidateData || (application?.talent_profile as TalentProfile);

// Get talent information from either candidateData or application;
  const talentData = candidateData || (application?.talent_profile as TalentProfile);
      toast({'
        title: 'Missing talent data'','
  description: 'Talent information is missing.'')'
        variant: 'destructive'})'
      return;
  // Get talent information from either candidateData or application;
  const talentData = candidateData || (application?.talent_profile as TalentProfile);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const handleHireCandidate = async () => {;
    if (!projectName || !projectDescription) {;
      toast({;'
        title: 'Required fields missing',;''
        description: 'Please fill in both project name and description.',;')'
        variant: 'destructive'}),;'
      return;
    }
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    if (!user) {;

      return;
    }
<<<<<<< HEAD
=======

<<<<<<< HEAD
    setIsLoading(true);

    }
    setIsLoading(true);'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components / ui / dialog';''
import { Button } from '@/components / ui / button';''
import { Input } from '@/components / ui / input';''
import { Label } from '@/components / ui / label';''
import { Textarea } from '@/components / ui / textarea';''
import { toast } from '@/hooks / use - toast';''
import { supabase } from '@/integrations / supabase / client';''
import { TalentProfile } from '@/types / talent';''
import { use_auth } from '@/hooks / use_auth';''
import { JobApplication } from '@/types / jobs';'
export interface HireConfirmationModalProps {
  // TODO: Implement
}
  is_open: boolean,
  on_close: () => void,
  candidate_data?: TalentProfile;
  application?: JobApplication;
  on_confirm: () => void,
  is_submitting?: boolean;
}
export /**
 * HireConfirmationModal - Function description;
 */
function HireConfirmationModal() {'
  const [project_name, setProjectName] = useState ('');''
  const [project_description, setProjectDescription] = useState ('');'
  const [update_availability, setUpdateAvailability] = useState (true);
  const [is_loading, setIsLoading] = useState (false);
  const { user } = use_auth ();
;
  // Get talent information from either candidate_data or application;
  const talent_data = candidate_data || (application?.talent_profile as TalentProfile);
;
  const handleHireCandidate = async () => {
    // Check condition;
if ( {) {
  $2;
}
      toast ({'
        title: 'Required fields missing',''
        description: 'Please fill in both project name and description.',')'
        variant: 'destructive'}),'
      return;
    }
    // Check condition;
if ( {) {
  $2;
}
      toast ({'
        title: 'Not authenticated',''
        description: 'You must be logged in to hire a candidate.',')'
        variant: 'destructive'}),'
      return;
    }
    // Check condition;
if ( {) {
  $2;
}
      toast ({'
        title: 'Missing talent data',''
        description: 'Talent information is missing.',')'
        variant: 'destructive'}),'
      return;
    }
    setIsLoading (true);
;
    // Create a new project;

    }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    if (!talentData) {;
      toast({;
        title: 'Missing talent data',;
        description: 'Talent information is missing.',;
        variant: 'destructive'}),;
      return;
<<<<<<< HEAD
=======

    }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }



<<<<<<< HEAD
    setIsLoading(true);

    }
    setIsLoading(true);
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    setIsLoading(true);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
export interface HireConfirmationModalProps {}
  is_open: boolean,
  on_close: () => void,;

  candidate_data?: TalentProfile;
  on_confirm: () => void,
  is_submitting?: boolean;

export /**
 * HireConfirmationModal - Function description;
 */
function HireConfirmationModal() {
  const [project_name, setProjectName] = useState ();
  const [project_description, setProjectDescription] = useState ();
  const [update_availability, setUpdateAvailability] = useState (true);
  const [is_loading, setIsLoading] = useState (false);

  const { user } = use_auth ();
  // Get talent information from either candidate_data or application;
  const talent_data = candidate_data || (application?.talent_profile as TalentProfile);

  const handleHireCandidate = async () => {
    // Check condition;
if ( {) {
  $2;
      toast ({
        title: 'Required fields missing',
        description: 'Please fill in both project name and description.',')
        variant: 'destructive'}),
    // Check condition;
        title: 'Not authenticated',
        description: 'You must be logged in to hire a candidate.',')
    // Check condition;
        title: 'Missing talent data',

    setIsLoading (true);
    // Create a new project;
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    try {
      const { data: project_data, error: project_error } = await supabase;
        .from ('projects');
        .insert ([;
          {
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    // Create a new project;
    try {;
      const { data: projectData, error: projectError } = await supabase;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        .from('projects');
        .insert([;
          {;
            client_id: user && user.id,;
            talent_id: talentData && talentData.user_id,;
            job_id: application?.job_id || null,;
            title: projectName,;

            payment_terms: 'hourly'}]);
        .select();
        .single();
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      if (projectError) {;

          title: 'Error creating project',;
          description: projectError && projectError.message,;
          variant: 'destructive'}),;
<<<<<<< HEAD
        setIsLoading(false);
        return;
      }
=======

          description: projectError && projectError.message,;)
        setIsLoading(false);

setIsLoading(false);
        return;
      }

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      // Create a new hiring record;
      const { error: hiringError } = await supabase;

        .from('hiring_records');

            status: 'active'}]),;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      if (hiringError) {;
          title: 'Error creating hiring record',;
          description: hiringError && hiringError.message,;
          variant: 'destructive'}),;
<<<<<<< HEAD
        setIsLoading(false);
        return;
      }
=======

        setIsLoading(false);
        return;
      }

setIsLoading(false);
        return;
      }
          description: hiringError && hiringError.message,;)

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      // Update the availability status;
      if (updateAvailability) {;
          const { error: availabilityError } = await supabase;
            .from('talent_profiles');
            .update({ availability_type: 'unavailable' });
            .eq('id', talentData && talentData.id);
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          if (availabilityError) {;
              title: 'Error updating availability',;
              description: availabilityError && availabilityError.message,;
              variant: 'destructive'}),;
<<<<<<< HEAD
            setIsLoading(false);
=======

            setIsLoading(false);
<<<<<<< HEAD

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            client_id: user.id,
            talent_id: talent_data.user_id,
            job_id: application?.job_id || null,
            title: project_name,

            payment_terms: 'hourly'}]);
        .select ();
        .single ();
;

          title: 'Error creating project',
          description: project_error.message,)
        setIsLoading (false);
        return;

      }
      // Create a new hiring record;
      const { error: hiring_error } = await supabase;
        .from ('hiring_records');
            project_id: project_data.id,)
            hire_date: new Date ().toISOString (),]
            status: 'active'}]),
      // Check condition;
          title: 'Error creating hiring record',
          description: hiring_error.message,)
      // Update the availability status;
      // Check condition;
  // TODO: Implement
          const { error: availability_error } = await supabase;
            .from ('talent_profiles');
            .update ({ availability_type: 'unavailable' });
            .eq ('id', talent_data.id);
          // Check condition;
              title: 'Error updating availability',
              description: availability_error.message,
              variant: 'destructive'}),
            setIsLoading (false);
<<<<<<< HEAD

          }

return;
          }
=======
<<<<<<< HEAD
            return;
          }
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
            return;
          }

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        } catch (error) {;
          console && console.error('Error updating availability:', error);
          toast({;
            title: 'Error updating availability',;
            description: 'Failed to update candidate availability status.',;
            variant: 'destructive'}),;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          setIsLoading(false);
          return;
        }
<<<<<<< HEAD

=======
      }
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
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

            status: 'active',;

            payment_terms: 'hourly'}]);
        .select();
        .single(),;
      if (projectError) {;

          variant: 'destructive'}),;

        setIsLoading(false),;
      // Create a new hiring record;

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

              variant: 'destructive'}),;
            setIsLoading(false),;
            return;
          }
        } catch (error) {;'

          console.error('Error updating availability:', error),;

            variant: 'destructive'}),;
          setIsLoading(false),;
          return;
        }
      }
;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      toast({;
        title: 'Candidate hired successfully',;

        title: 'Candidate hired successfully',;')
        description: `${talentData && talentData.full_name} has been hired for the project.`}),;
      onConfirm();
      onClose();
      console && console.error('Error hiring candidate:', error);
        title: 'Error hiring candidate',;
        description: 'Failed to hire candidate. Please try again.',;
<<<<<<< HEAD
toast({;
=======
<<<<<<< HEAD
      toast({;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        title: 'Candidate hired successfully',;
        description: `${talentData.full_name} has been hired for the project.`}),;
      onConfirm(),;
      onClose();
    } catch (error) {;
      console.error('Error hiring candidate:', error),;
      toast({;
        title: 'Error hiring candidate',;
        description: 'Failed to hire candidate. Please try again.';
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        variant: 'destructive'});
    } finally {;
      setIsLoading(false);

  return (

    }

  },

  return (

  return (

<<<<<<< HEAD
    }

  },
    }
  }

  return (
        description: 'Failed to hire candidate. Please try again.',;')
        variant: 'destructive'});
    } finally {;

  },

  return (
  }

  return (

  isOpen:boolean,;)
  onClose:() => void,;
  candidateData?:TalentProfile,;
  application?:JobApplication,;
  onConfirm:() => void,;
  isSubmitting?:boolean;
  candidateData, ;
} HireConfirmationModalProps) {;"
  // Get talent information from either candidateData or application;
        title:'Required fields missing',;
        description:'Please fill in both project name and description.',;')
        variant:'destructive'}),;
      return,;
        title:'Not authenticated',;
        description:'You must be logged in to hire a candidate.',;')
        title:'Missing talent data',;
        description:'Talent information is missing.',;')
    // Create a new project;
      const { data:projectData, error:projectError } = await supabase;
            client_id:user.id,;
            talent_id:talentData.user_id,;
            job_id:application?.job_id || null,;
            title:projectName,;
            description:projectDescription,;
            status:'active',;')]
            payment_terms:'hourly'}]);
          title:'Error creating project',;
          description:projectError.message,;)
      // Create a new hiring record;
      const { error:hiringError } = await supabase;
            project_id:projectData.id,;)
            hire_date:new Date().toISOString(),;]
            status:'active'}]),;
          title:'Error creating hiring record',;
          description:hiringError.message,;)
      // Update the availability status;
          const { error:availabilityError } = await supabase;
            .update({ availability_type:'unavailable' });
              title:'Error updating availability',;
              description:availabilityError.message,;)
            description:'Failed to update candidate availability status.',;')
        title:'Candidate hired successfully',;')`;
        description:`${talentData.full_name} has been hired for the project.`}),;
      onConfirm(),;
      onClose(),;
      console.error('Error hiring candidate:', error),;
        title:'Error hiring candidate',;
        description:'Failed to hire candidate. Please try again.',;')
  },;
  return (;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
            <Input;
              id="projectName";
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
=======

            <Input
              id="projectName"
              value={projectName}
              onChange={(e) => setProjectName(e && e.target.value)}
<<<<<<< HEAD
<Input;
              id="projectName";
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              className="col-span-3";
            />;
          </div>;
          <div className="grid grid-cols-4 items-start gap-4">;
            <Label htmlFor="projectDescription" className="text-right mt-2">;
              Project Description;
            </Label>;
<<<<<<< HEAD
            <Textarea;
              id="projectDescription";
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
=======
            <Textarea
              id="projectDescription"
              value={projectDescription}
              onChange={(e) => setProjectDescription(e && e.target.value)}
<<<<<<< HEAD
<Textarea;
              id="projectDescription";
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              className="col-span-3";
            />;
          </div>;
          <div className="flex items-center space-x-2">;
<<<<<<< HEAD
},
=======
<<<<<<< HEAD
  },
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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
>>>>>>> merged-prs-20250907-203621
              className="col-span-3"
            />
          </div>
          <div className="flex items-center space-x-2">
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
            <input
              type="checkbox"
              id="updateAvailability"
              className="h-4 w-4"
<<<<<<< HEAD
              checked={updateAvailability}
              onChange={(e) => setUpdateAvailability(e.target.checked)}
            />
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
}
=======
              checked={updateAvailability}
<<<<<<< HEAD

=======
<<<<<<< HEAD
              onChange={(e) => setUpdateAvailability(e.target.checked)}
            />
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              onChange={(e) => setUpdateAvailability(e && e.target.checked)}
            />;
            <label"
              htmlFor="updateAvailability"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed">;
<<<<<<< HEAD
'
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          console.error ('Error updating availability:', error);
          toast ({'
            title: 'Error updating availability','
            description: 'Failed to update candidate availability status.','

            variant: 'destructive'}),
          setIsLoading (false);
          return;
        }
      }

      setIsLoading (false);
    }
  }
;
  return (

        <DialogHeader>;

          <DialogTitle>Confirm Hire;
          <DialogDescription>;

        ;"
        <div className="grid gap-4 py-4">;"
</div>"
          <div className="grid grid-cols-4 items-center gap-4">;"
            <Label htmlFor="projectName" className="text-right">;"

            <Input;"
              id="projectName""
              value={projectName})
              onChange={(e) => setProjectName(e && e.target.value)}

          </div>;"
          <div className="grid grid-cols-4 items-start gap-4">;"
            <Label htmlFor="projectDescription" className="text-right mt-2">;"

            <Textarea;"
              id="projectDescription""
              value={projectDescription}
              onChange={(e) => setProjectDescription(e && e.target.value)}

          <div className="flex items-center space-x-2">;"
</div>
            <input;"
              type="checkbox"""
              id="updateAvailability"""
              className="h-4 w-4""
              checked={updateAvailability}
              onChange={(e) => setUpdateAvailability(e && e.target.checked)}
</input>
            <label;"
              htmlFor="updateAvailability"""
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed">;"
</label>
    <Dialog open={is_open} onOpenChange={on_close}>;
"
      <DialogContent className="sm:max - w-[425px]">;"

          <DialogTitle > Confirm Hire;

        <div className="grid gap - 4 py - 4">;"
          <div className="grid grid - cols - 4 items - center gap - 4">;"
            <Label html_for="project_name" className="text - right">;"

              id="project_name";"
              value={project_name}
              on_change={(e) => setProjectName (e.target.value)}

          <div className="grid grid - cols - 4 items - start gap - 4">;"
            <Label html_for="project_description" className="text - right mt - 2">;"

              id="project_description";"
              value={project_description}
              on_change={(e) => setProjectDescription (e.target.value)}

              checked={update_availability}
              on_change={(e) => setUpdateAvailability (e.target.checked)}
            />;
<<<<<<< HEAD

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              Update talent availability to "Unavailable";
              html_for="update_availability";""
              className="text - sm font - medium leading - none peer - disabled:cursor - not - allowed";"
            >;
            </label>;
          </div>;
        <div className="flex justify - end gap - 2">;"
          <Button type="button" variant="secondary" on_click={on_close}>;"

<<<<<<< HEAD
            {isLoading ? "Hiring..." :"Confirm Hire"}
          </Button>;
        </div>;
      </DialogContent>;
    </Dialog>;
  ),;}

  isOpen: boolean;
onClose: () => void;
candidateData?: TalentProfile;
application?: JobApplication;
onConfirm: () => void;

}= await supabase .from ('talent profiles') </DialogDescription> </DialogHeader> <div className="grid gap-4 py-4" > <div className="grid grid-cols-4 items-center gap-4" > <Label htmlFor="projectName" className="text-right" > Project Name </Label> <Input /> </div> <div className="grid grid-cols-4 items-start gap-4" > <Label htmlFor="projectDescription" className="text-right mt-2" > Project Description </Label> <Textarea /> </div> <div className="flex items-center space-x-2" > <input /> <label htmlFor="updateAvailability" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed" > Update talent availability to "Unavailable" </label> </div> </div> </Button> </div> </DialogContent> </Dialog>) 
}
}
}
;
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
