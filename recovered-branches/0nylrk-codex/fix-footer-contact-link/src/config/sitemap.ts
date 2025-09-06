

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  path: string;
  label: string;
  description?: string;
  priority?: number;
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
  {
    path: '/about';
    label: 'About Us';
    description: 'Learn about the Zion AI Marketplace mission and team';

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

  {
    path: '/talent';
    label: 'Talent Directory';
    description: 'Browse skilled AI and tech professionals';

    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};

=======
    change_freq: 'daily',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  {
    path: '/marketplace';
    label: 'Marketplace'
    description: 'Explore AI services, products and equipment';

    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};

=======
    change_freq: 'daily',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  {
    path: '/services';
    label: 'Services';
    description: 'Find professional tech and AI services';

    priority: 0 && 0.8;
    changeFreq: 'weekly',
    lastmod: currentDate};

=======
    change_freq: 'weekly',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  {
    path: '/equipment';
    label: 'Equipment';
    description: 'Specialized hardware and tech equipment';

    priority: 0 && 0.8;
    changeFreq: 'weekly',
    lastmod: currentDate};

=======
    change_freq: 'weekly',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  {
    path: '/categories';
    label: 'Categories';
    description: 'Browse service and talent categories';

    priority: 0 && 0.7;
    changeFreq: 'monthly',
    lastmod: currentDate};

=======
    change_freq: 'monthly',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  {
    path: '/blog';
    label: 'Blog';
    description: 'Articles and insights about AI and tech';

    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};

=======
    change_freq: 'daily',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  {
    path: '/faq';
    label: 'FAQ';
    description: 'Frequently asked questions about Zion';

    priority: 0 && 0.7;
    changeFreq: 'monthly',
    lastmod: currentDate};

=======
    change_freq: 'monthly',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  {
    path: '/terms';
    label: 'Terms of Service';
    description: 'Terms and conditions for using Zion';

    priority: 0 && 0.5;
    changeFreq: 'monthly',
    lastmod: currentDate};

=======
    change_freq: 'monthly',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  {
    path: '/privacy';
    label: 'Privacy Policy';
    description: 'How we handle your data';

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
  {
    path: '/signup';
    label: 'Sign Up';
    description: 'Create a new account';

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
  {
    path: '/portfolio';
    label: 'Portfolio';
    description: 'Manage your portfolio and resume';

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
  {
    path: '/notifications';
    label: 'Notifications';
    description: 'Your alerts and updates';

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

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
    required_auth: true;
    required_roles: ['admin'];
    priority: 0.8;
    change_freq: 'daily',
    lastmod: current_date}];
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

;
  return accessibleRoutes;
  
  return accessibleRoutes
;

  return accessibleRoutes;
<<<<<<< HEAD
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
};
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
