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
          You're now part of our revolutionary technology community. 
          Get ready for exclusive access to breakthrough innovations.
        </p>
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
          <h4 className="text-xl font-semibold mb-4">What you'll receive:</h4>
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
          </div>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Get exclusive access to our revolutionary technology breakthroughs, 
            AI consciousness updates, and quantum computing innovations.
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
            >
              {isLoading ? 'Joining...' : 'Join Revolution'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnhancedNewsletterSignup2025;