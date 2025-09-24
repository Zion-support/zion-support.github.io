
export interface Job {
export interface Job {
,
  id: string,
  title: string,
  description: string,
  company_name?: string,
  budget?: string,
  client_id: string,
}
,
export interface ApplyToJobModalProps {
  job: Job,
  isOpen: boolean,
export interface ApplyToJobModalProps {
  job: Job,
  isOpen: boolean,
  onClose: () => void,
  onApplySuccess?: (jobId: string) => Promise<void>,
}
,
export interface Job {
  id: string;
  title: string;
  description: string;
  company_name?: string;
  budget?: string;
  client_id: string,
}
,
export interface ApplyToJobModalProps {
  job: Job;
  isOpen: boolean;
  onClose: () => void,
  onApplySuccess?: (jobId: string) => Promise<void>,
}
,
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982>>>>>>> 8f0785411043 (chore: auto-resolve merge conflicts (keep incoming))}}