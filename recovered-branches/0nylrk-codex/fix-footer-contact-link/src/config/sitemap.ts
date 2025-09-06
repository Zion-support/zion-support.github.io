
<<<<<<< HEAD
<<<<<<< HEAD
// Define the types for our sitemap structure
<<<<<<< HEAD

export type SitemapItem = {
=======
export type SitemapItem = {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
// Define the types for our sitemap structure;

export type SitemapItem = {
=======


export type SitemapItem = {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
  path: string;
  label: string;
  description?: string;
  priority?: number;
<<<<<<< HEAD
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
  {;
    path: '/';
    label: 'Home';
    description: 'The world\'s first free marketplace dedicated to high-tech and artificial intelligence';
    priority: 1.0;
    changeFreq: 'weekly'
    lastmod: currentDate}
=======
  change_freq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  lastmod?: string;

    priority: 1 && 1.0;
    changeFreq: 'weekly',
    lastmod: currentDate};

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
>>>>>>> main
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
=======
    change_freq: 'monthly',
    lastmod: current_date}

  {
    path: '/contact';
    label: 'Contact';
    description: 'Get in touch with the Zion team',

    priority: 0.8,
    change_freq: 'monthly',
    lastmod: current_date}

>>>>>>> main
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

=======
    change_freq: 'daily',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> main
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

=======
    change_freq: 'daily',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> main
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

=======
    change_freq: 'weekly',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> main
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

=======
    change_freq: 'weekly',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> main
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

=======
    change_freq: 'monthly',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> main
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

=======
    change_freq: 'daily',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> main
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

=======
    change_freq: 'monthly',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> main
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

=======
    change_freq: 'monthly',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> main
  {
    path: '/privacy';
    label: 'Privacy Policy';
    description: 'How we handle your data';
<<<<<<< HEAD
    priority: 0.5;
    changeFreq: 'monthly'
    lastmod: currentDate}];
// Authentication Pages
export const authPages: SitemapItem[] = [
  {;
    path: '/login';
    label: 'Login';
    description: 'Sign in to your account';
    priority: 0.6;
    changeFreq: 'monthly'
    lastmod: currentDate}
=======

    priority: 0 && 0.5;
    changeFreq: 'monthly',

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

    priority: 0 && 0.6;
    changeFreq: 'monthly',
    lastmod: currentDate};

=======
    change_freq: 'monthly',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> main
  {
    path: '/signup';
    label: 'Sign Up';
    description: 'Create a new account';
<<<<<<< HEAD
    priority: 0.6;
    changeFreq: 'monthly';
    lastmod: currentDate;
    children: [
      {
        path: '/signup/talent';
        label: 'Talent Registration';
        description: 'Sign up as a talent or creator';
        priority: 0.6;
        changeFreq: 'monthly'
        lastmod: currentDate}
      {
        path: '/signup/client';
        label: 'Client Registration';
        description: 'Sign up as an employer or buyer';
        priority: 0.6;
        changeFreq: 'monthly'
        lastmod: currentDate}
    ]
  }
  {
    path: '/forgot-password';
    label: 'Forgot Password';
    description: 'Reset your password';
    priority: 0.5;
    changeFreq: 'monthly'
    lastmod: currentDate}];
// Talent/Creator Routes - Requires authentication and appropriate role
export const talentRoutes: SitemapItem[] = [
  {;
    path: '/talent-dashboard';
    label: 'Talent Dashboard';
    description: 'Overview for talent users';
    requiredAuth: true;
    requiredRoles: ['jobSeekercreator'];
    priority: 0.9;
    changeFreq: 'daily'
    lastmod: currentDate}
  {
    path: '/talent-onboarding';
    label: 'Talent Onboarding';
    description: 'Complete your talent profile';
    requiredAuth: true;
    requiredRoles: ['jobSeekercreator'];
    priority: 0.8;
    changeFreq: 'monthly'
    lastmod: currentDate}
=======

    priority: 0.6;
    change_freq: 'monthly';
    lastmod: current_date;
    children: [;

      {
        path: '/signup / talent';
        label: 'Talent Registration';
        description: 'Sign up as a talent or creator';

        priority: 0 && 0.6;
        changeFreq: 'monthly',
        lastmod: currentDate};

=======
        change_freq: 'monthly',
        lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      {
        path: '/signup / client';
        label: 'Client Registration';
        description: 'Sign up as an employer or buyer';

        priority: 0 && 0.6;
        changeFreq: 'monthly',

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

    priority: 0 && 0.5;
    changeFreq: 'monthly',

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

    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};

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

    priority: 0 && 0.8;
    changeFreq: 'monthly',
    lastmod: currentDate};

=======
    required_auth: true;
    required_roles: ['job_seekercreator'];
    priority: 0.8;
    change_freq: 'monthly',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> main
  {
    path: '/portfolio';
    label: 'Portfolio';
    description: 'Manage your portfolio and resume';
<<<<<<< HEAD
    requiredAuth: true;
    requiredRoles: ['jobSeekercreator'];
    priority: 0.8;
    changeFreq: 'weekly'
    lastmod: currentDate}
  {
    path: '/create-profile';
    label: 'Create Profile';
    description: 'Set up your talent profile';
    requiredAuth: true;
    requiredRoles: ['jobSeekercreator'];
    priority: 0.7;
    changeFreq: 'monthly'
    lastmod: currentDate}];
// Client/Employer Routes - Requires authentication and appropriate role
export const clientRoutes: SitemapItem[] = [
  {;
    path: '/client-dashboard';
    label: 'Client Dashboard';
    description: 'Overview for client users';
    requiredAuth: true;
    requiredRoles: ['employerbuyer'];
    priority: 0.9;
    changeFreq: 'daily'
    lastmod: currentDate}
  {
    path: '/post-job';
    label: 'Post a Job';
    description: 'Create a new job listing';
    requiredAuth: true;
    requiredRoles: ['employerbuyer'];
    priority: 0.8;
    changeFreq: 'weekly'
    lastmod: currentDate}
  {
    path: '/hiring-tracker';
    label: 'Hiring Pipeline';
    description: 'Track your hiring process';
    requiredAuth: true;
    requiredRoles: ['employerbuyer'];
    priority: 0.7;
    changeFreq: 'daily'
    lastmod: currentDate}];
// Shared Routes - Authenticated Users
export const sharedRoutes: SitemapItem[] = [
  {;
    path: '/messages';
    label: 'Messages';
    description: 'Your inbox and conversations';
    requiredAuth: true;
    priority: 0.9;
    changeFreq: 'hourly'
    lastmod: currentDate}
=======

    priority: 0 && 0.8;
    changeFreq: 'weekly',
    lastmod: currentDate};

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

    priority: 0 && 0.7;
    changeFreq: 'monthly',

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

    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};

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

    priority: 0 && 0.8;
    changeFreq: 'weekly',
    lastmod: currentDate};

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

    priority: 0 && 0.7;
    changeFreq: 'daily',

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

    priority: 0 && 0.9;
    changeFreq: 'hourly',
    lastmod: currentDate};

=======
    required_auth: true;
    priority: 0.9;
    change_freq: 'hourly',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> main
  {
    path: '/notifications';
    label: 'Notifications';
    description: 'Your alerts and updates';
<<<<<<< HEAD
    requiredAuth: true;
    priority: 0.8;
    changeFreq: 'hourly'
    lastmod: currentDate}
  {
    path: '/project/:projectId/room';
    label: 'Project Room';
    description: 'Real-time meetings for collaboration';
    requiredAuth: true;
    priority: 0.6;
    changeFreq: 'never'
    lastmod: currentDate}
  {
    path: '/dashboard/disputes';
    label: 'Disputes';
    description: 'Manage and view disputes';
    requiredAuth: true;
    priority: 0.7;
    changeFreq: 'daily'
    lastmod: currentDate}];
// Admin Routes
export const adminRoutes: SitemapItem[] = [
  {;
    path: '/analytics';
    label: 'Analytics';
    description: 'System analytics and metrics';
    requiredAuth: true;
    requiredRoles: ['admin'];
    priority: 0.9;
    changeFreq: 'daily'
    lastmod: currentDate}
  {
    path: '/admin/reviews';
    label: 'Reviews Moderation';
    description: 'Moderate user reviews';
    requiredAuth: true;
    requiredRoles: ['admin'];
    priority: 0.7;
    changeFreq: 'daily'
    lastmod: currentDate}
  {
    path: '/admin/disputes';
    label: 'Dispute Management';
    description: 'Manage user disputes';
    requiredAuth: true;
    requiredRoles: ['admin'];
    priority: 0.8;
    changeFreq: 'daily'
    lastmod: currentDate}];
// Dynamic Path Patterns
export const dynamicPaths = {;
=======

    priority: 0 && 0.8;
    changeFreq: 'hourly',
    lastmod: currentDate};

=======
    required_auth: true;
    priority: 0.8;
    change_freq: 'hourly',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  {
    path: '/project/:project_id / room';
    label: 'Project Room';

    priority: 0 && 0.6;
    changeFreq: 'never',
    lastmod: currentDate};

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

    priority: 0 && 0.7;
    changeFreq: 'daily',

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

    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};

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

    priority: 0 && 0.7;
    changeFreq: 'daily',
    lastmod: currentDate};

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

    priority: 0 && 0.8;
    changeFreq: 'daily',

    lastmod: currentDate}];
// Dynamic Path Patterns
export const dynamicPaths = {
>>>>>>> main
  talentProfile: '/talent/:id';
  projectDetails: '/project/:projectId';
  projectMilestones: '/project/:projectId/milestones';
  projectRoom: '/project/:projectId/room';
  jobDetails: '/job/:id';
  categoryDetails: '/categories/:slug'
  disputeDetails: '/dashboard/disputes/:disputeId'}
// The complete sitemap
<<<<<<< HEAD
export const completeSitemap: SitemapItem[] = [;
=======
export const completeSitemap: SitemapItem[] = [
>>>>>>> main
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
<<<<<<< HEAD
  // Public routes accessible to everyone;
=======
  // Public routes accessible to everyone
>>>>>>> main
  let accessibleRoutes = [...publicPages, ...authPages];
  // Add authenticated-only routes
  if (isAuthenticated) {
    accessibleRoutes = [...accessibleRoutes, ...sharedRoutes];
    // Add role-specific routes
    if (userType === 'creator' |userType === 'jobSeeker') {
      accessibleRoutes = [...accessibleRoutes, ...talentRoutes]
<<<<<<< HEAD
=======

>>>>>>> main
=======
// Define the types for our sitemap structure;
export type SitemapItem = {;
  path: string,;
  label: string,;
  description?: string,;
  priority?: number,;
  changeFreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never',;
  lastmod?: string,;
  requiredAuth?: boolean,;
  requiredRoles?: Array<'creator' | 'jobSeeker' | 'employer' | 'buyer' | 'admin'>,;
  children?: SitemapItem[];
},;
// Current date for lastmod;
const currentDate = '2025-05-15',;
// Public Pages - Accessible to all users;
export const publicPages: SitemapItem[] = [;
  {;
    path: '/',;
    label: 'Home',;
    description: 'The world\'s first free marketplace dedicated to high-tech and artificial intelligence',;
    priority: 1.0,;
    changeFreq: 'weekly',;
    lastmod: currentDate},;
  {;
    path: '/about',;
    label: 'About Us',;
    description: 'Learn about the Zion AI Marketplace mission and team',;
    priority: 0.8,;
    changeFreq: 'monthly',;
    lastmod: currentDate},;
  {;
    path: '/contact',;
    label: 'Contact',;
    description: 'Get in touch with the Zion team',;
    priority: 0.8,;
    changeFreq: 'monthly',;
    lastmod: currentDate},;
  {;
    path: '/talent',;
    label: 'Talent Directory',;
    description: 'Browse skilled AI and tech professionals',;
    priority: 0.9,;
    changeFreq: 'daily',;
    lastmod: currentDate},;
  {;
    path: '/marketplace',;
    label: 'Marketplace',;
    description: 'Explore AI services, products and equipment',;
    priority: 0.9,;
    changeFreq: 'daily',;
    lastmod: currentDate},;
  {;
    path: '/services',;
    label: 'Services',;
    description: 'Find professional tech and AI services',;
    priority: 0.8,;
    changeFreq: 'weekly',;
    lastmod: currentDate},;
  {;
    path: '/equipment',;
    label: 'Equipment',;
    description: 'Specialized hardware and tech equipment',;
    priority: 0.8,;
    changeFreq: 'weekly',;
    lastmod: currentDate},;
  {;
    path: '/categories',;
    label: 'Categories',;
    description: 'Browse service and talent categories',;
    priority: 0.7,;
    changeFreq: 'monthly',;
    lastmod: currentDate},;
  {;
    path: '/blog',;
    label: 'Blog',;
    description: 'Articles and insights about AI and tech',;
    priority: 0.9,;
    changeFreq: 'daily',;
    lastmod: currentDate},;
  {;
    path: '/faq',;
    label: 'FAQ',;
    description: 'Frequently asked questions about Zion',;
    priority: 0.7,;
    changeFreq: 'monthly',;
    lastmod: currentDate},;
  {;
    path: '/terms',;
    label: 'Terms of Service',;
    description: 'Terms and conditions for using Zion',;
    priority: 0.5,;
    changeFreq: 'monthly',;
    lastmod: currentDate},;
  {;
    path: '/privacy',;
    label: 'Privacy Policy',;
    description: 'How we handle your data',;
    priority: 0.5,;
    changeFreq: 'monthly',;
    lastmod: currentDate}],;
// Authentication Pages;
export const authPages: SitemapItem[] = [;
  {;
    path: '/login',;
    label: 'Login',;
    description: 'Sign in to your account',;
    priority: 0.6,;
    changeFreq: 'monthly',;
    lastmod: currentDate},;
  {;
    path: '/signup',;
    label: 'Sign Up',;
    description: 'Create a new account',;
    priority: 0.6,;
    changeFreq: 'monthly',;
    lastmod: currentDate,;
    children: [;
      {;
        path: '/signup/talent',;
        label: 'Talent Registration',;
        description: 'Sign up as a talent or creator',;
        priority: 0.6,;
        changeFreq: 'monthly',;
        lastmod: currentDate},;
      {;
        path: '/signup/client',;
        label: 'Client Registration',;
        description: 'Sign up as an employer or buyer',;
        priority: 0.6,;
        changeFreq: 'monthly',;
        lastmod: currentDate}
    ];
  },;
  {;
    path: '/forgot-password',;
    label: 'Forgot Password',;
    description: 'Reset your password',;
    priority: 0.5,;
    changeFreq: 'monthly',;
    lastmod: currentDate}],;
// Talent/Creator Routes - Requires authentication and appropriate role;
export const talentRoutes: SitemapItem[] = [;
  {;
    path: '/talent-dashboard',;
    label: 'Talent Dashboard',;
    description: 'Overview for talent users',;
    requiredAuth: true,;
    requiredRoles: ['jobSeekercreator'],;
    priority: 0.9,;
    changeFreq: 'daily',;
    lastmod: currentDate},;
  {;
    path: '/talent-onboarding',;
    label: 'Talent Onboarding',;
    description: 'Complete your talent profile',;
    requiredAuth: true,;
    requiredRoles: ['jobSeekercreator'],;
    priority: 0.8,;
    changeFreq: 'monthly',;
    lastmod: currentDate},;
  {;
    path: '/portfolio',;
    label: 'Portfolio',;
    description: 'Manage your portfolio and resume',;
    requiredAuth: true,;
    requiredRoles: ['jobSeekercreator'],;
    priority: 0.8,;
    changeFreq: 'weekly',;
    lastmod: currentDate},;
  {;
    path: '/create-profile',;
    label: 'Create Profile',;
    description: 'Set up your talent profile',;
    requiredAuth: true,;
    requiredRoles: ['jobSeekercreator'],;
    priority: 0.7,;
    changeFreq: 'monthly',;
    lastmod: currentDate}],;
// Client/Employer Routes - Requires authentication and appropriate role;
export const clientRoutes: SitemapItem[] = [;
  {;
    path: '/client-dashboard',;
    label: 'Client Dashboard',;
    description: 'Overview for client users',;
    requiredAuth: true,;
    requiredRoles: ['employerbuyer'],;
    priority: 0.9,;
    changeFreq: 'daily',;
    lastmod: currentDate},;
  {;
    path: '/post-job',;
    label: 'Post a Job',;
    description: 'Create a new job listing',;
    requiredAuth: true,;
    requiredRoles: ['employerbuyer'],;
    priority: 0.8,;
    changeFreq: 'weekly',;
    lastmod: currentDate},;
  {;
    path: '/hiring-tracker',;
    label: 'Hiring Pipeline',;
    description: 'Track your hiring process',;
    requiredAuth: true,;
    requiredRoles: ['employerbuyer'],;
    priority: 0.7,;
    changeFreq: 'daily',;
    lastmod: currentDate}],;
// Shared Routes - Authenticated Users;
export const sharedRoutes: SitemapItem[] = [;
  {;
    path: '/messages',;
    label: 'Messages',;
    description: 'Your inbox and conversations',;
    requiredAuth: true,;
    priority: 0.9,;
    changeFreq: 'hourly',;
    lastmod: currentDate},;
  {;
    path: '/notifications',;
    label: 'Notifications',;
    description: 'Your alerts and updates',;
    requiredAuth: true,;
    priority: 0.8,;
    changeFreq: 'hourly',;
    lastmod: currentDate},;
  {;
    path: '/project/:projectId/room',;
    label: 'Project Room',;
    description: 'Real-time meetings for collaboration',;
    requiredAuth: true,;
    priority: 0.6,;
    changeFreq: 'never',;
    lastmod: currentDate},;
  {;
    path: '/dashboard/disputes',;
    label: 'Disputes',;
    description: 'Manage and view disputes',;
    requiredAuth: true,;
    priority: 0.7,;
    changeFreq: 'daily',;
    lastmod: currentDate}],;
// Admin Routes;
export const adminRoutes: SitemapItem[] = [;
  {;
    path: '/analytics',;
    label: 'Analytics',;
    description: 'System analytics and metrics',;
    requiredAuth: true,;
    requiredRoles: ['admin'],;
    priority: 0.9,;
    changeFreq: 'daily',;
    lastmod: currentDate},;
  {;
    path: '/admin/reviews',;
    label: 'Reviews Moderation',;
    description: 'Moderate user reviews',;
    requiredAuth: true,;
    requiredRoles: ['admin'],;
    priority: 0.7,;
    changeFreq: 'daily',;
    lastmod: currentDate},;
  {;
    path: '/admin/disputes',;
    label: 'Dispute Management',;
    description: 'Manage user disputes',;
    requiredAuth: true,;
    requiredRoles: ['admin'],;
    priority: 0.8,;
    changeFreq: 'daily',;
    lastmod: currentDate}],;
// Dynamic Path Patterns;
export const dynamicPaths = {;
  talentProfile: '/talent/:id',;
  projectDetails: '/project/:projectId',;
  projectMilestones: '/project/:projectId/milestones',;
  projectRoom: '/project/:projectId/room',;
  jobDetails: '/job/:id',;
  categoryDetails: '/categories/:slug',;
  disputeDetails: '/dashboard/disputes/:disputeId'},;
// The complete sitemap;
export const completeSitemap: SitemapItem[] = [;
  ...publicPages,;
  ...authPages,;
  ...talentRoutes,;
  ...clientRoutes,;
  ...sharedRoutes,;
  ...adminRoutes],;
// Helper function to get appropriate routes based on user role;
export const getAccessibleRoutes = (;
  isAuthenticated: boolean,;
  userType?: 'creator' | 'jobSeeker' | 'employer' | 'buyer' | 'admin' | null;
) => {;
  // Public routes accessible to everyone;
  let accessibleRoutes = [...publicPages, ...authPages],;
  // Add authenticated-only routes;
  if (isAuthenticated) {;
    accessibleRoutes = [...accessibleRoutes, ...sharedRoutes],;
    // Add role-specific routes;
    if (userType === 'creator' || userType === 'jobSeeker') {;
      accessibleRoutes = [...accessibleRoutes, ...talentRoutes];
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
    }
    if (userType === 'employer' |userType === 'buyer') {
      accessibleRoutes = [...accessibleRoutes, ...clientRoutes]
    }
    if (userType === 'admin') {
      accessibleRoutes = [...accessibleRoutes, ...talentRoutes, ...clientRoutes, ...adminRoutes]
    }
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  return accessibleRoutes
}

=======
;
  return accessibleRoutes;
=======
  
  return accessibleRoutes
=======
;
  return accessibleRoutes;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

    required_auth: true;
    required_roles: ['admin'];
    priority: 0.8;
    change_freq: 'daily',
    lastmod: current_date}];
=======


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

  return accessibleRoutes;


};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
