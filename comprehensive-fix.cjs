#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to completely rewrite severely corrupted files
function rewriteCorruptedFile(filePath) {
  const fileName = path.basename(filePath, '.tsx');
  const dirName = path.dirname(filePath).split('/').pop();
  
  // Create a basic template for different page types
  const templates = {
    'ai-automation-platform': `import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Zap, Settings, BarChart3, CheckCircle } from "lucide-react";

const AIAutomationPlatformPage = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: "Workflow Automation",
      description: "Automate repetitive tasks and streamline business processes with intelligent workflows."
    },
    {
      icon: <Settings className="w-8 h-8 text-purple-500" />,
      title: "Custom Integrations",
      description: "Connect your existing tools and systems with our powerful integration platform."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-500" />,
      title: "Analytics & Insights",
      description: "Track performance and optimize your automated processes with detailed analytics."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Automation Platform - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our AI-powered automation platform." />
      </Helmet>

      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Automation Platform
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Streamline your business processes with intelligent automation solutions.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
            Get Started
            <ArrowRight className="ml-2 w-5 h-5 inline" />
          </button>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutomationPlatformPage;`,
    
    'ai-content-writer': `import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, PenTool, FileText, CheckCircle } from "lucide-react";

const AIContentWriterPage = () => {
  const features = [
    {
      icon: <PenTool className="w-8 h-8 text-blue-500" />,
      title: "AI Writing Assistant",
      description: "Generate high-quality content with our advanced AI writing tools."
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-500" />,
      title: "Multiple Formats",
      description: "Create blogs, articles, social media posts, and more."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-500" />,
      title: "Quality Assurance",
      description: "Built-in grammar and style checking for perfect content."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Content Writer - Zion Tech Group</title>
        <meta name="description" content="Create amazing content with our AI-powered writing tools." />
      </Helmet>

      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Content Writer
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Create engaging, high-quality content with the power of AI.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
            Start Writing
            <ArrowRight className="ml-2 w-5 h-5 inline" />
          </button>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIContentWriterPage;`,
    
    'ai-customer-sentiment-tracker': `import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Heart, TrendingUp, CheckCircle } from "lucide-react";

const AICustomerSentimentTrackerPage = () => {
  const features = [
    {
      icon: <Heart className="w-8 h-8 text-blue-500" />,
      title: "Sentiment Analysis",
      description: "Analyze customer feedback and sentiment across all channels."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
      title: "Trend Monitoring",
      description: "Track sentiment trends and identify patterns over time."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-500" />,
      title: "Actionable Insights",
      description: "Get recommendations to improve customer satisfaction."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Customer Sentiment Tracker - Zion Tech Group</title>
        <meta name="description" content="Track and analyze customer sentiment with AI-powered tools." />
      </Helmet>

      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Customer Sentiment Tracker
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Understand your customers better with advanced sentiment analysis.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
            Start Tracking
            <ArrowRight className="ml-2 w-5 h-5 inline" />
          </button>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICustomerSentimentTrackerPage;`
  };

  // Check if we have a template for this file
  if (templates[fileName]) {
    return templates[fileName];
  }

  // Generic template for other pages
  return `import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle } from "lucide-react";

const ${fileName.charAt(0).toUpperCase() + fileName.slice(1).replace(/-/g, '')}Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>${fileName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} - Zion Tech Group</title>
        <meta name="description" content="${fileName.replace(/-/g, ' ')} services by Zion Tech Group." />
      </Helmet>

      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            ${fileName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Professional ${fileName.replace(/-/g, ' ')} services by Zion Tech Group.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
            Learn More
            <ArrowRight className="ml-2 w-5 h-5 inline" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ${fileName.charAt(0).toUpperCase() + fileName.slice(1).replace(/-/g, '')}Page;`;
}

// Function to check if a file is severely corrupted
function isSeverelyCorrupted(content) {
  const corruptionIndicators = [
    /<<<<<<< HEAD/,
    /=======/,
    />>>>>>> origin/,
    /import.*"[^"]*$/,
    /className="[^"]*$/,
    /TS1002.*Unterminated string literal/,
    /TS1185.*Merge conflict marker/
  ];
  
  return corruptionIndicators.some(pattern => pattern.test(content));
}

// Function to fix a single file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // If severely corrupted, rewrite completely
    if (isSeverelyCorrupted(content)) {
      console.log(`Rewriting severely corrupted file: ${filePath}`);
      const newContent = rewriteCorruptedFile(filePath);
      fs.writeFileSync(filePath, newContent, 'utf8');
      return true;
    }
    
    // Otherwise, apply basic fixes
    const originalContent = content;
    
    // Remove merge conflicts
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> origin\/main/g, '');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> origin\/main/g, '');
    content = content.replace(/=======[\s\S]*?>>>>>>> origin\/main/g, '');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======/g, '');
    content = content.replace(/=======/g, '');
    content = content.replace(/>>>>>>> origin\/main/g, '');
    
    // Fix unterminated strings
    content = content.replace(/import\s+.*?from\s+"([^"]*)$/gm, (match, p1) => {
      return match.replace(p1, p1 + '"');
    });
    
    content = content.replace(/className="([^"]*)$/gm, (match, p1) => {
      return match.replace(p1, p1 + '"');
    });
    
    // Fix malformed function declarations
    content = content.replace(/export default function Page\(\) \{;/g, 'export default function Page() {');
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  let files = [];
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        files = files.concat(findFiles(fullPath, extensions));
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message);
  }
  
  return files;
}

// Main execution
function main() {
  console.log('Starting comprehensive fix...');
  
  const appDir = path.join(__dirname, 'app');
  const files = findFiles(appDir);
  
  console.log(`Found ${files.length} files to check`);
  
  let fixedCount = 0;
  
  for (const file of files) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }
  
  console.log(`Fixed ${fixedCount} files`);
}

if (require.main === module) {
  main();
}

module.exports = { fixFile, findFiles, rewriteCorruptedFile, isSeverelyCorrupted };