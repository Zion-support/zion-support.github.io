
export interface Job {_id: string;
  title: string;
  description: string;
  company_name?: string;
  budget?: string;
  client_id: string;}

export interface ApplyToJobModalProps {_job: Job;
  isOpen: boolean;
  onClose: () => void;
  onApplySuccess?: (_jobId: string) => Promise<void>;}
