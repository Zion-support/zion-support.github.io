const fs = require('fs');
const path = require('path');

console.log('🔍 Starting SEO optimization...');

// Enhanced SEO meta tags
const seoEnhancements = {
  // Meta tags for better SEO
  metaTags: {
    description: "Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology and achieve unprecedented growth.",
    keywords: "AI solutions, quantum computing, autonomous systems, digital transformation, enterprise AI, machine learning, automation, cloud services, business intelligence, cybersecurity, IT infrastructure, micro saas, AI marketing, AI healthcare, AI fintech",
    author: "Zion Tech Group",
    robots: "index, follow",
    googlebot: "index, follow",
    viewport: "width=device-width, initial-scale=1.0, viewport-fit=cover",
    themeColor: "#4f46e5",
    colorScheme: "dark light"
  },

  // Open Graph tags
  openGraph: {
    type: "website",
    url: "https://ziontechgroup.com",
    title: "Zion Tech Group - Advanced AI and IT Solutions",
    description: "Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.",
    image: "https://ziontechgroup.com/og-image.jpg",
    imageWidth: "1200",
    imageHeight: "630",
    siteName: "Zion Tech Group"
  },

  // Twitter Card tags
  twitter: {
    card: "summary_large_image",
    url: "https://ziontechgroup.com",
    title: "Zion Tech Group - Advanced AI and IT Solutions",
    description: "Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.",
    image: "https://ziontechgroup.com/og-image.jpg",
    site: "@ziontechgroup",
    creator: "@ziontechgroup"
  },

  // Structured data
  structuredData: {
    "@context": "https://schema.org",
    "@type": "TechCompany",
    name: "Zion Tech Group",
    url: "https://ziontechgroup.com",
    logo: "https://ziontechgroup.com/logo.png",
    description: "Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.",
    foundingDate: "2020",
    numberOfEmployees: "50-100",
    industry: "Technology",
    services: [
      "AI Solutions",
      "Quantum Computing", 
      "Autonomous Systems",
      "Digital Transformation",
      "Cloud Services",
      "Automation",
      "Business Intelligence",
      "Cybersecurity",
      "IT Infrastructure",
      "Micro SAAS",
      "AI Marketing",
      "AI Healthcare",
      "AI Fintech"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-302-464-0950",
      contactType: "Customer Service",
      areaServed: "US",
      availableLanguage: "en"
    },
    sameAs: [
      "https://twitter.com/ziontechgroup",
      "https://linkedin.com/company/ziontechgroup",
      "https://github.com/ziontechgroup"
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "364 E Main St STE 1008",
      addressLocality: "Middletown",
      addressRegion: "DE",
      postalCode: "19709",
      addressCountry: "US"
    },
    offers: [
      {
        "@type": "Offer",
        category: "AI Solutions",
        description: "Enterprise AI solutions, digital transformation, and cloud services",
        price: "1500",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "1500",
          priceCurrency: "USD",
          billingIncrement: "P1M"
        }
      },
      {
        "@type": "Offer", 
        category: "Digital Transformation",
        description: "Process automation, legacy system modernization, and workflow optimization",
        price: "2500",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "2500",
          priceCurrency: "USD",
          billingIncrement: "P1M"
        }
      }
    ],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "39.8283",
        longitude: "-75.5795"
      },
      geoRadius: "1000000"
    }
  }
};

// Create enhanced sitemap
const generateSitemap = () => {
  const pages = [
    { url: '/', priority: '1.0', changefreq: 'daily' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/contact', priority: '0.9', changefreq: 'monthly' },
    { url: '/blog', priority: '0.7', changefreq: 'weekly' },
    { url: '/ai-services', priority: '0.9', changefreq: 'weekly' },
    { url: '/ai-automation', priority: '0.8', changefreq: 'weekly' },
    { url: '/ai-marketing', priority: '0.8', changefreq: 'weekly' },
    { url: '/ai-healthcare', priority: '0.8', changefreq: 'weekly' },
    { url: '/ai-fintech', priority: '0.8', changefreq: 'weekly' },
    { url: '/ai-content-generation', priority: '0.8', changefreq: 'weekly' },
    { url: '/it-infrastructure', priority: '0.8', changefreq: 'weekly' },
    { url: '/cybersecurity', priority: '0.8', changefreq: 'weekly' },
    { url: '/quantum-computing', priority: '0.7', changefreq: 'monthly' },
    { url: '/autonomous-systems', priority: '0.7', changefreq: 'monthly' },
    { url: '/micro-saas', priority: '0.8', changefreq: 'weekly' },
    { url: '/case-studies', priority: '0.6', changefreq: 'monthly' },
    { url: '/team', priority: '0.6', changefreq: 'monthly' },
    { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
    { url: '/terms', priority: '0.3', changefreq: 'yearly' }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>https://ziontechgroup.com${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync('public/sitemap.xml', sitemap);
  console.log('✅ Sitemap generated');
};

// Create robots.txt
const generateRobotsTxt = () => {
  const robots = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/

# Allow important pages
Allow: /
Allow: /about
Allow: /contact
Allow: /services
Allow: /blog
Allow: /case-studies`;

  fs.writeFileSync('public/robots.txt', robots);
  console.log('✅ Robots.txt generated');
};

// Create manifest.json for PWA
const generateManifest = () => {
  const manifest = {
    name: "Zion Tech Group - AI & IT Solutions",
    short_name: "Zion Tech",
    description: "Leading provider of AI-powered enterprise solutions, quantum computing, and autonomous systems.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f0f23",
    theme_color: "#4f46e5",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png"
      },
      {
        src: "/favicon-32x32.png", 
        sizes: "32x32",
        type: "image/png"
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png"
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ],
    categories: ["business", "productivity", "technology"],
    lang: "en",
    scope: "/",
    id: "zion-tech-group"
  };

  fs.writeFileSync('public/site.webmanifest', JSON.stringify(manifest, null, 2));
  console.log('✅ Web manifest generated');
};

// Create enhanced meta component
const createMetaComponent = () => {
  const metaComponent = `import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({
  title = "Zion Tech Group - Advanced AI and IT Solutions",
  description = "Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology.",
  keywords = "AI solutions, quantum computing, autonomous systems, digital transformation, enterprise AI, machine learning, automation, cloud services, business intelligence",
  image = "https://ziontechgroup.com/og-image.jpg",
  url = "https://ziontechgroup.com",
  type = "website",
  structuredData
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : \`\${title} | Zion Tech Group\`;

  return (
    <Helmet>
      {/* Primary meta tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Structured data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;`;

  fs.writeFileSync('app/components/SEO.tsx', metaComponent);
  console.log('✅ SEO component created');
};

// Create accessibility enhancements
const createAccessibilityEnhancements = () => {
  const accessibilityScript = `// Accessibility enhancements
export const accessibilityEnhancements = {
  // Add skip links
  addSkipLinks: () => {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50';
    document.body.insertBefore(skipLink, document.body.firstChild);
  },

  // Add ARIA labels to interactive elements
  enhanceInteractiveElements: () => {
    const buttons = document.querySelectorAll('button:not([aria-label])');
    buttons.forEach(button => {
      if (!button.getAttribute('aria-label') && !button.textContent.trim()) {
        button.setAttribute('aria-label', 'Button');
      }
    });

    const links = document.querySelectorAll('a:not([aria-label])');
    links.forEach(link => {
      if (!link.getAttribute('aria-label') && !link.textContent.trim()) {
        link.setAttribute('aria-label', 'Link');
      }
    });
  },

  // Add focus management
  manageFocus: () => {
    const focusableElements = document.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    );
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    });
  },

  // Add high contrast mode support
  addHighContrastSupport: () => {
    const style = document.createElement('style');
    style.textContent = \`
      @media (prefers-contrast: high) {
        .quantum-card {
          border: 2px solid var(--neon-cyan) !important;
        }
        .neon-text {
          text-shadow: 0 0 3px currentColor !important;
        }
        button, a {
          border: 1px solid currentColor !important;
        }
      }
    \`;
    document.head.appendChild(style);
  },

  // Initialize all enhancements
  init: () => {
    if (typeof window !== 'undefined') {
      this.addSkipLinks();
      this.enhanceInteractiveElements();
      this.manageFocus();
      this.addHighContrastSupport();
    }
  }
};`;

  fs.writeFileSync('app/utils/accessibilityEnhancements.ts', accessibilityScript);
  console.log('✅ Accessibility enhancements created');
};

// Run all SEO optimizations
const runSEOOptimization = () => {
  // Ensure public directory exists
  if (!fs.existsSync('public')) {
    fs.mkdirSync('public', { recursive: true });
  }

  generateSitemap();
  generateRobotsTxt();
  generateManifest();
  createMetaComponent();
  createAccessibilityEnhancements();

  console.log('\\n🎉 SEO optimization complete!');
  console.log('\\nGenerated files:');
  console.log('- public/sitemap.xml');
  console.log('- public/robots.txt');
  console.log('- public/site.webmanifest');
  console.log('- app/components/SEO.tsx');
  console.log('- app/utils/accessibilityEnhancements.ts');
};

if (require.main === module) {
  runSEOOptimization();
}

module.exports = { runSEOOptimization };