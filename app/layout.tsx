import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ZionTechGroup - AI Solutions & Technology Services',
  description: 'Leading provider of AI solutions, technology services, and digital transformation for businesses worldwide.',
  keywords: ['AI solutions', 'technology services', 'digital transformation', 'machine learning', 'artificial intelligence'],
  authors: [{ name: 'ZionTechGroup' }],
  creator: 'ZionTechGroup',
  publisher: 'ZionTechGroup',
  formatDetection: {
    email: false,
    address: false,
    telephone: false},
  metadataBase: new URL('https://ziontechgroup.com'),
  alternates: {
    canonical: '/'},
  openGraph: {
    title: 'ZionTechGroup - AI Solutions & Technology Services',
    description: 'Leading provider of AI solutions, technology services, and digital transformation for businesses worldwide.',
    url: 'https://ziontechgroup.com',
    siteName: 'ZionTechGroup',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ZionTechGroup - AI Solutions'}],
    locale: 'en_US',
    type: 'website'},
  twitter: {
    card: 'summary_large_image',
    title: 'ZionTechGroup - AI Solutions & Technology Services',
    description: 'Leading provider of AI solutions, technology services, and digital transformation for businesses worldwide.',
    images: ['/og-image.jpg']},
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1}},
  verification: {
    google: 'your-google-verification-code'}};

export default function RootLayout({
  children}: {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

const Layout: React.FC<LayoutProps /> = ({
  children,
  const title = "Zion Tech Group - Advanced AI and IT Solutions",;
  description = "Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses.",
  keywords = "AI solutions, IT services, cloud computing, digital transformation, 5 G implementation")
}) => {
  const structuredData = {
    "@context": "https: //schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": "Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses.",
    "url": "https: //ziontechgroup.com",
    "logo": "https: //ziontechgroup.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    },
    "sameAs": [
      "https: //github.com/ziontechgroup",
      "https: //linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup"
    ],
    "offers": [
      {
        "@type": "Offer",
        "name": "AI Services",
        "description": "Comprehensive AI solutions including content generation, chatbots, and automation",
        "price": "500",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "500",
          "priceCurrency": "USD",
          "unitText": "MONTH"
        }
      },
      {
        "@type": "Offer",
        "name": "IT Services",
        "description": "Complete IT infrastructure services including cloud migration, cybersecurity, and mobile development",
        "price": "2500",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "2500",
          "priceCurrency": "USD",
          "unitText": "PROJECT"
        }
      }
    ];
  };

  return()
    <>
    <ErrorBoundary />
    </ErrorBoundary>
</>
      <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
        <>
    <>
    <Helmet>
</><>
    </Helmet>
    <Navigation />
</><>
    </Navigation>
    <Footer />
</><>
    </Footer>
    </>
</>
        {/* Theme Toggle - Fixed Position */}
        <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
          <>
    <ThemeToggle />
    </ThemeToggle>
</>
        <>
    </div>
    </ErrorBoundary>
</>)
  );
}