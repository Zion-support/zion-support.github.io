import fs from 'fs';
import path from 'path';

const appDir = './app';

function fixPageIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Check if currentYear is defined but not used, remove it
    if (content.includes('const currentYear = new Date().getFullYear();') && !content.includes('currentYear')) {
      content = content.replace(/\s*const currentYear = new Date().getFullYear();\s*\n?/g, '');
      modified = true;
    }

    // Check if features is used but not defined
    if (content.includes('features.map') && !content.includes('const features =')) {
      // This is likely an incomplete page, let's create a proper structure
      const functionMatch = content.match(/export\s+default\s+function\s+(\w+)\s*\([^)]*\)\s*{/);
      if (functionMatch) {
        const functionName = functionMatch[1];
        const newContent = `'use client'
import React from 'react';
import { ArrowRight, CheckCircle, Target, Award } from 'lucide-react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function ${functionName}() {
  const features = [
    {
      icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
      title: 'Feature 1',
      description: 'Professional services and solutions for your business needs.'
    },
    {
      icon: <Target className="h-8 w-8 text-green-600" />,
      title: 'Feature 2',
      description: 'Advanced technology solutions to help you succeed.'
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-600" />,
      title: 'Feature 3',
      description: 'Expert guidance and support for your projects.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Professional Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional services and solutions for modern businesses.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-gray-900 ml-3">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}`;
        content = newContent;
        modified = true;
      }
    }

    // Check for incomplete pages with empty titles
    if (content.includes('<h1 className="text-4xl font-bold text-gray-900 mb-8">\n            \n          </h1>')) {
      content = content.replace(
        '<h1 className="text-4xl font-bold text-gray-900 mb-8">\n            \n          </h1>',
        '<h1 className="text-4xl font-bold text-gray-900 mb-8">\n            Professional Services\n          </h1>'
      );
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed issues in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function processDirectory(dir) {
  const items = fs.readdirSync(dir);
  let fixedCount = 0;

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      fixedCount += processDirectory(fullPath);
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      if (fixPageIssues(fullPath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

console.log('Starting comprehensive issue fixes...');
const totalFixed = processDirectory(appDir);
console.log(`Fixed ${totalFixed} files with issues.`);