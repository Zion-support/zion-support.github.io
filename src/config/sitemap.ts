export interface SitemapRoute {
<<<<<<< HEAD
  path: string;
  label: string;
  description?: string;
}

<<<<<<< HEAD
export const completeSitemap: SitemapRoute[] = [
  // Main Pages
  { path: '/', label: 'Home', description: 'Zion Tech Group homepage' },
  { path: '/about', label: 'About Us', description: 'Learn about Zion Tech Group' },
  { path: '/careers', label: 'Careers', description: 'Join our team' },
  { path: '/contact', label: 'Contact', description: 'Get in touch with us' },
  { path: '/sitemap', label: 'Sitemap', description: 'Complete site navigation' },
  { path: '/privacy', label: 'Privacy Policy', description: 'Our privacy practices' },
  { path: '/terms', label: 'Terms of Service', description: 'Terms and conditions' },
=======
// Current date for lastmod
const currentDate = '2025-01-15';

// Public Pages - Accessible to all users
export const publicPages: SitemapItem[] = [
  {
    path: '/',
    label: 'Home',
    description: 'The world\'s first free marketplace dedicated to high-tech and artificial intelligence',
    priority: 1.0,
    changeFreq: 'weekly',
    lastmod: currentDate,
  },
  {
    path: '/about',
    label: 'About Us',
    description: 'Learn about the Zion AI Marketplace mission, team and timeline',
    priority: 0.8,
    changeFreq: 'monthly',
    lastmod: currentDate,
  },
  {
    path: '/contact',
    label: 'Contact',
    description: 'Get in touch with the Zion team',
    priority: 0.8, 
    changeFreq: 'monthly',
    lastmod: currentDate,
  },
  {
    path: '/talent',
    label: 'Talent Directory',
    description: 'Browse skilled AI and tech professionals',
    priority: 0.9,
    changeFreq: 'daily',
    lastmod: currentDate,
  },
  {
    path: '/marketplace',
    label: 'Marketplace',
    description: 'Explore AI services, products and equipment',
    priority: 0.9,
    changeFreq: 'daily',
    lastmod: currentDate,
  },
  {
    path: '/services',
    label: 'Services',
    description: 'Find professional tech and AI services',
    priority: 0.8,
    changeFreq: 'weekly',
    lastmod: currentDate,
  },
  {
    path: '/equipment',
    label: 'Equipment',
    description: 'Specialized hardware and tech equipment',
    priority: 0.8,
    changeFreq: 'weekly',
    lastmod: currentDate,
  },
  {
    path: '/categories',
    label: 'Categories',
    description: 'Browse service and talent categories',
    priority: 0.7,
    changeFreq: 'monthly',
    lastmod: currentDate,
  },
  {
    path: '/blog',
    label: 'Blog',
    description: 'Articles and insights about AI and tech',
    priority: 0.9,
    changeFreq: 'daily',
    lastmod: currentDate,
  },
  {
    path: '/faq',
    label: 'FAQ',
    description: 'Frequently asked questions about Zion',
    priority: 0.7,
    changeFreq: 'monthly',
    lastmod: currentDate,
  },
  {
    path: '/terms',
    label: 'Terms of Service',
    description: 'Terms and conditions for using Zion',
    priority: 0.5,
    changeFreq: 'monthly',
    lastmod: currentDate,
  },
  {
    path: '/privacy',
    label: 'Privacy Policy',
    description: 'How we handle your data',
    priority: 0.5,
    changeFreq: 'monthly',
    lastmod: currentDate,
  },
];

// Authentication Pages
export const authPages: SitemapItem[] = [
  {
    path: '/login',
    label: 'Login',
    description: 'Sign in to your account',
    priority: 0.6,
    changeFreq: 'monthly',
    lastmod: currentDate,
  },
  {
    path: '/signup',
    label: 'Sign Up',
    description: 'Create a new account',
    priority: 0.6,
    changeFreq: 'monthly',
    lastmod: currentDate,
    children: [
      {
        path: '/signup/talent',
        label: 'Talent Registration',
        description: 'Sign up as a talent or creator',
        priority: 0.6,
        changeFreq: 'monthly',
        lastmod: currentDate,
      },
      {
        path: '/signup/client',
        label: 'Client Registration',
        description: 'Sign up as an employer or buyer',
        priority: 0.6,
        changeFreq: 'monthly',
        lastmod: currentDate,
      }
    ]
  },
  {
    path: '/forgot-password',
    label: 'Forgot Password',
    description: 'Reset your password',
    priority: 0.5,
    changeFreq: 'monthly',
    lastmod: currentDate,
  },
];

// Talent/Creator Routes - Requires authentication and appropriate role
export const talentRoutes: SitemapItem[] = [
  {
    path: '/talent-dashboard',
    label: 'Talent Dashboard',
    description: 'Overview for talent users',
    requiredAuth: true,
    requiredRoles: ['jobSeeker', 'creator'],
    priority: 0.9,
    changeFreq: 'daily',
    lastmod: currentDate,
  },
  {
    path: '/talent-onboarding',
    label: 'Talent Onboarding',
    description: 'Complete your talent profile',
    requiredAuth: true,
    requiredRoles: ['jobSeeker', 'creator'],
    priority: 0.8,
    changeFreq: 'monthly',
    lastmod: currentDate,
  },
  {
    path: '/portfolio-builder',
    label: 'Portfolio Builder',
    description: 'Manage your portfolio and resume',
    requiredAuth: true,
    requiredRoles: ['jobSeeker', 'creator'],
    priority: 0.8,
    changeFreq: 'weekly',
    lastmod: currentDate,
  },
  {
    path: '/create-talent-profile',
    label: 'Create Talent Profile',
    description: 'Set up your talent profile',
    requiredAuth: true,
    requiredRoles: ['jobSeeker', 'creator'],
    priority: 0.7,
    changeFreq: 'monthly',
    lastmod: currentDate,
  },
];

// Client/Employer Routes - Requires authentication and appropriate role
export const clientRoutes: SitemapItem[] = [
  {
    path: '/client-dashboard',
    label: 'Client Dashboard',
    description: 'Overview for client users',
    requiredAuth: true,
    requiredRoles: ['employer', 'buyer'],
    priority: 0.9,
    changeFreq: 'daily',
    lastmod: currentDate,
  },
  {
    path: '/post-job',
    label: 'Post a Job',
    description: 'Create a new job listing',
    requiredAuth: true,
    requiredRoles: ['employer', 'buyer'],
    priority: 0.8,
    changeFreq: 'weekly',
    lastmod: currentDate,
  },
  {
    path: '/hiring-tracker',
    label: 'Hiring Pipeline',
    description: 'Track your hiring process',
    requiredAuth: true,
    requiredRoles: ['employer', 'buyer'],
    priority: 0.7,
    changeFreq: 'daily',
    lastmod: currentDate,
  },
];

// Shared Routes - Authenticated Users
export const sharedRoutes: SitemapItem[] = [
  {
    path: '/messages',
    label: 'Messages',
    description: 'Your inbox and conversations',
    requiredAuth: true,
    priority: 0.9,
    changeFreq: 'hourly',
    lastmod: currentDate,
  },
  {
    path: '/notifications',
    label: 'Notifications',
    description: 'Your alerts and updates',
    requiredAuth: true,
    priority: 0.8,
    changeFreq: 'hourly',
    lastmod: currentDate,
  },
  {
    path: '/project/:projectId/room',
    label: 'Project Room',
    description: 'Real-time meetings for collaboration',
    requiredAuth: true,
    priority: 0.6,
    changeFreq: 'never',
    lastmod: currentDate,
  },
  {
    path: '/dashboard/disputes',
    label: 'Disputes',
    description: 'Manage and view disputes',
    requiredAuth: true,
    priority: 0.7,
    changeFreq: 'daily',
    lastmod: currentDate,
  },
];

// Admin Routes
export const adminRoutes: SitemapItem[] = [
  {
    path: '/analytics',
    label: 'Analytics',
    description: 'System analytics and metrics',
    requiredAuth: true,
    requiredRoles: ['admin'],
    priority: 0.9,
    changeFreq: 'daily',
    lastmod: currentDate,
  },
  {
    path: '/admin/reviews',
    label: 'Reviews Moderation',
    description: 'Moderate user reviews',
    requiredAuth: true,
    requiredRoles: ['admin'],
    priority: 0.7,
    changeFreq: 'daily',
    lastmod: currentDate,
  },
  {
    path: '/admin/disputes',
    label: 'Dispute Management',
    description: 'Manage user disputes',
    requiredAuth: true,
    requiredRoles: ['admin'],
    priority: 0.8,
    changeFreq: 'daily',
    lastmod: currentDate,
  },
];

// Dynamic Path Patterns
export const dynamicPaths = {
  talentProfile: '/talent/:id',
  projectDetails: '/project/:projectId',
  projectMilestones: '/project/:projectId/milestones',
  projectRoom: '/project/:projectId/room',
  jobDetails: '/job/:id',
  categoryDetails: '/categories/:slug',
  disputeDetails: '/dashboard/disputes/:disputeId',
};

// The complete sitemap
export const completeSitemap: SitemapItem[] = [
  ...publicPages,
  ...authPages,
  ...talentRoutes,
  ...clientRoutes,
  ...sharedRoutes,
  ...adminRoutes,
];

// Helper function to get appropriate routes based on user role
export const getAccessibleRoutes = (
  isAuthenticated: boolean, 
  userType?: 'creator' | 'jobSeeker' | 'employer' | 'buyer' | 'admin' | null
) => {
  // Public routes accessible to everyone
  let accessibleRoutes = [...publicPages, ...authPages];
>>>>>>> origin/cursor/website-audit-and-enhancement-5083
  
  // Marketplace
  { path: '/marketplace', label: 'Marketplace', description: 'Browse products and services' },
  { path: '/services', label: 'Services', description: 'Professional services' },
  { path: '/talent', label: 'Find Talent', description: 'Connect with skilled professionals' },
  { path: '/equipment', label: 'Equipment', description: 'Browse equipment listings' },
  { path: '/categories', label: 'Categories', description: 'Browse by category' },
  { path: '/green-it', label: 'Green IT', description: 'Sustainable technology solutions' },
  { path: '/it-onsite-services', label: 'IT Onsite Services', description: 'On-site IT support' },
  
  // Community & Support
  { path: '/community', label: 'Community', description: 'Join our community' },
  { path: '/blog', label: 'Blog', description: 'Latest news and insights' },
  { path: '/faq', label: 'FAQ', description: 'Frequently asked questions' },
  { path: '/help', label: 'Help Center', description: 'Get help and support' },
  
  // AI & Tools
  { path: '/match', label: 'AI Matcher', description: 'AI-powered talent matching' },
  { path: '/zion-hire-ai', label: 'Zion Hire AI', description: 'AI hiring assistant' },
  { path: '/request-quote', label: 'Request Quote', description: 'Get a custom quote' },
  
  // Partners & Business
  { path: '/partners', label: 'Partners', description: 'Our business partners' },
  { path: '/developers', label: 'Developer Portal', description: 'Developer resources' },
  { path: '/api-docs', label: 'API Documentation', description: 'Technical documentation' },
  
  // Authentication
  { path: '/login', label: 'Login', description: 'Sign in to your account' },
  { path: '/signup', label: 'Sign Up', description: 'Create a new account' },
=======
  url: string;
  path: string;
  label: string;
  lastModified: Date;
  changeFrequency: string;
  priority: number;
}

export const completeSitemap: SitemapRoute[] = [
  {
    url: "/",
    path: "/",
    label: "Home",
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1,
  },
  {
    url: "/contact",
    path: "/contact",
    label: "Contact",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: "/services",
    path: "/services",
    label: "Services",
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: "/about",
    path: "/about",
    label: "About",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
];