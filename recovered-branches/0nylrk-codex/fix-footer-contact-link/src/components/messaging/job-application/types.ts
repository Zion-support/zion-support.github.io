
<<<<<<< HEAD

export interface Job {;


=======
export interface Job {;


export interface Job {
export interface Job {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  id: string;
  title: string;
  description: string;
  company_name?: string;
  budget?: string;
  client_id: string
}


<<<<<<< HEAD
=======

export interface ApplyToJobModalProps {
  job: Job;
  isOpen: boolean;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

export interface ApplyToJobModalProps {;
  job: Job;
  isOpen: boolean;
  onClose: () => void;
  onApplySuccess?: (jobId: string) => Promise<void>;
}
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  onClose: () => void;

  onApplySuccess?: (jobId: string) => Promise<void>;
}

<<<<<<< HEAD

  is_open: boolean;
  on_close: () => void;
  onApplySuccess?: (job_id: string) => Promise < void>;
}

=======
;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
;

;
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
