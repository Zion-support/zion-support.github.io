import React from 'react';
import SEOHead from '../components/SEOHead';
import { Brain, Bot, Database, BarChart3, Shield, Zap, Target, Users } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Machine Learning Solutions",
      description: "Custom ML models for predictive analytics, pattern recognition, and intelligent automation.",
      features: ["Predictive Analytics", "Pattern Recognition", "Model Training", "Performance Optimization"],
      price: "From $2,999",
      popular: true
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Chatbots & Virtual Assistants",
      description: "Intelligent conversational AI that understands context and provides human-like interactions.",
      features: ["Natural Language Processing", "Context Awareness", "Multi-platform Integration", "24/7 Availability"],
      price: "From $1,999",
      popular: false
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Intelligence",
      description: "Transform raw data into actionable insights with advanced AI-powered analytics.",
      features: ["Data Mining", "Predictive Modeling", "Real-time Analytics", "Custom Dashboards"],
      price: "From $3,999",
      popular: true
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "AI-Powered Analytics",
      description: "Advanced analytics solutions that learn and adapt to your business needs.",
      features: ["Automated Reporting", "Trend Analysis", "Anomaly Detection", "Business Intelligence"],
      price: "From $2,499",
      popular: false
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "AI Security Solutions",
      description: "Protect your systems with AI-powered threat detection and prevention.",
      features: ["Threat Detection", "Fraud Prevention", "Security Monitoring", "Incident Response"],
      price: "From $4,999",
      popular: false
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Process Automation",
      description: "Streamline operations with intelligent automation that reduces manual work.",
      features: ["Workflow Automation", "Document Processing", "Task Optimization", "ROI Tracking"],
      price: "From $1,499",
      popular: true
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Custom Solutions",
      description: "Tailored AI solutions designed specifically for your business needs and objectives."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "Work with experienced AI specialists and data scientists who understand your industry."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and reliability with 99.9% uptime guarantee."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Implementation",
      description: "Quick deployment and integration with your existing systems and workflows."
    }
  ];

  return (
    <>
      <SEOHead 
        title="AI Services - Zion Tech Group" 
        description="Comprehensive AI services including machine learning, chatbots, data intelligence, and process automation. Transform your business with cutting-edge AI solutions." 
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge artificial intelligence solutions. 
                From machine learning to chatbots, we deliver AI that drives real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
                <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our AI Services</h2>
              <p className="text-xl text-gray-300">Comprehensive AI solutions tailored to your business needs</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className={`bg-slate-700/50 p-8 rounded-lg hover:bg-slate-700/70 transition-colors relative ${service.popular ? 'ring-2 ring-purple-400' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-blue-400 mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-white">{service.price}</span>
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-24 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Why Choose Our AI Services?</h2>
              <p className="text-xl text-gray-300">We deliver AI solutions that make a real difference</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-24">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI services can help you achieve your goals and stay ahead of the competition.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Your AI Journey
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIServicesPage;