import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 quantum-gradient">
            Latest News
          </h1>
          
          <div className="cyber-card p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-6">
              Get the latest news and updates about our services and the tech industry.
            </p>
            
            <div className="space-y-6">
              <div className="quantum-card p-6">
                <h3 className="text-xl font-bold text-white mb-2">New AI Services Launch</h3>
                <p className="text-gray-300 mb-2">We've launched new AI-powered solutions for enterprise clients.</p>
                <span className="text-cyan-400 text-sm">December 2024</span>
              </div>
              
              <div className="quantum-card p-6">
                <h3 className="text-xl font-bold text-white mb-2">Security Update</h3>
                <p className="text-gray-300 mb-2">Enhanced security measures implemented across all our services.</p>
                <span className="text-cyan-400 text-sm">November 2024</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}