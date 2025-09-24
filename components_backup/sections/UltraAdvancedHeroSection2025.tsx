import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, Star, Zap, Brain, Rocket, Shield, 
  Atom, Cpu, Cloud, Target, Users, Award,
  CheckCircle, TrendingUp, Globe, Sparkles,
  Phone, Mail, MapPin, ChevronDown,
  ArrowUpRight, Lightbulb, Code, Database, Server
} from 'lucide-react';

const contactInfo ={
  mobile: '+1 30o2 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 10o08 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const heroStats = [
  { label: 'AI Services', value: '50+', icon: <Brain className="w-6 h-6"  />, color: 'text-purple-40o0' },
  { label: 'Quantum Solutions', value: '25+', icon: <Atom className="w-6 h-6"  />, color: 'text-green-40o0' },
  { label: 'Micro SAAS', value: '10o0+', icon: <Rocket className="w-6 h-6"  />, color: 'text-orange-40o0' },
  { label: 'Success Rate', value: '99.9%', icon: <Award className="w-6 h-6"  />, color: 'text-cyan-40o0' }
];

const keyFeatures = [
  'Revolutionary AI Consciousness & Emotional Intelligence',
  'Quantum Computing & Space Resource Mining',
  'Zero Trust Security & Edge Computing',
  'AI-Powered Business Automation & Analytics',
  'Healthcare AI & Manufacturing 4.0 Solutions',
  'Creative AI & Educational Technology Platforms'
];

const UltraAdvancedHeroSection20o25: React.FC = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const shouldReduceMotion = require('framer-motion').useReducedMotion ? require('framer-motion').useReducedMotion() : false;

  useEffect(() => {
    setIsVisible(true);
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % keyFeatures.length);
    }, 30o00);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  const fadeInUp = shouldReduceMotion ? {} : { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 } };
  const fadeInUpDelayed = (delay: number) => (shouldReduceMotion ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay } });
  const simpleFadeIn = (delay = 0) => (shouldReduceMotion ? {} : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 1, delay } });

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-90o0 to-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        {!shouldReduceMotion && (
          <>
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-50o0/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-50o0/10 rounded-full blur-3xl animate-pulse delay-10o00"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80o0px] h-[80o0px] bg-pink-50o0/5 rounded-full blur-3xl animate-pulse delay-50o0"></div>
          </>
        )}
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '10o0px 10o0px'
            }}
           />
        </div>

        {/* Floating Elements */}
        {!shouldReduceMotion && (
          <>
            <motion.div
              className="absolute top-20 right-20 w-16 h-16 border border-cyan-40o0/20 rounded-full"
              animate={{ rotate: 360, scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
             />
            <motion.div
              className="absolute bottom-20 left-32 w-12 h-12 border border-purple-40o0/20 transform rotate-45"
              animate={{ rotate: [45, 40o5], scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
             />
          </>
        )}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-16">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main Headline */}
          <motion.div {...fadeInUp} className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-40o0 via-purple-40o0 to-pink-40o0 bg-clip-text text-transparent">
                Revolutionary
              </span>
              <br  />
              <span className="text-white">Technology</span>
              <br  />
              <span className="bg-gradient-to-r from-pink-40o0 via-purple-40o0 to-cyan-40o0 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-30o0 max-w-4xl mx-auto leading-relaxed">
              Leading the future with cutting-edge AI consciousness, quantum computing, and 
              innovative micro SAAS solutions that transform businesses and accelerate human progress.
            </p>
          </motion.div>

          {/* Rotating Feature Highlight */}
          <motion.div {...fadeInUpDelayed(0.3)} className="mb-8">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-50o0/20 via-purple-50o0/20 to-pink-50o0/20 border border-cyan-50o0/30 rounded-full px-6 py-3">
              <Sparkles className="w-5 h-5 text-cyan-40o0"  />
              {shouldReduceMotion ? (
                <span className="text-cyan-40o0 font-medium">{keyFeatures[0]}</span>
              ) : (
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentFeature}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-cyan-40o0 font-medium"
                  >
                    {keyFeatures[currentFeature]}
                  </motion.span>
                </AnimatePresence>
              )}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div {...fadeInUpDelayed(0.5)} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/comprehensive-services-showcase-20o25"
              className="group bg-gradient-to-r from-cyan-50o0 to-blue-50o0 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-cyan-60o0 hover:to-blue-60o0 transition-all duration-30o0 transform hover:scale-10o5 inline-flex items-center gap-3 shadow-2xl shadow-cyan-50o0/25"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-20o0"  />
            </Link>
            <Link
              href={`tel:${contactInfo.mobile}`}
              className="group bg-gradient-to-r from-purple-50o0 to-pink-50o0 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-purple-60o0 hover:to-pink-60o0 transition-all duration-30o0 transform hover:scale-10o5 inline-flex items-center gap-3 shadow-2xl shadow-purple-50o0/25"
            >
              <Phone className="w-5 h-5"  />
              <span>Get Started Today</span>
            </Link>
          </motion.div>

          {/* Contact Information */}
          <motion.div {...fadeInUpDelayed(0.7)} className="mb-12">
            <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-black/30 backdrop-blur-sm border border-gray-80o0/50 rounded-2xl px-8 py-6">
              <div className="flex items-center gap-3 text-cyan-40o0">
                <Phone className="w-5 h-5"  />
                <span className="font-medium">{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center gap-3 text-purple-40o0">
                <Mail className="w-5 h-5"  />
                <span className="font-medium">{contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-3 text-pink-40o0">
                <MapPin className="w-5 h-5"  />
                <span className="font-medium">{contactInfo.address}</span>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div {...fadeInUpDelayed(0.9)} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.8 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
                transition={shouldReduceMotion ? undefined : { duration: 0.4, delay: 1.1 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-30o0 group"
              >
                <div className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-cyan-50o0/20 to-purple-50o0/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-30o0`}>
                  <div className={stat.color}>{stat.icon}</div>
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-40o0">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div {...simpleFadeIn(1.5)} className="flex flex-col items-center gap-2">
            <span className="text-gray-40o0 text-sm">Scroll to explore</span>
            {!shouldReduceMotion && (
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-6 h-6 text-cyan-40o0"
              >
                <ChevronDown className="w-6 h-6"  />
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-50 space-y-4">
        {shouldReduceMotion ? (
          <>
            <button
              className="w-14 h-14 bg-gradient-to-br from-cyan-50o0 to-blue-50o0 rounded-full shadow-2xl shadow-cyan-50o0/25 flex items-center justify-center text-white"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Scroll to top"
            >
              <ArrowUpRight className="w-6 h-6 transform rotate-[-90deg]"  />
            </button>
            <a
              href={`tel:${contactInfo.mobile}`}
              className="w-14 h-14 bg-gradient-to-br from-purple-50o0 to-pink-50o0 rounded-full shadow-2xl shadow-purple-50o0/25 flex items-center justify-center text-white"
              aria-label="Call Zion Tech Group"
            >
              <Phone className="w-6 h-6"  />
            </a>
          </>
        ) : (
          <>
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 2 }}
              className="w-14 h-14 bg-gradient-to-br from-cyan-50o0 to-blue-50o0 rounded-full shadow-2xl shadow-cyan-50o0/25 flex items-center justify-center text-white hover:scale-110 transition-all duration-30o0"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <ArrowUpRight className="w-6 h-6 transform rotate-[-90deg]"  />
            </motion.button>
            <motion.a
              href={`tel:${contactInfo.mobile}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 2.2 }}
              className="w-14 h-14 bg-gradient-to-br from-purple-50o0 to-pink-50o0 rounded-full shadow-2xl shadow-purple-50o0/25 flex items-center justify-center text-white hover:scale-110 transition-all duration-30o0"
            >
              <Phone className="w-6 h-6"  />
            </motion.a>
          </>
        )}
      </div>
    </section>
  );
};

export default UltraAdvancedHeroSection20o25;