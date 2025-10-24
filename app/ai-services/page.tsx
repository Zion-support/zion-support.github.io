<<<<<<< HEAD
"use client";


import React from "react";
import { CheckCircle, ArrowRight, Brain, Zap, Target, BarChart } from "lucide-react";
const AIServicesPage: React.FC = () => {
  const services = [
  {
      icon: Brain,
    title: "Machine Learning Solutions",
      description: "Custom ML models tailored to your business needs",
    features: [
        "Predictive Analytics",
        "Pattern Recognition",
        "Automated Decision Making",
    "Real-time Processing"
      ],
      price: "Starting at $5,000"
},
  {
    icon: Zap,
    title: "AI Automation",
      description: "Streamline operations with intelligent automation",
    features: [
        "Process Automation",
        "Workflow Optimization",
        "Intelligent Routing",
    "Error Reduction"
      ],
      price: "Starting at $3,000"
},
  {
    icon: Target,
    title: "Natural Language Processing",
      description: "Understand and process human language at scale",
    features: [
        "Text Analysis",
        "Sentiment Analysis",
        "Language Translation",
    "Chatbot Development"
      ],
      price: "Starting at $4,000"
},
  {
    icon: BarChart,
    title: "Computer Vision",
      description: "Extract insights from images and videos",
    features: [
        "Image Recognition",
        "Object Detection",
        "Video Analysis",
    "Quality Control"
      ],
      price: "Starting at $6,000"
    }
  ]
  const process = [
    {
      step: "1",
      title: "Discovery & Analysis",
      description: "We analyze your business needs and data to understand the best AI approach."
    },
    {
      step: "2",
      title: "Solution Design",
      description: "Our team designs a custom AI solution tailored to your specific requirements."
    },
    {
      step: "3",
      title: "Development & Training",
      description: "We develop and train your AI models using the latest technologies and best practices."
    },
    {
      step: "4",
      title: "Integration & Deployment",
      description: "We integrate the solution into your existing systems and deploy it securely."
    },
    {
      step: "5",
    title: "Monitoring & Optimization",
    description: "We continuously monitor performance and optimize the solution for better results."}
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md: text-6xl font-bold text-gray-900 mb-6">
            AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">Services</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge artificial intelligence solutions designed to drive growth and efficiency.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <button className="bg-emerald-600 hover: bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-emerald-400 text-emerald-400 hover: bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">
              Our AI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive AI services to solve your most complex business challenges.
            </p>
          </div>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover: shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg mb-4">
<<<<<<< HEAD
                  {(() => {
        const IconComponent = service.icon;
        return <IconComponent className="h-6 w-6 text-white" />;
      })()}
=======
                  <IconComponent className="h-6 w-6 text-white" />
>>>>>>> cursor/fix-errors-and-merge-to-main-6d59
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-emerald-600 font-semibold mb-4">{service.price}</div>
                <button className="w-full bg-emerald-600 hover: bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                  Learn More
                </button>
              </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology for delivering successful AI solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md: grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let&apos;s discuss how our AI solutions can transform your business operations.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-emerald-600 hover: bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              Start Your AI Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/about"
              className="border border-emerald-400 text-emerald-400 hover: bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
export default AIServicesPage
=======
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Brain, Zap, Shield, Cloud, BarChart, Users, CheckCircle, ArrowRight } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      title: 'AI Analytics',
      description: 'Advanced data insights and predictive analytics powered by machine learning',
      icon: BarChart,
      features: ['Predictive Modeling', 'Real-time Analytics', 'Data Visualization', 'Custom Dashboards']
    },
    {
      title: 'AI Automation',
      description: 'Intelligent process automation to streamline your business operations',
      icon: Zap,
      features: ['Workflow Automation', 'Document Processing', 'Email Automation', 'Task Scheduling']
    },
    {
      title: 'AI Customer Support',
      description: 'AI-powered customer service solutions for enhanced user experience',
      icon: Users,
      features: ['Chatbots', 'Voice Assistants', 'Sentiment Analysis', '24/7 Support']
    },
    {
      title: 'AI Cybersecurity',
      description: 'Advanced threat detection and security solutions powered by AI',
      icon: Shield,
      features: ['Threat Detection', 'Anomaly Detection', 'Security Monitoring', 'Incident Response']
    },
    {
      title: 'AI Cloud Solutions',
      description: 'Scalable AI solutions deployed on cloud infrastructure',
      icon: Cloud,
      features: ['Cloud AI', 'Edge Computing', 'Auto-scaling', 'Global Deployment']
    },
    {
      title: 'AI Business Intelligence',
      description: 'Transform your data into actionable business insights',
      icon: Brain,
      features: ['Data Mining', 'Pattern Recognition', 'Trend Analysis', 'Strategic Planning']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered services for modern businesses. Transform your operations with our comprehensive AI solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, automation, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section>
          <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  AI Services
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Transform your business with our comprehensive AI solutions designed to drive innovation and efficiency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section>
          <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {aiServices.map((service, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg mb-6">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                      <span className="mr-2">Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <div>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Ready to Transform Your Business?
                  </h2>
                  <p className="text-xl text-purple-100 mb-8">
                    Let's discuss how our AI services can help you achieve your goals.
                  </p>
                  <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default AIServicesPage;
>>>>>>> cursor/delete-records-30ea
