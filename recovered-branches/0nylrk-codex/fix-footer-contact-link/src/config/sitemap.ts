
// Define the types for our sitemap structure
<<<<<<< HEAD
export type SitemapItem = {
  path: string,
  label: string,
  description?: string,
  priority?: number,
  changeFreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never',
  lastmod?: string,
  requiredAuth?: boolean,
  requiredRoles?: Array<'creator' | 'jobSeeker' | 'employer' | 'buyer' | 'admin'>,
  children?: SitemapItem[]
},

// Current date for lastmod
const currentDate = '2025-05-15',

// Public Pages - Accessible to all users
export const publicPages: SitemapItem[] = [
  {
    path: '/',
    label: 'Home',
    description: 'The world\'s first free marketplace dedicated to high-tech and artificial intelligence',
    priority: 1.0,
    changeFreq: 'weekly',
    lastmod: currentDate},
  {
    path: '/about',
    label: 'About Us',
    description: 'Learn about the Zion AI Marketplace mission and team',
    priority: 0.8,
    changeFreq: 'monthly',
    lastmod: currentDate},
  {
    path: '/contact',
    label: 'Contact',
    description: 'Get in touch with the Zion team',
    priority: 0.8,
    changeFreq: 'monthly',
    lastmod: currentDate},
  {
    path: '/talent',
    label: 'Talent Directory',
    description: 'Browse skilled AI and tech professionals',
    priority: 0.9,
    changeFreq: 'daily',
    lastmod: currentDate},
  {
    path: '/marketplace',
    label: 'Marketplace',
    description: 'Explore AI services, products and equipment',
    priority: 0.9,
    changeFreq: 'daily',
    lastmod: currentDate},
  {
    path: '/services',
    label: 'Services',
    description: 'Find professional tech and AI services',
    priority: 0.8,
    changeFreq: 'weekly',
    lastmod: currentDate},
  {
    path: '/equipment',
    label: 'Equipment',
    description: 'Specialized hardware and tech equipment',
    priority: 0.8,
    changeFreq: 'weekly',
    lastmod: currentDate},
  {
    path: '/categories',
    label: 'Categories',
    description: 'Browse service and talent categories',
    priority: 0.7,
    changeFreq: 'monthly',
    lastmod: currentDate},
  {
    path: '/blog',
    label: 'Blog',
    description: 'Articles and insights about AI and tech',
    priority: 0.9,
    changeFreq: 'daily',
    lastmod: currentDate},
  {
    path: '/faq',
    label: 'FAQ',
    description: 'Frequently asked questions about Zion',
    priority: 0.7,
    changeFreq: 'monthly',
    lastmod: currentDate},
  {
    path: '/terms',
    label: 'Terms of Service',
    description: 'Terms and conditions for using Zion',
    priority: 0.5,
    changeFreq: 'monthly',
    lastmod: currentDate},
  {
    path: '/privacy',
    label: 'Privacy Policy',
    description: 'How we handle your data',
    priority: 0.5,
    changeFreq: 'monthly',
    lastmod: currentDate}],
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

// Authentication Pages
export const authPages: SitemapItem[] = [
  {_path: '/login', _label: 'Login', _description: 'Sign in to your account', _priority: 0.6, _changeFreq: 'monthly', _lastmod: currentDate},
  {_path: '/signup', _label: 'Sign Up', _description: 'Create a new account', _priority: 0.6, _changeFreq: 'monthly', _lastmod: currentDate, _children: [
      {
        path: '/signup/talent', _label: 'Talent Registration', _description: 'Sign up as a talent or creator', _priority: 0.6, _changeFreq: 'monthly', _lastmod: currentDate},
      {_path: '/signup/client', _label: 'Client Registration', _description: 'Sign up as an employer or buyer', _priority: 0.6, _changeFreq: 'monthly', _lastmod: currentDate}
    ]
  },
<<<<<<< HEAD
  {
    path: '/forgot-password',
    label: 'Forgot Password',
    description: 'Reset your password',
    priority: 0.5,
    changeFreq: 'monthly',
    lastmod: currentDate}],

// Talent/Creator Routes - Requires authentication and appropriate role
export const talentRoutes: SitemapItem[] = [
  {
    path: '/talent-dashboard',
    label: 'Talent Dashboard',
    description: 'Overview for talent users',
    requiredAuth: true,
    requiredRoles: ['jobSeekercreator'],
    priority: 0.9,
    changeFreq: 'daily',
    lastmod: currentDate},
  {
    path: '/talent-onboarding',
    label: 'Talent Onboarding',
    description: 'Complete your talent profile',
    requiredAuth: true,
    requiredRoles: ['jobSeekercreator'],
    priority: 0.8,
    changeFreq: 'monthly',
    lastmod: currentDate},
  {
    path: '/portfolio',
    label: 'Portfolio',
    description: 'Manage your portfolio and resume',
    requiredAuth: true,
    requiredRoles: ['jobSeekercreator'],
    priority: 0.8,
    changeFreq: 'weekly',
    lastmod: currentDate},
  {
    path: '/create-profile',
    label: 'Create Profile',
    description: 'Set up your talent profile',
    requiredAuth: true,
    requiredRoles: ['jobSeekercreator'],
    priority: 0.7,
    changeFreq: 'monthly',
    lastmod: currentDate}],

// Client/Employer Routes - Requires authentication and appropriate role
export const clientRoutes: SitemapItem[] = [
  {
    path: '/client-dashboard',
    label: 'Client Dashboard',
    description: 'Overview for client users',
    requiredAuth: true,
    requiredRoles: ['employerbuyer'],
    priority: 0.9,
    changeFreq: 'daily',
    lastmod: currentDate},
  {
    path: '/post-job',
    label: 'Post a Job',
    description: 'Create a new job listing',
    requiredAuth: true,
    requiredRoles: ['employerbuyer'],
    priority: 0.8,
    changeFreq: 'weekly',
    lastmod: currentDate},
  {
    path: '/hiring-tracker',
    label: 'Hiring Pipeline',
    description: 'Track your hiring process',
    requiredAuth: true,
    requiredRoles: ['employerbuyer'],
    priority: 0.7,
    changeFreq: 'daily',
    lastmod: currentDate}],

// Shared Routes - Authenticated Users
export const sharedRoutes: SitemapItem[] = [
  {
    path: '/messages',
    label: 'Messages',
    description: 'Your inbox and conversations',
    requiredAuth: true,
    priority: 0.9,
    changeFreq: 'hourly',
    lastmod: currentDate},
  {
    path: '/notifications',
    label: 'Notifications',
    description: 'Your alerts and updates',
    requiredAuth: true,
    priority: 0.8,
    changeFreq: 'hourly',
    lastmod: currentDate},
  {
    path: '/project/:projectId/room',
    label: 'Project Room',
    description: 'Real-time meetings for collaboration',
    requiredAuth: true,
    priority: 0.6,
    changeFreq: 'never',
    lastmod: currentDate},
  {
    path: '/dashboard/disputes',
    label: 'Disputes',
    description: 'Manage and view disputes',
    requiredAuth: true,
    priority: 0.7,
    changeFreq: 'daily',
    lastmod: currentDate}],

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
    lastmod: currentDate},
  {
    path: '/admin/reviews',
    label: 'Reviews Moderation',
    description: 'Moderate user reviews',
    requiredAuth: true,
    requiredRoles: ['admin'],
    priority: 0.7,
    changeFreq: 'daily',
    lastmod: currentDate},
  {
    path: '/admin/disputes',
    label: 'Dispute Management',
    description: 'Manage user disputes',
    requiredAuth: true,
    requiredRoles: ['admin'],
    priority: 0.8,
    changeFreq: 'daily',
    lastmod: currentDate}],

// Dynamic Path Patterns
export const dynamicPaths = {
  talentProfile: '/talent/:id',
  projectDetails: '/project/:projectId',
  projectMilestones: '/project/:projectId/milestones',
  projectRoom: '/project/:projectId/room',
  jobDetails: '/job/:id',
  categoryDetails: '/categories/:slug',
  disputeDetails: '/dashboard/disputes/:disputeId'},
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

// The complete sitemap
export const completeSitemap: SitemapItem[] = [
  ...publicPages,
  ...authPages,
  ...talentRoutes,
  ...clientRoutes,
  ...sharedRoutes,
  ...adminRoutes],

// Helper function to get appropriate routes based on user role
<<<<<<< HEAD
export const getAccessibleRoutes = (
  isAuthenticated: boolean,
  userType?: 'creator' | 'jobSeeker' | 'employer' | 'buyer' | 'admin' | null
) => {
  // Public routes accessible to everyone
  let accessibleRoutes = [...publicPages, ...authPages],
  
  // Add authenticated-only routes
  if (isAuthenticated) {
    accessibleRoutes = [...accessibleRoutes, ...sharedRoutes],
    
    // Add role-specific routes
    if (userType === 'creator' || userType === 'jobSeeker') {
      accessibleRoutes = [...accessibleRoutes, ...talentRoutes]
    }
    
    if (userType === 'employer' || userType === 'buyer') {
      accessibleRoutes = [...accessibleRoutes, ...clientRoutes]
    }
    
    if (userType === 'admin') {
      accessibleRoutes = [...accessibleRoutes, ...talentRoutes, ...clientRoutes, ...adminRoutes]
    }
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
  
  return accessibleRoutes
},
