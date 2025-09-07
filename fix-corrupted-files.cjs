#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class CorruptedFileFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.errors = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = {
      'INFO': 'ℹ️',
      'SUCCESS': '✅',
      'ERROR': '❌',
      'WARNING': '⚠️',
      'PROGRESS': '🔄'
    }[type] || 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  fixAboutPage() {
    const filePath = path.join(this.projectRoot, 'app/about/page.tsx');
    const cleanContent = `import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Zion Tech Group',
  description: 'Learn about Zion Tech Group\'s mission to deliver enterprise-grade AI, micro SaaS, and IT solutions that drive real business results.',
  keywords: 'about, company, mission, AI solutions, micro SaaS, IT services, enterprise technology'
};

export default function AboutPage() {
  return (
    <div className="animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          About Zion Tech Group
        </h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Zion Tech Group is a leading provider of enterprise-grade AI solutions, 
            micro SaaS development, and comprehensive IT services. We specialize in 
            delivering cutting-edge technology solutions that drive real business results.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To empower businesses with innovative AI and technology solutions 
                that transform operations and drive sustainable growth.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To be the global leader in AI-powered business solutions, 
                making advanced technology accessible to enterprises of all sizes.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Zion Tech Group?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRightIcon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600">Cutting-edge AI and technology solutions</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRightIcon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Expertise</h3>
                <p className="text-gray-600">500+ specialized services and solutions</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRightIcon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Results</h3>
                <p className="text-gray-600">Proven track record of success</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
            >
              Get in Touch
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}`;

    try {
      fs.writeFileSync(filePath, cleanContent);
      this.fixedFiles.push('app/about/page.tsx');
      this.log('Fixed app/about/page.tsx', 'SUCCESS');
    } catch (error) {
      this.errors.push(`Failed to fix app/about/page.tsx: ${error.message}`);
    }
  }

  fixApiDocsHub() {
    const filePath = path.join(this.projectRoot, 'src/pages/ApiDocsHub.tsx');
import {
  ArrowRight,
  BookOpen,
  Code,
  Webhook,
  AlertCircle,
  Zap
} from 'lucide-react';
import ApiDocsLayout from '@/components/developers/ApiDocsLayout';

export function ApiDocsHub() {
  const sections = [
    {
      title: 'Getting Started',
      description: 'Learn how to authenticate and make your first API request',
      icon: BookOpen,
      path: '/developers/docs/getting-started',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'API Reference',
      description: 'Detailed documentation for all available endpoints',
      icon: Code,
      path: '/developers/docs/reference',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Webhooks',
      description: 'Subscribe to events and receive real-time updates',
      icon: Webhook,
      path: '/developers/docs/webhooks',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Sample Code',
      description: 'Examples in JavaScript, Python, and Node.js',
      icon: Zap,
      path: '/docs/sample-code',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Error Codes & Rate Limits',
      description: 'Understanding API errors and rate limiting',
      icon: AlertCircle,
      path: '/developers/docs/errors',
      color: 'from-red-500 to-rose-500'
    }
  ];

  return (
    <ApiDocsLayout>
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-6">Zion AI Marketplace API</h1>
        <p className="text-zinc-400 text-lg mb-12">
          Welcome to the Zion AI Marketplace API documentation. Here you'll find comprehensive guides and documentation to help you start working with our API as quickly as possible.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {sections.map(section => (
            <Link
              key={section.path}
              href={section.path}
              className="block p-6 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all"
            >
              <div
                className={\`w-12 h-12 rounded-full bg-gradient-to-r \${section.color} flex items-center justify-center mb-4\`}
              >
                <section.icon className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-white mb-2">{section.title}</h2>
              <p className="text-zinc-400 mb-4">{section.description}</p>
              <div className="flex items-center text-zion-cyan">
                <span className="mr-2">View documentation</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 p-6 rounded-lg bg-zinc-900 border border-zinc-800">
          <h2 className="text-xl font-semibold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-zinc-400 mb-6">
            To use the Zion AI Marketplace API, you'll need an API key. Visit
            your developer portal to create one.
          </p>
          <Link
            href="/developers/portal"
            className="inline-flex items-center px-4 py-2 rounded-md bg-zion-purple text-white hover:bg-zion-purple/90 transition-colors"
          >
            Go to Developer Portal
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </ApiDocsLayout>
  );
}

export default ApiDocsHub;`;

    try {
      fs.writeFileSync(filePath, cleanContent);
      this.fixedFiles.push('src/pages/ApiDocsHub.tsx');
      this.log('Fixed src/pages/ApiDocsHub.tsx', 'SUCCESS');
    } catch (error) {
      this.errors.push(`Failed to fix src/pages/ApiDocsHub.tsx: ${error.message}`);
    }
  }

  fixServicePages() {
    const servicePages = [
      'app/services/ai-project-manager/page.tsx',
      'app/services/automation/page.tsx',
      'app/services/consulting/page.tsx'
    ];

    for (const pagePath of servicePages) {
      const fullPath = path.join(this.projectRoot, pagePath);
      if (fs.existsSync(fullPath)) {
        try {
          let content = fs.readFileSync(fullPath, 'utf8');
          
          // Fix common syntax errors
          content = content.replace(/,\s*</g, '<');
          content = content.replace(/}\s*$/g, '}\n}');
          content = content.replace(/,\s*$/g, '');
          
          // Ensure proper closing
          if (!content.trim().endsWith('}')) {
            content += '\n}';
          }
          
          fs.writeFileSync(fullPath, content);
          this.fixedFiles.push(pagePath);
          this.log(`Fixed ${pagePath}`, 'SUCCESS');
        } catch (error) {
          this.errors.push(`Failed to fix ${pagePath}: ${error.message}`);
        }
      }
    }
  }

  removeCorruptedFiles() {
    const corruptedFiles = [
      'eslint.config.disabled.js',
      'next.config.simple.js',
      'next.config.complex.js',
      'next.config.resolved.js',
      '.eslintrc.js',
      '.eslintrc.test.js',
      '.eslintrc.test.test.js'
    ];

    for (const file of corruptedFiles) {
      const filePath = path.join(this.projectRoot, file);
      if (fs.existsSync(filePath)) {
        try {
          fs.unlinkSync(filePath);
          this.fixedFiles.push(`Removed ${file}`);
          this.log(`Removed corrupted file: ${file}`, 'SUCCESS');
        } catch (error) {
          this.errors.push(`Failed to remove ${file}: ${error.message}`);
        }
      }
    }
  }

  async run() {
    this.log('🔧 Starting corrupted file fix...', 'PROGRESS');

    try {
      this.fixAboutPage();
      this.fixApiDocsHub();
      this.fixServicePages();
      this.removeCorruptedFiles();

      this.log('🎉 Corrupted file fix completed!', 'SUCCESS');
      this.log(`✅ Fixed files: ${this.fixedFiles.length}`, 'SUCCESS');
      
      if (this.errors.length > 0) {
        this.log(`⚠️ Errors encountered: ${this.errors.length}`, 'WARNING');
        this.errors.forEach(error => this.log(`   ${error}`, 'ERROR'));
      }

      return {
        fixedFiles: this.fixedFiles,
        errors: this.errors,
        success: this.errors.length === 0
      };
    } catch (error) {
      this.log(`❌ Fix failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run if called directly
if (require.main === module) {
  const fixer = new CorruptedFileFixer();
  fixer.run().catch(console.error);
}

module.exports = CorruptedFileFixer;