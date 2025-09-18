<<<<<<< HEAD
"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp
  DollarSign
  Users
  Clock
  Award,
  BarChart3,
  PieChart,
  Activity,
  Zap,
  Target,
  Star,
  ArrowUp,
  Play,
  Pause
} from 'lucide-react';

const InteractiveSuccessMetrics2025 = () => {
  const [isPlayingsetIsPlaying] = useState(true);
  const [currentMetricsetCurrentMetric] = useState(0);
  const [animatedValuesetAnimatedValues] = useState({
    revenue: 0,
    clients: 0,
    efficiency: 0,
    satisfaction: 0,
    growth: 0,
    savings: 0
  });

  const metrics = [
    {
      id: 0,
      title: "Revenue Growth",
      value: "2,847%",
      description: "Average revenue increase for our clients",
      icon: <DollarSign className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
      chart: "📈",
      details: [
        "Year-over-year growth tracking",
        "Real-time revenue analytics",
        "Predictive revenue modeling",
        "ROI optimization strategies"
      ]
    },
    {
      id: 1,
      title: "Client Success Rate",
      value: "98.7%",
      description: "Client satisfaction and retention rate",
      icon: <Users className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-600",
      chart: "👥",
      details: [
        "24/7 client support system",
        "Personalized success plans",
        "Regular performance reviews",
        "Continuous improvement cycles"
      ]
    },
    {
      id: 2,
      title: "Efficiency Boost",
      value: "567%",
      description: "Operational efficiency improvement",
      icon: <Zap className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-600",
      chart: "⚡",
      details: [
        "Automated workflow systems",
        "AI-powered optimization",
        "Resource allocation algorithms",
        "Performance monitoring tools"
      ]
    },
    {
      id: 3,
      title: "Time Savings",
      value: "15,000",
      description: "Hours saved per month per client",
      icon: <Clock className="w-8 h-8" />,
      color: "from-purple-500 to-pink-600",
      chart: "⏰",
      details: [
        "Process automation",
        "Intelligent scheduling",
        "Task prioritization",
        "Workflow optimization"
      ]
    }
  ];

  const achievements = [
    { icon: <Award className="w-6 h-6" />title: "Industry Leader"count: "3 Years Running" },
    { icon: <Star className="w-6 h-6" />title: "5-Star Rating"count: "99.8% Reviews" },
    { icon: <Target className="w-6 h-6" />title: "Success Rate"count: "98.7%" },
    { icon: <TrendingUp className="w-6 h-6" />title: "Growth Rate"count: "2,847%" }
  ];

  useEffect(() => {
    // Animate metric values
    const targets = {
      revenue: 2847,
      clients: 98.7,
      efficiency: 567,
      satisfaction: 99.8,
      growth: 15000,
      savings: 2.4
    };

    Object.keys(targets).forEach(key => {
      let start = 0;
      const target = targets[key as keyof typeof targets];
      const increment = target / 100;
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(timer);
        }
        setAnimatedValues(prev => ({ 
          ...prev
          [key]: key.includes('clients') || key.includes('satisfaction') 
            ? Number(start.toFixed(1)) 
            : Math.floor(start) 
        }));
      }30);
    });

    // Auto-rotate metrics
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentMetric((prev) => (prev + 1) % metrics.length);
      }3000);
      return () => clearInterval(interval);
    }
  }[isPlayingmetrics.length]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
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

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/5 to-purple-600/5 animate-pulse" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-bounce" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="flex items-center justify-center mb-6">
            <BarChart3 className="w-12 h-12 text-green-400 mr-4" />
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-green-200 to-blue-200 bg-clip-text text-transparent">
              Success Metrics 2025
            </h2>
          </motion.div>
          
          <motion.p variants={itemVariants} className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Real-time performance metrics showcasing unprecedented business transformation results.
            See how our clients achieve extraordinary growth and efficiency.
          </motion.p>

          <motion.div variants={itemVariants} className="flex items-center justify-center space-x-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300"
            >
              {isPlaying ? <Pause className="w-5 h-5 mr-2" /> : <Play className="w-5 h-5 mr-2" />}
              {isPlaying ? 'Pause' : 'Play'} Animation
            </button>
          </motion.div>
        </motion.div>

        {/* Main Metrics Display */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Current Metric Showcase */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMetric}
                initial={{ opacity: 0x: -50 }}
                animate={{ opacity: 1x: 0 }}
                exit={{ opacity: 0x: 50 }}
                transition={{ duration: 0.5 }}
                className={`p-8 rounded-2xl bg-gradient-to-br ${metrics[currentMetric].color} shadow-2xl relative overflow-hidden`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="text-9xl font-bold text-white/20 absolute top-4 right-4">
                    {metrics[currentMetric].chart}
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="p-4 bg-white/20 rounded-full mr-6">
                      {metrics[currentMetric].icon}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {metrics[currentMetric].title}
                      </h3>
                      <p className="text-white/90 text-lg">
                        {metrics[currentMetric].description}
                      </p>
                    </div>
                  </div>

                  <div className="text-6xl font-bold text-white mb-8">
                    {metrics[currentMetric].value}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {metrics[currentMetric].details.map((detailindex) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center text-white/90"
                      >
                        <ArrowUp className="w-4 h-4 mr-2 text-white" />
                        <span className="text-sm">{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Metric Navigation */}
            <div className="flex justify-center mt-6 space-x-4">
              {metrics.map((_index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setCurrentMetric(index);
                    setIsPlaying(false);
                  }}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    currentMetric === index 
                      ? 'bg-white scale-125 shadow-lg' 
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>
          </div>

          {/* Live Stats Panel */}
          <div className="space-y-6">
            <div className="p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20">
              <h4 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Activity className="w-6 h-6 mr-2 text-green-400" />
                Live Performance
              </h4>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-white mb-2">
                    <span>Revenue Growth</span>
                    <span className="font-bold">{animatedValues.revenue}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <motion.div 
                      className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(animatedValues.revenue / 30100)}%` }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-white mb-2">
                    <span>Client Satisfaction</span>
                    <span className="font-bold">{animatedValues.clients}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <motion.div 
                      className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${animatedValues.clients}%` }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-white mb-2">
                    <span>Efficiency Boost</span>
                    <span className="font-bold">{animatedValues.efficiency}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <motion.div 
                      className="bg-gradient-to-r from-yellow-400 to-orange-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(animatedValues.efficiency / 6100)}%` }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20">
              <h4 className="text-xl font-bold text-white mb-4">Achievements</h4>
              <div className="space-y-3">
                {achievements.map((achievementindex) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0x: -20 }}
                    animate={{ opacity: 1x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between text-white"
                  >
                    <div className="flex items-center">
                      <div className="text-yellow-400 mr-3">{achievement.icon}</div>
                      <span className="text-sm">{achievement.title}</span>
                    </div>
                    <span className="font-bold text-sm">{achievement.count}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { icon: <DollarSign className="w-6 h-6" />value: `$${animatedValues.savings}M`label: "Cost Savings" },
            { icon: <Users className="w-6 h-6" />value: `${animatedValues.growth.toLocaleString()}`label: "Hours Saved" },
            { icon: <PieChart className="w-6 h-6" />value: `${animatedValues.satisfaction}%`label: "Success Rate" },
            { icon: <TrendingUp className="w-6 h-6" />value: "24/7"label: "Monitoring" }
          ].map((statindex) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 text-center group"
            >
              <div className="text-blue-400 mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveSuccessMetrics2025;
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
