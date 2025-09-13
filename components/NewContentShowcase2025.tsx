'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Zap, Target, Users, TrendingUp } from 'lucide-react';

const NewContentShowcase2025 = () => {
  const newContentItems = [
    {
      id: 1,
      title: "AI-Powered Business Automation Suite 2025",
      description: "Revolutionary automation tools that transform your business operations with 95% efficiency gains",
      category: "Automation",
      icon: Zap,
      color: "from-blue-500 to-purple-600",
      features: ["Smart Workflow Design", "Real-time Analytics", "Custom Integrations"],
      cta: "Explore Now"
    },
    {
      id: 2,
      title: "Quantum Computing Solutions for Enterprises",
      description: "Breakthrough quantum algorithms that solve complex business problems 1000x faster",
      category: "Quantum Tech",
      icon: Target,
      color: "from-purple-500 to-pink-600",
      features: ["Quantum Optimization", "Advanced Cryptography", "Machine Learning"],
      cta: "Learn More"
    },
    {
      id: 3,
      title: "Neural Interface Development Platform",
      description: "Build next-generation brain-computer interfaces with our cutting-edge development tools",
      category: "Neural Tech",
      icon: Users,
      color: "from-green-500 to-teal-600",
      features: ["BCI SDK", "Real-time Processing", "Safety Protocols"],
      cta: "Get Started"
    },
    {
      id: 4,
      title: "Advanced AI Consciousness Framework",
      description: "Develop AI systems with enhanced consciousness and emotional intelligence capabilities",
      category: "AI Consciousness",
      icon: Sparkles,
      color: "from-orange-500 to-red-600",
      features: ["Emotional AI", "Consciousness Metrics", "Ethical Guidelines"],
      cta: "Discover"
    },
    {
      id: 5,
      title: "Space Technology Integration Suite",
      description: "Connect your business to space-based technologies and satellite networks",
      category: "Space Tech",
      icon: TrendingUp,
      color: "from-indigo-500 to-blue-600",
      features: ["Satellite Integration", "Space Analytics", "Global Connectivity"],
      cta: "Explore"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            NEW IN 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary New Content & Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest breakthrough technologies and innovative solutions that are transforming industries worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newContentItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${item.color} mb-6`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700 mb-3">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mb-6">
                  <ul className="space-y-2">
                    {item.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="#"
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group-hover:translate-x-1 transform duration-200"
                >
                  {item.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Explore All New Content?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of businesses already using our revolutionary solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                View All Content
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="#"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
              >
                Download Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentShowcase2025;