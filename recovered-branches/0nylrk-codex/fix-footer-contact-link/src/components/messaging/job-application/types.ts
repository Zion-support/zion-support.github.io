<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export interface Job {
=======
export interface Job {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


export interface Job {;


>>>>>>> main
  id: string;
  title: string;
  description: string;
  company_name?: string;
  budget?: string;
  client_id: string
}
<<<<<<< HEAD
<<<<<<< HEAD
export interface ApplyToJobModalProps {
  job: Job;
  isOpen: boolean;
=======
=======


>>>>>>> main

export interface ApplyToJobModalProps {;
  job: Job;
  isOpen: boolean;
  onClose: () => void;
  onApplySuccess?: (jobId: string) => Promise<void>;
}
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

>>>>>>> main
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
  onClose: () => void;

  onApplySuccess?: (jobId: string) => Promise<void>;
}
<<<<<<< HEAD
<<<<<<< HEAD

=======
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


  is_open: boolean;
  on_close: () => void;
  onApplySuccess?: (job_id: string) => Promise < void>;
}

=======
;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
