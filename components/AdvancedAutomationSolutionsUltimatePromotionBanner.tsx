import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  Zap, 
  Settings, 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Clock,
  Users,
  Target,
  CheckCircle,
  Rocket,
  Sparkles,
  BarChart3,
  Brain,
  Globe,
  Shield,
  Gauge,
  Lightbulb
} from 'lucide-react';

const AdvancedAutomationSolutionsUltimatePromotionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: <TrendingUp className="w-6 h-6" />, value: "99.9%", label: "Efficiency Rate" },
    { icon: <Target className="w-6 h-6" />, value: "10x", label: "Productivity Gain" },
    { icon: <Users className="w-6 h-6" />, value: "25,000+", label: "Organizations" }
  ];

  const features = [
    "Autonomous Business Operations",
    "Intelligent Process Mining",
    "Self-Evolving Systems",
    "Universal Automation Platform",
    "Predictive Automation",
    "Conscious Automation"
  ];

  const industries = [
    { icon: <Settings className="w-6 h-6" />, name: "Manufacturing", color: "from-green-500 to-emerald-500" },
    { icon: <Shield className="w-6 h-6" />, name: "Healthcare", color: "from-blue-500 to-cyan-500" },
    { icon: <BarChart3 className="w-6 h-6" />, name: "Finance", color: "from-purple-500 to-pink-500" },
    { icon: <Users className="w-6 h-6" />, name: "Retail", color: "from-orange-500 to-red-500" },
    { icon: <Rocket className="w-6 h-6" />, name: "Transportation", color: "from-indigo-500 to-blue-500" },
    { icon: <Zap className="w-6 h-6" />, name: "Energy", color: "from-yellow-500 to-orange-500" }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative overflow-hidden bg-gradient-to-r from-green-900 via-blue-900 to-indigo-900"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-400 to-blue-400 text-black px-4 py-2 rounded-full text-sm font-bold"
            >
              <Sparkles className="w-4 h-4" />
              NEW: Advanced Automation Solutions
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              Advanced Automation
              <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Ultimate Solutions
              </span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl text-gray-300 leading-relaxed"
            >
              Discover revolutionary automation solutions that transform every business process with 99.9% efficiency, self-evolving systems, and conscious automation capabilities.
            </motion.p>

            {/* Features List */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="space-y-3"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/advanced-automation-solutions-ultimate"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Automation Solutions
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                Get Automation Consultation
                <Rocket className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats and Visual */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-8"
          >
            {/* Animated Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                  className={`bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/20 transition-all duration-300 ${
                    currentStat === index ? 'bg-white/20 scale-105' : ''
                  }`}
                >
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Industry Applications */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                Industry Applications
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {industries.map((industry, index) => (
                  <div key={index} className="text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                      {industry.icon}
                    </div>
                    <div className="text-sm font-semibold text-white">{industry.name}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Automation Timeline */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl p-6 border border-white/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-green-400" />
                <h4 className="text-lg font-bold text-white">Automation Evolution</h4>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-gray-300">2025: Autonomous Operations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-sm text-gray-300">2026: Intelligent Process Mining</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-sm text-gray-300">2027: Self-Evolving Systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="text-sm text-gray-300">2028-2030: Conscious Automation</span>
                </div>
              </div>
            </motion.div>

            {/* Technology Stack */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
            >
              <h4 className="text-lg font-bold text-white mb-4">Advanced Technologies</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-white">Machine Learning</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Cpu className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-white">RPA</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-white">NLP</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-white">Computer Vision</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AdvancedAutomationSolutionsUltimatePromotionBanner;