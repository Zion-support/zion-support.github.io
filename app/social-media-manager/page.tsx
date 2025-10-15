'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  ShareIcon, 
  ChartBarIcon, 
  CheckCircleIcon,
  ArrowRightIcon,
  CalendarIcon,
  EyeIcon
} from '@heroicons/react/24/outline';

const SocialMediaManagerPage: React.FC = () => {
  const features = [
    'Multi-Platform Management',
    'Content Scheduling',
    'Analytics & Insights',
    'Auto-Posting',
    'Engagement Tracking',
    'Brand Monitoring'
  ];

  const platforms = [
    {
      name: 'Facebook',
      description: 'Manage posts, stories, and ads across Facebook',
      icon: ShareIcon,
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Instagram',
      description: 'Schedule posts and stories with visual content',
      icon: EyeIcon,
      gradient: 'from-pink-500 to-purple-500'
    },
    {
      name: 'Twitter',
      description: 'Tweet scheduling and engagement monitoring',
      icon: ShareIcon,
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      name: 'LinkedIn',
      description: 'Professional content and networking',
      icon: ShareIcon,
      gradient: 'from-blue-600 to-blue-700'
    }
  ];

  return (
    <>
      <SEOHead 
        title="Social Media Manager - Zion Tech Group"
        description="Comprehensive social media management platform for scheduling, analytics, and engagement across all major platforms."
        keywords="social media manager, social media scheduling, social media analytics, content management, social media automation"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-cyan-900/30"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg mb-6">
                <ShareIcon className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Social Media <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Manager</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Streamline your social media presence with our comprehensive management platform. 
                Schedule, analyze, and optimize your content across all major platforms.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Powerful <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Everything you need to manage your social media presence effectively and efficiently.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-4 p-6 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-all duration-300 group"
                >
                  <CheckCircleIcon className="w-6 h-6 text-green-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Supported <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Platforms</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Manage all your social media accounts from one centralized dashboard.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {platforms.map((platform, index) => (
                <div 
                  key={index}
                  className="group bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${platform.gradient} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <platform.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {platform.name}
                  </h3>
                  <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">
                    {platform.description}
                  </p>
                  <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-900/40 via-slate-900 to-cyan-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Ready to Manage Your Social Media?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Start managing your social media presence more effectively with our comprehensive platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SocialMediaManagerPage;
