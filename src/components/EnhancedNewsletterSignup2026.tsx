import React, { useState } from 'react';

const EnhancedNewsletterSignup2026: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const interestOptions = [
    { id: 'ai', label: 'AI Consciousness', icon: '🧠', color: 'from-purple-600 to-pink-600' },
    { id: 'quantum', label: 'Quantum Computing', icon: '⚡', color: 'from-cyan-600 to-blue-600' },
    { id: 'neural', label: 'Neural Interfaces', icon: '🧬', color: 'from-emerald-600 to-teal-600' },
    { id: 'space', label: 'Space Technology', icon: '🚀', color: 'from-indigo-600 to-purple-600' },
    { id: 'synthetic', label: 'Synthetic Intelligence', icon: '🤖', color: 'from-rose-600 to-orange-600' },
    { id: 'updates', label: 'General Updates', icon: '📧', color: 'from-gray-600 to-gray-800' }
  ];

  const handleInterestToggle = (interestId: string) => {
    setSelectedInterests(prev => 
      prev.includes(interestId) 
        ? prev.filter(id => id !== interestId)
        : [...prev, interestId]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || selectedInterests.length === 0) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubscribed(true);
    setIsLoading(false);
  };

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/20 max-w-2xl mx-auto">
            <div className="text-8xl mb-6">🎉</div>
            <h2 className="text-4xl font-bold mb-6">Welcome to the Future!</h2>
            <p className="text-xl opacity-90 mb-8">
              You've successfully subscribed to our revolutionary technology newsletter. 
              Get ready for exclusive insights into the latest breakthroughs!
            </p>
            <div className="bg-white/10 rounded-lg p-6 mb-8">
              <h3 className="text-2xl font-bold mb-4">What's Next?</h3>
              <ul className="text-left space-y-2">
                <li>• Weekly technology insights and breakthroughs</li>
                <li>• Exclusive access to new product launches</li>
                <li>• Invitations to virtual technology demonstrations</li>
                <li>• Early access to beta testing programs</li>
              </ul>
            </div>
            <button 
              onClick={() => setIsSubscribed(false)}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold"
            >
              Subscribe Another Email
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              📧 ENHANCED NEWSLETTER 2026
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Stay Ahead of the Revolution
            </h2>
            <p className="text-2xl opacity-90 max-w-3xl mx-auto">
              Get exclusive access to the latest breakthroughs in AI consciousness, quantum computing, 
              neural interfaces, and space technology
            </p>
          </div>

          {/* Main Form */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Email Input */}
              <div>
                <label className="block text-2xl font-bold mb-4">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-xl"
                  required
                />
              </div>

              {/* Interest Selection */}
              <div>
                <label className="block text-2xl font-bold mb-6">Select Your Interests</label>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {interestOptions.map((interest) => (
                    <button
                      key={interest.id}
                      type="button"
                      onClick={() => handleInterestToggle(interest.id)}
                      className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                        selectedInterests.includes(interest.id)
                          ? `bg-gradient-to-r ${interest.color} text-white border-transparent shadow-2xl scale-105`
                          : 'bg-white/10 border-white/30 hover:bg-white/20'
                      }`}
                    >
                      <div className="text-4xl mb-3">{interest.icon}</div>
                      <div className="font-bold text-lg">{interest.label}</div>
                    </button>
                  ))}
                </div>
                {selectedInterests.length === 0 && (
                  <p className="text-red-400 mt-2">Please select at least one interest</p>
                )}
              </div>

              {/* Benefits */}
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4">What You'll Get</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span>Weekly technology insights</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>Exclusive product launches</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                      <span>Virtual demonstrations</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span>Beta testing access</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                      <span>Expert interviews</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
                      <span>Industry reports</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isLoading || !email || selectedInterests.length === 0}
                  className={`px-12 py-4 rounded-lg font-bold text-xl transition-all duration-300 ${
                    isLoading || !email || selectedInterests.length === 0
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-cyan-500 to-purple-500 hover:shadow-2xl hover:scale-105'
                  }`}
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Subscribing...</span>
                    </div>
                  ) : (
                    'Join the Revolution →'
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 text-center">
            <p className="text-lg opacity-80 mb-6">Trusted by 50,000+ innovators worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold">Fortune 500</div>
              <div className="text-2xl font-bold">NASA</div>
              <div className="text-2xl font-bold">MIT</div>
              <div className="text-2xl font-bold">Google</div>
              <div className="text-2xl font-bold">Tesla</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedNewsletterSignup2026;