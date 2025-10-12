export const siteConfig = {
  name: 'Zion Tech Group',
  description: 'Leading provider of AI-powered solutions, IT services, 5G implementation, and micro SAAS platforms. 99.8% client satisfaction, 24/7 support.',
  url: 'https://ziontechgroup.com',
  ogImage: 'https://ziontechgroup.com/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/ziontechgroup',
    linkedin: 'https://linkedin.com/company/ziontechgroup',
    github: 'https://github.com/ziontechgroup'
  }
};

export const defaultMetadata = {
  title: 'Zion Tech Group - Advanced AI and IT Solutions',
  description: 'Leading provider of AI-powered solutions, IT services, 5G implementation, and micro SAAS platforms. 99.8% client satisfaction, 24/7 support.',
  keywords: 'AI solutions, artificial intelligence, IT services, 5G implementation, micro SAAS, cloud migration, cybersecurity, mobile development, machine learning, enterprise technology, digital transformation, Zion Tech Group, Delaware technology company',
  authors: [{ name: 'Zion Tech Group' }],
  creator: 'Zion Tech Group',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ziontechgroup.com',
    title: 'Zion Tech Group - Advanced AI and IT Solutions',
    description: 'Leading provider of AI-powered solutions, IT services, 5G implementation, and micro SAAS platforms.',
    siteName: 'Zion Tech Group',
    images: [
      {
        url: 'https://ziontechgroup.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group - Advanced AI and IT Solutions'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - Advanced AI and IT Solutions',
    description: 'Leading provider of AI-powered solutions, IT services, 5G implementation, and micro SAAS platforms.',
    images: ['https://ziontechgroup.com/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code'
  }
};

export function generateMetadata(pageTitle?: string, pageDescription?: string) {
  return {
    title: pageTitle || defaultMetadata.title,
    description: pageDescription || defaultMetadata.description,
    ...defaultMetadata
  };
}
