'use client';
import React from 'react';

export default function EnterprisePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">Enterprise Solutions</h1>
        <section className="max-w-4xl mx-auto">
          <p className="text-xl text-gray-700 mb-8 text-center">
            Scale your business with our enterprise-grade AI solutions
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Scalability</h3>
              <p>Solutions that grow with your business</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Security</h3>
              <p>Enterprise-grade security and compliance</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Support</h3>
              <p>24/7 dedicated enterprise support</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}