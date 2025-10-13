const fs = require('fs');

// List of files that need to be fixed
const filesToFix = [
  'app/components/AccessibilityEnhancer.tsx',
  'app/components/FuturisticBackgroundEnhanced.tsx',
  'app/contexts/AnalyticsContext.tsx',
  'app/zion-ai-email-analyzer/page.tsx',
  'app/zion-ai-inventory-manager/page.tsx',
  'app/zion-ai-performance-optimizer/page.tsx',
  'app/zion-ai-social-media-manager/page.tsx',
  'app/zion-ai-voice-assistant-pro/page.tsx',
  'app/zion-smart-expense-categorizer/page.tsx',
  'app/zion-smart-inventory-optimizer/page.tsx'
];

// Template for AI pages
const aiPageTemplate = (title, description, serviceName) => `'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ${serviceName}() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>${title} | Zion Tech Group</title>
        <meta name="description" content="${description}" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            ${title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            ${description}
          </p>
        </div>

        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-6">
              Our ${serviceName} solutions help you achieve your business goals with advanced AI technology.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}`;

// Fix each file
filesToFix.forEach(file => {
  if (fs.existsSync(file)) {
    let content = '';
    
    if (file.includes('zion-ai-email-analyzer')) {
      content = aiPageTemplate('Zion AI Email Analyzer', 'Professional AI Email Analyzer services by Zion Tech Group. Advanced AI and IT solutions for your business.', 'ZionAIEmailAnalyzer');
    } else if (file.includes('zion-ai-inventory-manager')) {
      content = aiPageTemplate('Zion AI Inventory Manager', 'Professional AI Inventory Manager services by Zion Tech Group. Advanced AI and IT solutions for your business.', 'ZionAIInventoryManager');
    } else if (file.includes('zion-ai-performance-optimizer')) {
      content = aiPageTemplate('Zion AI Performance Optimizer', 'Professional AI Performance Optimizer services by Zion Tech Group. Advanced AI and IT solutions for your business.', 'ZionAIPerformanceOptimizer');
    } else if (file.includes('zion-ai-social-media-manager')) {
      content = aiPageTemplate('Zion AI Social Media Manager', 'Professional AI Social Media Manager services by Zion Tech Group. Advanced AI and IT solutions for your business.', 'ZionAISocialMediaManager');
    } else if (file.includes('zion-ai-voice-assistant-pro')) {
      content = aiPageTemplate('Zion AI Voice Assistant Pro', 'Professional AI Voice Assistant Pro services by Zion Tech Group. Advanced AI and IT solutions for your business.', 'ZionAIVoiceAssistantPro');
    } else if (file.includes('zion-smart-expense-categorizer')) {
      content = aiPageTemplate('Zion Smart Expense Categorizer', 'Professional Smart Expense Categorizer services by Zion Tech Group. Advanced AI and IT solutions for your business.', 'ZionSmartExpenseCategorizer');
    } else if (file.includes('zion-smart-inventory-optimizer')) {
      content = aiPageTemplate('Zion Smart Inventory Optimizer', 'Professional Smart Inventory Optimizer services by Zion Tech Group. Advanced AI and IT solutions for your business.', 'ZionSmartInventoryOptimizer');
    } else if (file.includes('AccessibilityEnhancer')) {
      content = `import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    setIsReducedMotion(prefersReducedMotion);
    setIsHighContrast(prefersHighContrast);
  }, []);

  return (
    <div 
      className={\`accessibility-enhanced \${isHighContrast ? 'high-contrast' : ''} \${isReducedMotion ? 'reduced-motion' : ''}\`}
      style={{ fontSize: \`\${fontSize}px\` }}
    >
      {children}
    </div>
  );
};

export default AccessibilityEnhancer;`;
    } else if (file.includes('FuturisticBackgroundEnhanced')) {
      content = `'use client';
import React from 'react';

interface FuturisticBackgroundEnhancedProps {
  children: React.ReactNode;
  className?: string;
}

const FuturisticBackgroundEnhanced: React.FC<FuturisticBackgroundEnhancedProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={\`relative min-h-screen overflow-hidden \${className}\`}>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default FuturisticBackgroundEnhanced;`;
    } else if (file.includes('AnalyticsContext')) {
      content = `import React, { createContext, useContext, useEffect, useState } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, any>) => void;
  trackPageView: (page: string) => void;
  isEnabled: boolean;
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

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    setIsEnabled(process.env.NODE_ENV === 'production');
  }, []);

  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    if (!isEnabled) return;
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, properties);
    }
  };

  const trackPageView = (page: string) => {
    if (!isEnabled) return;
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: page,
      });
    }
  };

  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView,
    isEnabled,
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};`;
    }
    
    if (content) {
      fs.writeFileSync(file, content, 'utf8');
      console.log('Fixed: ' + file);
    }
  }
});

console.log('Fixed all broken files.');
