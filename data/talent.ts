export interface Talent {
  id: string;
  name: string;
  title: string;
  skills: string[];
  experience: number;
  location: string;
  rate: number;
  availability: 'available' | 'busy' | 'unavailable';
  rating: number;
  completedProjects: number;
  bio: string;
  portfolio: string[];
  certifications: string[];
  languages: string[];
  timezone: string;
  verified: boolean;
  originalLanguage: string;
  translations: Record<string, any>;
}

export const sampleTalents: Talent[] = [
  {
    id: '1',
    name: 'John Doe',
    title: 'Senior Full Stack Developer',
    skills: ['React', 'Node.js', 'TypeScript', 'AWS'],
    experience: 5,
    location: 'San Francisco, CA',
    rate: 85,
    availability: 'available',
    rating: 4.8,
    completedProjects: 24,
    bio: 'Experienced full-stack developer with expertise in modern web technologies.',
    portfolio: ['https://example.com/portfolio1', 'https://example.com/portfolio2'],
    certifications: ['AWS Certified Developer', 'React Professional'],
    languages: ['English', 'Spanish'],
    timezone: 'PST',
    verified: true,
    originalLanguage: 'en',
    translations: {}
  }
];