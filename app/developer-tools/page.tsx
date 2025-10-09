import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const DeveloperToolsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="relative z-10">
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Developer Tools
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Powerful development tools and APIs for building with our platform
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors"
            >
              Get Started
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DeveloperToolsPage;