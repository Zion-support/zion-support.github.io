const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix specific file patterns
function fixSpecificFile(filePath, content) {
  let fixed = content;
  
  // Fix about page
  if (filePath.includes('about/page.tsx')) {
    fixed = `import React from "react";
import { Helmet } from "react-helmet-async";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>About - Zion Tech Group</title>
        <meta name="description" content="Professional about services by Zion Tech Group." />
        <meta name="keywords" content="about, AI solutions, IT services" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional about services designed to help your business grow and succeed.
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

export default AboutPage;`;
  }
  
  // Fix ad-management page
  if (filePath.includes('ad-management/page.tsx')) {
    fixed = `'use client';
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>Ad Management - Zion Tech Group</title>
        <meta name="description" content="Ad Management - Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">Ad Management</h1>
            <p className="text-gray-300 text-lg">
              This page is under construction. Please check back later.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}`;
  }
  
  // Fix ai-automation-platform page
  if (filePath.includes('ai-automation-platform/page.tsx')) {
    fixed = `'use client';
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>AI Automation Platform - Zion Tech Group</title>
        <meta name="description" content="AI Automation Platform services and solutions from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">AI Automation Platform</h1>
          <p className="text-xl text-gray-600">
            This page is under development. Please check back soon for more information about our AI automation platform services.
          </p>
        </div>
      </div>
    </>
  );
}`;
  }
  
  // Fix ai-automation-suite page
  if (filePath.includes('ai-automation-suite/page.tsx')) {
    fixed = `'use client';
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>AI Automation Suite - Zion Tech Group</title>
        <meta name="description" content="AI Automation Suite services and solutions from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">AI Automation Suite</h1>
          <p className="text-xl text-gray-600">
            This page is under development. Please check back soon for more information about our AI automation suite services.
          </p>
        </div>
      </div>
    </>
  );
}`;
  }
  
  // Fix ai-automation page
  if (filePath.includes('ai-automation/page.tsx')) {
    fixed = `'use client';
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>AI Automation - Zion Tech Group</title>
        <meta name="description" content="AI Automation services and solutions from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">AI Automation</h1>
          <p className="text-xl text-gray-600">
            This page is under development. Please check back soon for more information about our AI automation services.
          </p>
        </div>
      </div>
    </>
  );
}`;
  }
  
  // Fix ai-chatbot-builder page
  if (filePath.includes('ai-chatbot-builder/page.tsx')) {
    fixed = `'use client';
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>AI Chatbot Builder - Zion Tech Group</title>
        <meta name="description" content="AI Chatbot Builder services and solutions from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">AI Chatbot Builder</h1>
          <p className="text-xl text-gray-600">
            This page is under development. Please check back soon for more information about our AI chatbot builder services.
          </p>
        </div>
      </div>
    </>
  );
}`;
  }
  
  // Fix ai-content-creation page
  if (filePath.includes('ai-content-creation/page.tsx')) {
    fixed = `'use client';
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>AI Content Creation - Zion Tech Group</title>
        <meta name="description" content="AI Content Creation services and solutions from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">AI Content Creation</h1>
          <p className="text-xl text-gray-600">
            This page is under development. Please check back soon for more information about our AI content creation services.
          </p>
        </div>
      </div>
    </>
  );
}`;
  }
  
  // Fix ai-content-generation page
  if (filePath.includes('ai-content-generation/page.tsx')) {
    fixed = `'use client';
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>AI Content Generation - Zion Tech Group</title>
        <meta name="description" content="AI Content Generation services and solutions from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">AI Content Generation</h1>
          <p className="text-xl text-gray-600">
            This page is under development. Please check back soon for more information about our AI content generation services.
          </p>
        </div>
      </div>
    </>
  );
}`;
  }
  
  // Fix ai-content-writer page
  if (filePath.includes('ai-content-writer/page.tsx')) {
    fixed = `'use client';
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>AI Content Writer - Zion Tech Group</title>
        <meta name="description" content="AI Content Writer services and solutions from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">AI Content Writer</h1>
          <p className="text-xl text-gray-600">
            This page is under development. Please check back soon for more information about our AI content writer services.
          </p>
        </div>
      </div>
    </>
  );
}`;
  }
  
  // Fix ai-customer-sentiment-tracker page
  if (filePath.includes('ai-customer-sentiment-tracker/page.tsx')) {
    fixed = `'use client';
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>AI Customer Sentiment Tracker - Zion Tech Group</title>
        <meta name="description" content="AI Customer Sentiment Tracker services and solutions from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">AI Customer Sentiment Tracker</h1>
          <p className="text-xl text-gray-600">
            This page is under development. Please check back soon for more information about our AI customer sentiment tracker services.
          </p>
        </div>
      </div>
    </>
  );
}`;
  }
  
  // Fix ai-customer-support-chatbot page
  if (filePath.includes('ai-customer-support-chatbot/page.tsx')) {
    fixed = `'use client';
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>AI Customer Support Chatbot - Zion Tech Group</title>
        <meta name="description" content="AI Customer Support Chatbot services and solutions from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">AI Customer Support Chatbot</h1>
          <p className="text-xl text-gray-600">
            This page is under development. Please check back soon for more information about our AI customer support chatbot services.
          </p>
        </div>
      </div>
    </>
  );
}`;
  }
  
  // Fix ai-customer-support page
  if (filePath.includes('ai-customer-support/page.tsx')) {
    fixed = `'use client';
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>AI Customer Support - Zion Tech Group</title>
        <meta name="description" content="AI Customer Support services and solutions from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">AI Customer Support</h1>
          <p className="text-xl text-gray-600">
            This page is under development. Please check back soon for more information about our AI customer support services.
          </p>
        </div>
      </div>
    </>
  );
}`;
  }
  
  // Fix ai-cybersecurity page
  if (filePath.includes('ai-cybersecurity/page.tsx')) {
    fixed = `'use client';
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>AI Cybersecurity - Zion Tech Group</title>
        <meta name="description" content="AI Cybersecurity services and solutions from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">AI Cybersecurity</h1>
          <p className="text-xl text-gray-600">
            This page is under development. Please check back soon for more information about our AI cybersecurity services.
          </p>
        </div>
      </div>
    </>
  );
}`;
  }
  
  // Fix ai-data-analytics-pro page
  if (filePath.includes('ai-data-analytics-pro/page.tsx')) {
    fixed = `'use client';
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>AI Data Analytics Pro - Zion Tech Group</title>
        <meta name="description" content="AI Data Analytics Pro services and solutions from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">AI Data Analytics Pro</h1>
          <p className="text-xl text-gray-600">
            This page is under development. Please check back soon for more information about our AI data analytics pro services.
          </p>
        </div>
      </div>
    </>
  );
}`;
  }
  
  // Fix ai-data-mining-pro page
  if (filePath.includes('ai-data-mining-pro/page.tsx')) {
    fixed = `'use client';
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>AI Data Mining Pro - Zion Tech Group</title>
        <meta name="description" content="AI Data Mining Pro services and solutions from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">AI Data Mining Pro</h1>
          <p className="text-xl text-gray-600">
            This page is under development. Please check back soon for more information about our AI data mining pro services.
          </p>
        </div>
      </div>
    </>
  );
}`;
  }
  
  // Fix ai-data-analytics page
  if (filePath.includes('ai-data-analytics/page.tsx')) {
    fixed = `'use client';
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>AI Data Analytics - Zion Tech Group</title>
        <meta name="description" content="AI Data Analytics services and solutions from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">AI Data Analytics</h1>
          <p className="text-xl text-gray-600">
            This page is under development. Please check back soon for more information about our AI data analytics services.
          </p>
        </div>
      </div>
    </>
  );
}`;
  }
  
  return fixed;
}

// Main function to process all files
function processFiles() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts'
  ];
  
  let processedFiles = 0;
  let fixedFiles = 0;
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern, { cwd: process.cwd() });
    
    files.forEach(file => {
      try {
        const filePath = path.resolve(file);
        const originalContent = fs.readFileSync(filePath, 'utf8');
        const fixedContent = fixSpecificFile(filePath, originalContent);
        
        if (originalContent !== fixedContent) {
          fs.writeFileSync(filePath, fixedContent, 'utf8');
          console.log(`Fixed: ${file}`);
          fixedFiles++;
        }
        
        processedFiles++;
      } catch (error) {
        console.error(`Error processing ${file}:`, error.message);
      }
    });
  });
  
  console.log(`\nProcessed ${processedFiles} files, fixed ${fixedFiles} files`);
}

// Run the fix
processFiles();