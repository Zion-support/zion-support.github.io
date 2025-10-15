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
      name: "Zion AI Analytics Pro",
      description: "Comprehensive analytics platform with AI-powered insights and reporting",
      price: "From $149/month",
      icon: <BarChart3 className="w-8 h-8" />,
      link: "/zion-ai-analytics-pro",
      featured: true
    },
    {
      name: "Zion AI Content Generator",
      description: "AI-powered content creation with multiple templates and customization options",
      price: "From $79/month",
      icon: <Zap className="w-8 h-8" />,
      link: "/zion-ai-content-generator",
      featured: false
    },
    {
      name: "Zion AI Customer Support",
      description: "Intelligent customer support chatbot with 24/7 availability",
      price: "From $129/month",
      icon: <Users className="w-8 h-8" />,
      link: "/zion-ai-customer-support",
      featured: false
    },
    {
      name: "Zion AI Cloud Manager",
      description: "Cloud infrastructure management with AI optimization",
      price: "From $199/month",
      icon: <Cloud className="w-8 h-8" />,
      link: "/zion-ai-cloud-manager",
      featured: false
    }
  ];

  const features = [
    "AI-powered automation",
    "Real-time analytics",
    "Scalable infrastructure",
    "24/7 support",
    "Easy integration",
    "Custom solutions"
  ];

  const benefits = [
    "Reduce operational costs by up to 60%",
    "Increase productivity by 3x",
    "Automate repetitive tasks",
    "Get insights from your data",
    "Scale with your business",
    "Stay ahead of competition"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO 
        title="Micro SaaS Solutions - Zion Tech Group"
        description="Revolutionary micro SaaS solutions powered by AI. Boost productivity, automate processes, and scale your business."
        keywords="micro saas, ai solutions, business automation, productivity tools"
      />
      
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Micro SaaS Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Revolutionary micro SaaS solutions powered by AI. Boost productivity, automate processes, 
            and scale your business with our cutting-edge tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300">
              View All Solutions
            </button>
          </div>
        </div>

        {/* Featured Solutions */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Featured Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.filter(solution => solution.featured).map((solution, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 transition-all duration-500 hover:bg-white/20 hover:scale-105"
              >
                <div className="text-blue-400 mb-4">
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {solution.name}
                </h3>
                <p className="text-gray-300 mb-6">
                  {solution.description}
                </p>
                <div className="text-blue-400 font-bold text-lg mb-6">
                  {solution.price}
                </div>
                <Link 
                  to={solution.link}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* All Solutions */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            All Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 transition-all duration-500 hover:bg-white/10 hover:scale-105"
              >
                <div className="text-blue-400 mb-4">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {solution.name}
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  {solution.description}
                </p>
                <div className="text-blue-400 font-bold mb-4">
                  {solution.price}
                </div>
                <Link 
                  to={solution.link}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300 text-sm"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-12 mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Why Choose Our Micro SaaS Solutions?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Transform Your Business
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <Star className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-300 text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using our micro SaaS solutions to automate, 
            optimize, and scale their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-white/30 text-white hover:bg-white/10 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSaasSolutionsPage;