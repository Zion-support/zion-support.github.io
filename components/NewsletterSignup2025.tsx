import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle, Zap, Star, Gift } from 'lucide-react';

const NewsletterSignup2025: React.FC = () => {
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
  };

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Latest AI Breakthroughs",
      description: "Get exclusive access to cutting-edge AI research and developments"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Expert Insights",
      description: "Weekly insights from industry leaders and AI experts"
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Exclusive Resources",
      description: "Access to premium tools, templates, and implementation guides"
    }
  ];

  if (isSubscribed) {
    return (
      <section className="py-20 bg-gradient-to-r from-green-900 via-emerald-900 to-teal-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
            <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-black" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Welcome to the Future!
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              You've successfully subscribed to our newsletter. Get ready for exclusive AI insights, 
              breakthrough updates, and premium resources delivered directly to your inbox.
            </p>
            <div className="bg-white/5 rounded-2xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">What's Next?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Confirmation email sent</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>First newsletter in 24 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Exclusive resources unlocked</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsSubscribed(false)}
              className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300"
            >
              Subscribe Another Email
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Mail className="w-4 h-4" />
              NEWSLETTER SIGNUP
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Stay Ahead of the
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                AI Revolution
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join 50,000+ industry leaders who get exclusive access to the latest AI breakthroughs, 
              implementation guides, and cutting-edge insights delivered weekly.
            </p>

            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">What You'll Get:</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Weekly AI breakthrough updates</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Exclusive case studies and success stories</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Implementation guides and best practices</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Early access to new tools and resources</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Invitation to exclusive webinars and events</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side - Signup Form */}
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                Join the AI Revolution
              </h3>
              <p className="text-gray-300">
                Get started with our exclusive newsletter
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="mt-1 w-4 h-4 text-blue-600 bg-white/10 border-white/20 rounded focus:ring-blue-500"
                />
                <label htmlFor="terms" className="text-sm text-gray-300">
                  I agree to receive weekly newsletters and understand that I can unsubscribe at any time. 
                  <span className="text-blue-400 hover:underline cursor-pointer"> Privacy Policy</span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    Subscribing...
                  </>
                ) : (
                  <>
                    Subscribe Now
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-400 mb-4">
                Trusted by industry leaders
              </p>
              <div className="flex items-center justify-center gap-8 text-gray-500">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">50K+</div>
                  <div className="text-xs">Subscribers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">99%</div>
                  <div className="text-xs">Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-xs">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup2025;