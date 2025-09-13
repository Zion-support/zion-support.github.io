'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Brain, Cpu, Database, Network, Shield, Zap, Globe } from 'lucide-react';

const AIInnovationShowcase2025 = () => {
  const innovations = [
    {
      icon: Brain,
      title: "Neural Network Optimization",
      description: "Advanced AI models that learn and adapt in real-time, improving accuracy by 40% while reducing computational costs.",
      color: "from-blue-500 to-blue-600",
      textColor: "text-blue-600",
      href: "/neural-network-optimization"
    },
    {
      icon: Cpu,
      title: "Edge AI Computing",
      description: "Deploy AI models directly on edge devices for instant processing and reduced latency in critical applications.",
      color: "from-green-500 to-green-600",
      textColor: "text-green-600",
      href: "/edge-ai-computing"
    },
    {
      icon: Database,
      title: "Predictive Analytics",
      description: "Leverage machine learning to predict trends, customer behavior, and market changes with 95% accuracy.",
      color: "from-purple-500 to-purple-600",
      textColor: "text-purple-600",
      href: "/predictive-analytics"
    },
    {
      icon: Network,
      title: "AI-Powered Automation",
      description: "Intelligent automation systems that handle complex workflows and decision-making processes autonomously.",
      color: "from-orange-500 to-orange-600",
      textColor: "text-orange-600",
      href: "/ai-automation"
    },
    {
      icon: Shield,
      title: "AI Security Solutions",
      description: "Advanced threat detection and prevention systems powered by machine learning algorithms.",
      color: "from-red-500 to-red-600",
      textColor: "text-red-600",
      href: "/ai-security"
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Ultra-fast AI processing capabilities that deliver results in milliseconds for time-critical applications.",
      color: "from-yellow-500 to-yellow-600",
      textColor: "text-yellow-600",
      href: "/real-time-ai"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium mb-6">
            <Brain className="w-4 h-4 mr-2" />
            AI Innovation Showcase 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Cutting-Edge AI Technologies Transforming Industries
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest breakthroughs in artificial intelligence that are revolutionizing how businesses operate, compete, and grow in the digital age.
          </p>
        </div>

        {/* Innovation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {innovations.map((innovation, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className={`w-12 h-12 bg-gradient-to-r ${innovation.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                <innovation.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{innovation.title}</h3>
              <p className="text-gray-600 mb-6">{innovation.description}</p>
              <Link 
                href={innovation.href} 
                className={`inline-flex items-center ${innovation.textColor} font-semibold hover:opacity-80 transition-opacity duration-200`}
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">AI Models Deployed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-lg opacity-90">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">40%</div>
              <div className="text-lg opacity-90">Cost Reduction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-lg opacity-90">AI Support</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Implement AI in Your Business?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our expert team will help you identify the right AI solutions for your specific needs and implement them successfully.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-consultation" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              Schedule AI Consultation
            </Link>
            <Link 
              href="/ai-demo" 
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIInnovationShowcase2025;