#!/bin/bash

echo "Implementing improvements for Zion Tech Group website..."

# 1. Create enhanced SEO component
cat > /workspace/app/components/EnhancedSEO.tsx << 'SEO_EOF'
import { Helmet } from "react-helmet-async";
import React from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: object;
}

const EnhancedSEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  image = "https://ziontechgroup.com/og-image.jpg",
  url = "https://ziontechgroup.com",
  type = "website",
  structuredData
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default EnhancedSEO;
SEO_EOF

# 2. Create enhanced loading component
cat > /workspace/app/components/EnhancedLoading.tsx << 'LOADING_EOF'
import React from 'react';
import { Loader2, Brain, Shield, Zap, Globe } from 'lucide-react';

interface EnhancedLoadingProps {
  type?: 'default' | 'ai' | 'security' | 'performance' | 'global';
  text?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const EnhancedLoading: React.FC<EnhancedLoadingProps> = ({
  type = 'default',
  text,
  size = 'md',
  className = ''
}) => {
  const icons = {
    default: Loader2,
    ai: Brain,
    security: Shield,
    performance: Zap,
    global: Globe
  };

  const Icon = icons[type];
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const getLoadingText = () => {
    if (text) return text;
    switch (type) {
      case 'ai': return 'Loading AI solutions...';
      case 'security': return 'Securing your data...';
      case 'performance': return 'Optimizing performance...';
      case 'global': return 'Connecting globally...';
      default: return 'Loading...';
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
      <div className="relative">
        <Icon 
          className={`${sizeClasses[size]} animate-spin text-cyan-400`}
          data-testid="loading-icon"
        />
        {type !== 'default' && (
          <div className="absolute inset-0 animate-ping">
            <Icon className={`${sizeClasses[size]} text-cyan-400/30`} />
          </div>
        )}
      </div>
      <div className="text-center">
        <p className="text-gray-300 text-sm animate-pulse">
          {getLoadingText()}
        </p>
        <div className="mt-2 w-32 h-1 bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedLoading;
LOADING_EOF

# 3. Create search component
cat > /workspace/app/components/SearchComponent.tsx << 'SEARCH_EOF'
import React, { useState, useMemo, useCallback } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SearchResult {
  title: string;
  description: string;
  path: string;
  category: string;
  icon?: React.ReactNode;
}

interface SearchComponentProps {
  placeholder?: string;
  className?: string;
}

const SearchComponent: React.FC<SearchComponentProps> = ({
  placeholder = "Search services, solutions, and more...",
  className = ""
}) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const searchData: SearchResult[] = useMemo(() => [
    // AI Services
    { title: 'AI Analytics Dashboard', description: 'Advanced AI-powered business intelligence platform', path: '/ai-analytics-dashboard-pro', category: 'AI Services' },
    { title: 'AI Content Generator', description: 'Generate high-quality content with AI', path: '/ai-content-generator', category: 'AI Services' },
    { title: 'AI Cybersecurity Suite', description: 'Comprehensive AI-powered security solutions', path: '/ai-cybersecurity-suite-pro', category: 'AI Services' },
    { title: 'AI Customer Support', description: 'Intelligent customer support automation', path: '/ai-customer-support-chatbot', category: 'AI Services' },
    { title: 'AI Code Assistant', description: 'AI-powered coding assistance and optimization', path: '/ai-code-assistant-pro', category: 'AI Services' },
    
    // IT Services
    { title: 'Cloud Infrastructure', description: 'Scalable cloud computing solutions', path: '/cloud-infrastructure', category: 'IT Services' },
    { title: 'Cybersecurity Solutions', description: 'Advanced security protection services', path: '/cybersecurity-solutions', category: 'IT Services' },
    { title: 'Web Development', description: 'Custom web application development', path: '/web-development', category: 'IT Services' },
    { title: 'Mobile Development', description: 'Native and cross-platform mobile apps', path: '/mobile-development', category: 'IT Services' },
    
    // Micro SAAS
    { title: 'Zion Analytics Pro', description: 'AI-powered business intelligence platform', path: '/zion-analytics-pro', category: 'Micro SAAS' },
    { title: 'Zion Security Shield', description: 'Comprehensive security monitoring solution', path: '/zion-security-shield', category: 'Micro SAAS' },
    { title: 'Zion Cloud Vault', description: 'Secure cloud storage and backup solution', path: '/zion-cloud-vault', category: 'Micro SAAS' },
    
    // 5G Solutions
    { title: '5G Data Analytics', description: 'Advanced analytics for 5G networks', path: '/5g-data-analytics', category: '5G Solutions' },
    { title: '5G Edge Computing', description: 'Edge computing solutions for 5G', path: '/5g-edge-computing', category: '5G Solutions' },
    { title: '5G IoT Solutions', description: 'Internet of Things solutions for 5G', path: '/5g-iot-solutions', category: '5G Solutions' },
    
    // General Pages
    { title: 'About Us', description: 'Learn about Zion Tech Group', path: '/about', category: 'Company' },
    { title: 'Contact', description: 'Get in touch with our team', path: '/contact', category: 'Company' },
    { title: 'Careers', description: 'Join our innovative team', path: '/careers', category: 'Company' },
    { title: 'Blog', description: 'Latest insights and updates', path: '/blog', category: 'Company' }
  ], []);

  const filteredResults = useMemo(() => {
    if (!query.trim()) return [];
    
    const lowercaseQuery = query.toLowerCase();
    return searchData.filter(item =>
      item.title.toLowerCase().includes(lowercaseQuery) ||
      item.description.toLowerCase().includes(lowercaseQuery) ||
      item.category.toLowerCase().includes(lowercaseQuery)
    ).slice(0, 8); // Limit to 8 results
  }, [query, searchData]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setIsOpen(true);
  }, []);

  const handleResultClick = useCallback(() => {
    setQuery('');
    setIsOpen(false);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      setQuery('');
    }
  }, []);

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm"
        />
        {query && (
          <button
            onClick={() => { setQuery(''); setIsOpen(false); }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {isOpen && query && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-sm border border-white/20 rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto">
          {filteredResults.length > 0 ? (
            <div className="p-2">
              {filteredResults.map((result, index) => (
                <Link
                  key={index}
                  to={result.path}
                  onClick={handleResultClick}
                  className="block p-3 hover:bg-gray-100 rounded-lg transition-colors group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 group-hover:text-cyan-600 transition-colors">
                        {result.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {result.description}
                      </p>
                      <span className="inline-block mt-2 px-2 py-1 bg-cyan-100 text-cyan-700 text-xs rounded-full">
                        {result.category}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-600 transition-colors ml-2" />
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-4 text-center text-gray-500">
              <Search className="w-8 h-8 mx-auto mb-2 text-gray-400" />
              <p>No results found for "{query}"</p>
              <p className="text-sm mt-1">Try different keywords or check our main navigation</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
SEARCH_EOF

# 4. Create service worker
cat > /workspace/public/sw.js << 'SW_EOF'
const CACHE_NAME = 'zion-tech-v1';
const urlsToCache = [
  '/',
  '/about',
  '/services',
  '/contact',
  '/ai-services',
  '/micro-saas',
  '/5g-solutions',
  '/static/js/bundle.js',
  '/static/css/main.css'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
SW_EOF

# 5. Create PWA manifest
cat > /workspace/public/manifest.json << 'MANIFEST_EOF'
{
  "name": "Zion Tech Group - AI & IT Solutions",
  "short_name": "Zion Tech",
  "description": "Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services.",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0f172a",
  "theme_color": "#00ffff",
  "orientation": "portrait-primary",
  "icons": [
    {
      "src": "/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ],
  "categories": ["business", "productivity", "technology"],
  "lang": "en-US",
  "dir": "ltr"
}
MANIFEST_EOF

# 6. Create analytics component
cat > /workspace/app/components/Analytics.tsx << 'ANALYTICS_EOF'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface AnalyticsProps {
  trackingId?: string;
}

const Analytics: React.FC<AnalyticsProps> = ({ 
  trackingId = process.env.REACT_APP_GA_TRACKING_ID 
}) => {
  const location = useLocation();

  useEffect(() => {
    if (!trackingId) return;

    // Initialize Google Analytics
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    document.head.appendChild(script);

    // Configure gtag
    window.gtag = window.gtag || function() {
      (window.gtag.q = window.gtag.q || []).push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', trackingId, {
      page_title: document.title,
      page_location: window.location.href,
    });

    return () => {
      document.head.removeChild(script);
    };
  }, [trackingId]);

  useEffect(() => {
    if (!window.gtag) return;

    // Track page views
    window.gtag('config', trackingId, {
      page_path: location.pathname,
      page_title: document.title,
    });
  }, [location, trackingId]);

  return null;
};

export default Analytics;
ANALYTICS_EOF

echo "Improvements implementation completed!"
