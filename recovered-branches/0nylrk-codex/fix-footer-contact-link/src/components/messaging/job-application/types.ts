
<<<<<<< HEAD
export interface Job {;


export interface Job {
export interface Job {;
=======

export interface Job {;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

export interface ApplyToJobModalProps {;
  job: Job;
  isOpen: boolean;
  onClose: () => void;
  onApplySuccess?: (jobId: string) => Promise<void>;
}
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  onClose: () => void;

  onApplySuccess?: (jobId: string) => Promise<void>;
}

<<<<<<< HEAD
;

;
;
=======

  is_open: boolean;
  on_close: () => void;
  onApplySuccess?: (job_id: string) => Promise < void>;
}

=======
;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
