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
      <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-500/30 rounded-2xl p-8 text-center">
        <div className="text-6xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold text-green-400 mb-4">Welcome to the Future!</h3>
        <p className="text-gray-300 mb-6">
          You're now subscribed to receive exclusive AI breakthrough insights, implementation guides, and early access to revolutionary technologies.
        </p>
        <div className="text-sm text-gray-400">
          Check your email for confirmation and exclusive content.
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-indigo-900/30 border border-purple-500/30 rounded-2xl p-8">
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">🚀</div>
        <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Get Exclusive AI Breakthrough Insights
        </h3>
        <p className="text-xl text-gray-300 mb-6">
          Join 50,000+ industry leaders receiving exclusive access to revolutionary AI technologies, implementation guides, and breakthrough case studies.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-6 py-4 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
            required
          />
          <button
            type="submit"
            disabled={isLoading}
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
          >
            {isLoading ? 'Subscribing...' : 'Get Access'}
          </button>
        </div>

        <div className="text-center text-sm text-gray-400">
          <p>✓ Exclusive AI breakthrough content</p>
          <p>✓ Implementation guides and case studies</p>
          <p>✓ Early access to revolutionary technologies</p>
          <p>✓ No spam, unsubscribe anytime</p>
        </div>
      </form>

      {/* Social Sharing */}
      <div className="mt-8 pt-8 border-t border-gray-600/30">
        <div className="text-center mb-6">
          <h4 className="text-lg font-bold text-gray-300 mb-4">Share the Revolution</h4>
          <p className="text-gray-400 text-sm">Help others discover these breakthrough technologies</p>
        </div>

        <div className="flex justify-center space-x-4">
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('Discover revolutionary AI breakthroughs delivering 5000%+ ROI! Check out the latest content from Zion Tech Group.')}&url=${encodeURIComponent('https://zion.tech')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
            Share on Twitter
          </a>

          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://zion.tech')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 bg-blue-700 hover:bg-blue-800 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            Share on LinkedIn
          </a>

          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://zion.tech')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 bg-blue-800 hover:bg-blue-900 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Share on Facebook
          </a>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="mt-8 pt-8 border-t border-gray-600/30">
        <div className="text-center">
          <p className="text-gray-400 text-sm mb-4">Trusted by industry leaders worldwide</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-lg font-bold">Fortune 500</div>
            <div className="text-lg font-bold">Global 2000</div>
            <div className="text-lg font-bold">Startups</div>
            <div className="text-lg font-bold">Enterprises</div>
          </div>
        </div>
      </div>
    </div>
  );
}