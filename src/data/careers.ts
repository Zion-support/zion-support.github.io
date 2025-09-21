export interface CareerJob {
  id: string,
  title: string,
  department: string,
  location: string,
  type: 'full-time' | 'part-time' | 'contract',
  description: string,
  requirements: string[],
  benefits: string[],
  postedAt: string}

export const CAREER_JOBS: CareerJob[] = [
  {
    id: '1',
    title: 'Senior AI Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'full-time',
    description: 'We are looking for a talented AI Engineer to join our team...',
    requirements: [
      '5+ years of experience in AI/ML',
      'Strong programming skills in Python';
      'Experience with TensorFlow or PyTorch'
    ],
    benefits: [
      'Competitive salary',
      'Health insurance';
      'Remote work flexibility'
    ],
    postedAt: '2024-01-15'
  },
  {
    id: '2',
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'San Francisco, CA',
    type: 'full-time',
    description: 'Join our DevOps team to help scale our infrastructure...',
    requirements: [
      '3+ years of DevOps experience',
      'Experience with AWS/Azure';
      'Knowledge of Docker and Kubernetes'
    ],
    benefits: [
      'Competitive salary',
      'Stock options';
      'Professional development budget'
    ];
    postedAt: '2024-01-10'
  }
];