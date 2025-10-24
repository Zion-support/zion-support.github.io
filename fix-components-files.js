const fs = require('fs');
const path = require('path');

// List of corrupted components files
const corruptedFiles = [
  'components/DefaultSEO.tsx',
  'components/EnhancedFooter.tsx',
  'components/SEO/DefaultSEO.tsx',
  'components/SEO/MetaTags.tsx',
  'components/SEO/StructuredData.tsx'
];

// Create specialized component templates
const createSpecializedComponent = (filePath) => {
  const baseName = filePath.split('/').pop().replace(/\.tsx$/, '');
  
  switch (baseName) {
    case 'DefaultSEO':
      return `import React from 'react';
import Head from 'next/head';

interface DefaultSEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
}

const DefaultSEO: React.FC<DefaultSEOProps> = ({
  title = 'Zion Tech Group - Leading Technology Solutions',
  description = 'Innovative AI, blockchain, and 5G solutions for modern businesses.',
  canonical,
  ogImage = '/og-image.jpg'
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
};

export default DefaultSEO;
`;

    case 'EnhancedFooter':
      return `import React from 'react';
import Link from 'next/link';

interface EnhancedFooterProps {
  className?: string;
}

const EnhancedFooter: React.FC<EnhancedFooterProps> = ({ className = '' }) => {
  return (
    <footer className={\`bg-gray-900 text-white \${className}\`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Leading the future of technology with innovative AI, blockchain, and 5G solutions 
              that transform businesses and drive growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/ai-services" className="text-gray-400 hover:text-white transition-colors">AI Services</Link></li>
              <li><Link href="/blockchain-solutions" className="text-gray-400 hover:text-white transition-colors">Blockchain Solutions</Link></li>
              <li><Link href="/5g-solutions" className="text-gray-400 hover:text-white transition-colors">5G Solutions</Link></li>
              <li><Link href="/cloud-services" className="text-gray-400 hover:text-white transition-colors">Cloud Services</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;
`;

    case 'MetaTags':
      return `import React from 'react';
import Head from 'next/head';

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
}

const MetaTags: React.FC<MetaTagsProps> = ({
  title = 'Zion Tech Group',
  description = 'Leading technology solutions',
  keywords,
  canonical,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image'
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={ogType} />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
};

export default MetaTags;
`;

    case 'StructuredData':
      return `import React from 'react';
import Head from 'next/head';

interface StructuredDataProps {
  type?: 'Organization' | 'WebSite' | 'WebPage' | 'Article';
  data?: any;
}

const StructuredData: React.FC<StructuredDataProps> = ({
  type = 'Organization',
  data
}) => {
  const defaultData = {
    '@context': 'https://schema.org',
    '@type': type,
    name: 'Zion Tech Group',
    description: 'Leading technology solutions for modern businesses',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-123-4567',
      contactType: 'customer service',
      email: 'info@ziontechgroup.com'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Tech Street',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      postalCode: '94105',
      addressCountry: 'US'
    }
  };

  const structuredData = data || defaultData;

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
};

export default StructuredData;
`;

    default:
      return `import React from 'react';

interface ${baseName}Props {
  className?: string;
  children?: React.ReactNode;
}

const ${baseName}: React.FC<${baseName}Props> = ({ className = '', children }) => {
  return (
    <div className={\`\${className}\`}>
      {children}
    </div>
  );
};

export default ${baseName};
`;
  }
};

// Fix corrupted files
corruptedFiles.forEach(filePath => {
  const fullPath = path.join(process.cwd(), filePath);
  
  try {
    const content = createSpecializedComponent(filePath);
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('Components files fix completed!');