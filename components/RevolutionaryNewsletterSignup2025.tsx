'use client';

import React, { useState } from 'react';

const RevolutionaryNewsletterSignup2025 = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 2000);
  };

  const benefits = [
    {
      icon: '📧',
      title: 'Weekly AI Insights',
      description: 'Latest trends and breakthroughs delivered to your inbox'
    },
    {
      icon: '🎯',
      title: 'Exclusive Case Studies',
      description: 'Real success stories from our client implementations'
    },
    {
      icon: '🛠️',
      title: 'Free Tools & Resources',
      description: 'Access to calculators, templates, and assessment tools'
    },
    {
      icon: '💡',
      title: 'Expert Tips',
      description: 'Actionable advice from our AI specialists'
    }
  ];

  if (isSubscribed) {
    return (
      <div className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl p-12">
            <div className="text-6xl mb-6">🎉</div>
            <h2 className="text-4xl font-bold mb-4">Welcome to the Future!</h2>
            <p className="text-xl opacity-90 mb-8">
              You're now part of our exclusive AI insights community. Check your email for a special welcome gift!
            </p>
            <div className="bg-white bg-opacity-10 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">What's Next?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <span>✅</span>
                  <span>Confirmation email sent</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>✅</span>
                  <span>Welcome gift unlocked</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>⏳</span>
                  <span>First newsletter in 24 hours</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>⏳</span>
                  <span>Exclusive content access</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-semibold">📧 NEWSLETTER</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Stay Ahead with
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                AI Insights
              </span>
            </h2>
            
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              Join 10,000+ business leaders who get exclusive AI insights, case studies, 
              and tools delivered weekly to their inbox.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="text-2xl">{benefit.icon}</div>
                  <div>
                    <h3 className="font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-sm opacity-90">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Proof */}
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-2 border-white"></div>
                  ))}
                </div>
                <div>
                  <div className="text-sm font-semibold">10,000+ Subscribers</div>
                  <div className="text-xs opacity-75">From Fortune 500 companies</div>
                </div>
              </div>
              <div className="text-sm opacity-90">
                "The insights have been game-changing for our AI strategy. Highly recommended!"
                <span className="block font-semibold mt-1">- Sarah Chen, CTO at TechCorp</span>
              </div>
            </div>
          </div>

          {/* Right Side - Signup Form */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Join Our Community</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:ring-2 focus:ring-white focus:ring-opacity-50 focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="mt-1 w-4 h-4 text-blue-600 bg-white bg-opacity-20 border-white border-opacity-30 rounded focus:ring-blue-500"
                />
                <label htmlFor="terms" className="text-sm opacity-90">
                  I agree to receive weekly AI insights and understand that I can unsubscribe at any time.
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 py-4 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
                    <span>Subscribing...</span>
                  </div>
                ) : (
                  'Get Free AI Insights'
                )}
              </button>
            </form>

            {/* Trust Indicators */}
            <div className="mt-8 pt-6 border-t border-white border-opacity-20">
              <div className="text-center text-sm opacity-75 mb-4">
                Trusted by industry leaders
              </div>
              <div className="flex justify-center space-x-8 opacity-60">
                <div className="text-xs">Fortune 500</div>
                <div className="text-xs">Startups</div>
                <div className="text-xs">Consultants</div>
                <div className="text-xs">Researchers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryNewsletterSignup2025;