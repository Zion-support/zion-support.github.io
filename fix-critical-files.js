const fs = require('fs');

// Fix 404.tsx - component name can't start with number
const notFoundContent = `'use client';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { AlertTriangle, Search, Home, ArrowLeft, RefreshCw } from 'lucide-react';

const NotFound = () => {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to our homepage or explore our services." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="relative mb-8">
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500/20 rounded-full animate-bounce">
              <AlertTriangle className="w-6 h-6 text-red-400" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Page Not Found
          </h1>
          
          <p className="text-lg text-gray-300 mb-8">
            Oops! The page you're looking for seems to have vanished into the digital void. 
            Don't worry, even our AI can't predict everything!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-600 transition-all duration-300 flex items-center justify-center"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
            
            <button
              onClick={() => window.location.reload()}
              className="bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-600 transition-all duration-300 flex items-center justify-center"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Refresh
            </button>
          </div>
          
          <div className="mt-12">
            <p className="text-gray-400 mb-4">Looking for something specific?</p>
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search our services..."
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    const query = e.target.value;
                    if (query.trim()) {
                      window.location.href = \`/search?q=\${encodeURIComponent(query.trim())}\`;
                    }
                  }
                }}
              />
            </div>
          </div>
          
          <div className="mt-12">
            <p className="text-gray-400 mb-6">Popular pages:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/services" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Services
              </Link>
              <Link href="/about" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Contact
              </Link>
              <Link href="/blog" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
`;

// Fix root-layout.tsx
const rootLayoutContent = `import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Zion Tech Group - Advanced AI and IT Solutions',
  description: 'Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services for businesses worldwide.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
`;

// Fix HomePage.tsx
const homePageContent = `'use client';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services for businesses worldwide." />
        <meta name="keywords" content="AI solutions, cybersecurity, cloud computing, digital transformation, IT services, micro SaaS, 5G solutions" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Welcome to Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Advanced AI and IT Solutions for Modern Businesses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
`;

// Fix service-template.tsx
const serviceTemplateContent = `'use client';
import React from 'react';

interface ServiceTemplateProps {
  title: string;
  description: string;
  className?: string;
}

const ServiceTemplate: React.FC<ServiceTemplateProps> = ({ 
  title, 
  description, 
  className 
}) => {
  return (
    <div className={className}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ServiceTemplate;
`;

// Fix global.d.ts
const globalTypesContent = `// Global type definitions
declare global {
  interface Window {
    // Add global window properties here
  }
}

export {};
`;

// Fix next.d.ts
const nextTypesContent = `// Next.js type definitions
import { NextPage } from 'next';

declare module 'next' {
  interface NextPageProps {
    // Add custom page props here
  }
}

export {};
`;

// Fix EnhancedFooter.tsx
const enhancedFooterContent = `'use client';
import React from 'react';

interface EnhancedFooterProps {
  className?: string;
}

const EnhancedFooter: React.FC<EnhancedFooterProps> = ({ className }) => {
  return (
    <footer className={className}>
      <div className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;
`;

// Write all files
console.log('Fixing critical files...');

fs.writeFileSync('/workspace/app/404.tsx', notFoundContent);
console.log('Fixed: app/404.tsx');

fs.writeFileSync('/workspace/app/root-layout.tsx', rootLayoutContent);
console.log('Fixed: app/root-layout.tsx');

fs.writeFileSync('/workspace/app/pages/HomePage.tsx', homePageContent);
console.log('Fixed: app/pages/HomePage.tsx');

fs.writeFileSync('/workspace/app/service-template.tsx', serviceTemplateContent);
console.log('Fixed: app/service-template.tsx');

fs.writeFileSync('/workspace/app/types/global.d.ts', globalTypesContent);
console.log('Fixed: app/types/global.d.ts');

fs.writeFileSync('/workspace/app/types/next.d.ts', nextTypesContent);
console.log('Fixed: app/types/next.d.ts');

fs.writeFileSync('/workspace/components/EnhancedFooter.tsx', enhancedFooterContent);
console.log('Fixed: components/EnhancedFooter.tsx');

console.log('Critical files fix completed!');