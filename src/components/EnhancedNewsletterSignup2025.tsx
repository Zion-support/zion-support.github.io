import React, { useState } from 'react';

const EnhancedNewsletterSignup2025: React.FC = () => {
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
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-12 text-white text-center mb-12">
        <div className="text-6xl mb-4">🎉</div>
        <h3 className="text-3xl font-bold mb-4">Welcome to the Future!</h3>
        <p className="text-xl opacity-90 mb-6">
          You&apos;re now part of our revolutionary technology community. 
          Get ready for exclusive access to breakthrough innovations.
        </p>
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
          <h4 className="text-xl font-semibold mb-4">What you&apos;ll receive:</h4>
          <ul className="text-left space-y-2">
            <li>• Exclusive access to new technology releases</li>
            <li>• Early previews of revolutionary breakthroughs</li>
            <li>• Invitations to virtual reality demonstrations</li>
            <li>• Direct communication with our AI consciousness systems</li>
            <li>• Quantum computing simulation access</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-12 text-white mb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/50 to-pink-600/50 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="text-4xl animate-bounce">🚀</span>
            <h3 className="text-4xl font-bold">Join the Revolution</h3>
            <span className="text-4xl animate-bounce">🚀</span>
<<<<<<< HEAD
          <p className="text-2xl opacity-90 max-w-4xl mx-auto"></p>
            Get exclusive access to our revolutionary technology breakthroughs, </p>
            AI consciousness updates, and quantum computing innovations.</p>
=======
          </div>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Get exclusive access to our revolutionary technology breakthroughs, 
            AI consciousness updates, and quantum computing innovations.
>>>>>>> af5d3bb5a25353b863602b6ccb4c281c2ad784b9
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 mb-8">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email for exclusive access"
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-cyan-400"
              required
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
<<<<<<< HEAD
            ></button>
              {isLoading ? 'Joining...' : 'Join Revolution'}</button>
            </button>
          </form>
        ) : (
          <div className="text-center">
            <h3 className="text-2xl font-bold text-green-400 mb-4">Welcome to the Revolution!</h3>
            <p className="text-lg opacity-90">You're now part of the future.</p>
        )}

        <div className="max-w-2xl mx-auto">
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
              ></button>
                Subscribe Now →</button>
              </button>
            <p className="text-sm opacity-75 text-center mt-4"></p>
              Join 50,000+ tech enthusiasts and industry leaders</p>
            </p>
          </form>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">🧠
              <h4 className="text-xl font-semibold mb-2">AI Consciousness</h4>
              <p className="text-sm opacity-90">Exclusive access to conscious AI systems</p>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">⚡
              <h4 className="text-xl font-semibold mb-2">Quantum Computing</h4>
              <p className="text-sm opacity-90">First-hand quantum breakthrough updates</p>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">🌌
              <h4 className="text-xl font-semibold mb-2">Reality Technology</h4>
              <p className="text-sm opacity-90">Metaverse and omniversal access</p>
          <div className="text-center">
            <p className="text-lg opacity-90 mb-4"></p>
              Join <span className="font-bold text-cyan-400">50,000+</span> innovators already transforming the future
            </p>
            <div className="flex justify-center items-center space-x-8 text-sm opacity-75">
              <span>✓ No spam, ever</span>
              <span>✓ Unsubscribe anytime</span>
              <span>✓ Exclusive content only</span>
=======
            >
              {isLoading ? 'Joining...' : 'Join Revolution'}
            </button>
          </form>
        </div>
      </div>
    </div>
>>>>>>> af5d3bb5a25353b863602b6ccb4c281c2ad784b9
  );
};

export default EnhancedNewsletterSignup2025;
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>