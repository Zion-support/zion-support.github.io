import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle, Star, Zap } from 'lucide-react';

const ContentNewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
      <section className="py-16 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Thank You!</h2>
            <p className="text-lg text-gray-300 mb-6">
              You've successfully subscribed to our newsletter. You'll receive the latest updates on AI and IT solutions.
            </p>
            <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
              <p className="text-green-300 text-sm">
                🎉 Welcome bonus: Get 20% off your first AI consultation!
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Stay Ahead with AI Insights
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Get exclusive access to the latest AI trends, case studies, and industry insights delivered directly to your inbox.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="text-gray-300">Weekly AI market analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">Exclusive case studies and success stories</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">Early access to new product launches</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Join 10,000+ Subscribers
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    required
                    className="mt-1 w-4 h-4 text-cyan-500 bg-slate-700 border-gray-600 rounded focus:ring-cyan-400"
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-400">
                    I agree to receive marketing communications and understand that I can unsubscribe at any time.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Subscribing...</span>
                    </>
                  ) : (
                    <>
                      <span>Subscribe Now</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>

              <p className="text-xs text-gray-500 text-center mt-4">
                No spam, ever. Unsubscribe anytime with one click.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentNewsletterSignup;