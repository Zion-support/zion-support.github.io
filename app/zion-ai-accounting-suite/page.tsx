import React from 'react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

const ZionaiaccountingsuitePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Zion Ai Accounting Suite - Zion Tech Group"
        description="Professional Zion Ai Accounting Suite solution for modern businesses"
        keywords="Zion Ai Accounting Suite, micro SAAS, business automation, productivity tools"
      />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">Zion Ai Accounting Suite</h1>
          <p className="text-xl text-gray-300 mb-8">
            Professional Zion Ai Accounting Suite solution designed to streamline your business operations and boost productivity.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h2 className="text-2xl font-semibold text-white mb-4">Solution Overview</h2>
            <p className="text-gray-300 mb-6">
              Our Zion Ai Accounting Suite provides comprehensive business automation tools designed to enhance efficiency and reduce manual work.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Key Features</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Automated workflows</li>
                  <li>• Real-time analytics</li>
                  <li>• Easy integration</li>
                  <li>• 24/7 support</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Benefits</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Time savings</li>
                  <li>• Cost reduction</li>
                  <li>• Improved accuracy</li>
                  <li>• Better insights</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 flex space-x-4">
            <Link to="/contact" className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Get Started
            </Link>
            <Link to="/micro-saas" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              ← Back to Micro SAAS
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZionaiaccountingsuitePage;
