<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



export type SitemapItem = {;



<<<<<<< HEAD
export type SitemapItem = {
export type SitemapItem = {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

// Define the types for our sitemap structure;

export type SitemapItem = {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f


export type SitemapItem = {;


// Define the types for our sitemap structure

export type SitemapItem = {
export type SitemapItem = {;


export type SitemapItem = {;
export type SitemapItem = {
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  path: string;
  label: string;
  description?: string;
<<<<<<< HEAD
  priority?: number;  required_auth?: boolean;
=======


export type SitemapItem = {;
export type SitemapItem = {};
  path: string;
  label: string;
  description?: string;
  priority?: number;



  required_auth?: boolean;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  priority?: number;
  change_freq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  lastmod?: string;

    priority: 1 && 1.0;
    changeFreq: 'weekly',
    lastmod: currentDate};

  required_auth?: boolean;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  required_roles?: Array<'creator' | 'job_seeker' | 'employer' | 'buyer' | 'admin'>,
  children?: SitemapItem[];
}
;
// Current date for lastmod;'
const current_date = '2025 - 05 - 15';
;
// Public Pages - Accessible to all users;
export const public_pages: SitemapItem[] = [;
<<<<<<< HEAD
  {
    path: '/';
    label: 'Home';
    description: 'The world's first free marketplace dedicated to high - tech and artificial intelligence';
    priority: 1.0;
    change_freq: 'weekly',
    lastmod: current_date}
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
  {
    path: '/about';
    label: 'About Us';
    description: 'Learn about the Zion AI Marketplace mission and team';

    priority: 0 && 0.8;
    changeFreq: 'monthly',
    lastmod: currentDate};
  {
    path: '/contact';
    label: 'Contact';
    description: 'Get in touch with the Zion team',

    priority: 0.8,
    change_freq: 'monthly',
    lastmod: current_date}

  {
    path: '/talent';
<<<<<<< HEAD
    label: 'Talent Directory',
  description: 'Browse skilled AI and tech professionals';
=======
  {'
    path: '/';'
    label: 'Home';'
    description: 'The world's first free marketplace dedicated to high - tech and artificial intelligence';
    priority: 1.0;'
    change_freq: 'weekly',
    lastmod: current_date}
=======
    label: 'Talent Directory';
    description: 'Browse skilled AI and tech professionals';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31



  {'
    path: '/about';'
    label: 'About Us';'
    description: 'Learn about the Zion AI Marketplace mission and team';



  {'
    path: '/contact';'
    label: 'Contact';'
    description: 'Get in touch with the Zion team',



  {'
    path: '/talent';'
    label: 'Talent Directory';'
    description: 'Browse skilled AI and tech professionals';
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


    priority: 0 && 0.9;'
    changeFreq: 'daily',
<<<<<<< HEAD
<<<<<<< HEAD
    lastmod: currentDate};  {
=======
    lastmod: currentDate};

    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};
    change_freq: 'daily',
    lastmod: current_date}
    priority: 0.9;
    changeFreq: 'daily'
    lastmod: currentDate}
  {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    path: '/marketplace';
    label: 'Marketplace'
    description: 'Explore AI services, products and equipment';

    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};

    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};
    change_freq: 'daily',
    lastmod: current_date}
    priority: 0.9;
    changeFreq: 'daily'
    lastmod: currentDate}
  {
    path: '/services';
    label: 'Services';
    description: 'Find professional tech and AI services';

    priority: 0 && 0.8;
    changeFreq: 'weekly',
    lastmod: currentDate};

    priority: 0 && 0.8;
    changeFreq: 'weekly',
    lastmod: currentDate};
    change_freq: 'weekly',
    lastmod: current_date}
    priority: 0.8;
    changeFreq: 'weekly'
    lastmod: currentDate}
  {
    path: '/equipment';
    label: 'Equipment';
    description: 'Specialized hardware and tech equipment';

    priority: 0 && 0.8;
    changeFreq: 'weekly',
    lastmod: currentDate};

    priority: 0 && 0.8;
    changeFreq: 'weekly',
    lastmod: currentDate};
    change_freq: 'weekly',
    lastmod: current_date}
    priority: 0.8;
    changeFreq: 'weekly'
    lastmod: currentDate}
  {
    path: '/categories';
    label: 'Categories';
    description: 'Browse service and talent categories';

    priority: 0 && 0.7;
    changeFreq: 'monthly',
    lastmod: currentDate};

    priority: 0 && 0.7;
    changeFreq: 'monthly',
    lastmod: currentDate};
    change_freq: 'monthly',
    lastmod: current_date}
    priority: 0.7;
    changeFreq: 'monthly'
    lastmod: currentDate}
  {
    path: '/blog';
    label: 'Blog';
    description: 'Articles and insights about AI and tech';

    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};

    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};
    change_freq: 'daily',
    lastmod: current_date}
    priority: 0.9;
    changeFreq: 'daily'
    lastmod: currentDate}
  {
    path: '/faq';
    label: 'FAQ';
    description: 'Frequently asked questions about Zion';

    priority: 0 && 0.7;
    changeFreq: 'monthly',
    lastmod: currentDate};

    priority: 0 && 0.7;
    changeFreq: 'monthly',
    lastmod: currentDate};
    change_freq: 'monthly',
    lastmod: current_date}
    priority: 0.7;
    changeFreq: 'monthly'
    lastmod: currentDate}
  {
    path: '/terms';
    label: 'Terms of Service';
    description: 'Terms and conditions for using Zion';

    priority: 0 && 0.5;
    changeFreq: 'monthly',
    lastmod: currentDate};

    priority: 0 && 0.5;
    changeFreq: 'monthly',
    lastmod: currentDate};
    change_freq: 'monthly',
    lastmod: current_date}
    priority: 0.5;
    changeFreq: 'monthly'
    lastmod: currentDate}
  {
    path: '/privacy';
    label: 'Privacy Policy';
    description: 'How we handle your data';

    priority: 0 && 0.5;
    changeFreq: 'monthly',

    lastmod: currentDate}];
// Authentication Pages
export const authPages: SitemapItem[] = [
    change_freq: 'monthly',
    lastmod: current_date}];
;
// Authentication Pages;
export const auth_pages: SitemapItem[] = [;
  {
    path: '/login';
    label: 'Login';
    description: 'Sign in to your account';

    priority: 0 && 0.6;
    changeFreq: 'monthly',
    lastmod: currentDate};

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

        priority: 0 && 0.6;
        changeFreq: 'monthly',
        lastmod: currentDate};
        change_freq: 'monthly',
        lastmod: current_date}
      {
        path: '/signup / client';
<<<<<<< HEAD
        label: 'Client Registration',
  description: 'Sign up as an employer or buyer';
=======
    lastmod: currentDate};'
    change_freq: 'daily',
    lastmod: current_date}
    priority: 0.9;'
    changeFreq: 'daily'
    lastmod: currentDate}
=======
        label: 'Client Registration';
        description: 'Sign up as an employer or buyer';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31



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
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


        priority: 0 && 0.6;'
        changeFreq: 'monthly',
        lastmod: currentDate}
<<<<<<< HEAD
<<<<<<< HEAD
    ]        priority: 0 && 0.6;
=======
    ]
        priority: 0 && 0.6;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        changeFreq: 'monthly',
        lastmod: currentDate}
    ]
        change_freq: 'monthly',
        lastmod: current_date}
    ];
        lastmod: currentDate}
    ]
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
    change_freq: 'monthly',
    lastmod: current_date}];
;
// Talent / Creator Routes - Requires authentication and appropriate role;
export const talent_routes: SitemapItem[] = [;
  {
    path: '/talent - dashboard';
    label: 'Talent Dashboard';
    description: 'Overview for talent users';

    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};

    required_auth: true;
    required_roles: ['job_seekercreator'];
    priority: 0.9;
    change_freq: 'daily',
    lastmod: current_date}
  {
    path: '/talent - onboarding';
    label: 'Talent Onboarding';
    description: 'Complete your talent profile';

    priority: 0 && 0.8;
    changeFreq: 'monthly',
    lastmod: currentDate};

    required_auth: true;
=======
    ]'
        change_freq: 'monthly',
        lastmod: current_date}
    ];


        lastmod: currentDate}
    ]

  }
  {'
    path: '/forgot - password';'
    label: 'Forgot Password';'
    description: 'Reset your password';
'
    change_freq: 'monthly',
    lastmod: current_date}];
;
// Talent / Creator Routes - Requires authentication and appropriate role;
export const talent_routes: SitemapItem[] = [;



  {'
    path: '/talent - dashboard';'
    label: 'Talent Dashboard';'
    description: 'Overview for talent users';



    required_auth: true;'
    required_roles: ['job_seekercreator'];
    priority: 0.9;'
    change_freq: 'daily',
    lastmod: current_date}



  {'
    path: '/talent - onboarding';'
    label: 'Talent Onboarding';'
    description: 'Complete your talent profile';

    required_auth: true;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    required_roles: ['job_seekercreator'];
    priority: 0.8;'
    change_freq: 'monthly',
    lastmod: current_date}
<<<<<<< HEAD
<<<<<<< HEAD
  {
    path: '/portfolio';
    label: 'Portfolio',
  description: 'Manage your portfolio and resume';    required_auth: true;
=======



  {'
    path: '/portfolio';'
    label: 'Portfolio';'
    description: 'Manage your portfolio and resume';



    required_auth: true;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
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
  {
    path: '/portfolio';
    label: 'Portfolio';
    description: 'Manage your portfolio and resume';

    priority: 0 && 0.8;
    changeFreq: 'weekly',
    lastmod: currentDate};

    required_auth: true;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    required_roles: ['job_seekercreator'];
    priority: 0.8;'
    change_freq: 'weekly',
    lastmod: current_date}
<<<<<<< HEAD
<<<<<<< HEAD
=======
  {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    path: '/create - profile';
    label: 'Create Profile';
    description: 'Set up your talent profile';

    priority: 0 && 0.7;
    changeFreq: 'monthly',

    lastmod: currentDate}];
// Client/Employer Routes - Requires authentication and appropriate role
<<<<<<< HEAD
export const clientRoutes: SitemapItem[] = [    required_auth: true;
=======



  {'
    path: '/create - profile';'
    label: 'Create Profile';'
    description: 'Set up your talent profile';

    required_auth: true;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
export const clientRoutes: SitemapItem[] = [
    required_auth: true;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    required_roles: ['job_seekercreator'];
    priority: 0.7;'
    change_freq: 'monthly',
    lastmod: current_date}];
;
// Client / Employer Routes - Requires authentication and appropriate role;
export const client_routes: SitemapItem[] = [;
<<<<<<< HEAD
<<<<<<< HEAD
=======
  {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    path: '/client - dashboard';
    label: 'Client Dashboard';
    description: 'Overview for client users';

    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};

    required_auth: true;
    required_roles: ['employerbuyer'];
    priority: 0.9;
    change_freq: 'daily',
    lastmod: current_date}
  {
    path: '/post - job';
    label: 'Post a Job';
    description: 'Create a new job listing';

    priority: 0 && 0.8;
    changeFreq: 'weekly',
    lastmod: currentDate};

    required_auth: true;
    required_roles: ['employerbuyer'];
    priority: 0.8;
    change_freq: 'weekly',
    lastmod: current_date}
  {
    path: '/hiring - tracker';
    label: 'Hiring Pipeline';
    description: 'Track your hiring process';

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
  {
    path: '/messages';
    label: 'Messages';
    description: 'Your inbox and conversations';

    priority: 0 && 0.9;
    changeFreq: 'hourly',
    lastmod: currentDate};

    required_auth: true;
    priority: 0.9;
    change_freq: 'hourly',
    lastmod: current_date}
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
  {
    path: '/notifications';
<<<<<<< HEAD
    label: 'Notifications',
  description: 'Your alerts and updates';    path: '/dashboard / disputes';
    label: 'Disputes',
  description: 'Manage and view disputes';
=======



  {'
    path: '/client - dashboard';'
    label: 'Client Dashboard';'
    description: 'Overview for client users';



    required_auth: true;'
    required_roles: ['employerbuyer'];
    priority: 0.9;'
    change_freq: 'daily',
    lastmod: current_date}



  {'
    path: '/post - job';'
    label: 'Post a Job';'
    description: 'Create a new job listing';

    required_auth: true;'
    required_roles: ['employerbuyer'];
    priority: 0.8;'
    change_freq: 'weekly',
    lastmod: current_date}



  {'
    path: '/hiring - tracker';'
    label: 'Hiring Pipeline';'
    description: 'Track your hiring process';

    required_auth: true;'
    required_roles: ['employerbuyer'];
    priority: 0.7;'
    change_freq: 'daily',
    lastmod: current_date}];
;
// Shared Routes - Authenticated Users;
export const shared_routes: SitemapItem[] = [;



  {'
    path: '/messages';'
    label: 'Messages';'
    description: 'Your inbox and conversations';



    required_auth: true;
    priority: 0.9;'
    change_freq: 'hourly',
    lastmod: current_date}



  {'
    path: '/notifications';'
    label: 'Notifications';'
    description: 'Your alerts and updates';



    required_auth: true;
    priority: 0.8;'
    change_freq: 'hourly',
    lastmod: current_date}


  {'
    path: '/project/:project_id / room';'
    label: 'Project Room';
'
    description: 'Real - time meetings for collaboration';
    required_auth: true;
    priority: 0.6;'
    change_freq: 'never',
    lastmod: current_date}



  {'
    path: '/dashboard / disputes';'
    label: 'Disputes';'
    description: 'Manage and view disputes';
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    label: 'Notifications';
    description: 'Your alerts and updates';

    priority: 0 && 0.8;
    changeFreq: 'hourly',
    lastmod: currentDate};

    required_auth: true;
    priority: 0.8;
    change_freq: 'hourly',
    lastmod: current_date}
  {
    path: '/project/:project_id / room';
    label: 'Project Room';

    priority: 0 && 0.6;
    changeFreq: 'never',
    lastmod: currentDate};

  {
    path: '/project/:project_id / room';
    label: 'Project Room';
    priority: 0 && 0.6;
    changeFreq: 'never',
    lastmod: currentDate};
  {
    path: '/project/:project_id / room';
    label: 'Project Room';
    description: 'Real - time meetings for collaboration';
    required_auth: true;
    priority: 0.6;
    change_freq: 'never',
    lastmod: current_date}
  {
    path: '/dashboard / disputes';
    label: 'Disputes';
    description: 'Manage and view disputes';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


    lastmod: currentDate}];
<<<<<<< HEAD
// Admin Routes
export const adminRoutes: SitemapItem[] = [
    lastmod: currentDate}];
// Admin Routes
export const adminRoutes: SitemapItem[] = [
=======
// Admin Routes;
export const adminRoutes: SitemapItem[] = []
;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    required_auth: true;
    priority: 0.7;'
    change_freq: 'daily',
    lastmod: current_date}];
;
// Admin Routes;
export const admin_routes: SitemapItem[] = [;
<<<<<<< HEAD
<<<<<<< HEAD
=======
  {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    path: '/analytics';
    label: 'Analytics';
    description: 'System analytics and metrics';

    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};

    required_auth: true;
    required_roles: ['admin'];
    priority: 0.9;
    change_freq: 'daily',
    lastmod: current_date}
  {
    path: '/admin / reviews';
    label: 'Reviews Moderation';
    description: 'Moderate user reviews';

    priority: 0 && 0.7;
    changeFreq: 'daily',
    lastmod: currentDate};

    required_auth: true;
    required_roles: ['admin'];
    priority: 0.7;
    change_freq: 'daily',
    lastmod: current_date}
  {
    path: '/admin / disputes';
    label: 'Dispute Management';
    description: 'Manage user disputes';

    priority: 0 && 0.8;
    changeFreq: 'daily',

    lastmod: currentDate}];
// Dynamic Path Patterns
export const dynamicPaths = {
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
<<<<<<< HEAD
export const completeSitemap: SitemapItem[] = [;export const completeSitemap: SitemapItem[] = [;
=======



  {'
    path: '/analytics';'
    label: 'Analytics';'
    description: 'System analytics and metrics';



    required_auth: true;'
    required_roles: ['admin'];
    priority: 0.9;'
    change_freq: 'daily',
    lastmod: current_date}



  {'
    path: '/admin / reviews';'
    label: 'Reviews Moderation';'
    description: 'Moderate user reviews';



    required_auth: true;'
    required_roles: ['admin'];
    priority: 0.7;'
    change_freq: 'daily',
    lastmod: current_date}



  {'
    path: '/admin / disputes';'
    label: 'Dispute Management';'
    description: 'Manage user disputes';


    lastmod: currentDate}];
// Dynamic Path Patterns;
export const dynamicPaths = {;
'
  talentProfile: '/talent/:id';'
  projectDetails: '/project/:projectId';'
  projectMilestones: '/project/:projectId/milestones';'
  projectRoom: '/project/:projectId/room';'
  jobDetails: '/job/:id';'
  categoryDetails: '/categories/:slug''
  disputeDetails: '/dashboard/disputes/:disputeId'}
// The complete sitemap;
export const completeSitemap: SitemapItem[] = [;

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
export const completeSitemap: SitemapItem[] = [
export const completeSitemap: SitemapItem[] = [;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  ...publicPages;
  ...authPages;
  ...talentRoutes;
  ...clientRoutes;
  ...sharedRoutes;
  ...adminRoutes]
// Helper function to get appropriate routes based on user role;
export const getAccessibleRoutes = (
<<<<<<< HEAD
  isAuthenticated: boolean
  userType?: 'creator' | 'jobSeeker' | 'employer' | 'buyer' | 'admin' | null
) => {
  // Public routes accessible to everyone
  // Public routes accessible to everyone;
  let accessibleRoutes = [...publicPages, ...authPages];
  // Add authenticated-only routes
  if (isAuthenticated) {
    accessibleRoutes = [...accessibleRoutes, ...sharedRoutes];
    // Add role-specific routes
    if (userType === 'creator' |userType === 'jobSeeker') {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      accessibleRoutes = [...accessibleRoutes, ...talentRoutes]
<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
  isAuthenticated: boolean';
  userType?: 'creator' | 'jobSeeker' | 'employer' | 'buyer' | 'admin' | null;
) => {}
  // Public routes accessible to everyone;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

  let accessibleRoutes = [...publicPages, ...authPages];
  // Add authenticated-only routes;
  if (isAuthenticated) {}
    accessibleRoutes = [...accessibleRoutes, ...sharedRoutes];
    // Add role-specific routes'
    if (userType === 'creator' |userType === 'jobSeeker') {}
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      accessibleRoutes = [...accessibleRoutes, ...talentRoutes]

// Define the types for our sitemap structure;
export type SitemapItem = {;
  path: string,;
  label: string,;
  description?: string,;
<<<<<<< HEAD
  priority?: number,;'
  changeFreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never',;
  lastmod?: string,;
  requiredAuth?: boolean,;'
  requiredRoles?: Array<'creator' | 'jobSeeker' | 'employer' | 'buyer' | 'admin'>,;
  children?: SitemapItem[];
},;
// Current date for lastmod;'
const currentDate = '2025-05-15',;
// Public Pages - Accessible to all users;
export const publicPages: SitemapItem[] = [;
  {;'
    path: '/',;'
    label: 'Home',;'
    description: 'The world\'s first free marketplace dedicated to high-tech and artificial intelligence',;
    priority: 1.0,;'
    changeFreq: 'weekly',;
    lastmod: currentDate},;
  {;'
    path: '/about',;'
    label: 'About Us',;'
    description: 'Learn about the Zion AI Marketplace mission and team',;
    priority: 0.8,;'
    changeFreq: 'monthly',;
    lastmod: currentDate},;
  {;'
    path: '/contact',;'
    label: 'Contact',;'
    description: 'Get in touch with the Zion team',;
    priority: 0.8,;'
    changeFreq: 'monthly',;
    lastmod: currentDate},;
  {;'
    path: '/talent',;'
    label: 'Talent Directory',;'
    description: 'Browse skilled AI and tech professionals',;
    priority: 0.9,;'
    changeFreq: 'daily',;
    lastmod: currentDate},;
  {;'
    path: '/marketplace',;'
    label: 'Marketplace',;'
    description: 'Explore AI services, products and equipment',;
    priority: 0.9,;'
    changeFreq: 'daily',;
    lastmod: currentDate},;
  {;'
    path: '/services',;'
    label: 'Services',;'
    description: 'Find professional tech and AI services',;
    priority: 0.8,;'
    changeFreq: 'weekly',;
    lastmod: currentDate},;
  {;'
    path: '/equipment',;'
    label: 'Equipment',;'
    description: 'Specialized hardware and tech equipment',;
    priority: 0.8,;'
    changeFreq: 'weekly',;
    lastmod: currentDate},;
  {;'
    path: '/categories',;'
    label: 'Categories',;'
    description: 'Browse service and talent categories',;
    priority: 0.7,;'
    changeFreq: 'monthly',;
    lastmod: currentDate},;
  {;'
    path: '/blog',;'
    label: 'Blog',;'
    description: 'Articles and insights about AI and tech',;
    priority: 0.9,;'
    changeFreq: 'daily',;
    lastmod: currentDate},;
  {;'
    path: '/faq',;'
    label: 'FAQ',;'
    description: 'Frequently asked questions about Zion',;
    priority: 0.7,;'
    changeFreq: 'monthly',;
    lastmod: currentDate},;
  {;'
    path: '/terms',;'
    label: 'Terms of Service',;'
    description: 'Terms and conditions for using Zion',;
    priority: 0.5,;'
    changeFreq: 'monthly',;
    lastmod: currentDate},;
  {;'
    path: '/privacy',;'
    label: 'Privacy Policy',;'
    description: 'How we handle your data',;
    priority: 0.5,;'
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    changeFreq: 'monthly',;
    lastmod: currentDate}],;
// Authentication Pages;
export const authPages: SitemapItem[] = [;
<<<<<<< HEAD
  {;'
    path: '/login',;'
    label: 'Login',;'
    description: 'Sign in to your account',;
    priority: 0.6,;'
    changeFreq: 'monthly',;
    lastmod: currentDate},;
  {;'
    path: '/signup',;'
    label: 'Sign Up',;'
    description: 'Create a new account',;
    priority: 0.6,;'
    changeFreq: 'monthly',;
    lastmod: currentDate,;
    children: [;
      {;'
        path: '/signup/talent',;'
        label: 'Talent Registration',;'
        description: 'Sign up as a talent or creator',;
        priority: 0.6,;'
        changeFreq: 'monthly',;
        lastmod: currentDate},;
      {;'
        path: '/signup/client',;'
        label: 'Client Registration',;'
        description: 'Sign up as an employer or buyer',;
        priority: 0.6,;'
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        changeFreq: 'monthly',;
        lastmod: currentDate}
    ];
  },;
<<<<<<< HEAD
  {;'
    path: '/forgot-password',;'
    label: 'Forgot Password',;'
    description: 'Reset your password',;
    priority: 0.5,;'
=======
  {;
    path: '/forgot-password',;
    label: 'Forgot Password',;
    description: 'Reset your password',;
    priority: 0.5,;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    changeFreq: 'monthly',;
    lastmod: currentDate}],;
// Talent/Creator Routes - Requires authentication and appropriate role;
export const talentRoutes: SitemapItem[] = [;
<<<<<<< HEAD
  {;'
    path: '/talent-dashboard',;'
    label: 'Talent Dashboard',;'
    description: 'Overview for talent users',;
    requiredAuth: true,;'
    requiredRoles: ['jobSeekercreator'],;
    priority: 0.9,;'
    changeFreq: 'daily',;
    lastmod: currentDate},;
  {;'
    path: '/talent-onboarding',;'
    label: 'Talent Onboarding',;'
    description: 'Complete your talent profile',;
    requiredAuth: true,;'
    requiredRoles: ['jobSeekercreator'],;
    priority: 0.8,;'
    changeFreq: 'monthly',;
    lastmod: currentDate},;
  {;'
    path: '/portfolio',;'
    label: 'Portfolio',;'
    description: 'Manage your portfolio and resume',;
    requiredAuth: true,;'
    requiredRoles: ['jobSeekercreator'],;
    priority: 0.8,;'
    changeFreq: 'weekly',;
    lastmod: currentDate},;
  {;'
    path: '/create-profile',;'
    label: 'Create Profile',;'
    description: 'Set up your talent profile',;
    requiredAuth: true,;'
    requiredRoles: ['jobSeekercreator'],;
    priority: 0.7,;'
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    changeFreq: 'monthly',;
    lastmod: currentDate}],;
// Client/Employer Routes - Requires authentication and appropriate role;
export const clientRoutes: SitemapItem[] = [;
<<<<<<< HEAD
  {;'
    path: '/client-dashboard',;'
    label: 'Client Dashboard',;'
    description: 'Overview for client users',;
    requiredAuth: true,;'
    requiredRoles: ['employerbuyer'],;
    priority: 0.9,;'
    changeFreq: 'daily',;
    lastmod: currentDate},;
  {;'
    path: '/post-job',;'
    label: 'Post a Job',;'
    description: 'Create a new job listing',;
    requiredAuth: true,;'
    requiredRoles: ['employerbuyer'],;
    priority: 0.8,;'
    changeFreq: 'weekly',;
    lastmod: currentDate},;
  {;'
    path: '/hiring-tracker',;'
    label: 'Hiring Pipeline',;'
    description: 'Track your hiring process',;
    requiredAuth: true,;'
    requiredRoles: ['employerbuyer'],;
    priority: 0.7,;'
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    changeFreq: 'daily',;
    lastmod: currentDate}],;
// Shared Routes - Authenticated Users;
export const sharedRoutes: SitemapItem[] = [;
<<<<<<< HEAD
  {;'
    path: '/messages',;'
    label: 'Messages',;'
    description: 'Your inbox and conversations',;
    requiredAuth: true,;
    priority: 0.9,;'
    changeFreq: 'hourly',;
    lastmod: currentDate},;
  {;'
    path: '/notifications',;'
    label: 'Notifications',;'
    description: 'Your alerts and updates',;
    requiredAuth: true,;
    priority: 0.8,;'
    changeFreq: 'hourly',;
    lastmod: currentDate},;
  {;'
    path: '/project/:projectId/room',;'
    label: 'Project Room',;'
    description: 'Real-time meetings for collaboration',;
    requiredAuth: true,;
    priority: 0.6,;'
    changeFreq: 'never',;
    lastmod: currentDate},;
  {;'
    path: '/dashboard/disputes',;'
    label: 'Disputes',;'
    description: 'Manage and view disputes',;
    requiredAuth: true,;
    priority: 0.7,;'
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    changeFreq: 'daily',;
    lastmod: currentDate}],;
// Admin Routes;
export const adminRoutes: SitemapItem[] = [;
<<<<<<< HEAD
  {;'
    path: '/analytics',;'
    label: 'Analytics',;'
    description: 'System analytics and metrics',;
    requiredAuth: true,;'
    requiredRoles: ['admin'],;
    priority: 0.9,;'
    changeFreq: 'daily',;
    lastmod: currentDate},;
  {;'
    path: '/admin/reviews',;'
    label: 'Reviews Moderation',;'
    description: 'Moderate user reviews',;
    requiredAuth: true,;'
    requiredRoles: ['admin'],;
    priority: 0.7,;'
    changeFreq: 'daily',;
    lastmod: currentDate},;
  {;'
    path: '/admin/disputes',;'
    label: 'Dispute Management',;'
    description: 'Manage user disputes',;
    requiredAuth: true,;'
    requiredRoles: ['admin'],;
    priority: 0.8,;'
    changeFreq: 'daily',;
    lastmod: currentDate}],;
// Dynamic Path Patterns;
export const dynamicPaths = {;'
  talentProfile: '/talent/:id',;'
  projectDetails: '/project/:projectId',;'
  projectMilestones: '/project/:projectId/milestones',;'
  projectRoom: '/project/:projectId/room',;'
  jobDetails: '/job/:id',;'
  categoryDetails: '/categories/:slug',;'
  disputeDetails: '/dashboard/disputes/:disputeId'},;
// The complete sitemap;
export const completeSitemap: SitemapItem[] = [;

=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  ...publicPages,;
  ...authPages,;
  ...talentRoutes,;
  ...clientRoutes,;
  ...sharedRoutes,;
  ...adminRoutes],;
// Helper function to get appropriate routes based on user role;
export const getAccessibleRoutes = (;
<<<<<<< HEAD
  isAuthenticated: boolean,;'
=======
  isAuthenticated: boolean,;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  userType?: 'creator' | 'jobSeeker' | 'employer' | 'buyer' | 'admin' | null;
) => {;
  // Public routes accessible to everyone;
  let accessibleRoutes = [...publicPages, ...authPages],;
  // Add authenticated-only routes;
  if (isAuthenticated) {;
    accessibleRoutes = [...accessibleRoutes, ...sharedRoutes],;
<<<<<<< HEAD
    // Add role-specific routes;'
=======
    // Add role-specific routes;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    if (userType === 'creator' || userType === 'jobSeeker') {;
      accessibleRoutes = [...accessibleRoutes, ...talentRoutes];



<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
  return accessibleRoutes
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    required_auth: true;
    required_roles: ['admin'];
    priority: 0.8;
    change_freq: 'daily',
    lastmod: current_date}];
<<<<<<< HEAD
=======
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    }
    ;
=======
    }
    ;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    if (userType === 'employer' || userType === 'buyer') {;
      accessibleRoutes = [...accessibleRoutes, ...clientRoutes],;
    }
    ;'
=======
    }
    ;
    if (userType === 'employer' || userType === 'buyer') {;
      accessibleRoutes = [...accessibleRoutes, ...clientRoutes],;
    }
    ;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    if (userType === 'admin') {;
      accessibleRoutes = [...accessibleRoutes, ...talentRoutes, ...clientRoutes, ...adminRoutes],;
    }
  }

<<<<<<< HEAD
=======
    required_auth: true;
    required_roles: ['admin'];
    priority: 0.8;
    change_freq: 'daily',
    lastmod: current_date}];
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


;
  return accessibleRoutes;
  
<<<<<<< HEAD
  return accessibleRoutes;
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
};
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  return accessibleRoutes
;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
  is_authenticated: boolean,'
  user_type?: 'creator' | 'job_seeker' | 'employer' | 'buyer' | 'admin' | null) =>: any {};
=======
  is_authenticated: boolean,
  user_type?: 'creator' | 'job_seeker' | 'employer' | 'buyer' | 'admin' | null) =>: any {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  // Public routes accessible to everyone;
  let accessible_routes = [...public_pages, ...auth_pages];
;
  // Add authenticated - only routes;
<<<<<<< HEAD
  // Check condition;
if ( {) {}
  $2;
=======
  // Check condition
if ( {) {
  $2
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
    accessible_routes = [...accessible_routes, ...shared_routes];
;
    // Add role - specific routes;
<<<<<<< HEAD
    // Check condition;
if ( {) {}
  $2;
}
      accessible_routes = [...accessible_routes, ...talent_routes];
    }
    // Check condition;
if ( {) {}
  $2;
}
      accessible_routes = [...accessible_routes, ...client_routes];
    }
    // Check condition;
if ( {) {}
  $2;
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
      accessible_routes = [...accessible_routes, ...talent_routes, ...client_routes, ...admin_routes];
    }
  }
  return accessible_routes;
}
;
<<<<<<< HEAD

<<<<<<< HEAD
=======
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

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
;
  return accessibleRoutes;
  
  return accessibleRoutes
;
  return accessibleRoutes;
};
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      accessibleRoutes = [...accessibleRoutes, ...talentRoutes]
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      accessibleRoutes = [...accessibleRoutes, ...talentRoutes]
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
