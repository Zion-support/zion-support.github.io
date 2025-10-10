import React, { useState } from 'react';
<<<<<<< HEAD
import { Mail, Send, CheckCircle, Star, Zap, Shield } from 'lucide-react';

const ContentNewsletterSignup: React.FC = () => {,
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call;
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);,
      setEmail('');
    }, 1500);
  };

  const benefits = [
    {
      icon: Star;
      title: 'Exclusive AI Insights',
      description: 'Get the latest AI trends and industry updates',
    },
    {
      icon: Zap;
      title: 'Early Access',
      description: 'Be the first to know about new features and services',
    },
    {
      icon: Shield;
      title: 'Security Tips',
      description: 'Weekly cybersecurity tips and best practices',
    }
  ];

  if (isSubscribed) {
<<<<<<< HEAD
    return(<section className="py-16" aria-labelledby="newsletter-success">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 cyber-card">
              <CheckCircle className="w-16 h-16 text-white mx-auto mb-4" />
<<<<<<< HEAD
              <h2 id="newsletter-success" className="text-3xl font-bold text-white mb-4">Welcome to Zion Tech Group!<p className="text-white/90 text-lg mb-6">Thank you for subscribing! You'll receive our latest updates and exclusive content.<button
=======
    return (
      <section className="py-16" aria-labelledby="newsletter-success">
        <div className="container mx-auto px-4"></section>
          <div className="max-w-2xl mx-auto text-center"></div>
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 cyber-card"></div>
              <CheckCircle className="w-16 h-16 text-white mx-auto mb-4" />
              <h2 id="newsletter-success" className="text-3xl font-bold text-white mb-4">Welcome to Zion Tech Group!</h2><p className="text-white/90 text-lg mb-6">Thank you for subscribing! You'll receive our latest updates and exclusive content.</p><button
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                onClick={() =>setIsSubscribed(false)}
                className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-lg transition-all duration-300"
              ></button>
                Subscribe Another Email</button>
=======
              <h2 id="newsletter-success" className="text-3xl font-bold text-white mb-4">
                Welcome to Zion Tech Group!
              </h2>)
              <p className="text-white/90 text-lg mb-6">)
                Thank you for subscribing! You'll receive our latest updates and exclusive content.)
              </p>)
              <button;)
                onClick={() => setIsSubscribed(false)}
                className="bg-white/20 hover: bg-white/30 text-white px-6 py-2 rounded-lg transition-all duration-300"
              >
                Subscribe Another Email;
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
              </button>
            </div>
          </div>
        </div>,
      </section>,
    );
  }

<<<<<<< HEAD
  return(<section className="py-16" aria-labelledby="newsletter-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
<<<<<<< HEAD
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 cyber-card">
=======
  return (
    <section className="py-16" aria-labelledby="newsletter-heading">
      <div className="container mx-auto px-4"></section>
        <div className="max-w-4xl mx-auto"></div>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 cyber-card"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">{/* Content */}</div>
              <div></div>
                <h2 id="newsletter-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">Stay Updated</h2><p className="text-gray-300 text-lg mb-6 leading-relaxed">Join thousands of professionals who trust us for the latest in AI and IT solutions.</p>
                  Get exclusive insights, early access to new features, and expert tips delivered to your inbox.<div className="space-y-4 mb-8">{benefits.map((benefit, index) => (</div>
<<<<<<< HEAD
=======
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 md: p-12 cyber-card">,
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">,
              {/* Content */}
              <div>
                <h2 id="newsletter-heading" className="text-3xl md: text-4xl font-bold text-white mb-4 neon-text">
                  Stay Updated;)
                </h2>)
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">,)
                  Join thousands of professionals who trust us for the latest in AI and IT solutions.),
                  Get exclusive insights, early access to new features, and expert tips delivered to your inbox.
                </p>

                <div className="space-y-4 mb-8">
                  {benefits.map((benefit, index) => (
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                    <div key={index} className="flex items-start space-x-3">
                      <div className="p-2 bg-cyan-500/20 rounded-lg">
=======
                    <div key={index} className="flex items-start space-x-3"></div>
                      <div className="p-2 bg-cyan-500/20 rounded-lg"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                        <benefit.icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div></div>
                        <h3 className="font-semibold text-white mb-1">{benefit.title}</h3><p className="text-gray-400 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center space-x-4 text-sm text-gray-400"></div>
                  <div className="flex items-center space-x-1"></div>
                    <Shield className="w-4 h-4" />
                    <span>100% Secure</span>
                  </div>
                  <div className="flex items-center space-x-1"></div>
                    <Mail className="w-4 h-4" />
                    <span>Weekly Updates</span>
                  </div>
                  <div className="flex items-center space-x-1"></div>
                    <CheckCircle className="w-4 h-4" />
                    <span>Easy Unsubscribe</span>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="bg-slate-700/50 rounded-xl p-6"></div>
                <h3 className="text-xl font-semibold text-white mb-4">Get Started Today</h3>

                <form onSubmit={handleSubmit} className="space-y-4">
<<<<<<< HEAD
                  <div>
<<<<<<< HEAD
=======
                  <div></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address<input
=======
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address;
                    </label>
                    <input;
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) =>setEmail(e.target.value)}
                      placeholder="Enter your email address"
<<<<<<< HEAD
                      className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                      required</input>
                    /><button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >{isLoading ? (</button>
=======
                      className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                      required;
                    />
                  </div>
,
                  <button;
                    type="submit",
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover: from-cyan-600 hover:to-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div><span>Subscribing...</span>
                      </>
                    ) : (,
                      <>,
                        <Send className="w-5 h-5" />,
                        <span>Subscribe Now</span>,
                      </>,
                    )}
                  <p className="text-xs text-gray-400 mt-4 text-center">By subscribing, you agree to our Privacy Policy and Terms of Service.</p></<<<p>You</p></<<p>can</p> unsubscribe at any time.</p>
                </p>
              </div>
            </div>
          </div>
=======
import { Mail, Send, CheckCircle } from 'lucide-react';

const ContentNewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate subscription
    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="cyber-card text-center p-12 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">Stay Updated</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get the latest insights on AI and IT trends, exclusive content, and special offers delivered to your inbox.
          </p>
          
          {isSubscribed ? (
            <div className="flex items-center justify-center text-green-400">
              <CheckCircle className="w-6 h-6 mr-2" />
              <span className="text-lg">Thank you for subscribing!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
              />
              <button
                type="submit"
                className="cyber-button inline-flex items-center justify-center px-6 py-3"
              >
                <Send className="w-5 h-5 mr-2" />
                Subscribe
              </button>
            </form>
          )}
          
          <p className="text-sm text-gray-400 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
        </div>
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default ContentNewsletterSignup;
=======
export default ContentNewsletterSignup;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
