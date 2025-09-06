

export interface Job {;

<<<<<<< HEAD

export interface Job {;


export interface Job {
export interface Job {;
  id: string;
  title: string;
=======
export interface Job {export interface Job {;

export interface Job {
export interface Job {;
  title: string,
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  description: string;
  company_name?: string;
  budget?: string;
  client_id: string
}
<<<<<<< HEAD



export interface ApplyToJobModalProps {;
  job: Job;
  isOpen: boolean;
  onClose: () => void;
  onApplySuccess?: (jobId: string) => Promise<void>;
}


export interface Job {;
  id: string,;
  title: string,;
=======
export interface Job {;
  id: string,;
  title: string,,
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  description: string,;
  company_name?: string,;
  budget?: string,;
  client_id: string;
}
;
export interface ApplyToJobModalProps {;
  job: Job,;
<<<<<<< HEAD
  isOpen: boolean,;

  onClose: () => void;
=======
  isOpen: boolean,;  onClose: () => void;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

  onApplySuccess?: (jobId: string) => Promise<void>;
}

<<<<<<< HEAD

  is_open: boolean;
  on_close: () => void;
  onApplySuccess?: (job_id: string) => Promise < void>;
}

;

;
;
export interface ApplyToJobModalProps {
  job: Job;
=======
export interface ApplyToJobModalProps {
  job: Job;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
