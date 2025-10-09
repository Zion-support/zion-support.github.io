'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, Users, TrendingUp, Award, Clock, CheckCircle, Zap, Brain, Cloud, Shield } from 'lucide-react';

interface ShowcaseItem {
  id: number;
  title: string;
  description: string;
  category: string;
  icon: React.ReactNode;
  stats: {
    value: string;
    label: string;
  }[];
  features: string[];
  price: string;
  popular: boolean;
  color: string;
  bgColor: string;
}

const DynamicContentShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Solutions', icon: '⚡' },
    { id: 'ai', name: 'AI Services', icon: '🤖' },
    { id: 'saas', name: 'Micro SAAS', icon: '📱' },
    { id: 'it', name: 'IT Services', icon: '☁️' },
    { id: 'specialized', name: 'Specialized', icon: '🚀' }
  ];

  const showcaseItems: ShowcaseItem[] = [
    {
      id: 1,
      title: "AI Project Manager",
      description: "Intelligent project planning and management with AI-powered insights and automation",
      category: "saas",
      icon: <Brain className="w-8 h-8" />,
      stats: [
        { value: "4.9", label: "Rating" },
        { value: "1.2K", label: "Users" },
        { value: "95%", label: "Success Rate" }
      ],
      features: ["Smart Planning", "Risk Analysis", "Resource Optimization", "Progress Tracking"],
      price: "$49/month",
      popular: true,
      color: "from-blue-500 to-purple-600",
      bgColor: "bg-gradient-to-br from-blue-500/10 to-purple-600/10"
    },
    {
      id: 2,
      title: "AI Social Media Manager",
      description: "Automated social media management with content creation and scheduling",
      category: "saas",
      icon: <Zap className="w-8 h-8" />,
      stats: [
        { value: "4.8", label: "Rating" },
        { value: "2.1K", label: "Users" },
        { value: "300%", label: "ROI" }
      ],
      features: ["Content Creation", "Auto Posting", "Analytics", "Engagement Tracking"],
      price: "$79/month",
      popular: true,
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-gradient-to-br from-pink-500/10 to-rose-600/10"
    },
    {
      id: 3,
      title: "AI Analytics Dashboard",
      description: "Real-time business intelligence with AI-powered insights and predictions",
      category: "ai",
      icon: <TrendingUp className="w-8 h-8" />,
      stats: [
        { value: "4.9", label: "Rating" },
        { value: "1.8K", label: "Users" },
        { value: "50%", label: "Time Saved" }
      ],
      features: ["Real-time Data", "Predictive Analytics", "Custom Dashboards", "Automated Reports"],
      price: "$99/month",
      popular: false,
      color: "from-green-500 to-teal-600",
      bgColor: "bg-gradient-to-br from-green-500/10 to-teal-600/10"
    },
    {
      id: 4,
      title: "Cloud Migration Services",
      description: "Seamless cloud migration with AWS, Azure, and GCP. 99.9% uptime guarantee",
      category: "it",
      icon: <Cloud className="w-8 h-8" />,
      stats: [
        { value: "4.7", label: "Rating" },
        { value: "500+", label: "Projects" },
        { value: "99.9%", label: "Uptime" }
      ],
      features: ["AWS/Azure/GCP", "Migration Planning", "Cost Optimization", "Security Setup"],
      price: "$1,299/month",
      popular: false,
      color: "from-cyan-500 to-blue-600",
      bgColor: "bg-gradient-to-br from-cyan-500/10 to-blue-600/10"
    },
    {
      id: 5,
      title: "AI Cybersecurity Suite",
      description: "Real-time security monitoring with AI threat detection and automated response",
      category: "ai",
      icon: <Shield className="w-8 h-8" />,
      stats: [
        { value: "4.8", label: "Rating" },
        { value: "800+", label: "Clients" },
        { value: "99.9%", label: "Protection" }
      ],
      features: ["Threat Detection", "Automated Response", "Compliance Reporting", "24/7 Monitoring"],
      price: "$799/month",
      popular: true,
      color: "from-red-500 to-orange-600",
      bgColor: "bg-gradient-to-br from-red-500/10 to-orange-600/10"
    },
    {
      id: 6,
      title: "Quantum Computing Solutions",
      description: "Next-generation quantum algorithms and quantum security implementations",
      category: "specialized",
      icon: <Award className="w-8 h-8" />,
      stats: [
        { value: "5.0", label: "Rating" },
        { value: "50+", label: "Research" },
        { value: "10x", label: "Performance" }
      ],
      features: ["Quantum Algorithms", "Security Implementation", "Optimization Problems", "R&D Support"],
      price: "Custom",
      popular: false,
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-gradient-to-br from-purple-500/10 to-indigo-600/10"
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? showcaseItems 
    : showcaseItems.filter(item => item.category === activeCategory);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            Dynamic Content Showcase
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive suite of AI and IT solutions designed to transform your business
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`${item.bgColor} rounded-2xl p-6 cyber-card transition-all duration-300 hover:scale-105 ${
                hoveredItem === item.id ? 'shadow-2xl' : ''
              }`}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${item.color} text-white`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <span className="text-sm text-gray-400 capitalize">{item.category}</span>
                  </div>
                </div>
                {item.popular && (
                  <span className="px-2 py-1 bg-yellow-500 text-black text-xs font-bold rounded-full">
                    Popular
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {item.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {item.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {item.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                      <span className="text-xs text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-cyan-400">{item.price}</div>
                <a
                  href={`/services/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${item.color} text-white text-sm font-medium rounded-lg hover:scale-105 transition-all duration-300`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 cyber-card">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of businesses already using our AI and IT solutions to achieve unprecedented growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/services"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                View All Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;