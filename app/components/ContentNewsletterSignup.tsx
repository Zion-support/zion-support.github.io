'use client';
import React, { useState } from 'react';
import { Mail, CheckCircle, ArrowRight, Zap } from 'lucide-react';

const ContentNewsletterSignup: React.FC = () => {
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
    }, 1000);
  };

  const benefits = [
    'Exclusive AI insights and trends',
    'Early access to new features',
    'Special discounts and offers',
    'Monthly industry reports',
    'Free consultation calls',
    'Priority support access'
  ];

  if (isSubscribed) {
    return (
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="cyber-card hologram-card p-8 text-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Welcome to Our Community!</h2>
            <p className="text-lg text-gray-300 mb-6">
              Thank you for subscribing! You'll receive our latest updates and exclusive content.
            </p>
            <button
              onClick={() => setIsSubscribed(false)}
              className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
            >
              Subscribe Another Email
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="cyber-card hologram-card p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Get exclusive access to AI trends, industry insights, and special offers delivered to your inbox.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">What You'll Get:</h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full cyber-button text-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Subscribing...
                    </div>
                  ) : (
                    <>
                      Subscribe Now
                      <ArrowRight className="w-4 h-4 ml-2 inline" />
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentNewsletterSignup;