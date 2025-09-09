import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, CheckCircle, Bell, Zap, Shield, Users, X, Gift, Star, Award } from 'lucide-react';
const benefits = [
    {
      icon: <Star className="w - 6 h - 6"       />,
      title: 'Exclusive Content',
      description: 'Access to premium tech insights and industry reports',
    },
    {
      icon: <Zap className="w - 6 h - 6"       />,
      title: 'Early Access',
      description: 'Be the first to know about new services and features',
    },
    {
      icon: <Shield className="w - 6 h - 6"       />,
      title: 'Expert Tips',
      description: 'Weekly tips from our technology experts',
    },
    {
      icon: <Users className="w - 6 h - 6"       />,
      title: 'Community Access',
      description: 'Join our exclusive tech community',
    },
  ];

  const stats = [
    { value: '50K+', label: 'Subscribers' },
    { value: '95%', label: 'Satisfaction' },
    { value: '24 / 7', label: 'Support' },
    { value: '100%', label: 'Free' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  if (isSubscribed) {
    return (<section className="py - 20 bg - gradient - to - br from - zion - purple via - zion - purple - dark to - zion - slate - dark relative overflow - hidden">
        <div className="absolute inset - 0 opacity - 10">
          <div className="absolute top - 10 right - 10 w - 64 h - 64 bg - zion - cyan rounded - full blur - 3xl"></div>
          <div className="absolute bottom - 10 left - 10 w - 48 h - 48 bg - zion - purple rounded - full blur - 3xl"></div>
        </div>

        <motion.div
          className="container mx - auto px - 4 relative z - 10 text - center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb - 8">
            <div className="inline - flex items - center justify - center w - 20 h - 20 rounded - full bg - green - 500 / 20 mb - 6">
              <CheckCircle className="w - 10 h - 10 text - green - 400"       />
            </div>
            <h2 className="text - 4xl md:text - 5xl font - bold text - white mb - 4">
              Welcome to the Family!
            </h2>
            <p className="text - xl text - zion - slate - light max - w-2xl mx - auto">
              Thank you for subscribing ! You're now part of our exclusive tech
              community.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb - 8">
            <div className="grid grid - cols - 2 md:grid - cols - 4 gap - 6 max - w-4xl mx - auto">
              {stats.map ( (stat, index) => (<div key={index} className="text - center">
                  <div className="text - 3xl font - bold text - zion - cyan mb - 2">
                    {stat.value}
                  </div>
                  <div className="text - zion - slate - light">{stat.label}</div>
                </div>) ) }
            </div>
          </motion.div>

          <motion.button
            variants={itemVariants}
            onClick={ () => setIsSubscribed (false) }
            className="bg - white / 10 hover:bg - white / 20 text - white px - 8 py - 3 rounded - lg border border - white / 20 transition - all duration - 300"
          >
            Subscribe Another Email
          </motion.button>
        </motion.div>
      </section>) ;
  }

  return (<section className="py - 20 bg - gradient - to - br from - zion - purple via - zion - purple - dark to - zion - slate - dark relative overflow - hidden">
      <div className="absolute inset - 0 opacity - 10">
        <div className="absolute top - 10 right - 10 w - 64 h - 64 bg - zion - cyan rounded - full blur - 3xl"></div>
        <div className="absolute bottom - 10 left - 10 w - 48 h - 48 bg - zion - purple rounded - full blur - 3xl"></div>
      </div>

      <motion.div
        className="container mx - auto px - 4 relative z - 10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid - cols - 1 lg:grid - cols - 2 gap - 16 items - center">
          {/* Left content */}
          <motion.div variants={itemVariants} className="text - white">
            <div className="flex items - center gap - 3 mb - 6">
              <div className="p - 2 bg - zion - cyan / 20 rounded - lg">
                <Mail className="w - 6 h - 6 text - zion - cyan"       />
              </div>
              <span className="text - zion - cyan font - semibold text - sm uppercase tracking - wider">
                Newsletter
              </span>
              <motion.div animate={{ rotate: showBenefits ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <X className="w-4 h-4"/>
              </motion.div>
            </button>
          </motion.div>

          {/* Right content - Newsletter Form */}
          <motion.div variants={itemVariants} className="relative">
            <div className="bg - white / 10 backdrop - blur - sm rounded - 2xl border border - white / 20 p - 8 shadow - 2xl">
              <div className="text - center mb - 6">
                <div className="inline - flex items - center justify - center w - 16 h - 16 rounded - 2xl bg - gradient - to - r from - zion - cyan to - zion - blue mb - 4">
                  <Mail className="w - 8 h - 8 text - white"       />
                </div>
                <h3 className="text - 2xl font - bold text - white mb - 2">
                  Join Our Newsletter
                </h3>
                <p className="text - zion - slate - light">
                  Get exclusive tech insights and updates
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space - y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text - sm font - medium text - zion - slate - light mb - 2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={e => setEmail (e.target.value) }
                    placeholder="Enter your email address"
                    className="w - full px - 4 py - 3 bg - white / 10 border border - white / 20 rounded - xl text - white placeholder - zion - slate - light focus:outline - none focus:border - zion - cyan focus:ring - 2 focus:ring - zion - cyan / 20 transition - all duration - 300"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading || !email.trim () }
                  className="w - full bg - gradient - to - r from - zion - cyan to - zion - blue hover:from - zion - cyan - dark hover:to - zion - blue - dark text - white font - semibold py - 3 px - 6 rounded - xl transition - all duration - 300 transform hover:scale - 105 hover:shadow - lg hover:shadow - zion - cyan / 25 disabled:opacity - 50 disabled:cursor - not - allowed disabled:transform - none flex items - center justify - center gap - 2"
                >
                  {isLoading ? (<>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"/>
                      Subscribing...
                    </>) : (<>
                      Subscribe
                      <Send className="w-5 h-5"/>
                    </>)}
                </button>
              </form>

              {/* Special offer */}
              <motion.div className="inline-flex items-center gap-3 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 text-zion-cyan px-6 py-3 rounded-xl mb-6" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }}>
                <Gift className="w-5 h-5"/>
                <span className="font-medium">New subscribers get 20% off their first service!</span>
              </motion.div>
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
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>);
}
