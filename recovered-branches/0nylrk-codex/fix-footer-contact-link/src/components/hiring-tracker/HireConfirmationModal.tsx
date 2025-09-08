import React, { useState } from 'react';


import React, { useState } from 'react';


import React, { useState } from 'react',
import {}



  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,


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



  application;
  onConfirm;
  isSubmitting = false;
}: HireConfirmationModalProps) {;


  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [updateAvailability, setUpdateAvailability] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const { user } = useAuth();

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

import { Button } from "@/components/ui/button","
import { Input } from "@/components/ui/input","
import { Label } from "@/components/ui/label","
import { Textarea } from "@/components/ui/textarea","
import { toast } from "@/hooks/use-toast","
import { supabase } from "@/integrations/supabase/client","
import { TalentProfile } from "@/types/talent",

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


  const handleHireCandidate = async () => {;
    if (!projectName || !projectDescription) {;
      toast({;'
        title: 'Required fields missing',;''
        description: 'Please fill in both project name and description.',;')'
        variant: 'destructive'}),;'
      return;
    }



    if (!user) {;

      return;
    }



    setIsLoading(true);


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



      if (projectError) {;

          title: 'Error creating project',;
          description: projectError && projectError.message,;
          variant: 'destructive'}),;


          description: projectError && projectError.message,;)
        setIsLoading(false);

setIsLoading(false);
        return;
      }


      // Create a new hiring record;
      const { error: hiringError } = await supabase;

        .from('hiring_records');

            status: 'active'}]),;



      if (hiringError) {;
          title: 'Error creating hiring record',;
          description: hiringError && hiringError.message,;
          variant: 'destructive'}),;


        setIsLoading(false);
        return;
      }

setIsLoading(false);
        return;
      }
          description: hiringError && hiringError.message,;)


      // Update the availability status;
      if (updateAvailability) {;
          const { error: availabilityError } = await supabase;
            .from('talent_profiles');
            .update({ availability_type: 'unavailable' });
            .eq('id', talentData && talentData.id);



          if (availabilityError) {;
              title: 'Error updating availability',;
              description: availabilityError && availabilityError.message,;
              variant: 'destructive'}),;


            setIsLoading(false);

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



      toast({;
        title: 'Candidate hired successfully',;

        title: 'Candidate hired successfully',;')
        description: `${talentData && talentData.full_name} has been hired for the project.`}),;
      onConfirm();
      onClose();
      console && console.error('Error hiring candidate:', error);
        title: 'Error hiring candidate',;
        description: 'Failed to hire candidate. Please try again.',;


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


            <Input
              id="projectName"
              value={projectName}
              onChange={(e) => setProjectName(e && e.target.value)}

              className="col-span-3";
            />;
          </div>;
          <div className="grid grid-cols-4 items-start gap-4">;
            <Label htmlFor="projectDescription" className="text-right mt-2">;
              Project Description;
            </Label>;

            <Textarea
              id="projectDescription"
              value={projectDescription}
              onChange={(e) => setProjectDescription(e && e.target.value)}

              className="col-span-3";
            />;
          </div>;
          <div className="flex items-center space-x-2">;


              className="col-span-3"
            />
          </div>
          <div className="flex items-center space-x-2">



            <input
              type="checkbox"
              id="updateAvailability"
              className="h-4 w-4"

              checked={updateAvailability}


"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed">;


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
              html_for="update_availability";""
              className="text - sm font - medium leading - none peer - disabled:cursor - not - allowed";"
            >;
            </label>;
          </div>;
        <div className="flex justify - end gap - 2">;"
          <Button type="button" variant="secondary" on_click={on_close}>;"


}
;




