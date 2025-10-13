import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Zap, Shield, Globe, BarChart3, Users } from 'lucide-react';

export default function AIServicesPage() {
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Analytics",
      description: "Transform your data into actionable insights with our advanced AI analytics solutions.",
      link: "/ai-analytics"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI Automation",
      description: "Automate your business processes with intelligent AI-powered automation tools.",
      link: "/ai-automation"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "AI Business Intelligence",
      description: "Make data-driven decisions with our comprehensive AI business intelligence platform.",
      link: "/ai-business-intelligence"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "AI Content Generation",
      description: "Create high-quality content at scale with our AI-powered content generation tools.",
      link: "/ai-content-generation"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "AI Customer Service",
      description: "Enhance customer experience with intelligent AI-powered customer service solutions.",
      link: "/ai-customer-service"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "AI Fraud Detection",
      description: "Protect your business with advanced AI-powered fraud detection and prevention systems.",
      link: "/ai-fraud-detection"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services by Zion Tech Group. Transform your business with cutting-edge artificial intelligence solutions." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">AI Services</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with our comprehensive suite of AI services. 
            From machine learning to natural language processing, we provide cutting-edge solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                <span className="mr-2">Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-gray-300 mb-6">
              Contact our AI experts to discuss how our services can benefit your organization.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}