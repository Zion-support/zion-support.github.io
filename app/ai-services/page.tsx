import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  Cloud, 
  Database, 
  Smartphone,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const AiServicesPage: React.FC = () => {
  const aiServices = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Analytics Dashboard Pro",
      description: "Advanced analytics platform with AI-powered insights and real-time data visualization.",
      href: "/ai-analytics-dashboard-pro",
      features: ["Real-time Analytics", "Predictive Insights", "Custom Dashboards", "Data Integration"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI Content Generation Pro",
      description: "Automated content creation using cutting-edge AI models for marketing, blogs, and documentation.",
      href: "/ai-content-generation-pro",
      features: ["Content Automation", "Multi-language Support", "SEO Optimization", "Brand Consistency"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "AI Automation Suite",
      description: "Comprehensive automation solutions that streamline business processes and increase efficiency.",
      href: "/ai-automation-suite",
      features: ["Process Automation", "Workflow Optimization", "Error Reduction", "Cost Savings"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "AI Business Intelligence Pro",
      description: "Intelligent business intelligence platform with AI-driven insights and reporting capabilities.",
      href: "/ai-business-intelligence-pro",
      features: ["Smart Reporting", "Trend Analysis", "Performance Metrics", "Decision Support"]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "AI Code Assistant Pro",
      description: "AI-powered coding assistant that helps developers write better code faster and more efficiently.",
      href: "/ai-code-assistant-pro",
      features: ["Code Generation", "Bug Detection", "Code Review", "Documentation"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "AI Chatbot Enterprise",
      description: "Enterprise-grade AI chatbot solutions for customer service, support, and engagement.",
      href: "/ai-chatbot-enterprise",
      features: ["Natural Language Processing", "Multi-channel Support", "Integration APIs", "Analytics"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including analytics, content generation, automation, business intelligence, code assistance, and chatbot solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, automation, analytics, chatbot, content generation" />
        <meta property="og:title" content="AI Services - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with our comprehensive AI solutions." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your business with cutting-edge artificial intelligence solutions. 
                From analytics to automation, we provide comprehensive AI services that drive innovation and growth.
              </p>
            </div>
          </div>
        </section>

        {/* AI Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our AI Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI services designed to accelerate your business transformation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-900/50 border border-purple-500/30 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to={service.href}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Harness the Power of AI?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our AI solutions can transform your business and drive innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </Link>
                <Link 
                  to="/demo"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiServicesPage;
