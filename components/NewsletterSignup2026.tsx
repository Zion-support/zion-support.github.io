import React, { useState } from 'react';
import { Mail, Send, CheckCircle, Sparkles } from 'lucide-react';

export default function NewsletterSignup2026() {
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
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <CheckCircle className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">
            Welcome to the Future!
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            You're now subscribed to our exclusive 2026 content updates. 
            Get ready for the most advanced AI and quantum computing insights.
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-white mb-4">What's Next?</h3>
            <ul className="text-gray-200 space-y-2 text-left">
              <li>• Weekly AI breakthrough updates</li>
              <li>• Exclusive quantum computing insights</li>
              <li>• Early access to new content</li>
              <li>• Invitation to virtual tech events</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-8 w-8 text-cyan-400 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Stay Ahead of the Curve
            </h2>
            <Sparkles className="h-8 w-8 text-cyan-400 ml-3" />
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get exclusive access to the latest AI breakthroughs, quantum computing innovations, 
            and future technology insights. Join thousands of tech leaders who are already subscribed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Newsletter Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">
              Subscribe to 2026 Updates
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Subscribing...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Subscribe Now
                  </>
                )}
              </button>
            </form>

            <p className="text-sm text-gray-400 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>

          {/* Benefits */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                What You'll Get
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-cyan-500/20 p-2 rounded-lg mr-4">
                    <Sparkles className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Exclusive AI Insights
                    </h4>
                    <p className="text-gray-300">
                      Get the latest breakthroughs in artificial intelligence, machine learning, 
                      and neural network technologies before they go public.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-500/20 p-2 rounded-lg mr-4">
                    <Sparkles className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Quantum Computing Updates
                    </h4>
                    <p className="text-gray-300">
                      Stay informed about quantum computing developments, quantum algorithms, 
                      and their real-world applications.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-pink-500/20 p-2 rounded-lg mr-4">
                    <Sparkles className="h-6 w-6 text-pink-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Early Access Content
                    </h4>
                    <p className="text-gray-300">
                      Be the first to access new content, research papers, and technology 
                      demonstrations as they're released.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-500/20 p-2 rounded-lg mr-4">
                    <Sparkles className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Expert Analysis
                    </h4>
                    <p className="text-gray-300">
                      Receive in-depth analysis and commentary from our team of AI and 
                      quantum computing experts.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h4 className="text-lg font-semibold text-white mb-4">Join Our Community</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">50K+</div>
                  <div className="text-sm text-gray-300">Subscribers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">Weekly</div>
                  <div className="text-sm text-gray-300">Updates</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}