#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Starting comprehensive improvements implementation...');

// 1. Optimize package.json
function optimizePackageJson() {
    console.log('📦 Optimizing package.json...');
    
    const packagePath = path.join(__dirname, 'package.json');
    if (fs.existsSync(packagePath)) {
        const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
        
        // Add useful scripts
        packageJson.scripts = {
            ...packageJson.scripts,
            'build:prod': 'vite build --mode production',
            'build:staging': 'vite build --mode staging',
            'analyze': 'vite build --mode analyze',
            'lint:fix': 'eslint . --ext ts,tsx --fix',
            'type-check': 'tsc --noEmit',
            'test:coverage': 'jest --coverage',
            'preview:build': 'vite build && vite preview'
        };
        
        // Add build optimization
        if (!packageJson.build) {
            packageJson.build = {
                "rollupOptions": {
                    "output": {
                        "manualChunks": {
                            "vendor": ["react", "react-dom"],
                            "ui": ["@radix-ui/react-accordion", "@radix-ui/react-alert-dialog"],
                            "utils": ["axios", "date-fns", "clsx"]
                        }
                    }
                }
            };
        }
        
        fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
        console.log('✅ Package.json optimized');
    }
}

// 2. Enhance Vite configuration
function enhanceViteConfig() {
    console.log('⚙️  Enhancing Vite configuration...');
    
    const viteConfigPath = path.join(__dirname, 'vite.config.js');
    const viteConfigContent = `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@assets': resolve(__dirname, 'src/assets')
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-accordion', '@radix-ui/react-alert-dialog'],
          utils: ['axios', 'date-fns', 'clsx']
        }
      }
    },
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  server: {
    port: 3000,
    open: true
  },
  preview: {
    port: 4173,
    open: true
  }
})`;

    fs.writeFileSync(viteConfigPath, viteConfigContent);
    console.log('✅ Vite configuration enhanced');
}

// 3. Optimize Netlify configuration
function optimizeNetlifyConfig() {
    console.log('🌐 Optimizing Netlify configuration...');
    
    const netlifyConfigPath = path.join(__dirname, 'netlify.toml');
    if (fs.existsSync(netlifyConfigPath)) {
        let config = fs.readFileSync(netlifyConfigPath, 'utf8');
        
        // Add performance optimizations
        const performanceHeaders = `
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "camera=(), microphone=(), geolocation=()"

[[headers]]
  for = "/static/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "*.woff2"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
    Content-Type = "font/woff2"
`;

        config += performanceHeaders;
        fs.writeFileSync(netlifyConfigPath, config);
        console.log('✅ Netlify configuration optimized');
    }
}

// 4. Create performance monitoring
function createPerformanceMonitoring() {
    console.log('📊 Creating performance monitoring...');
    
    const performanceScript = `// Performance monitoring utility
export class PerformanceMonitor {
    static mark(name) {
        if (typeof performance !== 'undefined' && performance.mark) {
            performance.mark(name);
        }
    }
    
    static measure(name, startMark, endMark) {
        if (typeof performance !== 'undefined' && performance.measure) {
            performance.measure(name, startMark, endMark);
        }
    }
    
    static getNavigationTiming() {
        if (typeof performance !== 'undefined' && performance.getEntriesByType) {
            const navigation = performance.getEntriesByType('navigation')[0];
            return {
                domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
                loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
                totalTime: navigation.loadEventEnd - navigation.fetchStart
            };
        }
        return null;
    }
    
    static reportWebVitals() {
        // Report Core Web Vitals
        if (typeof window !== 'undefined' && 'web-vitals' in window) {
            import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
                getCLS(console.log);
                getFID(console.log);
                getFCP(console.log);
                getLCP(console.log);
                getTTFB(console.log);
            });
        }
    }
}`;

    const utilsDir = path.join(__dirname, 'src', 'utils');
    if (!fs.existsSync(utilsDir)) {
        fs.mkdirSync(utilsDir, { recursive: true });
    }
    
    fs.writeFileSync(path.join(utilsDir, 'performance.ts'), performanceScript);
    console.log('✅ Performance monitoring created');
}

// 5. Create error boundary
function createErrorBoundary() {
    console.log('🛡️  Creating error boundary...');
    
    const errorBoundaryCode = `import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
        
        // Report to error tracking service
        if (typeof window !== 'undefined' && 'gtag' in window) {
            (window as any).gtag('event', 'exception', {
                description: error.message,
                fatal: false
            });
        }
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback || (
                <div className="min-h-screen flex items-center justify-center bg-gray-50">
                    <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
                        <div className="flex items-center mb-4">
                            <div className="flex-shrink-0">
                                <svg className="h-8 w-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                </svg>
                            </div>
                            <div className="ml-3">
                                <h3 className="text-lg font-medium text-gray-900">
                                    Something went wrong
                                </h3>
                            </div>
                        </div>
                        <div className="mt-2">
                            <p className="text-sm text-gray-500">
                                We're sorry, but something unexpected happened. Please try refreshing the page.
                            </p>
                        </div>
                        <div className="mt-4">
                            <button
                                onClick={() => window.location.reload()}
                                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
                            >
                                Refresh Page
                            </button>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}`;

    const componentsDir = path.join(__dirname, 'src', 'components');
    if (!fs.existsSync(componentsDir)) {
        fs.mkdirSync(componentsDir, { recursive: true });
    }
    
    fs.writeFileSync(path.join(componentsDir, 'ErrorBoundary.tsx'), errorBoundaryCode);
    console.log('✅ Error boundary created');
}

// 6. Create SEO utilities
function createSEOUtilities() {
    console.log('🔍 Creating SEO utilities...');
    
    const seoUtils = `import { Helmet } from 'react-helmet-async';

export interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    canonical?: string;
    ogImage?: string;
    ogType?: string;
    twitterCard?: string;
    noindex?: boolean;
    nofollow?: boolean;
}

export const SEO: React.FC<SEOProps> = ({
    title = 'Zion Tech Group - Revolutionary AI Solutions',
    description = 'Leading provider of revolutionary AI, quantum computing, and neural interface technologies',
    keywords = 'AI, artificial intelligence, quantum computing, neural interfaces, technology, innovation',
    canonical,
    ogImage = '/og-image.jpg',
    ogType = 'website',
    twitterCard = 'summary_large_image',
    noindex = false,
    nofollow = false
}) => {
    const robots = [
        noindex ? 'noindex' : 'index',
        nofollow ? 'nofollow' : 'follow'
    ].join(', ');

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="robots" content={robots} />
            {canonical && <link rel="canonical" href={canonical} />}
            
            {/* Open Graph */}
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            {canonical && <meta property="og:url" content={canonical} />}
            
            {/* Twitter */}
            <meta name="twitter:card" content={twitterCard} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />
        </Helmet>
    );
};`;

    const utilsDir = path.join(__dirname, 'src', 'utils');
    if (!fs.existsSync(utilsDir)) {
        fs.mkdirSync(utilsDir, { recursive: true });
    }
    
    fs.writeFileSync(path.join(utilsDir, 'seo.tsx'), seoUtils);
    console.log('✅ SEO utilities created');
}

// 7. Create accessibility utilities
function createAccessibilityUtilities() {
    console.log('♿ Creating accessibility utilities...');
    
    const a11yUtils = `// Accessibility utilities
export const accessibilityUtils = {
    // Focus management
    trapFocus: (element: HTMLElement) => {
        const focusableElements = element.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        const handleTabKey = (e: KeyboardEvent) => {
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
        };

        element.addEventListener('keydown', handleTabKey);
        firstElement?.focus();

        return () => element.removeEventListener('keydown', handleTabKey);
    },

    // Announce to screen readers
    announce: (message: string, priority: 'polite' | 'assertive' = 'polite') => {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', priority);
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = message;
        
        document.body.appendChild(announcement);
        
        setTimeout(() => {
            document.body.removeChild(announcement);
        }, 1000);
    },

    // Skip to content link
    createSkipLink: (targetId: string, text: string = 'Skip to main content') => {
        const skipLink = document.createElement('a');
        skipLink.href = \`#\${targetId}\`;
        skipLink.textContent = text;
        skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
        skipLink.setAttribute('tabindex', '0');
        
        return skipLink;
    }
};

// Screen reader only class
export const srOnly = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4';`;

    const utilsDir = path.join(__dirname, 'src', 'utils');
    if (!fs.existsSync(utilsDir)) {
        fs.mkdirSync(utilsDir, { recursive: true });
    }
    
    fs.writeFileSync(path.join(utilsDir, 'accessibility.ts'), a11yUtils);
    console.log('✅ Accessibility utilities created');
}

// Main execution
function main() {
    try {
        console.log('🚀 Starting comprehensive improvements...');
        
        optimizePackageJson();
        enhanceViteConfig();
        optimizeNetlifyConfig();
        createPerformanceMonitoring();
        createErrorBoundary();
        createSEOUtilities();
        createAccessibilityUtilities();
        
        console.log('');
        console.log('🎉 All improvements implemented successfully!');
        console.log('');
        console.log('📋 Summary of improvements:');
        console.log('   ✅ Package.json optimized with useful scripts');
        console.log('   ✅ Vite configuration enhanced for performance');
        console.log('   ✅ Netlify configuration optimized');
        console.log('   ✅ Performance monitoring utilities created');
        console.log('   ✅ Error boundary component created');
        console.log('   ✅ SEO utilities created');
        console.log('   ✅ Accessibility utilities created');
        console.log('');
        console.log('🧹 Next steps:');
        console.log('   1. Run npm install to install any new dependencies');
        console.log('   2. Test the build: npm run build');
        console.log('   3. Test the application: npm run dev');
        console.log('   4. Deploy to Netlify');
        
    } catch (error) {
        console.error('❌ Error implementing improvements:', error);
        process.exit(1);
    }
}

main();