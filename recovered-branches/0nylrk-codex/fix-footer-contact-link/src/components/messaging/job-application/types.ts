<<<<<<< HEAD
export interface Job {;
  id: string;
  title: string;
  description: string;
  company_name?: string;
  budget?: string;
  client_id: string;
}

export interface ApplyToJobModalProps {;
  job: Job;
  isOpen: boolean;
  onClose: () => void;
  onApplySuccess?: (jobId: string) => Promise<void>;
}
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
  onClose: () => void;
  onApplySuccess?: (jobId: string) => Promise<void>;
}
;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
