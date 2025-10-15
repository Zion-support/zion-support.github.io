#!/usr/bin/env python3
import os
import re
import glob

def fix_enhanced_seo(file_path):
    """Fix the EnhancedSEO.tsx file specifically."""
    content = '''import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
  noindex?: boolean;
  nofollow?: boolean;
}

const EnhancedSEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI-powered solutions, IT services, 5G implementation, and micro SAAS platforms. 99.8% client satisfaction, 24/7 support.',
  keywords = 'AI solutions, artificial intelligence, IT services, 5G implementation, micro SAAS, cloud migration, cybersecurity, mobile development, machine learning, enterprise technology, digital transformation, Zion Tech Group, Delaware technology company',
  canonical,
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noindex = false,
  nofollow = false
}) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressRegion": "Delaware"
    },
    "sameAs": [
      "https://linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup"
    ]
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical || 'https://ziontechgroup.com'} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* SEO */}
      {noindex && <meta name="robots" content="noindex" />}
      {nofollow && <meta name="robots" content="nofollow" />}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
    </Helmet>
  );
};

export default EnhancedSEO;
'''
    return content

def fix_futuristic_glow(file_path):
    """Fix the FuturisticGlow.tsx file specifically."""
    content = '''import React from 'react';

interface FuturisticGlowProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
  color?: 'blue' | 'purple' | 'cyan' | 'pink';
}

const FuturisticGlow: React.FC<FuturisticGlowProps> = ({
  children,
  className = '',
  intensity = 'medium',
  color = 'blue'
}) => {
  const intensityClasses = {
    low: 'shadow-lg',
    medium: 'shadow-xl',
    high: 'shadow-2xl'
  };

  const colorClasses = {
    blue: 'shadow-blue-500/50',
    purple: 'shadow-purple-500/50',
    cyan: 'shadow-cyan-500/50',
    pink: 'shadow-pink-500/50'
  };

  return (
    <div className={`${intensityClasses[intensity]} ${colorClasses[color]} ${className}`}>
      {children}
    </div>
  );
};

export default FuturisticGlow;
'''
    return content

def fix_corrupted_file(file_path):
    """Fix specific corrupted files."""
    filename = os.path.basename(file_path)
    
    if 'EnhancedSEO' in filename:
        content = fix_enhanced_seo(file_path)
    elif 'FuturisticGlow' in filename:
        content = fix_futuristic_glow(file_path)
    else:
        return False
    
    try:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed corrupted file: {file_path}")
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # List of known corrupted files
    corrupted_files = [
        '/workspace/app/components/EnhancedSEO.tsx',
        '/workspace/app/components/EnhancedSEOHead.tsx',
        '/workspace/app/components/EnhancedSEOOptimizer.tsx',
        '/workspace/app/components/FuturisticGlow.tsx',
        '/workspace/app/components/FuturisticHero.tsx',
        '/workspace/app/components/FuturisticLoader.tsx',
        '/workspace/app/components/FuturisticServiceCard.tsx',
        '/workspace/app/components/EnhancedServicesShowcase.tsx',
        '/workspace/app/components/EnhancedSkipLink.tsx'
    ]
    
    files_fixed = 0
    
    for file_path in corrupted_files:
        if os.path.exists(file_path):
            if fix_corrupted_file(file_path):
                files_fixed += 1
    
    print(f"\nFixed {files_fixed} corrupted files")

if __name__ == "__main__":
    main()