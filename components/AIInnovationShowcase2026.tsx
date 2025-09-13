import React from 'react';
import Link from 'next/link';
import { ArrowRight, Brain, Zap, Target, TrendingUp, Users, Shield, Globe } from 'lucide-react';

const AIInnovationShowcase2026 = () => {
  const innovations = [
    {
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interfaces that enable seamless human-AI collaboration",
      icon: Brain,
      features: ["Real-time thought processing", "Enhanced cognitive abilities", "Intuitive AI interaction"],
      impact: "300% productivity increase"
    },
    {
      title: "Quantum AI Fusion",
      description: "Quantum computing meets artificial intelligence for unprecedented processing power",
      icon: Zap,
      features: ["Exponential speed improvements", "Complex problem solving", "Advanced pattern recognition"],
      impact: "1000x faster computations"
    },
    {
      title: "Autonomous Business Operations",
      description: "Self-managing business systems that adapt and optimize in real-time",
      icon: Target,
      features: ["Self-healing systems", "Predictive maintenance", "Dynamic resource allocation"],
      impact: "95% operational efficiency"
    },
    {
      title: "Synthetic Intelligence Networks",
      description: "AI systems that collaborate and learn from each other autonomously",
      icon: Globe,
      features: ["Distributed learning", "Collective intelligence", "Self-improving algorithms"],
      impact: "Exponential knowledge growth"
    }
  ];

  const stats = [
    { label: "AI Models Deployed", value: "10,000+", icon: Brain },
    { label: "Businesses Transformed", value: "5,000+", icon: Users },
    { label: "ROI Achieved", value: "300%+", icon: TrendingUp },
    { label: "Security Incidents Prevented", value: "99.9%", icon: Shield }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Innovation Showcase 2026
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover the revolutionary AI technologies that will transform your business in 2026. 
            Experience the future of artificial intelligence today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              Schedule Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/ai-solutions" 
              className="border border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Explore Solutions
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <stat.icon className="h-8 w-8 text-blue-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Innovations Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {innovations.map((innovation, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <innovation.icon className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">{innovation.title}</h3>
                  <p className="text-gray-300 mb-4">{innovation.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {innovation.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-green-600/20 border border-green-500/30 rounded-lg p-3">
                    <div className="text-green-400 font-semibold">Impact: {innovation.impact}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-12">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already transforming with our AI innovations. 
            Get started with a free consultation and see the difference AI can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/case-studies" 
              className="border border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIInnovationShowcase2026;