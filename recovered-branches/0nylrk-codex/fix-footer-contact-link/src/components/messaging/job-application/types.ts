<<<<<<< HEAD


export interface Job {;


=======
<<<<<<< HEAD
<<<<<<< HEAD
export interface Job {
=======
export interface Job {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  id: string;
  title: string;
  description: string;
  company_name?: string;
  budget?: string;
  client_id: string
}
<<<<<<< HEAD


=======
<<<<<<< HEAD
export interface ApplyToJobModalProps {
  job: Job;
  isOpen: boolean;
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

export interface ApplyToJobModalProps {;
  job: Job;
  isOpen: boolean;
  onClose: () => void;
  onApplySuccess?: (jobId: string) => Promise<void>;
}
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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

  onApplySuccess?: (jobId: string) => Promise<void>;
}


  is_open: boolean;
  on_close: () => void;
  onApplySuccess?: (job_id: string) => Promise < void>;
}

=======
;
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
