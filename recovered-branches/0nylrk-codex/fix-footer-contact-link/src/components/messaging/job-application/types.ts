
export interface Job {;
  id:string,;
  title:string,;
  description:string,;
  company_name?:string,;
  budget?:string,;
  client_id:string;
}
<<<<<<< HEAD
;
export interface ApplyToJobModalProps {;
  job:Job,;
  isOpen:boolean,;
  onClose:() => void,;
  onApplySuccess?:(jobId:string) => Promise<void>;
}
=======

export interface ApplyToJobModalProps {
  job: Job,
  isOpen: boolean,
  onClose: () => void,
  onApplySuccess?: (jobId: string) => Promise<void>
}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
