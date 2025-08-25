<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
import { GradientHeading } from "@/components/GradientHeading";
import { EnhancedNewsletterForm } from "@/components/EnhancedNewsletterForm";
import { motion } from "framer-motion";
<<<<<<< HEAD
import { Mail, Bell, Zap, Globe, Users, TrendingUp } from "lucide-react";

export function NewsletterSection() {
  const features = [
    { icon: Bell, text: "Weekly Tech Updates", color: "text-zion-cyan" },
    { icon: Zap, text: "Exclusive Deals", color: "text-zion-purple-light" },
    { icon: Globe, text: "Global Opportunities", color: "text-zion-blue-light" },
    { icon: Users, text: "Community Insights", color: "text-zion-cyan-light" }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-zion-blue-dark via-zion-purple-dark to-zion-slate-dark relative overflow-hidden" id="newsletter">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-zion-purple-light opacity-30"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-3 h-3 rounded-full bg-zion-cyan opacity-40"
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-zion-blue-light opacity-50"
          animate={{ y: [-5, 15, -5] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>
=======
import { Mail, Bell, TrendingUp, Users, Globe, Zap } from "lucide-react";

export function NewsletterSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Latest Tech Trends",
      description: "Stay ahead with cutting-edge insights"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Updates",
      description: "Connect with fellow tech professionals"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Opportunities",
      description: "Discover worldwide tech opportunities"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI Innovations",
      description: "Learn about breakthrough AI technologies"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-slate-dark to-zion-slate relative overflow-hidden" id="newsletter">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-zion-purple rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-zion-cyan rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-zion-purple-light rounded-full blur-3xl"></div>
      </div>

      {/* Floating icons */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="absolute top-20 left-10 text-zion-purple/20"
          variants={floatingVariants}
          animate="float"
        >
          <Mail className="w-12 h-12" />
        </motion.div>
        <motion.div 
          className="absolute top-32 right-20 text-zion-cyan/20"
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: "1s" }}
        >
          <Bell className="w-10 h-10" />
        </motion.div>
        <motion.div 
          className="absolute bottom-32 left-20 text-zion-purple-light/20"
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: "2s" }}
        >
          <TrendingUp className="w-8 h-8" />
        </motion.div>
      </motion.div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto text-center"
<<<<<<< HEAD
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 rounded-full border border-zion-purple/30 mb-6">
            <Mail className="w-5 h-5 text-zion-cyan" />
            <span className="text-zion-cyan font-medium text-sm">Newsletter</span>
          </div>

          <GradientHeading className="text-4xl md:text-5xl lg:text-6xl mb-6">
            Stay Ahead of the Curve
          </GradientHeading>
          
          <p className="mt-6 text-zion-slate-light text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed">
            Subscribe to our premium newsletter for exclusive access to the latest AI breakthroughs, 
            trending tech news, marketplace opportunities, and insider insights from industry leaders.
          </p>

          {/* Feature highlights */}
          <motion.div 
            className="flex flex-wrap justify-center gap-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="flex items-center gap-2 text-zion-slate-light"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <feature.icon className={`w-4 h-4 ${feature.color}`} />
                <span className="text-sm font-medium">{feature.text}</span>
=======
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
              <span className="text-zion-cyan font-medium text-sm uppercase tracking-wider">Newsletter</span>
              <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
            </div>
            
            <GradientHeading className="mb-4">Stay Informed & Connected</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Subscribe to our newsletter for the latest updates on Zion's services, trending tech news, 
              marketplace opportunities, and exclusive insights from industry experts.
            </p>
          </motion.div>

          {/* Benefits grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto"
            variants={itemVariants}
          >
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="text-center group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-zion-purple/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-zion-purple/30 transition-colors">
                  <div className="text-zion-purple-light group-hover:text-zion-purple transition-colors">
                    {benefit.icon}
                  </div>
                </div>
                <h4 className="text-white font-semibold text-sm mb-2">{benefit.title}</h4>
                <p className="text-zion-slate-light text-xs leading-relaxed">{benefit.description}</p>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
              </motion.div>
            ))}
          </motion.div>

<<<<<<< HEAD
          {/* Newsletter form */}
          <motion.div 
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
=======
          <motion.div 
            className="max-w-md mx-auto"
            variants={itemVariants}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
          >
            <EnhancedNewsletterForm />
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
<<<<<<< HEAD
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-wrap justify-center items-center gap-8 text-zion-slate-light text-sm">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-zion-cyan" />
                <span>50,000+ Subscribers</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-zion-cyan" />
                <span>150+ Countries</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-zion-cyan" />
                <span>Weekly Updates</span>
              </div>
            </div>
            
            <p className="text-zion-slate-light text-xs mt-4 opacity-70">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
=======
import React, { useState } from 'react';
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/build-project-and-deploy-with-netlify-1c1d
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
import { motion } from 'framer-motion';
import { Mail, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
=======
import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Mail } from 'lucide-react';
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
<<<<<<< HEAD
  const [isSubmitting, setIsSubmitting] = useState(false);
=======
  const [isLoading, setIsLoading] = useState(false);
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

<<<<<<< HEAD
    setIsSubmitting(true);
    
    // Simulate subscription
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubscribed(true);
      setEmail('');
    } catch (error) {
      console.error('Subscription error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zion-cyan to-transparent opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-zion-purple to-transparent opacity-50"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-zion-cyan/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-zion-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-zion-cyan/10 border border-zion-cyan/20 text-zion-cyan text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              Stay Updated
            </span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-6">
            Never Miss Tech Opportunities
          </motion.h2>

          <motion.p variants={itemVariants} className="text-xl text-zion-slate-light mb-8 leading-relaxed">
            Subscribe to our newsletter and get exclusive access to the latest AI developments, 
            tech job opportunities, and industry insights delivered straight to your inbox.
          </motion.p>

          <motion.div variants={itemVariants} className="bg-zion-blue-light/10 border border-zion-blue-light/20 rounded-2xl p-8 backdrop-blur-sm">
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <div className="flex-1 relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="pl-10 pr-4 py-3 bg-zion-blue-light/10 border-zion-blue-light/20 text-white placeholder-zion-slate-light focus:border-zion-cyan focus:ring-zion-cyan/20"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting || !email.trim()}
                    className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90 text-white px-8 py-3 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Subscribing...
                      </div>
                    ) : (
                      <>
                        Subscribe
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
                
                <p className="text-sm text-zion-slate-light">
                  By subscribing, you agree to receive marketing emails from Zion Tech Group. 
                  You can unsubscribe at any time.
                </p>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Welcome to the Family!</h3>
                <p className="text-zion-slate-light mb-4">
                  You've successfully subscribed to our newsletter. Check your email for a confirmation message.
                </p>
                <button
                  onClick={() => setIsSubscribed(false)}
                  className="text-zion-cyan hover:text-zion-cyan/80 transition-colors"
                >
                  Subscribe another email
                </button>
              </div>
            )}
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-zion-cyan/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-zion-cyan" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Weekly Updates</h4>
              <p className="text-zion-slate-light text-sm">Get the latest tech news and opportunities every week</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-zion-purple/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Sparkles className="w-6 h-6 text-zion-purple" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Exclusive Content</h4>
              <p className="text-zion-slate-light text-sm">Access to premium insights and early access to features</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-zion-blue/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <ArrowRight className="w-6 h-6 text-zion-blue" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">No Spam</h4>
              <p className="text-zion-slate-light text-sm">We respect your inbox and only send valuable content</p>
            </div>
>>>>>>> origin/cursor/resolve-typescript-merge-conflicts-8802
          </motion.div>
        </motion.div>
=======
import React, { useState } from "react";
import { motion } from "framer-motion";
import { NewsletterForm } from "./NewsletterForm";
import { Mail, Bell, TrendingUp, Users } from "lucide-react";

export function NewsletterSection() {
  const [isVisible, setIsVisible] = useState(false);

  const features = [
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Weekly Updates",
      description: "Stay informed about new features and opportunities"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Market Insights",
      description: "Get the latest trends in AI and tech markets"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community News",
      description: "Connect with fellow professionals and events"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-zion-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-zion-cyan/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-zion-purple/20 text-zion-purple-light px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Mail className="w-4 h-4" />
            Stay Connected
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Never Miss an Opportunity
          </h2>
          
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Join thousands of professionals who get exclusive access to the latest AI opportunities, 
            market insights, and community updates delivered straight to their inbox.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Newsletter form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-zion-blue-light/10 to-zion-blue-dark/20 backdrop-blur-sm border border-zion-blue-light/30 rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Subscribe Today</h3>
                <p className="text-zion-slate-light">
                  Get started with just your email address
                </p>
              </div>
              
              <NewsletterForm />
              
              <div className="text-center mt-6">
                <p className="text-xs text-zion-slate-light/60">
                  We respect your privacy. Unsubscribe at any time.
                </p>
                <div className="flex justify-center items-center gap-2 mt-2">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full animate-pulse"></div>
                  <span className="text-xs text-zion-cyan">Secure & Private</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features and benefits */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white mb-6">
                What You'll Get
              </h3>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.6 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center text-white">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-zion-slate-light leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 pt-8 border-t border-zion-blue-light/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-zion-cyan mb-1">50K+</div>
                <div className="text-sm text-zion-slate-light">Subscribers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-zion-purple mb-1">95%</div>
                <div className="text-sm text-zion-slate-light">Open Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-zion-cyan-light mb-1">Weekly</div>
                <div className="text-sm text-zion-slate-light">Updates</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-fb01
      </div>
    </section>
  );
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
import React from 'react';

export const NewsletterSection: React.FC = () => {
  return (
    <section className="py-16 bg-zion-purple">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Stay Updated with Tech Trends
        </h2>
        <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
          Get the latest insights on AI, technology, and business innovation delivered to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-zion-cyan"
          />
          <button className="bg-zion-cyan text-white px-6 py-3 rounded-lg hover:bg-zion-cyan-dark transition-colors">
            Subscribe
          </button>
=======
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1000);
  };

  if (isSubscribed) {
    return (
      <section className="py-16 bg-zion-blue-light">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto">
            <Mail className="h-12 w-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
            <p className="text-zion-slate-light">
              You've been successfully subscribed to our newsletter.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-zion-blue-light">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-zion-slate-light mb-8">
            Get the latest updates on tech trends, new features, and exclusive opportunities delivered to your inbox.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate-light focus:border-zion-cyan"
              required
            />
            <Button
              type="submit"
              disabled={isLoading || !email.trim()}
              className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple disabled:opacity-50"
            >
              {isLoading ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </form>
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
        </div>
=======
            className="mt-8 text-center"
            variants={itemVariants}
          >
            <p className="text-xs text-zion-slate-light mb-4">
              Join 10,000+ tech professionals already subscribed
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-xs text-zion-slate-light">
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                No spam, ever
              </span>
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Unsubscribe anytime
              </span>
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                Privacy protected
              </span>
            </div>
          </motion.div>
        </motion.div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
      </div>
    </section>
  );
<<<<<<< HEAD
};
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
=======
}
>>>>>>> origin/cursor/resolve-typescript-merge-conflicts-8802
=======
}
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
=======
}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
