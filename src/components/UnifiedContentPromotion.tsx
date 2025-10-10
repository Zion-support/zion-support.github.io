import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Zap, Shield, Brain, Mic } from 'lucide-react';

const UnifiedContentPromotion: React.FC = () => {
  const services = [
    {
      title: "AI Project Manager Pro",
      description: "Intelligent project planning with predictive analytics and automated resource allocation",
      price: "$299/mo",
      features: ["Predictive Analytics", "Resource Optimization", "Risk Assessment", "Team Collaboration"],
      icon: Brain,
      category: "Productivity AI",
      link: "/ai-project-manager",
      benefits: "40% faster project delivery, 60% better resource utilization, 85% accuracy in deadline predictions"
    },
    {
      title: "AI Smart Calendar Pro",
      description: "AI-powered calendar management with intelligent scheduling and meeting optimization",
      price: "$149/mo",
      features: ["Smart Scheduling", "Meeting Optimization", "Conflict Resolution", "Time Blocking"],
      icon: Zap,
      category: "Productivity AI",
      link: "/ai-smart-calendar",
      benefits: "50% reduction in scheduling conflicts, 30% more productive meetings, 25% time saved"
    },
    {
      title: "AI Quantum Financial Oracle",
      description: "Quantum-powered financial predictions and market analysis with unprecedented accuracy",
      price: "$2,999/mo",
      features: ["Quantum Computing", "Market Analysis", "Risk Assessment", "Portfolio Optimization"],
      icon: Shield,
      category: "Financial AI",
      link: "/ai-quantum-financial-oracle",
      benefits: "95% prediction accuracy, 300% ROI improvement, real-time market insights"
    },
    {
      title: "AI Voice Cloning Studio Pro",
      description: "Create perfect voice clones with AI-powered technology for content and applications",
      price: "$199/mo",
      features: ["Voice Cloning", "Multi-language Support", "Real-time Generation", "Enterprise Security"],
      icon: Mic,
      category: "Creative AI",
      link: "/ai-voice-cloning-studio",
      benefits: "99% voice accuracy, 10x faster content creation, enterprise-grade security"
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              AI-Powered
            </span>
            <br />
            <span className="text-white">Enterprise Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your business with cutting-edge AI technology. Achieve 300% ROI, 
            70% cost reduction, and 90% efficiency gains with our advanced AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/consultation"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Free Consultation
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-500 p-3 rounded-lg mr-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                    <span className="text-sm text-cyan-400">{service.category}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                  <span className="text-gray-400 text-sm ml-1">/month</span>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <Star className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mb-4">
                  <p className="text-xs text-cyan-300 font-medium">Key Benefits:</p>
                  <p className="text-xs text-gray-400 mt-1">{service.benefits}</p>
                </div>

                <Link
                  to={service.link}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 text-center block"
                >
                  Learn More
                </Link>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">300%</div>
              <div className="text-gray-300">Average ROI</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">70%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">90%</div>
              <div className="text-gray-300">Efficiency Gains</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-gray-300">AI Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnifiedContentPromotion;