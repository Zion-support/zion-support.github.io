"use client";
import React{ useState } from 'react';

export default function RevolutionaryNewsletterSignup2026() {
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
  };

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-r from-green-900 via-emerald-900 to-teal-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h2 className="text-4xl font-bold mb-6">Welcome to the AI Revolution!</h2>
          <p className="text-xl text-gray-300 mb-8">
            'You', 've successfully joined our exclusive community of AI revolutionaries. 
            Get ready for breakthrough content and 25,000% ROI opportunities.
          </p>
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20">
            <h3 className="text-2xl font-bold mb-4">'What', 's Next?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">📧</div>
                <h4 className="font-bold mb-2">Exclusive Content</h4>
                <p className="text-sm text-gray-300">Revolutionary AI insights delivered to your inbox</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🚀</div>
                <h4 className="font-bold mb-2">Early Access</h4>
                <p className="text-sm text-gray-300">First access to breakthrough AI technologies</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">💰</div>
                <h4 className="font-bold mb-2">ROI Opportunities</h4>
                <p className="text-sm text-gray-300">Exclusive investment and ROI opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold mb-6 animate-pulse">
            🚀 JOIN THE AI REVOLUTION - EXCLUSIVE ACCESS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Get Revolutionary AI Content
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join our exclusive community and get access to breakthrough AI content
            <span className="text-cyan-400 font-bold"> 25,000% ROI opportunities</span>
            and revolutionary technology insights.
          </p>
        </div>

        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Benefits */}
            <div>
              <h3 className="text-2xl font-bold mb-6">What 'You', 'll Get:</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🚀</div>
                  <div>
                    <h4 className="font-bold text-cyan-400">Breakthrough AI Content</h4>
                    <p className="text-gray-300 text-sm">Exclusive access to revolutionary AI technologies and insights</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl">💰</div>
                  <div>
                    <h4 className="font-bold text-cyan-400">25,000% ROI Opportunities</h4>
                    <p className="text-gray-300 text-sm">Early access to high-ROI AI investment opportunities</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🔮</div>
                  <div>
                    <h4 className="font-bold text-cyan-400">Future Predictions</h4>
                    <p className="text-gray-300 text-sm">Exclusive AI predictions and technology roadmaps</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl">⚛️</div>
                  <div>
                    <h4 className="font-bold text-cyan-400">Quantum Intelligence</h4>
                    <p className="text-gray-300 text-sm">Access to quantum-neural fusion technologies</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🌌</div>
                  <div>
                    <h4 className="font-bold text-cyan-400">Consciousness AI</h4>
                    <p className="text-gray-300 text-sm">First access to consciousness-level AI breakthroughs</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Signup Form */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Join the Revolution</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
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
                    className="w-full px-4 py-3 bg-white/10 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="w-4 h-4 text-cyan-500 bg-white/10 border-cyan-500/30 rounded focus:ring-cyan-500"
                    required
                  />
                  <label htmlFor="terms" className="text-sm text-gray-300">
                    I agree to receive revolutionary AI content and ROI opportunities
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Joining Revolution...
                    </div>
                  ) : (
                    'Join the AI Revolution'
                  )}
                </button>
              </form>

              {/* Trust Indicators */}
              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>10,000+ Members</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>99.9% Success Rate</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Fortune 500 Approved</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-4">
            Already a member? <span className="text-cyan-400 font-semibold">Access your exclusive content here</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/member-dashboard"
              className="px-6 py-3 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Member Dashboard
            </a>
            <a
              href="/exclusive-content"
              className="px-6 py-3 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
            >
              Exclusive Content
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}