'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Our Services</h1>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">AI Solutions</h2>
            <p className="text-gray-600">
              Advanced artificial intelligence solutions to automate and optimize your business processes.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">IT Services</h2>
            <p className="text-gray-600">
              Comprehensive IT infrastructure and support services for modern enterprises.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Cloud Solutions</h2>
            <p className="text-gray-600">
              Scalable cloud infrastructure and migration services for optimal performance.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}