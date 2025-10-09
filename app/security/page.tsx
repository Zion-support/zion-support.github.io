import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 quantum-gradient">
            Security & Compliance
          </h1>
          
          <div className="cyber-card p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Enterprise Security</h2>
            <p className="text-gray-300 mb-6">
              We prioritize security and compliance in all our services and solutions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="quantum-card p-6">
                <h3 className="text-xl font-bold text-white mb-3">Data Protection</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• End-to-end encryption</li>
                  <li>• GDPR compliance</li>
                  <li>• SOC 2 Type II certified</li>
                  <li>• Regular security audits</li>
                </ul>
              </div>
              
              <div className="quantum-card p-6">
                <h3 className="text-xl font-bold text-white mb-3">Infrastructure Security</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Multi-factor authentication</li>
                  <li>• Network monitoring</li>
                  <li>• Intrusion detection</li>
                  <li>• Regular penetration testing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}