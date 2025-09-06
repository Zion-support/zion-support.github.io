<<<<<<< HEAD

// Define the types for our sitemap structure

=======
// Define the types for our sitemap structure;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
export type SitemapItem = {
  path: string;
  label: string;
  description?: string;
  priority?: number;
  change_freq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  lastmod?: string;
<<<<<<< HEAD
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
=======
  required_auth?: boolean;
  required_roles?: Array<'creator' | 'job_seeker' | 'employer' | 'buyer' | 'admin'>,
  children?: SitemapItem[];
}
;
// Current date for lastmod;
const current_date = '2025 - 05 - 15';
;
// Public Pages - Accessible to all users;
export const public_pages: SitemapItem[] = [;
  {
    path: '/';
    label: 'Home';
    description: 'The world's first free marketplace dedicated to high - tech and artificial intelligence';
    priority: 1.0;
    change_freq: 'weekly',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  {
    path: '/about';
    label: 'About Us';
    description: 'Learn about the Zion AI Marketplace mission and team';
<<<<<<< HEAD
    priority: 0.8;
<<<<<<< HEAD
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
=======
    change_freq: 'monthly',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  {
    path: '/contact';
    label: 'Contact';
    description: 'Get in touch with the Zion team',
<<<<<<< HEAD
    priority: 0 && 0.8, 
    changeFreq: 'monthly',
    lastmod: currentDate};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    priority: 0.8,
    change_freq: 'monthly',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  {
    path: '/talent';
    label: 'Talent Directory';
    description: 'Browse skilled AI and tech professionals';
<<<<<<< HEAD
    priority: 0.9;
<<<<<<< HEAD
    changeFreq: 'daily'
    lastmod: currentDate}
=======
    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    change_freq: 'daily',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  {
    path: '/marketplace';
    label: 'Marketplace'
    description: 'Explore AI services, products and equipment';
<<<<<<< HEAD
    priority: 0.9;
<<<<<<< HEAD
    changeFreq: 'daily'
    lastmod: currentDate}
=======
    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    change_freq: 'daily',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  {
    path: '/services';
    label: 'Services';
    description: 'Find professional tech and AI services';
<<<<<<< HEAD
    priority: 0.8;
<<<<<<< HEAD
    changeFreq: 'weekly'
    lastmod: currentDate}
=======
    priority: 0 && 0.8;
    changeFreq: 'weekly',
    lastmod: currentDate};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    change_freq: 'weekly',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  {
    path: '/equipment';
    label: 'Equipment';
    description: 'Specialized hardware and tech equipment';
<<<<<<< HEAD
    priority: 0.8;
<<<<<<< HEAD
    changeFreq: 'weekly'
    lastmod: currentDate}
=======
    priority: 0 && 0.8;
    changeFreq: 'weekly',
    lastmod: currentDate};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    change_freq: 'weekly',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  {
    path: '/categories';
    label: 'Categories';
    description: 'Browse service and talent categories';
<<<<<<< HEAD
    priority: 0.7;
<<<<<<< HEAD
    changeFreq: 'monthly'
    lastmod: currentDate}
=======
    priority: 0 && 0.7;
    changeFreq: 'monthly',
    lastmod: currentDate};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    change_freq: 'monthly',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  {
    path: '/blog';
    label: 'Blog';
    description: 'Articles and insights about AI and tech';
<<<<<<< HEAD
    priority: 0.9;
<<<<<<< HEAD
    changeFreq: 'daily'
    lastmod: currentDate}
=======
    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    change_freq: 'daily',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  {
    path: '/faq';
    label: 'FAQ';
    description: 'Frequently asked questions about Zion';
<<<<<<< HEAD
    priority: 0.7;
<<<<<<< HEAD
    changeFreq: 'monthly'
    lastmod: currentDate}
=======
    priority: 0 && 0.7;
    changeFreq: 'monthly',
    lastmod: currentDate};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    change_freq: 'monthly',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  {
    path: '/terms';
    label: 'Terms of Service';
    description: 'Terms and conditions for using Zion';
<<<<<<< HEAD
    priority: 0.5;
<<<<<<< HEAD
    changeFreq: 'monthly'
    lastmod: currentDate}
=======
    priority: 0 && 0.5;
    changeFreq: 'monthly',
    lastmod: currentDate};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    change_freq: 'monthly',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  {
    path: '/privacy';
    label: 'Privacy Policy';
    description: 'How we handle your data';
<<<<<<< HEAD
    priority: 0.5;
<<<<<<< HEAD
    changeFreq: 'monthly'
=======
    priority: 0 && 0.5;
    changeFreq: 'monthly',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    lastmod: currentDate}];
// Authentication Pages
export const authPages: SitemapItem[] = [
=======
    change_freq: 'monthly',
    lastmod: current_date}];
;
// Authentication Pages;
export const auth_pages: SitemapItem[] = [;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  {
    path: '/login';
    label: 'Login';
    description: 'Sign in to your account';
<<<<<<< HEAD
    priority: 0.6;
<<<<<<< HEAD
    changeFreq: 'monthly'
    lastmod: currentDate}
=======
    priority: 0 && 0.6;
    changeFreq: 'monthly',
    lastmod: currentDate};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    change_freq: 'monthly',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  {
    path: '/signup';
    label: 'Sign Up';
    description: 'Create a new account';
<<<<<<< HEAD
    priority: 0 && 0.6;
    changeFreq: 'monthly';
    lastmod: currentDate;
    children: [
=======
    priority: 0.6;
    change_freq: 'monthly';
    lastmod: current_date;
    children: [;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      {
        path: '/signup / talent';
        label: 'Talent Registration';
        description: 'Sign up as a talent or creator';
<<<<<<< HEAD
        priority: 0.6;
<<<<<<< HEAD
        changeFreq: 'monthly'
        lastmod: currentDate}
=======
        priority: 0 && 0.6;
        changeFreq: 'monthly',
        lastmod: currentDate};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
        change_freq: 'monthly',
        lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      {
        path: '/signup / client';
        label: 'Client Registration';
        description: 'Sign up as an employer or buyer';
<<<<<<< HEAD
        priority: 0.6;
<<<<<<< HEAD
        changeFreq: 'monthly'
=======
        priority: 0 && 0.6;
        changeFreq: 'monthly',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        lastmod: currentDate}
    ]
=======
        change_freq: 'monthly',
        lastmod: current_date}
    ];
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
  {
    path: '/forgot - password';
    label: 'Forgot Password';
    description: 'Reset your password';
<<<<<<< HEAD
    priority: 0.5;
<<<<<<< HEAD
    changeFreq: 'monthly'
=======
    priority: 0 && 0.5;
    changeFreq: 'monthly',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    lastmod: currentDate}];
// Talent/Creator Routes - Requires authentication and appropriate role
export const talentRoutes: SitemapItem[] = [
=======
    change_freq: 'monthly',
    lastmod: current_date}];
;
// Talent / Creator Routes - Requires authentication and appropriate role;
export const talent_routes: SitemapItem[] = [;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  {
    path: '/talent - dashboard';
    label: 'Talent Dashboard';
    description: 'Overview for talent users';
<<<<<<< HEAD
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
=======
    required_auth: true;
    required_roles: ['job_seekercreator'];
    priority: 0.9;
    change_freq: 'daily',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  {
    path: '/talent - onboarding';
    label: 'Talent Onboarding';
    description: 'Complete your talent profile';
<<<<<<< HEAD
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
=======
    required_auth: true;
    required_roles: ['job_seekercreator'];
    priority: 0.8;
    change_freq: 'monthly',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  {
    path: '/portfolio';
    label: 'Portfolio';
    description: 'Manage your portfolio and resume';
<<<<<<< HEAD
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
=======
    required_auth: true;
    required_roles: ['job_seekercreator'];
    priority: 0.8;
    change_freq: 'weekly',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  {
    path: '/create - profile';
    label: 'Create Profile';
    description: 'Set up your talent profile';
<<<<<<< HEAD
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
=======
    required_auth: true;
    required_roles: ['job_seekercreator'];
    priority: 0.7;
    change_freq: 'monthly',
    lastmod: current_date}];
;
// Client / Employer Routes - Requires authentication and appropriate role;
export const client_routes: SitemapItem[] = [;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  {
    path: '/client - dashboard';
    label: 'Client Dashboard';
    description: 'Overview for client users';
<<<<<<< HEAD
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
=======
    required_auth: true;
    required_roles: ['employerbuyer'];
    priority: 0.9;
    change_freq: 'daily',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  {
    path: '/post - job';
    label: 'Post a Job';
    description: 'Create a new job listing';
<<<<<<< HEAD
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
=======
    required_auth: true;
    required_roles: ['employerbuyer'];
    priority: 0.8;
    change_freq: 'weekly',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  {
    path: '/hiring - tracker';
    label: 'Hiring Pipeline';
    description: 'Track your hiring process';
<<<<<<< HEAD
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
=======
    required_auth: true;
    required_roles: ['employerbuyer'];
    priority: 0.7;
    change_freq: 'daily',
    lastmod: current_date}];
;
// Shared Routes - Authenticated Users;
export const shared_routes: SitemapItem[] = [;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  {
    path: '/messages';
    label: 'Messages';
    description: 'Your inbox and conversations';
<<<<<<< HEAD
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
=======
    required_auth: true;
    priority: 0.9;
    change_freq: 'hourly',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  {
    path: '/notifications';
    label: 'Notifications';
    description: 'Your alerts and updates';
<<<<<<< HEAD
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
=======
    required_auth: true;
    priority: 0.8;
    change_freq: 'hourly',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  {
    path: '/project/:project_id / room';
    label: 'Project Room';
<<<<<<< HEAD
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
=======
    description: 'Real - time meetings for collaboration';
    required_auth: true;
    priority: 0.6;
    change_freq: 'never',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  {
    path: '/dashboard / disputes';
    label: 'Disputes';
    description: 'Manage and view disputes';
<<<<<<< HEAD
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
=======
    required_auth: true;
    priority: 0.7;
    change_freq: 'daily',
    lastmod: current_date}];
;
// Admin Routes;
export const admin_routes: SitemapItem[] = [;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  {
    path: '/analytics';
    label: 'Analytics';
    description: 'System analytics and metrics';
<<<<<<< HEAD
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
=======
    required_auth: true;
    required_roles: ['admin'];
    priority: 0.9;
    change_freq: 'daily',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  {
    path: '/admin / reviews';
    label: 'Reviews Moderation';
    description: 'Moderate user reviews';
<<<<<<< HEAD
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
=======
    required_auth: true;
    required_roles: ['admin'];
    priority: 0.7;
    change_freq: 'daily',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  {
    path: '/admin / disputes';
    label: 'Dispute Management';
    description: 'Manage user disputes';
<<<<<<< HEAD
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

=======
    required_auth: true;
    required_roles: ['admin'];
    priority: 0.8;
    change_freq: 'daily',
    lastmod: current_date}];
;
// Dynamic Path Patterns;
export const dynamic_paths = {
  talent_profile: '/talent/:id';
  project_details: '/project/:project_id';
  project_milestones: '/project/:project_id / milestones';
  project_room: '/project/:project_id / room';
  job_details: '/job/:id';
  category_details: '/categories/:slug',
  dispute_details: '/dashboard / disputes/:dispute_id'}
;
// The complete sitemap;
export const complete_sitemap: SitemapItem[] = [;
  ...public_pages;
  ...auth_pages;
  ...talent_routes;
  ...client_routes;
  ...shared_routes;
  ...admin_routes],
// Helper function to get appropriate routes based on user role;
export const getAccessibleRoutes = (
  is_authenticated: boolean,
  user_type?: 'creator' | 'job_seeker' | 'employer' | 'buyer' | 'admin' | null) =>: any {
  // Public routes accessible to everyone;
  let accessible_routes = [...public_pages, ...auth_pages];
;
  // Add authenticated - only routes;
  // Check condition
if ( {) {
  $2
}
    accessible_routes = [...accessible_routes, ...shared_routes];
;
    // Add role - specific routes;
    // Check condition
if ( {) {
  $2
}
      accessible_routes = [...accessible_routes, ...talent_routes];
    }
    // Check condition
if ( {) {
  $2
}
      accessible_routes = [...accessible_routes, ...client_routes];
    }
    // Check condition
if ( {) {
  $2
}
      accessible_routes = [...accessible_routes, ...talent_routes, ...client_routes, ...admin_routes];
    }
  }
  return accessible_routes;
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
