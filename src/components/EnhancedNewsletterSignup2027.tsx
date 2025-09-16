import React, { useState } from 'react';

const EnhancedNewsletterSignup2027: React.FC = () => {
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
  };

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl p-12 mb-12 text-white text-center">
        <div className="text-6xl mb-6">🎉</div>
        <h2 className="text-4xl font-bold mb-4">Welcome to the Future!</h2>
        <p className="text-xl mb-6">
          You're now subscribed to our revolutionary technology newsletter. 
          Get ready for exclusive access to the most advanced content.
        </p>
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">What's Next?</h3>
          <ul className="text-left space-y-2">
            <li>• 🧠 Exclusive AI breakthrough updates</li>
            <li>• ⚡ Quantum technology insights</li>
            <li>• 🧬 Neural interface developments</li>
            <li>• 🚀 Early access to new content</li>
            <li>• 💡 Expert analysis and predictions</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-12 mb-12 text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/50 to-pink-600/50 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-6xl mb-6">📧</div>
        <h2 className="text-4xl font-bold mb-4">Stay Ahead of the Revolution</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Get exclusive access to our latest revolutionary technology content, 
          breakthrough announcements, and early access to the most advanced AI systems.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 text-lg border-0 focus:ring-4 focus:ring-white/30 focus:outline-none"
              required
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? '⏳ Subscribing...' : '🚀 Subscribe Now'}
            </button>
          </div>
          
          <div className="text-sm opacity-90">
            <p>Join 50,000+ technology leaders who trust us with their innovation journey.</p>
            <p>No spam, unsubscribe anytime. We respect your privacy.</p>
          </div>
        </form>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl mb-3">🧠</div>
            <h3 className="text-lg font-bold mb-2">AI Breakthroughs</h3>
            <p className="text-sm opacity-90">Latest developments in artificial intelligence and machine learning</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-lg font-bold mb-2">Quantum Technology</h3>
            <p className="text-sm opacity-90">Revolutionary quantum computing and reality manipulation insights</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl mb-3">🧬</div>
            <h3 className="text-lg font-bold mb-2">Neural Interfaces</h3>
            <p className="text-sm opacity-90">Brain-computer interface technology and cognitive enhancement</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedNewsletterSignup2027;