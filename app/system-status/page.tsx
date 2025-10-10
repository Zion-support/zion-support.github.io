import React from 'react';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SystemStatusPage: React.FC = () => {
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">System Status<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">This page is under construction. Please check back soon for updates.<a
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">System Status</h1><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">This page is under construction. Please check back soon for updates.</p><a
            href="/contact"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
          >Contact Us</a>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">System Status</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            This page is under construction. Please check back soon for updates.
          </p>
          <a;
            href="/contact"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
          >
            Contact Us;
          </a>
        </section>
      </main>)
      <Footer />
    </div>)
      </main>

      <Footer />
    </section>



const SystemStatusPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">System Status</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center mb-4">
            <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
            <span className="text-lg font-semibold text-gray-900">All Systems Operational</span>
          </div>
          <p className="text-gray-600">All services are running normally.</p>
        </div>
      </div>

    </div>
  );
};

export default SystemStatusPage;
