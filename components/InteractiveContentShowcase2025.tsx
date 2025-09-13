'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Target, 
  TrendingUp, 
  Users, 
  Globe, 
  ArrowRight,
  Play,
  Star,
  CheckCircle,
  Lightbulb,
  Rocket
} from 'lucide-react';

const InteractiveContentShowcase2025 = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const tabs = [
    { id: 0, label: 'AI Solutions', icon: Brain },
    { id: 1, label: 'Automation', icon: Zap },
    { id: 2, label: 'Analytics', icon: TrendingUp },
    { id: 3, label: 'Integration', icon: Target }
  ];

  const content = [
    {
      title: "Revolutionary AI-Powered Business Intelligence",
      description: "Transform your data into actionable insights with our cutting-edge AI algorithms that learn and adapt to your business needs.",
      features: [
        "Real-time data processing",
        "Predictive analytics",
        "Automated reporting",
        "Custom dashboards"
      ],
      stats: { value: "300%", label: "ROI Increase" },
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Intelligent Process Automation Suite",
      description: "Eliminate manual tasks and boost productivity with our comprehensive automation platform that handles complex workflows seamlessly.",
      features: [
        "Workflow automation",
        "Smart document processing",
        "API integrations",
        "Custom triggers"
      ],
      stats: { value: "85%", label: "Time Saved" },
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Advanced Performance Analytics",
      description: "Gain deep insights into your business performance with our sophisticated analytics engine that tracks every metric that matters.",
      features: [
        "Real-time monitoring",
        "Custom metrics",
        "Performance alerts",
        "Trend analysis"
      ],
      stats: { value: "250%", label: "Efficiency Gain" },
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Seamless System Integration",
      description: "Connect all your business tools and systems with our powerful integration platform that ensures data flows smoothly across your organization.",
      features: [
        "API management",
        "Data synchronization",
        "Security protocols",
        "Custom connectors"
      ],
      stats: { value: "99.9%", label: "Uptime" },
      color: "from-purple-500 to-pink-600"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      content: "This platform revolutionized our operations. We've seen incredible results in just 3 months.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CTO, InnovateLabs",
      content: "The automation capabilities are unmatched. Our team productivity has skyrocketed.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Director, GlobalTech",
      content: "The analytics insights helped us identify opportunities we never knew existed.",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-medium mb-4"
          >
            <Star className="w-4 h-4 mr-2" />
            Interactive Content Showcase 2025
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Experience the Future of
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Business Technology</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Discover how our cutting-edge solutions can transform your business with interactive demos, real-time analytics, and intelligent automation.
          </motion.p>
        </div>

        {/* Interactive Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {tab.label}
                </motion.button>
              );
            })}
          </div>

          {/* Content Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${content[activeTab].color}`} />
              <div className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {content[activeTab].title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      {content[activeTab].description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      {content[activeTab].features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                          <span className="text-gray-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <div className={`text-3xl font-bold bg-gradient-to-r ${content[activeTab].color} bg-clip-text text-transparent`}>
                          {content[activeTab].stats.value}
                        </div>
                        <div className="text-sm text-gray-600">{content[activeTab].stats.label}</div>
                      </div>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Watch Demo
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </motion.button>
                    </div>
                  </div>

                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`h-80 rounded-xl bg-gradient-to-br ${content[activeTab].color} p-8 text-white relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-black/10" />
                      <div className="relative z-10">
                        <div className="text-6xl font-bold mb-4">
                          {content[activeTab].stats.value}
                        </div>
                        <div className="text-xl opacity-90 mb-6">
                          {content[activeTab].stats.label}
                        </div>
                        <div className="space-y-2">
                          {content[activeTab].features.slice(0, 2).map((feature, index) => (
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
        </div>

        {/* Interactive Demo Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Try Our Interactive Demo
            </h3>
            <p className="text-lg text-gray-600">
              Experience our platform capabilities firsthand
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Brain, title: "AI Analysis", description: "See how our AI processes your data" },
                { icon: Zap, title: "Automation", description: "Watch workflows execute automatically" },
                { icon: TrendingUp, title: "Analytics", description: "Explore real-time performance metrics" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className={`p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                    hoveredCard === index
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <item.icon className={`w-8 h-8 mb-4 ${
                    hoveredCard === index ? 'text-blue-600' : 'text-gray-600'
                  }`} />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
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
          className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of companies already using our platform to drive growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Start Free Trial
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center"
            >
              <Lightbulb className="w-5 h-5 mr-2" />
              Schedule Demo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveContentShowcase2025;