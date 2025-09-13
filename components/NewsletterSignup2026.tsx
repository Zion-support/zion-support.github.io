'use client';

import React, { useState } from 'react';
import { Mail, Send, CheckCircle, Zap, TrendingUp, Users, Globe, Shield } from 'lucide-react';

const NewsletterSignup2026 = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubscribed(true);
    setIsLoading(false);
    setEmail('');
  };

  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      title: "Exclusive AI Insights",
      description: "Get early access to breakthrough AI research and industry trends"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-600" />,
      title: "Growth Strategies",
      description: "Proven strategies to accelerate your business growth and innovation"
    },
    {
      icon: <Users className="w-6 h-6 text-purple-600" />,
      title: "Expert Community",
      description: "Join our network of industry leaders and technology experts"
    },
    {
      icon: <Globe className="w-6 h-6 text-orange-600" />,
      title: "Global Updates",
      description: "Stay informed about worldwide technology developments and opportunities"
    }
  ];

  const stats = [
    { number: "50K+", label: "Subscribers" },
    { number: "95%", label: "Open Rate" },
    { number: "Weekly", label: "Updates" },
    { number: "Free", label: "Forever" }
  ];

  if (isSubscribed) {
    return (
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome to the Future!
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              You've successfully joined our exclusive community. Get ready for cutting-edge insights and breakthrough technology updates.
            </p>
            <div className="bg-green-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                What's Next?
              </h3>
              <ul className="text-green-700 space-y-2">
                <li>• Check your email for a welcome message</li>
                <li>• Follow us on social media for real-time updates</li>
                <li>• Explore our latest content and resources</li>
                <li>• Join our community discussions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-6">
              <Mail className="w-4 h-4 mr-2" />
              Newsletter 2026
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stay Ahead of the
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Future</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our exclusive community and get the latest insights on AI, automation, quantum computing, and emerging technologies that are shaping tomorrow.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{benefit.title}</h3>
                    <p className="text-sm text-gray-300">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Newsletter Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Join Our Community
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="mt-1 w-4 h-4 text-blue-600 bg-white/20 border-white/30 rounded focus:ring-blue-500"
                />
                <label htmlFor="terms" className="text-sm text-gray-300">
                  I agree to receive weekly updates and promotional content. I can unsubscribe at any time.
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Subscribing...
                  </>
                ) : (
                  <>
                    Subscribe Now
                    <Send className="w-5 h-5 ml-2" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-300">
                Join <span className="text-blue-400 font-semibold">50,000+</span> professionals who trust us for their technology insights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup2026;