import React, { useState } from 'react';
<<<<<<< HEAD
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, CheckCircle, Bell, Zap, Shield, Users, X, Gift, Star, Award const benefits = [
=======
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle, Star, Zap, Shield, Users, TrendingUp } from 'lucide-react';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubscribed(true);
    setIsLoading(false);
    setEmail('');
  };

  const benefits = [
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    {
      icon: <Star className="w-6 h-6" />,
      title: "Exclusive Content",
      description: "Access to premium tech insights and industry reports"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Early Access",
      description: "Be the first to know about new services and features"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Expert Tips",
      description: "Weekly tips from our technology experts"
    },
    {
<<<<<<< HEAD
        icon: <Users className="w-6 h-6"/>,
        title: "Community",
        description: "Join our network of tech professionals and innovators"

];
const stats = [
=======
      icon: <Users className="w-6 h-6" />,
      title: "Community Access",
      description: "Join our exclusive tech community"
    }
  ];

  const stats = [
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    { value: "50K+", label: "Subscribers" },
    { value: "95%", label: "Satisfaction" },
    { value: "24/7", label: "Support" },
    { value: "100%", label: "Free" }
<<<<<<< HEAD
];
export function NewsletterSection() {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showBenefits, setShowBenefits] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the email to your newsletter service
<<<<<<< HEAD
        // // // console.log('Newsletter subscription:', email);
=======
        // // // // // // // console.log('Newsletter subscription:', email);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
        setIsSubscribed(true);
        setEmail('');
    };
    const handleUnsubscribe = () => {
        setIsSubscribed(false);
        setEmail('');
    };
    return (<section className="py-20 bg-gradient-to-br from-zion-purple via-zion-purple-dark to-zion-slate-dark relative overflow-hidden">
=======
  ];

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue relative overflow-hidden">
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                              radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)`
          }}
        />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan/20 rounded-full opacity-30" 
          animate={{ rotate: 360 }} 
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple/20 rounded-full opacity-30" 
          animate={{ rotate: -360 }} 
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light/20 rounded-full opacity-20" 
          animate={{ scale: [1, 1.2, 1] }} 
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center max-w-5xl mx-auto" 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
        >
          {/* Enhanced header */}
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-zion-cyan to-zion-blue mb-8 shadow-lg">
            <Mail className="w-12 h-12 text-white"/>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Stay <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Connected</span>
          </h2>
          <p className="text-zion-slate-light text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Get the latest updates on new services, tech insights, and exclusive offers delivered straight to your inbox.
            Join thousands of professionals staying ahead of the curve.
          </p>

<<<<<<< HEAD
          {/* Stats section */}
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            {stats.map((stat, index) => (<motion.div key={index} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} className="text-center p-4 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20">
                <div className="text-2xl font-bold text-zion-cyan mb-1">{stat.value}</div>
                <div className="text-zion-slate-light text-sm">{stat.label}</div>
              </motion.div>))}
          </motion.div>

          {/* Benefits toggle */}
          <motion.div className="mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
            <button onClick={() => setShowBenefits(!showBenefits)} className="inline-flex items-center gap-2 text-zion-cyan hover:text-zion-cyan-light transition-colors">
              <span className="text-sm font-medium">
                {showBenefits ? 'Hide' : 'Show'} subscriber benefits
              </span>
              <motion.div animate={{ rotate: showBenefits ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <X className="w-4 h-4"/>
              </motion.div>
            </button>
          </motion.div>

          {/* Benefits grid */}
          <AnimatePresence>
            {showBenefits && (<motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.4 }}>
                {benefits.map((benefit, index) => (<motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="text-center p-4 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20 hover:border-zion-cyan/50 transition-all duration-300">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-zion-cyan to-zion-purple mb-3">
                      <div className="text-white">
                        {benefit.icon}
                      </div>
                    </div>
                    <h4 className="text-white font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-zion-slate-light text-sm">{benefit.description}</p>
                  </motion.div>))}
              </motion.div>)}
          </AnimatePresence>

          {/* Subscription form or success message */}
          {!isSubscribed ? (<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-6">
                <input type="email" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} className="flex-1 px-6 py-4 rounded-xl border border-zion-blue-light/30 bg-zion-blue-dark/50 text-white placeholder:text-zion-slate-light/50 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300 text-lg" required/>
                <button type="submit" disabled={isLoading || !email} className="inline-flex items-center gap-3 bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-dark hover:to-zion-blue-dark text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-zion-cyan/25">
                  {isLoading ? (<>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"/>
=======
          {/* Newsletter Form */}
          <motion.div 
            className="max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 bg-zion-slate/20 backdrop-blur-sm border border-zion-cyan/30 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-dark hover:to-zion-blue-dark text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                      Subscribing...
                    </>
                  ) : (
                    <>
                      Subscribe Now
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <motion.div 
                className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl p-6 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-3 text-green-400">
                  <CheckCircle className="w-8 h-8" />
                  <div>
                    <h3 className="text-xl font-semibold text-white">Successfully Subscribed!</h3>
                    <p className="text-green-300">Welcome to our community. Check your email for confirmation.</p>
                  </div>
                </div>
              </motion.div>
<<<<<<< HEAD
            </motion.div>) : (<motion.div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-400 px-8 py-4 rounded-xl mb-6" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
              <CheckCircle className="w-6 h-6"/>
              <div className="text-left">
                <div className="font-semibold">Successfully subscribed!</div>
                <div className="text-sm">Welcome to the Zion Tech Group community.</div>
              </div>
              <button onClick={handleUnsubscribe} className="ml-4 text-green-400 hover:text-green-300 transition-colors">
                <X className="w-5 h-5"/>
              </button>
            </motion.div>)}

          {/* Privacy notice */}
          <motion.div className="text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.7 }}>
            <p className="text-zion-slate-light/70 text-sm mb-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>

            {/* Trust indicators */}
            <div className="flex items-center justify-center gap-6 text-zion-slate-light/50 text-xs">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4"/>
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4"/>
                <span>Trusted by 50K+</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4"/>
                <span>Industry Leader</span>
              </div>
=======
            )}
          </motion.div>

          {/* Benefits Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-xl bg-zion-slate/20 backdrop-blur-sm border border-zion-slate/30 hover:border-zion-cyan/50 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-zion-cyan to-zion-blue mb-4">
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-zion-slate-light text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-4 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20"
                variants={itemVariants}
              >
                <div className="text-2xl font-bold text-zion-cyan mb-1">{stat.value}</div>
                <div className="text-zion-slate-light text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            className="mt-12 pt-8 border-t border-zion-slate/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-zion-slate-light text-sm mb-4">
              Trusted by leading companies worldwide
            </p>
            <div className="flex items-center justify-center gap-8 opacity-60">
              <div className="text-zion-slate-light text-xs">🔒 256-bit encryption</div>
              <div className="text-zion-slate-light text-xs">📧 No spam, ever</div>
              <div className="text-zion-slate-light text-xs">🚫 Unsubscribe anytime</div>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            </div>
          </motion.div>
        </motion.div>
      </div>
<<<<<<< HEAD
    </section>);
</div></div>}}</motion.div></motion.div></motion.div>}
=======
    </section>
  );
}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
