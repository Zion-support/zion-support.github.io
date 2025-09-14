'use client';

import React, { useState } from 'react';

const NewsletterSignup2025: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (email.includes('@')) {
        setIsSubscribed(true);
        setEmail('');
      } else {
        setError('Please enter a valid email address');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold mb-4">Welcome to the AI Revolution!</h2>
          <p className="text-xl opacity-90 mb-6">
            You're now subscribed to our exclusive AI insights newsletter. 
            Get ready for cutting-edge content delivered to your inbox.
          </p>
          <div className="bg-white bg-opacity-20 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold mb-2">What's Next?</h3>
            <ul className="text-left space-y-2">
              <li>• Weekly AI trend reports and insights</li>
              <li>• Exclusive case studies and success stories</li>
              <li>• Early access to new tools and calculators</li>
              <li>• Invitations to webinars and events</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">📧 EXCLUSIVE INSIGHTS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stay Ahead of the AI Revolution
            </h2>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              Get exclusive access to cutting-edge AI insights, success stories, 
              and industry trends that will transform your business. Join 10,000+ 
              forward-thinking professionals.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Weekly AI trend reports and insights</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Exclusive case studies and success stories</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Early access to new tools and calculators</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Invitations to exclusive webinars and events</span>
              </div>
            </div>
          </div>

          {/* Signup Form */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Join the AI Revolution
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:ring-2 focus:ring-white focus:ring-opacity-50 focus:outline-none"
                  required
                />
                {error && (
                  <p className="mt-2 text-sm text-red-200">{error}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="John"
                    className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:ring-2 focus:ring-white focus:ring-opacity-50 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Doe"
                    className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:ring-2 focus:ring-white focus:ring-opacity-50 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  placeholder="Your Company"
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:ring-2 focus:ring-white focus:ring-opacity-50 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="industry" className="block text-sm font-medium mb-2">
                  Industry
                </label>
                <select
                  id="industry"
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white focus:ring-2 focus:ring-white focus:ring-opacity-50 focus:outline-none"
                >
                  <option value="" className="text-gray-800">Select your industry</option>
                  <option value="manufacturing" className="text-gray-800">Manufacturing</option>
                  <option value="healthcare" className="text-gray-800">Healthcare</option>
                  <option value="finance" className="text-gray-800">Finance</option>
                  <option value="retail" className="text-gray-800">Retail</option>
                  <option value="technology" className="text-gray-800">Technology</option>
                  <option value="other" className="text-gray-800">Other</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Subscribing...
                  </div>
                ) : (
                  'Get Free AI Insights'
                )}
              </button>
            </form>

            <p className="text-sm text-center mt-4 opacity-80">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <p className="text-sm opacity-80 mb-4">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center items-center space-x-8 opacity-60">
            <div className="text-2xl font-bold">Fortune 500</div>
            <div className="text-2xl font-bold">Startups</div>
            <div className="text-2xl font-bold">Enterprises</div>
            <div className="text-2xl font-bold">Agencies</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup2025;