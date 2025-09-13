import React, { useState } from 'react';

export default function NewsletterSignup2025() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubscribed(true);
    setIsLoading(false);
    setEmail('');
  };

  if (isSubscribed) {
    return (
      <div className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="text-6xl mb-6">🎉</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Welcome to the AI Revolution!
          </h2>
          <p className="text-xl text-green-100 mb-8">
            You're now subscribed to our exclusive AI breakthrough newsletter. Get ready for revolutionary content delivered to your inbox.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-4">What you'll receive:</h3>
            <ul className="text-green-100 space-y-2">
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Weekly AI breakthrough updates
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Exclusive case studies and success stories
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Early access to new quantum computing solutions
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                ROI calculators and implementation guides
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="text-6xl mb-6">📧</div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Stay Ahead of the AI Revolution
        </h2>
        <p className="text-xl text-purple-100 mb-8">
          Get exclusive access to the latest AI breakthroughs, quantum computing solutions, and automation technologies. Join 10,000+ industry leaders.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Subscribing...' : 'Subscribe Now'}
            </button>
          </div>
        </form>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="text-2xl mb-2">🚀</div>
            <h3 className="text-lg font-semibold text-white mb-2">AI Breakthroughs</h3>
            <p className="text-purple-100 text-sm">Latest revolutionary AI technologies</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="text-2xl mb-2">⚛️</div>
            <h3 className="text-lg font-semibold text-white mb-2">Quantum Solutions</h3>
            <p className="text-purple-100 text-sm">Quantum computing breakthroughs</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="text-2xl mb-2">🤖</div>
            <h3 className="text-lg font-semibold text-white mb-2">Automation Tech</h3>
            <p className="text-purple-100 text-sm">Advanced automation solutions</p>
          </div>
        </div>

        <p className="text-purple-200 text-sm mt-6">
          No spam, unsubscribe at any time. We respect your privacy.
        </p>
      </div>
    </div>
  );
}