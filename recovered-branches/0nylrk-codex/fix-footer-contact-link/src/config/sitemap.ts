<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD

export type SitemapItem = {;
export type SitemapItem = {
=======
// Define the types for our sitemap structure;

export type SitemapItem = {
=======
=======
// Define the types for our sitemap structure;

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


export type SitemapItem = {;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

// Define the types for our sitemap structure

export type SitemapItem = {
export type SitemapItem = {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


export type SitemapItem = {;
export type SitemapItem = {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  path: string;
  label: string;
  description?: string;
  priority?: number;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
  change_freq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  lastmod?: string;

    priority: 1 && 1.0;
    changeFreq: 'weekly',
    lastmod: currentDate};

=======
=======
    priority: 1 && 1.0;
    changeFreq: 'weekly',
    lastmod: currentDate};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  {
    path: '/about';
    label: 'About Us';
    description: 'Learn about the Zion AI Marketplace mission and team';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

    priority: 0 && 0.8;
    changeFreq: 'monthly',
    lastmod: currentDate};
=======
    change_freq: 'monthly',
    lastmod: current_date}

=======
    priority: 0 && 0.8;
    changeFreq: 'monthly',
    lastmod: currentDate};
    change_freq: 'monthly',
    lastmod: current_date}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  {
    path: '/contact';
    label: 'Contact';
    description: 'Get in touch with the Zion team',
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

    priority: 0.8,
    change_freq: 'monthly',
    lastmod: current_date}

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  {
    path: '/talent';
    label: 'Talent Directory';
    description: 'Browse skilled AI and tech professionals';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};

=======
    change_freq: 'daily',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};
    change_freq: 'daily',
    lastmod: current_date}
    priority: 0.9;
    changeFreq: 'daily'
    lastmod: currentDate}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  {
    path: '/marketplace';
    label: 'Marketplace'
    description: 'Explore AI services, products and equipment';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};

=======
    change_freq: 'daily',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};
    change_freq: 'daily',
    lastmod: current_date}
    priority: 0.9;
    changeFreq: 'daily'
    lastmod: currentDate}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  {
    path: '/services';
    label: 'Services';
    description: 'Find professional tech and AI services';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

    priority: 0 && 0.8;
    changeFreq: 'weekly',
    lastmod: currentDate};

=======
    change_freq: 'weekly',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
    priority: 0 && 0.8;
    changeFreq: 'weekly',
    lastmod: currentDate};
    change_freq: 'weekly',
    lastmod: current_date}
    priority: 0.8;
    changeFreq: 'weekly'
    lastmod: currentDate}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  {
    path: '/equipment';
    label: 'Equipment';
    description: 'Specialized hardware and tech equipment';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

    priority: 0 && 0.8;
    changeFreq: 'weekly',
    lastmod: currentDate};

=======
    change_freq: 'weekly',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
    priority: 0 && 0.8;
    changeFreq: 'weekly',
    lastmod: currentDate};
    change_freq: 'weekly',
    lastmod: current_date}
    priority: 0.8;
    changeFreq: 'weekly'
    lastmod: currentDate}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  {
    path: '/categories';
    label: 'Categories';
    description: 'Browse service and talent categories';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

    priority: 0 && 0.7;
    changeFreq: 'monthly',
    lastmod: currentDate};

=======
    change_freq: 'monthly',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
    priority: 0 && 0.7;
    changeFreq: 'monthly',
    lastmod: currentDate};
    change_freq: 'monthly',
    lastmod: current_date}
    priority: 0.7;
    changeFreq: 'monthly'
    lastmod: currentDate}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  {
    path: '/blog';
    label: 'Blog';
    description: 'Articles and insights about AI and tech';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};

=======
    change_freq: 'daily',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};
    change_freq: 'daily',
    lastmod: current_date}
    priority: 0.9;
    changeFreq: 'daily'
    lastmod: currentDate}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  {
    path: '/faq';
    label: 'FAQ';
    description: 'Frequently asked questions about Zion';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

    priority: 0 && 0.7;
    changeFreq: 'monthly',
    lastmod: currentDate};

=======
    change_freq: 'monthly',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
    priority: 0 && 0.7;
    changeFreq: 'monthly',
    lastmod: currentDate};
    change_freq: 'monthly',
    lastmod: current_date}
    priority: 0.7;
    changeFreq: 'monthly'
    lastmod: currentDate}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  {
    path: '/terms';
    label: 'Terms of Service';
    description: 'Terms and conditions for using Zion';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

    priority: 0 && 0.5;
    changeFreq: 'monthly',
    lastmod: currentDate};

=======
    change_freq: 'monthly',
    lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
    priority: 0 && 0.5;
    changeFreq: 'monthly',
    lastmod: currentDate};
    change_freq: 'monthly',
    lastmod: current_date}
    priority: 0.5;
    changeFreq: 'monthly'
    lastmod: currentDate}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  {
    path: '/privacy';
    label: 'Privacy Policy';
    description: 'How we handle your data';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

    priority: 0 && 0.5;
    changeFreq: 'monthly',

=======
    priority: 0 && 0.5;
    changeFreq: 'monthly',
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  {
    path: '/login';
    label: 'Login';
    description: 'Sign in to your account';
<<<<<<< HEAD
<<<<<<< HEAD

    priority: 0 && 0.6;
    changeFreq: 'monthly',
    lastmod: currentDate};

=======
    change_freq: 'monthly',
    lastmod: current_date}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    change_freq: 'monthly',
    lastmod: current_date}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  {
    path: '/signup';
    label: 'Sign Up';
    description: 'Create a new account';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    priority: 0.6;
    change_freq: 'monthly';
    lastmod: current_date;
    children: [;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      {
        path: '/signup / talent';
        label: 'Talent Registration';
        description: 'Sign up as a talent or creator';
<<<<<<< HEAD
<<<<<<< HEAD

        priority: 0 && 0.6;
        changeFreq: 'monthly',
        lastmod: currentDate};

=======
        change_freq: 'monthly',
        lastmod: current_date}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
        priority: 0 && 0.6;
        changeFreq: 'monthly',
        lastmod: currentDate};
        change_freq: 'monthly',
        lastmod: current_date}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
=======
        change_freq: 'monthly',
        lastmod: current_date}
    ];
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
        priority: 0 && 0.6;
        changeFreq: 'monthly',
        lastmod: currentDate}
    ]
        change_freq: 'monthly',
        lastmod: current_date}
    ];
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
        lastmod: currentDate}
    ]
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
    priority: 0 && 0.5;
    changeFreq: 'monthly',
    lastmod: currentDate}];
// Talent/Creator Routes - Requires authentication and appropriate role
export const talentRoutes: SitemapItem[] = [
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    change_freq: 'monthly',
    lastmod: current_date}];
;
// Talent / Creator Routes - Requires authentication and appropriate role;
export const talent_routes: SitemapItem[] = [;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    required_auth: true;
    required_roles: ['job_seekercreator'];
    priority: 0.9;
    change_freq: 'daily',
    lastmod: current_date}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  {
    path: '/talent - onboarding';
    label: 'Talent Onboarding';
    description: 'Complete your talent profile';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

    priority: 0 && 0.8;
    changeFreq: 'monthly',
    lastmod: currentDate};

=======
=======
    priority: 0 && 0.8;
    changeFreq: 'monthly',
    lastmod: currentDate};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    required_auth: true;
    required_roles: ['job_seekercreator'];
    priority: 0.8;
    change_freq: 'monthly',
    lastmod: current_date}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  {
    path: '/portfolio';
    label: 'Portfolio';
    description: 'Manage your portfolio and resume';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

    priority: 0 && 0.8;
    changeFreq: 'weekly',
    lastmod: currentDate};

=======
=======
    priority: 0 && 0.8;
    changeFreq: 'weekly',
    lastmod: currentDate};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    required_auth: true;
    required_roles: ['job_seekercreator'];
    priority: 0.8;
    change_freq: 'weekly',
    lastmod: current_date}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
    priority: 0 && 0.7;
    changeFreq: 'monthly',
    lastmod: currentDate}];
// Client/Employer Routes - Requires authentication and appropriate role
export const clientRoutes: SitemapItem[] = [
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    required_auth: true;
    required_roles: ['job_seekercreator'];
    priority: 0.7;
    change_freq: 'monthly',
    lastmod: current_date}];
;
// Client / Employer Routes - Requires authentication and appropriate role;
export const client_routes: SitemapItem[] = [;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    required_auth: true;
    required_roles: ['employerbuyer'];
    priority: 0.9;
    change_freq: 'daily',
    lastmod: current_date}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
    priority: 0 && 0.8;
    changeFreq: 'weekly',
    lastmod: currentDate};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    required_auth: true;
    required_roles: ['employerbuyer'];
    priority: 0.8;
    change_freq: 'weekly',
    lastmod: current_date}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
    priority: 0 && 0.7;
    changeFreq: 'daily',
    lastmod: currentDate}];
// Shared Routes - Authenticated Users
export const sharedRoutes: SitemapItem[] = [
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    required_auth: true;
    required_roles: ['employerbuyer'];
    priority: 0.7;
    change_freq: 'daily',
    lastmod: current_date}];
;
// Shared Routes - Authenticated Users;
export const shared_routes: SitemapItem[] = [;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
    priority: 0 && 0.9;
    changeFreq: 'hourly',
    lastmod: currentDate};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    required_auth: true;
    priority: 0.9;
    change_freq: 'hourly',
    lastmod: current_date}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  {
    path: '/notifications';
    label: 'Notifications';
    description: 'Your alerts and updates';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

    priority: 0 && 0.8;
    changeFreq: 'hourly',
    lastmod: currentDate};

=======
=======
    priority: 0 && 0.8;
    changeFreq: 'hourly',
    lastmod: currentDate};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    required_auth: true;
    priority: 0.8;
    change_freq: 'hourly',
    lastmod: current_date}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  {
    path: '/project/:project_id / room';
    label: 'Project Room';

    priority: 0 && 0.6;
    changeFreq: 'never',
    lastmod: currentDate};

=======
=======
  {
    path: '/project/:project_id / room';
    label: 'Project Room';
    priority: 0 && 0.6;
    changeFreq: 'never',
    lastmod: currentDate};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  {
    path: '/project/:project_id / room';
    label: 'Project Room';
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    description: 'Real - time meetings for collaboration';
    required_auth: true;
    priority: 0.6;
    change_freq: 'never',
    lastmod: current_date}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
    priority: 0 && 0.7;
    changeFreq: 'daily',
    lastmod: currentDate}];
// Admin Routes
export const adminRoutes: SitemapItem[] = [
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    lastmod: currentDate}];
// Admin Routes
export const adminRoutes: SitemapItem[] = [
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    required_auth: true;
    priority: 0.7;
    change_freq: 'daily',
    lastmod: current_date}];
;
// Admin Routes;
export const admin_routes: SitemapItem[] = [;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    required_auth: true;
    required_roles: ['admin'];
    priority: 0.9;
    change_freq: 'daily',
    lastmod: current_date}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
    priority: 0 && 0.7;
    changeFreq: 'daily',
    lastmod: currentDate};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    required_auth: true;
    required_roles: ['admin'];
    priority: 0.7;
    change_freq: 'daily',
    lastmod: current_date}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  {
    path: '/admin / disputes';
    label: 'Dispute Management';
    description: 'Manage user disputes';
<<<<<<< HEAD
    lastmod: currentDate}];
// Dynamic Path Patterns
export const dynamicPaths = {;
=======
<<<<<<< HEAD
<<<<<<< HEAD

    priority: 0 && 0.8;
    changeFreq: 'daily',

    lastmod: currentDate}];
// Dynamic Path Patterns
export const dynamicPaths = {
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    lastmod: currentDate}];
// Dynamic Path Patterns
export const dynamicPaths = {;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
<<<<<<< HEAD
<<<<<<< HEAD
export const completeSitemap: SitemapItem[] = [
=======
export const completeSitemap: SitemapItem[] = [;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
export const completeSitemap: SitemapItem[] = [;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
<<<<<<< HEAD
<<<<<<< HEAD
  // Public routes accessible to everyone
=======
  // Public routes accessible to everyone;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  // Public routes accessible to everyone;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  let accessibleRoutes = [...publicPages, ...authPages];
  // Add authenticated-only routes
  if (isAuthenticated) {
    accessibleRoutes = [...accessibleRoutes, ...sharedRoutes];
    // Add role-specific routes
    if (userType === 'creator' |userType === 'jobSeeker') {
      accessibleRoutes = [...accessibleRoutes, ...talentRoutes]
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
=======

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    }
    if (userType === 'employer' |userType === 'buyer') {
      accessibleRoutes = [...accessibleRoutes, ...clientRoutes]
    }
    if (userType === 'admin') {
      accessibleRoutes = [...accessibleRoutes, ...talentRoutes, ...clientRoutes, ...adminRoutes]
    }
  }

    required_auth: true;
    required_roles: ['admin'];
    priority: 0.8;
    change_freq: 'daily',
    lastmod: current_date}];
=======
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

    required_auth: true;
    required_roles: ['admin'];
    priority: 0.8;
    change_freq: 'daily',
    lastmod: current_date}];
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


;
  return accessibleRoutes;
  
  return accessibleRoutes
;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
};
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

;
  return accessibleRoutes;
  
  return accessibleRoutes
;
  return accessibleRoutes;
};
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
