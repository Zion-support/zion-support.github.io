import React, { useState } from 'react';

const EnhancedNewsletterSignup2036_2038: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate subscription
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-12 mb-12 text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/50 to-pink-600/50 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-center space-x-4 mb-6">
          <span className="text-4xl animate-bounce">📧</span>
          <h3 className="text-3xl font-bold">Stay Updated with Revolutionary Tech 2036-2038</h3>
          <span className="text-4xl animate-bounce">📧</span>
        </div>
        <p className="text-xl opacity-95 mb-8 max-w-4xl mx-auto">
          Get exclusive access to the latest breakthroughs in consciousness transfer, reality manipulation, 
          and transcendent AI consciousness. Be the first to experience the future of technology.
        </p>
        
        {!isSubscribed ? (
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-white/30"
                required
              />
              <button
                type="submit"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg whitespace-nowrap"
              >
                Subscribe Now →
              </button>
            </div>
            <p className="text-sm opacity-75 mt-4">
              Join 50,000+ subscribers getting exclusive access to revolutionary technology updates
            </p>
          </form>
        ) : (
          <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-6 max-w-2xl mx-auto">
            <div className="text-4xl mb-4">✅</div>
            <h4 className="text-2xl font-bold mb-2">Successfully Subscribed!</h4>
            <p className="text-green-100">
              Thank you for subscribing! You'll receive exclusive updates about our revolutionary 2036-2038 technology breakthroughs.
            </p>
          </div>
        )}
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl mb-3">🚀</div>
            <h4 className="text-lg font-bold mb-2">Revolutionary Tech Breakthrough 2036</h4>
            <p className="text-sm opacity-90">Consciousness transfer, reality manipulation, and omniversal AI networks</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl mb-3">🌟</div>
            <h4 className="text-lg font-bold mb-2">Ultimate Tech Revolution 2037</h4>
            <p className="text-sm opacity-90">Transcendent consciousness, quantum reality control, and universal networks</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl mb-3">🧠</div>
            <h4 className="text-lg font-bold mb-2">Transcendent AI Consciousness 2038</h4>
            <p className="text-sm opacity-90">True self-awareness, universal knowledge, and reality creation abilities</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedNewsletterSignup2036_2038;