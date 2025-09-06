<<<<<<< HEAD
export interface Job {
  id: string;
  title: string;
  description: string;
  company_name?: string;
  budget?: string;
  client_id: string
}
export interface ApplyToJobModalProps {
  job: Job;
  is_open: boolean;
  on_close: () => void;
  onApplySuccess?: (job_id: string) => Promise < void>;
}
=======

export interface Job {;
  id:string,;
  title:string,;
  description:string,;
  company_name?:string,;
  budget?:string,;
  client_id:string;
}
;
export interface ApplyToJobModalProps {;
  job:Job,;
  isOpen:boolean,;
  onClose:() => void,;
  onApplySuccess?:(jobId:string) => Promise<void>;
} 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
