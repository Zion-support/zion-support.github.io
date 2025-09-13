import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  CheckCircle, 
  Gift, 
  Download, 
  Sparkles,
  ArrowRight,
  Shield,
  Clock,
  Star,
  Users
} from 'lucide-react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
    }, 2000);
  };

  const incentives = [
    {
      icon: <Download className="w-6 h-6 text-green-400" />,
      title: "Free AI Implementation Guide",
      description: "Get our comprehensive 50-page guide on implementing AI in your business"
    },
    {
      icon: <Gift className="w-6 h-6 text-purple-400" />,
      title: "20% Off First Project",
      description: "Exclusive discount on your first AI or IT consulting project"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-yellow-400" />,
      title: "Weekly Tech Insights",
      description: "Stay updated with the latest trends and innovations in technology"
    },
    {
      icon: <Star className="w-6 h-6 text-blue-400" />,
      title: "Priority Support",
      description: "Get priority access to our expert team for consultations"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Subscribers", icon: <Users className="w-5 h-5" /> },
    { number: "98%", label: "Satisfaction Rate", icon: <Star className="w-5 h-5" /> },
    { number: "24/7", label: "Expert Support", icon: <Clock className="w-5 h-5" /> },
    { number: "100%", label: "Secure", icon: <Shield className="w-5 h-5" /> }
  ];

  if (isSubscribed) {
    return (
      <section className="py-20 bg-gradient-to-br from-green-900/20 to-emerald-900/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-green-800/80 to-emerald-800/80 backdrop-blur-sm rounded-2xl p-12 border border-green-500/30"
          >
            <div className="mb-8">
              <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-white mb-4">
                Welcome to the Zion Tech Group Community!
              </h2>
              <p className="text-xl text-green-100">
                Thank you for subscribing! Check your email for your welcome gifts and exclusive resources.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {incentives.slice(0, 2).map((incentive, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-green-700/50 rounded-lg p-6 border border-green-500/30"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    {incentive.icon}
                    <h3 className="text-lg font-semibold text-white">{incentive.title}</h3>
                  </div>
                  <p className="text-green-100 text-sm">{incentive.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-green-600/20 rounded-lg p-6 border border-green-400/30"
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                What's Next?
              </h3>
              <p className="text-green-100 mb-4">
                You'll receive your first newsletter within 24 hours, plus immediate access to our exclusive resources.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/resources"
                  className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-500 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Access Resources</span>
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center space-x-2 border border-green-400 text-green-400 px-6 py-3 rounded-lg font-medium hover:bg-green-400 hover:text-white transition-colors"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue-dark to-zion-slate relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(34,221,210,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(140,21,233,0.1),transparent_50%)]"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay Ahead with
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Tech Insights
              </span>
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Join 10,000+ technology leaders who trust Zion Tech Group for the latest insights, 
              exclusive resources, and expert guidance on AI, quantum computing, and emerging technologies.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center space-x-2 text-zion-cyan mb-2">
                    {stat.icon}
                    <span className="text-2xl font-bold">{stat.number}</span>
                  </div>
                  <p className="text-sm text-zion-slate-light">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Incentives */}
            <div className="space-y-4">
              {incentives.map((incentive, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-3 bg-zion-blue-dark/50 backdrop-blur-sm rounded-lg p-4 border border-zion-cyan/20"
                >
                  {incentive.icon}
                  <div>
                    <h4 className="text-white font-semibold text-sm">{incentive.title}</h4>
                    <p className="text-zion-slate-light text-xs">{incentive.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Signup Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-zion-blue-dark/80 to-zion-slate/80 backdrop-blur-sm rounded-2xl p-8 border border-zion-cyan/30 shadow-2xl shadow-zion-cyan/10"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Get Started Today
              </h3>
              <p className="text-zion-slate-light">
                Join our community and unlock exclusive resources
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-zion-slate/50 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email address"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue text-white py-4 rounded-lg font-semibold text-lg hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-zion-cyan/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Subscribing...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <span>Subscribe & Get Free Resources</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </button>

              <div className="flex items-center space-x-2 text-xs text-zion-slate-light">
                <Shield className="w-4 h-4" />
                <span>We respect your privacy. Unsubscribe at any time.</span>
              </div>
            </form>

            <div className="mt-8 pt-6 border-t border-zion-cyan/20">
              <p className="text-center text-sm text-zion-slate-light">
                Already have an account? 
                <a href="/login" className="text-zion-cyan hover:text-white transition-colors ml-1">
                  Sign in here
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;