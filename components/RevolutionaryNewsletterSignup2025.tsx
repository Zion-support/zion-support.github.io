"use client";
import React{ useState } from 'react';

export default function RevolutionaryNewsletterSignup2025() {
  const [emailsetEmail] = useState('');
  const [isSubscribedsetIsSubscribed] = useState(false);
  const [isLoadingsetIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve2000));
    
    setIsSubscribed(true);
    setIsLoading(false);
    setEmail('');
  };

  if (isSubscribed) {
    return (
      <div className="py-20 bg-gradient-to-r from-green-900 via-emerald-900 to-teal-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-12 rounded-2xl">
            <div className="text-6xl mb-6">🎉</div>
            <h2 className="text-4xl font-bold mb-6 text-white">
              Welcome to the Revolution!
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              You've successfully joined the most exclusive AI revolution newsletter. 
              Get ready for infinite insightsbreakthrough updatesand revolutionary content.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/20 p-6 rounded-xl">
                <div className="text-2xl mb-2">🚀</div>
                <div className="font-bold">Breakthrough Updates</div>
                <div className="text-sm text-gray-200">Latest AI 2025 developments</div>
              </div>
              <div className="bg-white/20 p-6 rounded-xl">
                <div className="text-2xl mb-2">⚡</div>
                <div className="font-bold">Exclusive Content</div>
                <div className="text-sm text-gray-200">Revolutionary insights only</div>
              </div>
              <div className="bg-white/20 p-6 rounded-xl">
                <div className="text-2xl mb-2">🎯</div>
                <div className="font-bold">Early Access</div>
                <div className="text-sm text-gray-200">Be the first to know</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-lg mb-8 animate-pulse">
              📧 REVOLUTIONARY NEWSLETTER
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Join the AI Revolution
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              Get exclusive access to the most revolutionary AI contentbreakthrough updates
              and infinite ROI strategies. Be among the first to experience the future of AI.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-300">Exclusive breakthrough updates and revolutionary insights</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-300">Early access to AI 2025 implementation guides</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-300">Infinite ROI strategies and success stories</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 bg-pink-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-300">Quantum-neural fusion technology updates</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">50,000+</div>
                <div className="text-gray-300 text-sm">Revolutionary Subscribers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 p-8 rounded-2xl border border-purple-500/30">
              <div className="text-center mb-8">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Get Revolutionary Updates
                </h3>
                <p className="text-gray-300">
                  Join the most exclusive AI revolution newsletter
                </p>
              </div>

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
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    required
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mt-1 w-4 h-4 text-cyan-500 bg-white/10 border-white/30 rounded focus:ring-cyan-500"
                    required
                  />
                  <label htmlFor="terms" className="text-sm text-gray-300">
                    I agree to receive revolutionary AI updates and breakthrough content. 
                    I understand that this will transform my understanding of reality itself.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-lg rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Joining Revolution...
                    </div>
                  ) : (
                    'Join the Revolution'
                  )}
                </button>
              </form>

              {/* Trust indicators */}
              <div className="mt-8 text-center">
                <div className="text-sm text-gray-400 mb-4">
                  Trusted by 50,000+ revolutionary leaders
                </div>
                <div className="flex justify-center space-x-6 text-xs text-gray-500">
                  <span>🔒 Secure</span>
                  <span>⚡ Instant</span>
                  <span>🎯 Targeted</span>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-400 rounded-full animate-bounce delay-1000"></div>
          </div>
        </div>
      </div>
    </div>
  );
}