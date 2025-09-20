"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain
  Zap
  Globe
  Shield
  ArrowRight,
  Play,
  Star,
  CheckCircle,
  TrendingUp,
  Lightbulb,
  Rocket,
  Target,
  Users,
  BarChart3
} from 'lucide-react';

const TechnologyTrendsShowcase2025 = () => {
  const [activeTrendsetActiveTrend] = useState(0);
  const [isPlayingsetIsPlaying] = useState(false);

  const trends = [
    {
      id: 1,
      title: "AI-Powered Automation Revolution",
      description: "The next generation of intelligent automation that learnsadaptsand evolves with your business needs.",
      icon: Brain,
      color: "from-blue-500 to-purple-600",
      stats: {
        adoption: "85%",
        efficiency: "300%",
        costReduction: "60%"
      },
      features: [
        "Self-learning algorithms",
        "Predictive maintenance",
        "Intelligent decision making",
        "Seamless integration"
      ],
      impact: "High",
      timeline: "2025-2026"
    },
    {
      id: 2,
      title: "Edge Computing & Real-time Processing",
      description: "Bringing computation closer to data sources for ultra-fast processing and reduced latency.",
      icon: Zap,
      color: "from-green-500 to-teal-600",
      stats: {
        adoption: "70%",
        efficiency: "250%",
        costReduction: "45%"
      },
      features: [
        "Ultra-low latency",
        "Local data processing",
        "Enhanced security",
        "Scalable infrastructure"
      ],
      impact: "Very High",
      timeline: "2025-2027"
    },
    {
      id: 3,
      title: "Quantum-Enhanced Security",
      description: "Next-generation security protocols powered by quantum computing principles for unbreakable protection.",
      icon: Shield,
      color: "from-red-500 to-pink-600",
      stats: {
        adoption: "60%",
        efficiency: "400%",
        costReduction: "35%"
      },
      features: [
        "Quantum encryption",
        "Advanced threat detection",
        "Zero-trust architecture",
        "Automated compliance"
      ],
      impact: "Critical",
      timeline: "2025-2028"
    },
    {
      id: 4,
      title: "Sustainable Technology Solutions",
      description: "Green computing and eco-friendly technology solutions that reduce environmental impact while boosting performance.",
      icon: Globe,
      color: "from-emerald-500 to-green-600",
      stats: {
        adoption: "90%",
        efficiency: "200%",
        costReduction: "50%"
      },
      features: [
        "Carbon-neutral operations",
        "Energy-efficient algorithms",
        "Sustainable infrastructure",
        "Green data centers"
      ],
      impact: "Essential",
      timeline: "2025-2030"
    }
  ];

  const predictions = [
    {
      year: "2025",
      prediction: "AI becomes mainstream in 85% of businesses",
      confidence: 95,
      impact: "Transformational"
    },
    {
      year: "2026",
      prediction: "Edge computing adoption reaches 70%",
      confidence: 88,
      impact: "High"
    },
    {
      year: "2027",
      prediction: "Quantum security becomes standard",
      confidence: 75,
      impact: "Critical"
    },
    {
      year: "2028",
      prediction: "Sustainable tech is mandatory",
      confidence: 92,
      impact: "Essential"
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setActiveTrend((prev) => (prev + 1) % trends.length);
      }4000);
      return () => clearInterval(interval);
    }
  }[isPlaying]);

  const currentTrend = trends[activeTrend];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 text-sm font-medium mb-4"
          >
            <TrendingUp className="w-4 h-4 mr-2" />
            Technology Trends Showcase 2025
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            The Future of Technology is
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Here Today</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Discover the cutting-edge technologies that will shape the next decade and learn how to prepare your business for the future.
          </motion.p>
        </div>

        {/* Trend Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {trends.map((trendindex) => {
            const Icon = trend.icon;
            return (
              <motion.button
                key={trend.id}
                onClick={() => {
                  setActiveTrend(index);
                  setIsPlaying(false);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTrend === index
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                <Icon className="w-5 h-5 mr-2" />
                {trend.title.split(' ')[0]}
              </motion.button>
            );
          })}
        </div>

        {/* Main Trend Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTrend}
            initial={{ opacity: 0x: 20 }}
            animate={{ opacity: 1x: 0 }}
            exit={{ opacity: 0x: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12"
          >
            <div className={`h-2 bg-gradient-to-r ${currentTrend.color}`} />
            
            <div className="p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Side - Trend Details */}
                <div>
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${currentTrend.color} flex items-center justify-center text-white mr-4`}>
                      <currentTrend.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">
                        {currentTrend.title}
                      </h3>
                      <div className="flex items-center gap-4">
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                          {currentTrend.timeline}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          currentTrend.impact === 'Critical' ? 'bg-red-100 text-red-800' :
                          currentTrend.impact === 'Very High' ? 'bg-orange-100 text-orange-800' :
                          currentTrend.impact === 'High' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {currentTrend.impact} Impact
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg text-gray-600 mb-8">
                    {currentTrend.description}
                  </p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900 mb-1">
                        {currentTrend.stats.adoption}
                      </div>
                      <div className="text-sm text-gray-600">Adoption Rate</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900 mb-1">
                        {currentTrend.stats.efficiency}
                      </div>
                      <div className="text-sm text-gray-600">Efficiency Gain</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900 mb-1">
                        {currentTrend.stats.costReduction}
                      </div>
                      <div className="text-sm text-gray-600">Cost Reduction</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    {currentTrend.features.map((featureindex) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0x: -20 }}
                        animate={{ opacity: 1x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right Side - Visual */}
                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`h-80 rounded-xl bg-gradient-to-br ${currentTrend.color} p-8 text-white relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="relative z-10">
                      <div className="text-6xl font-bold mb-4">
                        {currentTrend.stats.adoption}
                      </div>
                      <div className="text-xl opacity-90 mb-6">
                        Adoption Rate
                      </div>
                      <div className="space-y-2">
                        {currentTrend.features.slice(02).map((featureindex) => (
                          <div key={index} className="flex items-center">
                            <CheckCircle className="w-4 h-4 mr-2" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Auto-play Controls */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
              isPlaying
                ? 'bg-purple-100 text-purple-800'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            <div className={`w-3 h-3 rounded-full ${isPlaying ? 'bg-purple-600' : 'bg-gray-400'}`} />
            {isPlaying ? 'Auto-playing' : 'Paused'}
          </button>
        </div>

        {/* Future Predictions */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Future Technology Predictions
            </h3>
            <p className="text-lg text-gray-600">
              Based on current trends and expert analysis
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {predictions.map((predictionindex) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center"
              >
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {prediction.year}
                </div>
                <div className="text-sm text-gray-600 mb-4">
                  {prediction.prediction}
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Confidence:</span>
                    <span className="font-semibold">{prediction.confidence}%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Impact:</span>
                    <span className={`font-semibold ${
                      prediction.impact === 'Transformational' ? 'text-green-600' :
                      prediction.impact === 'Critical' ? 'text-red-600' :
                      prediction.impact === 'High' ? 'text-orange-600' :
                      'text-blue-600'
                    }`}>
                      {prediction.impact}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to Embrace the Future?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Stay ahead of the curve with our cutting-edge technology solutions and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Explore Solutions
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center"
            >
              <Lightbulb className="w-5 h-5 mr-2" />
              Get Expert Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TechnologyTrendsShowcase2025;
