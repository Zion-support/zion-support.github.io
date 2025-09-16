import React, { useState } from 'react';

const NewsletterSignup2026: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const interests = [
    { id: 'ai-consciousness', label: 'AI Consciousness', icon: '🧠' },
    { id: 'quantum-computing', label: 'Quantum Computing', icon: '⚡' },
    { id: 'neural-interfaces', label: 'Neural Interfaces', icon: '🧬' },
    { id: 'revolutionary-tech', label: 'Revolutionary Tech', icon: '🚀' },
    { id: 'breakthroughs', label: 'Breakthroughs', icon: '🌟' },
    { id: 'interactive-demos', label: 'Interactive Demos', icon: '🎮' }
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
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubscribed(true);
    setIsSubmitting(false);
  };

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-12 mb-12 border-2 border-green-200">
        <div className="text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold text-green-800 mb-4">Welcome to the Future!</h2>
          <p className="text-xl text-green-700 mb-6">
            You're now subscribed to our revolutionary technology newsletter. 
            Get ready for exclusive content and breakthrough updates!
          </p>
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">What's Next?</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <span>✨</span>
                <span>Exclusive content previews</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🚀</span>
                <span>Early access to demos</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🧠</span>
                <span>AI consciousness insights</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>⚡</span>
                <span>Quantum computing updates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-y-12"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-transparent via-white/10 to-transparent transform skew-y-12"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 EXCLUSIVE CONTENT • NEWSLETTER 2026
          </div>
          <h2 className="text-4xl font-bold mb-4">Stay Ahead of the Revolution</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Get exclusive access to our revolutionary technology content, breakthrough updates, 
            and early access to interactive demonstrations.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-4 pl-12 pr-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-white/70 text-lg"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70">
                📧
              </div>
            </div>
          </div>

          {/* Interest Selection */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-center">Select Your Interests</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {interests.map(interest => (
                <button
                  key={interest.id}
                  type="button"
                  onClick={() => handleInterestToggle(interest.id)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-300 ${
                    selectedInterests.includes(interest.id)
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30'
                  }`}
                >
                  <span className="text-lg">{interest.icon}</span>
                  <span className="text-sm font-medium">{interest.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-lg font-semibold mb-4 text-center">What You'll Get</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🚀</span>
                <span>Exclusive content previews and early access</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🧠</span>
                <span>AI consciousness insights and breakthroughs</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">⚡</span>
                <span>Quantum computing updates and research</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🎮</span>
                <span>Interactive demo invitations</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🌟</span>
                <span>Revolutionary technology announcements</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">📊</span>
                <span>Performance metrics and analytics</span>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting || !email}
              className={`px-12 py-4 rounded-lg font-bold text-xl transition-all duration-300 ${
                isSubmitting || !email
                  ? 'bg-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-2xl hover:scale-105 transform'
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Subscribing...</span>
                </div>
              ) : (
                '🌟 Join the Revolution'
              )}
            </button>
          </div>

          {/* Privacy Note */}
          <p className="text-sm text-center opacity-70">
            We respect your privacy. Unsubscribe at any time. No spam, just revolutionary content.
          </p>
        </form>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-4 right-4 text-4xl opacity-20 animate-bounce">🚀</div>
      <div className="absolute bottom-4 left-4 text-3xl opacity-20 animate-pulse">⚡</div>
      <div className="absolute top-1/2 right-8 text-2xl opacity-20 animate-ping">🧠</div>
    </div>
  );
};

export default NewsletterSignup2026;