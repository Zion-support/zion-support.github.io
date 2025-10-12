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