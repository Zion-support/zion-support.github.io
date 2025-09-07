import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import ServicesGrid from './components/ServicesGrid';
import HeroSection from './components/HeroSection';

export const metadata: Metadata = {
  title: 'Zion Tech Group - Leading AI and Technology Solutions',
  description: 'Leading the future of AI, autonomous systems, and innovative technology solutions. We empower businesses with cutting-edge technology to drive growth and transformation.',
  keywords: ['AI', 'artificial intelligence', 'blockchain', 'technology', 'innovation', 'automation'],
  openGraph: {
    title: 'Zion Tech Group - Leading AI and Technology Solutions',
    description: 'Leading the future of AI, autonomous systems, and innovative technology solutions.',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <HeroSection />

        {/* Services Grid */}
        <ServicesGrid />

        {/* Research Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Research & Innovation</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Stay ahead with our cutting-edge research in AI, quantum computing, and emerging technologies.
          </p>
          <Link 
            href="/research" 
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
          >
            Explore Research
          </Link>
        </div>
      </div>
    </main>
  );
}