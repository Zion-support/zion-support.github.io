<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
// Define the types for our sitemap structure;



export type SitemapItem = {;

<<<<<<< HEAD

// Define the types for our sitemap structure

export type SitemapItem = {
export type SitemapItem = {;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

// Define the types for our sitemap structure;

export type SitemapItem = {
=======


export type SitemapItem = {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  path: string;
  label: string;
  description?: string;
  priority?: number;
<<<<<<< HEAD
<<<<<<< HEAD
=======
  change_freq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  lastmod?: string;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    priority: 1 && 1.0;
    changeFreq: 'weekly',
    lastmod: currentDate};
=======
  change_freq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  lastmod?: string;

    priority: 1 && 1.0;
    changeFreq: 'weekly',
    lastmod: currentDate};

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {
    path: '/about';
    label: 'About Us';
    description: 'Learn about the Zion AI Marketplace mission and team';
<<<<<<< HEAD
<<<<<<< HEAD
    priority: 0 && 0.8;
    changeFreq: 'monthly',
    lastmod: currentDate};
    change_freq: 'monthly',
    lastmod: current_date}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    priority: 0 && 0.8;
    changeFreq: 'monthly',
    lastmod: currentDate};
=======
    change_freq: 'monthly',
    lastmod: current_date}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {
    path: '/contact';
    label: 'Contact';
    description: 'Get in touch with the Zion team',
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    priority: 0.8,
    change_freq: 'monthly',
    lastmod: current_date}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {
    path: '/talent';
    label: 'Talent Directory';
    description: 'Browse skilled AI and tech professionals';
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};
    change_freq: 'daily',
    lastmod: current_date}
<<<<<<< HEAD
    priority: 0.9;
    changeFreq: 'daily'
    lastmod: currentDate}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};

=======
    change_freq: 'daily',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {
    path: '/marketplace';
    label: 'Marketplace'
    description: 'Explore AI services, products and equipment';
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};
    change_freq: 'daily',
    lastmod: current_date}
<<<<<<< HEAD
    priority: 0.9;
    changeFreq: 'daily'
    lastmod: currentDate}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};

=======
    change_freq: 'daily',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {
    path: '/services';
    label: 'Services';
    description: 'Find professional tech and AI services';
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    priority: 0 && 0.8;
    changeFreq: 'weekly',
    lastmod: currentDate};
    change_freq: 'weekly',
    lastmod: current_date}
<<<<<<< HEAD
    priority: 0.8;
    changeFreq: 'weekly'
    lastmod: currentDate}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    priority: 0 && 0.8;
    changeFreq: 'weekly',
    lastmod: currentDate};

=======
    change_freq: 'weekly',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {
    path: '/equipment';
    label: 'Equipment';
    description: 'Specialized hardware and tech equipment';
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    priority: 0 && 0.8;
    changeFreq: 'weekly',
    lastmod: currentDate};
    change_freq: 'weekly',
    lastmod: current_date}
<<<<<<< HEAD
    priority: 0.8;
    changeFreq: 'weekly'
    lastmod: currentDate}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    priority: 0 && 0.8;
    changeFreq: 'weekly',
    lastmod: currentDate};

=======
    change_freq: 'weekly',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {
    path: '/categories';
    label: 'Categories';
    description: 'Browse service and talent categories';
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    priority: 0 && 0.7;
    changeFreq: 'monthly',
    lastmod: currentDate};
    change_freq: 'monthly',
    lastmod: current_date}
<<<<<<< HEAD
    priority: 0.7;
    changeFreq: 'monthly'
    lastmod: currentDate}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    priority: 0 && 0.7;
    changeFreq: 'monthly',
    lastmod: currentDate};

=======
    change_freq: 'monthly',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {
    path: '/blog';
    label: 'Blog';
    description: 'Articles and insights about AI and tech';
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};
    change_freq: 'daily',
    lastmod: current_date}
<<<<<<< HEAD
    priority: 0.9;
    changeFreq: 'daily'
    lastmod: currentDate}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};

=======
    change_freq: 'daily',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {
    path: '/faq';
    label: 'FAQ';
    description: 'Frequently asked questions about Zion';
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    priority: 0 && 0.7;
    changeFreq: 'monthly',
    lastmod: currentDate};
    change_freq: 'monthly',
    lastmod: current_date}
<<<<<<< HEAD
    priority: 0.7;
    changeFreq: 'monthly'
    lastmod: currentDate}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    priority: 0 && 0.7;
    changeFreq: 'monthly',
    lastmod: currentDate};

=======
    change_freq: 'monthly',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {
    path: '/terms';
    label: 'Terms of Service';
    description: 'Terms and conditions for using Zion';
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    priority: 0 && 0.5;
    changeFreq: 'monthly',
    lastmod: currentDate};
    change_freq: 'monthly',
    lastmod: current_date}
<<<<<<< HEAD
    priority: 0.5;
    changeFreq: 'monthly'
    lastmod: currentDate}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    priority: 0 && 0.5;
    changeFreq: 'monthly',
    lastmod: currentDate};

=======
    change_freq: 'monthly',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {
    path: '/privacy';
    label: 'Privacy Policy';
    description: 'How we handle your data';
<<<<<<< HEAD
<<<<<<< HEAD
    priority: 0 && 0.5;
    changeFreq: 'monthly',
    lastmod: currentDate}];
// Authentication Pages
export const authPages: SitemapItem[] = [
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    priority: 0 && 0.5;
    changeFreq: 'monthly',

    lastmod: currentDate}];
// Authentication Pages
export const authPages: SitemapItem[] = [
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    change_freq: 'monthly',
    lastmod: current_date}];
;
// Authentication Pages;
export const auth_pages: SitemapItem[] = [;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {
    path: '/login';
    label: 'Login';
    description: 'Sign in to your account';
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    priority: 0 && 0.6;
    changeFreq: 'monthly',
    lastmod: currentDate};

=======
    change_freq: 'monthly',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {
    path: '/signup';
    label: 'Sign Up';
    description: 'Create a new account';
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    priority: 0.6;
    change_freq: 'monthly';
    lastmod: current_date;
    children: [;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {
        path: '/signup / talent';
        label: 'Talent Registration';
        description: 'Sign up as a talent or creator';
<<<<<<< HEAD
<<<<<<< HEAD
        priority: 0 && 0.6;
        changeFreq: 'monthly',
        lastmod: currentDate};
        change_freq: 'monthly',
        lastmod: current_date}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        priority: 0 && 0.6;
        changeFreq: 'monthly',
        lastmod: currentDate};

=======
        change_freq: 'monthly',
        lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {
        path: '/signup / client';
        label: 'Client Registration';
        description: 'Sign up as an employer or buyer';
<<<<<<< HEAD
<<<<<<< HEAD
        priority: 0 && 0.6;
        changeFreq: 'monthly',
        lastmod: currentDate}
    ]
        change_freq: 'monthly',
        lastmod: current_date}
    ];
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        priority: 0 && 0.6;
        changeFreq: 'monthly',

        lastmod: currentDate}
    ]
=======
        change_freq: 'monthly',
        lastmod: current_date}
    ];
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  {
    path: '/forgot - password';
    label: 'Forgot Password';
    description: 'Reset your password';
<<<<<<< HEAD
<<<<<<< HEAD
    priority: 0 && 0.5;
    changeFreq: 'monthly',
    lastmod: currentDate}];
// Talent/Creator Routes - Requires authentication and appropriate role
export const talentRoutes: SitemapItem[] = [
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    priority: 0 && 0.5;
    changeFreq: 'monthly',

    lastmod: currentDate}];
// Talent/Creator Routes - Requires authentication and appropriate role
export const talentRoutes: SitemapItem[] = [
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    change_freq: 'monthly',
    lastmod: current_date}];
;
// Talent / Creator Routes - Requires authentication and appropriate role;
export const talent_routes: SitemapItem[] = [;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {
    path: '/talent - dashboard';
    label: 'Talent Dashboard';
    description: 'Overview for talent users';
<<<<<<< HEAD
<<<<<<< HEAD
    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    required_auth: true;
    required_roles: ['job_seekercreator'];
    priority: 0.9;
    change_freq: 'daily',
    lastmod: current_date}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {
    path: '/talent - onboarding';
    label: 'Talent Onboarding';
    description: 'Complete your talent profile';
<<<<<<< HEAD
<<<<<<< HEAD
    priority: 0 && 0.8;
    changeFreq: 'monthly',
    lastmod: currentDate};
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    priority: 0 && 0.8;
    changeFreq: 'monthly',
    lastmod: currentDate};

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    required_auth: true;
    required_roles: ['job_seekercreator'];
    priority: 0.8;
    change_freq: 'monthly',
    lastmod: current_date}
<<<<<<< HEAD
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {
    path: '/portfolio';
    label: 'Portfolio';
    description: 'Manage your portfolio and resume';
<<<<<<< HEAD
<<<<<<< HEAD
    priority: 0 && 0.8;
    changeFreq: 'weekly',
    lastmod: currentDate};
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    priority: 0 && 0.8;
    changeFreq: 'weekly',
    lastmod: currentDate};

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    required_auth: true;
    required_roles: ['job_seekercreator'];
    priority: 0.8;
    change_freq: 'weekly',
    lastmod: current_date}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {
    path: '/create - profile';
    label: 'Create Profile';
    description: 'Set up your talent profile';
<<<<<<< HEAD
<<<<<<< HEAD
    priority: 0 && 0.7;
    changeFreq: 'monthly',
    lastmod: currentDate}];
// Client/Employer Routes - Requires authentication and appropriate role
export const clientRoutes: SitemapItem[] = [
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    priority: 0 && 0.7;
    changeFreq: 'monthly',

    lastmod: currentDate}];
// Client/Employer Routes - Requires authentication and appropriate role
export const clientRoutes: SitemapItem[] = [
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    required_auth: true;
    required_roles: ['job_seekercreator'];
    priority: 0.7;
    change_freq: 'monthly',
    lastmod: current_date}];
;
// Client / Employer Routes - Requires authentication and appropriate role;
export const client_routes: SitemapItem[] = [;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {
    path: '/client - dashboard';
    label: 'Client Dashboard';
    description: 'Overview for client users';
<<<<<<< HEAD
<<<<<<< HEAD
    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    required_auth: true;
    required_roles: ['employerbuyer'];
    priority: 0.9;
    change_freq: 'daily',
    lastmod: current_date}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {
    path: '/post - job';
    label: 'Post a Job';
    description: 'Create a new job listing';
<<<<<<< HEAD
<<<<<<< HEAD
    priority: 0 && 0.8;
    changeFreq: 'weekly',
    lastmod: currentDate};
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    priority: 0 && 0.8;
    changeFreq: 'weekly',
    lastmod: currentDate};

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    required_auth: true;
    required_roles: ['employerbuyer'];
    priority: 0.8;
    change_freq: 'weekly',
    lastmod: current_date}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {
    path: '/hiring - tracker';
    label: 'Hiring Pipeline';
    description: 'Track your hiring process';
<<<<<<< HEAD
<<<<<<< HEAD
    priority: 0 && 0.7;
    changeFreq: 'daily',
    lastmod: currentDate}];
// Shared Routes - Authenticated Users
export const sharedRoutes: SitemapItem[] = [
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    priority: 0 && 0.7;
    changeFreq: 'daily',

    lastmod: currentDate}];
// Shared Routes - Authenticated Users
export const sharedRoutes: SitemapItem[] = [
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    required_auth: true;
    required_roles: ['employerbuyer'];
    priority: 0.7;
    change_freq: 'daily',
    lastmod: current_date}];
;
// Shared Routes - Authenticated Users;
export const shared_routes: SitemapItem[] = [;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {
    path: '/messages';
    label: 'Messages';
    description: 'Your inbox and conversations';
<<<<<<< HEAD
<<<<<<< HEAD
    priority: 0 && 0.9;
    changeFreq: 'hourly',
    lastmod: currentDate};
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    priority: 0 && 0.9;
    changeFreq: 'hourly',
    lastmod: currentDate};

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    required_auth: true;
    priority: 0.9;
    change_freq: 'hourly',
    lastmod: current_date}
<<<<<<< HEAD
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {
    path: '/notifications';
    label: 'Notifications';
    description: 'Your alerts and updates';
<<<<<<< HEAD
<<<<<<< HEAD
    priority: 0 && 0.8;
    changeFreq: 'hourly',
    lastmod: currentDate};
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    priority: 0 && 0.8;
    changeFreq: 'hourly',
    lastmod: currentDate};

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    required_auth: true;
    priority: 0.8;
    change_freq: 'hourly',
    lastmod: current_date}
<<<<<<< HEAD
<<<<<<< HEAD
  {
    path: '/project/:project_id / room';
    label: 'Project Room';
    priority: 0 && 0.6;
    changeFreq: 'never',
    lastmod: currentDate};
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  {
    path: '/project/:project_id / room';
    label: 'Project Room';

    priority: 0 && 0.6;
    changeFreq: 'never',
    lastmod: currentDate};

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    description: 'Real - time meetings for collaboration';
    required_auth: true;
    priority: 0.6;
    change_freq: 'never',
    lastmod: current_date}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {
    path: '/dashboard / disputes';
    label: 'Disputes';
    description: 'Manage and view disputes';
<<<<<<< HEAD
<<<<<<< HEAD
    priority: 0 && 0.7;
    changeFreq: 'daily',
    lastmod: currentDate}];
// Admin Routes
export const adminRoutes: SitemapItem[] = [
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    priority: 0 && 0.7;
    changeFreq: 'daily',

    lastmod: currentDate}];
// Admin Routes
export const adminRoutes: SitemapItem[] = [
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    required_auth: true;
    priority: 0.7;
    change_freq: 'daily',
    lastmod: current_date}];
;
// Admin Routes;
export const admin_routes: SitemapItem[] = [;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {
    path: '/analytics';
    label: 'Analytics';
    description: 'System analytics and metrics';
<<<<<<< HEAD
<<<<<<< HEAD
    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    required_auth: true;
    required_roles: ['admin'];
    priority: 0.9;
    change_freq: 'daily',
    lastmod: current_date}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {
    path: '/admin / reviews';
    label: 'Reviews Moderation';
    description: 'Moderate user reviews';
<<<<<<< HEAD
<<<<<<< HEAD
    priority: 0 && 0.7;
    changeFreq: 'daily',
    lastmod: currentDate};
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    priority: 0 && 0.7;
    changeFreq: 'daily',
    lastmod: currentDate};

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    required_auth: true;
    required_roles: ['admin'];
    priority: 0.7;
    change_freq: 'daily',
    lastmod: current_date}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {
    path: '/admin / disputes';
    label: 'Dispute Management';
    description: 'Manage user disputes';
<<<<<<< HEAD
<<<<<<< HEAD
    priority: 0 && 0.8;
    changeFreq: 'daily',
    lastmod: currentDate}];
// Dynamic Path Patterns
export const dynamicPaths = {
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    priority: 0 && 0.8;
    changeFreq: 'daily',

    lastmod: currentDate}];
// Dynamic Path Patterns
export const dynamicPaths = {
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  talentProfile: '/talent/:id';
  projectDetails: '/project/:projectId';
  projectMilestones: '/project/:projectId/milestones';
  projectRoom: '/project/:projectId/room';
  jobDetails: '/job/:id';
  categoryDetails: '/categories/:slug'
  disputeDetails: '/dashboard/disputes/:disputeId'}
// The complete sitemap
<<<<<<< HEAD
<<<<<<< HEAD
export const completeSitemap: SitemapItem[] = [;
=======
export const completeSitemap: SitemapItem[] = [
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
export const completeSitemap: SitemapItem[] = [
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
  // Public routes accessible to everyone;
=======
  // Public routes accessible to everyone
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  // Public routes accessible to everyone
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  let accessibleRoutes = [...publicPages, ...authPages];
  // Add authenticated-only routes
  if (isAuthenticated) {
    accessibleRoutes = [...accessibleRoutes, ...sharedRoutes];
    // Add role-specific routes
    if (userType === 'creator' |userType === 'jobSeeker') {
      accessibleRoutes = [...accessibleRoutes, ...talentRoutes]
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD

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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

    required_auth: true;
    required_roles: ['admin'];
    priority: 0.8;
    change_freq: 'daily',
    lastmod: current_date}];
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


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
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    if (userType === 'employer' |userType === 'buyer') {
      accessibleRoutes = [...accessibleRoutes, ...clientRoutes]
    }
    if (userType === 'admin') {
      accessibleRoutes = [...accessibleRoutes, ...talentRoutes, ...clientRoutes, ...adminRoutes]
    }
  }
<<<<<<< HEAD
  return accessibleRoutes
}
=======

    required_auth: true;
    required_roles: ['admin'];
    priority: 0.8;
    change_freq: 'daily',
    lastmod: current_date}];
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

;
  return accessibleRoutes;
  
  return accessibleRoutes
;
<<<<<<< HEAD
  return accessibleRoutes;
};
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

  return accessibleRoutes;


};
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
