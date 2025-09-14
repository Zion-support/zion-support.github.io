"use client";
'use client';

import React{ useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail
  Send
  CheckCircle
  Star
  Users
  TrendingUp,
  Shield,
  Zap
} from 'lucide-react';

const NewsletterSignup2025 = () => {
  const [emailsetEmail] = useState('');
  const [isSubscribedsetIsSubscribed] = useState(false);
  const [isLoadingsetIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve2000));
    
    setIsSubscribed(true);
    setIsLoading(false);
  };

  const benefits = [
    {
      icon: Zap,
      title: 'Exclusive AI Insights',
      description: 'Get the latest AI trends and breakthroughs delivered weekly'
    },
    {
      icon: Star,
      title: 'Premium Content Access',
      description: 'Unlock exclusive tutorialscase studiesand whitepapers'
    },
    {
      icon: TrendingUp,
      title: 'Growth Strategies',
      description: 'Learn proven strategies to scale your business with AI'
    },
    {
      icon: Users,
      title: 'Expert Community',
      description: 'Join our community of 50,000+ AI professionals and entrepreneurs'
    }
  ];

  const stats = [
    { number: '50,000+'label: 'Subscribers' },
    { number: '95%'label: 'Open Rate' },
    { number: '4.9/5'label: 'Rating' },
    { number: 'Weekly'label: 'Updates' }
  ];

  if (isSubscribed) {
    return (
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0scale: 0.8 }}
            animate={{ opacity: 1scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl shadow-2xl p-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5delay: 0.2 }}
              className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-10 h-10 text-green-600" />
            </motion.div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome to the Future! 🚀
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              You're now part of our exclusive community. Check your email for a special welcome gift!
            </p>
            
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-2">What's Next?</h3>
              <ul className="text-left space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Confirmation email with exclusive resources
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Weekly AI insights and trends
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Access to premium content library
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Invitation to our private community
                </li>
              </ul>
            </div>
            
            <button
              onClick={() => setIsSubscribed(false)}
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              Subscribe Another Email
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0x: -50 }}
            animate={{ opacity: 1x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Mail className="w-4 h-4" />
              Join 50,000+ Subscribers
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stay Ahead with
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                AI Insights
              </span>
            </h2>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Get exclusive access to the latest AI breakthroughsbusiness strategies
              and cutting-edge technology insights delivered directly to your inbox.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefitindex) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0y: 20 }}
                    animate={{ opacity: 1y: 0 }}
                    transition={{ duration: 0.6delay: index * 0.1 }}
                    className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4"
                  >
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">{benefit.title}</h3>
                      <p className="text-sm text-white/80">{benefit.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((statindex) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0scale: 0.8 }}
                  animate={{ opacity: 1scale: 1 }}
                  transition={{ duration: 0.6delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Signup Form */}
          <motion.div
            initial={{ opacity: 0x: 50 }}
            animate={{ opacity: 1x: 0 }}
            transition={{ duration: 0.8delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Get Started Today
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:ring-2 focus:ring-white/50 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-white/80 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-white/80">
                  We respect your privacy. Unsubscribe at any time. No spamever.
                </p>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Subscribe Now
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-white/80">
                Already subscribed? 
                <button className="text-yellow-300 hover:text-yellow-200 font-medium ml-1">
                  Check your preferences
                </button>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup2025;