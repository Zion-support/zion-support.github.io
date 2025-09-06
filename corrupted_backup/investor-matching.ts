<<<<<<< HEAD
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
=======
 
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
