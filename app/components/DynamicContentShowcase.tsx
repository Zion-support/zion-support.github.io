'use client';
import React, { useState, useEffect } from 'react';
import { Cloud, Zap, Shield, Globe, Brain } from 'lucide-react';

const DynamicContentShowcase = () => {
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      id: 1,
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence solutions for modern businesses.',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
    },
    {
      id: 2,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions that grow with your business needs.',
      icon: Cloud,
      color: 'from-green-500 to-blue-600',
    },
    {
      id: 3,
      title: 'AI Automation',
      description: 'Automate complex business processes with intelligent AI systems.',
      icon: Zap,
      color: 'from-yellow-500 to-orange-600',
    },
    {
      id: 4,
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with comprehensive AI-powered security solutions.',
      icon: Shield,
      color: 'from-red-500 to-pink-600',
    },
    {
      id: 5,
      icon: Globe,
      title: 'Global Scalability',
      description: 'Scale effortlessly across multiple regions with automatic load balancing',
      color: 'from-blue-500 to-cyan-600',
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
      rating: 5,
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      role: 'CEO',
      content: 'The performance improvements we\'ve seen are remarkable. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      company: 'CloudFirst Solutions',
      role: 'VP Engineering',
      content: 'Outstanding security features and seamless integration. Perfect for our needs.',
      rating: 5,
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [features.length]);

  return (
    <div className="py-16 px-4"></div>
      <div className="max-w-7xl mx-auto"></div>
        {/* Header */}
        <div className="text-center mb-16"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"></h2>
            Dynamic <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
            Experience the power of our AI and IT solutions through interactive demonstrations and real-world applications.
          </p>
        </div>

        {/* Features Section */}
        <div className="mb-16"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"></div>
            {/* Feature Content */}
            <div className="space-y-6"></div>
              <h3 className="text-3xl font-bold text-white"></h3>
                {features[currentFeature].title}
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed"></p>
                {features[currentFeature].description}
              </p>
              <div className="flex space-x-4"></div>
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() =></button> setCurrentFeature(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentFeature ? 'bg-blue-400' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Feature Visual */}
            <div className="flex justify-center"></div>
              <div className={`w-80 h-80 bg-gradient-to-br ${features[currentFeature].color} rounded-2xl flex items-center justify-center relative overflow-hidden`}></div>
                <div className="absolute inset-0 bg-black/20"></div></div>
                {React.createElement(features[currentFeature].icon, { className: "w-32 h-32 text-white/90 relative z-10",})}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div></div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 mb-16"></div>
          <h3 className="text-2xl font-bold text-white mb-6 text-center"></h3>Why Choose Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"></div>
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div></div>
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Demo Section */}
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-8 md:p-12"></div>
          <div className="text-center mb-8"></div>
            <h3 className="text-3xl font-bold text-white mb-4"></h3>Try Our Solutions</h3>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto"></p>
              Experience the power of our AI and IT solutions with interactive demos and live examples.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6"></div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"></div>
              <Brain className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-white mb-2"></h4>AI Demo</h4>
              <p className="text-gray-300 text-sm mb-4"></p>See AI in action with our interactive demos</p>
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"></button>
                Try Demo
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"></div>
              <Cloud className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-white mb-2"></h4>Cloud Trial</h4>
              <p className="text-gray-300 text-sm mb-4"></p>Test our cloud solutions with a free trial</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"></button>
                Start Trial
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"></div>
              <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-white mb-2"></h4>Security Scan</h4>
              <p className="text-gray-300 text-sm mb-4"></p>Get a free security assessment</p>
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"></button>
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