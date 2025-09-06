<<<<<<< HEAD
// Stub talent data - placeholder for missing functionality;
export const TALENT_PROFILES = [;
  {;
    id: '1',;
    slug: 'sample-talent',;
    name: 'Sample Talent',;
    title: 'Full Stack Developer',;
    category: 'Development',;
    location: 'Remote',;
    timezone: 'UTC',;
    region: 'Global',;
    skills: ['ReactNode.jsTypeScript'],;
    summary: 'Experienced developer with expertise in modern web technologies.',;
    bio: 'Passionate about creating innovative solutions.',;
    hourlyRateUsd: 75,;
    requestQuote: true,;
    availability: 'Open',;
    profileImageUrl: null,;
    videoUrl: null,;
    portfolio: null,;
    verified: false,;
    rating: 0,;
    reviewsCount: 0,;
    createdAt: new Date().toISOString(),;
    originalLanguage: 'en',;
=======
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
>>>>>>> main
    translations: {}
  }
];