
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
        title: 'Required fields missing', _description: 'Please fill in both project name and description.', _variant: 'destructive'});
      return;
    }

    if (!user) {_toast({
        title: 'Not authenticated', _description: 'You must be logged in to hire a candidate.', _variant: 'destructive'});
      return;
    }

    if (!talentData) {_toast({
        title: 'Missing talent data', _description: 'Talent information is missing.', _variant: 'destructive'});
      return;
    }

    setIsLoading(true);

    // Create a new project
    try {_const { data: projectData, _error: projectError} = await supabase
        .from('projects')
        .insert([
          {_client_id: user.id, _talent_id: talentData.user_id, _job_id: application?.job_id || null, _title: projectName, _description: projectDescription, _status: 'active', _payment_terms: 'hourly'}])
        .select()
        .single();

      if (projectError) {_toast({
          title: 'Error creating project', _description: projectError.message, _variant: 'destructive'});
        setIsLoading(false);
        return;
      }

      // Create a new hiring record
      const {_error: hiringError} = await supabase
        .from('hiring_records')
        .insert([
          {_client_id: user.id, _talent_id: talentData.user_id, _project_id: projectData.id, _hire_date: new Date().toISOString(), _status: 'active'}]);

      if (hiringError) {_toast({
          title: 'Error creating hiring record', _description: hiringError.message, _variant: 'destructive'});
        setIsLoading(false);
        return;
      }

      // Update the availability status
      if (updateAvailability) {_try {
          const { error: availabilityError} = await supabase
            .from('talent_profiles')
            .update({_availability_type: 'unavailable'})
            .eq('id', talentData.id);

          if (availabilityError) {_toast({
              title: 'Error updating availability', _description: availabilityError.message, _variant: 'destructive'});
            setIsLoading(false);
            return;
          }
        } catch (error) {_toast({
            title: 'Error updating availability', _description: 'Failed to update candidate availability status.', _variant: 'destructive'});
          setIsLoading(false);
          return;
        }
      }

      toast({_title: 'Candidate hired successfully', _description: `${talentData.full_name} has been hired for the project.`});
      onConfirm();
      onClose();
    } catch (error) {_toast({
        title: 'Error hiring candidate', _description: 'Failed to hire candidate. Please try again.', _variant: 'destructive'});
    } finally {_setIsLoading(false);}
  };

  return (_<Dialog open={_isOpen} onOpenChange={_onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Confirm Hire</DialogTitle>
          <DialogDescription>
            Confirm that you want to hire {_talentData?.full_name || "this candidate"} for a new project.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="projectName" className="text-right">
              Project Name
            </Label>
            <Input
              id="projectName"
              value={_projectName}
              onChange={_(e) => setProjectName(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-start gap-4">
            <Label htmlFor="projectDescription" className="text-right mt-2">
              Project Description
            </Label>
            <Textarea
              id="projectDescription"
              value={_projectDescription}
              onChange={_(_e) => setProjectDescription(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="updateAvailability"
              className="h-4 w-4"
              checked={_updateAvailability}
              onChange={_(_e) => setUpdateAvailability(e.target.checked)}
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
          <Button type="button" variant="secondary" onClick={_onClose}>
            Cancel
          </Button>
          <Button type="button" onClick={_handleHireCandidate} disabled={_isSubmitting || isLoading}>
            {_isLoading ? "Hiring..." : "Confirm Hire"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
