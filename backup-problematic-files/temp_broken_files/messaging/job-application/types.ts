
<<<<<<< HEAD
=======
export interface Job {;
  id:string;
  title:string;
  description:string;
  company_name?:string;
  budget?:string;
  client_id:string;
}
;
export interface ApplyToJobModalProps {;
  job:Job;
  isOpen:boolean;
  onClose:() => void;
  onApplySuccess?:(jobId:string) => Promise<void>;
} 
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
