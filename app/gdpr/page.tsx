import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const GdprPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Gdpr <span className="text-cyan-400">Page</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            This page is currently under development. Please check back soon.
          </p>
          <a
            href="/contact"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
          >
            Contact Us
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GdprPage;
