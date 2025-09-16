import React, { useState } from 'react';

const EnhancedNewsletterSignup2025: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
<<<<<<< HEAD
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 2000);
  };

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-4xl font-bold mb-4">Welcome to the Future!</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            You're now part of our exclusive community. Get ready for revolutionary updates!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-cyan-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 EXCLUSIVE ACCESS • 2025 REVOLUTIONARY TECH
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Join the Revolutionary Tech Community
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Get exclusive access to the latest breakthroughs in AI consciousness, quantum computing, 
              neural interfaces, and consciousness transfer technology.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold mb-2 text-purple-300">AI Consciousness Updates</h3>
              <p className="text-purple-100 text-sm">
                Be the first to know about breakthroughs in artificial consciousness and self-aware AI systems.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2 text-cyan-300">Quantum Computing News</h3>
              <p className="text-cyan-100 text-sm">
                Stay updated on quantum supremacy achievements and reality manipulation technologies.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30">
              <div className="text-4xl mb-4">🧬</div>
              <h3 className="text-xl font-bold mb-2 text-emerald-300">Neural Interface Tech</h3>
              <p className="text-emerald-100 text-sm">
                Get early access to neural interface developments and thought-controlled technology.
              </p>
            </div>
          </div>

          {/* Newsletter Signup Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold mb-6">Get Revolutionary Updates</h3>
            <p className="text-lg opacity-90 mb-8">
              Join 50,000+ pioneers who are already experiencing the future of technology
            </p>
            
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-lg bg-white/20 backdrop-blur-sm text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Subscribing...' : 'Join the Revolution'}
                </button>
              </div>
              
              <p className="text-sm opacity-70">
                By subscribing, you agree to receive revolutionary tech updates. Unsubscribe anytime.
              </p>
            </form>
          </div>

          {/* Social Proof */}
          <div className="mt-12">
            <p className="text-lg opacity-90 mb-6">Trusted by pioneers worldwide</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-2xl font-bold">50K+</div>
              <div className="text-2xl font-bold">Subscribers</div>
              <div className="text-2xl font-bold">100+</div>
              <div className="text-2xl font-bold">Countries</div>
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-2xl font-bold">Updates</div>
            </div>
=======
    // Simulate subscription
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="text-4xl animate-pulse">📧</span>
            <h2 className="text-3xl font-bold">Stay Updated with Revolutionary Tech</h2>
            <span className="text-4xl animate-pulse">📧</span>
          </div>
          <p className="text-xl opacity-90 mb-6 max-w-3xl mx-auto">
            Get exclusive access to the latest technology breakthroughs, AI innovations, 
            space exploration updates, and biotech revolutions delivered to your inbox
          </p>
        </div>

        {!isSubscribed ? (
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-purple-500"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-lg hover:scale-105"
              >
                Subscribe Now →
              </button>
            </div>
            <p className="text-sm opacity-75 text-center mt-4">
              Join 50,000+ tech enthusiasts and industry leaders
            </p>
          </form>
        ) : (
          <div className="text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold mb-2">Welcome to the Future!</h3>
            <p className="text-lg opacity-90">
              You're now subscribed to our revolutionary tech newsletter. Get ready for amazing content!
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="text-center">
            <div className="text-3xl mb-2">🚀</div>
            <h3 className="text-lg font-semibold mb-2">Latest Breakthroughs</h3>
            <p className="text-sm opacity-90">Get first access to revolutionary technology announcements</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🧠</div>
            <h3 className="text-lg font-semibold mb-2">AI Insights</h3>
            <p className="text-sm opacity-90">Exclusive AI research and development updates</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🌌</div>
            <h3 className="text-lg font-semibold mb-2">Space Updates</h3>
            <p className="text-sm opacity-90">Space exploration missions and cosmic discoveries</p>
>>>>>>> cursor/create-and-deploy-new-content-9601
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedNewsletterSignup2025;