import type { DefaultSeoProps } from 'next-seo';
<<<<<<< HEAD

const config: DefaultSeoProps = {
  defaultTitle: 'Zion Tech Solutions',
  titleTemplate: '%s | Zion Tech Solutions',
  description:
    'Engineering services, AI/ML, DevOps, and product development by Zion.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ziontechgroup.netlify.app',
    siteName: 'Zion Tech Solutions',
  },
  twitter: {
    handle: '@ziontech',
    site: '@ziontech',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#111827' },
  ],
};

export default config;
=======
const config: DefaultSeoProps = {
  defaultTitle: 'Zion Tech Solutions', titleTemplate: '%s | Zion Tech Solutions',
  description: 'Engineering services, AI/ML, DevOps, and product development by Zion.',
    openGraph: {
      
    type: 'website', locale: 'en_US',
    url: 'https://ziontechgroup.netlify.app',
    siteName: 'Zion Tech Solutions'
    },
    twitter: {
    handle: '@ziontech', site: '@ziontech',
    cardType: 'summary_large_image'};
  additionalMetaTags: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' };
    { name: 'theme-color', content: '#111827' }]};

export default config;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
