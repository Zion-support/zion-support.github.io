import React from 'react';
<<<<<<< HEAD
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const System-statusPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">System-status</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            This page is under construction. Please check back soon for updates.
          </p>
          <a
            href="/contact"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
          >
            Contact Us
          </a>
        </section>
      </main>
      
      <Footer />
=======
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const SystemStatusPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <Link 
            to="/status" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Status Page
          </Link>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            System Status
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This page redirects to our main status page for better organization.
          </p>
          
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Status Information
            </h2>
            <p className="text-gray-600 mb-6">
              For real-time system status, incident reports, and service uptime information, 
              please visit our main status page.
            </p>
            <Link 
              to="/status"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
            >
              View Status Page
            </Link>
          </div>
        </div>
      </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-99bb
    </div>
  );
};

<<<<<<< HEAD
export default System-statusPage;
=======
export default SystemStatusPage;
>>>>>>> cursor/website-audit-and-update-with-deployment-99bb
