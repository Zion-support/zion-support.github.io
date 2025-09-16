import React, { useState } from 'react';

const EnhancedNewsletterSignup2026: React.FC = () => {
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

  const benefits = [
    "Exclusive access to revolutionary technology demos",
    "Early notifications about breakthrough innovations",
    "Interactive content and virtual experiences",
    "Direct access to our AI consciousness research",
    "Quantum computing simulation access",
    "Neural interface technology updates"
  ];

  if (isSubscribed) {
    return (
      <divdiv
        className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-12 text-white text-center"
      >
        <div className="text-6xl mb-4">🎉</div>
        <h2 className="text-3xl font-bold mb-4">Welcome to the Future!</h2>
        <p className="text-xl opacity-90 mb-6">
          You're now part of our revolutionary technology community. 
          Get ready to experience the future!
        </p>
        <button
          onClick={() => setIsSubscribed(false)}
          className="bg-white text-green-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
        >
          Subscribe Another Email
        </button>
      </divdiv>
    );
  }

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-16">
      <div className="container mx-auto px-4">
        <divdiv
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            📧 EXCLUSIVE ACCESS 2026
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Join the Revolutionary Technology Community
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Get exclusive access to our breakthrough technologies, interactive demos, 
            and be the first to experience the future of innovation.
          </p>
        </divdiv>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Benefits Section */}
          <divdiv
          >
            <h3 className="text-3xl font-bold mb-6">What You'll Get:</h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <divdiv
                  key={index}
                  className="flex items-center space-x-3"
                >
                  <span className="text-cyan-400 text-xl">✨</span>
                  <span className="text-lg">{benefit}</span>
                </divdiv>
              ))}
            </div>
          </divdiv>

          {/* Newsletter Signup Form */}
          <divdiv
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Get Started Now</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Subscribing...</span>
                  </div>
                ) : (
                  '🚀 Join the Revolution'
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm opacity-80">
                By subscribing, you agree to receive updates about our revolutionary technologies. 
                Unsubscribe anytime.
              </p>
            </div>
          </divdiv>
        </div>

        {/* Additional Features */}
        <divdiv
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Exclusive Demos",
              description: "Access to interactive technology demonstrations",
              icon: "🎮"
            },
            {
              title: "Early Access",
              description: "Be the first to experience breakthrough innovations",
              icon: "⚡"
            },
            {
              title: "Community Access",
              description: "Join our community of technology pioneers",
              icon: "👥"
            }
          ].map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
              <p className="text-white/80">{feature.description}</p>
            </div>
          ))}
        </divdiv>
      </div>
    </div>
  );
};

export default EnhancedNewsletterSignup2026;