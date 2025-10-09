import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 quantum-gradient">
            Cookie Policy
          </h1>
          
          <div className="cyber-card p-8">
            <h2 className="text-2xl font-bold text-white mb-4">How We Use Cookies</h2>
            <p className="text-gray-300 mb-6">
              We use cookies to enhance your experience on our website and to provide personalized content and services.
            </p>
            
            <h3 className="text-xl font-bold text-white mb-3">Types of Cookies We Use</h3>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li>• Essential cookies for website functionality</li>
              <li>• Analytics cookies to understand user behavior</li>
              <li>• Marketing cookies for personalized content</li>
            </ul>
            
            <p className="text-gray-300">
              By continuing to use our website, you consent to our use of cookies as described in this policy.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

