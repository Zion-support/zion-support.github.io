'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, Zap, Globe, Shield, TrendingUp, Award } from 'lucide-react';

const UltimateContentShowcase2025 = () => {
  const contentSections = [
    {
      title: "AI-Powered Business Automation",
      description: "Transform your operations with cutting-edge AI automation solutions that reduce costs by 60% and increase efficiency by 300%.",
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      stats: "300% Efficiency Boost",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Quantum Computing Solutions",
      description: "Harness the power of quantum computing for complex problem-solving and optimization challenges.",
      icon: <Globe className="w-8 h-8 text-green-600" />,
      stats: "10x Processing Speed",
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Neural Interface Technology",
      description: "Revolutionary brain-computer interfaces for enhanced productivity and seamless human-AI collaboration.",
      icon: <Users className="w-8 h-8 text-purple-600" />,
      stats: "95% Accuracy Rate",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Advanced Security Systems",
      description: "Next-generation cybersecurity solutions with AI-powered threat detection and prevention.",
      icon: <Shield className="w-8 h-8 text-red-600" />,
      stats: "99.9% Security Rate",
      color: "from-red-500 to-orange-600"
    },
    {
      title: "Predictive Analytics Platform",
      description: "Advanced machine learning models that predict market trends and business outcomes with 98% accuracy.",
      icon: <TrendingUp className="w-8 h-8 text-indigo-600" />,
      stats: "98% Prediction Accuracy",
      color: "from-indigo-500 to-blue-600"
    },
    {
      title: "Enterprise Integration Suite",
      description: "Seamlessly integrate all your business systems with our comprehensive enterprise solution platform.",
      icon: <Award className="w-8 h-8 text-yellow-600" />,
      stats: "50+ Integrations",
      color: "from-yellow-500 to-orange-600"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      content: "Zion Tech Group transformed our entire operation. The AI automation increased our productivity by 300% in just 3 months.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CTO, InnovateLabs",
      content: "The quantum computing solutions helped us solve complex optimization problems that were impossible before.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "VP Operations, GlobalTech",
      content: "Their neural interface technology is revolutionary. Our team productivity has never been higher.",
      rating: 5
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ultimate Content Showcase 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the future of technology with our comprehensive suite of AI-powered solutions, 
            quantum computing platforms, and revolutionary business automation tools.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {contentSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${section.color} mb-6`}>
                {section.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {section.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {section.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-500">
                  {section.stats}
                </span>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Our Clients Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of companies already using our cutting-edge solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Get Started Today
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2025;