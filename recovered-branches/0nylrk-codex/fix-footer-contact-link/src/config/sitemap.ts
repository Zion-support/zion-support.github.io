
// Define the types for our sitemap structure
export type SitemapItem = {_path: string;
  label: string;
  description?: string;
  priority?: number;
  changeFreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  lastmod?: string;
  requiredAuth?: boolean;
  requiredRoles?: Array<'creator' | 'jobSeeker' | 'employer' | 'buyer' | 'admin'>;
  children?: SitemapItem[];};

// Current date for lastmod
const _currentDate = '2025-05-15';

// Public Pages - Accessible to all users
export const publicPages: SitemapItem[] = [
  {_path: '/', _label: 'Home', _description: 'The world\'s first free marketplace dedicated to high-tech and artificial intelligence', _priority: 1.0, _changeFreq: 'weekly', _lastmod: currentDate},
  {_path: '/about', _label: 'About Us', _description: 'Learn about the Zion AI Marketplace mission and team', _priority: 0.8, _changeFreq: 'monthly', _lastmod: currentDate},
  {_path: '/contact', _label: 'Contact', _description: 'Get in touch with the Zion team', _priority: 0.8, _changeFreq: 'monthly', _lastmod: currentDate},
  {_path: '/talent', _label: 'Talent Directory', _description: 'Browse skilled AI and tech professionals', _priority: 0.9, _changeFreq: 'daily', _lastmod: currentDate},
  {_path: '/marketplace', _label: 'Marketplace', _description: 'Explore AI services, _products and equipment', _priority: 0.9, _changeFreq: 'daily', _lastmod: currentDate},
  {_path: '/services', _label: 'Services', _description: 'Find professional tech and AI services', _priority: 0.8, _changeFreq: 'weekly', _lastmod: currentDate},
  {_path: '/equipment', _label: 'Equipment', _description: 'Specialized hardware and tech equipment', _priority: 0.8, _changeFreq: 'weekly', _lastmod: currentDate},
  {_path: '/categories', _label: 'Categories', _description: 'Browse service and talent categories', _priority: 0.7, _changeFreq: 'monthly', _lastmod: currentDate},
  {_path: '/blog', _label: 'Blog', _description: 'Articles and insights about AI and tech', _priority: 0.9, _changeFreq: 'daily', _lastmod: currentDate},
  {_path: '/faq', _label: 'FAQ', _description: 'Frequently asked questions about Zion', _priority: 0.7, _changeFreq: 'monthly', _lastmod: currentDate},
  {_path: '/terms', _label: 'Terms of Service', _description: 'Terms and conditions for using Zion', _priority: 0.5, _changeFreq: 'monthly', _lastmod: currentDate},
  {_path: '/privacy', _label: 'Privacy Policy', _description: 'How we handle your data', _priority: 0.5, _changeFreq: 'monthly', _lastmod: currentDate}];

// Authentication Pages
export const authPages: SitemapItem[] = [
  {_path: '/login', _label: 'Login', _description: 'Sign in to your account', _priority: 0.6, _changeFreq: 'monthly', _lastmod: currentDate},
  {_path: '/signup', _label: 'Sign Up', _description: 'Create a new account', _priority: 0.6, _changeFreq: 'monthly', _lastmod: currentDate, _children: [
      {
        path: '/signup/talent', _label: 'Talent Registration', _description: 'Sign up as a talent or creator', _priority: 0.6, _changeFreq: 'monthly', _lastmod: currentDate},
      {_path: '/signup/client', _label: 'Client Registration', _description: 'Sign up as an employer or buyer', _priority: 0.6, _changeFreq: 'monthly', _lastmod: currentDate}
    ]
  },
  {_path: '/forgot-password', _label: 'Forgot Password', _description: 'Reset your password', _priority: 0.5, _changeFreq: 'monthly', _lastmod: currentDate}];

// Talent/Creator Routes - Requires authentication and appropriate role
export const talentRoutes: SitemapItem[] = [
  {_path: '/talent-dashboard', _label: 'Talent Dashboard', _description: 'Overview for talent users', _requiredAuth: true, _requiredRoles: ['jobSeeker', _'creator'], _priority: 0.9, _changeFreq: 'daily', _lastmod: currentDate},
  {_path: '/talent-onboarding', _label: 'Talent Onboarding', _description: 'Complete your talent profile', _requiredAuth: true, _requiredRoles: ['jobSeeker', _'creator'], _priority: 0.8, _changeFreq: 'monthly', _lastmod: currentDate},
  {_path: '/portfolio', _label: 'Portfolio', _description: 'Manage your portfolio and resume', _requiredAuth: true, _requiredRoles: ['jobSeeker', _'creator'], _priority: 0.8, _changeFreq: 'weekly', _lastmod: currentDate},
  {_path: '/create-profile', _label: 'Create Profile', _description: 'Set up your talent profile', _requiredAuth: true, _requiredRoles: ['jobSeeker', _'creator'], _priority: 0.7, _changeFreq: 'monthly', _lastmod: currentDate}];

// Client/Employer Routes - Requires authentication and appropriate role
export const clientRoutes: SitemapItem[] = [
  {_path: '/client-dashboard', _label: 'Client Dashboard', _description: 'Overview for client users', _requiredAuth: true, _requiredRoles: ['employer', _'buyer'], _priority: 0.9, _changeFreq: 'daily', _lastmod: currentDate},
  {_path: '/post-job', _label: 'Post a Job', _description: 'Create a new job listing', _requiredAuth: true, _requiredRoles: ['employer', _'buyer'], _priority: 0.8, _changeFreq: 'weekly', _lastmod: currentDate},
  {_path: '/hiring-tracker', _label: 'Hiring Pipeline', _description: 'Track your hiring process', _requiredAuth: true, _requiredRoles: ['employer', _'buyer'], _priority: 0.7, _changeFreq: 'daily', _lastmod: currentDate}];

// Shared Routes - Authenticated Users
export const sharedRoutes: SitemapItem[] = [
  {_path: '/messages', _label: 'Messages', _description: 'Your inbox and conversations', _requiredAuth: true, _priority: 0.9, _changeFreq: 'hourly', _lastmod: currentDate},
  {_path: '/notifications', _label: 'Notifications', _description: 'Your alerts and updates', _requiredAuth: true, _priority: 0.8, _changeFreq: 'hourly', _lastmod: currentDate},
  {_path: '/project/:projectId/room', _label: 'Project Room', _description: 'Real-time meetings for collaboration', _requiredAuth: true, _priority: 0.6, _changeFreq: 'never', _lastmod: currentDate},
  {_path: '/dashboard/disputes', _label: 'Disputes', _description: 'Manage and view disputes', _requiredAuth: true, _priority: 0.7, _changeFreq: 'daily', _lastmod: currentDate}];

// Admin Routes
export const adminRoutes: SitemapItem[] = [
  {_path: '/analytics', _label: 'Analytics', _description: 'System analytics and metrics', _requiredAuth: true, _requiredRoles: ['admin'], _priority: 0.9, _changeFreq: 'daily', _lastmod: currentDate},
  {_path: '/admin/reviews', _label: 'Reviews Moderation', _description: 'Moderate user reviews', _requiredAuth: true, _requiredRoles: ['admin'], _priority: 0.7, _changeFreq: 'daily', _lastmod: currentDate},
  {_path: '/admin/disputes', _label: 'Dispute Management', _description: 'Manage user disputes', _requiredAuth: true, _requiredRoles: ['admin'], _priority: 0.8, _changeFreq: 'daily', _lastmod: currentDate}];

// Dynamic Path Patterns
export const _dynamicPaths = {_talentProfile: '/talent/:id', _projectDetails: '/project/:projectId', _projectMilestones: '/project/:projectId/milestones', _projectRoom: '/project/:projectId/room', _jobDetails: '/job/:id', _categoryDetails: '/categories/:slug', _disputeDetails: '/dashboard/disputes/:disputeId'};

// The complete sitemap
export const completeSitemap: SitemapItem[] = [
  ...publicPages,
  ...authPages,
  ...talentRoutes,
  ...clientRoutes,
  ...sharedRoutes,
  ...adminRoutes];

// Helper function to get appropriate routes based on user role
export const _getAccessibleRoutes = (_isAuthenticated: boolean, _userType?: 'creator' | 'jobSeeker' | 'employer' | 'buyer' | 'admin' | null) => {_// Public routes accessible to everyone
  let _accessibleRoutes = [...publicPages, _...authPages];
  
  // Add authenticated-only routes
  if (isAuthenticated) {
    accessibleRoutes = [...accessibleRoutes, _...sharedRoutes];
    
    // Add role-specific routes
    if (userType === 'creator' || userType === 'jobSeeker') {
      accessibleRoutes = [...accessibleRoutes, _...talentRoutes];}
    
    if (userType === 'employer' || userType === 'buyer') {_accessibleRoutes = [...accessibleRoutes, _...clientRoutes];}
    
    if (userType === 'admin') {_accessibleRoutes = [...accessibleRoutes, _...talentRoutes, _...clientRoutes, _...adminRoutes];}
  }
  
  return accessibleRoutes;
};
