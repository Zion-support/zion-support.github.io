#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// List of corrupted files that need to be fixed or deleted
const corruptedFiles = [
  'app/404.tsx',
  'app/components/AccessibilityAudit.tsx',
  'app/components/AccessibilityEnhancer.tsx',
  'app/components/AdAnalytics.tsx',
  'app/components/AdAnalyticsDashboard.tsx',
  'app/components/AdDashboard.tsx',
  'app/components/AdManagementSystem.tsx',
  'app/components/AdScheduler.tsx',
  'app/components/AdTemplates.tsx',
  'app/components/AdvancedAccessibilityEnhancer.tsx',
  'app/components/AdvancedPerformanceMonitor.tsx',
  'app/components/AdvancedPerformanceOptimizer.tsx',
  'app/components/AdvancedSEOOptimizer.tsx',
  'app/components/AdvancedSEOOptimizer_new.tsx',
  'app/components/AdvertisingBanner.tsx',
  'app/components/AnalyticsProvider.tsx',
  'app/components/AnimatedCard.tsx',
  'app/components/Breadcrumb.tsx',
  'app/components/ContentCarousel.tsx',
  'app/components/ContentPromotionBanner.tsx',
  'app/components/ContentStatistics.tsx',
  'app/components/CoreWebVitals.tsx',
  'app/components/CriticalResourcePreloader.tsx',
  'app/components/DynamicContentShowcase.tsx',
  'app/components/EnhancedAccessibility.tsx',
  'app/components/EnhancedAccessibilityManager.tsx',
  'app/components/EnhancedErrorBoundary.tsx',
  'app/components/EnhancedHero.tsx',
  'app/components/EnhancedLoading.tsx',
  'app/components/EnhancedLoadingSkeleton.tsx',
  'app/components/EnhancedLoadingSpinner.tsx',
  'app/components/EnhancedLoadingStates.tsx',
  'app/components/EnhancedMetaTags.tsx',
  'app/components/EnhancedPerformanceMonitor.tsx',
  'app/components/EnhancedPerformanceOptimizer.tsx',
  'app/components/EnhancedSEO.tsx',
  'app/components/EnhancedSEOOptimizer.tsx',
  'app/components/EnhancedServicesShowcase.tsx',
  'app/components/EnhancedSkipLink.tsx',
  'app/components/ErrorBoundary.tsx',
  'app/components/ErrorFallback.tsx',
  'app/components/Footer.tsx',
  'app/components/FuturisticBackground.tsx',
  'app/components/FuturisticBackgroundEnhanced.tsx',
  'app/components/FuturisticButton.tsx',
  'app/components/FuturisticButtonEnhanced.tsx',
  'app/components/FuturisticCard.tsx',
  'app/components/FuturisticCardEnhanced.tsx',
  'app/components/FuturisticServiceCard.tsx',
  'app/components/FuturisticTextEnhanced.tsx',
  'app/components/GlobalErrorBoundary.tsx',
  'app/components/Header.tsx',
  'app/components/ImprovedErrorBoundary.tsx',
  'app/components/ImprovedFooter.tsx',
  'app/components/ImprovedImage.tsx',
  'app/components/ImprovedNavigation.tsx',
  'app/components/ImprovedSidebar.tsx',
  'app/components/LazyImage.tsx',
  'app/components/LazyWrapper.tsx',
  'app/components/Loading.tsx',
  'app/components/LoadingOptimizer.tsx',
  'app/components/LoadingSpinner.tsx',
  'app/components/LoadingStates.tsx',
  'app/components/MobileNavigation.tsx',
  'app/components/MobileOptimizer.tsx',
  'app/components/Navigation-backup.tsx',
  'app/components/Navigation.tsx'
];

// Function to check if a file is corrupted
function isCorrupted(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check for common corruption patterns
    const corruptionPatterns = [
      /unterminated string literal/i,
      /unexpected token/i,
      /identifier expected/i,
      /property assignment expected/i,
      /declaration or statement expected/i,
      /expression expected/i,
      /unterminated template literal/i,
      /unterminated string constant/i
    ];
    
    return corruptionPatterns.some(pattern => pattern.test(content));
  } catch (error) {
    return true; // If we can't read the file, consider it corrupted
  }
}

// Function to create a basic 404 page
function create404Page() {
  const content = `import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="description" content="The page you are looking for could not be found." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-4">404</h1>
          <h2 className="text-2xl text-gray-300 mb-8">Page Not Found</h2>
          <p className="text-gray-400 mb-8">The page you are looking for could not be found.</p>
          <Link 
            to="/" 
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;`;
  
  fs.writeFileSync('app/404.tsx', content);
}

// Function to create a basic Navigation component
function createNavigationComponent() {
  const content = `import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900/90 backdrop-blur-sm border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
            <Link to="/services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Services
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800">
            <Link to="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            <Link to="/services" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Services
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;`;
  
  fs.writeFileSync('app/components/Navigation.tsx', content);
}

// Function to create a basic Footer component
function createFooterComponent() {
  const content = `import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Zion Tech Group</h3>
            <p className="text-gray-400 mb-4">
              Advanced AI and IT Solutions for the modern enterprise.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/ai-solutions" className="text-gray-400 hover:text-white">AI Solutions</Link></li>
              <li><Link to="/cloud-solutions" className="text-gray-400 hover:text-white">Cloud Solutions</Link></li>
              <li><Link to="/cybersecurity" className="text-gray-400 hover:text-white">Cybersecurity</Link></li>
              <li><Link to="/it-services" className="text-gray-400 hover:text-white">IT Services</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white">Privacy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white">Terms</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400">
            © 2024 Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;`;
  
  fs.writeFileSync('app/components/Footer.tsx', content);
}

// Function to create a basic AnalyticsProvider component
function createAnalyticsProvider() {
  const content = `import React, { createContext, useContext, useEffect } from 'react';

interface AnalyticsContextType {
  track: (event: string, properties?: Record<string, any>) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const track = (event: string, properties?: Record<string, any>) => {
    // Basic analytics tracking
    console.log('Analytics Event:', event, properties);
    
    // Add your analytics implementation here
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event, properties);
    }
  };

  useEffect(() => {
    // Initialize analytics
    console.log('Analytics Provider initialized');
  }, []);

  return (
    <AnalyticsContext.Provider value={{ track }}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;`;
  
  fs.writeFileSync('app/components/AnalyticsProvider.tsx', content);
}

// Main execution
console.log('Starting corrupted files cleanup...');

// Create essential components
create404Page();
createNavigationComponent();
createFooterComponent();
createAnalyticsProvider();

// Delete corrupted files
let deletedCount = 0;
corruptedFiles.forEach(file => {
  if (fs.existsSync(file) && isCorrupted(file)) {
    try {
      fs.unlinkSync(file);
      console.log(`Deleted corrupted file: ${file}`);
      deletedCount++;
    } catch (error) {
      console.error(`Failed to delete ${file}:`, error.message);
    }
  }
});

console.log(`Cleanup complete. Deleted ${deletedCount} corrupted files.`);
console.log('Created essential components: 404.tsx, Navigation.tsx, Footer.tsx, AnalyticsProvider.tsx');