'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Brain, Zap, Shield, BarChart3, Globe, Cpu } from 'lucide-react';

const AIServicesPage = () => {
  const aiServices = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Machine Learning Solutions",
      description: "Build intelligent systems that learn and adapt to your business needs with our advanced ML algorithms.",
      features: ["Predictive Analytics", "Pattern Recognition", "Automated Decision Making", "Real-time Learning"],
      link: "/ai-analytics"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Natural Language Processing",
      description: "Transform text and speech data into actionable insights with our cutting-edge NLP technologies.",
      features: ["Text Analysis", "Sentiment Analysis", "Language Translation", "Chatbot Development"],
      link: "/ai-nlp"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Computer Vision",
      description: "Enable machines to see and understand visual information with our advanced computer vision solutions.",
      features: ["Image Recognition", "Object Detection", "Facial Recognition", "Video Analysis"],
      link: "/ai-vision"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data Analytics & BI",
      description: "Unlock insights from your data with AI-powered analytics and business intelligence solutions.",
      features: ["Data Visualization", "Predictive Modeling", "Automated Reporting", "Real-time Dashboards"],
      link: "/ai-data-analytics"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "AI Security Solutions",
      description: "Protect your systems with AI-powered security solutions that detect and prevent threats in real-time.",
      features: ["Threat Detection", "Anomaly Detection", "Fraud Prevention", "Security Automation"],
      link: "/ai-cybersecurity"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "AI Automation",
      description: "Streamline your business processes with intelligent automation solutions that work 24/7.",
      features: ["Process Automation", "Workflow Optimization", "Task Automation", "Smart Scheduling"],
      link: "/ai-automation"
    }
  ];

  const benefits = [
    {
      title: "Increased Efficiency",
      description: "Automate repetitive tasks and processes to focus on strategic initiatives."
    },
    {
      title: "Better Decision Making",
      description: "Leverage data-driven insights to make informed business decisions."
    },
    {
      title: "Cost Reduction",
      description: "Reduce operational costs through intelligent automation and optimization."
    },
    {
      title: "Competitive Advantage",
      description: "Stay ahead of the competition with cutting-edge AI technologies."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive AI services including machine learning, NLP, computer vision, and automation solutions." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your business with cutting-edge artificial intelligence solutions. 
            From machine learning to automation, we help you harness the power of AI.
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium">
            <Brain className="w-4 h-4 mr-2" />
            Powered by Advanced AI
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {aiServices.map((service, index) => (
            <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to={service.link}
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm group-hover:gap-2 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Our AI Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl p-8 border border-white/20 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Implement AI in Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our AI experts help you identify opportunities and implement solutions 
            that drive real business value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Get AI Consultation
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
            >
              View AI Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIServicesPage;