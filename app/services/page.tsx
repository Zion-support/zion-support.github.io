import ComprehensiveServicesShowcase2025 from '../../components/ComprehensiveServicesShowcase2025';

export const metadata = {
  title: 'Comprehensive Services 2025 | Zion Tech Group - AI, Micro SaaS & IT Solutions',
  description: 'Explore our extensive portfolio of 20+ innovative micro SAAS solutions, AI services, and IT solutions. From AI customer insights to blockchain solutions, we deliver enterprise-grade services that drive business transformation.',
  keywords: 'micro saas, ai services, it solutions, business automation, cloud infrastructure, cybersecurity, data analytics, project management, e-commerce, healthcare, edtech, blockchain, fintech, enterprise solutions',
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: 'Comprehensive Services 2025 | Zion Tech Group',
    description: 'Explore our extensive portfolio of innovative micro SAAS solutions, AI services, and IT solutions designed to transform your business.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Zion Tech Group',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comprehensive Services 2025 | Zion Tech Group',
    description: 'Explore our extensive portfolio of innovative micro SAAS solutions, AI services, and IT solutions designed to transform your business.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ServicePage() {
  return <ComprehensiveServicesShowcase2025 />;
}
}