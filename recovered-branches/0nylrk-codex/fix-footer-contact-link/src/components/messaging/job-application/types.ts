
export interface Job {
  id: string;
  title: string;
  description: string;
  company_name?: string;
  budget?: string;
  client_id: string;
}

export interface ApplyToJobModalProps {
  job: Job;
  isOpen: boolean;
  onClose: () => void;
  onApplySuccess?: (jobId: string) => Promise<void>;
}




>>>>>>> origin/feature/merge-conflicts-and-improvements


>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
