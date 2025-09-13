import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import NewContentShowcase2025 from '../../components/NewContentShowcase2025';
import InteractiveContentWidget from '../../components/InteractiveContentWidget';
import RevolutionaryFeatures2025 from '../../components/RevolutionaryFeatures2025';

export const metadata: Metadata = {
  title: 'New Content Showcase 2025 - Revolutionary AI & Technology Solutions',
  description: 'Discover groundbreaking AI innovations, quantum computing breakthroughs, and transformative business solutions. Explore our latest revolutionary content and technologies.',
  keywords: ['AI 2025', 'Quantum Computing', 'Neural Interfaces', 'Business Automation', 'Revolutionary Technology'],
};

export default function NewContentShowcasePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            🚀 New Content Showcase 2025
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Welcome to the future of technology! Explore our revolutionary new content featuring cutting-edge AI innovations, 
            quantum computing breakthroughs, and transformative business solutions that are reshaping industries worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-services-2025" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-full text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              🤖 Explore AI Services
            </Link>
            <Link 
              href="/quantum-computing-2025" 
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-full text-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
            >
              ⚛️ Quantum Computing
            </Link>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <NewContentShowcase2025 />
      <InteractiveContentWidget />
      <RevolutionaryFeatures2025 />

      {/* Call to Action */}
      <section className="py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
            <h2 className="text-4xl font-bold mb-6 text-white">
              🎉 Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of forward-thinking companies already using our revolutionary AI solutions to achieve unprecedented growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold rounded-full text-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                🚀 Start Your Transformation
              </Link>
              <Link 
                href="/demo-request" 
                className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-full text-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
              >
                📅 Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}