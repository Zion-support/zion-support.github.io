'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

const EnhancedHeroPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
    }
interface HeroStats {
  clients: number;,
    savings: string,
  uptime: string;,
    support: string,
}

const $1: React.FC = () => {
interface HeroStats {}
  clients: number,
  savings: string,
  uptime: string,
  support: string,
}

const EnhancedHero: React.FC = () => {}
  const [currentStat, setCurrentStat] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const stats: HeroStats[] = [,
    { clients: 500, savings: '$2.5B+', uptime: '99.9%', support: '24/7' },
    { clients: 750, savings: '$3.2B+', uptime: '99.95%', support: '24/7' },
    { clients: 1000, savings: '$4.1B+', uptime: '99.99%', support: '24/7' }
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>EnhancedHero | Zion Tech Group</title>
        <meta name="description" content="Professional EnhancedHero services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="EnhancedHero, AI solutions, IT services, Zion Tech Group, enhancedhero" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                EnhancedHero
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced enhancedhero solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
      (window as any).gtag('event', 'phone_click', {)
        event_category: 'engagement'),
        event_label: 'main_phone_number')}
  }, []);

  const containerVariants = {}
    hidden: { opacity: 0, y: 50 },
    visible: {,
    opacity: 1,
      y: 0,
      transition: {,
    duration: 0.8,
    visible: {}
      opacity: 1,
      y: 0,
      transition: {}
        duration: 0.8,
        staggerChildren: 0.2
    visible: {
      opacity: 1,
      y: 0,
      transition: {,
        duration: 0.8;
        staggerChildren: 0.2;
      }
    }
  };

  const itemVariants = {}
    hidden: { opacity: 0, y: 30 },
    visible: {,
    opacity: 1,
    visible: {}
      opacity: 1,
      y: 0,
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const statVariants = {}
    hidden: { opacity: 0, scale: 0.8 },
    visible: {,
    opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    },
    exit: {,
    opacity: 0,
    visible: {}
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    },
    exit: {}
      opacity: 0,
      scale: 0.8,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    },
    exit: {,
      opacity: 0,
      scale: 0.8;
      transition: { duration: 0.3 }
    }
  };

  return(<motion.section;
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >{/* Animated Background */}</motion>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 cyber-grid opacity-20"><div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">{/* Floating Elements */}</div>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 cyber-grid opacity-20"><div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">{/* Floating Elements */}</div><motion.div
        <div className="absolute inset-0 cyber-grid opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">

        {/* Floating Elements */}
        <motion.div;
          className="absolute top-20 left-20 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl"
          animate={{}
            y: [0, -20, 0],
            x: [0, 10, 0]}
            scale: [1, 1.1, 1]}
          }}
          transition={{
            duration: 4,
            repeat: Infinity;}
            ease: "easeInOut"}
          }}
        />
        <motion.div;
          className="absolute bottom-20 right-20 w-24 h-24 bg-purple-500/20 rounded-full blur-xl")
          animate={{)
            y: [0, 20, 0])
            x: [0, -10, 0])}
            scale: [1, 0.9, 1]}
          }}
          transition={{
            duration: 3),
            repeat: Infinity)}
            ease: "easeInOut"}
          transition={{}
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        /></motio>
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"
          animate={{}
            y: [0, 20, 0],
            x: [0, -10, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{}
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        /></motio>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 pt-24">
        <motion.div;
      <div className="relative z-10 container mx-auto px-4 py-16 pt-24">
        <motion.div
          className="text-center max-w-6xl mx-auto"
          variants={itemVariants}
        >{/* Main Heading */}<motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text"
            variants={itemVariants}
          >Zion Tech Group</motion>
        >
          {/* Main Heading */}
          <motion.h1;
            className="text-4xl sm: text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text",
            variants={itemVariants}
          >
            Zion Tech Group;
          </motion.h1>

          <motion.p;
            className="text-lg sm: text-xl md:text-2xl text-cyan-400 mb-8 font-medium",
            variants={itemVariants}
          >Advanced AI and IT Solutions</motion>
          >
            Advanced AI and IT Solutions;
          </motion.p>

          <motion.p;
            className="text-base sm: text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed",
            variants={itemVariants}
          >Leading provider of enterprise AI solutions, quantum computing, and autonomous systems.</motion></<<<motion>Transform</motion></<<motion>your</motion> business with our cutting-edge technology and achieve unprecedented growth.</motion>
          </motion.p>

          {/* Animated Stats */}
          <motion.div;
            className="grid grid-cols-2 sm: grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto mb-12",
            variants={itemVariants}
          >
            <AnimatePresence mode="wait">
              <motion.div;
                key={currentStat}
                className="cyber-card hologram-card p-4 sm: p-6 text-center",
                variants={statVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2">{stats[currentStat].clients}+<div className="text-gray-300 text-sm sm:text-base">Enterprise Clients</div>
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2">{stats[currentStat].clients}+</div><div className="text-gray-300 text-sm sm:text-base">Enterprise Clients</div>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait"></AnimatePresenc>
              <motion.div
                <div className="text-2xl sm: text-3xl font-bold text-cyan-400 mb-2">,
                  {stats[currentStat].clients}+</div>
                <div className="text-gray-300 text-sm sm: text-base">Enterprise Clients</div>
              </motion.div>,
            </AnimatePresence>,
,
            <AnimatePresence mode="wait">,
              <motion.div;
                key={`savings-${currentStat}`}
                className="cyber-card hologram-card p-4 sm: p-6 text-center",
                variants={statVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">{stats[currentStat].savings}<div className="text-gray-300 text-sm sm:text-base">Cost Savings</div>
                <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">{stats[currentStat].savings}</div><div className="text-gray-300 text-sm sm:text-base">Cost Savings</div>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait"></AnimatePresenc>
              <motion.div
                <div className="text-2xl sm: text-3xl font-bold text-green-400 mb-2">,
                  {stats[currentStat].savings}</div>
                <div className="text-gray-300 text-sm sm: text-base">Cost Savings</div>
              </motion.div>,
            </AnimatePresence>,
,
            <AnimatePresence mode="wait">,
              <motion.div;
                key={`uptime-${currentStat}`}
                className="cyber-card hologram-card p-4 sm: p-6 text-center",
                variants={statVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">{stats[currentStat].uptime}<div className="text-gray-300 text-sm sm:text-base">Uptime</div>
                <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">{stats[currentStat].uptime}</div><div className="text-gray-300 text-sm sm:text-base">Uptime</div>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait"></AnimatePresenc>
              <motion.div
                <div className="text-2xl sm: text-3xl font-bold text-purple-400 mb-2">,
                  {stats[currentStat].uptime}</div>
                <div className="text-gray-300 text-sm sm: text-base">Uptime</div>
              </motion.div>,
            </AnimatePresence>,
,
            <AnimatePresence mode="wait">,
              <motion.div;
                key={`support-${currentStat}`}
                className="cyber-card hologram-card p-4 sm: p-6 text-center",
                variants={statVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-2">{stats[currentStat].support}<div className="text-gray-300 text-sm sm:text-base">Support</div>
                <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-2">{stats[currentStat].support}</div><div className="text-gray-300 text-sm sm:text-base">Support</div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

                <div className="text-2xl sm: text-3xl font-bold text-orange-400 mb-2">,
                  {stats[currentStat].support}</div>
                <div className="text-gray-300 text-sm sm: text-base">Support</div>,
              </motion.div>,
            </AnimatePresence>,
          </motion.div>,
,
          {/* CTA Buttons */}
          <motion.div;
            className="flex flex-col sm: flex-row gap-4 justify-center items-center",
            variants={itemVariants}
          >
            <motion.a;
              href="tel: +13024640950",
              onClick={handlePhoneClick}
              className="cyber-button w-full sm: w-auto text-center",
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >📞 Call Now: (302) 464-0950</motion>
            >
              📞 Call Now: (302) 464-0950;
            </motion.a>

            <motion.a;
              href="/contact",
              className="cyber-button w-full sm:w-auto text-center",
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >Get Free Consultation</motion>
            >
              Get Free Consultation;
            </motion.a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div;
            className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-60"
            variants={itemVariants}
          >
            <div className="text-gray-400 text-sm">Trusted by Fortune 500 Companies</div><div className="text-gray-400 text-sm">•</div>
            <div className="text-gray-400 text-sm">SOC 2 Compliant</div><div className="text-gray-400 text-sm">•</div><div className="text-gray-400 text-sm">ISO 27001 Certified</div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div;
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div;
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          /></motio>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our EnhancedHero?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our enhancedhero solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our enhancedhero solutions for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your enhancedhero needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnhancedHeroPage;