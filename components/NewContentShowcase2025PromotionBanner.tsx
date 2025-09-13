import React from 'react';
import Link from 'next/link';
import { 
  SparklesIcon, 
  ArrowRightIcon, 
  PlayIcon,
  BookOpenIcon,
  LightBulbIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

const NewContentShowcase2025PromotionBanner = () => {
  const features = [
    {
      icon: BookOpenIcon,
      title: "Latest Insights",
      description: "Cutting-edge research and analysis"
    },
    {
      icon: LightBulbIcon,
      title: "Innovation Focus",
      description: "Emerging technologies and trends"
    },
    {
      icon: RocketLaunchIcon,
      title: "Future Ready",
      description: "Prepare for tomorrow's challenges"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
              <SparklesIcon className="w-4 h-4 mr-2" />
              New Content Available
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Explore Our
              <span className="block text-yellow-300">2025 Content Showcase</span>
            </h2>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Dive into our comprehensive collection of cutting-edge content covering AI innovations, 
              quantum computing breakthroughs, and emerging technologies that are reshaping industries.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                      <p className="text-blue-100 text-sm">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/content-showcase-2025"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-medium rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                <BookOpenIcon className="w-5 h-5 mr-2" />
                Explore Content
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center px-8 py-4 border border-white/30 text-white font-medium rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                <PlayIcon className="w-5 h-5 mr-2" />
                Watch Demo
              </Link>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="text-center">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <SparklesIcon className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  What's Inside?
                </h3>
                <ul className="text-left space-y-3 text-blue-100">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></div>
                    AI Innovation Showcases
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></div>
                    Technology Trend Analysis
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></div>
                    Case Studies & Success Stories
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></div>
                    Future Technology Predictions
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></div>
                    Interactive Content Discovery
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-300 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white rounded-full opacity-40 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContentShowcase2025PromotionBanner;