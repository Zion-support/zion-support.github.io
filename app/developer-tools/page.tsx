'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const DeveloperToolsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white mb-8">Developer Tools</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">
              Powerful development tools and resources to help you build with our AI and IT solutions.
            </p>
            <h2 className="text-2xl font-semibold text-white mb-4">SDKs & Libraries</h2>
            <p className="text-gray-300 mb-6">
              Download our official SDKs and libraries for popular programming languages.
            </p>
            <h2 className="text-2xl font-semibold text-white mb-4">Code Examples</h2>
            <p className="text-gray-300 mb-6">
              Get started quickly with our comprehensive code examples and tutorials.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DeveloperToolsPage;