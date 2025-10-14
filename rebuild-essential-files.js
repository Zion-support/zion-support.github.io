#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Essential pages to recreate
const essentialPages = [
  'app/page.tsx',
  'app/about/page.tsx',
  'app/services/page.tsx',
  'app/contact/page.tsx',
  'app/pricing/page.tsx',
  'app/careers/page.tsx',
  'app/blog/page.tsx',
  'app/solutions/page.tsx',
  'app/ai-services/page.tsx',
  'app/it-services/page.tsx',
  'app/cloud-services/page.tsx',
  'app/cybersecurity/page.tsx',
  'app/micro-saas/page.tsx',
  'app/5g-solutions/page.tsx',
  'app/blockchain/page.tsx',
  'app/quantum-computing/page.tsx',
  'app/iot-edge/page.tsx',
  'app/autonomous-systems/page.tsx',
  'app/digital-transformation/page.tsx',
  'app/case-studies/page.tsx',
  'app/api-docs/page.tsx',
  'app/tutorials/page.tsx',
  'app/support/page.tsx',
  'app/privacy/page.tsx',
  'app/terms/page.tsx',
  'app/cookies/page.tsx',
  'app/gdpr/page.tsx',
  'app/team/page.tsx',
  'app/partners/page.tsx',
  'app/news/page.tsx',
  'app/demo/page.tsx',
  'app/not-found.tsx',
  'app/404.tsx',
  'app/error.tsx',
  'app/loading.tsx',
  'app/global-error.tsx'
];

// Template for a basic page
const pageTemplate = (title, description, content = '') => `import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${description}" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">${title}</h1>
            <p className="text-gray-300 text-lg mb-8">
              ${description}
            </p>
            ${content}
          </div>
        </div>
      </div>
    </>
  );
}`;

// Home page template
const homePageTemplate = `import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle, Star, Globe, Mail, Phone } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI solutions, IT services, and digital transformation for businesses worldwide." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-6xl font-bold text-white mb-6">
              Welcome to Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Leading provider of AI solutions, IT services, and digital transformation 
              for businesses worldwide.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg inline-flex items-center">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 text-center">
                <Globe className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">AI Solutions</h3>
                <p className="text-gray-300">
                  Cutting-edge artificial intelligence solutions to transform your business.
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 text-center">
                <CheckCircle className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">IT Services</h3>
                <p className="text-gray-300">
                  Comprehensive IT services to keep your business running smoothly.
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 text-center">
                <Star className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Digital Transformation</h3>
                <p className="text-gray-300">
                  Transform your business with our digital solutions and strategies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to learn how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg inline-flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                Contact Us
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-3 px-8 rounded-lg inline-flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}`;

// Error page template
const errorPageTemplate = (title, description) => `import React from "react";
import { Helmet } from "react-helmet-async";
import { Home, ArrowLeft } from "lucide-react";

export default function ErrorPage() {
  return (
    <>
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${description}" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-6">${title}</h1>
          <p className="text-xl text-gray-300 mb-8">
            ${description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg inline-flex items-center">
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-3 px-8 rounded-lg inline-flex items-center">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
}`;

// Function to create directory if it doesn't exist
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Function to create a page
function createPage(filePath, content) {
  const dir = path.dirname(filePath);
  ensureDir(dir);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Created: ${filePath}`);
}

// Main execution
async function main() {
  console.log('Rebuilding essential files...');
  
  // Create home page
  createPage('app/page.tsx', homePageTemplate);
  
  // Create about page (already exists, skip)
  // createPage('app/about/page.tsx', pageTemplate('About Us', 'Learn about Zion Tech Group\'s mission, values, and commitment to delivering cutting-edge AI and IT solutions.'));
  
  // Create other essential pages
  createPage('app/services/page.tsx', pageTemplate('Services', 'Comprehensive AI and IT services to transform your business.'));
  createPage('app/contact/page.tsx', pageTemplate('Contact Us', 'Get in touch with our team to discuss your project needs.'));
  createPage('app/pricing/page.tsx', pageTemplate('Pricing', 'Transparent pricing for all our AI and IT services.'));
  createPage('app/careers/page.tsx', pageTemplate('Careers', 'Join our team and help shape the future of technology.'));
  createPage('app/blog/page.tsx', pageTemplate('Blog', 'Latest insights and updates from our team.'));
  createPage('app/solutions/page.tsx', pageTemplate('Solutions', 'Tailored solutions for your business challenges.'));
  createPage('app/ai-services/page.tsx', pageTemplate('AI Services', 'Advanced artificial intelligence solutions for your business.'));
  createPage('app/it-services/page.tsx', pageTemplate('IT Services', 'Comprehensive IT services to keep your business running.'));
  createPage('app/cloud-services/page.tsx', pageTemplate('Cloud Services', 'Scalable cloud solutions for modern businesses.'));
  createPage('app/cybersecurity/page.tsx', pageTemplate('Cybersecurity', 'Protect your business with our advanced security solutions.'));
  createPage('app/micro-saas/page.tsx', pageTemplate('Micro SaaS', 'Custom micro SaaS solutions for niche markets.'));
  createPage('app/5g-solutions/page.tsx', pageTemplate('5G Solutions', 'Next-generation 5G solutions for faster connectivity.'));
  createPage('app/blockchain/page.tsx', pageTemplate('Blockchain', 'Blockchain solutions for secure and transparent transactions.'));
  createPage('app/quantum-computing/page.tsx', pageTemplate('Quantum Computing', 'Cutting-edge quantum computing solutions.'));
  createPage('app/iot-edge/page.tsx', pageTemplate('IoT & Edge Computing', 'Internet of Things and edge computing solutions.'));
  createPage('app/autonomous-systems/page.tsx', pageTemplate('Autonomous Systems', 'AI-powered autonomous systems for various industries.'));
  createPage('app/digital-transformation/page.tsx', pageTemplate('Digital Transformation', 'Transform your business with digital solutions.'));
  createPage('app/case-studies/page.tsx', pageTemplate('Case Studies', 'Success stories from our clients.'));
  createPage('app/api-docs/page.tsx', pageTemplate('API Documentation', 'Comprehensive API documentation for developers.'));
  createPage('app/tutorials/page.tsx', pageTemplate('Tutorials', 'Step-by-step tutorials and guides.'));
  createPage('app/support/page.tsx', pageTemplate('Support', 'Get help and support for our services.'));
  createPage('app/privacy/page.tsx', pageTemplate('Privacy Policy', 'Our privacy policy and data protection practices.'));
  createPage('app/terms/page.tsx', pageTemplate('Terms of Service', 'Terms and conditions for using our services.'));
  createPage('app/cookies/page.tsx', pageTemplate('Cookie Policy', 'Information about our use of cookies.'));
  createPage('app/gdpr/page.tsx', pageTemplate('GDPR Compliance', 'Our commitment to GDPR compliance.'));
  createPage('app/team/page.tsx', pageTemplate('Our Team', 'Meet the talented people behind Zion Tech Group.'));
  createPage('app/partners/page.tsx', pageTemplate('Partners', 'Our trusted partners and collaborators.'));
  createPage('app/news/page.tsx', pageTemplate('News', 'Latest news and updates from Zion Tech Group.'));
  createPage('app/demo/page.tsx', pageTemplate('Demo', 'See our solutions in action with live demos.'));
  
  // Create error pages
  createPage('app/not-found.tsx', errorPageTemplate('404', 'The page you are looking for could not be found.'));
  createPage('app/404.tsx', errorPageTemplate('404', 'The page you are looking for could not be found.'));
  createPage('app/error.tsx', errorPageTemplate('Error', 'Something went wrong. Please try again later.'));
  createPage('app/loading.tsx', pageTemplate('Loading', 'Please wait while we load the page...'));
  createPage('app/global-error.tsx', errorPageTemplate('Global Error', 'A global error occurred. Please refresh the page.'));
  
  console.log('Essential files rebuilt successfully!');
}

main().catch(console.error);