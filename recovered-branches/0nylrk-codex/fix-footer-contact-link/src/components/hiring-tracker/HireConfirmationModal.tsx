
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
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
  isOpen: boolean;
  onClose: () => void;
  candidateData?: TalentProfile;
  application?: JobApplication;
  onConfirm: () => void;
  isSubmitting?: boolean;
}

export function HireConfirmationModal({ 
  application,
  onConfirm,
  isSubmitting = false
}: HireConfirmationModalProps) {
  const { user } = useAuth();

  // Get talent information from either candidateData or application
  const talentData = candidateData || (application?.talent_profile as TalentProfile);

  const handleHireCandidate = async () => {
    if (!projectName || !projectDescription) {
      toast({
        title: 'Required fields missing',
        description: 'Please fill in both project name and description.',
      return;
    }

    if (!user) {
      toast({
        title: 'Not authenticated',
        description: 'You must be logged in to hire a candidate.',
      return;
    }

    if (!talentData) {
      toast({
        title: 'Missing talent data',
        description: 'Talent information is missing.',
      return;
    }

    setIsLoading(true);

    // Create a new project
    try {
        .from('projects')
        .insert([
          {
            client_id: user.id,
            talent_id: talentData.user_id,
            job_id: application?.job_id || null,
            title: projectName,
            description: projectDescription,
            status: 'active',
        .select()
        .single();

      if (projectError) {
        toast({
          title: 'Error creating project',
          description: projectError.message,
        setIsLoading(false);
        return;
      }

      // Create a new hiring record
      const { error: hiringError } = await supabase
        .from('hiring_records')
        .insert([
          {
            client_id: user.id,
            talent_id: talentData.user_id,
            project_id: projectData.id,
            hire_date: new Date().toISOString(),

      if (hiringError) {
        toast({
          title: 'Error creating hiring record',
          description: hiringError.message,
        setIsLoading(false);
        return;
      }

      // Update the availability status
      if (updateAvailability) {
        try {
          const { error: availabilityError } = await supabase
            .from('talent_profiles')
            .update({ availability_type: 'unavailable' })

          if (availabilityError) {
            toast({
              title: 'Error updating availability',
              description: availabilityError.message,
            setIsLoading(false);
            return;
          }
        } catch (error) {
          setIsLoading(false);
          return;
        }
      }

      toast({
        title: 'Candidate hired successfully',
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Confirm Hire</DialogTitle>
          <DialogDescription>
            Confirm that you want to hire {talentData?.full_name || "this candidate"} for a new project.
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
            <input
              type="checkbox"
              id="updateAvailability"
              className="h-4 w-4"
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
          <Button type="button" onClick={handleHireCandidate} disabled={isSubmitting || isLoading}>
            {isLoading ? "Hiring..." : "Confirm Hire"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
