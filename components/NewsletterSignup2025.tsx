import React, { useState } from 'react';

export default function NewsletterSignup2025() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubscribed(true);
    setEmail('');
  };

  if (isSubscribed) {
    return (
      <section className="py-20 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <CheckCircle className="w-16 h-16 mx-auto mb-6 text-green-200" />
            <h2 className="text-4xl font-bold mb-4">Welcome to the Future!</h2>
            <p className="text-xl mb-8 text-green-100">
              You're now subscribed to our exclusive 2025 AI Innovation newsletter.
            </p>
            <button
              onClick={() => setIsSubscribed(false)}
              className="text-green-200 hover:text-white font-medium"
            >
              Subscribe Another Email
            </button>
          </motion.div>
        </div>
        <h3 className="text-xl font-semibold text-green-900 mb-2">
          Successfully Subscribed!
        </h3>
        <p className="text-green-700">
          Thank you for subscribing. You'll receive our latest AI insights and updates.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Ahead with AI Insights
          </h2>
          <p className="text-xl opacity-90">
            Get exclusive access to the latest AI innovations, industry trends, and business transformation strategies.
          </p>
        </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Join the AI Revolution 2025
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Get exclusive access to cutting-edge AI insights, breakthrough technologies, and future predictions that will transform your business.
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <Zap className="w-5 h-5 text-yellow-300" />
                <span className="text-sm">Latest AI Trends</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-green-300" />
                <span className="text-sm">Privacy First</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-blue-300" />
                <span className="text-sm">Expert Community</span>
              </div>
              <div className="flex items-center space-x-3">
                <TrendingUp className="w-5 h-5 text-pink-300" />
                <span className="text-sm">Growth Insights</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Signup Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            <div className="text-center mb-6">
              <Star className="w-8 h-8 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-2xl font-bold mb-2">Subscribe Now</h3>
              <p className="text-purple-100">Join 10,000+ innovators</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300"
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-3 rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black"></div>
                    <span>Subscribing...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Join the Revolution</span>
                  </>
                )}
              </button>
            </form>

            <p className="text-xs text-purple-200 text-center mt-4">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}