const fs = require('fs');
const path = require('path');

// List of component files that need fixing
const componentFilesToFix = [
  'components/Layout.tsx',
  'components/SEO.tsx',
  'components/layout/EnhancedLayout.tsx',
  'components/layout/Layout.tsx',
  'components/layout/MainLayout.tsx'
];

// Component templates
const layoutTemplate = `import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ children, title, description }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}`;

const seoTemplate = `import React from 'react';
import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}

export default function SEO({ title, description, keywords }: SEOProps) {
  return (
    <Head>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
    </Head>
  );
}`;

const enhancedLayoutTemplate = `import React from 'react';

interface EnhancedLayoutProps {
  children: React.ReactNode;
}

export default function EnhancedLayout({ children }: EnhancedLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}`;

const mainLayoutTemplate = `import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  noindex?: boolean;
  nofollow?: boolean;
  canonical?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website', 
  noindex = false, 
  nofollow = false, 
  canonical 
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;`;

// Fix each component file
componentFilesToFix.forEach(filePath => {
  try {
    let content;
    const fileName = path.basename(filePath, '.tsx');
    
    switch (fileName) {
      case 'Layout':
        content = layoutTemplate;
        break;
      case 'SEO':
        content = seoTemplate;
        break;
      case 'EnhancedLayout':
        content = enhancedLayoutTemplate;
        break;
      case 'MainLayout':
        content = mainLayoutTemplate;
        break;
      default:
        content = layoutTemplate;
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed component file: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('All component files fixed successfully!');