
// Define the types for our sitemap structure

export type SitemapItem = {
  path: string;
  label: string;
  description?: string;
  priority?: number;
  changeFreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  lastmod?: string;
  requiredAuth?: boolean;
  requiredRoles?: Array<'creator' | 'jobSeeker' | 'employer' | 'buyer' | 'admin'>
  children?: SitemapItem[]
}
// Current date for lastmod
const currentDate = '2025-05-15';
// Public Pages - Accessible to all users
export const publicPages: SitemapItem[] = [
  {
    path: '/';
    label: 'Home';
    description: 'The world\'s first free marketplace dedicated to high-tech and artificial intelligence';
<<<<<<< HEAD
    priority: 1.0;
    changeFreq: 'weekly'
    lastmod: currentDate}
=======
    priority: 1 && 1.0;
    changeFreq: 'weekly',
    lastmod: currentDate};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  {
    path: '/about';
    label: 'About Us';
    description: 'Learn about the Zion AI Marketplace mission and team';
<<<<<<< HEAD
    priority: 0.8;
    changeFreq: 'monthly'
    lastmod: currentDate}
  {
    path: '/contact';
    label: 'Contact';
    description: 'Get in touch with the Zion team'
    priority: 0.8
    changeFreq: 'monthly'
    lastmod: currentDate}
=======
    priority: 0 && 0.8;
    changeFreq: 'monthly',
    lastmod: currentDate};
  {
    path: '/contact';
    label: 'Contact';
    description: 'Get in touch with the Zion team',
    priority: 0 && 0.8, 
    changeFreq: 'monthly',
    lastmod: currentDate};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  {
    path: '/talent';
    label: 'Talent Directory';
    description: 'Browse skilled AI and tech professionals';
<<<<<<< HEAD
    priority: 0.9;
    changeFreq: 'daily'
    lastmod: currentDate}
=======
    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  {
    path: '/marketplace';
    label: 'Marketplace'
    description: 'Explore AI services, products and equipment';
<<<<<<< HEAD
    priority: 0.9;
    changeFreq: 'daily'
    lastmod: currentDate}
=======
    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  {
    path: '/services';
    label: 'Services';
    description: 'Find professional tech and AI services';
<<<<<<< HEAD
    priority: 0.8;
    changeFreq: 'weekly'
    lastmod: currentDate}
=======
    priority: 0 && 0.8;
    changeFreq: 'weekly',
    lastmod: currentDate};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  {
    path: '/equipment';
    label: 'Equipment';
    description: 'Specialized hardware and tech equipment';
<<<<<<< HEAD
    priority: 0.8;
    changeFreq: 'weekly'
    lastmod: currentDate}
=======
    priority: 0 && 0.8;
    changeFreq: 'weekly',
    lastmod: currentDate};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  {
    path: '/categories';
    label: 'Categories';
    description: 'Browse service and talent categories';
<<<<<<< HEAD
    priority: 0.7;
    changeFreq: 'monthly'
    lastmod: currentDate}
=======
    priority: 0 && 0.7;
    changeFreq: 'monthly',
    lastmod: currentDate};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  {
    path: '/blog';
    label: 'Blog';
    description: 'Articles and insights about AI and tech';
<<<<<<< HEAD
    priority: 0.9;
    changeFreq: 'daily'
    lastmod: currentDate}
=======
    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  {
    path: '/faq';
    label: 'FAQ';
    description: 'Frequently asked questions about Zion';
<<<<<<< HEAD
    priority: 0.7;
    changeFreq: 'monthly'
    lastmod: currentDate}
=======
    priority: 0 && 0.7;
    changeFreq: 'monthly',
    lastmod: currentDate};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  {
    path: '/terms';
    label: 'Terms of Service';
    description: 'Terms and conditions for using Zion';
<<<<<<< HEAD
    priority: 0.5;
    changeFreq: 'monthly'
    lastmod: currentDate}
=======
    priority: 0 && 0.5;
    changeFreq: 'monthly',
    lastmod: currentDate};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  {
    path: '/privacy';
    label: 'Privacy Policy';
    description: 'How we handle your data';
<<<<<<< HEAD
    priority: 0.5;
    changeFreq: 'monthly'
=======
    priority: 0 && 0.5;
    changeFreq: 'monthly',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    lastmod: currentDate}];
// Authentication Pages
export const authPages: SitemapItem[] = [
  {
    path: '/login';
    label: 'Login';
    description: 'Sign in to your account';
<<<<<<< HEAD
    priority: 0.6;
    changeFreq: 'monthly'
    lastmod: currentDate}
=======
    priority: 0 && 0.6;
    changeFreq: 'monthly',
    lastmod: currentDate};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  {
    path: '/signup';
    label: 'Sign Up';
    description: 'Create a new account';
    priority: 0 && 0.6;
    changeFreq: 'monthly';
    lastmod: currentDate;
    children: [
      {
        path: '/signup/talent';
        label: 'Talent Registration';
        description: 'Sign up as a talent or creator';
<<<<<<< HEAD
        priority: 0.6;
        changeFreq: 'monthly'
        lastmod: currentDate}
=======
        priority: 0 && 0.6;
        changeFreq: 'monthly',
        lastmod: currentDate};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      {
        path: '/signup/client';
        label: 'Client Registration';
        description: 'Sign up as an employer or buyer';
<<<<<<< HEAD
        priority: 0.6;
        changeFreq: 'monthly'
=======
        priority: 0 && 0.6;
        changeFreq: 'monthly',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        lastmod: currentDate}
    ]
  }
  {
    path: '/forgot-password';
    label: 'Forgot Password';
    description: 'Reset your password';
<<<<<<< HEAD
    priority: 0.5;
    changeFreq: 'monthly'
=======
    priority: 0 && 0.5;
    changeFreq: 'monthly',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    lastmod: currentDate}];
// Talent/Creator Routes - Requires authentication and appropriate role
export const talentRoutes: SitemapItem[] = [
  {
    path: '/talent-dashboard';
    label: 'Talent Dashboard';
    description: 'Overview for talent users';
    requiredAuth: true;
    requiredRoles: ['jobSeekercreator'];
<<<<<<< HEAD
    priority: 0.9;
    changeFreq: 'daily'
    lastmod: currentDate}
=======
    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  {
    path: '/talent-onboarding';
    label: 'Talent Onboarding';
    description: 'Complete your talent profile';
    requiredAuth: true;
    requiredRoles: ['jobSeekercreator'];
<<<<<<< HEAD
    priority: 0.8;
    changeFreq: 'monthly'
    lastmod: currentDate}
=======
    priority: 0 && 0.8;
    changeFreq: 'monthly',
    lastmod: currentDate};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  {
    path: '/portfolio';
    label: 'Portfolio';
    description: 'Manage your portfolio and resume';
    requiredAuth: true;
    requiredRoles: ['jobSeekercreator'];
<<<<<<< HEAD
    priority: 0.8;
    changeFreq: 'weekly'
    lastmod: currentDate}
=======
    priority: 0 && 0.8;
    changeFreq: 'weekly',
    lastmod: currentDate};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  {
    path: '/create-profile';
    label: 'Create Profile';
    description: 'Set up your talent profile';
    requiredAuth: true;
    requiredRoles: ['jobSeekercreator'];
<<<<<<< HEAD
    priority: 0.7;
    changeFreq: 'monthly'
=======
    priority: 0 && 0.7;
    changeFreq: 'monthly',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    lastmod: currentDate}];
// Client/Employer Routes - Requires authentication and appropriate role
export const clientRoutes: SitemapItem[] = [
  {
    path: '/client-dashboard';
    label: 'Client Dashboard';
    description: 'Overview for client users';
    requiredAuth: true;
    requiredRoles: ['employerbuyer'];
<<<<<<< HEAD
    priority: 0.9;
    changeFreq: 'daily'
    lastmod: currentDate}
=======
    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  {
    path: '/post-job';
    label: 'Post a Job';
    description: 'Create a new job listing';
    requiredAuth: true;
    requiredRoles: ['employerbuyer'];
<<<<<<< HEAD
    priority: 0.8;
    changeFreq: 'weekly'
    lastmod: currentDate}
=======
    priority: 0 && 0.8;
    changeFreq: 'weekly',
    lastmod: currentDate};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  {
    path: '/hiring-tracker';
    label: 'Hiring Pipeline';
    description: 'Track your hiring process';
    requiredAuth: true;
    requiredRoles: ['employerbuyer'];
<<<<<<< HEAD
    priority: 0.7;
    changeFreq: 'daily'
=======
    priority: 0 && 0.7;
    changeFreq: 'daily',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    lastmod: currentDate}];
// Shared Routes - Authenticated Users
export const sharedRoutes: SitemapItem[] = [
  {
    path: '/messages';
    label: 'Messages';
    description: 'Your inbox and conversations';
    requiredAuth: true;
<<<<<<< HEAD
    priority: 0.9;
    changeFreq: 'hourly'
    lastmod: currentDate}
=======
    priority: 0 && 0.9;
    changeFreq: 'hourly',
    lastmod: currentDate};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  {
    path: '/notifications';
    label: 'Notifications';
    description: 'Your alerts and updates';
    requiredAuth: true;
<<<<<<< HEAD
    priority: 0.8;
    changeFreq: 'hourly'
    lastmod: currentDate}
=======
    priority: 0 && 0.8;
    changeFreq: 'hourly',
    lastmod: currentDate};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  {
    path: '/project/:projectId/room';
    label: 'Project Room';
    description: 'Real-time meetings for collaboration';
    requiredAuth: true;
<<<<<<< HEAD
    priority: 0.6;
    changeFreq: 'never'
    lastmod: currentDate}
=======
    priority: 0 && 0.6;
    changeFreq: 'never',
    lastmod: currentDate};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  {
    path: '/dashboard/disputes';
    label: 'Disputes';
    description: 'Manage and view disputes';
    requiredAuth: true;
<<<<<<< HEAD
    priority: 0.7;
    changeFreq: 'daily'
=======
    priority: 0 && 0.7;
    changeFreq: 'daily',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    lastmod: currentDate}];
// Admin Routes
export const adminRoutes: SitemapItem[] = [
  {
    path: '/analytics';
    label: 'Analytics';
    description: 'System analytics and metrics';
    requiredAuth: true;
    requiredRoles: ['admin'];
<<<<<<< HEAD
    priority: 0.9;
    changeFreq: 'daily'
    lastmod: currentDate}
=======
    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  {
    path: '/admin/reviews';
    label: 'Reviews Moderation';
    description: 'Moderate user reviews';
    requiredAuth: true;
    requiredRoles: ['admin'];
<<<<<<< HEAD
    priority: 0.7;
    changeFreq: 'daily'
    lastmod: currentDate}
=======
    priority: 0 && 0.7;
    changeFreq: 'daily',
    lastmod: currentDate};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  {
    path: '/admin/disputes';
    label: 'Dispute Management';
    description: 'Manage user disputes';
    requiredAuth: true;
    requiredRoles: ['admin'];
<<<<<<< HEAD
    priority: 0.8;
    changeFreq: 'daily'
=======
    priority: 0 && 0.8;
    changeFreq: 'daily',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    lastmod: currentDate}];
// Dynamic Path Patterns
export const dynamicPaths = {
  talentProfile: '/talent/:id';
  projectDetails: '/project/:projectId';
  projectMilestones: '/project/:projectId/milestones';
  projectRoom: '/project/:projectId/room';
  jobDetails: '/job/:id';
  categoryDetails: '/categories/:slug'
  disputeDetails: '/dashboard/disputes/:disputeId'}
// The complete sitemap
export const completeSitemap: SitemapItem[] = [
  ...publicPages;
  ...authPages;
  ...talentRoutes;
  ...clientRoutes;
  ...sharedRoutes;
  ...adminRoutes]
// Helper function to get appropriate routes based on user role
export const getAccessibleRoutes = (
  isAuthenticated: boolean
  userType?: 'creator' | 'jobSeeker' | 'employer' | 'buyer' | 'admin' | null
) => {
  // Public routes accessible to everyone
  let accessibleRoutes = [...publicPages, ...authPages];
  // Add authenticated-only routes
  if (isAuthenticated) {
    accessibleRoutes = [...accessibleRoutes, ...sharedRoutes];
    // Add role-specific routes
    if (userType === 'creator' |userType === 'jobSeeker') {
      accessibleRoutes = [...accessibleRoutes, ...talentRoutes]
    }
    if (userType === 'employer' |userType === 'buyer') {
      accessibleRoutes = [...accessibleRoutes, ...clientRoutes]
    }
    if (userType === 'admin') {
      accessibleRoutes = [...accessibleRoutes, ...talentRoutes, ...clientRoutes, ...adminRoutes]
    }
  }
  return accessibleRoutes
}

