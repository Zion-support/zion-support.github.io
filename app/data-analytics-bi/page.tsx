'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function DataAnalyticsBIPage() {
  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">
              Data Analytics & BI
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Transform your data into actionable insights.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

