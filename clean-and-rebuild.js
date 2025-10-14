import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directories to clean
const dirsToClean = [
  'app/utils',
  'app/hooks',
  'app/lib',
  'app/types',
  'app/constants',
  'app/data',
  'hooks',
  'utils'
];

// Files to keep and fix
const filesToKeep = [
  'app/page.tsx',
  'app/App.tsx',
  'app/404.tsx',
  'main.tsx',
  'App.tsx'
];

console.log('Starting clean and rebuild process...');

// Clean directories
dirsToClean.forEach(dir => {
  const dirPath = path.join(__dirname, dir);
  if (fs.existsSync(dirPath)) {
    fs.rmSync(dirPath, { recursive: true, force: true });
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Cleaned ${dir}`);
  }
});

// Create basic utility files
const basicUtils = {
  'app/lib/utils.ts': `import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`,
  
  'app/types/app.types.ts': `export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
}

export interface PageProps {
  title: string;
  description: string;
}`,
  
  'app/types/gtag.d.ts': `declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
    dataLayer: unknown[];
  }
}

export {};`,
  
  'app/constants/analytics.ts': `export const analyticsConfig = {
  googleAnalytics: {
    measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '',
    enabled: process.env.NODE_ENV === 'production'
  }
};`,
  
  'app/data/servicesData.ts': `export const servicesData = {
  ai: {
    title: 'AI Solutions',
    description: 'Advanced AI services for your business',
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision']
  },
  it: {
    title: 'IT Services',
    description: 'Comprehensive IT solutions',
    features: ['Cloud Computing', 'Cybersecurity', 'Data Management']
  },
  '5g': {
    title: '5G Solutions',
    description: 'Next-generation 5G services',
    features: ['Network Deployment', 'IoT Integration', 'Edge Computing']
  }
};`,
  
  'app/hooks/useAnalytics.ts': `import { useEffect } from 'react';

export const useAnalytics = () => {
  useEffect(() => {
    // Analytics initialization
  }, []);

  const trackEvent = (eventName: string, parameters?: Record<string, unknown>) => {
    // Track event logic
  };

  return { trackEvent };
};`,
  
  'app/hooks/usePerformanceMonitor.ts': `import { useEffect, useState } from 'react';

export const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = useState({});

  useEffect(() => {
    // Performance monitoring logic
  }, []);

  return { metrics };
};`,
  
  'app/utils/performanceMonitor.ts': `export const performanceMonitor = {
  start: (name: string) => {
    performance.mark(\`\${name}-start\`);
  },
  end: (name: string) => {
    performance.mark(\`\${name}-end\`);
    performance.measure(name, \`\${name}-start\`, \`\${name}-end\`);
  }
};`,
  
  'app/utils/errorHandler.ts': `export const errorHandler = {
  log: (error: Error, context?: Record<string, unknown>) => {
    // Error logging logic
  },
  report: (error: Error, context?: Record<string, unknown>) => {
    // Error reporting logic
  }
};`
};

// Create basic utility files
Object.entries(basicUtils).forEach(([filePath, content]) => {
  const fullPath = path.join(__dirname, filePath);
  const dir = path.dirname(fullPath);
  
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  fs.writeFileSync(fullPath, content);
  console.log(`Created ${filePath}`);
});

// Fix main page files
const mainPageContent = `import React from 'react';
import { Helmet } from "react-helmet-async";
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Users } from 'lucide-react';

function HomePage() {
  const features = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'AI Solutions',
      description: 'Advanced AI services for your business needs.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'IT Services',
      description: 'Comprehensive IT solutions and support.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: '5G Solutions',
      description: 'Next-generation 5G network services.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Professional AI, IT, and 5G solutions for your business" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to Zion Tech Group
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional AI, IT, and 5G solutions for your business needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
                <div className="text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
`;

fs.writeFileSync(path.join(__dirname, 'app/page.tsx'), mainPageContent);
console.log('Fixed app/page.tsx');

// Fix App.tsx
const appContent = `import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './page';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
`;

fs.writeFileSync(path.join(__dirname, 'app/App.tsx'), appContent);
console.log('Fixed app/App.tsx');

// Fix main.tsx
const mainContent = `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
`;

fs.writeFileSync(path.join(__dirname, 'main.tsx'), mainContent);
console.log('Fixed main.tsx');

console.log('Clean and rebuild completed successfully!');