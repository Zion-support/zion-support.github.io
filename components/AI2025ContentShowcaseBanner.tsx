import React from 'react';
import { ArrowRightIcon, SparklesIcon, ChartBarIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

const AI2025ContentShowcaseBanner = () => {
  const stats = [
    { number: "1M+", label: "Content Pieces Created" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "50+", label: "Industries Served" },
    { number: "24/7", label: "AI Content Generation" }
  ];

  const features = [
    {
      icon: SparklesIcon,
      title: "AI Content Generation",
      description: "Create high-quality content in seconds with our advanced AI"
    },
    {
      icon: ChartBarIcon,
      title: "Performance Analytics",
      description: "Track and optimize your content performance in real-time"
    },
    {
      icon: RocketLaunchIcon,
      title: "Multi-Platform Distribution",
      description: "Publish content across all your channels automatically"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Cpath d="M50 50c0-27.614-22.386-50-50-50v100c27.614 0 50-22.386 50-50z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-semibold mb-6">
            <SparklesIcon className="w-4 h-4 mr-2" />
            AI 2025 CONTENT SHOWCASE
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The Ultimate Content
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Creation Platform
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your content strategy with our revolutionary AI-powered platform that creates, optimizes, and distributes content at unprecedented scale and quality.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-black mb-4">
              Ready to Transform Your Content Strategy?
            </h3>
            <p className="text-black/80 mb-6 text-lg">
              Join thousands of businesses already using our AI-powered content platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-black text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center">
                Start Your Free Trial
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </button>
              <button className="bg-white/20 text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/30 transition-colors duration-200">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025ContentShowcaseBanner;