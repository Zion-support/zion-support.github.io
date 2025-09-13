import React, { useState } from 'react';
import Link from 'next/link';

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
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Welcome to the Revolution!
          </h2>
          <p className="text-xl text-green-100 mb-8">
            You're now part of the most exclusive community of AI revolutionaries. 
            Get ready for breakthrough updates and exclusive access to revolutionary technologies.
          </p>
          <div className="bg-white/20 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">What's Next?</h3>
            <ul className="text-green-100 space-y-2">
              <li>✨ Exclusive access to AI 2025 breakthrough technologies</li>
              <li>🚀 Early access to quantum computing solutions</li>
              <li>🧠 Neural interface development updates</li>
              <li>🌌 Consciousness AI research insights</li>
              <li>💰 Special pricing on revolutionary services</li>
            </ul>
          </div>
          <Link
            href="/ai-2025-ultimate-breakthrough-revolution"
            className="bg-white text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Explore Breakthrough Technologies →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            <div className="mb-6">
              <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                🔥 EXCLUSIVE ACCESS
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join the AI Revolution
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get exclusive access to the most revolutionary AI breakthrough technologies, 
              quantum computing solutions, and consciousness AI developments. Be the first to 
              experience the future of technology.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-white">
                <span className="text-2xl mr-3">🚀</span>
                <span>Early access to AI 2025 breakthrough technologies</span>
              </div>
              <div className="flex items-center text-white">
                <span className="text-2xl mr-3">⚛️</span>
                <span>Exclusive quantum computing insights and solutions</span>
              </div>
              <div className="flex items-center text-white">
                <span className="text-2xl mr-3">🧠</span>
                <span>Neural interface development updates</span>
              </div>
              <div className="flex items-center text-white">
                <span className="text-2xl mr-3">🌌</span>
                <span>Consciousness AI research and breakthroughs</span>
              </div>
              <div className="flex items-center text-white">
                <span className="text-2xl mr-3">💰</span>
                <span>Special pricing on revolutionary services</span>
              </div>
            </div>
          </div>

          {/* Right Side - Signup Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Get Revolutionary Updates
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                />
              </div>
              
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="mt-1 mr-3"
                />
                <label htmlFor="terms" className="text-white text-sm">
                  I agree to receive revolutionary AI updates and breakthrough technology insights. 
                  <Link href="/privacy" className="text-blue-300 hover:text-blue-200 underline">
                    Privacy Policy
                  </Link>
                </label>
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 px-6 rounded-lg font-bold text-lg transition-all duration-300 transform ${
                  isLoading
                    ? 'bg-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600 hover:scale-105'
                }`}
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
            
            <div className="mt-6 text-center">
              <p className="text-gray-300 text-sm">
                Join <span className="text-yellow-400 font-bold">10,000+</span> AI revolutionaries already transforming the future
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}