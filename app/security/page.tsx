import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, CheckCircle, AlertTriangle, FileText, Lock, Eye, Database, Users } from 'lucide-react';

const SecurityPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Security Policy
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Learn about our security policies and how we protect your data and privacy.
          </p>
        </section>

        <div className="max-w-4xl mx-auto">
          <div className="cyber-card hologram-card p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Overview</h2>
            <p className="text-gray-300 mb-6">
              This page outlines our security policies and practices. We are committed to 
              transparency and protecting your rights.
            </p>
            
            <h3 className="text-xl font-semibold text-white mb-4">Key Points</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                We maintain the highest standards of data protection
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                Your privacy and security are our top priorities
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                We comply with all applicable regulations
              </li>
            </ul>
            
            <div className="mt-8 p-6 bg-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
              <p className="text-gray-300 mb-4">
                If you have any questions about our security policies, please contact us:
              </p>
              <div className="space-y-2 text-gray-300">
                <p>Email: legal@ziontechgroup.com</p>
                <p>Phone: +1 (302) 464-0950</p>
                <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SecurityPage;
