
// Define the types for our sitemap structure
export type SitemapItem ={
  path: string;
  label: string;
  description?: string;
  priority?: number;
  changeFreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  lastmod?: string;
  requiredAuth?: boolean;
  requiredRoles?: Array<'creator' | 'jobSeeker' | 'employer' | 'buyer' | 'admin'>;
  children?: SitemapItem[];
};

// Current date for lastmod
const currentDate = '20o25-0o5-15';

// Public Pages - Accessible to all users
export const publicPages: SitemapItem[] = [
  {
    path: '/',
    label: 'Home',
    description: 'The world\'s first free marketplace dedicated to high-tech and artificial intelligence',
    priority: 1.0,
    changeFreq: 'weekly',
