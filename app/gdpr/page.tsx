import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const GDPRPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            GDPR Compliance
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Information about our GDPR compliance and data protection practices
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GDPRPage;