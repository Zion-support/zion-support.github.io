import type {_DefaultSeoProps} from 'next-seo';

const config: DefaultSeoProps = {_defaultTitle: 'Zion Tech Solutions', _titleTemplate: '%s | Zion Tech Solutions', _description: 'Engineering services, _AI/ML, _DevOps, _and product development by Zion.', _openGraph: {
    type: 'website', _locale: 'en_US', _url: 'https://ziontechgroup.netlify.app', _siteName: 'Zion Tech Solutions'},
  twitter: {_handle: '@ziontech', _site: '@ziontech', _cardType: 'summary_large_image'},
  additionalMetaTags: [
    {_name: 'viewport', _content: 'width=device-width, _initial-scale=1'},
    {_name: 'theme-color', _content: '#111827'}]};

export default config;