'use client';
import React, { useState } from 'react';
import { Mail, CheckCircle, ArrowRight, Star, Users, Globe, Zap } from 'lucide-react';

const ContentNewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSubscribed(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubscribed(false);
      setEmail('');
    }, 3000);
  };

  const benefits = [
    {
      icon: Star,
      title: 'Exclusive Content',
      description: 'Get access to premium articles and insights'
    },
    {
      icon: Zap,
      title: 'Early Access',
      description: 'Be the first to know about new features and updates'
    },
    {
      icon: Users,
      title: 'Community Access',
      description: 'Join our exclusive community of industry leaders'
    }
  ];

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Welcome to Our Community!</h3>
        <p className="text-green-100 mb-4">
          Thank you for subscribing. You'll receive our latest insights and updates.
        </p>
        <div className="text-green-100 text-sm">
          Check your email for a confirmation link.
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="text-white">
          <div className="flex items-center mb-4">
            <Mail className="w-8 h-8 mr-3" />
            <h2 className="text-3xl font-bold">Stay Updated</h2>
          </div>
          <p className="text-blue-100 text-lg mb-6">
            Get the latest insights on AI, technology trends, and business transformation delivered to your inbox.
          </p>
          
          <div className="space-y-4 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <benefit.icon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{benefit.title}</h3>
                  <p className="text-blue-100 text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-4 text-blue-100">
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span className="text-sm">2,500+ subscribers</span>
            </div>
            <div className="flex items-center space-x-1">
              <Globe className="w-4 h-4" />
              <span className="text-sm">Global community</span>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-4">Subscribe to Our Newsletter</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:border-white focus:ring-1 focus:ring-white transition-colors"
                placeholder="Enter your email address"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-white text-blue-600 hover:bg-gray-100 disabled:bg-gray-300 disabled:text-gray-500 font-bold py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center justify-center space-x-2 group"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                  <span>Subscribing...</span>
                </>
              ) : (
                <>
                  <span>Subscribe Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
            <p className="text-blue-100 text-xs text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContentNewsletterSignup;