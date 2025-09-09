import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, CheckCircle, Bell, Zap, Shield, Users, TrendingUp, X, Gift, Star, Award } from 'lucide-react';

const benefits = [
  {
    icon: <Bell className="w-6 h-6" />,
    title: "Early Access",
    description: "Be the first to know about new features and services"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Exclusive Offers",
    description: "Special discounts and promotions for subscribers only"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Tech Insights",
    description: "Latest industry trends and technology updates"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Community",
    description: "Join our network of tech professionals and innovators"
  }
];

const stats = [
  { value: "50K+", label: "Subscribers" },
  { value: "95%", label: "Satisfaction" },
  { value: "24/7", label: "Support" },
  { value: "100%", label: "Free" }
];

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showBenefits, setShowBenefits] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your newsletter service
    console.log('Newsletter subscription:', email);
    setIsSubscribed(true);
    setEmail('');
  };

  const handleUnsubscribe = () => {
    setIsSubscribed(false);
    setEmail('');
  };

  return (
    <section className="py-24 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light relative overflow-hidden" id="newsletter">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M40 40c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.909-40 40-40 40 17.909 40 40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Mail className="w-8 h-8 text-zion-cyan" />
              <GradientHeading className="text-4xl md:text-5xl">Stay Informed & Connected</GradientHeading>
              <Mail className="w-8 h-8 text-zion-cyan" />
            </div>
            <p className="text-zion-slate-light text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto">
              Subscribe to our newsletter for the latest updates on Zion's services, trending tech news, and exclusive marketplace opportunities.
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.text}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-2 bg-zion-blue-dark/30 backdrop-blur-sm px-4 py-2 rounded-full border border-zion-purple/20"
              >
                <div className={benefit.color}>{benefit.icon}</div>
                <span className="text-zion-slate-light text-sm font-medium">{benefit.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Newsletter form */}
          <motion.div 
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <EnhancedNewsletterForm />
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            className="mt-12 pt-8 border-t border-zion-purple/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <p className="text-zion-slate-light text-sm mb-4">
              Join 50,000+ professionals who trust Zion for their tech insights
            </p>
            <div className="flex justify-center items-center gap-6 opacity-60">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-xs">No spam, ever</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-zion-cyan rounded-full animate-pulse"></div>
                <span className="text-zion-cyan text-xs">Unsubscribe anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>Industry Leader</span>
              </div>
  if (isSubscribed) {
    return (
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-4">Thank You for Subscribing!</h2>
          <p className="text-xl text-blue-100 mb-6">
            You're now part of our community. We'll keep you updated with the latest insights and updates.
          </p>
          <button
            onClick={() => setIsSubscribed(false)}
            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Subscribe Another Email
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Stay Updated with Zion Tech Group
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Get the latest insights on AI trends, technology updates, and industry best practices delivered to your inbox.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap"
            >
              Subscribe
            </button>
          </div>
        </form>
        
        <p className="text-sm text-blue-200 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Weekly Updates</h3>
            <p className="text-sm text-blue-200">Stay current with industry trends</p>
          </div>
          
          <div>
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Expert Insights</h3>
            <p className="text-sm text-blue-200">Learn from our technology experts</p>
          </div>
          
          <div>
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Early Access</h3>
            <p className="text-sm text-blue-200">Be first to know about new features</p>
          </div>
        </div>
      </div>
    </section>
  );
}