
export interface Job {
<<<<<<< HEAD
=======
export interface Job {;

>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
  id: string;
  title: string;
  description: string;
  company_name?: string;
  budget?: string;
<<<<<<< HEAD
  client_id: string;
=======
  client_id: string
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
}

export interface ApplyToJobModalProps {
  job: Job;
  isOpen: boolean;
<<<<<<< HEAD
  onClose: () => void;
  onApplySuccess?: (jobId: string) => Promise<void>;
}
=======


export interface ApplyToJobModalProps {;
  job: Job;
  isOpen: boolean;
  onClose: () => void;
  onApplySuccess?: (jobId: string) => Promise<void>;
}






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





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662




>>>>>>> origin/feature/merge-conflicts-and-improvements


>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
