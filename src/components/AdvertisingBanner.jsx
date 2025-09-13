import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Zap, Shield, Cloud, Brain } from 'lucide-react';

export const AdvertisingBanner = () => {
  const features = [
    { icon: Brain, text: "AI-Powered Solutions" },
    { icon: Shield, text: "Advanced Security" },
    { icon: Cloud, text: "Cloud Automation" },
    { icon: Zap, text: "Lightning Fast" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden bg-gradient-to-r from-zion-blue via-zion-cyan to-zion-purple"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-4 left-4 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-100"></div>
        <div className="absolute bottom-4 left-8 w-1.5 h-1.5 bg-white/25 rounded-full animate-pulse delay-200"></div>
        <div className="absolute bottom-8 right-4 w-2 h-2 bg-white/20 rounded-full animate-pulse delay-300"></div>
      </div>

      <div className="relative px-4 py-6 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Main content */}
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                  🚀 Transform Your Business with 
                  <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                    Revolutionary AI & Cloud Solutions
                  </span>
                </h2>
                <p className="text-lg text-white/90 mb-6 max-w-2xl">
                  Join 500+ companies already saving 40-70% on costs while increasing productivity by 300%. 
                  Get started with our AI-powered automation suite today!
                </p>
              </motion.div>

              {/* Feature badges */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-3 mb-6 justify-center lg:justify-start"
              >
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                    <feature.icon className="w-4 h-4 text-white" />
                    <span className="text-sm font-medium text-white">{feature.text}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTA buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-2 bg-white text-zion-blue px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-colors shadow-lg hover:shadow-xl"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a 
                  href="/services" 
                  className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors"
                >
                  View Our Services
                </a>
              </motion.div>
            </div>

            {/* Stats section */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row lg:flex-col gap-6 lg:min-w-[300px]"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">500+</div>
                <div className="text-sm text-white/80">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">300%</div>
                <div className="text-sm text-white/80">Productivity Boost</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">70%</div>
                <div className="text-sm text-white/80">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">99.9%</div>
                <div className="text-sm text-white/80">Uptime Guarantee</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom wave effect */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-8 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor" opacity="0.1"></path>
        </svg>
      </div>
    </motion.div>
  );
};

export const PromotionalSection = () => {
  const promotions = [
    {
      title: "🎯 Limited Time Offer",
      subtitle: "Get 3 Months Free",
      description: "Start your AI transformation journey with 3 months of free service on any AI automation package",
      cta: "Claim Offer",
      href: "/contact",
      badge: "Popular",
      gradient: "from-orange-400 to-red-500"
    },
    {
      title: "⚡ Quick Setup Special",
      subtitle: "Deploy in 48 Hours",
      description: "Fast-track your cloud automation with our express deployment service",
      cta: "Get Started",
      href: "/services",
      badge: "Fast",
      gradient: "from-green-400 to-blue-500"
    },
    {
      title: "🛡️ Security First",
      subtitle: "Free Security Audit",
      description: "Get a comprehensive security assessment worth $5,000 absolutely free",
      cta: "Book Audit",
      href: "/contact",
      badge: "Secure",
      gradient: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Special Offers & Promotions
          </h2>
          <p className="text-xl text-zion-cyan/80 max-w-2xl mx-auto">
            Don't miss out on these exclusive deals designed to accelerate your digital transformation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {promotions.map((promo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
                {/* Badge */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
                    {promo.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${promo.gradient} mb-6`}>
                    <span className="text-2xl">✨</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{promo.title}</h3>
                  <h4 className="text-2xl font-bold text-zion-cyan mb-4">{promo.subtitle}</h4>
                  <p className="text-zion-cyan/80 mb-6">{promo.description}</p>
                  
                  <a 
                    href={promo.href}
                    className={`inline-flex items-center gap-2 bg-gradient-to-r ${promo.gradient} text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105`}
                  >
                    {promo.cta}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/5 to-zion-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-zion-cyan/80 mb-6">
            Questions about our offers? Our experts are here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-zion-cyan text-zion-blue-dark px-8 py-4 rounded-full font-semibold hover:bg-zion-cyan/90 transition-colors"
            >
              <Star className="w-5 h-5" />
              Speak with an Expert
            </a>
            <a 
              href="tel:+13024640950" 
              className="inline-flex items-center gap-2 border-2 border-zion-cyan text-zion-cyan px-8 py-4 rounded-full font-semibold hover:bg-zion-cyan/10 transition-colors"
            >
              +1 302 464 0950
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};