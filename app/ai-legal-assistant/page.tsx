'use client';

import React from 'react';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function AILegalAssistantPage() {
  return (
    <>
      <SEOHead 
        title="AI Legal Assistant - Zion Tech Group"
        description="Advanced AI-powered legal assistant for contract analysis, legal research, compliance monitoring, and document generation. Streamline your legal practice with AI."
        keywords="AI legal assistant, legal research, contract analysis, compliance, legal AI, document generation, law technology"
        canonicalUrl="https://ziontechgroup.com/ai-legal-assistant"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-orange-600/20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Legal Assistant
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Advanced AI-powered legal assistant for contract analysis, legal research, compliance monitoring, and document generation. Streamline your legal practice with AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Get Started
                </button>
                <button className="border border-amber-600 text-amber-400 hover:bg-amber-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Key Features
              </h2>
              <p className="text-xl text-gray-300">
                Discover the powerful capabilities of our ai legal assistant solution
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Feature {item}
                  </h3>
                  <p className="text-gray-300">
                    Advanced ai legal assistant capabilities that enhance your workflow and productivity.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of users who are already using our ai legal assistant solution.
            </p>
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200">
              Start Your Free Trial
            </button>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
}