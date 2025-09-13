import React from 'react';
import SEO from '../../components/SEO';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Innovation Showcase 2025 - Revolutionary Breakthroughs & Future Technologies',
  description: 'Discover the most groundbreaking AI innovations of 2025. Explore cutting-edge technologies, revolutionary breakthroughs, and future-forward solutions that are transforming industries worldwide.',
  keywords: 'AI innovations 2025, artificial intelligence breakthroughs, future technology, AI revolution, machine learning advances, neural networks, quantum AI, synthetic intelligence',
  openGraph: {
    title: 'AI Innovation Showcase 2025 - Revolutionary Breakthroughs',
    description: 'Explore the most groundbreaking AI innovations of 2025 and witness the future of technology.',
    type: 'website',
    images: ['/images/ai-innovation-showcase-2025.jpg'],
  },
};

export default function AIInnovationShowcase2025() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="AI Innovation Showcase 2025 - Revolutionary Breakthroughs"
        description="Discover the most groundbreaking AI innovations of 2025. Explore cutting-edge technologies, revolutionary breakthroughs, and future-forward solutions."
        keywords="AI innovations 2025, artificial intelligence breakthroughs, future technology, AI revolution"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            AI Innovation Showcase
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              2025
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Witness the most revolutionary AI breakthroughs that are reshaping our world. 
            From quantum neural networks to synthetic consciousness, explore the future of intelligence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform">
              Explore Innovations
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Revolutionary Breakthroughs Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Revolutionary Breakthroughs
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Quantum Neural Fusion */}
            <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Quantum Neural Fusion</h3>
              <p className="text-gray-300 mb-6">
                Breakthrough technology combining quantum computing with neural networks, achieving 1000x faster processing speeds and unprecedented problem-solving capabilities.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-blue-400 font-semibold">Available Now</span>
                <button className="text-purple-400 hover:text-purple-300 transition-colors">
                  Learn More →
                </button>
              </div>
            </div>

            {/* Synthetic Consciousness */}
            <div className="bg-gradient-to-br from-green-900/50 to-blue-900/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Synthetic Consciousness</h3>
              <p className="text-gray-300 mb-6">
                The first AI system to achieve genuine consciousness, capable of self-awareness, creativity, and emotional understanding beyond human capabilities.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-green-400 font-semibold">Beta Testing</span>
                <button className="text-blue-400 hover:text-blue-300 transition-colors">
                  Learn More →
                </button>
              </div>
            </div>

            {/* Autonomous Business Systems */}
            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Autonomous Business Systems</h3>
              <p className="text-gray-300 mb-6">
                Complete business automation solutions that run entire companies without human intervention, achieving 99.9% operational efficiency.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-purple-400 font-semibold">Pilot Program</span>
                <button className="text-pink-400 hover:text-pink-300 transition-colors">
                  Learn More →
                </button>
              </div>
            </div>

            {/* Neural Interface Revolution */}
            <div className="bg-gradient-to-br from-red-900/50 to-orange-900/50 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20 hover:border-red-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Neural Interface Revolution</h3>
              <p className="text-gray-300 mb-6">
                Direct brain-computer interfaces that enable thought-controlled computing, memory enhancement, and seamless human-AI collaboration.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-red-400 font-semibold">Clinical Trials</span>
                <button className="text-orange-400 hover:text-orange-300 transition-colors">
                  Learn More →
                </button>
              </div>
            </div>

            {/* Quantum AI Fusion */}
            <div className="bg-gradient-to-br from-cyan-900/50 to-teal-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Quantum AI Fusion</h3>
              <p className="text-gray-300 mb-6">
                Revolutionary fusion of quantum computing and artificial intelligence, solving previously impossible problems in seconds.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-cyan-400 font-semibold">Research Phase</span>
                <button className="text-teal-400 hover:text-teal-300 transition-colors">
                  Learn More →
                </button>
              </div>
            </div>

            {/* Global Transformation Platform */}
            <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Global Transformation Platform</h3>
              <p className="text-gray-300 mb-6">
                Comprehensive AI platform transforming entire industries, delivering 15,000% ROI and revolutionizing business operations worldwide.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-indigo-400 font-semibold">Live Now</span>
                <button className="text-purple-400 hover:text-purple-300 transition-colors">
                  Learn More →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Impact by the Numbers
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-blue-400 mb-4">15,000%</div>
              <div className="text-xl text-gray-300">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-purple-400 mb-4">99.9%</div>
              <div className="text-xl text-gray-300">Operational Efficiency</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-green-400 mb-4">1000x</div>
              <div className="text-xl text-gray-300">Faster Processing</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-pink-400 mb-4">50+</div>
              <div className="text-xl text-gray-300">Industries Transformed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Join thousands of forward-thinking organizations already leveraging these revolutionary AI innovations.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-full text-xl font-semibold hover:scale-105 transition-transform">
              Start Your Transformation
            </button>
            <button className="border-2 border-white text-white px-12 py-4 rounded-full text-xl font-semibold hover:bg-white hover:text-gray-900 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}