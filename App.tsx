import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Shield, 
  Cloud, 
  Rocket, 
  Star, 
  ArrowRight, 
  Sparkles,
  TrendingUp,
  Users,
  Award,
  Globe,
  Lock,
  Cpu
} from 'lucide-react';
import AdvertisingBanner, { HeroBanner, InlineBanner } from './src/components/AdvertisingBanner';

export default function App(): JSX.Element {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % featuredServices.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const featuredServices = [
    {
      id: 1,
      title: "AI-Powered Business Automation",
      description: "Revolutionary AI solutions that automate complex business processes, reducing costs by up to 70% while increasing efficiency.",
      icon: Brain,
      features: ["Process Automation", "Intelligent Analytics", "Predictive Insights"],
      color: "from-purple-500 to-pink-500",
      badge: "🔥 HOT"
    },
    {
      id: 2,
      title: "Quantum Computing Solutions",
      description: "Next-generation quantum computing services for solving complex optimization problems and advanced cryptography.",
      icon: Zap,
      features: ["Quantum Algorithms", "Optimization Problems", "Cryptography"],
      color: "from-blue-500 to-cyan-500",
      badge: "🚀 NEW"
    },
    {
      id: 3,
      title: "Advanced Cybersecurity Suite",
      description: "Comprehensive cybersecurity solutions with AI-powered threat detection and real-time response capabilities.",
      icon: Shield,
      features: ["Threat Detection", "Real-time Monitoring", "Incident Response"],
      color: "from-red-500 to-orange-500",
      badge: "⚡ POPULAR"
    }
  ];

  const stats = [
    { number: "500+", label: "Enterprise Clients", icon: Users },
    { number: "99.9%", label: "Uptime SLA", icon: Shield },
    { number: "$50M+", label: "Cost Savings", icon: TrendingUp },
    { number: "24/7", label: "Expert Support", icon: Award }
  ];

  const quickServices = [
    {
      title: "AI Solutions",
      description: "Cutting-edge artificial intelligence solutions for your business needs.",
      icon: Brain,
      color: "bg-gradient-to-r from-purple-500 to-pink-500"
    },
    {
      title: "Blockchain",
      description: "Secure, decentralized solutions powered by blockchain technology.",
      icon: Lock,
      color: "bg-gradient-to-r from-blue-500 to-cyan-500"
    },
    {
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and deployment solutions.",
      icon: Cloud,
      color: "bg-gradient-to-r from-green-500 to-teal-500"
    },
    {
      title: "Quantum Computing",
      description: "Next-generation quantum solutions for complex problems.",
      icon: Zap,
      color: "bg-gradient-to-r from-indigo-500 to-purple-500"
    },
    {
      title: "Cybersecurity",
      description: "Advanced protection against evolving digital threats.",
      icon: Shield,
      color: "bg-gradient-to-r from-red-500 to-orange-500"
    },
    {
      title: "IoT & Edge",
      description: "Connected devices and edge computing solutions.",
      icon: Globe,
      color: "bg-gradient-to-r from-yellow-500 to-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Banner */}
      <HeroBanner theme="gradient" />

      <ScrollToTop />
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Enhanced Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Leading the future of technology with AI, quantum computing, blockchain, and innovative solutions. 
            Transform your business with cutting-edge technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2">
              <Rocket className="w-5 h-5" />
              Get Started Free
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center gap-2">
              <Users className="w-5 h-5" />
              Schedule Demo
            </button>
          </div>
        </motion.div>

        {/* Featured Service Showcase */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Solutions</h2>
            <p className="text-xl text-gray-300">Discover our most popular and innovative services</p>
          </div>

          <div className="relative">
            <motion.div
              key={currentFeature}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${featuredServices[currentFeature].color}`}>
                      <featuredServices[currentFeature].icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                      {featuredServices[currentFeature].badge}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {featuredServices[currentFeature].title}
                  </h3>
                  <p className="text-gray-300 mb-6 text-lg">
                    {featuredServices[currentFeature].description}
                  </p>
                  <div className="grid grid-cols-1 gap-2 mb-6">
                    {featuredServices[currentFeature].features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-yellow-400" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-2">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="relative">
                  <div className={`h-64 bg-gradient-to-br ${featuredServices[currentFeature].color} rounded-2xl flex items-center justify-center`}>
                    <featuredServices[currentFeature].icon className="w-32 h-32 text-white opacity-80" />
                  </div>
                  <div className="absolute -top-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold">
                    NEW!
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Carousel Controls */}
            <div className="flex justify-center mt-8 gap-2">
              {featuredServices.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFeature(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentFeature ? 'bg-purple-400 w-8' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Inline Banner */}
        <InlineBanner theme="gradient" size="medium" />

        {/* Enhanced Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {quickServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 hover:border-purple-400/50 transition-all duration-300 group"
            >
              <div className={`p-4 rounded-lg ${service.color} mb-4 inline-block`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-4">
                {service.description}
              </p>
              <button className="text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
              className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
            >
              <stat.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Why Choose Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            We combine cutting-edge technology with deep industry expertise to deliver 
            solutions that drive real business value. Our team of experts is dedicated 
            to helping you succeed in the digital age with innovative AI, quantum computing, 
            and emerging technologies.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <Sparkles className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Innovation First</h3>
              <p className="text-gray-300">We're always ahead of the curve with the latest technologies</p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Expert Team</h3>
              <p className="text-gray-300">World-class engineers and technology specialists</p>
            </div>
            <div className="text-center">
              <Globe className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Global Reach</h3>
              <p className="text-gray-300">Serving clients worldwide with 24/7 support</p>
            </div>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
}