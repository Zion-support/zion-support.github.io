
<<<<<<< HEAD
=======
export type SitemapItem = {;
>>>>>>> origin/cursor/delete-old-data-records-6bba

// Define the types for our sitemap structure;


<<<<<<< HEAD


export type SitemapItem = {;


  path: string;
  label: string;
  description?: string;
  priority?: number;

  change_freq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  lastmod?: string;


    priority: 1 && 1.0;
    changeFreq: 'weekly',
    lastmod: currentDate};
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


  {
    path: '/about';
    label: 'About Us';

    description: 'Learn about the Zion AI Marketplace mission and team';



    description: 'Get in touch with the Zion team',


    path: '/marketplace';
    label: 'Marketplace'
    description: 'Explore AI services, products and equipment';



    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};

    change_freq: 'daily',
    lastmod: current_date}



=======
// Define the types for our sitemap structure

export type SitemapItem = {
export type SitemapItem = {;

    description: 'Learn about the Zion AI Marketplace mission and team';
    priority: 0 && 0.8;
    changeFreq: 'monthly',
    lastmod: currentDate};
    change_freq: 'monthly',
    lastmod: current_date}

  {'
    path: '/contact';'
    label: 'Contact';'
    description: 'Get in touch with the Zion team',
    priority: 0.8,
    change_freq: 'monthly',
    lastmod: current_date}
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

  {'
    path: '/talent';'
    label: 'Talent Directory';'
    description: 'Browse skilled AI and tech professionals';
    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};
    change_freq: 'daily',
    lastmod: current_date}
    priority: 0.9;
    changeFreq: 'daily'
    lastmod: currentDate}
  {
    priority: 0 && 0.9;'
    changeFreq: 'daily',

    path: '/marketplace';
    label: 'Marketplace'
    description: 'Explore AI services, products and equipment';
    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};

>>>>>>> origin/cursor/delete-old-data-records-6bba
  {
    path: '/services';
    label: 'Services';
    description: 'Find professional tech and AI services';
<<<<<<< HEAD




=======
    priority: 0.8;
    changeFreq: 'weekly'
    lastmod: currentDate}
    priority: 0 && 0.8;
    changeFreq: 'weekly',
    lastmod: currentDate};

>>>>>>> origin/cursor/delete-old-data-records-6bba
  {
    path: '/equipment';
    label: 'Equipment';
    description: 'Specialized hardware and tech equipment';
<<<<<<< HEAD




=======
    priority: 0.8;
    changeFreq: 'weekly'
    lastmod: currentDate}
    priority: 0 && 0.8;
    changeFreq: 'weekly',
    lastmod: currentDate};

>>>>>>> origin/cursor/delete-old-data-records-6bba
  {
    path: '/categories';
    label: 'Categories';
    description: 'Browse service and talent categories';
<<<<<<< HEAD




=======
    priority: 0.7;
    changeFreq: 'monthly'
    lastmod: currentDate}
    priority: 0 && 0.7;
    changeFreq: 'monthly',
    lastmod: currentDate};

>>>>>>> origin/cursor/delete-old-data-records-6bba
  {
    path: '/blog';
    label: 'Blog';
    description: 'Articles and insights about AI and tech';
<<<<<<< HEAD




=======
    priority: 0.9;
    changeFreq: 'daily'
    lastmod: currentDate}
    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};

>>>>>>> origin/cursor/delete-old-data-records-6bba
  {
    path: '/faq';
    label: 'FAQ';
    description: 'Frequently asked questions about Zion';
<<<<<<< HEAD




=======
    priority: 0.7;
    changeFreq: 'monthly'
    lastmod: currentDate}
    priority: 0 && 0.7;
    changeFreq: 'monthly',
    lastmod: currentDate};

>>>>>>> origin/cursor/delete-old-data-records-6bba
  {
    path: '/terms';
    label: 'Terms of Service';
    description: 'Terms and conditions for using Zion';
<<<<<<< HEAD



=======

    priority: 0 && 0.5;
    changeFreq: 'monthly',
    lastmod: currentDate};
    priority: 0 && 0.5;
    changeFreq: 'monthly',
    lastmod: currentDate};
>>>>>>> origin/cursor/delete-old-data-records-6bba

  {
    path: '/privacy';
    label: 'Privacy Policy';
    description: 'How we handle your data';


<<<<<<< HEAD
=======
    lastmod: currentDate}];
// Authentication Pages
export const authPages: SitemapItem[] = [

>>>>>>> origin/cursor/delete-old-data-records-6bba
    change_freq: 'monthly',
    lastmod: current_date}];
;
// Authentication Pages;
export const auth_pages: SitemapItem[] = [;

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  {
    path: '/login';
    label: 'Login';
    description: 'Sign in to your account';
<<<<<<< HEAD


=======
    priority: 0.5;
    changeFreq: 'monthly'
    lastmod: currentDate}];
// Authentication Pages
}

>>>>>>> origin/cursor/delete-old-data-records-6bba
export const authPages: SitemapItem[] = [
  {;
    path: '/login';
    label: 'Login';
    description: 'Sign in to your account';
    priority: 0.6;
    changeFreq: 'monthly'
    lastmod: currentDate}


<<<<<<< HEAD
=======
    priority: 0 && 0.6;
    changeFreq: 'monthly',
    lastmod: currentDate};
    change_freq: 'monthly',
    lastmod: current_date}
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
    change_freq: 'monthly',
    lastmod: current_date}
>>>>>>> origin/cursor/delete-old-data-records-6bba

  {
    path: '/signup';
    label: 'Sign Up';
    description: 'Create a new account';

<<<<<<< HEAD

      {
        path: '/signup / client';
        label: 'Client Registration';
        description: 'Sign up as an employer or buyer';


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
>>>>>>> origin/cursor/delete-old-data-records-6bba

        priority: 0 && 0.6;
        changeFreq: 'monthly',
        lastmod: currentDate};
        change_freq: 'monthly',
        lastmod: current_date}
      {
        path: '/signup / client';

  {'
    path: '/marketplace';'
    label: 'Marketplace''
    description: 'Explore AI services, products and equipment';

    priority: 0 && 0.9;'
    changeFreq: 'daily',
    lastmod: currentDate};'
    change_freq: 'daily',
    lastmod: current_date}
    priority: 0.9;'
    changeFreq: 'daily'
    lastmod: currentDate}

  {'
    path: '/services';'
    label: 'Services';'
    description: 'Find professional tech and AI services';

    priority: 0 && 0.8;'
    changeFreq: 'weekly',
    lastmod: currentDate};'
    change_freq: 'weekly',
    lastmod: current_date}
    priority: 0.8;'
    changeFreq: 'weekly'
    lastmod: currentDate}

  {'
    path: '/equipment';'
    label: 'Equipment';'
    description: 'Specialized hardware and tech equipment';

    priority: 0 && 0.8;'
    changeFreq: 'weekly',
    lastmod: currentDate};'
    change_freq: 'weekly',
    lastmod: current_date}
    priority: 0.8;'
    changeFreq: 'weekly'
    lastmod: currentDate}

  {'
    path: '/categories';'
    label: 'Categories';'
    description: 'Browse service and talent categories';

    priority: 0 && 0.7;'
    changeFreq: 'monthly',
    lastmod: currentDate};'
    change_freq: 'monthly',
    lastmod: current_date}
    priority: 0.7;'
    changeFreq: 'monthly'
    lastmod: currentDate}

  {'
    path: '/blog';'
    label: 'Blog';'
    description: 'Articles and insights about AI and tech';

    priority: 0 && 0.9;'
    changeFreq: 'daily',
    lastmod: currentDate};'
    change_freq: 'daily',
    lastmod: current_date}
    priority: 0.9;'
    changeFreq: 'daily'
    lastmod: currentDate}

  {'
    path: '/faq';'
    label: 'FAQ';'
    description: 'Frequently asked questions about Zion';

    priority: 0 && 0.7;'
    changeFreq: 'monthly',
    lastmod: currentDate};'
    change_freq: 'monthly',
    lastmod: current_date}
    priority: 0.7;'
    changeFreq: 'monthly'
    lastmod: currentDate}

  {'
    path: '/terms';'
    label: 'Terms of Service';'
    description: 'Terms and conditions for using Zion';

    priority: 0 && 0.5;'
    changeFreq: 'monthly',
    lastmod: currentDate};'
    change_freq: 'monthly',
    lastmod: current_date}
    priority: 0.5;'
    changeFreq: 'monthly'
    lastmod: currentDate}

  {'
    path: '/privacy';'
    label: 'Privacy Policy';'
    description: 'How we handle your data';

    lastmod: currentDate}];
// Authentication Pages;
export const authPages: SitemapItem[] = []
'
    change_freq: 'monthly',;
    lastmod: current_date}];
;
// Authentication Pages;
export const auth_pages: SitemapItem[] = [;

  {'
    path: '/login';'
    label: 'Login';'
    description: 'Sign in to your account';

    priority: 0 && 0.6;'
    changeFreq: 'monthly',
    lastmod: currentDate};'
    change_freq: 'monthly',
    lastmod: current_date}
    priority: 0.5;'
    changeFreq: 'monthly'
    lastmod: currentDate}];
// Authentication Pages;
export const authPages: SitemapItem[] = [;
  {;'
    path: '/login';'
    label: 'Login';'
    description: 'Sign in to your account';
    priority: 0.6;'
    changeFreq: 'monthly'
    lastmod: currentDate}

'
    change_freq: 'monthly',
    lastmod: current_date}

  {'
    path: '/signup';'
    label: 'Sign Up';'
    description: 'Create a new account';

    priority: 0.6;'
    change_freq: 'monthly';
    lastmod: current_date;
    children: [;

      {'
        path: '/signup / talent';'
        label: 'Talent Registration';'
        description: 'Sign up as a talent or creator';

        priority: 0 && 0.6;'
        changeFreq: 'monthly',
        lastmod: currentDate};'
        change_freq: 'monthly',
        lastmod: current_date}

      {'
        path: '/signup / client';'
        label: 'Client Registration';'
        description: 'Sign up as an employer or buyer';

        priority: 0 && 0.6;'
        changeFreq: 'monthly',
        lastmod: currentDate}

        changeFreq: 'monthly',
        lastmod: currentDate}
    ]
        change_freq: 'monthly',
        lastmod: current_date}
    ];
<<<<<<< HEAD



=======
        lastmod: currentDate}
    ]
>>>>>>> origin/cursor/delete-old-data-records-6bba

  }
  {
    path: '/forgot - password';
    label: 'Forgot Password';
    description: 'Reset your password';
<<<<<<< HEAD

=======
    priority: 0 && 0.5;
    changeFreq: 'monthly',
    lastmod: currentDate}];
// Talent/Creator Routes - Requires authentication and appropriate role
export const talentRoutes: SitemapItem[] = [
>>>>>>> origin/cursor/delete-old-data-records-6bba

    priority: 0 && 0.5;
    changeFreq: 'monthly',

    lastmod: currentDate}];
// Talent/Creator Routes - Requires authentication and appropriate role
export const talentRoutes: SitemapItem[] = [

    change_freq: 'monthly',
    lastmod: current_date}];
;
// Talent / Creator Routes - Requires authentication and appropriate role;
export const talent_routes: SitemapItem[] = [;

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  {
    path: '/talent - dashboard';
    label: 'Talent Dashboard';
    description: 'Overview for talent users';
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};


    required_auth: true;
    required_roles: ['job_seekercreator'];
    priority: 0.9;
    change_freq: 'daily',
    lastmod: current_date}

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  {
    path: '/talent - onboarding';
    label: 'Talent Onboarding';
    description: 'Complete your talent profile';
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

    priority: 0 && 0.8;
    changeFreq: 'monthly',
    lastmod: currentDate};


    required_auth: true;

    required_roles: ['job_seekercreator'];
    priority: 0.8;'
    change_freq: 'monthly',
    lastmod: current_date}


<<<<<<< HEAD
  {
    path: '/portfolio';
    label: 'Portfolio';
    description: 'Manage your portfolio and resume';


    priority: 0 && 0.8;
    changeFreq: 'weekly',
    lastmod: currentDate};


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    required_roles: ['job_seekercreator'];
    priority: 0.8;'
    change_freq: 'weekly',
    lastmod: current_date}


<<<<<<< HEAD
  {

    path: '/create - profile';
    label: 'Create Profile';
    description: 'Set up your talent profile';

=======
    path: '/create - profile';
    label: 'Create Profile';
    description: 'Set up your talent profile';
    priority: 0 && 0.7;
    changeFreq: 'monthly',
    lastmod: currentDate}];
// Client/Employer Routes - Requires authentication and appropriate role
export const clientRoutes: SitemapItem[] = [
>>>>>>> origin/cursor/delete-old-data-records-6bba

    priority: 0 && 0.7;
    changeFreq: 'monthly',

    lastmod: currentDate}];
// Client/Employer Routes - Requires authentication and appropriate role

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
    required_roles: ['job_seekercreator'];
    priority: 0.7;'
    change_freq: 'monthly',
    lastmod: current_date}];
;
// Client / Employer Routes - Requires authentication and appropriate role;
export const client_routes: SitemapItem[] = [;


<<<<<<< HEAD
  {

    path: '/client - dashboard';
    label: 'Client Dashboard';
    description: 'Overview for client users';

=======
    path: '/client - dashboard';
    label: 'Client Dashboard';
    description: 'Overview for client users';
    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};
>>>>>>> origin/cursor/delete-old-data-records-6bba

    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};


    required_auth: true;
    required_roles: ['employerbuyer'];
    priority: 0.9;
    change_freq: 'daily',
    lastmod: current_date}

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  {
    path: '/post - job';
    label: 'Post a Job';
    description: 'Create a new job listing';
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

    priority: 0 && 0.8;
    changeFreq: 'weekly',
    lastmod: currentDate};


    required_auth: true;
    required_roles: ['employerbuyer'];
    priority: 0.8;
    change_freq: 'weekly',
    lastmod: current_date}

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  {
    path: '/hiring - tracker';
    label: 'Hiring Pipeline';
    description: 'Track your hiring process';
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

    priority: 0 && 0.7;
    changeFreq: 'daily',

    lastmod: currentDate}];
// Shared Routes - Authenticated Users
export const sharedRoutes: SitemapItem[] = [

    required_auth: true;
    required_roles: ['employerbuyer'];
    priority: 0.7;
    change_freq: 'daily',
    lastmod: current_date}];
;
// Shared Routes - Authenticated Users;
export const shared_routes: SitemapItem[] = [;

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  {
    path: '/messages';
    label: 'Messages';
    description: 'Your inbox and conversations';
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

    priority: 0 && 0.9;
    changeFreq: 'hourly',
    lastmod: currentDate};


    required_auth: true;
    priority: 0.9;
    change_freq: 'hourly',
    lastmod: current_date}

<<<<<<< HEAD

=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
export const sharedRoutes: SitemapItem[] = [
  {;
    path: '/messages';
    label: 'Messages';
    description: 'Your inbox and conversations';
    requiredAuth: true;
    priority: 0.9;
    changeFreq: 'hourly'
    lastmod: currentDate}
<<<<<<< HEAD
=======

  {
    path: '/notifications';
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD

  {
    path: '/notifications';
    label: 'Notifications';
    description: 'Your alerts and updates';


=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
    description: 'Real - time meetings for collaboration';
    required_auth: true;
    priority: 0.6;
    change_freq: 'never',
    lastmod: current_date}
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  {
    path: '/dashboard / disputes';
    label: 'Disputes';
    description: 'Manage and view disputes';
<<<<<<< HEAD


    priority: 0 && 0.7;
    changeFreq: 'daily',

    lastmod: currentDate}];
// Admin Routes
export const adminRoutes: SitemapItem[] = [

=======
    priority: 0 && 0.7;
    changeFreq: 'daily',
    lastmod: currentDate}];
// Admin Routes
export const adminRoutes: SitemapItem[] = [
>>>>>>> origin/cursor/delete-old-data-records-6bba
    required_auth: true;
    priority: 0.7;'
    change_freq: 'daily',
    lastmod: current_date}];
;
// Admin Routes;
export const admin_routes: SitemapItem[] = [;


<<<<<<< HEAD
  {

    path: '/analytics';
    label: 'Analytics';
    description: 'System analytics and metrics';

=======
    path: '/analytics';
    label: 'Analytics';
    description: 'System analytics and metrics';
    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};
>>>>>>> origin/cursor/delete-old-data-records-6bba

    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};


    required_auth: true;
    required_roles: ['admin'];
    priority: 0.9;
    change_freq: 'daily',
    lastmod: current_date}

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  {
    path: '/admin / reviews';
    label: 'Reviews Moderation';
    description: 'Moderate user reviews';
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

    priority: 0 && 0.7;
    changeFreq: 'daily',
    lastmod: currentDate};


    required_auth: true;
    required_roles: ['admin'];
    priority: 0.7;
    change_freq: 'daily',
    lastmod: current_date}

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  {
    path: '/admin / disputes';
    label: 'Dispute Management';
    description: 'Manage user disputes';
<<<<<<< HEAD

    path: '/dashboard/disputes';
    label: 'Disputes';
    description: 'Manage and view disputes';
    requiredAuth: true;
    priority: 0.7;
    changeFreq: 'daily'
    lastmod: currentDate}];
// Admin Routes
=======

    priority: 0 && 0.8;
    changeFreq: 'daily',

    lastmod: currentDate}];
// Dynamic Path Patterns
export const dynamicPaths = {
    lastmod: currentDate}];
// Dynamic Path Patterns
export const dynamicPaths = {;
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
}
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
<<<<<<< HEAD

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
export const dynamicPaths = $2;
  projectDetails: '/project/:projectId',
  projectMilestones: '/project/:projectId/milestones',
  projectRoom: '/project/:projectId/room',
  jobDetails: '/job/:id',
  categoryDetails: '/categories/:slug',
  disputeDetails: '/dashboard/disputes/:disputeId'},

// The complete sitemap
export const completeSitemap: SitemapItem[] = [
  ...publicPages,
  ...authPages,
  ...talentRoutes,
  ...clientRoutes,
  ...sharedRoutes,
  ...adminRoutes],

export const completeSitemap: SitemapItem[] = [
    lastmod: currentDate}];
// Dynamic Path Patterns
export const dynamicPaths = {;
  talentProfile: '/talent/:id';
  projectDetails: '/project/:projectId';
  projectMilestones: '/project/:projectId/milestones';
  projectRoom: '/project/:projectId/room';
  jobDetails: '/job/:id';
  categoryDetails: '/categories/:slug'
  disputeDetails: '/dashboard/disputes/:disputeId'}
// The complete sitemap

>>>>>>> origin/cursor/delete-old-data-records-6bba

  ...publicPages;
  ...authPages;
  ...talentRoutes;
  ...clientRoutes;
  ...sharedRoutes;
  ...adminRoutes]
<<<<<<< HEAD

// Helper function to get appropriate routes based on user role;
export const getAccessibleRoutes = (

=======
// Helper function to get appropriate routes based on user role;
export const getAccessibleRoutes = (


>>>>>>> origin/cursor/delete-old-data-records-6bba
  let accessibleRoutes = [...publicPages, ...authPages];
  // Add authenticated-only routes;
  if (isAuthenticated) {}
    accessibleRoutes = [...accessibleRoutes, ...sharedRoutes];
    // Add role-specific routes'
    if (userType === 'creator' |userType === 'jobSeeker') {}

      accessibleRoutes = [...accessibleRoutes, ...talentRoutes]

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
// Define the types for our sitemap structure;
export type SitemapItem = {;
  path: string,;
  label: string,;
  description?: string,;

    changeFreq: 'monthly',;
    lastmod: currentDate}],;
// Authentication Pages;
export const authPages: SitemapItem[] = [;

        changeFreq: 'monthly',;
        lastmod: currentDate}
    ];
  },;

    changeFreq: 'monthly',;
    lastmod: currentDate}],;
// Talent/Creator Routes - Requires authentication and appropriate role;
export const talentRoutes: SitemapItem[] = [;

    changeFreq: 'monthly',;
    lastmod: currentDate}],;
// Client/Employer Routes - Requires authentication and appropriate role;
export const clientRoutes: SitemapItem[] = [;

    changeFreq: 'daily',;
    lastmod: currentDate}],;
// Shared Routes - Authenticated Users;
export const sharedRoutes: SitemapItem[] = [;

    changeFreq: 'daily',;
    lastmod: currentDate}],;
// Admin Routes;
export const adminRoutes: SitemapItem[] = [;

<<<<<<< HEAD
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

// Define the types for our sitemap structure;
export type SitemapItem = {;
  path:string,;
  label:string,;
  description?:string,;
  priority?:number,;
  changeFreq?:'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never',;
  lastmod?:string,;
  requiredAuth?:boolean,;
  requiredRoles?:Array<'creator' | 'jobSeeker' | 'employer' | 'buyer' | 'admin'>,;
  children?:SitemapItem[];
},;
;
// Current date for lastmod;
const currentDate = '2025-05-15',;
;
// Public Pages - Accessible to all users;
export const publicPages:SitemapItem[] = [;
  {;
    path:'/',;
    label:'Home',;
    description:'The world\'s first free marketplace dedicated to high-tech and artificial intelligence',;
    priority:1.0,;
    changeFreq:'weekly',;
    lastmod:currentDate},;
  {;
    path:'/about',;
    label:'About Us',;
    description:'Learn about the Zion AI Marketplace mission and team',;
    priority:0.8,;
    changeFreq:'monthly',;
    lastmod:currentDate},;
  {;
    path:'/contact',;
    label:'Contact',;
    description:'Get in touch with the Zion team',;
    priority:0.8, ;
    changeFreq:'monthly',;
    lastmod:currentDate},;
  {;
    path:'/talent',;
    label:'Talent Directory',;
    description:'Browse skilled AI and tech professionals',;
    priority:0.9,;
    changeFreq:'daily',;
    lastmod:currentDate},;
  {;
    path:'/marketplace',;
    label:'Marketplace',;
    description:'Explore AI services, products and equipment',;
    priority:0.9,;
    changeFreq:'daily',;
    lastmod:currentDate},;
  {;
    path:'/services',;
    label:'Services',;
    description:'Find professional tech and AI services',;
    priority:0.8,;
    changeFreq:'weekly',;
    lastmod:currentDate},;
  {;
    path:'/equipment',;
    label:'Equipment',;
    description:'Specialized hardware and tech equipment',;
    priority:0.8,;
    changeFreq:'weekly',;
    lastmod:currentDate},;
  {;
    path:'/categories',;
    label:'Categories',;
    description:'Browse service and talent categories',;
    priority:0.7,;
    changeFreq:'monthly',;
    lastmod:currentDate},;
  {;
    path:'/blog',;
    label:'Blog',;
    description:'Articles and insights about AI and tech',;
    priority:0.9,;
    changeFreq:'daily',;
    lastmod:currentDate},;
  {;
    path:'/faq',;
    label:'FAQ',;
    description:'Frequently asked questions about Zion',;
    priority:0.7,;
    changeFreq:'monthly',;
    lastmod:currentDate},;
  {;
    path:'/terms',;
    label:'Terms of Service',;
    description:'Terms and conditions for using Zion',;
    priority:0.5,;
    changeFreq:'monthly',;
    lastmod:currentDate},;
  {;
    path:'/privacy',;
    label:'Privacy Policy',;
    description:'How we handle your data',;
    priority:0.5,;
    changeFreq:'monthly',;
    lastmod:currentDate}],;
;
// Authentication Pages;
export const authPages:SitemapItem[] = [;
  {;
    path:'/login',;
    label:'Login',;
    description:'Sign in to your account',;
    priority:0.6,;
    changeFreq:'monthly',;
    lastmod:currentDate},;
  {;
    path:'/signup',;
    label:'Sign Up',;
    description:'Create a new account',;
    priority:0.6,;
    changeFreq:'monthly',;
    lastmod:currentDate,;
    children:[;
      {;
        path:'/signup/talent',;
        label:'Talent Registration',;
        description:'Sign up as a talent or creator',;
        priority:0.6,;
        changeFreq:'monthly',;
        lastmod:currentDate},;
      {;
        path:'/signup/client',;
        label:'Client Registration',;
        description:'Sign up as an employer or buyer',;
        priority:0.6,;
        changeFreq:'monthly',;
        lastmod:currentDate}
    ];
  },;
  {;
    path:'/forgot-password',;
    label:'Forgot Password',;
    description:'Reset your password',;
    priority:0.5,;
    changeFreq:'monthly',;
    lastmod:currentDate}],;
;
// Talent/Creator Routes - Requires authentication and appropriate role;
export const talentRoutes:SitemapItem[] = [;
  {;
    path:'/talent-dashboard',;
    label:'Talent Dashboard',;
    description:'Overview for talent users',;
    requiredAuth:true,;
    requiredRoles:['jobSeekercreator'],;
    priority:0.9,;
    changeFreq:'daily',;
    lastmod:currentDate},;
  {;
    path:'/talent-onboarding',;
    label:'Talent Onboarding',;
    description:'Complete your talent profile',;
    requiredAuth:true,;
    requiredRoles:['jobSeekercreator'],;
    priority:0.8,;
    changeFreq:'monthly',;
    lastmod:currentDate},;
  {;
    path:'/portfolio',;
    label:'Portfolio',;
    description:'Manage your portfolio and resume',;
    requiredAuth:true,;
    requiredRoles:['jobSeekercreator'],;
    priority:0.8,;
    changeFreq:'weekly',;
    lastmod:currentDate},;
  {;
    path:'/create-profile',;
    label:'Create Profile',;
    description:'Set up your talent profile',;
    requiredAuth:true,;
    requiredRoles:['jobSeekercreator'],;
    priority:0.7,;
    changeFreq:'monthly',;
    lastmod:currentDate}],;
;
// Client/Employer Routes - Requires authentication and appropriate role;
export const clientRoutes:SitemapItem[] = [;
  {;
    path:'/client-dashboard',;
    label:'Client Dashboard',;
    description:'Overview for client users',;
    requiredAuth:true,;
    requiredRoles:['employerbuyer'],;
    priority:0.9,;
    changeFreq:'daily',;
    lastmod:currentDate},;
  {;
    path:'/post-job',;
    label:'Post a Job',;
    description:'Create a new job listing',;
    requiredAuth:true,;
    requiredRoles:['employerbuyer'],;
    priority:0.8,;
    changeFreq:'weekly',;
    lastmod:currentDate},;
  {;
    path:'/hiring-tracker',;
    label:'Hiring Pipeline',;
    description:'Track your hiring process',;
    requiredAuth:true,;
    requiredRoles:['employerbuyer'],;
    priority:0.7,;
    changeFreq:'daily',;
    lastmod:currentDate}],;
;
// Shared Routes - Authenticated Users;
export const sharedRoutes:SitemapItem[] = [;
  {;
    path:'/messages',;
    label:'Messages',;
    description:'Your inbox and conversations',;
    requiredAuth:true,;
    priority:0.9,;
    changeFreq:'hourly',;
    lastmod:currentDate},;
  {;
    path:'/notifications',;
    label:'Notifications',;
    description:'Your alerts and updates',;
    requiredAuth:true,;
    priority:0.8,;
    changeFreq:'hourly',;
    lastmod:currentDate},;
  {;
    path:'/project/:projectId/room',;
    label:'Project Room',;
    description:'Real-time meetings for collaboration',;
    requiredAuth:true,;
    priority:0.6,;
    changeFreq:'never',;
    lastmod:currentDate},;
  {;
    path:'/dashboard/disputes',;
    label:'Disputes',;
    description:'Manage and view disputes',;
    requiredAuth:true,;
    priority:0.7,;
    changeFreq:'daily',;
    lastmod:currentDate}],;
;
// Admin Routes;
export const adminRoutes:SitemapItem[] = [;
  {;
    path:'/analytics',;
    label:'Analytics',;
    description:'System analytics and metrics',;
    requiredAuth:true,;
    requiredRoles:['admin'],;
    priority:0.9,;
    changeFreq:'daily',;
    lastmod:currentDate},;
  {;
    path:'/admin/reviews',;
    label:'Reviews Moderation',;
    description:'Moderate user reviews',;
    requiredAuth:true,;
    requiredRoles:['admin'],;
    priority:0.7,;
    changeFreq:'daily',;
    lastmod:currentDate},;
  {;
    path:'/admin/disputes',;
    label:'Dispute Management',;
    description:'Manage user disputes',;
    requiredAuth:true,;
    requiredRoles:['admin'],;
    priority:0.8,;
    changeFreq:'daily',;
    lastmod:currentDate}],;
;
// Dynamic Path Patterns;
export const dynamicPaths = {;
  talentProfile:'/talent/:id',;
  projectDetails:'/project/:projectId',;
  projectMilestones:'/project/:projectId/milestones',;
  projectRoom:'/project/:projectId/room',;
  jobDetails:'/job/:id',;
  categoryDetails:'/categories/:slug',;
  disputeDetails:'/dashboard/disputes/:disputeId'},;
;
// The complete sitemap;
export const completeSitemap:SitemapItem[] = [;

=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
  ...publicPages,;
  ...authPages,;
  ...talentRoutes,;
  ...clientRoutes,;
  ...sharedRoutes,;
  ...adminRoutes],;
// Helper function to get appropriate routes based on user role;
export const getAccessibleRoutes = (;

  userType?: 'creator' | 'jobSeeker' | 'employer' | 'buyer' | 'admin' | null;
) => {;
  // Public routes accessible to everyone;
  let accessibleRoutes = [...publicPages, ...authPages],;
  // Add authenticated-only routes;
  if (isAuthenticated) {;
    accessibleRoutes = [...accessibleRoutes, ...sharedRoutes],;

    if (userType === 'creator' || userType === 'jobSeeker') {;
      accessibleRoutes = [...accessibleRoutes, ...talentRoutes];


<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }
    ;
    if (userType === 'employer' || userType === 'buyer') {;
      accessibleRoutes = [...accessibleRoutes, ...clientRoutes],;
    }
    ;
    if (userType === 'admin') {;
      accessibleRoutes = [...accessibleRoutes, ...talentRoutes, ...clientRoutes, ...adminRoutes],;
    }
  }
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

    required_auth: true;
    required_roles: ['admin'];
    priority: 0.8;
    change_freq: 'daily',
    lastmod: current_date}];
<<<<<<< HEAD

=======


;
// Helper function to get appropriate routes based on user role;
export const getAccessibleRoutes = (;
  isAuthenticated:boolean, ;
  userType?:'creator' | 'jobSeeker' | 'employer' | 'buyer' | 'admin' | null;
) => {;
  // Public routes accessible to everyone;
  let accessibleRoutes = [...publicPages, ...authPages],;
  ;
  // Add authenticated-only routes;
  if (isAuthenticated) {;
    accessibleRoutes = [...accessibleRoutes, ...sharedRoutes],;
    ;
    // Add role-specific routes;
    if (userType === 'creator' || userType === 'jobSeeker') {;
      accessibleRoutes = [...accessibleRoutes, ...talentRoutes],;

    }
    ;

    if (userType === 'employer' || userType === 'buyer') {;
      accessibleRoutes = [...accessibleRoutes, ...clientRoutes],;
    }
    ;'

    if (userType === 'admin') {;
      accessibleRoutes = [...accessibleRoutes, ...talentRoutes, ...clientRoutes, ...adminRoutes],;
    }
  }

;
  return accessibleRoutes;


>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD
  is_authenticated: boolean,
  user_type?: 'creator' | 'job_seeker' | 'employer' | 'buyer' | 'admin' | null) =>: any {
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

  // Public routes accessible to everyone;
  let accessible_routes = [...public_pages, ...auth_pages];
;
  // Add authenticated - only routes;

<<<<<<< HEAD
  // Check condition
if ( {) {
  $2
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

}
    accessible_routes = [...accessible_routes, ...shared_routes];
;
    // Add role - specific routes;

<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

}
      accessible_routes = [...accessible_routes, ...talent_routes, ...client_routes, ...admin_routes];
    }
  }
  return accessible_routes;
}
;

<<<<<<< HEAD
  ;
  return accessibleRoutes,;
},; // Define the types for our sitemap structure // Authentication Pages export const authPages: SitemapItem[] = [ {
  path: '/login', label: 'Login', description: 'Sign in to your account', priority: 0.6, changeFreq: 'monthly', lastmod: currentDate 
};
{
  path: '/signup', label: 'Sign Up', description: 'Create a new account', priority: 0.6, changeFreq: 'monthly', lastmod: currentDate, children: [ {
  path: '/signup/talent', label: 'Talent Registration', description: 'Sign up as a talent or creator', priority: 0.6, changeFreq: 'monthly', lastmod: currentDate 
};
{
  path: '/signup/client', label: 'Client Registration', description: 'Sign up as an employer or buyer', priority: 0.6, changeFreq: 'monthly', lastmod: currentDate 
}] 
};
// The complete sitemap export const completeSitemap: SitemapItem[] = [ ...publicPages;
...authPages;
...talentRoutes;
...clientRoutes;
...sharedRoutes;
...adminRoutes];
// Helper function to get appropriate routes based on user role 
}return accessibleRoutes 
};
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
>>>>>>> origin/cursor/delete-old-data-records-6bba

;
  return accessibleRoutes;
  
  return accessibleRoutes
;
  return accessibleRoutes;

};
<<<<<<< HEAD




=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
