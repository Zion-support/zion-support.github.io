import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zion Tech Group - Enterprise AI & IT Solutions | Micro SaaS Development',
  description: 'Leading provider of micro SaaS products, AI services, and IT solutions. 67+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions.',
  keywords: 'micro SaaS, AI services, IT solutions, cloud computing, automation, machine learning, DevOps, cybersecurity, blockchain, quantum computing, enterprise solutions',
  openGraph: {
    title: 'Zion Tech Group - Enterprise AI & IT Solutions',
    description: 'Leading provider of micro SaaS products, AI services, and IT solutions.',
    type: 'website',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Leading AI and Technology Solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/about" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Learn More
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-200">
            <h3 className="text-xl font-bold text-white mb-4">AI Solutions</h3>
            <p className="text-gray-300">
              Advanced AI solutions for business automation and intelligence.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-200">
            <h3 className="text-xl font-bold text-white mb-4">Web Development</h3>
            <p className="text-gray-300">
              Professional web development services for modern applications.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-200">
            <h3 className="text-xl font-bold text-white mb-4">Cloud Services</h3>
            <p className="text-gray-300">
              Scalable cloud services for business growth and efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}