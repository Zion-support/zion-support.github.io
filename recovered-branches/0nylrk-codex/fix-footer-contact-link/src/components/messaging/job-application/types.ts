export interface Job {
  id: string;
  title: string;
  description: string;
  company_name?: string;
  budget?: string;
  client_id: string
}
export interface ApplyToJobModalProps {
  job: Job;
<<<<<<< HEAD
  isOpen: boolean;
  onClose: () => void;

  onApplySuccess?: (jobId: string) => Promise<void>;
}

=======
  is_open: boolean;
  on_close: () => void;
  onApplySuccess?: (job_id: string) => Promise < void>;
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
