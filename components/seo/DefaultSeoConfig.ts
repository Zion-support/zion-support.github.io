import type { DefaultSeoProps } from 'next-seo';
const config: DefaultSeoProps = {
  defaultTitle: 'Zion Tech Solutions',
  titleTemplate: '%s | Zion Tech Solutions',
  description: 'Engineering services, AI/ML, DevOps, and product development by Zion.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ziontechgroup.netlify.app',
    siteName: 'Zion Tech Solutions'},
  twitter: {
    handle: '@ziontech',
    site: '@ziontech',
    cardType: 'summary_large_image'},
  additionalMetaTags: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#111827' }]},

const config: DefaultSeoProps = {_defaultTitle: 'Zion Tech Solutions', _titleTemplate: '%s | Zion Tech Solutions', _description: 'Engineering services, _AI/ML, _DevOps, _and product development by Zion.', _openGraph: {
    type: 'website', _locale: 'en_US', _url: 'https://ziontechgroup.netlify.app', _siteName: 'Zion Tech Solutions'},
  twitter: {_handle: '@ziontech', _site: '@ziontech', _cardType: 'summary_large_image'},
  additionalMetaTags: [
    {_name: 'viewport', _content: 'width=device-width, _initial-scale=1'},
    {_name: 'theme-color', _content: '#111827'}]};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export default config