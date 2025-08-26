export interface Talent {
  id: string;
  name: string;
  title: string;
  skills: string[];
  experience: number;
  hourlyRate: number;
  availability: 'available' | 'busy' | 'unavailable';
  location: string;
  rating: number;
  completedProjects: number;
  description: string;
}

export const talentSeeds: Talent[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    title: 'Senior AI Engineer',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'Machine Learning', 'Deep Learning'],
    experience: 8,
    hourlyRate: 120,
    availability: 'available',
    location: 'San Francisco, CA',
    rating: 4.9,
    completedProjects: 45,
    description: 'Experienced AI engineer with expertise in computer vision and natural language processing.'
  },
  {
    id: '2',
    name: 'Michael Rodriguez',
    title: 'Cybersecurity Specialist',
    skills: ['Network Security', 'Penetration Testing', 'Incident Response', 'Compliance'],
    experience: 6,
    hourlyRate: 95,
    availability: 'available',
    location: 'Austin, TX',
    rating: 4.8,
    completedProjects: 32,
    description: 'Certified cybersecurity professional with experience in enterprise security and threat hunting.'
  },
  {
    id: '3',
    name: 'Emily Watson',
    title: 'DevOps Engineer',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
    experience: 5,
    hourlyRate: 85,
    availability: 'busy',
    location: 'Seattle, WA',
    rating: 4.7,
    completedProjects: 28,
    description: 'DevOps engineer specializing in cloud infrastructure and automation.'
  },
  {
    id: '4',
    name: 'David Kim',
    title: 'Full Stack Developer',
    skills: ['React', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB'],
    experience: 7,
    hourlyRate: 75,
    availability: 'available',
    location: 'New York, NY',
    rating: 4.9,
    completedProjects: 52,
    description: 'Full stack developer with expertise in modern web technologies and scalable applications.'
  }
];

// Export for API routes
export const TALENT_SEEDS = talentSeeds;