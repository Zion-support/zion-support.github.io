import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon, SparklesIcon, RocketLaunchIcon, LightBulbIcon } from '@heroicons/react/24/outline';

const NewContent2025UltimateShowcaseBanner: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm">
            <SparklesIcon className="w-5 h-5 mr-2 text-yellow-400" />
            <span className="text-sm font-medium">NEW 2025 ULTIMATE SHOWCASE</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            Revolutionary AI Content
            <br />
            <span className="text-yellow-400">2025 Collection</span>
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the most comprehensive collection of AI insights, breakthrough technologies, 
            and revolutionary solutions that are transforming industries worldwide.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/ai-2025-ultimate-breakthrough"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-xl font-bold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              <RocketLaunchIcon className="w-5 h-5 mr-2" />
              Explore Ultimate Collection
            </Link>
            <Link
              href="/ai-2025-revolutionary-breakthrough"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300 backdrop-blur-sm flex items-center justify-center"
            >
              <LightBulbIcon className="w-5 h-5 mr-2" />
              View Revolutionary Insights
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl font-bold text-yellow-400 mb-2">50+</div>
              <div className="text-sm opacity-90">New AI Breakthroughs</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl font-bold text-blue-400 mb-2">25+</div>
              <div className="text-sm opacity-90">Case Studies</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl font-bold text-purple-400 mb-2">100+</div>
              <div className="text-sm opacity-90">Industry Insights</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl font-bold text-green-400 mb-2">15+</div>
              <div className="text-sm opacity-90">Implementation Guides</div>
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-4">AI Automation Revolution</h3>
            <p className="text-sm opacity-90 mb-4">
              Discover how AI automation is revolutionizing business operations with cutting-edge solutions.
            </p>
            <Link href="/ai-2025-automation-revolution" className="text-yellow-400 font-semibold hover:text-yellow-300 flex items-center">
              Learn More <ArrowRightIcon className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-bold mb-4">Neural Network Breakthroughs</h3>
            <p className="text-sm opacity-90 mb-4">
              Explore advanced neural architectures and their applications in real-world scenarios.
            </p>
            <Link href="/neural-networks-2025" className="text-yellow-400 font-semibold hover:text-yellow-300 flex items-center">
              Learn More <ArrowRightIcon className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-4">Quantum Computing Integration</h3>
            <p className="text-sm opacity-90 mb-4">
              Learn about quantum computing integration with AI for unprecedented computational power.
            </p>
            <Link href="/quantum-ai-2025" className="text-yellow-400 font-semibold hover:text-yellow-300 flex items-center">
              Learn More <ArrowRightIcon className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025UltimateShowcaseBanner;