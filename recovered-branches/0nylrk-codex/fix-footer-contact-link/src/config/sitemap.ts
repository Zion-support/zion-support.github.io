  path: string;
  label: string;
  description?: string;
  priority?: number;
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
  {
    path: '/contact';
    label: 'Contact';
    description: 'Get in touch with the Zion team',
  {
    path: '/talent';
    label: 'Talent Directory';
    description: 'Browse skilled AI and tech professionals';
  {
    path: '/marketplace';
    label: 'Marketplace'
    description: 'Explore AI services, products and equipment';
  {
    path: '/services';
    label: 'Services';
    description: 'Find professional tech and AI services';
  {
    path: '/equipment';
    label: 'Equipment';
    description: 'Specialized hardware and tech equipment';
  {
    path: '/categories';
    label: 'Categories';
    description: 'Browse service and talent categories';
  {
    path: '/blog';
    label: 'Blog';
    description: 'Articles and insights about AI and tech';
  {
    path: '/faq';
    label: 'FAQ';
    description: 'Frequently asked questions about Zion';
  {
    path: '/terms';
    label: 'Terms of Service';
    description: 'Terms and conditions for using Zion';
  {
    path: '/privacy';
    label: 'Privacy Policy';
    description: 'How we handle your data';
  {
    path: '/signup';
    label: 'Sign Up';
    description: 'Create a new account';
      {
        path: '/signup / talent';
        label: 'Talent Registration';
        description: 'Sign up as a talent or creator';
      {
        path: '/signup / client';
        label: 'Client Registration';
        description: 'Sign up as an employer or buyer';
        lastmod: currentDate}
    ]
        change_freq: 'monthly',
        lastmod: current_date}
    ];
  }
  {
    path: '/forgot - password';
    label: 'Forgot Password';
    description: 'Reset your password';
  {
    path: '/talent - onboarding';
    label: 'Talent Onboarding';
    description: 'Complete your talent profile';
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
  {
    path: '/post - job';
    label: 'Post a Job';
    description: 'Create a new job listing';
  {
    path: '/hiring - tracker';
    label: 'Hiring Pipeline';
    description: 'Track your hiring process';
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
    lastmod: currentDate}];
// Admin Routes
export const adminRoutes: SitemapItem[] = [
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
export const completeSitemap: SitemapItem[] = [;
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
  // Public routes accessible to everyone;
  let accessibleRoutes = [...publicPages, ...authPages];
  // Add authenticated-only routes
  if (isAuthenticated) {
    accessibleRoutes = [...accessibleRoutes, ...sharedRoutes];
    // Add role-specific routes
    if (userType === 'creator' |userType === 'jobSeeker') {
      accessibleRoutes = [...accessibleRoutes, ...talentRoutes]
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

;
  return accessibleRoutes;
  
  return accessibleRoutes
;

  return accessibleRoutes;
};
