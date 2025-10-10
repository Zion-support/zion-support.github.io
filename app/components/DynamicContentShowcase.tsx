'use client';
import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  BarChart, 
  Users, 
  ArrowRight, 
  Play, 
  Code, 
  Database,
  Smartphone,
  Globe,
  Lock,
  TrendingUp
} from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const showcaseItems = [
    {
      id: 1,
      title: 'AI-Powered Analytics Dashboard',
      description: 'Real-time business intelligence with predictive insights and automated reporting',
      icon: BarChart,
      color: 'from-cyan-500 to-blue-600',
      features: ['Real-time data visualization', 'Predictive analytics', 'Automated insights', 'Custom dashboards'],
      image: '📊',
      category: 'AI Analytics'
    },
    {
      id: 2,
      title: 'Intelligent Cloud Management',
      description: 'AI-optimized cloud infrastructure with automated scaling and cost optimization',
      icon: Cloud,
      color: 'from-purple-500 to-pink-600',
      features: ['Auto-scaling', 'Cost optimization', 'Performance monitoring', 'Security automation'],
      image: '☁️',
      category: 'Cloud Infrastructure'
    },
    {
      id: 3,
      title: 'Advanced Cybersecurity Suite',
      description: 'AI-driven threat detection and automated response for enterprise security',
      icon: Shield,
      color: 'from-green-500 to-teal-600',
      features: ['Threat detection', 'Automated response', 'Compliance monitoring', 'Risk assessment'],
      image: '🔒',
      category: 'Cybersecurity'
    },
    {
      id: 4,
      title: 'Smart Automation Platform',
      description: 'Intelligent workflow automation with AI decision-making capabilities',
      icon: Zap,
      color: 'from-orange-500 to-red-600',
      features: ['Workflow automation', 'AI decision making', 'Process optimization', 'Integration management'],
      image: '⚡',
      category: 'Process Automation'
    }
  ];

  const technologies = [
    { name: 'Machine Learning', icon: Brain, color: 'text-cyan-400' },
    { name: 'Cloud Computing', icon: Cloud, color: 'text-blue-400' },
    { name: 'Cybersecurity', icon: Shield, color: 'text-green-400' },
    { name: 'Data Analytics', icon: BarChart, color: 'text-purple-400' },
    { name: 'API Integration', icon: Code, color: 'text-orange-400' },
    { name: 'Mobile Development', icon: Smartphone, color: 'text-pink-400' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % showcaseItems.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [showcaseItems.length]);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6 neon-text">
            Dynamic Technology Showcase
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our cutting-edge AI and IT solutions in action. See how our technology transforms businesses.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {showcaseItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                activeTab === index
                  ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400'
                  : 'border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10'
              }`}
            >
              {item.category}
            </button>
          ))}
        </div>

        {/* Content Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="quantum-card p-8">
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${showcaseItems[activeTab].color} rounded-xl flex items-center justify-center mr-6`}>
                  <showcaseItems[activeTab].icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {showcaseItems[activeTab].title}
                  </h3>
                  <p className="text-cyan-400 font-semibold">
                    {showcaseItems[activeTab].category}
                  </p>
                </div>
              </div>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {showcaseItems[activeTab].description}
              </p>

              <ul className="space-y-4 mb-8">
                {showcaseItems[activeTab].features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-4 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex space-x-4">
                <a
                  href="/contact"
                  className="cyber-button flex items-center space-x-2"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <button className="border border-cyan-500 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Visual */}
          <div className="relative">
            <div className="holographic-stream p-12 text-center">
              <div className="text-8xl mb-8 cyber-scan-line">
                {showcaseItems[activeTab].image}
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl font-bold text-white mb-4">
                  Key Technologies
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {technologies.map((tech, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <tech.icon className={`w-6 h-6 ${tech.color}`} />
                      <span className="text-gray-300">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400/20 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-green-400/20 rounded-full animate-pulse delay-500"></div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2 neon-text">500+</div>
            <div className="text-gray-300">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2 neon-text">50+</div>
            <div className="text-gray-300">Enterprise Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2 neon-text">99.9%</div>
            <div className="text-gray-300">Uptime SLA</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2 neon-text">24/7</div>
            <div className="text-gray-300">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicContentShowcase;