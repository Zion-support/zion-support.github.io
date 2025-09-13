import React, { useState } from 'react';

export default function NewsletterSignup2026() {
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
      <div className="bg-gradient-to-r from-green-900 via-emerald-900 to-teal-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            Welcome to the AI Revolution!
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            You're now part of our exclusive community of AI pioneers. Get ready for revolutionary content delivered directly to your inbox.
          </p>
          <div className="bg-gradient-to-r from-green-800/50 to-emerald-800/50 rounded-xl p-6 border border-green-500/30">
            <h3 className="text-2xl font-bold mb-4 text-green-400">What's Next?</h3>
            <ul className="text-left text-gray-300 space-y-2">
              <li>✓ Weekly AI breakthrough updates</li>
              <li>✓ Exclusive case studies and success stories</li>
              <li>✓ Early access to new AI technologies</li>
              <li>✓ Free implementation guides and toolkits</li>
              <li>✓ Invitations to exclusive webinars and events</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 EXCLUSIVE AI REVOLUTION UPDATES
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Join the AI Revolution
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get exclusive access to revolutionary AI breakthroughs, success stories, and implementation guides. 
              Join thousands of business leaders transforming their organizations with AI.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-300">
                <span className="text-green-400 mr-3">✓</span>
                Weekly AI breakthrough updates
              </div>
              <div className="flex items-center text-gray-300">
                <span className="text-green-400 mr-3">✓</span>
                Exclusive case studies with 10,000%+ ROI
              </div>
              <div className="flex items-center text-gray-300">
                <span className="text-green-400 mr-3">✓</span>
                Early access to new AI technologies
              </div>
              <div className="flex items-center text-gray-300">
                <span className="text-green-400 mr-3">✓</span>
                Free implementation guides and toolkits
              </div>
              <div className="flex items-center text-gray-300">
                <span className="text-green-400 mr-3">✓</span>
                Invitations to exclusive webinars
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 rounded-xl p-6 border border-yellow-500/30">
              <h3 className="text-lg font-bold text-yellow-400 mb-2">🎁 Special Bonus</h3>
              <p className="text-gray-300">
                Get your free <span className="text-yellow-400 font-bold">AI Readiness Assessment</span> worth $10,000 
                when you subscribe to our newsletter.
              </p>
            </div>
          </div>

          {/* Signup Form */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold mb-6 text-center text-cyan-400">
              Start Your AI Journey
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-gray-300 mb-2">
                  Industry
                </label>
                <select
                  id="industry"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="">Select your industry</option>
                  <option value="technology">Technology</option>
                  <option value="finance">Finance</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="retail">Retail</option>
                  <option value="automotive">Automotive</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-lg font-bold text-lg hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Subscribing...
                  </div>
                ) : (
                  'Join the Revolution'
                )}
              </button>
            </form>

            <p className="text-xs text-gray-400 mt-4 text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}