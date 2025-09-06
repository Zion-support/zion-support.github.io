
<<<<<<< HEAD
<<<<<<< HEAD

export interface Job {;


=======
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export interface Job {;


export interface Job {
<<<<<<< HEAD
export interface Job {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  id: string;
  title: string;
  description: string;
  company_name?: string;
  budget?: string;
  client_id: string
}

<<<<<<< HEAD

<<<<<<< HEAD
=======

export interface ApplyToJobModalProps {
  job: Job;
  isOpen: boolean;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export interface ApplyToJobModalProps {;
  job: Job;
  isOpen: boolean;
  onClose: () => void;
  onApplySuccess?: (jobId: string) => Promise<void>;
}
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

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
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  onClose: () => void;

  onApplySuccess?: (jobId: string) => Promise<void>;
}

<<<<<<< HEAD
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
=======
export interface ApplyToJobModalProps {
  job: Job;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
