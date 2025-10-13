#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to remove all corrupted app files and create a minimal working app
function createMinimalWorkingApp() {
  console.log('🧹 Removing all corrupted files...');
  
  // Remove the entire app directory
  const appDir = '/workspace/app';
  if (fs.existsSync(appDir)) {
    fs.rmSync(appDir, { recursive: true, force: true });
    console.log('🗑️  Removed corrupted app directory');
  }
  
  // Create new clean app directory structure
  console.log('🏗️  Creating clean app structure...');
  
  // Create app directory
  fs.mkdirSync(appDir, { recursive: true });
  
  // Create globals.css
  const globalsCSS = `@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}`;
  
  fs.writeFileSync(`${appDir}/globals.css`, globalsCSS);
  
  // Create components directory
  const componentsDir = `${appDir}/components`;
  fs.mkdirSync(componentsDir, { recursive: true });
  
  // Create ErrorBoundary component
  const errorBoundaryContent = `import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error?: Error; resetError: () => void }>;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback;
      return (
        <FallbackComponent 
          error={this.state.error} 
          resetError={() => this.setState({ hasError: false, error: undefined })} 
        />
      );
    }

    return this.props.children;
  }
}

function DefaultErrorFallback({ error, resetError }: { error?: Error; resetError: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h1>
        <p className="text-gray-600 mb-4">
          {error?.message || 'An unexpected error occurred'}
        </p>
        <button
          onClick={resetError}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export default ErrorBoundary;`;

  fs.writeFileSync(`${componentsDir}/ErrorBoundary.tsx`, errorBoundaryContent);
  
  // Create LoadingStates component
  const loadingStatesContent = `import React from 'react';

export function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
        <p className="text-white">Loading...</p>
      </div>
    </div>
  );
}

export function LoadingSpinner() {
  return (
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
  );
}

export function LoadingSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
    </div>
  );
}`;

  fs.writeFileSync(`${componentsDir}/LoadingStates.tsx`, loadingStatesContent);
  
  // Create Navigation component
  const navigationContent = `import React, { useState } from 'react';
import Link from 'next/link';

interface NavigationProps {
  onSidebarToggle?: () => void;
}

export default function Navigation({ onSidebarToggle }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    onSidebarToggle?.();
  };

  return (
    <nav className="bg-slate-900/90 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-white">
            Zion Tech Group
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/ai-services" className="text-gray-300 hover:text-white transition-colors">
              AI Services
            </Link>
            <Link href="/5g-solutions" className="text-gray-300 hover:text-white transition-colors">
              5G Solutions
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </div>
          
          <button
            onClick={toggleMenu}
            className="md:hidden text-white"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}`;

  fs.writeFileSync(`${componentsDir}/Navigation.tsx`, navigationContent);
  
  // Create Footer component
  const footerContent = `import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Zion Tech Group</h3>
            <p className="text-gray-300">
              Advanced AI and IT solutions for modern businesses.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/ai-services" className="text-gray-300 hover:text-white">AI Services</Link></li>
              <li><Link href="/5g-solutions" className="text-gray-300 hover:text-white">5G Solutions</Link></li>
              <li><Link href="/cloud-infrastructure" className="text-gray-300 hover:text-white">Cloud Infrastructure</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white">About</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-white">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-300 hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}`;

  fs.writeFileSync(`${componentsDir}/Footer.tsx`, footerContent);
  
  // Create HomePage component
  const homePageContent = `import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Advanced AI and IT solutions for the future of business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/services" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Our Services
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-2xl font-semibold text-white mb-4">AI Solutions</h3>
            <p className="text-gray-300 mb-4">
              Harness the power of artificial intelligence to transform your business operations.
            </p>
            <Link href="/ai-services" className="text-blue-400 hover:text-blue-300">
              Learn More →
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-2xl font-semibold text-white mb-4">5G Technology</h3>
            <p className="text-gray-300 mb-4">
              Experience ultra-fast connectivity with our cutting-edge 5G solutions.
            </p>
            <Link href="/5g-solutions" className="text-blue-400 hover:text-blue-300">
              Learn More →
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-2xl font-semibold text-white mb-4">Cloud Infrastructure</h3>
            <p className="text-gray-300 mb-4">
              Scalable and secure cloud solutions for modern businesses.
            </p>
            <Link href="/cloud-infrastructure" className="text-blue-400 hover:text-blue-300">
              Learn More →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}`;

  fs.writeFileSync(`${appDir}/page.tsx`, homePageContent);
  
  // Create minimal pages
  const pages = [
    { path: 'about/page.tsx', title: 'About Us', content: 'Zion Tech Group is a leading provider of AI and IT solutions.' },
    { path: 'contact/page.tsx', title: 'Contact Us', content: 'Get in touch with our team for your AI and IT needs.' },
    { path: 'services/page.tsx', title: 'Our Services', content: 'Comprehensive AI and IT solutions for modern businesses.' },
    { path: 'ai-services/page.tsx', title: 'AI Services', content: 'Advanced artificial intelligence solutions for your business.' },
    { path: '5g-solutions/page.tsx', title: '5G Solutions', content: 'Cutting-edge 5G technology solutions for modern connectivity.' },
    { path: 'cloud-infrastructure/page.tsx', title: 'Cloud Infrastructure', content: 'Scalable and secure cloud solutions for your business.' },
    { path: 'privacy/page.tsx', title: 'Privacy Policy', content: 'Your privacy is important to us.' },
    { path: 'terms/page.tsx', title: 'Terms of Service', content: 'Terms and conditions for using our services.' },
    { path: 'blog/page.tsx', title: 'Blog', content: 'Latest insights and updates from our team.' }
  ];

  pages.forEach(({ path: filePath, title, content }) => {
    const fullPath = `${appDir}/${filePath}`;
    const dir = path.dirname(fullPath);
    
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    const pageContent = `import React from 'react';

export default function ${title.replace(/\s+/g, '')}Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">${title}</h1>
        <p className="text-gray-300 text-lg">
          ${content}
        </p>
      </div>
    </div>
  );
}`;
    
    fs.writeFileSync(fullPath, pageContent);
    console.log(`✅ Created ${filePath}`);
  });
  
  console.log('✅ Created minimal working app structure');
}

// Function to create clean App.tsx
function createCleanApp() {
  const content = `import React, { useState, useCallback, useEffect, Suspense } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './app/globals.css';
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import HomePage from './app/page';
import { PageLoader } from './app/components/LoadingStates';
import ErrorBoundary from './app/components/ErrorBoundary';

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import('./app/about/page'));
const ContactPage = React.lazy(() => import('./app/contact/page'));
const ServicesPage = React.lazy(() => import('./app/services/page'));
const PrivacyPage = React.lazy(() => import('./app/privacy/page'));
const TermsPage = React.lazy(() => import('./app/terms/page'));
const AIServicesPage = React.lazy(() => import('./app/ai-services/page'));
const FiveGSolutionsPage = React.lazy(() => import('./app/5g-solutions/page'));
const CloudInfrastructurePage = React.lazy(() => import('./app/cloud-infrastructure/page'));
const BlogPage = React.lazy(() => import('./app/blog/page'));

// Main App Component
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(prev => !prev);
  }, []);

  const closeSidebar = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  useEffect(() => {
    // Initialize performance monitoring
    if (typeof window !== 'undefined') {
      console.log('Zion Tech Group App initialized');
    }
  }, []);

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <Navigation onSidebarToggle={toggleSidebar} />
            
            <main className="relative z-10" id="main-content" role="main">
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  {/* Main Pages */}
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/ai-services" element={<AIServicesPage />} />
                  <Route path="/privacy" element={<PrivacyPage />} />
                  <Route path="/terms" element={<TermsPage />} />

                  {/* IT Services */}
                  <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />

                  {/* Catch all route */}
                  <Route path="*" element={
                    <div className="min-h-screen flex items-center justify-center">
                      <div className="text-center">
                        <h1 className="text-4xl font-bold text-white mb-4">404 - Page Not Found</h1>
                        <p className="text-gray-300 mb-8">The page you're looking for doesn't exist.</p>
                        <a href="/" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Go Home
                        </a>
                      </div>
                    </div>
                  } />
                </Routes>
              </Suspense>
            </main>
            
            <Footer />
          </div>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;`;

  fs.writeFileSync('/workspace/App.tsx', content);
  console.log('✅ Created clean App.tsx');
}

// Main execution
console.log('🚀 Starting final cleanup...');

try {
  createMinimalWorkingApp();
  createCleanApp();
  
  console.log('✅ Final cleanup completed successfully!');
  console.log('🎉 Minimal working application created!');
} catch (error) {
  console.error('❌ Error during final cleanup:', error);
  process.exit(1);
}