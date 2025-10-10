#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🚀 Starting accessibility and SEO enhancement...');

// Create accessibility enhancements
const accessibilityEnhancements = [
  {
    name: 'Add skip navigation links',
    file: 'src/components/SkipNavigation.tsx',
    content: `import React from 'react';

const SkipNavigation: React.FC = () => {
  return (
    <div className="skip-navigation">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>
      <a 
        href="#navigation" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-32 bg-blue-600 text-white px-4 py-2 rounded z-50"
      >
        Skip to navigation
      </a>
      <a 
        href="#footer" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-64 bg-blue-600 text-white px-4 py-2 rounded z-50"
      >
        Skip to footer
      </a>
    </div>
  );
};

export default SkipNavigation;`
  },
  {
    name: 'Create ARIA landmarks component',
    file: 'src/components/ARIALandmarks.tsx',
    content: `import React from 'react';

interface ARIALandmarksProps {
  children: React.ReactNode;
}

const ARIALandmarks: React.FC<ARIALandmarksProps> = ({ children }) => {
  return (
    <div role="application" aria-label="Zion Tech Group Website">
      <header role="banner" id="header">
        {children}
      </header>
    </div>
  );
};

export default ARIALandmarks;`
  },
  {
    name: 'Create focus management hook',
    file: 'src/hooks/useFocusManagement.ts',
    content: `import { useEffect, useRef } from 'react';

export const useFocusManagement = () => {
  const focusableElements = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const updateFocusableElements = () => {
      focusableElements.current = Array.from(
        document.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
      ) as HTMLElement[];
    };

    updateFocusableElements();
    document.addEventListener('DOMContentLoaded', updateFocusableElements);
    
    return () => {
      document.removeEventListener('DOMContentLoaded', updateFocusableElements);
    };
  }, []);

  const trapFocus = (container: HTMLElement) => {
    const focusableElements = container.querySelectorAll(
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

    container.addEventListener('keydown', handleTabKey);
    firstElement?.focus();

    return () => {
      container.removeEventListener('keydown', handleTabKey);
    };
  };

  return { trapFocus };
};`
  }
];

// Create SEO enhancements
const seoEnhancements = [
  {
    name: 'Create sitemap generator',
    file: 'scripts/generate-sitemap.js',
    content: `#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const baseUrl = 'https://ziontechgroup.com';
const pages = [
  { url: '', priority: 1.0, changefreq: 'daily' },
  { url: '/about', priority: 0.8, changefreq: 'monthly' },
  { url: '/services', priority: 0.9, changefreq: 'weekly' },
  { url: '/ai-services', priority: 0.9, changefreq: 'weekly' },
  { url: '/it-services', priority: 0.9, changefreq: 'weekly' },
  { url: '/contact', priority: 0.7, changefreq: 'monthly' },
  { url: '/team', priority: 0.6, changefreq: 'monthly' },
  { url: '/enterprise', priority: 0.8, changefreq: 'weekly' },
  { url: '/case-studies', priority: 0.7, changefreq: 'monthly' },
  { url: '/blog', priority: 0.6, changefreq: 'weekly' }
];

const generateSitemap = () => {
  const sitemap = \`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
\${pages.map(page => \`
  <url>
    <loc>\${baseUrl}\${page.url}</loc>
    <lastmod>\${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>\${page.changefreq}</changefreq>
    <priority>\${page.priority}</priority>
  </url>\`).join('')}
</urlset>\`;

  fs.writeFileSync('public/sitemap.xml', sitemap);
  console.log('✅ Sitemap generated successfully');
};

generateSitemap();`
  },
  {
    name: 'Create robots.txt',
    file: 'public/robots.txt',
    content: `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/`
  },
  {
    name: 'Create manifest.json for PWA',
    file: 'public/manifest.json',
    content: `{
  "name": "Zion Tech Group - Advanced AI and IT Solutions",
  "short_name": "Zion Tech",
  "description": "Leading provider of enterprise AI solutions, quantum computing, and autonomous systems",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0a0a0a",
  "theme_color": "#00ffff",
  "orientation": "portrait-primary",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "categories": ["business", "technology", "productivity"],
  "lang": "en-US",
  "dir": "ltr"
}`
  }
];

// Create accessibility utilities
const accessibilityUtils = {
  name: 'Create accessibility utilities',
  file: 'src/utils/accessibilityUtils.ts',
  content: `export const announceToScreenReader = (message: string) => {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

export const isHighContrastMode = () => {
  return window.matchMedia('(prefers-contrast: high)').matches;
};

export const isReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const getFocusableElements = (container: HTMLElement) => {
  return Array.from(
    container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
  ) as HTMLElement[];
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement?.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement?.focus();
          e.preventDefault();
        }
      }
    }
  };

  container.addEventListener('keydown', handleKeyDown);
  firstElement?.focus();

  return () => {
    container.removeEventListener('keydown', handleKeyDown);
  };
};`
};

// Apply all enhancements
console.log('📝 Creating accessibility enhancements...');
accessibilityEnhancements.forEach(enhancement => {
  fs.writeFileSync(enhancement.file, enhancement.content);
  console.log(`✅ Created ${enhancement.file}`);
});

console.log('📝 Creating SEO enhancements...');
seoEnhancements.forEach(enhancement => {
  fs.writeFileSync(enhancement.file, enhancement.content);
  console.log(`✅ Created ${enhancement.file}`);
});

console.log('📝 Creating accessibility utilities...');
fs.writeFileSync(accessibilityUtils.file, accessibilityUtils.content);
console.log(`✅ Created ${accessibilityUtils.file}`);

// Update package.json with new scripts
console.log('📝 Adding new scripts to package.json...');
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
packageJson.scripts = {
  ...packageJson.scripts,
  'generate:sitemap': 'node scripts/generate-sitemap.js',
  'accessibility:audit': 'lighthouse http://localhost:4173 --only-categories=accessibility --output=html --output-path=./accessibility-report.html',
  'seo:audit': 'lighthouse http://localhost:4173 --only-categories=seo --output=html --output-path=./seo-report.html',
  'audit:all': 'npm run accessibility:audit && npm run seo:audit'
};

fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
console.log('✅ Updated package.json with new scripts');

// Generate sitemap
console.log('📝 Generating sitemap...');
try {
  execSync('node scripts/generate-sitemap.js', { stdio: 'inherit' });
  console.log('✅ Sitemap generated successfully');
} catch (error) {
  console.log('⚠️  Sitemap generation failed, but continuing...');
}

console.log('🎉 Accessibility and SEO enhancement completed!');

// Run build to verify everything still works
console.log('🔨 Running build verification...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build successful after accessibility and SEO enhancement!');
} catch (error) {
  console.error('❌ Build failed after accessibility and SEO enhancement:', error.message);
  process.exit(1);
}