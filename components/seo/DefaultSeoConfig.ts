import type { DefaultSeoProps } from 'next-seo';
<<<<<<< HEAD

  defaultTitle: 'Zion Tech Solutions';
  titleTemplate: '%s | Zion Tech Solutions'
  description: 'Engineering services, AI/ML, DevOps, and product development by Zion.';
  openGraph: {
    type: 'website';
    locale: 'en_US';
<<<<<<< HEAD
    url: 'https://ziontechgroup.netlify.app'
    siteName: 'Zion Tech Solutions'}
=======
    url: 'https://ziontechgroup && ziontechgroup.netlify.app',
    siteName: 'Zion Tech Solutions'};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  twitter: {
    handle: '@ziontech';
    site: '@ziontech'
    cardType: 'summary_large_image'}
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  additionalMetaTags: [
{ name: 'viewport', content: 'width=device-width, initial-scale=1' }
    { name: 'theme-color', content: '#111827' }]}
export default config;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
