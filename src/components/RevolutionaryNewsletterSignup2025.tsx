"use client";
'use client';

import React, { useState } from 'react';

const RevolutionaryNewsletterSignup2025: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const interestOptions = [
    'AI Automation',
    'Quantum Computing',
    'Neural Interfaces',
    'Business Transformation',
    'Case Studies',
    'Industry Insights',
    'Technology Trends',
    'Implementation Guides'
  ];

  const handleInterestToggle = (interest: string) => {
    setSelectedInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(item => item !== interest)
        : [...prev, interest]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubscribed(true);
    setEmail(', ');
    setSelectedInterests([]);
  };

  if (isSubscribed) {
    return (
      <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-2xl p-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome to the AI Revolution!</h2>
            <p className="text-xl text-gray-600 mb-8">
              'You', 've successfully joined our exclusive community. Get ready for cutting-edge AI insights, 
              breakthrough technologies, and exclusive content delivered straight to your inbox.
            </p>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-3">'What', 's Next?</h3>
              <ul className="text-left text-gray-700 space-y-2">
                <li>• Weekly AI insights and trend analysis</li>
                <li>• Exclusive case studies and success stories</li>
                <li>• Early access to new tools and technologies</li>
                <li>• Invitation to exclusive webinars and events</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="text-white">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-semibold">🚀 REVOLUTIONARY NEWSLETTER</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join the AI Revolution
            </h2>
            
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              Get exclusive access to cutting-edge AI insights, breakthrough technologies, 
              and real-world success stories that are transforming businesses worldwide.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg">Weekly AI insights and trend analysis</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg">Exclusive case studies and success stories</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg">Early access to new tools and technologies</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg">Invitation to exclusive webinars and events</span>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">🎁 Exclusive Bonus</h3>
              <p className="opacity-90">
                Get instant access to our "AI Implementation Roadmap 2025" guide 
                and "ROI Calculator Toolkit" when you subscribe!
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Start Your AI Journey Today
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Interest Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Areas of Interest (Select all that apply)
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {interestOptions.map((interest) => (
                    <label
                      key={interest}
                      className="flex items-center cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedInterests.includes(interest)}
                        onChange={() => handleInterestToggle(interest)}
                        className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || !email}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                    Subscribing...
                  </div>
                ) : (
                  'Join the Revolution'
                )}
              </button>

              <p className="text-xs text-gray-500 text-center">
                By subscribing, you agree to our privacy policy. We respect your privacy and never spam.
              </p>
            </form>

            {/* Trust Indicators */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span>Secure & Private</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span>No Spam</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span>Unsubscribe Anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-16 text-center">
          <p className="text-white text-lg mb-6">Join 50,000+ professionals already transforming their businesses</p>
          <div className="flex flex-wrap justify-center items-center space-x-8 opacity-80">
            <div className="text-white font-semibold">TechCorp Global</div>
            <div className="text-white font-semibold">FinanceFlow Inc</div>
            <div className="text-white font-semibold">HealthTech Solutions</div>
            <div className="text-white font-semibold">RetailMax</div>
            <div className="text-white font-semibold">LogiFlow Systems</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryNewsletterSignup2025;