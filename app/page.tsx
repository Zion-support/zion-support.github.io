'use client';
import React from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Advanced AI and IT Solutions
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-2">AI Solutions</h2>
              <p className="text-gray-600">Cutting-edge artificial intelligence services</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-2">IT Services</h2>
              <p className="text-gray-600">Comprehensive IT infrastructure solutions</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-2">Cloud Solutions</h2>
              <p className="text-gray-600">Scalable cloud computing services</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}