import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Zap, Brain, Cpu, Target, TrendingUp, Users, Award, Globe, Shield, Rocket } from 'lucide-react';

export default function UltimateContentShowcase2026() {
  const contentItems = [
    {
      title: "AI 2025 Ultimate Content Revolution",
      description: "Experience the most advanced AI-powered content ecosystem ever created with 10,000%+ ROI.",
      href: "/ai-2025-ultimate-content-revolution",
      category: "Content Revolution",
      icon: <Zap className="w-6 h-6" />,
      stats: "10,000%+ ROI",
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "AI 2026 Future Predictions Revolutionary",
      description: "Discover revolutionary AI predictions that will reshape industries and change everything.",
      href: "/ai-2026-future-predictions-revolutionary",
      category: "Future Predictions",
      icon: <Brain className="w-6 h-6" />,
      stats: "50,000% ROI",
      color: "from-cyan-400 to-blue-500"
    },
    {
      title: "Quantum-Neural Fusion 2026",
      description: "The first successful integration of quantum computing with neural networks.",
      href: "/ai-2026-quantum-neural-fusion",
      category: "Quantum Computing",
      icon: <Cpu className="w-6 h-6" />,
      stats: "1000x Speed",
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Neural Interface Revolution",
      description: "Revolutionary brain-computer interfaces that will transform human-AI interaction.",
      href: "/ai-2026-neural-interface-revolution",
      category: "Neural Interfaces",
      icon: <Target className="w-6 h-6" />,
      stats: "99.99% Accuracy",
      color: "from-green-400 to-teal-500"
    },
    {
      title: "Autonomous Business Systems",
      description: "Fully autonomous business operations with zero human intervention required.",
      href: "/ai-2025-autonomous-operations-showcase",
      category: "Automation",
      icon: <Rocket className="w-6 h-6" />,
      stats: "100% Automation",
      color: "from-red-400 to-orange-500"
    },
    {
      title: "Global AI Transformation",
      description: "Worldwide AI network connecting all devices and systems for unprecedented coordination.",
      href: "/ai-2026-global-transformation",
      category: "Global Impact",
      icon: <Globe className="w-6 h-6" />,
      stats: "1B+ Users",
      color: "from-indigo-400 to-purple-500"
    }
  ];

  return (
    <div className="py-20 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-sm mb-6">
            <Star className="w-4 h-4 mr-2" />
            ULTIMATE CONTENT SHOWCASE 2026
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Revolutionary Content
            <span className="block bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              That Changes Everything
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Explore our comprehensive collection of revolutionary AI content, breakthrough technologies, 
            and transformative solutions that are reshaping the future of business and technology.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {contentItems.map((item, index) => (
            <div key={index} className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              {/* Category badge */}
              <div className="absolute -top-3 left-6">
                <span className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-700 text-white text-xs font-bold rounded-full">
                  {item.category}
                </span>
              </div>
              
              {/* Icon */}
              <div className={`text-${item.color.split('-')[1]}-400 mb-4`}>
                {item.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                {item.title}
              </h3>
              
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                {item.description}
              </p>
              
              {/* Stats */}
              <div className="flex items-center justify-between mb-6">
                <div className={`text-${item.color.split('-')[1]}-400 font-bold text-lg`}>
                  {item.stats}
                </div>
                <div className="flex items-center text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              
              {/* CTA */}
              <Link 
                href={item.href}
                className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${item.color} text-black font-bold rounded-full hover:scale-105 transition-transform duration-300 w-full justify-center`}
              >
                Explore Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* Featured Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            { icon: <TrendingUp className="w-8 h-8" />, metric: "10,000%+", label: "Average ROI" },
            { icon: <Users className="w-8 h-8" />, metric: "1M+", label: "Active Users" },
            { icon: <Award className="w-8 h-8" />, metric: "99.9%", label: "Success Rate" },
            { icon: <Globe className="w-8 h-8" />, metric: "150+", label: "Countries" }
          ].map((stat, index) => (
            <div key={index} className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="text-yellow-400 mb-4 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-white mb-2">{stat.metric}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-yellow-400/10 to-orange-500/10 backdrop-blur-lg rounded-2xl p-12 border border-yellow-400/30">
          <h3 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already experiencing revolutionary results with our AI solutions. 
            Start your transformation journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-lg rounded-full hover:scale-105 transition-transform duration-300"
            >
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/ai-2025-ultimate-breakthrough"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-black transition-colors duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}