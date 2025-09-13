import React from 'react';
import { ArrowRightIcon, SparklesIcon, RocketLaunchIcon, LightBulbIcon } from '@heroicons/react/24/outline';

const NewContent2025UltimateShowcase = () => {
  const features = [
    {
      icon: SparklesIcon,
      title: "AI-Powered Content Generation",
      description: "Revolutionary AI that creates engaging, SEO-optimized content at scale",
      stats: "500% increase in content production"
    },
    {
      icon: RocketLaunchIcon,
      title: "Automated Content Distribution",
      description: "Multi-channel content deployment across all your platforms",
      stats: "10x faster content delivery"
    },
    {
      icon: LightBulbIcon,
      title: "Smart Content Optimization",
      description: "Real-time content performance analysis and optimization",
      stats: "300% improvement in engagement"
    }
  ];

  const contentTypes = [
    "Blog Posts & Articles",
    "Social Media Content",
    "Video Scripts",
    "Email Campaigns",
    "Product Descriptions",
    "Technical Documentation",
    "Marketing Copy",
    "Press Releases"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-semibold mb-6">
            <SparklesIcon className="w-4 h-4 mr-2" />
            NEW 2025 ULTIMATE CONTENT SHOWCASE
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transform Your Content Strategy
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              with AI-Powered Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the future of content creation with our revolutionary AI-powered platform that generates, optimizes, and distributes content at unprecedented scale.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              <div className="text-yellow-400 font-semibold text-lg">{feature.stats}</div>
            </div>
          ))}
        </div>

        {/* Content Types */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Content Types We Generate
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {contentTypes.map((type, index) => (
              <div key={index} className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-4 text-center text-white font-semibold hover:scale-105 transition-transform duration-200">
                {type}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-black mb-4">
              Ready to Revolutionize Your Content?
            </h3>
            <p className="text-black/80 mb-6 text-lg">
              Join thousands of businesses already using our AI-powered content platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center">
                Start Free Trial
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </button>
              <button className="bg-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-colors duration-200">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025UltimateShowcase;