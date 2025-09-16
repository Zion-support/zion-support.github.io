import React, { useState } from 'react';

const EnhancedNewsletterSignup2025: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate subscription
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 3000);
  };

          </p>
      <div className="py-20 bg-gradient-to-br from-green-900 via-emerald-900 to-green-900">
        <div className="container mx-auto px-4">
          <divdiv
            className="text-center max-w-2xl mx-auto"
          >
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-4xl font-bold text-white mb-4">
              Welcome to the Future! 🚀
            </h2>
            
            <p className="text-xl text-green-100 mb-8">
              Thank you for subscribing! You'll receive exclusive updates about revolutionary 
              technologies and breakthrough innovations.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">What's Next?</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-100">Confirmation email sent</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-100">Weekly tech insights</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-100">Exclusive early access</span>
                </div>
              </div>
            </div>
          </divdiv>
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
          </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="flex items-center justify-center space-x-6 text-gray-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm">No spam</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm">Unsubscribe anytime</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm">Secure</span>
                </div>
              </div>
            </div>
          </divdiv>
        </div>
      </div>
    </div>
  );
};

export default EnhancedNewsletterSignup2025;