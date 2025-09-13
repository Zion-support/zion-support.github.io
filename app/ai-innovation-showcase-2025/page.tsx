import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRightIcon, SparklesIcon, CpuChipIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'AI Innovation Showcase 2025 - Revolutionary Breakthrough Technologies',
  description: 'Explore the most advanced AI innovations of 2025. Discover quantum AI, neural consciousness, and revolutionary automation solutions transforming industries worldwide.',
  keywords: ['AI Innovation 2025', 'Quantum AI', 'Neural Consciousness', 'AI Breakthrough', 'Automation Revolution'],
};

export default function AIIndustryInsights2025() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                AI Innovation Showcase 2025
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Discover the revolutionary AI technologies that are reshaping our world in 2025. 
              From quantum consciousness to neural interfaces, explore the future of artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/ai-innovation-showcase-2025/quantum-ai"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Quantum AI
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/ai-innovation-showcase-2025/neural-interfaces"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
              >
                Neural Interfaces
                <SparklesIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Innovation Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Revolutionary AI Categories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the cutting-edge AI innovations transforming every industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Quantum AI */}
          <div className="bg-gradient-to-br from-purple-800/50 to-blue-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-purple-600 rounded-lg">
                <CpuChipIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white ml-4">Quantum AI</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Revolutionary quantum computing algorithms achieving unprecedented processing speeds and solving complex problems in seconds.
            </p>
            <Link 
              href="/ai-innovation-showcase-2025/quantum-ai"
              className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold"
            >
              Learn More
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Neural Consciousness */}
          <div className="bg-gradient-to-br from-blue-800/50 to-indigo-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-600 rounded-lg">
                <SparklesIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white ml-4">Neural Consciousness</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Breakthrough AI systems with genuine consciousness, emotional intelligence, and creative capabilities beyond human imagination.
            </p>
            <Link 
              href="/ai-innovation-showcase-2025/neural-consciousness"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold"
            >
              Explore Now
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Autonomous Systems */}
          <div className="bg-gradient-to-br from-indigo-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-indigo-600 rounded-lg">
                <RocketLaunchIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white ml-4">Autonomous Systems</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Fully autonomous AI systems managing complex operations with 99.9% accuracy and self-improving capabilities.
            </p>
            <Link 
              href="/ai-innovation-showcase-2025/autonomous-systems"
              className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-semibold"
            >
              Discover More
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-purple-800/30 to-blue-800/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">10,000x</div>
              <div className="text-gray-300">Faster Processing</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">2500%</div>
              <div className="text-gray-300">ROI Increase</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-300">Autonomous Operation</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl p-12 border border-purple-500/20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of companies already experiencing the AI revolution. 
            Get started with our breakthrough AI solutions today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Now
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/ai-innovation-showcase-2025/case-studies"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}