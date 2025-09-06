import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useJobApplications } from '@/hooks/useJobApplications';
import { useMessaging } from '@/context/MessagingContext';
import { toast } from '@/hooks/use-toast';
import { ResumeSelector, ResumeOption } from '../resume-selector';
import { MessageTab } from './MessageTab';
import { ResumeTab } from './ResumeTab';
import { Job } from './types';
import { logErrorToProduction } from '@/utils/productionLogger';

interface ApplyFormProps {
  job: Job;
  onClose: () => void;
}

export const ApplyForm: React.FC<ApplyFormProps> = ({ job, onClose }) => {
  const [activeTab, setActiveTab] = useState('message');
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { applyToJob } = useJobApplications();
  const { sendMessage } = useMessaging();

  const handleSubmit = async () => {
    if (!selectedResume) {
      toast({
        title: 'Resume required',
        description: 'Please select a resume before applying.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await applyToJob(job.id, {
        resumeId: selectedResume.id,
        message,
      });

      // Send a message to the job poster
      await sendMessage({
        content: `I'm interested in the ${job.title} position. ${message}`,
        recipientId: job.posterId,
        jobId: job.id,
      });

      toast({
        title: 'Application submitted',
        description: 'Your application has been sent successfully.',
      });
      
      onClose();
    } catch (error) {
      logErrorToProduction('Job application failed', error);
      toast({
        title: 'Application failed',
        description: 'There was an error submitting your application.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Apply to {job.title}</h2>
        <Button variant="outline" onClick={onClose}>
          Close
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="message">Message</TabsTrigger>
          <TabsTrigger value="resume">Resume</TabsTrigger>
        </TabsList>

        <TabsContent value="message" className="space-y-4">
          <MessageTab
            message={message}
            onMessageChange={setMessage}
            job={job}
          />
        </TabsContent>

        <TabsContent value="resume" className="space-y-4">
          <ResumeTab
            selectedResume={selectedResume}
            onResumeSelect={setSelectedResume}
          />
        </TabsContent>
      </Tabs>

      <div className="flex justify-end space-x-2">
        <Button variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          disabled={isSubmitting || !selectedResume}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Submitting...
            </>
          ) : (
            'Submit Application'
          )}
        </Button>
      </div>
    </div>
  );
};