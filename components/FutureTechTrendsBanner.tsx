import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  ArrowRight, 
  Calendar, 
  Target, 
  Users, 
  DollarSign,
  Brain,
  Cpu,
  Zap,
  Globe,
  Shield,
  Database
} from 'lucide-react';

const FutureTechTrendsBanner: React.FC = () => {
  const [currentTrend, setCurrentTrend] = useState(0);

  const trends = [
    {
      title: "AI-Powered Automation",
      growth: "+340%",
      description: "Complete business process automation",
      icon: Brain,
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Quantum Computing",
      growth: "+280%",
      description: "Exponential computational power increase",
      icon: Cpu,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Edge AI Processing",
      growth: "+450%",
      description: "Real-time AI at the network edge",
      icon: Zap,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Global AI Networks",
      growth: "+520%",
      description: "Interconnected worldwide AI systems",
      icon: Globe,
      color: "from-orange-500 to-red-500"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTrend((prev) => (prev + 1) % trends.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [trends.length]);

  const stats = [
    { icon: Users, value: "2.3M+", label: "Active Users", color: "text-blue-400" },
    { icon: Target, value: "98.7%", label: "Success Rate", color: "text-green-400" },
    { icon: DollarSign, value: "$4.2B", label: "Market Value", color: "text-purple-400" },
    { icon: Calendar, value: "2027", label: "Launch Year", color: "text-orange-400" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6"
          >
            <TrendingUp className="w-4 h-4" />
            Future Technology Trends 2027
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            The Next Wave of{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Innovation
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-12"
          >
            Stay ahead of the curve with cutting-edge AI technologies and revolutionary breakthroughs 
            that are reshaping industries and transforming the way we live and work.
          </motion.p>
        </div>

        {/* Dynamic Trend Display */}
        <motion.div
          key={currentTrend}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-white/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-6 mb-6 md:mb-0">
              <div className={`p-4 rounded-xl bg-gradient-to-r ${trends[currentTrend].color}`}>
                <trends[currentTrend].icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {trends[currentTrend].title}
                </h3>
                <p className="text-gray-300">
                  {trends[currentTrend].description}
                </p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <div className="text-4xl font-bold text-green-400 mb-2">
                {trends[currentTrend].growth}
              </div>
              <div className="text-gray-400 text-sm">Market Growth</div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
              className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technology Categories */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16"
        >
          {[
            { icon: Brain, label: "AI & ML", color: "from-purple-500 to-indigo-500" },
            { icon: Cpu, label: "Quantum Computing", color: "from-blue-500 to-cyan-500" },
            { icon: Zap, label: "Edge Computing", color: "from-green-500 to-emerald-500" },
            { icon: Globe, label: "IoT Networks", color: "from-orange-500 to-red-500" },
            { icon: Shield, label: "Cybersecurity", color: "from-red-500 to-pink-500" },
            { icon: Database, label: "Big Data", color: "from-teal-500 to-blue-500" }
          ].map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4 + index * 0.1 }}
              className="text-center group cursor-pointer"
            >
              <div className={`p-4 rounded-xl bg-gradient-to-r ${tech.color} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                <tech.icon className="w-6 h-6 text-white mx-auto" />
              </div>
              <div className="text-white text-sm font-medium">{tech.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Embrace the Future?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of forward-thinking organizations already leveraging 
              next-generation AI technologies to transform their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                Explore Technologies
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FutureTechTrendsBanner;