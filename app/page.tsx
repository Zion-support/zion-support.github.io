'use client';
import React from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            Advanced AI and IT Solutions
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors"
            >
              📞 Call: (302) 464-0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              📧 Email Us
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
