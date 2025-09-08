export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'freelance';
  salary: string;
  description: string;
  requirements: string[];
  postedDate: string;
  category: string;
}

export const jobsData: Job[] = [
  {
    id: '1',
    title: 'Senior AI Engineer',
    company: 'Zion Tech Group',
    location: 'Remote',
    type: 'full-time',
    salary: '$120,000 - $180,000',
    description: 'We are looking for a Senior AI Engineer to join our team and help build cutting-edge AI solutions.',
    requirements: [
      '5+ years of experience in AI/ML',
      'Strong Python programming skills',
      'Experience with TensorFlow/PyTorch',
      'Knowledge of cloud platforms (AWS/GCP/Azure)'
    ],
    postedDate: '2024-01-15',
    category: 'AI/ML'
  },
  {
    id: '2',
    title: 'Cybersecurity Specialist',
    company: 'Zion Tech Group',
    location: 'Middletown, DE',
    type: 'full-time',
    salary: '$90,000 - $140,000',
    description: 'Join our cybersecurity team to protect our clients from evolving digital threats.',
    requirements: [
      '3+ years of cybersecurity experience',
      'Certifications (CISSP, CEH, etc.)',
      'Experience with security tools and frameworks',
      'Strong analytical skills'
    ],
    postedDate: '2024-01-20',
    category: 'Cybersecurity'
  },
  {
    id: '3',
    title: 'DevOps Engineer',
    company: 'Zion Tech Group',
    location: 'Remote',
    type: 'contract',
    salary: '$80 - $120/hour',
    description: 'Help us build and maintain robust cloud infrastructure and CI/CD pipelines.',
    requirements: [
      'Experience with AWS/GCP/Azure',
      'Knowledge of Docker and Kubernetes',
      'CI/CD pipeline experience',
      'Infrastructure as Code (Terraform/CloudFormation)'
    ],
    postedDate: '2024-01-25',
    category: 'DevOps'
  }
];

// Export for API routes
export const JOB_POSTS = jobsData;