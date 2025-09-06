// Define the types for our sitemap structure;
export type SitemapItem = {
  path: string;
  label: string;
  description?: string;
  priority?: number;
  change_freq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  lastmod?: string;
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
    priority: 0.8;
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
    priority: 0.9;
    change_freq: 'daily',
    lastmod: current_date}
  {
    path: '/marketplace';
    label: 'Marketplace',
    description: 'Explore AI services, products and equipment';
    priority: 0.9;
    change_freq: 'daily',
    lastmod: current_date}
  {
    path: '/services';
    label: 'Services';
    description: 'Find professional tech and AI services';
    priority: 0.8;
    change_freq: 'weekly',
    lastmod: current_date}
  {
    path: '/equipment';
    label: 'Equipment';
    description: 'Specialized hardware and tech equipment';
    priority: 0.8;
    change_freq: 'weekly',
    lastmod: current_date}
  {
    path: '/categories';
    label: 'Categories';
    description: 'Browse service and talent categories';
    priority: 0.7;
    change_freq: 'monthly',
    lastmod: current_date}
  {
    path: '/blog';
    label: 'Blog';
    description: 'Articles and insights about AI and tech';
    priority: 0.9;
    change_freq: 'daily',
    lastmod: current_date}
  {
    path: '/faq';
    label: 'FAQ';
    description: 'Frequently asked questions about Zion';
    priority: 0.7;
    change_freq: 'monthly',
    lastmod: current_date}
  {
    path: '/terms';
    label: 'Terms of Service';
    description: 'Terms and conditions for using Zion';
    priority: 0.5;
    change_freq: 'monthly',
    lastmod: current_date}
  {
    path: '/privacy';
    label: 'Privacy Policy';
    description: 'How we handle your data';
    priority: 0.5;
    change_freq: 'monthly',
    lastmod: current_date}];
;
// Authentication Pages;
export const auth_pages: SitemapItem[] = [;
  {
    path: '/login';
    label: 'Login';
    description: 'Sign in to your account';
    priority: 0.6;
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
        priority: 0.6;
        change_freq: 'monthly',
        lastmod: current_date}
      {
        path: '/signup / client';
        label: 'Client Registration';
        description: 'Sign up as an employer or buyer';
        priority: 0.6;
        change_freq: 'monthly',
        lastmod: current_date}
    ];
  }
  {
    path: '/forgot - password';
    label: 'Forgot Password';
    description: 'Reset your password';
    priority: 0.5;
    change_freq: 'monthly',
    lastmod: current_date}];
;
// Talent / Creator Routes - Requires authentication and appropriate role;
export const talent_routes: SitemapItem[] = [;
  {
    path: '/talent - dashboard';
    label: 'Talent Dashboard';
    description: 'Overview for talent users';
    required_auth: true;
    required_roles: ['job_seekercreator'];
    priority: 0.9;
    change_freq: 'daily',
    lastmod: current_date}
  {
    path: '/talent - onboarding';
    label: 'Talent Onboarding';
    description: 'Complete your talent profile';
    required_auth: true;
    required_roles: ['job_seekercreator'];
    priority: 0.8;
    change_freq: 'monthly',
    lastmod: current_date}
  {
    path: '/portfolio';
    label: 'Portfolio';
    description: 'Manage your portfolio and resume';
    required_auth: true;
    required_roles: ['job_seekercreator'];
    priority: 0.8;
    change_freq: 'weekly',
    lastmod: current_date}
  {
    path: '/create - profile';
    label: 'Create Profile';
    description: 'Set up your talent profile';
    required_auth: true;
    required_roles: ['job_seekercreator'];
    priority: 0.7;
    change_freq: 'monthly',
    lastmod: current_date}];
;
// Client / Employer Routes - Requires authentication and appropriate role;
export const client_routes: SitemapItem[] = [;
  {
    path: '/client - dashboard';
    label: 'Client Dashboard';
    description: 'Overview for client users';
    required_auth: true;
    required_roles: ['employerbuyer'];
    priority: 0.9;
    change_freq: 'daily',
    lastmod: current_date}
  {
    path: '/post - job';
    label: 'Post a Job';
    description: 'Create a new job listing';
    required_auth: true;
    required_roles: ['employerbuyer'];
    priority: 0.8;
    change_freq: 'weekly',
    lastmod: current_date}
  {
    path: '/hiring - tracker';
    label: 'Hiring Pipeline';
    description: 'Track your hiring process';
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
    required_auth: true;
    priority: 0.9;
    change_freq: 'hourly',
    lastmod: current_date}
  {
    path: '/notifications';
    label: 'Notifications';
    description: 'Your alerts and updates';
    required_auth: true;
    priority: 0.8;
    change_freq: 'hourly',
    lastmod: current_date}
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
    required_auth: true;
    priority: 0.7;
    change_freq: 'daily',
    lastmod: current_date}];
;
// Admin Routes;
export const admin_routes: SitemapItem[] = [;
  {
    path: '/analytics';
    label: 'Analytics';
    description: 'System analytics and metrics';
    required_auth: true;
    required_roles: ['admin'];
    priority: 0.9;
    change_freq: 'daily',
    lastmod: current_date}
  {
    path: '/admin / reviews';
    label: 'Reviews Moderation';
    description: 'Moderate user reviews';
    required_auth: true;
    required_roles: ['admin'];
    priority: 0.7;
    change_freq: 'daily',
    lastmod: current_date}
  {
    path: '/admin / disputes';
    label: 'Dispute Management';
    description: 'Manage user disputes';
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