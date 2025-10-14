import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Shield, BarChart3, Zap, Users, Globe } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import Footer from '../components/Footer';

const AIServicesPage: React.FC = () => {
  const stats = [
    { icon: <Brain className="w-8 h-8 text-cyan-400" />, value: "500+", label: "AI Models Deployed" },
    { icon: <Shield className="w-8 h-8 text-cyan-400" />, value: "99.9%", label: "Security Uptime" },
    { icon: <BarChart3 className="w-8 h-8 text-cyan-400" />, value: "85%", label: "Efficiency Gain" },
    { icon: <Users className="w-8 h-8 text-cyan-400" />, value: "200+", label: "Happy Clients" }
  ];

  const services = [
    {
      title: "AI Video Generation",
      description: "Create stunning videos with AI-powered tools that understand your brand and content needs.",
      features: ["Automated video creation", "Brand-consistent styling", "Multi-language support", "Real-time rendering"],
      icon: <Zap className="w-12 h-12 text-cyan-400" />
    },
    {
      title: "Content Creation AI",
      description: "Generate high-quality content across all platforms with our advanced AI writing tools.",
      features: ["Blog posts & articles", "Social media content", "Marketing copy", "Technical documentation"],
      icon: <Brain className="w-12 h-12 text-cyan-400" />
    },
    {
      title: "AI Analytics Platform",
      description: "Get deep insights from your data with our comprehensive AI analytics solutions.",
      features: ["Predictive analytics", "Real-time dashboards", "Custom reporting", "Data visualization"],
      icon: <BarChart3 className="w-12 h-12 text-cyan-400" />
    },
    {
      title: "AI Cybersecurity",
      description: "Protect your business with AI-powered security solutions that adapt to threats.",
      features: ["Threat detection", "Automated response", "Security monitoring", "Compliance management"],
      icon: <Shield className="w-12 h-12 text-cyan-400" />
    },
    {
      title: "Workflow Automation",
      description: "Streamline your business processes with intelligent automation solutions.",
      features: ["Process optimization", "Task automation", "Integration management", "Performance tracking"],
      icon: <Globe className="w-12 h-12 text-cyan-400" />
    },
    {
      title: "AI Consulting",
      description: "Expert guidance on implementing AI solutions that drive real business value.",
      features: ["Strategy development", "Implementation planning", "Training & support", "Ongoing optimization"],
      icon: <Users className="w-12 h-12 text-cyan-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO 
        title="AI Services - Zion Tech Group | Advanced AI Solutions for Business"
        description="Discover our comprehensive AI services including video generation, content creation, analytics, cybersecurity, and workflow automation. Transform your business with cutting-edge AI technology."
        keywords="AI services, artificial intelligence, machine learning, AI automation, AI analytics, AI cybersecurity, business AI solutions"
        canonical="https://ziontechgroup.com/ai-services"
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with our comprehensive suite of AI services. 
            From content generation to cybersecurity, we provide intelligent solutions 
            that drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to accelerate your business growth and innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-6">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-white ml-4">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our AI services can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Start Your AI Journey
            </Link>
            <Link 
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIServicesPage;