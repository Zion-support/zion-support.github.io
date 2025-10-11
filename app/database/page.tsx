'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function DatabasePage() {
  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">
              Database Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive database solutions for your business.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

