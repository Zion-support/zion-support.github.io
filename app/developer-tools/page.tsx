'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const DeveloperToolsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">Developer Tools</h1>
          
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-semibold text-white mb-4">Our Developer Tools</h2>
            <p className="text-gray-300 mb-6">
              We provide a comprehensive suite of developer tools to help you build, test, and deploy applications efficiently.
            </p>

            <h2 className="text-2xl font-semibold text-white mb-4">Features</h2>
            <ul className="text-gray-300 mb-6 list-disc list-inside">
              <li>Code analysis and optimization</li>
              <li>Automated testing frameworks</li>
              <li>Performance monitoring</li>
              <li>Security scanning</li>
              <li>API documentation generation</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
            <p className="text-gray-300 mb-6">
              For more information about our developer tools, please contact us at kleber@ziontechgroup.com
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DeveloperToolsPage;