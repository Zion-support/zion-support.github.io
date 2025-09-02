import React from 'react';
import Head from 'next/head';
import { SEO } from '../components/SEO';

export default function Home() {
  return (
    <>
      <SEO 
        title="Zion Tech Group - Leading Technology Solutions Provider"
        description="Transform your business with cutting-edge AI, cloud, and technology solutions. Expert development, consulting, and digital transformation services."
        keywords="technology solutions, AI development, cloud services, digital transformation, software development, IT consulting"
      />
      
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Welcome to Zion Tech Group
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Leading provider of revolutionary technology solutions, AI services, and cutting-edge innovations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">AI Services</h3>
                <p className="text-blue-700">Cutting-edge artificial intelligence solutions for modern businesses.</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-2">Cloud Solutions</h3>
                <p className="text-green-700">Scalable cloud infrastructure and migration services.</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-900 mb-2">Digital Transformation</h3>
                <p className="text-purple-700">Complete digital transformation strategies and implementation.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}