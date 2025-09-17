import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Lightbulb, 
  Target, 
  Award, 
  TrendingUp, 
  Users, 
  Globe,
  Zap,
  Shield,
  ArrowRight,
  Play,
  CheckCircle,
  Star,
  Sparkles,
  Rocket
} from 'lucide-react';
const RevolutionaryInnovationBanner2025 = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const stats = [
    { number: "500%", label: "Average ROI Increase", icon: TrendingUp },
    { number: "10,000+", label: "Companies Transformed", icon: Users },
    { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
    { number: "200+", label: "Countries Served", icon: Globe }
  ];
  const innovations = [
    {
      title: "AI-Powered Automation",
      description: "Revolutionary AI that automates complex business processes with unprecedented accuracy",
      icon: Lightbulb,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Quantum Computing",
      description: "Next-generation quantum algorithms solving previously impossible problems",
      icon: Zap,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Neural Networks",
      description: "Advanced neural architectures that learn and adapt in real-time",
      icon: Target,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Blockchain Security",
      description: "Unbreakable security protocols powered by distributed ledger technology",
      icon: Shield,
      color: "from-red-500 to-orange-500"
    }
  ];
  return (
    <div className="relative py-20 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%253Csvg%2520width%253D%2522100%2522%2520height%253D%2522100%2522%2520viewBox%253D%25220%25200%2520100%2520100%2522%2520xmlns%253D%2522http%253A%2F%2Fwww.w3.org%2F2000%2Fsvg%2522%253E%253Cg%2520fill%253D%2522none%2522%2520fill-rule%253D%2522evenodd%2522%253E%253Cg%2520fill%253D%2522%2523ffffff%2522%2520fill-opacity%253D%25220.05%2522%253E%253Cpath%2520d%253D%2522M50%252050c0-27.614-22.386-50-50-50v100c27.614%25200%252050-22.386%252050-50z%2522%2F%253E%253C%2Fg%253E%253C%2Fg%253E%253C%2Fsvg%253E')] opacity-30" />
      <div className="relative max-w-7xl mx-auto">
        {/* Main Banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full text-sm font-bold mb-8">
            <Rocket className="w-5 h-5" />
            <span>🚀 REVOLUTIONARY BREAKTHROUGH 2025</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight">
            The Future of
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Innovation
            </span>
            <br />
            Starts Here
          </h1>
          <p className="text-2xl text-gray-200 max-w-4xl mx-auto mb-12 leading-relaxed">
            Experience the most advanced, cutting-edge technology that's transforming industries 
            and reshaping the world as we know it. Join the revolution today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-10 py-5 rounded-2xl font-bold text-xl hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
              <Play className="w-6 h-6" />
              Watch Demo
            </button>
            <button className="border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white hover:text-purple-900 transition-all duration-300 flex items-center gap-3">
              Learn More
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </motion.div>
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="text-center p-6 bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                {React.createElement(stat.icon, { className: "w-8 h-8 text-black" })}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* Innovation Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Revolutionary Innovations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {innovations.map((innovation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="group p-8 bg-white bg-opacity-5 backdrop-blur-sm rounded-3xl border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 mb-6 bg-gradient-to-r ${innovation.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <innovation.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {innovation.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {innovation.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Success Stories
            </h3>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              See how our revolutionary technology has transformed businesses worldwide
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Fortune 500</h4>
              <p className="text-purple-100">
                "Increased efficiency by 300% and reduced costs by 50% in just 6 months"
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Startup Success</h4>
              <p className="text-purple-100">
                "Scaled from 0 to $10M ARR in 18 months with our AI-powered solutions"
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Global Impact</h4>
              <p className="text-purple-100">
                "Expanded to 50+ countries with seamless integration and local support"
              </p>
            </div>
          </div>
        </motion.div>
        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl p-8 md:p-12">
            <h3 className="text-4xl md:text-5xl font-black text-black mb-6">
              Ready to Join the Revolution?
            </h3>
            <p className="text-xl text-black mb-8 max-w-2xl mx-auto font-medium">
              Don't get left behind. Be part of the future today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-black text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-gray-800 transition-colors duration-300 flex items-center gap-3">
                Get Started Now
                <ArrowRight className="w-6 h-6" />
              </button>
              <button className="border-2 border-black text-black px-10 py-5 rounded-2xl font-bold text-xl hover:bg-black hover:text-white transition-colors duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );

};


export default RevolutionaryInnovationBanner2025;
</div></div>
