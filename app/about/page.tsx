'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 text-center">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 text-center mb-12">
            Leading the future of AI and IT solutions
          </p>
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed">
              Zion Tech Group is a leading technology company specializing in AI and IT solutions. 
              We help businesses transform their operations with cutting-edge technology and 
              deliver proven results with 24/7 expert support.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;