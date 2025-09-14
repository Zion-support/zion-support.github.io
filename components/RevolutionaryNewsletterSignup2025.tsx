'use client';

import React, { useState } from 'react';

const RevolutionaryNewsletterSignup2025 = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      if (email.includes('@')) {
        setIsSubscribed(true);
        setEmail('');
      } else {
        setError('Please enter a valid email address');
      }
      setIsSubmitting(false);
    }, 1500);
  };

  if (isSubscribed) {
    return (
      <section className="py-16 bg-gradient-to-r from-green-500 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Welcome to the AI Revolution!
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              You're now subscribed to our exclusive AI insights newsletter. 
              Get ready for breakthrough content delivered straight to your inbox.
            </p>
            <div className="bg-green-50 rounded-lg p-4 mb-6">
              <h3 className="font-bold text-green-800 mb-2">What you'll receive:</h3>
              <ul className="text-green-700 text-left max-w-md mx-auto">
                <li>• Weekly AI breakthrough insights</li>
                <li>• Exclusive Fortune 500 case studies</li>
                <li>• Implementation guides and best practices</li>
                <li>• Early access to new content</li>
                <li>• ROI optimization strategies</li>
              </ul>
            </div>
            <button
              onClick={() => setIsSubscribed(false)}
              className="text-green-600 hover:text-green-700 font-semibold"
            >
              Subscribe Another Email
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/tech-pattern.svg')] opacity-10"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full">
                <span className="text-sm font-medium">📧 REVOLUTIONARY NEWSLETTER 2025</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Join the AI Revolution Newsletter
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Get exclusive access to breakthrough AI content, Fortune 500 success stories, 
                and implementation guides that can transform your business with proven ROI results.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-400">50,000+</div>
                <div className="text-sm text-blue-100">Subscribers</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-yellow-400">98%</div>
                <div className="text-sm text-blue-100">Satisfaction Rate</div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold">What you'll get:</h3>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Weekly AI breakthrough insights and trends
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Exclusive Fortune 500 case studies
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Implementation guides and best practices
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Early access to new content and tools
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  ROI optimization strategies and tips
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-6 text-center">Subscribe Now</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/10 text-white placeholder-white/70 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
                {error && (
                  <p className="text-red-300 text-sm mt-2">{error}</p>
                )}
              </div>

              <div className="space-y-4">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    className="mt-1 mr-3 text-green-500 focus:ring-green-500"
                    required
                  />
                  <span className="text-sm text-blue-100">
                    I agree to receive the AI Revolution newsletter and understand that I can unsubscribe at any time.
                  </span>
                </label>
                
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    className="mt-1 mr-3 text-green-500 focus:ring-green-500"
                  />
                  <span className="text-sm text-blue-100">
                    I want to receive exclusive offers and early access to new AI tools and content.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Subscribing...
                  </div>
                ) : (
                  'Join the AI Revolution'
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-blue-200">
                🔒 We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-16 text-center">
          <p className="text-blue-200 text-sm mb-4">
            Join thousands of business leaders who are already transforming their organizations
          </p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-2xl font-bold">Fortune 500</div>
            <div className="text-2xl font-bold">TechGlobal</div>
            <div className="text-2xl font-bold">Enterprise</div>
            <div className="text-2xl font-bold">Startups</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryNewsletterSignup2025;