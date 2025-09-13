'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Users, TrendingUp, Zap, Globe, Shield, Brain } from 'lucide-react';

const NewContentShowcase2025 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const contentItems = [
    {
      id: 1,
      title: "AI-Powered Business Automation",
      description: "Transform your operations with cutting-edge AI automation solutions that reduce costs by 60% and increase efficiency by 300%.",
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      stats: "300% Efficiency Boost",
      color: "from-blue-500 to-blue-700"
    },
    {
      id: 2,
      title: "Quantum Computing Solutions",
      description: "Harness the power of quantum computing for complex problem-solving and data processing at unprecedented speeds.",
      icon: <Zap className="w-8 h-8 text-purple-600" />,
      stats: "1000x Faster Processing",
      color: "from-purple-500 to-purple-700"
    },
    {
      id: 3,
      title: "Global Enterprise Security",
      description: "Advanced cybersecurity solutions protecting over 10,000 enterprises worldwide with 99.9% uptime guarantee.",
      icon: <Shield className="w-8 h-8 text-green-600" />,
      stats: "99.9% Uptime Guarantee",
      color: "from-green-500 to-green-700"
    },
    {
      id: 4,
      title: "Neural Interface Technology",
      description: "Revolutionary brain-computer interfaces enabling direct neural control of digital systems and applications.",
      icon: <Globe className="w-8 h-8 text-orange-600" />,
      stats: "Revolutionary Technology",
      color: "from-orange-500 to-orange-700"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      content: "Zion Tech Group transformed our entire infrastructure. ROI increased by 400% in just 6 months.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CTO, InnovateLabs",
      content: "The AI automation solutions saved us $2M annually while improving our operational efficiency.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "VP Engineering, FutureTech",
      content: "Their quantum computing implementation gave us a competitive edge we never thought possible.",
      rating: 5
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              AI Solutions
            </span> for 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the future of technology with our cutting-edge AI, quantum computing, and automation solutions that are transforming industries worldwide.
          </p>
        </motion.div>

        {/* Content Carousel */}
        <div className="relative mb-16">
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className={`bg-gradient-to-r ${contentItems[currentSlide].color} p-8 md:p-12 text-white rounded-2xl`}
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-6">
                      {contentItems[currentSlide].icon}
                      <span className="text-2xl font-bold">{contentItems[currentSlide].title}</span>
                    </div>
                    <p className="text-lg mb-6 opacity-90">
                      {contentItems[currentSlide].description}
                    </p>
                    <div className="flex items-center gap-4">
                      <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-semibold">
                        {contentItems[currentSlide].stats}
                      </span>
                      <button className="flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="w-full md:w-80 h-64 bg-white/10 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-bold mb-2">2025</div>
                      <div className="text-lg opacity-80">Next-Gen Technology</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {contentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-blue-600 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {[
            { label: "Enterprise Clients", value: "10,000+", icon: <Users className="w-6 h-6" /> },
            { label: "Countries Served", value: "150+", icon: <Globe className="w-6 h-6" /> },
            { label: "Success Rate", value: "99.9%", icon: <TrendingUp className="w-6 h-6" /> },
            { label: "ROI Average", value: "400%", icon: <Star className="w-6 h-6" /> }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-blue-600 mb-2 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-2xl p-8 shadow-xl"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            What Our Clients Say
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-xl">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of enterprises already benefiting from our revolutionary AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NewContentShowcase2025;