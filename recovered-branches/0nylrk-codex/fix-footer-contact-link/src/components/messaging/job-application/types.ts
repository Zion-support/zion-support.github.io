
  id: string;
  title: string;
  description: string;
  company_name?: string;
  budget?: string;
  client_id: string
}

  onClose: () => void;

  onApplySuccess?: (jobId: string) => Promise<void>;
}
