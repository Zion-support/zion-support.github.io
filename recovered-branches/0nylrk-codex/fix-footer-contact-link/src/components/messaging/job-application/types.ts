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
  isOpen: boolean;
  onClose: () => void;
<<<<<<< HEAD
  onApplySuccess?: (jobId: string) => Promise<void>
}
=======
  onApplySuccess?: (jobId: string) => Promise<void>;
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
