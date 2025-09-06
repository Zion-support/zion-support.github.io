<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD

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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f


export type SitemapItem = {;
export type SitemapItem = {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

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
  priority?: number;  required_auth?: boolean;
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
    label: 'Home',
  description: 'The world's first free marketplace dedicated to high - tech and artificial intelligence';
    priority: 1.0;
    change_freq: 'weekly',
    lastmod: current_date}  {
    path: '/about';
    label: 'About Us',
  description: 'Learn about the Zion AI Marketplace mission and team';  {
    path: '/talent';
    label: 'Talent Directory',
  description: 'Browse skilled AI and tech professionals';

    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};  {
    path: '/marketplace';
    label: 'Marketplace'
    description: 'Explore AI services, products and equipment';      {
        path: '/signup / client';
        label: 'Client Registration',
  description: 'Sign up as an employer or buyer';

        priority: 0 && 0.6;
        changeFreq: 'monthly',

        lastmod: currentDate}
    ]        priority: 0 && 0.6;
        changeFreq: 'monthly',
        lastmod: currentDate}
    ]
        change_freq: 'monthly',
        lastmod: current_date}
    ];
    label: 'Talent Onboarding',
  description: 'Complete your talent profile';

    priority: 0 && 0.8;
    changeFreq: 'monthly',
    lastmod: currentDate};
    required_auth: true;
    required_roles: ['job_seekercreator'];
    priority: 0.8;
    change_freq: 'monthly',
    lastmod: current_date}
  {
    path: '/portfolio';
    label: 'Portfolio',
  description: 'Manage your portfolio and resume';    required_auth: true;
    required_roles: ['job_seekercreator'];
    priority: 0.8;
    change_freq: 'weekly',
    lastmod: current_date}
    path: '/create - profile';
    label: 'Create Profile',
  description: 'Set up your talent profile';

    priority: 0 && 0.7;
    changeFreq: 'monthly',

    lastmod: currentDate}];
// Client/Employer Routes - Requires authentication and appropriate role
export const clientRoutes: SitemapItem[] = [    required_auth: true;
    required_roles: ['job_seekercreator'];
    priority: 0.7;
    change_freq: 'monthly',
    lastmod: current_date}];
;
// Client / Employer Routes - Requires authentication and appropriate role;
export const client_routes: SitemapItem[] = [;
    path: '/client - dashboard';
    label: 'Client Dashboard',
  description: 'Overview for client users';

    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};  {
    path: '/notifications';
    label: 'Notifications',
  description: 'Your alerts and updates';    path: '/dashboard / disputes';
    label: 'Disputes',
  description: 'Manage and view disputes';

    priority: 0 && 0.7;
    changeFreq: 'daily',

    lastmod: currentDate}];
// Admin Routes
export const adminRoutes: SitemapItem[] = [    lastmod: currentDate}];
// Admin Routes
export const adminRoutes: SitemapItem[] = [
    required_auth: true;
    priority: 0.7;
    change_freq: 'daily',
    lastmod: current_date}];
;
// Admin Routes;
export const admin_routes: SitemapItem[] = [;
    path: '/analytics';
    label: 'Analytics',
  description: 'System analytics and metrics';

    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};    path: '/admin / disputes';
    label: 'Dispute Management',
  description: 'Manage user disputes';
    lastmod: currentDate}];
// Dynamic Path Patterns
export const dynamicPaths = {;    lastmod: currentDate}];
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
export const completeSitemap: SitemapItem[] = [;export const completeSitemap: SitemapItem[] = [;
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
  // Public routes accessible to everyone;  // Public routes accessible to everyone;
  let accessibleRoutes = [...publicPages, ...authPages];
  // Add authenticated-only routes
  if (isAuthenticated) {
    accessibleRoutes = [...accessibleRoutes, ...sharedRoutes];
    // Add role-specific routes
    if (userType === 'creator' |userType === 'jobSeeker') {
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      accessibleRoutes = [...accessibleRoutes, ...talentRoutes]
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      accessibleRoutes = [...accessibleRoutes, ...talentRoutes]
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
