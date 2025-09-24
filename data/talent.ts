// Stub talent data - placeholder for missing functionality
export type TalentProfile = {
  id: string;
  slug: string;
  name: string;
  title: string;
  category: string;
  location: string;
  timezone: string;
  region: string;
  skills: string[];
  summary: string;
  bio: string;
  hourlyRateUsd: number;
  requestQuote: boolean;
  availability: string;
  profileImageUrl: string | null;
  videoUrl: string | null;
  portfolio: string | null;
  verified: boolean;
  rating: number;
  reviewsCount: number;
  createdAt: string;
  originalLanguage: string;
  translations: Record<string, string>;
};

export const TALENT_PROFILES: TalentProfile[] = [
  {
    id: '1',
    slug: 'sample-talent',
    name: 'Sample Talent',
    title: 'Full Stack Developer',
    category: 'Development',
    location: 'Remote',
    timezone: 'UTC',
    region: 'Global',
    skills: ['React', 'Node.js', 'TypeScript'],
    summary: 'Experienced developer with expertise in modern web technologies.',
    bio: 'Passionate about creating innovative solutions.',
    hourlyRateUsd: 75,
    requestQuote: true,
    availability: 'Open',
    profileImageUrl: null,
    videoUrl: null,
    portfolio: null,
    verified: false,
    rating: 0,
    reviewsCount: 0,
    createdAt: new Date().toISOString(),
    originalLanguage: 'en',
    translations: {},
  },
];