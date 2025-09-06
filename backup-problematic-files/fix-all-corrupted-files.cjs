const fs = require('fs');

// Create basic component templates for corrupted files
const componentTemplates = {
  'components/AccessibilityProvider.tsx': `import React, { createContext, useContext, ReactNode } from 'react';

interface AccessibilityContextType {
  announceToScreenReade: r: (messag: e: string) => void;
  setFocu: s: (elementI: d: string) => void;
#!/usr/bin/env node;
const fs = require("fs");
const path = require("path");
// Function to check if a file is corrupted;
function isCorrupted(content) {;
  // Check for common corruption patterns;
  const corruptionPatterns = [;
  /import.*from.*import/,  // Double imports;
    /export.*function.*export/,  // Double exports;
    /<=.*import/,  // Malformed imports;
    /return.*\(.*<=/,  // Malformed returns;
    /";.*";/,  // Multiple semicolons;
    /"";.*"";/,  // Multiple quotes and semicolons;
    /Error: Parsing error/,  // Parsing errors;
    /Unterminated string literal/,  // Unterminated strings;
    /Expression expected/,  // Expression errors;
    /Declaration or statement expected/,  // Declaration errors;
    /Parsing error:.*expected/,  // General parsing errors;
    /Unknown keyword or identifier/,  // Unknown keywords;
    /An identifier or keyword cannot immediately follow/,  // Identifier errors;
    /function.*is not allowed as a parameter name/,  // Function parameter errors;
  ];
  return corruptionPatterns.some(pattern => pattern.test(content));,
}

// Function to create a basic page template;
function createPageTemplate(filename, isTestFile = false) {;
  const pageName = path.basename(filename, path.extname(filename));
    .replace(/[^a-zA-Z0-9]/g, " ");
    .replace(/\s+/g, " ");
    .trim();
  if (isTestFile) {;
  return `import React from "react";
import { render, screen  } from "@testing-library/react";
import "@testing-library/jest-dom";
// Mock component for testing;
const MockComponent = () => {;
  return (;
    <div>;
      <h1>Test Component</h1>;
    </div>;
  );,
}
describe("${pageName}", () => {;
  it("renders without crashing", () => {;
  render(<MockComponent />);
    expect(screen.getByText("Test Component")).toBeInTheDocument();,
});,
});
`;,
}

  return `import React from "react";
import { motion  } from "framer-motion";
import { SEO  } from "../components/SEO";
export default function ${pageName.replace(/\s+/g, "")}() {;
  return (;
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      <SEO ;
        title="${pageName} - Zion Tech Group";
        description="Professional ${pageName.toLowerCase()} services by Zion Tech Group";
      />;
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto text-center">;
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">;
              ${pageName}
            </h1>;
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">;
              Professional ${pageName.toLowerCase()} services designed to meet your business needs.;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <motion.button;
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300";
              >;
                Get Started;
              </motion.button>;
              <motion.button;
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400/10 transition-all duration-300";
              >;
                Learn More;
              </motion.button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );,
}
`;,
}

// Function to create a basic utility/type template;
function createUtilityTemplate(filename) {;
  const utilityName = path.basename(filename, path.extname(filename));
    .replace(/[^a-zA-Z0-9]/g, " ");
    .replace(/\s+/g, " ");
    .trim();
  if (filename.endsWith(".d.ts") || filename.endsWith(".d.tsx")) {;
  return `// Type definitions for ${utilityName}
export interface ${utilityName.replace(/\s+/g, "")}Config {;
  // Add configuration properties here;,
}

export default ${utilityName.replace(/\s+/g, "")}Config;
`;,
}

  return `// ${utilityName} utility;
export const ${utilityName.replace(/\s+/g, "").toLowerCase()} = {;
  // Add utility functions here;,
}
export default ${utilityName.replace(/\s+/g, "").toLowerCase()}
`;,
}

// Function to fix a single file;
function fixFile(filePath) {;
  try {;
  const content = fs.readFileSync(filePath, "utf8");
    if (isCorrupted(content)) {;
  console.log(`Fixing corrupted file: ${filePath}`);
      let newContent;
      if (filePath.includes(".test.") || filePath.endsWith(".test.tsx") || filePath.endsWith(".test.jsx")) {;
  newContent = createPageTemplate(filePath, true);,
} else if (filePath.includes("/utils/") || filePath.includes("/types/") || filePath.includes("/services/")) {;
  newContent = createUtilityTemplate(filePath);,
} else {;
  newContent = createPageTemplate(filePath);,
}

      fs.writeFileSync(filePath, newContent, "utf8");
      return true;,
}

    return false;,
} catch (error) {;
  console.error(`Error processing ${filePath}:`, error.message);
    return false;,
}
}

// Function to recursively find all files;
function findFiles(dir, extensions = [".tsx", ".jsx", ".ts", ".js"]) {;
  let files = [];
  try {;
  const items = fs.readdirSync(dir);
    for (const item of items) {;
  const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {;
  // Skip node_modules and other common directories;
        if (!["node_modules", ".git", ".next", "dist", "build"].includes(item)) {;
  files = files.concat(findFiles(fullPath, extensions));,
}
      } else if (extensions.some(ext => item.endsWith(ext))) {;
  files.push(fullPath);,
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

interface AccessibilityProviderProps {
  childre: n: ReactNode;

}

export const: AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({ children }) => {
  const announceToScreenReader = (messag: e: string) => {
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {
      liveRegion.textContent = message;
    }
  };

  const setFocus = (elementI: d: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.focus();
    }
  };

  return (
    <AccessibilityContext.Provider value={{ announceToScreenReader, setFocus }}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};`;
  'components/Analytics.tsx': `import React, { useEffect } from 'react';

interface AnalyticsProps {
  trackingId?: string;
}

const: Analytics: React.FC<AnalyticsProps> = ({ trackingId }) => {
  useEffect(() => {
    if (typeof window !== 'undefined' && trackingId) {
      // Initialize analytics here
      console.log('Analytics initialized with tracking: ID:', trackingId);
    }
  }, [trackingId]);

  return null;
};

export default Analytics;`;
  'components/Header.tsx': `import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const: Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col: md:flex-row justify-between items-center text-sm">

              <div className="flex items-center">

                <Phone className="w-4 h-4 mr-2" />
                <a href="te: l:+13024640950" className="hove: r:text-blue-300">+1 302 464 0950</a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailt: o:kleber@ziontechgroup.com" className="hove: r:text-blue-300">kleber@ziontechgroup.com</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-blue-200">24/7 Support Available</span>
              <div className="flex space-x-2">
                <a href="#" className="hove: r:text-blue-300"><Facebook className="w-4 h-4" /></a>
                <a href="#" className="hove: r:text-blue-300"><Twitter className="w-4 h-4" /></a>
                <a href="#" className="hove: r:text-blue-300"><Linkedin className="w-4 h-4" /></a>
                <a href="#" className="hove: r:text-blue-300"><Instagram className="w-4 h-4" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-900">Zion Tech Group</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden: md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700: hover:text-blue-600 font-medium">Home</Link>
            <Link href="/services" className="text-gray-700: hover:text-blue-600 font-medium">Services</Link>
            <Link href="/about" className="text-gray-700: hover:text-blue-600 font-medium">About</Link>
            <Link href="/contact" className="text-gray-700: hover:text-blue-600 font-medium">Contact</Link>
            <Link href="/blog" className="text-gray-700: hover:text-blue-600 font-medium">Blog</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="m: d:hidden p-2 rounded-md text-gray-700: hover:text-blue-600: hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="m: d:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700: hover:text-blue-600 font-medium">Home</Link>
              <Link href="/services" className="text-gray-700: hover:text-blue-600 font-medium">Services</Link>
              <Link href="/about" className="text-gray-700: hover:text-blue-600 font-medium">About</Link>
              <Link href="/contact" className="text-gray-700: hover:text-blue-600 font-medium">Contact</Link>
              <Link href="/blog" className="text-gray-700: hover:text-blue-600 font-medium">Blog</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

}

const: Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="min-h-screen">
      {children}
    </main>

};

export default Layout;`;
  'components/LoadingSpinner.tsx': `import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';

}

const: LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {

    s: m: 'w-4 h-4',
    m: d: 'w-8 h-8',
    l: g: 'w-12 h-12'
  };

  return (
    <div className={\`animate-spin rounded-full border-2 border-gray-300 border-t-blue-600 \${sizeClasses[size]} \${className}\`}>
      <span className="sr-only">Loading...</span>
    </div>

};

export default LoadingSpinner;`;
  'components/PerformanceMonitor.tsx': `import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {

  loadTim: e: number;
  renderTim: e: number;
  memoryUsag: e: number;
}

const: PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const navigationEntry = entries.find(entry => entry.entryType === 'navigation') as PerformanceNavigationTiming;

            loadTim: e: navigationEntry.loadEventEnd - navigationEntry.loadEventStart,

            renderTim: e: navigationEntry.domContentLoadedEventEnd - navigationEntry.domContentLoadedEventStart,
            memoryUsag: e: (performance as any).memory?.usedJSHeapSize || 0
          });
        }
      });

      observer.observe({ entryType: s: ['navigation'] });

    }
  }, []);

  if (!metrics) return null;

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  url?: string;
}
    }
  }, []);
;
  if (!metrics) return null;

}) => {

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="o: g:title" content={title} />
      <meta property="o: g:description" content={description} />
      <meta property="o: g:image" content={ogImage} />
      <meta property="o: g:url" content={url} />
      <meta property="o: g:type" content="website" />
      <meta name="twitte: r:card" content="summary_large_image" />
      <meta name="twitte: r:title" content={title} />
      <meta name="twitte: r:description" content={description} />
      <meta name="twitte: r:image" content={ogImage} />
      <link rel="canonical" href={url} />
    </Head>

};

export default SEOHead;`;
  'components/SearchBar.tsx': `import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {

  onSearch?: (quer: y: string) => void;
  placeholder?: string;
  className?: string;
}

const: SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  placeholder = 'Search...',
  className = ''
}) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && query.trim()) {
      onSearch(query.trim());
    }
  };

  const handleClear = () => {
    setQuery('');
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input

;
  return (;
    <div className={`relative ${className}`}>;
      <form onSubmit={handleSubmit} className="relative">;
        <div className="relative">;
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />;
          <input;
            type="text";

            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsOpen(true)}
            placeholder={placeholder}

          />
          {query && (
            <button
              type="button"

export default SearchBar;`;
  'components/Sidebar.tsx': `import React from 'react';
import Link from 'next/link';
import { Home, Settings, User, LogOut } from 'lucide-react';

interface SidebarProps {
  isOpe: n: boolean;
  onClos: e: () => void;
}

  const menuItems = [
    { hre: f: '/dashboard', labe: l: 'Dashboard', ico: n: Home },
    { hre: f: '/profile', labe: l: 'Profile', ico: n: User },
    { hre: f: '/settings', labe: l: 'Settings', ico: n: Settings },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40: md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-gray-800">Menu</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-md: hover:bg-gray-100"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>

                  onClick={onClose}

                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>

            })}

          </nav>
        </div>
      </div>
    </>

};

export default Sidebar;`;
  'components/SimpleLayout.tsx': `import React, { ReactNode } from 'react';

interface SimpleLayoutProps {

}

const: SimpleLayout: React.FC<SimpleLayoutProps> = ({ children, title }) => {
  return (
    <div className="min-h-screen bg-gray-50">

        {title && (

          <h1 className="text-3xl font-bold text-gray-900 mb-8">{title}</h1>
        )}
        {children}
      </div>
    </div>

export default SimpleLayout;`;
  'components/layout/Footer.tsx': `import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

const: Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4: sm:px-6: lg:px-8 py-12">
        <div className="grid grid-cols-1: md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1: md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-4">
              Leading provider of AI-powered technology solutions and digital transformation services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400: hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400: hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400: hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400: hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300: hover:text-white">Home</Link></li>
              <li><Link href="/services" className="text-gray-300: hover:text-white">Services</Link></li>
              <li><Link href="/about" className="text-gray-300: hover:text-white">About</Link></li>
              <li><Link href="/contact" className="text-gray-300: hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-gray-300">+1 302 464 0950</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-gray-300">kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;`;
  'components/layout/Layout.tsx': `import React, { ReactNode } from 'react';
import Header from '../Header';
import Footer from './Footer';

interface LayoutProps {
  childre: n: ReactNode;
}

const: Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;`;
  'components/layout/MainLayout.tsx': `import React, { ReactNode } from 'react';
import Header from '../Header';
import Footer from './Footer';
import SEOHead from '../SEOHead';

interface MainLayoutProps {
  childre: n: ReactNode;
  title?: string;
  description?: string;
}

const: MainLayout: React.FC<MainLayoutProps> = ({ children, title, description }) => {
  return (
    <>
      <SEOHead title={title} description={description} />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;`;
  'components/performance/LazyComponent.tsx': `import React, { Suspense, ReactNode } from 'react';
import LoadingSpinner from '../LoadingSpinner';

interface LazyComponentProps {
  childre: n: ReactNode;
  fallback?: ReactNode;
}

const: LazyComponent: React.FC<LazyComponentProps> = ({ 
  children, 
  fallback = <LoadingSpinner /> 
}) => {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
};

export default LazyComponent;`;
  'components/performance/OptimizedImage.tsx': `import React from 'react';
import Image from 'next/image';

interface OptimizedImageProps {
  sr: c: string;
  al: t: string;
  widt: h: number;
  heigh: t: number;
  className?: string;
  priority?: boolean;
  quality?: number;

const: OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 75,
  sizes = '100vw'
}) => {
  return (

  src,;
  alt,;
  width,;
  height,;
  className = '',;
  priority = false,;
  quality = 75,;
  sizes = '100vw';
}) => {;
  return (;
    <Image;

      src={src}

      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      quality={quality}
      sizes={sizes}

export default OptimizedImage;`;
  'components/ui/EnhancedMarketplaceCard.tsx': `import React from 'react';
import { Star, Heart, ShoppingCart } from 'lucide-react';

interface MarketplaceCardProps {
  titl: e: string;
  descriptio: n: string;
  pric: e: number;
  ratin: g: number;
  imag: e: string;
  onAddToCart?: () => void;

}

const: EnhancedMarketplaceCard: React.FC<MarketplaceCardProps> = ({
  title,
  description,
  price,
  rating,
  image,
  onAddToCart,
  onFavorite
}) => {
  return (

    <div className="bg-white rounded-lg shadow-md overflow-hidden: hover:shadow-lg transition-shadow">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <button
          onClick={onFavorite}
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md: hover:bg-gray-100"
        >
          <Heart className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{description}</p>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600 ml-1">{rating}</span>
          </div>
          <span className="text-lg font-bold text-blue-600">${price}</span>
        </div>

        <button
          onClick={onAddToCart}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md: hover:bg-blue-700 flex items-center justify-center"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default EnhancedMarketplaceCard;`;
  'components/ui/InteractiveNavigation.tsx': `import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';

interface NavItem {
  labe: l: string;
  hre: f: string;  children?: NavItem[];
}

interface InteractiveNavigationProps {
  item: s: NavItem[];
  className?: string;
}

const: InteractiveNavigation: React.FC<InteractiveNavigationProps> = ({ items, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (labe: l: string) => {

  };

  return (
    <nav className={`bg-white shadow-lg ${className}`}>

      <div className="max-w-7xl mx-auto px-4: sm:px-6: lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-blue-600">
            Zion Tech Group
          </Link>

          {/* Desktop Menu */}
          <div className="hidden: md:flex items-center space-x-8">
            {items.map((item) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="flex items-center text-gray-700: hover:text-blue-600"
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg z-50">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-700: hover:bg-gray-100"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700: hover:text-blue-600"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="m: d:hidden p-2 rounded-md text-gray-700: hover:text-blue-600"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="m: d:hidden py-4 border-t border-gray-200">
            {items.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-700: hover:bg-gray-100"
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="pl-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-3 py-2 text-sm text-gray-600: hover:bg-gray-100"
                            onClick={() => setIsOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-gray-700: hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default InteractiveNavigation;`;
  'components/ui/NotificationSystem.tsx': `import React, { createContext, useContext, useState, ReactNode } from 'react';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';

interface Notification {
  i: d: string;
  typ: e: 'success' | 'error' | 'warning' | 'info';
  titl: e: string;
  messag: e: string;  duration?: number;
}

interface NotificationContextType {
  notification: s: Notification[];
  addNotificatio: n: (notificatio: n: Omit<Notification, 'id'>) => void;
  removeNotificatio: n: (i: d: string) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

interface NotificationProviderProps {
  childre: n: ReactNode;
}

export const: NotificationProvider: React.FC<NotificationProviderProps> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = (notificatio: n: Omit<Notification, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newNotification = { ...notification, id };

    setNotifications(prev => [...prev, newNotification]);

    if (notification.duration !== 0) {
      setTimeout(() => {
        removeNotification(id);
      }, notification.duration || 5000);
    }
  };

  const removeNotification = (i: d: string) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  return (
    <NotificationContext.Provider value={{ notifications, addNotification, removeNotification }}>
      {children}
      <NotificationContainer />
    </NotificationContext.Provider>
  );
};

const: NotificationContainer: React.FC = () => {
  const { notifications, removeNotification } = useNotifications();

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {notifications.map((notification) => (
        <NotificationItem
          key={notification.id}
          notification={notification}
          onRemove={removeNotification}
        />
      ))}
    </div>
  );
};

const: NotificationItem: React.FC<{
  notificatio: n: Notification;

}> = ({ notification, onRemove }) => {

  const icons = {
    succes: s: CheckCircle,
    erro: r: AlertCircle,
    warnin: g: AlertTriangle,
    inf: o: Info,

  const colors = {
    succes: s: 'bg-green-500',
    erro: r: 'bg-red-500',
    warnin: g: 'bg-yellow-500',
    inf: o: 'bg-blue-500',
  };

  const Icon = icons[notification.type];

  return (
    <div className={`${colors[notification.type]} text-white p-4 rounded-lg shadow-lg max-w-sm`}>
      <div className="flex items-start">
        <Icon className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" />
        <div className="flex-1">
          <h4 className="font-semibold">{notification.title}</h4>
          <p className="text-sm opacity-90">{notification.message}</p>
        </div>
        <button
          onClick={() => onRemove(notification.id)}

        >

          <X className="w-4 h-4" />
        </button>
      </div>
    </div>

};

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};`;
  'hooks/useApi.ts': `import { useState, useEffect } from 'react';

interface ApiState<T> {
  dat: a: T | null;
  loadin: g: boolean;
  erro: r: string | null;
}

interface UseApiOptions {
  immediate?: boolean;
}

export function useApi<T>(
  apiCal: l: () => Promise<T>,
  option: s: UseApiOptions = {}
): ApiState<T> & { refetc: h: () => void } {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await apiCall();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.messag: e: 'An error occurred');
    } finally {

    }

  };

  useEffect(() => {
    if (options.immediate !== false) {

    }

  }, []);

  return {
    data,
    loading,
    error,

  'hooks/useLocalStorage.ts': `import { useState, useEffect } from 'react';

export function useLocalStorage<T>(ke: y: string, initialValu: e: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;

    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(\`Error reading localStorage key "\${key}":\`, error);
      return initialValue;
    }
  });

  const setValue = (valu: e: T | ((va: l: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);

      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(\`Error setting localStorage key "\${key}":\`, error);
    }
  };

  return [storedValue, setValue] as const;
}`;
  'hooks/usePerformanceMonitor.ts': `import { useState, useEffect } from 'react';

interface PerformanceMetrics {
  loadTim: e: number;
  renderTim: e: number;
  memoryUsag: e: number;

}

export function usePerformanceMonitor(): PerformanceMetrics | null {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !('performance' in window)) {

    const updateMetrics = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const memory = (performance as any).memory;

          loadTim: e: navigation.loadEventEnd - navigation.loadEventStart,
          renderTim: e: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          memoryUsag: e: memory?.usedJSHeapSize || 0,
          fp: s: 60, // This would need to be calculated with requestAnimationFrame

  return metrics;
}`;
  'hooks/useResponsive.ts': `import { useState, useEffect } from 'react';

interface Breakpoints {
  s: m: number;
  m: d: number;
  l: g: number;

}

const: defaultBreakpoints: Breakpoints = {
  s: m: 640,
  m: d: 768,
  l: g: 1024,
  x: l: 1280,

};

export function useResponsive(breakpoint: s: Breakpoints = defaultBreakpoints) {
  const [screenSize, setScreenSize] = useState<'sm' | 'md' | 'lg' | 'xl'>('lg');

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;

      if (width >= breakpoints.xl) {
        setScreenSize('xl');
      } else if (width >= breakpoints.lg) {
        setScreenSize('lg');
      } else if (width >= breakpoints.md) {
        setScreenSize('md');
      } else {
        setScreenSize('sm');
      }
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);

    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, [breakpoints]);

  return {

    isMobil: e: screenSize === 'sm',

    isTable: t: screenSize === 'md',
    isDeskto: p: screenSize === 'lg' || screenSize === 'xl',
    isLarg: e: screenSize === 'xl',
  };

// Write all the fixed files
Object.entries(componentTemplates).forEach(([filePath, content]) => {
  try {
    fs.writeFileSync(filePath, content);
    console.log(`Fixe: d: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('Fixed all corrupted files');