import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Zap, Shield, BarChart3, Cloud, Brain, Users, Globe, Settings } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const MicroSaasSolutionsPage: React.FC = () => {
  const solutions = [
    {
      name: "Zion AI Voice Assistant Pro",
      description: "Revolutionary AI voice assistant with 99.5% accuracy and multi-language support",
      price: "From $99/month",
      icon: <Brain className="w-8 h-8" />,
      link: "/zion-ai-voice-assistant-pro",
      featured: true
    },
    {
      name: "Zion AI Fraud Detection Pro",
      description: "Advanced AI fraud detection with 99.7% accuracy and real-time monitoring",
      price: "From $199/month",
      icon: <Shield className="w-8 h-8" />,
      link: "/zion-ai-fraud-detection-pro",
      featured: true
    },
    {
      name: "Zion AI Image Recognition Pro",
      description: "Cutting-edge computer vision with 99.2% object detection accuracy",
      price: "From $149/month",
      icon: <Globe className="w-8 h-8" />,
      link: "/zion-ai-image-recognition-pro",
      featured: true
    },
    {
      name: "Zion AI Predictive Maintenance",
      description: "AI-powered predictive maintenance reducing downtime by 60%",
      price: "From $299/month",
      icon: <Settings className="w-8 h-8" />,
      link: "/zion-ai-predictive-maintenance",
      featured: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Micro SAAS Solutions - Zion Tech Group"
        description="Comprehensive micro SAAS solutions for modern businesses. AI-powered tools, analytics, security, and automation solutions."
        keywords="micro SAAS, software solutions, business tools, AI solutions, automation"
        canonical="/micro-saas-solutions"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Micro SAAS Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive micro SAAS solutions designed to transform your business operations with AI-powered tools and automation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                  {solution.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {solution.name}
                  </h3>
                  <p className="text-cyan-400 font-medium">{solution.price}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {solution.description}
              </p>
              <Link
                to={solution.link}
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MicroSaasSolutionsPage;