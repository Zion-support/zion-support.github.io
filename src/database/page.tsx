import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const PagePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Page
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Coming Soon
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            This page is under development. Please check back soon for updates.
          </p>
      </main>
      <Footer />
    </div>
  );
};
export default PagePage;
const DatabasePage: React.FC = () => {return (}
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold text-white mb-4">Database</h1><p className="text-gray-300 mb-8">Coming Soon - Advanced database solutions</p><a href="/contact" className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors">
          Contact Us;
        </a></div></div>
  );
};
export default DatabasePage;
