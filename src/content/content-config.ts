export interface ContentConfig {
  siteName: string;
  siteDescription: string;
  siteUrl: string;
  author: string;
  social: {
    twitter: string;
    linkedin: string;
    github: string;
  };
  seo: {
    defaultTitle: string;
    defaultDescription: string;
    defaultImage: string;
  };
}

export const contentConfig: ContentConfig = {
  siteName: 'Zion Tech Group',
  siteDescription: 'Advanced AI and IT Solutions',
  siteUrl: 'https://ziontechgroup.com',
  author: 'Zion Tech Group',
  social: {
    twitter: '@ziontechgroup',
    linkedin: 'ziontechgroup',
    github: 'ziontechgroup'
  },
  seo: {
    defaultTitle: 'Zion Tech Group - Advanced AI and IT Solutions',
    defaultDescription: 'Leading provider of advanced AI and IT solutions for enterprise clients.',
    defaultImage: '/images/og-image.jpg'
  }
};

export default contentConfig;