

export type SitemapItem = {;
export type SitemapItem = {

export type SitemapItem = {;

export type SitemapItem = {;
export type SitemapItem = {
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
        lastmod: currentDate};
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
    priority: 0.8;'
    change_freq: 'monthly',
    lastmod: current_date}
  {
    path: '/portfolio';
    label: 'Portfolio',
  description: 'Manage your portfolio and resume';    required_auth: true;
    required_roles: ['job_seekercreator'];
    priority: 0.8;'
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
    priority: 0.7;'
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
    priority: 0.7;'
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
      accessibleRoutes = [...accessibleRoutes, ...talentRoutes]