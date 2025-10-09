'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Users, TrendingUp, Clock, Shield, Zap, Settings, Phone } from 'lucide-react';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIAutomationPage: React.FC = () => {
  const automationServices = [
    {
      icon: Zap,
      title: 'Workflow Optimization',
      description: 'AI-powered workflow analysis and optimization for maximum productivity',
      benefits: ['60% time savings', 'Smart routing', 'Dynamic optimization']
    },
    {
      icon: Shield,
      title: 'Decision Trees',
      description: 'Advanced decision-making algorithms for complex business scenarios',
      benefits: ['Consistent decisions', 'Risk mitigation', 'Compliance assurance']
    },
    {
      icon: Settings,
      title: 'Process Automation',
      description: 'End-to-end automation of repetitive tasks and business processes',
      benefits: ['Error reduction', 'Cost savings', 'Scalable operations']
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Machine learning models for forecasting and trend analysis',
      benefits: ['Data-driven insights', 'Proactive planning', 'Competitive advantage']
    },
    {
      icon: Users,
      title: 'Customer Service AI',
      description: 'Intelligent chatbots and virtual assistants for enhanced customer experience',
      benefits: ['24/7 availability', 'Instant responses', 'Personalized interactions']
    },
    {
      icon: Clock,
      title: 'Smart Scheduling',
      description: 'AI-powered scheduling and resource allocation optimization',
      benefits: ['Optimal utilization', 'Conflict prevention', 'Efficiency gains']
    }
  ];

  const stats = [
    { label: 'Processes Automated', value: '500+' },
    { label: 'Time Saved', value: '40%' },
    { label: 'Cost Reduction', value: '35%' },
    { label: 'Client Satisfaction', value: '98%' }
  ];

  return (
    <>
      <Helmet>
        <title>AI Automation Solutions - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our AI automation solutions. Streamline processes, reduce costs, and boost productivity with intelligent automation." />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Automation Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with intelligent automation. Our AI-powered solutions streamline processes, 
              reduce costs, and boost productivity across all departments.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our Automation Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {automationServices.map((service, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our AI experts help you identify automation opportunities and implement 
              solutions that deliver real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Get Free Consultation
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default AIAutomationPage;