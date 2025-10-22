import React from 'react';
import SEOHead from '../components/SEOHead';

const SocialMediaSchedulerPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Social Media Scheduler - Zion Tech Group"
        description="AI-powered social media management with automated posting, content optimization, and analytics."
        keywords="social media scheduler, social media management, content automation, social media analytics, AI content"
        canonicalUrl="https://ziontechgroup.com/social-media-scheduler"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Social Media Scheduler Pro
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI-powered social media management with automated posting, content optimization, and analytics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-white">Features</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">AI Content Generation</h3>
                    <p className="text-gray-400">Generate engaging posts using AI based on your brand voice and audience.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Multi-Platform Posting</h3>
                    <p className="text-gray-400">Schedule and post to Facebook, Twitter, Instagram, LinkedIn, and more.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Optimal Timing</h3>
                    <p className="text-gray-400">AI determines the best times to post for maximum engagement.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Analytics & Insights</h3>
                    <p className="text-gray-400">Track performance, engagement rates, and audience growth across platforms.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
              <h3 className="text-xl font-bold mb-6 text-white">Pricing</h3>
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-pink-400 mb-2">$99/mo</div>
                <div className="text-gray-400 line-through">$149/mo</div>
                <div className="text-sm text-pink-400">Limited Time Offer</div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Unlimited Posts</span>
                  <span className="text-pink-400">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">5 Social Accounts</span>
                  <span className="text-pink-400">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">AI Content Generation</span>
                  <span className="text-pink-400">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Analytics Dashboard</span>
                  <span className="text-pink-400">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Team Collaboration</span>
                  <span className="text-pink-400">✓</span>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialMediaSchedulerPage;
