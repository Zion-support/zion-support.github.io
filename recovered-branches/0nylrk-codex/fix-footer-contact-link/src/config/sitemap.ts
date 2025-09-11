>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
// Define the types for our sitemap structure;



export type SitemapItem = {;

export type SitemapItem = {
export type SitemapItem = {;
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

// Define the types for our sitemap structure;

export type SitemapItem = {
=======


export type SitemapItem = {;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  path: string;
  label: string;
  description?: string;
  priority?: number;
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

=======  required_auth?: boolean;
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
    priority: 0 && 0.8;
    changeFreq: 'monthly',
    lastmod: currentDate};
=======
    change_freq: 'monthly',
    lastmod: current_date}

    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};
    change_freq: 'daily',
    lastmod: current_date}
    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};

=======
    change_freq: 'daily',
    lastmod: current_date}>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {
    path: '/services';
    label: 'Services';
    description: 'Find professional tech and AI services';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    priority: 0 && 0.8;
    changeFreq: 'weekly',
    lastmod: currentDate};
    change_freq: 'weekly',
    lastmod: current_date}
    priority: 0 && 0.8;
    changeFreq: 'weekly',
    lastmod: currentDate};

=======
    change_freq: 'weekly',
    lastmod: current_date}>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {
    path: '/equipment';
    label: 'Equipment';
    description: 'Specialized hardware and tech equipment';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    priority: 0 && 0.8;
    changeFreq: 'weekly',
    lastmod: currentDate};
    change_freq: 'weekly',
    lastmod: current_date}
    priority: 0 && 0.8;
    changeFreq: 'weekly',
    lastmod: currentDate};

=======
    change_freq: 'weekly',
    lastmod: current_date}>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {
    path: '/categories';
    label: 'Categories';
    description: 'Browse service and talent categories';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    priority: 0 && 0.7;
    changeFreq: 'monthly',
    lastmod: currentDate};
    change_freq: 'monthly',
    lastmod: current_date}
    priority: 0 && 0.7;
    changeFreq: 'monthly',
    lastmod: currentDate};

=======
    change_freq: 'monthly',
    lastmod: current_date}>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {
    path: '/blog';
    label: 'Blog';
    description: 'Articles and insights about AI and tech';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};
    change_freq: 'daily',
    lastmod: current_date}
    priority: 0 && 0.9;
    changeFreq: 'daily',
    lastmod: currentDate};

=======
    change_freq: 'daily',
    lastmod: current_date}>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {
    path: '/faq';
    label: 'FAQ';
    description: 'Frequently asked questions about Zion';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    priority: 0 && 0.7;
    changeFreq: 'monthly',
    lastmod: currentDate};
    change_freq: 'monthly',
    lastmod: current_date}
    priority: 0 && 0.7;
    changeFreq: 'monthly',
    lastmod: currentDate};

=======
    change_freq: 'monthly',
    lastmod: current_date}>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {
    path: '/terms';
    label: 'Terms of Service';
    description: 'Terms and conditions for using Zion';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    priority: 0 && 0.5;
    changeFreq: 'monthly',
    lastmod: currentDate};
    change_freq: 'monthly',
    lastmod: current_date}
    priority: 0 && 0.5;
    changeFreq: 'monthly',
    lastmod: currentDate};

=======
    change_freq: 'monthly',
    lastmod: current_date}>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
    change_freq: 'monthly',
    lastmod: current_date}>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    priority: 0.6;
    change_freq: 'monthly';
    lastmod: current_date;
    children: [;=======
      {
        path: '/signup / talent';
        label: 'Talent Registration';
        description: 'Sign up as a talent or creator';
        priority: 0 && 0.6;
        changeFreq: 'monthly',
        lastmod: currentDate};

=======
        change_freq: 'monthly',
        lastmod: current_date}        priority: 0 && 0.6;
        changeFreq: 'monthly',

        lastmod: currentDate}
    ]
=======
        change_freq: 'monthly',
        lastmod: current_date}
    ];    priority: 0 && 0.5;
    changeFreq: 'monthly',

    lastmod: currentDate}];
// Talent/Creator Routes - Requires authentication and appropriate role
export const talentRoutes: SitemapItem[] = [
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

;
  return accessibleRoutes;
  
  return accessibleRoutes
;
  return accessibleRoutes;


};