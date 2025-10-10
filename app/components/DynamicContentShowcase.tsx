'use client';
import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users, Clock, Award } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
=======
import { CheckCircle, ArrowRight, Star, Zap, Shield, Brain, Cloud, BarChart, Users, Target, TrendingUp } from 'lucide-react';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
}

interface Benefit {
  id: number;
  title: string;
  description: string;
}

const DynamicContentShowcase: React.FC = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
>>>>>>> cursor/website-audit-and-update-with-deployment-1f73

  const features = [
    {
<<<<<<< HEAD
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that learn and adapt to your business needs in real-time'
=======
      id: 1,
      title: 'AI-Powered Analytics',
      description: 'Transform your data into actionable insights with advanced machine learning algorithms.',
      icon: BarChart,
      color: 'from-blue-500 to-purple-600'
>>>>>>> cursor/website-audit-and-update-with-deployment-1f73
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
<<<<<<< HEAD
      title: 'Lightning Fast Performance',
      description: 'Optimized for speed with sub-second response times and seamless user experience'
=======
      color: 'from-purple-500 to-pink-600'
>>>>>>> cursor/website-audit-and-update-with-deployment-1f73
    },
    {
      id: 4,
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with comprehensive AI-powered security solutions.',
      icon: Shield,
<<<<<<< HEAD
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Scalability',
      description: 'Scale effortlessly across multiple regions with automatic load balancing'
    }
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CTO',
      content: 'This solution transformed our operations completely. The AI insights are incredible.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      role: 'CEO',
      content: 'The performance improvements we\'ve seen are remarkable. Highly recommended!',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'CloudFirst Solutions',
      role: 'VP Engineering',
      content: 'Outstanding security features and seamless integration. Perfect for our needs.',
      rating: 5
=======
      color: 'from-orange-500 to-red-600'
    }
  ];

  const benefits: Benefit[] = [
    {
      id: 1,
      title: '300% ROI',
      description: 'Average return on investment'
    },
    {
      id: 2,
      title: '70% Cost Reduction',
      description: 'Operational cost savings'
    },
    {
      id: 3,
      title: '90% Efficiency Gains',
      description: 'Process optimization'
    },
    {
      id: 4,
      title: '24/7 Support',
      description: 'Round-the-clock assistance'
>>>>>>> cursor/website-audit-and-update-with-deployment-1f73
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
<<<<<<< HEAD
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 3000);
=======
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000);
>>>>>>> cursor/website-audit-and-update-with-deployment-1f73

    return () => clearInterval(timer);
  }, [features.length]);

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Dynamic <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the power of our AI and IT solutions through interactive demonstrations and real-world applications.
          </p>
        </div>

<<<<<<< HEAD
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mb-4">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
=======
        {/* Feature Showcase */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Feature Content */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${features[currentFeature].color} rounded-lg flex items-center justify-center`}>
                  {React.createElement(features[currentFeature].icon, { className: "w-6 h-6 text-white" })}
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-4">
                {features[currentFeature].title}
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                {features[currentFeature].description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {features.map((feature, index) => (
                  <button
                    key={feature.id}
                    onClick={() => setCurrentFeature(index)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      currentFeature === index
                        ? 'bg-blue-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {feature.title}
                  </button>
                ))}
              </div>
              
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center gap-2">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>
>>>>>>> cursor/website-audit-and-update-with-deployment-1f73
            </div>

            {/* Feature Visual */}
            <div className="flex justify-center">
              <div className={`w-80 h-80 bg-gradient-to-br ${features[currentFeature].color} rounded-2xl flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                {React.createElement(features[currentFeature].icon, { className: "w-32 h-32 text-white/90 relative z-10" })}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 mb-16">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Why Choose Us?</h3>
<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.id} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{benefit.title}</h4>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
>>>>>>> cursor/website-audit-and-update-with-deployment-1f73
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Demo Section */}
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">Try Our Solutions</h3>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Experience the power of our AI and IT solutions with interactive demos and live examples.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Brain className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">AI Demo</h4>
              <p className="text-gray-300 text-sm mb-4">See AI in action with our interactive demos</p>
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Try Demo
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Cloud className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Cloud Trial</h4>
              <p className="text-gray-300 text-sm mb-4">Test our cloud solutions with a free trial</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Start Trial
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Security Scan</h4>
              <p className="text-gray-300 text-sm mb-4">Get a free security assessment</p>
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Scan Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;