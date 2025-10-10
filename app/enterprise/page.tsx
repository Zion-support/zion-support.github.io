'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const EnterprisePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Enterprise Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Comprehensive AI and IT solutions designed for large-scale enterprise needs.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Enterprise AI</h3>
              <p className="text-gray-600 mb-4">
                Advanced AI solutions tailored for enterprise-scale operations and decision making.
              </p>
              <div className="text-2xl font-bold text-green-600">Custom Pricing</div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cloud Infrastructure</h3>
              <p className="text-gray-600 mb-4">
                Scalable cloud solutions with enterprise-grade security and compliance.
              </p>
              <div className="text-2xl font-bold text-green-600">Custom Pricing</div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cybersecurity</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive security solutions to protect your enterprise assets and data.
              </p>
              <div className="text-2xl font-bold text-green-600">Custom Pricing</div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EnterprisePage;