import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ApiDocs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="pt-20">
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            API Documentation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive API documentation for Zion Tech Group services
          </p>
          <div className="bg-gray-800 rounded-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300">
              Our API documentation is currently under development. 
              Please check back soon for detailed API references and examples.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ApiDocs;