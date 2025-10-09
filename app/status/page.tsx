import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const StatusPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="relative z-10">
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              System Status
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Real-time status of our services and systems
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default StatusPage;