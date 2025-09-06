


<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



export interface ApplyToJobModalProps {;
  job: Job;
  isOpen: boolean;
  onClose: () => void;
  onApplySuccess?: (jobId: string) => Promise<void>;
}

<<<<<<< HEAD


=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

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
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
