#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// List of all corrupted files to remove
const corruptedFiles = [
  'app/constants/seo.ts',
  'app/contexts/AnalyticsContext.tsx',
  'app/data/services.ts',
  'app/global-error.tsx',
  'app/hooks/useAnalytics.ts',
  'app/hooks/usePerformance.ts',
  'app/not-found.tsx',
  'app/page-backup.tsx',
  'app/page-optimized.tsx',
  'app/pages/5GSolutionsPage.tsx',
  'app/pages/BlogPage.tsx',
  'app/pages/CloudSolutionsPage.tsx',
  'app/pages/CybersecurityPage.tsx',
  'app/pages/DemoPage.tsx',
  'app/pages/MicroSaaSPage.tsx',
  'app/pages/PricingPage.tsx',
  'app/pages/PrivacyPage.tsx',
  'app/pages/SolutionsPage.tsx',
  'app/pages/SupportPage.tsx',
  'app/pages/TermsPage.tsx',
  'app/pages/TutorialsPage.tsx',
  'app/service-template.tsx',
  'app/sitemap-page.tsx',
  'app/types/next.d.ts',
  'app/utils/accessibilityEnhancer.ts',
  'app/utils/analytics.ts',
  'app/utils/dynamic.tsx',
  'app/utils/errorHandler.ts',
  'app/utils/imageOptimizer.ts',
  'app/utils/messageHandler.ts',
  'app/utils/seoData.ts',
  'app/zion-ai-analytics-pro/page.tsx',
  'app/zion-ai-crm-pro/page.tsx',
  'app/zion-ai-email-analyzer/page.tsx',
  'app/zion-ai-performance-optimizer/page.tsx',
  'app/zion-ai-social-media-manager/page.tsx',
  'app/zion-ai-voice-assistant-pro/page.tsx',
  'main.tsx'
];

// Function to create essential files
function createEssentialFiles() {
  // Create main.tsx
  const mainContent = `import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);`;
  
  fs.writeFileSync('main.tsx', mainContent);

  // Create index.css
  const cssContent = `@tailwind base;
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
  
  fs.writeFileSync('index.css', cssContent);

  // Create 404 page
  const notFoundContent = `import React from 'react';
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
  
  fs.writeFileSync('app/404.tsx', notFoundContent);

  // Create global error page
  const globalErrorContent = `import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const GlobalErrorPage = () => {
  return (
    <>
      <Helmet>
        <title>Error | Zion Tech Group</title>
        <meta name="description" content="An error occurred." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-4">Error</h1>
          <h2 className="text-2xl text-gray-300 mb-8">Something went wrong</h2>
          <p className="text-gray-400 mb-8">We're sorry, but something went wrong. Please try again later.</p>
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

export default GlobalErrorPage;`;
  
  fs.writeFileSync('app/global-error.tsx', globalErrorContent);

  // Create not-found page
  const notFoundPageContent = `import React from 'react';
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
  
  fs.writeFileSync('app/not-found.tsx', notFoundPageContent);
}

// Main execution
console.log('Starting comprehensive cleanup...');

// Create essential files
createEssentialFiles();

// Delete corrupted files
let deletedCount = 0;
corruptedFiles.forEach(file => {
  if (fs.existsSync(file)) {
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
console.log('Created essential files: main.tsx, index.css, 404.tsx, global-error.tsx, not-found.tsx');