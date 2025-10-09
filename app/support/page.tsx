import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SupportPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="relative z-10">
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Support
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Get help and support for our services
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SupportPage;