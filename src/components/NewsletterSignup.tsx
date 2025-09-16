import React, { useState } from 'react';

interface NewsletterSignupProps {
  variant?: 'default' | 'compact' | 'floating';
  showSuccessMessage?: boolean;
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({ 
  variant = 'default', 
  showSuccessMessage = true 
}) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [interests, setInterests] = useState<string[]>([]);
  const [showInterests, setShowInterests] = useState(false);

  const interestOptions = [
    { id: 'ai-ml', label: 'AI & Machine Learning', emoji: '🧠', color: 'from-purple-600 to-pink-600' },
    { id: 'quantum', label: 'Quantum Computing', emoji: '⚛️', color: 'from-cyan-600 to-blue-600' },
    { id: 'neural', label: 'Neural Interfaces', emoji: '🧬', color: 'from-emerald-600 to-teal-600' },
    { id: 'space', label: 'Space Technology', emoji: '🚀', color: 'from-orange-600 to-red-600' },
    { id: 'biotech', label: 'Biotechnology', emoji: '🧪', color: 'from-green-600 to-emerald-600' },
    { id: 'physics', label: 'Physics Research', emoji: '⚡', color: 'from-yellow-600 to-orange-600' },
    { id: 'automation', label: 'Automation', emoji: '🤖', color: 'from-indigo-600 to-purple-600' },
    { id: 'blockchain', label: 'Blockchain', emoji: '🔗', color: 'from-gray-600 to-blue-600' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
      setInterests([]);
      setShowInterests(false);
    }, 2000);
  };

  const toggleInterest = (interestId: string) => {
    setInterests(prev => 
      prev.includes(interestId) 
        ? prev.filter(id => id !== interestId)
        : [...prev, interestId]
    );
  };

  const getSelectedInterests = () => {
    return interests.map(id => 
      interestOptions.find(option => option.id === id)?.label
    ).join(', ');
  };

  if (isSubscribed && showSuccessMessage) {
    return (
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white text-center">
        <div className="text-6xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold mb-4">Welcome to the Future!</h3>
        <p className="text-green-100 mb-4">
          You've successfully subscribed to our revolutionary technology newsletter. 
          Get ready for exclusive access to breakthrough innovations and cutting-edge research.
        </p>
        <div className="bg-white/20 rounded-lg p-4 mb-4">
          <p className="text-sm">
            <strong>Your interests:</strong> {getSelectedInterests() || 'All technologies'}
          </p>
        </div>
        <button
          onClick={() => setIsSubscribed(false)}
          className="bg-white text-green-600 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
        >
          Subscribe Another Email
        </button>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 text-white">
        <h3 className="text-xl font-bold mb-3">🚀 Stay Updated</h3>
        <form onSubmit={handleSubmit} className="flex gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/30"
            required
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-white text-purple-600 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors font-semibold disabled:opacity-50"
          >
            {isLoading ? '...' : 'Subscribe'}
          </button>
        </form>
      </div>
    );
  }

  if (variant === 'floating') {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-white shadow-2xl max-w-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold">🚀 Latest Tech News</h3>
            <button className="text-white/70 hover:text-white">×</button>
          </div>
          <p className="text-sm text-white/90 mb-4">
            Get exclusive access to breakthrough technologies and revolutionary innovations.
          </p>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/30 text-sm"
              required
            />
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-white text-purple-600 py-2 rounded-lg hover:bg-gray-100 transition-colors font-semibold disabled:opacity-50 text-sm"
            >
              {isLoading ? 'Subscribing...' : 'Get Updates'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-3xl p-12 text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center">
        <div className="inline-flex items-center px-6 py-3 bg-white/20 rounded-full text-sm font-bold mb-6">
          ✨ EXCLUSIVE ACCESS • NEWSLETTER
        </div>
        
        <h2 className="text-4xl font-bold mb-4">
          🚀 Get Exclusive Access to Revolutionary Technology
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          Join thousands of innovators, scientists, and technologists who get first access to 
          breakthrough technologies, research insights, and revolutionary innovations.
        </p>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30 text-lg"
              required
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-white text-purple-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-bold text-lg disabled:opacity-50 hover:scale-105 transform"
            >
              {isLoading ? 'Subscribing...' : 'Subscribe Now'}
            </button>
          </div>

          <div className="text-center mb-6">
            <button
              type="button"
              onClick={() => setShowInterests(!showInterests)}
              className="text-white/80 hover:text-white transition-colors text-sm underline"
            >
              {showInterests ? 'Hide' : 'Customize'} your interests
            </button>
          </div>

          {showInterests && (
            <div className="grid md:grid-cols-4 gap-4 mb-6">
              {interestOptions.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => toggleInterest(option.id)}
                  className={`p-4 rounded-xl transition-all duration-300 hover:scale-105 ${
                    interests.includes(option.id)
                      ? `bg-gradient-to-br ${option.color} text-white shadow-lg`
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  <div className="text-2xl mb-2">{option.emoji}</div>
                  <div className="text-sm font-semibold">{option.label}</div>
                </button>
              ))}
            </div>
          )}

          <div className="flex items-center justify-center space-x-6 text-sm text-white/80">
            <div className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              Free Forever
            </div>
            <div className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              No Spam
            </div>
            <div className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              Unsubscribe Anytime
            </div>
          </div>
        </form>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl mb-2">📧</div>
            <div className="font-bold mb-1">Weekly Updates</div>
            <div className="text-sm text-white/80">Latest breakthroughs delivered to your inbox</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl mb-2">🎯</div>
            <div className="font-bold mb-1">Personalized Content</div>
            <div className="text-sm text-white/80">Tailored to your technology interests</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl mb-2">🔒</div>
            <div className="font-bold mb-1">Exclusive Access</div>
            <div className="text-sm text-white/80">Early access to new features and content</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;