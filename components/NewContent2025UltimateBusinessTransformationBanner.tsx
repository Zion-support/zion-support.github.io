import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon, ChartBarIcon, CogIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

const NewContent2025UltimateBusinessTransformationBanner: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/ai-pattern.svg')] opacity-10"></div>
      </div>
      
      {/* Animated Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500/20 rounded-full animate-bounce"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-500/20 rounded-full animate-ping"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20">
            <RocketLaunchIcon className="w-5 h-5 mr-2 text-yellow-400" />
            <span className="text-sm font-medium">🚀 NEW CONTENT 2025</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Ultimate Business
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Transformation Guide
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover how Fortune 500 companies achieve <strong>$500M+ ROI</strong> through AI transformation. 
            Complete enterprise guide with implementation strategies, case studies, and proven results.
          </p>
        </div>

        {/* Key Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center mb-4">
              <ChartBarIcon className="w-8 h-8 text-green-400 mr-3" />
              <h3 className="text-xl font-bold">500M+ ROI</h3>
            </div>
            <p className="text-gray-300">
              Proven strategies that deliver massive returns on AI investments with detailed case studies and implementation roadmaps.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center mb-4">
              <CogIcon className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-xl font-bold">Complete Guide</h3>
            </div>
            <p className="text-gray-300">
              End-to-end transformation framework with 18-month implementation plan, technology stack, and change management strategies.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center mb-4">
              <RocketLaunchIcon className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-xl font-bold">Future-Ready</h3>
            </div>
            <p className="text-gray-300">
              Prepare for quantum AI, neural interfaces, and autonomous operations. Stay ahead of the competition with cutting-edge strategies.
            </p>
          </div>
        </div>

        {/* Content Highlights */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-white/10">
          <h3 className="text-2xl font-bold mb-6 text-center">What 'You', 'll Discover</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">340%</div>
              <div className="text-sm text-gray-300">Average ROI Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-sm text-gray-300">Equipment Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">60%</div>
              <div className="text-sm text-gray-300">Faster Time-to-Market</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">85%</div>
              <div className="text-sm text-gray-300">Efficiency Gains</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog/ai-2025-ultimate-business-transformation-complete-guide"
              className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center justify-center">
                Read Complete Guide
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            
            <Link
              href="/case-studies/fortune-500-ai-transformation-success-story"
              className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center justify-center">
                View Success Story
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
          
          <p className="text-gray-300 text-sm">
            Join 500+ enterprise leaders who have transformed their businesses with AI
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025UltimateBusinessTransformationBanner;