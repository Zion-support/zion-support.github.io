import React from 'react';
import { motion } from 'framer-motion';
import { Bot, TrendingUp, Users, Settings, BarChart3, Zap, Target, Globe } from 'lucide-react';
const AutonomousBusinessEcosystem2025: React.FC = () => {
  const ecosystemFeatures = [
    {
      icon: Bot,
      title: "Autonomous Decision Making",
      description: "AI agents that make real-time business decisions without human intervention",
      benefits: ["Reduced decision time by 95%", "24/7 operational intelligence", "Predictive business insights"]
    },
    {
      icon: TrendingUp,
      title: "Self-Optimizing Revenue",
      description: "Dynamic pricing and revenue optimization that adapts to market conditions",
      benefits: ["Average 40% revenue increase", "Real-time market adaptation", "Competitive advantage"]
    },
    {
      icon: Users,
      title: "Intelligent Customer Management",
      description: "AI-powered customer relationship management with personalized experiences",
      benefits: ["95% customer satisfaction", "Automated support resolution", "Predictive customer needs"]
    },
    {
      icon: Settings,
      title: "Automated Operations",
      description: "End-to-end business process automation with intelligent monitoring",
      benefits: ["80% operational efficiency gain", "Zero-downtime operations", "Cost reduction"]
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Advanced forecasting and trend analysis for strategic planning",
      benefits: ["99% forecast accuracy", "Risk mitigation", "Strategic insights"]
    },
    {
      icon: Zap,
      title: "Real-time Adaptation",
      description: "Instant response to market changes and business conditions",
      benefits: ["Lightning-fast adaptation", "Market opportunity capture", "Competitive edge"]
    }
  ];
  const successMetrics = [
    { metric: "$2.5M+", label: "Average Revenue Increase" },
    { metric: "85%", label: "Cost Reduction" },
    { metric: "99.9%", label: "System Reliability" },
    { metric: "24/7", label: "Autonomous Operation" }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-6 py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mb-8">
            <Globe className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Autonomous Business Ecosystem 2025
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Transform your business into a self-managing, self-optimizing ecosystem that operates 
            autonomously while delivering unprecedented results and growth.
          </p>
        </motion.div>
        {/* Ecosystem Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {ecosystemFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-blue-300">
                          <Target className="h-4 w-4 mr-2 text-green-400" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-3xl p-12 mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Proven Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {metric.metric}
                </div>
                <div className="text-gray-300 text-lg">{metric.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
        {/* Implementation Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Ready to Go Autonomous?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our autonomous business ecosystem can be deployed in 30 days, with immediate 
            results visible within the first week of operation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              Deploy Autonomous Ecosystem
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-blue-500 text-blue-400 px-10 py-4 rounded-xl font-semibold text-lg hover:bg-blue-500/10 transition-all duration-300"
            >
              Schedule Demo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );

export default AutonomousBusinessEcosystem2025;