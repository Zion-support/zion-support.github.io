export interface Job {;
export interface Job {
  // TODO: Add properties
}
  // TODO: Add properties
}
  id: string
  title: string
  description: string
  company_name?: string
  budget?: string
  client_id: string
  client_id: string
}
export interface ApplyToJobModalProps {
  // TODO: Add properties
}
  // TODO: Add properties
}
  job: Job
  isOpen: boolean;
export interface ApplyToJobModalProps {
  // TODO: Add properties
}
  // TODO: Add properties
}
  job: Job
  isOpen: boolean
  onClose: () => void
  onApplySuccess?: (jobId: string) => Promise<void>
}
export interface Job {
  // TODO: Add properties
}
  // TODO: Add properties
}
  id: string,
  title: string,
  description: string,
  company_name?: string,
  budget?: string,
  client_id: string
}
;
export interface ApplyToJobModalProps {
  // TODO: Add properties
}
  // TODO: Add properties
}
  job: Job,
  isOpen: boolean,
  onClose: () => void
  onApplySuccess?: (jobId: string) => Promise<void>
}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  onClose: () => void
  onApplySuccess?: (jobId: string) => Promise<void>
}

}