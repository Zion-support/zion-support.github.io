import React, { useState } from 'react';
import { Mail, Send, CheckCircle, Star, Zap, Brain } from 'lucide-react';

export default function NewsletterSignupForm() {
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
      <div className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-green-500 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
            <CheckCircle className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Welcome to the Future!
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            You're now subscribed to our exclusive newsletter. Get ready for the latest AI innovations, 
            quantum breakthroughs, and automation solutions delivered directly to your inbox.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">What's Next?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start">
                <Star className="h-6 w-6 text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Exclusive Content</h4>
                  <p className="text-gray-300 text-sm">Get early access to new content and features before anyone else.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Zap className="h-6 w-6 text-blue-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Weekly Updates</h4>
                  <p className="text-gray-300 text-sm">Stay informed with our weekly roundup of the latest developments.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Brain className="h-6 w-6 text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Expert Insights</h4>
                  <p className="text-gray-300 text-sm">Learn from industry experts and thought leaders in AI and technology.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stay Ahead of the
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {' '}Curve
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get exclusive access to the latest AI innovations, quantum computing breakthroughs, 
            and automation solutions. Join thousands of forward-thinking professionals.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Benefits */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">Why Subscribe?</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-500 p-2 rounded-lg mr-4">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Exclusive Content</h4>
                    <p className="text-gray-300">Access to premium content, early releases, and insider insights not available anywhere else.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-500 p-2 rounded-lg mr-4">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Weekly Updates</h4>
                    <p className="text-gray-300">Stay informed with our curated weekly newsletter featuring the most important developments.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-cyan-500 p-2 rounded-lg mr-4">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Expert Analysis</h4>
                    <p className="text-gray-300">Deep insights from industry experts and thought leaders in AI, quantum computing, and automation.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Signup Form */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Join Our Community</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-4 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Subscribing...
                    </>
                  ) : (
                    <>
                      Subscribe Now
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-400">
                  By subscribing, you agree to our privacy policy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-6">Join thousands of professionals who trust us</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-white">TechCorp</div>
            <div className="text-2xl font-bold text-white">InnovateLab</div>
            <div className="text-2xl font-bold text-white">FutureTech</div>
            <div className="text-2xl font-bold text-white">QuantumAI</div>
            <div className="text-2xl font-bold text-white">AutoFlow</div>
          </div>
        </div>
      </div>
    </div>
  );
}