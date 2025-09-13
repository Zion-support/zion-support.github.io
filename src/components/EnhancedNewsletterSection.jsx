import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle, Gift, Star, TrendingUp, Shield, Zap } from 'lucide-react';

export const EnhancedNewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 2000);
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: "Weekly Industry Insights",
      description: "Stay ahead with the latest AI and tech trends"
    },
    {
      icon: Gift,
      title: "Exclusive Offers",
      description: "Get early access to special promotions and discounts"
    },
    {
      icon: Star,
      title: "Premium Content",
      description: "Access to exclusive whitepapers and case studies"
    },
    {
      icon: Shield,
      title: "Security Updates",
      description: "Important cybersecurity alerts and best practices"
    }
  ];

  if (isSubscribed) {
    return (
      <section className="py-20 bg-gradient-to-br from-green-500/10 to-emerald-600/10 border-t border-green-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="mb-8"
          >
            <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Welcome to Zion Tech Group!
            </h2>
            <p className="text-xl text-zion-cyan/80">
              Thank you for subscribing! Check your email for a special welcome gift and our latest insights.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20"
          >
            <h3 className="text-xl font-bold text-white mb-4">Your Welcome Gift:</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start gap-4">
                <Gift className="w-6 h-6 text-green-400 mt-1" />
                <div>
                  <h4 className="font-semibold text-white">Free AI Readiness Assessment</h4>
                  <p className="text-zion-cyan/80 text-sm">Worth $2,500 - Identify AI opportunities in your business</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Star className="w-6 h-6 text-green-400 mt-1" />
                <div>
                  <h4 className="font-semibold text-white">Premium Content Access</h4>
                  <p className="text-zion-cyan/80 text-sm">Unlock our complete library of guides and case studies</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-slate-dark to-zion-purple/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Stay Ahead with Our
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Expert Insights
              </span>
            </h2>
            
            <p className="text-xl text-zion-cyan/80 mb-8">
              Join 10,000+ technology leaders who rely on our weekly insights to make informed decisions 
              and stay competitive in the rapidly evolving tech landscape.
            </p>

            {/* Benefits grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-zion-cyan/10 rounded-full flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-zion-cyan" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{benefit.title}</h3>
                    <p className="text-zion-cyan/80 text-sm">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">10K+</div>
                <div className="text-sm text-zion-cyan/80">Subscribers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">95%</div>
                <div className="text-sm text-zion-cyan/80">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">Weekly</div>
                <div className="text-sm text-zion-cyan/80">Updates</div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Newsletter signup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Get Weekly Insights
                </h3>
                <p className="text-zion-cyan/80">
                  Join our newsletter and never miss important updates
                </p>
              </div>

              <form onSubmit={handleSubscribe} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-zion-cyan/50 focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-4 px-6 rounded-xl font-semibold hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
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

              {/* Special offer */}
              <div className="mt-6 p-4 bg-gradient-to-r from-green-500/10 to-emerald-600/10 rounded-xl border border-green-500/20">
                <div className="flex items-center gap-3">
                  <Gift className="w-5 h-5 text-green-400" />
                  <div>
                    <p className="text-sm font-semibold text-white">New Subscriber Bonus</p>
                    <p className="text-xs text-green-400">Get a free AI readiness assessment worth $2,500!</p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-zion-cyan/60 mt-4 text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-zion-cyan/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-zion-purple/20 rounded-full animate-pulse delay-100"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const ContentPromotionBanner = () => {
  const promotions = [
    {
      icon: Zap,
      title: "New: AI Transformation Guide",
      description: "Download our comprehensive guide to AI implementation",
      cta: "Download Free",
      href: "/resources/ai-transformation-guide",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Shield,
      title: "Cybersecurity Checklist",
      description: "Essential security measures for 2025",
      cta: "Get Checklist",
      href: "/resources/security-checklist",
      color: "from-green-400 to-blue-500"
    },
    {
      icon: TrendingUp,
      title: "Cloud Migration Playbook",
      description: "Step-by-step cloud migration strategy",
      cta: "Access Playbook",
      href: "/resources/cloud-migration",
      color: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-zion-slate-dark to-zion-blue-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Free Resources & Downloads
          </h2>
          <p className="text-zion-cyan/80">
            Access our collection of free guides, checklists, and templates
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {promotions.map((promo, index) => (
            <motion.a
              key={index}
              href={promo.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group block"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${promo.color} rounded-xl flex items-center justify-center`}>
                    <promo.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                      {promo.title}
                    </h3>
                    <p className="text-zion-cyan/80 text-sm mb-4">
                      {promo.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-zion-cyan font-semibold text-sm">
                      {promo.cta}
                      <Send className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};