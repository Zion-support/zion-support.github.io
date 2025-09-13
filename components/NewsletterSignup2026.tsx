'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Send, 
  Check, 
  Star, 
  Users, 
  Zap, 
  Brain, 
  Target,
  Award,
  Globe,
  Rocket,
  Shield,
  Lightbulb,
  ArrowRight,
  Sparkles,
  Crown,
  Flame,
  TrendingUp,
  Eye,
  Bookmark,
  Share2,
  Download,
  Play,
  ChevronRight,
  X,
  RefreshCw,
  Grid,
  List,
  SlidersHorizontal,
  Bell,
  Gift,
  Lock,
  Shield as ShieldIcon
} from 'lucide-react';

const NewsletterSignup2026 = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const interestOptions = [
    { id: 'ai-breakthroughs', name: 'AI Breakthroughs', icon: Brain, color: 'from-blue-500 to-purple-600' },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Zap, color: 'from-green-500 to-teal-600' },
    { id: 'neural-interfaces', name: 'Neural Interfaces', icon: Target, color: 'from-orange-500 to-red-600' },
    { id: 'autonomous-systems', name: 'Autonomous Systems', icon: Rocket, color: 'from-purple-500 to-indigo-600' },
    { id: 'future-predictions', name: 'Future Predictions', icon: Lightbulb, color: 'from-yellow-500 to-orange-600' },
    { id: 'business-ai', name: 'Business AI', icon: Award, color: 'from-pink-500 to-rose-600' },
    { id: 'tech-trends', name: 'Tech Trends', icon: TrendingUp, color: 'from-cyan-500 to-blue-600' },
    { id: 'content-discovery', name: 'Content Discovery', icon: Eye, color: 'from-indigo-500 to-purple-600' }
  ];

  const benefits = [
    {
      icon: Sparkles,
      title: "Exclusive AI Content",
      description: "Get early access to breakthrough AI research and revolutionary content"
    },
    {
      icon: Crown,
      title: "Premium Insights",
      description: "Receive detailed analysis and predictions from leading AI experts"
    },
    {
      icon: Flame,
      title: "Trending Updates",
      description: "Stay ahead with the latest trends and developments in AI technology"
    },
    {
      icon: Shield,
      title: "Privacy Protected",
      description: "Your data is secure with enterprise-grade encryption and privacy protection"
    }
  ];

  const stats = [
    { number: "50K+", label: "Subscribers", icon: Users },
    { number: "99.9%", label: "Satisfaction", icon: Star },
    { number: "10K+", label: "Content Pieces", icon: Bookmark },
    { number: "24/7", label: "Updates", icon: Bell }
  ];

  const handleInterestToggle = (interestId) => {
    setSelectedInterests(prev => 
      prev.includes(interestId) 
        ? prev.filter(id => id !== interestId)
        : [...prev, interestId]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubscribed(true);
    setShowSuccess(true);
    setIsLoading(false);
    
    // Hide success message after 5 seconds
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16">
      {/* Success Message */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3"
          >
            <Check className="w-6 h-6" />
            <span className="font-semibold">Successfully subscribed to newsletter!</span>
            <button
              onClick={() => setShowSuccess(false)}
              className="text-white/80 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-3xl overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>

        <div className="relative z-10">
          {/* Header */}
          <div className="text-center py-16 px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold mb-6"
            >
              <Crown className="w-4 h-4 text-yellow-400" />
              <Flame className="w-4 h-4 text-orange-400" />
              NEWSLETTER 2026
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Stay Ahead of the
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> AI Revolution</span>
            </h2>
            
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Get exclusive access to breakthrough AI content, quantum computing innovations, 
              and future predictions delivered directly to your inbox. Join 50,000+ professionals 
              transforming their businesses with AI.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-blue-200 text-sm">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Newsletter Form */}
          <div className="bg-white/10 backdrop-blur-sm mx-8 rounded-2xl p-8 mb-8">
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Email Input */}
                <div className="text-center">
                  <div className="relative max-w-md mx-auto">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                    />
                  </div>
                </div>

                {/* Interest Selection */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 text-center">
                    What interests you most? (Select all that apply)
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {interestOptions.map((interest) => {
                      const Icon = interest.icon;
                      const isSelected = selectedInterests.includes(interest.id);
                      return (
                        <button
                          key={interest.id}
                          type="button"
                          onClick={() => handleInterestToggle(interest.id)}
                          className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                            isSelected
                              ? `border-blue-400 bg-blue-500/20 text-white`
                              : 'border-white/30 text-white/70 hover:border-white/50 hover:bg-white/10'
                          }`}
                        >
                          <Icon className="w-6 h-6 mx-auto mb-2" />
                          <div className="text-sm font-medium">{interest.name}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-6 text-center">
                    What you'll get:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {benefits.map((benefit, index) => {
                      const Icon = benefit.icon;
                      return (
                        <motion.div
                          key={benefit.title}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="flex items-start gap-4"
                        >
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-2">{benefit.title}</h4>
                            <p className="text-blue-100">{benefit.description}</p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3 mx-auto"
                  >
                    {isLoading ? (
                      <>
                        <RefreshCw className="w-5 h-5 animate-spin" />
                        Subscribing...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Subscribe Now
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                  
                  <p className="text-blue-200 text-sm mt-4 flex items-center justify-center gap-2">
                    <ShieldIcon className="w-4 h-4" />
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>
              </form>
            ) : (
              /* Success State */
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center py-12"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-12 h-12 text-white" />
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-4">
                  Welcome to the AI Revolution!
                </h3>
                
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  You're now part of our exclusive community. Check your email for a confirmation 
                  and get ready to receive the most advanced AI content and insights.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
                    <Download className="w-5 h-5" />
                    Download Welcome Kit
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center gap-2">
                    <Play className="w-5 h-5" />
                    Watch Intro Video
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          {/* Social Proof */}
          <div className="text-center pb-16 px-8">
            <p className="text-blue-200 mb-6">Trusted by leading companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-white font-bold text-xl">Microsoft</div>
              <div className="text-white font-bold text-xl">Google</div>
              <div className="text-white font-bold text-xl">Amazon</div>
              <div className="text-white font-bold text-xl">Tesla</div>
              <div className="text-white font-bold text-xl">OpenAI</div>
              <div className="text-white font-bold text-xl">NVIDIA</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup2026;