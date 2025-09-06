
export interface Job {;

  id: string;
  title: string;
  description: string;
  company_name?: string;
  budget?: string;
  client_id: string
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  onClose: () => void;

  onApplySuccess?: (jobId: string) => Promise<void>;
}

;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
