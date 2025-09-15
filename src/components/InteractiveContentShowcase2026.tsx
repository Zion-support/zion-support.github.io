<<<<<<< HEAD
=======
"use client";
import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import Link from 'next/link';
import { 
  ArrowRight
  Play
  Star
  TrendingUp
  Users
  Zap,
  Brain,
  Rocket,
  Target,
  Shield,
  Globe,
  Code,
  Database,
  Network,
  Cloud
} from 'lucide-react';
=======
>>>>>>> cursor/create-and-deploy-new-content-45eb

const InteractiveContentShowcase2026 = () => {
  const [activeTabsetActiveTab] = useState(0);
  const [isVisiblesetIsVisible] = useState(false);

  const contentCategories = [
    {
      title: 'AI Innovations',
      description: 'Revolutionary breakthroughs in artificial intelligence',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
      content: [
        {
          title: 'Quantum-Neural Fusion Computing',
          description: 'Revolutionary quantum-classical hybrid systems delivering 10,000x processing speed improvements',
          image: '🧠',
          stats: '10,000x Faster',
          link: '/ai-innovation-showcase-2026'
        },
        {
          title: 'Autonomous Business Operations',
          description: 'Self-managing AI systems that handle complex business processes without human intervention',
          image: '🤖',
          stats: '24/7 Operations',
          link: '/ai-innovation-showcase-2026'
        },
        {
          title: 'Neural Interface Technology',
          description: 'Direct brain-computer interfaces enabling seamless human-AI collaboration',
          image: '🧬',
          stats: '98.7% Accuracy',
          link: '/ai-innovation-showcase-2026'
        }
      ]
    },
    {
      title: 'AI Tools Suite',
      description: 'Comprehensive collection of AI-powered tools and platforms',
      icon: Code,
      color: 'from-purple-500 to-pink-500',
      content: [
        {
          title: 'Quantum Computing Suite',
          description: 'Revolutionary quantum-classical hybrid computing tools',
          image: '⚡',
          stats: '60+ Tools',
          link: '/ai-tools-comprehensive-showcase-2026'
        },
        {
          title: 'Autonomous Operations Platform',
          description: 'Self-managing AI systems for complete business automation',
          image: '🚀',
          stats: '85% Cost Reduction',
          link: '/ai-tools-comprehensive-showcase-2026'
        },
        {
          title: 'Neural Interface Toolkit',
          description: 'Direct brain-computer interface development tools',
          image: '🔗',
          stats: '300% Improvement',
          link: '/ai-tools-comprehensive-showcase-2026'
        }
      ]
    },
    {
      title: 'Success Stories',
      description: 'Real-world implementations and transformative results',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      content: [
        {
          title: 'TechCorp Transformation',
          description: 'Quantum-neural fusion system revolutionized data processing capabilities',
          image: '🏢',
          stats: '10,000x Speed',
          link: '/case-studies'
        },
        {
          title: 'InnovateLabs Success',
          description: 'Autonomous operations reduced costs by 85% while increasing efficiency by 400%',
          image: '🔬',
          stats: '85% Cost Reduction',
          link: '/case-studies'
        },
        {
          title: 'QuantumTech Breakthrough',
          description: 'Neural interface technology opened up transformative possibilities',
          image: '🔮',
          stats: '98.7% Accuracy',
          link: '/case-studies'
        }
      ]
    }
  ];

  const features = [
    {
      title: 'Interactive Demos',
      description: 'Try our AI tools in real-time',
      icon: Play,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Live Analytics',
      description: 'Real-time performance metrics',
      icon: BarChart3,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Community Access',
      description: 'Join 50,000+ AI practitioners',
      icon: Users,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Expert Support',
      description: '24/7 technical assistance',
      icon: Shield,
      color: 'from-orange-500 to-red-500'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }[]);

  const currentCategory = contentCategories[activeTab];

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="h-6 w-6 text-yellow-400" />
            <span className="text-sm font-semibold text-yellow-400 uppercase tracking-wide">
              Interactive Content Showcase 2026
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Explore the Future of
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              AI Technology
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover revolutionary AI innovationscomprehensive tool suitesand real-world success stories. 
            Interact with cutting-edge technology and see the future of business transformation.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {contentCategories.map((categoryindex) => {
            const IconComponent = category.icon;
            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                }`}
              >
                <IconComponent className="h-5 w-5" />
                {category.title}
              </button>
            );
          })}
        </div>

        {/* Content Display */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">{currentCategory.title}</h3>
            <p className="text-gray-300">{currentCategory.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentCategory.content.map((itemindex) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {item.image}
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">{item.title}</h4>
                <p className="text-gray-300 mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-green-400">{item.stats}</div>
                  <Link
                    href={item.link}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold text-sm group-hover:translate-x-1 transition-transform"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
<<<<<<< HEAD

        {/* Features Grid */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Interactive Features</h3>
            <p className="text-xl text-gray-300">Experience AI technology like never before</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((featureindex) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full mb-4`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Experience the Future?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of innovators already transforming their businesses with AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/ai-innovation-showcase-2026"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
              >
                Explore Innovations
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/ai-tools-comprehensive-showcase-2026"
                className="inline-flex items-center px-8 py-3 border border-white/30 text-base font-medium rounded-md text-white hover:bg-white/10 transition-all duration-200"
              >
                Browse Tools
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 border border-white/30 text-base font-medium rounded-md text-white hover:bg-white/10 transition-all duration-200"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
=======
>>>>>>> cursor/create-and-deploy-new-content-45eb
>>>>>>> origin/cursor/create-and-deploy-new-content-7e3a
      </div>
    </div>
  );
};

export default InteractiveContentShowcase2026;