'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Zap, Settings, CheckCircle, ArrowRight, Phone, Mail, Brain, Target, Clock, BarChart } from 'lucide-react';

const ProcessAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Automate repetitive tasks and complex workflows to increase efficiency and reduce errors'
    },
    {
      icon: Brain,
      title: 'AI-Powered Automation',
      description: 'Intelligent automation that learns and adapts to optimize your business processes'
    },
    {
      icon: Settings,
      title: 'Custom Solutions',
      description: 'Tailored automation solutions designed specifically for your business needs'
    },
    {
      icon: Clock,
      title: '24/7 Operations',
      description: 'Round-the-clock automated processes that work without human intervention'
    }
  ];

  const automationTypes = [
    'Document Processing & Management',
    'Email Marketing Automation',
    'Customer Onboarding Workflows',
    'Invoice Processing & Payment',
    'Inventory Management',
    'HR & Payroll Automation',
    'Data Entry & Validation',
    'Report Generation & Distribution'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Process Automation | Zion Tech Group</title>
        <meta name="description" content="Advanced process automation services by Zion Tech Group. Streamline your business operations with AI-powered workflow automation and intelligent process optimization." />
        <meta name="keywords" content="process automation, workflow automation, business process automation, AI automation, workflow optimization, Zion Tech Group" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 pt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                Process
              </span>
              <br />
              <span className="text-white">Automation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Streamline your business operations with our advanced process automation solutions. 
              AI-powered workflows that work 24/7 to optimize your business processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-teal-700 transition-all duration-300 flex items-center">
                Automate Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Process Automation?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our automation solutions deliver maximum efficiency with intelligent workflow optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Automation Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive automation across all your business processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {automationTypes.map((type, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProcessAutomationPage;
