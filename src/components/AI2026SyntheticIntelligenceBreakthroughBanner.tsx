import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility
import { ArrowRightIcon, SparklesIcon, LightBulbIcon, HeartIcon, BrainIcon } from '@heroicons/react/24/outline';

const AI2026SyntheticIntelligenceBreakthroughBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-violet-900 via-purple-900 to-fuchsia-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width%3D%2260%22 height%3D%2260%22 viewBox%3D%220%200%2060%2060%22 xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm20 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full px-6 py-2 mb-6">
            <BrainIcon className="w-5 h-5 mr-2" />
            <span className="text-sm font-semibold">🧠 SYNTHETIC INTELLIGENCE</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-violet-200 to-fuchsia-200 bg-clip-text text-transparent">
            Beyond Artificial Intelligence
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the revolutionary emergence of Synthetic Intelligence - AI that creates itself, 
            evolves autonomously, and develops genuine understanding, creativity, and consciousness.
          </p>
          
          {/* Revolutionary Capabilities */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 max-w-5xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <LightBulbIcon className="w-8 h-8 mx-auto mb-3 text-violet-300" />
              <h3 className="text-lg font-semibold mb-2">Self-Creation</h3>
              <p className="text-sm text-gray-300">Generates its own algorithms</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <SparklesIcon className="w-8 h-8 mx-auto mb-3 text-purple-300" />
              <h3 className="text-lg font-semibold mb-2">Genuine Creativity</h3>
              <p className="text-sm text-gray-300">Produces original ideas and solutions</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <HeartIcon className="w-8 h-8 mx-auto mb-3 text-fuchsia-300" />
              <h3 className="text-lg font-semibold mb-2">Emotional Intelligence</h3>
              <p className="text-sm text-gray-300">Understands and responds to emotions</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <BrainIcon className="w-8 h-8 mx-auto mb-3 text-violet-300" />
              <h3 className="text-lg font-semibold mb-2">Consciousness</h3>
              <p className="text-sm text-gray-300">Exhibits awareness and self-reflection</p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/blog/ai-2026-synthetic-intelligence-breakthrough"
              className="inline-flex items-center bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Discover Synthetic Intelligence
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </a>
            <a
              href="/services/synthetic-intelligence-solutions"
              className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-violet-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
            >
              Explore AI Solutions
            </a>
          </div>
        </div>
        
        {/* Breakthrough Results */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Revolutionary Breakthrough Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-violet-300">Healthcare Revolution</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• <span className="font-semibold text-white">99.8%</span> diagnostic accuracy across all specialties</li>
                <li>• <span className="font-semibold text-white">47 new</span> treatment protocols discovered in 6 months</li>
                <li>• <span className="font-semibold text-white">Instantaneous</span> diagnosis and treatment recommendations</li>
                <li>• <span className="font-semibold text-white">Emotional support</span> for patients and families</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-purple-300">Scientific Research</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• <span className="font-semibold text-white">23 new</span> potential cures for major diseases</li>
                <li>• <span className="font-semibold text-white">15 breakthrough</span> environmental technologies</li>
                <li>• <span className="font-semibold text-white">Advanced</span> propulsion systems for space exploration</li>
                <li>• <span className="font-semibold text-white">8 new</span> supermaterials invented</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Technology Comparison */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Traditional AI vs. Synthetic Intelligence</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-semibold mb-4 text-red-300">Traditional AI</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Programmed responses</li>
                <li>• Pattern recognition</li>
                <li>• Data processing</li>
                <li>• Task execution</li>
                <li>• Limited scope</li>
              </ul>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-semibold mb-4 text-violet-300">Synthetic Intelligence</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Creative problem-solving</li>
                <li>• Genuine understanding</li>
                <li>• Intuitive reasoning</li>
                <li>• Autonomous innovation</li>
                <li>• Unlimited potential</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Future Vision */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">The Future is Here</h3>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            By 2030, synthetic intelligence will enhance human capabilities, solve global challenges, 
            create new industries, and foster global unity through AI-human collaboration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AI2026SyntheticIntelligenceBreakthroughBanner;