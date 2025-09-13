import React, { useState } from 'react';

export default function RevolutionaryNewsletterSignup() {
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
      <div className="bg-gradient-to-r from-green-900 to-emerald-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="text-6xl mb-6">🎉</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Welcome to the Revolution!</h2>
          <p className="text-xl text-gray-300 mb-8">
            You're now part of the AI revolution. Get ready for exclusive breakthrough content, 
            success stories, and implementation guides delivered directly to your inbox.
          </p>
          <div className="bg-gradient-to-r from-green-800/30 to-emerald-800/30 p-6 rounded-xl border border-green-500/30 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4">What's Next?</h3>
            <ul className="text-left space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Exclusive AI breakthrough announcements
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Case studies with 10,000%+ ROI results
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Implementation guides and best practices
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Early access to revolutionary features
              </li>
            </ul>
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
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-500/30 mb-6">
              <span className="text-yellow-400 font-semibold text-sm">📧 EXCLUSIVE CONTENT</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Join the AI Revolution
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get exclusive access to breakthrough AI content, success stories, and implementation guides 
              that deliver unprecedented ROI and transformation.
            </p>
            
            {/* Benefits */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <span className="text-green-400 mr-4 text-xl">🚀</span>
                <span className="text-gray-300">Exclusive AI breakthrough announcements</span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-400 mr-4 text-xl">📈</span>
                <span className="text-gray-300">Case studies with 10,000%+ ROI results</span>
              </div>
              <div className="flex items-center">
                <span className="text-purple-400 mr-4 text-xl">📚</span>
                <span className="text-gray-300">Implementation guides and best practices</span>
              </div>
              <div className="flex items-center">
                <span className="text-yellow-400 mr-4 text-xl">⚡</span>
                <span className="text-gray-300">Early access to revolutionary features</span>
              </div>
            </div>
          </div>

          {/* Right side - Signup form */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl border border-gray-700/50">
            <h3 className="text-2xl font-bold mb-6 text-center">Get Started Today</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold py-3 px-6 rounded-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                    Joining Revolution...
                  </div>
                ) : (
                  'Join the Revolution 🚀'
                )}
              </button>
            </form>
            
            <p className="text-xs text-gray-400 text-center mt-4">
              By subscribing, you agree to receive exclusive AI breakthrough content. 
              Unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Social sharing */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Share the Revolution</h3>
          <div className="flex justify-center space-x-4">
            <a
              href="https://twitter.com/intent/tweet?text=Join%20the%20AI%20Revolution%20with%20Zion%20Tech%20Group%20-%2010,000%%20ROI%20guaranteed!&url=https://zion.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 transition-colors"
            >
              Share on Twitter
            </a>
            <a
              href="https://www.linkedin.com/sharing/share-offsite/?url=https://zion.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
            >
              Share on LinkedIn
            </a>
            <a
              href="https://www.facebook.com/sharer/sharer.php?u=https://zion.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Share on Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}