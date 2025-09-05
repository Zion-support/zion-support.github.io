
<<<<<<< HEAD
export interface Job {
  id: string,
  title: string,
  description: string,
  company_name?: string,
  budget?: string,
  client_id: string
}

export interface ApplyToJobModalProps {
  job: Job,
  isOpen: boolean,
  onClose: () => void,
  onApplySuccess?: (jobId: string) => Promise<void>
}
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
