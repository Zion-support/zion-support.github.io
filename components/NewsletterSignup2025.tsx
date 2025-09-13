import React, { useState } from 'react';

export default function NewsletterSignup2025() {
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

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Welcome to the AI Revolution!
          </h2>
          <p className="text-xl text-green-100 mb-6">
            You're now subscribed to our exclusive AI 2025 breakthrough newsletter. 
            Get ready for revolutionary content delivered directly to your inbox.
          </p>
          <div className="bg-white/20 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">What you'll receive:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center">
                <span className="text-green-300 mr-3">✓</span>
                <span>Latest AI 2025 breakthrough announcements</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-300 mr-3">✓</span>
                <span>Exclusive case studies and success stories</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-300 mr-3">✓</span>
                <span>Implementation guides and best practices</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-300 mr-3">✓</span>
                <span>ROI calculators and assessment tools</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm font-bold mb-6">
              📧 EXCLUSIVE NEWSLETTER
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Stay Ahead of the AI Revolution
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get exclusive access to the latest AI 2025 breakthrough content, case studies, 
              implementation guides, and success stories delivered directly to your inbox.
            </p>
            
            {/* Benefits */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <span className="text-green-400 mr-3 text-xl">✓</span>
                <span className="text-gray-300">Latest AI 2025 breakthrough announcements</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-3 text-xl">✓</span>
                <span className="text-gray-300">Exclusive case studies with 10,000%+ ROI</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-3 text-xl">✓</span>
                <span className="text-gray-300">Implementation guides and best practices</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-3 text-xl">✓</span>
                <span className="text-gray-300">ROI calculators and assessment tools</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-3 text-xl">✓</span>
                <span className="text-gray-300">Early access to new content and tools</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 p-4 rounded-lg border border-blue-500/30">
                <div className="text-2xl font-bold text-blue-400">50,000+</div>
                <div className="text-sm text-gray-300">Subscribers</div>
              </div>
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-4 rounded-lg border border-purple-500/30">
                <div className="text-2xl font-bold text-purple-400">99.9%</div>
                <div className="text-sm text-gray-300">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="bg-gradient-to-br from-slate-800/50 to-blue-900/50 p-8 rounded-2xl border border-gray-700/50">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Join the AI Revolution
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Subscribing...
                  </div>
                ) : (
                  'Subscribe to AI Revolution Newsletter'
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                By subscribing, you agree to receive our newsletter and marketing communications. 
                You can unsubscribe at any time.
              </p>
            </div>

            {/* Social proof */}
            <div className="mt-8 pt-6 border-t border-gray-700/50">
              <p className="text-sm text-gray-400 text-center mb-4">
                Join thousands of business leaders already transforming with AI
              </p>
              <div className="flex justify-center space-x-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-yellow-400">10,000%</div>
                  <div className="text-xs text-gray-400">Average ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-400">99.9%</div>
                  <div className="text-xs text-gray-400">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-400">50K+</div>
                  <div className="text-xs text-gray-400">Subscribers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}