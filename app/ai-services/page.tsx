import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Zap, Shield, Users, BarChart3, Code, MessageSquare } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const AIServices = () => {
  const aiServices = [
    {
      title: "AI Analytics",
      description: "Transform your data into actionable insights with advanced AI-powered analytics.",
      icon: BarChart3,
      link: "/ai-analytics"
    },
    {
      title: "Content Generation",
      description: "Create high-quality content at scale with our AI content generation tools.",
      icon: MessageSquare,
      link: "/ai-content-generation"
    },
    {
      title: "Customer Support",
      description: "Enhance customer experience with intelligent AI-powered support systems.",
      icon: Users,
      link: "/ai-customer-support"
    },
    {
      title: "Cybersecurity",
      description: "Protect your business with AI-driven security solutions and threat detection.",
      icon: Shield,
      link: "/ai-cybersecurity"
    },
    {
      title: "Data Analytics",
      description: "Unlock the power of your data with AI-powered analytics and insights.",
      icon: BarChart3,
      link: "/ai-data-analytics"
    },
    {
      title: "Document Processing",
      description: "Automate document processing and extraction with intelligent AI systems.",
      icon: Code,
      link: "/ai-document-processing"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Services - Zion Tech Group"
        description="Discover our comprehensive AI services including analytics, content generation, customer support, cybersecurity, and more. Transform your business with cutting-edge AI solutions."
        keywords="AI services, artificial intelligence, AI analytics, content generation, customer support, cybersecurity, data analytics, document processing"
      />
      
      {/* Hero Section */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            AI Services
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Powered by Innovation
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business with our comprehensive AI solutions. From analytics to automation, 
            we deliver cutting-edge artificial intelligence services that drive real results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/demo"
              className="border border-white/20 hover:border-white/40 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </div>

      {/* AI Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our AI Service Portfolio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI solutions designed to address every aspect of your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={index}
                to={service.link}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors">
                  <Icon className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose Our AI Services?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We deliver cutting-edge AI solutions with unmatched expertise and support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
              <Brain className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Advanced AI Technology</h3>
            <p className="text-gray-300">
              Leverage the latest AI technologies including machine learning, natural language processing, and computer vision.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-6">
              <Zap className="h-6 w-6 text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Rapid Implementation</h3>
            <p className="text-gray-300">
              Quick deployment and integration of AI solutions to accelerate your business transformation.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
              <Shield className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Secure & Compliant</h3>
            <p className="text-gray-300">
              Enterprise-grade security and compliance to protect your data and meet industry standards.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl border border-white/10 p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get started with our AI services today and experience the power of artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Contact Us
            </Link>
            <Link
              to="/demo"
              className="border border-white/20 hover:border-white/40 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIServices;