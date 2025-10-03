export type Job = {/* content */}
  id: string;
  title: string;
  clientId: string;
  location?: string;
  createdAt: string;
};

export const JOBS: Job[] = [
  {/* content */}
    id: 'job-llm-eng-001',
    title: 'LLM Engineer (RAG + Eval)',
    clientId: 'client-demo-001',
    location: 'Remote',
    createdAt: '2025-08-01T10:00:00Z',
  },
  {/* content */}
    id: 'job-devops-002',
    title: 'Senior DevOps Engineer',
    clientId: 'client-demo-001',
    location: 'Hybrid — Toronto, CA',
    createdAt: '2025-07-28T13:30:00Z',
  },
];