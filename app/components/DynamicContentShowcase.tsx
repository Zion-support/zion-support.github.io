'use client';
import React, { useState, useEffect } from 'react';
import { Cloud, Zap, Shield, Globe, Brain, CheckCircle, ArrowRight } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const features = [
    {
      id: 1,
      title: 'AI-Powered Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence technology.',
      icon: Brain,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      id: 2,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions that grow with your business needs.',
      icon: Cloud,
      color: 'from-green-500 to-blue-600'
    },
    {
      id: 3,
      title: 'AI Automation',
      description: 'Automate complex business processes with intelligent AI systems.',
      icon: Zap,
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 4,
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with comprehensive AI-powered security solutions.',
      icon: Shield,
      color: 'from-red-500 to-orange-600'
    },
    {
      id: 5,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance standards',
      icon: Shield,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      id: 6,
      title: 'Global Scalability',
      description: 'Scale effortlessly across multiple regions with automatic load balancing',
      icon: Globe,
      color: 'from-teal-500 to-cyan-600'
    }
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Cost-effective implementation'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [features.length]);

  const currentFeature = features[currentIndex];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Dynamic Solutions Showcase
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how our innovative technology solutions can transform your business
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Feature Display */}
            <div className="relative">
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                <div className={`w-16 h-16 mb-6 bg-gradient-to-r ${currentFeature.color} rounded-xl flex items-center justify-center`}>
                  <currentFeature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{currentFeature.title}</h3>
                <p className="text-gray-300 mb-6">{currentFeature.description}</p>
                <a
                  href="/contact"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
              
              {/* Feature indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-cyan-400' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Benefits List */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Key Benefits</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;