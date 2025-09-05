
<<<<<<< HEAD
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
            <Input;
              id="projectName";
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="col-span-3";
            />;
          </div>;
          <div className="grid grid-cols-4 items-start gap-4">;
            <Label htmlFor="projectDescription" className="text-right mt-2">;
              Project Description;
            </Label>;
            <Textarea;
              id="projectDescription";
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              className="col-span-3";
            />;
          </div>;
          <div className="flex items-center space-x-2">;
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
  ),;
=======
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
import { JobApplication } from "@/types/jobs",export interface HireConfirmationModalProps {
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
  const [projectName, setProjectName] = useState(''),
  const [projectDescription, setProjectDescription] = useState(''),
  const [updateAvailability, setUpdateAvailability] = useState(true),
  const [isLoading, setIsLoading] = useState(false),
  const { user } = useAuth(),

  // Get talent information from either candidateData or application
  const talentData = candidateData || (application?.talent_profile as TalentProfile),
import React, {_useState} from 'react';
import {_Dialog, _DialogContent, _DialogDescription, _DialogHeader, _DialogTitle} from "@/components/ui/dialog";

export interface HireConfirmationModalProps {_isOpen: boolean;
  onClose: () => void;
  candidateData?: TalentProfile;
  application?: JobApplication;
  onConfirm: () => void;
  isSubmitting?: boolean;}

export function HireConfirmationModal(_{_isOpen, _onClose, _candidateData, _application, _onConfirm, _isSubmitting = false}: HireConfirmationModalProps) {_const [projectName, _setProjectName] = useState('');
  const [projectDescription, _setProjectDescription] = useState('');
  const [updateAvailability, _setUpdateAvailability] = useState(true);
  const [isLoading, _setIsLoading] = useState(false);
  const { user} = useAuth();

  // Get talent information from either candidateData or application
  const _talentData = candidateData || (application?.talent_profile as TalentProfile);

  const _handleHireCandidate = async () => {_if (!projectName || !projectDescription) {
      toast({
        title: 'Required fields missing',
        description: 'Please fill in both project name and description.',
        variant: 'destructive'}),
      return
    }

    if (!user) {
      toast({
        title: 'Not authenticated',
        description: 'You must be logged in to hire a candidate.',
        variant: 'destructive'}),
      return
    }

    if (!talentData) {
      toast({
        title: 'Missing talent data',
        description: 'Talent information is missing.',
        variant: 'destructive'}),
      return    }

    setIsLoading(true),

    // Create a new project
    try {_const { data: projectData, _error: projectError} = await supabase
        .from('projects')
        .insert([
          {_client_id: user.id, _talent_id: talentData.user_id, _job_id: application?.job_id || null, _title: projectName, _description: projectDescription, _status: 'active', _payment_terms: 'hourly'}])
        .select()
        .single(),

      if (projectError) {
        toast({
          title: 'Error creating project',
          description: projectError.message,
          variant: 'destructive'}),
        setIsLoading(false),
        return      }

      // Create a new hiring record
      const {_error: hiringError} = await supabase
        .from('hiring_records')
        .insert([
          {
            client_id: user.id,
            talent_id: talentData.user_id,
            project_id: projectData.id,
            hire_date: new Date().toISOString(),
            status: 'active'}]),

      if (hiringError) {
        toast({
          title: 'Error creating hiring record',
          description: hiringError.message,
          variant: 'destructive'}),
        setIsLoading(false),
        return      }

      // Update the availability status
      if (updateAvailability) {_try {
          const { error: availabilityError} = await supabase
            .from('talent_profiles')
            .update({ availability_type: 'unavailable' })
            .eq('id', talentData.id),

          if (availabilityError) {
            toast({
              title: 'Error updating availability',
              description: availabilityError.message,
              variant: 'destructive'}),
            setIsLoading(false),
            return
          }
        } catch (error) {
          console.error('Error updating availability:', error),
          toast({
            title: 'Error updating availability',
            description: 'Failed to update candidate availability status.',
            variant: 'destructive'}),
          setIsLoading(false),
          return
        }
      }

      toast({
        title: 'Candidate hired successfully',
        description: `${talentData.full_name} has been hired for the project.`}),
      onConfirm(),
      onClose()
    } catch (error) {
      console.error('Error hiring candidate:', error),
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
      <DialogContent className=&quot;sm:max-w-[425px]&quot;>
        <DialogHeader>
          <DialogTitle>Confirm Hire</DialogTitle>
          <DialogDescription>
            Confirm that you want to hire {talentData?.full_name || &quot;this candidate&quot;} for a new project.          </DialogDescription>
        </DialogHeader>
        <div className=&quot;grid gap-4 py-4&quot;>
          <div className=&quot;grid grid-cols-4 items-center gap-4&quot;>
            <Label htmlFor=&quot;projectName&quot; className=&quot;text-right&quot;>
              Project Name
            </Label>
            <Input
              id=&quot;projectName&quot;
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className=&quot;col-span-3&quot;            />
          </div>
          <div className=&quot;grid grid-cols-4 items-start gap-4&quot;>
            <Label htmlFor=&quot;projectDescription&quot; className=&quot;text-right mt-2&quot;>
              Project Description
            </Label>
            <Textarea
              id=&quot;projectDescription&quot;
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              className=&quot;col-span-3&quot;            />
          </div>
          <div className=&quot;flex items-center space-x-2&quot;>
            <input
              type=&quot;checkbox&quot;
              id=&quot;updateAvailability&quot;
              className=&quot;h-4 w-4&quot;
              checked={updateAvailability}
              onChange={(e) => setUpdateAvailability(e.target.checked)}            />
            <label
              htmlFor=&quot;updateAvailability&quot;
              className=&quot;text-sm font-medium leading-none peer-disabled:cursor-not-allowed&quot;
            >
              Update talent availability to &quot;Unavailable&quot;
            </label>
          </div>
        </div>
        <div className=&quot;flex justify-end gap-2&quot;>
          <Button type=&quot;button&quot; variant=&quot;secondary&quot; onClick={onClose}>
            Cancel
          </Button>
          <Button type=&quot;button&quot; onClick={handleHireCandidate} disabled={isSubmitting || isLoading}>
            {isLoading ? &quot;Hiring...&quot; : &quot;Confirm Hire&quot;}          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
