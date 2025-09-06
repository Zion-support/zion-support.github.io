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
