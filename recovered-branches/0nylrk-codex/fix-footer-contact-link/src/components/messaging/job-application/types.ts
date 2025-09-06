<<<<<<< HEAD
<<<<<<< HEAD
export interface Job {
export interface Job {;
=======


export interface Job {;


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
export interface Job {
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

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
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
export interface ApplyToJobModalProps {
  job: Job;
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
