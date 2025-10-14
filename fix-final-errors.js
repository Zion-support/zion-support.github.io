
}

// Fix cn utility
function fixCnUtility() {
  const cnPath = 'app/utils/cn.ts';
  console.log(`Fixing: ${cnPath}`);
  
  const newContent = `import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`;

  fs.writeFileSync(cnPath, newContent, 'utf8');
  console.log(`✅ Fixed: ${cnPath}`);
}

}

export const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties);
  }
};

export const trackPageView = (pageTitle: string, pageLocation: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_title: pageTitle,
      page_location: pageLocation,
    });
  }
};`;

  fs.writeFileSync(analyticsPath, newContent, 'utf8');
  console.log(`✅ Fixed: ${analyticsPath}`);
}

}

// Fix ai-automation-platform page
function fixAiAutomationPlatformPage() {
  const pagePath = 'app/ai-automation-platform/page.tsx';
  console.log(`Fixing: ${pagePath}`);
  
  const newContent = `import React from "react";
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
const AiAutomationPlatformPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet></Helmet>
        <title>AI Automation Platform - Zion Tech Group</title>
        <meta name="description" content="Professional AI automation platform services by Zion Tech Group." />
        <meta name="keywords" content="AI automation, platform, AI solutions, IT services" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Automation Platform
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional AI automation platform services designed to help your business grow and succeed.
          </p>
        </div>
        
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Expert Solutions</h3>
            <p className="text-gray-300">
              Our team of experts provides cutting-edge solutions tailored to your specific needs.
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">24/7 Support</h3>
            <p className="text-gray-300">
              Round-the-clock support to ensure your systems run smoothly at all times.
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Proven Results</h3>
            <p className="text-gray-300">
              Track record of delivering successful projects and exceeding client expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiAutomationPlatformPage;`;

  fs.writeFileSync(pagePath, newContent, 'utf8');
  console.log(`✅ Fixed: ${pagePath}`);
}

// Fix FuturisticText component
function fixFuturisticTextComponent() {
  const componentPath = 'app/components/FuturisticText.tsx';
  console.log(`Fixing: ${componentPath}`);
  
  const newContent = `import React from "react";
import { cn } from '../utils/cn';
interface FuturisticTextProps {
  children: React.ReactNode;
  className?: string;
}

const FuturisticText: React.FC<FuturisticTextProps></FuturisticTextProps> = ({ children, className }) => {return (
    <span className={cn("text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400", className)}>
      {children}
    </span>
  );
};

export default FuturisticText;`;

  fs.writeFileSync(componentPath, newContent, 'utf8');
  console.log(`✅ Fixed: ${componentPath}`);
}

