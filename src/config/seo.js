// SEO Meta Tags Configuration
export const defaultSEO ={
  siteName: 'Zion Tech Group',
  title: 'Zion Tech Group - AI-Powered Business Solutions',
  description:
    'Transform your business with our comprehensive suite of AI-powered solutions.',
  url: 'https://ziontechgroup.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ziontechgroup.com',
    siteName: 'Zion Tech Group',
    title: 'Zion Tech Group - AI-Powered Business Solutions',
    description:
      'Transform your business with our comprehensive suite of AI-powered solutions.',
    images: [
      {
        url: 'https://ziontechgroup.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group - AI-Powered Business Solutions'},
    ]},
  twitter: {
    handle: '@ziontechgroup',
    site: '@ziontechgroup',
    cardType: 'summary_large_image'},
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'},
    {
      name: 'theme-color',
      content: '#1e40af'},
    {
      name: 'msapplication-TileColor',
      content: '#1e40af'},
  ]};

export default defaultSEO;

