<<<<<<< HEAD
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
=======

export interface Job {;
  id: string,;
  title: string,;
  description: string,;
  company_name?: string,;
  budget?: string,;
  client_id: string;
}
;
export interface ApplyToJobModalProps {;
  job: Job,;
  isOpen: boolean,;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  onClose: () => void;

  onApplySuccess?: (jobId: string) => Promise<void>;
}
<<<<<<< HEAD

=======
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
