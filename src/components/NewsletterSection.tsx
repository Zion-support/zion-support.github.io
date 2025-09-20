import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Mail, CheckCircle, ArrowRight, Bell, TrendingUp, Zap } from "lucide-react";

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };

  const benefits = [
    {
      icon: Bell,
      title: "Latest Updates",
      description: "Stay informed about new services and features"
    },
    {
      icon: TrendingUp,
      title: "Industry Insights",
      description: "Get exclusive access to tech trends and analysis"
    },
    {
      icon: Zap,
      title: "Early Access",
      description: "Be the first to know about beta programs and launches"
    }
  ];

  if (isSubscribed) {
    return (
      <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-2xl"
          >
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Welcome to the Zion Tech Group Community!
            </h3>
            <p className="text-gray-600 mb-6">
              Thank you for subscribing. You'll receive our latest updates and insights directly in your inbox.
            </p>
            <button
              onClick={() => setIsSubscribed(false)}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Subscribe Another Email
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">Stay Ahead with Our Newsletter</h2>
                <p className="text-blue-200">Join 10,000+ tech professionals</p>
              </div>
            </div>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Get exclusive access to cutting-edge AI insights, industry trends, and early access to our latest innovations. 
              No spam, just pure value.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{benefit.title}</h4>
                    <p className="text-gray-400 text-sm">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Newsletter Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Get Started Today
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Subscribing...
                  </>
                ) : (
                  <>
                    Subscribe Now
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              <p className="text-xs text-gray-500 text-center">
                By subscribing, you agree to our Privacy Policy. Unsubscribe at any time.
              </p>
            </form>

            {/* Social Proof */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 text-center mb-4">
                Trusted by leading companies worldwide
              </p>
              <div className="flex justify-center items-center gap-8 opacity-60">
                <div className="text-lg font-bold text-gray-400">Microsoft</div>
                <div className="text-lg font-bold text-gray-400">Google</div>
                <div className="text-lg font-bold text-gray-400">Amazon</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;