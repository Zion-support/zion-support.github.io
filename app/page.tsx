import React from 'react';
import Link from 'next/link';
import NewContent2025IntelligenceBanner from './components/NewContent2025IntelligenceBanner';
import IntelligenceContentShowcase2025 from './components/IntelligenceContentShowcase2025';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* New Intelligence Content Banner */}
      <NewContent2025IntelligenceBanner />
      
      {/* Intelligence Content Showcase */}
      <IntelligenceContentShowcase2025 />
      
      {/* Rest of your existing homepage content */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to Zion Tech Group
        </h1>
        <p className="text-xl text-center text-gray-600 mb-8">
          AI & Technology Solutions for Modern Businesses
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">AI Solutions</h2>
            <p className="text-gray-600 mb-4">
              Transform your business with cutting-edge AI technologies and automation.
            </p>
            <Link href="/services" className="text-blue-600 hover:text-blue-800">
              Learn More →
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Cloud Infrastructure</h2>
            <p className="text-gray-600 mb-4">
              Scalable, secure, and reliable cloud solutions for your business needs.
            </p>
            <Link href="/services" className="text-blue-600 hover:text-blue-800">
              Learn More →
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Micro SaaS</h2>
            <p className="text-gray-600 mb-4">
              Custom micro SaaS solutions tailored to your specific requirements.
            </p>
            <Link href="/services" className="text-blue-600 hover:text-blue-800">
              Learn More →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
