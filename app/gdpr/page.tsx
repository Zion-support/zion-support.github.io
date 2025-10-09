import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function GDPRPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 quantum-gradient">
            GDPR Compliance
          </h1>
          
          <div className="cyber-card p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Data Protection</h2>
            <p className="text-gray-300 mb-6">
              We are committed to protecting your privacy and ensuring GDPR compliance in all our services.
            </p>
            
            <h3 className="text-xl font-bold text-white mb-3">Your Rights</h3>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li>• Right to access your personal data</li>
              <li>• Right to rectification of inaccurate data</li>
              <li>• Right to erasure ("right to be forgotten")</li>
              <li>• Right to restrict processing</li>
              <li>• Right to data portability</li>
              <li>• Right to object to processing</li>
            </ul>
            
            <p className="text-gray-300">
              For any data protection inquiries, please contact us at kleber@ziontechgroup.com
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

