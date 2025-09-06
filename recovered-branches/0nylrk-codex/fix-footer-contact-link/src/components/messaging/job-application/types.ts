<<<<<<< HEAD
export interface Job {
=======
<<<<<<< HEAD
<<<<<<< HEAD
export interface Job {
=======
export interface Job {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  id: string;
  title: string;
  description: string;
  company_name?: string;
  budget?: string;
  client_id: string
}
<<<<<<< HEAD
export interface ApplyToJobModalProps {
  job: Job;
  isOpen: boolean;
  onClose: () => void;
=======
<<<<<<< HEAD
export interface ApplyToJobModalProps {
  job: Job;
  isOpen: boolean;
=======

export interface ApplyToJobModalProps {;
  job: Job;
  isOpen: boolean;
  onClose: () => void;
  onApplySuccess?: (jobId: string) => Promise<void>;
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  onClose: () => void;
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5

  onApplySuccess?: (jobId: string) => Promise<void>;
}

<<<<<<< HEAD
=======

  is_open: boolean;
  on_close: () => void;
  onApplySuccess?: (job_id: string) => Promise < void>;
}

=======
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
